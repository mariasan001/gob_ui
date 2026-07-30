export const checkboxStyles = `
:host {
  display: inline-flex;
  vertical-align: middle;
  max-width: 100%;
}

.control {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  color: var(--gob-text);
  font-family: var(--gob-font-sans, inherit);
  font-size: 14px;
  line-height: 1.2;
}

.control[data-disabled="true"] {
  cursor: not-allowed;
  color: var(--gob-button-disabled-fg, #9a9288);
}

input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin: 0;
  pointer-events: none;
}

.box {
  box-sizing: border-box;
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 1.5px solid var(--gob-primary);
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gob-primary-contrast, #fff);
  transition: background-color 140ms ease, border-color 140ms ease;
}

.mark {
  display: none;
  width: 12px;
  height: 12px;
}

.control[data-checked="true"] .box,
.control[data-indeterminate="true"] .box {
  background: var(--gob-primary);
  border-color: var(--gob-primary);
}

.control[data-checked="true"] .mark-check,
.control[data-indeterminate="true"] .mark-line {
  display: block;
}

.control[data-disabled="true"] .box {
  border-color: var(--gob-button-disabled-border, #ebe6df);
  background: transparent;
}

.control[data-disabled="true"][data-checked="true"] .box,
.control[data-disabled="true"][data-indeterminate="true"] .box {
  background: color-mix(in srgb, var(--gob-primary) 28%, #ebe6df);
  border-color: transparent;
  color: color-mix(in srgb, #fff 70%, transparent);
}

input:focus-visible + .box {
  box-shadow: var(--gob-focus-ring, var(--gob-focus));
}

.label {
  min-width: 0;
}
`;
