import type { FormGap, FormVariant } from '@mariasan001/ui-wc';

export type CodeLang = 'html' | 'react' | 'vue' | 'angular';

export const CODE_LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
];

export type FormExample = {
  id: string;
  title: string;
  description: string;
  variant: FormVariant;
  formTitle?: string;
  formDescription?: string;
  gap?: FormGap;
  columns?: 1 | 2 | 3;
  fields: { label: string; placeholder: string }[];
  showActions?: boolean;
};

export const FORM_EXAMPLES: FormExample[] = [
  {
    id: 'basic',
    title: 'Basico',
    description: 'Una columna limpia sin marco.',
    variant: 'basic',
    fields: [
      { label: 'Nombre', placeholder: 'Maria Sanchez' },
      { label: 'Correo', placeholder: 'maria@gob.mx' },
    ],
  },
  {
    id: 'single',
    title: 'Una columna',
    description: 'Encabezado editorial y campos en serie.',
    variant: 'single',
    formTitle: 'Alta de ciudadano',
    formDescription: 'Datos basicos del registro.',
    fields: [
      { label: 'CURP', placeholder: 'GASM850101HDFNRR09' },
      { label: 'Telefono', placeholder: '33 1234 5678' },
    ],
  },
  {
    id: 'dual',
    title: 'Dos columnas',
    description: 'Pares de campos en escritorio.',
    variant: 'dual',
    formTitle: 'Domicilio',
    formDescription: 'Se apila en movil.',
    fields: [
      { label: 'Calle', placeholder: 'Av. Juarez' },
      { label: 'Numero', placeholder: '120' },
      { label: 'Colonia', placeholder: 'Centro' },
      { label: 'CP', placeholder: '44100' },
    ],
  },
  {
    id: 'triple',
    title: 'Tres columnas',
    description: 'Fila densa de campos cortos.',
    variant: 'triple',
    formTitle: 'Fecha del documento',
    fields: [
      { label: 'Dia', placeholder: '01' },
      { label: 'Mes', placeholder: '08' },
      { label: 'Anio', placeholder: '2026' },
    ],
  },
  {
    id: 'stacked',
    title: 'Apilado',
    description: 'Mayor aire entre bloques.',
    variant: 'stacked',
    formTitle: 'Observaciones',
    formDescription: 'Para notas del revisor.',
    fields: [
      { label: 'Motivo', placeholder: 'Revision documental' },
      { label: 'Notas', placeholder: 'Falta anexo 2' },
    ],
  },
  {
    id: 'dense',
    title: 'Compacto',
    description: 'Gap reducido para paneles y toolbars.',
    variant: 'dense',
    gap: 'sm',
    columns: 2,
    formTitle: 'Filtro',
    fields: [
      { label: 'Folio', placeholder: 'EXP-01' },
      { label: 'Estado', placeholder: 'En revision' },
    ],
  },
  {
    id: 'soft',
    title: 'Suave',
    description: 'Tinte vino plano, sin degradado.',
    variant: 'soft',
    formTitle: 'Filtro rapido',
    formDescription: 'Consulta por dependencia.',
    fields: [
      { label: 'Dependencia', placeholder: 'Salud' },
      { label: 'Periodo', placeholder: '2026' },
    ],
  },
  {
    id: 'card',
    title: 'Tarjeta',
    description: 'Superficie limpia con pie de acciones.',
    variant: 'card',
    formTitle: 'Solicitud',
    formDescription: 'Completa los datos del tramite.',
    fields: [
      { label: 'Tramite', placeholder: 'Licencia' },
      { label: 'Solicitante', placeholder: 'Nombre' },
    ],
    showActions: true,
  },
  {
    id: 'sections',
    title: 'Secciones',
    description: 'Titulo uppercase y reglas entre campos.',
    variant: 'sections',
    formTitle: 'Expediente',
    formDescription: 'Bloques separados por lineas.',
    fields: [
      { label: 'Titular', placeholder: 'Nombre del titular' },
      { label: 'Referencia', placeholder: 'OF-2026-12' },
    ],
  },
  {
    id: 'complete',
    title: 'Completo',
    description: 'Panel moderno con riel dorado y acciones.',
    variant: 'complete',
    formTitle: 'Registro institucional',
    formDescription: 'Formulario de alta con validacion.',
    columns: 2,
    fields: [
      { label: 'Nombre', placeholder: 'Nombre' },
      { label: 'Apellidos', placeholder: 'Apellidos' },
      { label: 'Correo', placeholder: 'correo@gob.mx' },
      { label: 'Extension', placeholder: '1234' },
    ],
    showActions: true,
  },
];

export const FORM_ATTRS = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'basic',
    body: 'basic | single | dual | triple | stacked | dense | soft | card | sections | complete',
  },
  {
    name: 'title / description',
    type: 'string',
    defaultValue: '',
    body: 'Encabezado del formulario.',
  },
  {
    name: 'columns',
    type: '1 | 2 | 3',
    defaultValue: 'auto',
    body: 'Columnas del cuerpo (dual/triple lo infieren).',
  },
  {
    name: 'gap',
    type: 'string',
    defaultValue: 'md',
    body: 'sm | md | lg',
  },
  {
    name: 'slot / slot=actions',
    type: 'node',
    defaultValue: '—',
    body: 'Campos del formulario y acciones del pie.',
  },
] as const;

export function buildSnippet(lang: CodeLang, example: FormExample): string {
  const attrs = [
    `variant="${example.variant}"`,
    example.formTitle ? `title="${example.formTitle}"` : null,
    example.formDescription ? `description="${example.formDescription}"` : null,
    example.gap && example.gap !== 'md' ? `gap="${example.gap}"` : null,
    example.columns ? `columns="${example.columns}"` : null,
  ]
    .filter(Boolean)
    .join(' ');

  const imports =
    lang === 'html'
      ? ''
      : `import '@mariasan001/ui-wc';

`;

  const fields = example.fields
    .map(
      (field) =>
        `  <gob-form-field variant="labeled" label="${field.label}">
    <gob-input variant="basic" placeholder="${field.placeholder}"></gob-input>
  </gob-form-field>`,
    )
    .join('\n');

  const actions = example.showActions
    ? `
  <gob-button slot="actions" tone="neutral" appearance="outline">Cancelar</gob-button>
  <gob-button slot="actions" tone="primary">Guardar</gob-button>`
    : '';

  return `${imports}<gob-form ${attrs}>
${fields}${actions}
</gob-form>
`;
}
