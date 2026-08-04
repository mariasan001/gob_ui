export const radioStyles = `
:host {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-family: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-rd-vino: #9f2141;
  --gob-rd-vino-deep: #7a1832;
  --gob-rd-dorado: #bc945a;
  --gob-rd-dorado-soft: #d4b57e;
  --gob-rd-cafe: #8a6a3d;
  --gob-rd-title: #181511;
  --gob-rd-muted: #8a8278;
  --gob-rd-text: #3d3a35;
  --gob-rd-border: color-mix(in srgb, var(--gob-rd-dorado) 28%, rgba(24, 21, 17, 0.12));
  --gob-rd-focus: var(--gob-rd-vino);
  --gob-rd-ring: rgba(159, 33, 65, 0.2);
  --gob-rd-ring-gold: rgba(188, 148, 90, 0.28);
  --gob-rd-dot: 20px;
  --gob-rd-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

*,
*::before,
*::after { box-sizing: border-box; }

[hidden] { display: none !important; }

.root {
  display: grid;
  gap: 8px;
  min-width: 0;
}

.root[data-size='sm'] { --gob-rd-dot: 18px; }
.root[data-size='lg'] { --gob-rd-dot: 24px; }

.root[data-status='error'] { --gob-rd-focus: #c62828; --gob-rd-ring: rgba(198,40,40,.16); --gob-rd-ring-gold: rgba(198,40,40,.12); }
.root[data-status='success'] { --gob-rd-focus: #1f8a55; --gob-rd-ring: rgba(31,138,85,.16); --gob-rd-ring-gold: rgba(31,138,85,.12); }
.root[data-status='warning'] { --gob-rd-focus: #d0921a; --gob-rd-ring: rgba(208,146,26,.18); --gob-rd-ring-gold: rgba(188,148,90,.22); }
.root[data-status='info'] { --gob-rd-focus: #2f5f8a; --gob-rd-ring: rgba(47,95,138,.16); --gob-rd-ring-gold: rgba(47,95,138,.12); }

.control {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 12px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  color: var(--gob-rd-text);
}

.root[data-disabled='true'] .control {
  cursor: not-allowed;
  opacity: 0.72;
}

input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin: 0;
  pointer-events: none;
}

.dot {
  flex: 0 0 auto;
  width: var(--gob-rd-dot);
  height: var(--gob-rd-dot);
  margin-top: 1px;
  border-radius: 999px;
  border: 1.75px solid var(--gob-rd-border);
  background:
    radial-gradient(circle at 35% 30%, rgba(255,255,255,.9), transparent 55%),
    linear-gradient(160deg, #fff 0%, #faf7f2 100%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.8);
  transition:
    border-color 180ms var(--gob-rd-ease),
    background 180ms var(--gob-rd-ease),
    box-shadow 180ms var(--gob-rd-ease),
    transform 180ms var(--gob-rd-ease);
}

.dot::after {
  content: "";
  width: calc(var(--gob-rd-dot) * 0.42);
  height: calc(var(--gob-rd-dot) * 0.42);
  border-radius: 999px;
  background:
    radial-gradient(circle at 35% 30%, var(--gob-rd-dorado-soft), transparent 55%),
    linear-gradient(160deg, var(--gob-rd-vino) 0%, var(--gob-rd-vino-deep) 100%);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--gob-rd-dorado) 35%, transparent);
  transform: scale(0);
  transition: transform 200ms var(--gob-rd-ease);
}

.control:hover .dot {
  border-color: color-mix(in srgb, var(--gob-rd-dorado) 70%, var(--gob-rd-vino));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.85),
    0 0 0 3px var(--gob-rd-ring-gold);
}

.root[data-checked='true'] .dot {
  border-color: var(--gob-rd-focus);
  background:
    radial-gradient(circle at 35% 30%, rgba(255,255,255,.55), transparent 50%),
    linear-gradient(160deg, color-mix(in srgb, var(--gob-rd-focus) 12%, #fff) 0%, #fff 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.7),
    0 0 0 3px var(--gob-rd-ring),
    0 0 0 6px color-mix(in srgb, var(--gob-rd-dorado) 18%, transparent);
  transform: scale(1.05);
}

.root[data-checked='true'] .dot::after {
  transform: scale(1);
}

input:focus-visible + .dot {
  box-shadow:
    0 0 0 4px var(--gob-rd-ring),
    0 0 0 7px var(--gob-rd-ring-gold);
  border-color: var(--gob-rd-focus);
}

.copy {
  min-width: 0;
  display: grid;
  gap: 2px;
  padding-top: 1px;
}

.label {
  margin: 0;
  font-size: 14px;
  font-weight: 650;
  letter-spacing: -0.01em;
  color: var(--gob-rd-title);
  line-height: 1.3;
}

.root[data-checked='true'] .label {
  color: color-mix(in srgb, var(--gob-rd-vino-deep) 55%, var(--gob-rd-title));
}

.label .req {
  color: var(--gob-rd-vino);
  margin-left: 2px;
}

.description {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-rd-muted);
  line-height: 1.4;
}

.helper {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-rd-muted);
  line-height: 1.35;
  padding-left: calc(var(--gob-rd-dot) + 12px);
}

.root[data-status='error'] .helper { color: #c62828; }
.root[data-status='success'] .helper { color: #1f8a55; }
.root[data-status='warning'] .helper { color: #a87412; }
.root[data-status='info'] .helper { color: #2f5f8a; }

.pill-status {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: linear-gradient(135deg, rgba(159,33,65,.12), rgba(188,148,90,.16));
  color: var(--gob-rd-vino);
  border: 1px solid color-mix(in srgb, var(--gob-rd-dorado) 35%, transparent);
}
.root[data-status='error'] .pill-status { background: rgba(198,40,40,.12); color: #c62828; border-color: transparent; }
.root[data-status='success'] .pill-status { background: rgba(31,138,85,.14); color: #1f8a55; border-color: transparent; }
.root[data-status='warning'] .pill-status { background: rgba(208,146,26,.16); color: #a87412; border-color: transparent; }
.root[data-status='info'] .pill-status { background: rgba(47,95,138,.12); color: #2f5f8a; border-color: transparent; }

.root[data-variant='dense'] { gap: 6px; }
.root[data-variant='dense'] .control { gap: 8px; }
.root[data-variant='dense'] .label { font-size: 13px; }

.root[data-variant='soft'] .control,
.root[data-variant='card'] .control,
.root[data-variant='pill'] .control,
.root[data-variant='tile'] .control,
.root[data-variant='complete'] .control {
  padding: 12px 14px;
  border-radius: 14px;
  border: 1.5px solid transparent;
  transition:
    background 180ms var(--gob-rd-ease),
    border-color 180ms var(--gob-rd-ease),
    box-shadow 180ms var(--gob-rd-ease);
}

.root[data-variant='soft'] .control {
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--gob-rd-vino) 7%, #fff), color-mix(in srgb, var(--gob-rd-dorado) 8%, #fff));
  border-color: color-mix(in srgb, var(--gob-rd-dorado) 22%, transparent);
}
.root[data-variant='soft'] .control:hover {
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--gob-rd-vino) 11%, #fff), color-mix(in srgb, var(--gob-rd-dorado) 12%, #fff));
  border-color: color-mix(in srgb, var(--gob-rd-dorado) 40%, transparent);
}
.root[data-variant='soft'][data-checked='true'] .control {
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--gob-rd-vino) 14%, #fff), color-mix(in srgb, var(--gob-rd-dorado) 10%, #fff));
  border-color: color-mix(in srgb, var(--gob-rd-vino) 40%, var(--gob-rd-dorado));
  box-shadow: inset 3px 0 0 var(--gob-rd-vino);
}

.root[data-variant='card'] .control {
  background:
    radial-gradient(90% 80% at 100% 0%, rgba(188,148,90,.1), transparent 55%),
    #fff;
  border-color: color-mix(in srgb, var(--gob-rd-dorado) 18%, rgba(24,21,17,.08));
}
.root[data-variant='card'] .control:hover {
  border-color: color-mix(in srgb, var(--gob-rd-vino) 40%, var(--gob-rd-dorado));
}
.root[data-variant='card'][data-checked='true'] .control {
  border-color: var(--gob-rd-focus);
  background:
    radial-gradient(90% 80% at 100% 0%, rgba(188,148,90,.16), transparent 55%),
    color-mix(in srgb, var(--gob-rd-vino) 4%, #fff);
  box-shadow:
    0 0 0 3px var(--gob-rd-ring),
    0 8px 20px rgba(159, 33, 65, 0.08);
}

.root[data-variant='pill'] .control {
  border-radius: 999px;
  background:
    linear-gradient(180deg, #fbf8f3, color-mix(in srgb, var(--gob-rd-dorado) 10%, #fff));
  border-color: color-mix(in srgb, var(--gob-rd-dorado) 28%, transparent);
  align-items: center;
}
.root[data-variant='pill'] .dot { margin-top: 0; }
.root[data-variant='pill'] .control:hover {
  border-color: color-mix(in srgb, var(--gob-rd-vino) 35%, var(--gob-rd-dorado));
}
.root[data-variant='pill'][data-checked='true'] .control {
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--gob-rd-vino) 12%, #fff), color-mix(in srgb, var(--gob-rd-dorado) 14%, #fff));
  border-color: color-mix(in srgb, var(--gob-rd-vino) 45%, var(--gob-rd-dorado));
  box-shadow: 0 0 0 3px var(--gob-rd-ring-gold);
}

.root[data-variant='tile'] .control {
  grid-template-columns: 1fr auto;
  background:
    linear-gradient(115deg, color-mix(in srgb, var(--gob-rd-vino) 6%, #fff) 0%, transparent 42%),
    radial-gradient(120% 90% at 100% 0%, rgba(188,148,90,.18), transparent 52%),
    #fff;
  border-color: color-mix(in srgb, var(--gob-rd-dorado) 30%, rgba(24,21,17,.08));
}
.root[data-variant='tile'] .dot { order: 2; margin-top: 0; align-self: center; }
.root[data-variant='tile'] .copy { order: 1; }
.root[data-variant='tile'] .control:hover {
  border-color: color-mix(in srgb, var(--gob-rd-dorado) 65%, var(--gob-rd-vino));
}
.root[data-variant='tile'][data-checked='true'] .control {
  border-color: var(--gob-rd-dorado);
  background:
    linear-gradient(115deg, color-mix(in srgb, var(--gob-rd-vino) 10%, #fff) 0%, transparent 45%),
    radial-gradient(120% 90% at 100% 0%, rgba(188,148,90,.28), transparent 52%),
    #fff;
  box-shadow:
    0 0 0 3px var(--gob-rd-ring-gold),
    inset 3px 0 0 var(--gob-rd-vino);
}
.root[data-variant='tile'][data-checked='true'] .dot {
  border-color: var(--gob-rd-dorado);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.7),
    0 0 0 3px var(--gob-rd-ring-gold),
    0 0 0 6px color-mix(in srgb, var(--gob-rd-vino) 12%, transparent);
}
.root[data-variant='tile'][data-checked='true'] .dot::after {
  background:
    radial-gradient(circle at 35% 30%, #e8d4ad, transparent 55%),
    linear-gradient(160deg, var(--gob-rd-dorado) 0%, var(--gob-rd-cafe) 100%);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--gob-rd-vino) 25%, transparent);
}

.root[data-variant='complete'] .control {
  background:
    radial-gradient(80% 70% at 0% 100%, rgba(159,33,65,.06), transparent 55%),
    radial-gradient(90% 80% at 100% 0%, rgba(188,148,90,.12), transparent 55%),
    #fff;
  border-color: color-mix(in srgb, var(--gob-rd-dorado) 22%, rgba(24,21,17,.08));
}
.root[data-variant='complete'] .control:hover {
  border-color: color-mix(in srgb, var(--gob-rd-vino) 35%, var(--gob-rd-dorado));
}
.root[data-variant='complete'][data-checked='true'] .control {
  border-color: color-mix(in srgb, var(--gob-rd-vino) 70%, var(--gob-rd-dorado));
  box-shadow:
    0 0 0 3px var(--gob-rd-ring),
    0 0 0 6px color-mix(in srgb, var(--gob-rd-dorado) 16%, transparent);
}

.root[data-variant='soft'] .helper,
.root[data-variant='card'] .helper,
.root[data-variant='pill'] .helper,
.root[data-variant='tile'] .helper,
.root[data-variant='complete'] .helper {
  padding-left: 14px;
}

.root[data-disabled='true'][data-checked='true'] .dot {
  border-color: color-mix(in srgb, var(--gob-rd-focus) 35%, #ebe6df);
  box-shadow: none;
}
.root[data-disabled='true'][data-checked='true'] .dot::after {
  background: color-mix(in srgb, var(--gob-rd-focus) 40%, #ebe6df);
  box-shadow: none;
}
`;
