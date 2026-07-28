# How cobe.vercel.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cobe.vercel.app-design)

Last updated: 2026-07-28

## Design character

COBE is a developer-library marketing page that behaves like a **live product demo first and documentation second**. The visual system is almost monastic: vast white field, a single interactive WebGL globe as the hero artifact, then a long vertical stack of API sections. Personality lives in the globe (dot-rendered continents, emoji stickers, glowing arcs) and in a sharp **electric blue** accent—not in chrome, illustration, or marketing flourishes.

What should survive adaptation:

- A **gallery-white canvas** that keeps the 3D object as the only heavy visual.
- **Blue as the sole brand accent** for selected tabs, primary bars, and key table cells.
- **Code-forward documentation**: bordered code cards, monospaced samples, and API tables instead of marketing cards.
- **Quiet navigation chrome**: small uppercase section labels, text links, and minimal tab strips.

## Foundations

### Color

Observed interface colors are deliberately sparse:

| Role | Color | Usage |
|------|-------|-------|
| Page ground | `#ffffff` | Full-bleed background on every capture |
| Primary accent | `#0000ff` (pure blue) | Selected tab fills, install-prompt header bar, filled table cells, active pager dots |
| Body / code text | near-black / syntax colors | Default copy and highlighted code |
| Secondary chrome | light gray borders | Code fences, tab outlines, pager controls |
| Marker label chips (in docs) | `#1a1a1a` on white text | Floating label examples in the custom-labels section |

There is no multi-stop brand gradient in the UI shell. Color energy is reserved for the globe (marker colors, arc hues, emoji stickers) and for that one hard blue system accent.

### Typography

Declared font families were not retained in the captures. Visually, the site reads as a clean sans for UI chrome and a monospaced face for code.

Measured type scale (approximate):

| Style | Size | Line-height | Weight | Notes |
|-------|------|-------------|--------|-------|
| Body / code | 16px | ~25.6px | 400 | Dominant text size; slight positive tracking (~0.24px) |
| Secondary UI | 13.6px | ~21.8px | 400 | Supporting labels and helper lines |
| Small UI / meta | 12px | ~19.2px | 400 | Section eyebrows, chips, fine print |
| Micro labels | ~10–10.4px | ~16–16.6px | 400 | Sparse captions; sometimes wider tracking |

Uppercase micro-labels (`STICKERS`, `USAGE`, `API`) sit above sections with generous letter spacing and low visual weight. Headlines stay modest—product name lines are sentence case, not billboard display type.

### Spacing and layout

The page is a **single centered column** on a white field, not a multi-column marketing grid.

Recurring spacing:

- Horizontal padding clusters around **24px** (and sometimes 20px on denser blocks).
- Vertical rhythm uses **8 / 12 / 16 / 24px** margins between stacked blocks.
- Code and API cards use internal padding in the **12–20px** range.
- Section stacks are airy: large empty regions around the globe, then tighter documentation density below.

Layout pattern top-to-bottom:

1. Hero globe (or feature demo) centered with huge surrounding whitespace
2. Small section label + short title + text links
3. Install prompt bar
4. Usage code card
5. Feature sections with tab strips + code samples
6. API reference table

## Visual language

### Shape and borders

- **1px solid borders** define nearly every content container (code blocks, tables, outlined tabs, pager buttons).
- Corners stay **sharp to lightly softened**—the system does not rely on large pill radii for identity.
- Tab controls are rectangular segmented controls: selected = solid blue fill + white label; unselected = white fill + thin border.
- Pager controls are small square outline buttons with chevrons.

### Shadows and depth

No meaningful drop-shadow system shows up in the captures. Depth comes from:

- the WebGL globe itself
- border contrast on flat cards
- blue filled states against white

### Imagery and media

The brand image is the **dot-globe canvas**: sparse black land dots on white (or inverted), optional emoji stickers, markers, and arcs. Documentation screens replace the globe with code and tables, keeping the same white/blue frame so the library still feels like one product.

### Motion

Captures are static, but the product promise is a continuously rotating/interactive globe. UI chrome itself is still—tabs and copy blocks do not animate for attention.

## Components and states

**Segmented tabs**  
Horizontal row of equal-height rectangular tabs. Active tab: blue fill, white text. Inactive: white, bordered, dark text. Used for Markers/Arcs and deeper demo modes (Marker Labels, Arc Labels, etc.).

**Install / prompt bar**  
Full-width blue header strip with package-manager labels (`npm`, `pnpm`, `yarn`, `bun`) over a bordered command row and a quiet `COPY` action. This is the strongest non-globe brand moment on the page.

**Code card**  
White panel, 1px border, monospaced multi-line sample, syntax-tinted keywords. Often preceded by a tiny uppercase eyebrow (`USAGE`).

**API table**  
Two-column definition table with light borders. Some cells invert to solid blue with white type for emphasis/required markers—blue is used structurally, not decoratively.

**Pager**  
Centered step indicator: uppercase section name, row of dots (active = blue), and previous/next outline buttons with a `n / total` counter.

**Text links**  
Inline blue links for GitHub, author, and tech details—same accent family as tabs, not a second link color.

## Responsive behavior

Captures span roughly **640–1712px** widths. Behavior that holds:

- The **centered single column** remains; the globe scales down rather than gaining sidebars.
- On narrower widths, documentation stacks tightly but keeps bordered cards and the blue install bar.
- Wide desktops add margin whitespace; they do not introduce a dense multi-column marketing layout.

## Practical guidance

**Preserve**

- White field + one pure blue accent + globe-as-hero
- Code and API tables as first-class UI, not afterthoughts
- Uppercase micro-labels and restrained type scale
- Bordered flat cards instead of shadowed marketing tiles

**Avoid**

- Adding a second saturated brand color in the chrome
- Heavy gradients, glassmorphism, or large rounded consumer-app cards
- Billboard display type that competes with the globe
- Crowding the hero with nav mega-menus or feature-card grids

**Adaptation tips**

- If you borrow this system for another WebGL/library demo, keep the **demo artifact optically dominant** and let docs inherit the same border/blue language.
- Use blue fills only for **selected/primary** states so the accent stays scarce.
- Keep syntax-colored code on white; dark code themes would fight the airy gallery frame.

## Scope note

Studied eight captures of `https://cobe.vercel.app/` across multiple viewport sizes (about 640×967 through 1712×1314). All captures are the same single-page docs surface (hero + stickers/demo sections + usage + API). Declared font family names, semantic color roles, radii, and shadow tokens were not available in the structured capture data—type and color notes above combine measured sizes with visual reading of the screenshots. No separate marketing/pricing routes were in the set.

## Captured pages

[![Hero globe with stickers and install bar](https://pin.fontofweb.com/8174?format=jpg)](https://design.withfudge.com/share/pin-8174)

[Hero globe with stickers and install bar](https://design.withfudge.com/share/pin-8174)

[![Markers & Arcs documentation](https://pin.fontofweb.com/8181?format=jpg)](https://design.withfudge.com/share/pin-8181)

[Markers & Arcs documentation](https://design.withfudge.com/share/pin-8181)

[![Custom labels with CSS anchoring](https://pin.fontofweb.com/8179?format=jpg)](https://design.withfudge.com/share/pin-8179)

[Custom labels with CSS anchoring](https://design.withfudge.com/share/pin-8179)

[![Usage example block](https://pin.fontofweb.com/8178?format=jpg)](https://design.withfudge.com/share/pin-8178)

[Usage example block](https://design.withfudge.com/share/pin-8178)

[![API options table](https://pin.fontofweb.com/8176?format=jpg)](https://design.withfudge.com/share/pin-8176)

[API options table](https://design.withfudge.com/share/pin-8176)

## Colors

- `#ffffff`
- `#0000ff`
- `#1a1a1a`
- `#000000`
