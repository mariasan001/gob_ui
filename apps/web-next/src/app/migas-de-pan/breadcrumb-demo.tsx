'use client';

import { House } from '@phosphor-icons/react';

import type { BreadcrumbVariant } from '@mariasan001/ui-wc';

import type { BreadcrumbExample, BreadcrumbTone } from './breadcrumb-data';
import { BREADCRUMB_THEME_VARS } from './breadcrumb-themes';
import local from './breadcrumb.module.css';

function Sep({ variant }: { variant: BreadcrumbVariant }) {
  return (
    <span className={local.sep} data-sep aria-hidden="true">
      {variant === 'chevron' ? '›' : '/'}
    </span>
  );
}

function crumbsFor(variant: BreadcrumbVariant) {
  if (variant === 'collapsed') {
    return (
      <>
        <a href="#" className={local.crumb} onClick={(e) => e.preventDefault()}>
          Inicio
        </a>
        <Sep variant={variant} />
        <span className={local.ellipsis} aria-hidden="true">
          …
        </span>
        <Sep variant={variant} />
        <a href="#" className={local.crumb} onClick={(e) => e.preventDefault()}>
          Expedientes
        </a>
        <Sep variant={variant} />
        <strong className={local.current} aria-current="page">
          Detalle
        </strong>
      </>
    );
  }

  if (variant === 'icons') {
    return (
      <>
        <a
          href="#"
          className={`${local.crumb} ${local.crumbIcon}`}
          onClick={(e) => e.preventDefault()}
        >
          <House weight="thin" size={14} aria-hidden="true" />
          Inicio
        </a>
        <Sep variant={variant} />
        <a href="#" className={local.crumb} onClick={(e) => e.preventDefault()}>
          Expedientes
        </a>
        <Sep variant={variant} />
        <strong className={local.current} aria-current="page">
          Detalle
        </strong>
      </>
    );
  }

  if (variant === 'complete') {
    return (
      <>
        <a
          href="#"
          className={`${local.crumb} ${local.crumbIcon}`}
          onClick={(e) => e.preventDefault()}
        >
          <House weight="thin" size={14} aria-hidden="true" />
          Inicio
        </a>
        <Sep variant={variant} />
        <a href="#" className={local.crumb} onClick={(e) => e.preventDefault()}>
          Operaciones
        </a>
        <Sep variant={variant} />
        <a href="#" className={local.crumb} onClick={(e) => e.preventDefault()}>
          Expedientes
        </a>
        <Sep variant={variant} />
        <a href="#" className={local.crumb} onClick={(e) => e.preventDefault()}>
          2026
        </a>
        <Sep variant={variant} />
        <strong className={local.current} aria-current="page">
          EXP-1842
        </strong>
      </>
    );
  }

  return (
    <>
      <a href="#" className={local.crumb} onClick={(e) => e.preventDefault()}>
        Inicio
      </a>
      <Sep variant={variant} />
      <a href="#" className={local.crumb} onClick={(e) => e.preventDefault()}>
        Expedientes
      </a>
      <Sep variant={variant} />
      <strong className={local.current} aria-current="page">
        Detalle
      </strong>
    </>
  );
}

export function BreadcrumbDemo({
  example,
  tone,
}: {
  example: BreadcrumbExample;
  tone: BreadcrumbTone;
}) {
  // Vars en un wrapper (no en el CE) para evitar mismatch de hidratacion
  // cuando el custom element muta o reordena el atributo style.
  return (
    <div className={local.stageInner} style={BREADCRUMB_THEME_VARS[tone]}>
      <gob-breadcrumb
        key={`${example.id}-${tone}`}
        variant={example.variant}
        tone={tone}
        className={example.variant === 'underline' ? local.underline : undefined}
      >
        {crumbsFor(example.variant)}
      </gob-breadcrumb>
    </div>
  );
}
