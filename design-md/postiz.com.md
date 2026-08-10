# How postiz.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/postiz.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large Plus Jakarta Sans headline, social platform icon row, and product screenshot on purple gradient background](https://pin.fontofweb.com/7536?format=jpg)](https://design.withfudge.com/share/pin-7536)

[Hero section with large Plus Jakarta Sans headline, social platform icon row, and product screenshot on purple gradient background](https://design.withfudge.com/share/pin-7536)

[![Pricing page with four-tier card layout featuring gradient-highlighted Pro plan and pill-shaped toggle](https://pin.fontofweb.com/7537?format=jpg)](https://design.withfudge.com/share/pin-7537)

[Pricing page with four-tier card layout featuring gradient-highlighted Pro plan and pill-shaped toggle](https://design.withfudge.com/share/pin-7537)

[![Footer CTA section with oversized purple Postiz wordmark, social links, and multi-column footer navigation](https://pin.fontofweb.com/7538?format=jpg)](https://design.withfudge.com/share/pin-7538)

[Footer CTA section with oversized purple Postiz wordmark, social links, and multi-column footer navigation](https://design.withfudge.com/share/pin-7538)

## Overview

Postiz presents a dark-mode SaaS identity built on near-black canvas surfaces, high-contrast white typography, and selective purple gradient accents. The visual system prioritizes clarity and conversion through generous whitespace, rounded pill-shaped interactive elements, and a clear typographic hierarchy that separates display headlines from functional body text. The homepage establishes immediate product context with a bold hero statement, a dense row of social platform icons, and a prominent product screenshot framed by a vibrant purple gradient. The pricing page translates this language into a four-tier card system where the recommended plan receives a full gradient treatment. Throughout, the design maintains a consistent dark atmosphere that lets the purple accent and white typography carry the brand energy.

## Colors

The palette is intentionally restrained: a near-black family for surfaces, pure white for primary content, and a single purple gradient family for accents and highlights.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest surface |
| surface | #0E0E0E | Elevated panels, card backgrounds |
| surface-elevated | #1A1919 | Footer sections, secondary containers |
| ink | #FFFFFF | Primary text, headings, borders |
| muted-ink | #D1D1D1 | Secondary body text, descriptions |
| accent-purple | #682EE1 | Gradient start, highlight surfaces |
| accent-purple-deep | #2A0772 | Gradient end, deep purple accents |
| action-primary | #FFFFFF | Primary button fill, light surfaces |
| action-secondary | #3E3E3E | Subtle button fills, inactive states |

The dark canvas creates a theatrical backdrop that makes the white typography and purple gradients feel luminous. The purple gradient appears as a linear sweep from #682EE1 to #2A0772, used most prominently on the highlighted pricing card and as a frame behind product screenshots. White borders at 1px serve as subtle dividers on pricing cards and navigation elements, maintaining structure without visual weight. The muted gray #D1D1D1 appears sparingly for secondary descriptions, preserving the high-contrast relationship between ink and canvas for all primary content.

## Typography

Two families drive the typographic system: Plus Jakarta Sans for display headlines and Dm Sans 9 Pt for all body, label, and navigation text. Plus Jakarta Sans carries the brand voice with confident, geometric letterforms at large sizes. Dm Sans 9 Pt provides neutral, highly legible texture for reading and interface elements.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Plus Jakarta Sans | 4.375rem | 800 | 1.1 | normal | Homepage hero headline |
| section-display | Plus Jakarta Sans | 3.75rem | 700 | 1.1 | normal | Section headlines, pricing page title |
| price-display | Plus Jakarta Sans | 3.75rem | 600 | 1.1 | normal | Pricing dollar amounts |
| price-unit | Plus Jakarta Sans | 1.5rem | 600 | 1.1 | normal | Pricing interval suffix |
| body-large | Dm Sans 9 Pt | 1.375rem | 400 | 1.3 | normal | Hero descriptions, lead paragraphs |
| body | Dm Sans 9 Pt | 1rem | 400 | 1.5 | normal | General paragraphs, lists |
| body-medium | Dm Sans 9 Pt | 1.125rem | 400 | 1.3 | normal | Navigation, secondary descriptions |
| label | Dm Sans 9 Pt | 1rem | 500 | 1.3 | normal | Buttons, tags, emphasized labels |
| navigation | Dm Sans 9 Pt | 1rem | 400 | 1.5 | normal | Header links, footer links |

Plus Jakarta Sans is designed by Gumpita Rahayu and available from Tokotype. Verify licensing for these families before production use.

## Layout

The layout follows a centered content model with generous vertical breathing room and contained horizontal widths. Sections stack with substantial separation, creating a scrolling rhythm that alternates between dense information and open negative space.

The header maintains a fixed presence with a horizontal flex layout: logo left, navigation center, authentication and primary action right. Navigation links sit at regular intervals with no visible dividers. The header uses the canvas background with no border, relying on content contrast for separation.

Hero sections center all elements vertically and horizontally. The homepage hero places a social proof element above the headline, followed by the main statement, a description paragraph, a platform icon row, and a single primary action. Below this, a product screenshot occupies a rounded container with a purple gradient background that extends beyond the image bounds.

The pricing page introduces a four-column grid for plan cards, with equal-width columns and consistent internal padding. The highlighted card receives the gradient treatment and a "Popular" badge positioned in the upper right. A pill-shaped toggle above the cards allows interval selection, centered above the grid.

Footer sections reverse the density pattern: a large CTA area with oversized brand typography dominates the upper footer, followed by a multi-column link grid and a minimal legal bar at the very bottom. Social platform icons appear as circular buttons in the footer, maintaining the pill and circle motif.

Spacing tokens derive from a 2px base unit. Section padding uses 140px top values on major containers. Card internal padding sits at 30px. Content gaps between related elements use 24px. Navigation and header elements use 18px vertical padding with 60px horizontal padding on outer containers.

## Visual language

The visual language balances technical credibility with approachable warmth through consistent rounding, selective color bursts, and playful decorative elements. Every interactive element uses full pill rounding or substantial radius values—buttons, toggles, badges, and social icons all share this soft geometry.

Decorative line drawings in white appear at the periphery of key sections: loose scribbles, stars, and abstract marks float in the margins of the hero and pricing areas. These elements add personality without competing with the content hierarchy. The social platform icon row functions as both credibility signal and color accent, introducing small bursts of brand colors from external services against the dark canvas.

The purple gradient serves as the primary brand energy source. It appears behind product screenshots, fills the recommended pricing card, and provides the backdrop for feature callouts. The gradient direction runs from upper-right to lower-left, creating a sense of depth and movement.

Product imagery receives rounded container treatment with substantial radius values, softening the technical interface screenshots and integrating them into the overall friendly aesthetic. Shadows are minimal or absent; depth comes from layering solid surfaces and the luminous quality of the gradient against dark backgrounds.

## Components

### Primary button

- **Anatomy**: Text label with optional trailing icon
- **Surface**: Filled white background with near-black text
- **Typography**: `{typography.label}` at 500 weight
- **Shape**: Full pill radius
- **Spacing**: 13px vertical, 16px horizontal padding
- **Composition**: Centered text, icon offset with small gap

### Secondary button / outline button

- **Anatomy**: Text label with optional trailing icon
- **Surface**: Transparent background with 1px white border
- **Typography**: `{typography.label}` at 500 weight
- **Shape**: Full pill radius
- **Spacing**: 12px vertical, 24px horizontal padding
- **Variants**: Navigation variant uses 16px horizontal padding for compact header fit

### Pricing card

- **Anatomy**: Plan name, price display with unit suffix, description line, feature list with check icons
- **Surface**: Dark surface with 1px white border for standard cards; gradient fill for highlighted variant
- **Typography**: Plan name uses `{typography.label}` at 500 weight; price uses `{typography.price-display}`; features use `{typography.body}`
- **Shape**: 20px radius corners
- **Spacing**: 30px internal padding; feature list items separated by 12px vertical margin
- **Variants**: Standard (dark surface, white border); Highlighted (purple gradient, no border, "Popular" badge)

### Pill toggle

- **Anatomy**: Two-option segmented control with active state indicator
- **Surface**: Dark surface background with white fill for active segment
- **Typography**: `{typography.label}`
- **Shape**: Full pill radius on outer container; individual segments inherit rounding
- **Composition**: Equal-width segments, centered text

### Navigation header

- **Anatomy**: Logo mark with wordmark, horizontal link list, authentication link, primary CTA button
- **Surface**: Transparent or canvas background
- **Typography**: Links use `{typography.navigation}`
- **Spacing**: 18px vertical, 60px horizontal on outer container
- **Composition**: Flex row with space-between alignment; logo left, links center, actions right

### Footer CTA

- **Anatomy**: Headline, description, primary button, oversized brand wordmark
- **Surface**: Canvas or surface-elevated background
- **Typography**: Headline uses `{typography.section-display}`; description uses `{typography.body-large}`
- **Composition**: Centered text block above button; brand wordmark below at extreme scale, cropped at viewport edges

### Social icon row

- **Anatomy**: Circular buttons with platform logos
- **Surface**: Dark circular background with white or colored icon
- **Shape**: 50% radius circles
- **Spacing**: Tight horizontal grouping with small gaps

## Responsive behavior

The design should maintain its dark canvas and high-contrast hierarchy across all viewports. The four-column pricing grid should collapse to two columns on tablet and a single stacked column on mobile, with the highlighted card maintaining its gradient treatment at full width. The hero headline should scale down proportionally, preserving the 1.1 line height ratio to prevent awkward breaks. Navigation should collapse to a hamburger menu on smaller viewports, with the primary CTA remaining visible in the header if possible. The oversized footer wordmark should scale with viewport width, continuing to crop dramatically at edges. Platform icon rows should wrap naturally rather than shrinking individual icons. Touch targets should maintain minimum 44px height for all interactive elements.

## Practical implementation guidance

### Preserve
- The strict dark-mode palette with pure black canvas and pure white ink
- Full pill rounding on all buttons and toggles
- The purple gradient as the sole accent energy source
- Separation of Plus Jakarta Sans for display and Dm Sans 9 Pt for body
- Generous section spacing with 140px top padding on major sections
- Subtle 1px white borders on cards rather than heavy shadows

### Avoid
- Introducing additional accent colors beyond the purple gradient family
- Using sharp corners on interactive elements
- Light mode backgrounds that would destroy the brand atmosphere
- Body text smaller than 16px, which compromises legibility on dark backgrounds
- Multiple gradients competing on the same viewport

### Recommended build order
1. Establish the dark canvas and typography scale with the two font families
2. Implement the pill button system with primary and secondary variants
3. Build the navigation header with logo, links, and CTA
4. Create the hero section with centered composition and platform icon row
5. Develop the pricing card component with standard and highlighted variants
6. Assemble the footer with CTA and multi-column link structure
7. Add decorative line elements and gradient backgrounds

### Accessibility
- Maintain a minimum 4.5:1 contrast ratio for all body text against the dark canvas; the white-on-black pairing far exceeds this
- Ensure the purple gradient text or elements do not fall below 3:1 for large text or 4.5:1 for normal text
- Provide visible focus indicators on pill buttons, using the white border or outline offset
- Preserve semantic heading hierarchy with Plus Jakarta Sans reserved for h1-h2 levels
- Ensure platform icon rows include accessible labels or aria-hidden treatment with adjacent text alternatives

## Scope note

This guide covers the homepage and pricing page surfaces visible in the supplied materials. Mobile layouts, hover and focus states, loading sequences, form interactions, and dashboard interfaces are not represented. Decorative line illustrations are described as visible elements without specification of their animation behavior. Measurements are derived from the retained interface data.
