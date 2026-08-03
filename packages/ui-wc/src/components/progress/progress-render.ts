import type { ProgressStatus, ProgressVariant } from './progress-constants';

function pct(value: number, max: number): number {
  if (max <= 0) return 0;
  return Math.round((value / max) * 1000) / 10;
}

function statusLabel(status: ProgressStatus): string {
  switch (status) {
    case 'info':
      return 'En curso';
    case 'warning':
      return 'Revision';
    case 'success':
      return 'Completado';
    case 'danger':
      return 'Retrasado';
    default:
      return 'Avance';
  }
}

function head(label: string, valueText: string, status: ProgressStatus, showPill: boolean): string {
  return `<div class="head">
  <div style="display:grid;gap:6px;min-width:0">
    ${showPill ? `<span class="pill">${statusLabel(status)}</span>` : ''}
    <p class="label">${label}</p>
  </div>
  <p class="value">${valueText}</p>
</div>`;
}

function barTrack(percent: number): string {
  return `<div class="track" part="track">
  <span class="fill" part="fill" style="width:${percent}%"></span>
</div>`;
}

function ringMarkup(percent: number): string {
  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return `<div class="ring-wrap">
  <div class="ring" part="ring">
    <svg viewBox="0 0 96 96" aria-hidden="true">
      <circle class="ring-track" cx="48" cy="48" r="${r}"></circle>
      <circle class="ring-fill" cx="48" cy="48" r="${r}"
        stroke-dasharray="${c.toFixed(2)}"
        stroke-dashoffset="${offset.toFixed(2)}"></circle>
    </svg>
    <div class="ring-center">${Math.round(percent)}%</div>
  </div>
</div>`;
}

function stepsMarkup(value: number, steps: number): string {
  const active = Math.min(steps, Math.max(0, Math.round((value / 100) * steps)));
  const parts: string[] = ['<div class="steps" part="steps">'];
  for (let i = 1; i <= steps; i += 1) {
    const done = i < active;
    const isActive = i === active;
    parts.push(`<div class="step" data-done="${done ? 'true' : 'false'}" data-active="${isActive ? 'true' : 'false'}">
  <span class="step-dot">${i}</span>
  ${i < steps ? '<span class="step-line"></span>' : ''}
</div>`);
  }
  parts.push('</div>');
  return parts.join('');
}

function segmentedMarkup(percent: number, segments: number): string {
  const onCount = Math.round((percent / 100) * segments);
  const parts: string[] = [
    `<div class="segments" style="--gob-pg-segments:${segments}" part="segments">`,
  ];
  for (let i = 0; i < segments; i += 1) {
    parts.push(
      `<span class="segment" data-on="${i < onCount ? 'true' : 'false'}"></span>`,
    );
  }
  parts.push('</div>');
  return parts.join('');
}

export function renderProgressMarkup(options: {
  variant: ProgressVariant;
  value: number;
  max: number;
  label: string;
  status: ProgressStatus;
  steps: number;
}): string {
  const { variant, value, max, label, status, steps } = options;
  const percent = pct(value, max);
  const valueText =
    variant === 'indeterminate' ? '…' : `${Math.round(percent)}%`;
  const showHead =
    variant === 'labeled' ||
    variant === 'complete' ||
    variant === 'stacked' ||
    variant === 'steps' ||
    variant === 'segmented' ||
    variant === 'ring';
  const showPill = variant === 'complete' || status !== 'default';

  const parts: string[] = [];

  if (showHead) {
    parts.push(head(label, valueText, status, showPill));
  }

  switch (variant) {
    case 'ring':
      parts.push(ringMarkup(percent));
      break;
    case 'steps':
      parts.push(stepsMarkup(percent, steps));
      parts.push(`<p class="hint">Paso ${Math.max(1, Math.round((percent / 100) * steps))} de ${steps}</p>`);
      break;
    case 'segmented':
      parts.push(segmentedMarkup(percent, steps));
      break;
    case 'indeterminate':
      parts.push(barTrack(36));
      parts.push(`<p class="hint">${label || 'Procesando…'}</p>`);
      break;
    case 'complete':
      parts.push(barTrack(percent));
      parts.push(ringMarkup(percent));
      break;
    case 'stacked':
    case 'labeled':
    case 'thin':
    case 'thick':
    case 'bar':
    default:
      parts.push(barTrack(percent));
      break;
  }

  return parts.join('');
}
