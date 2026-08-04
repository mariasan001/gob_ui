export const contentSectionStyles = `
:host {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-cs-vino: #9f2141;
  --gob-cs-vino-deep: #7a1832;
  --gob-cs-title: #181511;
  --gob-cs-muted: #6f6a63;
  --gob-cs-border: rgba(24, 21, 17, 0.1);
  --gob-cs-bg: #ffffff;
  --gob-cs-fill: #f3f3f3;
  --gob-cs-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }

.root {
  position: relative;
  display: grid;
  gap: 12px;
  width: 100%;
  padding: 24px;
  border-radius: 18px;
  border: 1px solid var(--gob-cs-border);
  background: var(--gob-cs-bg);
}

.eyebrow {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--gob-cs-muted);
}

.title {
  margin: 0;
  font-size: 22px;
  font-weight: 750;
  letter-spacing: -0.035em;
  color: var(--gob-cs-title);
  line-height: 1.15;
  max-width: 22ch;
}

.description {
  margin: 0;
  font-size: 14.5px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--gob-cs-muted);
  max-width: 52ch;
}

.body {
  margin: 4px 0 0;
  padding: 0;
  color: var(--gob-cs-title);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.55;
  max-width: 58ch;
}

.media {
  display: none;
  min-height: 140px;
  border-radius: 14px;
  background: var(--gob-cs-fill);
  border: 1px solid rgba(24, 21, 17, 0.06);
}

.actions {
  display: none;
  margin-top: 4px;
}

.action {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 12px;
  border: 0;
  background: var(--gob-cs-vino);
  color: #fff;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.015em;
  cursor: pointer;
  transition: background 140ms var(--gob-cs-ease);
}
.action:hover { background: var(--gob-cs-vino-deep); }

.root[data-variant='soft'] {
  background: var(--gob-cs-fill);
  border-color: transparent;
}

.root[data-variant='split'] {
  grid-template-columns: 1.15fr 0.85fr;
  gap: 20px 28px;
  align-items: center;
}
.root[data-variant='split'] .media {
  display: block;
  grid-column: 2;
  grid-row: 1 / span 5;
  min-height: 180px;
}
.root[data-variant='split'] .eyebrow,
.root[data-variant='split'] .title,
.root[data-variant='split'] .description,
.root[data-variant='split'] .body,
.root[data-variant='split'] .actions {
  grid-column: 1;
}

.root[data-variant='centered'] {
  justify-items: center;
  text-align: center;
}
.root[data-variant='centered'] .title,
.root[data-variant='centered'] .description,
.root[data-variant='centered'] .body {
  max-width: 44ch;
}

.root[data-variant='dense'] {
  gap: 8px;
  padding: 16px 18px;
  border-radius: 14px;
}
.root[data-variant='dense'] .title { font-size: 17px; max-width: none; }
.root[data-variant='dense'] .description { font-size: 13px; }

.root[data-variant='outline'] {
  border-color: rgba(24, 21, 17, 0.14);
}

.root[data-variant='steps'] .body {
  padding: 14px 16px;
  border-radius: 12px;
  background: var(--gob-cs-fill);
}

.root[data-variant='feature'] .actions,
.root[data-variant='brand'] .actions,
.root[data-variant='complete'] .actions {
  display: flex;
}

.root[data-variant='complete'] {
  border-top: 2px solid #bc945a;
}

@media (max-width: 720px) {
  .root[data-variant='split'] {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .root[data-variant='split'] .media {
    grid-column: 1;
    grid-row: auto;
    min-height: 120px;
    order: -1;
  }
}
`;
