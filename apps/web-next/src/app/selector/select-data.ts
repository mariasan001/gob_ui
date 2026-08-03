import type { SelectSize, SelectStatus, SelectVariant } from '@mariasan001/ui-wc';

export type CodeLang = 'html' | 'react' | 'vue' | 'angular';

export const CODE_LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
];

export type SelectExample = {
  id: string;
  title: string;
  description: string;
  variant: SelectVariant;
  label?: string;
  placeholder?: string;
  helper?: string;
  value?: string;
  status?: SelectStatus;
  size?: SelectSize;
  options?: string;
  required?: boolean;
  disabled?: boolean;
};

const DEPT_OPTIONS = JSON.stringify([
  { value: 'salud', label: 'Salud' },
  { value: 'educacion', label: 'Educacion' },
  { value: 'seguridad', label: 'Seguridad' },
  { value: 'hacienda', label: 'Hacienda' },
]);

const STATUS_OPTIONS = JSON.stringify([
  { value: 'abierto', label: 'Abierto' },
  { value: 'revision', label: 'En revision' },
  { value: 'cerrado', label: 'Cerrado' },
]);

export const SELECT_EXAMPLES: SelectExample[] = [
  {
    id: 'basic',
    title: 'Basico',
    description: 'Lista limpia sin etiqueta.',
    variant: 'basic',
    placeholder: 'Elige una entidad…',
  },
  {
    id: 'labeled',
    title: 'Con etiqueta',
    description: 'Label institucional arriba del control.',
    variant: 'labeled',
    label: 'Entidad federativa',
    placeholder: 'Selecciona…',
    required: true,
  },
  {
    id: 'helper',
    title: 'Con ayuda',
    description: 'Texto de apoyo debajo del selector.',
    variant: 'helper',
    label: 'Dependencia',
    placeholder: 'Elige dependencia',
    helper: 'Define quien atiende el expediente.',
    options: DEPT_OPTIONS,
  },
  {
    id: 'dense',
    title: 'Compacto',
    description: 'Altura reducida para filtros densos.',
    variant: 'dense',
    label: 'Estatus',
    size: 'sm',
    options: STATUS_OPTIONS,
    value: 'revision',
  },
  {
    id: 'filled',
    title: 'Relleno',
    description: 'Fondo suave sin borde duro hasta el foco.',
    variant: 'filled',
    label: 'Municipio',
    placeholder: 'Selecciona municipio',
  },
  {
    id: 'soft',
    title: 'Suave',
    description: 'Tinte vino + icono. Aspecto contemporaneo.',
    variant: 'soft',
    label: 'Institucion',
    placeholder: 'Elige institucion',
    options: DEPT_OPTIONS,
  },
  {
    id: 'floating',
    title: 'Flotante',
    description: 'Label dentro del control que sube al enfocar.',
    variant: 'floating',
    label: 'Region',
    placeholder: ' ',
  },
  {
    id: 'pill',
    title: 'Pildora',
    description: 'Bordes totalmente redondeados para filtros.',
    variant: 'pill',
    label: 'Filtro rapido',
    placeholder: 'Filtrar por…',
    options: STATUS_OPTIONS,
  },
  {
    id: 'icon',
    title: 'Con icono',
    description: 'Leading pin dorado + chevron animado.',
    variant: 'icon',
    label: 'Ubicacion',
    placeholder: 'Selecciona estado',
  },
  {
    id: 'group',
    title: 'Agrupado',
    description: 'Opciones en optgroups por region.',
    variant: 'group',
    label: 'Region / entidad',
    placeholder: 'Elige una entidad',
  },
  {
    id: 'multiple',
    title: 'Multiple',
    description: 'Seleccion multiple nativa (Ctrl/Cmd + clic).',
    variant: 'multiple',
    label: 'Dependencias involucradas',
    helper: 'Mantén Ctrl o Cmd para marcar varias.',
    options: DEPT_OPTIONS,
    value: 'salud,educacion',
  },
  {
    id: 'error',
    title: 'Error',
    description: 'Semaforo danger con mensaje.',
    variant: 'helper',
    label: 'Tipo de tramite',
    status: 'error',
    helper: 'Debes seleccionar un tipo.',
    options: STATUS_OPTIONS,
  },
  {
    id: 'success',
    title: 'Exito',
    description: 'Semaforo success con confirmacion.',
    variant: 'helper',
    label: 'Prioridad',
    value: 'cerrado',
    status: 'success',
    helper: 'Prioridad confirmada.',
    options: STATUS_OPTIONS,
  },
  {
    id: 'complete',
    title: 'Completo',
    description: 'Label, icono, ayuda y required.',
    variant: 'complete',
    label: 'Area responsable',
    placeholder: 'Selecciona area',
    helper: 'Quien firma el dictamen.',
    required: true,
    status: 'info',
    options: DEPT_OPTIONS,
  },
];

export const SELECT_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | labeled | helper | dense | filled | soft | floating | pill | icon | group | multiple | complete',
  },
  {
    name: 'label',
    type: 'string',
    defaultValue: '',
    body: 'Etiqueta visible del selector.',
  },
  {
    name: 'placeholder',
    type: 'string',
    defaultValue: 'Selecciona una opcion',
    body: 'Opcion vacia inicial (no aplica en multiple).',
  },
  {
    name: 'options',
    type: 'string (JSON)',
    defaultValue: 'entidades MX',
    body: 'JSON de opciones o grupos [{value,label}] / [{label,options:[…]}].',
  },
  {
    name: 'value',
    type: 'string',
    defaultValue: '',
    body: 'Valor seleccionado. En multiple: valores separados por coma.',
  },
  {
    name: 'status',
    type: 'string',
    defaultValue: 'default',
    body: 'Semaforo: default | error | success | warning | info.',
  },
  {
    name: 'size',
    type: 'string',
    defaultValue: 'md',
    body: 'sm | md | lg',
  },
  {
    name: 'disabled / required',
    type: 'boolean',
    defaultValue: 'false',
    body: 'Estados nativos del control.',
  },
] as const;

export function buildSnippet(lang: CodeLang, example: SelectExample): string {
  const attrs = [
    `variant="${example.variant}"`,
    example.label ? `label="${example.label}"` : null,
    example.placeholder ? `placeholder="${example.placeholder}"` : null,
    example.helper ? `helper="${example.helper}"` : null,
    example.value ? `value="${example.value}"` : null,
    example.status && example.status !== 'default'
      ? `status="${example.status}"`
      : null,
    example.size && example.size !== 'md' ? `size="${example.size}"` : null,
    example.options ? `options='${example.options}'` : null,
    example.required ? 'required' : null,
    example.disabled ? 'disabled' : null,
  ]
    .filter(Boolean)
    .join(' ');

  const imports =
    lang === 'html'
      ? ''
      : `import '@mariasan001/ui-wc';

`;

  return `${imports}<gob-select ${attrs}></gob-select>
`;
}
