'use client';

import { Bell, MagnifyingGlass } from '@phosphor-icons/react';

import type { Tone, TopbarVariant } from '@mariasan001/ui-wc';

import type { TopbarExample } from './topbar-data';
import { TOPBAR_THEME_VARS } from './topbar-themes';
import local from './topbar.module.css';

function Start({ variant }: { variant: TopbarVariant }) {
  if (variant === 'breadcrumb') {
    return (
      <nav slot="start" className={local.crumbs} aria-label="Migas">
        <a href="#" onClick={(e) => e.preventDefault()}>
          Inicio
        </a>
        <span>/</span>
        <a href="#" onClick={(e) => e.preventDefault()}>
          Expedientes
        </a>
        <span>/</span>
        <strong>Detalle</strong>
      </nav>
    );
  }

  return (
    <div slot="start" className={local.titleBlock}>
      <strong>{variant === 'dense' ? 'Cola operativa' : 'Inicio'}</strong>
      <small>
        {variant === 'dense' ? 'Turno matutino' : 'Direccion de Operaciones'}
      </small>
    </div>
  );
}

function Center({ variant }: { variant: TopbarVariant }) {
  if (variant !== 'search' && variant !== 'complete') {
    return <div slot="center" />;
  }

  return (
    <label slot="center" className={local.search}>
      <MagnifyingGlass weight="thin" size={16} aria-hidden="true" />
      <span>Buscar expediente</span>
    </label>
  );
}

function End({ variant }: { variant: TopbarVariant }) {
  const showActions = variant === 'actions' || variant === 'complete';
  const showBell =
    variant === 'notifications' ||
    variant === 'complete' ||
    variant === 'search' ||
    variant === 'basic' ||
    variant === 'dense' ||
    variant === 'breadcrumb' ||
    variant === 'actions';

  return (
    <>
      {showActions ? (
        <>
          <button type="button" className={local.btnGhost}>
            Exportar
          </button>
          <button type="button" className={local.btnPrimary}>
            Nuevo
          </button>
        </>
      ) : null}
      {showBell ? (
        <button type="button" className={local.iconBtn} aria-label="Notificaciones">
          <Bell weight="thin" size={18} />
          <i className={local.dot} />
        </button>
      ) : null}
      <span className={local.avatar}>MG</span>
    </>
  );
}

export function TopbarDemo({
  example,
  tone,
}: {
  example: TopbarExample;
  tone: Tone;
}) {
  return (
    <div className={local.stageInner}>
      <gob-topbar
        key={`${example.id}-${tone}`}
        variant={example.variant}
        tone={tone}
        className={`${local.topbar} ${example.variant === 'dense' ? local.topbarDense : ''}`}
        style={TOPBAR_THEME_VARS[tone]}
      >
        <Start variant={example.variant} />
        <Center variant={example.variant} />
        <End variant={example.variant} />
      </gob-topbar>
    </div>
  );
}
