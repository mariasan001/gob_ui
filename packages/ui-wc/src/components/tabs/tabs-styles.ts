export const tabsStyles = `
:host {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-tb-vino: #9f2141;
  --gob-tb-vino-deep: #7a1832;
  --gob-tb-dorado: #bc945a;
  --gob-tb-title: #181511;
  --gob-tb-muted: #8a8278;
  --gob-tb-text: #3d3a35;
  --gob-tb-border: rgba(24, 21, 17, 0.12);
  --gob-tb-bg: #ffffff;
  --gob-tb-fill: #f5f2ec;
  --gob-tb-radius: 12px;
  --gob-tb-height: 40px;
  --gob-tb-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*,
*::before,
*::after { box-sizing: border-box; }

[hidden] { display: none !important; }

.root {
  display: grid;
  gap: 12px;
  min-width: 0;
}

.root[data-size='sm'] { --gob-tb-height: 34px; --gob-tb-radius: 10px; }
.root[data-size='lg'] { --gob-tb-height: 46px; --gob-tb-radius: 14px; }
.root[data-variant='dense'] { --gob-tb-height: 32px; --gob-tb-radius: 8px; }

.root[data-variant='vertical'] {
  grid-template-columns: minmax(140px, 200px) minmax(0, 1fr);
  align-items: start;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  min-width: 0;
  padding: 0;
  margin: 0;
  list-style: none;
}

.root[data-variant='vertical'] .list {
  flex-direction: column;
  gap: 4px;
}

.root[data-variant='underline'] .list,
.root[data-variant='bordered'] .list,
.root[data-variant='complete'] .list {
  gap: 0;
  border-bottom: 1px solid var(--gob-tb-border);
}

.root[data-variant='pills'] .list,
.root[data-variant='soft'] .list,
.root[data-variant='segmented'] .list {
  padding: 4px;
  border-radius: calc(var(--gob-tb-radius) + 4px);
  background: var(--gob-tb-fill);
}

.root[data-variant='segmented'] .list {
  display: inline-flex;
  flex-wrap: nowrap;
  width: fit-content;
  max-width: 100%;
}

.root[data-variant='bordered'] .list {
  border: 1px solid var(--gob-tb-border);
  border-radius: var(--gob-tb-radius);
  border-bottom: 1px solid var(--gob-tb-border);
  overflow: hidden;
}

.tab {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: var(--gob-tb-height);
  padding: 0 14px;
  border: 0;
  border-radius: var(--gob-tb-radius);
  background: transparent;
  color: var(--gob-tb-muted);
  font: inherit;
  font-size: 13px;
  font-weight: 650;
  letter-spacing: -0.01em;
  cursor: pointer;
  white-space: nowrap;
  transition:
    color 160ms var(--gob-tb-ease),
    background 160ms var(--gob-tb-ease),
    box-shadow 160ms var(--gob-tb-ease);
}

.tab:hover:not(:disabled) {
  color: var(--gob-tb-title);
  background: rgba(24, 21, 17, 0.04);
}

.tab[aria-selected='true'] {
  color: var(--gob-tb-vino);
  background: color-mix(in srgb, var(--gob-tb-vino) 10%, #fff);
}

.tab:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.root[data-variant='underline'] .tab,
.root[data-variant='complete'] .tab {
  border-radius: 0;
  background: transparent;
  box-shadow: inset 0 -2px 0 transparent;
}
.root[data-variant='underline'] .tab[aria-selected='true'],
.root[data-variant='complete'] .tab[aria-selected='true'] {
  color: var(--gob-tb-vino);
  background: transparent;
  box-shadow: inset 0 -2px 0 var(--gob-tb-vino);
}

.root[data-variant='pills'] .tab[aria-selected='true'],
.root[data-variant='soft'] .tab[aria-selected='true'],
.root[data-variant='segmented'] .tab[aria-selected='true'] {
  background: #fff;
  color: var(--gob-tb-vino);
  box-shadow: 0 1px 3px rgba(24, 21, 17, 0.08);
}

.root[data-variant='soft'] .tab[aria-selected='true'] {
  background: color-mix(in srgb, var(--gob-tb-vino) 12%, #fff);
  box-shadow: none;
}

.root[data-variant='bordered'] .tab {
  border-radius: 0;
  flex: 1 1 auto;
  border-right: 1px solid var(--gob-tb-border);
}
.root[data-variant='bordered'] .tab:last-child {
  border-right: 0;
}
.root[data-variant='bordered'] .tab[aria-selected='true'] {
  background: color-mix(in srgb, var(--gob-tb-dorado) 16%, #fff);
  color: var(--gob-tb-title);
}

.root[data-variant='icons'] .tab {
  min-width: var(--gob-tb-height);
  padding: 0 12px;
}

.icon {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: currentColor;
  opacity: 0.55;
  flex: 0 0 auto;
}

.tab[aria-selected='true'] .icon {
  opacity: 1;
  background: var(--gob-tb-dorado);
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  background: color-mix(in srgb, var(--gob-tb-dorado) 22%, #fff);
  color: var(--gob-tb-title);
}

.panel {
  min-height: 56px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid var(--gob-tb-border);
  background: var(--gob-tb-bg);
  color: var(--gob-tb-text);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.45;
}

.root[data-variant='complete'] .panel {
  border-color: color-mix(in srgb, var(--gob-tb-dorado) 35%, #ebe6df);
  background: linear-gradient(180deg, #fff 0%, #fbf8f3 100%);
}

.root[data-disabled='true'] {
  opacity: 0.55;
  pointer-events: none;
}
`;
