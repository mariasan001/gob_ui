export const sliderStyles = `
:host {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-sl-vino: #9f2141;
  --gob-sl-vino-deep: #7a1832;
  --gob-sl-dorado: #bc945a;
  --gob-sl-title: #181511;
  --gob-sl-muted: #8a8278;
  --gob-sl-text: #3d3a35;
  --gob-sl-border: rgba(24, 21, 17, 0.12);
  --gob-sl-focus: var(--gob-sl-vino);
  --gob-sl-ring: rgba(159, 33, 65, 0.18);
  --gob-sl-track: #ebe6df;
  --gob-sl-thumb: 20px;
  --gob-sl-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*,
*::before,
*::after { box-sizing: border-box; }

[hidden] { display: none !important; }

.root {
  display: grid;
  gap: 10px;
  min-width: 0;
}

.root[data-size='sm'] { --gob-sl-thumb: 16px; gap: 8px; }
.root[data-size='lg'] { --gob-sl-thumb: 24px; }

.root[data-status='error'] { --gob-sl-focus: #c62828; --gob-sl-ring: rgba(198,40,40,.16); }
.root[data-status='success'] { --gob-sl-focus: #1f8a55; --gob-sl-ring: rgba(31,138,85,.16); }
.root[data-status='warning'] { --gob-sl-focus: #d0921a; --gob-sl-ring: rgba(208,146,26,.18); }
.root[data-status='info'] { --gob-sl-focus: #2f5f8a; --gob-sl-ring: rgba(47,95,138,.16); }

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-width: 0;
}

.label {
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--gob-sl-title);
}

.label .req {
  color: var(--gob-sl-vino);
  margin-left: 2px;
}

.value-pill {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--gob-sl-vino) 10%, #fff);
  border: 1px solid color-mix(in srgb, var(--gob-sl-vino) 18%, transparent);
  color: var(--gob-sl-vino-deep);
  font-size: 12px;
  font-weight: 750;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.01em;
}

.pill {
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 9px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: rgba(159, 33, 65, 0.1);
  color: var(--gob-sl-vino);
}
.root[data-status='error'] .pill { background: rgba(198,40,40,.12); color: #c62828; }
.root[data-status='success'] .pill { background: rgba(31,138,85,.14); color: #1f8a55; }
.root[data-status='warning'] .pill { background: rgba(208,146,26,.16); color: #a87412; }
.root[data-status='info'] .pill { background: rgba(47,95,138,.12); color: #2f5f8a; }

.shell {
  display: grid;
  gap: 8px;
  padding: 4px 2px 0;
}

.root[data-variant='soft'] .shell,
.root[data-variant='complete'] .shell {
  padding: 14px 16px 12px;
  border-radius: 16px;
  border: 1px solid rgba(24, 21, 17, 0.08);
  background: #fff;
}

.root[data-variant='soft'] .shell {
  background: color-mix(in srgb, var(--gob-sl-vino) 5%, #fff);
  border-color: color-mix(in srgb, var(--gob-sl-vino) 14%, transparent);
}

.control {
  position: relative;
  height: calc(var(--gob-sl-thumb) + 12px);
  display: flex;
  align-items: center;
  touch-action: none;
  user-select: none;
}

.track {
  position: absolute;
  left: 0;
  right: 0;
  height: 6px;
  border-radius: 999px;
  background: var(--gob-sl-track);
}

.fill {
  position: absolute;
  left: 0;
  height: 6px;
  border-radius: 999px;
  background: var(--gob-sl-focus);
  pointer-events: none;
}

.thumb {
  appearance: none;
  position: absolute;
  top: 50%;
  width: var(--gob-sl-thumb);
  height: var(--gob-sl-thumb);
  margin: 0;
  border: 2px solid #fff;
  border-radius: 999px;
  background: var(--gob-sl-focus);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--gob-sl-focus) 35%, transparent),
    0 4px 10px rgba(24, 21, 17, 0.16);
  transform: translate(-50%, -50%);
  cursor: grab;
  z-index: 2;
}

.thumb:active { cursor: grabbing; }

.thumb:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 4px var(--gob-sl-ring),
    0 4px 10px rgba(24, 21, 17, 0.16);
}

.root[data-disabled='true'] .thumb {
  cursor: not-allowed;
  background: color-mix(in srgb, var(--gob-sl-focus) 45%, #ebe6df);
  box-shadow: none;
}

.root[data-disabled='true'] .fill {
  background: color-mix(in srgb, var(--gob-sl-focus) 40%, #ebe6df);
}

.root[data-disabled='true'] {
  opacity: 0.78;
}

.root[data-readonly='true'] .thumb {
  cursor: default;
}

.marks {
  position: relative;
  height: 18px;
  margin: 0 0 2px;
}

.mark {
  position: absolute;
  transform: translateX(-50%);
  display: grid;
  justify-items: center;
  gap: 4px;
}

.mark i {
  width: 2px;
  height: 6px;
  border-radius: 1px;
  background: var(--gob-sl-dorado);
  opacity: 0.7;
}

.mark span {
  font-size: 10px;
  font-weight: 650;
  color: var(--gob-sl-muted);
  font-variant-numeric: tabular-nums;
}

.bounds {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 11px;
  font-weight: 600;
  color: var(--gob-sl-muted);
  font-variant-numeric: tabular-nums;
}

.helper {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-sl-muted);
  line-height: 1.35;
}
.root[data-status='error'] .helper { color: #c62828; }
.root[data-status='success'] .helper { color: #1f8a55; }
.root[data-status='warning'] .helper { color: #a87412; }
.root[data-status='info'] .helper { color: #2f5f8a; }

.hidden-inputs {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
`;
