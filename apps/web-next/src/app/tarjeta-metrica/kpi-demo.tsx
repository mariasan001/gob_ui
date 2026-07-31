'use client';

import {
  CalendarBlank,
  ChartLineUp,
  Target,
  Warning,
} from '@phosphor-icons/react';

import type { KpiTone } from '@mariasan001/ui-wc';

import type { KpiExample } from './kpi-data';
import local from './kpi.module.css';

function iconFor(example: KpiExample) {
  if (example.id === 'icon') return Warning;
  if (example.id === 'horizontal') return CalendarBlank;
  if (example.id === 'progress' || example.id === 'elevated') return Target;
  return ChartLineUp;
}

export function KpiDemo({
  example,
  tone,
}: {
  example: KpiExample;
  tone: KpiTone;
}) {
  const Icon = iconFor(example);
  const wide =
    example.variant === 'horizontal' || example.variant === 'progress';

  return (
    <div className={wide ? local.stageInnerWide : local.stageInner}>
      <gob-kpi-card
        key={`${example.id}-${tone}-${example.progress ?? 'x'}`}
        variant={example.variant}
        tone={tone}
        {...(example.progress != null
          ? { progress: String(example.progress) }
          : {})}
      >
        <span slot="label">{example.label}</span>
        <span slot="value">{example.value}</span>
        {example.trend ? <span slot="trend">{example.trend}</span> : null}
        {example.compare ? (
          <span slot="compare">{example.compare}</span>
        ) : null}
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
