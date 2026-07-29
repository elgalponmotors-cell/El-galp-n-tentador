import { beneficios } from "@/data/negocio";
import { iconos } from "../Iconos";

export default function Beneficios() {
  return (
    <section id="beneficios" className="contenedor py-20 lg:py-28">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-rosa">
          Por qué elegirnos
        </p>
        <h2 className="text-3xl font-extrabold text-crema sm:text-4xl">
          Una rentadora chica, con la atención que las grandes no te dan
        </h2>
        <p className="mt-4 text-lg text-crema-media">
          Somos un equipo local. Eso significa respuestas rápidas, precios
          claros y flexibilidad cuando tu vuelo no llega a horario.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {beneficios.map((b) => {
          const Icono = iconos[b.icono];
          return (
            <li
              key={b.titulo}
              className="rounded-2xl border border-borde bg-noche-media p-6 transition-shadow hover:shadow-lg hover:shadow-black/40"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-vino/25 text-rosa">
                <Icono className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold text-crema">{b.titulo}</h3>
              <p className="mt-2 leading-relaxed text-crema-media">
                {b.detalle}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
