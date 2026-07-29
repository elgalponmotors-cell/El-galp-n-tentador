import Logo from "./Logo";
import { negocio, aeropuertos } from "@/data/negocio";
import { flota } from "@/data/flota";
import { linkWhatsApp, linkTelefono } from "@/lib/whatsapp";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-borde bg-noche-suave text-crema">
      <div className="contenedor grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo alto={112} />
          <p className="mt-4 max-w-xs leading-relaxed text-crema/70">
            Alquiler de autos con entrega en los aeropuertos de Miami y Fort
            Lauderdale. Atención en español.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-crema">Flota</h2>
          <ul className="mt-4 space-y-2.5">
            {flota.map((c) => (
              <li key={c.id}>
                <a
                  href="#flota"
                  className="text-crema/70 transition-colors hover:text-rosa"
                >
                  {c.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-crema">Aeropuertos</h2>
          <ul className="mt-4 space-y-2.5">
            {aeropuertos.map((a) => (
              <li key={a.codigo}>
                <a
                  href="#aeropuertos"
                  className="text-crema/70 transition-colors hover:text-rosa"
                >
                  {a.codigo} — {a.ciudad}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-crema">Contacto</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crema/70 transition-colors hover:text-rosa"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={linkTelefono()}
                className="text-crema/70 transition-colors hover:text-rosa"
              >
                {negocio.telefono}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${negocio.email}`}
                className="break-all text-crema/70 transition-colors hover:text-rosa"
              >
                {negocio.email}
              </a>
            </li>
            <li className="text-crema/70">{negocio.horarios.texto}</li>
          </ul>

          {(negocio.redes.instagram || negocio.redes.facebook) && (
            <ul className="mt-5 flex gap-3">
              {negocio.redes.instagram && (
                <li>
                  <a
                    href={negocio.redes.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-crema/10 transition-colors hover:bg-crema/20"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      aria-hidden
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  </a>
                </li>
              )}
              {negocio.redes.facebook && (
                <li>
                  <a
                    href={negocio.redes.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-crema/10 transition-colors hover:bg-crema/20"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.5V13h2.8v8h3.2Z" />
                    </svg>
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-borde">
        <div className="contenedor flex flex-col gap-2 py-6 text-sm text-crema/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {anio} {negocio.nombre}. Todos los derechos reservados.
          </p>
          <p>Miami · Fort Lauderdale, Florida</p>
        </div>
      </div>
    </footer>
  );
}
