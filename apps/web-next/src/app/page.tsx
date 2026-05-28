'use client';

import Link from 'next/link';
import s from './page.module.css';
import WcRegister from './playground/button/wc-register';

export default function HomePage() {
  return (
    <div className={s.page}>
      <WcRegister />

      <header className={s.header}>
        <div className={s.headerInner}>
          <div className={s.brand}>
            <span className={s.logo} aria-hidden="true" />
            <div className={s.brandText}>
              <div className={s.brandName}>Gob UI</div>
              <div className={s.brandHint}>Design System + Web Components</div>
            </div>
          </div>

          <nav className={s.nav}>
            <Link className={s.navLink} href="/components">Componentes</Link>
            <Link className={s.navLink} href="/docs">Docs</Link>
            <Link className={s.navLink} href="/tokens">Tokens</Link>
            <Link className={s.navCta} href="/playground/button">Playground</Link>
          </nav>
        </div>
      </header>

      <main className={s.shell}>
        <section className={s.hero}>
          {/* LEFT */}
          <div className={s.left}>
            <div className={s.pills}>
              <span className={s.pill}>Tokens</span>
              <span className={s.pill}>Web Components</span>
              <span className={s.pillGhost}>slot</span>
              <span className={s.pillGhost}>attrs</span>
            </div>

            <h1 className={s.title}>
              UI institucional,
              <br />
              sin “inventar estilos”.
            </h1>

            <p className={s.subtitle}>
              Un sistema de componentes portable (Next/Vite/Vue/Angular/HTML) basado en tokens.
              Consistencia visual, accesibilidad y cero drama.
            </p>

            <div className={s.actions}>
              <Link className={s.primary} href="/components">Explorar componentes</Link>
              <Link className={s.secondary} href="/docs">Ver documentación</Link>
            </div>

            <div className={s.metrics}>
              <div className={s.metric}>
                <div className={s.metricVal}>1</div>
                <div className={s.metricLbl}>Paquete WC</div>
              </div>
              <div className={s.metric}>
                <div className={s.metricVal}>Tokens</div>
                <div className={s.metricLbl}>CSS Variables</div>
              </div>
              <div className={s.metric}>
                <div className={s.metricVal}>Multi</div>
                <div className={s.metricLbl}>Stack listo</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={s.right}>
            <div className={s.showcase}>
              <div className={s.showcaseTop}>
                <div className={s.showcaseTitle}>Vitrina</div>
                <div className={s.showcaseHint}>Botón real (WC)</div>
              </div>

              <div className={s.previewRow}>
                <gob-button tone="primary" appearance="solid">
                  Guardar
                </gob-button>

                <gob-button tone="neutral" appearance="outline">
                  Cancelar
                </gob-button>

                <gob-button tone="dark" appearance="solid">
                  Acción
                  <span slot="icon" aria-hidden="true">★</span>
                </gob-button>
              </div>

              <div className={s.codeBox}>
                <div className={s.codeHead}>
                  <span className={s.codeDot} />
                  <span className={s.codeDot2} />
                  <span className={s.codeDot3} />
                  <span className={s.codeTitle}>Uso rápido</span>
                </div>

                <pre className={s.code}>
                  <code>{`<gob-button tone="primary" appearance="solid">
  Guardar
</gob-button>`}</code>
                </pre>
              </div>

              <div className={s.quickLinks}>
                <Link className={s.quick} href="/playground/button">
                  Abrir playground →
                </Link>
                <Link className={s.quick} href="/tokens">
                  Ver tokens →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className={s.footer}>
          <span className={s.footerLeft}>Gob UI</span>
          <span className={s.footerRight}>Portable • Tokens • Web Components</span>
        </footer>
      </main>
    </div>
  );
}
