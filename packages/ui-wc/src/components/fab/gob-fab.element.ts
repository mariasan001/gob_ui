import { defineCustomElement } from '../../lib/define-custom-element';
import { SafeHTMLElement } from '../../lib/safe-html-element';
import {
  FAB_OBSERVED_ATTRIBUTES,
  resolveFabIcon,
  resolveFabSize,
  resolveFabVariant,
} from './fab-constants';
import { fabStyles } from './fab-styles';

class GobFabElement extends SafeHTMLElement {
  static get observedAttributes() {
    return [...FAB_OBSERVED_ATTRIBUTES];
  }

  private readonly rootEl: HTMLElement;
  private readonly btnEl: HTMLButtonElement;
  private readonly iconEl: HTMLElement;
  private readonly labelEl: HTMLElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = fabStyles;

    this.rootEl = document.createElement('div');
    this.rootEl.className = 'root';
    this.rootEl.setAttribute('part', 'root');

    this.btnEl = document.createElement('button');
    this.btnEl.type = 'button';
    this.btnEl.className = 'btn';
    this.btnEl.setAttribute('part', 'button');

    this.iconEl = document.createElement('span');
    this.iconEl.className = 'icon';
    this.iconEl.setAttribute('aria-hidden', 'true');

    this.labelEl = document.createElement('span');
    this.labelEl.className = 'label';
    this.labelEl.setAttribute('part', 'label');

    this.btnEl.append(this.iconEl, this.labelEl);
    this.rootEl.appendChild(this.btnEl);
    shadow.append(style, this.rootEl);

    this.btnEl.addEventListener('click', () => {
      if (this.hasAttribute('disabled')) return;
      this.dispatchEvent(
        new CustomEvent('gob-fab', {
          detail: {
            icon: this.getAttribute('icon') || 'plus',
            label: this.getAttribute('label') || '',
          },
          bubbles: true,
          composed: true,
        }),
      );
    });
  }

  connectedCallback() {
    this.syncFromAttributes();
  }

  attributeChangedCallback() {
    this.syncFromAttributes();
  }

  private syncFromAttributes() {
    const variant = resolveFabVariant(this.getAttribute('variant'));
    const size = resolveFabSize(this.getAttribute('size'));
    const icon = this.getAttribute('icon');
    const label =
      this.getAttribute('label')?.trim() ||
      this.textContent?.trim() ||
      'Accion';
    const disabled = this.hasAttribute('disabled');
    const extended = variant === 'extended';

    this.rootEl.dataset.variant = variant;
    this.rootEl.dataset.size = size;

    this.btnEl.disabled = disabled;
    this.btnEl.setAttribute('aria-label', label);
    this.labelEl.textContent = label;
    this.labelEl.hidden = !extended;
    this.iconEl.innerHTML = resolveFabIcon(icon);
  }
}

defineCustomElement('gob-fab', GobFabElement);
export {};
