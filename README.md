# Introducción a la Economía — Landing Page

Sitio de presentación del libro *Introducción a la Economía: Una visión desde la República Dominicana*, publicado por [Fundación Empírica](https://empirica.do).

## Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + shadcn/ui |
| Estilos | Tailwind CSS v4 |
| Iconos | Lucide React |
| Formularios | React Hook Form + Zod |
| Contenido | Archivos YAML (`/content`) |
| Gestor de paquetes | pnpm |

## Instalación y desarrollo

```bash
pnpm install
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`.

---

## Modificar el contenido

Todo el texto del sitio está centralizado en la carpeta `/content`. **No es necesario tocar ningún archivo de código** para actualizar textos, títulos, capítulos ni recursos.

```
content/
├── site.yaml        # Header, hero, newsletter y footer
├── features.yaml    # Características del libro (6 tarjetas)
├── chapters.yaml    # Capítulos del libro
└── professors.yaml  # Sección de docentes y formulario
```

Los cambios en estos archivos se reflejan automáticamente al reiniciar el servidor de desarrollo o al hacer un nuevo build.

---

### `site.yaml` — Textos generales

Controla el encabezado, la sección hero, el newsletter y el pie de página.

**Información general**

```yaml
site_name: "Introducción a la Economía"
site_url: "https://empirica.do"
logo: "/images/logo-empirica.png"
book_cover: "/images/book-cover.jpg"
```

> Para cambiar el logo o la portada, reemplaza los archivos en `/public/images/` y actualiza las rutas aquí.

**Navegación**

```yaml
nav:
  - label: "El Libro"
    href: "#libro"
  - label: "Contenido"
    href: "#contenido"
  - label: "Docentes"
    href: "#docentes"

nav_cta:
  label: "Suscribirse"
  href: "#suscribete"
```

Agrega o elimina entradas de la lista `nav` para cambiar los enlaces del menú. El botón de llamada a la acción se controla por separado en `nav_cta`.

**Sección hero**

```yaml
hero:
  badge: "Nueva publicación"
  title: "Introducción a la Economía"
  subtitle: "Una visión desde la República Dominicana"
  description: >
    El primer libro de economía con ejemplos apegados al contexto...
  cta_primary:
    label: "Recibir actualizaciones"
    href: "#suscribete"
  cta_secondary:
    label: "Explorar contenido"
    href: "#contenido"
  byline: "Una publicación de Fundación Empírica"
```

**Newsletter**

```yaml
newsletter:
  badge: "Mantente informado"
  title: "Suscríbete para recibir actualizaciones"
  description: >
    Recibe noticias sobre la fecha de lanzamiento...
  placeholder: "tu@correo.com"
  button: "Suscribirme"
  button_loading: "Suscribiendo..."
  success: "Te has suscrito correctamente."
  disclaimer: "Sin spam. Solo contenido relevante."
```

**Footer**

```yaml
footer:
  description: >
    Produciendo conocimiento económico...
  copyright: "© 2026 Fundación Empírica. Todos los derechos reservados."
  location: "Santo Domingo, República Dominicana"
  links:
    - label: "El Libro"
      href: "#libro"
  brand_links:
    - label: "empirica.do"
      href: "https://empirica.do"
      external: true   # Abre en pestaña nueva
```

---

### `features.yaml` — Características del libro

Controla las tarjetas de la sección "Economía con identidad dominicana".

```yaml
section:
  badge: "Contenido del libro"
  title: "Economía con identidad dominicana"
  description: >
    No es solo teoría...

items:
  - icon: "Globe"
    title: "Contexto Dominicano"
    description: >
      Cada capítulo utiliza datos y ejemplos de la economía dominicana...
```

**Iconos disponibles para `features.yaml`:**

| Valor | Icono |
|-------|-------|
| `Globe` | Globo terráqueo |
| `Landmark` | Monumento / institución |
| `TrendingUp` | Gráfica de tendencia |
| `BarChart3` | Gráfica de barras |
| `Users` | Grupo de personas |
| `BookOpen` | Libro abierto |

Para agregar una característica, añade un nuevo bloque a la lista `items`:

```yaml
  - icon: "TrendingUp"
    title: "Nuevo atributo"
    description: >
      Descripción del nuevo atributo del libro.
```

---

### `chapters.yaml` — Capítulos del libro

Controla los capítulos que aparecen en la sección "Estructura del libro".

```yaml
section:
  badge: "Estructura del libro"
  title: "8 capítulos, una historia completa"
  description: >
    Cada capítulo conecta la teoría económica con la realidad dominicana...

items:
  - number: "01"
    title: "Fundamentos del Pensamiento Económico"
    description: >
      Escasez, costo de oportunidad y toma de decisiones...
```

**Agregar un capítulo:**

```yaml
  - number: "09"
    title: "Título del nuevo capítulo"
    description: >
      Descripción breve del contenido del capítulo.
```

**Eliminar un capítulo:** borra el bloque completo (las tres líneas `number`, `title` y `description`) de la lista `items`.

**Reordenar capítulos:** reordena los bloques en el archivo. El campo `number` es solo texto decorativo; el orden de aparición en la página sigue el orden del archivo YAML.

> Recuerda actualizar el título de la sección (`title: "8 capítulos..."`) si cambias la cantidad de capítulos.

---

### `professors.yaml` — Sección de docentes

Controla los recursos ofrecidos y los campos del formulario de solicitud.

**Recursos listados**

```yaml
resources:
  - icon: "FileText"
    title: "Presentaciones por capítulo"
    description: "Diapositivas listas para usar en el aula..."

  - icon: "BookOpenCheck"
    title: "Banco de ejercicios"
    description: "Problemas y casos de estudio con soluciones..."
```

**Iconos disponibles para `professors.yaml`:**

| Valor | Icono |
|-------|-------|
| `FileText` | Documento de texto |
| `BookOpenCheck` | Libro con verificación |
| `GraduationCap` | Birrete académico |

**Formulario de solicitud**

```yaml
form:
  title: "Solicitar material de apoyo"
  button: "Solicitar acceso"
  button_loading: "Enviando..."
  success_title: "Solicitud recibida"
  success_message: >
    Revisaremos su solicitud y le enviaremos el material...
  fields:
    - id: "prof-name"
      label: "Nombre completo"
      type: "text"
      placeholder: "Dr. Juan Pérez"
```

**Agregar un campo al formulario:**

```yaml
    - id: "prof-subject"
      label: "Área de especialización"
      type: "text"
      placeholder: "Microeconomía, Finanzas..."
```

Los valores válidos para `type` son `text` y `email`.

---

## Reemplazar imágenes

Las imágenes del sitio se encuentran en `/public/images/`:

| Archivo | Uso |
|---------|-----|
| `book-cover.jpg` | Portada del libro en el hero |
| `logo-empirica.png` | Logo en el header y footer |

Para reemplazar una imagen, sustituye el archivo manteniendo el mismo nombre y extensión, o actualiza la ruta correspondiente en `site.yaml`.

---

## Build de producción

```bash
pnpm build
pnpm start
```
