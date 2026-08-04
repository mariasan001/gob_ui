export const userMenuStyles = `
:host {
  display: inline-flex;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-um-vino: #9f2141;
  --gob-um-dorado: #bc945a;
  --gob-um-title: #181511;
  --gob-um-muted: #6f6a63;
  --gob-um-border: rgba(24, 21, 17, 0.1);
  --gob-um-bg: #ffffff;
  --gob-um-fill: #f3f3f3;
  --gob-um-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }

.root { position: relative; display: inline-flex; }

.trigger {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  padding: 0 12px 0 8px;
  border-radius: 12px;
  border: 1px solid var(--gob-um-border);
  background: #fff;
  color: var(--gob-um-title);
  font: inherit;
  cursor: pointer;
  transition: background 140ms var(--gob-um-ease), border-color 140ms var(--gob-um-ease);
}
.trigger:hover { background: var(--gob-um-fill); }
.root[data-open='true'] .trigger {
  border-color: color-mix(in srgb, var(--gob-um-vino) 28%, #d7dde6);
}

.avatar {
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: color-mix(in srgb, var(--gob-um-vino) 12%, #fff);
  color: var(--gob-um-vino);
  font-size: 11px;
  font-weight: 780;
  letter-spacing: -0.02em;
}

.copy { display: grid; gap: 1px; text-align: left; min-width: 0; }
.name {
  margin: 0;
  font-size: 12.5px;
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.role {
  margin: 0;
  font-size: 11.5px;
  font-weight: 500;
  color: var(--gob-um-muted);
  line-height: 1.2;
}

.caret {
  width: 12px;
  height: 12px;
  opacity: 0.5;
  transition: transform 150ms var(--gob-um-ease);
}
.caret svg { width: 12px; height: 12px; display: block; }
.root[data-open='true'] .caret { transform: rotate(180deg); }

.panel {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 24;
  width: min(260px, 82vw);
  padding: 10px;
  border-radius: 14px;
  border: 1px solid var(--gob-um-border);
  background: var(--gob-um-bg);
  box-shadow:
    0 1px 0 rgba(24, 21, 17, 0.04),
    0 14px 32px rgba(24, 21, 17, 0.14);
  opacity: 0;
  pointer-events: none;
  transform: translateY(4px) scale(0.98);
  transition: opacity 150ms var(--gob-um-ease), transform 150ms var(--gob-um-ease);
}
.root[data-open='true'] .panel {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}

.profile {
  display: grid;
  gap: 2px;
  padding: 8px 10px 10px;
  margin-bottom: 6px;
  border-radius: 11px;
  background: var(--gob-um-fill);
}
.profile-name {
  margin: 0;
  font-size: 13.5px;
  font-weight: 750;
  letter-spacing: -0.02em;
}
.profile-email {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-um-muted);
}

.menu { display: grid; gap: 2px; }
.item {
  display: flex;
  align-items: center;
  min-height: 34px;
  padding: 0 10px;
  border-radius: 10px;
  font-size: 12.5px;
  font-weight: 650;
  color: var(--gob-um-title);
}
.item:hover { background: var(--gob-um-fill); }
.item[data-danger='true'] { color: #c62828; }
.item[data-danger='true']:hover {
  background: color-mix(in srgb, #c62828 8%, #fff);
}

.divider {
  height: 1px;
  margin: 6px 4px;
  background: rgba(24, 21, 17, 0.08);
}

.root[data-variant='soft'] .trigger { background: var(--gob-um-fill); border-color: transparent; }
.root[data-variant='compact'] .copy,
.root[data-variant='dense'] .copy { display: none; }
.root[data-variant='compact'] .trigger,
.root[data-variant='dense'] .trigger { padding: 0 8px; min-height: 36px; }
.root[data-variant='elevated'] .panel {
  box-shadow:
    0 1px 0 rgba(24, 21, 17, 0.04),
    0 18px 40px rgba(24, 21, 17, 0.16);
}
.root[data-variant='outline'] .trigger {
  border-color: color-mix(in srgb, var(--gob-um-vino) 28%, #d7dde6);
}
.root[data-variant='brand'] .avatar {
  background: var(--gob-um-vino);
  color: #fff;
}
.root[data-variant='status'] .avatar {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #1f8a55;
}
.root[data-variant='wide'] .panel { width: min(300px, 86vw); }
.root[data-variant='complete'] .panel {
  border-left: 3px solid var(--gob-um-dorado);
}

@media (prefers-reduced-motion: reduce) {
  .panel, .caret { transition: none !important; }
}
`;
