'use client';

import { DownloadSimple, Funnel } from '@phosphor-icons/react';

import type { TableTone } from '@mariasan001/ui-wc';

import {
  DEMO_ROWS,
  DEMO_ROWS_LONG,
  type TableExample,
} from './table-data';
import local from './table.module.css';

function SortTh({
  label,
  dir,
  align = 'left',
}: {
  label: string;
  dir?: 'asc' | 'desc';
  align?: 'left' | 'right';
}) {
  return (
    <th className={align === 'right' ? 'num' : undefined}>
      <button type="button" className="gob-tb-sort" data-dir={dir || undefined}>
        {label}
      </button>
    </th>
  );
}

export function TableDemo({
  example,
  tone,
}: {
  example: TableExample;
  tone: TableTone;
}) {
  const rows =
    example.variant === 'sticky' || example.variant === 'dense'
      ? DEMO_ROWS_LONG
      : DEMO_ROWS;

  const showCheck = example.variant === 'selectable';
  const showSort = example.variant === 'sortable';
  const showStatus =
    example.variant === 'status' || example.variant === 'actions';
  const showRowActions = example.variant === 'actions';
  const rich =
    example.variant === 'basic' ||
    example.variant === 'status' ||
    example.variant === 'actions' ||
    example.variant === 'selectable' ||
    example.variant === 'sortable';

  return (
    <div className={local.stageInner}>
      <gob-table
        key={`${example.id}-${tone}`}
        variant={example.variant}
        tone={tone}
      >
        <span slot="title">{example.cardTitle}</span>
        {example.subtitle ? (
          <span slot="subtitle">{example.subtitle}</span>
        ) : null}
        {example.showActions ? (
          <span slot="actions" className={local.toolbar}>
            <button type="button" className={local.toolBtn}>
              <Funnel weight="bold" size={13} />
              Filtrar
            </button>
            <button type="button" className={local.toolBtn}>
              <DownloadSimple weight="bold" size={13} />
              Exportar
            </button>
          </span>
        ) : null}

        <table>
          <thead>
            <tr>
              {showCheck ? (
                <th style={{ width: 36 }}>
                  <input
                    className="gob-tb-check"
                    type="checkbox"
                    aria-label="Seleccionar todo"
                  />
                </th>
              ) : null}
              {showSort ? (
                <>
                  <SortTh label="Expediente" dir="asc" />
                  <SortTh label="Ciudadano" />
                  <SortTh label="Dependencia" />
                  <SortTh label="Fecha" />
                  <SortTh label="Monto" align="right" dir="desc" />
                </>
              ) : (
                <>
                  <th>Expediente</th>
                  <th>Ciudadano</th>
                  <th>Dependencia</th>
                  <th>Fecha</th>
                  <th className="num">Monto</th>
                </>
              )}
              {showStatus ? <th>Estatus</th> : null}
              {showRowActions ? <th style={{ width: 48 }} /> : null}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.folio}>
                {showCheck ? (
                  <td>
                    <input
                      className="gob-tb-check"
                      type="checkbox"
                      defaultChecked={index < 2}
                      aria-label={`Seleccionar ${row.folio}`}
                    />
                  </td>
                ) : null}
                <td>
                  {rich ? (
                    <span className="gob-tb-stack">
                      <span className="gob-tb-primary">{row.folio}</span>
                      <span className="gob-tb-secondary">Creado: {row.fecha}</span>
                    </span>
                  ) : (
                    <code className={local.folio}>{row.folio}</code>
                  )}
                </td>
                <td>
                  {rich ? (
                    <span className="gob-tb-cell">
                      <span className="gob-tb-avatar" data-hue={row.hue}>
                        {row.initials}
                      </span>
                      <span className="gob-tb-stack">
                        <span className="gob-tb-primary">{row.ciudadano}</span>
                        <span className="gob-tb-secondary">{row.curp}</span>
                      </span>
                    </span>
                  ) : (
                    row.ciudadano
                  )}
                </td>
                <td>{row.dependencia}</td>
                <td>
                  <span className="gob-tb-secondary">{row.fecha}</span>
                </td>
                <td className="num">{row.monto}</td>
                {showStatus ? (
                  <td>
                    <span className="gob-tb-status" data-tone={row.estatus}>
                      <span className="gob-tb-dot" />
                      {row.estatusLabel}
                    </span>
                  </td>
                ) : null}
                {showRowActions ? (
                  <td>
                    <div className="gob-tb-actions">
                      <button
                        type="button"
                        className="gob-tb-kebab"
                        aria-label="Mas acciones"
                      >
                        ⋮
                      </button>
                    </div>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>

        {example.variant === 'empty' ? (
          <div slot="empty" className={local.emptyBox}>
            <p className={local.emptyTitle}>Sin resultados</p>
            <p className={local.emptyDesc}>
              No hay expedientes con ese folio, CURP o RFC. Ajusta filtros o
              limpia la busqueda.
            </p>
          </div>
        ) : null}

        {example.footer ? (
          <span slot="footer" className={local.footerSlot}>
            <span>{example.footer}</span>
          </span>
        ) : null}
      </gob-table>
    </div>
  );
}
