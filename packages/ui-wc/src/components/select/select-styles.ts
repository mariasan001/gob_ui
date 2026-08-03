export const selectStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-sel-vino: #9f2141;
  --gob-sel-dorado: #bc945a;
  --gob-sel-title: #181511;
  --gob-sel-muted: #8a8278;
  --gob-sel-text: #3d3a35;
  --gob-sel-border: rgba(24, 21, 17, 0.12);
  --gob-sel-border-hover: rgba(24, 21, 17, 0.22);
  --gob-sel-focus: var(--gob-sel-vino);
  --gob-sel-ring: rgba(159, 33, 65, 0.16);
  --gob-sel-bg: #ffffff;
  --gob-sel-fill: #faf9f7;
  --gob-sel-radius: 14px;
  --gob-sel-height: 48px;
  --gob-sel-pad-x: 14px;
  --gob-sel-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

[hidden] {
  display: none !important;
}

.root {
  display: grid;
  gap: 8px;
  min-width: 0;
}

.root[data-size='sm'] {
  --gob-sel-height: 40px;
  --gob-sel-radius: 12px;
  --gob-sel-pad-x: 12px;
}
.root[data-size='lg'] {
  --gob-sel-height: 56px;
  --gob-sel-radius: 16px;
  --gob-sel-pad-x: 16px;
}
.root[data-variant='dense'] {
  --gob-sel-height: 38px;
  --gob-sel-radius: 10px;
  gap: 6px;
}

.root[data-status='error'] {
  --gob-sel-focus: #c62828;
  --gob-sel-ring: rgba(198, 40, 40, 0.16);
}
.root[data-status='success'] {
  --gob-sel-focus: #1f8a55;
  --gob-sel-ring: rgba(31, 138, 85, 0.16);
}
.root[data-status='warning'] {
  --gob-sel-focus: #d0921a;
  --gob-sel-ring: rgba(208, 146, 26, 0.18);
}
.root[data-status='info'] {
  --gob-sel-focus: #2f5f8a;
  --gob-sel-ring: rgba(47, 95, 138, 0.16);
}

.label {
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--gob-sel-title);
}

.label .req {
  color: var(--gob-sel-vino);
  margin-left: 2px;
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.pill {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  height: 22px;
  padding: 0 9px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: rgba(159, 33, 65, 0.1);
  color: var(--gob-sel-vino);
}
.root[data-status='error'] .pill {
  background: rgba(198, 40, 40, 0.12);
  color: #c62828;
}
.root[data-status='success'] .pill {
  background: rgba(31, 138, 85, 0.14);
  color: #1f8a55;
}
.root[data-status='warning'] .pill {
  background: rgba(208, 146, 26, 0.16);
  color: #a87412;
}
.root[data-status='info'] .pill {
  background: rgba(47, 95, 138, 0.12);
  color: #2f5f8a;
}

.control {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  min-height: var(--gob-sel-height);
  padding: 0 calc(var(--gob-sel-pad-x) + 28px) 0 var(--gob-sel-pad-x);
  border: 1.5px solid var(--gob-sel-border);
  border-radius: var(--gob-sel-radius);
  background: var(--gob-sel-bg);
  transition:
    border-color 180ms var(--gob-sel-ease),
    box-shadow 180ms var(--gob-sel-ease),
    background 180ms var(--gob-sel-ease);
}

.control:hover {
  border-color: var(--gob-sel-border-hover);
}

.root[data-focused='true'] .control {
  border-color: var(--gob-sel-focus);
  box-shadow: 0 0 0 4px var(--gob-sel-ring);
  background: #ffffff;
}

.root[data-status='error'] .control {
  border-color: color-mix(in srgb, #c62828 55%, var(--gob-sel-border));
}
.root[data-status='success'] .control {
  border-color: color-mix(in srgb, #1f8a55 50%, var(--gob-sel-border));
}
.root[data-status='warning'] .control {
  border-color: color-mix(in srgb, #d0921a 55%, var(--gob-sel-border));
}

.root[data-disabled='true'] .control {
  background: var(--gob-sel-fill);
  opacity: 0.72;
  cursor: not-allowed;
}

.lead {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gob-sel-dorado);
}

.lead svg {
  width: 18px;
  height: 18px;
  display: block;
}

.field {
  appearance: none;
  -webkit-appearance: none;
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
  height: calc(var(--gob-sel-height) - 4px);
  border: 0;
  outline: none;
  background: transparent;
  color: var(--gob-sel-text);
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  cursor: pointer;
}

.field:disabled {
  cursor: not-allowed;
  color: var(--gob-sel-muted);
}

.field option,
.field optgroup {
  color: var(--gob-sel-text);
}

.field[data-placeholder='true'] {
  color: #b0aaa1;
}

.chevron {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--gob-sel-muted);
  pointer-events: none;
  transition: transform 180ms var(--gob-sel-ease), color 180ms var(--gob-sel-ease);
}

.root[data-focused='true'] .chevron {
  color: var(--gob-sel-vino);
  transform: translateY(-50%) rotate(180deg);
}

.helper {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-sel-muted);
  line-height: 1.35;
}

.root[data-status='error'] .helper { color: #c62828; }
.root[data-status='success'] .helper { color: #1f8a55; }
.root[data-status='warning'] .helper { color: #a87412; }
.root[data-status='info'] .helper { color: #2f5f8a; }

.float-label {
  position: absolute;
  left: var(--gob-sel-pad-x);
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  font-weight: 500;
  color: #b0aaa1;
  pointer-events: none;
  transition:
    top 180ms var(--gob-sel-ease),
    transform 180ms var(--gob-sel-ease),
    font-size 180ms var(--gob-sel-ease),
    color 180ms var(--gob-sel-ease);
}

.root[data-variant='floating'] .control {
  align-items: flex-end;
  min-height: 58px;
  padding-top: 18px;
  padding-bottom: 10px;
}
.root[data-variant='floating'] .field {
  height: 24px;
}
.root[data-variant='floating'][data-focused='true'] .float-label,
.root[data-variant='floating'][data-filled='true'] .float-label {
  top: 10px;
  transform: none;
  font-size: 11px;
  font-weight: 700;
  color: var(--gob-sel-dorado);
}

.root[data-variant='filled'] .control {
  background: var(--gob-sel-fill);
  border-color: transparent;
}
.root[data-variant='filled'] .control:hover {
  background: #f3f1ec;
  border-color: transparent;
}
.root[data-variant='filled'][data-focused='true'] .control {
  background: #ffffff;
  border-color: var(--gob-sel-focus);
}

.root[data-variant='soft'] .control {
  border-color: transparent;
  background: color-mix(in srgb, var(--gob-sel-vino) 7%, #ffffff);
}
.root[data-variant='soft'] .control:hover {
  background: color-mix(in srgb, var(--gob-sel-vino) 11%, #ffffff);
  border-color: transparent;
}
.root[data-variant='soft'][data-focused='true'] .control {
  background: #ffffff;
  border-color: var(--gob-sel-focus);
}
.root[data-variant='soft'] .lead {
  color: var(--gob-sel-vino);
}

.root[data-variant='pill'] .control {
  border-radius: 999px;
  padding-left: 18px;
  padding-right: 34px;
}

.root[data-variant='multiple'] .control {
  align-items: stretch;
  min-height: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: var(--gob-sel-pad-x);
}
.root[data-variant='multiple'] .field {
  height: auto;
  min-height: 100px;
}
.root[data-variant='multiple'] .chevron {
  display: none;
}
`;
