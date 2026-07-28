/**
 * ⚠️  SECCIÓN DESACTIVADA A PROPÓSITO — NO ESTÁ EN `page.tsx`.
 *
 * Esta sección está lista para usarse, pero NO se muestra en el sitio porque
 * todavía no hay reseñas reales. Publicar testimonios inventados engaña a tus
 * clientes y, en Estados Unidos, la FTC lo trata como publicidad engañosa
 * (puede traer multas). Así que preferimos dejarla apagada.
 *
 * PARA ACTIVARLA cuando tengas reseñas de verdad:
 *   1. Reemplazá el array `testimonios` de abajo por reseñas reales
 *      (nombre real o inicial + tu fuente: Google, Facebook, etc.).
 *   2. En `src/app/page.tsx`, importá el componente y agregá <Testimonios />
 *      entre <Requisitos /> y <Faq />.
 */

import { IconoCheck } from "../Iconos";

type Testimonio = {
  texto: string;
  autor: string;
  detalle: string;
};

/** ⚠️ TODO: reemplazar por reseñas reales antes de activar la sección. */
const testimonios: Testimonio[] = [];

export default function Testimonios() {
  if (testimonios.length === 0) return null;

  return (
    <section id="testimonios" className="contenedor py-20 lg:py-28">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-turquesa-oscuro">
          Lo que dicen
        </p>
        <h2 className="text-3xl font-extrabold text-profundo sm:text-4xl">
          Clientes que ya manejaron con nosotros
        </h2>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonios.map((t) => (
          <li
            key={t.autor}
            className="flex flex-col rounded-2xl border border-profundo/10 bg-white p-7"
          >
            <div aria-hidden className="mb-4 flex gap-1 text-sol">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="m12 2 3 6.5 7 .9-5 4.8 1.3 7L12 17.9 5.7 21.2 7 14.2l-5-4.8 7-.9L12 2Z" />
                </svg>
              ))}
            </div>
            <blockquote className="flex-1 leading-relaxed text-profundo-medio">
              “{t.texto}”
            </blockquote>
            <footer className="mt-5 border-t border-profundo/10 pt-4">
              <p className="flex items-center gap-1.5 font-bold text-profundo">
                {t.autor}
                <IconoCheck className="h-4 w-4 text-turquesa-oscuro" />
              </p>
              <p className="text-sm text-profundo-suave">{t.detalle}</p>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
