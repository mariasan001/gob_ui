'use client';

import { useEffect, useState } from 'react';

import type { Tone } from '@mariasan001/ui-wc';

import { SAMPLE_ACTIVITY, type ActivityExample } from './activity-data';
import local from './activity.module.css';

export function ActivityDemo({
  example,
  tone,
}: {
  example: ActivityExample;
  tone: Tone;
}) {
  const variant = example.variant;
  const [flash, setFlash] = useState('');
  const [unread, setUnread] = useState<Set<string>>(
    () => new Set(SAMPLE_ACTIVITY.filter((r) => r.unread).map((r) => r.id)),
  );

  useEffect(() => {
    if (!flash) return;
    const t = window.setTimeout(() => setFlash(''), 2200);
    return () => window.clearTimeout(t);
  }, [flash]);

  const showAvatar =
    variant === 'avatar' ||
    variant === 'complete' ||
    variant === 'dense' ||
    variant === 'unread';
  const showActions = variant === 'actions' || variant === 'complete';
  const showUnread = variant === 'unread' || variant === 'complete';
  const showGrouped = variant === 'grouped';

  function renderRow(row: (typeof SAMPLE_ACTIVITY)[number]) {
    const isUnread = showUnread && unread.has(row.id);
    return (
      <div
        key={row.id}
        className="gob-af-item"
        role="article"
        data-unread={isUnread ? 'true' : undefined}
      >
        {showAvatar ? (
          <span className="gob-af-avatar">{row.initials}</span>
        ) : (
          <span className="gob-af-dot" />
        )}
        <div className="gob-af-body">
          <p className="gob-af-primary">
            <strong>{row.actor}</strong> {row.text}
          </p>
          <p className="gob-af-secondary">{row.meta}</p>
        </div>
        {showActions ? (
          <button
            type="button"
            className="gob-af-action"
            onClick={() => {
              setUnread((prev) => {
                const next = new Set(prev);
                next.delete(row.id);
                return next;
              });
              setFlash(`Abriste: ${row.actor}`);
            }}
          >
            Ver
          </button>
        ) : (
          <span className="gob-af-meta">{row.meta}</span>
        )}
      </div>
    );
  }

  return (
    <div className={local.stageInner}>
      <gob-activity-feed
        key={`${example.id}-${tone}`}
        variant={variant}
        tone={tone}
        className={local.feed}
      >
        {showGrouped
          ? (['Hoy', 'Ayer'] as const).map((group) => (
              <div key={group}>
                <div className="gob-af-group">{group}</div>
                {SAMPLE_ACTIVITY.filter((r) => r.group === group).map(renderRow)}
              </div>
            ))
          : SAMPLE_ACTIVITY.map(renderRow)}
      </gob-activity-feed>
      {flash ? <p className={local.flash}>{flash}</p> : null}
    </div>
  );
}
