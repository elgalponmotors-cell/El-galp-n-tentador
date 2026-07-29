"use client";

import { useState } from "react";
import Image from "next/image";
import type { FotoAuto } from "@/data/flota";

/**
 * Galería de fotos de una unidad: foto grande arriba y una fila de miniaturas
 * abajo para cambiarla. Sin librerías ni modal — se navega con el teclado y
 * funciona igual en celular.
 */
export default function GaleriaAuto({
  fotos,
  nombre,
}: {
  fotos: FotoAuto[];
  nombre: string;
}) {
  const [activa, setActiva] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-noche">
        {/*
          Las fotos se apilan y se muestra la activa con opacidad. Así el
          navegador ya las tiene descargadas y el cambio es instantáneo, sin
          el parpadeo de cargar una imagen nueva en cada clic.
        */}
        {fotos.map((foto, i) => (
          <Image
            key={foto.src}
            src={foto.src}
            alt={foto.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-200 ${
              i === activa ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== activa}
          />
        ))}
      </div>

      <div
        role="group"
        aria-label={`Fotos del ${nombre}`}
        className="flex gap-1.5 bg-noche p-1.5"
      >
        {fotos.map((foto, i) => (
          <button
            key={foto.src}
            type="button"
            onClick={() => setActiva(i)}
            aria-label={foto.alt}
            aria-pressed={i === activa}
            className={`relative aspect-[4/3] flex-1 overflow-hidden rounded transition-opacity ${
              i === activa
                ? "ring-2 ring-frambuesa"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={foto.src}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
