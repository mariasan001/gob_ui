export const iconButtonStyles = `
:host {
  display: inline-flex;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-ib-vino: #9f2141;
  --gob-ib-vino-deep: #7a1832;
  --gob-ib-dorado: #bc945a;
  --gob-ib-title: #181511;
  --gob-ib-muted: #6f6a63;
  --gob-ib-border: rgba(24, 21, 17, 0.12);
  --gob-ib-fill: #f3f3f3;
  --gob-ib-bg: #ffffff;
  --gob-ib-size: 40px;
  --gob-ib-icon: 18px;
  --gob-ib-radius: 12px;
  --gob-ib-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }
[hidden] { display: none !important; }

.btn {
  appearance: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--gob-ib-size);
  height: var(--gob-ib-size);
  padding: 0;
  border-radius: var(--gob-ib-radius);
  border: 1px solid transparent;
  background: var(--gob-ib-fill);
  color: var(--gob-ib-title);
  cursor: pointer;
  transition: background 150ms var(--gob-ib-ease), color 150ms var(--gob-ib-ease), border-color 150ms var(--gob-ib-ease), transform 150ms var(--gob-ib-ease);
}

.btn:hover:not(:disabled) {
  background: color-mix(in srgb, var(--gob-ib-vino) 10%, #fff);
  color: var(--gob-ib-vino-deep);
}

.btn:active:not(:disabled) {
  transform: scale(0.96);
}

.btn:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--gob-ib-vino) 40%, transparent);
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.42;
  cursor: not-allowed;
}

.root[data-size='sm'] { --gob-ib-size: 32px; --gob-ib-icon: 15px; --gob-ib-radius: 10px; }
.root[data-size='lg'] { --gob-ib-size: 48px; --gob-ib-icon: 20px; --gob-ib-radius: 14px; }

.root[data-variant='basic'] .btn {
  background: var(--gob-ib-fill);
  color: var(--gob-ib-title);
}
.root[data-variant='solid'] .btn {
  background: var(--gob-ib-vino);
  color: #fff;
}
.root[data-variant='solid'] .btn:hover:not(:disabled) {
  background: var(--gob-ib-vino-deep);
  color: #fff;
}
.root[data-variant='soft'] .btn {
  background: color-mix(in srgb, var(--gob-ib-vino) 10%, #fff);
  color: var(--gob-ib-vino-deep);
}
.root[data-variant='outline'] .btn {
  background: var(--gob-ib-bg);
  border-color: var(--gob-ib-border);
  color: var(--gob-ib-title);
}
.root[data-variant='outline'] .btn:hover:not(:disabled) {
  border-color: color-mix(in srgb, var(--gob-ib-vino) 35%, transparent);
  color: var(--gob-ib-vino);
}
.root[data-variant='ghost'] .btn {
  background: transparent;
  color: var(--gob-ib-muted);
}
.root[data-variant='ghost'] .btn:hover:not(:disabled) {
  background: rgba(24, 21, 17, 0.05);
  color: var(--gob-ib-title);
}
.root[data-variant='danger'] .btn {
  background: color-mix(in srgb, #c62828 10%, #fff);
  color: #c62828;
}
.root[data-variant='danger'] .btn:hover:not(:disabled) {
  background: #c62828;
  color: #fff;
}
.root[data-variant='success'] .btn {
  background: color-mix(in srgb, #1f8a55 12%, #fff);
  color: #1f8a55;
}
.root[data-variant='success'] .btn:hover:not(:disabled) {
  background: #1f8a55;
  color: #fff;
}
.root[data-variant='tonal'] .btn {
  background: color-mix(in srgb, var(--gob-ib-dorado) 18%, #fff);
  color: var(--gob-ib-title);
  border-color: color-mix(in srgb, var(--gob-ib-dorado) 30%, transparent);
}
.root[data-variant='square'] .btn {
  border-radius: 8px;
  background: var(--gob-ib-bg);
  border-color: var(--gob-ib-border);
}
.root[data-variant='complete'] .btn {
  background: var(--gob-ib-bg);
  border: 1px solid var(--gob-ib-border);
  border-left: 3px solid var(--gob-ib-dorado);
  color: var(--gob-ib-vino-deep);
}

.icon {
  width: var(--gob-ib-icon);
  height: var(--gob-ib-icon);
  display: inline-flex;
}
.icon svg { width: var(--gob-ib-icon); height: var(--gob-ib-icon); display: block; }

.spinner {
  display: none;
  width: calc(var(--gob-ib-icon) - 2px);
  height: calc(var(--gob-ib-icon) - 2px);
  border-radius: 999px;
  border: 2px solid color-mix(in srgb, currentColor 25%, transparent);
  border-top-color: currentColor;
  animation: gob-ib-spin 700ms linear infinite;
}

.root[data-loading='true'] .icon { display: none; }
.root[data-loading='true'] .spinner { display: block; }

@keyframes gob-ib-spin {
  to { transform: rotate(360deg); }
}
`;
