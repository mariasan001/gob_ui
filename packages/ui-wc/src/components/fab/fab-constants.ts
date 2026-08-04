export const FAB_VARIANTS = [
  'basic',
  'solid',
  'soft',
  'tonal',
  'extended',
  'mini',
  'outline',
  'danger',
  'success',
  'complete',
] as const;

export type FabVariant = (typeof FAB_VARIANTS)[number];

export const FAB_SIZES = ['sm', 'md', 'lg'] as const;
export type FabSize = (typeof FAB_SIZES)[number];

export const FAB_OBSERVED_ATTRIBUTES = [
  'variant',
  'size',
  'icon',
  'label',
  'disabled',
] as const;

export const FAB_ICONS: Record<string, string> = {
  plus: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.5 5.5 18.5 9.5M5 19l1.2-4.5L15.8 4.9a2 2 0 0 1 2.8 0l.5.5a2 2 0 0 1 0 2.8L9.5 17.8 5 19Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5.5 6.5h13a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H10l-3.5 3v-3H5.5A1.5 1.5 0 0 1 4 15V8a1.5 1.5 0 0 1 1.5-1.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="6.5" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="17" cy="6.5" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="17" cy="17.5" r="2" stroke="currentColor" stroke-width="1.5"/><path d="M8.3 11.1 15.2 7.4M8.3 12.9l6.9 3.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.25" stroke="currentColor" stroke-width="1.5"/><path d="M16.2 16.2 20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 16V5.5M12 5.5 8.5 9M12 5.5 15.5 9M5 18.5h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  help: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M9.8 9.6a2.4 2.4 0 0 1 4.4 1.2c0 1.4-1.4 1.8-2.2 2.4V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="16.5" r="0.9" fill="currentColor"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

export function resolveFabIcon(name?: string | null): string {
  const key = (name || 'plus').trim().toLowerCase();
  return FAB_ICONS[key] || FAB_ICONS.plus;
}

export function resolveFabVariant(value: string | null): FabVariant {
  if ((FAB_VARIANTS as readonly string[]).includes(value ?? '')) {
    return value as FabVariant;
  }
  return 'basic';
}

export function resolveFabSize(value: string | null): FabSize {
  if (value === 'sm' || value === 'lg') return value;
  return 'md';
}
