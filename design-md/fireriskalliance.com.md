# How fireriskalliance.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fireriskalliance.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with dark background, red accent bar, and logo with navigation columns on Warehouse & Storage page](https://pin.fontofweb.com/3041?format=jpg)](https://design.withfudge.com/share/pin-3041)

[Footer section with dark background, red accent bar, and logo with navigation columns on Warehouse & Storage page](https://design.withfudge.com/share/pin-3041)

[![Homepage industry cards with dark gradient background, pill-shaped View More button, and footer layout](https://pin.fontofweb.com/3038?format=jpg)](https://design.withfudge.com/share/pin-3038)

[Homepage industry cards with dark gradient background, pill-shaped View More button, and footer layout](https://design.withfudge.com/share/pin-3038)

[![Code Consulting brochure CTA with large display typography on dark background and standard footer](https://pin.fontofweb.com/3037?format=jpg)](https://design.withfudge.com/share/pin-3037)

[Code Consulting brochure CTA with large display typography on dark background and standard footer](https://design.withfudge.com/share/pin-3037)

## Overview

Fire & Risk Alliance presents a dark, authoritative visual system built around engineering credibility and emergency-response urgency. The design communicates technical expertise through restrained color, bold geometric typography, and high-contrast compositions that feel precise and institutional. Deep charcoal backgrounds dominate every page surface, creating a somber, serious atmosphere appropriate to fire protection and risk engineering. A single vivid red accent—drawn from the brand's shield logo—provides the only saturated color, functioning as a trust signal and navigational anchor rather than decorative flourish.

The system balances two distinct type personalities: Unbounded delivers compressed, powerful display headlines with a technical, almost industrial character, while Almarai provides clean, readable body text with humanist proportions. This pairing creates hierarchy through contrast in weight, width, and tone rather than through size alone. Component design favors flat surfaces, minimal borders, and pill-shaped interactive elements that feel contemporary without trending toward excessive rounding. Photography of industrial environments—warehouses, data centers, aerospace facilities—sits within restrained containers, letting the imagery provide warmth and context against the cool, dark interface.

## Colors

The palette is intentionally narrow: four core colors serve all interface needs, with a fifth reserved for hover states. The dark canvas creates immersion and reduces eye strain for technical content, while the red accent carries brand recognition and draws attention to critical actions and structural divisions.

| token | value | use |
|---|---|---|
| canvas | #1A1A1A | Primary page background, footer surface, hero sections |
| surface | #2A2A2A | Card backgrounds, elevated panels, industry card overlays |
| ink | #FFFFFF | Primary text, headings, navigation links, button borders |
| muted-ink | #B8B8B8 | Secondary body text, captions, contact details |
| accent | #C41E1E | Logo shield, footer accent bar, hover indicators, brand moments |
| accent-hover | #A01818 | Darker red for interactive state feedback |
| border | #404040 | Subtle dividers, card outlines, structural hairlines |

The canvas and surface values are closely related—approximately one step apart in lightness—allowing subtle elevation without breaking the dark continuity. The accent red appears most prominently in the footer as a full-width horizontal bar, in the shield element of the logo, and as the dominant color in the copyright strip. White ink maintains crisp legibility against all dark backgrounds, while muted-ink softens supporting information like addresses and phone numbers without requiring a third gray. No light-mode variant is visible in the supplied pages; the system appears designed for permanent dark presentation.

## Typography

Three font families are present in the source: Unbounded for display and label settings, Almarai for body and navigation, and Jkiticon for interface symbols. The display typeface carries the visual weight of the brand, with tight letterforms and assertive presence. Body text remains modest in scale, prioritizing readability over impact.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Unbounded | 3.5rem | 700 | 1.1 | -0.02em | Page hero headlines, brochure CTAs |
| section-display | Unbounded | 2.5rem | 700 | 1.15 | -0.01em | Section headings, card titles |
| body | Almarai | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions |
| body-small | Almarai | 0.875rem | 400 | 1.5 | 0 | Captions, metadata, fine print |
| label | Unbounded | 0.875rem | 600 | 1.2 | 0.05em | Navigation headings, card labels, buttons |
| navigation | Almarai | 0.875rem | 400 | 1.4 | 0.02em | Footer links, menu items |

Unbounded appears exclusively in uppercase for labels and navigation headings, reinforcing the technical, specification-like tone. Almarai maintains sentence case for body content, providing necessary warmth and accessibility. The hero-display size at 3.5rem creates commanding presence for calls-to-action like the brochure download section, while section-display at 2.5rem serves industry card titles without overwhelming the composition. Body text at 1rem with 1.6 line height ensures comfortable reading for technical descriptions. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous vertical breathing room. Content maxes out at approximately 75rem, creating readable line lengths while maintaining professional proportions on wide displays. Sections stack vertically with substantial padding—typically 6rem—creating clear territorial boundaries between functional areas.

Horizontal structure relies on three-column arrangements for the footer (logo, navigation, contact) and three-column grids for industry card presentations. These columns appear evenly distributed with consistent gutters. The footer maintains this tripartite organization across all visible pages, suggesting a rigid template system. Vertical rhythm is established through consistent spacing multiples: 1.5rem for component gaps, 3rem for related content groups, and 6rem for major section divisions.

The industry cards on the homepage demonstrate a contained image-with-overlay pattern: photographs fill rounded rectangular containers, with text labels positioned below or overlaid at the bottom edge. A pill-shaped "VIEW MORE" button sits centered below the card grid, breaking the rectangular logic with its fully rounded form. The brochure CTA section inverts the typical content-image relationship, placing massive left-aligned typography beside a smaller document preview, creating asymmetrical tension that draws the eye toward the action.

## Visual language

The visual language communicates precision, safety, and technical authority through restraint and contrast. Every surface is flat—no visible shadows, gradients, or glassmorphism effects appear in the interface. Depth is suggested only through the slight lightness shift between canvas and surface, and through the layering of photography against dark panels.

Photography plays a crucial role in humanizing the engineering subject matter. Industrial scenes—warehouse interiors, server racks, aerospace environments—are rendered in natural color without heavy filtering, letting their inherent warmth and detail provide visual interest. These images receive modest rounding (0.5rem) at corners, softening their rectangular presence without becoming decorative.

The red accent functions as a structural and emotional signal. It appears in the logo's shield, the footer's horizontal bar, and the copyright strip, creating vertical continuity from page top to bottom. This limited deployment prevents the urgent color from becoming fatiguing while ensuring brand recognition. The overall effect is institutional and confident: the design does not shout but commands attention through weight, darkness, and careful typographic hierarchy.

## Components

### Primary button

The primary interactive element is a pill-shaped outline button with transparent fill and white border.

- **Anatomy**: Text label centered within a fully rounded container
- **Surface**: Transparent background with 1px solid white border
- **Typography**: `{typography.label}` in uppercase, white ink
- **Shape**: Pill form via `9999px` border radius
- **Spacing**: Generous horizontal padding (approximately 2.5rem) with 1rem vertical padding
- **Composition**: Centered within its container, often isolated below content grids
- **Variants**: No filled variant visible; hover state likely shifts border to accent red or darkens background

### Industry card

Cards present service categories with photographic context and bold labeling.

- **Anatomy**: Rounded image container with text label below or overlaid
- **Surface**: Dark surface background with photograph filling upper portion
- **Typography**: `{typography.label}` in uppercase white text
- **Shape**: 0.5rem border radius on container and image
- **Spacing**: Internal padding minimal; label positioned with comfortable clearance from image edge
- **Composition**: Grid of three equal columns with consistent gutters
- **Variants**: Cards appear uniform; no visible hover state differentiation in still images

### Footer

The footer is a signature element, repeated identically across all visible pages.

- **Anatomy**: Three-column layout with logo, navigation grouping, and contact details; full-width accent bar at bottom
- **Surface**: Canvas background with accent red horizontal rule above copyright strip
- **Typography**: Navigation links in `{typography.navigation}`, column headings in `{typography.label}` uppercase
- **Shape**: Rectangular, full-bleed width; copyright strip as solid accent bar
- **Spacing**: Generous internal padding (approximately 4rem vertical), balanced column distribution
- **Composition**: Logo left, centered navigation column, right-aligned contact with phone and address
- **Variants**: Consistent across pages; no visible state changes

### Brochure CTA

A high-impact section driving document downloads.

- **Anatomy**: Large headline left, descriptive paragraph below, document preview image right
- **Surface**: Canvas background throughout
- **Typography**: `{typography.hero-display}` for headline, `{typography.body}` for description
- **Shape**: No containing border; content floats on dark ground
- **Spacing**: Substantial vertical padding, asymmetric horizontal distribution favoring text
- **Composition**: Text block occupies roughly 60% width, image preview 40%
- **Variants**: No alternate layout visible

## Responsive behavior

The design appears optimized for desktop presentation. The three-column footer and industry card grids would require significant reorganization for narrower viewports. Recommended adaptation includes: stacking footer columns vertically with centered alignment, converting industry cards to a single-column scroll, and reducing hero-display size to 2.5rem on mobile to prevent overflow. The pill button should maintain its proportions but may require full-width treatment on smallest screens. Navigation is not visible in the header region of supplied images; if a horizontal menu exists, it should collapse to a hamburger pattern below 768px.

## Practical implementation guidance

### Preserve
- The dark canvas as permanent background; do not introduce light-mode variants without explicit requirement
- The strict two-typeface hierarchy: Unbounded for display and labels, Almarai for body and navigation
- The pill button as the sole interactive shape language; avoid introducing rectangular buttons alongside
- The red accent bar as a footer signature element across all pages
- Uppercase treatment for all Unbounded label and navigation applications

### Avoid
- Adding gradient overlays to photography; the flat, unfiltered industrial imagery is essential to the tone
- Introducing additional accent colors; the single red against dark gray is the complete brand palette
- Rounding beyond 0.5rem for cards and images; excessive rounding would undermine the technical precision
- Shadow effects on cards or buttons; the design achieves hierarchy through value contrast alone
- Generic placeholder photography; the specific industrial subject matter reinforces expertise claims

### Recommended build order
1. Establish dark canvas and surface color tokens with proper contrast ratios
2. Implement Unbounded at hero-display and label sizes with uppercase treatment
3. Build footer component as the most repeated and structurally complex element
4. Create pill button with transparent fill and white border
5. Construct industry card with image container and overlay label pattern
6. Add brochure CTA section with asymmetric layout
7. Refine spacing scale based on 0.25rem unit across all components

### Accessibility
- White text on #1A1A1A canvas exceeds WCAG AAA contrast for normal text
- Ensure focus indicators use accent red or white outline rather than default browser styles
- Maintain minimum 44px touch targets for pill buttons on touch devices
- Provide alt text for all industrial photography describing the facility type and context
- Consider reduced-motion preferences for any scroll-triggered animations

## Scope note

This guide covers the homepage, industry/service listing, and brochure CTA sections visible in the supplied images. Header navigation, interior page layouts beyond the footer, form elements, and mobile adaptations are not represented. Measurements are practical adaptation targets.
