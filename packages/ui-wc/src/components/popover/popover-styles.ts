export const popoverStyles = `
:host {
  display: inline-flex;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-po-vino: #9f2141;
  --gob-po-dorado: #bc945a;
  --gob-po-title: #181511;
  --gob-po-muted: #6f6a63;
  --gob-po-border: rgba(24, 21, 17, 0.1);
  --gob-po-bg: #ffffff;
  --gob-po-fill: #f3f3f3;
  --gob-po-accent: #9f2141;
  --gob-po-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }

.root {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.trigger {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 40px;
  padding: 0 14px 0 15px;
  border-radius: 13px;
  border: 1px solid var(--gob-po-border);
  background: #fff;
  color: var(--gob-po-title);
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.015em;
  cursor: pointer;
  box-shadow: 0 1px 0 rgba(24, 21, 17, 0.03);
  transition:
    background 140ms var(--gob-po-ease),
    border-color 140ms var(--gob-po-ease),
    color 140ms var(--gob-po-ease),
    box-shadow 140ms var(--gob-po-ease),
    transform 140ms var(--gob-po-ease);
}
.trigger:hover {
  background: var(--gob-po-fill);
  border-color: rgba(24, 21, 17, 0.16);
}
.root[data-open='true'] .trigger {
  border-color: color-mix(in srgb, var(--gob-po-vino) 35%, #d7dde6);
  color: var(--gob-po-vino);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--gob-po-vino) 10%, transparent);
}
.trigger:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--gob-po-vino) 45%, transparent);
  outline-offset: 2px;
}
.trigger:active { transform: translateY(1px); }

.trigger-caret {
  width: 12px;
  height: 12px;
  display: inline-flex;
  opacity: 0.55;
  transition: transform 160ms var(--gob-po-ease), opacity 160ms var(--gob-po-ease);
}
.trigger-caret svg { width: 12px; height: 12px; display: block; }
.root[data-open='true'] .trigger-caret {
  transform: rotate(180deg);
  opacity: 0.9;
}

.panel {
  position: absolute;
  z-index: 24;
  width: max-content;
  min-width: 220px;
  max-width: min(300px, 82vw);
  padding: 10px;
  border-radius: 16px;
  border: 1px solid var(--gob-po-border);
  background: var(--gob-po-bg);
  color: var(--gob-po-title);
  box-shadow:
    0 1px 0 rgba(24, 21, 17, 0.04),
    0 18px 40px rgba(24, 21, 17, 0.16);
  opacity: 0;
  pointer-events: none;
  transform: translateY(6px) scale(0.98);
  transition:
    opacity 160ms var(--gob-po-ease),
    transform 160ms var(--gob-po-ease);
}

.root[data-open='true'] .panel {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}

.arrow {
  position: absolute;
  width: 12px;
  height: 12px;
  background: inherit;
  border: 1px solid var(--gob-po-border);
  transform: rotate(45deg);
  z-index: -1;
}

.panel-inner {
  position: relative;
  display: grid;
  gap: 8px;
  padding: 4px 4px 2px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--gob-po-fill) 55%, #fff);
}

.panel-title {
  margin: 0;
  font-size: 13.5px;
  font-weight: 780;
  letter-spacing: -0.025em;
  line-height: 1.25;
}

.panel-desc {
  margin: 0;
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.45;
  color: var(--gob-po-muted);
}

.menu {
  display: none;
  grid-template-columns: 1fr;
  gap: 2px;
  margin-top: 2px;
  padding-top: 6px;
  border-top: 1px solid rgba(24, 21, 17, 0.06);
}
.menu-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  min-height: 36px;
  padding: 0 10px;
  border-radius: 11px;
  font-size: 12.5px;
  font-weight: 650;
  color: var(--gob-po-title);
  background: transparent;
  transition: background 120ms var(--gob-po-ease);
}
.menu-item:hover { background: #fff; }
.menu-icon {
  width: 18px;
  height: 18px;
  color: var(--gob-po-muted);
}
.menu-icon svg { width: 18px; height: 18px; display: block; }
.menu-chevron {
  width: 12px;
  height: 12px;
  opacity: 0.35;
}
.menu-chevron svg { width: 12px; height: 12px; display: block; }
.root[data-variant='menu'] .menu { display: grid; }
.root[data-variant='menu'] .panel-desc { display: none; }
.root[data-variant='menu'] .panel-inner {
  background: transparent;
  padding: 2px;
}

.root[data-placement='top'] .panel {
  left: 50%;
  bottom: calc(100% + 14px);
  transform: translate(-50%, 6px) scale(0.98);
}
.root[data-placement='top'][data-open='true'] .panel {
  transform: translate(-50%, 0) scale(1);
}
.root[data-placement='top'] .arrow {
  left: 50%;
  bottom: -7px;
  margin-left: -6px;
  border-top: 0;
  border-left: 0;
}

.root[data-placement='bottom'] .panel {
  left: 50%;
  top: calc(100% + 14px);
  transform: translate(-50%, -6px) scale(0.98);
}
.root[data-placement='bottom'][data-open='true'] .panel {
  transform: translate(-50%, 0) scale(1);
}
.root[data-placement='bottom'] .arrow {
  left: 50%;
  top: -7px;
  margin-left: -6px;
  border-bottom: 0;
  border-right: 0;
}

.root[data-placement='left'] .panel {
  right: calc(100% + 14px);
  top: 50%;
  transform: translate(-6px, -50%) scale(0.98);
}
.root[data-placement='left'][data-open='true'] .panel {
  transform: translate(0, -50%) scale(1);
}
.root[data-placement='left'] .arrow {
  right: -7px;
  top: 50%;
  margin-top: -6px;
  border-bottom: 0;
  border-left: 0;
}

.root[data-placement='right'] .panel {
  left: calc(100% + 14px);
  top: 50%;
  transform: translate(6px, -50%) scale(0.98);
}
.root[data-placement='right'][data-open='true'] .panel {
  transform: translate(0, -50%) scale(1);
}
.root[data-placement='right'] .arrow {
  left: -7px;
  top: 50%;
  margin-top: -6px;
  border-top: 0;
  border-right: 0;
}

.root[data-variant='soft'] .panel {
  background: #f7f6f4;
}
.root[data-variant='soft'] .panel-inner { background: #fff; }

.root[data-variant='solid'] .panel,
.root[data-variant='brand'] .panel {
  background: var(--gob-po-vino);
  border-color: transparent;
  color: #fff;
  --gob-po-border: transparent;
}
.root[data-variant='solid'] .panel-inner,
.root[data-variant='brand'] .panel-inner {
  background: rgba(255, 255, 255, 0.08);
}
.root[data-variant='solid'] .panel-desc,
.root[data-variant='brand'] .panel-desc { color: rgba(255,255,255,0.78); }
.root[data-variant='solid'] .arrow,
.root[data-variant='brand'] .arrow {
  background: var(--gob-po-vino);
  border-color: transparent;
}

.root[data-variant='outline'] .panel {
  border-color: color-mix(in srgb, var(--gob-po-vino) 30%, #d7dde6);
  box-shadow: 0 14px 28px rgba(24, 21, 17, 0.1);
}
.root[data-variant='outline'] .panel-inner {
  background: color-mix(in srgb, #9f2141 5%, #fff);
}

.root[data-variant='dense'] .panel {
  min-width: 180px;
  padding: 8px;
  border-radius: 12px;
}
.root[data-variant='dense'] .panel-inner { padding: 2px; gap: 4px; }
.root[data-variant='dense'] .panel-title { font-size: 12.5px; }
.root[data-variant='dense'] .panel-desc { font-size: 11.5px; }

.root[data-variant='rich'] .panel {
  max-width: min(340px, 86vw);
  min-width: 260px;
  padding: 12px;
}
.root[data-variant='rich'] .panel-inner { padding: 8px; gap: 8px; }

.root[data-variant='success'] .panel {
  background: #1f8a55;
  border-color: transparent;
  color: #fff;
}
.root[data-variant='success'] .panel-inner { background: rgba(255,255,255,0.1); }
.root[data-variant='success'] .panel-desc { color: rgba(255,255,255,0.82); }
.root[data-variant='success'] .arrow {
  background: #1f8a55;
  border-color: transparent;
}

.root[data-variant='complete'] .panel {
  border-left: 3px solid var(--gob-po-dorado);
}
.root[data-variant='complete'] .panel-inner {
  background: color-mix(in srgb, #bc945a 8%, #fff);
}

@media (prefers-reduced-motion: reduce) {
  .panel, .trigger, .trigger-caret { transition: none !important; }
}
`;
