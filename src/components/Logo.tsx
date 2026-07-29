import Image from "next/image";
import { negocio } from "@/data/negocio";

/**
 * El logo real del negocio.
 *
 * `public/logo.webp` sale del logo original recortado: el archivo que nos
 * pasaron era un JPEG con fondo negro, así que se le quitó el fondo para que
 * el escudo se apoye sobre cualquier color. Ver `scripts/recortar-logo.mjs`.
 *
 * El escudo ya incluye el nombre, por eso no lleva texto al lado: duplicarlo
 * competiría con el logo.
 */
export default function Logo({
  className = "",
  alto = 60,
}: {
  className?: string;
  /** Alto en píxeles. El ancho se calcula solo para no deformarlo. */
  alto?: number;
}) {
  const proporcion = 480 / 492;

  return (
    <Image
      src="/logo.webp"
      alt={negocio.nombre}
      width={Math.round(alto * proporcion)}
      height={alto}
      priority
      className={className}
    />
  );
}
