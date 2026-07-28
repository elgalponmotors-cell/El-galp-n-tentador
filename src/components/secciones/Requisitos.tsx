import { requisitos } from "@/data/negocio";
import { IconoCheck } from "../Iconos";
import { linkWhatsApp } from "@/lib/whatsapp";

export default function Requisitos() {
  return (
    <section id="requisitos" className="contenedor py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-turquesa-oscuro">
            Antes de reservar
          </p>
          <h2 className="text-3xl font-extrabold text-profundo sm:text-4xl">
            Qué necesitás para alquilar
          </h2>
          <p className="mt-4 text-lg text-profundo-medio">
            Son los requisitos estándar para alquilar un auto en Florida. Si
            tenés dudas sobre tu caso, escribinos antes de reservar.
          </p>
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-semibold text-turquesa-oscuro underline underline-offset-4"
          >
            Consultar mi caso
          </a>
        </div>

        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {requisitos.map((r) => (
            <li key={r.titulo} className="flex gap-3.5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-turquesa-claro text-turquesa-oscuro">
                <IconoCheck className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-bold text-profundo">{r.titulo}</h3>
                <p className="mt-1 leading-relaxed text-profundo-medio">
                  {r.detalle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
