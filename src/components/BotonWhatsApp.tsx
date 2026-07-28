import { linkWhatsApp } from "@/lib/whatsapp";
import { IconoWhatsapp } from "./Iconos";

/**
 * Botón flotante siempre a mano. En móvil es el atajo principal para
 * contactar sin tener que volver al header ni bajar hasta el final.
 */
export default function BotonWhatsApp() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-4 font-bold text-white shadow-xl shadow-profundo/25 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <IconoWhatsapp className="h-6 w-6" />
      <span className="hidden sm:inline">Reservar por WhatsApp</span>
      <span className="sr-only sm:hidden">Reservar por WhatsApp</span>
    </a>
  );
}
