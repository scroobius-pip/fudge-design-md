# How tavus.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tavus.io-design)

Last updated: 2026-08-10

## Captured pages

[![PALs pricing hero with serif headline and pastel purple, peach, yellow tier cards on warm cream background](https://pin.fontofweb.com/5835?format=jpg)](https://design.withfudge.com/share/pin-5835)

[PALs pricing hero with serif headline and pastel purple, peach, yellow tier cards on warm cream background](https://design.withfudge.com/share/pin-5835)

[![Developer pricing hero with tab switcher and four-column pastel plan cards with hard shadow borders](https://pin.fontofweb.com/5836?format=jpg)](https://design.withfudge.com/share/pin-5836)

[Developer pricing hero with tab switcher and four-column pastel plan cards with hard shadow borders](https://design.withfudge.com/share/pin-5836)

[![Full-height pricing cards showing feature lists with checkmarks and tier-specific accent buttons](https://pin.fontofweb.com/5837?format=jpg)](https://design.withfudge.com/share/pin-5837)

[Full-height pricing cards showing feature lists with checkmarks and tier-specific accent buttons](https://design.withfudge.com/share/pin-5837)

[![Compare Plans section with horizontal feature comparison table and colored column headers](https://pin.fontofweb.com/5838?format=jpg)](https://design.withfudge.com/share/pin-5838)

[Compare Plans section with horizontal feature comparison table and colored column headers](https://design.withfudge.com/share/pin-5838)

## Overview

Tavus presents a pricing experience that merges editorial warmth with utilitarian clarity. The visual system centers on a soft cream canvas populated by color-coded pricing tiers—lavender, peach, butter yellow, and coral—each contained within cards that carry a distinctive hard-shadow border treatment. A nostalgic serif display face, Perfectly Nineties, anchors headlines with generous sizing and tight leading, while Suisse Intl handles all functional body text with neutral precision. The overall impression is approachable yet structured: the pastel palette suggests friendliness, the hard shadows add tactile emphasis, and the typographic pairing creates clear hierarchy between promotional messaging and transactional detail. The pricing page serves two distinct audiences—PALs consumers and developers—through a tabbed interface that preserves visual consistency while adapting tier structures.

## Colors

The color system builds from a warm neutral foundation, introduces four pastel tier identifiers, and uses a single dark ink for all text and structural borders.

| token | value | use |
|---|---|---|
| canvas | #F7F2EB | Page background; warm cream establishes editorial warmth |
| ink | #1A1A1A | All text, card borders, icon strokes, and shadow offsets |
| surface | #FFFFFF | Hero banner background; high-contrast container for display type |
| accent-coral | #F76B8A | Enterprise tier cards; primary action buttons; active tab state |
| accent-lavender | #D8D4E8 | Basic/Free tier cards; lowest-intensity tier identifier |
| accent-peach | #F2C4B0 | Starter/Plus tier cards; mid-warmth consumer tier |
| accent-butter | #F2D696 | Growth/Max tier cards; warm yellow developer tier |
| action-primary | #F76B8A | Primary CTA buttons; active tab backgrounds |
| action-secondary | #E8E4DC | Inactive tab backgrounds; secondary button fills |
| border | #1A1A1A | Card perimeters, dividers, table rules, button borders |

The palette operates in a light mode exclusively across the visible surfaces. Pastel tier colors function as semantic identifiers rather than gradients or decorative accents—each hue maps to a specific pricing level, enabling rapid visual scanning. The near-black ink unifies the system through consistent borders and typography, while the warm cream canvas prevents the pastels from feeling juvenile. No dark mode or photographic color treatments appear in the supplied material.

## Typography

The type system pairs a nostalgic serif with two utilitarian grotesks, creating clear role separation between display and functional text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Perfectly Nineties | 4rem | 400 | 1.05 | -0.02em | Page headlines; pricing hero banners |
| section-display | Perfectly Nineties | 3rem | 400 | 1.1 | -0.01em | Section titles; "Compare Plans" header |
| price-display | Perfectly Nineties | 3.5rem | 400 | 1 | -0.02em | Tier prices; "Free", "$59/mo", "Custom" |
| body | Suisse Intl | 1rem | 400 | 1.5 | 0 | Feature descriptions; plan details |
| body-small | Suisse Intl | 0.875rem | 400 | 1.5 | 0 | Fine print; tier subtitles; table cells |
| label | Fk Raster Grotesk Compact-Blended | 0.75rem | 400 | 1.2 | 0.04em | Buttons; tabs; category tags; uppercase treatments |
| navigation | Suisse Intl | 0.875rem | 400 | 1.2 | 0 | Navigation links; header elements |

Perfectly Nineties, designed by Jen Wagner Co, supplies the system's emotional character through its soft serifs and slightly irregular proportions. Perfectly Nineties-Italic is available in the font inventory and may serve accent or emphasis roles in other page contexts. Suisse Intl, from Swiss Typefaces, provides the neutral, highly legible backbone for all functional reading. Fk Raster Grotesk Compact-Blended, designed by Florian Karsten, appears in compressed uppercase for button labels and tab text, adding a subtle technical texture. Schibsted Grotesk is available in the font inventory but does not appear in visible roles within the pricing surfaces. Verify licensing for these families before production use.

## Layout

The pricing page employs a centered, contained layout with generous vertical breathing room. The hero section occupies the upper viewport with a centered headline block, followed by a tab switcher, then a tier card grid that adapts between three and four columns depending on the active pricing mode.

The hero banner uses a white surface card with a thin dark border and hard shadow offset, centered horizontally with substantial top and bottom padding. Below it, the tab switcher sits as a compact horizontal element with two adjacent buttons sharing a single border and shadow treatment. The pricing grid follows with equal-width columns, each card maintaining internal vertical rhythm through stacked sections: tier name, subtitle, horizontal rule, price, payment terms, CTA button, second horizontal rule, and feature list.

Spacing follows a 0.25rem base unit. Section vertical padding measures 6rem, creating clear separation between the hero and grid. Card internal padding is 1.5rem, with 1rem gutters between grid columns. The hard shadow offset—approximately 4px down and 4px right—extends each card's visual footprint without affecting layout flow.

The comparison table visible in one surface uses a full-width treatment with left-aligned feature names and centered checkmarks per tier column, maintaining the same border and rule language as the cards.

## Visual language

The dominant visual signature is the hard-shadow card treatment: a 1px solid border with a 4px offset shadow in near-black, creating a papercraft or sticker-like dimensionality without rounded corners. This treatment applies consistently to hero banners, pricing cards, tab switchers, and buttons, unifying disparate components into a coherent tactile system.

Color coding serves as the primary wayfinding mechanism. Each pricing tier carries a distinctive pastel fill—lavender for entry, peach for mid-tier, butter for growth, coral for enterprise or premium—allowing users to track tiers across card views and comparison tables. The fills are flat, without gradients or texture.

Typography reinforces hierarchy through scale contrast rather than weight variation. Display sizes in Perfectly Nineties run large and tight, while functional text in Suisse Intl stays restrained. The single weight used across each family (Regular 400) maintains consistency; emphasis comes from size, color, and spatial position rather than bolding.

Iconography is minimal and functional: small square checkmarks for feature inclusion, circled "i" marks for information tooltips. These share the same ink color and stroke weight as borders, integrating seamlessly.

## Components

### Pricing tier card

Anatomy: Vertical stack with tier name, descriptive subtitle, horizontal divider, price display, payment terms, CTA button, second divider, and bulleted feature list.

Surface: Flat pastel fill per tier—lavender, peach, butter, or coral—with 1px ink border and 4px/4px hard shadow offset.

Typography: Tier name uses body at 1rem; price uses price-display at 3.5rem; terms and features use body-small at 0.875rem.

Shape: Zero border radius; sharp rectangular corners.

Spacing: 1.5rem internal padding; 1rem vertical gap between major sections; horizontal rules as 1px ink lines.

Composition: Left-aligned text; full-width buttons; checkmark icons precede feature text with 0.5rem gap.

Variants: Four color variants mapped to tier level. Button variant switches between secondary (light fill) on dark-accent cards and primary (coral fill) on light-accent cards.

### Tab switcher

Anatomy: Adjacent pair of text buttons sharing a unified border and shadow container.

Surface: Inactive state uses action-secondary fill; active state uses action-primary fill.

Typography: label token at 0.75rem with slight positive tracking.

Shape: Zero border radius; single outer border encloses both options with internal 1px divider.

Composition: Equal width; centered text; no gap between adjacent buttons.

States: Active tab inverts to coral fill with ink text; inactive tab remains light with ink text.

### Primary button

Anatomy: Text label centered within bordered rectangle.

Surface: action-primary fill (coral) with 1px ink border and 4px/4px hard shadow.

Typography: label token; uppercase or small-caps treatment.

Shape: Zero border radius.

Spacing: 0.75rem vertical padding, 1.5rem horizontal padding.

### Secondary button

Anatomy: Identical structure to primary button.

Surface: action-secondary fill (warm gray) with 1px ink border and matching hard shadow.

Typography: label token.

Used on: Darker tier cards where coral would clash; inactive states.

### Feature comparison table

Anatomy: Full-width grid with feature name column and tier columns; section headers group related features.

Surface: Transparent or canvas background; no card container.

Typography: Feature names in body-small left-aligned; checkmarks centered in tier columns.

Border: 1px horizontal rules between rows; vertical rules between tier columns.

Composition: Feature column wider than tier columns; tier column headers mirror card colors.

### Hero banner

Anatomy: Centered text block with headline and subtitle.

Surface: surface white fill with 1px ink border and 4px/4px hard shadow.

Typography: Headline in hero-display; subtitle in body.

Shape: Zero border radius; generous internal padding.

## Responsive behavior

The visible surfaces show a desktop layout exclusively. The four-column and three-column grid structures suggest the pricing cards collapse to fewer columns at narrower viewports. A two-column arrangement at medium widths and single-column stacking at mobile widths would preserve readability while maintaining the hard-shadow card language.

The hero headline at 4rem should scale down to section-display or smaller to prevent overflow on narrow screens. Tab switcher width may need to expand to full-width on mobile for touch accessibility. Card internal padding can reduce to 1rem on small screens to maximize content area.

The hard shadow offset should remain proportional—reducing to 2px/2px on mobile would prevent excessive visual weight while preserving the signature treatment.

## Practical implementation guidance

### Preserve
- The hard-shadow border treatment as the unifying dimensional language across all elevated components.
- Pastel tier color mapping: lavender for entry, peach for mid, butter for growth, coral for premium/enterprise.
- Perfectly Nineties for all display headlines and prices; its nostalgic character is central to brand perception.
- Zero border radius everywhere; the sharp-cornered aesthetic distinguishes from conventional rounded SaaS patterns.
- The two-tier tab system for audience segmentation (PALs vs. Developer).

### Avoid
- Rounding corners on cards or buttons; this would undermine the papercraft signature.
- Using bold weights for emphasis; the system relies on size contrast and color, not weight.
- Introducing gradients or shadows beyond the flat offset treatment.
- Applying tier accent colors to text; they function as surface fills only.
- Mixing Schibsted Grotesk into visible roles without verifying its intended placement.

### Recommended build order
1. Establish the cream canvas and ink text foundation.
2. Implement the hard-shadow utility (border + offset box-shadow) as a reusable mixin.
3. Set up the three-font hierarchy with Perfectly Nineties, Suisse Intl, and Fk Raster Grotesk Compact-Blended.
4. Build the tab switcher and hero banner as the first composed components.
5. Create the pricing card with tier color variants and button logic.
6. Construct the comparison table with matching border language.
7. Add feature list formatting with checkmark icons.

### Accessibility
- Ensure the coral action-primary meets minimum contrast against both white and dark text; the current pairing of coral fill with ink text should be verified for WCAG AA compliance.
- Provide visible focus states that extend the hard-shadow treatment rather than replacing it.
- Maintain semantic heading hierarchy: h1 for hero, h2 for sections, with Perfectly Nineties reserved for visual display roles.
- Tab switcher should use proper ARIA roles (tablist, tab, tabpanel) for keyboard navigation.
- Information tooltips (circled "i" icons) need accessible labels or expanded text alternatives.

## Scope note

This guide covers the pricing page surfaces for both PALs and Developer audiences. The homepage and other site sections are not represented. No mobile layouts, hover states, focus indicators, loading patterns, or motion behavior appear in the supplied material. Measurements are practical adaptation targets. Font licensing should be verified for Perfectly Nineties, Perfectly Nineties-Italic, Fk Raster Grotesk Compact-Blended, Suisse Intl, and Schibsted Grotesk before production use.
