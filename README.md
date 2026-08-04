# gob_ui

Sistema de diseno institucional **Gob_v2** (monorepo pnpm).

Incluye tokens, estilos, Web Components y un catalogo vivo en Next.js.
Identidad visual: vino `#9F2141`, dorado `#BC945A`, fill `#f3f3f3`.

## Estado actual

- Catalogo **completo**: 76 entradas `ready` (sin pendientes `soon`)
- **74** Web Components en `packages/ui-wc`
- Docs por componente con ejemplos, variantes y boton **Copiar**
- Demo Next en `http://localhost:9090`
- Rama principal: `main`

### Cobertura del catalogo

| Categoria | Componentes |
|---|---|
| Fundamentos | Tipografia, Colores, Iconografia |
| Acciones | Botones, Icono, Grupo, Menu desplegable, Dividido, Flotante |
| Navegacion | Paginacion, Migas, Pestanas, Pasos, Menu, Enlace, Segmentado, Paleta de comandos… |
| Layout | App shell, Sidebar, Topbar, Encabezado, Contenedor, Cuadricula, Separador, Espaciador |
| Formularios | Input, Textarea, Select, Combobox, Casilla, Radio, Switch, Fecha, Hora, Archivos, Slider, Busqueda, Form field, Form |
| Datos | KPI, Grafica, Tabla, Data grid, Filtros, Toolbar, Lista, Timeline, Actividad, Empty, Notificaciones |
| Feedback | Skeleton, Progreso, Spinner, Alerta, Toast, Banner, Badge, Tag, Tooltip, Helper text |
| Capas | Modal, Drawer, Popover, Sheet, Confirmacion |
| Contenido | Tarjeta, Avatar, Menu usuario, Acordeon, Secciones, Hero, Footer, Indice, Codigo, Metricas |

## Workspace

- `packages/tokens`: tokens base en JSON
- `packages/styles`: estilos compartidos (`base.css`, `theme.css`, `utilities.css`, `fonts.css`)
- `packages/ui-wc`: libreria de Web Components (`@mariasan001/ui-wc`)
- `apps/web-next`: catalogo / docs de referencia (Next.js)
- `apps/web-vanilla`: demo minima en HTML puro

## Requisitos

- Node.js 20 o superior
- pnpm 9.12.3

## Como correr demos

Instala dependencias:

```bash
pnpm install
```

Catalogo Next.js:

```bash
pnpm dev
```

Abre `http://localhost:9090`.

Build de la demo Next.js:

```bash
pnpm build:next
```

Demo HTML puro:

```bash
pnpm build:ui-wc
```

Despues sirve `apps/web-vanilla/` con cualquier servidor estatico y abre `index.html`.

## Como consumir packages

### Styles

```ts
import '@mariasan001/styles/base.css';
import '@mariasan001/styles/theme.css';
import '@mariasan001/styles/utilities.css';
import '@mariasan001/styles/fonts.css';
```

### Web Components

Registra la libreria una vez en el cliente:

```ts
import '@mariasan001/ui-wc';
```

Ejemplos:

```html
<gob-button tone="primary" appearance="solid">Guardar</gob-button>
<gob-alert tone="success" title="Listo" description="El tramite se envio."></gob-alert>
<gob-modal open title="Confirmar" description="¿Deseas continuar?"></gob-modal>
```

Los tipos JSX de los custom elements viven en `packages/ui-wc/src/types.ts`.

## Calidad y empaquetado

Puerta minima reproducible:

```bash
pnpm verify
```

Equivale a:

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm pack:styles
pnpm pack:ui-wc
```

Pasos puntuales:

```bash
pnpm -C apps/web-next lint
pnpm -C apps/web-next exec tsc --noEmit
pnpm -C apps/web-next build
pnpm -C packages/ui-wc build
```

## Release checklist

Packages publicables:

- `@mariasan001/styles`
- `@mariasan001/ui-wc`

`@gob/tokens` sigue privado.

### 1. Bump de versiones

Actualiza `version` en:

- `packages/styles/package.json`
- `packages/ui-wc/package.json`

### 2. Verificacion previa

```bash
pnpm verify
pnpm smoke:pack
pnpm smoke:consumers
```

### 3. Tag + release notes

```bash
git tag -a styles-vX.Y.Z -m "Release @mariasan001/styles vX.Y.Z"
git tag -a ui-wc-vX.Y.Z -m "Release @mariasan001/ui-wc vX.Y.Z"
```

### 4. Publicacion a GitHub Packages

Configura `.npmrc` local desde `.npmrc.example` con `GITHUB_PACKAGES_TOKEN`.

```bash
pnpm -C packages/styles exec npm publish --registry=https://npm.pkg.github.com
pnpm -C packages/ui-wc exec npm publish --registry=https://npm.pkg.github.com
```

### 5. Confirmacion

```bash
pnpm smoke:pack
pnpm smoke:consumers
```

## Troubleshooting

### PowerShell bloquea `pnpm`

```bash
cmd /c pnpm install
```

### Un custom element no aparece en JSX/TS

Confirma:

- import de `@mariasan001/ui-wc` en cliente
- build de `packages/ui-wc` (`pnpm build:ui-wc`)
- tipos exportados desde el package

### La demo HTML no renderiza

Confirma:

- `pnpm install`
- `pnpm build:ui-wc`
- servir `apps/web-vanilla` con un servidor estatico

## Tokens

Los tokens viven en `packages/tokens/src/tokens.json`.

## Autoria y proteccion

**Creadora:** [mariasan001](https://github.com/mariasan001) (Maria Guadalupe Sandoval Perez)

Este sistema es obra de mariasan001. Puedes usarlo y modificarlo, pero:

- la atribucion es **obligatoria**
- **no** se puede eliminar ni cambiar el nombre del creador
- deben conservarse `LICENSE`, `NOTICE` y `AUTHORSHIP.md`

Credito minimo:

```text
Gob UI — creado por mariasan001
https://github.com/mariasan001/gob_ui
```

Ver detalles en [`LICENSE`](./LICENSE) y [`AUTHORSHIP.md`](./AUTHORSHIP.md).

## Autor

- GitHub: [mariasan001](https://github.com/mariasan001)
- Repo: [mariasan001/gob_ui](https://github.com/mariasan001/gob_ui)
