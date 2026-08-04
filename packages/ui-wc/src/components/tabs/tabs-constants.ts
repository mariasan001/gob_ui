export const TABS_VARIANTS = [
  'basic',
  'underline',
  'pills',
  'soft',
  'vertical',
  'dense',
  'icons',
  'segmented',
  'bordered',
  'complete',
] as const;

export type TabsVariant = (typeof TABS_VARIANTS)[number];

export const TABS_SIZES = ['sm', 'md', 'lg'] as const;
export type TabsSize = (typeof TABS_SIZES)[number];

export const TABS_OBSERVED_ATTRIBUTES = [
  'variant',
  'size',
  'value',
  'items',
  'disabled',
] as const;

export type TabsItem = {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  badge?: string;
};

export function resolveTabsVariant(value: string | null): TabsVariant {
  if ((TABS_VARIANTS as readonly string[]).includes(value ?? '')) {
    return value as TabsVariant;
  }
  return 'basic';
}

export function resolveTabsSize(value: string | null): TabsSize {
  if (value === 'sm' || value === 'lg' || value === 'md') return value;
  return 'md';
}

export function parseTabsItems(raw: string | null): TabsItem[] {
  if (!raw?.trim()) {
    return [
      { id: 'general', label: 'General' },
      { id: 'detalle', label: 'Detalle' },
      { id: 'historial', label: 'Historial' },
    ];
  }
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((item, index) => {
        if (!item || typeof item !== 'object') return null;
        const row = item as Record<string, unknown>;
        const id =
          typeof row.id === 'string' && row.id.trim()
            ? row.id.trim()
            : `tab-${index + 1}`;
        const label =
          typeof row.label === 'string' && row.label.trim()
            ? row.label.trim()
            : id;
        return {
          id,
          label,
          icon: typeof row.icon === 'string' ? row.icon : undefined,
          disabled: Boolean(row.disabled),
          badge: typeof row.badge === 'string' ? row.badge : undefined,
        } satisfies TabsItem;
      })
      .filter((item): item is TabsItem => Boolean(item));
  } catch {
    return [];
  }
}
