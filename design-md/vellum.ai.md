# How vellum.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/vellum.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with dark aurora background, white headline, prompt input card, and category pill filters over a product-led social proof bar.](https://pin.fontofweb.com/5553?format=jpg)](https://design.withfudge.com/share/pin-5553)

[Homepage hero with dark aurora background, white headline, prompt input card, and category pill filters over a product-led social proof bar.](https://design.withfudge.com/share/pin-5553)

[![Workflows product page with light lavender canvas, serif headline, node-based UI screenshot, and purple primary action button.](https://pin.fontofweb.com/1427?format=jpg)](https://design.withfudge.com/share/pin-1427)

[Workflows product page with light lavender canvas, serif headline, node-based UI screenshot, and purple primary action button.](https://design.withfudge.com/share/pin-1427)

[![Deep navy footer with multi-column link grid, compliance badges, and muted lavender column labels on a dark surface.](https://pin.fontofweb.com/1426?format=jpg)](https://design.withfudge.com/share/pin-1426)

[Deep navy footer with multi-column link grid, compliance badges, and muted lavender column labels on a dark surface.](https://design.withfudge.com/share/pin-1426)

[![Pricing feature comparison table with alternating white and subtle gray row bands, purple checkmarks, and segmented plan toggle.](https://pin.fontofweb.com/1425?format=jpg)](https://design.withfudge.com/share/pin-1425)

[Pricing feature comparison table with alternating white and subtle gray row bands, purple checkmarks, and segmented plan toggle.](https://design.withfudge.com/share/pin-1425)

## Overview

Vellum's design system operates across two distinct environmental modes: a dramatic dark mode for immersive product storytelling and a clean light mode for functional product and pricing surfaces. The dark mode anchors the homepage experience with deep navy-black backgrounds, luminous aurora-like gradients, and high-contrast white typography that creates a sense of technical depth and AI sophistication. The light mode, visible on product and pricing pages, uses a soft lavender-tinted white canvas that feels clinical and approachable without becoming sterile.

The system's core tension pairs editorial elegance with technical precision. Display typography draws from Tiempos Headline Light, lending a refined, almost literary quality to headlines that contrasts with the utilitarian sans-serif interface layer set in Inter and PP Neue Montreal. This combination signals that Vellum serves builders who appreciate both craft and function. Component language stays restrained—rounded pills for navigation and filters, soft cards for feature previews, and full-bleed buttons for primary actions. The overall impression is of a platform that takes AI infrastructure seriously while remaining accessible to product teams who need to move quickly.

## Colors

The palette divides cleanly into dark-mode storytelling colors and light-mode functional colors, unified by a consistent indigo-violet accent.

| token | value | use |
|---|---|---|
| ink | `#0B0C15` | Primary dark background, footer surface, dark mode canvas |
| canvas | `#FFFFFF` | Light mode background, input fields, elevated cards |
| surface | `#F5F3FF` | Light mode tinted background, alternating table rows |
| surface-elevated | `#FFFFFF` | Cards on tinted backgrounds, modal surfaces |
| accent | `#6366F1` | Primary buttons, active toggles, checkmarks, links |
| accent-hover | `#4F46E5` | Button hover states, interactive emphasis |
| muted | `#6B7280` | Secondary text, disabled states, table body copy |
| border | `#E5E7EB` | Light mode dividers, table rules, card outlines |
| border-subtle | `#374151` | Dark mode hairlines, secondary button borders |
| success | `#22C55E` | Positive indicators, checkmarks in feature tables |

The dark mode environment uses `ink` as its foundation, with subtle warm-cool gradients creating atmospheric depth behind content. Text on this surface is predominantly `canvas` white, with `muted` gray reserved for secondary descriptions. The light mode inverts this relationship: `surface` provides a barely-perceptible lavender warmth that distinguishes the page from pure white, while `canvas` handles all elevated elements. The `accent` indigo appears consistently across both modes, ensuring brand recognition regardless of environmental context. Dark mode surfaces frequently use semi-transparent white overlays—`rgba(255,255,255,0.05)` for cards, `rgba(255,255,255,0.1)` for pills—to create hierarchy without breaking the immersive atmosphere.

## Typography

The type system pairs a single editorial serif family with multiple sans-serif and mono cuts, creating clear role separation between display, interface, and code contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tiempos Headline | 4rem | 300 | 1.1 | -0.02em | Homepage hero headlines, major page titles |
| section-display | Tiempos Headline | 3rem | 300 | 1.15 | -0.01em | Section headers, product page titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, hero subheadings |
| label | Pp Neue Montreal | 0.75rem | 500 | 1.4 | 0.05em | Buttons, pills, tags, uppercase labels |
| navigation | Inter | 0.875rem | 400 | 1.5 | 0 | Header links, dropdown items |
| mono | Flaco-Mono | 0.875rem | 400 | 1.5 | 0 | Code snippets, technical identifiers, node labels |

Tiempos Headline Light, designed by Kris Sowersby at Klim Type Foundry, provides the system's distinctive editorial voice. Its light weight and slightly condensed proportions feel contemporary rather than traditional, suitable for a technical brand that wants to signal sophistication. Inter, designed by Rasmus Andersson, handles all body and navigation text with its extensive weight range and screen-optimized proportions. PP Neue Montreal, from Pangram Pangram Foundry, serves in Medium weight for compact UI labels where slightly more character than Inter provides useful distinction. Flaco-Mono covers technical contexts without the mechanical harshness of traditional coding fonts.

Verify licensing for these families before production use. The system also references Fira Code and Neue Montreal Regular in its font stack, though these appear secondary to the primary roles above.

## Layout

The layout system relies on a centered content column with generous breathing room, scaling from narrow functional grids to full-bleed immersive sections.

The base spacing unit is `0.25rem` (4px), with section vertical padding typically at `6rem` (96px). Content max-widths appear to cluster around `1200px` for marketing pages, with product interfaces expanding to wider bounds when displaying node-based workflows or comparison tables.

Page structure follows a predictable hierarchy: fixed or sticky navigation at `4rem` height, hero sections at `100vh` or substantial fractional height, followed by alternating content bands. The homepage hero demonstrates a layered composition—background gradient, centered headline block, interactive input card, filter pills, and feature card grid—each layer separated by `1.5rem` to `2rem` of vertical space.

Grid behavior shifts by context. Marketing content uses single-column centered layouts for readability. Product pages introduce asymmetric two-column structures for feature explanations. The pricing comparison table spans full width with internal column constraints. Footer content distributes across four to five equal columns with consistent `1.5rem` gutters.

Component spacing follows an inside-outside model: cards and panels receive `1.5rem` internal padding, while gaps between sibling components sit at `1rem` to `1.5rem`. This creates rhythmic consistency without requiring a dense spacing matrix.

## Visual language

The visual language balances two seemingly opposed impulses: the organic fluidity of AI-generated imagery and the rigid precision of workflow interfaces.

Photographic and gradient elements favor soft, diffused forms. The homepage background suggests aurora-like light trails in muted violet, peach, and cool white tones—never sharp, always atmospheric. These elements serve as environmental texture rather than focal content, receding behind crisp typography and UI components.

Interface elements contradict this softness with geometric clarity. Cards use precise `0.75rem` radii, buttons are fully pill-shaped, and the node-based workflow visualization shows exact rectangular containers with sharp connection lines. This contrast—organic atmosphere, mechanical tools—reinforces the brand positioning of human-directed AI construction.

Iconography appears minimal and functional. Small integration icons in feature cards use simple geometric marks. The workflow nodes use standard system icons for duplication, deletion, and configuration. No illustrative or decorative icon style is visible; all visual communication serves direct functional purposes.

The overall density is moderate to spacious. Dark mode sections feel expansive with generous vertical padding. Light mode functional pages tighten slightly, particularly in tables and comparison views, though never to the point of clutter.

## Components

### Primary action button
- **Anatomy**: Text label with optional right arrow icon, fully rounded capsule shape
- **Surface**: Solid `accent` background with `canvas` text
- **Typography**: `label` token, uppercase or title-case depending on context
- **Shape**: `9999px` border radius creating full pill
- **Spacing**: `0.75rem` vertical padding, `1.5rem` horizontal padding
- **Composition**: Centered text, icon offset `0.5rem` from text baseline
- **Variants**: Dark mode uses identical styling; light mode maintains same `accent` fill against `surface` background

### Secondary action button
- **Anatomy**: Text label with transparent background
- **Surface**: Transparent fill with `border-subtle` hairline border in dark mode, `border` in light mode
- **Typography**: `label` token
- **Shape**: Full pill matching primary button
- **Spacing**: Identical padding to primary
- **Composition**: Used adjacent to primary actions in navigation and hero areas

### Prompt input card
- **Anatomy**: Large text area with placeholder text, submit button positioned bottom-right
- **Surface**: `canvas` white fill, subtle shadow or border for elevation
- **Typography**: `body` for placeholder, `mono` for any technical content
- **Shape**: `0.75rem` radius
- **Spacing**: `1.25rem` internal padding
- **Composition**: Centered in hero, width constrained to readable measure (~640px)

### Category filter pill
- **Anatomy**: Text label in compact horizontal container
- **Surface**: Semi-transparent white overlay `rgba(255,255,255,0.1)` on dark, or `surface` fill on light
- **Typography**: `label` token, sentence case
- **Shape**: Full pill
- **Spacing**: `0.5rem` vertical, `1rem` horizontal
- **Composition**: Horizontal scroll or wrap group below input card

### Feature preview card
- **Anatomy**: Title text, description, integration icon row
- **Surface**: Semi-transparent dark fill `rgba(255,255,255,0.05)` with subtle border
- **Typography**: `body` for title, `muted` color for description
- **Shape**: `0.75rem` radius
- **Spacing**: `1.5rem` padding
- **Composition**: Grid of three cards with `1rem` gaps, icons aligned bottom

### Workflow node
- **Anatomy**: Header with node type icon and label, ID string, action icons; body with variable rows and type badges
- **Surface**: `canvas` fill, `border` outline, subtle shadow
- **Typography**: `body` for labels, `mono` for IDs and technical values
- **Shape**: `0.75rem` radius
- **Spacing**: `1rem` internal padding, rows separated by hairline dividers
- **Composition**: Connected by bezier curves in horizontal flow layout

### Comparison table
- **Anatomy**: Section headers with icon, feature rows, plan columns with checkmarks or text values
- **Surface**: Alternating `canvas` and `surface` row backgrounds
- **Typography**: `body` for features, `label` for section headers, `muted` for unavailable items
- **Shape**: No external radius, internal row borders only
- **Spacing**: `1rem` vertical row padding, `1.5rem` horizontal cell padding
- **Composition**: Full-width table with sticky header, toggle segment for plan switching

### Footer
- **Anatomy**: Logo and tagline, four to five link columns, compliance badges
- **Surface**: `ink` background
- **Typography**: `label` for column headers (uppercase, letter-spaced), `navigation` for links
- **Shape**: No radius, full-bleed width
- **Spacing**: `6rem` top padding, `3rem` bottom padding, `2rem` column gaps
- **Composition**: Asymmetric grid with larger first column for branding

## Responsive behavior

The system should maintain its dual-mode character across viewport sizes, with adjustments primarily to typography scale and grid density.

Hero headlines should reduce from `4rem` to `2.5rem` on narrow viewports, preserving the Tiempos Headline Light weight to maintain elegance. The prompt input card should remain centered but expand to near-full width with reduced horizontal margins.

Navigation should collapse to a hamburger menu below `768px`, with the pill-shaped primary action potentially converting to a compact icon or moving to a bottom-fixed bar on mobile.

Feature card grids should stack from three columns to single column, maintaining internal padding but reducing inter-card gaps to `1rem`. The workflow node visualization should become horizontally scrollable rather than scaling down, preserving node readability.

Comparison tables require the most significant transformation: horizontal scroll with frozen first column, or accordion-style section expansion on very narrow screens. The plan toggle should remain accessible at top.

Category filter pills should wrap naturally or convert to a horizontal scroll container to prevent line-break awkwardness.

## Practical implementation guidance

### Preserve
- The stark contrast between dark immersive sections and light functional pages—this environmental switching is central to brand recognition
- Tiempos Headline Light for all major headlines; the weight and slight serif character distinguish Vellum from generic SaaS aesthetics
- Full-pill button shapes for primary actions; the soft radius is a consistent signature across both modes
- Semi-transparent overlay cards in dark mode; they create depth without breaking the atmospheric background
- The lavender tint in light mode backgrounds; pure white would feel clinical and lose the subtle warmth

### Avoid
- Adding decorative illustrations or mascot characters; the system relies on interface screenshots and atmospheric gradients for visual interest
- Using Tiempos Headline for body text or UI labels; its light weight and serif forms impair readability at small sizes
- Pure black (`#000000`) backgrounds; the specified `ink` value has subtle warmth that prevents harsh contrast
- Sharp-cornered cards or buttons; the consistent rounding is a deliberate softness against the technical subject matter
- Multiple accent colors; the indigo `accent` should carry all interactive emphasis

### Recommended build order
1. Establish the two environmental modes with `ink` and `surface` backgrounds
2. Implement the type hierarchy with Tiempos Headline and Inter loaded and sized
3. Build the pill button system with primary and secondary variants
4. Create the prompt input card as the central hero component
5. Add feature cards with semi-transparent dark mode treatment
6. Construct the comparison table with alternating row surfaces
7. Implement footer grid with columnar link organization

### Accessibility
- Ensure `canvas` text on `ink` backgrounds meets WCAG AAA contrast; the near-white on deep navy typically passes
- Verify `accent` buttons maintain 4.5:1 contrast ratio; the indigo against white passes, but test if button text shifts to lighter weights
- Provide focus indicators that work on both dark and light surfaces; a `2px` outline offset by `2px` in `accent` color serves both contexts
- Respect `prefers-reduced-motion` for any gradient or background animations; static fallbacks should preserve the atmospheric quality
- Ensure workflow node connections are distinguishable without color alone; line patterns or labels may supplement pure color coding

## Scope note

This guide covers the homepage hero experience, product workflow pages, pricing comparison surfaces, and site footer as visible in the supplied captures. Mobile layouts, animation specifications, form validation states, and dashboard interfaces beyond the marketing site are not represented. Measurements are practical adaptation targets derived from visible proportions rather than extracted specifications.
