export const formStyles = `
:host {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-fm-vino: #9f2141;
  --gob-fm-dorado: #bc945a;
  --gob-fm-title: #181511;
  --gob-fm-muted: #8a8278;
  --gob-fm-text: #3d3a35;
  --gob-fm-border: rgba(24, 21, 17, 0.12);
  --gob-fm-bg: #ffffff;
  --gob-fm-fill: #faf9f7;
  --gob-fm-radius: 18px;
  --gob-fm-gap: 16px;
  --gob-fm-cols: 1;
}

*,
*::before,
*::after { box-sizing: border-box; }

[hidden] { display: none !important; }

.root {
  display: grid;
  gap: 14px;
  min-width: 0;
}

.head {
  display: grid;
  gap: 4px;
}

.title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--gob-fm-title);
}

.description {
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: var(--gob-fm-muted);
  line-height: 1.45;
  max-width: 62ch;
}

.body {
  display: grid;
  grid-template-columns: repeat(var(--gob-fm-cols), minmax(0, 1fr));
  gap: var(--gob-fm-gap);
  min-width: 0;
}

.root[data-gap='sm'] { --gob-fm-gap: 10px; }
.root[data-gap='md'] { --gob-fm-gap: 16px; }
.root[data-gap='lg'] { --gob-fm-gap: 22px; }

.root[data-columns='1'] { --gob-fm-cols: 1; }
.root[data-columns='2'] { --gob-fm-cols: 2; }
.root[data-columns='3'] { --gob-fm-cols: 3; }

.root[data-variant='dense'] {
  --gob-fm-gap: 10px;
}
.root[data-variant='stacked'] .body {
  gap: 18px;
}

.root[data-variant='soft'] {
  padding: 18px;
  border-radius: var(--gob-fm-radius);
  background: color-mix(in srgb, var(--gob-fm-vino) 5%, #fff);
  border: 1px solid color-mix(in srgb, var(--gob-fm-vino) 14%, #ebe6df);
}

.root[data-variant='card'],
.root[data-variant='complete'] {
  padding: 20px;
  border-radius: var(--gob-fm-radius);
  background: var(--gob-fm-bg);
  border: 1px solid var(--gob-fm-border);
  box-shadow: 0 10px 28px rgba(24, 21, 17, 0.05);
}

.root[data-variant='complete'] {
  border-color: color-mix(in srgb, var(--gob-fm-dorado) 40%, #ebe6df);
  background: linear-gradient(180deg, #fff 0%, #fbf8f3 100%);
}

.root[data-variant='sections'] .body {
  gap: 0;
}
.root[data-variant='sections'] ::slotted(*:not(:last-child)) {
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--gob-fm-border);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
  padding-top: 4px;
}

@media (max-width: 720px) {
  .root[data-columns='2'] .body,
  .root[data-columns='3'] .body,
  .root[data-variant='dual'] .body,
  .root[data-variant='triple'] .body {
    grid-template-columns: 1fr;
  }
}
`;
