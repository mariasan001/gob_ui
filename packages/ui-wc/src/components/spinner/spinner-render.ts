import type {
  SpinnerStatus,
  SpinnerVariant,
} from './spinner-constants';

function statusLabel(status: SpinnerStatus): string {
  switch (status) {
    case 'info':
      return 'En curso';
    case 'warning':
      return 'Espera';
    case 'success':
      return 'Listo';
    case 'danger':
      return 'Error';
    default:
      return 'Cargando';
  }
}

function visualFor(variant: SpinnerVariant): string {
  switch (variant) {
    case 'dual':
    case 'complete':
    case 'page':
    case 'overlay':
      return `<div class="visual" aria-hidden="true">
  <div class="dual">
    <span class="dual-outer"></span>
    <span class="dual-inner"></span>
  </div>
</div>`;
    case 'dots':
      return `<div class="dots" aria-hidden="true">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>`;
    case 'pulse':
      return `<div class="visual" aria-hidden="true"><span class="pulse"></span></div>`;
    case 'bars':
      return `<div class="bars" aria-hidden="true">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
</div>`;
    case 'button':
    case 'inline':
    case 'ring':
    default:
      return `<div class="visual" aria-hidden="true"><span class="ring"></span></div>`;
  }
}

export function renderSpinnerMarkup(options: {
  variant: SpinnerVariant;
  label: string;
  status: SpinnerStatus;
}): string {
  const { variant, label, status } = options;
  const visual = visualFor(variant);
  const showPill = status !== 'default' || variant === 'complete' || variant === 'overlay';
  const showLabel =
    variant === 'inline' ||
    variant === 'page' ||
    variant === 'overlay' ||
    variant === 'complete' ||
    Boolean(label && variant !== 'ring' && variant !== 'button');

  if (variant === 'button') {
    return `${visual}`;
  }

  if (variant === 'inline') {
    return `${visual}<p class="label" style="font-size:13px">${label || 'Cargando…'}</p>`;
  }

  if (variant === 'complete' || variant === 'page' || variant === 'overlay') {
    return `${showPill ? `<span class="pill">${statusLabel(status)}</span>` : ''}
${visual}
<div class="copy">
  <p class="label">${label || 'Cargando contenido'}</p>
  <p class="hint">Esto puede tomar unos segundos</p>
</div>`;
  }

  const parts = [visual];
  if (showPill && status !== 'default') {
    parts.unshift(`<span class="pill">${statusLabel(status)}</span>`);
  }
  if (showLabel && label) {
    parts.push(`<p class="label">${label}</p>`);
  }
  return parts.join('');
}
