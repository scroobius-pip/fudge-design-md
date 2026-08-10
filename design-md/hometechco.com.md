# How hometechco.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hometechco.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with warm amber gradient background, logo, navigation links, legal disclaimer, and social icons on dark canvas](https://pin.fontofweb.com/3345?format=jpg)](https://design.withfudge.com/share/pin-3345)

[Footer section with warm amber gradient background, logo, navigation links, legal disclaimer, and social icons on dark canvas](https://design.withfudge.com/share/pin-3345)

[![FAQ accordion with dark background, white question text, muted answer text, and amber open-state indicator icon](https://pin.fontofweb.com/3344?format=jpg)](https://design.withfudge.com/share/pin-3344)

[FAQ accordion with dark background, white question text, muted answer text, and amber open-state indicator icon](https://design.withfudge.com/share/pin-3344)

[![Specs grid with four dark gray cards showing Display, Speaker, Webcam, and Connectivity categories with white headings](https://pin.fontofweb.com/3343?format=jpg)](https://design.withfudge.com/share/pin-3343)

[Specs grid with four dark gray cards showing Display, Speaker, Webcam, and Connectivity categories with white headings](https://design.withfudge.com/share/pin-3343)

[![Hero banner with warm interior photography, large centered white headline, and amber pill-shaped sign-up button](https://pin.fontofweb.com/3342?format=jpg)](https://design.withfudge.com/share/pin-3342)

[Hero banner with warm interior photography, large centered white headline, and amber pill-shaped sign-up button](https://design.withfudge.com/share/pin-3342)

## Overview

Home Tech presents a single-product landing experience for the Home Display, a smart monitor designed for healthier work. The visual system leans heavily into dark surfaces with selective warmth: near-black backgrounds dominate, while amber gold accents signal action and brand identity. The photography favors natural interiors with warm wood tones and soft daylight, creating a domestic, approachable mood that contrasts with typical tech-product coldness. Typography is handled entirely by a single grotesk family in medium weight, giving the interface a calm, confident neutrality. The overall composition is spacious and vertically rhythmic, with generous section padding and clear hierarchical separation between product claims, specifications, and conversion moments. The design avoids visual noise—no heavy shadows, no gradients on UI elements, no border radii beyond subtle panel rounding and full pill shapes for calls to action.

## Colors

| token | value | use |
|---|---|---|
| canvas | #0D0D0D | Primary page background, deepest surface |
| surface | #2A2A2A | Card backgrounds, elevated panels |
| surface-elevated | #333333 | Hover states, subtle elevation on dark UI |
| ink | #FFFFFF | Primary text, headings, active accordion questions |
| ink-muted | #A3A3A3 | Secondary text, FAQ answers, spec descriptions |
| action | #D4A03A | Primary buttons, open-state accordion indicators, logo accent |
| action-hover | #E5B54A | Button hover state, interactive amber brightening |
| border | #4A4A4A | Visible dividers, rule lines between FAQ items |
| border-subtle | #3A3A3A | Card internal separators, spec list dividers |

The color model is fundamentally dark-mode with a warm accent. The canvas sits at very low luminance, creating a cinematic depth that makes product photography and white typography pop. Amber appears sparingly: on the primary call-to-action button, the open-state accordion icon, and as a gradient wash in the footer area. This restraint prevents the warm tone from overwhelming the sophisticated darkness. Muted gray text serves functional secondary content without competing for attention. The border colors are deliberately subdued, functioning as structural hairlines rather than visual elements in their own right. No light-mode variant is visible in the supplied material.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Overused Grotesk | 4rem | 500 | 1.1 | -0.02em | Main headline over hero photography |
| section-display | Overused Grotesk | 2rem | 500 | 1.2 | -0.01em | Section headings: Specs, FAQ |
| body | Overused Grotesk | 1rem | 500 | 1.6 | 0em | Primary body text, navigation links |
| body-small | Overused Grotesk | 0.875rem | 500 | 1.5 | 0em | Spec card descriptions, FAQ answers |
| label | Overused Grotesk | 0.875rem | 500 | 1.4 | 0em | Button labels, category tags |
| legal-copy | Overused Grotesk | 0.75rem | 500 | 1.5 | 0.02em | Footer disclaimer, copyright |

The type system is extremely restrained: one family, one weight, with size and tracking as the only variables. Overused Grotesk Medium carries all communication, from the largest hero headline to the smallest legal disclaimer. This uniformity creates a quiet confidence appropriate for a premium hardware product. Negative tracking on display sizes tightens the headlines without feeling compressed. The medium weight avoids the harshness of bold while maintaining enough presence for white-on-dark readability. Body text uses a comfortable 1.6 line height for extended reading, while labels and legal copy compress slightly for their functional roles. Verify licensing for these families before production use.

## Layout

The page follows a single-column flow with contained width and strategic full-bleed moments. The hero section spans the full viewport width with a photographic background, centered text, and a single conversion button. Below this, content sections appear to use a consistent maximum width with generous horizontal padding, creating a contained reading experience that contrasts with the immersive hero.

The Specs section employs a two-column grid at desktop widths, with four cards arranged in a 2x2 formation. Each card maintains internal vertical stacking: category heading, then a list of specifications separated by subtle horizontal rules. Grid gaps between cards appear substantial, preventing the dense information from feeling cramped.

The FAQ section returns to a single-column layout, with each question as a full-width row. The accordion pattern places the question text left-aligned and the toggle icon right-aligned, with answer text expanding below the question on open state. A thin top border on each item creates rhythmic separation without additional background changes.

The footer inverts the vertical rhythm with a large gradient wash of amber-to-dark, containing the logo, navigation links, legal text, and social icons in a structured but spacious arrangement. The logo and links sit in the upper portion, while legal disclaimers and copyright anchor the bottom with a horizontal rule separating the two zones.

Section spacing appears generous, with approximately 6rem between major content blocks. Internal card padding sits around 1.5rem, and content gaps within cards measure roughly 1rem between heading and first specification.

## Visual language

Photography plays a central role in establishing the product's emotional territory. The hero image shows warm interior architecture—wood-framed windows with garden views—bathed in soft natural light. This is not product photography in the traditional sense; no device is visible, only the environment the product is meant to inhabit. The warm amber and ochre tones of the wood echo the brand accent color, creating subconscious cohesion between image and interface.

The logo combines a wave-like symbol with the wordmark "Home Technologies," with the symbol appearing in the amber accent against the dark background. Social icons in the footer use simple line treatments, maintaining the understated aesthetic.

There is no visible iconography beyond functional UI elements: the plus/minus accordion toggles, the arrow on the sign-up button, and the X and Instagram social marks. No illustrations, no decorative graphics, no background patterns. The visual language depends on the interplay of darkness, warm photography, and precise typography.

The amber accent functions as a signal color: it appears where the user should act. This creates a clear visual hierarchy where white text informs, gray text supports, and amber invites interaction.

## Components

### Primary action button

- **Anatomy**: Text label with right-aligned arrow icon, contained in a pill shape
- **Surface**: Solid amber fill (#D4A03A) with dark text
- **Typography**: Label token, medium weight
- **Shape**: Full pill border radius (9999px)
- **Spacing**: Comfortable horizontal and vertical padding, approximately 0.75rem vertical and 1.5rem horizontal
- **Composition**: Centered in hero section, isolated from other elements to maximize prominence
- **Variants**: Hover state brightens to action-hover (#E5B54A)

### FAQ accordion item

- **Anatomy**: Question text left, toggle icon right, expandable answer below
- **Surface**: Transparent background, top border only
- **Typography**: Question uses body token in white; answer uses body-small in ink-muted
- **Shape**: Full-width row with no side borders or background change on open
- **Spacing**: Generous vertical padding within each item, approximately 1.5rem
- **Composition**: Stacked vertically with no gaps between items
- **Variants**: Closed state shows plus icon in white; open state shows X icon in amber, with answer text revealed below

### Spec card

- **Anatomy**: Category heading, followed by specification list with horizontal rule separators
- **Surface**: Dark gray background (#2A2A2A) with subtle rounded corners
- **Typography**: Heading uses section-display token; specifications use body-small token
- **Shape**: Rounded panel corners (approximately 0.75rem)
- **Spacing**: Internal padding of approximately 1.5rem; specification items separated by 1px rules with subtle border color
- **Composition**: Four cards in 2x2 grid at desktop, equal widths with consistent gaps
- **Variants**: No visible hover or active states in supplied material

### Footer

- **Anatomy**: Logo and wordmark, navigation links, horizontal rule, legal disclaimer, copyright, social icons
- **Surface**: Gradient wash from amber to dark across the upper portion, settling to near-black at bottom
- **Typography**: Navigation links use body token; legal text uses legal-copy token
- **Shape**: Large rounded panel containing all footer content, with the gradient extending beyond
- **Spacing**: Substantial internal padding; clear vertical separation between link group and legal group
- **Composition**: Logo and links left-aligned; email address right-aligned in upper zone; legal text left-aligned, social icons right-aligned in lower zone

## Responsive behavior

The supplied images show desktop-width layouts. Based on the visible structure, several responsive adaptations are recommended:

At narrower viewports, the 2x2 spec grid should collapse to a single column, maintaining card internal structure but stacking vertically. The hero headline should reduce in size, likely to the section-display token, to prevent overflow on small screens. The footer layout should stack: logo and email on separate lines, navigation links in a vertical list, and legal text with social icons in a simplified arrangement.

The FAQ accordion pattern translates directly to mobile without structural change, though touch targets should maintain minimum 44px height for the toggle area. The pill button should remain centered and may require full-width treatment on the narrowest viewports to preserve tapability.

No breakpoint values are visible in the material; standard ranges (768px for tablet, 1024px for desktop refinement) should be tested against the content density.

## Practical implementation guidance

### Preserve
- The dark canvas as the dominant surface; light-mode inversion would fundamentally alter the brand character
- Single-family typography system; introducing additional weights or families would break the calm uniformity
- Amber accent restraint; limit to interactive elements and brand moments
- Generous section spacing; the breathing room is essential to the premium feel
- Photography with warm, natural interiors; cold or studio product shots would mismatch the established mood

### Avoid
- Adding shadows to cards or buttons; the flat darkness is intentional
- Using borders as decorative elements; keep them structural and subtle
- Introducing gradient fills on UI components beyond the footer wash
- Making the amber accent larger or more frequent; it functions through scarcity

### Recommended build order
1. Establish the dark canvas and typography system first; these define the visual foundation
2. Implement the hero section with photography and centered conversion button
3. Build the spec card component with proper grid behavior
4. Create the FAQ accordion with open/close state management
5. Construct the footer with gradient treatment and responsive stacking
6. Fine-tune spacing and responsive breakpoints

### Accessibility
- White text on near-black canvas provides excellent contrast; maintain this for all primary content
- Amber on dark for buttons should be verified against WCAG AA standards for small text; the arrow icon may need additional treatment if it conveys meaning independently
- Accordion toggle icons should have accessible labels indicating expand/collapse state
- Focus indicators should be visible against dark backgrounds; consider using the amber accent for focus rings
- Ensure the gradient footer does not reduce text contrast below acceptable thresholds at any point

## Scope note

This guide covers the landing page experience for the Home Display product, including hero, specifications, FAQ, and footer sections. Mobile layouts, additional pages, checkout flows, motion design, and form validation states are not represented in the supplied material. Measurements are practical adaptation targets derived from visible proportions.
