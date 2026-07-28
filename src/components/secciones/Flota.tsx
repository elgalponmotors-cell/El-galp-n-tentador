import { flota } from "@/data/flota";
import AutoIlustracion, { coloresFlota } from "../AutoIlustracion";
import {
  IconoPersona,
  IconoValija,
  IconoPuerta,
  IconoCambios,
  IconoWhatsapp,
} from "../Iconos";
import { linkWhatsApp } from "@/lib/whatsapp";

export default function Flota() {
  return (
    <section id="flota" className="bg-arena-oscura/50 py-20 lg:py-28">
      <div className="contenedor">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-turquesa-oscuro">
            Nuestra flota
          </p>
          <h2 className="text-3xl font-extrabold text-profundo sm:text-4xl">
            Elegí la categoría que necesitás
          </h2>
          <p className="mt-4 text-lg text-profundo-medio">
            Trabajamos por categoría, no por modelo puntual. Te asignamos una
            unidad de la categoría que reservaste o superior, sin costo extra.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flota.map((auto) => {
            const paleta = coloresFlota[auto.id];
            return (
              <li
                key={auto.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-profundo/10 bg-white transition-shadow hover:shadow-xl hover:shadow-profundo/8"
              >
                <div
                  className="relative"
                  style={{ backgroundColor: paleta.fondo }}
                >
                  {auto.destacado && (
                    <span className="absolute left-4 top-4 rounded-full bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      Más elegido
                    </span>
                  )}
                  <AutoIlustracion
                    categoria={auto.id}
                    color={paleta.color}
                    colorOscuro={paleta.colorOscuro}
                    className="h-44 w-full"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-profundo">
                    {auto.nombre}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-profundo-suave">
                    {auto.ejemplos}
                  </p>
                  <p className="mt-3 leading-relaxed text-profundo-medio">
                    {auto.descripcion}
                  </p>

                  <ul className="mt-5 grid grid-cols-2 gap-y-2.5 text-sm text-profundo-medio">
                    <li className="flex items-center gap-2">
                      <IconoPersona className="h-4 w-4 shrink-0 text-turquesa-oscuro" />
                      {auto.pasajeros} pasajeros
                    </li>
                    <li className="flex items-center gap-2">
                      <IconoValija className="h-4 w-4 shrink-0 text-turquesa-oscuro" />
                      {auto.valijas} valijas
                    </li>
                    <li className="flex items-center gap-2">
                      <IconoPuerta className="h-4 w-4 shrink-0 text-turquesa-oscuro" />
                      {auto.puertas} puertas
                    </li>
                    <li className="flex items-center gap-2">
                      <IconoCambios className="h-4 w-4 shrink-0 text-turquesa-oscuro" />
                      {auto.transmision}
                    </li>
                  </ul>

                  <div className="mt-6 flex items-end justify-between gap-3 border-t border-profundo/10 pt-5">
                    {auto.precioDesde !== null ? (
                      <p className="leading-none">
                        <span className="text-xs font-semibold uppercase tracking-wide text-profundo-suave">
                          Desde
                        </span>
                        <br />
                        <span className="font-[family-name:var(--font-titulo)] text-3xl font-extrabold text-profundo">
                          ${auto.precioDesde}
                        </span>
                        <span className="text-sm font-medium text-profundo-medio">
                          {" "}
                          / día
                        </span>
                      </p>
                    ) : (
                      <p className="text-sm font-semibold text-profundo-medio">
                        Consultá el precio
                        <br />
                        <span className="font-normal text-profundo-suave">
                          según tus fechas
                        </span>
                      </p>
                    )}
                  </div>

                  <a
                    href={linkWhatsApp({ categoria: auto.nombre })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 rounded-full bg-turquesa px-5 py-3 font-semibold text-white transition-colors hover:bg-turquesa-oscuro"
                  >
                    <IconoWhatsapp className="h-4 w-4" />
                    Reservar {auto.nombre}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-profundo-medio">
          ¿No sabés cuál te conviene?{" "}
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-turquesa-oscuro underline underline-offset-4"
          >
            Contanos tu viaje y te recomendamos
          </a>
          .
        </p>
      </div>
    </section>
  );
}
