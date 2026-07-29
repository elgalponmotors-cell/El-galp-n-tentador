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
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-frambuesa via-vino to-vino-profundo">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <div>
            <h2 className="text-3xl font-extrabold text-crema sm:text-4xl">
              Contanos tu viaje y te cotizamos hoy
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-crema/85">
              Escribinos con tus fechas y el aeropuerto. Te respondemos con el
              precio final, sin vueltas y sin compromiso.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full bg-crema px-7 py-4 font-bold text-vino-profundo transition-colors hover:bg-white"
              >
                <IconoWhatsapp className="h-5 w-5" />
                Escribir por WhatsApp
              </a>
              <a
                href={linkTelefono()}
                className="flex items-center justify-center gap-2.5 rounded-full border-2 border-crema/45 px-7 py-4 font-bold text-crema transition-colors hover:bg-crema/10"
              >
                <IconoTelefono className="h-5 w-5" />
                Llamar ahora
              </a>
            </div>
          </div>

          <ul className="space-y-5 rounded-2xl bg-noche/25 p-7 backdrop-blur-sm">
            <li className="flex items-start gap-3.5 text-crema">
              <IconoTelefono className="mt-0.5 h-5 w-5 shrink-0 text-crema/75" />
              <div>
                <p className="text-sm font-semibold text-crema/75">Teléfono</p>
                <a href={linkTelefono()} className="font-bold hover:underline">
                  {negocio.telefono}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-crema">
              <IconoEmail className="mt-0.5 h-5 w-5 shrink-0 text-crema/75" />
              <div>
                <p className="text-sm font-semibold text-crema/75">Email</p>
                <a
                  href={`mailto:${negocio.email}`}
                  className="font-bold break-all hover:underline"
                >
                  {negocio.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-crema">
              <IconoReloj className="mt-0.5 h-5 w-5 shrink-0 text-crema/75" />
              <div>
                <p className="text-sm font-semibold text-crema/75">Horarios</p>
                <p className="font-bold">{negocio.horarios.texto}</p>
              </div>
            </li>
            <li className="flex items-start gap-3.5 text-crema">
              <IconoUbicacion className="mt-0.5 h-5 w-5 shrink-0 text-crema/75" />
              <div>
                <p className="text-sm font-semibold text-crema/75">Oficina</p>
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
