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

/**
 * Apache ECharts — core vanilla compatible con HTML / React / Vue / Angular.
 * Wrappers: echarts-for-react, vue-echarts, ngx-echarts.
 */
export const CHART_LIB = {
  name: 'Apache ECharts',
  npm: 'echarts',
  license: 'Apache-2.0',
  docs: 'https://echarts.apache.org',
} as const;

export type ChartKind =
  | 'bars'
  | 'area'
  | 'line'
  | 'donut'
  | 'heatmap'
  | 'gauge'
  | 'radar';

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
    title: 'Basica · Barras',
    description: 'Columnas con degradado y esquinas redondeadas (ECharts bar).',
    variant: 'basic',
    cardTitle: 'Tramites por mes',
    chart: 'bars',
  },
  {
    id: 'legend',
    title: 'Leyenda · Area apilada',
    description: 'Areas suaves apiladas para comparar canales en el tiempo.',
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
    title: 'Acciones · Linea + meta',
    description: 'Serie real vs meta con area degradada y tooltip.',
    variant: 'actions',
    cardTitle: 'Ingresos vs meta',
    chart: 'line',
    showActions: true,
  },
  {
    id: 'period',
    title: 'Periodo · Mapa de calor',
    description: 'Heatmap de carga operativa por dia y franja horaria.',
    variant: 'period',
    cardTitle: 'Carga operativa',
    subtitle: 'Enero – Junio 2026',
    chart: 'heatmap',
  },
  {
    id: 'side-legend',
    title: 'Lateral · Donut',
    description: 'Anillo moderno con padAngle y esquinas redondeadas.',
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
    title: 'Densa · Gauge',
    description: 'Indicador circular compacto para grids densos.',
    variant: 'dense',
    cardTitle: 'Cumplimiento SLA',
    chart: 'gauge',
    showLegend: true,
    legend: [
      { label: 'Meta 80', tone: 'a' },
      { label: 'Actual 74', tone: 'b' },
    ],
  },
  {
    id: 'elevated',
    title: 'Elevada · Radar',
    description: 'Radar multidimensional de satisfaccion ciudadana.',
    variant: 'elevated',
    cardTitle: 'Satisfaccion ciudadana',
    subtitle: 'Ultimos 90 dias',
    chart: 'radar',
    showActions: true,
    showLegend: true,
    legend: [
      { label: 'Actual', tone: 'a' },
      { label: 'Meta', tone: 'b' },
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
    body: 'Contenedor de la grafica (recomendado: Apache ECharts).',
  },
  {
    name: 'slot=legend',
    type: 'slot',
    defaultValue: '—',
    body: 'Leyenda de series (legend / side-legend / dense / elevated).',
  },
] as const;

function chartTypeLabel(kind: ChartKind): string {
  switch (kind) {
    case 'area':
      return 'line + areaStyle (stacked)';
    case 'line':
      return 'line (smooth)';
    case 'donut':
      return 'pie (donut)';
    case 'heatmap':
      return 'heatmap';
    case 'gauge':
      return 'gauge';
    case 'radar':
      return 'radar';
    default:
      return 'bar';
  }
}

function sampleOptionHint(kind: ChartKind): string {
  switch (kind) {
    case 'area':
      return `{ series: [{ type: 'line', stack: 'total', areaStyle: {}, smooth: 0.45 }] }`;
    case 'line':
      return `{ series: [{ type: 'line', smooth: 0.5, areaStyle: {} }] }`;
    case 'donut':
      return `{ series: [{ type: 'pie', radius: ['58%', '82%'], padAngle: 3 }] }`;
    case 'heatmap':
      return `{ series: [{ type: 'heatmap', data: [[0,0,5], ...] }] }`;
    case 'gauge':
      return `{ series: [{ type: 'gauge', progress: { show: true }, data: [{ value: 74 }] }] }`;
    case 'radar':
      return `{ radar: { indicator: [...] }, series: [{ type: 'radar', data: [...] }] }`;
    default:
      return `{ series: [{ type: 'bar', itemStyle: { borderRadius: [10,10,4,4] } }] }`;
  }
}

function slotsOnly(example: ChartExample, indent: string): string {
  const lines = [`${indent}<span slot="title">${example.cardTitle}</span>`];
  if (example.subtitle) {
    lines.push(`${indent}<span slot="subtitle">${example.subtitle}</span>`);
  }
  if (example.showActions) {
    lines.push(
      `${indent}<button slot="actions" type="button">Exportar</button>`,
    );
  }
  if (example.showLegend && example.legend) {
    for (const item of example.legend) {
      lines.push(`${indent}<span slot="legend">${item.label}</span>`);
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
  const kind = example.chart;
  const optionHint = sampleOptionHint(kind);

  if (lang === 'html') {
    return `<!-- npm i @mariasan001/ui-wc echarts -->
<!-- Libreria: Apache ECharts (HTML / React / Vue / Angular) -->
<script type="module">
  import '@mariasan001/ui-wc';
  import * as echarts from 'echarts';

  const el = document.querySelector('#chart');
  const chart = echarts.init(el);
  chart.setOption(${optionHint});
  // tipo demo: ${chartTypeLabel(kind)}
</script>

<gob-chart-card${attrs}>
${slotsOnly(example, '  ')}
  <div id="chart" style="width:100%;height:220px"></div>
</gob-chart-card>`;
  }

  if (lang === 'react') {
    return `// npm i @mariasan001/ui-wc echarts
// Opcional: echarts-for-react
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import '@mariasan001/ui-wc';

export function TarjetaGrafica() {
  const ref = useRef(null);
  useEffect(() => {
    const chart = echarts.init(ref.current);
    chart.setOption(${optionHint});
    return () => chart.dispose();
  }, []);

  return (
    <gob-chart-card${attrs}>
${slotsOnly(example, '      ')}
      <div ref={ref} style={{ width: '100%', height: 220 }} />
    </gob-chart-card>
  );
}`;
  }

  if (lang === 'vue') {
    return `<!-- npm i @mariasan001/ui-wc echarts -->
<!-- Opcional wrapper: vue-echarts -->
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as echarts from 'echarts';
import '@mariasan001/ui-wc';

const host = ref(null);
let chart;
onMounted(() => {
  chart = echarts.init(host.value);
  chart.setOption(${optionHint});
});
onBeforeUnmount(() => chart?.dispose());
</script>

<template>
  <gob-chart-card${attrs}>
${slotsOnly(example, '    ')}
    <div ref="host" style="width:100%;height:220px" />
  </gob-chart-card>
</template>`;
  }

  return `// npm i @mariasan001/ui-wc echarts ngx-echarts
// app.component.ts
import * as echarts from 'echarts';
import { AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@ViewChild('chartHost', { static: true }) host!: ElementRef<HTMLDivElement>;
private chart?: echarts.ECharts;

ngAfterViewInit() {
  this.chart = echarts.init(this.host.nativeElement);
  this.chart.setOption(${optionHint});
}
ngOnDestroy() { this.chart?.dispose(); }

// app.component.html
<gob-chart-card${attrs}>
${slotsOnly(example, '  ')}
  <div #chartHost style="width:100%;height:220px"></div>
</gob-chart-card>`;
}
