export const kpiCardStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-kpi-bg: #ffffff;
  --gob-kpi-border: rgba(24, 21, 17, 0.1);
  --gob-kpi-title: #181511;
  --gob-kpi-muted: #8a8278;
  --gob-kpi-accent: #9f2141;
  --gob-kpi-accent-soft: rgba(159, 33, 65, 0.1);
  --gob-kpi-up: #1f8a55;
  --gob-kpi-down: #c0392b;
  --gob-kpi-pad: 18px;
  --gob-kpi-radius: 16px;
  --gob-kpi-value-size: 1.85rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  display: grid;
  gap: 10px;
  min-width: 0;
  padding: var(--gob-kpi-pad);
  border-radius: var(--gob-kpi-radius);
  border: 1px solid var(--gob-kpi-border);
  background: var(--gob-kpi-bg);
  color: var(--gob-kpi-muted);
}

.head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  min-width: 0;
}

.label {
  min-width: 0;
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gob-kpi-muted);
}

.icon {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--gob-kpi-accent-soft);
  color: var(--gob-kpi-accent);
  flex: 0 0 auto;
}

.valueRow {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
}

.value {
  margin: 0;
  font-size: var(--gob-kpi-value-size);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--gob-kpi-title);
}

.trend {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-height: 24px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.trend[data-dir='up'] {
  background: rgba(31, 138, 85, 0.12);
  color: var(--gob-kpi-up);
}

.trend[data-dir='down'] {
  background: rgba(192, 57, 43, 0.12);
  color: var(--gob-kpi-down);
}

.period {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-kpi-muted);
}

.root[data-variant='dense'] {
  --gob-kpi-pad: 12px;
  --gob-kpi-value-size: 1.35rem;
  gap: 6px;
}

.root[data-variant='basic'] .trend,
.root[data-variant='basic'] .period,
.root[data-variant='basic'] .icon,
.root[data-variant='trend-up'] .period,
.root[data-variant='trend-up'] .icon,
.root[data-variant='trend-down'] .period,
.root[data-variant='trend-down'] .icon,
.root[data-variant='period'] .trend,
.root[data-variant='period'] .icon,
.root[data-variant='icon'] .trend,
.root[data-variant='icon'] .period,
.root[data-variant='dense'] .icon {
  display: none;
}

:host([tone='primary']),
:host(:not([tone])),
.root[data-tone='primary'] {
  --gob-kpi-accent: #9f2141;
  --gob-kpi-accent-soft: rgba(159, 33, 65, 0.1);
}

:host([tone='accent']),
.root[data-tone='accent'] {
  --gob-kpi-accent: #bc945a;
  --gob-kpi-accent-soft: rgba(188, 148, 90, 0.18);
}
`;
