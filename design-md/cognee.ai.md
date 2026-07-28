# How cognee.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cognee.ai-design)

Last updated: 2026-07-28

## Design character

Cognee is a dark, literary AI memory brand: charcoal canvas, warm off-white type (`#edecea`), and a soft lavender accent (`#bc9bff`) used for highlights, links, active borders, and feature emphasis. Headlines are huge and light (weight ~300) with deliberate letter-spacing tricks — words fade, space out, or tint purple mid-sentence. Sections feel like a design-forward docs site: pill nav, ghost icon buttons, thin rules, and checkerboard/memory motifs instead of stock photos.

What should survive adaptation:

- Dark mode default with warm paper-like text (`#edecea`), not pure white
- Lavender `#bc9bff` as the only brand accent
- Light display weights at 48–96px with tight leading
- Pill-heavy header controls and soft 6–8px cards
- Editorial headline treatments (fade, tracking, multi-color words)
- Sparse sections with wide horizontal margins (~300px class on large desktops)

## Foundations

### Color

Measured roles:

| Role | Hex | Use |
|------|-----|-----|
| Accent | `#bc9bff` | Links, highlights, active card border/glow, secondary emphasis |
| Primary text | `#edecea` | Headlines and body on dark |
| Secondary / inverse | `#1e1e1c` | Dark text on light chips or inverse moments |

Canvas is deep charcoal/near-black. Pricing and feature cards lift slightly from the field; selected cards pick up lavender border and purple checker panels. Avoid cold pure-blue accents — the brand hue is soft purple.

### Typography

Families not declared. Metrics show a light, modern grotesque:

| Role | Size | Weight | Line-height | Tracking |
|------|------|--------|-------------|----------|
| Hero display | ~96px | 300 | ~96px | ~-3.8px |
| Pricing / section display | 64px | 300 | ~70px | ~-1.9px |
| Section title | 48px | 300 | ~53px | ~-1.15px (sometimes wide positive tracking for effect) |
| Lead | 22–24px | 300 | ~28–34px | slight negative |
| Body | 15–16px | 300 | 20–24px | default |
| Eyebrow / label | 11–14px | 400–600 | ~14px | positive tracking on tiny labels |

The system is unusually light-weight across sizes — hierarchy comes from size and color, not boldness.

### Spacing and layout

- Large vertical section padding (~80–192px) and ~50px content inset; outer margins often ~308px on wide frames.
- Grid gaps ~16–56px; feature cards in 2×2 teams.
- Pricing: roomy card padding, 8px radii, pill plan toggles.
- Overall sparse — long lines of display type with breathing room.

## Visual language

- **Corners:** Full pills on nav/CTA chips; ~6–8px on content cards.
- **Borders:** 1px hairlines; active/feature cards get lavender edge.
- **Shadows:** Soft deep shadows on pricing (`y≈12`, `blur≈40`) — otherwise mostly flat dark stacking.
- **Motifs:** Checkerboards, fading letterforms, purple memory grids, monochrome logos.
- **Imagery:** Abstract/UI motifs over photography.

## Components and states

1. **Header** — wordmark; pill text links; round icon buttons; high-contrast “Try free” / login chips.
2. **Hero** — enormous light headline, short warm-gray/off-white subcopy, dual CTAs (filled light + ghost).
3. **Problem / narrative band** — multi-color and spaced headline typography over charcoal.
4. **Feature cards** — 2×2 grid; title + blurb; optional checker panel; one card accented in lavender.
5. **Pricing** — plan cards with price display, feature lists, lavender outline on highlighted tier, soft elevation.
6. **Logo row / social proof** — muted monochrome marks.

Stills show default and one emphasized card/plan; no interactive motion specs.

## Responsive behavior

Captures are wide desktop section crops (~1850–2048px). Horizontal margins are aggressive on large screens; behavior below tablet is not evidenced here.

## Practical guidance

**Preserve**

- Warm off-white on charcoal, lavender accent only
- Light (300) oversized display type with expressive tracking
- Pill header language and quiet 6–8px cards
- Editorial headline devices (fade, purple words, letter-spacing)

**Avoid**

- Bold/black poster type that fights the airy voice
- Neon cyan/green AI clichés
- Dense SaaS pricing tables without lavender hierarchy
- Pure `#ffffff` body text that feels colder than `#edecea`

**Adaptation**

For a Cognee-like memory/AI brand: dark paper-on-charcoal reading experience, one lavender signal color, and typography that feels written, not shouted.

## Scope note

Five section crops from `/` and `/pricing` (pins 10425–10429). No mobile widths or declared font families. Secondary `#1e1e1c` appears in inverse/chip contexts; most reading text is `#edecea` on dark.

## Captured pages

[![Home — hero display](https://pin.fontofweb.com/10428?format=jpg)](https://design.withfudge.com/share/pin-10428)

[Home — hero display](https://design.withfudge.com/share/pin-10428)

[![Home — narrative and cards intro](https://pin.fontofweb.com/10425?format=jpg)](https://design.withfudge.com/share/pin-10425)

[Home — narrative and cards intro](https://design.withfudge.com/share/pin-10425)

[![Home — problem headline and feature grid](https://pin.fontofweb.com/10427?format=jpg)](https://design.withfudge.com/share/pin-10427)

[Home — problem headline and feature grid](https://design.withfudge.com/share/pin-10427)

[![Pricing — plan cards](https://pin.fontofweb.com/10429?format=jpg)](https://design.withfudge.com/share/pin-10429)

[Pricing — plan cards](https://design.withfudge.com/share/pin-10429)

[![Home — supporting band](https://pin.fontofweb.com/10426?format=jpg)](https://design.withfudge.com/share/pin-10426)

[Home — supporting band](https://design.withfudge.com/share/pin-10426)

## Colors

- `#bc9bff`
- `#edecea`
- `#1e1e1c`
