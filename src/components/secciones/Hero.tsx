import EscenaTropical from "../EscenaTropical";
import FormularioCotizacion from "./FormularioCotizacion";
import { IconoCheck } from "../Iconos";
import { aeropuertos } from "@/data/negocio";

const sellos = [
  "Sin cargos ocultos",
  "Atención en español",
  "Entrega en el aeropuerto",
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-noche-suave">
      <EscenaTropical className="absolute inset-0 h-full w-full" />
      {/*
        Velo oscuro para que el texto claro mantenga contraste sobre el
        atardecer. En móvil el degradado es vertical (el texto ocupa todo el
        ancho); en escritorio es horizontal, así el atardecer se ve del lado
        derecho, donde no hay texto sobre el fondo.
      */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-noche/95 via-noche/78 to-noche/45 lg:bg-gradient-to-r lg:from-noche/93 lg:via-noche/55 lg:to-noche/10"
      />

      <div className="contenedor relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_minmax(0,26rem)] lg:gap-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-crema/25 bg-crema/10 px-4 py-1.5 text-sm font-semibold text-crema backdrop-blur-sm">
            {aeropuertos.map((a) => a.codigo).join(" · ")} — Sur de Florida
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.05] text-crema sm:text-5xl lg:text-6xl">
            Alquilá tu auto en{" "}
            <span className="text-rosa">Miami y Fort Lauderdale</span> sin
            sorpresas
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-crema/85">
            Te esperamos en el aeropuerto con el auto listo. Precio cerrado por
            WhatsApp, millaje ilimitado y atención de verdad, en tu idioma.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {sellos.map((s) => (
              <li
                key={s}
                className="flex items-center gap-2 font-medium text-crema"
              >
                <IconoCheck className="h-5 w-5 shrink-0 text-rosa" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#flota"
              className="rounded-full bg-crema px-7 py-3.5 font-semibold text-noche transition-colors hover:bg-white"
            >
              Ver la flota
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-crema/30 px-7 py-3.5 font-semibold text-crema transition-colors hover:bg-crema/10"
            >
              Cómo funciona
            </a>
          </div>
        </div>

        <FormularioCotizacion />
      </div>
    </section>
  );
}
