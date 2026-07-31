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

import {
  DEMO_ROWS,
  STATUS_TABS,
  type DemoRow,
  type GridExample,
} from './grid-data';
import local from './grid.module.css';

const RICH_VARIANTS = new Set([
  'filters',
  'paginated',
  'toolbar',
  'wide',
  'card-rows',
  'assignees',
  'progress',
  'tags',
  'live',
  'financial',
  'alert',
]);

const PAGER_VARIANTS = new Set([
  'paginated',
  'filters',
  'toolbar',
  'wide',
  'card-rows',
  'assignees',
  'progress',
  'tags',
  'live',
  'financial',
  'alert',
]);

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
      <button type="button" className="gob-dg-sort" data-dir={dir || undefined}>
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

function StatusPill({ row }: { row: DemoRow }) {
  return (
    <span className="gob-dg-status" data-tone={row.estatus}>
      <span className="gob-dg-dot" />
      {row.estatusLabel}
    </span>
  );
}

function Kebab() {
  return (
    <div className="gob-dg-actions">
      <button type="button" className="gob-dg-kebab" aria-label="Mas acciones">
        ⋮
      </button>
    </div>
  );
}

function progressTone(value: number): 'ok' | 'warn' | 'err' {
  if (value >= 70) return 'ok';
  if (value >= 40) return 'warn';
  return 'err';
}

function DefaultHeader({
  variant,
  withExpand,
  showSort,
  showRowActions,
  frozenRight,
}: {
  variant: GridExample['variant'];
  withExpand: boolean;
  showSort: boolean;
  showRowActions: boolean;
  frozenRight: boolean;
}) {
  const wide = variant === 'wide';
  const assignees = variant === 'assignees';
  const progress = variant === 'progress';
  const tags = variant === 'tags';
  const live = variant === 'live';
  const financial = variant === 'financial';
  const alert = variant === 'alert';
  const skeleton = variant === 'skeleton';

  if (skeleton) {
    return (
      <tr>
        <th>Expediente</th>
        <th>Ciudadano</th>
        <th>Dependencia</th>
        <th>Estatus</th>
        <th style={{ width: 48 }} />
      </tr>
    );
  }

  if (assignees) {
    return (
      <tr>
        <SortTh label="Expediente" />
        <SortTh label="Ciudadano" />
        <th>Asignados</th>
        <SortTh label="Estatus" />
        <th style={{ width: 48 }} />
      </tr>
    );
  }

  if (progress) {
    return (
      <tr>
        <SortTh label="Expediente" />
        <SortTh label="Ciudadano" />
        <th>Avance</th>
        <th>Score</th>
        <SortTh label="Estatus" />
        <th style={{ width: 48 }} />
      </tr>
    );
  }

  if (tags) {
    return (
      <tr>
        <SortTh label="Expediente" />
        <SortTh label="Ciudadano" />
        <th>Etiquetas</th>
        <SortTh label="Estatus" />
        <th style={{ width: 48 }} />
      </tr>
    );
  }

  if (live) {
    return (
      <tr>
        <SortTh label="Expediente" />
        <SortTh label="Ubicacion" />
        <th>Señal</th>
        <SortTh label="Estatus" />
        <th style={{ width: 48 }} />
      </tr>
    );
  }

  if (financial) {
    return (
      <tr>
        <SortTh label="Expediente" />
        <SortTh label="Ciudadano" />
        <SortTh label="Total" align="right" />
        <SortTh label="Pagado" align="right" />
        <SortTh label="Saldo" align="right" />
        <SortTh label="Estatus" />
        <th style={{ width: 48 }} />
      </tr>
    );
  }

  if (alert) {
    return (
      <tr>
        <SortTh label="Expediente" />
        <SortTh label="Ciudadano" />
        <th>Alerta</th>
        <SortTh label="Estatus" />
        <th style={{ width: 48 }} />
      </tr>
    );
  }

  return (
    <tr>
      {withExpand ? <th style={{ width: 40 }} /> : null}
      {variant === 'bulk' ? (
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
  );
}

function SpecialRows({ variant }: { variant: GridExample['variant'] }) {
  if (variant === 'skeleton') {
    return (
      <>
        {Array.from({ length: 5 }).map((_, index) => (
          <tr key={index}>
            <td>
              <span className="gob-dg-stack">
                <span className="gob-dg-skel" style={{ width: '70%' }} />
                <span className="gob-dg-skel" style={{ width: '45%' }} />
              </span>
            </td>
            <td>
              <span className="gob-dg-cell">
                <span className="gob-dg-skel" data-size="lg" />
                <span className="gob-dg-stack">
                  <span className="gob-dg-skel" style={{ width: 120 }} />
                  <span className="gob-dg-skel" style={{ width: 90 }} />
                </span>
              </span>
            </td>
            <td>
              <span className="gob-dg-skel" style={{ width: 72 }} />
            </td>
            <td>
              <span className="gob-dg-skel" data-size="pill" />
            </td>
            <td>
              <span className="gob-dg-skel" style={{ width: 18, height: 18 }} />
            </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <>
      {DEMO_ROWS.map((row) => {
        if (variant === 'assignees') {
          return (
            <tr key={row.folio}>
              <td>
                <FolioCell folio={row.folio} fecha={row.fecha} isNew={row.isNew} />
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
                <span className="gob-dg-avatars">
                  {row.assignees.map((person) => (
                    <span
                      key={`${row.folio}-${person.initials}`}
                      className="gob-dg-avatar"
                      data-hue={person.hue}
                    >
                      {person.initials}
                    </span>
                  ))}
                  {row.assigneeExtra > 0 ? (
                    <span className="gob-dg-more">+{row.assigneeExtra}</span>
                  ) : null}
                </span>
              </td>
              <td>
                <StatusPill row={row} />
              </td>
              <td>
                <Kebab />
              </td>
            </tr>
          );
        }

        if (variant === 'progress') {
          const tone = progressTone(row.progress);
          const scoreTone = progressTone(row.score * 10);
          return (
            <tr key={row.folio}>
              <td>
                <FolioCell folio={row.folio} fecha={row.fecha} isNew={row.isNew} />
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
                <span className="gob-dg-progress">
                  <span className="gob-dg-secondary">
                    {row.progress}% · docs
                  </span>
                  <span className="gob-dg-progress-track">
                    <span
                      className="gob-dg-progress-fill"
                      data-tone={tone}
                      style={{ width: `${row.progress}%` }}
                    />
                  </span>
                </span>
              </td>
              <td>
                <span
                  className="gob-dg-ring"
                  data-tone={scoreTone}
                  style={{ ['--p' as string]: row.score * 10 }}
                >
                  <span>
                    {row.score}/10
                  </span>
                </span>
              </td>
              <td>
                <StatusPill row={row} />
              </td>
              <td>
                <Kebab />
              </td>
            </tr>
          );
        }

        if (variant === 'tags') {
          return (
            <tr key={row.folio}>
              <td>
                <FolioCell folio={row.folio} fecha={row.fecha} isNew={row.isNew} />
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
                <span className="gob-dg-tags">
                  {row.tags.map((tag) => (
                    <span key={tag} className="gob-dg-tag">
                      {tag}
                    </span>
                  ))}
                </span>
              </td>
              <td>
                <StatusPill row={row} />
              </td>
              <td>
                <Kebab />
              </td>
            </tr>
          );
        }

        if (variant === 'live') {
          return (
            <tr key={row.folio}>
              <td>
                <FolioCell folio={row.folio} fecha={row.fecha} isNew={row.isNew} />
              </td>
              <td>
                <span className="gob-dg-stack">
                  <span className="gob-dg-primary">{row.location}</span>
                  <span className="gob-dg-secondary">{row.locationNote}</span>
                </span>
              </td>
              <td>
                {row.live ? (
                  <span className="gob-dg-live">
                    <span className="gob-dg-dot" />
                    Live
                  </span>
                ) : (
                  <span className="gob-dg-tag">Offline</span>
                )}
              </td>
              <td>
                <StatusPill row={row} />
              </td>
              <td>
                <Kebab />
              </td>
            </tr>
          );
        }

        if (variant === 'financial') {
          return (
            <tr key={row.folio}>
              <td>
                <FolioCell folio={row.folio} fecha={row.fecha} isNew={row.isNew} />
              </td>
              <td>
                <PersonCell
                  name={row.ciudadano}
                  curp={row.curp}
                  initials={row.initials}
                  hue={row.hue}
                />
              </td>
              <td className="num">
                <span className="gob-dg-primary">{row.monto}</span>
              </td>
              <td className="num">
                <span
                  className={
                    row.pagado === '$0.00'
                      ? 'gob-dg-amount-neg'
                      : 'gob-dg-amount-pos'
                  }
                >
                  {row.pagado}
                </span>
              </td>
              <td className="num">
                <span
                  className={
                    row.saldo === '$0.00'
                      ? 'gob-dg-amount-pos'
                      : 'gob-dg-amount-neg'
                  }
                >
                  {row.saldo}
                </span>
              </td>
              <td>
                <StatusPill row={row} />
              </td>
              <td>
                <Kebab />
              </td>
            </tr>
          );
        }

        if (variant === 'alert') {
          return (
            <tr
              key={row.folio}
              className={row.alert ? 'gob-dg-alert' : undefined}
            >
              <td>
                <FolioCell folio={row.folio} fecha={row.fecha} isNew={row.isNew} />
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
                {row.alert ? (
                  <span className="gob-dg-priority">
                    <span className="gob-dg-dot" />
                    {row.alertReason}
                  </span>
                ) : (
                  <span className="gob-dg-secondary">Sin alerta</span>
                )}
              </td>
              <td>
                <StatusPill row={row} />
              </td>
              <td>
                <Kebab />
              </td>
            </tr>
          );
        }

        return null;
      })}
    </>
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
  const special = [
    'assignees',
    'progress',
    'tags',
    'live',
    'financial',
    'alert',
    'skeleton',
  ].includes(example.variant);

  const showRowActions =
    frozenRight ||
    RICH_VARIANTS.has(example.variant) ||
    withExpand ||
    example.variant === 'skeleton';

  const showSort = RICH_VARIANTS.has(example.variant);

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
            {example.variant !== 'skeleton' ? (
              <>
                <button type="button" className={local.toolBtn}>
                  <SortAscending weight="bold" size={13} />
                  Ordenar
                </button>
                <button type="button" className={local.toolBtn}>
                  <Funnel weight="bold" size={13} />
                  Filtrar
                </button>
              </>
            ) : null}
            <button type="button" className={local.toolBtn}>
              <ArrowsClockwise weight="bold" size={13} />
              Refrescar
            </button>
            <button
              type="button"
              className={`${local.toolBtn} ${local.toolBtnPrimary}`}
            >
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
                <span className={local.tabCount}>
                  {tab.count.toLocaleString('es-MX')}
                </span>
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
            <DefaultHeader
              variant={example.variant}
              withExpand={withExpand}
              showSort={showSort}
              showRowActions={showRowActions}
              frozenRight={frozenRight}
            />
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
            {special ? (
              <SpecialRows variant={example.variant} />
            ) : grouped ? (
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
                      <StatusPill row={row} />
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
                        <StatusPill row={row} />
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
                      <span
                        className="gob-dg-stack"
                        style={{ textAlign: 'right' }}
                      >
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
                      <StatusPill row={row} />
                    </td>
                    {showRowActions || frozenRight ? (
                      <td>
                        <Kebab />
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
              {PAGER_VARIANTS.has(example.variant) ? (
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
            {PAGER_VARIANTS.has(example.variant) ? (
              <nav className={local.pager} aria-label="Paginacion">
                <button
                  type="button"
                  className={local.pageBtn}
                  aria-label="Anterior"
                >
                  <CaretLeft weight="bold" size={14} />
                </button>
                <button
                  type="button"
                  className={`${local.pageBtn} ${local.pageBtnActive}`}
                >
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
                <button
                  type="button"
                  className={local.pageBtn}
                  aria-label="Siguiente"
                >
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
