# How landonorris.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/landonorris.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with neon yellow helmet, ON TRACK/OFF TRACK split typography, and lime action buttons on off-white background with abstract line art](https://pin.fontofweb.com/4527?format=jpg)](https://design.withfudge.com/share/pin-4527)

[Hero section with neon yellow helmet, ON TRACK/OFF TRACK split typography, and lime action buttons on off-white background with abstract line art](https://design.withfudge.com/share/pin-4527)

[![Portrait section with centered subject, LN monogram logo above, and subtle curved line decorations on clean white background](https://pin.fontofweb.com/4526?format=jpg)](https://design.withfudge.com/share/pin-4526)

[Portrait section with centered subject, LN monogram logo above, and subtle curved line decorations on clean white background](https://design.withfudge.com/share/pin-4526)

[![Dark grid gallery of racing helmets with neon yellow accents, rounded card frames, and year labels in lime text](https://pin.fontofweb.com/4009?format=jpg)](https://design.withfudge.com/share/pin-4009)

[Dark grid gallery of racing helmets with neon yellow accents, rounded card frames, and year labels in lime text](https://design.withfudge.com/share/pin-4009)

[![Footer overlay with neon yellow border, dark charcoal panel, ALWAYS BRINGING THE FIGHT headline, navigation links, and sponsor logo strip](https://pin.fontofweb.com/4008?format=jpg)](https://design.withfudge.com/share/pin-4008)

[Footer overlay with neon yellow border, dark charcoal panel, ALWAYS BRINGING THE FIGHT headline, navigation links, and sponsor logo strip](https://design.withfudge.com/share/pin-4008)

## Overview

This design system captures the visual identity of a Formula 1 driver portfolio that merges motorsport energy with editorial sophistication. The interface operates on a stark binary: expansive off-white spaces for editorial content and deep charcoal surfaces for immersive galleries and footer experiences. A signature neon lime accent cuts through both modes, functioning as the primary action color, decorative highlight, and brand signature. The typography pairs an expressive, high-contrast display serif with an ultra-light geometric sans-serif, creating tension between personality and technical precision. Layouts favor asymmetry—split compositions, offset imagery, and generous negative space—while maintaining grid discipline in denser content areas like the helmet gallery. The overall impression is confident, contemporary, and unmistakably racing-oriented without resorting to clichéd motorsport tropes.

## Colors

The color system is intentionally restrained, using a near-monochrome foundation with a single high-voltage accent. This creates maximum impact for the lime elements while allowing photography and helmet imagery to dominate visual attention.

| token | value | use |
|---|---|---|
| action | #D1FF00 | Primary buttons, link accents, year labels, decorative borders, signature marks |
| ink | #111111 | Primary text, headings, logo, dark-mode backgrounds |
| muted-ink | #555555 | Secondary body text, captions, inactive states |
| canvas | #F5F5F0 | Primary page background, light sections, portrait backdrops |
| surface | #1A1A1A | Gallery backgrounds, footer panels, dark cards |
| border | #333333 | Subtle dividers, card outlines on dark, hairline decorations |

The light mode establishes an editorial atmosphere: warm off-white canvas with near-black ink text. The neon lime appears sparingly—on buttons, as underlines, and in year indicators—creating a "spot color" effect borrowed from print design. Dark mode inverts this relationship: charcoal surfaces become dominant, with lime functioning as the primary readable accent against black. The lime maintains consistent hue across both contexts, ensuring brand recognition. No gradients are present; all color transitions are hard edges or opacity shifts. Photography receives no color treatment—images appear in native color, allowing the natural vibrancy of racing helmets to compete with the interface accent.

## Typography

Two font families drive the typographic hierarchy: Brier for display moments and Mona Sans for all functional text. Brier appears exclusively in bold weight, deployed for headlines and section titles where editorial personality is required. Mona Sans operates at extra-light weight, providing technical contrast and ensuring readability at smaller sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Brier | 6rem | 700 | 0.9 | -0.03em | Homepage hero headlines, major section titles |
| section-display | Brier | 4rem | 700 | 0.95 | -0.02em | Subsection headings, overlay headlines |
| body | Mona Sans | 1rem | 300 | 1.5 | 0em | Paragraphs, descriptions, general content |
| label | Mona Sans | 0.75rem | 300 | 1.2 | 0.05em | Buttons, tags, year indicators, captions |
| navigation | Mona Sans | 0.875rem | 300 | 1.4 | 0.02em | Menu items, footer links, social channels |

Brier is designed by Fatima Abbas. Mona Sans carries no attributed designer in the available records. Verify licensing for these families before production use.

The type scale uses a 4px relative unit, with display sizes at 96px and 64px, body at 16px, and functional sizes at 14px and 12px. Display typography employs tight negative tracking for a compressed, impactful presence. Body text maintains neutral tracking for extended reading. All-caps treatment appears selectively in navigation and footer links, creating a secondary hierarchy without additional font weights.

## Layout

The layout system alternates between expansive editorial spreads and dense grid systems. The homepage hero uses an asymmetric split: imagery occupies the left third while typography dominates the right two-thirds, with generous vertical padding creating breathing room. This 1:2 asymmetry repeats across sections, preventing the predictability of centered compositions.

Section spacing follows an 8rem major rhythm, with 2rem component gaps and 0.5rem tight adjustments for related elements. The grid system uses implicit columns rather than visible rules—content blocks align to an underlying structure while appearing to float freely.

The gallery section transitions to a strict grid: cards arranged in rows with consistent internal padding and uniform corner radii. Each card contains a single helmet image with a bottom-right label pairing a descriptive name with a year in lime. The grid maintains equal gaps between cards, with the dark surface creating a continuous field that unifies disparate helmet designs.

Footer treatment inverts the hero's openness: a contained panel with rounded corners sits within a lime border frame, creating a "card within a card" effect. Navigation splits into three zones—page links left, social channels right, sponsor logos spanning the bottom edge. This creates clear information hierarchy while preserving the asymmetric DNA.

## Visual language

The visual language balances organic and systematic elements. Abstract curved lines—thin, continuous strokes in muted ink—drift across white backgrounds like wind tunnel visualization or track maps. These decorative elements never compete with content; they establish atmosphere and motion without literal representation.

The neon lime functions as a signature mark beyond pure utility. It appears in handwritten-style signatures, as button fills, and as the single color accent in otherwise monochrome photography presentations. This restraint makes each lime instance feel intentional and valuable.

Imagery treatment prioritizes cut-out photography: helmets and portraits float on solid backgrounds without environmental context. This isolation emphasizes form and pattern—the intricate liveries become abstract compositions when removed from track settings. The gallery cards use subtle rounded frames that echo the helmet shapes themselves, creating visual rhyme between container and content.

Sponsor integration appears as a horizontal logo strip, with each mark rendered in monochrome to maintain system coherence. The lime accent reappears here only for interactive states or emphasis, not as default presentation.

## Components

**Primary Action Button**
- Anatomy: Text label with optional external-link icon
- Surface: Solid lime fill with near-black text
- Typography: Label token, uppercase, letter-spaced
- Shape: 0.75rem border radius, compact padding
- Spacing: Generous horizontal padding relative to text height
- Composition: Typically appears in pairs or aligned to content blocks
- States: Default only visible; hover/focus states not captured

**Content Card (Gallery)**
- Anatomy: Image container with bottom-right text overlay
- Surface: Dark charcoal background, subtle border
- Typography: Label token for name, action color for year
- Shape: 1rem border radius, continuous corners
- Spacing: Internal padding creates breathing room around helmet images
- Composition: Grid-aligned with consistent gaps
- Variants: Single helmet per card, varied image aspect ratios contained within

**Hero Section**
- Anatomy: Split composition with imagery left, typography right
- Surface: Off-white canvas background
- Typography: Hero-display for primary headline, body for description
- Shape: Full-bleed horizontally, generous vertical padding
- Spacing: Asymmetric content distribution with centered text blocks
- Composition: Diagonal implied energy from helmet positioning against static text

**Footer Panel**
- Anatomy: Contained rounded panel with three-zone navigation
- Surface: Dark charcoal with lime border frame
- Typography: Navigation token for links, label token for section headers
- Shape: 1.5rem border radius on panel, full-width lime border
- Spacing: Comfortable internal padding, clear separation between zones
- Composition: Page links left-aligned, social right-aligned, sponsors bottom-centered

**Navigation Link Group**
- Anatomy: Stacked text links with section header
- Surface: Transparent, inherits parent background
- Typography: Navigation token, uppercase treatment
- Spacing: Tight vertical stacking with clear header separation
- Composition: Left-aligned in footer, implied hierarchy through position

## Responsive behavior

The asymmetric hero layout should stack vertically on narrow viewports, with imagery preceding typography to maintain visual interest. The split ON TRACK / OFF TRACK composition becomes a single column with alternating image-text blocks. Gallery grids should reduce column count—four columns to two, then to single column—while maintaining card proportions and internal spacing. The footer panel's three-zone structure collapses to stacked sections: navigation, social, then sponsors. The lime border frame should remain visible at all sizes, potentially converting to full-bleed background on smallest viewports. Type scale should reduce proportionally: hero-display to section-display size, maintaining the Brier/Mona Sans hierarchy.

## Practical implementation guidance

**Preserve**
- The stark binary between light editorial and dark immersive modes
- Neon lime as the sole accent, used with surgical precision
- Asymmetric compositions that favor left-weighted imagery
- Cut-out photography treatment with solid backgrounds
- Ultra-light Mona Sans weight for all functional text
- Brier's tight tracking and bold weight for display moments only

**Avoid**
- Additional accent colors that compete with the lime signature
- Centered compositions that dilute the asymmetric energy
- Gradient fills or soft shadows—the system relies on flat color
- Heavy Mona Sans weights that destroy the technical contrast
- Rounded corners larger than 1.5rem or smaller than 0.75rem
- Body text in Brier or display text in Mona Sans

**Recommended build order**
1. Establish color tokens and apply canvas/ink foundation
2. Implement typography scale with correct family/weight pairings
3. Build hero section with asymmetric split layout
4. Create primary action button with lime fill
5. Develop gallery card component with dark surface
6. Construct footer panel with three-zone navigation
7. Add decorative line elements as final atmosphere layer

**Accessibility**
- Ensure lime-on-white combinations meet minimum contrast ratios; the lime may need darkening for small text
- Provide focus indicators that maintain the lime accent without relying solely on color
- Consider reduced-motion preferences for any decorative line animations
- Test dark gallery mode with high-contrast settings; the charcoal surface may need adjustment for true black in forced-colors mode
- Maintain logical tab order through asymmetric layouts that may challenge visual-to-DOM sequence

## Scope note

This guide covers the homepage and visible gallery surfaces. Interior pages, mobile-specific layouts, hover states, loading sequences, and form interactions are not represented in the supplied material. Measurements are practical adaptation targets derived from visual inspection.
