'use client';

import { useEffect, useState } from 'react';
import { ArrowsClockwise, Export } from '@phosphor-icons/react';

import type { Tone } from '@mariasan001/ui-wc';

import type { ToolbarExample } from './toolbar-data';
import local from './toolbar.module.css';

export function ToolbarDemo({
  example,
  tone,
}: {
  example: ToolbarExample;
  tone: Tone;
}) {
  const variant = example.variant;
  const [density, setDensity] = useState<'comodo' | 'compacto'>('comodo');
  const [flash, setFlash] = useState('');
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (!flash) return;
    const t = window.setTimeout(() => setFlash(''), 2200);
    return () => window.clearTimeout(t);
  }, [flash]);

  const showExport = variant === 'actions' || variant === 'complete';
  const showNew =
    variant === 'basic' || variant === 'actions' || variant === 'complete';
  const showRefresh = variant === 'refresh' || variant === 'complete';
  const showDensity = variant === 'density' || variant === 'complete';

  return (
    <div className={local.stageInner}>
      <gob-toolbar
        key={`${example.id}-${tone}`}
        variant={variant}
        tone={tone}
        dense={
          (variant === 'density' || variant === 'complete') &&
          density === 'compacto'
            ? true
            : undefined
        }
        className={local.bar}
      >
        <div slot="start" className="gob-tbx-title">
          <strong>{flash || 'Expedientes'}</strong>
          <small>
            {flash
              ? 'Accion reciente'
              : density === 'compacto'
                ? 'Vista compacta'
                : 'Consulta operativa'}
          </small>
        </div>

        {showExport ? (
          <button
            type="button"
            className="gob-tbx-btn gob-tbx-btn-ghost"
            onClick={() => setFlash('Exportando CSV…')}
          >
            <Export weight="thin" size={16} aria-hidden="true" />
            Exportar
          </button>
        ) : null}

        {showNew ? (
          <button
            type="button"
            className="gob-tbx-btn gob-tbx-btn-primary"
            onClick={() => setFlash('Nuevo expediente')}
          >
            Nuevo
          </button>
        ) : null}

        {showRefresh ? (
          <button
            type="button"
            className="gob-tbx-icon-btn"
            aria-label="Refrescar"
            disabled={spinning}
            onClick={() => {
              setSpinning(true);
              setFlash('Actualizando datos…');
              window.setTimeout(() => {
                setSpinning(false);
                setFlash('Datos actualizados');
              }, 900);
            }}
          >
            <ArrowsClockwise
              weight="thin"
              size={18}
              aria-hidden="true"
              className={spinning ? local.spin : undefined}
            />
          </button>
        ) : null}

        {showDensity ? (
          <div slot="end" className="gob-tbx-seg" role="group" aria-label="Densidad">
            <button
              type="button"
              aria-pressed={density === 'comodo'}
              onClick={() => {
                setDensity('comodo');
                setFlash('Densidad comoda');
              }}
            >
              Comodo
            </button>
            <button
              type="button"
              aria-pressed={density === 'compacto'}
              onClick={() => {
                setDensity('compacto');
                setFlash('Densidad compacta');
              }}
            >
              Compacto
            </button>
          </div>
        ) : null}
      </gob-toolbar>
      {flash ? <p className={local.flash}>{flash}</p> : null}
    </div>
  );
}
