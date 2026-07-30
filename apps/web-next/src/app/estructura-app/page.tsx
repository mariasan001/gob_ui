'use client';

/**
 * Docs de Estructura de app — cascaron canonico = Botones (/botones).
 * No alterar el hero vino ni el panel blanco superpuesto.
 */

import Link from 'next/link';
import { useEffect, useState } from 'react';

import '@mariasan001/ui-wc';

import {
  ANATOMY,
  CODE_LANGUAGES,
  SHELL_ATTRS,
  SHELL_EXAMPLES,
  SHELL_RULES,
  SHELL_TOKENS,
  buildSnippet,
  type CodeLang,
  type ShellExample,
} from './estructura-data';
import local from './estructura.module.css';
import s from './page.module.css';

function ShellDemo({ example }: { example: ShellExample }) {
  const shellProps = {
    collapsed: example.collapsed || undefined,
    dense: example.dense || undefined,
    'hide-topbar': example.hideTopbar || undefined,
    'sticky-topbar': example.stickyTopbar === false ? ('false' as const) : undefined,
  };

  if (example.variant === 'board') {
    return (
      <gob-app-shell {...shellProps} className={local.shell}>
        <aside slot="sidebar" className={local.sidebar}>
          <p className={local.brand}>Gob UI</p>
          <nav className={local.nav} aria-label="Principal">
            <span className={local.navActive}>Inicio</span>
            <span>Expedientes</span>
            <span>Reportes</span>
            <span>Usuarios</span>
            <span>Ajustes</span>
          </nav>
        </aside>
        <header slot="topbar" className={local.topbar}>
          <div>
            <strong>Tablero institucional</strong>
            <p className={local.topMeta}>Hoy · 30 jul 2026</p>
          </div>
          <span className={local.userChip}>MG Sandoval</span>
        </header>
        <section className={local.board}>
          <div className={local.boardHead}>
            <h3>Resumen operativo</h3>
            <p>Indicadores del periodo actual.</p>
          </div>
          <div className={local.kpiRow}>
            <article className={local.kpi}>
              <span>Abiertos</span>
              <strong>128</strong>
            </article>
            <article className={local.kpi}>
              <span>En revision</span>
              <strong>46</strong>
            </article>
            <article className={local.kpi}>
              <span>Cerrados</span>
              <strong>312</strong>
            </article>
          </div>
          <div className={local.panelBlock}>
            <div className={local.panelRow}>
              <span>EXP-2041</span>
              <em>En revision</em>
            </div>
            <div className={local.panelRow}>
              <span>EXP-2040</span>
              <em>Abierto</em>
            </div>
            <div className={local.panelRow}>
              <span>EXP-2038</span>
              <em>Cerrado</em>
            </div>
          </div>
        </section>
      </gob-app-shell>
    );
  }

  return (
    <gob-app-shell
      {...shellProps}
      className={`${local.shell} ${example.dense ? local.shellDense : ''}`}
    >
      <aside
        slot="sidebar"
        className={`${local.sidebar} ${example.collapsed ? local.sidebarCollapsed : ''}`}
      >
        <p className={local.brand}>{example.collapsed ? 'G' : 'Gob UI'}</p>
        <nav className={local.nav} aria-label="Principal">
          {example.collapsed ? (
            <>
              <span className={local.navActive} title="Inicio">
                In
              </span>
              <span title="Expedientes">Ex</span>
              <span title="Reportes">Re</span>
              <span title="Ajustes">Aj</span>
            </>
          ) : (
            <>
              <span className={local.navActive}>Inicio</span>
              <span>Expedientes</span>
              <span>Reportes</span>
              <span>Ajustes</span>
            </>
          )}
        </nav>
      </aside>
      {!example.hideTopbar ? (
        <header slot="topbar" className={local.topbar}>
          <strong>{example.title}</strong>
          <span>Usuario demo</span>
        </header>
      ) : null}
      <section className={local.content}>
        <h3>Contenido principal</h3>
        <p>{example.description}</p>
        <div className={local.contentLines} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>
    </gob-app-shell>
  );
}

export default function EstructuraAppPage() {
  const [lang, setLang] = useState<CodeLang>('html');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    void import('@mariasan001/ui-wc');
  }, []);

  async function copyExample(example: ShellExample) {
    try {
      await navigator.clipboard.writeText(buildSnippet(lang, example));
      setCopiedKey(example.id);
      window.setTimeout(() => setCopiedKey(null), 1200);
    } catch {
      setCopiedKey(null);
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
            Marco para tableros: menu, barra y contenido. Cinco ejemplos con codigo en{' '}
            <strong>{lang.toUpperCase()}</strong>.
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
          </div>

          <div className={s.spec}>
            <h2 className={s.specTitle}>Anatomia</h2>
            <p className={s.specDesc}>
              Tres zonas con slots. El marco controla sticky, colapso, densidad y ocultar topbar.
            </p>
          </div>

          <div className={local.anatomyGrid}>
            {ANATOMY.map((item) => (
              <article key={item.id} className={local.anatomyCard}>
                <div>
                  <h3>{item.title}</h3>
                  <code>{item.caption}</code>
                  <p>{item.body}</p>
                </div>
                <ul className={local.anatomyMetrics}>
                  {item.metrics.map((metric) => (
                    <li key={metric.label}>
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <section className={s.section} aria-label="Ejemplos">
            <div className={s.sectionHead}>
              <h2 className={s.sectionTitle}>Ejemplos</h2>
              <p className={s.sectionDesc}>
                Cinco variantes frecuentes. Revisa el preview, copia el snippet y cambia el lenguaje
                arriba.
              </p>
            </div>

            <div className={local.exampleList}>
              {SHELL_EXAMPLES.map((example, index) => (
                <article key={example.id} className={local.exampleCard}>
                  <div className={local.exampleHead}>
                    <div>
                      <p className={local.exampleIndex}>
                        Ejemplo {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className={local.exampleTitle}>{example.title}</h3>
                      <p className={local.exampleDesc}>{example.description}</p>
                      <div className={local.tagRow}>
                        {example.tags.map((tag) => (
                          <span key={tag} className={local.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      className={local.copyBtn}
                      onClick={() => void copyExample(example)}
                    >
                      {copiedKey === example.id ? 'Copiado' : 'Copiar'}
                    </button>
                  </div>
                  <div className={local.stage}>
                    <ShellDemo example={example} />
                  </div>
                  <pre className={local.code}>
                    <code>{buildSnippet(lang, example)}</code>
                  </pre>
                </article>
              ))}
            </div>
          </section>

          <section className={s.section} aria-label="Atributos">
            <div className={s.sectionHead}>
              <h2 className={s.sectionTitle}>Atributos</h2>
              <p className={s.sectionDesc}>
                API de <code>gob-app-shell</code>. Booleanos como atributo presente o ausente.
              </p>
            </div>
            <div className={local.tableWrap}>
              <table className={local.table}>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Default</th>
                    <th>Descripcion</th>
                  </tr>
                </thead>
                <tbody>
                  {SHELL_ATTRS.map((attr) => (
                    <tr key={attr.name}>
                      <td>
                        <code>{attr.name}</code>
                      </td>
                      <td>{attr.type}</td>
                      <td>
                        <code>{attr.defaultValue}</code>
                      </td>
                      <td>{attr.body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={s.section} aria-label="Tokens">
            <div className={s.sectionHead}>
              <h2 className={s.sectionTitle}>Tokens CSS</h2>
              <p className={s.sectionDesc}>
                Variables para ajustar anchos, padding y alto del marco sin romper el layout.
              </p>
            </div>
            <div className={local.tableWrap}>
              <table className={local.table}>
                <thead>
                  <tr>
                    <th>Token</th>
                    <th>Default</th>
                    <th>Uso</th>
                  </tr>
                </thead>
                <tbody>
                  {SHELL_TOKENS.map((token) => (
                    <tr key={token.name}>
                      <td>
                        <code>{token.name}</code>
                      </td>
                      <td>
                        <code>{token.value}</code>
                      </td>
                      <td>{token.body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={s.section} aria-label="Reglas">
            <div className={s.sectionHead}>
              <h2 className={s.sectionTitle}>Reglas</h2>
              <p className={s.sectionDesc}>
                Criterios para armar tableros institucionales sin romper el marco.
              </p>
            </div>
            <div className={local.rulesPanel}>
              {SHELL_RULES.map((rule) => (
                <article key={rule.id} className={local.ruleRow}>
                  <span className={local.ruleIndex}>{rule.index}</span>
                  <div>
                    <h3 className={local.ruleTitle}>{rule.title}</h3>
                    <p className={local.ruleBody}>{rule.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
