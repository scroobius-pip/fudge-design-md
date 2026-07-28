# How good-fella.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/good-fella.com-design)

Last updated: 2026-07-28

## Design character

Good Fella is a **dark-first frontend studio brand** with a sharp orange accent and gallery-level craft. Marketing feels cinematic: near-black canvases, oversized white display type, ASCII/dot-matrix art as signature imagery, and compound orange CTAs that always pair a label with a small `+` tile. Light sections invert cleanly for comparison tables and pricing without abandoning the same geometry and type hierarchy.

What should survive adaptation:

- **Near-black marketing canvas** with white primary type
- **Hot orange (`#FF5A1F` family)** as the only high-chroma UI accent
- **Compound CTAs**: solid orange label + matching orange `+` square
- **ASCII / bitmap portrait and map art** as brand imagery (not stock photos)
- **Dual surfaces**: dark portfolio/hero vs light comparison/pricing bands
- **Monochrome logo strip** of client marks on dark

## Foundations

### Color

Structured palette capture was empty; values below are read from representative home screens.

| Role | Hex (approx.) | Where it shows |
| --- | --- | --- |
| Marketing canvas | `#0A0A0A`–`#111111` | Full-bleed heroes, featured work, footer |
| Primary text (dark) | `#FFFFFF` | Display headlines, section titles |
| Secondary text (dark) | `#9A9A9A`–`#B0B0B0` | Body under heroes, captions, menu |
| Accent / CTA | `#FF4D00`–`#FF5A1F` | Buttons, `+` tiles, status dots, ASCII tint |
| Light canvas | `#F2F2F2`–`#F5F5F5` | Why/pricing comparison bands |
| Primary text (light) | `#111111` | “Why Good Fella?”, pricing titles |
| Table surface (dark) | `#0E0E0E`–`#141414` | Comparison matrix body |
| Highlight column | `#FFFFFF` | “Good Fella” column on comparison table |
| Form field (dark) | `#2A2A2A` | Name/email inputs in footer |
| Subscribe control | `#FFFFFF` | White fill + dark label |
| Hairline / row rules | `rgba(255,255,255,0.08–0.12)` | Table dividers on dark |
| Watermark type | `#1A1A1A`–`#222` | Giant “Good Fella” footer wordmark |

Relationships that matter:

- **Orange is reserved for action and brand flecks**—never large fills behind body copy.
- **ASCII art recolors with the accent** (gold/neutral vs pure orange) while staying monochrome-dot.
- **Light bands are true paper**, not washed dark gray—comparison content needs full contrast.

### Typography

No declared webfont family was recorded. Visually the stack is a **modern grotesque / neo-grotesk sans** with weight-driven hierarchy:

| Use | Weight | Size (observed) | Notes |
| --- | --- | --- | --- |
| Display hero | 500 | ~64px / 72 lh | Tight tracking (~−3.2px), two short lines |
| Oversized display | 300 | ~96px | Light weight for very large statements |
| Section title | 500–700 | ~40–64px | “Featured Work”, “Why Good Fella?” |
| Body | 400 | 16px / 24 lh | Default marketing copy |
| UI / nav / labels | 500 | 14px / ~20 lh | MENU, tags, table headers |
| Fine / meta | 400 | 14px / 21 lh | Slight negative tracking on some labels |
| Giant watermark | heavy optical | footer-scale | Low-contrast brand wordmark |

Hierarchy is **display → quiet body → UI label**. Single-family; avoid introducing a display serif.

### Spacing and layout

Recurring measurements:

- **Section vertical padding** often 32px local, with large bands at **128px** and hero tops near **240px**
- **Control padding** 12–16px horizontal on chips/buttons; comparison cards ~24px
- **Content gutters** generous on wide frames; side stacks for portfolio thumbnails
- Body rhythm stays **16/24**; display leading stays tight (~1.1–1.15)

Layout patterns:

1. **Split hero** — left copy + dual CTAs; right full-height ASCII portrait
2. **Featured work stage** — left title + vertical thumbnail rail; right large device mock
3. **Light comparison band** — left manifesto + CTA; right multi-column dark table with white highlight column
4. **Footer triad** — newsletter form, site links, contact emails over ASCII world map + giant watermark

## Visual language

### Shape and depth

- Primary controls are **sharp rectangles** (little to no radius)—studio-tooling feel, not soft SaaS pills
- Compound buttons: **label tile + square `+` tile** sharing the orange fill
- Text links on dark use **underline** (“View our work”) rather than filled secondary buttons
- Depth is mostly **flat planes + imagery**; table uses hairline row rules, not heavy shadows
- Portfolio mocks sit in **dark stage lighting** with photographic device frames

### Imagery

- Signature: **dot-matrix / ASCII renderings** of classical portraiture and world maps, tinted white-gold or orange
- Case studies: **high-end product photography** of laptops/phones in crafted scenes
- Client proof: **monochrome wordmarks** (Coca-Cola, BODYARMOR, WKNDHRS) on dark
- Optional footer toys: tiny “grid / change color” utilities—keep them quiet

### Borders and dividers

- Comparison table: continuous **1px solid** horizontal rules on dark
- Form fields: filled dark blocks, minimal border emphasis
- Section separation prefers **canvas flip** (black ↔ light gray) over hard rules

## Components and states

### Navigation

- Left: condensed **GOOD** wordmark
- Center: **MENU** + hamburger
- Right: orange **LET’S WORK TOGETHER** + `+` compound control
- Stays high-contrast on both dark heroes and darker portfolio chrome

### Buttons

| Variant | Look |
| --- | --- |
| Primary compound | Orange fill, white uppercase/title label, attached orange `+` square |
| Text link | White/light type with underline |
| Inverse primary | White fill, dark label (Subscribe) with optional `+` |
| Ghost on light | Same orange compound as dark contexts |

Keep labels short and uppercase or tightly cased; the `+` is part of the brand grammar, not optional decoration.

### Comparison table

- Dark matrix with uppercase column headers
- **Good Fella column inverted to white** with small orange status square in the header
- Row labels muted; values higher contrast
- Pairs with a left-rail headline + single orange CTA

### Forms (footer)

- Stacked Name / Email dark fields
- Full-width white Subscribe + `+`
- Status lines with **orange squares**: “Accepting projects”, scarcity notes
- Contact column as simple text links

### Portfolio stage

- Large hero mock, meta tags in brackets, client name
- Vertical thumbnail list with **orange active pip**
- “VIEW ALL +” compound control bottom-left

## Responsive behavior

Captures are **wide desktop viewports** (~1900–2048px). When adapting:

- Hero split should stack to **copy first, ASCII art second** on narrow widths
- Thumbnail rail may become a **horizontal scroller** under the main mock
- Comparison table needs horizontal scroll or stacked card rows—do not crush six metrics into unreadably narrow columns
- Footer triad collapses to a single column; keep the giant watermark as atmospheric background only

## Practical guidance

**Do**

- Lead with white type on near-black; keep body one step down in gray
- Use **orange only for CTAs, pips, and ASCII tints**
- Preserve the **label + `+` compound button**
- Prefer **ASCII/bitmap brand art** over generic gradients
- Flip to **true light paper** for analytical sections (tables, pricing)
- Keep geometry **sharp**—this is a craft studio, not a bubbly consumer app

**Don’t**

- Flood backgrounds with orange
- Replace ASCII art with stock lifestyle photography as the hero identity
- Round everything into soft SaaS pills
- Add a second display serif or playful script
- Lighten the dark canvas into charcoal mush—stay near black
- Drop the compound `+` pattern if you want the system to still read as Good Fella

## Scope note

Based on seven desktop home captures (`/`, pins 8191, 8193–8198) spanning hero, featured work, comparison/pricing, and footer states. No measured structured palette or declared font families were available—color hexes are screenshot-derived. Inner marketing routes and mobile breakpoints were not in this set; motion is implied by studio positioning but not timed here.

## Captured pages

[![Hero — Frontend team](https://pin.fontofweb.com/8198?format=jpg)](https://design.withfudge.com/share/pin-8198)

[Hero — Frontend team](https://design.withfudge.com/share/pin-8198)

[![Hero — orange ASCII tint](https://pin.fontofweb.com/8193?format=jpg)](https://design.withfudge.com/share/pin-8193)

[Hero — orange ASCII tint](https://design.withfudge.com/share/pin-8193)

[![Featured Work stage](https://pin.fontofweb.com/8196?format=jpg)](https://design.withfudge.com/share/pin-8196)

[Featured Work stage](https://design.withfudge.com/share/pin-8196)

[![Why Good Fella comparison](https://pin.fontofweb.com/8197?format=jpg)](https://design.withfudge.com/share/pin-8197)

[Why Good Fella comparison](https://design.withfudge.com/share/pin-8197)

[![Footer — map and subscribe](https://pin.fontofweb.com/8191?format=jpg)](https://design.withfudge.com/share/pin-8191)

[Footer — map and subscribe](https://design.withfudge.com/share/pin-8191)

## Colors

- `#0a0a0a`
- `#111111`
- `#ffffff`
- `#ff4d00`
- `#ff5a1f`
- `#f2f2f2`
- `#9a9a9a`
- `#2a2a2a`
- `#141414`
