# gob-ui — Web Components (universal) + tokens + styles

Este repo es el “cerebro” del UI para Gobierno con enfoque universal:

- **tokens** (fuente de verdad) → también se sincroniza a Figma
- **styles** (CSS universal con variables) → sirve en Next/Vue/Angular/HTML
- **ui-wc** (Web Components) → un solo componente para todos (`<gob-button />`)
- **apps/web-next** demo Next
- **apps/web-vanilla** demo HTML puro

## Correr demo Next
```bash
pnpm install
pnpm dev
```
Abre: http://localhost:3000

## Probar en HTML puro
Abre `apps/web-vanilla/index.html` con un servidor estático (ej: VSCode Live Server).
Importa CSS desde `@gob/styles` y el JS ESM desde `@gob/ui-wc`.

---

## Figma (tokens → variables)
Este repo incluye tokens en:
- `packages/tokens/src/tokens.json`

Flujo recomendado:
1) Instala plugin **Tokens Studio** en Figma.
2) Conecta Sync a GitHub.
3) Apunta al archivo `packages/tokens/src/tokens.json`.
4) Pull tokens → mapea a **Figma Variables** (Collections/Modes).
