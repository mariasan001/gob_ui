export const spinnerStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-sp-vino: #9f2141;
  --gob-sp-dorado: #bc945a;
  --gob-sp-accent: var(--gob-sp-vino);
  --gob-sp-accent-2: var(--gob-sp-dorado);
  --gob-sp-track: #efece7;
  --gob-sp-title: #181511;
  --gob-sp-muted: #8a8278;
  --gob-sp-bg: #ffffff;
  --gob-sp-border: rgba(24, 21, 17, 0.07);
  --gob-sp-size: 36px;
  --gob-sp-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  display: grid;
  place-items: center;
  gap: 14px;
  min-width: 0;
  padding: 28px 22px;
  border: 1px solid var(--gob-sp-border);
  border-radius: 20px;
  background: var(--gob-sp-bg);
  box-shadow: 0 12px 28px rgba(24, 21, 17, 0.045);
}

.root[data-size='sm'] { --gob-sp-size: 24px; }
.root[data-size='md'] { --gob-sp-size: 36px; }
.root[data-size='lg'] { --gob-sp-size: 52px; }

.root[data-status='info'] { --gob-sp-accent: #2f5f8a; --gob-sp-accent-2: #5a86ad; }
.root[data-status='warning'] { --gob-sp-accent: #d0921a; --gob-sp-accent-2: #bc945a; }
.root[data-status='success'] { --gob-sp-accent: #1f8a55; --gob-sp-accent-2: #4aa879; }
.root[data-status='danger'] { --gob-sp-accent: #c62828; --gob-sp-accent-2: #9f2141; }

.root[data-variant='button'],
.root[data-variant='inline'] {
  display: inline-flex;
  width: auto;
  place-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  box-shadow: none;
}

.root[data-variant='page'] {
  min-height: 220px;
  gap: 16px;
}

.root[data-variant='overlay'] {
  min-height: 180px;
  background: #ffffff;
}

.visual {
  position: relative;
  display: grid;
  place-items: center;
  width: var(--gob-sp-size);
  height: var(--gob-sp-size);
}

.label {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--gob-sp-title);
  text-align: center;
}

.hint {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-sp-muted);
  text-align: center;
}

.pill {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: color-mix(in srgb, var(--gob-sp-accent) 12%, transparent);
  color: var(--gob-sp-accent);
}

/* Ring */
.ring {
  width: 100%;
  height: 100%;
  border-radius: 999px;
  border: 3px solid var(--gob-sp-track);
  border-top-color: var(--gob-sp-accent);
  animation: gob-sp-spin 0.85s linear infinite;
}

.root[data-size='sm'] .ring { border-width: 2px; }
.root[data-size='lg'] .ring { border-width: 4px; }

/* Dual */
.dual {
  position: relative;
  width: 100%;
  height: 100%;
}
.dual-outer,
.dual-inner {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 3px solid transparent;
}
.dual-outer {
  border-top-color: var(--gob-sp-accent);
  border-right-color: color-mix(in srgb, var(--gob-sp-accent) 35%, transparent);
  animation: gob-sp-spin 0.95s linear infinite;
}
.dual-inner {
  inset: 22%;
  border-bottom-color: var(--gob-sp-accent-2);
  border-left-color: color-mix(in srgb, var(--gob-sp-accent-2) 40%, transparent);
  animation: gob-sp-spin-rev 0.7s linear infinite;
}

/* Dots */
.dots {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: var(--gob-sp-size);
}
.dot {
  width: calc(var(--gob-sp-size) * 0.22);
  height: calc(var(--gob-sp-size) * 0.22);
  border-radius: 999px;
  background: var(--gob-sp-accent);
  animation: gob-sp-bounce 0.9s var(--gob-sp-ease) infinite;
}
.dot:nth-child(2) {
  background: var(--gob-sp-accent-2);
  animation-delay: 0.12s;
}
.dot:nth-child(3) {
  animation-delay: 0.24s;
}

/* Pulse */
.pulse {
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: var(--gob-sp-accent);
  animation: gob-sp-pulse 1.15s var(--gob-sp-ease) infinite;
  box-shadow: 0 0 0 0 color-mix(in srgb, var(--gob-sp-accent-2) 35%, transparent);
}

/* Bars */
.bars {
  display: inline-flex;
  align-items: flex-end;
  gap: 5px;
  height: var(--gob-sp-size);
}
.bar {
  width: calc(var(--gob-sp-size) * 0.16);
  height: 35%;
  border-radius: 999px;
  background: var(--gob-sp-accent);
  animation: gob-sp-bars 0.85s ease-in-out infinite;
}
.bar:nth-child(2) {
  background: var(--gob-sp-accent-2);
  animation-delay: 0.1s;
}
.bar:nth-child(3) {
  animation-delay: 0.2s;
}
.bar:nth-child(4) {
  background: var(--gob-sp-accent-2);
  animation-delay: 0.3s;
}

.root[data-variant='complete'] {
  gap: 12px;
}
.root[data-variant='complete'] .copy {
  display: grid;
  gap: 6px;
  justify-items: center;
}

@keyframes gob-sp-spin {
  to { transform: rotate(360deg); }
}
@keyframes gob-sp-spin-rev {
  to { transform: rotate(-360deg); }
}
@keyframes gob-sp-bounce {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.55; }
  40% { transform: translateY(-38%); opacity: 1; }
}
@keyframes gob-sp-pulse {
  0% { transform: scale(0.82); opacity: 0.75; box-shadow: 0 0 0 0 color-mix(in srgb, var(--gob-sp-accent-2) 40%, transparent); }
  70% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 12px transparent; }
  100% { transform: scale(0.82); opacity: 0.75; box-shadow: 0 0 0 0 transparent; }
}
@keyframes gob-sp-bars {
  0%, 100% { height: 32%; }
  50% { height: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .ring,
  .dual-outer,
  .dual-inner,
  .dot,
  .pulse,
  .bar {
    animation: none;
  }
  .ring {
    border-top-color: var(--gob-sp-accent);
    border-right-color: var(--gob-sp-accent-2);
  }
  .pulse { opacity: 0.85; }
  .bar:nth-child(1) { height: 45%; }
  .bar:nth-child(2) { height: 80%; }
  .bar:nth-child(3) { height: 55%; }
  .bar:nth-child(4) { height: 70%; }
}
`;
