export const DATA_GRID_VARIANTS = [
  'filters',
  'frozen-left',
  'frozen-right',
  'bulk',
  'paginated',
  'expandable',
  'column-filter',
  'wide',
  'toolbar',
  'grouped',
] as const;

export type DataGridVariant = (typeof DATA_GRID_VARIANTS)[number];

export const DATA_GRID_TONES = [
  'primary',
  'accent',
  'dark',
  'neutral',
  'soft',
] as const;

export type DataGridTone = (typeof DATA_GRID_TONES)[number];

export const DATA_GRID_OBSERVED_ATTRIBUTES = ['variant', 'tone'] as const;

const VARIANT_SET = new Set<string>(DATA_GRID_VARIANTS);

export function resolveDataGridVariant(
  value: string | null,
): DataGridVariant {
  if (value && VARIANT_SET.has(value)) return value as DataGridVariant;
  return 'filters';
}

export function resolveDataGridTone(value: string | null): DataGridTone {
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

export const dataGridLightDomStyles = `
gob-data-grid {
  --gob-dg-accent: #9f2141;
  --gob-dg-accent-soft: rgba(159, 33, 65, 0.1);
  --gob-dg-title: #181511;
  --gob-dg-muted: #8a8278;
  --gob-dg-border: rgba(24, 21, 17, 0.1);
  --gob-dg-zebra: rgba(24, 21, 17, 0.03);
  --gob-dg-hover: rgba(159, 33, 65, 0.05);
  --gob-dg-pad-y: 10px;
  --gob-dg-pad-x: 12px;
  --gob-dg-font: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-dg-freeze-bg: #fff;
}

gob-data-grid[tone='accent'] {
  --gob-dg-accent: #bc945a;
  --gob-dg-accent-soft: rgba(188, 148, 90, 0.16);
  --gob-dg-hover: rgba(188, 148, 90, 0.08);
}
gob-data-grid[tone='dark'] {
  --gob-dg-accent: #181511;
  --gob-dg-accent-soft: rgba(24, 21, 17, 0.08);
  --gob-dg-hover: rgba(24, 21, 17, 0.05);
}
gob-data-grid[tone='neutral'] {
  --gob-dg-accent: #6b655c;
  --gob-dg-accent-soft: rgba(24, 21, 17, 0.06);
  --gob-dg-hover: rgba(24, 21, 17, 0.04);
}
gob-data-grid[tone='soft'] {
  --gob-dg-accent: #a67c52;
  --gob-dg-accent-soft: rgba(231, 215, 189, 0.55);
  --gob-dg-hover: rgba(166, 124, 82, 0.08);
}

gob-data-grid table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: var(--gob-dg-font);
  font-size: 13px;
  color: var(--gob-dg-title);
}

gob-data-grid thead th {
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--gob-dg-muted);
  background: #f7f7f7;
  border-bottom: 1px solid var(--gob-dg-border);
  padding: var(--gob-dg-pad-y) var(--gob-dg-pad-x);
  white-space: nowrap;
}

gob-data-grid tbody td {
  padding: var(--gob-dg-pad-y) var(--gob-dg-pad-x);
  border-bottom: 1px solid rgba(24, 21, 17, 0.06);
  vertical-align: middle;
  background: #fff;
  line-height: 1.35;
}

gob-data-grid tbody tr:hover td {
  background: var(--gob-dg-hover);
}

gob-data-grid td.num,
gob-data-grid th.num {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

gob-data-grid[variant='wide'] {
  --gob-dg-pad-y: 8px;
  --gob-dg-pad-x: 10px;
}
gob-data-grid[variant='wide'] table {
  font-size: 12px;
  min-width: 920px;
}

gob-data-grid[variant='frozen-left'] th:first-child,
gob-data-grid[variant='frozen-left'] td:first-child,
gob-data-grid[variant='bulk'] th:nth-child(2),
gob-data-grid[variant='bulk'] td:nth-child(2),
gob-data-grid[variant='frozen-left'] th.freeze,
gob-data-grid[variant='frozen-left'] td.freeze {
  position: sticky;
  left: 0;
  z-index: 3;
  background: var(--gob-dg-freeze-bg);
  box-shadow: 4px 0 8px rgba(24, 21, 17, 0.06);
}

gob-data-grid[variant='frozen-left'] thead th:first-child,
gob-data-grid[variant='bulk'] thead th:nth-child(2) {
  z-index: 4;
  background: #f7f7f7;
}

gob-data-grid[variant='frozen-right'] th:last-child,
gob-data-grid[variant='frozen-right'] td:last-child {
  position: sticky;
  right: 0;
  z-index: 3;
  background: var(--gob-dg-freeze-bg);
  box-shadow: -4px 0 8px rgba(24, 21, 17, 0.06);
}
gob-data-grid[variant='frozen-right'] thead th:last-child {
  z-index: 4;
  background: #f7f7f7;
}

gob-data-grid .gob-dg-check {
  width: 18px;
  height: 18px;
  accent-color: var(--gob-dg-accent);
  cursor: pointer;
}

gob-data-grid .gob-dg-status {
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  background: var(--gob-dg-accent-soft);
  color: var(--gob-dg-accent);
}
gob-data-grid .gob-dg-status[data-tone='ok'] {
  background: rgba(31, 138, 85, 0.12);
  color: #1f8a55;
}
gob-data-grid .gob-dg-status[data-tone='warn'] {
  background: rgba(208, 146, 26, 0.14);
  color: #a87412;
}
gob-data-grid .gob-dg-status[data-tone='err'] {
  background: rgba(192, 57, 43, 0.12);
  color: #c0392b;
}

gob-data-grid .gob-dg-actions {
  display: inline-flex;
  gap: 6px;
}
gob-data-grid .gob-dg-actions button {
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
  white-space: nowrap;
}
gob-data-grid .gob-dg-actions button:hover {
  border-color: var(--gob-dg-accent);
  color: var(--gob-dg-accent);
}

gob-data-grid .gob-dg-expand {
  appearance: none;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid rgba(24, 21, 17, 0.1);
  background: #fff;
  color: var(--gob-dg-accent);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  line-height: 1;
}
gob-data-grid tr.gob-dg-detail td {
  background: #fafafa;
  color: var(--gob-dg-muted);
  font-size: 12px;
  padding: 12px 14px 14px 48px;
}
gob-data-grid tr.gob-dg-group td {
  background: var(--gob-dg-accent-soft);
  color: var(--gob-dg-accent);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.02em;
}

gob-data-grid .gob-dg-col-filter {
  display: block;
  width: 100%;
  margin-top: 6px;
  min-height: 28px;
  padding: 0 8px;
  border-radius: 8px;
  border: 1px solid rgba(24, 21, 17, 0.12);
  background: #fff;
  font: inherit;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-dg-title);
  text-transform: none;
  letter-spacing: 0;
}
`;
