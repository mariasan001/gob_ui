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
  --gob-kpi-progress: 64%;
  --gob-kpi-shadow: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  position: relative;
  display: grid;
  gap: 10px;
  min-width: 0;
  padding: var(--gob-kpi-pad);
  border-radius: var(--gob-kpi-radius);
  border: 1px solid var(--gob-kpi-border);
  background: var(--gob-kpi-bg);
  color: var(--gob-kpi-muted);
  box-shadow: var(--gob-kpi-shadow);
  overflow: hidden;
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

.trend,
.compare {
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

.compare {
  background: var(--gob-kpi-accent-soft);
  color: var(--gob-kpi-accent);
}

.period {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-kpi-muted);
}

.meter {
  display: none;
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(24, 21, 17, 0.08);
  overflow: hidden;
}

.meterFill {
  display: block;
  height: 100%;
  width: var(--gob-kpi-progress);
  border-radius: inherit;
  background: var(--gob-kpi-accent);
}

.root[data-variant='dense'] {
  --gob-kpi-pad: 12px;
  --gob-kpi-value-size: 1.35rem;
  gap: 6px;
}

.root[data-variant='stripe'] {
  padding-left: calc(var(--gob-kpi-pad) + 6px);
}

.root[data-variant='stripe']::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: var(--gob-kpi-accent);
}

.root[data-variant='filled'] {
  background: var(--gob-kpi-accent-soft);
  border-color: transparent;
}

.root[data-variant='filled'] .value {
  color: var(--gob-kpi-accent);
}

.root[data-variant='horizontal'] {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.root[data-variant='horizontal'] .head {
  flex: 1 1 auto;
  align-items: center;
}

.root[data-variant='horizontal'] .valueRow {
  flex: 0 0 auto;
}

.root[data-variant='horizontal'] .value {
  --gob-kpi-value-size: 1.5rem;
}

.root[data-variant='elevated'] {
  --gob-kpi-shadow: 0 14px 28px rgba(24, 21, 17, 0.1);
  border-color: transparent;
}

.root[data-variant='progress'] .meter {
  display: block;
}

.root[data-variant='basic'] .trend,
.root[data-variant='basic'] .period,
.root[data-variant='basic'] .icon,
.root[data-variant='basic'] .compare,
.root[data-variant='trend-up'] .period,
.root[data-variant='trend-up'] .icon,
.root[data-variant='trend-up'] .compare,
.root[data-variant='trend-down'] .period,
.root[data-variant='trend-down'] .icon,
.root[data-variant='trend-down'] .compare,
.root[data-variant='period'] .trend,
.root[data-variant='period'] .icon,
.root[data-variant='period'] .compare,
.root[data-variant='icon'] .trend,
.root[data-variant='icon'] .period,
.root[data-variant='icon'] .compare,
.root[data-variant='dense'] .icon,
.root[data-variant='dense'] .compare,
.root[data-variant='complete'] .compare,
.root[data-variant='stripe'] .trend,
.root[data-variant='stripe'] .icon,
.root[data-variant='stripe'] .compare,
.root[data-variant='filled'] .trend,
.root[data-variant='filled'] .period,
.root[data-variant='filled'] .compare,
.root[data-variant='horizontal'] .trend,
.root[data-variant='horizontal'] .period,
.root[data-variant='horizontal'] .compare,
.root[data-variant='compare'] .trend,
.root[data-variant='compare'] .icon,
.root[data-variant='progress'] .trend,
.root[data-variant='progress'] .icon,
.root[data-variant='progress'] .compare,
.root[data-variant='elevated'] .compare {
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

:host([tone='dark']),
.root[data-tone='dark'] {
  --gob-kpi-accent: #181511;
  --gob-kpi-accent-soft: rgba(24, 21, 17, 0.08);
}

:host([tone='neutral']),
.root[data-tone='neutral'] {
  --gob-kpi-accent: #6b655c;
  --gob-kpi-accent-soft: rgba(24, 21, 17, 0.06);
}

:host([tone='soft']),
.root[data-tone='soft'] {
  --gob-kpi-accent: #a67c52;
  --gob-kpi-accent-soft: rgba(231, 215, 189, 0.65);
}
`;
