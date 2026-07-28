import { negocio } from "@/data/negocio";

/**
 * Wordmark del negocio: ícono + nombre, en tipografía del sitio.
 * Se dibuja en SVG/CSS en lugar de usar una imagen para que se vea nítido
 * en cualquier pantalla y cambie de color según el fondo.
 */
export default function Logo({
  className = "",
  variante = "oscuro",
}: {
  className?: string;
  variante?: "oscuro" | "claro";
}) {
  const claro = variante === "claro";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          width="64"
          height="64"
          rx="14"
          fill={claro ? "#fff9f2" : "#0b3b4a"}
        />
        <path
          d="M10 44v-6c0-3 2-5 5-6l12-2 8-8c2-2 4-3 6-3h9c3 0 5 1 7 3l7 8v10c0 2-1 3-3 3H13c-2 0-3-1-3-3Z"
          fill="#0fb5ae"
        />
        <path
          d="M30 30V21h5v9Zm9 0v-9h5c1 0 2 0 3 1l6 8Z"
          fill={claro ? "#0b3b4a" : "#cfe9f2"}
        />
        <circle cx="22" cy="46" r="6" fill={claro ? "#0b3b4a" : "#fff9f2"} />
        <circle cx="22" cy="46" r="2.5" fill={claro ? "#fff9f2" : "#0b3b4a"} />
        <circle cx="46" cy="46" r="6" fill={claro ? "#0b3b4a" : "#fff9f2"} />
        <circle cx="46" cy="46" r="2.5" fill={claro ? "#fff9f2" : "#0b3b4a"} />
        <circle cx="50" cy="16" r="7" fill="#ffc24b" />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-[family-name:var(--font-titulo)] text-lg font-extrabold tracking-tight ${
            claro ? "text-arena" : "text-profundo"
          }`}
        >
          El Galpón
        </span>
        <span
          className={`text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
            claro ? "text-turquesa" : "text-turquesa-oscuro"
          }`}
        >
          Rent a Car
        </span>
      </span>
      <span className="sr-only">{negocio.nombre}</span>
    </span>
  );
}
