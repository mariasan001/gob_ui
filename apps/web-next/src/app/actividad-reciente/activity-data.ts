import type { ActivityFeedVariant, Tone } from '@mariasan001/ui-wc';

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

export type ActivityExample = {
  id: ActivityFeedVariant;
  title: string;
  description: string;
  variant: ActivityFeedVariant;
};

export const ACTIVITY_EXAMPLES: ActivityExample[] = [
  {
    id: 'basic',
    title: 'Basica',
    description: 'Texto de actividad con marca de tiempo.',
    variant: 'basic',
  },
  {
    id: 'avatar',
    title: 'Con avatar',
    description: 'Iniciales del actor a la izquierda.',
    variant: 'avatar',
  },
  {
    id: 'actions',
    title: 'Con acciones',
    description: 'Boton rapido por fila (ver, aprobar).',
    variant: 'actions',
  },
  {
    id: 'dense',
    title: 'Compacta',
    description: 'Menor padding para paneles laterales.',
    variant: 'dense',
  },
  {
    id: 'grouped',
    title: 'Agrupada',
    description: 'Secciones Hoy / Ayer.',
    variant: 'grouped',
  },
  {
    id: 'unread',
    title: 'No leidas',
    description: 'Resalta items pendientes de lectura.',
    variant: 'unread',
  },
  {
    id: 'complete',
    title: 'Completa',
    description: 'Avatar, acciones y no leidas juntos.',
    variant: 'complete',
  },
];

export const ACTIVITY_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | avatar | actions | dense | grouped | unread | complete',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'Acento de avatar y no leidas: primary | accent | dark | neutral | soft',
  },
] as const;

export const SAMPLE_ACTIVITY = [
  {
    id: '1',
    initials: 'MG',
    actor: 'Maria Gonzalez',
    text: 'cargo un documento en EXP-2026-01482',
    meta: 'hace 12 min',
    group: 'Hoy',
    unread: true,
  },
  {
    id: '2',
    initials: 'JR',
    actor: 'Jorge Ramirez',
    text: 'cambio el estatus a En revision',
    meta: 'hace 1 h',
    group: 'Hoy',
    unread: true,
  },
  {
    id: '3',
    initials: 'AL',
    actor: 'Ana Lopez',
    text: 'cerro el expediente EXP-2026-01390',
    meta: 'ayer',
    group: 'Ayer',
    unread: false,
  },
] as const;

function itemMarkup(
  example: ActivityExample,
  row: (typeof SAMPLE_ACTIVITY)[number],
): string {
  const i = '  ';
  const v = example.variant;
  const showAvatar =
    v === 'avatar' || v === 'complete' || v === 'dense' || v === 'unread';
  const showActions = v === 'actions' || v === 'complete';
  const unread = (v === 'unread' || v === 'complete') && row.unread;

  return `${i}<div class="gob-af-item"${unread ? ' data-unread="true"' : ''} role="article">
${showAvatar ? `${i}  <span class="gob-af-avatar">${row.initials}</span>` : `${i}  <span class="gob-af-dot"></span>`}
${i}  <div class="gob-af-body">
${i}    <p class="gob-af-primary"><strong>${row.actor}</strong> ${row.text}</p>
${i}    <p class="gob-af-secondary">${row.meta}</p>
${i}  </div>
${showActions ? `${i}  <button type="button" class="gob-af-action">Ver</button>` : `${i}  <span class="gob-af-meta">${row.meta}</span>`}
${i}</div>`;
}

export function buildSnippet(
  lang: CodeLang,
  example: ActivityExample,
  tone: Tone,
): string {
  let body: string;
  if (example.variant === 'grouped') {
    body = (['Hoy', 'Ayer'] as const)
      .map((g) => {
        const rows = SAMPLE_ACTIVITY.filter((r) => r.group === g);
        return `  <div class="gob-af-group">${g}</div>
${rows.map((r) => itemMarkup(example, r)).join('\n')}`;
      })
      .join('\n');
  } else {
    body = SAMPLE_ACTIVITY.map((r) => itemMarkup(example, r)).join('\n');
  }

  const imports =
    lang === 'html'
      ? ''
      : `import '@mariasan001/ui-wc';

`;

  return `${imports}<gob-activity-feed variant="${example.variant}" tone="${tone}">
${body}
</gob-activity-feed>
`;
}
