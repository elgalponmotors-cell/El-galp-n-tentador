import { pasos } from "@/data/negocio";
import { linkWhatsApp } from "@/lib/whatsapp";
import { IconoWhatsapp } from "../Iconos";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-profundo py-20 text-arena lg:py-28">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-sol">
            Cómo funciona
          </p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            De la consulta a las llaves, en cuatro pasos
          </h2>
          <p className="mt-4 text-lg text-arena/75">
            Sin formularios interminables ni cuentas que crear. Se resuelve todo
            por WhatsApp.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso, i) => (
            <li key={paso.titulo} className="relative">
              {/* Línea que conecta los pasos en escritorio. */}
              {i < pasos.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-14 right-0 top-6 hidden h-px bg-arena/20 lg:block"
                />
              )}
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-sol font-[family-name:var(--font-titulo)] text-lg font-extrabold text-profundo">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold">{paso.titulo}</h3>
              <p className="mt-2 leading-relaxed text-arena/75">
                {paso.detalle}
              </p>
            </li>
          ))}
        </ol>

        <a
          href={linkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-flex items-center gap-2.5 rounded-full bg-turquesa px-7 py-4 font-bold text-white transition-colors hover:bg-turquesa-oscuro"
        >
          <IconoWhatsapp className="h-5 w-5" />
          Empezar por WhatsApp
        </a>
      </div>
    </section>
  );
}
