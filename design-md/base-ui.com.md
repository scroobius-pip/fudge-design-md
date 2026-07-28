# How base-ui.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/base-ui.com-design)

Last updated: 2026-07-28

## Design character

Base UI’s site is a **near-black, unstyled-product manifesto**: almost no chrome chrome, almost no color, and a voice that sells accessibility and composition rather than a visual kit. The marketing home is long-form editorial on a charcoal field—large white headline, quiet gray body, a single blue text link into docs—then disciplined lists (customer marks, team roster, FAQ). The docs shell flips into a classic three-pane reference layout without leaving the black canvas. The brand promise is “no visual opinions,” and the site practices that: hairlines instead of cards, monochrome logos, and interaction that stays in type weight and link blue.

What should survive adaptation:
- **True dark canvas** (`#0f0f0f` marketing, pure black docs) with light type—never a gray-on-gray mush
- **One accent**: calm documentation blue for links and code tokens; coral only for sparse “NEW” badges
- **Editorial left labels** paired with a wider content column (section kicker + body)
- **Hairline tables and accordions** instead of elevated cards
- **Docs as product**: sticky multi-level nav, rounded active pill, fenced code blocks with copy affordance

## Foundations

### Color

Measured / clearly visible surfaces and accents (screenshots; no structured palette dump):

| Swatch | Role (interpreted) |
|--------|--------------------|
| `#000000` | Docs canvas, deepest field |
| `#0f0f0f` | Marketing page canvas / soft black |
| `#1f1f1f` | Logo tiles, slightly raised dark panels |
| `#212121` | Code-block body fill |
| `#2c2c2c` | Hairline rules, table dividers |
| `#333333` | Secondary / muted table text on marketing |
| `#898989` | Splash/supporting gray copy |
| `#dddee3` | Primary light text (cool off-white) |
| `#ededed` | High-emphasis white-gray (icons, strong labels) |
| `#5174d2` | Link / documentation blue |
| `#f97255` | “NEW” badge coral |

Relationships that matter:
- **Canvas hierarchy is tiny**: black → `#0f0f0f` → `#1f1f1f` / `#212121`. Surfaces are felt as steps of charcoal, not colored cards.
- **Text is cool light gray**, not pure `#fff`—keeps the black field from buzzing.
- **Blue is reserved for navigation into knowledge** (Documentation, in-code links, syntax accents)—not for big filled CTAs on the home manifesto.
- **Coral is episodic** (sidebar “NEW”), never a second brand wash.

### Typography

No declared family was captured; the face reads as a **neutral contemporary grotesque** (system-ui / Inter-like), used almost entirely at weight 400. Hierarchy is size and color, not heavy weight jumps.

Observed sizes (structured text metrics on home captures):
- **Display / section title**: ~**42px** / **44px** line-height — large but not ultra-tight; marketing hero and major headings
- **Deck / emphasis body**: ~**18px** / **25px** LH — manifesto paragraphs, readable measure
- **UI / default**: ~**16px** — dense nav, lists, FAQ rows
- **Compact**: ~**15px** / **22px** LH — sparse secondary labels

Practical hierarchy to copy:
1. One oversized plain-weight headline per viewport
2. Short gray supporting line under the hero (splash) or multi-paragraph 18px column (home)
3. Left-rail *section titles* in the same family at body size, optically quieter
4. Table/FAQ rows at 16px with generous row padding
5. Docs H1 large and plain; H2 section labels slightly smaller; body comfortable 16–18px on black

Avoid bold-for-everything. The site’s craft is **even color of type** with spatial structure doing the sorting.

### Spacing and layout

Recurring measurements:
- **~64–65px** left/right content inset on the wide marketing layout (very frequent margin observations)
- **~12px** vertical padding appears often on stacked interactive rows (nav/list rhythm)
- Marketing composition is a **split editorial grid**: narrow left caption column (“Made for the makers”, “So you know who to blame”, “The fine print”) + wide right content band
- Logo strip is a **6-up square tile row** with consistent gaps and caption labels under each tile
- Team block is a **two-column definition list** (name | role) separated by full-width hairlines
- Docs is **three columns**: left tree nav (~240px feel), fluid main, right on-page TOC

Density is **medium-loose on marketing**, **tighter in docs nav**. Sections are separated by slim horizontal rules and large vertical breathing room rather than colored bands.

## Visual language

- **No drop shadows, no gradients, no glossy glass** in the captures—depth is pure value shift.
- **Hairlines** (`~#2c2c2c`) define tables, FAQ, and section breaks; corners of code blocks and nav pills are **softly rounded** (visually ~8–12px), not pill-mega.
- **Logo mark**: white abstract droplet / “b” monogram, high contrast on black; used small in corners and larger on the splash.
- **Customer marks**: monochrome white glyphs centered on `#1f1f1f` squares—portfolio as texture, not brand rainbow.
- **Icons in docs chrome**: tiny outline glyphs (GitHub, version pill) aligned to the top bar; version shown as a quiet chip (`1.0.0-beta.x`).
- **Motion** is not evidenced in stills; accordions show + / − affordances only.

The overall effect is **terminal-meets-editorial**: the emptiness is intentional, like a well-set error page that kept going for three screens.

## Components

### Marketing chrome
- Top: logo left; stacked text links (X, GitHub, Discord) upper-center/right; single “Components” text link opposite
- Primary action is almost always a **text link with chevron/arrow** (“Documentation →” / “Documentation >”), blue or underlined—not a filled button

### Splash (centered empty state)
- Full-bleed black, faint modular grid lines in some crops
- Centered mark + 2-line white value prop + gray provenance line + blue Documentation link
- Maximum negative space; this *is* the brand moment

### Logo / social proof tiles
- Equal dark squares, white monochrome logos, small caption under each
- Reads as a toolbar of peers, not a logo soup

### Team roster
- Two columns, hairline rows, name left / role right
- Roles in slightly muted gray; no avatars, no social chips

### FAQ accordion
- Full-width questions on hairlines
- Trailing `+` / open row with `−` and multi-line answer in muted body color
- One open answer at a time in the capture—content expands inline

### Docs shell
- **Left nav**: grouped labels (Overview, Handbook, Components…); active item in a **filled rounded rect** (`~#0f0f0f`–`#101010` on black); “NEW” coral tags on select items
- **Main**: large page title, one-line description, optional “View as Markdown” utility
- **Code blocks**: darker rounded panels (`~#212121`) with filename/Terminal chrome bar, monospace body, top-right **Copy**
- **Inline code** and some tokens pick up the link blue
- **Right TOC**: minimal heading list anchored to sections (“Install the library”, “Set up”, …)

### Footer
- Quiet “© Base UI” plus vertical stack of text links (X, GitHub, Discord, npm, Bluesky)—same weight language as the header

## Responsive behavior

Captures are desktop-wide (≈1412–2041px). Within that range:
- Marketing keeps the **left caption + right content** split and ~64px outer margins
- Docs keeps **dual side rails** at 1412px wide—rails are first-class, not optional decoration
- Splash stays **centered single column** regardless of width

Narrow/mobile breakpoints were not in this set; do not invent a hamburger system. If collapsing, preserve black field, hairlines, and text-link CTAs before inventing card grids.

## Practical guidance

**Do**
- Start from black and add only the charcoal steps you need
- Use one blue for “go read / go navigate,” not for decoration
- Set display type large and regular-weight; let line length stay medium
- Separate major blocks with hairlines and whitespace, not colored section bands
- In docs, invest in nav active states, code block chrome, and TOC over hero illustration
- Keep third-party logos monochrome on dark tiles

**Don’t**
- Introduce saturated brand gradients, glassmorphism, or heavy shadows
- Turn the home CTA into a large filled primary button (unless you are consciously leaving this system)
- Mix a second accent beyond sparse coral badges
- Declare or ship a custom display family without a separate license check—none was declared here; stick to a neutral grotesque
- Lighten the canvas to cool gray “dark mode default”; this product wants **ink black**
- Over-card the FAQ or team list—the lines *are* the component

## Scope note

Guide drawn from five desktop viewports on **base-ui.com**: centered splash and long-form marketing home (`/`), plus docs **Quick start** (`/react/overview/quick-start`). Color values are screenshot-sampled; type sizes/spacing mix structured metrics (home) with visual reading (docs). No declared font families, radii tokens, or motion specs were available—radius and interaction notes are visual interpretation only.

## Captured pages

[![Base UI](https://pin.fontofweb.com/3864?format=jpg)](https://design.withfudge.com/share/pin-3864)

[Base UI](https://design.withfudge.com/share/pin-3864)

[![Base UI](https://pin.fontofweb.com/8039?format=jpg)](https://design.withfudge.com/share/pin-8039)

[Base UI](https://design.withfudge.com/share/pin-8039)

[![Base UI](https://pin.fontofweb.com/8040?format=jpg)](https://design.withfudge.com/share/pin-8040)

[Base UI](https://design.withfudge.com/share/pin-8040)

[![Base UI](https://pin.fontofweb.com/8041?format=jpg)](https://design.withfudge.com/share/pin-8041)

[Base UI](https://design.withfudge.com/share/pin-8041)

[![Quick start · Base UI](https://pin.fontofweb.com/3865?format=jpg)](https://design.withfudge.com/share/pin-3865)

[Quick start · Base UI](https://design.withfudge.com/share/pin-3865)

## Colors

- `#000000`
- `#0f0f0f`
- `#1f1f1f`
- `#212121`
- `#2c2c2c`
- `#333333`
- `#898989`
- `#dddee3`
- `#ededed`
- `#5174d2`
- `#f97255`
