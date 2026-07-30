'use client';

import {
  Buildings,
  ChartBar,
  FolderOpen,
  GearSix,
  House,
  SignOut,
  UserCircle,
} from '@phosphor-icons/react';

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
}: {
  collapsed?: boolean;
  large?: boolean;
}) {
  return (
    <div slot="brand" className={`${local.brand} ${large ? local.brandLg : ''}`}>
      <span className={local.mark} aria-hidden="true">
        G
      </span>
      {!collapsed ? (
        <div>
          <strong>Gob UI</strong>
          <small>Sistema institucional</small>
        </div>
      ) : null}
    </div>
  );
}

function Footer({ collapsed }: { collapsed?: boolean }) {
  if (collapsed) {
    return (
      <div slot="footer" className={local.footIcon} title="Salir">
        <SignOut weight="thin" size={18} aria-hidden="true" />
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
  active = 'Inicio',
}: {
  variant: SidebarVariant;
  active?: string;
}) {
  const collapsed = variant === 'collapsed';
  const showBadges = variant === 'badges';
  const grouped = variant === 'grouped';

  if (grouped) {
    return (
      <>
        <p className={local.group}>Operacion</p>
        {NAV.slice(0, 3).map(({ label, Icon }) => (
          <a
            key={label}
            href="#"
            className={`${local.navItem} ${label === active ? local.navActive : ''}`}
            data-active={label === active ? 'true' : undefined}
            onClick={(e) => e.preventDefault()}
          >
            <Icon weight="thin" size={18} aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
        <p className={local.group}>Sistema</p>
        {NAV.slice(3).map(({ label, Icon }) => (
          <a
            key={label}
            href="#"
            className={`${local.navItem} ${label === active ? local.navActive : ''}`}
            data-active={label === active ? 'true' : undefined}
            onClick={(e) => e.preventDefault()}
          >
            <Icon weight="thin" size={18} aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </>
    );
  }

  return (
    <>
      {NAV.map(({ label, Icon, badge }) => (
        <a
          key={label}
          href="#"
          className={`${local.navItem} ${label === active ? local.navActive : ''}`}
          data-active={label === active ? 'true' : undefined}
          title={collapsed ? label : undefined}
          onClick={(e) => e.preventDefault()}
        >
          <Icon weight="thin" size={18} aria-hidden="true" />
          {!collapsed ? <span>{label}</span> : null}
          {showBadges && badge ? <em className={local.badge}>{badge}</em> : null}
        </a>
      ))}
    </>
  );
}

export function MenuDemo({
  example,
  tone,
}: {
  example: MenuExample;
  tone: Tone;
}) {
  const collapsed = example.variant === 'collapsed';

  return (
    <gob-sidebar
      variant={example.variant}
      tone={tone}
      collapsed={collapsed || undefined}
      className={local.sidebar}
    >
      <Brand collapsed={collapsed} large={example.variant === 'brand'} />
      <NavItems
        variant={example.variant}
        active={example.variant === 'collapsed' ? 'Expedientes' : 'Inicio'}
      />
      <Footer collapsed={collapsed} />
    </gob-sidebar>
  );
}
