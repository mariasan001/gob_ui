export const TABLE_VARIANTS = [
  'basic',
  'striped',
  'bordered',
  'dense',
  'selectable',
  'sortable',
  'sticky',
  'status',
  'actions',
  'empty',
] as const;

export type TableVariant = (typeof TABLE_VARIANTS)[number];

export const TABLE_TONES = [
  'primary',
  'accent',
  'dark',
  'neutral',
  'soft',
] as const;

export type TableTone = (typeof TABLE_TONES)[number];

export const TABLE_OBSERVED_ATTRIBUTES = ['variant', 'tone'] as const;

const VARIANT_SET = new Set<string>(TABLE_VARIANTS);

export function resolveTableVariant(value: string | null): TableVariant {
  if (value && VARIANT_SET.has(value)) return value as TableVariant;
  return 'basic';
}

export function resolveTableTone(value: string | null): TableTone {
  if (
    value === 'accent' ||
    value === 'dark' ||
    value === 'neutral' ||
    value === 'soft'
  ) {
    return value;
  }
  return 'primary';
}

/** Estilos para el <table> en light DOM (datos masivos / gobierno). */
export const tableLightDomStyles = `
gob-table {
  --gob-tb-accent: #9f2141;
  --gob-tb-accent-soft: rgba(159, 33, 65, 0.1);
  --gob-tb-title: #181511;
  --gob-tb-muted: #8a8278;
  --gob-tb-border: rgba(24, 21, 17, 0.1);
  --gob-tb-zebra: rgba(24, 21, 17, 0.035);
  --gob-tb-hover: rgba(159, 33, 65, 0.05);
  --gob-tb-pad-y: 11px;
  --gob-tb-pad-x: 14px;
  --gob-tb-font: var(--gob-font-sans, Gotham, Raleway, sans-serif);
}

gob-table[tone='accent'] {
  --gob-tb-accent: #bc945a;
  --gob-tb-accent-soft: rgba(188, 148, 90, 0.16);
  --gob-tb-hover: rgba(188, 148, 90, 0.08);
}
gob-table[tone='dark'] {
  --gob-tb-accent: #181511;
  --gob-tb-accent-soft: rgba(24, 21, 17, 0.08);
  --gob-tb-hover: rgba(24, 21, 17, 0.05);
}
gob-table[tone='neutral'] {
  --gob-tb-accent: #6b655c;
  --gob-tb-accent-soft: rgba(24, 21, 17, 0.06);
  --gob-tb-hover: rgba(24, 21, 17, 0.04);
}
gob-table[tone='soft'] {
  --gob-tb-accent: #a67c52;
  --gob-tb-accent-soft: rgba(231, 215, 189, 0.55);
  --gob-tb-hover: rgba(166, 124, 82, 0.08);
}

gob-table table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: var(--gob-tb-font);
  font-size: 13px;
  color: var(--gob-tb-title);
}

gob-table thead th {
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--gob-tb-muted);
  background: #fafafa;
  border-bottom: 1px solid var(--gob-tb-border);
  padding: var(--gob-tb-pad-y) var(--gob-tb-pad-x);
  white-space: nowrap;
}

gob-table tbody td {
  padding: var(--gob-tb-pad-y) var(--gob-tb-pad-x);
  border-bottom: 1px solid rgba(24, 21, 17, 0.06);
  vertical-align: middle;
  line-height: 1.35;
}

gob-table tbody tr:last-child td {
  border-bottom: 0;
}

gob-table tbody tr:hover td {
  background: var(--gob-tb-hover);
}

gob-table td.num,
gob-table th.num {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

gob-table[variant='striped'] tbody tr:nth-child(even) td {
  background: var(--gob-tb-zebra);
}

gob-table[variant='bordered'] table {
  border: 1px solid var(--gob-tb-border);
  border-radius: 12px;
  overflow: hidden;
}
gob-table[variant='bordered'] thead th,
gob-table[variant='bordered'] tbody td {
  border-right: 1px solid rgba(24, 21, 17, 0.06);
}
gob-table[variant='bordered'] thead th:last-child,
gob-table[variant='bordered'] tbody td:last-child {
  border-right: 0;
}

gob-table[variant='dense'] {
  --gob-tb-pad-y: 7px;
  --gob-tb-pad-x: 10px;
}
gob-table[variant='dense'] table {
  font-size: 12px;
}

gob-table[variant='sticky'] thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0 1px 0 var(--gob-tb-border);
}

gob-table .gob-tb-check {
  width: 18px;
  height: 18px;
  accent-color: var(--gob-tb-accent);
  cursor: pointer;
}

gob-table .gob-tb-sort {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  font: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  font-weight: inherit;
}
gob-table .gob-tb-sort i {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid var(--gob-tb-muted);
  opacity: 0.55;
}
gob-table .gob-tb-sort[data-dir='asc'] i {
  border-top: 0;
  border-bottom: 5px solid var(--gob-tb-accent);
  opacity: 1;
}
gob-table .gob-tb-sort[data-dir='desc'] i {
  border-top: 5px solid var(--gob-tb-accent);
  opacity: 1;
}

gob-table .gob-tb-status {
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.02em;
  background: var(--gob-tb-accent-soft);
  color: var(--gob-tb-accent);
}
gob-table .gob-tb-status[data-tone='ok'] {
  background: rgba(31, 138, 85, 0.12);
  color: #1f8a55;
}
gob-table .gob-tb-status[data-tone='warn'] {
  background: rgba(208, 146, 26, 0.14);
  color: #a87412;
}
gob-table .gob-tb-status[data-tone='err'] {
  background: rgba(192, 57, 43, 0.12);
  color: #c0392b;
}
gob-table .gob-tb-status[data-tone='info'] {
  background: rgba(24, 21, 17, 0.08);
  color: #4a453e;
}

gob-table .gob-tb-actions {
  display: inline-flex;
  gap: 6px;
}
gob-table .gob-tb-actions button {
  appearance: none;
  border: 1px solid rgba(24, 21, 17, 0.1);
  background: #fff;
  color: #4a453e;
  border-radius: 8px;
  min-height: 28px;
  padding: 0 10px;
  font: inherit;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}
gob-table .gob-tb-actions button:hover {
  border-color: var(--gob-tb-accent);
  color: var(--gob-tb-accent);
}

gob-table[variant='empty'] table {
  display: none;
}
`;
