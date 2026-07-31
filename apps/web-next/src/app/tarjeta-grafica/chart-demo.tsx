'use client';

import { DownloadSimple, DotsThree } from '@phosphor-icons/react';

import type { ChartCardTone } from '@mariasan001/ui-wc';

import type { ChartExample, ChartKind } from './chart-data';
import local from './chart.module.css';

function FakeChart({ kind }: { kind: ChartKind }) {
  if (kind === 'line') {
    return (
      <svg className={local.lineChart} viewBox="0 0 320 140" aria-hidden="true">
        <path
          className={local.lineArea}
          d="M0 110 L40 95 L80 102 L120 70 L160 82 L200 48 L240 58 L280 30 L320 42 L320 140 L0 140 Z"
        />
        <path
          className={local.lineStroke}
          d="M0 110 L40 95 L80 102 L120 70 L160 82 L200 48 L240 58 L280 30 L320 42"
          fill="none"
        />
      </svg>
    );
  }

  if (kind === 'area') {
    return (
      <div className={local.areaStack} aria-hidden="true">
        <span style={{ height: '42%' }} />
        <span style={{ height: '68%' }} />
        <span style={{ height: '55%' }} />
        <span style={{ height: '82%' }} />
        <span style={{ height: '60%' }} />
        <span style={{ height: '74%' }} />
        <span style={{ height: '48%' }} />
      </div>
    );
  }

  if (kind === 'donut') {
    return (
      <div className={local.donut} aria-hidden="true">
        <i />
      </div>
    );
  }

  return (
    <div className={local.bars} aria-hidden="true">
      <span style={{ height: '46%' }} />
      <span style={{ height: '72%' }} />
      <span style={{ height: '38%' }} />
      <span style={{ height: '88%' }} />
      <span style={{ height: '56%' }} />
      <span style={{ height: '64%' }} />
      <span style={{ height: '50%' }} />
    </div>
  );
}

export function ChartDemo({
  example,
  tone,
}: {
  example: ChartExample;
  tone: ChartCardTone;
}) {
  return (
    <div className={local.stageInner}>
      <gob-chart-card
        key={`${example.id}-${tone}`}
        variant={example.variant}
        tone={tone}
      >
        <span slot="title">{example.cardTitle}</span>
        {example.subtitle ? (
          <span slot="subtitle">{example.subtitle}</span>
        ) : null}
        {example.showActions ? (
          <span slot="actions" className={local.actions}>
            <button type="button" className={local.actionBtn} aria-label="Exportar">
              <DownloadSimple weight="bold" size={14} />
            </button>
            <button type="button" className={local.actionBtn} aria-label="Mas">
              <DotsThree weight="bold" size={16} />
            </button>
          </span>
        ) : null}
        <FakeChart kind={example.chart} />
        {example.showLegend && example.legend
          ? example.legend.map((item) => (
              <span
                key={item.label}
                slot="legend"
                className={local.legendItem}
                data-tone={item.tone}
              >
                <i />
                {item.label}
              </span>
            ))
          : null}
      </gob-chart-card>
    </div>
  );
}
