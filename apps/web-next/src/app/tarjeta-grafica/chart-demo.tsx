'use client';

import { DownloadSimple, DotsThree } from '@phosphor-icons/react';

import type { ChartCardTone } from '@mariasan001/ui-wc';

import type { ChartExample } from './chart-data';
import { EchartsCanvas } from './echarts-canvas';
import local from './chart.module.css';

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
        <EchartsCanvas
          kind={example.chart}
          tone={tone}
          compact={
            example.variant === 'dense' || example.variant === 'minimal'
          }
        />
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
        {example.footer ? (
          <span slot="footer">{example.footer}</span>
        ) : null}
      </gob-chart-card>
    </div>
  );
}
