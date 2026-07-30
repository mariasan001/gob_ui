export const sidebarStyles = `
:host {
  display: block;
  width: var(--gob-sidebar-width, 248px);
  height: 100%;
  min-height: inherit;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  color: var(--gob-sidebar-text, #6b665f);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 16px;
  height: 100%;
  min-height: inherit;
  padding: 16px 12px 12px;
  border-right: 1px solid var(--gob-sidebar-border, rgba(24, 21, 17, 0.1));
  background: var(--gob-sidebar-bg, #fff);
  color: var(--gob-sidebar-text, #6b665f);
}

.root[data-collapsed="true"],
.root[data-variant="collapsed"] {
  width: var(--gob-sidebar-collapsed-width, 72px);
  padding-inline: 8px;
  justify-items: center;
}

:host([collapsed]),
:host([variant="collapsed"]) {
  width: var(--gob-sidebar-collapsed-width, 72px);
}

.root[data-variant="dense"] {
  gap: 10px;
  padding: 12px 10px 10px;
  --gob-sidebar-width: 220px;
}

:host([variant="dense"]) {
  width: var(--gob-sidebar-width, 220px);
}

.root[data-variant="brand"] {
  gap: 18px;
  padding-top: 18px;
}

.brand {
  min-width: 0;
}

.nav {
  display: grid;
  gap: 4px;
  align-content: start;
  min-height: 0;
  overflow: auto;
}

.footer {
  min-width: 0;
}

.root[data-collapsed="true"] .brand,
.root[data-variant="collapsed"] .brand,
.root[data-collapsed="true"] .footer,
.root[data-variant="collapsed"] .footer {
  width: 100%;
  display: grid;
  justify-items: center;
}

/* Tones — vars en :host para que el contenido slotted las herede */
:host([tone='primary']),
:host(:not([tone])) {
  --gob-sidebar-bg: #9f2141;
  --gob-sidebar-text: rgba(255, 255, 255, 0.82);
  --gob-sidebar-muted: rgba(255, 255, 255, 0.55);
  --gob-sidebar-active-bg: rgba(255, 255, 255, 0.18);
  --gob-sidebar-active-text: #fff;
  --gob-sidebar-border: rgba(255, 255, 255, 0.12);
  --gob-sidebar-accent: #9f2141;
}

:host([tone='accent']) {
  --gob-sidebar-bg: #f4ebe0;
  --gob-sidebar-text: #5c5348;
  --gob-sidebar-muted: #8a8278;
  --gob-sidebar-active-bg: rgba(188, 148, 90, 0.28);
  --gob-sidebar-active-text: #7a5a2e;
  --gob-sidebar-border: rgba(24, 21, 17, 0.08);
  --gob-sidebar-accent: #bc945a;
}

:host([tone='dark']) {
  --gob-sidebar-bg: #181511;
  --gob-sidebar-text: rgba(255, 255, 255, 0.78);
  --gob-sidebar-muted: rgba(255, 255, 255, 0.48);
  --gob-sidebar-active-bg: rgba(255, 255, 255, 0.12);
  --gob-sidebar-active-text: #fff;
  --gob-sidebar-border: rgba(255, 255, 255, 0.1);
  --gob-sidebar-accent: #181511;
}

:host([tone='neutral']) {
  --gob-sidebar-bg: #fff;
  --gob-sidebar-text: #6b665f;
  --gob-sidebar-muted: #9a9590;
  --gob-sidebar-active-bg: rgba(159, 33, 65, 0.1);
  --gob-sidebar-active-text: #9f2141;
  --gob-sidebar-border: rgba(24, 21, 17, 0.1);
  --gob-sidebar-accent: #9f2141;
}

:host([tone='soft']) {
  --gob-sidebar-bg: #e7d7bd;
  --gob-sidebar-text: #4a4033;
  --gob-sidebar-muted: #7a6f60;
  --gob-sidebar-active-bg: rgba(159, 33, 65, 0.12);
  --gob-sidebar-active-text: #9f2141;
  --gob-sidebar-border: rgba(24, 21, 17, 0.1);
  --gob-sidebar-accent: #9f2141;
}

::slotted([data-active="true"]),
::slotted(.is-active) {
  background: var(--gob-sidebar-active-bg, rgba(159, 33, 65, 0.1)) !important;
  color: var(--gob-sidebar-active-text, #9f2141) !important;
}

::slotted(a),
::slotted(button),
::slotted([data-nav]) {
  color: inherit;
}
`;
