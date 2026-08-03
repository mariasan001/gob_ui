import type { ActivityFeedVariant, Tone } from '@mariasan001/ui-wc';

export type CodeLang = 'html' | 'react' | 'vue' | 'angular';

export const CODE_LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
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
    id: 'status',
    title: 'Con estatus',
    description: 'Pill de semaforo institucional por actividad.',
    variant: 'status',
  },
  {
    id: 'complete',
    title: 'Completa',
    description: 'Avatar, estatus, acciones y no leidas juntos.',
    variant: 'complete',
  },
];

export const ACTIVITY_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | avatar | actions | dense | grouped | unread | status | complete',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'Marca fija vino + cafe (primary). No hay selector de color en docs.',
  },
] as const;

export type ActivityRow = {
  id: string;
  initials: string;
  actor: string;
  text: string;
  meta: string;
  group: string;
  unread: boolean;
  status: string;
  statusKey: 'alta' | 'revision' | 'cerrado' | 'rechazado';
};

export const SAMPLE_ACTIVITY: ActivityRow[] = [
  {
    id: '1',
    initials: 'MG',
    actor: 'Maria Gonzalez',
    text: 'cargo un documento en EXP-2026-01482',
    meta: 'hace 12 min',
    group: 'Hoy',
    unread: true,
    status: 'Alta',
    statusKey: 'alta',
  },
  {
    id: '2',
    initials: 'JR',
    actor: 'Jorge Ramirez',
    text: 'cambio el estatus a En revision',
    meta: 'hace 1 h',
    group: 'Hoy',
    unread: true,
    status: 'Revision',
    statusKey: 'revision',
  },
  {
    id: '3',
    initials: 'AL',
    actor: 'Ana Lopez',
    text: 'cerro el expediente EXP-2026-01390',
    meta: 'ayer',
    group: 'Ayer',
    unread: false,
    status: 'Cerrado',
    statusKey: 'cerrado',
  },
];

function itemMarkup(example: ActivityExample, row: ActivityRow): string {
  const i = '  ';
  const v = example.variant;
  const showAvatar =
    v === 'avatar' ||
    v === 'complete' ||
    v === 'dense' ||
    v === 'unread' ||
    v === 'status';
  const showActions = v === 'actions' || v === 'complete';
  const showStatus = v === 'status' || v === 'complete' || v === 'unread';
  const unread = (v === 'unread' || v === 'complete') && row.unread;

  return `${i}<div class="gob-af-item"${unread ? ' data-unread="true"' : ''} role="article">
${showAvatar ? `${i}  <span class="gob-af-avatar">${row.initials}</span>` : `${i}  <span class="gob-af-dot"></span>`}
${i}  <div class="gob-af-body">
${i}    <div class="gob-af-head">
${i}      <p class="gob-af-primary"><strong>${row.actor}</strong> ${row.text}</p>
${showStatus ? `${i}      <span class="gob-af-pill" data-status="${row.statusKey}">${row.status}</span>` : ''}
${i}    </div>
${i}    <p class="gob-af-secondary">${row.meta}</p>
${i}  </div>
${showActions ? `${i}  <button type="button" class="gob-af-action">Ver</button>` : `${i}  <span class="gob-af-meta">${row.meta}</span>`}
${i}</div>`;
}

export function buildSnippet(
  lang: CodeLang,
  example: ActivityExample,
  tone: Tone = 'primary',
): string {
  let body: string;
  if (example.variant === 'grouped') {
    let last = '';
    body = SAMPLE_ACTIVITY.map((row) => {
      const group =
        row.group !== last
          ? `  <div class="gob-af-group">${row.group}</div>\n`
          : '';
      last = row.group;
      return `${group}${itemMarkup(example, row)}`;
    }).join('\n');
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
