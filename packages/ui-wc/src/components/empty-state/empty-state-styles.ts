export const emptyStateStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  color: var(--gob-es-text, #6b665f);
  --gob-es-bg: #ffffff;
  --gob-es-border: rgba(24, 21, 17, 0.08);
  --gob-es-radius: 14px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  display: grid;
  place-items: center;
  min-width: 0;
  min-height: 220px;
  padding: 36px 24px;
  border: 1px dashed var(--gob-es-border);
  border-radius: var(--gob-es-radius);
  background: var(--gob-es-bg);
}

.root[data-variant='dense'] {
  min-height: 160px;
  padding: 24px 18px;
}

:host([tone='primary']),
:host(:not([tone])),
.root[data-tone='primary'] {
  --gob-es-bg: #fafafa;
}

:host([tone='accent']),
.root[data-tone='accent'] {
  --gob-es-bg: #fbf7f1;
}

:host([tone='dark']),
.root[data-tone='dark'] {
  --gob-es-bg: #181511;
  --gob-es-border: rgba(255, 255, 255, 0.14);
}

:host([tone='neutral']),
.root[data-tone='neutral'] {
  --gob-es-bg: #f0f0f0;
}

:host([tone='soft']),
.root[data-tone='soft'] {
  --gob-es-bg: #f3ebe0;
}
`;
