import { defineCustomElement } from '../../lib/define-custom-element';
import { SafeHTMLElement } from '../../lib/safe-html-element';
import {
  SELECT_OBSERVED_ATTRIBUTES,
  isGroup,
  parseSelectOptions,
  resolveSelectSize,
  resolveSelectStatus,
  resolveSelectVariant,
  type SelectOption,
  type SelectOptionsPayload,
} from './select-constants';
import { selectStyles } from './select-styles';

const ICONS = {
  chevron: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.8 12 21 12 21Z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10.8" r="2.2" stroke="currentColor" stroke-width="1.6"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4.5 20.5h15M6.5 20.5V7.5l5-3 5 3v13M10 10.5h1.5M12.5 10.5H14M10 13.5h1.5M12.5 13.5H14M10 16.5h1.5M12.5 16.5H14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

function statusPill(status: string): string {
  switch (status) {
    case 'error':
      return 'Error';
    case 'success':
      return 'Valido';
    case 'warning':
      return 'Revision';
    case 'info':
      return 'Info';
    default:
      return '';
  }
}

function appendOptions(
  field: HTMLSelectElement,
  payload: SelectOptionsPayload,
  placeholder: string,
  value: string,
  multiple: boolean,
) {
  field.replaceChildren();

  if (!multiple && placeholder) {
    const empty = document.createElement('option');
    empty.value = '';
    empty.textContent = placeholder;
    empty.disabled = true;
    empty.hidden = true;
    if (!value) empty.selected = true;
    field.appendChild(empty);
  }

  for (const item of payload) {
    if (isGroup(item)) {
      const group = document.createElement('optgroup');
      group.label = item.label;
      for (const opt of item.options) {
        group.appendChild(makeOption(opt, value, multiple));
      }
      field.appendChild(group);
    } else {
      field.appendChild(makeOption(item, value, multiple));
    }
  }
}

function makeOption(
  opt: SelectOption,
  value: string,
  multiple: boolean,
): HTMLOptionElement {
  const el = document.createElement('option');
  el.value = opt.value;
  el.textContent = opt.label;
  el.disabled = Boolean(opt.disabled);
  if (multiple) {
    const selected = value
      .split(',')
      .map((v) => v.trim())
      .filter(Boolean);
    el.selected = selected.includes(opt.value);
  } else if (value && opt.value === value) {
    el.selected = true;
  }
  return el;
}

class GobSelectElement extends SafeHTMLElement {
  static get observedAttributes() {
    return [...SELECT_OBSERVED_ATTRIBUTES];
  }

  private readonly rootEl: HTMLElement;
  private readonly field: HTMLSelectElement;
  private readonly labelEl: HTMLLabelElement;
  private readonly helperEl: HTMLParagraphElement;
  private readonly headEl: HTMLElement;
  private readonly pillEl: HTMLSpanElement;
  private readonly controlEl: HTMLElement;
  private readonly leadEl: HTMLSpanElement;
  private readonly chevronEl: HTMLSpanElement;
  private readonly floatLabelEl: HTMLSpanElement;

  private fieldId = `gob-sel-${Math.random().toString(36).slice(2, 9)}`;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = selectStyles;

    this.rootEl = document.createElement('div');
    this.rootEl.className = 'root';

    this.headEl = document.createElement('div');
    this.headEl.className = 'head';

    this.labelEl = document.createElement('label');
    this.labelEl.className = 'label';

    this.pillEl = document.createElement('span');
    this.pillEl.className = 'pill';
    this.pillEl.hidden = true;

    this.headEl.append(this.labelEl, this.pillEl);

    this.controlEl = document.createElement('div');
    this.controlEl.className = 'control';
    this.controlEl.setAttribute('part', 'control');

    this.floatLabelEl = document.createElement('span');
    this.floatLabelEl.className = 'float-label';
    this.floatLabelEl.hidden = true;

    this.leadEl = document.createElement('span');
    this.leadEl.className = 'lead';
    this.leadEl.hidden = true;

    this.field = document.createElement('select');
    this.field.className = 'field';
    this.field.setAttribute('part', 'select');

    this.chevronEl = document.createElement('span');
    this.chevronEl.className = 'chevron';
    this.chevronEl.innerHTML = ICONS.chevron;
    this.chevronEl.setAttribute('aria-hidden', 'true');

    this.controlEl.append(
      this.floatLabelEl,
      this.leadEl,
      this.field,
      this.chevronEl,
    );

    this.helperEl = document.createElement('p');
    this.helperEl.className = 'helper';
    this.helperEl.hidden = true;

    this.rootEl.append(this.headEl, this.controlEl, this.helperEl);
    shadow.append(style, this.rootEl);
  }

  connectedCallback() {
    this.field.addEventListener('focus', this.onFocus);
    this.field.addEventListener('blur', this.onBlur);
    this.field.addEventListener('change', this.onChange);
    this.sync();
  }

  disconnectedCallback() {
    this.field.removeEventListener('focus', this.onFocus);
    this.field.removeEventListener('blur', this.onBlur);
    this.field.removeEventListener('change', this.onChange);
  }

  attributeChangedCallback() {
    this.sync();
  }

  private readonly onFocus = () => {
    this.rootEl.dataset.focused = 'true';
  };

  private readonly onBlur = () => {
    this.rootEl.dataset.focused = 'false';
  };

  private readonly onChange = () => {
    const multiple = this.field.multiple;
    const value = multiple
      ? Array.from(this.field.selectedOptions)
          .map((o) => o.value)
          .join(',')
      : this.field.value;
    this.rootEl.dataset.filled = value ? 'true' : 'false';
    this.field.dataset.placeholder = value ? 'false' : 'true';
    this.dispatchEvent(
      new CustomEvent('gob-select', {
        detail: { value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private sync() {
    const variant = resolveSelectVariant(this.getAttribute('variant'));
    const status = resolveSelectStatus(this.getAttribute('status'));
    const size = resolveSelectSize(this.getAttribute('size'));
    const label = this.getAttribute('label')?.trim() || '';
    const placeholder =
      this.getAttribute('placeholder')?.trim() || 'Selecciona una opcion';
    const helper = this.getAttribute('helper')?.trim() || '';
    const name = this.getAttribute('name') ?? '';
    const disabled = this.hasAttribute('disabled');
    const required = this.hasAttribute('required');
    const value = this.getAttribute('value') ?? '';
    const multiple = variant === 'multiple';
    const options = parseSelectOptions(this.getAttribute('options'), variant);

    this.rootEl.dataset.variant = variant;
    this.rootEl.dataset.status = status;
    this.rootEl.dataset.size = size;
    this.rootEl.dataset.disabled = disabled ? 'true' : 'false';

    const isFloating = variant === 'floating';
    const showLabel =
      !isFloating &&
      (Boolean(label) ||
        variant === 'labeled' ||
        variant === 'helper' ||
        variant === 'dense' ||
        variant === 'filled' ||
        variant === 'soft' ||
        variant === 'pill' ||
        variant === 'icon' ||
        variant === 'group' ||
        variant === 'multiple' ||
        variant === 'complete');

    this.headEl.hidden = !showLabel && status === 'default';
    this.labelEl.hidden = !showLabel;
    this.labelEl.replaceChildren();
    this.labelEl.append(document.createTextNode(label || 'Selector'));
    if (required) {
      const req = document.createElement('span');
      req.className = 'req';
      req.textContent = '*';
      this.labelEl.appendChild(req);
    }

    const pill = statusPill(status);
    this.pillEl.hidden = !pill;
    this.pillEl.textContent = pill;

    this.field.id = this.fieldId;
    this.labelEl.htmlFor = this.fieldId;
    this.field.name = name;
    this.field.disabled = disabled;
    this.field.required = required;
    this.field.multiple = multiple;
    if (multiple) this.field.size = 4;
    else this.field.removeAttribute('size');

    appendOptions(this.field, options, placeholder, value, multiple);
    this.rootEl.dataset.filled = this.field.value ? 'true' : 'false';
    this.field.dataset.placeholder = this.field.value ? 'false' : 'true';

    if (isFloating) {
      this.floatLabelEl.hidden = false;
      this.floatLabelEl.textContent = label || 'Entidad';
    } else {
      this.floatLabelEl.hidden = true;
      this.floatLabelEl.textContent = '';
    }

    if (variant === 'icon' || variant === 'soft' || variant === 'complete') {
      this.leadEl.hidden = false;
      this.leadEl.innerHTML =
        variant === 'soft' ? ICONS.building : ICONS.pin;
    } else {
      this.leadEl.hidden = true;
      this.leadEl.innerHTML = '';
    }

    const showHelper =
      Boolean(helper) ||
      variant === 'helper' ||
      variant === 'complete' ||
      status !== 'default';
    this.helperEl.hidden = !showHelper;
    this.helperEl.textContent =
      helper ||
      (status === 'error'
        ? 'Selecciona una opcion valida'
        : status === 'success'
          ? 'Seleccion confirmada'
          : status === 'warning'
            ? 'Requiere revision'
            : '');
  }
}

defineCustomElement('gob-select', GobSelectElement);

export {};
