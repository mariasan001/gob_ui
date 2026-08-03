'use client';

import { useEffect, useState } from 'react';
import { FolderOpen, MagnifyingGlass, WarningCircle } from '@phosphor-icons/react';

import type { Tone } from '@mariasan001/ui-wc';

import { copyFor, type EmptyExample } from './empty-data';
import local from './empty.module.css';

export function EmptyDemo({
  example,
  tone,
}: {
  example: EmptyExample;
  tone: Tone;
}) {
  const variant = example.variant;
  const [flash, setFlash] = useState('');
  const copy = copyFor(example);

  useEffect(() => {
    if (!flash) return;
    const t = window.setTimeout(() => setFlash(''), 2200);
    return () => window.clearTimeout(t);
  }, [flash]);

  const showIcon =
    variant === 'icon' ||
    variant === 'complete' ||
    variant === 'search' ||
    variant === 'error' ||
    variant === 'dense';
  const showActions =
    variant === 'actions' || variant === 'complete' || variant === 'error';

  const Icon =
    variant === 'error'
      ? WarningCircle
      : variant === 'search'
        ? MagnifyingGlass
        : FolderOpen;

  return (
    <div className={local.stageInner}>
      <gob-empty-state
        key={`${example.id}-${tone}`}
        variant={variant}
        tone={tone}
        className={local.empty}
      >
        <div className="gob-es-inner">
          {showIcon ? (
            <span className="gob-es-icon">
              <Icon weight="thin" size={24} aria-hidden="true" />
            </span>
          ) : null}
          <p className="gob-es-title">{copy.title}</p>
          <p className="gob-es-desc">{copy.desc}</p>
          {showActions ? (
            <div className="gob-es-actions">
              <button
                type="button"
                className="gob-es-btn"
                onClick={() => setFlash('Filtros limpiados')}
              >
                Limpiar filtros
              </button>
              <button
                type="button"
                className="gob-es-btn gob-es-btn-primary"
                onClick={() =>
                  setFlash(
                    variant === 'error' ? 'Reintentando…' : 'Nuevo expediente',
                  )
                }
              >
                {variant === 'error' ? 'Reintentar' : 'Nuevo expediente'}
              </button>
            </div>
          ) : null}
        </div>
      </gob-empty-state>
      {flash ? <p className={local.flash}>{flash}</p> : null}
    </div>
  );
}
