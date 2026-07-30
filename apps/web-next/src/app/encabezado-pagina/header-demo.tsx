'use client';

import type { PageHeaderSurface, PageHeaderVariant } from '@mariasan001/ui-wc';

import type { HeaderExample } from './header-data';
import local from './header.module.css';

function Breadcrumb() {
  return (
    <nav slot="breadcrumb" className={local.crumbs} aria-label="Migas">
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

function Actions() {
  return (
    <>
      <button type="button" className={local.btnGhost}>
        Exportar
      </button>
      <button type="button" className={local.btnPrimary}>
        Nuevo
      </button>
    </>
  );
}

function contentFor(variant: PageHeaderVariant) {
  const title = variant === 'dense' ? 'Cola operativa' : 'Expedientes';
  const description =
    variant === 'dense'
      ? 'Turno matutino · 24 pendientes'
      : 'Consulta y da seguimiento a los expedientes abiertos de la direccion.';

  const showCrumb = variant === 'breadcrumb' || variant === 'complete';
  const showDesc =
    variant === 'description' || variant === 'complete' || variant === 'dense';
  const showStatus = variant === 'status' || variant === 'complete';
  const showActions = variant === 'actions' || variant === 'complete';

  return (
    <>
      {showCrumb ? <Breadcrumb /> : null}
      <h1 slot="title">{title}</h1>
      {showStatus ? (
        <span slot="meta" className={local.status}>
          En revision
        </span>
      ) : null}
      {showDesc ? <p slot="description">{description}</p> : null}
      {showActions ? <Actions /> : null}
    </>
  );
}

export function HeaderDemo({
  example,
  surface,
}: {
  example: HeaderExample;
  surface: PageHeaderSurface;
}) {
  return (
    <div className={local.stageInner}>
      <gob-page-header
        key={`${example.id}-${surface}`}
        variant={example.variant}
        surface={surface}
        className={local.header}
      >
        {contentFor(example.variant)}
      </gob-page-header>
    </div>
  );
}
