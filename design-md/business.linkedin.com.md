# How business.linkedin.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/business.linkedin.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large headline, blue CTA button, and three rounded feature cards in warm tones with illustration](https://pin.fontofweb.com/4086?format=jpg)](https://design.withfudge.com/share/pin-4086)

[Hero section with large headline, blue CTA button, and three rounded feature cards in warm tones with illustration](https://design.withfudge.com/share/pin-4086)

[![Resource section with left-aligned heading and two content cards with illustrations and blue text links on light gray background](https://pin.fontofweb.com/4085?format=jpg)](https://design.withfudge.com/share/pin-4085)

[Resource section with left-aligned heading and two content cards with illustrations and blue text links on light gray background](https://design.withfudge.com/share/pin-4085)

[![Differentiators section with two large white cards on pale blue-gray background and three dark statistic bars at bottom](https://pin.fontofweb.com/4084?format=jpg)](https://design.withfudge.com/share/pin-4084)

[Differentiators section with two large white cards on pale blue-gray background and three dark statistic bars at bottom](https://design.withfudge.com/share/pin-4084)

[![Product comparison section with three tiered cards in blue, cream, and warm yellow with white lower sections and blue CTAs](https://pin.fontofweb.com/4083?format=jpg)](https://design.withfudge.com/share/pin-4083)

[Product comparison section with three tiered cards in blue, cream, and warm yellow with white lower sections and blue CTAs](https://design.withfudge.com/share/pin-4083)

## Overview

The LinkedIn Business design system presents a polished, approachable B2B marketing experience built around clarity and trust. The visual language pairs generous white space with warm, rounded card shapes that soften the corporate tone. A restrained palette of LinkedIn's signature blue, warm neutrals, and cream tones creates hierarchy without visual noise. Typography relies entirely on Source Sans Pro across all weights, from light display headings to semibold labels, ensuring consistency at every scale. The system favors pill-shaped containers for feature highlights, rounded rectangles for product tiers, and full-bleed statistic bars for social proof. Illustrations in a flat, friendly style reinforce the human-centered messaging throughout.

## Colors

The color system is built on a foundation of professional neutrals with strategic warm accents and LinkedIn's recognizable blue for action elements.

| token | value | use |
|---|---|---|
| action | #0073b1 | Primary buttons, text links, interactive elements |
| action-hover | #005f8d | Darker blue for hover states on action elements |
| ink | #000000 | Primary headings, body text, high-emphasis content |
| muted-ink | #595959 | Secondary text, descriptions, card body copy |
| canvas | #f3f2ef | Page background, section separators |
| surface | #ffffff | Card backgrounds, content containers, text on dark |
| surface-warm | #fce2b6 | Feature highlight cards, premium tier accents |
| surface-cream | #f5f0e6 | Secondary feature cards, mid-tier product headers |
| surface-blue | #dce6f1 | Base tier product cards, subtle information panels |
| surface-green | #e6f0e6 | Tertiary feature accents, success states |
| border | #e0e0e0 | Subtle dividers, card outlines |
| border-action | #0073b1 | Outlined secondary button borders |
| stat-dark | #1d2b3a | Primary statistic bar background |
| stat-mid | #56687a | Secondary statistic bar background |
| stat-light | #7a8fa3 | Tertiary statistic bar background |

The palette operates in three modes: light mode dominates with white and warm surfaces on a soft gray canvas; dark mode appears only in the statistic bars where white text reverses out of deep navy and slate backgrounds; and accent mode deploys warm yellows and creams to draw attention to specific product tiers or feature highlights. The blue action color is reserved exclusively for interactive elements, creating a clear behavioral signal across the interface.

## Typography

All text is set in Source Sans Pro, a humanist sans-serif that balances professionalism with approachability. The type scale is intentionally restrained, with light weights for display and regular to semibold for functional text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Source Sans Pro | 3rem | 300 | 1.15 | -0.01em | Page hero headlines |
| section-display | Source Sans Pro | 2rem | 300 | 1.2 | 0 | Section headings, card titles |
| body | Source Sans Pro | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions |
| body-medium | Source Sans Pro | 1rem | 600 | 1.5 | 0 | Emphasized body, statistics |
| label | Source Sans Pro | 0.875rem | 600 | 1.4 | 0.01em | Buttons, tags, navigation |
| navigation | Source Sans Pro | 1rem | 600 | 1.5 | 0 | Primary navigation links |
| legal-copy | Source Sans Pro | 0.75rem | 400 | 1.5 | 0 | Footnotes, attributions |

Verify licensing for these families before production use. The font is provided by Adobe Systems Incorporated and designed by Paul D Hunt.

## Layout

The layout follows a centered, contained model with generous breathing room. Maximum content width appears to be approximately 1200px, with consistent horizontal padding of roughly 2rem on smaller viewports expanding to wider margins on desktop.

Sections stack vertically with substantial separation of 5rem between major content blocks. The hero section uses an asymmetric two-column layout: large display text and a primary CTA occupy the left portion, while an illustration fills the right. Below the hero, a three-column feature strip spans the full width with overlapping pill-shaped cards that create visual continuity across the section.

Content sections alternate between full-bleed colored backgrounds (light gray canvas) and white surfaces. The product comparison section uses a three-column grid with equal-width cards that share vertical alignment in their headers but allow body content to vary in height. Statistic bars at the bottom of sections use a three-column layout with equal distribution and consistent internal padding.

Spacing within components follows a 0.25rem base unit. Card padding is consistently 2rem, with internal element spacing at 1.5rem. The system avoids tight packing, preferring clarity through generous whitespace.

## Visual language

The visual identity is defined by rounded, organic shapes that contrast with the precision of the underlying grid. Pill-shaped containers are the signature element, appearing in feature strips and potentially in navigation or tags. These full-rounded forms create a friendly, approachable character that distinguishes the marketing experience from more angular product interfaces.

Illustrations follow a flat, geometric style with limited depth, using the same warm palette as the UI elements. Figures are simplified with minimal detail, focusing on posture and activity rather than facial features. This style scales well across card sizes and maintains consistency with the clean typography.

Shadows are minimal or absent; the system relies on color contrast and spacing to create hierarchy rather than elevation effects. Borders are thin and neutral when they appear, primarily serving to define secondary button outlines.

The warm accent colors—soft yellow, cream, and pale green—are deployed strategically to differentiate content tiers or feature categories. These tones prevent the interface from feeling sterile while maintaining professional restraint.

## Components

### Primary Action Button
- **Anatomy**: Text label centered within a solid blue container
- **Surface and text color**: Blue background (#0073b1) with white text
- **Typography**: Label token, semibold at 0.875rem
- **Shape**: Full pill (9999px border radius)
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Inline or stacked with generous surrounding whitespace
- **Variants**: Appears in hero (larger context), card footers, and section bottoms

### Secondary Action Button
- **Anatomy**: Text label within a white container with blue border
- **Surface and text color**: White background with blue text and border
- **Typography**: Label token, semibold
- **Shape**: Full pill with 1px solid border
- **Spacing**: Same padding as primary
- **Composition**: Used when multiple actions compete for attention or for lower-priority CTAs

### Feature Card (Pill)
- **Anatomy**: Rounded container with headline and subheadline stacked vertically
- **Surface and text color**: Warm yellow (#fce2b6), cream (#f5f0e6), or pale green (#e6f0e6) background with black text
- **Typography**: Section display for headline, body for description
- **Shape**: Full pill shape with extreme border radius
- **Spacing**: 2rem to 2.5rem internal padding
- **Composition**: Three cards arranged horizontally with slight overlap or tight grouping; text left-aligned within each pill

### Product Tier Card
- **Anatomy**: Two-part vertical structure with colored header and white body
- **Surface and text color**: Header in blue, cream, or warm yellow; body always white with muted gray text
- **Typography**: Section display for product name in header, body for descriptions, label for section headers like "Who it's best for"
- **Shape**: Rounded rectangle (0.5rem radius) with flat boundary between header and body
- **Spacing**: 2rem padding in both header and body sections
- **Composition**: Three cards in equal-width columns with consistent header height; body content varies in length
- **Variants**: Blue header for base tier, cream for mid-tier, warm yellow for premium tier

### Statistic Bar
- **Anatomy**: Dark container with icon, large number, and description stacked vertically
- **Surface and text color**: Dark navy (#1d2b3a), slate (#56687a), or muted blue-gray (#7a8fa3) background with white text
- **Typography**: Body-medium for numbers and labels, body for descriptions
- **Shape**: Sharp rectangle, no border radius
- **Spacing**: 1.5rem vertical padding, 2rem horizontal padding
- **Composition**: Three bars in equal columns spanning full width

### Resource Card
- **Anatomy**: White container with illustration at top, headline, description, and text link below
- **Surface and text color**: White or very light gray background with dark text; blue text link
- **Typography**: Body-medium for headline, body for description, label style for link
- **Shape**: Subtle rounded corners (0.5rem)
- **Spacing**: Illustration bleeds to edges; text content padded internally
- **Composition**: Two cards side by side with left-aligned section heading to the left or above

## Responsive behavior

The design should maintain its generous proportions on larger screens while adapting gracefully to narrower viewports. The three-column layouts for feature pills, product cards, and statistic bars should stack to single columns on mobile, preserving internal padding and text alignment. Hero illustrations may drop below the headline and CTA on narrow screens. Pill-shaped feature cards should remain full-width on mobile to maintain readability, with text centered or left-aligned depending on context. Font sizes may scale down slightly on mobile, with hero display reducing to approximately 2rem and section display to 1.5rem.

## Practical implementation guidance

### Preserve
- The warm accent palette for feature differentiation; these tones are central to the brand expression
- Full pill shapes for primary feature highlights; this is the most distinctive visual element
- Generous whitespace between sections; the breathing room conveys confidence and clarity
- Consistent card padding at 2rem across all component types
- Source Sans Pro as the sole typeface; mixing fonts would break the unified voice

### Avoid
- Adding drop shadows to cards; the system relies on color and spacing, not elevation
- Using the action blue for non-interactive elements; reserve it for buttons and links
- Tightening the border radius on pill shapes; the extreme rounding is intentional
- Placing dark statistic bars against white backgrounds without adequate section separation
- Using weights heavier than 600; the system stays in light to semibold range

### Recommended Build Order
1. Establish the color tokens and typography scale in CSS custom properties
2. Build the button components (primary and secondary) as they appear most frequently
3. Create the pill-shaped feature card with its extreme border radius
4. Implement the two-part product tier card with colored header and white body
5. Add the statistic bar component with its three color variants
6. Compose page sections using the container, spacing, and background color tokens

### Accessibility
- Ensure all text on warm backgrounds meets WCAG contrast minimums; the yellow (#fce2b6) with black text should be verified
- Maintain the blue action color for all interactive elements to support color-based affordance recognition
- Provide focus indicators that match the pill shape for keyboard navigation
- Consider reduced motion preferences for any hover or transition effects on buttons

## Scope note

This guide covers the LinkedIn Business marketing page surface for talent solutions, including hero sections, feature highlights, product comparisons, resource listings, and social proof statistics. Mobile breakpoints, form validation states, loading skeletons, and dark mode beyond the statistic bars are not included. Measurements are practical adaptation targets derived from the supplied images.
