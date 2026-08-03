import type { EmptyStateVariant, Tone } from '@mariasan001/ui-wc';

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

export type EmptyExample = {
  id: EmptyStateVariant;
  title: string;
  description: string;
  variant: EmptyStateVariant;
};

export const EMPTY_EXAMPLES: EmptyExample[] = [
  {
    id: 'basic',
    title: 'Basico',
    description: 'Titulo y texto cuando no hay datos.',
    variant: 'basic',
  },
  {
    id: 'icon',
    title: 'Con icono',
    description: 'Icono ilustrativo arriba del mensaje.',
    variant: 'icon',
  },
  {
    id: 'actions',
    title: 'Con CTA',
    description: 'Botones para crear o limpiar filtros.',
    variant: 'actions',
  },
  {
    id: 'search',
    title: 'Sin resultados',
    description: 'Vacio tipico tras una busqueda.',
    variant: 'search',
  },
  {
    id: 'error',
    title: 'Error',
    description: 'Fallo al cargar con reintento.',
    variant: 'error',
  },
  {
    id: 'dense',
    title: 'Compacto',
    description: 'Menor altura para paneles laterales.',
    variant: 'dense',
  },
  {
    id: 'complete',
    title: 'Completo',
    description: 'Icono, mensaje y acciones juntos.',
    variant: 'complete',
  },
];

export const EMPTY_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | icon | actions | search | error | dense | complete',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'Acento de icono y CTA: primary | accent | dark | neutral | soft',
  },
] as const;

function copyFor(example: EmptyExample): { title: string; desc: string } {
  switch (example.variant) {
    case 'search':
      return {
        title: 'Sin resultados',
        desc: 'No encontramos expedientes con esos filtros. Prueba otra busqueda.',
      };
    case 'error':
      return {
        title: 'No se pudo cargar',
        desc: 'Ocurrio un problema al obtener los datos. Intenta de nuevo.',
      };
    case 'dense':
      return {
        title: 'Sin actividad',
        desc: 'Aun no hay eventos en este periodo.',
      };
    default:
      return {
        title: 'Sin expedientes',
        desc: 'Cuando existan registros apareceran aqui. Puedes crear el primero.',
      };
  }
}

function icon(lang: CodeLang, name: string, size = 24): string {
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

export function buildSnippet(
  lang: CodeLang,
  example: EmptyExample,
  tone: Tone,
): string {
  const v = example.variant;
  const copy = copyFor(example);
  const showIcon =
    v === 'icon' || v === 'complete' || v === 'search' || v === 'error' || v === 'dense';
  const showActions = v === 'actions' || v === 'complete' || v === 'error';
  const iconName =
    v === 'error' ? 'WarningCircle' : v === 'search' ? 'MagnifyingGlass' : 'FolderOpen';

  const i = '  ';
  const parts: string[] = [`${i}<div class="gob-es-inner">`];
  if (showIcon) {
    parts.push(
      `${i}  <span class="gob-es-icon">${icon(lang, iconName)}</span>`,
    );
  }
  parts.push(`${i}  <p class="gob-es-title">${copy.title}</p>`);
  parts.push(`${i}  <p class="gob-es-desc">${copy.desc}</p>`);
  if (showActions) {
    parts.push(`${i}  <div class="gob-es-actions">
${i}    <button type="button" class="gob-es-btn">Limpiar filtros</button>
${i}    <button type="button" class="gob-es-btn gob-es-btn-primary">${v === 'error' ? 'Reintentar' : 'Nuevo expediente'}</button>
${i}  </div>`);
  }
  parts.push(`${i}</div>`);

  const imports =
    lang === 'react'
      ? `import { FolderOpen, MagnifyingGlass, WarningCircle } from '@phosphor-icons/react';
import '@mariasan001/ui-wc';

`
      : lang === 'html'
        ? `<!-- Phosphor thin -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/thin/style.css" />

`
        : `import '@mariasan001/ui-wc';

`;

  return `${imports}<gob-empty-state variant="${example.variant}" tone="${tone}">
${parts.join('\n')}
</gob-empty-state>
`;
}

export { copyFor };
