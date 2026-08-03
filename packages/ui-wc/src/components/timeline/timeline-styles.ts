export const timelineStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  color: var(--gob-tl-text, #6b665f);
  --gob-tl-bg: #ffffff;
  --gob-tl-border: rgba(24, 21, 17, 0.08);
  --gob-tl-radius: 18px;
  --gob-tl-shadow: 0 1px 2px rgba(24, 21, 17, 0.03), 0 14px 32px rgba(24, 21, 17, 0.05);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  display: grid;
  min-width: 0;
  padding: 22px 20px 16px;
  border: 1px solid var(--gob-tl-border);
  border-radius: var(--gob-tl-radius);
  background:
    radial-gradient(90% 70% at 0% 0%, rgba(159, 33, 65, 0.05), transparent 42%),
    radial-gradient(80% 60% at 100% 100%, rgba(188, 148, 90, 0.08), transparent 46%),
    var(--gob-tl-bg);
  box-shadow: var(--gob-tl-shadow);
}

.root[data-variant='dense'] {
  padding: 14px 12px 10px;
  border-radius: 14px;
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
  --gob-tl-shadow: none;
  background:
    radial-gradient(90% 70% at 0% 0%, rgba(255, 255, 255, 0.05), transparent 42%),
    radial-gradient(80% 60% at 100% 100%, rgba(224, 197, 154, 0.08), transparent 46%),
    var(--gob-tl-bg);
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
