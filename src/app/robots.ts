import type { MetadataRoute } from "next";
import { negocio } from "@/data/negocio";

// Requerido por `output: "export"`: robots.txt se genera una vez, en el build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${negocio.sitioUrl}/sitemap.xml`,
  };
}
