# How scmp.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/scmp.com-design)

Last updated: 2026-08-10

## Captured pages

[![Article body with subscription paywall overlay showing yellow-tinted pricing panel with Standard and Lite plan options, benefit comparison table, and prominent Subscribe button](https://pin.fontofweb.com/3692?format=jpg)](https://design.withfudge.com/share/pin-3692)

[Article body with subscription paywall overlay showing yellow-tinted pricing panel with Standard and Lite plan options, benefit comparison table, and prominent Subscribe button](https://design.withfudge.com/share/pin-3692)

[![Full subscription paywall modal with rounded corners, cream background, pricing tiers with strike-through original price, checkmark indicators, and blue text links for login and](https://pin.fontofweb.com/3691?format=jpg)](https://design.withfudge.com/share/pin-3691)

[Full subscription paywall modal with rounded corners, cream background, pricing tiers with strike-through original price, checkmark indicators, and blue text links for login and](https://design.withfudge.com/share/pin-3691)

## Overview

This design system captures the visual language of a major English-language news publication based in Asia. The interface balances editorial gravitas with conversion-oriented clarity, using a warm, approachable palette that distinguishes its subscription experiences from the cooler, more utilitarian aesthetics common to Western news outlets. The system is built around two typefaces: a sturdy serif for headlines and display matter, and a neutral sans-serif for body copy, labels, and interface elements. The most distinctive visual element is the subscription paywall layer, which employs a cream-tinted surface with yellow accents to create urgency without harshness. The overall impression is of a publication that takes its journalism seriously while presenting its business model with inviting warmth.

## Colors

The color system operates in three distinct modes: editorial content on pure white, the warm conversion layer for subscription prompts, and functional accents for interactive states.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, body copy, and iconography |
| canvas | #ffffff | Article backgrounds, price card surfaces, and modal interiors |
| surface-warm | #fef9e7 | Subscription panel backgrounds, paywall overlays, and promotional containers |
| action-primary | #ffc107 | Primary call-to-action buttons, selected states, and flash sale badges |
| action-hover | #ffb300 | Button hover states and interactive emphasis |
| text-link | #1976d2 | Hyperlinks, login prompts, and secondary actions |
| text-muted | #666666 | Secondary descriptions, strikethrough pricing, and disabled indicators |
| border-light | #e0e0e0 | Card outlines, table dividers, and subtle separators |
| border-warm | #f5e6c8 | Panel borders on warm surfaces to maintain tonal harmony |
| success | #4caf50 | Checkmark indicators and positive confirmation states |

The warm surface mode is the system's signature. Where many publications use stark white or cold gray for paywalls, this design employs a cream-tinted background that feels less interruptive to the reading experience. The yellow action color derives from this warmth, creating chromatic continuity rather than jarring contrast. Black ink maintains editorial authority across all surfaces. Blue links provide familiar web affordances without competing with the warm palette. The muted gray serves specifically for de-emphasized content like original prices that have been struck through.

## Typography

The typographic system pairs a refined serif with a workhorse sans-serif, creating clear hierarchy through weight, size, and family contrast rather than elaborate styling.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Merriweather 18 Pt | 2rem | 400 | 1.3 | -0.01em | Article headlines, major section titles |
| section-display | Merriweather 18 Pt | 1.5rem | 400 | 1.35 | 0 | Sub-headlines, panel titles, promotional headers |
| price-display | Merriweather 18 Pt | 2.5rem | 400 | 1 | -0.02em | Pricing figures, numerical emphasis |
| body | Roboto | 1rem | 400 | 1.6 | 0 | Article body copy, descriptions, general content |
| body-small | Roboto | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, terms, captions |
| label | Roboto | 0.75rem | 400 | 1.4 | 0.02em | Badges, metadata, fine print |
| navigation | Roboto | 0.875rem | 400 | 1.5 | 0 | Links, buttons, interactive labels |

Merriweather 18 Pt serves as the editorial voice, lending authority and readability to headlines. Its Regular weight is sufficient for display use at these sizes, avoiding the heaviness that bold serifs can introduce. Roboto handles all functional typography with neutral efficiency. The price display token uses the serif family at a larger scale with tighter leading and tracking, creating a distinctive numerical presence that anchors pricing cards. Navigation and button labels use uppercase transformation with increased letter spacing for clarity at small sizes. Verify licensing for these families before production use. Roboto is designed by Christian Robertson and provided by Google. No designer or vendor attribution is available for Merriweather 18 Pt.

## Layout

The layout system centers content with generous margins and uses contained panels for conversion experiences. The article body occupies a readable central column, while subscription overlays present as modal or inline panels that interrupt without fully obscuring content.

Content containers use a maximum width that preserves comfortable line lengths for reading, approximately 65-75 characters per line for body text. The subscription panel breaks from this constraint, expanding to a wider proportion that accommodates side-by-side pricing tiers and benefit comparisons. Internal padding of 1.5rem creates breathing room within panels without excessive whitespace.

The pricing interface employs a two-column structure: promotional copy and benefit comparisons on the left, pricing cards and conversion actions on the right. This arrangement allows scanning of value propositions before encountering cost, a common pattern in publication paywalls. Benefit rows stack vertically with consistent vertical rhythm, each separated by light horizontal rules.

Spacing follows a 0.25rem base unit. Major section breaks use 4rem, while component internal gaps use 1.5rem. This creates a clear distinction between structural separation and content grouping. The subscription panel floats above article content with sufficient margin to indicate its modal nature without fully disconnecting from the reading context.

## Visual language

The visual character combines editorial restraint with warm commercial appeal. Rounded corners soften what would otherwise be austere functional panels, with 0.75rem radii on major containers and 0.25rem on buttons. The warm cream surface creates an almost parchment-like quality that suggests value and tradition.

Iconography is minimal and functional: checkmarks in success green for included benefits, simple circles for unselected radio options, and a filled circle with checkmark for selected pricing tiers. These elements use thin strokes and modest sizes, avoiding visual weight that would compete with pricing information.

The flash sale badge introduces a secondary yellow tone, slightly deeper than the primary action color, creating a sense of urgency through chromatic variation rather than additional hues. Strikethrough pricing uses muted gray, reducing visual prominence without requiring smaller sizes.

Shadows are absent or extremely subtle, maintaining flatness that keeps attention on content and pricing. The overall effect is of a publication that respects reader attention while clearly communicating the value exchange of subscription.

## Components

### Subscription panel

The subscription panel is the system's most complex and distinctive component, serving as the primary conversion interface.

**Anatomy:** The panel contains a header with login prompt, promotional headline, benefit comparison table, pricing tier cards, primary subscribe button, and secondary explore link.

**Surface:** Background uses surface-warm at full coverage. Border uses border-warm at 1px. Border radius of 0.75rem creates a contained, card-like presence.

**Typography:** Promotional headline uses section-display in ink. Pricing uses price-display for numerals, with body-small for currency labels and period indicators. Benefit labels use body-small in ink, with muted gray for unavailable features marked with × indicators.

**Shape:** The panel itself is a rounded rectangle. Internal pricing cards use canvas background with border-light at 1px and the same 0.75rem radius. Selected pricing tier shows a filled circle with checkmark; unselected shows an empty circle.

**Spacing:** Content padding of 1.5rem on all sides. Internal gap of 1.5rem between left promotional content and right pricing column. Benefit rows have 0.75rem vertical padding with 1px bottom borders.

**Composition:** Two-column layout on wider viewports, with promotional content and benefits left, pricing and actions right. The subscribe button spans full width of the pricing column.

**Variants:** The panel appears both as inline interruption within article flow and as modal overlay. The inline variant shows partial article text above, suggesting continuation. The modal variant presents the complete panel centered with surrounding dimmed context.

### Pricing card

Individual pricing options within the subscription panel.

**Anatomy:** Card header with plan name and badge, price display with original price struck through, period indicator, and selection indicator.

**Surface:** Canvas background with border-light outline. Selected state may use action-primary border or background tint.

**Typography:** Plan name uses body-small with font weight 700. Price uses price-display in ink. Original price uses body-small in text-muted with strikethrough decoration. Period uses body-small in text-muted.

**Shape:** 0.75rem border radius matching parent panel. Internal padding of 1rem.

**Spacing:** Price numerals sit close to currency and period labels, with minimal gap creating tight visual grouping.

### Primary button

The main conversion action.

**Anatomy:** Text label centered within rectangular button.

**Surface:** action-primary background with ink text. No border. Hover state transitions to action-hover.

**Typography:** label token with uppercase transformation, font weight 700, and letter spacing 0.04em for expanded readability.

**Shape:** 0.25rem border radius, creating slight rounding without pill-like exaggeration. Full-width within its container.

**Spacing:** Vertical padding of approximately 1rem, creating substantial clickable area.

### Benefit comparison row

Tabular information within the subscription panel.

**Anatomy:** Feature description, Lite column indicator, Standard column indicator.

**Surface:** Transparent, with 1px bottom border in border-light.

**Typography:** Feature text uses body-small in ink. Column indicators use success-colored checkmarks or muted gray × marks.

**Spacing:** 0.75rem vertical padding per row. Columns align to pricing card positions above.

## Responsive behavior

The subscription panel's two-column layout should stack vertically on narrower viewports, with promotional content and benefits preceding pricing options. The benefit comparison table may require horizontal scroll or simplified presentation if column alignment cannot be maintained.

Pricing cards should maintain full width within their container when stacked, preserving the internal layout of price display and selection indicator. The subscribe button remains full-width in all configurations.

Article body text should maintain comfortable line lengths through padding adjustments rather than font size reduction at moderate widths. Only at narrowest widths should body size decrease to body-small.

The warm panel background should extend to viewport edges on mobile, eliminating visible corner radius and creating immersive conversion focus.

## Practical implementation guidance

### Preserve
- The warm cream surface for subscription contexts; this tonal choice is distinctive and brand-defining
- Serif headlines for editorial authority, particularly in promotional contexts where trust matters
- The tight numerical grouping in price displays, with currency and period labels positioned as suffixes
- Checkmark and × mark system for benefit clarity, using color rather than size for emphasis
- Uppercase, letter-spaced button labels for functional clarity

### Avoid
- Cool gray backgrounds for subscription panels; these undermine the system's warm commercial character
- Bold serif weights for display type; the Regular weight of Merriweather 18 Pt provides sufficient presence
- Excessive corner radius on buttons; the slight 0.25rem rounding maintains editorial seriousness
- Multiple accent colors beyond the yellow-blue system; the restrained palette is intentional

### Recommended build order
1. Establish typography scale with both families at defined sizes
2. Implement color tokens, particularly the warm surface and action colors
3. Build subscription panel as primary component, including pricing cards and benefit rows
4. Create button component with uppercase label treatment
5. Implement article body container with appropriate max-width and padding
6. Add responsive stacking behavior for subscription panel

### Accessibility
- Ensure sufficient color contrast between ink text and surface-warm background; the cream tint should not reduce contrast below WCAG AA thresholds
- Provide visible focus indicators on pricing card selection and subscribe button
- Consider reduced motion preferences for any hover state transitions
- Maintain semantic table structure for benefit comparisons to support screen reader navigation
- Ensure strikethrough pricing is not the sole indicator of discount; the "SAVE 50%" badge provides redundant information

## Scope note

This guide covers the subscription paywall experience and adjacent article content visible in the supplied images. The full publication header, navigation, article listing pages, footer, and authenticated reading experience are not represented. Measurements are practical adaptation targets. Motion, error states, and mobile-specific layouts are not documented. The supplied images show a single article context; other sections of the publication may employ variant treatments.
