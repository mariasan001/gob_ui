export const EMPTY_STATE_VARIANTS = [
  'basic',
  'icon',
  'actions',
  'search',
  'error',
  'dense',
  'complete',
] as const;

export type EmptyStateVariant = (typeof EMPTY_STATE_VARIANTS)[number];

export const EMPTY_STATE_TONES = [
  'primary',
  'accent',
  'dark',
  'neutral',
  'soft',
] as const;

export type EmptyStateTone = (typeof EMPTY_STATE_TONES)[number];

export const EMPTY_STATE_OBSERVED_ATTRIBUTES = ['variant', 'tone'] as const;

export function resolveEmptyStateVariant(
  value: string | null,
): EmptyStateVariant {
  if (
    value === 'icon' ||
    value === 'actions' ||
    value === 'search' ||
    value === 'error' ||
    value === 'dense' ||
    value === 'complete'
  ) {
    return value;
  }
  return 'basic';
}

export function resolveEmptyStateTone(value: string | null): EmptyStateTone {
  if (
    value === 'accent' ||
    value === 'dark' ||
    value === 'neutral' ||
    value === 'soft' ||
    value === 'primary'
  ) {
    return value;
  }
  return 'primary';
}

export const emptyStateLightDomStyles = `
gob-empty-state {
  --gob-es-accent: #9f2141;
  --gob-es-accent-soft: rgba(159, 33, 65, 0.12);
  --gob-es-accent-text: #9f2141;
  --gob-es-title: #181511;
  --gob-es-muted: #8a8278;
  --gob-es-text: #6b665f;
  --gob-es-border: rgba(24, 21, 17, 0.08);
  --gob-es-font: var(--gob-font-sans, Gotham, Raleway, sans-serif);
}
gob-empty-state[tone='accent'] {
  --gob-es-accent: #bc945a;
  --gob-es-accent-soft: rgba(188, 148, 90, 0.22);
  --gob-es-accent-text: #7a5a2e;
}
gob-empty-state[tone='dark'] {
  --gob-es-accent: #ffffff;
  --gob-es-accent-soft: rgba(255, 255, 255, 0.14);
  --gob-es-accent-text: #ffffff;
  --gob-es-title: #ffffff;
  --gob-es-muted: rgba(255, 255, 255, 0.5);
  --gob-es-text: rgba(255, 255, 255, 0.72);
  --gob-es-border: rgba(255, 255, 255, 0.1);
}
gob-empty-state[tone='neutral'] {
  --gob-es-accent: #6b655c;
  --gob-es-accent-soft: rgba(24, 21, 17, 0.08);
  --gob-es-accent-text: #181511;
}
gob-empty-state[tone='soft'] {
  --gob-es-accent: #a67c52;
  --gob-es-accent-soft: rgba(231, 215, 189, 0.55);
  --gob-es-accent-text: #7a5a2e;
}

gob-empty-state .gob-es-inner {
  display: grid;
  gap: 10px;
  place-items: center;
  text-align: center;
  font-family: var(--gob-es-font);
  max-width: 36ch;
  margin: 0 auto;
}
gob-empty-state .gob-es-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: var(--gob-es-accent-soft);
  color: var(--gob-es-accent-text);
}
gob-empty-state[variant='dense'] .gob-es-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
}
gob-empty-state .gob-es-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--gob-es-title);
}
gob-empty-state[variant='dense'] .gob-es-title {
  font-size: 14px;
}
gob-empty-state .gob-es-desc {
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.45;
  color: var(--gob-es-muted);
}
gob-empty-state .gob-es-actions {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 4px;
}
gob-empty-state .gob-es-btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid var(--gob-es-border);
  background: transparent;
  color: var(--gob-es-title);
  font-family: var(--gob-es-font);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}
gob-empty-state .gob-es-btn-primary {
  border-color: transparent;
  background: var(--gob-es-accent);
  color: #fff;
}
gob-empty-state[tone='dark'] .gob-es-btn-primary {
  color: #181511;
}
gob-empty-state[variant='error'] .gob-es-icon {
  background: rgba(159, 33, 65, 0.14);
  color: #9f2141;
}
gob-empty-state[tone='dark'][variant='error'] .gob-es-icon {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
`;
