/**
 * Íconos SVG inline. Sin librerías externas: menos peso, menos dependencias
 * y control total sobre el trazo. Todos heredan el color con `currentColor`.
 */

type Props = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function IconoEtiqueta({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M3 11V5a2 2 0 0 1 2-2h6l10 10-8 8L3 11Z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </svg>
  );
}

export function IconoChat({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5.4A8 8 0 1 1 21 12Z" />
      <path d="M9 11h6M9 14.5h3.5" />
    </svg>
  );
}

export function IconoAvion({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M10.2 13.8 3 11.5l1-1.8 7.9.9 3.8-5.3a2 2 0 0 1 3.2 2.4L15.6 13l2.1 7.6-1.9.6-3-5.6-2.4 2.6.2 3-1.5.5-1.3-3.7L4 16.7l.5-1.5 3-.2 2.7-1.2Z" />
    </svg>
  );
}

export function IconoRuta({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M8.5 19h5a4 4 0 0 0 0-8h-3a4 4 0 0 1 0-8h5" />
    </svg>
  );
}

export function IconoEscudo({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-3.3 7-9V5.5L12 3 5 5.5V12c0 5.7 7 9 7 9Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconoWhatsapp({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4Z" />
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.1c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 1 1 12 20.1Z" />
    </svg>
  );
}

export function IconoTelefono({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3h3l1.5 4-2 1.5a13 13 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6.5 3Z" />
    </svg>
  );
}

export function IconoEmail({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function IconoReloj({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  );
}

export function IconoUbicacion({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-5.6 7-10.5a7 7 0 1 0-14 0C5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export function IconoPersona({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

export function IconoValija({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M9 7.5V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2.5M8 19.5v1.5M16 19.5v1.5" />
    </svg>
  );
}

export function IconoPuerta({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M5 3h11a1 1 0 0 1 1 1v17H5V3Z" />
      <path d="M3 21h18" />
      <circle cx="13.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconoCambios({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M6 4v16M18 4v16M6 12h12M12 4v8" />
      <circle cx="6" cy="4" r="1.5" />
      <circle cx="12" cy="4" r="1.5" />
      <circle cx="18" cy="4" r="1.5" />
    </svg>
  );
}

export function IconoCheck({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function IconoFlecha({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h15m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

/** Mapa nombre → componente, para recorrer los datos de `negocio.ts`. */
export const iconos = {
  etiqueta: IconoEtiqueta,
  chat: IconoChat,
  avion: IconoAvion,
  ruta: IconoRuta,
  escudo: IconoEscudo,
  whatsapp: IconoWhatsapp,
} as const;

export type NombreIcono = keyof typeof iconos;
