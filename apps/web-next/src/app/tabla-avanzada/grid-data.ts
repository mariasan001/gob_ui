import type { DataGridTone, DataGridVariant } from '@mariasan001/ui-wc';

export type CodeLang = 'html' | 'react' | 'vue' | 'angular';

export const CODE_LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
];

export const COLOR_OPTIONS: {
  id: DataGridTone;
  label: string;
  swatch: string;
}[] = [
  { id: 'primary', label: 'Primary', swatch: '#9F2141' },
  { id: 'accent', label: 'Accent', swatch: '#BC945A' },
  { id: 'dark', label: 'Dark', swatch: '#181511' },
  { id: 'neutral', label: 'Neutral', swatch: '#FFFFFF' },
  { id: 'soft', label: 'Soft', swatch: '#E7D7BD' },
];

export type GridExample = {
  id: DataGridVariant;
  title: string;
  description: string;
  variant: DataGridVariant;
  cardTitle: string;
  subtitle?: string;
  showFilters?: boolean;
  showBulk?: boolean;
  showActions?: boolean;
  footer?: string;
};

export const GRID_EXAMPLES: GridExample[] = [
  {
    id: 'filters',
    title: 'Con filtros',
    description: 'Barra de filtros para consultas masivas por folio, dependencia y estatus.',
    variant: 'filters',
    cardTitle: 'Consulta de expedientes',
    subtitle: '12,480 registros indexados',
    showFilters: true,
    showActions: true,
    footer: 'Filtros activos: 2 · Resultados: 318',
  },
  {
    id: 'frozen-left',
    title: 'Columna fija izq.',
    description: 'Congela el folio al hacer scroll horizontal en grillas anchas.',
    variant: 'frozen-left',
    cardTitle: 'Padron ampliado',
    subtitle: 'Scroll horizontal',
    footer: 'Columna Folio fijada',
  },
  {
    id: 'frozen-right',
    title: 'Acciones fijas',
    description: 'Columna de acciones siempre visible a la derecha.',
    variant: 'frozen-right',
    cardTitle: 'Operacion de casos',
    showActions: true,
    footer: 'Acciones siempre a la vista',
  },
  {
    id: 'bulk',
    title: 'Barra de lote',
    description: 'Seleccion multiple con barra de acciones masivas.',
    variant: 'bulk',
    cardTitle: 'Asignacion por lote',
    subtitle: 'Mesa de control',
    showBulk: true,
    footer: 'Ideal para archivar / reasignar cientos de filas',
  },
  {
    id: 'paginated',
    title: 'Con paginacion',
    description: 'Pie con recorrido de paginas para datasets de servidor.',
    variant: 'paginated',
    cardTitle: 'Bitacora institucional',
    showActions: true,
    footer: 'Pagina 3 de 250 · 50 por pagina',
  },
  {
    id: 'expandable',
    title: 'Fila expandible',
    description: 'Detalle del expediente sin salir del listado.',
    variant: 'expandable',
    cardTitle: 'Seguimiento detallado',
    subtitle: 'Click en + para ver historial',
    footer: '1 fila expandida',
  },
  {
    id: 'column-filter',
    title: 'Filtro por columna',
    description: 'Inputs bajo cada encabezado para afinar sin abrir paneles.',
    variant: 'column-filter',
    cardTitle: 'Tablero analitico',
    showFilters: true,
    footer: 'Filtros inline por campo',
  },
  {
    id: 'wide',
    title: 'Muchas columnas',
    description: 'Grilla ancha tipica de reportes gubernamentales con scroll H.',
    variant: 'wide',
    cardTitle: 'Reporte operativo',
    subtitle: '14 columnas · exportable',
    showFilters: true,
    showActions: true,
    footer: 'Desplaza horizontalmente para ver mas campos',
  },
  {
    id: 'toolbar',
    title: 'Toolbar completa',
    description: 'Filtros + exportar + refrescar + densidad en un solo bloque.',
    variant: 'toolbar',
    cardTitle: 'Centro de tramites',
    showFilters: true,
    showActions: true,
    footer: 'Actualizado hace 45s',
  },
  {
    id: 'grouped',
    title: 'Agrupada',
    description: 'Filas de grupo por dependencia para navegar volumenes grandes.',
    variant: 'grouped',
    cardTitle: 'Expedientes por dependencia',
    subtitle: 'Agrupacion servidor',
    footer: '3 grupos · 12,480 total',
  },
];

export const GRID_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'filters',
    body: 'filters | frozen-left | frozen-right | bulk | paginated | expandable | column-filter | wide | toolbar | grouped',
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
    body: 'Titulo del grid.',
  },
  {
    name: 'slot=subtitle',
    type: 'slot',
    defaultValue: '—',
    body: 'Contexto o conteo de registros.',
  },
  {
    name: 'slot=actions',
    type: 'slot',
    defaultValue: '—',
    body: 'Acciones globales (exportar, refrescar).',
  },
  {
    name: 'slot=filters',
    type: 'slot',
    defaultValue: '—',
    body: 'Barra de filtros superior.',
  },
  {
    name: 'slot=bulk',
    type: 'slot',
    defaultValue: '—',
    body: 'Barra de acciones masivas.',
  },
  {
    name: 'slot=default',
    type: 'slot',
    defaultValue: '—',
    body: 'Tabla HTML nativa con thead/tbody.',
  },
  {
    name: 'slot=footer',
    type: 'slot',
    defaultValue: '—',
    body: 'Paginacion / resumen.',
  },
] as const;

export type DemoRow = {
  folio: string;
  ciudadano: string;
  dependencia: string;
  fecha: string;
  monto: string;
  municipio: string;
  programa: string;
  estatus: 'ok' | 'warn' | 'err';
  estatusLabel: string;
};

export const DEMO_ROWS: DemoRow[] = [
  {
    folio: 'EXP-2026-01482',
    ciudadano: 'Garcia Lopez, Ana',
    dependencia: 'Salud',
    fecha: '12/03/2026',
    monto: '$4,250.00',
    municipio: 'Centro',
    programa: 'Apoyo familiar',
    estatus: 'ok',
    estatusLabel: 'Aprobado',
  },
  {
    folio: 'EXP-2026-01483',
    ciudadano: 'Hernandez Ruiz, Luis',
    dependencia: 'Educacion',
    fecha: '12/03/2026',
    monto: '$1,180.00',
    municipio: 'Norte',
    programa: 'Beca basica',
    estatus: 'warn',
    estatusLabel: 'En revision',
  },
  {
    folio: 'EXP-2026-01484',
    ciudadano: 'Martinez Soto, Paula',
    dependencia: 'Movilidad',
    fecha: '11/03/2026',
    monto: '$890.00',
    municipio: 'Sur',
    programa: 'Tarifa social',
    estatus: 'ok',
    estatusLabel: 'Aprobado',
  },
  {
    folio: 'EXP-2026-01485',
    ciudadano: 'Jimenez Cruz, Diego',
    dependencia: 'Hacienda',
    fecha: '11/03/2026',
    monto: '$12,400.00',
    municipio: 'Oriente',
    programa: 'Devolucion',
    estatus: 'err',
    estatusLabel: 'Rechazado',
  },
  {
    folio: 'EXP-2026-01486',
    ciudadano: 'Vargas Neri, Sofia',
    dependencia: 'Seguridad',
    fecha: '10/03/2026',
    monto: '$2,010.00',
    municipio: 'Poniente',
    programa: 'Atencion ciudadana',
    estatus: 'warn',
    estatusLabel: 'En revision',
  },
  {
    folio: 'EXP-2026-01487',
    ciudadano: 'Ortega Diaz, Mario',
    dependencia: 'Salud',
    fecha: '10/03/2026',
    monto: '$760.00',
    municipio: 'Centro',
    programa: 'Medicamentos',
    estatus: 'ok',
    estatusLabel: 'Aprobado',
  },
];

function iconImports(lang: CodeLang): string {
  if (lang === 'html') return '';
  return `import '@mariasan001/ui-wc';

`;
}

export function buildSnippet(
  lang: CodeLang,
  example: GridExample,
  tone: DataGridTone,
): string {
  const attrs = ` variant="${example.variant}" tone="${tone}"`;

  if (lang === 'html') {
    return `<!-- npm i @mariasan001/ui-wc -->
<script type="module">import '@mariasan001/ui-wc';</script>

<gob-data-grid${attrs}>
  <span slot="title">${example.cardTitle}</span>
  <div slot="filters"><!-- filtros --></div>
  <table>
    <thead><!-- columnas, incl. fijas --></thead>
    <tbody><!-- filas densas / paginadas en servidor --></tbody>
  </table>
  <span slot="footer">Pagina 1 de 250</span>
</gob-data-grid>`;
  }

  if (lang === 'react') {
    return `${iconImports(lang)}export function TablaAvanzada() {
  return (
    <gob-data-grid${attrs}>
      <span slot="title">${example.cardTitle}</span>
      <div slot="filters">{/* filtros */}</div>
      <table>{/* thead + tbody */}</table>
      <span slot="footer">Pagina 1 de 250</span>
    </gob-data-grid>
  );
}`;
  }

  if (lang === 'vue') {
    return `<script setup>
${iconImports(lang).trimEnd()}
</script>

<template>
  <gob-data-grid${attrs}>
    <span slot="title">${example.cardTitle}</span>
    <div slot="filters"><!-- filtros --></div>
    <table><!-- thead + tbody --></table>
    <span slot="footer">Pagina 1 de 250</span>
  </gob-data-grid>
</template>`;
  }

  return `// app.component.html
${iconImports(lang)}<gob-data-grid${attrs}>
  <span slot="title">${example.cardTitle}</span>
  <div slot="filters"><!-- filtros --></div>
  <table><!-- thead + tbody --></table>
  <span slot="footer">Pagina 1 de 250</span>
</gob-data-grid>`;
}
