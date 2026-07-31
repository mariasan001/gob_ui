import type { ChartCardTone, ChartCardVariant } from '@mariasan001/ui-wc';

export type CodeLang = 'html' | 'react' | 'vue' | 'angular';

export const CODE_LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
];

/** Misma paleta que Botones. */
export const COLOR_OPTIONS: {
  id: ChartCardTone;
  label: string;
  swatch: string;
}[] = [
  { id: 'primary', label: 'Primary', swatch: '#9F2141' },
  { id: 'accent', label: 'Accent', swatch: '#BC945A' },
  { id: 'dark', label: 'Dark', swatch: '#181511' },
  { id: 'neutral', label: 'Neutral', swatch: '#FFFFFF' },
  { id: 'soft', label: 'Soft', swatch: '#E7D7BD' },
];

export type ChartKind = 'bars' | 'line' | 'area' | 'donut';

export type ChartExample = {
  id: ChartCardVariant;
  title: string;
  description: string;
  variant: ChartCardVariant;
  cardTitle: string;
  subtitle?: string;
  showActions?: boolean;
  showLegend?: boolean;
  chart: ChartKind;
  legend?: { label: string; tone: 'a' | 'b' | 'c' }[];
};

export const CHART_EXAMPLES: ChartExample[] = [
  {
    id: 'basic',
    title: 'Basica',
    description: 'Titulo y area de grafica, sin leyenda ni acciones.',
    variant: 'basic',
    cardTitle: 'Tramites por mes',
    chart: 'bars',
  },
  {
    id: 'legend',
    title: 'Con leyenda',
    description: 'Leyenda inferior para series o categorias.',
    variant: 'legend',
    cardTitle: 'Canales de atencion',
    chart: 'area',
    showLegend: true,
    legend: [
      { label: 'Presencial', tone: 'a' },
      { label: 'Digital', tone: 'b' },
      { label: 'Telefonico', tone: 'c' },
    ],
  },
  {
    id: 'actions',
    title: 'Con acciones',
    description: 'Acciones de exportar o filtrar en el encabezado.',
    variant: 'actions',
    cardTitle: 'Ingresos vs meta',
    chart: 'line',
    showActions: true,
  },
  {
    id: 'period',
    title: 'Con periodo',
    description: 'Subtitulo con el marco temporal de la serie.',
    variant: 'period',
    cardTitle: 'Carga operativa',
    subtitle: 'Enero – Junio 2026',
    chart: 'bars',
  },
  {
    id: 'side-legend',
    title: 'Leyenda lateral',
    description: 'Leyenda a la derecha, util en paneles anchos.',
    variant: 'side-legend',
    cardTitle: 'Distribucion por region',
    chart: 'donut',
    showLegend: true,
    legend: [
      { label: 'Norte', tone: 'a' },
      { label: 'Centro', tone: 'b' },
      { label: 'Sur', tone: 'c' },
    ],
  },
  {
    id: 'dense',
    title: 'Densa',
    description: 'Padding compacto para grids de tablero.',
    variant: 'dense',
    cardTitle: 'Tickets abiertos',
    chart: 'bars',
    showLegend: true,
    legend: [
      { label: 'Nuevos', tone: 'a' },
      { label: 'En curso', tone: 'b' },
    ],
  },
  {
    id: 'elevated',
    title: 'Elevada',
    description: 'Sombra, periodo, acciones y leyenda juntos.',
    variant: 'elevated',
    cardTitle: 'Satisfaccion ciudadana',
    subtitle: 'Ultimos 90 dias',
    chart: 'line',
    showActions: true,
    showLegend: true,
    legend: [
      { label: 'Muy satisfecho', tone: 'a' },
      { label: 'Neutral', tone: 'b' },
      { label: 'Insatisfecho', tone: 'c' },
    ],
  },
];

export const CHART_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | legend | actions | period | side-legend | dense | elevated',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'primary | accent | dark | neutral | soft',
  },
  {
    name: 'slot=title',
    type: 'slot',
    defaultValue: '—',
    body: 'Titulo de la tarjeta.',
  },
  {
    name: 'slot=subtitle',
    type: 'slot',
    defaultValue: '—',
    body: 'Periodo o contexto (period / elevated).',
  },
  {
    name: 'slot=actions',
    type: 'slot',
    defaultValue: '—',
    body: 'Acciones del encabezado (actions / elevated).',
  },
  {
    name: 'slot=default',
    type: 'slot',
    defaultValue: '—',
    body: 'Contenido de la grafica (SVG, canvas o libreria).',
  },
  {
    name: 'slot=legend',
    type: 'slot',
    defaultValue: '—',
    body: 'Leyenda de series (legend / side-legend / dense / elevated).',
  },
] as const;

function iconImports(lang: CodeLang): string {
  if (lang === 'html') return '';
  return `import '@mariasan001/ui-wc';

`;
}

function slotsMarkup(example: ChartExample, indent: string): string {
  const lines = [
    `${indent}<span slot="title">${example.cardTitle}</span>`,
  ];
  if (example.subtitle) {
    lines.push(`${indent}<span slot="subtitle">${example.subtitle}</span>`);
  }
  if (example.showActions) {
    lines.push(`${indent}<button slot="actions" type="button">Exportar</button>`);
  }
  lines.push(`${indent}<!-- grafica -->`);
  lines.push(`${indent}<div class="chart-placeholder"></div>`);
  if (example.showLegend && example.legend) {
    for (const item of example.legend) {
      lines.push(
        `${indent}<span slot="legend">${item.label}</span>`,
      );
    }
  }
  return lines.join('\n');
}

export function buildSnippet(
  lang: CodeLang,
  example: ChartExample,
  tone: ChartCardTone,
): string {
  const attrs = ` variant="${example.variant}" tone="${tone}"`;
  const bodyHtml = slotsMarkup(example, '  ');
  const bodyReact = slotsMarkup(example, '      ');

  if (lang === 'html') {
    return `<!-- npm i @mariasan001/ui-wc -->
<script type="module">import '@mariasan001/ui-wc';</script>

<gob-chart-card${attrs}>
${bodyHtml}
</gob-chart-card>`;
  }

  if (lang === 'react') {
    return `${iconImports(lang)}export function TarjetaGrafica() {
  return (
    <gob-chart-card${attrs}>
${bodyReact}
    </gob-chart-card>
  );
}`;
  }

  if (lang === 'vue') {
    return `<script setup>
${iconImports(lang).trimEnd()}
</script>

<template>
  <gob-chart-card${attrs}>
${slotsMarkup(example, '    ')}
  </gob-chart-card>
</template>`;
  }

  return `// app.component.html
${iconImports(lang)}<gob-chart-card${attrs}>
${bodyHtml}
</gob-chart-card>`;
}
