import { faq } from "@/data/faq";
import { linkWhatsApp } from "@/lib/whatsapp";

export default function Faq() {
  return (
    <section id="faq" className="bg-arena-oscura/50 py-20 lg:py-28">
      <div className="contenedor max-w-4xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-turquesa-oscuro">
            Dudas frecuentes
          </p>
          <h2 className="text-3xl font-extrabold text-profundo sm:text-4xl">
            Preguntas que nos hacen seguido
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {/* <details> nativo: accesible con teclado y funciona sin JavaScript. */}
          {faq.map((item) => (
            <details
              key={item.pregunta}
              name="faq"
              className="group rounded-2xl border border-profundo/10 bg-white px-6 open:shadow-lg open:shadow-profundo/5"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left font-bold text-profundo">
                {item.pregunta}
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-turquesa-claro text-turquesa-oscuro transition-transform group-open:rotate-45"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-profundo-medio">
                {item.respuesta}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-center text-profundo-medio">
          ¿Tenés otra pregunta?{" "}
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-turquesa-oscuro underline underline-offset-4"
          >
            Escribinos por WhatsApp
          </a>{" "}
          y te respondemos.
        </p>
      </div>
    </section>
  );
}
