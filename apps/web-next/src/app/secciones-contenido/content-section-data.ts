import type { ContentSectionVariant } from '@mariasan001/ui-wc';

export type CodeLang = 'html' | 'react' | 'vue' | 'angular';

export const CODE_LANGUAGES: { id: CodeLang; label: string }[] = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
];

export type ContentSectionExample = {
  id: string;
  title: string;
  description: string;
  variant: ContentSectionVariant;
  eyebrow?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  body?: string;
  actionLabel?: string;
};

export const CONTENT_SECTION_EXAMPLES: ContentSectionExample[] = [
  { id: 'basic', title: 'Basico', description: 'Bloque de seccion estandar.', variant: 'basic', eyebrow: 'Servicio', sectionTitle: 'Constancia de situacion fiscal', sectionDescription: 'Consulta y descarga el documento oficial.', body: 'El ciudadano puede validar su RFC y obtener la constancia en minutos.' },
  { id: 'soft', title: 'Suave', description: 'Fondo fill institucional.', variant: 'soft', eyebrow: 'Guia', sectionTitle: 'Requisitos del tramite', sectionDescription: 'Lista corta de documentos.', body: 'Identificacion, CURP y comprobante de domicilio con antiguedad maxima de 3 meses.' },
  { id: 'split', title: 'Dividido', description: 'Texto + bloque visual.', variant: 'split', eyebrow: 'Modulo', sectionTitle: 'Bandeja de trabajo', sectionDescription: 'Organiza la operacion diaria.', body: 'Prioriza urgentes, firmas y observaciones pendientes del area.' },
  { id: 'centered', title: 'Centrado', description: 'Alineacion centrada.', variant: 'centered', eyebrow: 'GobMX', sectionTitle: 'Diseno institucional claro', sectionDescription: 'Una sola idea por seccion.', body: 'Tipografia, color y ritmo visual alineados al sistema.' },
  { id: 'dense', title: 'Denso', description: 'Padding compacto.', variant: 'dense', eyebrow: 'Nota', sectionTitle: 'Aviso operativo', sectionDescription: 'Cambio de ventana.', body: 'La mesa de ayuda atendera de 9:00 a 18:00 hrs.' },
  { id: 'outline', title: 'Contorno', description: 'Borde con acento vino.', variant: 'outline', eyebrow: 'Legal', sectionTitle: 'Aviso de privacidad', sectionDescription: 'Tratamiento de datos personales.', body: 'La informacion se usa solo para la gestion del tramite solicitado.' },
  { id: 'steps', title: 'Pasos', description: 'Contenido de flujo.', variant: 'steps', eyebrow: 'Flujo', sectionTitle: 'Como iniciar tu solicitud', sectionDescription: 'Tres pasos claros.', body: '1) Captura  2) Adjunta evidencias  3) Firma y envia.' },
  { id: 'feature', title: 'Feature', description: 'Con CTA.', variant: 'feature', eyebrow: 'Beneficio', sectionTitle: 'Seguimiento en tiempo real', sectionDescription: 'Consulta el folio cuando quieras.', body: 'Recibe notificaciones al cambiar el estatus del expediente.', actionLabel: 'Consultar folio' },
  { id: 'brand', title: 'Marca', description: 'Titulo en vino.', variant: 'brand', eyebrow: 'Marca', sectionTitle: 'Identidad GobMX', sectionDescription: 'Consistencia en cada superficie.', body: 'Vino, dorado y tipografia del sistema en un solo bloque.', actionLabel: 'Ver fundamentos' },
  { id: 'complete', title: 'Completo', description: 'Riel dorado institucional.', variant: 'complete', eyebrow: 'Oficial', sectionTitle: 'Seccion completa', sectionDescription: 'Bloque con acento dorado.', body: 'Ideal para cierres de landing o documentos oficiales.', actionLabel: 'Continuar' },
];

export const CONTENT_SECTION_ATTRS = [
  { name: 'variant', type: 'string', defaultValue: 'basic', body: 'basic | soft | split | centered | dense | outline | steps | feature | brand | complete' },
  { name: 'eyebrow', type: 'string', defaultValue: 'Seccion', body: 'Etiqueta superior.' },
  { name: 'title', type: 'string', defaultValue: 'Contenido…', body: 'Titulo principal.' },
  { name: 'description', type: 'string', defaultValue: '—', body: 'Texto de apoyo.' },
  { name: 'body', type: 'string', defaultValue: '—', body: 'Contenido del bloque.' },
  { name: 'action-label', type: 'string', defaultValue: 'Conocer mas', body: 'CTA (feature / brand / complete).' },
] as const;

export function buildSnippet(lang: CodeLang, example: ContentSectionExample): string {
  const attrs = [
    `variant="${example.variant}"`,
    example.eyebrow ? `eyebrow="${example.eyebrow}"` : null,
    `title="${example.sectionTitle ?? 'Seccion'}"`,
    `description="${example.sectionDescription ?? 'Descripcion'}"`,
    example.body ? `body="${example.body}"` : null,
    example.actionLabel ? `action-label="${example.actionLabel}"` : null,
  ].filter(Boolean).join(' ');
  const imports = lang === 'html' ? '' : `import '@mariasan001/ui-wc';\n\n`;
  return `${imports}<gob-content-section ${attrs}></gob-content-section>\n`;
}
