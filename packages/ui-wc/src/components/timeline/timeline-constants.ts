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
  --gob-tl-accent-text: #9f2141;
  --gob-tl-title: #181511;
  --gob-tl-muted: #8a8278;
  --gob-tl-text: #6b665f;
  --gob-tl-border: rgba(24, 21, 17, 0.1);
  --gob-tl-line: rgba(24, 21, 17, 0.12);
  --gob-tl-font: var(--gob-font-sans, Gotham, Raleway, sans-serif);
}
gob-timeline[tone='accent'] {
  --gob-tl-accent: #bc945a;
  --gob-tl-accent-soft: rgba(188, 148, 90, 0.22);
  --gob-tl-accent-text: #7a5a2e;
}
gob-timeline[tone='dark'] {
  --gob-tl-accent: #ffffff;
  --gob-tl-accent-soft: rgba(255, 255, 255, 0.14);
  --gob-tl-accent-text: #ffffff;
  --gob-tl-title: #ffffff;
  --gob-tl-muted: rgba(255, 255, 255, 0.5);
  --gob-tl-text: rgba(255, 255, 255, 0.72);
  --gob-tl-border: rgba(255, 255, 255, 0.1);
  --gob-tl-line: rgba(255, 255, 255, 0.18);
}
gob-timeline[tone='neutral'] {
  --gob-tl-accent: #6b655c;
  --gob-tl-accent-soft: rgba(24, 21, 17, 0.08);
  --gob-tl-accent-text: #181511;
}
gob-timeline[tone='soft'] {
  --gob-tl-accent: #a67c52;
  --gob-tl-accent-soft: rgba(231, 215, 189, 0.55);
  --gob-tl-accent-text: #7a5a2e;
}
gob-timeline[variant='dense'] {
  --gob-tl-gap: 14px;
}

gob-timeline .gob-tl-item {
  position: relative;
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr);
  gap: 14px;
  padding: 0 0 var(--gob-tl-gap, 22px);
  font-family: var(--gob-tl-font);
}
gob-timeline .gob-tl-item:last-child {
  padding-bottom: 0;
}
gob-timeline .gob-tl-rail {
  position: relative;
  display: flex;
  justify-content: center;
}
gob-timeline .gob-tl-rail::before {
  content: '';
  position: absolute;
  top: 8px;
  bottom: -22px;
  width: 2px;
  background: var(--gob-tl-line);
}
gob-timeline .gob-tl-item:last-child .gob-tl-rail::before {
  display: none;
}
gob-timeline .gob-tl-dot {
  position: relative;
  z-index: 1;
  width: 12px;
  height: 12px;
  margin-top: 4px;
  border-radius: 999px;
  background: var(--gob-tl-accent);
  box-shadow: 0 0 0 3px var(--gob-tl-accent-soft);
  flex: 0 0 auto;
}
gob-timeline .gob-tl-icon {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-left: -5px;
  border-radius: 999px;
  background: var(--gob-tl-accent-soft);
  color: var(--gob-tl-accent-text);
  flex: 0 0 auto;
}
gob-timeline .gob-tl-body {
  display: grid;
  gap: 4px;
  min-width: 0;
}
gob-timeline .gob-tl-time {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--gob-tl-muted);
}
gob-timeline .gob-tl-title {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--gob-tl-title);
}
gob-timeline .gob-tl-desc {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.45;
  color: var(--gob-tl-text);
}
gob-timeline .gob-tl-pill {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  height: 22px;
  padding: 0 8px;
  border-radius: 999px;
  background: var(--gob-tl-accent-soft);
  color: var(--gob-tl-accent-text);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
gob-timeline[variant='cards'] .gob-tl-body,
gob-timeline[variant='complete'] .gob-tl-body {
  padding: 12px 14px;
  border: 1px solid var(--gob-tl-border);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.55);
}
gob-timeline[tone='dark'][variant='cards'] .gob-tl-body,
gob-timeline[tone='dark'][variant='complete'] .gob-tl-body {
  background: rgba(255, 255, 255, 0.06);
}
gob-timeline[variant='alternating'] .gob-tl-item:nth-child(even) .gob-tl-body {
  text-align: right;
}
gob-timeline[variant='alternating'] .gob-tl-item:nth-child(even) .gob-tl-pill {
  margin-inline-start: auto;
}
gob-timeline[variant='dense'] .gob-tl-item {
  gap: 10px;
  padding-bottom: 12px;
}
gob-timeline[variant='dense'] .gob-tl-title {
  font-size: 13px;
}
`;
