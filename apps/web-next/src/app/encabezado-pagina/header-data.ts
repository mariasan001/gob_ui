import type { PageHeaderVariant, Tone } from '@mariasan001/ui-wc';

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

export type HeaderExample = {
  id: PageHeaderVariant;
  title: string;
  description: string;
  variant: PageHeaderVariant;
};

export const HEADER_EXAMPLES: HeaderExample[] = [
  {
    id: 'basic',
    title: 'Basico',
    description: 'Solo el titulo de la vista. Punto de partida limpio.',
    variant: 'basic',
  },
  {
    id: 'description',
    title: 'Con descripcion',
    description: 'Titulo y texto de apoyo para contextualizar la pantalla.',
    variant: 'description',
  },
  {
    id: 'breadcrumb',
    title: 'Con migas',
    description: 'Ruta jerarquica encima del titulo para orientarse.',
    variant: 'breadcrumb',
  },
  {
    id: 'actions',
    title: 'Con acciones',
    description: 'Botones primarios a la derecha para flujos frecuentes.',
    variant: 'actions',
  },
  {
    id: 'status',
    title: 'Con estado',
    description: 'Chip de estado junto al titulo para lectura rapida.',
    variant: 'status',
  },
  {
    id: 'dense',
    title: 'Compacto',
    description: 'Menor altura tipografica para tableros densos.',
    variant: 'dense',
  },
  {
    id: 'complete',
    title: 'Completo',
    description: 'Migas, titulo, estado, descripcion y acciones juntos.',
    variant: 'complete',
  },
];

export const HEADER_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | description | breadcrumb | actions | status | dense | complete',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'Acento de estado y botones: primary | accent | dark | neutral | soft',
  },
] as const;

function bodyFor(example: HeaderExample): string {
  const i = '  ';
  const parts: string[] = [];

  const showCrumb =
    example.variant === 'breadcrumb' || example.variant === 'complete';
  const showDesc =
    example.variant === 'description' ||
    example.variant === 'complete' ||
    example.variant === 'dense';
  const showStatus =
    example.variant === 'status' || example.variant === 'complete';
  const showActions =
    example.variant === 'actions' || example.variant === 'complete';

  if (showCrumb) {
    parts.push(`${i}<nav slot="breadcrumb" class="crumbs" aria-label="Migas">
${i}  <a href="#">Inicio</a>
${i}  <span>/</span>
${i}  <a href="#">Expedientes</a>
${i}  <span>/</span>
${i}  <strong>Detalle</strong>
${i}</nav>`);
  }

  parts.push(
    `${i}<h1 slot="title">${example.variant === 'dense' ? 'Cola operativa' : 'Expedientes'}</h1>`,
  );

  if (showStatus) {
    parts.push(`${i}<span slot="meta" class="status">En revision</span>`);
  }

  if (showDesc) {
    parts.push(
      `${i}<p slot="description">${
        example.variant === 'dense'
          ? 'Turno matutino · 24 pendientes'
          : 'Consulta y da seguimiento a los expedientes abiertos de la direccion.'
      }</p>`,
    );
  }

  if (showActions) {
    parts.push(`${i}<button type="button" class="btn-ghost">Exportar</button>`);
    parts.push(`${i}<button type="button" class="btn-primary">Nuevo</button>`);
  }

  return parts.join('\n');
}

function iconImports(lang: CodeLang): string {
  if (lang === 'html') return '';
  if (lang === 'react') {
    return `import '@mariasan001/ui-wc';

`;
  }
  if (lang === 'vue') {
    return `import '@mariasan001/ui-wc';

`;
  }
  return `import '@mariasan001/ui-wc';

`;
}

export function buildSnippet(
  lang: CodeLang,
  example: HeaderExample,
  tone: Tone,
): string {
  const attrs = ` variant="${example.variant}" tone="${tone}"`;
  const body = bodyFor(example);

  if (lang === 'html') {
    return `<!-- npm i @mariasan001/ui-wc -->
<script type="module">import '@mariasan001/ui-wc';</script>

<gob-page-header${attrs}>
${body}
</gob-page-header>`;
  }

  if (lang === 'react') {
    const indented = body
      .split('\n')
      .map((line) => (line ? `      ${line}` : ''))
      .join('\n');
    return `${iconImports(lang)}export function EncabezadoPagina() {
  return (
    <gob-page-header${attrs}>
${indented}
    </gob-page-header>
  );
}`;
  }

  if (lang === 'vue') {
    return `<script setup>
${iconImports(lang).trimEnd()}
</script>

<template>
  <gob-page-header${attrs}>
${body}
  </gob-page-header>
</template>`;
  }

  return `// app.component.html
${iconImports(lang)}<gob-page-header${attrs}>
${body}
</gob-page-header>`;
}
