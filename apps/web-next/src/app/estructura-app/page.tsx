'use client';

/**
 * Docs de Estructura de app — cascaron canonico = Botones (/botones).
 * No alterar el hero vino ni el panel blanco superpuesto.
 */

import Link from 'next/link';
import { useEffect, useState } from 'react';

import '@mariasan001/ui-wc';

import {
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
import { ShellDemo } from './shell-demo';

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

          <section className={s.section} aria-label="Ejemplos">
            <div className={s.sectionHead}>
              <h2 className={s.sectionTitle}>Ejemplos</h2>
              <p className={s.sectionDesc}>
                Cinco variantes con preview completo. Copia el snippet en el lenguaje activo.
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
