"use client";

import { useState } from "react";
import { aeropuertos } from "@/data/negocio";
import { flota } from "@/data/flota";
import { linkWhatsApp } from "@/lib/whatsapp";
import { IconoWhatsapp } from "../Iconos";

/** Fecha de hoy en formato YYYY-MM-DD, para el atributo `min` de los inputs. */
function hoy(): string {
  const d = new Date();
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mes}-${dia}`;
}

const etiquetaCampo =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-crema-media";
const campo =
  "w-full rounded-xl border border-borde bg-noche-media px-3.5 py-3 text-crema shadow-sm transition-colors focus:border-frambuesa focus:outline-none";

export default function FormularioCotizacion() {
  const [aeropuerto, setAeropuerto] = useState<string>(aeropuertos[0].codigo);
  const [retiro, setRetiro] = useState("");
  const [devolucion, setDevolucion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState<string | null>(null);

  const minimo = hoy();

  function enviar(e: React.FormEvent) {
    e.preventDefault();

    if (retiro && devolucion && devolucion < retiro) {
      setError("La fecha de devolución tiene que ser posterior a la de retiro.");
      return;
    }
    setError(null);

    const elegido = aeropuertos.find((a) => a.codigo === aeropuerto);

    // No se envía nada a ningún servidor: se abre WhatsApp con el mensaje listo.
    window.open(
      linkWhatsApp({
        aeropuerto: elegido ? `${elegido.codigo} — ${elegido.ciudad}` : aeropuerto,
        retiro,
        devolucion,
        categoria: categoria || undefined,
      }),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      onSubmit={enviar}
      noValidate
      className="rounded-3xl border border-borde bg-noche-media/95 p-5 shadow-2xl shadow-black/60 backdrop-blur sm:p-6"
      aria-label="Formulario de cotización"
    >
      <p className="font-[family-name:var(--font-titulo)] text-lg font-bold text-crema">
        Pedí tu cotización
      </p>
      <p className="mt-1 mb-5 text-sm text-crema-media">
        Completá los datos y te respondemos por WhatsApp con el precio final.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="aeropuerto" className={etiquetaCampo}>
            Aeropuerto
          </label>
          <select
            id="aeropuerto"
            value={aeropuerto}
            onChange={(e) => setAeropuerto(e.target.value)}
            className={campo}
          >
            {aeropuertos.map((a) => (
              <option key={a.codigo} value={a.codigo}>
                {a.codigo} — {a.ciudad}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="retiro" className={etiquetaCampo}>
            Retiro
          </label>
          <input
            id="retiro"
            type="date"
            value={retiro}
            min={minimo}
            onChange={(e) => {
              setRetiro(e.target.value);
              setError(null);
            }}
            className={campo}
          />
        </div>

        <div>
          <label htmlFor="devolucion" className={etiquetaCampo}>
            Devolución
          </label>
          <input
            id="devolucion"
            type="date"
            value={devolucion}
            min={retiro || minimo}
            onChange={(e) => {
              setDevolucion(e.target.value);
              setError(null);
            }}
            className={campo}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="categoria" className={etiquetaCampo}>
            Tipo de auto
          </label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className={campo}
          >
            <option value="">Sin preferencia / que me recomienden</option>
            {flota.map((c) => (
              <option key={c.id} value={c.nombre}>
                {c.nombre} — {c.pasajeros} pasajeros
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm font-medium text-rosa">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-full bg-frambuesa px-6 py-4 text-base font-bold text-white shadow-lg shadow-frambuesa/25 transition-colors hover:bg-frambuesa-viva"
      >
        <IconoWhatsapp className="h-5 w-5" />
        Cotizar por WhatsApp
      </button>

      <p className="mt-3 text-center text-xs text-crema-tenue">
        Se abre WhatsApp con el mensaje ya escrito. No pagás nada todavía.
      </p>
    </form>
  );
}
