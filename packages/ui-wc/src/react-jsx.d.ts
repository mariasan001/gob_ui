import type * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gob-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        variant?: 'primary' | 'secondary' | 'ghost';
        size?: 'sm' | 'md' | 'lg';
        loading?: boolean | '' | undefined;
        disabled?: boolean | '' | undefined;
        type?: 'button' | 'submit' | 'reset';
      };
    }
  }
}

export {};
