import { defineCustomElement } from '../../lib/define-custom-element';
import { SafeHTMLElement } from '../../lib/safe-html-element';
import { CHECKBOX_OBSERVED_ATTRIBUTES } from './checkbox-constants';
import { checkboxStyles } from './checkbox-styles';

class GobCheckboxElement extends SafeHTMLElement {
  static get observedAttributes() {
    return [...CHECKBOX_OBSERVED_ATTRIBUTES];
  }

  private readonly inputEl: HTMLInputElement;
  private readonly controlEl: HTMLLabelElement;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = checkboxStyles;

    this.controlEl = document.createElement('label');
    this.controlEl.className = 'control';

    this.inputEl = document.createElement('input');
    this.inputEl.type = 'checkbox';

    const box = document.createElement('span');
    box.className = 'box';
    box.setAttribute('aria-hidden', 'true');
    box.innerHTML = `
      <svg class="mark mark-check" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6.2L4.8 8.5L9.5 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg class="mark mark-line" viewBox="0 0 12 12" fill="none">
        <path d="M3 6H9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `;

    const label = document.createElement('span');
    label.className = 'label';
    label.appendChild(document.createElement('slot'));

    this.controlEl.append(this.inputEl, box, label);
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
    if (this.inputEl.checked) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
    this.removeAttribute('indeterminate');
    this.syncState();
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  };

  private syncState() {
    const checked = this.hasAttribute('checked');
    const indeterminate = this.hasAttribute('indeterminate');
    const disabled = this.hasAttribute('disabled');

    this.inputEl.checked = checked && !indeterminate;
    this.inputEl.indeterminate = indeterminate;
    this.inputEl.disabled = disabled;
    this.inputEl.name = this.getAttribute('name') || '';
    this.inputEl.value = this.getAttribute('value') || 'on';

    const ariaLabel = this.getAttribute('aria-label');
    const ariaLabelledby = this.getAttribute('aria-labelledby');
    if (ariaLabel === null) this.inputEl.removeAttribute('aria-label');
    else this.inputEl.setAttribute('aria-label', ariaLabel);
    if (ariaLabelledby === null) this.inputEl.removeAttribute('aria-labelledby');
    else this.inputEl.setAttribute('aria-labelledby', ariaLabelledby);

    this.controlEl.dataset.checked = checked && !indeterminate ? 'true' : 'false';
    this.controlEl.dataset.indeterminate = indeterminate ? 'true' : 'false';
    this.controlEl.dataset.disabled = disabled ? 'true' : 'false';
  }
}

defineCustomElement('gob-checkbox', GobCheckboxElement);

export {};
