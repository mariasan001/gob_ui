export type CodeLang = 'html' | 'react' | 'vue' | 'angular';

export const CODE_LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
];

export type ShellExampleId =
  | 'basico'
  | 'colapsado'
  | 'sin-topbar'
  | 'compacto'
  | 'tablero';

export type ShellExample = {
  id: ShellExampleId;
  title: string;
  description: string;
  collapsed?: boolean;
  dense?: boolean;
  hideTopbar?: boolean;
  stickyTopbar?: boolean;
  variant: 'simple' | 'board';
  tags: string[];
};

export const ANATOMY = [
  {
    id: 'sidebar',
    title: 'Menu lateral',
    caption: 'slot="sidebar"',
    body: 'Navegacion primaria fija. Ancho completo o colapsado.',
    metrics: [
      { label: 'Ancho', value: '248px' },
      { label: 'Colapsado', value: '72px' },
      { label: 'Fondo', value: 'Surface' },
    ],
  },
  {
    id: 'topbar',
    title: 'Barra superior',
    caption: 'slot="topbar"',
    body: 'Titulo, busqueda, acciones o usuario. Sticky por defecto.',
    metrics: [
      { label: 'Sticky', value: 'Si' },
      { label: 'Ocultable', value: 'hide-topbar' },
      { label: 'Fondo', value: 'Surface' },
    ],
  },
  {
    id: 'content',
    title: 'Contenido',
    caption: 'slot por defecto',
    body: 'Area principal del tablero, formulario o listado.',
    metrics: [
      { label: 'Padding', value: '24px' },
      { label: 'Compacto', value: '16px' },
      { label: 'Fondo', value: 'Canvas' },
    ],
  },
] as const;

export const SHELL_ATTRS = [
  {
    name: 'collapsed',
    type: 'boolean',
    defaultValue: 'false',
    body: 'Reduce el menu lateral a 72px para dar prioridad al contenido.',
  },
  {
    name: 'dense',
    type: 'boolean',
    defaultValue: 'false',
    body: 'Baja padding del contenido y estrecha un poco el menu.',
  },
  {
    name: 'hide-topbar',
    type: 'boolean',
    defaultValue: 'false',
    body: 'Oculta la barra superior. Util en asistentes o vistas enfocadas.',
  },
  {
    name: 'sticky-topbar',
    type: 'boolean',
    defaultValue: 'true',
    body: 'Fija la barra al hacer scroll. Usa sticky-topbar="false" para desactivar.',
  },
] as const;

export const SHELL_TOKENS = [
  {
    name: '--gob-shell-sidebar-width',
    value: '248px',
    body: 'Ancho del menu lateral expandido.',
  },
  {
    name: '--gob-shell-sidebar-collapsed-width',
    value: '72px',
    body: 'Ancho del menu con collapsed.',
  },
  {
    name: '--gob-shell-content-padding',
    value: '24px',
    body: 'Padding del area de contenido.',
  },
  {
    name: '--gob-shell-frame-height',
    value: '100vh',
    body: 'Alto del marco (sidebar y columna). En demos usa un valor fijo.',
  },
] as const;

export const SHELL_EXAMPLES: ShellExample[] = [
  {
    id: 'basico',
    title: 'Basico',
    description: 'Menu lateral + barra superior + contenido. Punto de partida de cualquier tablero.',
    variant: 'simple',
    tags: ['default', 'tablero'],
  },
  {
    id: 'colapsado',
    title: 'Menu colapsado',
    description: 'Mas espacio horizontal para tablas densas. Activa collapsed.',
    collapsed: true,
    variant: 'simple',
    tags: ['collapsed', 'tablas'],
  },
  {
    id: 'sin-topbar',
    title: 'Sin barra superior',
    description: 'Solo menu y contenido. Ideal para asistentes, login interno o foco total.',
    hideTopbar: true,
    variant: 'simple',
    tags: ['hide-topbar', 'asistente'],
  },
  {
    id: 'compacto',
    title: 'Densidad compacta',
    description: 'Menos padding y menu un poco mas estrecho. Activa dense.',
    dense: true,
    variant: 'simple',
    tags: ['dense', 'operativo'],
  },
  {
    id: 'tablero',
    title: 'Tablero con metricas',
    description: 'Composicion real: cabecera con usuario, KPIs y bloque de listado.',
    variant: 'board',
    tags: ['composicion', 'kpis'],
  },
];

export const SHELL_RULES = [
  {
    id: 'slots',
    index: '01',
    title: 'Respeta los slots',
    body: 'Usa sidebar, topbar y el slot por defecto. No envuelvas el shell con layouts paralelos.',
  },
  {
    id: 'nav',
    index: '02',
    title: 'Navegacion en el menu',
    body: 'El menu lateral concentra la navegacion primaria. Evita duplicar el mismo menu en el topbar.',
  },
  {
    id: 'collapsed',
    index: '03',
    title: 'Colapsa con proposito',
    body: 'collapsed es para tablas y paneles anchos, no un estado estetico permanente.',
  },
  {
    id: 'dense',
    index: '04',
    title: 'Compacto con cuidado',
    body: 'dense baja el aire del contenido. Combinalo con tipografia y espaciado del sistema.',
  },
  {
    id: 'tokens',
    index: '05',
    title: 'Personaliza con tokens',
    body: 'Ajusta anchos y padding con variables CSS. Mantén Canvas (#FAFAFA) y Surface (#FFF).',
  },
  {
    id: 'hide',
    index: '06',
    title: 'Oculta solo si aporta',
    body: 'hide-topbar sirve para flujos enfocados. En tableros operativos conserva la barra.',
  },
] as const;

function htmlAttrs(example: ShellExample): string {
  const parts: string[] = [];
  if (example.collapsed) parts.push('collapsed');
  if (example.dense) parts.push('dense');
  if (example.hideTopbar) parts.push('hide-topbar');
  if (example.stickyTopbar === false) parts.push('sticky-topbar="false"');
  return parts.length ? ` ${parts.join(' ')}` : '';
}

function reactAttrs(example: ShellExample): string {
  const parts: string[] = [];
  if (example.collapsed) parts.push('collapsed');
  if (example.dense) parts.push('dense');
  if (example.hideTopbar) parts.push('hide-topbar');
  if (example.stickyTopbar === false) parts.push('sticky-topbar="false"');
  return parts.length ? ` ${parts.join(' ')}` : '';
}

function bodyMarkup(example: ShellExample, indent = '  '): string {
  if (example.hideTopbar) {
    return `${indent}<aside slot="sidebar">
${indent}  <!-- marca + navegacion -->
${indent}</aside>
${indent}<section>
${indent}  <h1>Contenido principal</h1>
${indent}</section>`;
  }

  if (example.variant === 'board') {
    return `${indent}<aside slot="sidebar">
${indent}  <!-- marca + navegacion -->
${indent}</aside>
${indent}<header slot="topbar">
${indent}  Tablero institucional · Usuario
${indent}</header>
${indent}<section>
${indent}  <h1>Resumen operativo</h1>
${indent}  <!-- metricas + listado -->
${indent}</section>`;
  }

  return `${indent}<aside slot="sidebar">
${indent}  <!-- marca + navegacion -->
${indent}</aside>
${indent}<header slot="topbar">
${indent}  Barra superior
${indent}</header>
${indent}<section>
${indent}  Contenido principal
${indent}</section>`;
}

export function buildSnippet(lang: CodeLang, example: ShellExample): string {
  const tagAttrs = lang === 'react' ? reactAttrs(example) : htmlAttrs(example);
  const shell = `<gob-app-shell${tagAttrs}>
${bodyMarkup(example)}
</gob-app-shell>`;

  if (lang === 'html') {
    return `<!-- npm i @mariasan001/ui-wc -->
<script type="module">
  import '@mariasan001/ui-wc';
</script>

${shell}`;
  }

  if (lang === 'react') {
    return `import '@mariasan001/ui-wc';

export function ShellDemo() {
  return (
    <gob-app-shell${tagAttrs}>
${bodyMarkup(example, '      ')}
    </gob-app-shell>
  );
}`;
  }

  if (lang === 'vue') {
    return `<script setup>
import '@mariasan001/ui-wc';
</script>

<template>
  <gob-app-shell${tagAttrs}>
${bodyMarkup(example, '    ')}
  </gob-app-shell>
</template>`;
  }

  return `// app.component.ts
import '@mariasan001/ui-wc';

// app.component.html
<gob-app-shell${tagAttrs}>
${bodyMarkup(example)}
</gob-app-shell>`;
}
