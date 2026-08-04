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

export type CheckboxVariant =
  | 'basic'
  | 'labeled'
  | 'helper'
  | 'dense'
  | 'soft'
  | 'card'
  | 'pill'
  | 'tile'
  | 'complete';

export type CheckboxStatus =
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export type GobCheckboxProps =
  React.HTMLAttributes<HTMLElement> &
    CommonControlProps & {
      indeterminate?: boolean;
      variant?: CheckboxVariant;
      label?: string;
      description?: string;
      helper?: string;
      status?: CheckboxStatus;
      size?: CheckboxSize;
      required?: boolean;
    };

export type GobRadioProps =
  React.HTMLAttributes<HTMLElement> &
    CommonControlProps & {
      variant?: RadioVariant;
      label?: string;
      description?: string;
      helper?: string;
      status?: RadioStatus;
      size?: RadioSize;
      required?: boolean;
    };

export type RadioVariant =
  | 'basic'
  | 'labeled'
  | 'helper'
  | 'dense'
  | 'soft'
  | 'card'
  | 'pill'
  | 'tile'
  | 'complete';

export type RadioStatus =
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export type RadioSize = 'sm' | 'md' | 'lg';

export type GobSwitchProps =
  React.HTMLAttributes<HTMLElement> &
    CommonControlProps & {
      variant?: SwitchVariant;
      label?: string;
      description?: string;
      helper?: string;
      status?: SwitchStatus;
      size?: SwitchSize;
      required?: boolean;
    };

export type SwitchVariant =
  | 'basic'
  | 'labeled'
  | 'helper'
  | 'dense'
  | 'soft'
  | 'card'
  | 'pill'
  | 'tile'
  | 'complete';

export type SwitchStatus =
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export type SwitchSize = 'sm' | 'md' | 'lg';

export type GobChipProps =
  React.HTMLAttributes<HTMLElement> & {
    tone?: ChipTone;
    disabled?: boolean;
    dismissible?: boolean;
    'aria-label'?: string;
  };

export type DatepickerVariant =
  | 'basic'
  | 'labeled'
  | 'helper'
  | 'dense'
  | 'soft'
  | 'floating'
  | 'underline'
  | 'pill'
  | 'clearable'
  | 'range'
  | 'complete';

export type DatepickerStatus =
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export type DatepickerSize = 'sm' | 'md' | 'lg';
export type DatepickerMode = 'single' | 'range';

export type GobDatepickerProps = React.HTMLAttributes<HTMLElement> & {
  variant?: DatepickerVariant;
  label?: string;
  placeholder?: string;
  helper?: string;
  value?: string;
  status?: DatepickerStatus;
  size?: DatepickerSize;
  mode?: DatepickerMode;
  min?: string;
  max?: string;
  name?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
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

export type TableVariant =
  | 'basic'
  | 'striped'
  | 'bordered'
  | 'dense'
  | 'selectable'
  | 'sortable'
  | 'sticky'
  | 'status'
  | 'actions'
  | 'empty';

export type TableTone = Tone;

export type GobTableProps = React.HTMLAttributes<HTMLElement> & {
  variant?: TableVariant;
  tone?: TableTone | Tone;
};

export type DataGridVariant =
  | 'filters'
  | 'frozen-left'
  | 'frozen-right'
  | 'bulk'
  | 'paginated'
  | 'expandable'
  | 'column-filter'
  | 'wide'
  | 'toolbar'
  | 'grouped'
  | 'card-rows'
  | 'assignees'
  | 'progress'
  | 'tags'
  | 'live'
  | 'financial'
  | 'alert'
  | 'skeleton';

export type DataGridTone = Tone;

export type GobDataGridProps = React.HTMLAttributes<HTMLElement> & {
  variant?: DataGridVariant;
  tone?: DataGridTone | Tone;
};

export type FilterBarVariant =
  | 'basic'
  | 'search'
  | 'chips'
  | 'dense'
  | 'with-actions'
  | 'complete'
  | 'dates'
  | 'tags'
  | 'count'
  | 'region'
  | 'advanced';

export type FilterBarTone = Tone;

export type GobFilterBarProps = React.HTMLAttributes<HTMLElement> & {
  variant?: FilterBarVariant;
  tone?: FilterBarTone | Tone;
};

export type ToolbarVariant =
  | 'basic'
  | 'actions'
  | 'density'
  | 'refresh'
  | 'complete'
  | 'search'
  | 'views'
  | 'print'
  | 'bulk'
  | 'icons';

export type ToolbarTone = Tone;

export type GobToolbarProps = React.HTMLAttributes<HTMLElement> & {
  variant?: ToolbarVariant;
  tone?: ToolbarTone | Tone;
  dense?: boolean | 'true' | 'false';
};

export type ListVariant =
  | 'basic'
  | 'avatar'
  | 'meta'
  | 'actions'
  | 'dense'
  | 'selectable'
  | 'complete'
  | 'icon'
  | 'nav'
  | 'grouped'
  | 'status'
  | 'empty';

export type ListTone = Tone;

export type GobListProps = React.HTMLAttributes<HTMLElement> & {
  variant?: ListVariant;
  tone?: ListTone | Tone;
};

export type TimelineVariant =
  | 'basic'
  | 'icons'
  | 'status'
  | 'dense'
  | 'alternating'
  | 'cards'
  | 'complete'
  | 'numbered'
  | 'dates'
  | 'milestones'
  | 'horizontal'
  | 'grouped';

export type TimelineTone = Tone;

export type GobTimelineProps = React.HTMLAttributes<HTMLElement> & {
  variant?: TimelineVariant;
  tone?: TimelineTone | Tone;
};

export type ActivityFeedVariant =
  | 'basic'
  | 'avatar'
  | 'actions'
  | 'dense'
  | 'grouped'
  | 'unread'
  | 'complete'
  | 'status'
  | 'icon'
  | 'cards'
  | 'mentions'
  | 'files'
  | 'empty';

export type ActivityFeedTone = Tone;

export type GobActivityFeedProps = React.HTMLAttributes<HTMLElement> & {
  variant?: ActivityFeedVariant;
  tone?: ActivityFeedTone | Tone;
};

export type EmptyStateVariant =
  | 'basic'
  | 'icon'
  | 'actions'
  | 'search'
  | 'error'
  | 'dense'
  | 'complete'
  | 'filter'
  | 'permission'
  | 'success'
  | 'upload'
  | 'inline';

export type EmptyStateTone = Tone;

export type GobEmptyStateProps = React.HTMLAttributes<HTMLElement> & {
  variant?: EmptyStateVariant;
  tone?: EmptyStateTone | Tone;
};

export type SkeletonVariant =
  | 'text'
  | 'avatar'
  | 'card'
  | 'table'
  | 'list'
  | 'media'
  | 'kpi'
  | 'form'
  | 'dense'
  | 'complete';

export type GobSkeletonProps = React.HTMLAttributes<HTMLElement> & {
  variant?: SkeletonVariant;
  rows?: number | string;
  animated?: boolean | string;
};

export type ProgressVariant =
  | 'bar'
  | 'labeled'
  | 'thin'
  | 'thick'
  | 'ring'
  | 'steps'
  | 'segmented'
  | 'indeterminate'
  | 'stacked'
  | 'complete';

export type ProgressStatus =
  | 'default'
  | 'info'
  | 'warning'
  | 'success'
  | 'danger';

export type GobProgressProps = React.HTMLAttributes<HTMLElement> & {
  variant?: ProgressVariant;
  value?: number | string;
  max?: number | string;
  label?: string;
  status?: ProgressStatus;
  steps?: number | string;
};

export type SpinnerVariant =
  | 'ring'
  | 'dual'
  | 'dots'
  | 'pulse'
  | 'bars'
  | 'button'
  | 'inline'
  | 'page'
  | 'overlay'
  | 'complete'
  | 'orbit'
  | 'arc'
  | 'dash'
  | 'comet'
  | 'petals'
  | 'metro'
  | 'wave'
  | 'radar'
  | 'infinity'
  | 'morph';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export type SpinnerStatus =
  | 'default'
  | 'info'
  | 'warning'
  | 'success'
  | 'danger';

export type GobSpinnerProps = React.HTMLAttributes<HTMLElement> & {
  variant?: SpinnerVariant;
  label?: string;
  size?: SpinnerSize;
  status?: SpinnerStatus;
};

export type InputVariant =
  | 'basic'
  | 'labeled'
  | 'helper'
  | 'icon'
  | 'search'
  | 'password'
  | 'prefix'
  | 'suffix'
  | 'dense'
  | 'complete'
  | 'floating'
  | 'underline'
  | 'pill'
  | 'clearable'
  | 'code'
  | 'soft';

export type InputStatus =
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export type InputSize = 'sm' | 'md' | 'lg';

export type GobInputProps = React.HTMLAttributes<HTMLElement> & {
  variant?: InputVariant;
  label?: string;
  placeholder?: string;
  helper?: string;
  value?: string;
  type?: string;
  status?: InputStatus;
  size?: InputSize;
  name?: string;
  lead?: string;
  suffix?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
};

export type TextareaVariant =
  | 'basic'
  | 'labeled'
  | 'helper'
  | 'counter'
  | 'auto'
  | 'dense'
  | 'filled'
  | 'soft'
  | 'floating'
  | 'resize'
  | 'code'
  | 'complete';

export type TextareaStatus =
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export type TextareaSize = 'sm' | 'md' | 'lg';

export type GobTextareaProps = React.HTMLAttributes<HTMLElement> & {
  variant?: TextareaVariant;
  label?: string;
  placeholder?: string;
  helper?: string;
  value?: string;
  status?: TextareaStatus;
  size?: TextareaSize;
  name?: string;
  rows?: number | string;
  maxlength?: number | string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
};

export type SelectVariant =
  | 'basic'
  | 'labeled'
  | 'helper'
  | 'dense'
  | 'filled'
  | 'soft'
  | 'floating'
  | 'pill'
  | 'icon'
  | 'group'
  | 'multiple'
  | 'search'
  | 'underline'
  | 'ghost'
  | 'split'
  | 'complete';

export type SelectStatus =
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export type SelectSize = 'sm' | 'md' | 'lg';

export type GobSelectProps = React.HTMLAttributes<HTMLElement> & {
  variant?: SelectVariant;
  label?: string;
  placeholder?: string;
  helper?: string;
  value?: string;
  status?: SelectStatus;
  size?: SelectSize;
  name?: string;
  options?: string;
  disabled?: boolean;
  required?: boolean;
};

export type ComboboxVariant =
  | 'basic'
  | 'labeled'
  | 'helper'
  | 'dense'
  | 'filled'
  | 'soft'
  | 'floating'
  | 'pill'
  | 'icon'
  | 'create'
  | 'loading'
  | 'complete';

export type ComboboxStatus =
  | 'default'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export type ComboboxSize = 'sm' | 'md' | 'lg';

export type GobComboboxProps = React.HTMLAttributes<HTMLElement> & {
  variant?: ComboboxVariant;
  label?: string;
  placeholder?: string;
  helper?: string;
  value?: string;
  status?: ComboboxStatus;
  size?: ComboboxSize;
  name?: string;
  options?: string;
  disabled?: boolean;
  required?: boolean;
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
      'gob-table': React.DetailedHTMLProps<GobTableProps, HTMLElement>;
      'gob-data-grid': React.DetailedHTMLProps<GobDataGridProps, HTMLElement>;
      'gob-filter-bar': React.DetailedHTMLProps<GobFilterBarProps, HTMLElement>;
      'gob-toolbar': React.DetailedHTMLProps<GobToolbarProps, HTMLElement>;
      'gob-list': React.DetailedHTMLProps<GobListProps, HTMLElement>;
      'gob-timeline': React.DetailedHTMLProps<GobTimelineProps, HTMLElement>;
      'gob-activity-feed': React.DetailedHTMLProps<
        GobActivityFeedProps,
        HTMLElement
      >;
      'gob-empty-state': React.DetailedHTMLProps<GobEmptyStateProps, HTMLElement>;
      'gob-skeleton': React.DetailedHTMLProps<GobSkeletonProps, HTMLElement>;
      'gob-progress': React.DetailedHTMLProps<GobProgressProps, HTMLElement>;
      'gob-spinner': React.DetailedHTMLProps<GobSpinnerProps, HTMLElement>;
      'gob-input': React.DetailedHTMLProps<GobInputProps, HTMLElement>;
      'gob-textarea': React.DetailedHTMLProps<GobTextareaProps, HTMLElement>;
      'gob-select': React.DetailedHTMLProps<GobSelectProps, HTMLElement>;
      'gob-combobox': React.DetailedHTMLProps<GobComboboxProps, HTMLElement>;
      'gob-datepicker': React.DetailedHTMLProps<GobDatepickerProps, HTMLElement>;
    }
  }
}

export {};
