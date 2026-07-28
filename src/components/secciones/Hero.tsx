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
    <section id="inicio" className="relative overflow-hidden bg-profundo">
      <EscenaTropical className="absolute inset-0 h-full w-full" />
      {/*
        Velo oscuro para que el texto claro mantenga contraste sobre el
        atardecer. En móvil el degradado es vertical (el texto ocupa todo el
        ancho); en escritorio es horizontal, así el atardecer se ve del lado
        derecho, donde no hay texto sobre el fondo.
      */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-profundo/95 via-profundo/80 to-profundo/55 lg:bg-gradient-to-r lg:from-profundo/92 lg:via-profundo/62 lg:to-profundo/20"
      />

      <div className="contenedor relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_minmax(0,26rem)] lg:gap-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-arena/25 bg-arena/10 px-4 py-1.5 text-sm font-semibold text-arena backdrop-blur-sm">
            {aeropuertos.map((a) => a.codigo).join(" · ")} — Sur de Florida
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.05] text-arena sm:text-5xl lg:text-6xl">
            Alquilá tu auto en{" "}
            <span className="text-sol">Miami y Fort Lauderdale</span> sin
            sorpresas
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-arena/85">
            Te esperamos en el aeropuerto con el auto listo. Precio cerrado por
            WhatsApp, millaje ilimitado y atención de verdad, en tu idioma.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {sellos.map((s) => (
              <li
                key={s}
                className="flex items-center gap-2 font-medium text-arena"
              >
                <IconoCheck className="h-5 w-5 shrink-0 text-turquesa" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#flota"
              className="rounded-full bg-arena px-7 py-3.5 font-semibold text-profundo transition-colors hover:bg-white"
            >
              Ver la flota
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-arena/35 px-7 py-3.5 font-semibold text-arena transition-colors hover:bg-arena/10"
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
