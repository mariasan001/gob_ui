export const radioStyles = `
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

.dot {
  box-sizing: border-box;
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 1.5px solid var(--gob-primary);
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color 140ms ease;
}

.dot::after {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--gob-primary);
  transform: scale(0);
  transition: transform 140ms ease;
}

.control[data-checked="true"] .dot::after {
  transform: scale(1);
}

.control[data-disabled="true"] .dot {
  border-color: var(--gob-button-disabled-border, #ebe6df);
}

.control[data-disabled="true"][data-checked="true"] .dot {
  border-color: color-mix(in srgb, var(--gob-primary) 35%, #ebe6df);
}

.control[data-disabled="true"][data-checked="true"] .dot::after {
  background: color-mix(in srgb, var(--gob-primary) 40%, #ebe6df);
}

input:focus-visible + .dot {
  box-shadow: var(--gob-focus-ring, var(--gob-focus));
}

.label {
  min-width: 0;
}
`;
