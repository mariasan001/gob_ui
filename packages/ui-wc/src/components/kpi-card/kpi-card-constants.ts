export const KPI_VARIANTS = [
  'basic',
  'trend-up',
  'trend-down',
  'period',
  'icon',
  'dense',
  'complete',
] as const;

export type KpiVariant = (typeof KPI_VARIANTS)[number];

export const KPI_TONES = ['primary', 'accent'] as const;

export type KpiTone = (typeof KPI_TONES)[number];

export const KPI_OBSERVED_ATTRIBUTES = ['variant', 'tone'] as const;

export function resolveKpiVariant(value: string | null): KpiVariant {
  if (
    value === 'trend-up' ||
    value === 'trend-down' ||
    value === 'period' ||
    value === 'icon' ||
    value === 'dense' ||
    value === 'complete'
  ) {
    return value;
  }
  return 'basic';
}

export function resolveKpiTone(value: string | null): KpiTone {
  if (value === 'accent') return 'accent';
  return 'primary';
}
