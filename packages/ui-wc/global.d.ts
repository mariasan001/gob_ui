import type * as React from 'react';

export type Tone = 'primary' | 'accent' | 'dark' | 'neutral' | 'soft';
export type Appearance = 'solid' | 'outline' | 'ghost';
export type Size = 'sm' | 'md' | 'lg';

export type GobButtonProps =
  Omit<React.HTMLAttributes<HTMLElement>, 'children'> & {
    tone?: Tone;
    appearance?: Appearance;
    size?: Size;

    loading?: boolean;
    disabled?: boolean;

    type?: 'button' | 'submit' | 'reset';

    'icon-only'?: boolean;
    'icon-position'?: 'left' | 'right';
    'aria-label'?: string;
  };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gob-button': React.DetailedHTMLProps<GobButtonProps, HTMLElement>;
    }
  }
}

export {};
