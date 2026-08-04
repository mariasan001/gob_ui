export const formStyles = `
:host {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-fm-vino: #9f2141;
  --gob-fm-vino-deep: #7a1832;
  --gob-fm-dorado: #bc945a;
  --gob-fm-title: #181511;
  --gob-fm-muted: #8a8278;
  --gob-fm-text: #3d3a35;
  --gob-fm-border: rgba(24, 21, 17, 0.1);
  --gob-fm-border-strong: rgba(24, 21, 17, 0.16);
  --gob-fm-bg: #ffffff;
  --gob-fm-fill: #f7f5f1;
  --gob-fm-radius: 16px;
  --gob-fm-gap: 16px;
  --gob-fm-cols: 1;
  --gob-fm-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*,
*::before,
*::after { box-sizing: border-box; }

[hidden] { display: none !important; }

.root {
  display: grid;
  gap: 18px;
  min-width: 0;
}

.head {
  display: grid;
  gap: 6px;
  min-width: 0;
}

.title {
  margin: 0;
  font-size: 17px;
  font-weight: 750;
  letter-spacing: -0.03em;
  color: var(--gob-fm-title);
  line-height: 1.25;
}

.description {
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: var(--gob-fm-muted);
  line-height: 1.45;
  max-width: 58ch;
}

.body {
  display: grid;
  grid-template-columns: repeat(var(--gob-fm-cols), minmax(0, 1fr));
  gap: var(--gob-fm-gap);
  min-width: 0;
  align-items: start;
}

.root[data-gap='sm'] { --gob-fm-gap: 10px; }
.root[data-gap='md'] { --gob-fm-gap: 16px; }
.root[data-gap='lg'] { --gob-fm-gap: 24px; }

.root[data-columns='1'] { --gob-fm-cols: 1; }
.root[data-columns='2'] { --gob-fm-cols: 2; }
.root[data-columns='3'] { --gob-fm-cols: 3; }

/* Single: clear editorial header */
.root[data-variant='single'] {
  gap: 20px;
}
.root[data-variant='single'] .head {
  padding-bottom: 14px;
  border-bottom: 1px solid var(--gob-fm-border);
}
.root[data-variant='single'] .title {
  font-size: 18px;
}

/* Dual / triple: airy grid */
.root[data-variant='dual'],
.root[data-variant='triple'] {
  --gob-fm-gap: 18px 20px;
}
.root[data-variant='dual'] .head,
.root[data-variant='triple'] .head {
  margin-bottom: 2px;
}

/* Stacked: generous vertical rhythm */
.root[data-variant='stacked'] {
  gap: 22px;
}
.root[data-variant='stacked'] .body {
  gap: 22px;
}

/* Dense: compact toolbar forms */
.root[data-variant='dense'] {
  gap: 12px;
  --gob-fm-gap: 10px;
}
.root[data-variant='dense'] .title {
  font-size: 14px;
  letter-spacing: -0.01em;
}
.root[data-variant='dense'] .description {
  font-size: 12px;
}

/* Soft: flat tint, no gradient */
.root[data-variant='soft'] {
  gap: 16px;
  padding: 18px;
  border-radius: var(--gob-fm-radius);
  background: color-mix(in srgb, var(--gob-fm-vino) 4%, #fff);
  border: 1px solid color-mix(in srgb, var(--gob-fm-vino) 12%, #ebe6df);
}
.root[data-variant='soft'] .title {
  color: var(--gob-fm-vino-deep);
}

/* Card: crisp surface, hairline border */
.root[data-variant='card'] {
  gap: 18px;
  padding: 22px;
  border-radius: calc(var(--gob-fm-radius) + 2px);
  background: var(--gob-fm-bg);
  border: 1px solid var(--gob-fm-border);
  box-shadow: 0 1px 0 rgba(24, 21, 17, 0.04);
}
.root[data-variant='card'] .head {
  padding-bottom: 14px;
  border-bottom: 1px solid var(--gob-fm-border);
}
.root[data-variant='card'] .actions {
  margin-top: 2px;
  padding-top: 16px;
  border-top: 1px solid var(--gob-fm-border);
}

/* Sections: rule dividers between fields */
.root[data-variant='sections'] {
  gap: 16px;
}
.root[data-variant='sections'] .head {
  padding-bottom: 12px;
  border-bottom: 2px solid var(--gob-fm-title);
}
.root[data-variant='sections'] .title {
  font-size: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 700;
}
.root[data-variant='sections'] .body {
  gap: 0;
}
.root[data-variant='sections'] ::slotted(*:not(:last-child)) {
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--gob-fm-border);
}

/* Complete: modern panel with dorado accent rail — flat colors only */
.root[data-variant='complete'] {
  gap: 18px;
  padding: 22px 22px 20px 20px;
  border-radius: calc(var(--gob-fm-radius) + 2px);
  background: var(--gob-fm-bg);
  border: 1px solid var(--gob-fm-border);
  border-left: 3px solid var(--gob-fm-dorado);
  box-shadow: none;
}
.root[data-variant='complete'] .head {
  display: grid;
  gap: 6px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--gob-fm-border);
}
.root[data-variant='complete'] .title {
  font-size: 18px;
}
.root[data-variant='complete'] .description {
  max-width: 52ch;
}
.root[data-variant='complete'] .actions {
  margin-top: 2px;
  padding-top: 16px;
  border-top: 1px solid var(--gob-fm-border);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  min-width: 0;
}

.actions ::slotted(*) {
  flex: 0 0 auto;
}

@media (max-width: 720px) {
  .root[data-columns='2'] .body,
  .root[data-columns='3'] .body,
  .root[data-variant='dual'] .body,
  .root[data-variant='triple'] .body {
    grid-template-columns: 1fr;
  }

  .root[data-variant='card'],
  .root[data-variant='soft'],
  .root[data-variant='complete'] {
    padding: 16px;
  }
}
`;
