export const buttonGroupStyles = `
:host {
  display: inline-block;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-bg-vino: #9f2141;
  --gob-bg-vino-deep: #7a1832;
  --gob-bg-dorado: #bc945a;
  --gob-bg-title: #181511;
  --gob-bg-muted: #6f6a63;
  --gob-bg-border: rgba(24, 21, 17, 0.12);
  --gob-bg-fill: #f3f3f3;
  --gob-bg-bg: #ffffff;
  --gob-bg-height: 40px;
  --gob-bg-radius: 12px;
  --gob-bg-pad-x: 14px;
  --gob-bg-font: 13px;
  --gob-bg-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }
[hidden] { display: none !important; }

.root {
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
}

.root[data-size='sm'] {
  --gob-bg-height: 32px;
  --gob-bg-radius: 10px;
  --gob-bg-pad-x: 10px;
  --gob-bg-font: 12px;
}
.root[data-size='lg'] {
  --gob-bg-height: 48px;
  --gob-bg-radius: 14px;
  --gob-bg-pad-x: 18px;
  --gob-bg-font: 14px;
}
.root[data-variant='dense'] {
  --gob-bg-height: 34px;
  --gob-bg-pad-x: 10px;
  --gob-bg-font: 12px;
}

.list {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  min-width: 0;
}

.root[data-variant='vertical'] .list {
  flex-direction: column;
  align-items: stretch;
}

.root[data-variant='split'] .list,
.root[data-variant='bordered'] .list,
.root[data-variant='complete'] .list {
  gap: 0;
  overflow: hidden;
  border-radius: var(--gob-bg-radius);
  border: 1px solid var(--gob-bg-border);
  background: var(--gob-bg-bg);
}

.root[data-variant='complete'] .list {
  border-left: 3px solid var(--gob-bg-dorado);
}

.item {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: var(--gob-bg-height);
  padding: 0 var(--gob-bg-pad-x);
  border-radius: var(--gob-bg-radius);
  border: 1px solid transparent;
  background: var(--gob-bg-fill);
  color: var(--gob-bg-title);
  font: inherit;
  font-size: var(--gob-bg-font);
  font-weight: 650;
  letter-spacing: -0.015em;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition: background 150ms var(--gob-bg-ease), color 150ms var(--gob-bg-ease), border-color 150ms var(--gob-bg-ease);
}

.item:hover:not(:disabled) {
  background: color-mix(in srgb, var(--gob-bg-vino) 10%, #fff);
  color: var(--gob-bg-vino-deep);
}

.item:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--gob-bg-vino) 40%, transparent);
  outline-offset: 2px;
  z-index: 1;
}

.item:disabled {
  opacity: 0.42;
  cursor: not-allowed;
}

.root[data-variant='solid'] .item {
  background: var(--gob-bg-vino);
  color: #fff;
}
.root[data-variant='solid'] .item:hover:not(:disabled) {
  background: var(--gob-bg-vino-deep);
  color: #fff;
}

.root[data-variant='outline'] .item {
  background: var(--gob-bg-bg);
  border-color: var(--gob-bg-border);
}
.root[data-variant='outline'] .item:hover:not(:disabled) {
  border-color: color-mix(in srgb, var(--gob-bg-vino) 35%, transparent);
  color: var(--gob-bg-vino);
}

.root[data-variant='soft'] .item {
  background: color-mix(in srgb, var(--gob-bg-vino) 10%, #fff);
  color: var(--gob-bg-vino-deep);
}

.root[data-variant='ghost'] .item {
  background: transparent;
  color: var(--gob-bg-muted);
}
.root[data-variant='ghost'] .item:hover:not(:disabled) {
  background: rgba(24, 21, 17, 0.05);
  color: var(--gob-bg-title);
}

.root[data-variant='split'] .item,
.root[data-variant='bordered'] .item,
.root[data-variant='complete'] .item {
  border-radius: 0;
  border: 0;
  border-right: 1px solid var(--gob-bg-border);
  background: transparent;
}
.root[data-variant='split'] .item:last-child,
.root[data-variant='bordered'] .item:last-child,
.root[data-variant='complete'] .item:last-child {
  border-right: 0;
}
.root[data-variant='vertical'][data-variant='split'] .item,
.root[data-variant='vertical'] .item {
  width: 100%;
  justify-content: flex-start;
}

.root[data-disabled='true'] .item {
  opacity: 0.42;
  pointer-events: none;
}

.icon {
  width: 16px;
  height: 16px;
  display: inline-flex;
  flex: 0 0 auto;
  color: currentColor;
}
.icon svg { width: 16px; height: 16px; display: block; }
`;
