'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import '@mariasan001/ui-wc';

import s from './page.module.css';
import local from './estructura.module.css';

const CODE_LANGUAGES = [
  { id: 'html', label: 'HTML' },
  { id: 'react', label: 'React' },
  { id: 'vue', label: 'Vue' },
  { id: 'angular', label: 'Angular' },
] as const;

type CodeLang = (typeof CODE_LANGUAGES)[number]['id'];

function buildSnippet(lang: CodeLang, collapsed: boolean) {
  const collapsedAttr = collapsed ? ' collapsed' : '';
  if (lang === 'html') {
    return `<gob-app-shell${collapsedAttr}>
  <aside slot="sidebar">Menu</aside>
  <header slot="topbar">Barra superior</header>
  <section>Contenido principal</section>
</gob-app-shell>`;
  }
  if (lang === 'react') {
    return `import '@mariasan001/ui-wc';

<gob-app-shell${collapsed ? ' collapsed' : ''}>
  <aside slot="sidebar">Menu</aside>
  <header slot="topbar">Barra superior</header>
  <section>Contenido principal</section>
</gob-app-shell>`;
  }
  if (lang === 'vue') {
    return `import '@mariasan001/ui-wc';

<gob-app-shell${collapsedAttr}>
  <aside slot="sidebar">Menu</aside>
  <header slot="topbar">Barra superior</header>
  <section>Contenido principal</section>
</gob-app-shell>`;
  }
  return `import '@mariasan001/ui-wc';

<gob-app-shell${collapsedAttr}>
  <aside slot="sidebar">Menu</aside>
  <header slot="topbar">Barra superior</header>
  <section>Contenido principal</section>
</gob-app-shell>`;
}

export default function EstructuraAppPage() {
  const [lang, setLang] = useState<CodeLang>('html');
  const [collapsed, setCollapsed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    void import('@mariasan001/ui-wc');
  }, []);

  async function copySnippet() {
    try {
      await navigator.clipboard.writeText(buildSnippet(lang, collapsed));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={s.page}>
      <header className={s.hero}>
        <div className={s.heroInner}>
          <Link className={s.back} href="/">
            ← Componentes
          </Link>
          <h1 className={s.title}>Estructura de app</h1>
          <p className={s.hint}>
            Marco base para <strong>tableros</strong>: menu lateral, barra superior y zona de
            contenido.
          </p>
          <p className={s.version}>Version 1.0 / Libreria Gob_v2</p>
        </div>
      </header>

      <div className={s.panelWrap}>
        <section className={s.panel}>
          <div className={s.filters}>
            <div className={s.filterBlock}>
              <p className={s.filterLabel}>Lenguaje</p>
              <div className={s.langRow}>
                {CODE_LANGUAGES.map((option) => {
                  const active = option.id === lang;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={`${s.langChip} ${active ? s.langChipActive : ''}`}
                      aria-pressed={active}
                      onClick={() => setLang(option.id)}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className={s.filterBlock}>
              <p className={s.filterLabel}>Menu lateral</p>
              <div className={s.langRow}>
                <button
                  type="button"
                  className={`${s.langChip} ${!collapsed ? s.langChipActive : ''}`}
                  aria-pressed={!collapsed}
                  onClick={() => setCollapsed(false)}
                >
                  Expandido
                </button>
                <button
                  type="button"
                  className={`${s.langChip} ${collapsed ? s.langChipActive : ''}`}
                  aria-pressed={collapsed}
                  onClick={() => setCollapsed(true)}
                >
                  Colapsado
                </button>
              </div>
            </div>
          </div>

          <section className={s.section} aria-label="Vista previa">
            <div className={s.sectionHead}>
              <h2 className={s.sectionTitle}>Vista previa</h2>
              <p className={s.sectionDesc}>
                Slots: <code>sidebar</code>, <code>topbar</code> y contenido por defecto.
              </p>
            </div>

            <div className={local.stage}>
              <gob-app-shell collapsed={collapsed || undefined} className={local.shell}>
                <aside slot="sidebar" className={local.sidebar}>
                  <p className={local.brand}>Gob UI</p>
                  <nav className={local.nav}>
                    <span className={local.navActive}>Inicio</span>
                    <span>Expedientes</span>
                    <span>Reportes</span>
                    <span>Ajustes</span>
                  </nav>
                </aside>
                <header slot="topbar" className={local.topbar}>
                  <strong>Tablero</strong>
                  <span>Usuario demo</span>
                </header>
                <section className={local.content}>
                  <h3>Contenido principal</h3>
                  <p>Aqui van metricas, tablas y formularios del tablero.</p>
                </section>
              </gob-app-shell>
            </div>
          </section>

          <section className={s.section} aria-label="Codigo">
            <div className={s.sectionHead}>
              <h2 className={s.sectionTitle}>Codigo</h2>
              <p className={s.sectionDesc}>Copia el ejemplo en {lang.toUpperCase()}.</p>
            </div>
            <div className={local.codeWrap}>
              <button type="button" className={local.copyBtn} onClick={() => void copySnippet()}>
                {copied ? 'Copiado' : 'Copiar'}
              </button>
              <pre className={local.code}>
                <code>{buildSnippet(lang, collapsed)}</code>
              </pre>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
