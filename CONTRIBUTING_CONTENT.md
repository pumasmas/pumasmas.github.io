# Guía de Creación de Contenido para Pu++

¡Gracias por tu interés en contribuir al portal de Pu++! Esta guía te ayudará a crear artículos para la Wiki y posts para el Blog utilizando nuestro sistema basado en Markdown (MDX).

## Tabla de Contenidos

1.  [Estructura de Carpetas](#estructura-de-carpetas)
2.  [Creando una Entrada de Wiki](#creando-una-entrada-de-wiki)
3.  [Creando un Post de Blog](#creando-un-post-de-blog)
4.  [Herramientas y Sintaxis](#herramientas-y-sintaxis)

---

## Estructura de Carpetas

Todo el contenido vive dentro de la carpeta `src/content/`:

*   **Wiki:** `src/content/wiki/` - Aquí van los tutoriales de algoritmos.
*   **Blog:** `src/content/blog/` - Aquí van noticias y anuncios.

Los archivos deben tener la extensión `.mdx` o `.md`.

---

## Creando una Entrada de Wiki

Las entradas de la Wiki son el núcleo de nuestro material de estudio.

### 1. Archivo y Ubicación
Crea un archivo con un nombre descriptivo en minúsculas y guiones (kebab-case) en `src/content/wiki/`.
Ejemplo: `src/content/wiki/segment-tree-lazy.mdx`.

### 2. Frontmatter (Metadatos)
Al inicio del archivo, debes incluir un bloque YAML delimitado por `---`.

```yaml
---
title: 'Segment Tree con Lazy Propagation'
description: 'Optimización para actualizaciones en rango en O(log N).'
difficulty: 'Expert'
topic: 'Estructuras de Datos'
prerequisites: ['segment-tree-basics', 'recursion-basics']
relatedProblems:
  - name: 'Horrible Queries'
    url: 'https://www.spoj.com/problems/HORRIBLE/'
    platform: 'SPOJ'
lastUpdated: 2026-02-05
---
```

**Campos:**
*   `title` (Requerido): Título principal del artículo.
*   `description` (Requerido): Breve resumen que aparece en las tarjetas y búsquedas.
*   `difficulty` (Requerido): Nivel de dificultad.
    *   Opciones: `Newbie`, `Pupil`, `Specialist`, `Expert`, `Candidate Master`, `Master`, `Grandmaster`.
*   `topic` (Requerido): Categoría del tema (ej. "Grafos", "Programación Dinámica"). Esto agrupa la entrada en el menú lateral.
*   `prerequisites` (Opcional): Lista de *slugs* (nombres de archivo sin extensión) de otros artículos requeridos.
*   `relatedProblems` (Opcional): Lista de problemas para practicar.
    *   `name`: Nombre del problema.
    *   `url`: Link al problema.
    *   `platform`: Juez (Codeforces, LeetCode, etc.).

### 3. Contenido
Escribe tu explicación usando Markdown estándar. Puedes usar subtítulos (`##`, `###`), listas, negritas, etc.

---

## Creando un Post de Blog

Ideal para anuncios, resúmenes de concursos o editoriales sueltos.

### 1. Archivo y Ubicación
Crea tu archivo en `src/content/blog/`.
Ejemplo: `src/content/blog/resumen-regional-2025.mdx`.

### 2. Frontmatter

```yaml
---
title: 'Resumen del Regional 2025'
description: 'Nuestra experiencia en la final regional del ICPC.'
pubDate: 'Feb 10 2026'
heroImage: '/blog-placeholder-1.svg'
tags: ['icpc', 'concursos', 'experiencias']
author: 'Equipo Pu++'
---
```

---

## Herramientas y Sintaxis

### Fórmulas Matemáticas (LaTeX)
Usamos **KaTeX** para renderizar matemáticas.
*   En línea: Usa un solo signo de dólar `$ E = mc^2 $`.
*   Bloque: Usa doble signo de dólar.
    ```latex
    $$
    \sum_{i=1}^{n} i = \frac{n(n+1)}{2}
    $$
    ```

### Bloques de Código
Usa tres comillas invertidas y especifica el lenguaje (cpp, python, js, etc.).
El sitio agregará automáticamente un botón de **Copiar**.

```cpp
// Tu código aquí
int main() {
    return 0;
}
```

### Imágenes
Coloca tus imágenes en la carpeta `public/` y referéncialas directamente con `/nombre-imagen.png`.

```markdown
![Descripción](/diagrama-grafo.png)
```
