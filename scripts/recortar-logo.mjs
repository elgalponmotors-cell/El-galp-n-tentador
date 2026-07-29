/**
 * Recorta el fondo negro del logo original y lo exporta a los tamaños que usa
 * el sitio. El JPEG de origen tiene la palmera y el skyline también en negro,
 * así que en vez de un umbral global hacemos flood fill desde los bordes: el
 * contorno crema del escudo corta la propagación y el interior queda intacto.
 *
 * Uso:
 *   npm install --no-save playwright && npx playwright install chromium
 *   node scripts/recortar-logo.mjs
 *
 * Genera public/logo.webp (el que se ve en el sitio) y src/app/icon.png (el
 * favicon). Los dos quedan versionados, así que el build normal no lo necesita.
 * Solo hay que correrlo si cambiás scripts/logo-original.jpeg.
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const ORIGEN = resolve(dirname(fileURLToPath(import.meta.url)), "logo-original.jpeg");
const b64 = readFileSync(ORIGEN).toString("base64");

const nav = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const p = await nav.newPage();

const res = await p.evaluate(async (dataUri) => {
  const img = new Image();
  img.src = dataUri;
  await img.decode();

  const c = document.createElement("canvas");
  c.width = img.width; c.height = img.height;
  const cx = c.getContext("2d", { willReadFrequently: true });
  cx.drawImage(img, 0, 0);
  const im = cx.getImageData(0, 0, c.width, c.height);
  const d = im.data;
  const W = c.width, H = c.height;

  const UMBRAL = 42;
  const esOscuro = (i) => d[i] < UMBRAL && d[i + 1] < UMBRAL && d[i + 2] < UMBRAL;
  const visto = new Uint8Array(W * H);
  const cola = [];
  for (let x = 0; x < W; x++) cola.push(x, (H - 1) * W + x);
  for (let y = 0; y < H; y++) cola.push(y * W, y * W + W - 1);
  while (cola.length) {
    const px = cola.pop();
    if (visto[px]) continue;
    visto[px] = 1;
    if (!esOscuro(px * 4)) continue;
    d[px * 4 + 3] = 0;
    const x = px % W, y = (px - x) / W;
    if (x > 0) cola.push(px - 1);
    if (x < W - 1) cola.push(px + 1);
    if (y > 0) cola.push(px - W);
    if (y < H - 1) cola.push(px + W);
  }
  cx.putImageData(im, 0, 0);

  let x0 = W, y0 = H, x1 = 0, y1 = 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (d[(y * W + x) * 4 + 3] > 12) {
      if (x < x0) x0 = x; if (x > x1) x1 = x;
      if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
  }
  const rw = x1 - x0 + 1, rh = y1 - y0 + 1;

  function exportar(ancho, tipo, calidad) {
    const o = document.createElement("canvas");
    o.width = ancho;
    o.height = Math.round((rh / rw) * ancho);
    const ox = o.getContext("2d");
    ox.imageSmoothingQuality = "high";
    ox.drawImage(c, x0, y0, rw, rh, 0, 0, o.width, o.height);
    return { datos: o.toDataURL(tipo, calidad).split(",")[1], w: o.width, h: o.height };
  }

  return {
    recorte: `${rw}×${rh}`,
    webp: exportar(480, "image/webp", 0.92),
    // Cuadrado y compacto, para el favicon.
    icono: (() => {
      const lado = 128;
      const o = document.createElement("canvas");
      o.width = o.height = lado;
      const ox = o.getContext("2d");
      ox.imageSmoothingQuality = "high";
      const esc = Math.min(lado / rw, lado / rh);
      const dw = rw * esc, dh = rh * esc;
      ox.drawImage(c, x0, y0, rw, rh, (lado - dw) / 2, (lado - dh) / 2, dw, dh);
      return { datos: o.toDataURL("image/png").split(",")[1], w: lado, h: lado };
    })(),
  };
}, `data:image/jpeg;base64,${b64}`);

const guardar = (ruta, b) => {
  const buf = Buffer.from(b.datos, "base64");
  writeFileSync(ruta, buf);
  console.log(`${ruta.padEnd(22)} ${b.w}×${b.h}  ${(buf.length / 1024).toFixed(0)} KB`);
};

console.log(`recorte útil: ${res.recorte}\n`);
guardar("public/logo.webp", res.webp);
guardar("src/app/icon.png", res.icono);
await nav.close();
