export const progressStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  /* Marca unica: vino + dorado */
  --gob-pg-vino: #9f2141;
  --gob-pg-dorado: #bc945a;
  --gob-pg-track: #ebebeb;
  --gob-pg-fill: var(--gob-pg-vino);
  --gob-pg-fill-2: var(--gob-pg-dorado);
  --gob-pg-title: #181511;
  --gob-pg-muted: #8a8278;
  --gob-pg-bg: #ffffff;
  --gob-pg-border: rgba(24, 21, 17, 0.08);
  --gob-pg-radius: 16px;
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
  padding: 18px;
  border: 1px solid var(--gob-pg-border);
  border-radius: var(--gob-pg-radius);
  background: var(--gob-pg-bg);
}

.root[data-status='info'] { --gob-pg-fill: #2f5f8a; --gob-pg-fill-2: #5a86ad; }
.root[data-status='warning'] { --gob-pg-fill: #d0921a; --gob-pg-fill-2: #bc945a; }
.root[data-status='success'] { --gob-pg-fill: #1f8a55; --gob-pg-fill-2: #4aa879; }
.root[data-status='danger'] { --gob-pg-fill: #c62828; --gob-pg-fill-2: #9f2141; }

.head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  min-width: 0;
}

.label {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: var(--gob-pg-title);
  letter-spacing: -0.01em;
}

.value {
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  color: var(--gob-pg-dorado);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.track {
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: var(--gob-pg-track);
  overflow: hidden;
}

.root[data-variant='thin'] .track { height: 6px; }
.root[data-variant='thick'] .track { height: 14px; }

.fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--gob-pg-fill);
  transition: width 280ms ease;
}

.root[data-variant='stacked'] .fill {
  background: var(--gob-pg-vino);
  box-shadow: inset -6px 0 0 var(--gob-pg-dorado);
}

/* Indeterminate */
.root[data-variant='indeterminate'] .fill {
  width: 36% !important;
  background: var(--gob-pg-fill);
  animation: gob-pg-indeterminate 1.25s ease-in-out infinite;
}

@keyframes gob-pg-indeterminate {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(320%); }
}

@media (prefers-reduced-motion: reduce) {
  .root[data-variant='indeterminate'] .fill {
    animation: none;
    width: 50% !important;
  }
  .fill { transition: none; }
}

/* Segmented */
.segments {
  display: grid;
  grid-template-columns: repeat(var(--gob-pg-segments, 4), minmax(0, 1fr));
  gap: 6px;
}
.segment {
  height: 10px;
  border-radius: 999px;
  background: var(--gob-pg-track);
  overflow: hidden;
}
.segment[data-on='true'] {
  background: var(--gob-pg-fill);
}
.segment:nth-child(even)[data-on='true'] {
  background: var(--gob-pg-fill-2);
}

/* Steps */
.steps {
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
}
.step {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
}
.step:last-child {
  flex: 0 0 auto;
}
.step-dot {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: var(--gob-pg-track);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex: 0 0 auto;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(24, 21, 17, 0.06);
}
.step[data-done='true'] .step-dot,
.step[data-active='true'] .step-dot {
  background: var(--gob-pg-fill);
}
.step:nth-child(even)[data-done='true'] .step-dot,
.step:nth-child(even)[data-active='true'] .step-dot {
  background: var(--gob-pg-fill-2);
}
.step-line {
  height: 3px;
  flex: 1 1 auto;
  margin: 0 6px;
  border-radius: 999px;
  background: var(--gob-pg-track);
}
.step[data-done='true'] .step-line {
  background: var(--gob-pg-fill);
}

/* Ring */
.ring-wrap {
  display: grid;
  justify-items: center;
  gap: 8px;
}
.ring {
  position: relative;
  width: 96px;
  height: 96px;
}
.ring svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}
.ring-track {
  fill: none;
  stroke: var(--gob-pg-track);
  stroke-width: 8;
}
.ring-fill {
  fill: none;
  stroke: var(--gob-pg-fill);
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke-dashoffset 280ms ease;
}
.ring-center {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 16px;
  font-weight: 700;
  color: var(--gob-pg-title);
  font-variant-numeric: tabular-nums;
}

.hint {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-pg-muted);
}

.pill {
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 9px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  background: rgba(159, 33, 65, 0.12);
  color: #9f2141;
}
.root[data-status='info'] .pill {
  background: rgba(47, 95, 138, 0.12);
  color: #2f5f8a;
}
.root[data-status='warning'] .pill {
  background: rgba(208, 146, 26, 0.16);
  color: #a87412;
}
.root[data-status='success'] .pill {
  background: rgba(31, 138, 85, 0.14);
  color: #1f8a55;
}
.root[data-status='danger'] .pill {
  background: rgba(198, 40, 40, 0.12);
  color: #c62828;
}
`;
