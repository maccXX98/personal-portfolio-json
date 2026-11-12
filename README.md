# Portafolio Personal

Portafolio y CV de una sola página, bilingüe (español e inglés), construido con Astro. Todo el contenido vive en archivos YAML, así que actualizarlo no requiere tocar los componentes.

## Características

- Contenido definido en `cv.yaml` (español) y `cv_english.yaml` (inglés), con el esquema de [JSON Resume](https://jsonresume.org/schema/)
- Versión en español en `/` y en inglés en `/en/`
- Modo oscuro opcional con un botón, recordado entre visitas
- Paleta de comandos con `Ctrl + K`
- Hoja de estilos de impresión para exportar el CV a PDF
- Sitio 100 % estático, con la foto optimizada en el build

## Requisitos

- Node.js 22 o superior
- [Bun](https://bun.sh/) (el proyecto usa `bun.lock`); npm o pnpm también funcionan

## Uso

```bash
git clone https://github.com/maccXX98/personal-portfolio-json.git
cd personal-portfolio-json
bun install
bun run dev
```

| Comando | Acción |
| --- | --- |
| `bun run dev` | Servidor de desarrollo |
| `bun run build` | Genera el sitio en `dist/` |
| `bun run preview` | Sirve el build localmente |
| `bun run check` | Verificación de tipos |

## Configuración

- **Contenido**: edita `cv.yaml` y `cv_english.yaml`. La experiencia y los proyectos se ordenan solos, del más reciente al más antiguo.
- **Proyectos en línea**: `isActive: true` muestra el indicador verde; úsalo solo para proyectos desplegados.
- **Textos de la interfaz**: `src/i18n.ts`.
- **Colores**: variables CSS en `src/layouts/Layout.astro`.
- **URL del sitio**: se define en `astro.config.mjs` y alimenta las etiquetas `canonical`, `hreflang` y `og:url`. Para otro dominio, usa `SITE_URL` al compilar:

```bash
SITE_URL=https://tu-dominio.com bun run build
```

## Estructura

```text
cv.yaml, cv_english.yaml   Contenido del CV
src/cv-loader.ts           Carga y ordena el CV según el idioma
src/i18n.ts                Textos de la interfaz y formato de fechas
src/components/sections/   Secciones de la página
src/layouts/Layout.astro   Documento base, metadatos y tema
src/pages/                 Rutas (/ y /en/)
```

## Licencia

Este proyecto está bajo la Licencia MIT.

## Agradecimientos

- [Astro](https://astro.build/)
- [HotKeyPad](https://github.com/jesubohr/hotkeypad)
- Diseño inspirado en [minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json)

## Contacto

Mauro Castillo — mauro.castillo.ing.sis@gmail.com
