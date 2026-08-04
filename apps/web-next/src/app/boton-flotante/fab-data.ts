import type { FabSize, FabVariant } from '@mariasan001/ui-wc';

export type CodeLang = 'html' | 'react' | 'vue' | 'angular';

export const CODE_LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
];

export type FabExample = {
  id: string;
  title: string;
  description: string;
  variant: FabVariant;
  size?: FabSize;
  icon?: string;
  label?: string;
  disabled?: boolean;
};

export const FAB_EXAMPLES: FabExample[] = [
  { id: 'basic', title: 'Basico', description: 'Accion primaria flotante.', variant: 'basic', icon: 'plus', label: 'Agregar' },
  { id: 'solid', title: 'Solido', description: 'Relleno vino institucional.', variant: 'solid', icon: 'edit', label: 'Editar' },
  { id: 'soft', title: 'Suave', description: 'Fondo claro con tinta vino.', variant: 'soft', icon: 'chat', label: 'Mensaje' },
  { id: 'tonal', title: 'Tonal', description: 'Acento dorado institucional.', variant: 'tonal', icon: 'share', label: 'Compartir' },
  { id: 'extended', title: 'Extendido', description: 'Icono + etiqueta visible.', variant: 'extended', icon: 'plus', label: 'Nuevo tramite' },
  { id: 'mini', title: 'Mini', description: 'Tamano compacto para densidades altas.', variant: 'mini', icon: 'search', label: 'Buscar' },
  { id: 'outline', title: 'Contorno', description: 'Sobre superficies claras.', variant: 'outline', icon: 'upload', label: 'Subir' },
  { id: 'danger', title: 'Peligro', description: 'Accion destructiva flotante.', variant: 'danger', icon: 'plus', label: 'Reportar' },
  { id: 'success', title: 'Exito', description: 'Confirmacion o guardado.', variant: 'success', icon: 'check', label: 'Listo' },
  { id: 'complete', title: 'Completo', description: 'Riel dorado institucional.', variant: 'complete', icon: 'help', label: 'Ayuda' },
  { id: 'sm', title: 'Pequeño', description: 'Tamano compacto.', variant: 'solid', size: 'sm', icon: 'plus', label: 'Agregar' },
  { id: 'lg', title: 'Grande', description: 'Mayor area tactil.', variant: 'solid', size: 'lg', icon: 'plus', label: 'Agregar' },
  { id: 'disabled', title: 'Deshabilitado', description: 'Sin interaccion.', variant: 'solid', icon: 'plus', label: 'Agregar', disabled: true },
];

export const FAB_ATTRS = [
  { name: 'variant', type: 'string', defaultValue: 'basic', body: 'basic | solid | soft | tonal | extended | mini | outline | danger | success | complete' },
  { name: 'size', type: 'string', defaultValue: 'md', body: 'sm | md | lg' },
  { name: 'icon', type: 'string', defaultValue: 'plus', body: 'plus | edit | chat | share | search | upload | help | check' },
  { name: 'label', type: 'string', defaultValue: 'Accion', body: 'Etiqueta accesible; visible en extended.' },
  { name: 'disabled', type: 'boolean', defaultValue: 'false', body: 'Deshabilita el boton.' },
] as const;

export function buildSnippet(lang: CodeLang, example: FabExample): string {
  const attrs = [
    `variant="${example.variant}"`,
    example.size && example.size !== 'md' ? `size="${example.size}"` : null,
    `icon="${example.icon ?? 'plus'}"`,
    `label="${example.label ?? 'Accion'}"`,
    example.disabled ? 'disabled' : null,
  ].filter(Boolean).join(' ');
  const imports = lang === 'html' ? '' : `import '@mariasan001/ui-wc';\n\n`;
  return `${imports}<gob-fab ${attrs}></gob-fab>\n`;
}
