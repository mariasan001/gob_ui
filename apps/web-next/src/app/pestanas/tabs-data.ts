import type { TabsSize, TabsVariant } from '@mariasan001/ui-wc';

export type CodeLang = 'html' | 'react' | 'vue' | 'angular';

export const CODE_LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
];

export type TabsExample = {
  id: string;
  title: string;
  description: string;
  variant: TabsVariant;
  size?: TabsSize;
  value?: string;
  items: string;
  disabled?: boolean;
};

const ITEMS_BASIC = JSON.stringify([
  { id: 'general', label: 'General' },
  { id: 'detalle', label: 'Detalle' },
  { id: 'historial', label: 'Historial' },
]);

const ITEMS_BADGE = JSON.stringify([
  { id: 'inbox', label: 'Bandeja', badge: '12' },
  { id: 'sent', label: 'Enviados' },
  { id: 'archive', label: 'Archivo', badge: '3' },
]);

const ITEMS_DISABLED = JSON.stringify([
  { id: 'datos', label: 'Datos' },
  { id: 'anexos', label: 'Anexos', disabled: true },
  { id: 'firma', label: 'Firma' },
]);

export const TABS_EXAMPLES: TabsExample[] = [
  {
    id: 'basic',
    title: 'Basico',
    description: 'Pestanas simples con panel.',
    variant: 'basic',
    items: ITEMS_BASIC,
  },
  {
    id: 'underline',
    title: 'Subrayado',
    description: 'Indicador inferior vino.',
    variant: 'underline',
    value: 'detalle',
    items: ITEMS_BASIC,
  },
  {
    id: 'pills',
    title: 'Pildoras',
    description: 'Grupo con fondo suave.',
    variant: 'pills',
    items: ITEMS_BASIC,
  },
  {
    id: 'soft',
    title: 'Suave',
    description: 'Activa con tinte vino.',
    variant: 'soft',
    items: ITEMS_BASIC,
  },
  {
    id: 'vertical',
    title: 'Vertical',
    description: 'Lista lateral + panel.',
    variant: 'vertical',
    items: ITEMS_BASIC,
  },
  {
    id: 'dense',
    title: 'Compacto',
    description: 'Altura reducida.',
    variant: 'dense',
    size: 'sm',
    items: ITEMS_BASIC,
  },
  {
    id: 'icons',
    title: 'Con iconos',
    description: 'Punto dorado en activa.',
    variant: 'icons',
    items: ITEMS_BASIC,
  },
  {
    id: 'segmented',
    title: 'Segmentado',
    description: 'Control compacto de vistas.',
    variant: 'segmented',
    items: JSON.stringify([
      { id: 'dia', label: 'Dia' },
      { id: 'semana', label: 'Semana' },
      { id: 'mes', label: 'Mes' },
    ]),
  },
  {
    id: 'bordered',
    title: 'Con borde',
    description: 'Bloque tabular.',
    variant: 'bordered',
    items: ITEMS_BASIC,
  },
  {
    id: 'badges',
    title: 'Con conteo',
    description: 'Badges en las pestanas.',
    variant: 'pills',
    items: ITEMS_BADGE,
  },
  {
    id: 'item-disabled',
    title: 'Item deshabilitado',
    description: 'Una pestana no disponible.',
    variant: 'underline',
    items: ITEMS_DISABLED,
  },
  {
    id: 'disabled',
    title: 'Deshabilitado',
    description: 'Todo el control bloqueado.',
    variant: 'basic',
    items: ITEMS_BASIC,
    disabled: true,
  },
  {
    id: 'complete',
    title: 'Completo',
    description: 'Underline + iconos + panel dorado.',
    variant: 'complete',
    items: ITEMS_BADGE,
    value: 'inbox',
  },
];

export const TABS_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | underline | pills | soft | vertical | dense | icons | segmented | bordered | complete',
  },
  {
    name: 'items',
    type: 'JSON string',
    defaultValue: '[]',
    body: 'Arreglo [{ id, label, badge?, disabled? }].',
  },
  {
    name: 'value',
    type: 'string',
    defaultValue: 'primer item',
    body: 'Id de la pestana activa.',
  },
  {
    name: 'size',
    type: 'string',
    defaultValue: 'md',
    body: 'sm | md | lg',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    body: 'Deshabilita todo el control.',
  },
] as const;

export function buildSnippet(lang: CodeLang, example: TabsExample): string {
  const attrs = [
    `variant="${example.variant}"`,
    `items='${example.items}'`,
    example.value ? `value="${example.value}"` : null,
    example.size && example.size !== 'md' ? `size="${example.size}"` : null,
    example.disabled ? 'disabled' : null,
  ]
    .filter(Boolean)
    .join(' ');

  const imports =
    lang === 'html'
      ? ''
      : `import '@mariasan001/ui-wc';

`;

  return `${imports}<gob-tabs ${attrs}></gob-tabs>
`;
}
