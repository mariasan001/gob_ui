import { defineCustomElement } from '../../lib/define-custom-element';
import { SafeHTMLElement } from '../../lib/safe-html-element';
import { RADIO_OBSERVED_ATTRIBUTES } from './radio-constants';
import { radioStyles } from './radio-styles';

class GobRadioElement extends SafeHTMLElement {
  static get observedAttributes() {
    return [...RADIO_OBSERVED_ATTRIBUTES];
  }

  private readonly inputEl: HTMLInputElement;
  private readonly controlEl: HTMLLabelElement;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = radioStyles;

    this.controlEl = document.createElement('label');
    this.controlEl.className = 'control';

    this.inputEl = document.createElement('input');
    this.inputEl.type = 'radio';

    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.setAttribute('aria-hidden', 'true');

    const label = document.createElement('span');
    label.className = 'label';
    label.appendChild(document.createElement('slot'));

    this.controlEl.append(this.inputEl, dot, label);
    shadow.append(style, this.controlEl);
  }

  connectedCallback() {
    this.inputEl.addEventListener('change', this.handleChange);
    this.syncState();
  }

  disconnectedCallback() {
    this.inputEl.removeEventListener('change', this.handleChange);
  }

  attributeChangedCallback() {
    this.syncState();
  }

  private readonly handleChange = () => {
    if (!this.inputEl.checked) {
      return;
    }

    const groupName = this.inputEl.name;
    if (groupName) {
      document.querySelectorAll(`gob-radio[name="${CSS.escape(groupName)}"]`).forEach((node) => {
        if (node !== this) {
          node.removeAttribute('checked');
        }
      });
    }

    this.setAttribute('checked', '');
    this.syncState();
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  };

  private syncState() {
    const checked = this.hasAttribute('checked');
    const disabled = this.hasAttribute('disabled');

    this.inputEl.checked = checked;
    this.inputEl.disabled = disabled;
    this.inputEl.name = this.getAttribute('name') || '';
    this.inputEl.value = this.getAttribute('value') || 'on';

    const ariaLabel = this.getAttribute('aria-label');
    const ariaLabelledby = this.getAttribute('aria-labelledby');
    if (ariaLabel === null) this.inputEl.removeAttribute('aria-label');
    else this.inputEl.setAttribute('aria-label', ariaLabel);
    if (ariaLabelledby === null) this.inputEl.removeAttribute('aria-labelledby');
    else this.inputEl.setAttribute('aria-labelledby', ariaLabelledby);

    this.controlEl.dataset.checked = checked ? 'true' : 'false';
    this.controlEl.dataset.disabled = disabled ? 'true' : 'false';
  }
}

defineCustomElement('gob-radio', GobRadioElement);

export {};
