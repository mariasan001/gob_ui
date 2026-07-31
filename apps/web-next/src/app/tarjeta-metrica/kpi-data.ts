import type { KpiTone, KpiVariant } from '@mariasan001/ui-wc';

export type CodeLang = 'html' | 'react' | 'vue' | 'angular';

export const CODE_LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
];

export const COLOR_OPTIONS: { id: KpiTone; label: string; swatch: string }[] = [
  { id: 'primary', label: 'Primary', swatch: '#9F2141' },
  { id: 'accent', label: 'Accent', swatch: '#BC945A' },
];

export type KpiExample = {
  id: KpiVariant;
  title: string;
  description: string;
  variant: KpiVariant;
  label: string;
  value: string;
  trend?: string;
  period?: string;
  showIcon?: boolean;
};

export const KPI_EXAMPLES: KpiExample[] = [
  {
    id: 'basic',
    title: 'Basica',
    description: 'Etiqueta y valor, sin tendencia ni periodo.',
    variant: 'basic',
    label: 'Tramites',
    value: '1,284',
  },
  {
    id: 'trend-up',
    title: 'Tendencia al alza',
    description: 'Incluye indicador positivo de variacion.',
    variant: 'trend-up',
    label: 'Usuarios activos',
    value: '8,420',
    trend: '+12%',
  },
  {
    id: 'trend-down',
    title: 'Tendencia a la baja',
    description: 'Incluye indicador negativo de variacion.',
    variant: 'trend-down',
    label: 'Tiempo medio',
    value: '4.2 d',
    trend: '-8%',
  },
  {
    id: 'period',
    title: 'Con periodo',
    description: 'Valor acompanado del marco temporal.',
    variant: 'period',
    label: 'Ingresos',
    value: '$2.4M',
    period: 'Ultimos 30 dias',
  },
  {
    id: 'icon',
    title: 'Con icono',
    description: 'Icono de apoyo en la esquina superior.',
    variant: 'icon',
    label: 'Alertas',
    value: '36',
    showIcon: true,
  },
  {
    id: 'dense',
    title: 'Densa',
    description: 'Padding y tipografia compactos para grids densos.',
    variant: 'dense',
    label: 'Pendientes',
    value: '92',
    trend: '+3%',
    period: 'Hoy',
  },
  {
    id: 'complete',
    title: 'Completa',
    description: 'Icono, tendencia y periodo en una sola tarjeta.',
    variant: 'complete',
    label: 'Conversion',
    value: '64%',
    trend: '+5.1%',
    period: 'Este mes',
    showIcon: true,
  },
];

export const KPI_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | trend-up | trend-down | period | icon | dense | complete',
  },
  {
    name: 'tone',
    type: 'string',
    defaultValue: 'primary',
    body: 'Color del icono: primary | accent',
  },
  {
    name: 'slot=label',
    type: 'slot',
    defaultValue: '—',
    body: 'Etiqueta superior del indicador.',
  },
  {
    name: 'slot=value',
    type: 'slot',
    defaultValue: '—',
    body: 'Valor principal (numero o metrica).',
  },
  {
    name: 'slot=trend',
    type: 'slot',
    defaultValue: '—',
    body: 'Texto o chip de tendencia (visible en trend-* / dense / complete).',
  },
  {
    name: 'slot=period',
    type: 'slot',
    defaultValue: '—',
    body: 'Periodo o contexto temporal.',
  },
  {
    name: 'slot=icon',
    type: 'slot',
    defaultValue: '—',
    body: 'Icono opcional (visible en icon / complete).',
  },
] as const;

function iconImports(lang: CodeLang): string {
  if (lang === 'html') return '';
  return `import '@mariasan001/ui-wc';

`;
}

function slotsMarkup(example: KpiExample, indent: string): string {
  const lines = [
    `${indent}<span slot="label">${example.label}</span>`,
    `${indent}<span slot="value">${example.value}</span>`,
  ];
  if (example.trend) {
    lines.push(`${indent}<span slot="trend">${example.trend}</span>`);
  }
  if (example.period) {
    lines.push(`${indent}<span slot="period">${example.period}</span>`);
  }
  if (example.showIcon) {
    lines.push(`${indent}<span slot="icon">★</span>`);
  }
  return lines.join('\n');
}

export function buildSnippet(
  lang: CodeLang,
  example: KpiExample,
  tone: KpiTone,
): string {
  const attrs = ` variant="${example.variant}" tone="${tone}"`;
  const bodyHtml = slotsMarkup(example, '  ');
  const bodyReact = slotsMarkup(example, '      ');

  if (lang === 'html') {
    return `<!-- npm i @mariasan001/ui-wc -->
<script type="module">import '@mariasan001/ui-wc';</script>

<gob-kpi-card${attrs}>
${bodyHtml}
</gob-kpi-card>`;
  }

  if (lang === 'react') {
    return `${iconImports(lang)}export function TarjetaMetrica() {
  return (
    <gob-kpi-card${attrs}>
${bodyReact}
    </gob-kpi-card>
  );
}`;
  }

  if (lang === 'vue') {
    return `<script setup>
${iconImports(lang).trimEnd()}
</script>

<template>
  <gob-kpi-card${attrs}>
${slotsMarkup(example, '    ')}
  </gob-kpi-card>
</template>`;
  }

  return `// app.component.html
${iconImports(lang)}<gob-kpi-card${attrs}>
${bodyHtml}
</gob-kpi-card>`;
}
