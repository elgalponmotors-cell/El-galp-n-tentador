import { negocio } from "@/data/negocio";

export type DatosConsulta = {
  categoria?: string;
  aeropuerto?: string;
  retiro?: string;
  devolucion?: string;
};

/** Convierte "2026-08-14" en "14/08/2026". Devuelve el original si no matchea. */
export function formatearFecha(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const [, anio, mes, dia] = m;
  return `${dia}/${mes}/${anio}`;
}

/**
 * Arma el texto del mensaje de WhatsApp con los datos que el visitante haya
 * completado. Los campos vacíos simplemente no aparecen, así el mensaje nunca
 * queda con líneas a medio llenar.
 */
/**
 * El saludo con el que arranca todo mensaje. Cambiá este texto y cambia en
 * todos los botones del sitio a la vez.
 */
export const SALUDO = "Hola, estoy interesado en rentar un auto.";

export function mensajeConsulta(datos: DatosConsulta = {}): string {
  const detalles: string[] = [];

  if (datos.categoria) detalles.push(`• Categoría: ${datos.categoria}`);
  if (datos.aeropuerto) detalles.push(`• Aeropuerto: ${datos.aeropuerto}`);
  if (datos.retiro) detalles.push(`• Retiro: ${formatearFecha(datos.retiro)}`);
  if (datos.devolucion) detalles.push(`• Devolución: ${formatearFecha(datos.devolucion)}`);

  // Botón suelto (header, botón flotante, contacto): va solo el saludo.
  if (detalles.length === 0) return SALUDO;

  // Formulario o tarjeta de la flota: al saludo se le suman los datos que el
  // visitante ya eligió, así no hay que volver a preguntárselos.
  return [SALUDO, ...detalles, "", "¿Me pasan disponibilidad y precio? Gracias!"].join(
    "\n",
  );
}

/**
 * Link wa.me listo para usar en un <a href>. Todos los CTA del sitio pasan por
 * acá, así el número y el formato del mensaje viven en un solo lugar.
 */
export function linkWhatsApp(datos: DatosConsulta = {}): string {
  const texto = encodeURIComponent(mensajeConsulta(datos));
  return `https://wa.me/${negocio.whatsapp}?text=${texto}`;
}

/** Link `tel:` normalizado a partir del teléfono con formato del negocio. */
export function linkTelefono(): string {
  return `tel:${negocio.telefono.replace(/[^\d+]/g, "")}`;
}
