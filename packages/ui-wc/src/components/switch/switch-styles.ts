export const switchStyles = `
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
  background: transparent;
  border: 0;
  padding: 0;
}

.control[data-disabled="true"] {
  cursor: not-allowed;
  color: var(--gob-button-disabled-fg, #9a9288);
}

.track {
  box-sizing: border-box;
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 999px;
  border: 1.5px solid var(--gob-primary);
  background: transparent;
  flex: 0 0 auto;
  transition: background-color 140ms ease, border-color 140ms ease;
}

.thumb {
  position: absolute;
  top: 50%;
  left: 3px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: var(--gob-primary);
  transform: translateY(-50%);
  transition: left 140ms ease, background-color 140ms ease;
}

.control[data-checked="true"] .thumb {
  left: 22px;
}

.control[data-disabled="true"] .track {
  border-color: var(--gob-button-disabled-border, #ebe6df);
}

.control[data-disabled="true"] .thumb {
  background: color-mix(in srgb, var(--gob-primary) 35%, #ebe6df);
}

.control[data-disabled="true"][data-checked="true"] .track {
  border-color: color-mix(in srgb, var(--gob-primary) 35%, #ebe6df);
}

.control:focus-visible .track {
  box-shadow: var(--gob-focus-ring, var(--gob-focus));
}

.label {
  min-width: 0;
}
`;
