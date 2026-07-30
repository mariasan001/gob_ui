export const PAGE_HEADER_VARIANTS = [
  'basic',
  'description',
  'breadcrumb',
  'actions',
  'status',
  'dense',
  'complete',
] as const;

export type PageHeaderVariant = (typeof PAGE_HEADER_VARIANTS)[number];

export const PAGE_HEADER_TONES = [
  'primary',
  'accent',
  'dark',
  'neutral',
  'soft',
] as const;

export type PageHeaderTone = (typeof PAGE_HEADER_TONES)[number];

export const PAGE_HEADER_OBSERVED_ATTRIBUTES = ['variant', 'tone'] as const;

export function resolvePageHeaderVariant(value: string | null): PageHeaderVariant {
  if (
    value === 'description' ||
    value === 'breadcrumb' ||
    value === 'actions' ||
    value === 'status' ||
    value === 'dense' ||
    value === 'complete'
  ) {
    return value;
  }
  return 'basic';
}

export function resolvePageHeaderTone(value: string | null): PageHeaderTone {
  if (
    value === 'accent' ||
    value === 'dark' ||
    value === 'neutral' ||
    value === 'soft' ||
    value === 'primary'
  ) {
    return value;
  }
  return 'primary';
}
