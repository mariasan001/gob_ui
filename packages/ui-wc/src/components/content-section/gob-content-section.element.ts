import { defineCustomElement } from '../../lib/define-custom-element';
import { SafeHTMLElement } from '../../lib/safe-html-element';
import {
  CONTENT_SECTION_OBSERVED_ATTRIBUTES,
  resolveContentSectionVariant,
} from './content-section-constants';
import { contentSectionStyles } from './content-section-styles';

class GobContentSectionElement extends SafeHTMLElement {
  static get observedAttributes() {
    return [...CONTENT_SECTION_OBSERVED_ATTRIBUTES];
  }

  private readonly rootEl: HTMLElement;
  private readonly eyebrowEl: HTMLElement;
  private readonly titleEl: HTMLElement;
  private readonly descEl: HTMLElement;
  private readonly bodyEl: HTMLElement;
  private readonly mediaEl: HTMLElement;
  private readonly actionBtn: HTMLButtonElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = contentSectionStyles;

    this.rootEl = document.createElement('section');
    this.rootEl.className = 'root';
    this.rootEl.setAttribute('part', 'root');

    this.eyebrowEl = document.createElement('p');
    this.eyebrowEl.className = 'eyebrow';

    this.titleEl = document.createElement('h2');
    this.titleEl.className = 'title';
    this.titleEl.setAttribute('part', 'title');

    this.descEl = document.createElement('p');
    this.descEl.className = 'description';

    this.bodyEl = document.createElement('p');
    this.bodyEl.className = 'body';
    this.bodyEl.setAttribute('part', 'body');

    this.mediaEl = document.createElement('div');
    this.mediaEl.className = 'media';
    this.mediaEl.setAttribute('aria-hidden', 'true');
    this.mediaEl.setAttribute('part', 'media');

    const actions = document.createElement('div');
    actions.className = 'actions';

    this.actionBtn = document.createElement('button');
    this.actionBtn.type = 'button';
    this.actionBtn.className = 'action';
    this.actionBtn.setAttribute('part', 'action');
    actions.appendChild(this.actionBtn);

    this.rootEl.append(
      this.eyebrowEl,
      this.titleEl,
      this.descEl,
      this.bodyEl,
      this.mediaEl,
      actions,
    );
    shadow.append(style, this.rootEl);

    this.actionBtn.addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('gob-content-section', {
          detail: { action: 'action' },
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
    const variant = resolveContentSectionVariant(this.getAttribute('variant'));
    const eyebrow = this.getAttribute('eyebrow')?.trim() || 'Seccion';
    const title =
      this.getAttribute('title')?.trim() || 'Contenido institucional';
    const description =
      this.getAttribute('description')?.trim() ||
      'Bloque de seccion para landing y documentacion.';
    const body =
      this.getAttribute('body')?.trim() ||
      this.textContent?.trim() ||
      'Usa este bloque para explicar un servicio, requisito o beneficio.';
    const action =
      this.getAttribute('action-label')?.trim() || 'Conocer mas';

    this.rootEl.dataset.variant = variant;
    this.eyebrowEl.textContent = eyebrow;
    this.titleEl.textContent = title;
    this.descEl.textContent = description;
    this.bodyEl.textContent = body;
    this.actionBtn.textContent = action;
  }
}

defineCustomElement('gob-content-section', GobContentSectionElement);
export {};
