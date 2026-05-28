'use client';

import { useMemo, useState } from 'react';
import WcRegister from './wc-register';
import s from './page.module.css';
import { GobButtonProps } from '@gob/ui-wc';

type Tone = 'primary' | 'accent' | 'dark' | 'neutral' | 'soft';
type Appearance = 'solid' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

// ✅ Contenido del botón
type ContentMode = 'text' | 'icon' | 'icon-left' | 'icon-right';

export default function Page() {
  const [tone, setTone] = useState<Tone>('primary');
  const [appearance, setAppearance] = useState<Appearance>('solid');
  const [size, setSize] = useState<Size>('md');

  const [contentMode, setContentMode] = useState<ContentMode>('text');

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const showIcon = contentMode !== 'text';
  const showText = contentMode !== 'icon';
  const iconOnly = contentMode === 'icon';
  const iconPosition: 'left' | 'right' = contentMode === 'icon-right' ? 'right' : 'left';

  const tag = useMemo<GobButtonProps>(() => {
    const attrs: GobButtonProps = {
      tone,
      appearance,
      size,
      loading: loading ? true : undefined,
      disabled: disabled || loading ? true : undefined,
      'icon-only': iconOnly ? true : undefined,
      'icon-position': showIcon && !iconOnly ? iconPosition : undefined,
      'aria-label': iconOnly ? 'Acción' : undefined,
    };

    Object.keys(attrs).forEach((k) => (attrs as any)[k] === undefined && delete (attrs as any)[k]);
    return attrs;
  }, [tone, appearance, size, loading, disabled, iconOnly, iconPosition, showIcon]);


  const snippetHtml = useMemo(() => {
    const base = `<gob-button tone="${tone}" appearance="${appearance}" size="${size}"`;
    const aLoading = loading ? ' loading' : '';
    const aDisabled = disabled ? ' disabled' : '';
    const aIconOnly = iconOnly ? ' icon-only aria-label="Acción"' : '';
    const aIconPos = showIcon && !iconOnly ? ` icon-position="${iconPosition}"` : '';

    if (iconOnly) {
      return `${base}${aLoading}${aDisabled}${aIconOnly}>
  <span slot="icon">★</span>
</gob-button>`;
    }

    if (showIcon) {
      return `${base}${aLoading}${aDisabled}${aIconPos}>
  <span slot="icon">★</span>
  Acción
</gob-button>`;
    }

    return `${base}${aLoading}${aDisabled}>Acción</gob-button>`;
  }, [tone, appearance, size, loading, disabled, iconOnly, showIcon, iconPosition]);

  return (
    <main className={`${s.shell} gob-stack`}>
      <WcRegister />

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.badgeRow}>
          <span className={s.badge}>
            <span className={s.dot} />
            Tokens + Web Components
          </span>

          <span className={s.badge}>
            Next / Vue / Angular / HTML <span className={s.kbd}>slot</span> <span className={s.kbd}>attrs</span>
          </span>
        </div>

        <h1 className={s.title}>Gob UI — Web Components</h1>
        <p className={s.subtitle}>
          Un botón institucional configurable por <b>tone</b> (color) + <b>appearance</b> (estilo) + <b>size</b>.
          Todo vive en CSS variables: elegante, portable y sin drama.
        </p>
      </section>

      {/* GRID */}
      <section className={s.grid}>
        {/* Playground */}
        <article className={s.card}>
          <div className={s.cardHeader}>
            <h3 className={s.cardTitle}>Playground</h3>
            <p className={s.cardHint}>Cambia tono/estilo/tamaño y prueba estados en vivo.</p>
          </div>

          <div className={s.cardBody}>
            {/* Controles */}
            <div className={s.controlsGrid}>
              <div className={s.field}>
                <div className={s.fieldLabel}>Tono</div>
                <select className={s.select} value={tone} onChange={(e) => setTone(e.target.value as Tone)}>
                  <option value="primary">Vino (primary)</option>
                  <option value="accent">Dorado (accent)</option>
                  <option value="dark">Negro (dark)</option>
                  <option value="neutral">Blanco (neutral)</option>
                  <option value="soft">Soft (soft)</option>
                </select>
              </div>

              <div className={s.field}>
                <div className={s.fieldLabel}>Estilo</div>
                <select
                  className={s.select}
                  value={appearance}
                  onChange={(e) => setAppearance(e.target.value as Appearance)}
                >
                  <option value="solid">Sólido (solid)</option>
                  <option value="outline">Línea (outline)</option>
                  <option value="ghost">Ghost (ghost)</option>
                </select>
              </div>

              <div className={s.field}>
                <div className={s.fieldLabel}>Tamaño</div>
                <select className={s.select} value={size} onChange={(e) => setSize(e.target.value as Size)}>
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                </select>
              </div>

              <div className={s.field}>
                <div className={s.fieldLabel}>Contenido</div>
                <select
                  className={s.select}
                  value={contentMode}
                  onChange={(e) => setContentMode(e.target.value as ContentMode)}
                >
                  <option value="text">Solo texto</option>
                  <option value="icon">Solo ícono</option>
                  <option value="icon-left">Ícono + texto (izq)</option>
                  <option value="icon-right">Texto + ícono (der)</option>
                </select>
              </div>
            </div>

            <div className={s.toggleRow}>
              <label className={s.togglePill}>
                <input type="checkbox" checked={loading} onChange={(e) => setLoading(e.target.checked)} />
                Loading
              </label>

              <label className={s.togglePill}>
                <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
                Disabled
              </label>
            </div>

            {/* Preview */}
            <div className={s.previewStage}>
              <gob-button {...tag}>
                {showIcon ? (
                  <span slot="icon" aria-hidden="true">
                    ★
                  </span>
                ) : null}
                {showText ? 'Acción' : null}
              </gob-button>

              <div className={s.previewActions}>
                <gob-button
                  tone={'primary'}
                  appearance={'outline'}
                  loading={loading ? true : undefined}
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => setLoading(false), 1200);
                  }}
                >
                  {loading ? 'Procesando…' : 'Simular carga'}
                </gob-button>

              </div>
            </div>

            <pre className={s.code}>
              <code>{snippetHtml}</code>
            </pre>
          </div>
        </article>

        {/* Uso rápido */}
        <aside className={s.card}>
          <div className={s.cardHeader}>
            <h3 className={s.cardTitle}>Uso rápido</h3>
            <p className={s.cardHint}>Registrar WC en el browser y listo.</p>
          </div>

          <div className={s.cardBody}>
            <pre className={s.code}>
              <code>{`// Next (App Router)
'use client';
import { useEffect } from 'react';

export default function WcRegister() {
  useEffect(() => { void import('@gob/ui-wc'); }, []);
  return null;
}`}</code>
            </pre>

            <pre className={s.code}>
              <code>{`<!-- HTML / Vue / Angular -->
<gob-button tone="primary" appearance="solid">Guardar</gob-button>

<gob-button tone="accent" appearance="outline" icon-position="right">
  Dorado
  <span slot="icon">★</span>
</gob-button>`}</code>
            </pre>
          </div>
        </aside>
      </section>

      <hr className={s.hr} />

      <section className={s.footer}>
        <h2 className={s.miniTitle}>HTML puro</h2>
        <p className={s.miniText}>
          En vanilla/Vue/Angular se usa igual: <code>&lt;gob-button&gt;</code>.
        </p>
      </section>
    </main>
  );
}
