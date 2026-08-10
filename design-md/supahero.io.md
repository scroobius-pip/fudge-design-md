# How supahero.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/supahero.io-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with large display title, email subscription form, sponsor logo row, and featured template card grid](https://pin.fontofweb.com/3210?format=jpg)](https://design.withfudge.com/share/pin-3210)

[Homepage hero with large display title, email subscription form, sponsor logo row, and featured template card grid](https://design.withfudge.com/share/pin-3210)

[![Dark promotional banner with laptop mockup and pill-shaped CTA above the hero sections filter row](https://pin.fontofweb.com/3211?format=jpg)](https://design.withfudge.com/share/pin-3211)

[Dark promotional banner with laptop mockup and pill-shaped CTA above the hero sections filter row](https://design.withfudge.com/share/pin-3211)

[![Hero sections grid showing diverse template thumbnails with category filter pills and Premium badges](https://pin.fontofweb.com/3212?format=jpg)](https://design.withfudge.com/share/pin-3212)

[Hero sections grid showing diverse template thumbnails with category filter pills and Premium badges](https://design.withfudge.com/share/pin-3212)

[![Dense mosaic of colorful website hero templates showcasing variety in the library collection](https://pin.fontofweb.com/3213?format=jpg)](https://design.withfudge.com/share/pin-3213)

[Dense mosaic of colorful website hero templates showcasing variety in the library collection](https://design.withfudge.com/share/pin-3213)

## Overview

Supahero presents itself as a curated marketplace for website hero sections, built with a visual system that prioritizes clarity, discoverability, and confident typography. The interface balances generous whitespace with dense content grids, allowing template thumbnails to dominate the browsing experience while maintaining clear navigational hierarchy. The design language is intentionally restrained—black and white form the foundational palette, with a single warm accent color reserved for calls to action and status indicators. This restraint lets the colorful template thumbnails within the grid become the true visual content, creating a gallery-like atmosphere where each card is a window into a different design world. The system supports both browsing and conversion goals simultaneously: visitors can explore categories through filter pills, subscribe via email capture, or navigate to deeper sections through a persistent top bar.

## Colors

The color system is built on extreme contrast with minimal chromatic intervention. Black serves as the primary action and text color, white provides the canvas, and a warm orange accent punctuates interactive moments.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, active filter pills, primary button fills, navigation |
| canvas | `#FFFFFF` | Page background, card surfaces, input backgrounds |
| muted | `#6B7280` | Secondary descriptions, placeholder text, inactive states |
| surface | `#F3F4F6` | Filter pill backgrounds, subtle section alternation |
| accent | `#F97316` | Premium badges, NEW labels, promotional highlights |
| accent-hover | `#EA580C` | Accent interactive states |
| border | `#E5E7EB` | Card borders, input borders, dividers |
| border-subtle | `#F3F4F6` | Very light separators, background differentiation |

The palette operates in a near-monochrome mode for all interface chrome. The orange accent appears sparingly—only on badges, status labels, and promotional moments—preventing visual fatigue during extended browsing sessions. Template cards sit on white surfaces with light gray borders, creating subtle definition without competing with the colorful content within each thumbnail. The dark promotional banner introduces a reversed mode: white text on black with a gradient fade toward the product imagery, demonstrating how the system handles high-impact marketing moments without breaking the overall visual rhythm.

## Typography

The type system pairs a distinctive display face for headlines with workhorse sans-serifs for everything else, creating clear role separation between brand expression and functional readability.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | False | 4rem | 700 | 1 | -0.03em | Page title, major headlines |
| section-display | Switzer | 2rem | 600 | 1.1 | -0.02em | Section headings, card titles |
| body | Inter | 1rem | 400 | 1.5 | 0 | Descriptions, form labels |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Secondary text, metadata |
| label | Inter | 0.75rem | 500 | 1.2 | 0.02em | Buttons, badges, filters |
| navigation | Inter | 0.875rem | 500 | 1 | 0 | Top bar links |
| mono | Space Mono | 0.875rem | 400 | 1.4 | 0 | Technical labels, code references |

False serves as the brand voice—tight tracking, bold weight, and geometric character give headlines immediate presence. Switzer handles intermediate hierarchy with slightly more open proportions and semibold weight. Inter manages all functional text with neutral readability at small sizes. Space Mono appears for technical or metadata contexts, adding a subtle editorial quality to labels and attributions.

Font credits: False and False-Normal designed by Deni Anggara for Indian Type Foundry. Switzer designed by Jeremie Hornus for Indian Type Foundry. Inter designed by Rasmus Andersson for Rsms. Space Mono designed by Colophon Foundry Benjamin Critton. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous breathing room at the top and progressive density as the user scrolls into content.

The top navigation spans full width with internal padding, sitting above a large hero zone that occupies roughly 40% of initial viewport height. The hero zone uses asymmetric composition: large display text anchors the left side while a featured template card floats on the right, creating visual tension and immediate product demonstration. Below the hero, a full-width divider separates the promotional area from the browsing experience.

The template grid uses a responsive column system, likely four columns at desktop width based on the visible density. Cards maintain consistent aspect ratios with rounded corners and internal padding that frames each thumbnail. Filter pills sit in a horizontal scroll or wrap container above the grid, allowing category exploration without page transitions.

Spacing follows a 4px base unit. Section vertical padding measures 5rem, creating clear territorial boundaries between the hero, filter bar, and grid regions. Card internal padding is 1.5rem, while grid gaps match at 1.5rem for consistent rhythm. The email capture form in the hero uses tight internal spacing—input and button sit adjacent with minimal separation, reading as a single interactive element.

## Visual language

The visual character is editorial-meets-marketplace: confident typography, generous whitespace, and content-forward presentation that lets template screenshots speak. Rounded corners appear everywhere—cards, buttons, inputs, badges—creating a friendly, approachable tone that counterbalances the stark black-and-white palette.

Template cards use subtle borders rather than shadows for definition, keeping the interface flat and contemporary. The border treatment avoids depth illusions in favor of clean containment. Premium badges break the corner radius convention with smaller rounding, making them feel like stamps or labels rather than interactive elements.

Imagery within cards shows full website screenshots or device mockups, always framed with internal padding that prevents edge-to-edge bleeding. This creates a consistent "postage stamp" effect where every thumbnail has breathing room. The promotional banner breaks this pattern with edge-to-edge photography, using a gradient fade to blend the dark background into the product image.

Iconography appears minimal and functional—search and submit icons in the navigation, arrow indicators on buttons. The sponsor logo row uses grayscale or original brand marks in a horizontal strip, suggesting partnership credibility without visual distraction.

## Components

### Navigation bar

Anatomy: Logo mark left, text links center, search and submit actions right. The logo combines a lightning bolt icon with "Supahero" wordmark.

Surface: Transparent background over page canvas, black text.

Typography: Navigation token for links, label token for the NEW badge.

Shape: Full width, height approximately 4rem with vertical centering.

Composition: Flex row with space-between alignment. Links use horizontal spacing of approximately 2rem between items.

Variants: The Pricing link carries an orange "NEW" badge, indicating recent addition.

### Hero section

Anatomy: Display headline, description paragraph, email subscription form, sponsor logo row, and featured template card.

Surface: White canvas background.

Typography: Hero-display for the title, body-small for description, label for button text.

Shape: Asymmetric two-column layout at desktop. Left column contains text and form; right column contains featured card.

Spacing: Generous top padding of 5rem before content begins. Form elements sit close together with 0.5rem gap.

Composition: The title "Website hero section library" uses a lightning bolt emoji or icon as inline replacement for the word "hero," creating visual wordplay. The email form uses a pill-shaped input with a solid black submit button.

### Filter pills

Anatomy: Horizontal row of category buttons.

Surface: Inactive pills use surface gray background; active pill uses ink black with white text.

Typography: Label token, uppercase or small-case depending on implementation.

Shape: Full pill rounding (9999px), consistent height of approximately 2rem.

Composition: Horizontal scroll or wrap layout with 0.5rem gaps between pills.

Variants: Active state inverts colors. Categories include All, Dark, Minimal, Bento, 3D, Colorful, Light, Video, Pastel, Illustration, Typo, Image, Gradient.

### Template cards

Anatomy: Thumbnail image, optional Premium badge, title, and description.

Surface: White background with light gray border. No shadow.

Typography: Section-display for card titles, body-small for descriptions.

Shape: 1rem border radius. Badge positioned absolute top-right with smaller radius.

Spacing: 1.5rem internal padding creates frame around thumbnail.

Composition: Thumbnail occupies upper portion; text sits below with consistent alignment. Premium badge floats over thumbnail corner.

Variants: Some cards show device mockups within thumbnails; others show full website screenshots. Dark-themed templates create strong contrast against the white card frame.

### Email capture form

Anatomy: Text input and submit button in horizontal arrangement.

Surface: White input with gray border; black button.

Typography: Body-small for placeholder, label for button.

Shape: Pill-shaped input and button. Button slightly taller or same height as input.

Spacing: Minimal gap between elements, approximately 0.5rem.

### Promotional banner

Anatomy: Dark background with gradient, headline text, subheadline, CTA button, and product imagery.

Surface: Black background fading to transparent right edge. White text.

Typography: Section-display for headline, body for subheadline.

Shape: Full width with 1rem rounding. Internal padding of approximately 2rem.

Composition: Text left-aligned, product image (laptop mockup) positioned right with gradient blend.

## Responsive behavior

The grid system should collapse from four columns to two at tablet widths and single column on mobile, maintaining card aspect ratios and readable thumbnail sizes. Filter pills may require horizontal scroll on narrow viewports to preserve the full category set without wrapping into excessive height.

The hero section's asymmetric layout should stack vertically on mobile, with the featured card moving below the email form. Display typography should scale down to approximately 2.5rem on mobile to prevent overflow and maintain readability.

Navigation links may collapse into a menu on mobile, with search and submit actions remaining visible or moving into the menu depending on priority. The sponsor logo row should remain horizontally scrollable on all sizes to preserve partnership visibility.

## Practical implementation guidance

### Preserve
- The stark black-and-white palette with single orange accent; this restraint is central to the brand identity
- Generous rounding on all interactive and container elements
- The "framed thumbnail" card treatment with consistent internal padding
- Inline icon replacement in headlines (the lightning bolt in "hero")
- Asymmetric hero composition that immediately demonstrates product value

### Avoid
- Adding shadows to cards; the flat border treatment is intentional
- Multiple accent colors; the orange monopoly creates clear hierarchy
- Edge-to-edge imagery in cards; the padding frame is a signature element
- Serif typefaces for display; the geometric sans character defines the voice

### Recommended build order
1. Establish the 4px spacing scale and color tokens
2. Implement Inter for body text and navigation
3. Add False for display headlines with tight tracking
4. Build the card component with border, radius, and padding
5. Create the filter pill system with active/invert states
6. Assemble the hero section with asymmetric layout
7. Implement the template grid with responsive columns
8. Add the promotional banner as a variant surface

### Accessibility
- Ensure the orange accent on white meets WCAG AA contrast minimums (4.5:1 for normal text); the current `#F97316` on white achieves approximately 3:1, so use it only for large text or UI components above minimum size thresholds
- Provide visible focus states on filter pills and cards; the current design lacks obvious focus indicators
- Add aria-labels to icon-only buttons in the navigation
- Ensure template card titles are heading elements for screen reader navigation
- Consider reduced-motion preferences for any scroll-triggered animations in the grid

## Scope note

This guide covers the homepage and hero section browsing experience visible in the supplied images. Pricing pages, individual template detail views, checkout flows, and mobile-specific layouts are not represented. Motion behavior, hover states, and loading skeletons were not captured and should be designed to match the established calm, confident tone. Measurements are practical adaptation targets derived from visual analysis.
