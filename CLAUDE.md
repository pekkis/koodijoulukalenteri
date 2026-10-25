# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (see `packageManager` in package.json). Node **v24** (`.nvmrc`).

```bash
pnpm i
pnpm dev            # next dev (Turbopack), port 3000
pnpm build          # next build (Turbopack), output: "standalone"
pnpm lint           # eslint (flat config, next core-web-vitals + ts + prettier)
pnpm type-check     # tsc --noEmit
pnpm analyze        # bundle analyzer — forces --webpack, see below
```

### Bundler: Turbopack

Dev and build both run on **Turbopack**. vanilla-extract works under it via
`unstable_turbopack: { mode: "auto" }` passed to `createVanillaExtractPlugin` in
[next.config.js](next.config.js) — this is **off by default** in the plugin, so removing that
option silently drops back to webpack-only and Turbopack builds will emit no vanilla-extract CSS.
Requires `@vanilla-extract/next-plugin` >= 2.5.x and Next >= 16 (`mode: "auto"` no-ops below 16).
Upstream still labels it experimental, so pin deliberately.

The plugin emits its webpack config alongside the Turbopack rules, so `next build --webpack`
remains a working escape hatch if Turbopack regresses.

`@next/bundle-analyzer` is webpack-only — it detects `process.env.TURBOPACK`, warns, and
produces no report. That is why `pnpm analyze` passes `--webpack` explicitly.

### Dev-only env vars

- `NEXT_PUBLIC_DEBUG=true` — makes every hatch openable regardless of date, and mounts the `Debug`/`Debugger`/`Refresher` debug UI. (The README says `DEBUG=true`; that is stale — the code reads `NEXT_PUBLIC_DEBUG`.)
- `NEXT_PUBLIC_OFFSET='{"months":1}'` — a Luxon `DurationLike` JSON blob added to "now" by `getTime()`. This is the only way time is read anywhere in the app; never call `DateTime.now()` directly.
- `TZ=utc` is set in `.env`.

### Tests — currently non-functional

`pnpm test` (jest) and `pnpm test:e2e` (playwright) are declared in package.json but **neither is runnable as checked in**: jest, jest-environment-jsdom and @playwright/test are not in devDependencies, there is no `playwright.config.*`, and the only spec ([e2e/welcome.spec.ts](e2e/welcome.spec.ts)) is dead leftover from the training-course repo this was forked from (it asserts "Hardcore React Training"). There are no unit tests in `src`.

**That same dead spec currently breaks `pnpm type-check` and `pnpm build` for everyone.** `tsconfig.json`
includes `**/*.ts`, which picks up `e2e/welcome.spec.ts`, which imports the uninstalled
`@playwright/test`:

```
e2e/welcome.spec.ts(1,30): error TS2307: Cannot find module '@playwright/test'
e2e/welcome.spec.ts(3,51): error TS7031: Binding element 'page' implicitly has an 'any' type
```

`.dockerignore` does not exclude `e2e/`, so the Docker build hits it too. This is bundler-independent
and predates the Turbopack switch. Compilation itself is clean — with `e2e/` out of the way the build
goes fully green. Until it's fixed (install the dep, delete the spec, or exclude `e2e` in tsconfig),
`pnpm lint` is the only check that passes as-is, and a red `type-check` should be diffed against this
known failure before assuming it's your change.

## Architecture

A Next.js App Router advent calendar. Content is Finnish. The central abstraction is a **calendar**: a year's worth of hatches, its own theme, its own artwork, its own "naughtiness" ladder.

### Calendar registry

[src/services/calendar.ts](src/services/calendar.ts) is `server-only` and holds a `calendars` record mapping id → dynamic `import()`. Registering a new year means adding one entry there; a calendar directory that isn't in that map is dead code (`2024/` currently is — it exists on disk but is not registered).

`CalendarType` is the whole contract: `hatches`, `getHatchData`, `naughtinessLevels`, `themeClassName`, `openAt`, `getSlotComponent`. Everything is loaded lazily so an unopened year never enters the bundle.

### The server/client boundary

`CalendarType` carries functions and Luxon `DateTime`s and cannot cross into a client component. **`getClientCalendar(calendar)` strips the non-serializable fields** (`getHatchData`, `hatches`, `openAt` → ISO string, slot getters) and returns `ClientCalendarType`. Any value handed to a `"use client"` component must go through it. This conversion happens repeatedly and deliberately — [CalendarHatch.tsx](src/components/calendar/CalendarHatch.tsx), [Calendar.tsx](src/components/calendar/Calendar.tsx), [CalendarWall.tsx](src/components/hatch/CalendarWall.tsx) each do it at their own boundary.

### Routes

- [src/app/page.tsx](src/app/page.tsx) — all calendars, sorted by year/weight
- `/c/[calendarId]` — [layout.tsx](src/app/c/[calendarId]/layout.tsx) resolves the calendar, computes `isInteractive` (`now > calendar.openAt`), and wraps everything in `Providers`; [page.tsx](src/app/c/[calendarId]/page.tsx) is just a `Refresher`
- `/c/[calendarId]/h/[hatchId]` — [the hatch page](src/app/c/[calendarId]/h/[hatchId]/page.tsx) renders `<Dialog><HatchRenderer/></Dialog>` as a nested route; `Dialog` navigates back to `/c/[id]` on Escape/click-outside, preserving the `?hatches=` param

Pages call `await connection()` and set `revalidate = 60` — rendering is time-dependent, so it must not be statically prerendered at build time.

### Hatch content model

Hatch content is plain data, not JSX. `HatchData` has `title`, `image`, and `content: ContentBlockType[]`, where a block is `markdown | heading | image | youtube | jsx`. [HatchRenderer.tsx](src/components/hatch-renderer/HatchRenderer.tsx) switches over the block type. The `jsx` block is the escape valve for interactive demos.

**Adding a hatch** to an existing year:

1. `src/services/calendar/<year>/hatch/<slug>/<slug>Hatch.tsx` exporting a `HatchDataWithoutDay`, with its image (`.webp`) alongside it
2. register it by day number in that year's `hatches.ts`
3. add a `HatchConfig` to the `hatches` array in that year's `calendar.ts`, with `getPosition(...)` and an `openableAt` in `Europe/Helsinki`

`getPosition(x, y, width, height)` places the hatch on a 50×50 CSS grid over the background image; **negative x/y count back from the opposite edge** (`52 + x - width`). Day numbers are not limited to 1–24 — `33` and `666` are used for secret/escape hatches, and `getHatchData` special-cases `666` to bypass the date check.

Before its `openableAt`, `getHatchData` returns "risuja" (twigs) placeholder content instead of the real hatch — the real content is never sent to the client early.

A hatch may override its rendering per-hatch via `hatchComponent` / `innerHatchComponent` on the `HatchConfig`, or per-calendar via `defaultHatchComponent` / `defaultInnerHatchComponent`. Resolution order lives in [CalendarHatch.tsx](src/components/calendar/CalendarHatch.tsx).

### Naughtiness

The game mechanic: prying at a hatch before it's openable adds naughtiness (proportional to hatch area unless `naughtinessIncrease` overrides). The score lives in `localStorage` under `naughtiness-<calendarId>` ([useNaughtiness.ts](src/hooks/useNaughtiness.ts)) and selects a `NaughtinessLevel`, which swaps the background image and background music. Levels are declared per-calendar and must be ordered ascending by `requiredNaughtiness` — `getNaughtinessLevel` uses `findLast`.

### State

- **URL is the source of truth for which hatches are open** — `nuqs` `?hatches=1,4,7` via [useOpenHatches.ts](src/hooks/useOpenHatches.ts). Not React state, not a store.
- **jotai** for per-calendar client state; the store is recreated per `calendar.id` in [Providers.tsx](src/components/Providers.tsx)
- **localStorage** (`@mantine/hooks`) for naughtiness

### Styling

**vanilla-extract**, `*.css.ts` files colocated with components. Two layers:

- [src/theme.css.ts](src/theme.css.ts) — global `createGlobalTheme(":root", …)` design tokens (spacing, colors, fonts). Import as `theme` and reference tokens; avoid hardcoded values.
- [src/calendar-theme.css.ts](src/calendar-theme.css.ts) — a `createThemeContract` each year implements (e.g. `theme-2025.css.ts`), exposed as `calendar.themeClassName` and applied around that calendar's markup.

Colors use CSS `light-dark()`; theme switching is `next-themes`. `.stylelintrc.json` exists but stylelint is not installed.

### React comes from Next, not package.json

`react` and `react-dom` are deliberately **not** dependencies. Next vendors its own React in
`next/dist/compiled/` and aliases `react`/`react-dom` to it, so the app actually runs on
**19.3.0-canary** (plus a `react-experimental` build), not on the `react@19.2.1` that appears in
the pnpm store as a peer-dep artifact.

This is load-bearing: [Dialog.tsx](src/components/dialog/Dialog.tsx) imports `ViewTransition` from
`"react"`, an API present only in the canary. Types resolve because `next/dist/types.d.ts` carries
`/// <reference types="react/experimental" />` — nothing in this repo's `tsconfig.json` opts in.

So don't add react/react-dom to `package.json` to silence eslint's "the react package is not
installed" warning; pin `settings.react.version` in [eslint.config.mjs](eslint.config.mjs) if it
matters.

Canary-only React APIs are therefore fair game here — but they ride on whichever canary the current
Next vendored, and Next re-vendors a newer one most releases. The exposure is **upgrades, not
downgrades**: `experimental.viewTransition` was a valid config key when it was added and is
rejected outright by 16.3.3. Treat a Next bump as something that can move React APIs, and re-check
`ViewTransition` usage when bumping.

### Content slots

A calendar customizes the instructions/controls area above the grid by returning components from `getSlotComponent(slot)` (`"instructions" | "controls"`), implemented in that year's `slots/` directory.

## Conventions

- Path alias `@/*` → `./src/*`
- Prettier: 80 cols, double quotes, no trailing commas, LF
- React Compiler is enabled (`reactCompiler: true`) — don't hand-add `useMemo`/`useCallback` for performance alone
- `remeda` for functional helpers (`pipe`, `sortBy`, `piped`), `luxon` for all dates
- Server Actions are origin-locked in [next.config.js](next.config.js); new dev origins must be added to `allowedOrigins`
- `pnpm-workspace.yaml` sets `minimumReleaseAge: 4320` (3 days) with Next.js/React packages excluded — new deps won't resolve to just-published versions
- `patches/` contains a pnpm patch for `@react-three/fiber`

## Deployment

`output: "standalone"`, built by [docker/next/Dockerfile](docker/next/Dockerfile), run via [compose.yml](compose.yml) on host port 3100.

Live at **https://koodijoulukalenteri.pekkis.eu/** — the front page there is the ground truth for which calendars are actually registered (currently 2025, 2023-redux, 2023). The same host is hardcoded as `metadataBase` in the page metadata and in `serverActions.allowedOrigins`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
