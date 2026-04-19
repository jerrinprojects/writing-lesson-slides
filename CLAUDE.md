# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Type-check + build to dist/
npm run lint      # ESLint
npm run preview   # Preview production build
```

No test suite — verify changes manually in the browser.

## Architecture

This is a React + TypeScript + Vite app that displays writing lesson slides and instruction sheets for classroom use.

### Data layer (`src/slides/index.ts`)

All content lives here — no external data fetching. Two content types:

- **`Lesson`** — a slide-based lesson with an ordered array of `Slide[]`. Each slide has a `SlideContent.type` from a fixed enum (`walt | success | learn | practice | apply | recap | evaluate | think`) that controls the color/badge in `SlideView`.
- **`WritingSheet`** — a single-page instruction sheet with `instructions[]`, `sentenceStarters[]`, `wordBank[]`, and `examples[]`.

Both types belong to a `Category` (`"writing-lessons"` or `"writing-of-the-week"`).

### Navigation (state-machine in `App.tsx`)

There is no router. `App` holds a `view` state (`"home" | "category" | "lesson" | "sheet"`) plus active IDs, and swaps which component renders. All navigation callbacks flow down as props.

### Slide rendering (`SlideView.tsx`)

`renderBody()` parses `**bold**` markdown inline — the only markup supported in slide body text. `typeConfig` maps slide types to display colors/labels.

### Sidebar (`Sidebar.tsx`)

Visible on desktop only (CSS media query). Lists lessons and sheets for the active category; drives navigation via callbacks from `App`.

## Key patterns

- **Adding a lesson**: add a `Lesson` object to `lessons[]` in `src/slides/index.ts`. Follow the 10-slide structure: WALT → Success Criteria → learn (explanation) → practice × 3 → apply → recap → evaluate → think.
- **Adding a writing sheet**: add a `WritingSheet` object to `writingSheets[]` in `src/slides/index.ts`.
- **Slide body text**: use `\n` for line breaks and `**text**` for bold — no other markdown is parsed.
- All styling is in `src/App.css` and `src/index.css` — no CSS-in-JS or utility framework.
