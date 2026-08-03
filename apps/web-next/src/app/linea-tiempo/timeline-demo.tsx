'use client';

import { useState } from 'react';
import { CheckCircle, Tray, User } from '@phosphor-icons/react';

import type { Tone } from '@mariasan001/ui-wc';

import { SAMPLE_EVENTS, type TimelineExample } from './timeline-data';
import local from './timeline.module.css';

const ICONS = {
  Tray,
  User,
  CheckCircle,
} as const;

export function TimelineDemo({
  example,
  tone,
}: {
  example: TimelineExample;
  tone: Tone;
}) {
  const variant = example.variant;
  const [active, setActive] = useState<string>('2');
  const showIcon = variant === 'icons' || variant === 'complete';
  const showStatus =
    variant === 'status' ||
    variant === 'complete' ||
    variant === 'cards' ||
    variant === 'icons';

  return (
    <div className={local.stageInner}>
      <gob-timeline
        key={`${example.id}-${tone}`}
        variant={variant}
        tone={tone}
        className={local.timeline}
      >
        {SAMPLE_EVENTS.map((ev) => {
          const Icon = ICONS[ev.icon as keyof typeof ICONS];
          const isActive = active === ev.id;
          return (
            <div
              key={ev.id}
              className={`gob-tl-item ${local.clickable}`}
              role="listitem"
              tabIndex={0}
              data-active={isActive ? 'true' : undefined}
              onClick={() => setActive(ev.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActive(ev.id);
                }
              }}
            >
              <div className="gob-tl-rail">
                {showIcon ? (
                  <span className="gob-tl-icon">
                    <Icon weight="thin" size={16} aria-hidden="true" />
                  </span>
                ) : (
                  <span className="gob-tl-dot" />
                )}
              </div>
              <div className="gob-tl-body">
                <div className="gob-tl-head">
                  <p className="gob-tl-time">{ev.time}</p>
                  {showStatus ? (
                    <span className="gob-tl-pill">{ev.status}</span>
                  ) : null}
                </div>
                <p className="gob-tl-title">{ev.title}</p>
                <p className="gob-tl-desc">{ev.desc}</p>
              </div>
            </div>
          );
        })}
      </gob-timeline>
      {active ? (
        <p className={local.flash}>
          Evento: {SAMPLE_EVENTS.find((e) => e.id === active)?.title}
        </p>
      ) : null}
    </div>
  );
}
