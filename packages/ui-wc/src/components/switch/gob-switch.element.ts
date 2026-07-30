import { defineCustomElement } from '../../lib/define-custom-element';
import { SafeHTMLElement } from '../../lib/safe-html-element';
import { SWITCH_OBSERVED_ATTRIBUTES } from './switch-constants';
import { switchStyles } from './switch-styles';

class GobSwitchElement extends SafeHTMLElement {
  static get observedAttributes() {
    return [...SWITCH_OBSERVED_ATTRIBUTES];
  }

  private readonly buttonEl: HTMLButtonElement;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open', delegatesFocus: true });
    const style = document.createElement('style');
    style.textContent = switchStyles;

    this.buttonEl = document.createElement('button');
    this.buttonEl.type = 'button';
    this.buttonEl.className = 'control';
    this.buttonEl.setAttribute('role', 'switch');

    const track = document.createElement('span');
    track.className = 'track';
    track.setAttribute('aria-hidden', 'true');
    const thumb = document.createElement('span');
    thumb.className = 'thumb';
    track.appendChild(thumb);

    const label = document.createElement('span');
    label.className = 'label';
    label.appendChild(document.createElement('slot'));

    this.buttonEl.append(track, label);
    shadow.append(style, this.buttonEl);
  }

  connectedCallback() {
    this.buttonEl.addEventListener('click', this.handleClick);
    this.syncState();
  }

  disconnectedCallback() {
    this.buttonEl.removeEventListener('click', this.handleClick);
  }

  attributeChangedCallback() {
    this.syncState();
  }

  private readonly handleClick = () => {
    if (this.hasAttribute('disabled')) {
      return;
    }

    if (this.hasAttribute('checked')) {
      this.removeAttribute('checked');
    } else {
      this.setAttribute('checked', '');
    }

    this.syncState();
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  };

  private syncState() {
    const checked = this.hasAttribute('checked');
    const disabled = this.hasAttribute('disabled');

    this.buttonEl.disabled = disabled;
    this.buttonEl.setAttribute('aria-checked', checked ? 'true' : 'false');
    this.buttonEl.dataset.checked = checked ? 'true' : 'false';
    this.buttonEl.dataset.disabled = disabled ? 'true' : 'false';

    const ariaLabel = this.getAttribute('aria-label');
    const ariaLabelledby = this.getAttribute('aria-labelledby');
    if (ariaLabel === null) this.buttonEl.removeAttribute('aria-label');
    else this.buttonEl.setAttribute('aria-label', ariaLabel);
    if (ariaLabelledby === null) this.buttonEl.removeAttribute('aria-labelledby');
    else this.buttonEl.setAttribute('aria-labelledby', ariaLabelledby);
  }
}

defineCustomElement('gob-switch', GobSwitchElement);

export {};
