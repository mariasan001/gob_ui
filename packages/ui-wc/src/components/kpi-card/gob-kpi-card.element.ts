import { defineCustomElement } from '../../lib/define-custom-element';
import { SafeHTMLElement } from '../../lib/safe-html-element';
import {
  KPI_OBSERVED_ATTRIBUTES,
  resolveKpiTone,
  resolveKpiVariant,
} from './kpi-card-constants';
import { kpiCardStyles } from './kpi-card-styles';

class GobKpiCardElement extends SafeHTMLElement {
  static get observedAttributes() {
    return [...KPI_OBSERVED_ATTRIBUTES];
  }

  private readonly rootEl: HTMLElement;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = kpiCardStyles;

    this.rootEl = document.createElement('article');
    this.rootEl.className = 'root';
    this.rootEl.setAttribute('part', 'root');

    const head = document.createElement('div');
    head.className = 'head';
    head.setAttribute('part', 'head');

    const label = document.createElement('div');
    label.className = 'label';
    label.setAttribute('part', 'label');
    const labelSlot = document.createElement('slot');
    labelSlot.name = 'label';
    label.appendChild(labelSlot);

    const icon = document.createElement('div');
    icon.className = 'icon';
    icon.setAttribute('part', 'icon');
    const iconSlot = document.createElement('slot');
    iconSlot.name = 'icon';
    icon.appendChild(iconSlot);

    head.append(label, icon);

    const valueRow = document.createElement('div');
    valueRow.className = 'valueRow';
    valueRow.setAttribute('part', 'value-row');

    const value = document.createElement('div');
    value.className = 'value';
    value.setAttribute('part', 'value');
    const valueSlot = document.createElement('slot');
    valueSlot.name = 'value';
    value.appendChild(valueSlot);

    const trend = document.createElement('div');
    trend.className = 'trend';
    trend.setAttribute('part', 'trend');
    const trendSlot = document.createElement('slot');
    trendSlot.name = 'trend';
    trend.appendChild(trendSlot);

    valueRow.append(value, trend);

    const period = document.createElement('div');
    period.className = 'period';
    period.setAttribute('part', 'period');
    const periodSlot = document.createElement('slot');
    periodSlot.name = 'period';
    period.appendChild(periodSlot);

    this.rootEl.append(head, valueRow, period);
    shadow.append(style, this.rootEl);
  }

  connectedCallback() {
    this.syncState();
  }

  attributeChangedCallback() {
    this.syncState();
  }

  private syncState() {
    const variant = resolveKpiVariant(this.getAttribute('variant'));
    const tone = resolveKpiTone(this.getAttribute('tone'));

    this.rootEl.dataset.variant = variant;
    this.rootEl.dataset.tone = tone;

    const trend = this.rootEl.querySelector('.trend') as HTMLElement | null;
    if (trend) {
      if (variant === 'trend-down') trend.dataset.dir = 'down';
      else trend.dataset.dir = 'up';
    }
  }
}

defineCustomElement('gob-kpi-card', GobKpiCardElement);

export {};
