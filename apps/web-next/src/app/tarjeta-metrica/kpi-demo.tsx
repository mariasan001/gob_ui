'use client';

import { ChartLineUp, Warning } from '@phosphor-icons/react';

import type { KpiTone } from '@mariasan001/ui-wc';

import type { KpiExample } from './kpi-data';
import local from './kpi.module.css';

export function KpiDemo({
  example,
  tone,
}: {
  example: KpiExample;
  tone: KpiTone;
}) {
  const Icon = example.id === 'icon' ? Warning : ChartLineUp;

  return (
    <div className={local.stageInner}>
      <gob-kpi-card
        key={`${example.id}-${tone}`}
        variant={example.variant}
        tone={tone}
      >
        <span slot="label">{example.label}</span>
        <span slot="value">{example.value}</span>
        {example.trend ? <span slot="trend">{example.trend}</span> : null}
        {example.period ? <span slot="period">{example.period}</span> : null}
        {example.showIcon ? (
          <span slot="icon" className={local.iconSlot}>
            <Icon weight="bold" size={16} />
          </span>
        ) : null}
      </gob-kpi-card>
    </div>
  );
}
