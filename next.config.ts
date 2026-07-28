import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático: `npm run build` genera HTML plano en `out/`.
  // Se puede publicar gratis en GitHub Pages, Netlify, Vercel o cualquier hosting.
  output: "export",
  // El optimizador de imágenes de Next necesita un servidor; con export estático
  // las imágenes se sirven tal cual desde /public.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
