# How superscale.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/superscale.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with warm orange gradient background, multi-column link navigation, and white logo mark in upper right](https://pin.fontofweb.com/2975?format=jpg)](https://design.withfudge.com/share/pin-2975)

[Footer section with warm orange gradient background, multi-column link navigation, and white logo mark in upper right](https://design.withfudge.com/share/pin-2975)

[![Comparison section with two-column card layout showing traditional versus Superscale pricing on light gray background](https://pin.fontofweb.com/2974?format=jpg)](https://design.withfudge.com/share/pin-2974)

[Comparison section with two-column card layout showing traditional versus Superscale pricing on light gray background](https://design.withfudge.com/share/pin-2974)

## Overview

Superscale AI presents a marketing technology platform through a visual system that balances warmth and precision. The design communicates energy and approachability through a dominant orange palette while maintaining the clarity expected of a modern SaaS product. The interface relies on generous whitespace, clean geometric typography, and strategic use of gradient backgrounds to create visual hierarchy without decorative excess.

The system operates across two primary modes: a light, neutral canvas for content-heavy sections and a warm, saturated orange environment for brand moments and closing sections. Typography alternates between Geist for impactful headlines and Inter for readable body text and functional labels. Component design favors simple rectangles with modest rounding, letting color and typography carry the visual identity. The overall impression is of a confident, contemporary tool—professional without coldness, energetic without aggression.

## Colors

The color system centers on a warm orange family that serves as both brand identifier and functional accent. Black provides grounding for text and icons, while a light neutral canvas ensures readability across long-form content.

| token | value | use |
|---|---|---|
| action | #E8732A | Primary brand orange; gradient backgrounds, highlighted cards, footer surfaces |
| canvas | #F5F5F5 | Page background for content sections; creates subtle warmth without competing with content |
| ink | #1A1A1A | Primary text; headlines, body copy, icon fills |
| muted-ink | #6B6B6B | Secondary text; descriptions, labels, disabled states |
| surface | #FFFFFF | Card backgrounds, elevated containers, text on dark backgrounds |
| surface-warm | #FEF3E8 | Subtle warm tint for secondary containers; pairs with action for gradient transitions |
| border | #E5E5E5 | Hairline dividers; card outlines on light backgrounds |
| accent-orange-deep | #C45A1A | Darker orange for gradient endpoints, hover states, depth in warm sections |
| accent-orange-light | #F5A623 | Lighter orange for gradient highlights, icon accents, visual energy |

The orange palette functions as a continuous gradient family rather than isolated swatches. The footer demonstrates this through a smooth horizontal gradient that shifts from deeper orange on the left to lighter, more luminous orange on the right. This gradient treatment creates spatial depth and visual movement without additional imagery.

Light sections use the neutral canvas with white cards to establish clarity and focus, particularly for comparison content where readability of detailed pricing information is critical. The dark text on light surfaces provides maximum contrast for data-dense layouts.

## Typography

The type system pairs two families: Geist for display and headline work, Inter for everything functional and readable. This split respects the distinct roles of brand expression and information delivery.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3rem | 600 | 1.1 | -0.02em | Page headlines; marketing claims |
| section-display | Geist | 2.25rem | 600 | 1.15 | -0.01em | Section titles; comparison headers |
| body | Inter | 1rem | 400 | 1.6 | 0em | Paragraphs; descriptions; card content |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0em | Secondary descriptions; metadata |
| label | Inter | 0.75rem | 500 | 1.4 | 0.05em | Category headers; uppercase labels |
| navigation | Inter | 0.875rem | 400 | 1.5 | 0em | Footer links; menu items |

Geist carries the brand voice through its geometric construction and confident weight. The tight tracking on display sizes creates compact, impactful headlines that feel contemporary and intentional. Inter handles the functional load with its proven readability at small sizes and neutral character that does not compete with the orange brand presence.

The label style uses uppercase transformation with positive tracking to create clear category separation, as seen in the comparison section's "EXPERIENCE / TIME INVEST" and "STAFF / CREATORS" headers. This treatment creates hierarchy without size inflation.

Geist is designed by Basementstudio (Andrés Briganti, Mateo Zaragoza) and distributed through Vercel. Inter is designed by Rasmus Andersson. Verify licensing for these families before production use.

## Layout

The layout system follows a centered, contained approach with generous vertical breathing room. Content lives within a maximum width container that prevents line lengths from becoming unwieldy while maintaining comfortable margins on larger viewports.

Section spacing uses 5rem vertical padding to create clear separation between content areas without excessive distance. This rhythm allows the orange footer to feel like a distinct destination rather than a continuation of the preceding content.

The comparison section demonstrates a two-column card layout with equal width containers separated by a 1.5rem gap. Cards align to a shared top edge, creating visual stability that supports the side-by-side evaluation purpose. Internal card spacing uses 1.5rem padding with additional vertical rhythm between content groups.

The footer abandons the contained model for a full-bleed gradient that extends to viewport edges. Within this expansive surface, content organizes into four columns of navigation links with a logo and legal information positioned in the rightmost area. This asymmetric balance—dense link columns on the left, brand mark and sparse legal text on the right—creates visual interest while maintaining scannability.

Grid alignment prioritizes left edges for text content, with icons and labels sharing a consistent starting position within card interiors. Pricing values align to the right within their rows, creating clean vertical lines that facilitate comparison.

## Visual language

The visual identity builds from a foundation of warmth and clarity. The orange palette immediately distinguishes Superscale from the cooler, more clinical aesthetics common to AI and marketing tools. This warmth suggests accessibility and human-centered service rather than opaque automation.

Geometric precision appears in the custom iconography: the Superscale mark uses a stylized flame or upward arrow form rendered in white against orange or orange against white. This mark appears consistently across contexts—footer, comparison cards, and presumably navigation—creating instant brand recognition.

Gradients serve as a signature treatment rather than decorative afterthought. The footer gradient flows horizontally across the full width, suggesting movement and energy that aligns with the "scale" concept in the brand name. This gradient avoids harsh transitions, instead maintaining a smooth, continuous shift that feels organic rather than mechanical.

Icon style throughout the comparison section uses simple line or filled forms in circular containers. The traditional way card employs muted gray icons; the Superscale way card inverts to white icons on the orange gradient background. This consistent icon language with contextual color adaptation reinforces the comparison narrative without requiring additional explanatory text.

Shadow treatment remains minimal or absent in the visible surfaces, relying instead on color contrast and spatial separation to define elevation. The highlighted comparison card uses its orange background as the primary differentiator rather than shadow depth.

## Components

### Comparison card

The comparison card presents structured pricing and feature information in a contained rectangular format.

- **Anatomy**: Card container with internal sections for header (icon, title, description), category labels, and data rows with left-aligned feature names and right-aligned values.
- **Surface**: Default variant uses white background; highlighted variant uses the action orange with gradient depth.
- **Typography**: Title uses section-display weight at body-small size; descriptions use body-small in muted-ink; category labels use label style in uppercase; data rows use body.
- **Shape**: 0.75rem border radius; no visible border on default variant.
- **Spacing**: 1.5rem internal padding; 1rem vertical gap between category sections; 0.75rem between rows within a section.
- **Composition**: Icon positioned left of title; data rows use flex space-between for value alignment.
- **Variants**: Default (white, dark text) for traditional comparison; highlighted (orange gradient, white text) for Superscale positioning.

### Footer

The footer serves as a brand-closing section with navigation utility.

- **Anatomy**: Full-bleed gradient background containing multi-column link grid, brand logo mark, and legal text.
- **Surface**: Horizontal orange gradient from accent-orange-deep left to accent-orange-light right; all text and icons in white.
- **Typography**: Column headers use label style in uppercase with slight opacity reduction; links use navigation style at full opacity.
- **Shape**: No border radius; extends to viewport edges.
- **Spacing**: Generous internal padding (approximately 4rem vertical); 2rem gap between link columns; 1.5rem gap between logo and legal text.
- **Composition**: Four link columns left-aligned; logo and legal information right-aligned in separate vertical stack.
- **Variants**: Single visible state; gradient provides sufficient visual interest without interaction states.

### Data row

The data row appears within comparison cards to present feature-value pairs.

- **Anatomy**: Horizontal container with icon or bullet, feature name, and value text.
- **Surface**: Transparent; inherits card background.
- **Typography**: Feature name uses body; value uses body with right alignment.
- **Shape**: No distinct shape; full-width within card padding.
- **Spacing**: 0.75rem vertical gap between rows; icon and text separated by 0.75rem.
- **Composition**: Flex row with space-between; icon and name grouped left, value positioned right.

## Responsive behavior

The two-column comparison layout should stack vertically on narrower viewports, with the highlighted Superscale card positioned first to reinforce the preferred narrative. Card internal spacing can reduce to 1rem padding on mobile to maximize content area.

Footer navigation columns should collapse to two columns on tablet widths and single column on mobile, maintaining left alignment while allowing the logo and legal text to center or stack below. Gradient background remains full-bleed across all breakpoints.

Typography scales down proportionally: hero-display reduces to 2rem on tablet and 1.75rem on mobile; section-display reduces to 1.75rem and 1.5rem respectively. Body text maintains 1rem minimum for readability.

## Practical implementation guidance

### Preserve
- The warm orange gradient as a brand-defining treatment; it differentiates Superscale from cooler competitors.
- The Geist and Inter pairing; the display/functional split is essential to the system's character.
- The generous whitespace and section rhythm; the interface breathes and avoids the cramped feel of typical marketing sites.
- The uppercase label treatment for category headers; it creates hierarchy without size competition.

### Avoid
- Adding heavy shadows or border treatments; the system relies on color and space for definition.
- Introducing additional accent colors; the orange family carries sufficient energy alone.
- Reducing footer gradient to a flat color; the gradient movement is integral to the brand expression.
- Using the orange background for text-heavy content; reserve it for contained cards and footer surfaces.

### Recommended build order
1. Establish the color tokens and gradient definitions, particularly the orange family and neutral canvas.
2. Implement typography with Geist for headlines and Inter for body, verifying font loading and weight availability.
3. Build the comparison card component with both variants, ensuring proper text color inversion for the highlighted state.
4. Construct the footer with full-bleed gradient and responsive column behavior.
5. Add data row and icon components, verifying alignment and spacing consistency.

### Accessibility
- Ensure white text on orange backgrounds meets WCAG AA contrast requirements; the deeper orange values may require testing.
- Provide visible focus indicators for footer links that maintain brand color consistency.
- Consider reducing gradient intensity or providing a solid fallback for users with vestibular sensitivities.
- Maintain minimum 1rem body text size across all viewport sizes for readability.

## Scope note

This guide covers the marketing page surface visible in the supplied images, including the comparison section and footer. Navigation header, hero section, pricing tables, form interactions, and motion behavior are not represented. Measurements are practical adaptation targets based on visible proportions.
