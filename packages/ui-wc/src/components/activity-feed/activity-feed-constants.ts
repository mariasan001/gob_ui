export const ACTIVITY_FEED_VARIANTS = [
  'basic',
  'avatar',
  'actions',
  'dense',
  'grouped',
  'unread',
  'complete',
] as const;

export type ActivityFeedVariant = (typeof ACTIVITY_FEED_VARIANTS)[number];

export const ACTIVITY_FEED_TONES = [
  'primary',
  'accent',
  'dark',
  'neutral',
  'soft',
] as const;

export type ActivityFeedTone = (typeof ACTIVITY_FEED_TONES)[number];

export const ACTIVITY_FEED_OBSERVED_ATTRIBUTES = ['variant', 'tone'] as const;

export function resolveActivityFeedVariant(
  value: string | null,
): ActivityFeedVariant {
  if (
    value === 'avatar' ||
    value === 'actions' ||
    value === 'dense' ||
    value === 'grouped' ||
    value === 'unread' ||
    value === 'complete'
  ) {
    return value;
  }
  return 'basic';
}

export function resolveActivityFeedTone(
  value: string | null,
): ActivityFeedTone {
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

export const activityFeedLightDomStyles = `
gob-activity-feed {
  --gob-af-accent: #9f2141;
  --gob-af-accent-soft: rgba(159, 33, 65, 0.12);
  --gob-af-accent-text: #9f2141;
  --gob-af-title: #181511;
  --gob-af-muted: #8a8278;
  --gob-af-text: #6b665f;
  --gob-af-border: rgba(24, 21, 17, 0.08);
  --gob-af-hover: rgba(159, 33, 65, 0.04);
  --gob-af-font: var(--gob-font-sans, Gotham, Raleway, sans-serif);
  --gob-af-pad-y: 14px;
  --gob-af-pad-x: 16px;
}
gob-activity-feed[tone='accent'] {
  --gob-af-accent: #bc945a;
  --gob-af-accent-soft: rgba(188, 148, 90, 0.22);
  --gob-af-accent-text: #7a5a2e;
  --gob-af-hover: rgba(188, 148, 90, 0.07);
}
gob-activity-feed[tone='dark'] {
  --gob-af-accent: #ffffff;
  --gob-af-accent-soft: rgba(255, 255, 255, 0.14);
  --gob-af-accent-text: #ffffff;
  --gob-af-title: #ffffff;
  --gob-af-muted: rgba(255, 255, 255, 0.5);
  --gob-af-text: rgba(255, 255, 255, 0.72);
  --gob-af-border: rgba(255, 255, 255, 0.1);
  --gob-af-hover: rgba(255, 255, 255, 0.06);
}
gob-activity-feed[tone='neutral'] {
  --gob-af-accent: #6b655c;
  --gob-af-accent-soft: rgba(24, 21, 17, 0.08);
  --gob-af-accent-text: #181511;
}
gob-activity-feed[tone='soft'] {
  --gob-af-accent: #a67c52;
  --gob-af-accent-soft: rgba(231, 215, 189, 0.55);
  --gob-af-accent-text: #7a5a2e;
}
gob-activity-feed[variant='dense'] {
  --gob-af-pad-y: 10px;
  --gob-af-pad-x: 12px;
}

gob-activity-feed .gob-af-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: var(--gob-af-pad-y) var(--gob-af-pad-x);
  border: 0;
  border-bottom: 1px solid var(--gob-af-border);
  background: transparent;
  color: inherit;
  font-family: var(--gob-af-font);
  text-align: left;
}
gob-activity-feed .gob-af-item:last-child {
  border-bottom: 0;
}
gob-activity-feed .gob-af-item:hover {
  background: var(--gob-af-hover);
}
gob-activity-feed .gob-af-item[data-unread='true'] {
  background: var(--gob-af-accent-soft);
}

gob-activity-feed .gob-af-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: var(--gob-af-accent-soft);
  color: var(--gob-af-accent-text);
  font-size: 12px;
  font-weight: 700;
  flex: 0 0 auto;
}
gob-activity-feed[variant='dense'] .gob-af-avatar {
  width: 30px;
  height: 30px;
  font-size: 11px;
}

gob-activity-feed .gob-af-dot {
  width: 8px;
  height: 8px;
  margin-top: 8px;
  border-radius: 999px;
  background: var(--gob-af-accent);
  flex: 0 0 auto;
}

gob-activity-feed .gob-af-body {
  display: grid;
  gap: 2px;
  min-width: 0;
  flex: 1 1 auto;
}
gob-activity-feed .gob-af-primary {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: var(--gob-af-title);
}
gob-activity-feed .gob-af-primary strong {
  font-weight: 700;
  color: var(--gob-af-accent-text);
}
gob-activity-feed .gob-af-secondary {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--gob-af-muted);
}
gob-activity-feed .gob-af-meta {
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  color: var(--gob-af-muted);
  white-space: nowrap;
  flex: 0 0 auto;
}
gob-activity-feed .gob-af-action {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid var(--gob-af-border);
  background: transparent;
  color: var(--gob-af-title);
  font-family: var(--gob-af-font);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  flex: 0 0 auto;
}
gob-activity-feed .gob-af-action:hover {
  background: var(--gob-af-accent-soft);
  color: var(--gob-af-accent-text);
  border-color: transparent;
}
gob-activity-feed .gob-af-group {
  display: block;
  padding: 10px 16px 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gob-af-muted);
  border-bottom: 1px solid var(--gob-af-border);
}
`;
