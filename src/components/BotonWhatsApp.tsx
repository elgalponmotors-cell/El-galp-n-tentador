import { linkWhatsApp } from "@/lib/whatsapp";
import { IconoWhatsapp } from "./Iconos";

/**
 * Botón flotante siempre a mano. En móvil es el atajo principal para
 * contactar sin tener que volver al header ni bajar hasta el final.
 *
 * Va en frambuesa y no en el verde de WhatsApp: blanco sobre ese verde da
 * 1.98:1 de contraste, muy por debajo del mínimo legible. El ícono ya deja
 * claro el canal, y así el botón queda igual que el resto de los CTA.
 */
export default function BotonWhatsApp() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-frambuesa px-5 py-4 font-bold text-white shadow-xl shadow-black/60 transition-transform hover:scale-105 hover:bg-frambuesa-viva sm:bottom-7 sm:right-7"
    >
      <IconoWhatsapp className="h-6 w-6" />
      <span className="hidden sm:inline">Reservar por WhatsApp</span>
      <span className="sr-only sm:hidden">Reservar por WhatsApp</span>
    </a>
  );
}
