# How kimaventures.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kimaventures.com-design)

Last updated: 2026-08-10

## Captured pages

[![Portfolio section with outlined italic headings, teal body text on black, and investment ticker footer](https://pin.fontofweb.com/5446?format=jpg)](https://design.withfudge.com/share/pin-5446)

[Portfolio section with outlined italic headings, teal body text on black, and investment ticker footer](https://design.withfudge.com/share/pin-5446)

[![Hero with bold italic teal display type, black canvas, orange and blue portfolio cards, and scrolling ticker](https://pin.fontofweb.com/5445?format=jpg)](https://design.withfudge.com/share/pin-5445)

[Hero with bold italic teal display type, black canvas, orange and blue portfolio cards, and scrolling ticker](https://design.withfudge.com/share/pin-5445)

## Overview

Kima Ventures presents itself as "the most active business angel in the world" through a deliberately stark, editorial visual system. The identity relies on maximum contrast: an unmodulated black canvas against electric teal typography that carries the entire communicative load. The design avoids conventional startup aesthetics—no gradients, no glassmorphism, no rounded warmth. Instead, it adopts the visual language of avant-garde print design translated to screen: oversized italic display type, outlined letterforms that read as presence rather than absence, and a relentless horizontal ticker that marches investment names across the bottom edge like a stock exchange feed. The system is built on restraint and exaggeration in equal measure. Every element that could be decorative has been stripped away, leaving only typographic scale, color shock, and the rhythm of the scrolling ticker to establish brand personality. The result feels closer to a contemporary art publication or a fashion lookbook than to typical venture-capital presentation, which serves the strategic positioning of the firm as unconventional, prolific, and culturally attuned.

## Colors

The palette is severely limited and aggressively applied. Black dominates as the unconditional background; teal functions as the sole active ink; and two saturated accent colors appear only within portfolio company cards. This restriction creates immediate visual recognition and forces all hierarchy to resolve through typographic weight, scale, and the outlined-solid alternation rather than through color variation.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, all primary surfaces, ticker bar ground |
| ink | `#00E5C0` | Primary headings, body text, navigation, logo wordmark, solid display type |
| ink-muted | `#00B89A` | Ticker text, secondary labels, de-emphasized structural text |
| surface-warm | `#F27D1D` | Portfolio card backgrounds (warm accent) |
| surface-cool | `#3B5FCC` | Portfolio card backgrounds (cool accent) |
| surface-light | `#F2F2F2` | Logo mark background, occasional light surfaces |

The relationship between modes is not a conventional light-dark toggle but a figure-ground inversion within a single dark environment. The black canvas never relents; the teal ink shifts between solid fill and outline stroke to create hierarchy. The portfolio cards introduce the only chromatic warmth, functioning as embedded photographs or color fields within the monochrome editorial spread. No photographic tinting or gradient overlays appear in the interface itself—the image-palette values from portfolio company logos remain strictly within those contained cards.

## Typography

The typographic system is built on Kanit and Kanit-Italic, a Thai-Latin geometric sans with a constructed, slightly squared character that carries weight aggressively. The design uses both upright and italic cuts, with italic serving as the default voice for display and body alike—an unusual choice that lends the entire site a forward-leaning, propulsive energy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kanit | 6rem | 700 | 0.9 | -0.02em | Primary hero statements, largest page headlines |
| section-display | Kanit | 4rem | 700 | 0.95 | -0.01em | Section headings, outlined portal titles |
| body-large | Kanit | 2.5rem | 400 | 1.3 | 0 | Prominent body copy, deal descriptions |
| body | Kanit | 1.5rem | 400 | 1.4 | 0 | Standard paragraphs, ticker descriptions |
| label | Kanit | 1rem | 700 | 1.2 | 0.05em | Category tags, uppercase structural labels |
| navigation | Kanit | 1.25rem | 700 | 1.2 | 0.02em | Menu items, portal links |

Italic is deployed pervasively: the hero statement "WE BACK 2 STARTUPS PER WEEK WITH MONEY & CARE" sets its solid lines in italic bold, while the interleaved outlined line "2 STARTUPS PER WEEK" uses italic as well. The label "THE KIMA DEAL" and the body description of investment strategy both appear in italic. This is not emphasis but voice—the italic functions as the neutral state, with upright reserved for the logo mark and possibly for the ticker investment names.

Verify licensing for these families before production use. The Kanit and Kanit-Italic families are served from Google Fonts; attribution to specific designers or vendors is not supported by the available records.

## Layout

The page structure follows a single-column editorial model with extreme vertical breathing room. Sections stack with substantial interstitial space, allowing each typographic statement to command the viewport independently. There is no sidebar, no persistent navigation rail, no card grid—just centered or left-aligned blocks that read as sequential spreads.

The hero occupies the full viewport height, centering its stacked typographic lines with generous internal leading. The display type scales to near-edge proportions, with the longest lines ("WITH MONEY & CARE") spanning nearly the full content width. Below the hero, portfolio cards appear as isolated color rectangles, not as a continuous grid—each card floats in the black space with significant surrounding margin.

The investment ticker persists as a fixed or continuously scrolling band at the bottom edge, containing repeating segments of investment name, company description, and separator. This element introduces horizontal motion into an otherwise static vertical scroll, creating a temporal layer that suggests constant activity.

Content alignment varies by section: the hero centers its text block; the portfolio section left-aligns or freely positions cards; the outlined portal headings ("PORTFOLIO →", "OUR TEAM →") center with arrow glyphs that imply navigation without conventional button containers. The overall spatial logic is that of a poster series viewed sequentially rather than a dashboard or application interface.

## Visual language

The defining visual gesture is the outlined display letterform. Large italic words appear as hollow strokes—teal lines tracing character shapes against the black ground—creating a ghosted presence that reads as both text and pattern. This treatment appears on "PORTFOLIO" and "OUR TEAM" in one view, and on "2 STARTUPS PER WEEK" in the hero. The outline stroke is consistent in weight, approximately 2px, with no fill. The effect is architectural: the letters become frames or windows rather than solid masses, allowing the black ground to continue through them.

Solid and outlined treatments alternate to create rhythm. In the hero, the pattern is: solid, outlined, solid—three lines that establish a visual beat. The outlined line is always the middle term, creating a valley between peaks of saturated teal. This alternation prevents the large display from feeling monolithic and introduces a layer of graphic sophistication that elevates the simple two-color system.

The arrow glyph (→) appears as a typographic element rather than an icon, set at the same scale as the accompanying outlined word and sharing its stroke weight. It functions as a directional cue but remains visually integrated with the wordmark-like treatment of the portal headings.

Portfolio cards are flat color fields with centered logo marks—no border radius, no shadow, no hover state visible in the static view. The orange and blue cards read as pure color photography within the black editorial layout, their saturation calibrated to compete with the teal without clashing.

## Components

### Hero statement

- **Anatomy**: Stacked lines of display text, center-aligned, with alternating solid and outlined treatments.
- **Surface and text color**: Black canvas; solid lines in `{colors.ink}`, outlined lines in `{colors.ink}` stroke only.
- **Typography**: `{typography.hero-display}` for solid lines; same family, weight, and size for outlined lines with `color: transparent` and stroke applied.
- **Shape and border**: No containing border; text edges define the component boundary.
- **Spacing**: Generous vertical padding equivalent to `{spacing.section}` above and below; line-height at 0.9 creates tight vertical stacking.
- **Composition**: Centered within viewport; maximum width unconstrained or loosely capped.
- **Variants**: The outlined treatment may apply to any line in the stack; the pattern is not fixed to position.

### Outlined portal heading

- **Anatomy**: Large italic word plus arrow glyph, rendered as stroke-only text.
- **Surface and text color**: Transparent fill, `{colors.ink}` stroke at approximately 2px.
- **Typography**: `{typography.section-display}` in italic.
- **Shape and border**: No background shape; the glyph itself is the interactive target.
- **Spacing**: `{spacing.section}` vertical margin; horizontal centering.
- **Composition**: Word and arrow set as continuous horizontal element, arrow slightly elevated or baseline-aligned.
- **Variants**: "PORTFOLIO →", "OUR TEAM →" visible; pattern extensible to other section portals.

### Portfolio card

- **Anatomy**: Solid color rectangle containing centered company logo or wordmark.
- **Surface and text color**: `{colors.surface-warm}` or `{colors.surface-cool}` background; logo colors intrinsic to brand assets.
- **Typography**: None applied by system; logo marks are imported assets.
- **Shape and border**: `{rounded.card}` at 0rem—sharp corners.
- **Spacing**: Isolated within black canvas with `{spacing.section}` margin; no visible gap between cards when multiple appear.
- **Composition**: Positioned as free elements rather than grid cells; aspect ratio appears roughly square or slightly landscape.

### Investment ticker

- **Anatomy**: Horizontally scrolling band of repeating text segments; each segment contains investment label, company name, and brief description.
- **Surface and text color**: `{colors.canvas}` background; `{colors.ink-muted}` text.
- **Typography**: `{typography.label}` for "INVESTMENT" prefix; `{typography.body}` for company names and descriptions.
- **Shape and border**: Full-width band; no top border visible, or 1px hairline in `{colors.ink-muted}`.
- **Spacing**: Compact vertical padding, approximately `{spacing.tight}`; horizontal segments separated by consistent gap.
- **Composition**: Infinite horizontal scroll, seamless loop; segments repeat to maintain continuity.
- **Variants**: Single visible state; scroll behavior implies continuous motion.

## Responsive behavior

The design's reliance on extreme scale suggests specific breakpoint behavior. At reduced widths, the hero display type should scale down proportionally, maintaining the solid-outline-solid rhythm but preventing line breaks within single words. The outlined treatment remains viable at smaller sizes if stroke weight is maintained or slightly reduced.

The investment ticker must remain horizontally scrollable at all widths; on narrow viewports, the segment repetition ensures readable content regardless of truncation. Portfolio cards should stack vertically rather than tiling, preserving their isolated, poster-like presentation.

The single-column structure adapts naturally to narrow viewports without structural transformation. The primary risk is the hero display becoming illegible if scaled too aggressively; a minimum font size of `{typography.section-display}` (4rem) should preserve readability while maintaining impact.

## Practical implementation guidance

### Preserve
- The absolute black canvas; do not introduce gray backgrounds or subtle textures.
- The outlined stroke treatment for display headings; this is the signature visual gesture.
- The italic as default voice; upright text should be the exception, not the rule.
- The persistent investment ticker; its continuous motion is part of the brand's claim of constant activity.
- The flat, sharp-cornered portfolio cards with their saturated, unmodulated backgrounds.

### Avoid
- Rounded corners on any structural element; the design's severity depends on geometric precision.
- Drop shadows, glows, or depth effects; the interface is explicitly flat.
- Additional accent colors beyond the teal and the two portfolio card grounds.
- Conventional button styling for portal links; the outlined word-plus-arrow pattern replaces buttons entirely.
- Gradients or transparency layers; opacity variation would dilute the binary impact.

### Recommended build order
1. Establish the black canvas and load Kanit in weights 400 and 700, both upright and italic.
2. Implement the hero statement with alternating solid and outlined lines, verifying stroke rendering across browsers.
3. Build the investment ticker with seamless horizontal scroll animation.
4. Add portfolio cards as positioned color fields with centered logo assets.
5. Implement outlined portal headings with integrated arrow glyphs.
6. Refine responsive scaling, ensuring display type remains impactful without breaking layout.

### Accessibility
- The black-teal pairing provides strong luminance contrast for large text but should be verified against WCAG AA for body-sized text; the muted ticker text may need adjustment for small-size readability.
- Outlined text requires sufficient stroke weight to remain legible at all sizes; consider a solid fallback for users who prefer reduced motion or high contrast.
- The scrolling ticker should respect `prefers-reduced-motion` by pausing or slowing rather than eliminating content.
- All interactive portal headings need focus indicators that maintain the outlined aesthetic, such as a complementary stroke color or fill transition.

## Scope note

This guide covers the homepage hero, portfolio portal, and investment ticker as visible in the supplied captures. Interior pages, mobile-specific layouts, hover states, form interactions, and the full portfolio grid are not represented. Measurements are practical adaptation targets. The outlined text treatment may require vendor-specific CSS or SVG fallback for consistent cross-browser rendering.
