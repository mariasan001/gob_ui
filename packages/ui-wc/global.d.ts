import type * as React from 'react';

type Tone = 'primary' | 'accent' | 'dark' | 'neutral' | 'soft';
type Appearance = 'solid' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gob-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        tone?: Tone;
        appearance?: Appearance;
        size?: Size;

        loading?: boolean | '';
        disabled?: boolean | '';

        type?: 'button' | 'submit' | 'reset';

        'icon-only'?: boolean | '';
        'icon-position'?: 'left' | 'right';
      };
    }
  }
}

export {};
