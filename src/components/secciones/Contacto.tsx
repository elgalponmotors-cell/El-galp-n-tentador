import { negocio } from "@/data/negocio";
import { linkWhatsApp, linkTelefono } from "@/lib/whatsapp";
import {
  IconoWhatsapp,
  IconoTelefono,
  IconoEmail,
  IconoReloj,
  IconoUbicacion,
} from "../Iconos";

export default function Contacto() {
  const { direccion } = negocio;

  return (
    <section id="contacto" className="contenedor py-20 lg:py-28">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-turquesa to-turquesa-oscuro">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Contanos tu viaje y te cotizamos hoy
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Escribinos con tus fechas y el aeropuerto. Te respondemos con el
              precio final, sin vueltas y sin compromiso.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 font-bold text-turquesa-oscuro transition-colors hover:bg-arena"
              >
                <IconoWhatsapp className="h-5 w-5" />
                Escribir por WhatsApp
              </a>
              <a
                href={linkTelefono()}
                className="flex items-center justify-center gap-2.5 rounded-full border-2 border-white/40 px-7 py-4 font-bold text-white transition-colors hover:bg-white/10"
              >
                <IconoTelefono className="h-5 w-5" />
                Llamar ahora
              </a>
            </div>
          </div>

          <ul className="space-y-5 rounded-2xl bg-white/10 p-7 backdrop-blur-sm">
            <li className="flex items-start gap-3.5 text-white">
              <IconoTelefono className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
              <div>
                <p className="text-sm font-semibold text-white/70">Teléfono</p>
                <a href={linkTelefono()} className="font-bold hover:underline">
                  {negocio.telefono}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-white">
              <IconoEmail className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
              <div>
                <p className="text-sm font-semibold text-white/70">Email</p>
                <a
                  href={`mailto:${negocio.email}`}
                  className="font-bold break-all hover:underline"
                >
                  {negocio.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-white">
              <IconoReloj className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
              <div>
                <p className="text-sm font-semibold text-white/70">Horarios</p>
                <p className="font-bold">{negocio.horarios.texto}</p>
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-white">
              <IconoUbicacion className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
              <div>
                <p className="text-sm font-semibold text-white/70">Oficina</p>
                <p className="font-bold">
                  {direccion.calle}
                  <br />
                  {direccion.ciudad}, {direccion.estado} {direccion.codigoPostal}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
