export const stepsStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-st-vino: #9f2141;
  --gob-st-vino-deep: #7a1832;
  --gob-st-dorado: #bc945a;
  --gob-st-title: #181511;
  --gob-st-muted: #8a8278;
  --gob-st-border: rgba(24, 21, 17, 0.1);
  --gob-st-bg: #ffffff;
  --gob-st-fill: #f3f3f3;
  --gob-st-dot: 28px;
  --gob-st-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }
[hidden] { display: none !important; }

.root {
  display: grid;
  gap: 14px;
  min-width: 0;
}

.root[data-size='sm'] { --gob-st-dot: 24px; }
.root[data-size='lg'] { --gob-st-dot: 34px; }

.list {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  min-width: 0;
}

.root[data-variant='vertical'] .list {
  flex-direction: column;
  gap: 0;
}

.step {
  appearance: none;
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  gap: 10px;
  flex: 1 1 0;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;
  text-align: left;
  font: inherit;
  cursor: pointer;
  color: var(--gob-st-muted);
}

.root[data-variant='vertical'] .step {
  flex: 0 0 auto;
  width: 100%;
  padding: 4px 0 18px;
  grid-template-columns: auto minmax(0, 1fr);
}

.step:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.marker-wrap {
  display: grid;
  justify-items: center;
  gap: 0;
  min-width: var(--gob-st-dot);
}

.marker {
  width: var(--gob-st-dot);
  height: var(--gob-st-dot);
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--gob-st-border);
  background: var(--gob-st-bg);
  color: var(--gob-st-muted);
  font-size: 12px;
  font-weight: 750;
  letter-spacing: -0.02em;
  transition: background 150ms var(--gob-st-ease), border-color 150ms var(--gob-st-ease), color 150ms var(--gob-st-ease);
}

.marker .icon {
  width: 14px;
  height: 14px;
  display: inline-flex;
}
.marker .icon svg { width: 14px; height: 14px; display: block; }

.connector {
  display: none;
}

.root[data-variant='basic'] .list,
.root[data-variant='numbered'] .list,
.root[data-variant='labeled'] .list,
.root[data-variant='progress'] .list,
.root[data-variant='complete'] .list,
.root[data-variant='soft'] .list,
.root[data-variant='outlined'] .list,
.root[data-variant='compact'] .list {
  gap: 0;
}
.root:not([data-variant='vertical']):not([data-variant='dots']) .step:not(:last-child) .marker-wrap::after {
  content: '';
  position: absolute;
  top: calc(var(--gob-st-dot) / 2);
  left: calc(var(--gob-st-dot) + 8px);
  right: 8px;
  height: 1.5px;
  background: var(--gob-st-border);
}
.root:not([data-variant='vertical']):not([data-variant='dots']) .step {
  position: relative;
  padding-right: 12px;
}
.root:not([data-variant='vertical']):not([data-variant='dots']) .step[data-state='done']:not(:last-child) .marker-wrap::after {
  background: var(--gob-st-vino);
}

.root[data-variant='vertical'] .step:not(:last-child) .marker-wrap::after {
  content: '';
  position: absolute;
  top: calc(var(--gob-st-dot) + 4px);
  left: calc(var(--gob-st-dot) / 2);
  width: 1.5px;
  bottom: 4px;
  transform: translateX(-50%);
  background: var(--gob-st-border);
}
.root[data-variant='vertical'] .step {
  position: relative;
}
.root[data-variant='vertical'] .step[data-state='done']:not(:last-child) .marker-wrap::after {
  background: var(--gob-st-vino);
}

.copy {
  display: grid;
  gap: 2px;
  min-width: 0;
  padding-top: 4px;
}

.label {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: inherit;
}

.desc {
  margin: 0;
  font-size: 11px;
  font-weight: 500;
  color: var(--gob-st-muted);
  line-height: 1.35;
}

.step[data-state='done'] .marker {
  background: var(--gob-st-vino);
  border-color: var(--gob-st-vino);
  color: #fff;
}
.step[data-state='current'] .marker {
  border-color: var(--gob-st-vino);
  color: var(--gob-st-vino);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--gob-st-vino) 12%, transparent);
}
.step[data-state='current'] {
  color: var(--gob-st-vino-deep);
}
.step[data-state='done'] {
  color: var(--gob-st-title);
}

.root[data-variant='dots'] .list {
  gap: 10px;
  justify-content: center;
}
.root[data-variant='dots'] .step {
  flex: 0 0 auto;
  grid-template-columns: auto;
}
.root[data-variant='dots'] .copy { display: none; }
.root[data-variant='dots'] .marker {
  width: 10px;
  height: 10px;
  border-width: 0;
  background: #d8d8d8;
}
.root[data-variant='dots'] .step[data-state='done'] .marker,
.root[data-variant='dots'] .step[data-state='current'] .marker {
  background: var(--gob-st-vino);
  box-shadow: none;
}
.root[data-variant='dots'] .marker .num,
.root[data-variant='dots'] .marker .icon { display: none; }

.root[data-variant='compact'] .copy .desc { display: none; }
.root[data-variant='compact'] { --gob-st-dot: 24px; }

.root[data-variant='soft'] {
  padding: 14px;
  border-radius: 14px;
  background: var(--gob-st-fill);
}

.root[data-variant='outlined'] {
  padding: 14px;
  border-radius: 14px;
  border: 1.5px solid var(--gob-st-border);
}

.root[data-variant='labeled'] .desc { display: none; }
.root[data-variant='progress'] .panel,
.root[data-variant='complete'] .panel {
  display: block;
}

.panel {
  display: none;
  min-height: 56px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--gob-st-border);
  background: var(--gob-st-bg);
  color: #3d3a35;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.45;
}

.root[data-variant='complete'] .panel {
  border-left: 3px solid var(--gob-st-dorado);
}

.root[data-variant='progress'] .bar {
  display: block;
  height: 4px;
  border-radius: 999px;
  background: var(--gob-st-fill);
  overflow: hidden;
}
.bar { display: none; }
.bar > i {
  display: block;
  height: 100%;
  background: var(--gob-st-vino);
  border-radius: inherit;
  width: 0%;
  transition: width 200ms var(--gob-st-ease);
}

.root[data-disabled='true'] { opacity: 0.55; pointer-events: none; }

@media (max-width: 720px) {
  .root:not([data-variant='dots']) .list {
    flex-direction: column;
  }
  .root:not([data-variant='dots']) .step:not(:last-child) .marker-wrap::after {
    top: calc(var(--gob-st-dot) + 4px);
    left: calc(var(--gob-st-dot) / 2);
    right: auto;
    width: 1.5px;
    bottom: 4px;
    height: auto;
    transform: translateX(-50%);
  }
  .root:not([data-variant='dots']) .step {
    padding-right: 0;
    padding-bottom: 16px;
  }
}
`;
