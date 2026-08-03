export const SPINNER_VARIANTS = [
  'ring',
  'dual',
  'dots',
  'pulse',
  'bars',
  'button',
  'inline',
  'page',
  'overlay',
  'complete',
] as const;

export type SpinnerVariant = (typeof SPINNER_VARIANTS)[number];

export const SPINNER_SIZES = ['sm', 'md', 'lg'] as const;
export type SpinnerSize = (typeof SPINNER_SIZES)[number];

export const SPINNER_STATUSES = [
  'default',
  'info',
  'warning',
  'success',
  'danger',
] as const;
export type SpinnerStatus = (typeof SPINNER_STATUSES)[number];

export const SPINNER_OBSERVED_ATTRIBUTES = [
  'variant',
  'label',
  'size',
  'status',
] as const;

export function resolveSpinnerVariant(value: string | null): SpinnerVariant {
  if (
    value === 'dual' ||
    value === 'dots' ||
    value === 'pulse' ||
    value === 'bars' ||
    value === 'button' ||
    value === 'inline' ||
    value === 'page' ||
    value === 'overlay' ||
    value === 'complete' ||
    value === 'ring'
  ) {
    return value;
  }
  return 'ring';
}

export function resolveSpinnerSize(value: string | null): SpinnerSize {
  if (value === 'sm' || value === 'lg' || value === 'md') return value;
  return 'md';
}

export function resolveSpinnerStatus(value: string | null): SpinnerStatus {
  if (
    value === 'info' ||
    value === 'warning' ||
    value === 'success' ||
    value === 'danger' ||
    value === 'default'
  ) {
    return value;
  }
  return 'default';
}
