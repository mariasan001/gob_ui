import type { BreadcrumbVariant, Tone } from '@mariasan001/ui-wc';

export type CodeLang = 'html' | 'react' | 'vue' | 'angular';

export const CODE_LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
];

export const COLOR_OPTIONS: { id: Tone; label: string; swatch: string }[] = [
  { id: 'primary', label: 'Primary', swatch: '#9F2141' },
  { id: 'accent', label: 'Accent', swatch: '#BC945A' },
  { id: 'dark', label: 'Dark', swatch: '#181511' },
  { id: 'neutral', label: 'Neutral', swatch: '#EBEBEB' },
  { id: 'soft', label: 'Soft', swatch: '#E7D7BD' },
];

export type BreadcrumbExample = {
  id: BreadcrumbVariant;
  title: string;
  description: string;
  variant: BreadcrumbVariant;
};

export const BREADCRUMB_EXAMPLES: BreadcrumbExample[] = [
  {
    id: 'basic',
    title: 'Basica',
    description: 'Ruta corta con separador diagonal. Lectura limpia.',
    variant: 'basic',
  },
  {
    id: 'chevron',
    title: 'Con chevron',
    description: 'Misma ruta con separador angular para jerarquias densas.',
    variant: 'chevron',
  },
  {
    id: 'icons',
    title: 'Con icono',
    description: 'Inicio con icono de casa para anclar el arbol.',
    variant: 'icons',
  },
  {
    id: 'collapsed',
    title: 'Colapsada',
    description: 'Niveles intermedios resumidos con puntos suspensivos.',
    variant: 'collapsed',
  },
  {
    id: 'underline',
    title: 'Con subrayado',
    description: 'Enlaces con subrayado al pasar para reforzar la accion.',
    variant: 'underline',
  },
  {
    id: 'dense',
    title: 'Compacta',
    description: 'Tipografia y huecos menores para barras densas.',
    variant: 'dense',
  },
  {
    id: 'complete',
    title: 'Completa',
    description: 'Ruta larga con icono, varios niveles y pagina actual.',
    variant: 'complete',
  },
];

export const BREADCRUMB_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | chevron | icons | collapsed | underline | dense | complete',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'Color de enlaces y acento: primary | accent | dark | neutral | soft',
  },
] as const;

function sep(variant: BreadcrumbVariant): string {
  return variant === 'chevron' ? '›' : '/';
}

function bodyFor(lang: CodeLang, example: BreadcrumbExample): string {
  const i = '  ';
  const s = sep(example.variant);
  const mark = `${i}<span data-sep aria-hidden="true">${s}</span>`;

  if (example.variant === 'collapsed') {
    return `${i}<a href="#">Inicio</a>
${mark}
${i}<span data-sep aria-hidden="true">…</span>
${mark}
${i}<a href="#">Expedientes</a>
${mark}
${i}<strong aria-current="page">Detalle</strong>`;
  }

  if (example.variant === 'icons' || example.variant === 'complete') {
    const home =
      lang === 'react'
        ? `${i}<a href="#" data-crumb class="crumb-icon">${icon(lang, 'House', 14)} Inicio</a>`
        : `${i}<a href="#" data-crumb class="crumb-icon">${icon(lang, 'House', 14)} Inicio</a>`;

    if (example.variant === 'icons') {
      return `${home}
${mark}
${i}<a href="#">Expedientes</a>
${mark}
${i}<strong aria-current="page">Detalle</strong>`;
    }

    return `${home}
${mark}
${i}<a href="#">Operaciones</a>
${mark}
${i}<a href="#">Expedientes</a>
${mark}
${i}<a href="#">2026</a>
${mark}
${i}<strong aria-current="page">EXP-1842</strong>`;
  }

  return `${i}<a href="#">Inicio</a>
${mark}
${i}<a href="#">Expedientes</a>
${mark}
${i}<strong aria-current="page">Detalle</strong>`;
}

function icon(lang: CodeLang, name: string, size = 14): string {
  const kebab = name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
  if (lang === 'react') return `<${name} weight="thin" size={${size}} aria-hidden="true" />`;
  if (lang === 'vue') return `<Ph${name} weight="thin" :size="${size}" aria-hidden="true" />`;
  if (lang === 'angular') {
    return `<ph-${kebab} weight="thin" size="${size}" aria-hidden="true"></ph-${kebab}>`;
  }
  return `<i class="ph-thin ph-${kebab}" aria-hidden="true"></i>`;
}

function iconImports(lang: CodeLang, example: BreadcrumbExample): string {
  const needsHouse = example.variant === 'icons' || example.variant === 'complete';
  if (lang === 'html') {
    return needsHouse
      ? `<!-- Phosphor thin -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/thin/style.css" />

`
      : '';
  }
  if (lang === 'react') {
    return needsHouse
      ? `import { House } from '@phosphor-icons/react';
import '@mariasan001/ui-wc';

`
      : `import '@mariasan001/ui-wc';

`;
  }
  if (lang === 'vue') {
    return needsHouse
      ? `import { PhHouse } from '@phosphor-icons/vue';
import '@mariasan001/ui-wc';

`
      : `import '@mariasan001/ui-wc';

`;
  }
  return `import '@mariasan001/ui-wc';

`;
}

export function buildSnippet(
  lang: CodeLang,
  example: BreadcrumbExample,
  tone: Tone,
): string {
  const attrs = ` variant="${example.variant}" tone="${tone}"`;
  const body = bodyFor(lang, example);

  if (lang === 'html') {
    return `<!-- npm i @mariasan001/ui-wc -->
<script type="module">import '@mariasan001/ui-wc';</script>
${iconImports(lang, example)}<gob-breadcrumb${attrs}>
${body}
</gob-breadcrumb>`;
  }

  if (lang === 'react') {
    const indented = body
      .split('\n')
      .map((line) => (line ? `      ${line}` : ''))
      .join('\n');
    return `${iconImports(lang, example)}export function MigasDePan() {
  return (
    <gob-breadcrumb${attrs}>
${indented}
    </gob-breadcrumb>
  );
}`;
  }

  if (lang === 'vue') {
    return `<script setup>
${iconImports(lang, example).trimEnd()}
</script>

<template>
  <gob-breadcrumb${attrs}>
${body}
  </gob-breadcrumb>
</template>`;
  }

  return `// app.component.html
${iconImports(lang, example)}<gob-breadcrumb${attrs}>
${body}
</gob-breadcrumb>`;
}
