import type { ListVariant, Tone } from '@mariasan001/ui-wc';

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

export type ListExample = {
  id: ListVariant;
  title: string;
  description: string;
  variant: ListVariant;
};

export const LIST_EXAMPLES: ListExample[] = [
  {
    id: 'basic',
    title: 'Basica',
    description: 'Titulo y texto secundario por fila.',
    variant: 'basic',
  },
  {
    id: 'avatar',
    title: 'Con avatar',
    description: 'Iniciales o foto a la izquierda.',
    variant: 'avatar',
  },
  {
    id: 'meta',
    title: 'Con meta',
    description: 'Fecha, folio o pill de estatus a la derecha.',
    variant: 'meta',
  },
  {
    id: 'actions',
    title: 'Con accion',
    description: 'Menu o boton por fila.',
    variant: 'actions',
  },
  {
    id: 'dense',
    title: 'Compacta',
    description: 'Menor padding para listados densos.',
    variant: 'dense',
  },
  {
    id: 'selectable',
    title: 'Seleccionable',
    description: 'Checkbox para seleccionar filas.',
    variant: 'selectable',
  },
  {
    id: 'complete',
    title: 'Completa',
    description: 'Avatar, meta, accion y seleccion juntos.',
    variant: 'complete',
  },
];

export const LIST_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | avatar | meta | actions | dense | selectable | complete',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'Acento de avatar y pills: primary | accent | dark | neutral | soft',
  },
] as const;

export const SAMPLE_ROWS = [
  {
    id: '1',
    initials: 'MG',
    name: 'Maria Gonzalez',
    detail: 'EXP-2026-01482 · Salud',
    meta: 'Hoy',
    status: 'En revision',
  },
  {
    id: '2',
    initials: 'JR',
    name: 'Jorge Ramirez',
    detail: 'EXP-2026-01491 · Educacion',
    meta: 'Ayer',
    status: 'Cerrado',
  },
  {
    id: '3',
    initials: 'AL',
    name: 'Ana Lopez',
    detail: 'EXP-2026-01502 · Finanzas',
    meta: '2d',
    status: 'Pendiente',
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

function rowMarkup(lang: CodeLang, example: ListExample, row: (typeof SAMPLE_ROWS)[number]): string {
  const i = '  ';
  const v = example.variant;
  const showAvatar = v === 'avatar' || v === 'complete' || v === 'dense';
  const showMeta = v === 'meta' || v === 'complete';
  const showAction = v === 'actions' || v === 'complete';
  const showCheck = v === 'selectable' || v === 'complete';

  const parts: string[] = [];
  if (showCheck) {
    parts.push(
      `${i}  <input class="gob-list-check" type="checkbox" aria-label="Seleccionar ${row.name}" />`,
    );
  }
  if (showAvatar) {
    parts.push(`${i}  <span class="gob-list-avatar">${row.initials}</span>`);
  }
  parts.push(`${i}  <div class="gob-list-body">
${i}    <p class="gob-list-primary">${row.name}</p>
${i}    <p class="gob-list-secondary">${row.detail}</p>
${i}  </div>`);
  if (showMeta) {
    parts.push(`${i}  <div class="gob-list-meta">
${i}    <span>${row.meta}</span>
${i}    <span class="gob-list-pill">${row.status}</span>
${i}  </div>`);
  }
  if (showAction) {
    parts.push(
      `${i}  <button type="button" class="gob-list-action" aria-label="Mas acciones">${icon(lang, 'DotsThree', 18)}</button>`,
    );
  }

  return `${i}<div class="gob-list-item" role="listitem">
${parts.join('\n')}
${i}</div>`;
}

function bodyFor(lang: CodeLang, example: ListExample): string {
  return SAMPLE_ROWS.map((row) => rowMarkup(lang, example, row)).join('\n');
}

function iconImports(lang: CodeLang): string {
  if (lang === 'html') {
    return `<!-- Phosphor thin -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/thin/style.css" />

`;
  }
  if (lang === 'react') {
    return `import { DotsThree } from '@phosphor-icons/react';
import '@mariasan001/ui-wc';

`;
  }
  if (lang === 'vue') {
    return `import { PhDotsThree } from '@phosphor-icons/vue';
import '@mariasan001/ui-wc';

`;
  }
  return `import '@mariasan001/ui-wc';

`;
}

function interactiveHint(lang: CodeLang): string {
  if (lang === 'react') {
    return `
// Interaccion (React): selected Set + onClick de accion con useState.
const [selected, setSelected] = useState<Set<string>>(new Set());
// Toggle checkbox -> actualizar selected; DotsThree -> menu de fila.
`;
  }
  if (lang === 'vue') {
    return `
<!-- Interaccion (Vue): selected como Set/ref; handler de accion por fila. -->
`;
  }
  if (lang === 'angular') {
    return `
// Interaccion (Angular): selected en el componente; handler de accion por fila.
`;
  }
  return `
<!-- Interaccion: change en checkboxes y click en acciones por fila. -->
`;
}

export function buildSnippet(
  lang: CodeLang,
  example: ListExample,
  tone: Tone,
): string {
  const body = bodyFor(lang, example);
  const tag = `<gob-list variant="${example.variant}" tone="${tone}">
${body}
</gob-list>`;

  return `${iconImports(lang)}${tag}
${interactiveHint(lang)}`;
}
