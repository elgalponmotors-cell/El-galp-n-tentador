import { aeropuertos } from "@/data/negocio";
import { linkWhatsApp } from "@/lib/whatsapp";
import { IconoAvion, IconoUbicacion, IconoFlecha } from "../Iconos";

export default function Aeropuertos() {
  return (
    <section id="aeropuertos" className="contenedor py-20 lg:py-28">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-rosa">
          Dónde operamos
        </p>
        <h2 className="text-3xl font-extrabold text-crema sm:text-4xl">
          Retiro y devolución en MIA y FLL
        </h2>
        <p className="mt-4 text-lg text-crema-media">
          Coordinamos la entrega según tu vuelo. Si se atrasa, reprogramamos sin
          cargo — solo avisanos por WhatsApp.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {aeropuertos.map((a) => (
          <article
            key={a.codigo}
            className="flex flex-col rounded-2xl border border-borde bg-gradient-to-br from-noche-media to-vino/20 p-7"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-frambuesa text-white">
                <IconoAvion className="h-7 w-7" />
              </span>
              <div>
                <p className="font-[family-name:var(--font-titulo)] text-3xl font-extrabold leading-none text-crema">
                  {a.codigo}
                </p>
                <h3 className="mt-1.5 font-semibold text-crema-media">
                  {a.nombre}
                </h3>
              </div>
            </div>

            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wide text-rosa">
                  Cómo retirás
                </dt>
                <dd className="mt-1 leading-relaxed text-crema-media">
                  {a.retiro}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wide text-rosa">
                  Traslado
                </dt>
                <dd className="mt-1 leading-relaxed text-crema-media">
                  {a.shuttle}
                </dd>
              </div>
            </dl>

            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7">
              <a
                href={linkWhatsApp({ aeropuerto: `${a.codigo} — ${a.ciudad}` })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-frambuesa px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-frambuesa-viva"
              >
                Reservar en {a.codigo}
                <IconoFlecha className="h-4 w-4" />
              </a>
              <a
                href={a.mapaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-rosa underline underline-offset-4"
              >
                <IconoUbicacion className="h-4 w-4" />
                Ver en el mapa
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
