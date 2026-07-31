'use client';

import { Fragment } from 'react';
import {
  ArrowsClockwise,
  CalendarBlank,
  CaretLeft,
  CaretRight,
  DownloadSimple,
  Funnel,
  MagnifyingGlass,
  SortAscending,
} from '@phosphor-icons/react';

import type { DataGridTone } from '@mariasan001/ui-wc';

import { DEMO_ROWS, STATUS_TABS, type GridExample } from './grid-data';
import local from './grid.module.css';

function FilterChip({ label }: { label: string }) {
  return (
    <span className={local.filterChip}>
      {label}
      <button type="button" aria-label={`Quitar ${label}`} className={local.chipX}>
        ×
      </button>
    </span>
  );
}

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
      <button
        type="button"
        className="gob-dg-sort"
        data-dir={dir || undefined}
      >
        {label}
      </button>
    </th>
  );
}

function PersonCell({
  name,
  curp,
  initials,
  hue,
}: {
  name: string;
  curp: string;
  initials: string;
  hue: number;
}) {
  return (
    <span className="gob-dg-cell">
      <span className="gob-dg-avatar" data-hue={hue}>
        {initials}
      </span>
      <span className="gob-dg-stack">
        <span className="gob-dg-primary gob-dg-link">{name}</span>
        <span className="gob-dg-secondary">{curp}</span>
      </span>
    </span>
  );
}

function FolioCell({
  folio,
  fecha,
  isNew,
}: {
  folio: string;
  fecha: string;
  isNew?: boolean;
}) {
  return (
    <span className="gob-dg-stack">
      <span className="gob-dg-primary">
        {folio}
        {isNew ? <span className="gob-dg-badge-new">NUEVO</span> : null}
      </span>
      <span className="gob-dg-secondary">Creado: {fecha}</span>
    </span>
  );
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
    example.variant === 'paginated' ||
    example.variant === 'wide' ||
    withExpand;
  const showSort =
    example.variant === 'filters' ||
    example.variant === 'paginated' ||
    example.variant === 'toolbar' ||
    example.variant === 'wide';

  const colSpan =
    (withExpand ? 1 : 0) +
    (example.variant === 'bulk' ? 1 : 0) +
    5 +
    (wide ? 3 : 0) +
    (showRowActions || frozenRight ? 1 : 0);

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
              <SortAscending weight="bold" size={13} />
              Ordenar
            </button>
            <button type="button" className={local.toolBtn}>
              <Funnel weight="bold" size={13} />
              Filtrar
            </button>
            <button type="button" className={local.toolBtn}>
              <ArrowsClockwise weight="bold" size={13} />
              Refrescar
            </button>
            <button type="button" className={`${local.toolBtn} ${local.toolBtnPrimary}`}>
              <DownloadSimple weight="bold" size={13} />
              Exportar
            </button>
          </span>
        ) : null}

        {example.showTabs ? (
          <nav slot="tabs" className={local.tabs} aria-label="Estatus">
            {STATUS_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${local.tab} ${'active' in tab && tab.active ? local.tabActive : ''}`}
              >
                {tab.label}
                <span className={local.tabCount}>{tab.count.toLocaleString('es-MX')}</span>
              </button>
            ))}
          </nav>
        ) : null}

        {example.showFilters ? (
          <div slot="filters" className={local.filtersRow}>
            <label className={local.search}>
              <MagnifyingGlass weight="bold" size={14} />
              <input placeholder="Buscar folio, CURP o nombre..." />
            </label>
            <button type="button" className={local.dateBtn}>
              <CalendarBlank weight="bold" size={14} />
              1 mar – 30 mar 2026
            </button>
            <FilterChip label="Dependencia: Todas" />
            <FilterChip label="Pago: Cualquiera" />
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
              {showSort ? (
                <>
                  <SortTh label="Expediente" dir="desc" />
                  <SortTh label="Ciudadano" />
                  <SortTh label="Dependencia" />
                  {wide ? (
                    <>
                      <SortTh label="Municipio" />
                      <SortTh label="Programa" />
                      <SortTh label="Actualizado" />
                    </>
                  ) : (
                    <SortTh label="Actualizado" />
                  )}
                  <SortTh label="Monto" align="right" />
                  <SortTh label="Estatus" />
                </>
              ) : (
                <>
                  <th>Expediente</th>
                  <th>Ciudadano</th>
                  <th>Dependencia</th>
                  {wide ? (
                    <>
                      <th>Municipio</th>
                      <th>Programa</th>
                      <th>Actualizado</th>
                    </>
                  ) : (
                    <th>Actualizado</th>
                  )}
                  <th className="num">Monto</th>
                  <th>Estatus</th>
                </>
              )}
              {showRowActions || frozenRight ? <th style={{ width: 48 }} /> : null}
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
                      <FolioCell folio={row.folio} fecha={row.fecha} />
                    </td>
                    <td>
                      <PersonCell
                        name={row.ciudadano}
                        curp={row.curp}
                        initials={row.initials}
                        hue={row.hue}
                      />
                    </td>
                    <td>
                      <span className="gob-dg-tag">{row.dependencia}</span>
                    </td>
                    <td>
                      <span className="gob-dg-secondary">{row.relative}</span>
                    </td>
                    <td className="num">{row.monto}</td>
                    <td>
                      <span className="gob-dg-status" data-tone={row.estatus}>
                        <span className="gob-dg-dot" />
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
                        <FolioCell folio={row.folio} fecha={row.fecha} />
                      </td>
                      <td>
                        <PersonCell
                          name={row.ciudadano}
                          curp={row.curp}
                          initials={row.initials}
                          hue={row.hue}
                        />
                      </td>
                      <td>
                        <span className="gob-dg-tag">{row.dependencia}</span>
                      </td>
                      <td>
                        <span className="gob-dg-secondary">{row.relative}</span>
                      </td>
                      <td className="num">{row.monto}</td>
                      <td>
                        <span className="gob-dg-status" data-tone={row.estatus}>
                          <span className="gob-dg-dot" />
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
                      <FolioCell
                        folio={row.folio}
                        fecha={row.fecha}
                        isNew={row.isNew}
                      />
                    </td>
                    <td>
                      <PersonCell
                        name={row.ciudadano}
                        curp={row.curp}
                        initials={row.initials}
                        hue={row.hue}
                      />
                    </td>
                    <td>
                      <span className="gob-dg-stack">
                        <span className="gob-dg-primary">{row.dependencia}</span>
                        <span className="gob-dg-secondary">{row.programa}</span>
                      </span>
                    </td>
                    {wide ? (
                      <>
                        <td>{row.municipio}</td>
                        <td>
                          <span className="gob-dg-tag">{row.programa}</span>
                        </td>
                        <td>
                          <span className="gob-dg-secondary">{row.relative}</span>
                        </td>
                      </>
                    ) : (
                      <td>
                        <span className="gob-dg-secondary">{row.relative}</span>
                      </td>
                    )}
                    <td className="num">
                      <span className="gob-dg-stack" style={{ textAlign: 'right' }}>
                        <span className="gob-dg-primary">{row.monto}</span>
                        <span
                          className={
                            row.pagado === '$0.00'
                              ? 'gob-dg-amount-neg'
                              : 'gob-dg-amount-pos'
                          }
                          style={{ fontSize: 12 }}
                        >
                          Pagado {row.pagado}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="gob-dg-status" data-tone={row.estatus}>
                        <span className="gob-dg-dot" />
                        {row.estatusLabel}
                      </span>
                    </td>
                    {showRowActions || frozenRight ? (
                      <td>
                        <div className="gob-dg-actions">
                          <button
                            type="button"
                            className="gob-dg-kebab"
                            aria-label="Mas acciones"
                          >
                            ⋮
                          </button>
                        </div>
                      </td>
                    ) : null}
                  </tr>
                  {withExpand && index === 1 ? (
                    <tr className="gob-dg-detail">
                      <td colSpan={colSpan}>
                        <div className="gob-dg-detail-card">
                          <div className="gob-dg-detail-row">
                            <span className="gob-dg-stack">
                              <span className="gob-dg-primary">
                                Cargo #1244 · Cuota de registro
                              </span>
                              <span className="gob-dg-secondary">
                                Recibido 11/03 · documentacion completa
                              </span>
                            </span>
                            <span className="gob-dg-actions">
                              <button type="button" className="gob-dg-btn">
                                Registrar pago
                              </button>
                            </span>
                          </div>
                          <div className="gob-dg-detail-row">
                            <span className="gob-dg-stack">
                              <span className="gob-dg-primary">
                                Cargo #1243 · 2 tratamientos
                              </span>
                              <span className="gob-dg-secondary">
                                Asignado a mesa 4 · pendiente de firma
                              </span>
                            </span>
                            <span className="gob-dg-status" data-tone="warn">
                              <span className="gob-dg-dot" />
                              Pendiente
                            </span>
                          </div>
                        </div>
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
            <span className={local.footerMeta}>
              <span>{example.footer}</span>
              {example.variant === 'paginated' ||
              example.variant === 'filters' ||
              example.variant === 'wide' ||
              example.variant === 'toolbar' ? (
                <label className={local.perPage}>
                  Filas
                  <select defaultValue="25" aria-label="Filas por pagina">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>
                </label>
              ) : null}
            </span>
            {example.variant === 'paginated' ||
            example.variant === 'filters' ||
            example.variant === 'toolbar' ||
            example.variant === 'wide' ? (
              <nav className={local.pager} aria-label="Paginacion">
                <button type="button" className={local.pageBtn} aria-label="Anterior">
                  <CaretLeft weight="bold" size={14} />
                </button>
                <button type="button" className={`${local.pageBtn} ${local.pageBtnActive}`}>
                  1
                </button>
                <button type="button" className={local.pageBtn}>
                  2
                </button>
                <button type="button" className={local.pageBtn}>
                  3
                </button>
                <button type="button" className={local.pageBtn}>
                  4
                </button>
                <span className={local.pageEllipsis}>…</span>
                <button type="button" className={local.pageBtn}>
                  250
                </button>
                <button type="button" className={local.pageBtn} aria-label="Siguiente">
                  <CaretRight weight="bold" size={14} />
                </button>
              </nav>
            ) : null}
          </span>
        ) : null}
      </gob-data-grid>
    </div>
  );
}
