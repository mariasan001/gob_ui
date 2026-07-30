'use client';

import {
  Buildings,
  CaretDoubleLeft,
  CaretDoubleRight,
  ChartBar,
  FolderOpen,
  GearSix,
  House,
  SignOut,
  UserCircle,
} from '@phosphor-icons/react';
import { useState } from 'react';

import type { SidebarVariant, Tone } from '@mariasan001/ui-wc';

import type { MenuExample } from './menu-data';
import local from './menu.module.css';

const NAV: {
  label: string;
  Icon: typeof House;
  badge?: number;
}[] = [
  { label: 'Inicio', Icon: House },
  { label: 'Expedientes', Icon: FolderOpen, badge: 12 },
  { label: 'Reportes', Icon: ChartBar, badge: 3 },
  { label: 'Dependencias', Icon: Buildings },
  { label: 'Ajustes', Icon: GearSix },
];

function Brand({
  collapsed,
  large,
  onToggle,
}: {
  collapsed: boolean;
  large?: boolean;
  onToggle: () => void;
}) {
  return (
    <div slot="brand" className={`${local.brand} ${large ? local.brandLg : ''}`}>
      <div className={local.brandTop}>
        <span className={local.mark} aria-hidden="true">
          G
        </span>
        {!collapsed ? (
          <div className={local.brandText}>
            <strong>Gob UI</strong>
            <small>Sistema institucional</small>
          </div>
        ) : null}
      </div>
      <button
        type="button"
        className={local.toggle}
        onClick={onToggle}
        aria-label={collapsed ? 'Expandir menu' : 'Colapsar menu'}
        title={collapsed ? 'Expandir' : 'Colapsar'}
      >
        {collapsed ? (
          <CaretDoubleRight weight="thin" size={16} />
        ) : (
          <CaretDoubleLeft weight="thin" size={16} />
        )}
      </button>
    </div>
  );
}

function Footer({ collapsed }: { collapsed: boolean }) {
  if (collapsed) {
    return (
      <div slot="footer" className={local.footRail}>
        <button type="button" className={local.railBtn} title="Perfil" aria-label="Perfil">
          <span className={local.avatar}>MG</span>
        </button>
        <button type="button" className={local.railBtn} title="Salir" aria-label="Salir">
          <SignOut weight="thin" size={18} aria-hidden="true" />
        </button>
      </div>
    );
  }
  return (
    <div slot="footer" className={local.foot}>
      <UserCircle weight="thin" size={18} aria-hidden="true" />
      <div>
        <strong>MG Sandoval</strong>
        <small>Operaciones</small>
      </div>
    </div>
  );
}

function NavItems({
  variant,
  collapsed,
  active = 'Inicio',
}: {
  variant: SidebarVariant;
  collapsed: boolean;
  active?: string;
}) {
  const showBadges = variant === 'badges';
  const grouped = variant === 'grouped';

  const renderItem = (label: string, Icon: typeof House, badge?: number) => (
    <a
      key={label}
      href="#"
      className={`${local.navItem} ${collapsed ? local.navItemRail : ''} ${
        label === active ? local.navActive : ''
      }`}
      data-active={label === active ? 'true' : undefined}
      data-tooltip={label}
      title={label}
      onClick={(e) => e.preventDefault()}
    >
      <span className={local.navIcon}>
        <Icon weight="thin" size={20} aria-hidden="true" />
        {showBadges && badge && collapsed ? <i className={local.badgeDot} /> : null}
      </span>
      {!collapsed ? <span className={local.navLabel}>{label}</span> : null}
      {showBadges && badge && !collapsed ? <em className={local.badge}>{badge}</em> : null}
    </a>
  );

  if (grouped && !collapsed) {
    return (
      <>
        <p className={local.group}>Operacion</p>
        {NAV.slice(0, 3).map(({ label, Icon, badge }) => renderItem(label, Icon, badge))}
        <p className={local.group}>Sistema</p>
        {NAV.slice(3).map(({ label, Icon, badge }) => renderItem(label, Icon, badge))}
      </>
    );
  }

  return <>{NAV.map(({ label, Icon, badge }) => renderItem(label, Icon, badge))}</>;
}

export function MenuDemo({
  example,
  tone,
}: {
  example: MenuExample;
  tone: Tone;
}) {
  const [collapsed, setCollapsed] = useState(example.variant === 'collapsed');
  const variant = example.variant === 'collapsed' ? 'basic' : example.variant;

  return (
    <div className={local.stageFrame}>
      <gob-sidebar
        variant={variant}
        tone={tone}
        collapsed={collapsed || undefined}
        className={`${local.sidebar} ${collapsed ? local.sidebarRail : ''}`}
      >
        <Brand
          collapsed={collapsed}
          large={example.variant === 'brand' && !collapsed}
          onToggle={() => setCollapsed((value) => !value)}
        />
        <NavItems
          variant={example.variant}
          collapsed={collapsed}
          active={example.variant === 'collapsed' || collapsed ? 'Expedientes' : 'Inicio'}
        />
        <Footer collapsed={collapsed} />
      </gob-sidebar>
      <div className={local.stageContent} aria-hidden="true">
        <span className={local.stageLine} />
        <span className={local.stageLine} />
        <span className={`${local.stageLine} ${local.stageLineShort}`} />
      </div>
    </div>
  );
}
