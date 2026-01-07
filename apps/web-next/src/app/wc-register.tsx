'use client';

import { useEffect } from 'react';

export default function WcRegister() {
  useEffect(() => {
    // registra Web Components SOLO en el navegador
    void import('@gob/ui-wc');
  }, []);

  return null;
}
