# How qntm.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/qntm.org-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage with dark header, orange links, and structured content sections including latest updates and external links](https://pin.fontofweb.com/6490?format=jpg)](https://design.withfudge.com/share/pin-6490)

[Homepage with dark header, orange links, and structured content sections including latest updates and external links](https://design.withfudge.com/share/pin-6490)

[![Homepage showing full content flow from header through navigation categories to footer with search field](https://pin.fontofweb.com/5100?format=jpg)](https://design.withfudge.com/share/pin-5100)

[Homepage showing full content flow from header through navigation categories to footer with search field](https://design.withfudge.com/share/pin-5100)

## Overview

The qntm.org website presents a deliberately austere, high-contrast visual system built around a near-black canvas with warm orange accents. The design prioritizes readability and structural clarity over decorative elements, creating an environment where text content dominates. The site title "Things Of Interest" sits in a dark charcoal header band, establishing immediate identity through bold Open Sans lettering. Below, the pure black content area organizes information into clearly demarcated sections: a personal introduction, a featured work callout, navigation categories, a chronological update feed, external links, and a functional footer. Every interactive element—links, category items, dated entries—shares the same warm orange hue, creating a singular, unmistakable accent against the darkness. The overall impression is of a writer's workspace: uncluttered, purposeful, and intensely focused on the words.

## Colors

The color system operates on extreme contrast with a minimal, disciplined palette. The near-total absence of chromatic variation outside the orange accent creates a distinctive, almost monochromatic environment that directs all visual attention to content and navigation.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, content area fill |
| surface | #161616 | Header band, footer band, elevated structural regions |
| ink | #F4F4F4 | Primary text on dark backgrounds, headings, body copy |
| muted-ink | #FFFFFF | Subtle text variations, divider lines, secondary labels |
| action | #FF832B | All interactive links, category labels, dated entry titles, call-to-action phrases |

The canvas and surface colors create a layered darkness: pure black for the main reading area, slightly lifted charcoal for structural bands at top and bottom. This subtle elevation prevents the design from feeling flat while maintaining the overall somber tone. The ink color at #F4F4F4 provides slightly softened white for sustained reading comfort against pure black, avoiding the harshness of full #FFFFFF at body scale.

The action orange at #FF832B serves as the sole warm accent, appearing in every hyperlink, category navigation item, and dated entry title. This consistent application means the orange functions simultaneously as brand identifier, navigation signal, and content hierarchy marker. The color carries enough saturation to remain legible against black without glowing or vibrating, and its warmth provides psychological contrast to the cool darkness surrounding it.

No gradient, shadow, or border colors appear in the interface. Depth and separation rely entirely on background color shifts and the single horizontal divider line beneath section headings.

## Typography

The typographic system uses a single font family across all content, differentiated by weight and size alone. Open Sans provides a neutral, highly legible sans-serif foundation that supports the site's content-first philosophy without adding visual personality of its own.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| site-title | Open Sans | 2rem | 700 | 1.2 | normal | Header site name |
| section-heading | Open Sans | 1.25rem | 700 | 1.5 | normal | Content section titles |
| body | Open Sans | 1rem | 400 | 1.5 | normal | Paragraphs, list items, general content |
| label | Open Sans | 1rem | 400 | 1.5 | normal | Footer navigation, utility text |
| callout-heading | Open Sans | 1.25rem | 700 | 1.5 | normal | Featured work title, promotional heading |
| callout-body | Open Sans | 1rem | 400 | 1.5 | normal | Featured work description, promotional text |

The site-title token at 2rem (32px) establishes clear hierarchy in the header, rendered in bold weight for immediate recognition. Section headings and callout-heading at 1.25rem (20px) with bold weight create consistent entry points for content blocks and featured promotions. Body, label, and callout-body tokens share the same 1rem (16px) size with regular weight, differentiated by context—body appears in the main content area, label in the footer utility region, callout-body in promotional descriptions.

Line height at 1.5 (24px at body size) provides comfortable reading density for the predominantly text-based content. The absence of letter-spacing modification keeps the typography compact and efficient. Bold weight appears only for headings, making any bold text instantly recognizable as structural rather than content.

Open Sans was designed by the Monotype Design Team and is distributed by Monotype Imaging Inc. Verify licensing for these families before production use.

## Layout

The layout follows a strict centered-column model with generous but controlled spacing. Content occupies a narrow central band, flanked by expansive black margins that create focus and breathing room.

The header spans full width with a charcoal background, containing the site title and RSS indicator positioned at the left margin of the content column. Below, the pure black content area centers all information in a single vertical stack. Sections follow a consistent pattern: a bold heading with a thin horizontal divider, followed by the section's content. This divider—a subtle white or near-white hairline—provides the only horizontal structural element beyond background color changes.

Vertical spacing between sections measures 2rem, with internal content maintaining 1rem gaps between related elements. Paragraphs carry 1rem bottom margins, while headings introduce 2rem top margins to separate sections visually. List items maintain tight vertical packing with standard bullet markers.

The footer mirrors the header's full-width charcoal band, containing navigation links, a search field, and copyright notice in a single horizontal row when space permits. The search input appears as a minimal dark field with subtle border, integrated directly into the footer line rather than presented as a prominent call-to-action.

No sidebar, card grid, or multi-column layout appears. The entire design flows as a single narrative column, appropriate for a personal website organized chronologically and thematically.

## Visual language

The visual language embraces restraint as a deliberate aesthetic position. Every element earns its place through function; decoration is virtually absent. The RSS icon beside the site title represents one of the few non-text visual elements, rendered in the same orange as links to maintain color discipline.

Horizontal divider lines beneath section headings use a dotted or dashed pattern rather than solid, introducing subtle texture without visual weight. These dividers extend partially across the content width, creating a gentle termination rather than a hard rule.

The orange link color appears so consistently that it becomes synonymous with the site's identity. Every point of interaction—navigation, reference, external connection—shares this warmth, making the color itself a navigational promise. Links show no underline in their default state, relying on color alone for recognition, though the extreme contrast against black makes them immediately detectable.

The overall darkness of the interface creates an immersive, focused reading environment. The absence of imagery, illustration, or photographic content means typography and spacing carry the entire visual burden. This is a design system built for writers and readers, where the words themselves are the only necessary content.

## Components

### Header

- **Anatomy**: Site title text with adjacent RSS feed icon
- **Surface**: Full-width charcoal background (#161616)
- **Typography**: Site-title token, bold weight
- **Spacing**: 2rem vertical padding, content aligned to central column
- **Composition**: Left-aligned title with inline icon, no navigation menu

### Section heading

- **Anatomy**: Bold text label with horizontal divider line below
- **Surface**: Transparent, inheriting black canvas
- **Typography**: Section-heading token
- **Shape**: Divider appears as dotted or dashed hairline, partial width
- **Spacing**: 2rem top margin, 1rem bottom margin to content below

### Content list

- **Anatomy**: Bulleted or plain list of text entries
- **Typography**: Body token for standard items; action color for linked entries
- **Spacing**: 1rem between major items, tight packing for related entries
- **Composition**: Left-aligned with standard bullet markers; date prefixes in plain text, titles in linked orange

### Featured callout

- **Anatomy**: Heading phrase with descriptive sentence and linked action
- **Typography**: Callout-heading token for title, callout-body token for description, action color for link
- **Spacing**: Integrated into vertical flow with standard section spacing
- **Surface**: No distinct background; relies on text styling for emphasis

### Footer

- **Anatomy**: Navigation links, search input field, copyright text
- **Surface**: Full-width charcoal background matching header
- **Typography**: Label token for all elements
- **Composition**: Inline horizontal arrangement with links left, search center, copyright right
- **Shape**: Search input as minimal dark rectangle with subtle border, zero radius

### Link

- **Typography**: Body token
- **Color**: Action orange (#FF832B) in all states visible in static view
- **Composition**: Inline with text, no underline, no distinct hover state visible

## Responsive behavior

The design's single-column structure adapts naturally to narrower viewports. The centered content column likely maintains comfortable reading width (approximately 65-75 characters) while margins compress. The footer inline arrangement would benefit from stacking on narrow screens: links above, search below, copyright at bottom.

The high-contrast dark mode should be preserved across all breakpoints, as it constitutes the site's core identity. Touch targets for the numerous orange links should maintain adequate size, with list items providing natural separation.

No multi-column or sidebar-dependent layouts appear that would require significant recomposition. The chronological update list and category navigation remain equally functional when linearized.

## Practical implementation guidance

### Preserve
- The extreme dark palette with single warm accent; this contrast defines the site's character
- Consistent orange for every interactive and navigational element
- The dotted/divided section separator as a subtle structural rhythm
- Single-column centered layout with generous external margins
- Open Sans as the sole type family, using weight rather than family for hierarchy
- Sharp corners on all elements; the square aesthetic reinforces the austere tone

### Avoid
- Adding secondary accent colors; the monochrome-plus-orange discipline is essential
- Card-based or boxed content containers; the flat, continuous background maintains the austere tone
- Heavy shadows or elevation effects; depth comes from background color alone
- Decorative imagery or icons beyond the functional RSS indicator
- Border radius on any element; the interface is intentionally rectilinear

### Recommended build order
1. Establish the dark canvas and charcoal surface backgrounds
2. Implement Open Sans at base size with proper line height
3. Add the orange action color to all anchor elements
4. Build the centered content column with section spacing
5. Create the dotted divider pattern for section headings
6. Implement header and footer as full-width bands
7. Add the RSS icon and search input as final details

### Accessibility
- The pure black background with near-white text provides excellent contrast ratios for body copy
- Orange links against black should be verified against WCAG standards; consider slight lightening if needed for AA compliance on normal text
- The minimal visual differentiation between header and footer surfaces may benefit from semantic landmark roles
- Search input should have visible focus indicators given the dark surrounding context
- Consider adding underlines or other non-color link indicators for users with color vision differences

## Scope note

This guide covers the qntm.org homepage as visible in the supplied captures. Interior pages, article layouts, and any dynamic states such as hover, focus, or active link styling are not represented. No mobile-specific layout or breakpoint behavior is documented. The design system assumes a single-page surface with linear content flow; more complex page types would require additional specification.
