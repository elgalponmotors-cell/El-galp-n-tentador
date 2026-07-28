import type { MetadataRoute } from "next";
import { negocio } from "@/data/negocio";

// Requerido por `output: "export"`: el sitemap se genera una vez, en el build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: negocio.sitioUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
