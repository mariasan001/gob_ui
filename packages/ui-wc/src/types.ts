import type * as React from 'react';

export type Tone = 'primary' | 'accent' | 'dark' | 'neutral' | 'soft';
export type Appearance = 'solid' | 'outline' | 'ghost' | 'divided';
export type Size = 'sm' | 'md' | 'lg';
export type ChipTone = 'primary' | 'success' | 'error' | 'warning' | 'neutral';
export type PaginationVariant =
  | 'basic'
  | 'arrows'
  | 'ellipsis'
  | 'edges'
  | 'compact'
  | 'icons'
  | 'outline'
  | 'pills'
  | 'text'
  | 'jump'
  | 'simple'
  | 'group'
  | 'summary';
export type PaginationLang = 'es' | 'en';


type CommonControlProps = {
  disabled?: boolean;
  name?: string;
  value?: string;
  checked?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
};

export type GobButtonProps =
  React.HTMLAttributes<HTMLElement> & {
    tone?: Tone;
    appearance?: Appearance;
    size?: Size;
    loading?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    name?: string;
    value?: string;
    'icon-only'?: boolean;
    'icon-position'?: 'left' | 'right';
    'demo-state'?: 'hover' | 'pressed';
    'aria-label'?: string;
    'aria-labelledby'?: string;
  };

export type GobCheckboxProps =
  React.HTMLAttributes<HTMLElement> &
    CommonControlProps & {
      indeterminate?: boolean;
    };

export type GobRadioProps =
  React.HTMLAttributes<HTMLElement> & CommonControlProps;

export type GobSwitchProps =
  React.HTMLAttributes<HTMLElement> & CommonControlProps;

export type GobChipProps =
  React.HTMLAttributes<HTMLElement> & {
    tone?: ChipTone;
    disabled?: boolean;
    dismissible?: boolean;
    'aria-label'?: string;
  };

export type GobPaginationProps =
  React.HTMLAttributes<HTMLElement> & {
    page?: number | string;
    total?: number | string;
    variant?: PaginationVariant;
    tone?: Tone;
    size?: Size;
    lang?: PaginationLang;
    disabled?: boolean;
    'sibling-count'?: number | string;
    'boundary-count'?: number | string;
    'page-size'?: number | string;
    'aria-label'?: string;
  };

export type GobAppShellProps = React.HTMLAttributes<HTMLElement> & {
  collapsed?: boolean;
  dense?: boolean;
  'hide-topbar'?: boolean;
  'sticky-topbar'?: boolean | 'true' | 'false';
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gob-button': React.DetailedHTMLProps<GobButtonProps, HTMLElement>;
      'gob-checkbox': React.DetailedHTMLProps<GobCheckboxProps, HTMLElement>;
      'gob-radio': React.DetailedHTMLProps<GobRadioProps, HTMLElement>;
      'gob-switch': React.DetailedHTMLProps<GobSwitchProps, HTMLElement>;
      'gob-chip': React.DetailedHTMLProps<GobChipProps, HTMLElement>;
      'gob-pagination': React.DetailedHTMLProps<GobPaginationProps, HTMLElement>;
      'gob-app-shell': React.DetailedHTMLProps<GobAppShellProps, HTMLElement>;
    }
  }
}

export {};
