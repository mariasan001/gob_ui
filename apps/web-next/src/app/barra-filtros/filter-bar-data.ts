import type { FilterBarVariant, Tone } from '@mariasan001/ui-wc';

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

export type FilterBarExample = {
  id: FilterBarVariant;
  title: string;
  description: string;
  variant: FilterBarVariant;
};

export const FILTER_BAR_EXAMPLES: FilterBarExample[] = [
  {
    id: 'basic',
    title: 'Basica',
    description: 'Selects de dependencia y estatus para consultas.',
    variant: 'basic',
  },
  {
    id: 'search',
    title: 'Con busqueda',
    description: 'Campo de folio o CURP mas filtros de periodo.',
    variant: 'search',
  },
  {
    id: 'chips',
    title: 'Con chips',
    description: 'Filtros rapidos activables para tableros.',
    variant: 'chips',
  },
  {
    id: 'dense',
    title: 'Compacta',
    description: 'Menor altura para paneles densos.',
    variant: 'dense',
  },
  {
    id: 'with-actions',
    title: 'Con acciones',
    description: 'Aplicar y limpiar filtros a la derecha.',
    variant: 'with-actions',
  },
  {
    id: 'complete',
    title: 'Completa',
    description: 'Busqueda, chips, selects y acciones juntas.',
    variant: 'complete',
  },
];

export const FILTER_BAR_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | search | chips | dense | with-actions | complete',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'Acento de chips y botones: primary | accent | dark | neutral | soft',
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

function bodyFor(lang: CodeLang, example: FilterBarExample): string {
  const i = '  ';
  const v = example.variant;
  const parts: string[] = [];

  if (v === 'search' || v === 'complete' || v === 'dense') {
    parts.push(`${i}<label slot="search" class="gob-fb-search">
${i}  ${icon(lang, 'MagnifyingGlass')}
${i}  <input placeholder="Folio o CURP" aria-label="Buscar" />
${i}</label>`);
  }

  if (v === 'chips' || v === 'complete') {
    parts.push(`${i}<button type="button" class="gob-fb-chip" aria-pressed="true">Hoy</button>
${i}<button type="button" class="gob-fb-chip">Semana</button>
${i}<button type="button" class="gob-fb-chip">Mes</button>`);
  }

  if (v === 'basic' || v === 'with-actions' || v === 'complete' || v === 'dense') {
    parts.push(`${i}<select class="gob-fb-select" aria-label="Dependencia">
${i}  <option>Todas las dependencias</option>
${i}  <option>Salud</option>
${i}  <option>Educacion</option>
${i}</select>
${i}<select class="gob-fb-select" aria-label="Estatus">
${i}  <option>Cualquier estatus</option>
${i}  <option>En revision</option>
${i}  <option>Cerrado</option>
${i}</select>`);
  }

  if (v === 'with-actions' || v === 'complete') {
    parts.push(`${i}<button slot="actions" type="button" class="gob-fb-btn">Limpiar</button>
${i}<button slot="actions" type="button" class="gob-fb-btn gob-fb-btn-primary">Aplicar</button>`);
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
    return `import { MagnifyingGlass } from '@phosphor-icons/react';
import '@mariasan001/ui-wc';

`;
  }
  if (lang === 'vue') {
    return `import { PhMagnifyingGlass } from '@phosphor-icons/vue';
import '@mariasan001/ui-wc';

`;
  }
  return `import '@mariasan001/ui-wc';

`;
}

function interactiveHint(lang: CodeLang): string {
  if (lang === 'react') {
    return `
// Interaccion (React): chips, selects y Aplicar/Limpiar con useState.
const [period, setPeriod] = useState('hoy');
const [dep, setDep] = useState('');
const [status, setStatus] = useState('');
const [query, setQuery] = useState('');
// onClick de chip -> setPeriod; Aplicar -> filtrar listado; Limpiar -> reset.
`;
  }
  if (lang === 'vue') {
    return `
<!-- Interaccion (Vue): period, dep, status y query como refs; Aplicar emite filtros. -->
`;
  }
  if (lang === 'angular') {
    return `
// Interaccion (Angular): period/dep/status/query en el componente; Aplicar filtra.
`;
  }
  return `
<!-- Interaccion: escucha change en selects/input y click en chips/botones. -->
`;
}

export function buildSnippet(
  lang: CodeLang,
  example: FilterBarExample,
  tone: Tone,
): string {
  const body = bodyFor(lang, example);
  const tag =
    lang === 'react'
      ? `<gob-filter-bar variant="${example.variant}" tone="${tone}">
${body}
</gob-filter-bar>`
      : `<gob-filter-bar variant="${example.variant}" tone="${tone}">
${body}
</gob-filter-bar>`;

  return `${iconImports(lang)}${tag}
${interactiveHint(lang)}`;
}
