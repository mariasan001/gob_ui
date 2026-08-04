export const modalStyles = `
:host {
  display: contents;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-md-vino: #9f2141;
  --gob-md-vino-deep: #7a1832;
  --gob-md-dorado: #bc945a;
  --gob-md-title: #181511;
  --gob-md-muted: #6f6a63;
  --gob-md-border: rgba(24, 21, 17, 0.1);
  --gob-md-bg: #ffffff;
  --gob-md-fill: #f3f3f3;
  --gob-md-width: 420px;
  --gob-md-radius: 20px;
  --gob-md-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*, *::before, *::after { box-sizing: border-box; }
[hidden] { display: none !important; }

.backdrop {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(24, 21, 17, 0.42);
}

:host([open]) .backdrop { display: flex; }

.dialog {
  position: relative;
  display: grid;
  gap: 16px;
  width: min(var(--gob-md-width), 100%);
  padding: 22px;
  border-radius: var(--gob-md-radius);
  border: 1px solid var(--gob-md-border);
  background: var(--gob-md-bg);
  box-shadow:
    0 1px 0 rgba(24, 21, 17, 0.04),
    0 24px 48px rgba(24, 21, 17, 0.18);
  animation: gob-md-in 180ms var(--gob-md-ease);
}

:host([data-size='sm']),
.backdrop[data-size='sm'] .dialog { --gob-md-width: 360px; }
.backdrop[data-size='lg'] .dialog { --gob-md-width: 560px; }
.backdrop[data-variant='wide'] .dialog { --gob-md-width: 640px; }
.backdrop[data-variant='dense'] .dialog {
  gap: 12px;
  padding: 16px;
  border-radius: 16px;
}
.backdrop[data-variant='complete'] .dialog {
  border-left: 3px solid var(--gob-md-dorado);
}
.backdrop[data-variant='sheet'] {
  align-items: flex-end;
  padding: 0;
}
.backdrop[data-variant='sheet'] .dialog {
  width: 100%;
  max-width: 100%;
  border-radius: 20px 20px 0 0;
}

.head {
  display: grid;
  gap: 6px;
  padding-right: 28px;
}

.title {
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--gob-md-title);
  line-height: 1.2;
}

.description {
  margin: 0;
  font-size: 13.5px;
  font-weight: 500;
  line-height: 1.45;
  color: var(--gob-md-muted);
}

.close {
  appearance: none;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--gob-md-muted);
  cursor: pointer;
}
.close:hover {
  background: var(--gob-md-fill);
  color: var(--gob-md-title);
}
.close svg { width: 14px; height: 14px; display: block; }

.body {
  padding: 12px 14px;
  border-radius: 14px;
  background: var(--gob-md-fill);
  color: var(--gob-md-title);
  font-size: 13px;
  font-weight: 550;
  line-height: 1.45;
}

.actions {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;
}

.btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid transparent;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.015em;
  cursor: pointer;
  transition: background 150ms var(--gob-md-ease), color 150ms var(--gob-md-ease), border-color 150ms var(--gob-md-ease);
}

.cancel {
  background: #fff;
  border-color: var(--gob-md-border);
  color: var(--gob-md-title);
}
.cancel:hover {
  background: var(--gob-md-fill);
}

.confirm {
  background: var(--gob-md-vino);
  color: #fff;
}
.confirm:hover { background: var(--gob-md-vino-deep); }

.backdrop[data-variant='danger'] .confirm {
  background: #c62828;
}
.backdrop[data-variant='danger'] .confirm:hover { background: #a51f1f; }

.backdrop[data-variant='success'] .confirm {
  background: #1f8a55;
}
.backdrop[data-variant='success'] .confirm:hover { background: #187246; }

@keyframes gob-md-in {
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
`;
