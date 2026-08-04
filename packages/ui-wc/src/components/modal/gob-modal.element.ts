import { defineCustomElement } from '../../lib/define-custom-element';
import { SafeHTMLElement } from '../../lib/safe-html-element';
import {
  MODAL_OBSERVED_ATTRIBUTES,
  resolveModalSize,
  resolveModalVariant,
} from './modal-constants';
import { modalStyles } from './modal-styles';

const CLOSE_SVG = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;

class GobModalElement extends SafeHTMLElement {
  static get observedAttributes() {
    return [...MODAL_OBSERVED_ATTRIBUTES];
  }

  private readonly backdropEl: HTMLElement;
  private readonly dialogEl: HTMLElement;
  private readonly titleEl: HTMLElement;
  private readonly descEl: HTMLElement;
  private readonly bodyEl: HTMLElement;
  private readonly confirmBtn: HTMLButtonElement;
  private readonly cancelBtn: HTMLButtonElement;
  private readonly closeBtn: HTMLButtonElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = modalStyles;

    this.backdropEl = document.createElement('div');
    this.backdropEl.className = 'backdrop';
    this.backdropEl.setAttribute('part', 'backdrop');

    this.dialogEl = document.createElement('div');
    this.dialogEl.className = 'dialog';
    this.dialogEl.setAttribute('part', 'dialog');
    this.dialogEl.setAttribute('role', 'dialog');
    this.dialogEl.setAttribute('aria-modal', 'true');

    const head = document.createElement('div');
    head.className = 'head';

    this.titleEl = document.createElement('h2');
    this.titleEl.className = 'title';

    this.descEl = document.createElement('p');
    this.descEl.className = 'description';

    head.append(this.titleEl, this.descEl);

    this.closeBtn = document.createElement('button');
    this.closeBtn.type = 'button';
    this.closeBtn.className = 'close';
    this.closeBtn.setAttribute('aria-label', 'Cerrar');
    this.closeBtn.innerHTML = CLOSE_SVG;

    this.bodyEl = document.createElement('div');
    this.bodyEl.className = 'body';
    this.bodyEl.setAttribute('part', 'body');

    const actions = document.createElement('div');
    actions.className = 'actions';

    this.cancelBtn = document.createElement('button');
    this.cancelBtn.type = 'button';
    this.cancelBtn.className = 'btn cancel';

    this.confirmBtn = document.createElement('button');
    this.confirmBtn.type = 'button';
    this.confirmBtn.className = 'btn confirm';

    actions.append(this.cancelBtn, this.confirmBtn);
    this.dialogEl.append(head, this.closeBtn, this.bodyEl, actions);
    this.backdropEl.appendChild(this.dialogEl);
    shadow.append(style, this.backdropEl);

    this.backdropEl.addEventListener('click', (event) => {
      if (event.target === this.backdropEl) this.close('backdrop');
    });
    this.closeBtn.addEventListener('click', () => this.close('close'));
    this.cancelBtn.addEventListener('click', () => this.close('cancel'));
    this.confirmBtn.addEventListener('click', () => {
      this.close('confirm');
    });
  }

  connectedCallback() {
    document.addEventListener('keydown', this.onKeyDown);
    this.syncFromAttributes();
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  attributeChangedCallback() {
    this.syncFromAttributes();
  }

  private readonly onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.hasAttribute('open')) {
      this.close('escape');
    }
  };

  private close(action: string) {
    this.removeAttribute('open');
    this.dispatchEvent(
      new CustomEvent('gob-modal', {
        detail: { action },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private syncFromAttributes() {
    const variant = resolveModalVariant(this.getAttribute('variant'));
    const size = resolveModalSize(this.getAttribute('size'));
    const title = this.getAttribute('title')?.trim() || 'Confirmar accion';
    const description =
      this.getAttribute('description')?.trim() ||
      'Revisa la informacion antes de continuar.';
    const body =
      this.getAttribute('body')?.trim() ||
      this.textContent?.trim() ||
      'Esta accion puede afectar el expediente seleccionado.';
    const confirm =
      this.getAttribute('confirm-label')?.trim() || 'Confirmar';
    const cancel = this.getAttribute('cancel-label')?.trim() || 'Cancelar';

    this.backdropEl.dataset.variant = variant;
    this.backdropEl.dataset.size = size;

    this.titleEl.textContent = title;
    this.dialogEl.setAttribute('aria-label', title);
    this.descEl.textContent = description;
    this.bodyEl.textContent = body;
    this.confirmBtn.textContent = confirm;
    this.cancelBtn.textContent = cancel;
  }
}

defineCustomElement('gob-modal', GobModalElement);
export {};
