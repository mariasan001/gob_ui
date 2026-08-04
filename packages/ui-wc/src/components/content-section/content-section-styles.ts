export const contentSectionStyles = `
:host {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-cs-vino: #9f2141;
  --gob-cs-dorado: #bc945a;
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
  gap: 14px;
  width: 100%;
  padding: 22px;
  border-radius: 20px;
  border: 1px solid var(--gob-cs-border);
  background: var(--gob-cs-bg);
  overflow: hidden;
}

.root::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--gob-cs-dorado);
  opacity: 0;
}

.eyebrow {
  margin: 0;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gob-cs-vino);
}

.title {
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.035em;
  color: var(--gob-cs-title);
  line-height: 1.15;
}

.description {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--gob-cs-muted);
  max-width: 54ch;
}

.body {
  margin: 0;
  padding: 14px 15px;
  border-radius: 14px;
  background: var(--gob-cs-fill);
  color: var(--gob-cs-title);
  font-size: 13.5px;
  font-weight: 550;
  line-height: 1.5;
}

.media {
  display: none;
  min-height: 120px;
  border-radius: 14px;
  background: var(--gob-cs-fill);
  border: 1px solid rgba(24, 21, 17, 0.06);
}

.actions {
  display: none;
}

.action {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 11px;
  border: 0;
  background: var(--gob-cs-vino);
  color: #fff;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}
.action:hover { background: #7a1832; }

.root[data-variant='soft'] {
  background: var(--gob-cs-fill);
  border-color: transparent;
}
.root[data-variant='soft'] .body { background: #fff; }

.root[data-variant='split'] {
  grid-template-columns: 1.2fr 0.8fr;
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
.root[data-variant='centered'] .description,
.root[data-variant='centered'] .body { max-width: 46ch; }

.root[data-variant='dense'] {
  gap: 10px;
  padding: 16px;
  border-radius: 16px;
}
.root[data-variant='dense'] .title { font-size: 18px; }

.root[data-variant='outline'] {
  border-color: color-mix(in srgb, var(--gob-cs-vino) 24%, #d7dde6);
}

.root[data-variant='steps'] .body,
.root[data-variant='feature'] .actions,
.root[data-variant='brand'] .actions,
.root[data-variant='complete'] .actions {
  display: block;
}
.root[data-variant='feature'] .actions,
.root[data-variant='brand'] .actions,
.root[data-variant='complete'] .actions {
  display: flex;
}

.root[data-variant='brand'] .title { color: var(--gob-cs-vino); }
.root[data-variant='complete']::before { opacity: 1; }

@media (max-width: 720px) {
  .root[data-variant='split'] {
    grid-template-columns: 1fr;
  }
  .root[data-variant='split'] .media {
    grid-column: 1;
    grid-row: auto;
    min-height: 120px;
    order: -1;
  }
}
`;
