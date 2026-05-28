'use client';

import { useEffect } from 'react';

// ✅ trae typings sin ejecutar runtime
import type {} from '@gob/ui-wc';

export default function WcRegister() {
  useEffect(() => {
    void import('@gob/ui-wc'); // ✅ runtime solo en browser
  }, []);

  return null;
}
