export const MODAL_VARIANTS = [
  'basic',
  'confirm',
  'form',
  'danger',
  'success',
  'dense',
  'center',
  'sheet',
  'wide',
  'complete',
] as const;

export type ModalVariant = (typeof MODAL_VARIANTS)[number];

export const MODAL_SIZES = ['sm', 'md', 'lg'] as const;
export type ModalSize = (typeof MODAL_SIZES)[number];

export const MODAL_OBSERVED_ATTRIBUTES = [
  'variant',
  'size',
  'title',
  'description',
  'body',
  'confirm-label',
  'cancel-label',
  'open',
] as const;

export function resolveModalVariant(value: string | null): ModalVariant {
  if ((MODAL_VARIANTS as readonly string[]).includes(value ?? '')) {
    return value as ModalVariant;
  }
  return 'basic';
}

export function resolveModalSize(value: string | null): ModalSize {
  if (value === 'sm' || value === 'lg') return value;
  return 'md';
}
