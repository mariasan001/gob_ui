export const containerStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  color: var(--gob-ct-text, #6b665f);
  --gob-ct-max: 960px;
  --gob-ct-pad-x: 20px;
  --gob-ct-pad-y: 0;
  --gob-ct-text: #6b665f;
  --gob-ct-title: #181511;
  --gob-ct-muted: #8a8278;
  --gob-ct-border: rgba(24, 21, 17, 0.12);
  --gob-ct-bg: transparent;
  --gob-ct-radius: 0;
  --gob-ct-shadow: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  width: min(100%, var(--gob-ct-max));
  margin-inline: auto;
  padding: var(--gob-ct-pad-y) var(--gob-ct-pad-x);
  background: var(--gob-ct-bg);
  border: 1px solid transparent;
  border-radius: var(--gob-ct-radius);
  box-shadow: var(--gob-ct-shadow);
  color: var(--gob-ct-text);
}

.root[data-variant='basic'] {
  --gob-ct-max: 960px;
  --gob-ct-pad-x: 20px;
}

.root[data-variant='narrow'] {
  --gob-ct-max: 720px;
  --gob-ct-pad-x: 20px;
}

.root[data-variant='wide'] {
  --gob-ct-max: 1200px;
  --gob-ct-pad-x: 24px;
}

.root[data-variant='full'] {
  --gob-ct-max: 100%;
  --gob-ct-pad-x: 20px;
  width: 100%;
}

.root[data-variant='flush'] {
  --gob-ct-max: 960px;
  --gob-ct-pad-x: 0;
}

.root[data-variant='padded'] {
  --gob-ct-max: 960px;
  --gob-ct-pad-x: 36px;
  --gob-ct-pad-y: 28px;
  --gob-ct-bg: #ffffff;
  --gob-ct-radius: 16px;
}

.root[data-variant='prose'] {
  --gob-ct-max: 65ch;
  --gob-ct-pad-x: 20px;
}

/* Caracteristicas: borde y sombra (independientes del variant) */
.root[data-border='true'],
.root[data-shadow='true'] {
  --gob-ct-bg: #ffffff;
  --gob-ct-radius: 16px;
}

.root[data-border='true']:not([data-variant='padded']),
.root[data-shadow='true']:not([data-variant='padded']) {
  --gob-ct-pad-y: 18px;
}

.root[data-border='true'][data-variant='flush'],
.root[data-shadow='true'][data-variant='flush'] {
  --gob-ct-pad-x: 18px;
}

.root[data-border='true'] {
  border-color: var(--gob-ct-border);
}

.root[data-shadow='true'] {
  --gob-ct-shadow: 0 14px 32px rgba(24, 21, 17, 0.12);
}
`;
