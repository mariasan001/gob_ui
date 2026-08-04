'use client';

import type { FabExample } from './fab-data';
import local from './fab.module.css';

export function FabDemo({ example }: { example: FabExample }) {
  return (
    <div className={`${local.stageInner} ${example.tall ? local.stageTall : ''}`.trim()}>
      <gob-fab
        key={example.id}
        variant={example.variant}
        size={example.size}
        icon={example.icon ?? 'plus'}
        label={example.label ?? 'Accion'}
        actions={example.actions}
        {...(example.open ? { open: true } : {})}
        {...(example.disabled ? { disabled: true } : {})}
      />
    </div>
  );
}
