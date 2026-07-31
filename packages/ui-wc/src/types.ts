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

export type SidebarVariant =
  | 'basic'
  | 'collapsed'
  | 'brand'
  | 'grouped'
  | 'user'
  | 'dense'
  | 'badges';

export type GobSidebarProps = React.HTMLAttributes<HTMLElement> & {
  variant?: SidebarVariant;
  tone?: Tone;
  collapsed?: boolean;
};

export type TopbarVariant =
  | 'basic'
  | 'search'
  | 'actions'
  | 'notifications'
  | 'breadcrumb'
  | 'dense'
  | 'complete';

export type GobTopbarProps = React.HTMLAttributes<HTMLElement> & {
  variant?: TopbarVariant;
  tone?: Tone;
  sticky?: boolean | 'true' | 'false';
};

export type PageHeaderVariant =
  | 'basic'
  | 'description'
  | 'breadcrumb'
  | 'actions'
  | 'status'
  | 'dense'
  | 'complete';

export type PageHeaderSurface = 'plain' | 'panel';

export type GobPageHeaderProps = React.HTMLAttributes<HTMLElement> & {
  variant?: PageHeaderVariant;
  surface?: PageHeaderSurface;
};

export type BreadcrumbVariant =
  | 'basic'
  | 'chevron'
  | 'icons'
  | 'collapsed'
  | 'underline'
  | 'dense'
  | 'complete'
  | 'dot'
  | 'arrow'
  | 'back';

export type GobBreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  variant?: BreadcrumbVariant;
  tone?: Tone;
};

export type ContainerVariant =
  | 'basic'
  | 'narrow'
  | 'wide'
  | 'full'
  | 'flush'
  | 'padded'
  | 'prose';

export type GobContainerProps = React.HTMLAttributes<HTMLElement> & {
  variant?: ContainerVariant;
  radius?: boolean | 'true' | 'false';
  shadow?: boolean | 'true' | 'false';
};

export type GridVariant =
  | 'basic'
  | 'three'
  | 'four'
  | 'dense'
  | 'loose'
  | 'split'
  | 'auto';

export type GridGap = 'sm' | 'md' | 'lg';

export type GobGridProps = React.HTMLAttributes<HTMLElement> & {
  variant?: GridVariant;
  gap?: GridGap;
};

export type DividerVariant =
  | 'basic'
  | 'vertical'
  | 'dashed'
  | 'dotted'
  | 'thick'
  | 'label'
  | 'inset';

export type DividerTone = 'primary' | 'accent';

export type GobDividerProps = React.HTMLAttributes<HTMLElement> & {
  variant?: DividerVariant;
  tone?: DividerTone | Tone;
};

export type SpacerVariant =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'horizontal'
  | 'section';

export type GobSpacerProps = React.HTMLAttributes<HTMLElement> & {
  variant?: SpacerVariant;
};

export type KpiVariant =
  | 'basic'
  | 'trend-up'
  | 'trend-down'
  | 'period'
  | 'icon'
  | 'dense'
  | 'complete'
  | 'stripe'
  | 'filled'
  | 'horizontal'
  | 'compare'
  | 'progress'
  | 'elevated'
  | 'sparkline'
  | 'ring'
  | 'split'
  | 'live';

export type KpiTone = Tone;

export type GobKpiCardProps = React.HTMLAttributes<HTMLElement> & {
  variant?: KpiVariant;
  tone?: KpiTone | Tone;
  progress?: number | string;
};

export type ChartCardVariant =
  | 'basic'
  | 'legend'
  | 'actions'
  | 'period'
  | 'side-legend'
  | 'dense'
  | 'elevated'
  | 'footer'
  | 'stripe'
  | 'framed'
  | 'toolbar'
  | 'minimal'
  | 'compare'
  | 'funnel'
  | 'treemap'
  | 'rose'
  | 'waterfall';

export type ChartCardTone = Tone;

export type GobChartCardProps = React.HTMLAttributes<HTMLElement> & {
  variant?: ChartCardVariant;
  tone?: ChartCardTone | Tone;
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
      'gob-sidebar': React.DetailedHTMLProps<GobSidebarProps, HTMLElement>;
      'gob-topbar': React.DetailedHTMLProps<GobTopbarProps, HTMLElement>;
      'gob-page-header': React.DetailedHTMLProps<GobPageHeaderProps, HTMLElement>;
      'gob-breadcrumb': React.DetailedHTMLProps<GobBreadcrumbProps, HTMLElement>;
      'gob-container': React.DetailedHTMLProps<GobContainerProps, HTMLElement>;
      'gob-grid': React.DetailedHTMLProps<GobGridProps, HTMLElement>;
      'gob-divider': React.DetailedHTMLProps<GobDividerProps, HTMLElement>;
      'gob-spacer': React.DetailedHTMLProps<GobSpacerProps, HTMLElement>;
      'gob-kpi-card': React.DetailedHTMLProps<GobKpiCardProps, HTMLElement>;
      'gob-chart-card': React.DetailedHTMLProps<GobChartCardProps, HTMLElement>;
    }
  }
}

export {};
