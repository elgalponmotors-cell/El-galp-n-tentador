/**
 * Categorías de la flota.
 *
 * ⚠️ TODO: reemplazar `ejemplos` y `precioDesde` por los autos y precios reales.
 * Poné `precioDesde: null` en cualquier categoría cuyo precio todavía no quieras
 * mostrar: la tarjeta dice "Consultar precio" en lugar de inventar un número.
 */

export type FotoAuto = {
  /** Ruta dentro de /public. */
  src: string;
  /** Descripción para lectores de pantalla y para cuando la foto no carga. */
  alt: string;
};

export type CategoriaAuto = {
  /** Se usa en la URL del ancla y como clave de la ilustración. */
  id: "economico" | "sedan" | "suv" | "minivan" | "convertible";
  nombre: string;
  descripcion: string;
  /** ⚠️ TODO: modelos reales que tengas en la flota. */
  ejemplos: string;
  pasajeros: number;
  valijas: number;
  puertas: number;
  transmision: string;
  /** Precio por día en USD. `null` muestra "Consultar precio". */
  precioDesde: number | null;
  destacado?: boolean;
  /**
   * Fotos reales de la unidad. Si están, la tarjeta muestra la galería; si no,
   * cae en la ilustración vectorial de `AutoIlustracion.tsx`.
   *
   * Para agregar fotos a otra categoría: poné los originales en
   * `scripts/fotos-originales/`, sumalos a `scripts/preparar-fotos.mjs` y
   * corré `node scripts/preparar-fotos.mjs`.
   */
  fotos?: FotoAuto[];
};

export const flota: CategoriaAuto[] = [
  {
    id: "economico",
    nombre: "Económico",
    descripcion:
      "El más rendidor en combustible y el más fácil de estacionar en South Beach. Ideal para parejas o viajes cortos.",
    ejemplos: "Kia Rio, Nissan Versa o similar",
    pasajeros: 5,
    valijas: 2,
    puertas: 4,
    transmision: "Automática",
    precioDesde: null,
  },
  {
    id: "sedan",
    nombre: "Sedán",
    descripcion:
      "Más espacio y más confort para la ruta, sin gastar de más. La opción equilibrada para la mayoría de los viajes.",
    ejemplos: "Toyota Corolla, Honda Civic o similar",
    pasajeros: 5,
    valijas: 3,
    puertas: 4,
    transmision: "Automática",
    precioDesde: null,
    destacado: true,
  },
  {
    id: "suv",
    nombre: "SUV",
    descripcion:
      "Altura, baúl grande y manejo cómodo. Perfecta para familias o para escaparse a los Cayos con equipaje.",
    /**
     * ⚠️ TODO: CONFIRMAR EL MODELO.
     * Las fotos de abajo son de un Hyundai Santa Fe (el logo se ve en la
     * parrilla, en el portón y en el volante), pero se pidió publicarlo como
     * "Kia Sportage 2023". Hasta aclararlo va la descripción genérica, para no
     * anunciar un modelo que no coincide con la foto.
     */
    ejemplos: "SUV mediana, 5 asientos",
    pasajeros: 5,
    valijas: 4,
    puertas: 5,
    transmision: "Automática",
    precioDesde: 70,
    fotos: [
      { src: "/flota/suv-frente.webp", alt: "Frente del SUV, con la parrilla y los faros" },
      { src: "/flota/suv-lateral.webp", alt: "Perfil lateral completo del SUV" },
      { src: "/flota/suv-tres-cuartos.webp", alt: "Vista de tres cuartos trasera del SUV" },
      { src: "/flota/suv-trasera.webp", alt: "Parte trasera del SUV, con el portón y las luces" },
      { src: "/flota/suv-interior.webp", alt: "Interior del SUV: tablero, butacas de cuero y techo panorámico" },
    ],
  },
  {
    id: "minivan",
    nombre: "Minivan",
    descripcion:
      "Hasta 7 pasajeros con todo su equipaje. La opción cuando viaja el grupo completo.",
    ejemplos: "Chrysler Pacifica, Kia Carnival o similar",
    pasajeros: 7,
    valijas: 5,
    puertas: 5,
    transmision: "Automática",
    precioDesde: null,
  },
  {
    id: "convertible",
    nombre: "Convertible",
    descripcion:
      "Porque estás en Miami. Bajá la capota y manejá por Ocean Drive como corresponde.",
    ejemplos: "Ford Mustang, Chevrolet Camaro o similar",
    pasajeros: 4,
    valijas: 2,
    puertas: 2,
    transmision: "Automática",
    precioDesde: null,
  },
];
