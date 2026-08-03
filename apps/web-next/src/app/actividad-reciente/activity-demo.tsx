'use client';

import { useEffect, useState } from 'react';

import { SAMPLE_ACTIVITY, type ActivityExample, type ActivityRow } from './activity-data';
import local from './activity.module.css';

export function ActivityDemo({ example }: { example: ActivityExample }) {
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
    variant === 'unread' ||
    variant === 'status';
  const showActions = variant === 'actions' || variant === 'complete';
  const showUnread = variant === 'unread' || variant === 'complete';
  const showStatus =
    variant === 'status' || variant === 'complete' || variant === 'unread';
  const showGrouped = variant === 'grouped';

  function renderRow(row: ActivityRow) {
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
          <div className="gob-af-head">
            <p className="gob-af-primary">
              <strong>{row.actor}</strong> {row.text}
            </p>
            {showStatus ? (
              <span className="gob-af-pill" data-status={row.statusKey}>
                {row.status}
              </span>
            ) : null}
          </div>
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

  const blocks: Array<
    | { type: 'group'; label: string }
    | { type: 'item'; row: ActivityRow }
  > = [];

  if (showGrouped) {
    let last = '';
    SAMPLE_ACTIVITY.forEach((row) => {
      if (row.group !== last) {
        blocks.push({ type: 'group', label: row.group });
        last = row.group;
      }
      blocks.push({ type: 'item', row });
    });
  }

  return (
    <div className={local.stageInner}>
      <gob-activity-feed
        key={example.id}
        variant={variant}
        tone="primary"
        className={local.feed}
      >
        {showGrouped
          ? blocks.map((block) =>
              block.type === 'group' ? (
                <div key={`g-${block.label}`} className="gob-af-group">
                  {block.label}
                </div>
              ) : (
                renderRow(block.row)
              ),
            )
          : SAMPLE_ACTIVITY.map(renderRow)}
      </gob-activity-feed>
      {flash ? <p className={local.flash}>{flash}</p> : null}
    </div>
  );
}
