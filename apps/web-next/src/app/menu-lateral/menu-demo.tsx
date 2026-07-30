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
      <span className={local.mark} aria-hidden="true">
        G
      </span>
      {!collapsed ? (
        <div className={local.brandText}>
          <strong>Gob UI</strong>
          <small>Sistema institucional</small>
        </div>
      ) : null}
      <button
        type="button"
        className={local.toggle}
        onClick={onToggle}
        aria-label={collapsed ? 'Expandir menu' : 'Colapsar menu'}
        title={collapsed ? 'Expandir' : 'Colapsar'}
      >
        {collapsed ? (
          <CaretDoubleRight weight="thin" size={15} />
        ) : (
          <CaretDoubleLeft weight="thin" size={15} />
        )}
      </button>
    </div>
  );
}

function Footer({
  collapsed,
  showUser,
}: {
  collapsed: boolean;
  showUser: boolean;
}) {
  if (!showUser && !collapsed) {
    return <div slot="footer" className={local.footEmpty} />;
  }

  if (collapsed) {
    return (
      <div slot="footer" className={local.footRail}>
        <span className={local.avatar} title="MG Sandoval">
          MG
        </span>
        <button type="button" className={local.railBtn} title="Salir" aria-label="Salir">
          <SignOut weight="thin" size={17} aria-hidden="true" />
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
      title={label}
      onClick={(e) => e.preventDefault()}
    >
      <span className={local.navIcon}>
        <Icon weight="thin" size={18} aria-hidden="true" />
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

function StagePanel({ collapsed }: { collapsed: boolean }) {
  return (
    <div className={local.stageContent} aria-hidden="true">
      <div className={local.stageHead}>
        <strong>{collapsed ? 'Mas espacio de trabajo' : 'Panel principal'}</strong>
        <span>Expedientes · Operaciones</span>
      </div>
      <div className={local.stageCards}>
        <article>
          <em>Abiertos</em>
          <b>128</b>
        </article>
        <article>
          <em>Revision</em>
          <b>46</b>
        </article>
        <article>
          <em>Cerrados</em>
          <b>312</b>
        </article>
      </div>
      <div className={local.stageList}>
        <div>
          <strong>EXP-2041</strong>
          <span>En revision</span>
        </div>
        <div>
          <strong>EXP-2040</strong>
          <span>Abierto</span>
        </div>
        <div>
          <strong>EXP-2038</strong>
          <span>Cerrado</span>
        </div>
      </div>
    </div>
  );
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
  const showUser =
    example.variant === 'user' ||
    example.variant === 'basic' ||
    example.variant === 'brand' ||
    example.variant === 'dense' ||
    example.variant === 'badges' ||
    example.variant === 'grouped' ||
    collapsed;

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
          active={collapsed ? 'Expedientes' : 'Inicio'}
        />
        <Footer collapsed={collapsed} showUser={showUser} />
      </gob-sidebar>
      <StagePanel collapsed={collapsed} />
    </div>
  );
}
