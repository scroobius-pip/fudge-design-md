# How selkie.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/selkie.design-design)

Last updated: 2026-08-10

## Captured pages

[![Substage product page showing six feature cards with emoji icons on deep navy background, featuring cream text and a subtle top border gradient bar](https://pin.fontofweb.com/8748?format=jpg)](https://design.withfudge.com/share/pin-8748)

[Substage product page showing six feature cards with emoji icons on deep navy background, featuring cream text and a subtle top border gradient bar](https://design.withfudge.com/share/pin-8748)

[![Selkie Design homepage with two app showcase cards against a teal-to-blue gradient, featuring rounded app icons and white pill-shaped Learn more buttons](https://pin.fontofweb.com/8700?format=jpg)](https://design.withfudge.com/share/pin-8700)

[Selkie Design homepage with two app showcase cards against a teal-to-blue gradient, featuring rounded app icons and white pill-shaped Learn more buttons](https://design.withfudge.com/share/pin-8700)

## Overview

Selkie Design presents a dark, immersive visual system built around atmospheric depth and approachable warmth. The design language centers on near-black backgrounds that let product imagery and gradient accents command attention. Typography relies exclusively on SF Pro Rounded, whose softened letterforms reinforce the friendly, accessible tone of indie Mac and iOS utilities. The system uses a restrained palette: deep navy and black surfaces, warm cream highlights, and a signature teal-to-cobalt gradient that appears as a horizontal accent bar. Product pages organize content into card grids with emoji-style icons, while the homepage showcases apps through large rounded icons and centered descriptions. Every element feels intentionally rounded, from the 16px button corners to the circular app icon containers, creating visual consistency that reads as modern and unthreatening.

## Colors

The color system operates in a dark-first mode with warm accents that prevent the interface from feeling cold or clinical.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Primary page background, feature card fills |
| surface | `#192E55` | Deep navy for gradient endpoints and depth layers |
| surface-elevated | `#2583AB` | Mid-tone blue for gradient midpoints |
| accent-teal | `#38ABAD` | Gradient starting point, teal accent moments |
| cream | `#FFF7EC` | Warm off-white for borders, button fills, highlighted numerals |
| ink | `#FFFFFF` | Primary text color on all dark backgrounds |

The gradient `linear-gradient(#38ABAD 0%, #2583AB 5%, #192E55 100%)` creates a horizontal atmospheric bar that spans the top of feature sections, evoking a horizon line or aurora effect against the dark canvas. This gradient appears as a subtle 1px top border on feature cards in the Substage page, translating the full gradient into a hairline accent. The cream color serves dual purposes: as a warm alternative to pure white for borders and highlights, and as the fill for primary action buttons where it provides strong contrast against dark backgrounds. No light-mode variant is visible in the supplied surfaces; the system appears designed for permanent dark presentation.

## Typography

The type system uses a single family with weight and size variation to establish hierarchy. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Sf Pro Rounded | 2rem | 700 | 1.2 | 0 | Page titles, major headlines |
| section-display | Sf Pro Rounded | 1.5rem | 700 | 1.2 | 0 | Feature card headings, app names |
| body | Sf Pro Rounded | 1rem | 400 | 1.5 | 0 | Descriptions, navigation, button labels |
| body-light | Sf Pro Rounded | 1rem | 300 | 1.5 | 0 | Long-form feature descriptions |
| label | Sf Pro Rounded | 1.17rem | 200 | 1.2 | 0 | Subheadings, secondary labels |
| feature-number | Sf Pro Rounded | 2.625rem | 400 | 1.19 | 0 | Large decorative numerals or stats |

The rounded letterforms of SF Pro Rounded give headlines a friendly, almost playful character that distinguishes the brand from more utilitarian tech products. Weight 700 appears reserved for the most prominent headings, while body text alternates between 400 and 300 depending on density and context. The 1.5 line height on body copy ensures readability even in the lighter weight. No italic styles or condensed variants are present in the supplied surfaces.

## Layout

The layout system favors centered, single-column presentations for hero content and multi-column grids for feature breakdowns.

Page containers use horizontal padding of `1.5rem` (24px) with generous vertical margins of `4rem` (64px) between major sections. The homepage presents two app showcase cards side by side, each centered within its column with consistent internal spacing. Feature pages like Substage use a three-column grid for six feature cards, arranged in two rows. Cards within these grids maintain internal padding of `1.5rem` and are separated by gaps that visually read as approximately `3rem`.

The app showcase cards on the homepage stack vertically: large rounded icon at top, app name in section-display weight, one-line tagline in lighter weight, descriptive paragraph in body weight, platform indicator icon, and finally the pill-shaped action button. This vertical rhythm creates clear scannable zones. Feature cards on product pages follow a tighter pattern: emoji-style icon, bold heading, then body-light description, all left-aligned within the card.

Vertical spacing between typographic elements follows predictable patterns: `2rem` (32px) above major headings, `1rem` (16px) between paragraphs and related elements, and `3rem` (48px) between card rows or major content blocks.

## Visual language

The visual language balances technical credibility with approachable warmth. Dark backgrounds dominate, creating a theater-like presentation where colorful app icons and gradient accents become focal points. The rounded aesthetic extends beyond typography into every interactive element: buttons are full pills, app icons live in squircle containers with generous corner radii, and even the conceptual illustrations use soft, friendly forms.

Product imagery favors isometric or perspective app icons with dimensional lighting, suggesting physical objects on a digital shelf. The Substage icon uses a dark field with a glowing gradient chevron; Hour by Hour uses a colorful radial clock face. These icons are presented at substantial scale, roughly 200px or larger, making them the dominant visual element in their cards.

The gradient accent serves as the system's signature motion-like element. Even when reduced to a 1px top border, it introduces color temperature variation that prevents the dark interface from feeling flat. The cream color choice for borders and buttons deliberately avoids the sterility of pure white, adding a warmth that complements the rounded forms.

Iconography in feature cards uses emoji-style graphics rather than line icons, reinforcing the conversational, accessible tone. These appear at approximately 40px scale, positioned above headings with adequate breathing room.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Cream (`#FFF7EC`) fill with no visible border
- **Typography**: `{typography.body}` in black (`#000000`) text
- **Shape**: `1rem` (16px) border radius creating full pill
- **Spacing**: `0.5rem` vertical padding, `2rem` horizontal padding
- **Composition**: Centered within its container, typically below descriptive text
- **Variants**: The homepage shows this as a "Learn more" action; no disabled or loading states are visible

### App showcase card

- **Anatomy**: Large app icon, app name, tagline, description paragraph, platform icon, primary button
- **Surface**: Transparent background allowing page gradient to show through
- **Typography**: App name in `{typography.section-display}`, tagline in `{typography.label}`, description in `{typography.body}`
- **Spacing**: Generous internal spacing with `1rem` gaps between text elements
- **Composition**: All elements center-aligned, creating a symmetrical presentation
- **Variants**: Two-column layout on homepage; no single-column variant visible

### Feature card

- **Anatomy**: Emoji-style icon, bold heading, description paragraph
- **Surface**: Black (`#000000`) fill with 1px cream top border that carries the gradient accent
- **Typography**: Heading in `{typography.section-display}`, description in `{typography.body-light}`
- **Shape**: No visible border radius on cards themselves; rectangular with full-bleed top border
- **Spacing**: `1.5rem` internal padding
- **Composition**: Left-aligned text below centered or left-aligned icon
- **Variants**: Three-column grid layout; no hover or expanded states visible

### Gradient accent bar

- **Anatomy**: Horizontal rule spanning full container width
- **Surface**: `linear-gradient(#38ABAD 0%, #2583AB 5%, #192E55 100%)`
- **Shape**: 1px height, creating a hairline with color depth
- **Use**: Top border on feature cards, or potentially as section dividers

## Responsive behavior

The supplied surfaces show desktop presentations only. Based on the visible layouts, the three-column feature grid should collapse to two columns on tablet and single column on mobile, maintaining card internal spacing. The two-column app showcase on the homepage should stack vertically on narrower viewports, with each card remaining centered.

The large app icons should scale down proportionally, potentially to 120px on tablet and 80px on mobile, while maintaining their visual dominance. Typography should remain at readable sizes; the hero-display at 2rem already provides a conservative base that should not require reduction.

The gradient accent bar should remain full-width at all breakpoints, as it functions as a horizontal atmospheric element rather than a contained component.

## Practical implementation guidance

### Preserve
- The dark-first presentation with near-black backgrounds; this is central to the brand atmosphere
- The rounded, friendly character of SF Pro Rounded throughout all text elements
- The cream (`#FFF7EC`) as the warm alternative to pure white for borders and buttons
- The signature teal-to-navy gradient as a consistent accent mechanism
- Large, dimensional app icons as the primary visual focus on product pages

### Avoid
- Sharp-cornered buttons or cards; the rounded aesthetic is consistent across all surfaces
- Pure white backgrounds or light-mode presentations; the system is designed for dark immersion
- Multiple font families; the single-family approach is intentional and distinctive
- Thin line icons in feature cards; the emoji-style illustrations establish the approachable tone

### Recommended build order
1. Establish the dark canvas and gradient accent system
2. Implement SF Pro Rounded with the full weight and size scale
3. Build the primary button component with cream fill and pill shape
4. Create the app showcase card layout for homepage presentation
5. Develop the feature card grid with gradient top border
6. Add product-specific imagery and emoji-style icons

### Accessibility
- Ensure cream buttons on dark backgrounds meet contrast requirements; the `#FFF7EC` on `#000000` should exceed WCAG AA for normal text
- Consider focus indicators that maintain the rounded aesthetic, such as 2px cream outlines with 2px offset
- The light weights (200, 300) used in labels and descriptions should be tested at small sizes; consider minimum 16px for weight 200 text
- Gradient accent bars should not be the sole indicator of interactive state; pair with visible text labels

## Scope note

This guide covers the Selkie Design homepage and Substage product page surfaces. Mobile breakpoints, animation, hover states, form components, and additional product pages are not represented in the supplied materials. The font size of 18.72px for label tokens reflects an exact extracted value that may derive from browser rendering of a relative size.
