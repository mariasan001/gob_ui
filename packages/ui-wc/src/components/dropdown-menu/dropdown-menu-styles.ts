export const dropdownMenuStyles = `
:host {
  display: inline-block;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-dd-vino: #9f2141;
  --gob-dd-vino-deep: #7a1832;
  --gob-dd-dorado: #bc945a;
  --gob-dd-title: #181511;
  --gob-dd-muted: #6f6a63;
  --gob-dd-border: rgba(24, 21, 17, 0.12);
  --gob-dd-fill: #f3f3f3;
  --gob-dd-bg: #ffffff;
  --gob-dd-height: 40px;
  --gob-dd-radius: 12px;
  --gob-dd-font: 13px;
  --gob-dd-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }
[hidden] { display: none !important; }

.root {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
}

.root[data-size='sm'] { --gob-dd-height: 32px; --gob-dd-radius: 10px; --gob-dd-font: 12px; }
.root[data-size='lg'] { --gob-dd-height: 48px; --gob-dd-radius: 14px; --gob-dd-font: 14px; }
.root[data-variant='dense'] { --gob-dd-height: 34px; --gob-dd-font: 12px; }

.trigger {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: var(--gob-dd-height);
  padding: 0 14px;
  border-radius: var(--gob-dd-radius);
  border: 1px solid transparent;
  background: var(--gob-dd-fill);
  color: var(--gob-dd-title);
  font: inherit;
  font-size: var(--gob-dd-font);
  font-weight: 650;
  letter-spacing: -0.015em;
  cursor: pointer;
  transition: background 150ms var(--gob-dd-ease), color 150ms var(--gob-dd-ease), border-color 150ms var(--gob-dd-ease);
}

.trigger:hover:not(:disabled) {
  background: color-mix(in srgb, var(--gob-dd-vino) 10%, #fff);
  color: var(--gob-dd-vino-deep);
}

.trigger:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--gob-dd-vino) 40%, transparent);
  outline-offset: 2px;
}

.trigger:disabled {
  opacity: 0.42;
  cursor: not-allowed;
}

.root[data-variant='solid'] .trigger {
  background: var(--gob-dd-vino);
  color: #fff;
}
.root[data-variant='solid'] .trigger:hover:not(:disabled) {
  background: var(--gob-dd-vino-deep);
  color: #fff;
}
.root[data-variant='soft'] .trigger {
  background: color-mix(in srgb, var(--gob-dd-vino) 10%, #fff);
  color: var(--gob-dd-vino-deep);
}
.root[data-variant='outline'] .trigger,
.root[data-variant='bordered'] .trigger {
  background: var(--gob-dd-bg);
  border-color: var(--gob-dd-border);
}
.root[data-variant='ghost'] .trigger {
  background: transparent;
  color: var(--gob-dd-muted);
}
.root[data-variant='danger'] .trigger {
  background: color-mix(in srgb, #c62828 10%, #fff);
  color: #c62828;
}
.root[data-variant='complete'] .trigger {
  background: var(--gob-dd-bg);
  border: 1px solid var(--gob-dd-border);
  border-left: 3px solid var(--gob-dd-dorado);
  color: var(--gob-dd-vino-deep);
}

.caret {
  width: 12px;
  height: 12px;
  display: inline-flex;
  color: currentColor;
  transition: transform 150ms var(--gob-dd-ease);
}
.caret svg { width: 12px; height: 12px; display: block; }
.root[data-open='true'] .caret { transform: rotate(180deg); }

.menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 20;
  min-width: 200px;
  max-width: min(280px, 90vw);
  padding: 6px;
  border-radius: 14px;
  border: 1px solid var(--gob-dd-border);
  background: var(--gob-dd-bg);
  box-shadow: 0 10px 28px rgba(24, 21, 17, 0.1);
  display: none;
}

.root[data-open='true'] .menu { display: grid; gap: 2px; }

.root[data-variant='complete'] .menu {
  border-left: 3px solid var(--gob-dd-dorado);
}

.item {
  appearance: none;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 36px;
  padding: 0 10px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--gob-dd-title);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: background 140ms var(--gob-dd-ease), color 140ms var(--gob-dd-ease);
}

.item:hover:not(:disabled) {
  background: #f3f3f3;
  color: var(--gob-dd-vino-deep);
}

.item:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--gob-dd-vino) 40%, transparent);
  outline-offset: 1px;
}

.item:disabled {
  opacity: 0.42;
  cursor: not-allowed;
}

.item[data-danger='true'] { color: #c62828; }
.item[data-danger='true']:hover:not(:disabled) {
  background: color-mix(in srgb, #c62828 10%, #fff);
  color: #c62828;
}

.divider {
  height: 1px;
  margin: 4px 6px;
  background: var(--gob-dd-border);
}

.icon {
  width: 16px;
  height: 16px;
  display: inline-flex;
  flex: 0 0 auto;
  color: currentColor;
}
.icon svg { width: 16px; height: 16px; display: block; }

.root[data-variant='icons'] .item .label { /* keep */ }
`;
