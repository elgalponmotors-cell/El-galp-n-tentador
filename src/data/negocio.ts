/**
 * ────────────────────────────────────────────────────────────────────────────
 *  DATOS DEL NEGOCIO — El Galpón Rent a Car
 * ────────────────────────────────────────────────────────────────────────────
 *
 *  Este es el ÚNICO archivo que necesitás editar para actualizar el sitio.
 *  Ningún componente tiene el teléfono, el email ni la dirección escritos
 *  adentro: todos los leen de acá.
 *
 *  Los campos marcados con  ⚠️ TODO  tienen datos de ejemplo y hay que
 *  reemplazarlos por los reales antes de publicar el sitio.
 */

export const negocio = {
  nombre: "El Galpón Rent a Car",
  nombreCorto: "El Galpón",
  eslogan: "Alquilá tu auto en Miami y Fort Lauderdale sin sorpresas",
  descripcion:
    "Alquiler de autos con retiro y devolución en los aeropuertos de Miami (MIA) y Fort Lauderdale (FLL). Precios claros, atención en español y entrega en el aeropuerto.",

  /**
   * ⚠️ TODO: confirmar. Por ahora usa el mismo número que el WhatsApp, que es
   * lo habitual en un negocio chico. Si atendés llamadas en otra línea,
   * cambialo por esa.
   */
  telefono: "+1 (305) 481-3777",

  /**
   * WhatsApp del negocio.
   * Formato para wa.me: código de país + número, SOLO dígitos y sin el "+".
   */
  whatsapp: "13054813777",

  /** ⚠️ TODO: reemplazar por el email real. */
  email: "reservas@elgalponrentacar.com",

  /** ⚠️ TODO: reemplazar por la dirección real de la oficina. */
  direccion: {
    calle: "Dirección pendiente",
    ciudad: "Miami",
    estado: "FL",
    codigoPostal: "33142",
    pais: "US",
  },

  /** ⚠️ TODO: confirmar los horarios reales de atención. */
  horarios: {
    texto: "Todos los días, de 7:00 a 22:00",
    /** Formato schema.org, para el JSON-LD de Google. */
    schema: ["Mo-Su 07:00-22:00"],
  },

  /** ⚠️ TODO: completar con las redes reales. Dejá "" para ocultar el ícono. */
  redes: {
    instagram: "",
    facebook: "",
  },

  /** ⚠️ TODO: cambiar cuando tengas el dominio definitivo. */
  sitioUrl: "https://elgalponrentacar.com",
} as const;

/** Aeropuertos donde operamos. */
export const aeropuertos = [
  {
    codigo: "MIA",
    nombre: "Aeropuerto Internacional de Miami",
    ciudad: "Miami, Florida",
    /** ⚠️ TODO: ajustar según cómo entregás los autos en MIA. */
    retiro:
      "Te esperamos en el Rental Car Center de MIA. Al aterrizar nos escribís por WhatsApp y coordinamos el punto exacto de encuentro.",
    shuttle:
      "El MIA Mover conecta la terminal con el Rental Car Center en 5 minutos y es gratuito.",
    mapaUrl: "https://maps.google.com/?q=Miami+International+Airport+Rental+Car+Center",
  },
  {
    codigo: "FLL",
    nombre: "Aeropuerto Internacional de Fort Lauderdale-Hollywood",
    ciudad: "Fort Lauderdale, Florida",
    /** ⚠️ TODO: ajustar según cómo entregás los autos en FLL. */
    retiro:
      "Coordinamos la entrega en el Rental Car Center de FLL. Avisanos tu número de vuelo y te estamos esperando cuando salgas.",
    shuttle:
      "Hay shuttle gratuito desde todas las terminales de FLL hasta el Rental Car Center.",
    mapaUrl:
      "https://maps.google.com/?q=Fort+Lauderdale+Hollywood+International+Airport+Rental+Car+Center",
  },
] as const;

/** Requisitos para alquilar. ⚠️ TODO: confirmar edad mínima y monto del depósito. */
export const requisitos = [
  {
    titulo: "Licencia de conducir vigente",
    detalle:
      "Aceptamos licencias de cualquier país. Si no está en alfabeto latino, traé también el permiso internacional.",
  },
  {
    titulo: "Edad mínima: 21 años",
    detalle:
      "Entre 21 y 24 años puede aplicar un cargo adicional por conductor joven. Consultanos sin compromiso.",
  },
  {
    titulo: "Tarjeta de crédito a tu nombre",
    detalle:
      "Se usa para el depósito de garantía. Tiene que ser una tarjeta de crédito, no de débito.",
  },
  {
    titulo: "Depósito de garantía",
    detalle:
      "Se congela un monto en la tarjeta al retirar el auto y se libera al devolverlo sin daños.",
  },
  {
    titulo: "Pasaporte o documento de identidad",
    detalle: "Para verificar tus datos al momento de la entrega.",
  },
  {
    titulo: "Seguro incluido",
    detalle:
      "Todos nuestros alquileres incluyen la cobertura obligatoria del estado de Florida. Podés sumar coberturas extra.",
  },
] as const;

/** Diferenciales del negocio. */
export const beneficios = [
  {
    titulo: "Sin cargos ocultos",
    detalle:
      "El precio que te pasamos por WhatsApp es el que pagás. Sin sorpresas al momento de retirar el auto.",
    icono: "etiqueta",
  },
  {
    titulo: "Atención en español",
    detalle:
      "Te atendemos en tu idioma, de persona a persona. Nada de call centers ni respuestas automáticas.",
    icono: "chat",
  },
  {
    titulo: "Entrega en el aeropuerto",
    detalle:
      "Retirás y devolvés en MIA o FLL. Coordinamos según tu vuelo, incluso si se atrasa.",
    icono: "avion",
  },
  {
    titulo: "Millaje ilimitado",
    detalle:
      "Manejá hasta los Cayos o hasta Orlando sin contar kilómetros ni pagar extra.",
    icono: "ruta",
  },
  {
    titulo: "Reserva por WhatsApp",
    detalle:
      "Sin formularios eternos ni cuentas. Un mensaje y te confirmamos disponibilidad y precio.",
    icono: "whatsapp",
  },
  {
    titulo: "Autos revisados",
    detalle:
      "Cada unidad pasa por control mecánico y limpieza profunda antes de cada alquiler.",
    icono: "escudo",
  },
] as const;

/** Los pasos del proceso de alquiler. */
export const pasos = [
  {
    titulo: "Escribinos",
    detalle:
      "Contanos tus fechas, el aeropuerto y qué tipo de auto necesitás. Por WhatsApp o por teléfono.",
  },
  {
    titulo: "Te cotizamos",
    detalle:
      "En minutos te pasamos el precio final, todo incluido, y te confirmamos la disponibilidad.",
  },
  {
    titulo: "Reservás",
    detalle:
      "Confirmás con una seña y te mandamos el comprobante con todos los datos de la entrega.",
  },
  {
    titulo: "Retirás y manejás",
    detalle:
      "Te esperamos en el aeropuerto con el auto listo. Firmás, te damos las llaves y arrancás.",
  },
] as const;

export type Aeropuerto = (typeof aeropuertos)[number];
