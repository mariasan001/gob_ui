export const dataGridStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-dg-bg: #ffffff;
  --gob-dg-border: rgba(24, 21, 17, 0.1);
  --gob-dg-title: #181511;
  --gob-dg-muted: #8a8278;
  --gob-dg-accent: #9f2141;
  --gob-dg-radius: 16px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  display: grid;
  gap: 0;
  min-width: 0;
  border: 1px solid var(--gob-dg-border);
  border-radius: var(--gob-dg-radius);
  background: var(--gob-dg-bg);
  overflow: hidden;
}

.head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(24, 21, 17, 0.08);
}

.headText {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.title {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: var(--gob-dg-title);
}

.subtitle {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-dg-muted);
}

.actions {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
}

.filters {
  display: none;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(24, 21, 17, 0.08);
  background: #fafafa;
  flex-wrap: wrap;
  align-items: center;
}

.bulk {
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 16px;
  border-bottom: 1px solid rgba(24, 21, 17, 0.08);
  background: color-mix(in srgb, var(--gob-dg-accent) 8%, #fff);
  color: var(--gob-dg-title);
  font-size: 12px;
  font-weight: 600;
}

.scroll {
  overflow: auto;
  max-width: 100%;
  max-height: 320px;
}

.foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 16px;
  border-top: 1px solid rgba(24, 21, 17, 0.08);
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-dg-muted);
  background: #fafafa;
}

.root[data-variant='filters'] .filters,
.root[data-variant='column-filter'] .filters,
.root[data-variant='toolbar'] .filters,
.root[data-variant='wide'] .filters {
  display: flex;
}

.root[data-variant='bulk'] .bulk {
  display: flex;
}

.root[data-variant='filters'] .subtitle,
.root[data-variant='frozen-left'] .filters,
.root[data-variant='frozen-right'] .filters,
.root[data-variant='frozen-right'] .bulk,
.root[data-variant='expandable'] .filters,
.root[data-variant='expandable'] .bulk,
.root[data-variant='grouped'] .filters,
.root[data-variant='grouped'] .bulk,
.root[data-variant='paginated'] .filters,
.root[data-variant='paginated'] .bulk {
  display: none;
}

.root[data-variant='frozen-left'] .actions,
.root[data-variant='expandable'] .actions,
.root[data-variant='grouped'] .actions {
  display: none;
}

:host([tone='primary']),
:host(:not([tone])),
.root[data-tone='primary'] {
  --gob-dg-accent: #9f2141;
}

:host([tone='accent']),
.root[data-tone='accent'] {
  --gob-dg-accent: #bc945a;
}

:host([tone='dark']),
.root[data-tone='dark'] {
  --gob-dg-accent: #181511;
}

:host([tone='neutral']),
.root[data-tone='neutral'] {
  --gob-dg-accent: #6b655c;
}

:host([tone='soft']),
.root[data-tone='soft'] {
  --gob-dg-accent: #a67c52;
}
`;
