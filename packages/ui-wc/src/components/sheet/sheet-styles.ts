export const sheetStyles = `
:host {
  display: contents;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-sh-vino: #9f2141;
  --gob-sh-vino-deep: #7a1832;
  --gob-sh-dorado: #bc945a;
  --gob-sh-title: #181511;
  --gob-sh-muted: #6f6a63;
  --gob-sh-border: rgba(24, 21, 17, 0.1);
  --gob-sh-bg: #ffffff;
  --gob-sh-fill: #f3f3f3;
  --gob-sh-accent: #9f2141;
  --gob-sh-accent-soft: color-mix(in srgb, #9f2141 11%, #fff);
  --gob-sh-max: 440px;
  --gob-sh-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }
[hidden] { display: none !important; }

:host([preview]) {
  display: block;
  width: 100%;
  max-width: 420px;
}

.backdrop {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: none;
  align-items: flex-end;
  justify-content: center;
  background: rgba(24, 21, 17, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  animation: gob-sh-scrim 220ms var(--gob-sh-ease);
}

:host([open]) .backdrop { display: flex; }

:host([preview]) .backdrop,
:host([preview][open]) .backdrop {
  position: relative;
  inset: auto;
  z-index: auto;
  display: flex;
  min-height: 340px;
  padding: 0;
  background: #ebe8e4;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  animation: none;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(24, 21, 17, 0.08);
  width: 100%;
}

:host([preview]) .backdrop::before {
  content: '';
  position: absolute;
  top: 18px;
  left: 18px;
  right: 18px;
  height: 54px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(24, 21, 17, 0.05);
}

.sheet {
  position: relative;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  width: min(560px, 100%);
  max-height: min(var(--gob-sh-max), 86vh);
  border-radius: 24px 24px 0 0;
  background: var(--gob-sh-bg);
  border: 1px solid var(--gob-sh-border);
  border-bottom: 0;
  box-shadow:
    0 -1px 0 rgba(24, 21, 17, 0.04),
    0 -24px 56px rgba(24, 21, 17, 0.18);
  animation: gob-sh-in 280ms var(--gob-sh-ease);
  overflow: hidden;
}

:host([preview]) .sheet {
  width: calc(100% - 20px);
  max-height: none;
  margin: auto 10px 10px;
  border-radius: 20px;
  border: 1px solid rgba(24, 21, 17, 0.08);
  box-shadow:
    0 1px 0 rgba(24, 21, 17, 0.04),
    0 18px 36px rgba(24, 21, 17, 0.12);
  animation: none;
}

.sheet::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 3px;
  background: var(--gob-sh-accent);
  opacity: 0;
}

.backdrop[data-variant='complete'],
.backdrop[data-variant='brand'] {
  --gob-sh-accent: #bc945a;
  --gob-sh-accent-soft: color-mix(in srgb, #bc945a 16%, #fff);
}
.backdrop[data-variant='danger'] {
  --gob-sh-accent: #c62828;
  --gob-sh-accent-soft: color-mix(in srgb, #c62828 11%, #fff);
}
.backdrop[data-variant='success'] {
  --gob-sh-accent: #1f8a55;
  --gob-sh-accent-soft: color-mix(in srgb, #1f8a55 12%, #fff);
}
.backdrop[data-variant='complete'] .sheet::before,
.backdrop[data-variant='danger'] .sheet::before,
.backdrop[data-variant='success'] .sheet::before,
.backdrop[data-variant='brand'] .sheet::before { opacity: 1; }

.backdrop[data-variant='peek'] { --gob-sh-max: 300px; }
.backdrop[data-variant='tall'] { --gob-sh-max: 580px; }

.handle {
  display: flex;
  justify-content: center;
  padding: 12px 0 2px;
}
.handle > i {
  width: 44px;
  height: 5px;
  border-radius: 999px;
  background: rgba(24, 21, 17, 0.16);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.head {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px 14px;
  align-items: start;
  padding: 8px 20px 14px;
}

.icon {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: var(--gob-sh-accent-soft);
  color: var(--gob-sh-accent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--gob-sh-accent) 12%, transparent);
}
.icon svg { width: 20px; height: 20px; display: block; }

.copy { display: grid; gap: 4px; min-width: 0; padding-top: 1px; }

.eyebrow {
  margin: 0;
  font-size: 10.5px;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gob-sh-accent);
}

.title {
  margin: 0;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.035em;
  color: var(--gob-sh-title);
  line-height: 1.15;
}

.description {
  margin: 0;
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.45;
  color: var(--gob-sh-muted);
}

.close {
  appearance: none;
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 11px;
  background: var(--gob-sh-fill);
  color: var(--gob-sh-muted);
  cursor: pointer;
  transition: background 140ms var(--gob-sh-ease), color 140ms var(--gob-sh-ease), transform 140ms var(--gob-sh-ease);
}
.close:hover {
  background: #e8e6e2;
  color: var(--gob-sh-title);
}
.close:active { transform: scale(0.96); }
.close svg { width: 14px; height: 14px; display: block; }

.body {
  padding: 0 20px 10px;
  overflow: auto;
}

.body-card {
  padding: 15px 16px;
  border-radius: 16px;
  background: var(--gob-sh-fill);
  color: var(--gob-sh-title);
  font-size: 13.5px;
  font-weight: 550;
  line-height: 1.5;
  border: 1px solid rgba(24, 21, 17, 0.04);
}

.action-list {
  display: none;
  gap: 8px;
  margin-top: 12px;
}
.action-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  min-height: 48px;
  padding: 0 14px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid rgba(24, 21, 17, 0.08);
  box-shadow: 0 1px 0 rgba(24, 21, 17, 0.03);
  font-size: 13px;
  font-weight: 700;
  color: var(--gob-sh-title);
  transition: border-color 140ms var(--gob-sh-ease), background 140ms var(--gob-sh-ease);
}
.action-item:hover {
  border-color: color-mix(in srgb, var(--gob-sh-accent) 24%, #d7dde6);
  background: color-mix(in srgb, var(--gob-sh-accent-soft) 45%, #fff);
}
.action-icon {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: var(--gob-sh-accent-soft);
  color: var(--gob-sh-accent);
}
.action-icon svg { width: 15px; height: 15px; display: block; }
.action-chevron {
  width: 14px;
  height: 14px;
  opacity: 0.35;
  color: var(--gob-sh-muted);
}
.action-chevron svg { width: 14px; height: 14px; display: block; }
.backdrop[data-variant='actions'] .action-list { display: grid; }

.backdrop[data-variant='form'] .body-card {
  background: #fff;
  border: 1px dashed color-mix(in srgb, var(--gob-sh-accent) 22%, #d7dde6);
  color: var(--gob-sh-muted);
  min-height: 84px;
}
.backdrop[data-variant='danger'] .body-card {
  background: color-mix(in srgb, #c62828 6%, #fff);
  border: 1px solid color-mix(in srgb, #c62828 14%, transparent);
}
.backdrop[data-variant='success'] .body-card {
  background: color-mix(in srgb, #1f8a55 7%, #fff);
  border: 1px solid color-mix(in srgb, #1f8a55 14%, transparent);
}

.backdrop[data-variant='dense'] .head { padding: 4px 14px 10px; gap: 10px; }
.backdrop[data-variant='dense'] .icon { width: 34px; height: 34px; border-radius: 11px; }
.backdrop[data-variant='dense'] .icon svg { width: 16px; height: 16px; }
.backdrop[data-variant='dense'] .title { font-size: 14.5px; }
.backdrop[data-variant='dense'] .body { padding: 0 14px 6px; }
.backdrop[data-variant='dense'] .actions { padding: 12px 14px 14px; gap: 6px; }
.backdrop[data-variant='dense'] .btn { min-height: 36px; border-radius: 11px; }

.actions {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 8px;
  padding: 14px 20px calc(18px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid rgba(24, 21, 17, 0.06);
  background: color-mix(in srgb, var(--gob-sh-fill) 70%, #fff);
}

.backdrop[data-variant='actions'] .actions {
  grid-template-columns: 1fr;
}

.btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 16px;
  border-radius: 14px;
  border: 1px solid transparent;
  font: inherit;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: -0.015em;
  cursor: pointer;
  transition: background 150ms var(--gob-sh-ease), filter 150ms var(--gob-sh-ease), transform 150ms var(--gob-sh-ease), box-shadow 150ms var(--gob-sh-ease);
}
.btn:active { transform: translateY(1px); }
.btn:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--gob-sh-accent) 45%, transparent);
  outline-offset: 2px;
}

.cancel {
  background: #fff;
  border-color: rgba(24, 21, 17, 0.12);
  color: var(--gob-sh-title);
}
.cancel:hover { background: var(--gob-sh-fill); }

.confirm {
  background: var(--gob-sh-accent);
  color: #fff;
  box-shadow: 0 10px 22px color-mix(in srgb, var(--gob-sh-accent) 28%, transparent);
}
.confirm:hover { filter: brightness(0.94); }

.backdrop[data-variant='brand'] .confirm,
.backdrop[data-variant='complete'] .confirm {
  background: var(--gob-sh-vino);
  box-shadow: 0 10px 22px color-mix(in srgb, #9f2141 28%, transparent);
}

@keyframes gob-sh-scrim {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes gob-sh-in {
  from { transform: translateY(32px); opacity: 0.9; }
  to { transform: translateY(0); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .backdrop, .sheet { animation: none !important; }
  .btn:active { transform: none; }
}
`;
