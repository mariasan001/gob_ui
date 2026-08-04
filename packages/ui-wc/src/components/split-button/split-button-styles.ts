export const splitButtonStyles = `
:host {
  display: inline-block;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-sb-vino: #9f2141;
  --gob-sb-vino-deep: #7a1832;
  --gob-sb-dorado: #bc945a;
  --gob-sb-title: #181511;
  --gob-sb-muted: #6f6a63;
  --gob-sb-border: rgba(24, 21, 17, 0.12);
  --gob-sb-fill: #f3f3f3;
  --gob-sb-bg: #ffffff;
  --gob-sb-height: 40px;
  --gob-sb-radius: 12px;
  --gob-sb-font: 13px;
  --gob-sb-ease: cubic-bezier(0.22, 1, 0.36, 1);
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

.root[data-size='sm'] { --gob-sb-height: 32px; --gob-sb-radius: 10px; --gob-sb-font: 12px; }
.root[data-size='lg'] { --gob-sb-height: 48px; --gob-sb-radius: 14px; --gob-sb-font: 14px; }
.root[data-variant='dense'] { --gob-sb-height: 34px; --gob-sb-font: 12px; }

.group {
  display: inline-flex;
  align-items: stretch;
  overflow: hidden;
  border-radius: var(--gob-sb-radius);
  border: 1px solid transparent;
  background: var(--gob-sb-fill);
}

.main,
.caretBtn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--gob-sb-height);
  border: 0;
  background: transparent;
  color: var(--gob-sb-title);
  font: inherit;
  font-size: var(--gob-sb-font);
  font-weight: 650;
  letter-spacing: -0.015em;
  cursor: pointer;
  transition: background 150ms var(--gob-sb-ease), color 150ms var(--gob-sb-ease);
}

.main {
  gap: 8px;
  padding: 0 14px;
}

.caretBtn {
  width: calc(var(--gob-sb-height) - 2px);
  border-left: 1px solid color-mix(in srgb, currentColor 18%, transparent);
}

.main:hover:not(:disabled),
.caretBtn:hover:not(:disabled) {
  background: color-mix(in srgb, var(--gob-sb-vino) 10%, transparent);
  color: var(--gob-sb-vino-deep);
}

.main:focus-visible,
.caretBtn:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--gob-sb-vino) 40%, transparent);
  outline-offset: 2px;
  z-index: 1;
}

.main:disabled,
.caretBtn:disabled {
  opacity: 0.42;
  cursor: not-allowed;
}

.root[data-variant='solid'] .group {
  background: var(--gob-sb-vino);
  border-color: var(--gob-sb-vino);
}
.root[data-variant='solid'] .main,
.root[data-variant='solid'] .caretBtn {
  color: #fff;
}
.root[data-variant='solid'] .main:hover:not(:disabled),
.root[data-variant='solid'] .caretBtn:hover:not(:disabled) {
  background: color-mix(in srgb, #000 12%, transparent);
  color: #fff;
}

.root[data-variant='soft'] .group {
  background: color-mix(in srgb, var(--gob-sb-vino) 10%, #fff);
}
.root[data-variant='soft'] .main,
.root[data-variant='soft'] .caretBtn {
  color: var(--gob-sb-vino-deep);
}

.root[data-variant='outline'] .group,
.root[data-variant='bordered'] .group {
  background: var(--gob-sb-bg);
  border-color: var(--gob-sb-border);
}

.root[data-variant='ghost'] .group {
  background: transparent;
  border-color: transparent;
}
.root[data-variant='ghost'] .main,
.root[data-variant='ghost'] .caretBtn {
  color: var(--gob-sb-muted);
}

.root[data-variant='tonal'] .group {
  background: color-mix(in srgb, var(--gob-sb-dorado) 18%, #fff);
  border-color: color-mix(in srgb, var(--gob-sb-dorado) 30%, transparent);
}

.root[data-variant='danger'] .group {
  background: color-mix(in srgb, #c62828 10%, #fff);
  border-color: color-mix(in srgb, #c62828 20%, transparent);
}
.root[data-variant='danger'] .main,
.root[data-variant='danger'] .caretBtn {
  color: #c62828;
}

.root[data-variant='complete'] .group {
  background: var(--gob-sb-bg);
  border-color: var(--gob-sb-border);
  border-left: 3px solid var(--gob-sb-dorado);
}
.root[data-variant='complete'] .main,
.root[data-variant='complete'] .caretBtn {
  color: var(--gob-sb-vino-deep);
}

.caret {
  width: 12px;
  height: 12px;
  display: inline-flex;
  transition: transform 150ms var(--gob-sb-ease);
}
.caret svg { width: 12px; height: 12px; display: block; }
.root[data-open='true'] .caret { transform: rotate(180deg); }

.menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 20;
  min-width: 220px;
  padding: 6px;
  border-radius: 14px;
  border: 1px solid var(--gob-sb-border);
  background: var(--gob-sb-bg);
  box-shadow: 0 10px 28px rgba(24, 21, 17, 0.1);
  display: none;
  gap: 2px;
}

.root[data-open='true'] .menu { display: grid; }

.root[data-variant='complete'] .menu {
  border-left: 3px solid var(--gob-sb-dorado);
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
  color: var(--gob-sb-title);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.item:hover:not(:disabled) {
  background: #f3f3f3;
  color: var(--gob-sb-vino-deep);
}

.item:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--gob-sb-vino) 40%, transparent);
  outline-offset: 1px;
}

.item:disabled {
  opacity: 0.42;
  cursor: not-allowed;
}

.icon {
  width: 16px;
  height: 16px;
  display: inline-flex;
  flex: 0 0 auto;
}
.icon svg { width: 16px; height: 16px; display: block; }
`;
