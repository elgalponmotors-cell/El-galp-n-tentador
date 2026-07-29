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
| ~~`whatsapp`~~ | ✅ Ya cargado: `13054813777` |
| `telefono` | Está puesto el mismo número que el WhatsApp. Si atendés llamadas en otra línea, cambialo |
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
- `fotos` — fotos reales de la unidad (ver más abajo).

> ⚠️ **Pendiente en la categoría SUV:** las fotos cargadas son de un **Hyundai
> Santa Fe** (el logo se ve en la parrilla, en el portón y en el volante), pero
> se pidió publicarlo como *Kia Sportage 2023*. Hasta aclarar cuál es, el campo
> `ejemplos` dice solo *"SUV mediana, 5 asientos"*: anunciar una marca que no
> coincide con la foto genera reclamos al momento de la entrega.

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

### El mensaje de WhatsApp

Lo arma `src/lib/whatsapp.ts`. Todo mensaje arranca con el saludo de la
constante `SALUDO` — cambiás esa línea y cambian todos los botones del sitio.

- **Botón suelto** (header, botón flotante, contacto): va solo el saludo.
  → *"Hola, estoy interesado en rentar un auto."*
- **Tarjeta de la flota o formulario**: al saludo se le suman los datos que el
  visitante ya eligió, así no tenés que volver a preguntárselos.

Si querés el saludo pelado en **todos** los casos, borrá el bloque de
`detalles` de `mensajeConsulta()` y devolvé siempre `SALUDO`.

```
src/
├─ app/
│  ├─ layout.tsx      metadata SEO, fuentes y datos estructurados de Google
│  ├─ page.tsx        arma la página con las secciones
│  ├─ globals.css     colores y tipografías del sitio
│  ├─ icon.png        favicon (sale del logo)
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

### El logo y la paleta

Los colores del sitio salen del logo: se muestreó la imagen para sacar el negro
cálido del fondo, el frambuesa del disco del sol, el vino de sus bordes, el rosa
de los brillos y el crema del contorno. Están definidos como tokens en
`src/app/globals.css`:

| Token | Color | De dónde sale |
|---|---|---|
| `noche` | `#0a0406` | el negro del fondo del logo |
| `frambuesa` | `#d52b58` | el disco del sol |
| `vino` | `#8e1533` | los bordes del sol |
| `rosa` | `#ec96a8` | los brillos |
| `crema` | `#fbf4eb` | el contorno y la tipografía |

Todo el texto pasa el contraste mínimo AA sobre el fondo oscuro.

**Si cambiás el logo:** reemplazá `scripts/logo-original.jpeg` y corré

```bash
npm install --no-save playwright && npx playwright install chromium
node scripts/recortar-logo.mjs
```

Eso regenera `public/logo.webp` (el del sitio) y `src/app/icon.png` (el favicon).
El script le quita el fondo negro al JPEG con un flood fill desde los bordes:
la palmera y el skyline también son negros, así que un umbral simple los
borraría; el contorno crema del escudo corta la propagación.

### Las fotos de la flota

Cada categoría puede tener fotos reales. Si las tiene, la tarjeta muestra una
**galería** (foto grande + miniaturas para cambiarla). Si no, cae en la
ilustración vectorial. Hoy la SUV tiene fotos y las otras cuatro, ilustración.

**Para agregar fotos a una categoría:**

1. Poné los originales en `scripts/fotos-originales/`.
2. Agregalos a la lista `FOTOS` de `scripts/preparar-fotos.mjs`. El campo `foco`
   es la altura sobre la que se centra el recorte (0 = arriba, 1 = abajo);
   se usa porque en las fotos verticales el auto casi nunca está en el medio.
3. Corré el script:

```bash
npm install --no-save playwright && npx playwright install chromium
node scripts/preparar-fotos.mjs
```

4. Sumá las rutas al campo `fotos` de la categoría en `src/data/flota.ts`, con
   su `alt` describiendo qué se ve.

El script recorta a 4:3, comprime a WebP y **no agranda ninguna foto**: sale al
ancho que realmente tiene, con un techo de 1000 px.

> 📸 **Mandá las fotos en tamaño original.** De las cinco cargadas, cuatro
> llegaron como miniaturas de 270×360 px (así las comprime WhatsApp o el
> compartir de iPhone). Se ven aceptables en las miniaturas, pero borrosas al
> agrandarlas. Si las reenviás desde el carrete en tamaño original y volvés a
> correr el script, quedan nítidas.

### Los dibujos de los autos

Las ilustraciones de las categorías sin foto son **vectores dibujados a mano**
(`AutoIlustracion.tsx`): se ven nítidas en cualquier pantalla y pesan pocos KB.

### La imagen para compartir en redes

`public/og.png` es lo que se ve cuando alguien comparte el link por WhatsApp o
Facebook. Ya está generada y versionada, con el logo y la paleta del sitio.
Solo si querés cambiarle el texto:

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
