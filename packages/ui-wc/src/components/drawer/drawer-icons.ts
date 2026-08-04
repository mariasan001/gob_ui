export const DRAWER_ICONS: Record<string, string> = {
  detail: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 5.5h10A1.5 1.5 0 0 1 18.5 7v10a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 17V7A1.5 1.5 0 0 1 7 5.5Z" stroke="currentColor" stroke-width="1.5"/><path d="M8.5 9.5h7M8.5 12.5h7M8.5 15.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  filters: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 7h14M8 12h8M10 17h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  form: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 6.5h10v11H7z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 10h6M9 13.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  danger: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4.5 20.5 19H3.5L12 4.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 10v4.5M12 16.8v.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  brand: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M12 11v5.5M12 8v.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
};

export function resolveDrawerIcon(variant: string): string {
  if (variant === 'filters') return DRAWER_ICONS.filters;
  if (variant === 'form') return DRAWER_ICONS.form;
  if (variant === 'danger') return DRAWER_ICONS.danger;
  if (variant === 'complete') return DRAWER_ICONS.brand;
  return DRAWER_ICONS.detail;
}
