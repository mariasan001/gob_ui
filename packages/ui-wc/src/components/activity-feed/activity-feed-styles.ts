export const activityFeedStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  color: var(--gob-af-text, #6b665f);
  --gob-af-bg: #ffffff;
  --gob-af-border: rgba(24, 21, 17, 0.08);
  --gob-af-radius: 14px;
  --gob-af-shadow: 0 1px 2px rgba(24, 21, 17, 0.04), 0 8px 24px rgba(24, 21, 17, 0.04);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  display: grid;
  min-width: 0;
  border: 1px solid var(--gob-af-border);
  border-radius: var(--gob-af-radius);
  background: var(--gob-af-bg);
  box-shadow: var(--gob-af-shadow);
  overflow: hidden;
}

:host([tone='primary']),
:host(:not([tone])),
.root[data-tone='primary'] {
  --gob-af-bg: #ffffff;
}

:host([tone='accent']),
.root[data-tone='accent'] {
  --gob-af-bg: #fbf7f1;
}

:host([tone='dark']),
.root[data-tone='dark'] {
  --gob-af-bg: #181511;
  --gob-af-border: rgba(255, 255, 255, 0.1);
}

:host([tone='neutral']),
.root[data-tone='neutral'] {
  --gob-af-bg: #f5f5f5;
}

:host([tone='soft']),
.root[data-tone='soft'] {
  --gob-af-bg: #f3ebe0;
}
`;
