import type { CategoriaAuto } from "@/data/flota";

/**
 * Ilustraciones vectoriales de cada categoría de auto, dibujadas a mano en SVG.
 *
 * Se usan vectores en lugar de fotos porque son nítidos en cualquier pantalla,
 * pesan unos pocos KB y mantienen un estilo uniforme entre las cinco tarjetas.
 *
 * 👉 Si querés usar fotos reales de tu flota: subilas a `public/flota/` y
 *    reemplazá el <AutoIlustracion /> de `Flota.tsx` por un <Image />.
 *
 * Todas comparten la misma grilla (400×200, piso en y=176) para que los autos
 * queden alineados entre sí al ponerlos uno al lado del otro.
 */

type Props = {
  categoria: CategoriaAuto["id"];
  /** Color de la carrocería. Cada tarjeta usa uno distinto. */
  color: string;
  colorOscuro: string;
  className?: string;
};

const VIDRIO = "#cfe9f2";
const VIDRIO_BORDE = "#0b3b4a";
const NEUMATICO = "#243b45";
const LLANTA = "#e8eef0";

/** El neumático siempre apoya en el piso (y=176), así todos quedan alineados. */
function Rueda({ cx, r = 28 }: { cx: number; r?: number }) {
  const cy = 176 - r;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={NEUMATICO} />
      <circle cx={cx} cy={cy} r={r * 0.5} fill={LLANTA} />
      <circle cx={cx} cy={cy} r={r * 0.18} fill={NEUMATICO} />
    </g>
  );
}

function Piso() {
  return (
    <g>
      <ellipse cx={200} cy={180} rx={168} ry={9} fill="#0b3b4a" opacity={0.12} />
      <path
        d="M40 176h320"
        stroke="#0b3b4a"
        strokeOpacity={0.18}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </g>
  );
}

/** Faro delantero y luz trasera, iguales en todos los modelos. */
function Luces({ frente, atras }: { frente: number; atras: number }) {
  return (
    <g>
      <rect x={frente} y={116} width={14} height={9} rx={4} fill="#ffc24b" />
      <rect x={atras} y={116} width={11} height={9} rx={4} fill="#ff6b5a" />
    </g>
  );
}

export default function AutoIlustracion({
  categoria,
  color,
  colorOscuro,
  className,
}: Props) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {categoria === "economico" && (
        <>
          <Piso />
          {/* Hatchback compacto: trompa corta y portón trasero inclinado. */}
          <path
            d="M52 142v-16c0-8 5-14 13-16l52-11 32-30c6-6 14-9 22-9h66c9 0 17 4 22 11l30 39 42 10c8 2 13 8 13 16v6c0 6-4 10-10 10H62c-6 0-10-4-10-10Z"
            fill={color}
          />
          <path
            d="M52 138h296v4c0 6-4 10-10 10H62c-6 0-10-4-10-10Z"
            fill={colorOscuro}
          />
          <path
            d="M126 99 156 71c4-4 9-6 15-6h20v34Zm75 0V65h40c6 0 11 3 15 8l20 26Z"
            fill={VIDRIO}
            stroke={VIDRIO_BORDE}
            strokeWidth={2.5}
            strokeLinejoin="round"
          />
          <path
            d="M196 65v34M118 128h44"
            stroke={VIDRIO_BORDE}
            strokeOpacity={0.35}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <Luces frente={54} atras={332} />
          <Rueda cx={116} />
          <Rueda cx={286} />
        </>
      )}

      {categoria === "sedan" && (
        <>
          <Piso />
          {/* Sedán clásico de tres volúmenes: capó, habitáculo y baúl. */}
          <path
            d="M28 142v-18c0-8 6-14 16-16l64-12 42-34c6-5 14-8 22-8h70c10 0 19 4 25 12l32 40 58 10c10 2 17 9 17 18v8c0 6-4 10-10 10H38c-6 0-10-4-10-10Z"
            fill={color}
          />
          <path
            d="M28 138h346v4c0 6-4 10-10 10H38c-6 0-10-4-10-10Z"
            fill={colorOscuro}
          />
          <path
            d="M116 98 152 68c4-4 9-6 15-6h29v36Zm90 0V62h38c6 0 12 3 16 8l22 28Z"
            fill={VIDRIO}
            stroke={VIDRIO_BORDE}
            strokeWidth={2.5}
            strokeLinejoin="round"
          />
          <path
            d="M201 62v36M110 128h50"
            stroke={VIDRIO_BORDE}
            strokeOpacity={0.35}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <Luces frente={30} atras={358} />
          <Rueda cx={110} />
          <Rueda cx={296} />
        </>
      )}

      {categoria === "suv" && (
        <>
          <Piso />
          {/*
            Lo que la hace leer como SUV y no como sedán: techo mucho más alto
            (y=36 contra y=53), ruedas más grandes y una cola casi vertical.
          */}
          <path
            d="M32 148v-42c0-8 6-14 15-16l57-12 36-34c5-5 12-8 19-8h119c9 0 17 4 22 11l28 37 24 8c9 3 14 9 14 18v38c0 6-4 10-10 10H42c-6 0-10-4-10-10Z"
            fill={color}
          />
          <path
            d="M32 142h334v6c0 6-4 10-10 10H42c-6 0-10-4-10-10Z"
            fill={colorOscuro}
          />
          {/* Barras de techo: el detalle que termina de definirla. */}
          <path
            d="M150 30h136"
            stroke={colorOscuro}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <path
            d="M114 82 146 48c3-3 7-5 11-5h29v39Zm79-39h47v39h-47Zm54 0h27c6 0 11 2 14 6l24 33h-65Z"
            fill={VIDRIO}
            stroke={VIDRIO_BORDE}
            strokeWidth={2.5}
            strokeLinejoin="round"
          />
          <path
            d="M108 118h58"
            stroke={VIDRIO_BORDE}
            strokeOpacity={0.35}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <Luces frente={34} atras={352} />
          <Rueda cx={112} r={33} />
          <Rueda cx={292} r={33} />
        </>
      )}

      {categoria === "minivan" && (
        <>
          <Piso />
          {/*
            Minivan: un solo volumen, techo plano y largo arrancando casi sobre
            el paragolpes. Es el perfil más alto de los cinco.
          */}
          <path
            d="M26 148v-46c0-10 7-17 17-19l35-7 34-36c6-6 14-9 22-9h134c9 0 18 4 23 11l31 42 28 8c9 3 14 9 14 18v38c0 6-4 10-10 10H36c-6 0-10-4-10-10Z"
            fill={color}
          />
          <path
            d="M26 142h348v6c0 6-4 10-10 10H36c-6 0-10-4-10-10Z"
            fill={colorOscuro}
          />
          <path
            d="M92 80 120 44c3-4 8-6 13-6h29v42Zm77-42h59v42h-59Zm66 0h31c6 0 11 2 14 6l26 36h-71Z"
            fill={VIDRIO}
            stroke={VIDRIO_BORDE}
            strokeWidth={2.5}
            strokeLinejoin="round"
          />
          <path
            d="M96 118h58"
            stroke={VIDRIO_BORDE}
            strokeOpacity={0.35}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          {/* Riel de la puerta corrediza, la firma visual de una minivan. */}
          <path
            d="M170 100h132"
            stroke={colorOscuro}
            strokeWidth={4}
            strokeLinecap="round"
          />
          <Luces frente={28} atras={356} />
          <Rueda cx={106} />
          <Rueda cx={300} />
        </>
      )}

      {categoria === "convertible" && (
        <>
          <Piso />
          {/*
            Descapotable: el perfil más bajo, capó largo y sin techo. La cabina
            abierta se dibuja como un hueco oscuro con dos apoyacabezas.
          */}
          {/* Carrocería baja: la cintura queda en y≈92, sin nada por encima. */}
          <path
            d="M26 148v-30c0-8 6-14 15-16l109-6 18-2c4-1 8-2 13-2h99c10 0 19 4 24 11l7 10 30 8c9 2 14 8 14 16v11c0 6-4 10-10 10H36c-6 0-10-4-10-10Z"
            fill={color}
          />
          <path
            d="M26 142h346v6c0 6-4 10-10 10H36c-6 0-10-4-10-10Z"
            fill={colorOscuro}
          />
          {/* Hueco de la cabina. Va en azul oscuro y no en amarillo oscuro:
              contra la carrocería clara es lo único que se lee a este tamaño. */}
          <path
            d="M196 92h98V80c0-4-3-7-7-7h-84c-4 0-7 3-7 7Z"
            fill={NEUMATICO}
          />
          {/* Apoyacabezas asomando por encima de la cintura. */}
          <path
            d="M212 78V64c0-6 5-11 11-11h4c6 0 11 5 11 11v14Zm44 0V64c0-6 5-11 11-11h4c6 0 11 5 11 11v14Z"
            fill={NEUMATICO}
          />
          {/* Solo parabrisas, bien reclinado: sin luneta ni techo. */}
          <path
            d="M152 92 184 50c2-3 6-4 9-4h5v46Z"
            fill={VIDRIO}
            stroke={VIDRIO_BORDE}
            strokeWidth={2.5}
            strokeLinejoin="round"
          />
          <path
            d="M116 124h46"
            stroke={VIDRIO_BORDE}
            strokeOpacity={0.35}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <Luces frente={28} atras={354} />
          <Rueda cx={114} />
          <Rueda cx={292} />
        </>
      )}
    </svg>
  );
}

/** Un color por categoría, todos dentro de la paleta del sitio. */
export const coloresFlota: Record<
  CategoriaAuto["id"],
  { color: string; colorOscuro: string; fondo: string }
> = {
  economico: { color: "#0fb5ae", colorOscuro: "#0b8a85", fondo: "#d6f5f3" },
  sedan: { color: "#2d5f6f", colorOscuro: "#0b3b4a", fondo: "#dde9ed" },
  suv: { color: "#ff6b5a", colorOscuro: "#e04a38", fondo: "#ffe4e0" },
  minivan: { color: "#5c8494", colorOscuro: "#3d626f", fondo: "#e2ecf0" },
  convertible: { color: "#ffc24b", colorOscuro: "#e09f22", fondo: "#fff2d6" },
};
