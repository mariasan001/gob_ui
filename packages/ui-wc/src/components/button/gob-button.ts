const css = `
:host{display:inline-block}

/* Base */
button{
  appearance:none;
  border:1px solid var(--gob-border);
  border-radius:var(--gob-radius-md);
  padding:10px 14px;

  font:inherit;
  font-weight:700;
  line-height:1;
  cursor:pointer;

  display:inline-flex;
  align-items:center;
  justify-content:center;

  transition:
    transform .08s ease,
    box-shadow .12s ease,
    background .12s ease,
    border-color .12s ease,
    opacity .12s ease,
    filter .12s ease;

  user-select:none;

  background:var(--gob-panel);
  color:var(--gob-text);
}

button:active{transform:translateY(1px)}
button:focus-visible{outline:none; box-shadow:var(--gob-focus)}
button:disabled{cursor:not-allowed; opacity:.55}

/* Content layout */
.content{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
}

.icon{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  line-height:0;
}

.label{
  display:inline-flex;
  align-items:center;
}

/* slot styling */
slot[name="icon"]::slotted(*){display:inline-flex; align-items:center}

/* Icon position */
button[data-icon-pos="right"] .content{flex-direction:row-reverse}

/* Icon-only */
button[data-icon-only="true"]{
  padding:10px;
  width:42px;
  height:42px;
}
button[data-icon-only="true"] .label{display:none}

/* Sizes */
button[data-size="sm"]{padding:8px 12px; font-size:14px}
button[data-size="md"]{padding:10px 14px; font-size:15px}
button[data-size="lg"]{padding:12px 16px; font-size:16px}
button[data-size="sm"][data-icon-only="true"]{width:38px; height:38px; padding:8px}
button[data-size="lg"][data-icon-only="true"]{width:46px; height:46px; padding:12px}

/* ====== Theme engine: tone + appearance ====== */
button{
  --btn-bg: transparent;
  --btn-fg: var(--gob-text);
  --btn-border: var(--gob-border);
  --btn-hover-bg: rgba(10,10,10,.06);
  --btn-shadow: none;

  background: var(--btn-bg);
  color: var(--btn-fg);
  border-color: var(--btn-border);
  box-shadow: var(--btn-shadow);
}

button:not(:disabled):hover{
  background: var(--btn-hover-bg);
}

/* appearance = solid */
button[data-appearance="solid"][data-tone="primary"]{
  --btn-bg: var(--gob-primary);
  --btn-fg: var(--gob-primary-contrast);
  --btn-border: transparent;
  --btn-hover-bg: var(--gob-primary-hover);
  --btn-shadow: var(--gob-shadow-sm);
}

button[data-appearance="solid"][data-tone="accent"]{
  --btn-bg: var(--gob-accent);
  --btn-fg: var(--gob-text);
  --btn-border: transparent;
  --btn-hover-bg: rgba(188,148,90,.88);
  --btn-shadow: var(--gob-shadow-sm);
}

button[data-appearance="solid"][data-tone="dark"]{
  --btn-bg: var(--gob-text);
  --btn-fg: #fff;
  --btn-border: transparent;
  --btn-hover-bg: rgba(10,10,10,.88);
  --btn-shadow: var(--gob-shadow-sm);
}

button[data-appearance="solid"][data-tone="neutral"]{
  --btn-bg: var(--gob-panel);
  --btn-fg: var(--gob-text);
  --btn-border: var(--gob-border);
  --btn-hover-bg: rgba(10,10,10,.03);
  --btn-shadow: none;
}

button[data-appearance="solid"][data-tone="soft"]{
  --btn-bg: var(--gob-soft);
  --btn-fg: var(--gob-text);
  --btn-border: transparent;
  --btn-hover-bg: rgba(221,199,162,.92);
  --btn-shadow: none;
}

/* appearance = outline */
button[data-appearance="outline"]{
  --btn-bg: transparent;
  --btn-shadow: none;
}
button[data-appearance="outline"][data-tone="primary"]{
  --btn-fg: var(--gob-primary);
  --btn-border: rgba(159,33,65,.45);
  --btn-hover-bg: rgba(159,33,65,.08);
}
button[data-appearance="outline"][data-tone="accent"]{
  --btn-fg: var(--gob-accent);
  --btn-border: rgba(188,148,90,.55);
  --btn-hover-bg: rgba(188,148,90,.10);
}
button[data-appearance="outline"][data-tone="dark"]{
  --btn-fg: var(--gob-text);
  --btn-border: rgba(10,10,10,.45);
  --btn-hover-bg: rgba(10,10,10,.06);
}
button[data-appearance="outline"][data-tone="neutral"]{
  --btn-fg: var(--gob-text);
  --btn-border: var(--gob-border);
  --btn-hover-bg: rgba(10,10,10,.04);
}
button[data-appearance="outline"][data-tone="soft"]{
  --btn-fg: var(--gob-text);
  --btn-border: rgba(221,199,162,.75);
  --btn-hover-bg: rgba(221,199,162,.22);
}

/* appearance = ghost */
button[data-appearance="ghost"]{
  --btn-border: transparent;
}
button[data-appearance="ghost"][data-tone="primary"]{
  --btn-fg: var(--gob-primary);
  --btn-hover-bg: rgba(159,33,65,.10);
}
button[data-appearance="ghost"][data-tone="accent"]{
  --btn-fg: var(--gob-accent);
  --btn-hover-bg: rgba(188,148,90,.12);
}
button[data-appearance="ghost"][data-tone="dark"],
button[data-appearance="ghost"][data-tone="neutral"],
button[data-appearance="ghost"][data-tone="soft"]{
  --btn-fg: var(--gob-text);
  --btn-hover-bg: rgba(10,10,10,.06);
}

/* Spinner */
.spinner{
  width:14px; height:14px; border-radius:999px;
  border:2px solid currentColor; border-right-color:transparent;
  animation:spin .8s linear infinite; opacity:.9;
  flex:0 0 auto;
}
@keyframes spin{to{transform:rotate(360deg)}}
`;

// ✅ SSR-safe
const canUseDom =
  typeof window !== 'undefined' &&
  typeof customElements !== 'undefined' &&
  typeof HTMLElement !== 'undefined';

if (canUseDom && !customElements.get('gob-button')) {
  class GobButton extends HTMLElement {
    static get observedAttributes() {
      return [
        'tone',
        'appearance',
        'size',
        'loading',
        'disabled',
        'type',
        'icon-only',
        'icon-position',
      ];
    }

    private _btn: HTMLButtonElement;
    private _iconSlot: HTMLSlotElement;
    private _labelSlot: HTMLSlotElement;

    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = css;

      this._btn = document.createElement('button');

      const t = this.getAttribute('type');
      const safeType: 'button' | 'submit' | 'reset' =
        t === 'submit' || t === 'reset' || t === 'button' ? t : 'button';
      this._btn.type = safeType;

      const content = document.createElement('span');
      content.className = 'content';

      const iconWrap = document.createElement('span');
      iconWrap.className = 'icon';

      this._iconSlot = document.createElement('slot');
      this._iconSlot.name = 'icon';
      iconWrap.appendChild(this._iconSlot);

      const labelWrap = document.createElement('span');
      labelWrap.className = 'label';

      this._labelSlot = document.createElement('slot');
      labelWrap.appendChild(this._labelSlot);

      content.append(iconWrap, labelWrap);
      this._btn.appendChild(content);

      shadow.append(style, this._btn);
    }

    connectedCallback() {
      this._sync();
    }

    attributeChangedCallback() {
      this._sync();
    }

    private _sync() {
      const tone = (this.getAttribute('tone') || 'primary') as string;
      const appearance = (this.getAttribute('appearance') || 'solid') as string;
      const size = (this.getAttribute('size') || 'md') as string;

      const loading = this.hasAttribute('loading');
      const disabled = this.hasAttribute('disabled') || loading;

      const iconOnly = this.hasAttribute('icon-only');
      const iconPos = (this.getAttribute('icon-position') || 'left') as string;

      this._btn.dataset.tone = tone;
      this._btn.dataset.appearance = appearance;
      this._btn.dataset.size = size;

      this._btn.dataset.iconOnly = iconOnly ? 'true' : 'false';
      this._btn.dataset.iconPos = iconPos === 'right' ? 'right' : 'left';

      this._btn.disabled = disabled;
      this._btn.setAttribute('aria-busy', loading ? 'true' : 'false');

      const hasSpinner = !!this._btn.querySelector('.spinner');
      if (loading && !hasSpinner) {
        const sp = document.createElement('span');
        sp.className = 'spinner';
        sp.setAttribute('aria-hidden', 'true');
        this._btn.prepend(sp);
      }
      if (!loading && hasSpinner) {
        this._btn.querySelector('.spinner')?.remove();
      }
    }
  }

  customElements.define('gob-button', GobButton);
}

export {};
