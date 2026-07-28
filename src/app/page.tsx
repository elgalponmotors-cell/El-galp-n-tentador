import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import Hero from "@/components/secciones/Hero";
import Beneficios from "@/components/secciones/Beneficios";
import Flota from "@/components/secciones/Flota";
import Aeropuertos from "@/components/secciones/Aeropuertos";
import ComoFunciona from "@/components/secciones/ComoFunciona";
import Requisitos from "@/components/secciones/Requisitos";
import Faq from "@/components/secciones/Faq";
import Contacto from "@/components/secciones/Contacto";

/*
 * La sección <Testimonios /> existe en components/secciones/Testimonios.tsx
 * pero NO se renderiza: está esperando reseñas reales. Ver el comentario al
 * inicio de ese archivo para activarla.
 */

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-profundo focus:px-5 focus:py-3 focus:font-semibold focus:text-arena"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <Beneficios />
        <Flota />
        <Aeropuertos />
        <ComoFunciona />
        <Requisitos />
        <Faq />
        <Contacto />
      </main>

      <Footer />
      <BotonWhatsApp />
    </>
  );
}
