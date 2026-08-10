# How kigen.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kigen.design-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing section with three-tier card layout showing Personal, Team, and Enterprise plans with feature checklists and black primary buttons](https://pin.fontofweb.com/8718?format=jpg)](https://design.withfudge.com/share/pin-8718)

[Pricing section with three-tier card layout showing Personal, Team, and Enterprise plans with feature checklists and black primary buttons](https://design.withfudge.com/share/pin-8718)

[![Dark and light mode comparison showing a task management interface with themed columns and a central toggle switch](https://pin.fontofweb.com/8717?format=jpg)](https://design.withfudge.com/share/pin-8717)

[Dark and light mode comparison showing a task management interface with themed columns and a central toggle switch](https://design.withfudge.com/share/pin-8717)

[![Feature grid with six cards showcasing color tokens, dark mode, typography, auto layout, dev handoff, and accessibility standards](https://pin.fontofweb.com/8716?format=jpg)](https://design.withfudge.com/share/pin-8716)

[Feature grid with six cards showcasing color tokens, dark mode, typography, auto layout, dev handoff, and accessibility standards](https://design.withfudge.com/share/pin-8716)

[![Hero section with large display typography, rainbow gradient underline, and floating UI component previews including calendar and user menu](https://pin.fontofweb.com/8715?format=jpg)](https://design.withfudge.com/share/pin-8715)

[Hero section with large display typography, rainbow gradient underline, and floating UI component previews including calendar and user menu](https://design.withfudge.com/share/pin-8715)

## Overview

Kigen Design System presents itself as a comprehensive Figma-based toolkit for modern product teams. The landing page communicates sophistication through restraint: a near-white canvas hosts dense galleries of UI components, pricing tiers, and feature explanations. The visual strategy balances clinical precision with moments of expressive color—most notably in the rainbow gradient accents that appear beneath headlines and as decorative elements. The system demonstrates its own capabilities by embedding live-looking component previews directly into the marketing surface: date pickers, user menus, price range sliders, and task boards all appear as if plucked from a working application. This self-referential approach proves the system's maturity while giving visitors immediate tactile understanding of what they are purchasing. The overall impression is of a premium, production-ready resource rather than a conceptual framework.

## Colors

The color system operates on a principle of high-contrast simplicity with strategic chromatic bursts. The foundation rests on near-black ink against warm off-white canvas, creating the crisp readability expected of professional design tools.

| token | value | use |
|---|---|---|
| ink | #161718 | Primary text, headings, button fills |
| muted-ink | #333333 | Secondary text, strikethrough prices, subtle labels |
| canvas | #F8F8F8 | Page background, section alternation |
| surface | #FFFFFF | Card backgrounds, elevated panels, pricing tiers |
| surface-elevated | #F1F2F4 | Badge backgrounds, subtle highlight bands |
| border | #EBEBEB | Card outlines, divider lines, component boundaries |
| border-strong | #DDDDDD | Input borders, emphasized separators |
| action | #000000 | Primary button fill, maximum contrast moments |
| action-text | #FFFFFF | Text on black buttons, inverted contexts |
| accent-blue | #007BE5 | Interactive highlights, link states, active calendar dates |
| accent-cyan | #25B2F9 | Gradient stops, decorative spectrum elements |
| accent-green | #04C56B | Success states, pass indicators, positive actions |
| accent-yellow | #FFEF5A | Gradient anchor, warning-adjacent highlights |
| accent-red | #FD2723 | Error states, gradient spectrum, attention moments |
| accent-magenta | #FF0080 | Spectrum decoration, brand energy |
| accent-orange | #FF8D28 | Warm spectrum balance, secondary emphasis |
| success | #14AE5C | Accessibility pass badges, confirmation states |
| info | #38BDF8 | Informational tags, feature labels |
| gradient-start | #FFEF5A | Rainbow gradient yellow anchor |
| gradient-mid | #25B2F9 | Rainbow gradient cyan midpoint |
| gradient-end | #014DFF | Rainbow gradient blue terminus |

The interface supports both light and dark modes, with the dark variant inverting to deep charcoal backgrounds with maintained accent integrity. The rainbow gradient—spanning yellow through cyan to deep blue—functions as a signature brand element, appearing beneath the hero headline and as a decorative pricing highlight. Photographic and illustrative content introduces additional saturated colors (greens, magentas, oranges) that remain confined to image content rather than expanding the core UI palette.

## Typography

The typographic system relies primarily on Geist, a contemporary sans-serif with tight tracking and crisp geometry that reinforces the technical precision of the product. Hanken Grotesk appears in minimal supporting contexts, while Inter is available in the broader system for secondary interfaces.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 5rem | 600 | 1 | -0.02em | Main page headline, brand statement |
| section-display | Geist | 2.75rem | 500 | 1.1 | -0.03em | Section headings, feature introductions |
| card-title | Geist | 1.375rem | 500 | 1.2 | -0.01em | Feature card headers, pricing tier names |
| body | Geist | 1rem | 400 | 1.5 | -0.01em | General content, navigation, button labels |
| body-large | Geist | 1.125rem | 400 | 1.75 | -0.005em | Hero descriptions, explanatory paragraphs |
| label | Geist | 0.8125rem | 400 | 1.125 | -0.005em | Badges, metadata, small captions |
| price | Geist | 2.25rem | 500 | 1 | -0.02em | Pricing figures, large numerals |

Geist was designed by Basementstudio (Andrés Briganti, Mateo Zaragoza) and is available through Vercel. Inter was designed by Rasmus Andersson. Verify licensing for these families before production use. The type scale demonstrates deliberate compression: display sizes push to 80px for maximum impact while maintaining readability through generous line height and controlled tracking. Body text remains modest at 16px, allowing component density without strain. The negative letter spacing throughout creates a tightly integrated, engineered appearance appropriate for a design tool.

## Layout

The page structure follows a centered, contained model with generous breathing room between major sections. Content max-width appears to settle around approximately 1200px, creating comfortable margins on standard displays while maintaining readability.

Section rhythm alternates between full-bleed canvas backgrounds and contained surface panels. The hero section occupies substantial vertical space, centering its content with the display headline, rainbow accent, and dual call-to-action buttons before yielding to a sprawling component preview gallery. This gallery breaks the containment model, allowing UI mockups to extend toward the viewport edges and create visual depth through overlapping cards and floating elements.

The feature grid in the middle sections employs a strict three-column layout with equal-width cards, consistent internal padding, and uniform gaps. Pricing follows a similar three-column structure but with subtle elevation differences: the center "Team" tier receives enhanced visual weight through positioning and scale.

Spacing follows a clear hierarchy: section breaks use 100px vertical margins, card internal padding holds at 28-40px, and component-level gaps compress to 8-12px. The system demonstrates sophisticated negative margin techniques in the component gallery, where preview cards overlap and offset to create dynamic composition without sacrificing the underlying grid logic.

Navigation sits at the top in a minimal bar, left-aligning the brand mark and right-aligning text links with a prominent dark "Preview" button. The overall layout philosophy prioritizes content density within structured boundaries—every pixel feels considered, yet the page avoids sterile rigidity through intentional compositional play in the preview areas.

## Visual language

The visual identity communicates through contrast and precision. Rounded rectangles dominate the shape vocabulary: cards carry 16px radii, buttons soften to 14px, and badges achieve full pill curvature. This consistent rounding tempers the technical subject matter with approachable warmth.

Shadow usage remains subtle and functional. Cards and elevated panels carry soft ambient shadows (rgba(0,0,0,0.04) at 2px offset) rather than dramatic depth. The component gallery introduces more pronounced layering through overlapping elements and slight elevation differences, but the overall aesthetic stays flat-modern rather than skeuomorphic.

The rainbow gradient serves as the primary expressive element. It appears as a flowing underline beneath the hero headline, as a spectrum bar in pricing, and as decorative accents throughout. This gradient—yellow to cyan to deep blue—provides the emotional warmth that balances the otherwise monochrome interface.

Iconography and imagery favor clean, minimal representations. Feature cards use simple geometric illustrations: color swatches, toggle switches, type specimens, and layout diagrams. The component previews demonstrate real-world density: calendars with selected dates, user menus with avatar stacks, price sliders with histogram backgrounds. This combination of abstract icons and concrete previews creates a layered visual narrative that speaks to both conceptual understanding and practical application.

The dark mode implementation inverts luminance while preserving hue relationships, ensuring that the rainbow accents and status colors maintain their semantic meaning across themes.

## Components

**Navigation bar**
- Anatomy: Brand mark with gradient icon, text wordmark, horizontal link list, primary CTA button
- Surface: Transparent background over canvas, transitioning to solid on scroll
- Typography: Body token for links, medium weight
- Shape: Full-width bar, no border radius
- Spacing: 16px horizontal padding, 12px vertical
- Composition: Flex row, space-between alignment

**Hero section**
- Anatomy: Decorative "introducing" script, display headline with rainbow underline, description paragraph, dual action buttons, expansive component preview gallery
- Surface: Canvas background
- Typography: Hero-display for headline, body-large for description
- Shape: Buttons at 14px radius, preview cards at 16-20px with varied elevations
- Spacing: 100px top margin, 30px between text elements, generous bottom overflow into gallery
- Composition: Centered text stack above asymmetric component collage

**Pricing cards**
- Anatomy: Tier icon, plan name, price with strikethrough comparison, description, primary action button, feature checklist with checkmarks
- Surface: White card with 1px border in #EBEBEB, 16px radius
- Typography: Card-title for plan name, price token for figures, body for features
- Shape: 16px card radius, 14px button radius
- Spacing: 28-40px internal padding, 20px between price and button, 20px between button and list
- Variants: Personal and Team use black fill buttons; Enterprise uses white button with border

**Feature cards**
- Anatomy: Illustrative preview area, horizontal divider, title, description paragraph
- Surface: White with subtle border, or elevated with light gray background
- Typography: Card-title for headers, body for descriptions
- Shape: 16px radius, full-bleed preview images with internal rounding
- Spacing: 20px padding, consistent 24px gaps in grid
- Composition: Three-column grid with equal heights

**Buttons**
- Primary: Black fill, white text, 14px radius, 12px 24px padding
- Secondary: White fill, dark text, 1px border in #DDDDDD, matching radius and padding
- Ghost: Transparent with text only, used in navigation

**Badges and labels**
- Anatomy: Pill-shaped container with text
- Surface: Light gray background (#F1F2F4) for neutral, or colored backgrounds for status
- Typography: Label token, medium weight for emphasis
- Shape: Full pill radius (9999px)
- Spacing: 6px 18px padding

**Component previews**
- Anatomy: Functional-looking UI fragments (calendars, menus, sliders, task cards)
- Surface: White panels with realistic shadows and borders
- Typography: System fonts at various sizes matching the depicted component type
- Shape: Varied radii from 8px to 20px depending on component type
- Composition: Overlapping, offset arrangement creating depth without chaos

## Responsive behavior

The layout appears optimized for desktop viewing with substantial horizontal space. The three-column grids for features and pricing would naturally collapse to single-column stacks on narrower viewports, with cards maintaining internal proportions. The hero component gallery, currently sprawling and overlapping, should scroll horizontally or reorganize into a vertical cascade on mobile to preserve legibility of the individual preview elements.

Typography scales down proportionally: the 80px hero display should reduce to approximately 48px on tablet and 36px on mobile to prevent overflow and maintain comfortable line lengths. The dense component previews in the gallery may require touch-friendly sizing adjustments, with minimum tap targets of 44px for interactive elements depicted within the mockups.

Navigation should collapse to a hamburger menu on narrow viewports, preserving the Preview CTA as a persistent floating action if appropriate. The pricing section's three-tier comparison works well as a horizontal scroll container on tablet, avoiding the vertical stacking that would obscure the value comparison.

## Practical implementation guidance

**Preserve**
- The tight letter spacing on display type; it is essential to the engineered aesthetic
- The rainbow gradient as a brand signature, using it sparingly for maximum impact
- The high contrast between ink and canvas; do not soften to medium grays
- The consistent 14-16px radius language across cards and buttons
- The overlapping, offset composition of the component preview gallery
- The three-tier pricing structure with clear feature differentiation

**Avoid**
- Expanding the accent palette beyond the established spectrum; the restraint is intentional
- Adding heavy shadows or dimensional effects; the flat-modern aesthetic depends on subtle elevation
- Using the gradient for large fills or backgrounds; it functions best as an accent line or underline
- Mixing border radii arbitrarily; the system maintains tight consistency
- Reducing internal card padding below 28px; the breathing room conveys premium quality

**Recommended build order**
1. Establish the color tokens and type scale with Geist as the primary family
2. Build the navigation and hero section with the rainbow underline accent
3. Implement the component preview gallery with overlapping card composition
4. Create the feature grid with consistent card structure and illustrative content
5. Develop the pricing section with tier differentiation and checklist patterns
6. Add dark mode inversion with preserved accent colors
7. Polish with micro-interactions: button hover states, card lift on focus

**Accessibility**
- Ensure the 4.5:1 contrast ratio between ink (#161718) and canvas (#F8F8F8) is maintained in all text applications
- The rainbow gradient underline should not be the sole indicator of linked or interactive content
- Component previews within images need descriptive alt text explaining the depicted functionality
- Dark mode should be fully implemented with independent contrast verification, not merely inverted
- Focus indicators should exceed the subtle default browser styles given the minimal visual noise of the interface

## Scope note

This guide covers the Kigen Design System landing page as visible in the supplied imagery, including the hero, feature grid, pricing section, and component preview gallery. Mobile layouts, animation specifications, checkout flows, and the actual Figma plugin interface are not represented. The documentation pages and community features referenced in navigation are outside the scope of this guide.
