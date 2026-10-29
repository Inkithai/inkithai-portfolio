# Design Direction — "Archival Press"

A response to the question: *what if we took design inspiration from [tfamil.com](https://tfamil.com)?*

**Live prototype:** run `npm run dev` → `/concept-archive`

---

## What the reference actually does

tfamil.com is not a "dark mode dev portfolio". It reads as **printed matter**: warm cream
paper, ink-brown text, maroon accents, condensed display type, and a set of physical
metaphors — a taped-up ID card, a till receipt for work history, a file cabinet for
projects, fridge stickers, a disco ball. Nothing is glassy, nothing glows, nothing is
a gradient.

The exact stack, pulled from `github.com/tfamil/Personal-Portfolio-Website`:

| Token | Value |
| --- | --- |
| Paper | `#f4ecdd` / `#efe6d6` / `#e9dfcd` |
| Ink | `#1d1512`, soft `#4a352e` |
| Maroon / red | `#6e1d24`, `#9a2b30`, `#c0212a` |
| Gold / rust / olive | `#c6a163`, `#c25d4f`, `#8a9a31` |
| Display | Anton |
| Body | Archivo |
| Handwritten | Caveat |
| Labels | JetBrains Mono |

## What's worth borrowing (and what isn't)

**Borrowed as principle — this is the transferable part:**

1. **Paper first.** A light, warm ground is the single biggest differentiator. Almost every
   engineer portfolio is a dark near-black page with a blue accent. Cream + ink is
   instantly memorable and makes screenshots look like print.
2. **One loud typeface, one quiet one.** Anton at huge sizes, Archivo for reading,
   mono for anything technical. The gap between the sizes does the hierarchy — not
   borders or shadows.
3. **Archive metadata as ornament.** `FILE_01`, `PLATE 01`, `No. IM-2026`, dotted leaders.
   It costs nothing and makes an engineering site feel like a catalog.
4. **Physical artifacts.** Tape, stamps, clipped photos, perforated edges, hard offset
   shadows. These are cheap in CSS (`clip-path`, `radial-gradient`, `box-shadow: 5px 5px 0`)
   and expensive in perceived polish.
5. **Handwriting as voice.** One Caveat line per section, in the margin, saying something
   a résumé can't. Used sparingly it reads as confidence; used everywhere it reads as a
   craft blog.

**Deliberately not copied:**

- Her **bright yellow/red** accents (`#ffd23f`, `#c0212a`) and the **disco ball / fridge
  stickers**. Those are her personal brand. Copying them would make this a lookalike.
  This direction keeps Inkithai's own maroon / gold / olive family.
- The **ID-card** hero and the **receipt-as-experience** metaphor are borrowed in spirit
  (physical artifact + catalog), but restated as a **technical dossier**: specimen photo
  with a plate number, a "Record of Service" slip, a file cabinet.

## The result

A single-page concept at `/concept-archive`:

- **Masthead** — catalog bar, dossier number, `Open to work` stamp
- **Hero** — oversized Anton name, taped plate photo, handwritten margin note
- **01 Who I Am** — drop-capped bio, spec-sheet chips, "Field Notes" card
- **02 The Archive** — projects as file rows; hover sweeps maroon across the row and the
  text inverts to paper
- **03 The Record** — perforated receipt for experience, plus education / IEEE / certs
- **04 Contact** — inverted ink block, gold headline

## Cost / risk

- Fonts are **self-hosted** via `@fontsource` (Anton, Archivo, Caveat, JetBrains Mono) —
  no Google Fonts request at runtime, and the CSS is scoped so the main site does not
  download them.
- The existing site was moved into a `src/app/(site)/` route group so the concept page
  gets its own chrome. URLs are unchanged and all still return 200.
- No client-side JS is added — the hover states are CSS.

## Open decision

The concept covers ~8 of 15 projects and skips entrepreneurship, research and continuous
learning. To replace the real site it needs: full project index treatment, per-project
detail pages, the entrepreneurship/research stories, and a light-theme pass on
`/work` and `/certifications`.
