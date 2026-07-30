import type { Tone, TopbarVariant } from '@mariasan001/ui-wc';

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
  { id: 'neutral', label: 'Neutral', swatch: '#FFFFFF' },
  { id: 'soft', label: 'Soft', swatch: '#E7D7BD' },
];

export type TopbarExample = {
  id: TopbarVariant;
  title: string;
  description: string;
  variant: TopbarVariant;
};

export const TOPBAR_EXAMPLES: TopbarExample[] = [
  {
    id: 'basic',
    title: 'Basica',
    description: 'Titulo de vista y avatar. Punto de partida limpio.',
    variant: 'basic',
  },
  {
    id: 'search',
    title: 'Con busqueda',
    description: 'Campo central para encontrar expedientes o usuarios.',
    variant: 'search',
  },
  {
    id: 'actions',
    title: 'Con acciones',
    description: 'Botones primarios a la derecha para flujos frecuentes.',
    variant: 'actions',
  },
  {
    id: 'notifications',
    title: 'Con notificaciones',
    description: 'Campana con indicador y acceso al perfil.',
    variant: 'notifications',
  },
  {
    id: 'breadcrumb',
    title: 'Con migas',
    description: 'Ruta de navegacion para ubicar la vista actual.',
    variant: 'breadcrumb',
  },
  {
    id: 'dense',
    title: 'Compacta',
    description: 'Menor altura para tableros densos u operativos.',
    variant: 'dense',
  },
  {
    id: 'complete',
    title: 'Completa',
    description: 'Titulo, busqueda, acciones, campana y avatar juntos.',
    variant: 'complete',
  },
];

export const TOPBAR_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | search | actions | notifications | breadcrumb | dense | complete',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'Acento de avatar, campana y botones: primary | accent | dark | neutral | soft',
  },
  {
    name: 'sticky',
    type: 'boolean',
    defaultValue: 'true',
    body: 'Fija la barra al hacer scroll. Usa sticky="false" para desactivar.',
  },
] as const;

function icon(lang: CodeLang, name: string, size = 16): string {
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

function bodyFor(lang: CodeLang, example: TopbarExample): string {
  const i = '  ';
  const start =
    example.variant === 'breadcrumb'
      ? `${i}<div slot="start" class="start">
${i}  <nav class="crumbs" aria-label="Migas">
${i}    <a href="#">Inicio</a>
${i}    <span>/</span>
${i}    <a href="#">Expedientes</a>
${i}    <span>/</span>
${i}    <strong>Detalle</strong>
${i}  </nav>
${i}</div>`
      : `${i}<div slot="start" class="start">
${i}  <div>
${i}    <strong>Inicio</strong>
${i}    <small>Direccion de Operaciones</small>
${i}  </div>
${i}</div>`;

  const showSearch = example.variant === 'search' || example.variant === 'complete';
  const center = showSearch
    ? `${i}<label slot="center" class="search">
${i}  ${icon(lang, 'MagnifyingGlass')}
${i}  <span>Buscar expediente</span>
${i}</label>`
    : `${i}<div slot="center"></div>`;

  const parts: string[] = [];
  if (example.variant === 'actions' || example.variant === 'complete') {
    parts.push(`${i}<button type="button" class="btn-ghost">Exportar</button>`);
    parts.push(`${i}<button type="button" class="btn-primary">Nuevo</button>`);
  }
  if (
    example.variant === 'notifications' ||
    example.variant === 'complete' ||
    example.variant === 'search' ||
    example.variant === 'dense' ||
    example.variant === 'basic' ||
    example.variant === 'breadcrumb'
  ) {
    parts.push(`${i}<button type="button" class="icon-btn" aria-label="Notificaciones">
${i}  ${icon(lang, 'Bell', 18)}
${i}  <i class="dot"></i>
${i}</button>`);
  }
  parts.push(`${i}<span class="avatar">MG</span>`);

  return `${start}
${center}
${parts.join('\n')}`;
}

function iconImports(lang: CodeLang): string {
  if (lang === 'html') {
    return `<!-- Phosphor thin -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/thin/style.css" />

`;
  }
  if (lang === 'react') {
    return `import { Bell, MagnifyingGlass } from '@phosphor-icons/react';
import '@mariasan001/ui-wc';

`;
  }
  if (lang === 'vue') {
    return `import { PhBell, PhMagnifyingGlass } from '@phosphor-icons/vue';
import '@mariasan001/ui-wc';

`;
  }
  return `import '@mariasan001/ui-wc';

`;
}

export function buildSnippet(
  lang: CodeLang,
  example: TopbarExample,
  tone: Tone,
): string {
  const attrs = ` variant="${example.variant}" tone="${tone}"`;
  const body = bodyFor(lang, example);

  if (lang === 'html') {
    return `<!-- npm i @mariasan001/ui-wc -->
<script type="module">import '@mariasan001/ui-wc';</script>
${iconImports(lang)}<gob-topbar${attrs}>
${body}
</gob-topbar>`;
  }

  if (lang === 'react') {
    const indented = body
      .split('\n')
      .map((line) => (line ? `      ${line}` : ''))
      .join('\n');
    return `${iconImports(lang)}export function BarraSuperior() {
  return (
    <gob-topbar${attrs}>
${indented}
    </gob-topbar>
  );
}`;
  }

  if (lang === 'vue') {
    return `<script setup>
${iconImports(lang).trimEnd()}
</script>

<template>
  <gob-topbar${attrs}>
${body}
  </gob-topbar>
</template>`;
  }

  return `// app.component.html
${iconImports(lang)}<gob-topbar${attrs}>
${body}
</gob-topbar>`;
}
