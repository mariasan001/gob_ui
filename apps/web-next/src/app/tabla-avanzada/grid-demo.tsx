'use client';

import { Fragment } from 'react';
import {
  ArrowsClockwise,
  DownloadSimple,
  Funnel,
  MagnifyingGlass,
} from '@phosphor-icons/react';

import type { DataGridTone } from '@mariasan001/ui-wc';

import { DEMO_ROWS, type GridExample } from './grid-data';
import local from './grid.module.css';

function FilterChip({ label }: { label: string }) {
  return <span className={local.filterChip}>{label}</span>;
}

export function GridDemo({
  example,
  tone,
}: {
  example: GridExample;
  tone: DataGridTone;
}) {
  const wide = example.variant === 'wide';
  const frozenLeft = example.variant === 'frozen-left';
  const frozenRight = example.variant === 'frozen-right';
  const withExpand = example.variant === 'expandable';
  const withColFilter = example.variant === 'column-filter';
  const grouped = example.variant === 'grouped';
  const showRowActions =
    frozenRight ||
    example.variant === 'toolbar' ||
    example.variant === 'filters' ||
    example.variant === 'paginated';

  return (
    <div className={local.stageInner}>
      <gob-data-grid
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
              <ArrowsClockwise weight="bold" size={13} />
              Refrescar
            </button>
            <button type="button" className={local.toolBtn}>
              <DownloadSimple weight="bold" size={13} />
              Exportar
            </button>
          </span>
        ) : null}

        {example.showFilters ? (
          <div slot="filters" className={local.filtersRow}>
            <label className={local.search}>
              <MagnifyingGlass weight="bold" size={14} />
              <input placeholder="Folio, CURP o RFC" />
            </label>
            <FilterChip label="Dependencia: Todas" />
            <FilterChip label="Estatus: Activos" />
            <button type="button" className={local.toolBtn}>
              <Funnel weight="bold" size={13} />
              Mas filtros
            </button>
          </div>
        ) : null}

        {example.showBulk ? (
          <div slot="bulk" className={local.bulkRow}>
            <span>3 seleccionados</span>
            <span className={local.toolbar}>
              <button type="button" className={local.toolBtn}>
                Reasignar
              </button>
              <button type="button" className={local.toolBtn}>
                Archivar
              </button>
              <button type="button" className={local.toolBtn}>
                Exportar lote
              </button>
            </span>
          </div>
        ) : null}

        <table>
          <thead>
            <tr>
              {withExpand ? <th style={{ width: 40 }} /> : null}
              {example.variant === 'bulk' ? (
                <th style={{ width: 36 }}>
                  <input
                    className="gob-dg-check"
                    type="checkbox"
                    aria-label="Seleccionar todo"
                    defaultChecked
                  />
                </th>
              ) : null}
              <th>Folio</th>
              <th>Ciudadano</th>
              <th>Dependencia</th>
              {wide ? (
                <>
                  <th>Municipio</th>
                  <th>Programa</th>
                  <th>Fecha</th>
                </>
              ) : (
                <th>Fecha</th>
              )}
              <th className="num">Monto</th>
              <th>Estatus</th>
              {showRowActions || frozenRight ? <th>Acciones</th> : null}
            </tr>
            {withColFilter ? (
              <tr>
                <th>
                  <input className="gob-dg-col-filter" placeholder="Folio" />
                </th>
                <th>
                  <input className="gob-dg-col-filter" placeholder="Nombre" />
                </th>
                <th>
                  <input className="gob-dg-col-filter" placeholder="Dep." />
                </th>
                <th>
                  <input className="gob-dg-col-filter" placeholder="Fecha" />
                </th>
                <th>
                  <input className="gob-dg-col-filter" placeholder="Monto" />
                </th>
                <th>
                  <input className="gob-dg-col-filter" placeholder="Estatus" />
                </th>
              </tr>
            ) : null}
          </thead>
          <tbody>
            {grouped ? (
              <>
                <tr className="gob-dg-group">
                  <td colSpan={6}>Salud · 4,102 expedientes</td>
                </tr>
                {DEMO_ROWS.filter((r) => r.dependencia === 'Salud').map((row) => (
                  <tr key={row.folio}>
                    <td>
                      <code className={local.folio}>{row.folio}</code>
                    </td>
                    <td>{row.ciudadano}</td>
                    <td>{row.dependencia}</td>
                    <td>{row.fecha}</td>
                    <td className="num">{row.monto}</td>
                    <td>
                      <span className="gob-dg-status" data-tone={row.estatus}>
                        {row.estatusLabel}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="gob-dg-group">
                  <td colSpan={6}>Educacion · 3,441 expedientes</td>
                </tr>
                {DEMO_ROWS.filter((r) => r.dependencia === 'Educacion').map(
                  (row) => (
                    <tr key={row.folio}>
                      <td>
                        <code className={local.folio}>{row.folio}</code>
                      </td>
                      <td>{row.ciudadano}</td>
                      <td>{row.dependencia}</td>
                      <td>{row.fecha}</td>
                      <td className="num">{row.monto}</td>
                      <td>
                        <span className="gob-dg-status" data-tone={row.estatus}>
                          {row.estatusLabel}
                        </span>
                      </td>
                    </tr>
                  ),
                )}
              </>
            ) : (
              DEMO_ROWS.map((row, index) => (
                <Fragment key={row.folio}>
                  <tr>
                    {withExpand ? (
                      <td>
                        <button
                          type="button"
                          className="gob-dg-expand"
                          aria-label="Expandir"
                        >
                          {index === 1 ? '−' : '+'}
                        </button>
                      </td>
                    ) : null}
                    {example.variant === 'bulk' ? (
                      <td>
                        <input
                          className="gob-dg-check"
                          type="checkbox"
                          defaultChecked={index < 3}
                          aria-label={`Seleccionar ${row.folio}`}
                        />
                      </td>
                    ) : null}
                    <td className={frozenLeft ? 'freeze' : undefined}>
                      <code className={local.folio}>{row.folio}</code>
                    </td>
                    <td>{row.ciudadano}</td>
                    <td>{row.dependencia}</td>
                    {wide ? (
                      <>
                        <td>{row.municipio}</td>
                        <td>{row.programa}</td>
                        <td>{row.fecha}</td>
                      </>
                    ) : (
                      <td>{row.fecha}</td>
                    )}
                    <td className="num">{row.monto}</td>
                    <td>
                      <span className="gob-dg-status" data-tone={row.estatus}>
                        {row.estatusLabel}
                      </span>
                    </td>
                    {showRowActions || frozenRight ? (
                      <td>
                        <div className="gob-dg-actions">
                          <button type="button">Ver</button>
                          <button type="button">PDF</button>
                        </div>
                      </td>
                    ) : null}
                  </tr>
                  {withExpand && index === 1 ? (
                    <tr className="gob-dg-detail">
                      <td colSpan={wide ? 10 : 7}>
                        Historial: recibido 11/03 · documentacion completa ·
                        asignado a mesa 4 · pendiente de firma electronica.
                      </td>
                    </tr>
                  ) : null}
                </Fragment>
              ))
            )}
          </tbody>
        </table>

        {example.footer ? (
          <span slot="footer" className={local.footerSlot}>
            <span>{example.footer}</span>
            {example.variant === 'paginated' ? (
              <span className={local.pager}>
                <button type="button" className={local.toolBtn}>
                  Anterior
                </button>
                <strong>3</strong>
                <button type="button" className={local.toolBtn}>
                  Siguiente
                </button>
              </span>
            ) : null}
          </span>
        ) : null}
      </gob-data-grid>
    </div>
  );
}
