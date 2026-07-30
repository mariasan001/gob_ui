export const topbarStyles = `
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  color: var(--gob-topbar-text, #6b665f);
  --gob-topbar-accent: #9f2141;
  --gob-topbar-accent-soft: rgba(159, 33, 65, 0.1);
  --gob-topbar-accent-text: #9f2141;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  min-height: var(--gob-topbar-height, 60px);
  padding: 0 18px;
  border-bottom: 1px solid var(--gob-topbar-border, rgba(24, 21, 17, 0.08));
  background:
    linear-gradient(180deg, #fff 0%, #fbfbfb 100%);
  color: var(--gob-topbar-text, #6b665f);
}

.root[data-sticky="true"] {
  position: sticky;
  top: 0;
  z-index: 3;
}

.root[data-variant="dense"] {
  --gob-topbar-height: 48px;
  padding: 0 14px;
  gap: 10px;
}

.root[data-variant="complete"],
.root[data-variant="search"] {
  grid-template-columns: minmax(0, 1.1fr) minmax(160px, 1.4fr) minmax(0, 1.1fr);
}

.start,
.center,
.end {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 10px;
}

.start {
  justify-content: flex-start;
}

.center {
  justify-content: center;
}

.end {
  justify-content: flex-end;
}

:host([tone='primary']),
:host(:not([tone])) {
  --gob-topbar-accent: #9f2141;
  --gob-topbar-accent-soft: rgba(159, 33, 65, 0.12);
  --gob-topbar-accent-text: #9f2141;
}

:host([tone='accent']) {
  --gob-topbar-accent: #bc945a;
  --gob-topbar-accent-soft: rgba(188, 148, 90, 0.18);
  --gob-topbar-accent-text: #8a6a35;
}

:host([tone='dark']) {
  --gob-topbar-accent: #181511;
  --gob-topbar-accent-soft: rgba(24, 21, 17, 0.1);
  --gob-topbar-accent-text: #181511;
}

:host([tone='neutral']) {
  --gob-topbar-accent: #9f2141;
  --gob-topbar-accent-soft: rgba(159, 33, 65, 0.12);
  --gob-topbar-accent-text: #9f2141;
}

:host([tone='soft']) {
  --gob-topbar-accent: #9f2141;
  --gob-topbar-accent-soft: rgba(159, 33, 65, 0.14);
  --gob-topbar-accent-text: #9f2141;
}

@media (max-width: 720px) {
  .root,
  .root[data-variant="complete"],
  .root[data-variant="search"] {
    grid-template-columns: minmax(0, 1fr) auto;
    min-height: 56px;
  }

  .center {
    display: none;
  }
}
`;
