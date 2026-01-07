// packages/ui-wc/global.d.ts
import type * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gob-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        tone?: 'primary' | 'accent' | 'dark' | 'soft' | 'neutral';
        appearance?: 'solid' | 'outline' | 'ghost';
        size?: 'sm' | 'md' | 'lg';

        // boolean attributes: en JSX pueden venir como boolean o ''.
        loading?: boolean | '';
        disabled?: boolean | '';
        'icon-only'?: boolean | '';

        type?: 'button' | 'submit' | 'reset';
      };
    }
  }
}

export {};
