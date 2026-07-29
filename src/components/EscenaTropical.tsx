/**
 * Escena de fondo del hero: atardecer de Miami con skyline, mar y palmeras.
 * Vectorial y decorativa — por eso va con aria-hidden y sin texto adentro.
 */

/** Una hoja de palmera. Se repite rotada para armar la copa. */
function Hoja({ rotacion, escala = 1 }: { rotacion: number; escala?: number }) {
  return (
    <path
      d="M0 0C22-26 62-38 96-32 66-16 30-4 0 0Z"
      transform={`rotate(${rotacion}) scale(${escala})`}
      fill="currentColor"
    />
  );
}

function Palmera({
  x,
  y,
  escala = 1,
  invertida = false,
}: {
  x: number;
  y: number;
  escala?: number;
  invertida?: boolean;
}) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${invertida ? -escala : escala} ${escala})`}
      color="#060203"
    >
      {/* Tronco curvado */}
      <path
        d="M0 0C-4-60 2-120 26-176c6-13 14-24 22-32l14 9c-9 9-16 20-21 32-20 50-27 108-25 167Z"
        fill="currentColor"
      />
      {/* Copa */}
      <g transform="translate(58 -206)">
        <Hoja rotacion={-96} />
        <Hoja rotacion={-38} escala={1.1} />
        <Hoja rotacion={6} />
        <Hoja rotacion={52} escala={0.95} />
        <Hoja rotacion={112} escala={0.85} />
        <Hoja rotacion={168} escala={0.9} />
        <circle cx={0} cy={0} r={8} fill="currentColor" />
        {/* Cocos */}
        <circle cx={-9} cy={12} r={6} fill="currentColor" />
        <circle cx={7} cy={15} r={5} fill="currentColor" />
      </g>
    </g>
  );
}

/** Skyline de torres. Alturas fijas para que el render sea determinista. */
const torres = [
  { x: 60, w: 54, h: 150 },
  { x: 122, w: 38, h: 96 },
  { x: 168, w: 62, h: 205 },
  { x: 238, w: 44, h: 128 },
  { x: 290, w: 34, h: 168 },
  { x: 332, w: 58, h: 112 },
  { x: 398, w: 40, h: 186 },
  { x: 446, w: 50, h: 140 },
  { x: 504, w: 36, h: 96 },
  { x: 548, w: 60, h: 172 },
  { x: 616, w: 42, h: 118 },
  { x: 666, w: 52, h: 196 },
  { x: 726, w: 38, h: 134 },
  { x: 772, w: 56, h: 160 },
  { x: 836, w: 44, h: 104 },
  { x: 888, w: 34, h: 178 },
  { x: 930, w: 58, h: 126 },
  { x: 996, w: 46, h: 152 },
  { x: 1050, w: 38, h: 192 },
  { x: 1096, w: 54, h: 118 },
  { x: 1158, w: 42, h: 164 },
  { x: 1208, w: 60, h: 132 },
  { x: 1276, w: 36, h: 182 },
  { x: 1320, w: 52, h: 108 },
  { x: 1380, w: 44, h: 146 },
];

export default function EscenaTropical({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Las franjas cálidas terminan en el horizonte (y=430 ≈ 72%), que es
            donde arranca el mar. Si se corren más abajo, el atardecer queda
            tapado por el mar y la arena.
            Los tonos son los del disco del sol del logo: vino en los bordes,
            frambuesa en el medio y rosa en el centro. */}
        <linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0406" />
          <stop offset="26%" stopColor="#3a0d1c" />
          <stop offset="46%" stopColor="#8e1533" />
          <stop offset="60%" stopColor="#c5224c" />
          <stop offset="71%" stopColor="#d52b58" />
          <stop offset="100%" stopColor="#ec96a8" />
        </linearGradient>
        {/* El agua refleja el cielo: vino oscuro con el brillo del sol. */}
        <linearGradient id="mar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a01a3c" />
          <stop offset="100%" stopColor="#3a0d1c" />
        </linearGradient>
        <linearGradient id="arena" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c1218" />
          <stop offset="100%" stopColor="#160709" />
        </linearGradient>
        <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ec96a8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ec96a8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="600" fill="url(#cielo)" />

      {/* Sol bajo sobre el horizonte */}
      <circle cx="840" cy="398" r="200" fill="url(#halo)" />
      <circle cx="840" cy="398" r="62" fill="#ffdfe6" />

      {/* Nubes livianas */}
      <g fill="#ec96a8" opacity="0.16">
        <ellipse cx="250" cy="120" rx="120" ry="26" />
        <ellipse cx="330" cy="106" rx="80" ry="20" />
        <ellipse cx="1120" cy="170" rx="140" ry="24" />
        <ellipse cx="1040" cy="156" rx="90" ry="18" />
      </g>

      {/* Skyline */}
      <g fill="#0a0406" opacity="0.96">
        {torres.map((t) => (
          <rect
            key={t.x}
            x={t.x}
            y={430 - t.h}
            width={t.w}
            height={t.h}
            rx={4}
          />
        ))}
      </g>

      {/* Ventanas encendidas */}
      <g fill="#ec96a8" opacity="0.45">
        {torres.flatMap((t) =>
          Array.from({ length: Math.floor(t.h / 34) }, (_, fila) => (
            <rect
              key={`${t.x}-${fila}`}
              x={t.x + 9}
              y={430 - t.h + 16 + fila * 34}
              width={t.w - 18}
              height={9}
              rx={2}
            />
          )),
        )}
      </g>

      {/* Mar con el reflejo del sol */}
      <rect x="0" y="430" width="1440" height="80" fill="url(#mar)" />
      <g fill="#ffdfe6" opacity="0.5">
        <rect x="808" y="446" width="64" height="6" rx="3" />
        <rect x="792" y="464" width="96" height="6" rx="3" />
        <rect x="816" y="482" width="48" height="6" rx="3" />
      </g>

      {/* Arena */}
      <path d="M0 502h1440v98H0Z" fill="url(#arena)" />
      {/* Orilla: la espuma donde el mar toca la arena. */}
      <path
        d="M0 502c180 20 300-12 480-5s300 27 480 15 300-24 480-9v8H0Z"
        fill="#d9848f"
        opacity="0.4"
      />

      {/* Palmeras en primer plano */}
      <Palmera x={118} y={540} escala={1.15} />
      <Palmera x={1348} y={556} escala={1.3} invertida />
      <Palmera x={300} y={528} escala={0.72} />
    </svg>
  );
}
