export const timelineStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  color: var(--gob-tl-text, #6b665f);
  --gob-tl-bg: #ffffff;
  --gob-tl-border: rgba(24, 21, 17, 0.08);
  --gob-tl-radius: 14px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  display: grid;
  min-width: 0;
  padding: 18px 18px 10px;
  border: 1px solid var(--gob-tl-border);
  border-radius: var(--gob-tl-radius);
  background: var(--gob-tl-bg);
}

.root[data-variant='dense'] {
  padding: 12px 12px 6px;
}

:host([tone='primary']),
:host(:not([tone])),
.root[data-tone='primary'] {
  --gob-tl-bg: #ffffff;
}

:host([tone='accent']),
.root[data-tone='accent'] {
  --gob-tl-bg: #fbf7f1;
}

:host([tone='dark']),
.root[data-tone='dark'] {
  --gob-tl-bg: #181511;
  --gob-tl-border: rgba(255, 255, 255, 0.1);
}

:host([tone='neutral']),
.root[data-tone='neutral'] {
  --gob-tl-bg: #f5f5f5;
}

:host([tone='soft']),
.root[data-tone='soft'] {
  --gob-tl-bg: #f3ebe0;
}
`;
