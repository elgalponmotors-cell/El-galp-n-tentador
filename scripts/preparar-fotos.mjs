/**
 * Prepara las fotos de la flota para el sitio: recorta a 4:3 horizontal,
 * comprime a WebP y las deja en public/flota/.
 *
 * Uso:
 *   npm install --no-save playwright && npx playwright install chromium
 *   node scripts/preparar-fotos.mjs
 *
 * Las fotos originales van en scripts/fotos-originales/. Cada entrada de
 * `FOTOS` define el archivo de origen, el nombre de salida y el `foco`: la
 * altura (0 = arriba, 1 = abajo) sobre la que se centra el recorte, porque en
 * las fotos verticales el auto casi nunca está en el medio exacto.
 *
 * No se agranda ninguna foto: cada una sale al ancho que realmente tiene, con
 * un techo de 1400 px. Una foto chica va a salir chica.
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const AQUI = dirname(fileURLToPath(import.meta.url));
const ORIGEN = resolve(AQUI, "fotos-originales");
const DESTINO = resolve(AQUI, "..", "public", "flota");

const ANCHO_MAXIMO = 1000;
const PROPORCION = 4 / 3;

const FOTOS = [
  { origen: "suv-frente.jpg", salida: "suv-frente.webp", foco: 0.62 },
  { origen: "suv-lateral.jpg", salida: "suv-lateral.webp", foco: 0.66 },
  { origen: "suv-trasera.jpg", salida: "suv-trasera.webp", foco: 0.58 },
  { origen: "suv-tres-cuartos.jpg", salida: "suv-tres-cuartos.webp", foco: 0.6 },
  { origen: "suv-interior.jpg", salida: "suv-interior.webp", foco: 0.55 },
];

mkdirSync(DESTINO, { recursive: true });

const nav = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
});
const pagina = await nav.newPage();

for (const foto of FOTOS) {
  const b64 = readFileSync(resolve(ORIGEN, foto.origen)).toString("base64");

  const res = await pagina.evaluate(
    async ({ uri, foco, proporcion, anchoMaximo }) => {
      const img = new Image();
      img.src = uri;
      await img.decode();
      // Chromium ya aplica la orientación EXIF al decodificar: las fotos de
      // celular llegan derechas y no hay que rotarlas a mano.
      const W = img.width;
      const H = img.height;

      // Recorte 4:3 lo más grande que entre, centrado en el foco vertical.
      let rw = W;
      let rh = Math.round(W / proporcion);
      if (rh > H) {
        rh = H;
        rw = Math.round(H * proporcion);
      }
      const rx = Math.round((W - rw) / 2);
      const ry = Math.min(Math.max(Math.round(H * foco - rh / 2), 0), H - rh);

      const ancho = Math.min(rw, anchoMaximo);
      const c = document.createElement("canvas");
      c.width = ancho;
      c.height = Math.round(ancho / proporcion);
      const cx = c.getContext("2d");
      cx.imageSmoothingQuality = "high";
      cx.drawImage(img, rx, ry, rw, rh, 0, 0, c.width, c.height);

      return {
        datos: c.toDataURL("image/webp", 0.82).split(",")[1],
        original: `${W}×${H}`,
        salida: `${c.width}×${c.height}`,
      };
    },
    { uri: `data:image/jpeg;base64,${b64}`, foco: foto.foco, proporcion: PROPORCION, anchoMaximo: ANCHO_MAXIMO },
  );

  const buf = Buffer.from(res.datos, "base64");
  writeFileSync(resolve(DESTINO, foto.salida), buf);
  console.log(
    `${foto.salida.padEnd(24)} ${res.original.padStart(11)} → ${res.salida.padStart(9)}  ${(buf.length / 1024).toFixed(0)} KB`,
  );
}

await nav.close();
