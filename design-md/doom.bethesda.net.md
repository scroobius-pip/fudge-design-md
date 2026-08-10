# How doom.bethesda.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/doom.bethesda.net-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with id Software logo, social icons, language selector, and three-column link grid on near-black background](https://pin.fontofweb.com/1834?format=jpg)](https://design.withfudge.com/share/pin-1834)

[Footer with id Software logo, social icons, language selector, and three-column link grid on near-black background](https://design.withfudge.com/share/pin-1834)

[![Slayers Club section with torn-paper edge texture, green helmet illustration, and orange call-to-action button](https://pin.fontofweb.com/1833?format=jpg)](https://design.withfudge.com/share/pin-1833)

[Slayers Club section with torn-paper edge texture, green helmet illustration, and orange call-to-action button](https://design.withfudge.com/share/pin-1833)

[![Media gallery grid with video thumbnails, play buttons, and section heading over dark atmospheric background](https://pin.fontofweb.com/1832?format=jpg)](https://design.withfudge.com/share/pin-1832)

[Media gallery grid with video thumbnails, play buttons, and section heading over dark atmospheric background](https://design.withfudge.com/share/pin-1832)

[![Cinematic hero section with demon character portrait and centered display typography with orange accent underline](https://pin.fontofweb.com/1831?format=jpg)](https://design.withfudge.com/share/pin-1831)

[Cinematic hero section with demon character portrait and centered display typography with orange accent underline](https://design.withfudge.com/share/pin-1831)

## Overview

The DOOM: The Dark Ages marketing site presents a visceral, dark-cinematic visual system built for high-impact game promotion. The design immerses viewers in a near-black environment where atmospheric photography, dramatic character art, and bold typographic statements dominate. Every surface reinforces the franchise's aggressive, hellish identity through restrained color, maximal contrast, and carefully orchestrated hierarchy.

The system operates on a principle of controlled intensity: the canvas remains consistently dark, allowing fiery orange accents and bright white typography to punctuate the experience. Content sections alternate between full-bleed cinematic imagery and structured content grids, creating rhythm through density changes rather than color variation. The overall impression is of a premium entertainment product—polished, confident, and unapologetically intense.

Navigation and functional elements maintain visual discipline through geometric precision. Buttons are sharp-cornered and blocky, labels are tightly tracked and uppercase, and spacing follows a strict modular logic. This structural rigor prevents the rich photographic content from feeling chaotic, establishing a clear information hierarchy that guides visitors from dramatic hero moments through to conversion actions and detailed media exploration.

## Colors

The color system is intentionally narrow, deriving its power from extreme contrast rather than variety. The near-black canvas absorbs light while a single warm orange provides the only saturated accent, creating immediate visual heat against the cold darkness.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, hero section backdrops, deepest shadows |
| surface | #1a1a1a | Footer background, secondary panels, elevated content areas |
| surface-elevated | #262626 | Language selector background, subtle card differentiation |
| ink | #ffffff | Primary headings, body text on dark, button labels, icons |
| ink-muted | #a3a3a3 | Footer links, secondary navigation, copyright text, legal copy |
| action | #c45c1a | Primary buttons, "NEW" badges, hover states, accent underlines |
| action-hover | #d46820 | Button hover background, interactive accent intensification |
| border | #404040 | Footer dividers, card outlines, structural separators |
| border-subtle | #2a2a2a | Thumbnail grid borders, inactive state boundaries |

The interface maintains a strict dark mode throughout. No light theme is present or implied. The orange accent derives from the game's fiery hellscape imagery and functions as the sole warm element in an otherwise cool, desaturated environment. Photography carries its own color temperature—ranging from molten oranges in battle scenes to sickly greens in character art—but these remain content-driven rather than systemic. The design leverages this photographic warmth by placing orange interface elements in proximity to similarly toned imagery, creating chromatic resonance without expanding the palette.

## Typography

The typographic system pairs an elegant, high-contrast serif display face with utilitarian sans-serif body and label fonts, creating tension between classical drama and modern functionality. This combination supports the game's thematic blend of medieval dark fantasy and contemporary action.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cantoria Mt Pro | 4rem | 700 | 1 | 0.05em | Main hero headlines, cinematic section titles |
| section-display | Cantoria Mt Pro | 2.5rem | 700 | 1.1 | 0.03em | Section headings, feature callouts |
| body | Open Sans | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-large | Open Sans | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, introductory copy |
| label | Trade Gothic Ltw 04 Bd Cn No 20 | 1rem | 400 | 1.2 | 0.04em | Buttons, badges, category labels, video captions |
| navigation | Montserrat | 1rem | 400 | 1.2 | 0.02em | Header navigation, footer column headers |

Cantoria Mt Pro, designed by Ron Carpenter and provided by Monotype Imaging Inc, serves as the distinctive display voice. Its sharp serifs and pronounced contrast evoke engraved metal and medieval manuscripts, aligning with the game's dark ages setting. The Bold weight (700) handles all display duties; the Semi Bold and Regular weights are available for potential secondary applications. Open Sans, from the Monotype Design Team, provides neutral, highly legible body copy that recedes appropriately behind the dramatic display. Trade Gothic Ltw 04 Bd Cn No 20, a bold condensed sans, delivers compressed impact for labels and calls-to-action where space is constrained but presence is required. Montserrat, designed by Julieta Ulanovsky, handles functional navigation with clean geometric clarity.

Verify licensing for these families before production use.

## Layout

The layout system favors full-bleed cinematic sections interspersed with structured content grids. Sections stack vertically with generous breathing room, typically separated by 6rem of vertical space. The viewport-width canvas is treated as a stage for dramatic imagery, with content positioned through deliberate asymmetry or centered alignment depending on narrative intent.

Hero sections occupy the full viewport height, with text centered both horizontally and vertically over photographic backgrounds. A subtle dark gradient overlay ensures text legibility without obscuring the imagery. The gradient typically intensifies toward the bottom of the frame, creating a natural fade into the next content section.

Content grids follow a strict column logic. The media gallery presents a four-column grid of equal-width thumbnails with consistent 1.5rem gutters. Each thumbnail maintains a 16:9 aspect ratio with a play button centered as an overlay. Footer content distributes across three equal columns with left-aligned text stacks, maintaining visual connection through consistent vertical rhythm.

The language selector appears as a centered, bordered rectangle within the footer zone, elevated slightly above the link grid through its subtle background fill. Social icons align horizontally in a centered row, spaced evenly with approximately 2.5rem between icons. The overall spatial logic prioritizes dramatic negative space around key messages while compressing functional information into efficient, scannable clusters.

## Visual language

The visual language draws directly from the DOOM franchise's established aesthetic: industrial aggression, supernatural horror, and heroic fantasy merged into a cohesive dark palette. Surfaces are matte and light-absorbing; specular highlights appear only in photography and illustration, never in interface chrome.

Photography dominates the experience, ranging from cinematic character portraits to explosive battle tableaux. Images are treated with desaturated color grading that emphasizes warm embers against cool shadows. The Slayers Club section introduces a distinctive torn-paper edge texture along the top and bottom boundaries, breaking the otherwise clean horizontal section breaks with physical, almost violent disruption. This texture suggests parchment, propaganda posters, or battle-worn documents—material culture from the game's fictional world.

The green helmet illustration in the Slayers Club section provides a rare cool accent, functioning as a membership badge or club insignia. Its flat, graphic treatment contrasts with the photorealistic game imagery elsewhere, establishing a secondary visual register for community and meta-content.

Iconography remains minimal and functional. Social media icons are simple white glyphs. Play buttons appear as white circles with triangular indicators. The "BUY NOW" button in the header uses a pill shape with sharp ends, bridging the gap between the site's blocky buttons and conventional e-commerce conventions. No decorative patterns, gradients, or ornamental elements distract from the photographic content.

## Components

### Primary action button

- **Anatomy**: Rectangular block with zero border radius, containing centered uppercase label text
- **Surface and text color**: `{colors.action}` background with `{colors.ink}` text
- **Typography**: `{typography.label}`—Trade Gothic Ltw 04 Bd Cn No 20 at 1rem, uppercase, positive tracking
- **Shape and border**: Sharp corners, no border, solid fill
- **Spacing**: 1rem vertical padding, 2.5rem horizontal padding
- **Composition**: Typically left-aligned within content sections, or centered in narrow promotional blocks
- **Variants**: Hover state shifts to `{colors.action-hover}`; no visible disabled or loading state in supplied imagery

### Media thumbnail card

- **Anatomy**: Rectangular image container with 16:9 aspect ratio, optional play button overlay, caption label below
- **Surface and text color**: Image fills container; caption uses `{colors.ink-muted}` on `{colors.canvas}` or `{colors.surface}`
- **Typography**: Caption uses `{typography.label}` in uppercase
- **Shape and border**: Zero border radius with 1px `{colors.border-subtle}` outline
- **Spacing**: 1.5rem gutters in grid arrangement
- **Composition**: Four-column grid on desktop, maintaining equal widths
- **Variants**: Video thumbnails display circular white play button with triangular icon; static images omit the play overlay

### Hero section

- **Anatomy**: Full-viewport-height container with background image, gradient overlay, centered text block
- **Surface and text color**: Background image with dark gradient overlay; text in `{colors.ink}`
- **Typography**: Headline uses `{typography.hero-display}`; supporting copy uses `{typography.body-large}`
- **Shape and border**: Full bleed, no containing border
- **Spacing**: Text centered vertically and horizontally; generous padding prevents edge collision
- **Composition**: Single focal message with minimal elements; imagery provides narrative context
- **Variants**: Some heroes feature subtle orange accent underline or glow on headline text

### Footer

- **Anatomy**: Three-column link grid, social icon row, language selector, copyright and legal marks
- **Surface and text color**: `{colors.surface}` background; column headers in `{colors.ink}`; links in `{colors.ink-muted}`
- **Typography**: Headers use `{typography.navigation}` with uppercase treatment; links use `{typography.body}` at reduced size
- **Shape and border**: 1px top border in `{colors.border}` separates footer from content; column headers have subtle bottom border
- **Spacing**: 6rem top padding; 3rem bottom padding; columns evenly distributed with consistent internal spacing
- **Composition**: Logo and copyright left-aligned; link columns center-weighted; ESRB ratings right-aligned
- **Variants**: "NEW" badge appears inline with Privacy Policy link, using `{colors.action}` background

### Slayers Club banner

- **Anatomy**: Full-width section with torn-paper edge textures, two-column layout with text left and illustration right
- **Surface and text color**: Dark textured background; text in `{colors.ink}`; button in `{colors.action}`
- **Typography**: Headline uses `{typography.section-display}`; body uses `{typography.body-large}`; button uses `{typography.label}`
- **Shape and border**: Irregular torn edges at top and bottom; otherwise rectangular
- **Spacing**: Generous internal padding; illustration scales to fill right portion
- **Composition**: Asymmetric two-column with approximately 40/60 text-to-image ratio
- **Variants**: No visible alternate states

## Responsive behavior

The desktop layout presents a fully expanded experience with multi-column grids and generous spacing. At reduced viewport widths, the system should adapt through progressive simplification rather than dramatic reorganization.

The four-column media grid should collapse to two columns on tablet-width viewports and single column on mobile, maintaining thumbnail aspect ratios and play button proportions. The three-column footer should stack vertically, with link columns collapsing to accordions or simple stacked lists to prevent excessive line lengths.

Hero section typography should scale down proportionally, with the hero-display size reducing to approximately 2.5rem on mobile while maintaining the uppercase treatment and tracking. The centered composition remains appropriate across widths, though padding should increase proportionally to preserve text safe zones.

The Slayers Club two-column layout should stack to single column on mobile, with the helmet illustration moving above or below the text block. The torn-paper edge textures should remain visible but may crop differently at extreme aspect ratios.

Navigation, partially visible in the header area, should collapse to a hamburger menu or simplified icon row on narrow viewports, preserving the "BUY NOW" call-to-action as a persistent element.

## Practical implementation guidance

### Preserve
- The absolute darkness of the canvas; any lightening compromises the cinematic immersion
- The single orange accent; resist adding secondary accent colors that dilute the heat signature
- The sharp-cornered, zero-radius button treatment; this geometric aggression is core to the identity
- The uppercase, tracked display typography; the theatrical voice depends on this treatment
- The torn-paper texture in the Slayers Club section; this handmade disruption balances digital polish

### Avoid
- Border radius on primary components; rounded corners contradict the industrial, weaponized aesthetic
- Multi-line hero headlines; the display face works best as a single powerful statement
- Light backgrounds for any section; the dark palette is non-negotiable
- Decorative shadows or glows beyond the subtle text treatments visible in hero sections
- Body text in the display serif; Cantoria Mt Pro is for headlines only

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement Cantoria Mt Pro for hero and section display with uppercase treatment
3. Build the primary action button component with sharp corners and orange fill
4. Create the hero section layout with gradient overlay and centered text
5. Develop the media thumbnail grid with consistent borders and play button overlay
6. Construct the footer with three-column link distribution and social icon row
7. Add the Slayers Club section with torn-paper texture and asymmetric layout

### Accessibility
- Ensure all text over photography meets WCAG contrast minimums through gradient overlays; the dark gradient behind white text is essential
- Provide visible focus indicators for keyboard navigation; the sharp button geometry can accommodate outline offsets
- Include alt text for all game imagery that conveys narrative content
- Consider reduced-motion preferences for any scroll-triggered animations; the still imagery is strong enough to stand alone
- Maintain touch targets at minimum 44px for mobile interaction with thumbnail play buttons

## Scope note

This guide covers the DOOM: The Dark Ages marketing page surface, including the hero presentation, media gallery, Slayers Club promotion, and site footer. Mobile breakpoints, animation behavior, form interactions, and e-commerce checkout flows are not represented in the supplied imagery. Measurements are practical adaptation targets. Verify licensing for all font families before production use.
