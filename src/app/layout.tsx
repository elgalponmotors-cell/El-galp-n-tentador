import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { negocio, aeropuertos } from "@/data/negocio";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--fuente-titulo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--fuente-cuerpo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(negocio.sitioUrl),
  title: {
    default: `${negocio.nombre} | Alquiler de autos en Miami y Fort Lauderdale`,
    template: `%s | ${negocio.nombre}`,
  },
  description: negocio.descripcion,
  keywords: [
    "alquiler de autos Miami",
    "renta de autos Miami",
    "rent a car Fort Lauderdale",
    "alquiler de autos aeropuerto MIA",
    "renta de carros FLL",
    "alquiler de autos en español Miami",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: negocio.sitioUrl,
    siteName: negocio.nombre,
    title: `${negocio.nombre} | Alquiler de autos en Miami y Fort Lauderdale`,
    description: negocio.descripcion,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${negocio.nombre} — alquiler de autos en MIA y FLL`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${negocio.nombre} | Alquiler de autos en Miami y Fort Lauderdale`,
    description: negocio.descripcion,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0b3b4a",
  width: "device-width",
  initialScale: 1,
};

/**
 * Datos estructurados para Google. Se arman desde `negocio.ts` para que
 * nunca queden desincronizados con lo que se ve en pantalla.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: negocio.nombre,
  description: negocio.descripcion,
  url: negocio.sitioUrl,
  telephone: negocio.telefono,
  email: negocio.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: negocio.direccion.calle,
    addressLocality: negocio.direccion.ciudad,
    addressRegion: negocio.direccion.estado,
    postalCode: negocio.direccion.codigoPostal,
    addressCountry: negocio.direccion.pais,
  },
  openingHours: negocio.horarios.schema,
  areaServed: aeropuertos.map((a) => ({
    "@type": "Airport",
    name: a.nombre,
    iataCode: a.codigo,
  })),
  availableLanguage: ["es", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
