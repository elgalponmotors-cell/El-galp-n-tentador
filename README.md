# El Galpón Rent a Car — sitio web

Sitio del negocio de alquiler de autos en los aeropuertos de **Miami (MIA)** y
**Fort Lauderdale (FLL)**. Es una landing en español, pensada para que el
visitante termine escribiendo por WhatsApp con la consulta ya armada.

---

## ⚠️ Antes de publicar: completá tus datos reales

El sitio está funcionando, pero tiene **datos de ejemplo**. Hay que reemplazarlos
antes de mostrarlo a clientes. Están todos marcados con `TODO` y concentrados en
tres archivos:

### 1. `src/data/negocio.ts` — lo más importante

| Campo | Qué poner |
|---|---|
| `telefono` | Tu teléfono real, con el formato que quieras mostrar |
| `whatsapp` | Tu WhatsApp **solo con dígitos**, con código de país. Ej: `17865551234` |
| `email` | Tu email de reservas |
| `direccion` | Calle, ciudad, estado y código postal de la oficina |
| `horarios` | Los horarios reales (el texto que se ve **y** el formato `schema` para Google) |
| `redes` | Links de Instagram y Facebook. Dejalos en `""` y no se muestra el ícono |
| `sitioUrl` | Tu dominio final, cuando lo tengas |
| `aeropuertos[].retiro` | Cómo entregás el auto en cada aeropuerto |
| `requisitos` | Confirmá la **edad mínima** y el **depósito de garantía** |

### 2. `src/data/flota.ts`

Los modelos de ejemplo y los precios. Cada categoría tiene:

- `ejemplos` — los modelos reales que tengas.
- `precioDesde` — el precio por día en dólares. Si lo dejás en `null`, la tarjeta
  muestra *"Consultá el precio"* en vez de inventar un número.

### 3. `src/data/faq.ts`

Revisá que las respuestas coincidan con tus políticas reales (combustible,
cancelación, peajes, conductor adicional).

> **Buscar todo lo pendiente de una:**
> ```bash
> grep -rn "TODO" src/
> ```

---

## Cómo correrlo

Necesitás [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install     # la primera vez
npm run dev     # http://localhost:3000
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo, recarga sola al guardar |
| `npm run build` | Genera el sitio estático en `out/` |
| `npm run lint` | Revisa el código |

## Cómo publicarlo

`npm run build` deja el sitio listo en la carpeta **`out/`**: son archivos HTML
sueltos, sin servidor ni base de datos. Se puede subir gratis a cualquiera de
estos servicios.

- **Netlify** o **Vercel** — conectás este repositorio y se publica solo en cada
  cambio. Build command: `npm run build`. Carpeta de publicación: `out`.
- **GitHub Pages** — subís el contenido de `out/`.
- **Cualquier hosting** — arrastrás `out/` por FTP y listo.

Cuando tengas el dominio, actualizá `sitioUrl` en `src/data/negocio.ts` para que
el sitemap y los datos de Google apunten bien.

---

## Cómo está armado

- **Next.js 15** (App Router) + **TypeScript** + **Tailwind v4**, exportado como
  sitio estático (`output: "export"` en `next.config.ts`).
- **Una sola página** con secciones ancladas: Inicio, Beneficios, Flota,
  Aeropuertos, Cómo funciona, Requisitos, Preguntas y Contacto.
- **Sin backend.** Todos los botones terminan en un link `wa.me` con el mensaje
  ya escrito. El formulario del hero no envía nada a ningún servidor: arma el
  texto con el aeropuerto, las fechas y la categoría, y abre WhatsApp.

```
src/
├─ app/
│  ├─ layout.tsx      metadata SEO, fuentes y datos estructurados de Google
│  ├─ page.tsx        arma la página con las secciones
│  ├─ globals.css     colores y tipografías del sitio
│  ├─ icon.svg        favicon
│  ├─ sitemap.ts · robots.ts
├─ data/              👈 los datos del negocio (lo que vas a editar)
├─ lib/whatsapp.ts    arma los links de WhatsApp — un solo lugar
└─ components/
   ├─ Header · Footer · Logo · BotonWhatsApp
   ├─ Iconos.tsx           íconos SVG
   ├─ AutoIlustracion.tsx  los dibujos de los autos
   ├─ EscenaTropical.tsx   el fondo del inicio
   └─ secciones/           cada sección de la página
```

### Los dibujos de los autos

Las ilustraciones de la flota son **vectores dibujados a mano** (`AutoIlustracion.tsx`),
no fotos: se ven nítidas en cualquier pantalla, pesan pocos KB y mantienen el
mismo estilo entre las cinco tarjetas.

**Si querés usar fotos reales de tu flota:** subilas a `public/flota/` y en
`src/components/secciones/Flota.tsx` reemplazá el `<AutoIlustracion />` por un
`<Image />` de Next.

### La imagen para compartir en redes

`public/og.png` es lo que se ve cuando alguien comparte el link por WhatsApp o
Facebook. Ya está generada y versionada. Solo si querés cambiarle el texto:

```bash
npm install --no-save playwright
npx playwright install chromium
node scripts/generar-og.mjs        # lee scripts/og.html y regenera el PNG
```

Playwright no es una dependencia del proyecto a propósito: pesa cientos de megas
y solo hace falta para esto.

---

## Cosas que quedaron listas pero apagadas

**Testimonios.** El componente existe en
`src/components/secciones/Testimonios.tsx` pero **no se muestra**, porque todavía
no hay reseñas reales. Publicar testimonios inventados engaña a los clientes y en
Estados Unidos la FTC lo trata como publicidad engañosa. Cuando tengas reseñas de
verdad (Google, Facebook), el archivo explica en dos pasos cómo activar la
sección.
