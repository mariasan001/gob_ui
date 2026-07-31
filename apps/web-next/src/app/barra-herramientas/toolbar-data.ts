import type { Tone, ToolbarVariant } from '@mariasan001/ui-wc';

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

export type ToolbarExample = {
  id: ToolbarVariant;
  title: string;
  description: string;
  variant: ToolbarVariant;
};

export const TOOLBAR_EXAMPLES: ToolbarExample[] = [
  {
    id: 'basic',
    title: 'Basica',
    description: 'Titulo de vista y accion primaria.',
    variant: 'basic',
  },
  {
    id: 'actions',
    title: 'Con acciones',
    description: 'Exportar y otras acciones de vista.',
    variant: 'actions',
  },
  {
    id: 'density',
    title: 'Densidad',
    description: 'Conmutador confortable / compacto.',
    variant: 'density',
  },
  {
    id: 'refresh',
    title: 'Refrescar',
    description: 'Boton de actualizar datos del tablero.',
    variant: 'refresh',
  },
  {
    id: 'complete',
    title: 'Completa',
    description: 'Titulo, exportar, refrescar y densidad juntos.',
    variant: 'complete',
  },
];

export const TOOLBAR_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | actions | density | refresh | complete',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'Acento de botones: primary | accent | dark | neutral | soft',
  },
  {
    name: 'dense',
    type: 'boolean',
    defaultValue: 'false',
    body: 'Reduce padding y controles. Usa dense o dense="true".',
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

function bodyFor(lang: CodeLang, example: ToolbarExample): string {
  const i = '  ';
  const v = example.variant;
  const parts: string[] = [];

  parts.push(`${i}<div slot="start" class="gob-tbx-title">
${i}  <strong>Expedientes</strong>
${i}  <small>Consulta operativa</small>
${i}</div>`);

  if (v === 'actions' || v === 'complete' || v === 'basic') {
    if (v !== 'basic') {
      parts.push(
        `${i}<button type="button" class="gob-tbx-btn gob-tbx-btn-ghost">${icon(lang, 'Export')} Exportar</button>`,
      );
    }
    parts.push(
      `${i}<button type="button" class="gob-tbx-btn gob-tbx-btn-primary">Nuevo</button>`,
    );
  }

  if (v === 'refresh' || v === 'complete') {
    parts.push(
      `${i}<button type="button" class="gob-tbx-icon-btn" aria-label="Refrescar">${icon(lang, 'ArrowsClockwise', 18)}</button>`,
    );
  }

  if (v === 'density' || v === 'complete') {
    parts.push(`${i}<div slot="end" class="gob-tbx-seg" role="group" aria-label="Densidad">
${i}  <button type="button" aria-pressed="true">Comodo</button>
${i}  <button type="button" aria-pressed="false">Compacto</button>
${i}</div>`);
  }

  return parts.join('\n');
}

function iconImports(lang: CodeLang): string {
  if (lang === 'html') {
    return `<!-- Phosphor thin -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/thin/style.css" />

`;
  }
  if (lang === 'react') {
    return `import { ArrowsClockwise, Export } from '@phosphor-icons/react';
import '@mariasan001/ui-wc';

`;
  }
  if (lang === 'vue') {
    return `import { PhArrowsClockwise, PhExport } from '@phosphor-icons/vue';
import '@mariasan001/ui-wc';

`;
  }
  return `import '@mariasan001/ui-wc';

`;
}

function interactiveHint(lang: CodeLang): string {
  if (lang === 'react') {
    return `
// Interaccion (React): density + onClick de Exportar/Refrescar/Nuevo con useState.
const [density, setDensity] = useState<'comodo' | 'compacto'>('comodo');
// Refrescar -> setFlash('Datos actualizados'); Exportar -> descarga CSV.
`;
  }
  if (lang === 'vue') {
    return `
<!-- Interaccion (Vue): density ref; handlers para exportar y refrescar. -->
`;
  }
  if (lang === 'angular') {
    return `
// Interaccion (Angular): density en el componente; handlers export/refresh.
`;
  }
  return `
<!-- Interaccion: click en exportar/refrescar y conmutador de densidad. -->
`;
}

export function buildSnippet(
  lang: CodeLang,
  example: ToolbarExample,
  tone: Tone,
): string {
  const body = bodyFor(lang, example);
  const tag = `<gob-toolbar variant="${example.variant}" tone="${tone}">
${body}
</gob-toolbar>`;

  return `${iconImports(lang)}${tag}
${interactiveHint(lang)}`;
}
