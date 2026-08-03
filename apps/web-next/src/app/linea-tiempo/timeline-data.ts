import type { TimelineVariant, Tone } from '@mariasan001/ui-wc';

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

export type TimelineExample = {
  id: TimelineVariant;
  title: string;
  description: string;
  variant: TimelineVariant;
};

export const TIMELINE_EXAMPLES: TimelineExample[] = [
  {
    id: 'basic',
    title: 'Basica',
    description: 'Eventos en orden cronologico con hora y descripcion.',
    variant: 'basic',
  },
  {
    id: 'icons',
    title: 'Con iconos',
    description: 'Nodos con icono para tipificar el evento.',
    variant: 'icons',
  },
  {
    id: 'status',
    title: 'Con estatus',
    description: 'Pill de estado por evento (alta, revision, cierre).',
    variant: 'status',
  },
  {
    id: 'dense',
    title: 'Compacta',
    description: 'Menor espacio para bitacoras densas.',
    variant: 'dense',
  },
  {
    id: 'alternating',
    title: 'Alternada',
    description: 'Contenido alineado en zigzag.',
    variant: 'alternating',
  },
  {
    id: 'cards',
    title: 'En tarjetas',
    description: 'Cada evento en un bloque con borde.',
    variant: 'cards',
  },
  {
    id: 'complete',
    title: 'Completa',
    description: 'Iconos, estatus y tarjetas juntos.',
    variant: 'complete',
  },
];

export const TIMELINE_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | icons | status | dense | alternating | cards | complete',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'Acento de nodos y pills: primary | accent | dark | neutral | soft',
  },
] as const;

export const SAMPLE_EVENTS = [
  {
    id: '1',
    time: '09:12',
    title: 'Expediente recibido',
    desc: 'Ingreso por ventanilla digital · EXP-2026-01482',
    status: 'Alta',
    icon: 'Tray',
  },
  {
    id: '2',
    time: '11:40',
    title: 'Asignado a revision',
    desc: 'Turnado a Direccion de Operaciones',
    status: 'Revision',
    icon: 'User',
  },
  {
    id: '3',
    time: '16:05',
    title: 'Dictamen emitido',
    desc: 'Resolucion favorable con observaciones',
    status: 'Cerrado',
    icon: 'CheckCircle',
  },
] as const;

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

function itemMarkup(lang: CodeLang, example: TimelineExample, ev: (typeof SAMPLE_EVENTS)[number]): string {
  const i = '  ';
  const v = example.variant;
  const showIcon = v === 'icons' || v === 'complete';
  const showStatus = v === 'status' || v === 'complete' || v === 'cards';

  return `${i}<div class="gob-tl-item" role="listitem">
${i}  <div class="gob-tl-rail">
${i}    ${showIcon ? `<span class="gob-tl-icon">${icon(lang, ev.icon)}</span>` : '<span class="gob-tl-dot"></span>'}
${i}  </div>
${i}  <div class="gob-tl-body">
${i}    <p class="gob-tl-time">${ev.time}</p>
${i}    <p class="gob-tl-title">${ev.title}</p>
${i}    <p class="gob-tl-desc">${ev.desc}</p>
${showStatus ? `${i}    <span class="gob-tl-pill">${ev.status}</span>` : ''}
${i}  </div>
${i}</div>`;
}

export function buildSnippet(lang: CodeLang, example: TimelineExample, tone: Tone): string {
  const body = SAMPLE_EVENTS.map((ev) => itemMarkup(lang, example, ev)).join('\n');
  const imports =
    lang === 'react'
      ? `import { CheckCircle, Tray, User } from '@phosphor-icons/react';
import '@mariasan001/ui-wc';

`
      : lang === 'html'
        ? `<!-- Phosphor thin -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/thin/style.css" />

`
        : `import '@mariasan001/ui-wc';

`;

  return `${imports}<gob-timeline variant="${example.variant}" tone="${tone}">
${body}
</gob-timeline>
`;
}
