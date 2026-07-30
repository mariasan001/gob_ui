export const appShellStyles = `
:host {
  display: block;
  width: 100%;
  min-height: 100%;
  color: var(--gob-text, #181511);
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  display: grid;
  grid-template-columns: var(--gob-shell-sidebar-width, 248px) minmax(0, 1fr);
  min-height: inherit;
  background: var(--gob-bg, #fafafa);
}

.root[data-collapsed="true"] {
  grid-template-columns: var(--gob-shell-sidebar-collapsed-width, 72px) minmax(0, 1fr);
}

.sidebar {
  position: sticky;
  top: 0;
  align-self: start;
  height: 100vh;
  overflow: auto;
  border-right: 1px solid var(--gob-border, rgba(24, 21, 17, 0.1));
  background: var(--gob-surface, #fff);
}

.column {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  min-width: 0;
  min-height: 100vh;
}

.topbar {
  z-index: 2;
  border-bottom: 1px solid var(--gob-border, rgba(24, 21, 17, 0.1));
  background: var(--gob-surface, #fff);
}

.topbar[data-sticky="true"] {
  position: sticky;
  top: 0;
}

.content {
  min-width: 0;
  padding: var(--gob-shell-content-padding, 24px);
}

@media (max-width: 900px) {
  .root,
  .root[data-collapsed="true"] {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: relative;
    height: auto;
    border-right: 0;
    border-bottom: 1px solid var(--gob-border, rgba(24, 21, 17, 0.1));
  }

  .column {
    min-height: 0;
  }
}
`;
