export const contentSectionStyles = `
:host {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-cs-vino: #9f2141;
  --gob-cs-vino-deep: #7a1832;
  --gob-cs-vino-soft: #f7eef1;
  --gob-cs-gold: #bc945a;
  --gob-cs-gold-soft: #f7f1e6;
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
  padding: 28px;
  border-radius: 22px;
  border: 1px solid var(--gob-cs-border);
  background: var(--gob-cs-bg);
  overflow: hidden;
  transition:
    transform 180ms var(--gob-cs-ease),
    box-shadow 180ms var(--gob-cs-ease),
    border-color 180ms var(--gob-cs-ease);
}
.root:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(24, 21, 17, 0.08);
}

.eyebrow {
  margin: 0;
  width: fit-content;
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gob-cs-muted);
  padding: 0 0 0 10px;
  border-left: 2px solid var(--gob-cs-gold);
  line-height: 1.2;
}

.title {
  margin: 0;
  font-size: clamp(1.35rem, 2.4vw, 1.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--gob-cs-title);
  line-height: 1.12;
  max-width: 18ch;
}

.description {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--gob-cs-muted);
  max-width: 48ch;
}

.body {
  margin: 2px 0 0;
  padding: 0;
  color: var(--gob-cs-title);
  font-size: 14.5px;
  font-weight: 500;
  line-height: 1.55;
  max-width: 56ch;
}

.media {
  display: none;
  position: relative;
  min-height: 168px;
  border-radius: 18px;
  background: var(--gob-cs-fill);
  border: 1px solid rgba(24, 21, 17, 0.06);
  overflow: hidden;
}
.media::before,
.media::after {
  content: '';
  position: absolute;
  border-radius: 18px;
}
.media::before {
  left: 14%;
  top: 16%;
  width: 52%;
  height: 52%;
  border: 2px solid var(--gob-cs-gold);
  opacity: 0.85;
}
.media::after {
  right: 14%;
  bottom: 14%;
  width: 44%;
  height: 44%;
  background: var(--gob-cs-vino);
  opacity: 0.14;
}

.actions {
  display: none;
  margin-top: 6px;
  gap: 10px;
}

.action {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 0 18px;
  border-radius: 13px;
  border: 0;
  background: var(--gob-cs-vino);
  color: #fff;
  font: inherit;
  font-size: 13.5px;
  font-weight: 750;
  letter-spacing: -0.015em;
  cursor: pointer;
  transition:
    background 140ms var(--gob-cs-ease),
    transform 140ms var(--gob-cs-ease),
    box-shadow 140ms var(--gob-cs-ease);
}
.action::after {
  content: '→';
  font-weight: 700;
  transition: transform 140ms var(--gob-cs-ease);
}
.action:hover {
  background: var(--gob-cs-vino-deep);
  box-shadow: 0 10px 22px rgba(159, 33, 65, 0.22);
}
.action:hover::after { transform: translateX(3px); }

/* —— variantes —— */

.root[data-variant='soft'] {
  background: var(--gob-cs-fill);
  border-color: transparent;
}
.root[data-variant='soft'] .eyebrow {
  border-left-color: rgba(24, 21, 17, 0.2);
}

.root[data-variant='split'] {
  grid-template-columns: 1.1fr 0.9fr;
  gap: 22px 32px;
  align-items: center;
  padding: 30px;
}
.root[data-variant='split'] .media {
  display: block;
  grid-column: 2;
  grid-row: 1 / span 5;
  min-height: 220px;
  background: #efecea;
}
.root[data-variant='split'] .eyebrow,
.root[data-variant='split'] .title,
.root[data-variant='split'] .description,
.root[data-variant='split'] .body,
.root[data-variant='split'] .actions {
  grid-column: 1;
}
.root[data-variant='split'] .title { max-width: 14ch; }

.root[data-variant='centered'] {
  justify-items: center;
  text-align: center;
  padding: 36px 28px;
  gap: 12px;
}
.root[data-variant='centered'] .eyebrow {
  border-left: 0;
  padding: 0;
  border-bottom: 2px solid var(--gob-cs-gold);
  padding-bottom: 4px;
}
.root[data-variant='centered'] .title,
.root[data-variant='centered'] .description,
.root[data-variant='centered'] .body {
  max-width: 40ch;
}
.root[data-variant='centered'] .title { max-width: 16ch; }

.root[data-variant='dense'] {
  gap: 8px;
  padding: 16px 18px;
  border-radius: 16px;
}
.root[data-variant='dense']:hover {
  transform: none;
  box-shadow: none;
}
.root[data-variant='dense'] .eyebrow {
  font-size: 10px;
  letter-spacing: 0.06em;
}
.root[data-variant='dense'] .title {
  font-size: 1.05rem;
  max-width: none;
  font-weight: 750;
}
.root[data-variant='dense'] .description { font-size: 13px; }
.root[data-variant='dense'] .body { font-size: 13px; margin: 0; }

.root[data-variant='outline'] {
  border: 1.5px solid rgba(159, 33, 65, 0.28);
  box-shadow: inset 4px 0 0 var(--gob-cs-vino);
}
.root[data-variant='outline'] .eyebrow {
  color: var(--gob-cs-vino);
  border-left-color: var(--gob-cs-vino);
}

.root[data-variant='steps'] {
  gap: 16px;
}
.root[data-variant='steps'] .body {
  display: grid;
  gap: 10px;
  margin-top: 4px;
  padding: 16px 18px;
  border-radius: 16px;
  background: var(--gob-cs-fill);
  border: 1px solid rgba(24, 21, 17, 0.05);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  max-width: none;
}
.root[data-variant='steps'] .body::before {
  content: 'Paso a paso';
  display: block;
  font-size: 10.5px;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--gob-cs-muted);
  margin-bottom: 2px;
}

.root[data-variant='feature'] {
  padding: 30px;
  background: #fff;
  border-color: rgba(24, 21, 17, 0.08);
}
.root[data-variant='feature'] .title { max-width: 16ch; }
.root[data-variant='feature'] .actions { display: flex; }
.root[data-variant='feature'] .action {
  box-shadow: 0 8px 18px rgba(159, 33, 65, 0.16);
}

.root[data-variant='brand'] {
  background: var(--gob-cs-vino-soft);
  border-color: transparent;
  padding: 30px;
}
.root[data-variant='brand'] .eyebrow {
  color: var(--gob-cs-vino);
  border-left-color: var(--gob-cs-vino);
}
.root[data-variant='brand'] .title { color: var(--gob-cs-vino-deep); }
.root[data-variant='brand'] .actions { display: flex; }
.root[data-variant='brand'] .action {
  background: var(--gob-cs-vino);
}
.root[data-variant='brand']:hover {
  box-shadow: 0 18px 40px rgba(159, 33, 65, 0.12);
}

.root[data-variant='complete'] {
  padding: 30px;
  border-top: 3px solid var(--gob-cs-gold);
  background: #fff;
  box-shadow: 0 10px 28px rgba(24, 21, 17, 0.06);
}
.root[data-variant='complete'] .eyebrow {
  color: #8a6d3a;
  border-left-color: var(--gob-cs-gold);
}
.root[data-variant='complete'] .actions { display: flex; }
.root[data-variant='complete'] .action {
  background: var(--gob-cs-title);
}
.root[data-variant='complete'] .action:hover {
  background: #000;
  box-shadow: 0 10px 22px rgba(24, 21, 17, 0.2);
}
.root[data-variant='complete']:hover {
  box-shadow: 0 20px 44px rgba(24, 21, 17, 0.1);
}

@media (max-width: 720px) {
  .root { padding: 22px; border-radius: 18px; }
  .root[data-variant='split'] {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .root[data-variant='split'] .media {
    grid-column: 1;
    grid-row: auto;
    min-height: 140px;
    order: -1;
  }
  .title { max-width: none; }
}

@media (prefers-reduced-motion: reduce) {
  .root, .action, .action::after { transition: none !important; }
  .root:hover { transform: none; }
}
`;
