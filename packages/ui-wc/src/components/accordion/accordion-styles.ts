export const accordionStyles = `
:host {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-ac-vino: #9f2141;
  --gob-ac-dorado: #bc945a;
  --gob-ac-title: #181511;
  --gob-ac-muted: #6f6a63;
  --gob-ac-border: rgba(24, 21, 17, 0.1);
  --gob-ac-bg: #ffffff;
  --gob-ac-fill: #f3f3f3;
  --gob-ac-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }

.root {
  display: grid;
  gap: 8px;
  width: 100%;
}

.item {
  border: 1px solid var(--gob-ac-border);
  border-radius: 14px;
  background: var(--gob-ac-bg);
  overflow: hidden;
}

.trigger {
  appearance: none;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
  min-height: 48px;
  padding: 12px 14px;
  border: 0;
  background: transparent;
  color: var(--gob-ac-title);
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.trigger:hover { background: color-mix(in srgb, var(--gob-ac-fill) 70%, #fff); }

.title {
  margin: 0;
  font-size: 14px;
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.icon {
  width: 18px;
  height: 18px;
  color: var(--gob-ac-muted);
  transition: transform 160ms var(--gob-ac-ease);
}
.icon svg { width: 18px; height: 18px; display: block; }
.item[data-open='true'] .icon { transform: rotate(180deg); color: var(--gob-ac-vino); }

.panel {
  display: none;
  padding: 0 14px 14px;
}
.item[data-open='true'] .panel { display: block; }

.body {
  margin: 0;
  padding: 12px 14px;
  border-radius: 12px;
  background: var(--gob-ac-fill);
  color: var(--gob-ac-title);
  font-size: 13px;
  font-weight: 550;
  line-height: 1.5;
}

.root[data-variant='soft'] .item {
  background: var(--gob-ac-fill);
  border-color: transparent;
}
.root[data-variant='soft'] .body { background: #fff; }

.root[data-variant='outline'] .item {
  border-color: color-mix(in srgb, var(--gob-ac-vino) 24%, #d7dde6);
}

.root[data-variant='dense'] { gap: 6px; }
.root[data-variant='dense'] .item { border-radius: 11px; }
.root[data-variant='dense'] .trigger { min-height: 40px; padding: 8px 12px; }
.root[data-variant='dense'] .title { font-size: 13px; }
.root[data-variant='dense'] .panel { padding: 0 12px 10px; }
.root[data-variant='dense'] .body { padding: 10px 12px; font-size: 12.5px; }

.root[data-variant='flush'] { gap: 0; }
.root[data-variant='flush'] .item {
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  border-top: 0;
}
.root[data-variant='flush'] .item:first-child { border-top: 1px solid var(--gob-ac-border); }

.root[data-variant='separated'] { gap: 12px; }

.root[data-variant='brand'] .item[data-open='true'] {
  border-color: color-mix(in srgb, var(--gob-ac-vino) 30%, #d7dde6);
}
.root[data-variant='brand'] .item[data-open='true'] .title { color: var(--gob-ac-vino); }

.root[data-variant='faq'] .title::before {
  content: 'P. ';
  color: var(--gob-ac-vino);
  font-weight: 800;
}

.root[data-variant='complete'] .item {
  border-left: 3px solid transparent;
}
.root[data-variant='complete'] .item[data-open='true'] {
  border-left-color: var(--gob-ac-dorado);
}

@media (prefers-reduced-motion: reduce) {
  .icon { transition: none !important; }
}
`;
