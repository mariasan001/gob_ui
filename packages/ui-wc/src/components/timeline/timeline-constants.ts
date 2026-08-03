export const TIMELINE_VARIANTS = [
  'basic',
  'icons',
  'status',
  'dense',
  'alternating',
  'cards',
  'complete',
] as const;

export type TimelineVariant = (typeof TIMELINE_VARIANTS)[number];

export const TIMELINE_TONES = [
  'primary',
  'accent',
  'dark',
  'neutral',
  'soft',
] as const;

export type TimelineTone = (typeof TIMELINE_TONES)[number];

export const TIMELINE_OBSERVED_ATTRIBUTES = ['variant', 'tone'] as const;

export function resolveTimelineVariant(value: string | null): TimelineVariant {
  if (
    value === 'icons' ||
    value === 'status' ||
    value === 'dense' ||
    value === 'alternating' ||
    value === 'cards' ||
    value === 'complete'
  ) {
    return value;
  }
  return 'basic';
}

export function resolveTimelineTone(value: string | null): TimelineTone {
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

export const timelineLightDomStyles = `
gob-timeline {
  --gob-tl-accent: #9f2141;
  --gob-tl-accent-soft: rgba(159, 33, 65, 0.12);
  --gob-tl-accent-mid: rgba(159, 33, 65, 0.22);
  --gob-tl-accent-text: #9f2141;
  --gob-tl-title: #181511;
  --gob-tl-muted: #8a8278;
  --gob-tl-text: #6b665f;
  --gob-tl-border: rgba(24, 21, 17, 0.1);
  --gob-tl-line: rgba(24, 21, 17, 0.1);
  --gob-tl-surface: #ffffff;
  --gob-tl-hover: rgba(159, 33, 65, 0.04);
  --gob-tl-font: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-tl-rail: 36px;
  --gob-tl-gap: 8px;
}
gob-timeline[tone='accent'] {
  --gob-tl-accent: #bc945a;
  --gob-tl-accent-soft: rgba(188, 148, 90, 0.2);
  --gob-tl-accent-mid: rgba(188, 148, 90, 0.32);
  --gob-tl-accent-text: #7a5a2e;
  --gob-tl-hover: rgba(188, 148, 90, 0.07);
}
gob-timeline[tone='dark'] {
  --gob-tl-accent: #ffffff;
  --gob-tl-accent-soft: rgba(255, 255, 255, 0.12);
  --gob-tl-accent-mid: rgba(255, 255, 255, 0.22);
  --gob-tl-accent-text: #ffffff;
  --gob-tl-title: #ffffff;
  --gob-tl-muted: rgba(255, 255, 255, 0.5);
  --gob-tl-text: rgba(255, 255, 255, 0.72);
  --gob-tl-border: rgba(255, 255, 255, 0.1);
  --gob-tl-line: rgba(255, 255, 255, 0.16);
  --gob-tl-surface: rgba(255, 255, 255, 0.06);
  --gob-tl-hover: rgba(255, 255, 255, 0.06);
}
gob-timeline[tone='neutral'] {
  --gob-tl-accent: #6b655c;
  --gob-tl-accent-soft: rgba(24, 21, 17, 0.08);
  --gob-tl-accent-mid: rgba(24, 21, 17, 0.16);
  --gob-tl-accent-text: #181511;
}
gob-timeline[tone='soft'] {
  --gob-tl-accent: #a67c52;
  --gob-tl-accent-soft: rgba(231, 215, 189, 0.55);
  --gob-tl-accent-mid: rgba(166, 124, 82, 0.28);
  --gob-tl-accent-text: #7a5a2e;
}

gob-timeline .gob-tl-item {
  position: relative;
  display: grid;
  grid-template-columns: var(--gob-tl-rail) minmax(0, 1fr);
  column-gap: 14px;
  padding: 0 0 var(--gob-tl-gap);
  font-family: var(--gob-tl-font);
  outline: none;
}
gob-timeline .gob-tl-item:last-child {
  padding-bottom: 0;
}

gob-timeline .gob-tl-rail {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: var(--gob-tl-rail);
}
gob-timeline .gob-tl-rail::before {
  content: '';
  position: absolute;
  top: 18px;
  bottom: calc(-1 * var(--gob-tl-gap));
  left: 50%;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    var(--gob-tl-accent-mid) 0%,
    var(--gob-tl-line) 55%,
    transparent 100%
  );
  border-radius: 999px;
}
gob-timeline .gob-tl-item:last-child .gob-tl-rail::before {
  display: none;
}

gob-timeline .gob-tl-dot {
  position: relative;
  z-index: 1;
  width: 14px;
  height: 14px;
  margin-top: 8px;
  border-radius: 999px;
  background: var(--gob-tl-accent);
  border: 3px solid var(--gob-tl-surface, #fff);
  box-shadow:
    0 0 0 1px var(--gob-tl-accent-mid),
    0 0 0 5px var(--gob-tl-accent-soft);
  flex: 0 0 auto;
  transition: transform 160ms ease, box-shadow 160ms ease;
}
gob-timeline .gob-tl-icon {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background:
    linear-gradient(165deg, rgba(255, 255, 255, 0.55), transparent 55%),
    var(--gob-tl-accent-soft);
  color: var(--gob-tl-accent-text);
  border: 1px solid color-mix(in srgb, var(--gob-tl-accent) 18%, transparent);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.55) inset,
    0 6px 14px rgba(24, 21, 17, 0.06);
  flex: 0 0 auto;
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
}

gob-timeline .gob-tl-body {
  display: grid;
  gap: 5px;
  min-width: 0;
  padding: 8px 12px 10px;
  border-radius: 12px;
  transition: background 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}
gob-timeline .gob-tl-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-width: 0;
}
gob-timeline .gob-tl-time {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gob-tl-muted);
}
gob-timeline .gob-tl-title {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: var(--gob-tl-title);
}
gob-timeline .gob-tl-desc {
  margin: 0;
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.45;
  color: var(--gob-tl-text);
}
gob-timeline .gob-tl-pill {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  height: 22px;
  padding: 0 9px;
  border-radius: 999px;
  background: var(--gob-tl-accent-soft);
  color: var(--gob-tl-accent-text);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  white-space: nowrap;
  flex: 0 0 auto;
}

/* Hover / active */
gob-timeline .gob-tl-item:hover .gob-tl-body,
gob-timeline .gob-tl-item:focus-visible .gob-tl-body,
gob-timeline .gob-tl-item[data-active='true'] .gob-tl-body {
  background: var(--gob-tl-hover);
}
gob-timeline .gob-tl-item:hover .gob-tl-icon,
gob-timeline .gob-tl-item:focus-visible .gob-tl-icon,
gob-timeline .gob-tl-item[data-active='true'] .gob-tl-icon {
  transform: translateY(-1px) scale(1.04);
  background: var(--gob-tl-accent);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 8px 18px color-mix(in srgb, var(--gob-tl-accent) 28%, transparent);
}
gob-timeline[tone='dark'] .gob-tl-item:hover .gob-tl-icon,
gob-timeline[tone='dark'] .gob-tl-item[data-active='true'] .gob-tl-icon {
  color: #181511;
}
gob-timeline .gob-tl-item:hover .gob-tl-dot,
gob-timeline .gob-tl-item[data-active='true'] .gob-tl-dot {
  transform: scale(1.12);
}

/* Icons / cards / complete: cuerpo como tarjeta suave */
gob-timeline[variant='icons'] .gob-tl-body,
gob-timeline[variant='cards'] .gob-tl-body,
gob-timeline[variant='complete'] .gob-tl-body,
gob-timeline[variant='status'] .gob-tl-body {
  padding: 12px 14px 13px;
  border: 1px solid var(--gob-tl-border);
  background: var(--gob-tl-surface);
  box-shadow: 0 1px 2px rgba(24, 21, 17, 0.03);
}
gob-timeline[variant='icons'] .gob-tl-item:hover .gob-tl-body,
gob-timeline[variant='icons'] .gob-tl-item[data-active='true'] .gob-tl-body,
gob-timeline[variant='cards'] .gob-tl-item:hover .gob-tl-body,
gob-timeline[variant='cards'] .gob-tl-item[data-active='true'] .gob-tl-body,
gob-timeline[variant='complete'] .gob-tl-item:hover .gob-tl-body,
gob-timeline[variant='complete'] .gob-tl-item[data-active='true'] .gob-tl-body,
gob-timeline[variant='status'] .gob-tl-item:hover .gob-tl-body,
gob-timeline[variant='status'] .gob-tl-item[data-active='true'] .gob-tl-body {
  border-color: color-mix(in srgb, var(--gob-tl-accent) 28%, var(--gob-tl-border));
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.5) inset,
    0 10px 24px rgba(24, 21, 17, 0.07);
  background: color-mix(in srgb, var(--gob-tl-accent-soft) 35%, var(--gob-tl-surface));
}

gob-timeline[variant='icons'],
gob-timeline[variant='complete'] {
  --gob-tl-rail: 36px;
  --gob-tl-gap: 14px;
}
gob-timeline[variant='icons'] .gob-tl-rail::before,
gob-timeline[variant='complete'] .gob-tl-rail::before {
  top: 36px;
}

gob-timeline[variant='alternating'] .gob-tl-item:nth-child(even) .gob-tl-body {
  text-align: right;
}
gob-timeline[variant='alternating'] .gob-tl-item:nth-child(even) .gob-tl-head {
  flex-direction: row-reverse;
}
gob-timeline[variant='alternating'] .gob-tl-item:nth-child(even) .gob-tl-pill {
  margin-inline-start: 0;
}

gob-timeline[variant='dense'] {
  --gob-tl-rail: 28px;
  --gob-tl-gap: 6px;
}
gob-timeline[variant='dense'] .gob-tl-icon {
  width: 28px;
  height: 28px;
  border-radius: 9px;
}
gob-timeline[variant='dense'] .gob-tl-body {
  padding: 6px 10px 8px;
  gap: 2px;
}
gob-timeline[variant='dense'] .gob-tl-title {
  font-size: 13px;
}
gob-timeline[variant='dense'] .gob-tl-desc {
  font-size: 12px;
}
`;
