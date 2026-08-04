'use client';

import { useEffect, useRef, useState } from 'react';

import type { ModalExample } from './modal-data';
import local from './modal.module.css';

export function ModalDemo({ example }: { example: ModalExample }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;
    const onModal = (event: Event) => {
      const detail = (event as CustomEvent<{ action?: string }>).detail;
      if (detail?.action && detail.action !== 'confirm') {
        setOpen(false);
      }
      if (detail?.action === 'confirm') setOpen(false);
    };
    root.addEventListener('gob-modal', onModal);
    return () => root.removeEventListener('gob-modal', onModal);
  }, []);

  return (
    <div ref={wrapRef} className={local.stageInner}>
      <button
        type="button"
        className={local.openBtn}
        onClick={() => setOpen(true)}
      >
        Abrir modal
      </button>
      <gob-modal
        key={`${example.id}-${open ? 'open' : 'closed'}`}
        variant={example.variant}
        size={example.size}
        title={example.modalTitle}
        description={example.modalDescription}
        body={example.body}
        confirm-label={example.confirmLabel}
        cancel-label={example.cancelLabel}
        {...(open ? { open: true } : {})}
      />
    </div>
  );
}
