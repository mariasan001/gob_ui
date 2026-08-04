export const drawerStyles = `
:host {
  display: contents;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-dr-vino: #9f2141;
  --gob-dr-vino-deep: #7a1832;
  --gob-dr-dorado: #bc945a;
  --gob-dr-title: #181511;
  --gob-dr-muted: #6f6a63;
  --gob-dr-border: rgba(24, 21, 17, 0.1);
  --gob-dr-bg: #ffffff;
  --gob-dr-fill: #f3f3f3;
  --gob-dr-accent: #9f2141;
  --gob-dr-accent-soft: color-mix(in srgb, #9f2141 11%, #fff);
  --gob-dr-width: 400px;
  --gob-dr-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }
[hidden] { display: none !important; }

:host([preview]) {
  display: block;
  width: 100%;
  max-width: 100%;
}

.backdrop {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: none;
  background: rgba(24, 21, 17, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  animation: gob-dr-scrim 220ms var(--gob-dr-ease);
}

:host([open]) .backdrop { display: block; }

:host([preview]) .backdrop,
:host([preview][open]) .backdrop {
  position: relative;
  inset: auto;
  z-index: auto;
  display: block;
  width: 100%;
  min-height: 360px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(24, 21, 17, 0.08);
  background: #ebe8e4;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  animation: none;
}

:host([preview]) .backdrop::before {
  content: '';
  position: absolute;
  inset: 18px auto 18px 18px;
  width: 34%;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(24, 21, 17, 0.06);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

.panel {
  position: absolute;
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: min(var(--gob-dr-width), 100%);
  background: var(--gob-dr-bg);
  border: 0;
  box-shadow:
    -1px 0 0 rgba(24, 21, 17, 0.06),
    -24px 0 64px rgba(24, 21, 17, 0.18);
  animation: gob-dr-in-right 280ms var(--gob-dr-ease);
}

.backdrop[data-side='right'] .panel { right: 0; }
.backdrop[data-side='left'] .panel {
  left: 0;
  box-shadow:
    1px 0 0 rgba(24, 21, 17, 0.06),
    24px 0 64px rgba(24, 21, 17, 0.18);
  animation-name: gob-dr-in-left;
}

:host([preview]) .panel {
  position: absolute;
  top: 12px;
  bottom: 12px;
  width: min(68%, var(--gob-dr-width));
  border-radius: 18px;
  animation: none;
  box-shadow:
    0 1px 0 rgba(24, 21, 17, 0.04),
    0 18px 40px rgba(24, 21, 17, 0.12);
  overflow: hidden;
}
:host([preview]) .backdrop[data-side='right'] .panel { right: 12px; }
:host([preview]) .backdrop[data-side='left'] .panel { left: 12px; }
:host([preview]) .backdrop[data-side='left']::before {
  left: auto;
  right: 18px;
}

.panel::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--gob-dr-accent);
  opacity: 0;
}
.backdrop[data-side='right'] .panel::before { left: 0; }
.backdrop[data-side='left'] .panel::before { right: 0; }
.backdrop[data-variant='complete'] .panel::before,
.backdrop[data-variant='danger'] .panel::before,
.backdrop[data-variant='filters'] .panel::before { opacity: 1; }

.backdrop[data-variant='complete'] {
  --gob-dr-accent: #bc945a;
  --gob-dr-accent-soft: color-mix(in srgb, #bc945a 16%, #fff);
}
.backdrop[data-variant='danger'] {
  --gob-dr-accent: #c62828;
  --gob-dr-accent-soft: color-mix(in srgb, #c62828 11%, #fff);
}
.backdrop[data-variant='filters'] {
  --gob-dr-accent: #9f2141;
  --gob-dr-width: 360px;
}

.backdrop[data-size='sm'] { --gob-dr-width: 320px; }
.backdrop[data-size='lg'],
.backdrop[data-variant='wide'] { --gob-dr-width: 480px; }

.head {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px 14px;
  align-items: start;
  padding: 22px 20px 16px;
  background: color-mix(in srgb, var(--gob-dr-accent-soft) 42%, #fff);
  border-bottom: 1px solid rgba(24, 21, 17, 0.06);
}

.icon {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: var(--gob-dr-accent-soft);
  color: var(--gob-dr-accent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--gob-dr-accent) 12%, transparent);
}
.icon svg { width: 20px; height: 20px; display: block; }

.copy { display: grid; gap: 5px; min-width: 0; padding-top: 1px; }

.eyebrow {
  margin: 0;
  font-size: 10.5px;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gob-dr-accent);
}

.title {
  margin: 0;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.035em;
  color: var(--gob-dr-title);
  line-height: 1.15;
}

.description {
  margin: 0;
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.45;
  color: var(--gob-dr-muted);
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
  background: rgba(255, 255, 255, 0.7);
  color: var(--gob-dr-muted);
  cursor: pointer;
  transition: background 140ms var(--gob-dr-ease), color 140ms var(--gob-dr-ease), transform 140ms var(--gob-dr-ease);
}
.close:hover {
  background: var(--gob-dr-fill);
  color: var(--gob-dr-title);
}
.close:active { transform: scale(0.96); }
.close svg { width: 14px; height: 14px; display: block; }

.body {
  padding: 18px 20px;
  overflow: auto;
  color: var(--gob-dr-title);
  font-size: 13.5px;
  font-weight: 550;
  line-height: 1.5;
  background: #fff;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}
.chip {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0 9px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(24, 21, 17, 0.08);
  color: var(--gob-dr-muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.chip[data-tone='accent'] {
  background: var(--gob-dr-accent-soft);
  border-color: color-mix(in srgb, var(--gob-dr-accent) 18%, transparent);
  color: var(--gob-dr-accent);
}

.body-card {
  padding: 15px 16px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(24, 21, 17, 0.07);
  box-shadow: 0 1px 0 rgba(24, 21, 17, 0.03);
}

.backdrop[data-variant='filters'] .body-card,
.backdrop[data-variant='form'] .body-card {
  background: color-mix(in srgb, var(--gob-dr-fill) 70%, #fff);
  border-style: dashed;
  border-color: color-mix(in srgb, var(--gob-dr-accent) 22%, #d7dde6);
  color: var(--gob-dr-muted);
  min-height: 88px;
}

.backdrop[data-variant='danger'] .body-card {
  background: color-mix(in srgb, #c62828 6%, #fff);
  border-color: color-mix(in srgb, #c62828 14%, transparent);
}

.backdrop[data-variant='dense'] .head { padding: 14px 14px 12px; gap: 10px; }
.backdrop[data-variant='dense'] .icon { width: 34px; height: 34px; border-radius: 11px; }
.backdrop[data-variant='dense'] .icon svg { width: 16px; height: 16px; }
.backdrop[data-variant='dense'] .title { font-size: 14.5px; }
.backdrop[data-variant='dense'] .body { padding: 12px 14px; }
.backdrop[data-variant='dense'] .actions { padding: 12px 14px; gap: 6px; }
.backdrop[data-variant='dense'] .btn { min-height: 34px; padding: 0 12px; font-size: 12.5px; border-radius: 10px; }
.backdrop[data-variant='dense'] .meta { display: none; }

.actions {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 8px;
  padding: 14px 20px 20px;
  border-top: 1px solid rgba(24, 21, 17, 0.06);
  background: color-mix(in srgb, var(--gob-dr-fill) 70%, #fff);
}

.btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 13px;
  border: 1px solid transparent;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.015em;
  cursor: pointer;
  transition: background 150ms var(--gob-dr-ease), border-color 150ms var(--gob-dr-ease), transform 150ms var(--gob-dr-ease), box-shadow 150ms var(--gob-dr-ease);
}
.btn:active { transform: translateY(1px); }
.btn:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--gob-dr-accent) 45%, transparent);
  outline-offset: 2px;
}

.cancel {
  background: #fff;
  border-color: rgba(24, 21, 17, 0.12);
  color: var(--gob-dr-title);
}
.cancel:hover { background: var(--gob-dr-fill); }

.confirm {
  background: var(--gob-dr-accent);
  color: #fff;
  box-shadow: 0 8px 18px color-mix(in srgb, var(--gob-dr-accent) 28%, transparent);
}
.confirm:hover { filter: brightness(0.94); }

.backdrop[data-variant='danger'] .confirm { background: #c62828; }
.backdrop[data-variant='complete'] .confirm { background: var(--gob-dr-vino); }

@keyframes gob-dr-scrim {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes gob-dr-in-right {
  from { transform: translateX(104%); }
  to { transform: translateX(0); }
}
@keyframes gob-dr-in-left {
  from { transform: translateX(-104%); }
  to { transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .backdrop, .panel { animation: none !important; }
  .btn:active { transform: none; }
}
`;
