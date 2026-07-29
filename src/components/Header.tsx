"use client";

import { useState } from "react";
import Logo from "./Logo";
import { IconoWhatsapp, IconoTelefono } from "./Iconos";
import { negocio } from "@/data/negocio";
import { linkWhatsApp, linkTelefono } from "@/lib/whatsapp";

const enlaces = [
  { href: "#flota", texto: "Flota" },
  { href: "#aeropuertos", texto: "Aeropuertos" },
  { href: "#como-funciona", texto: "Cómo funciona" },
  { href: "#requisitos", texto: "Requisitos" },
  { href: "#faq", texto: "Preguntas" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-borde bg-noche/90 backdrop-blur-md">
      <div className="contenedor flex h-24 items-center justify-between gap-4">
        <a href="#inicio" aria-label={`${negocio.nombre} — ir al inicio`}>
          <Logo alto={80} />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {enlaces.map((e) => (
              <li key={e.href}>
                <a
                  href={e.href}
                  className="text-sm font-medium text-crema-media transition-colors hover:text-rosa"
                >
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={linkTelefono()}
            className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-crema transition-colors hover:text-rosa"
          >
            <IconoTelefono className="h-4 w-4" />
            <span className="hidden xl:inline">{negocio.telefono}</span>
            <span className="xl:hidden">Llamar</span>
          </a>
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-frambuesa px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-frambuesa-viva"
          >
            <IconoWhatsapp className="h-4 w-4" />
            Reservar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-borde text-crema lg:hidden"
        >
          <span className="sr-only">
            {abierto ? "Cerrar menú" : "Abrir menú"}
          </span>
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden="true"
          >
            {abierto ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {abierto && (
        <div
          id="menu-movil"
          className="border-t border-borde bg-noche lg:hidden"
        >
          <nav aria-label="Principal móvil" className="contenedor py-4">
            <ul className="flex flex-col">
              {enlaces.map((e) => (
                <li key={e.href}>
                  <a
                    href={e.href}
                    onClick={() => setAbierto(false)}
                    className="block border-b border-borde/60 py-3.5 font-medium text-crema"
                  >
                    {e.texto}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-frambuesa px-5 py-3.5 font-semibold text-white"
              >
                <IconoWhatsapp className="h-5 w-5" />
                Reservar por WhatsApp
              </a>
              <a
                href={linkTelefono()}
                className="flex items-center justify-center gap-2 rounded-full border border-borde px-5 py-3.5 font-semibold text-crema"
              >
                <IconoTelefono className="h-5 w-5" />
                {negocio.telefono}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
