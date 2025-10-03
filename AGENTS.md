# Guía para agentes de codificación

## Contexto del proyecto
- Este repositorio contiene un portafolio personal estático construido con **HTML**, **CSS** y **JavaScript**.
- El `index.html` se apoya principalmente en Bootstrap 5, Animate.css, Swiper y Boxicons cargados desde CDNs.
- Los estilos personalizados están en `assets/css/style.css` y la lógica en `assets/js/main.js`. Los recursos estáticos (imágenes, íconos y CV en PDF) viven en la carpeta `assets/`.

## Flujo de trabajo recomendado
- No existe un sistema de build; basta con abrir `index.html` en el navegador o servir la carpeta raíz con `npx serve` o `python -m http.server 8080` para validar los cambios.
- Mantén las rutas relativas tal como están: los enlaces asumen que el sitio se desplegará en GitHub Pages desde la raíz del repositorio.
- Asegúrate de preservar el favicon (`/faviconV2.ico`) y los recursos utilizados por el `navbar` (imagen `assets/img/gustavo.png` y PDF en `assets/docs/`).

## Convenciones de código
- **HTML**: conservar la indentación con 4 espacios, preferir atributos y clases en minúsculas y separar secciones con comentarios como en el archivo original.
- **CSS**: aprovechar las variables definidas en `:root`. Evita definir fuentes o colores in-line en el HTML. Agrupa los estilos relacionados y documenta con comentarios breves cuando introduzcas nuevos bloques.
- **JavaScript**: el código existente asume que el DOM está disponible. Si agregas nuevos listeners o efectos, encapsúlalos en `DOMContentLoaded` cuando dependan de elementos renderizados más tarde.
- **Assets**: optimiza imágenes antes de añadirlas y coloca documentos en `assets/docs`. Si agregas fuentes personalizadas, declara los `@import` al inicio de `style.css` o añade archivos locales en una nueva carpeta `assets/fonts`.

## Pautas de accesibilidad y SEO
- Usa textos alternativos descriptivos en todas las imágenes y `aria-label` en íconos interactivos.
- Mantén actualizados los metadatos (`<meta name="description">`, etiquetas Open Graph y Twitter) para mejorar el rendimiento SEO.
- Revisa el contraste de color cuando introduzcas nuevos elementos para que cumplan con WCAG AA.

## Ideas de mejora identificadas
1. **Metadatos SEO incompletos**: `index.html` define etiquetas de descripción y palabras clave vacías. Rellenarlas y añadir etiquetas Open Graph/Twitter mejoraría el snippet de búsqueda y la compartibilidad.
2. **Carga duplicada de Bootstrap**: actualmente se incluye dos veces el mismo CSS de Bootstrap. Eliminar la segunda referencia reduciría el peso de la página y posibles conflictos de estilo.
3. **Variable de fuente sin valor**: en `style.css` la variable `--satoshi-font` está vacía. Definirla con la pila de fuentes deseada o utilizar directamente `font-family` evitará herencias inesperadas.
4. **Robustez del JavaScript**: varias funciones (por ejemplo, el acceso directo a `typing-text` o `scrollIndicator`) asumen la existencia del elemento. Añadir verificaciones (`if (typingText) { ... }`) evitaría errores si se reutiliza el script en otras páginas.
5. **Animaciones y rendimiento**: el `IntersectionObserver` añade clases en cada cambio de visibilidad. Se puede mejorar controlando `unobserve` para secciones que ya se animaron o usando la opción `once` para evitar reflows constantes.
6. **Accesibilidad del indicador de scroll**: el botón que hace scroll suave no expone un texto accesible ni un rol de botón. Añadir `role="button"`, `aria-label` y soporte para teclado mejoraría la usabilidad.

Mantén este archivo actualizado cuando cambien las dependencias o se implementen las mejoras propuestas.
