'use client';

import { useEffect, useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

import type { Tone } from '@mariasan001/ui-wc';

import type { FilterBarExample } from './filter-bar-data';
import local from './filter-bar.module.css';

const PERIODS = [
  { id: 'hoy', label: 'Hoy' },
  { id: 'semana', label: 'Semana' },
  { id: 'mes', label: 'Mes' },
] as const;

export function FilterBarDemo({
  example,
  tone,
}: {
  example: FilterBarExample;
  tone: Tone;
}) {
  const variant = example.variant;
  const [query, setQuery] = useState('');
  const [dep, setDep] = useState('');
  const [status, setStatus] = useState('');
  const [period, setPeriod] = useState<(typeof PERIODS)[number]['id']>('hoy');
  const [flash, setFlash] = useState('');

  useEffect(() => {
    if (!flash) return;
    const t = window.setTimeout(() => setFlash(''), 2200);
    return () => window.clearTimeout(t);
  }, [flash]);

  const showSearch =
    variant === 'search' || variant === 'complete' || variant === 'dense';
  const showChips = variant === 'chips' || variant === 'complete';
  const showSelects =
    variant === 'basic' ||
    variant === 'with-actions' ||
    variant === 'complete' ||
    variant === 'dense';
  const showActions = variant === 'with-actions' || variant === 'complete';

  function applyFilters() {
    const bits = [
      period && showChips ? `periodo=${period}` : '',
      dep ? `dep=${dep}` : '',
      status ? `estatus=${status}` : '',
      query.trim() ? `q=${query.trim()}` : '',
    ].filter(Boolean);
    setFlash(bits.length ? `Filtros: ${bits.join(' · ')}` : 'Sin filtros activos');
  }

  function clearFilters() {
    setQuery('');
    setDep('');
    setStatus('');
    setPeriod('hoy');
    setFlash('Filtros limpiados');
  }

  return (
    <div className={local.stageInner}>
      <gob-filter-bar
        key={`${example.id}-${tone}`}
        variant={variant}
        tone={tone}
        className={local.bar}
      >
        {showSearch ? (
          <label slot="search" className="gob-fb-search">
            <MagnifyingGlass weight="thin" size={16} aria-hidden="true" />
            <input
              value={query}
              placeholder="Folio o CURP"
              aria-label="Buscar folio o CURP"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') applyFilters();
              }}
            />
          </label>
        ) : null}

        {showChips
          ? PERIODS.map((item) => (
              <button
                key={item.id}
                type="button"
                className="gob-fb-chip"
                aria-pressed={period === item.id}
                onClick={() => {
                  setPeriod(item.id);
                  setFlash(`Periodo: ${item.label}`);
                }}
              >
                {item.label}
              </button>
            ))
          : null}

        {showSelects ? (
          <>
            <select
              className="gob-fb-select"
              aria-label="Dependencia"
              value={dep}
              onChange={(e) => {
                setDep(e.target.value);
                setFlash(
                  e.target.value
                    ? `Dependencia: ${e.target.selectedOptions[0]?.text}`
                    : 'Todas las dependencias',
                );
              }}
            >
              <option value="">Todas las dependencias</option>
              <option value="salud">Salud</option>
              <option value="educacion">Educacion</option>
              <option value="finanzas">Finanzas</option>
            </select>
            <select
              className="gob-fb-select"
              aria-label="Estatus"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                setFlash(
                  e.target.value
                    ? `Estatus: ${e.target.selectedOptions[0]?.text}`
                    : 'Cualquier estatus',
                );
              }}
            >
              <option value="">Cualquier estatus</option>
              <option value="revision">En revision</option>
              <option value="cerrado">Cerrado</option>
              <option value="rechazado">Rechazado</option>
            </select>
          </>
        ) : null}

        {showActions ? (
          <>
            <button
              slot="actions"
              type="button"
              className="gob-fb-btn"
              onClick={clearFilters}
            >
              Limpiar
            </button>
            <button
              slot="actions"
              type="button"
              className="gob-fb-btn gob-fb-btn-primary"
              onClick={applyFilters}
            >
              Aplicar
            </button>
          </>
        ) : null}
      </gob-filter-bar>
      {flash ? <p className={local.flash}>{flash}</p> : null}
    </div>
  );
}
