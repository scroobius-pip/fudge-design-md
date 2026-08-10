# How swissgrid.posterhouse.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/swissgrid.posterhouse.org-design)

Last updated: 2026-08-10

## Captured pages

[![Commentary section with circular portrait, muted label, and essay link on white canvas](https://pin.fontofweb.com/2731?format=jpg)](https://design.withfudge.com/share/pin-2731)

[Commentary section with circular portrait, muted label, and essay link on white canvas](https://design.withfudge.com/share/pin-2731)

[![Dark footer with three-column credits grid, vertical edge navigation, and legal copy](https://pin.fontofweb.com/2730?format=jpg)](https://design.withfudge.com/share/pin-2730)

[Dark footer with three-column credits grid, vertical edge navigation, and legal copy](https://design.withfudge.com/share/pin-2730)

[![Typography specimen page with massive black display word and tabbed family selector](https://pin.fontofweb.com/2729?format=jpg)](https://design.withfudge.com/share/pin-2729)

[Typography specimen page with massive black display word and tabbed family selector](https://design.withfudge.com/share/pin-2729)

[![Historical content section with editorial text and framed vintage poster artwork](https://pin.fontofweb.com/2728?format=jpg)](https://design.withfudge.com/share/pin-2728)

[Historical content section with editorial text and framed vintage poster artwork](https://design.withfudge.com/share/pin-2728)

## Overview

The Swiss Grid microsite translates a museum exhibition into a digital experience built on the principles it celebrates: clarity, asymmetry, and typographic hierarchy. The design operates as a study in restraint—every element earns its place through precise alignment rather than decorative abundance. The system alternates between expansive white surfaces that let archival poster imagery breathe, and dense black surfaces that concentrate attention on credits and navigation. Akzidenz Grotesk serves as the sole typographic family, anchoring the historical subject matter in its own lineage while providing the neutral, authoritative voice characteristic of Swiss International Style.

The visual rhythm emerges from stark contrast: large display type against generous whitespace, small functional labels against substantial body copy, and the occasional intrusion of full-bleed historical color from the poster collection. Navigation remains deliberately minimal—an eye icon and a hamburger menu in the upper right, plus a vertical edge navigation on dark sections—preserving the gallery-like atmosphere where content, not chrome, commands attention. The site functions as both exhibition and educational tool, with sections dedicated to commentary, typographic history, and pre-grid design movements.

## Colors

The palette derives from the binary logic of print production: ink on paper, reversed. Four core colors establish all visible surfaces and text, with a muted tone for secondary information.

| token | value | use |
|---|---|---|
| ink | #1a1a1a | Primary text, display type, and interface icons on light surfaces |
| canvas | #ffffff | Primary background for content sections and commentary pages |
| inverse-canvas | #000000 | Footer background, dark mode surfaces, and vertical navigation strips |
| inverse-ink | #ffffff | All text on inverse-canvas surfaces, including credits and legal copy |
| muted-ink | #888888 | Secondary labels, inactive tab states, and attribution text |
| border | #cccccc | Subtle dividers and hairline rules where structure requires separation |

The near-black ink token (#1a1a1a) rather than pure black softens the typographic mass while maintaining the graphic punch essential to the Swiss Style reference. White canvas dominates the reading experience, creating the gallery-wall effect where historical posters and typographic specimens become the focal objects. The inverse-canvas black appears primarily in the footer and edge navigation, functioning as a grounding element that absorbs rather than reflects attention. Muted-ink serves a specific hierarchy role: the "COMMENTARY" label above the essay excerpt, inactive typography tabs, and secondary attribution lines all recede visually without disappearing. The border token appears sparingly—primarily as the hairline frame around historical poster reproductions—avoiding the boxy enclosure that would contradict the open, asymmetric layout philosophy.

## Typography

The type system is intentionally narrow: one family, five sizes, three weights. This constraint mirrors the exhibition's subject matter while ensuring every decision carries visual weight. The loaded font families are Akzidenz Grotesk Std, Akzidenzgrotesk-300, Akzidenzgrotesk-500, Akzidenzgrotesk-Italic 500, and Akzidenzgrotesk-Italic Regular.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Akzidenz Grotesk Std | 8rem | 700 | 0.9 | -0.03em | Massive specimen words like "Konst" in the typography section |
| section-display | Akzidenz Grotesk Std | 3rem | 700 | 1.1 | -0.02em | Page titles: "Before The Grid", "Typography" |
| body-large | Akzidenz Grotesk Std | 1.5rem | 400 | 1.4 | 0em | Commentary excerpts and introductory paragraphs |
| body | Akzidenz Grotesk Std | 1rem | 400 | 1.5 | 0em | Running text, captions, credits, and legal copy |
| label | Akzidenz Grotesk Std | 0.75rem | 500 | 1.2 | 0.05em | Section labels, category markers, and small uppercase text |
| navigation | Akzidenz Grotesk Std | 1rem | 400 | 1 | 0em | Menu items and interface labels |

The weight range spans 300, 400, and 500 as loaded from the Typekit source, with 700 inferred for the bold display treatment visible in the specimen page. Akzidenzgrotesk-300 provides the light weight, Akzidenzgrotesk-500 provides the medium weight, and Akzidenz Grotesk Std Regular provides the base weight. The italic variants (Akzidenzgrotesk-Italic 500 and Akzidenzgrotesk-Italic Regular) serve attribution and emphasis within body text, as seen in the historical section's artwork credit. Tight negative tracking on display sizes prevents the open counters of Akzidenz Grotesk from loosening the composition, while the body sizes maintain neutral spacing for extended reading. The label token's slight positive tracking compensates for its reduced size, preserving legibility at small scale.

Verify licensing for these families before production use. The Typekit source URLs indicate commercial hosting; ensure appropriate subscription coverage for your deployment.

## Layout

The layout system follows an asymmetric grid with generous margins and deliberate offset relationships between text and image. Content never centers by default; instead, it anchors to invisible vertical divisions that create tension through unequal white space.

The page structure uses a full-bleed viewport approach with internal padding of 2rem to 3rem on all sides. The header area remains fixed in the upper right corner, containing only the eye icon and hamburger menu—both at 1rem scale with ample touch targets. Below this minimal chrome, content sections stack vertically with section spacing of 6rem between major thematic breaks.

The commentary section demonstrates the characteristic two-column offset: a circular portrait avatar (approximately 180px diameter) sits left-aligned with substantial right margin, while the text block begins higher on the vertical axis, creating a staggered reading path. The essay link with its arrow indicator sits inline with the body text, not separated into a distinct button area.

The footer introduces a three-column grid on the inverse-canvas black background. Columns maintain roughly equal width with 2rem gutters, but content density varies deliberately—the left column carries the heaviest text block, the center column lists names in stacked lines, and the right column isolates the hashtag and credit as sparse, high-contrast elements. A vertical edge navigation appears on the left and right extremes of dark sections, composed of small circular indicators stacked with minimal spacing.

Historical content sections reverse the asymmetry: text occupies the left two-fifths of the viewport while the framed poster image anchors the right side, positioned lower than the section title to create diagonal visual flow. The image frame uses a subtle border (#cccccc) with no shadow, maintaining the flat, print-referenced aesthetic.

## Visual language

The visual language operates through absence and precision. Decorative elements are eliminated in favor of typographic scale, spatial rhythm, and the intrinsic graphic power of the archival material. The system communicates confidence through what it refuses to add: no gradients, no shadows, no rounded corners on containers, no hover states visible in static view.

The eye icon and hamburger menu in the upper right establish a minimal interface vocabulary—thin stroke weight, geometric construction, no fill. These icons read as drafting tools rather than software affordances, aligning with the exhibition's historical subject. The vertical edge navigation on dark sections uses small white circles as section indicators, functioning like bindery marks or registration dots from print production.

Photographic and illustrative content enters the system through strict framing. The circular avatar crop in the commentary section and the rectangular poster frame in the historical section both use simple geometric boundaries without shadow or dimensional treatment. The poster frame's thin border (#cccccc) echoes the matting of museum display rather than digital interface.

The overall impression is of a design that has been reduced to its essential structural decisions—every pixel carries curatorial intent. The white spaces are not empty but active, shaping reading order and pacing. The black surfaces are not merely backgrounds but absorptive fields that isolate information. This binary surface treatment (white for content, black for meta-information) creates an intuitive wayfinding system without explicit signage.

## Components

### Commentary Block

An asymmetric two-column layout featuring a circular portrait photograph and associated text.

- **Anatomy**: Circular avatar image (50% border-radius), contributor name in section-display size, institutional affiliation in body size, section label above the essay excerpt, body-large excerpt text, and inline text link with arrow indicator.
- **Surface**: White canvas background (#ffffff), all text in ink (#1a1a1a).
- **Typography**: Label token for "COMMENTARY" marker; body-large for the essay excerpt; body for name and affiliation; navigation for the "Read Walters' Full Essay" link.
- **Shape**: Avatar is a perfect circle (50% radius); all other elements are rectangular.
- **Spacing**: Avatar sits with 2rem right margin; text block begins approximately 1rem above the avatar's vertical center, creating the characteristic offset. Section label has 0.5rem bottom margin before excerpt.
- **Composition**: Left column (avatar plus name/affiliation) occupies roughly one-third width; right column (label, excerpt, link) occupies the remainder with left alignment.
- **Variants**: None visible; all commentary blocks likely follow this template with contributor-specific imagery.

### Footer Grid

A dense information surface on black background with three primary columns and full-width legal copy below.

- **Anatomy**: Three content columns (About, Credits/Contributors, Hashtag/Website credit) plus full-span legal paragraph at bottom. Vertical edge navigation with circular indicators on left and right extremes.
- **Surface**: Inverse-canvas background (#000000), all text in inverse-ink (#ffffff).
- **Typography**: Section titles in body weight at 1rem with 500 weight; running text in body token; names stacked with 0.25rem line spacing; legal copy in label size with reduced opacity or lighter weight.
- **Shape**: No border radius on containers; purely rectangular.
- **Spacing**: Columns separated by approximately 3rem gutters; top padding of 4rem before content; bottom padding of 2rem after legal copy.
- **Composition**: Asymmetric column widths—left column widest for descriptive text, center column medium for name lists, right column narrowest for sparse credit information.
- **Variants**: The vertical edge navigation appears only on dark surfaces, with small white circles indicating scroll position or section availability.

### Typography Specimen

A dramatic display treatment for typeface demonstration, combining massive scale with contextual information.

- **Anatomy**: Page title in section-display size; introductory paragraph in body size; tabbed family selector on left; massive specimen word in hero-display size; descriptive paragraph in body size; attribution line in body size.
- **Surface**: White canvas background (#ffffff), all text in ink (#1a1a1a) except inactive tabs in muted-ink (#888888).
- **Typography**: Hero-display for the specimen word (approximately 8rem, tight leading); section-display for "Typography" heading; body for descriptive text; label styling for tab items with pipe prefix.
- **Shape**: No containers or borders; text floats on whitespace.
- **Spacing**: Massive top margin before specimen word (approximately 4rem); specimen word has minimal bottom margin (0.5rem) before descriptive text.
- **Composition**: Left sidebar occupies approximately one-quarter width for tabs and intro; main area carries the specimen word with left alignment that extends beyond conventional margins.
- **Variants**: Tab states show active (ink, bold) and inactive (muted-ink, regular); three families listed with only Akzidenz Grotesk Bold active.

### Historical Section

Editorial content paired with framed archival imagery in an asymmetric layout.

- **Anatomy**: Section title in section-display size; body paragraphs with italic inline attribution; framed poster image with caption below.
- **Surface**: White canvas background (#ffffff); image frame uses border (#cccccc) at 1px.
- **Typography**: Section-display for "Before The Grid"; body for historical narrative; italic body for artwork credit line; body for image caption.
- **Shape**: Image frame is rectangular with no border-radius; no shadow.
- **Spacing**: Title has 1.5rem bottom margin before first paragraph; paragraphs separated by 1rem; image positioned with substantial left margin from text column, lower than title start.
- **Composition**: Text occupies left 40% of viewport; image occupies right 50% with asymmetric positioning that creates diagonal reading flow from title through text to image.
- **Variants**: None visible; likely template for multiple historical entries with varying image aspect ratios.

## Responsive behavior

The design's rigid grid and asymmetric layouts suggest specific adaptation requirements for narrower viewports, though only desktop states are visible in the supplied material.

At viewport widths below approximately 1024px, the two-column commentary block should stack vertically: avatar and name centered or left-aligned above the excerpt text, eliminating the horizontal offset that creates visual tension at large sizes. The massive hero-display specimen word requires scaling down to prevent horizontal overflow—reduce to section-display size (3rem) or introduce viewport-relative sizing with clamp().

The footer grid's three-column structure should collapse to a single column below 768px, maintaining section order but stacking credits, contributors, and website attribution vertically with increased section spacing (3rem between former columns). Legal copy should remain full-width with comfortable line length limits (max-width: 65ch) to preserve readability.

The historical section's side-by-side text and image layout should reverse to stacked format on narrow viewports, with the image preceding the text to establish visual context before historical narrative. The image frame should become full-width within viewport padding, maintaining its thin border but losing the asymmetric offset.

Navigation requires careful touch-target consideration: the eye icon and hamburger menu should expand to minimum 44×44px tap areas. The vertical edge navigation on dark sections should either hide entirely on mobile or transform to a horizontal indicator bar, as vertical screen real estate is constrained.

## Practical implementation guidance

### Preserve
- The stark binary surface system: white for content, black for meta-information. This is the primary wayfinding mechanism.
- The tight tracking on display sizes (-0.03em to -0.02em); loose tracking destroys the Swiss Style reference.
- The asymmetric offsets between text and image elements—centered layouts contradict the design's historical basis.
- The single font family constraint; introducing secondary families fractures the curatorial voice.
- The thin 1px border on image frames; no shadow, no dimensional treatment.

### Avoid
- Adding background colors to content sections beyond the binary white/black system.
- Rounding corners on containers, cards, or images; the aesthetic is deliberately rectilinear.
- Drop shadows on any element; flatness is essential to the print-referenced language.
- Decorative dividers or rules beyond the image frame border; whitespace performs structural work.
- Multi-line underline or background-highlight link treatments; the inline text link with arrow is the established pattern.

### Recommended build order
1. Establish the type system with Akzidenz Grotesk at all five size/weight combinations, verifying web font loading and fallback behavior.
2. Implement the binary color system with CSS custom properties for easy dark-section application.
3. Build the header chrome with eye icon and hamburger menu, fixed positioning in upper right.
4. Create the commentary block as the primary content template, establishing two-column offset behavior.
5. Develop the historical section template with asymmetric text-image pairing.
6. Construct the footer grid with three-column collapse behavior.
7. Add the typography specimen page as a stress test for maximum display scale.
8. Implement vertical edge navigation for dark sections last, as it is secondary to content hierarchy.

### Accessibility
- Ensure the eye icon and hamburger menu have explicit aria-labels; their visual minimalism risks ambiguity for screen reader users.
- The massive hero-display text should use semantic heading hierarchy (h1 for page title, not the specimen word) to preserve document outline.
- Color contrast exceeds WCAG AA: ink on canvas (approximately 16:1) and inverse-ink on inverse-canvas (21:1) both surpass requirements.
- The inline "Read Full Essay" link should have visible focus state beyond color change, as the arrow indicator alone may not suffice for keyboard users.
- Consider reduced-motion preferences for any scroll-triggered animations; the static aesthetic suggests minimal motion is appropriate.

## Scope note

This guide covers the desktop presentation of the Swiss Grid exhibition microsite homepage and interior content pages. Mobile breakpoints, interactive states, motion design, and the full poster gallery grid are not represented in the supplied material. Measurements are practical adaptation targets derived from visible composition analysis. The Typekit-hosted Akzidenz Grotesk variants require active licensing for production deployment.
