export const navMenuStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-nm-vino: #9f2141;
  --gob-nm-vino-deep: #7a1832;
  --gob-nm-dorado: #bc945a;
  --gob-nm-title: #181511;
  --gob-nm-muted: #8a8278;
  --gob-nm-border: rgba(24, 21, 17, 0.1);
  --gob-nm-bg: #ffffff;
  --gob-nm-fill: #f3f3f3;
  --gob-nm-height: 40px;
  --gob-nm-radius: 10px;
  --gob-nm-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }
[hidden] { display: none !important; }

.root {
  display: grid;
  gap: 0;
  min-width: 0;
}

.root[data-size='sm'] { --gob-nm-height: 34px; }
.root[data-size='lg'] { --gob-nm-height: 46px; }
.root[data-variant='dense'] { --gob-nm-height: 32px; }

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  min-width: 0;
}

.root[data-variant='vertical'] .list {
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 2px;
  max-width: 240px;
}

.root[data-variant='pills'] .list,
.root[data-variant='soft'] .list {
  padding: 4px;
  border-radius: 12px;
  background: var(--gob-nm-fill);
}

.root[data-variant='underline'] .list,
.root[data-variant='complete'] .list {
  gap: 0;
  border-bottom: 1px solid var(--gob-nm-border);
}

.root[data-variant='bordered'] .list {
  gap: 0;
  border: 1px solid var(--gob-nm-border);
  border-radius: var(--gob-nm-radius);
  overflow: hidden;
}

.root[data-variant='complete'] {
  padding: 10px 12px 0;
  border: 1px solid var(--gob-nm-border);
  border-radius: 14px;
  background: var(--gob-nm-bg);
  border-left: 3px solid var(--gob-nm-dorado);
}

.item {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: var(--gob-nm-height);
  padding: 0 14px;
  border: 0;
  border-radius: var(--gob-nm-radius);
  background: transparent;
  color: var(--gob-nm-muted);
  font: inherit;
  font-size: 13px;
  font-weight: 650;
  letter-spacing: -0.015em;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  transition: color 150ms var(--gob-nm-ease), background 150ms var(--gob-nm-ease);
}

.item:hover:not(:disabled) {
  color: var(--gob-nm-title);
  background: rgba(24, 21, 17, 0.04);
}

.item[aria-current='page'],
.item[data-active='true'] {
  color: var(--gob-nm-vino);
  background: color-mix(in srgb, var(--gob-nm-vino) 8%, #fff);
}

.item:disabled {
  opacity: 0.42;
  cursor: not-allowed;
}

.root[data-variant='vertical'] .item {
  width: 100%;
  justify-content: flex-start;
}

.root[data-variant='underline'] .item,
.root[data-variant='complete'] .item {
  border-radius: 0;
  background: transparent;
  box-shadow: inset 0 -2px 0 transparent;
}
.root[data-variant='underline'] .item:hover:not(:disabled),
.root[data-variant='complete'] .item:hover:not(:disabled) {
  background: transparent;
}
.root[data-variant='underline'] .item[data-active='true'],
.root[data-variant='complete'] .item[data-active='true'] {
  background: transparent;
  color: var(--gob-nm-vino);
  box-shadow: inset 0 -2px 0 var(--gob-nm-vino);
}

.root[data-variant='pills'] .item[data-active='true'] {
  background: #fff;
  color: var(--gob-nm-vino-deep);
  box-shadow: 0 1px 2px rgba(24, 21, 17, 0.08);
}

.root[data-variant='soft'] .item[data-active='true'] {
  background: color-mix(in srgb, var(--gob-nm-vino) 12%, #fff);
  color: var(--gob-nm-vino-deep);
  box-shadow: none;
}

.root[data-variant='bordered'] .item {
  border-radius: 0;
  flex: 1 1 auto;
  justify-content: center;
  border-right: 1px solid var(--gob-nm-border);
}
.root[data-variant='bordered'] .item:last-child { border-right: 0; }
.root[data-variant='bordered'] .item[data-active='true'] {
  background: color-mix(in srgb, var(--gob-nm-dorado) 14%, #fff);
  color: var(--gob-nm-title);
}

.root[data-variant='icons'] .item {
  gap: 10px;
}

.icon {
  width: 16px;
  height: 16px;
  display: inline-flex;
  flex: 0 0 auto;
  opacity: 0.72;
  color: currentColor;
}
.icon svg { width: 16px; height: 16px; display: block; }
.item[data-active='true'] .icon {
  opacity: 1;
  color: var(--gob-nm-dorado);
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 750;
  background: #f3f3f3;
  color: var(--gob-nm-title);
  border: 1px solid var(--gob-nm-border);
}

.root[data-disabled='true'] { opacity: 0.55; pointer-events: none; }
`;
