// Tipado JSX para Web Components <gob-button /> en React/Next (TypeScript)

import type * as React from 'react';

type Tone = 'primary' | 'accent' | 'dark' | 'neutral' | 'soft';
type Appearance = 'solid' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gob-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        // ✅ Nuevo API
        tone?: Tone;
        appearance?: Appearance;
        size?: Size;

        loading?: boolean | '' | undefined;
        disabled?: boolean | '' | undefined;

        // Para forms
        type?: 'button' | 'submit' | 'reset';

        // Slots/attrs extra
        'icon-only'?: boolean | '' | undefined;
        'icon-position'?: 'left' | 'right';

        // Accesibilidad (útil cuando es solo ícono)
        'aria-label'?: string;

        // 🔁 Compat opcional (por si algún demo viejo usa variant)
        variant?: 'primary' | 'secondary' | 'ghost';
      };
    }
  }
}

export {};
