# Cultivos de Salud - Landing Page Corporativa

Sitio web corporativo de alta gama para **Cultivos de Salud**, una empresa de cultivo botánico medicinal regulado ubicada en Isabela, Puerto Rico.

## Características Técnicas
- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS con paleta personalizada (Onyx, Gold, Ivory)
- **Animaciones:** Framer Motion para transiciones suaves y cinematográficas
- **Tipografía:** Cormorant Garamond (Serif) y Outfit (Sans-Serif)
- **Responsivo:** Optimizado para Desktop, Tablet y Mobile

## Estructura del Proyecto
- `src/app`: Rutas y Layout principal.
- `src/components`: Componentes reutilizables (Hero, Navbar, Gallery, etc.)
- `src/data/content.ts`: **Archivo central de contenido**. Edite aquí todos los textos en español y las referencias a imágenes.
- `public/`: Directorio para activos estáticos como el logo.

## Instrucciones de Uso

### 1. Reemplazar el Logo
Sustituya el archivo `public/logo.png` con la versión final del logo. Asegúrese de mantener el nombre o actualizar la referencia en `src/data/content.ts`.

### 2. Cambiar Imágenes Placeholder
Las imágenes actuales son de Unsplash para demostración visual. Para usar fotos reales del cultivo:
1. Suba las fotos a `public/images/`.
2. Actualice las URLs en `src/data/content.ts` (ej. de `https://...` a `/images/cultivo-1.jpg`).

### 3. Editar Textos en Español
Todo el copywriting está centralizado en `src/data/content.ts`. Puede modificar encabezados, descripciones y etiquetas de botones desde este único archivo.

### 4. Ejecución Local
```bash
npm install
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) en su navegador.

## Roadmap de Animación
- Revelación de secciones al hacer scroll (Scroll-triggered reveals).
- Efecto de gradiente metálico en encabezados.
- Transición suave de escala y color en tarjetas de galería.
- Barra de progreso de lectura en la parte superior.
