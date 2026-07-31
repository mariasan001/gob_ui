'use client';

import { useEffect, useState } from 'react';
import { DotsThree } from '@phosphor-icons/react';

import type { Tone } from '@mariasan001/ui-wc';

import { SAMPLE_ROWS, type ListExample } from './list-data';
import local from './list.module.css';

export function ListDemo({
  example,
  tone,
}: {
  example: ListExample;
  tone: Tone;
}) {
  const variant = example.variant;
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [flash, setFlash] = useState('');

  useEffect(() => {
    if (!flash) return;
    const t = window.setTimeout(() => setFlash(''), 2200);
    return () => window.clearTimeout(t);
  }, [flash]);

  const showAvatar =
    variant === 'avatar' || variant === 'complete' || variant === 'dense';
  const showMeta = variant === 'meta' || variant === 'complete';
  const showAction = variant === 'actions' || variant === 'complete';
  const showCheck = variant === 'selectable' || variant === 'complete';

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      setFlash(
        next.size
          ? `${next.size} seleccionado${next.size === 1 ? '' : 's'}`
          : 'Sin seleccion',
      );
      return next;
    });
  }

  return (
    <div className={local.stageInner}>
      <gob-list
        key={`${example.id}-${tone}`}
        variant={variant}
        tone={tone}
        className={local.list}
      >
        {SAMPLE_ROWS.map((row) => {
          const isSelected = selected.has(row.id);
          return (
            <div
              key={row.id}
              className="gob-list-item"
              role="listitem"
              data-selected={isSelected ? 'true' : undefined}
              aria-selected={showCheck ? isSelected : undefined}
            >
              {showCheck ? (
                <input
                  className="gob-list-check"
                  type="checkbox"
                  checked={isSelected}
                  aria-label={`Seleccionar ${row.name}`}
                  onChange={() => toggle(row.id)}
                />
              ) : null}

              {showAvatar ? (
                <span className="gob-list-avatar">{row.initials}</span>
              ) : null}

              <div className="gob-list-body">
                <p className="gob-list-primary">{row.name}</p>
                <p className="gob-list-secondary">{row.detail}</p>
              </div>

              {showMeta ? (
                <div className="gob-list-meta">
                  <span>{row.meta}</span>
                  <span className="gob-list-pill">{row.status}</span>
                </div>
              ) : null}

              {showAction ? (
                <button
                  type="button"
                  className="gob-list-action"
                  aria-label={`Acciones de ${row.name}`}
                  onClick={() => setFlash(`Menu: ${row.name}`)}
                >
                  <DotsThree weight="thin" size={18} aria-hidden="true" />
                </button>
              ) : null}
            </div>
          );
        })}
      </gob-list>
      {flash ? <p className={local.flash}>{flash}</p> : null}
    </div>
  );
}
