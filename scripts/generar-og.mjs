/**
 * Genera public/og.png (la imagen que se ve al compartir el sitio en
 * WhatsApp, Facebook o X) a partir de scripts/og.html.
 *
 * Uso:
 *   npm install --no-save playwright   (solo la primera vez)
 *   npx playwright install chromium    (solo la primera vez)
 *   node scripts/generar-og.mjs
 *
 * Playwright NO es una dependencia del proyecto a propósito: pesa cientos de
 * megas y solo hace falta para regenerar esta imagen. El PNG queda versionado
 * en el repo, así que el build normal (`npm run build`) no necesita navegador.
 *
 * Solo hace falta correrlo si editás scripts/og.html.
 */
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const aqui = dirname(fileURLToPath(import.meta.url));
const plantilla = resolve(aqui, "og.html");
const salida = resolve(aqui, "..", "public", "og.png");

// Permite apuntar a un Chromium ya instalado en el sistema.
const navegador = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);
const pagina = await navegador.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});

await pagina.goto(`file://${plantilla}`, { waitUntil: "networkidle" });
// Espera a que carguen las fuentes para que el texto no salga con la de respaldo.
await pagina.evaluate(() => document.fonts.ready);
await pagina.waitForTimeout(500);
await pagina.screenshot({ path: salida });
await navegador.close();

console.log(`✓ Imagen generada en ${salida}`);
