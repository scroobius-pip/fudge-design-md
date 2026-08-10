# How posts.im is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/posts.im-design)

Last updated: 2026-08-10

## Captured pages

[![Halftone dot-pattern logo mark in black on white, showing the distinctive stippled gradient that defines the brand's visual identity](https://pin.fontofweb.com/8537?format=jpg)](https://design.withfudge.com/share/pin-8537)

[Halftone dot-pattern logo mark in black on white, showing the distinctive stippled gradient that defines the brand's visual identity](https://design.withfudge.com/share/pin-8537)

[![Full landing page with centered halftone logo, pricing, primary and secondary actions, and feature list with circular check icons](https://pin.fontofweb.com/8536?format=jpg)](https://design.withfudge.com/share/pin-8536)

[Full landing page with centered halftone logo, pricing, primary and secondary actions, and feature list with circular check icons](https://design.withfudge.com/share/pin-8536)

## Overview

Posts.im presents itself as a single-purpose publishing tool with a deliberately austere visual system. The design communicates utility and permanence through extreme restraint: one typeface, one graphic mark, and a palette limited to near-black, warm gray, and white. The halftone dot-pattern logo—an abstract rectangular form built from stippled black dots that fade to nothing—serves as the sole visual flourish, evoking both print history and digital minimalism. Every element on the page is centered and stacked vertically, creating a calm, meditative reading rhythm that mirrors the product's promise of unbranded, distraction-free writing space. There are no navigation bars, no sidebars, no decorative imagery beyond the mark itself. The design succeeds through what it refuses to include.

## Colors

The color system is intentionally narrow, using temperature and value shifts rather than hue variation to create hierarchy.

| token | value | use |
|---|---|---|
| ink | #121212 | Primary text, logo mark, body copy, feature list items |
| muted-ink | #9C9C9B | Secondary text, pricing details, check icons, section labels |
| canvas | #FFFFFF | Page background, secondary button fill |
| surface | #EFEFF0 | Primary button background, subtle UI surfaces |
| border | #EFEFF0 | Secondary button outline, dividers |
| mark-black | #000000 | Deepest halftone dots in the logo mark, background fills |

The near-black ink (#121212) avoids the harshness of pure black while maintaining maximum readability against white. The muted-ink (#9C9C9B) carries enough lightness to recede visually without becoming illegible—critical for the pricing line and feature checkmarks that must be scannable but not competitive with primary content. The surface and border tokens share the same warm gray value (#EFEFF0), creating a unified subtle layer that separates interactive elements from the canvas without introducing a third color. This warm gray has a slight cream undertone that prevents the interface from feeling clinical. The mark-black (#000000) appears in the densest regions of the halftone logo and in occasional background fills, providing the absolute anchor for the grayscale range. No dark mode is visible in the supplied material; any implementation would need to invert the relationship between ink and canvas while preserving the halftone mark's dot values.

## Typography

The entire typographic system is set in a single family: Helvetica. No other weights or styles appear. The hierarchy is established through size, weight, and color rather than family variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Helvetica | 0.9375rem | 400 | 1.47 | 0.002em | Paragraphs, descriptions, feature items |
| body-small | Helvetica | 0.8125rem | 400 | 1.38 | 0.002em | Fine print, terms, secondary explanations |
| label | Helvetica | 0.9375rem | 600 | 1.47 | 0.002em | Primary button text, emphasized actions |
| section-heading | Helvetica | 0.9375rem | 400 | 1.47 | 0.002em | "What is Posts?", "Features" labels |
| emphasis | Helvetica | 0.9375rem | 600 | 1.47 | 0.002em | Inline bold mentions, formatting keywords |
| legal | Helvetica | 0.8125rem | 400 | 1.38 | 0.002em | Account terms, disclaimers, fine print |

The 15px body size with 22px line height creates a comfortable reading measure for the centered content column. The 13px body-small size handles the account-terms disclaimer beneath the primary action. Tracking is nearly imperceptible at 0.035px (rendered as 0.002em), suggesting the design prioritizes optical neutrality over character. Weight 600 serves as the bold emphasis within the interface, appearing on the primary button and inline for italic, bold, and strikethrough formatting mentions in the description text. The emphasis token captures this semantic role explicitly, while the legal token provides dedicated styling for the smallest readable text. The section-heading token uses the same metrics as body but is distinguished by its muted-ink color and positional context above content blocks.

Verify licensing for these families before production use.

## Layout

The page follows a strict single-column centered layout with generous vertical breathing room. The content max-width of approximately 630px (39.375rem) creates a narrow reading measure that prevents eye strain and reinforces the intimate, personal nature of the product.

Vertical rhythm is established through section spacing of 120px (7.5rem) between major content blocks—the logo area, the pricing and action area, the "What is Posts?" explanation, and the Features list. This generous spacing prevents the page from feeling dense despite its simplicity. Within sections, tighter stacking brings related elements together: the three-line pricing block sits directly above the button pair with minimal gap, while the terms text sits immediately below with only slight separation.

Horizontal alignment is consistently center. The logo mark floats in substantial white space above the content. Buttons are arranged side by side when space permits, with the primary action leading and the secondary action following. The feature list uses left-aligned text with left-positioned check icons, but the list itself remains centered within the content column.

The layout makes no use of grids, cards, or sidebar structures. Every element exists in the same z-plane, creating a flat, document-like reading experience appropriate for a text-focused product.

## Visual language

The halftone dot-pattern mark dominates the visual identity. This rectangular form, rendered in black dots of varying density that create a gradient from solid to transparent, references both vintage printing processes and contemporary generative aesthetics. The mark appears at substantial scale—roughly one-third the content width—giving it iconic presence without overwhelming the page. Its slightly irregular edges and organic dot distribution prevent geometric rigidity, introducing warmth into an otherwise severe system.

Beyond the mark, the visual language is defined by absence. No photography, no illustration, no icons except the simple circular checkmarks in the feature list. The checkmarks use a thin stroke in muted-ink, matching the secondary text color rather than competing with it. The overall effect is one of editorial confidence: the design trusts that the product description and the singular mark are sufficient to communicate value.

The warm gray surface color (#EFEFF0) appears only on interactive elements, creating a subtle material distinction between static text and actionable buttons. This limited use of tone prevents the page from feeling flat while maintaining the monochrome discipline.

## Components

### Primary button

- **Anatomy**: Text label centered within a rounded rectangle
- **Surface**: Background color `{colors.surface}`, text color `{colors.ink}`
- **Typography**: `{typography.label}` — 15px, weight 600
- **Shape**: Border radius 8px (0.5rem), height implied by 22px line height plus vertical padding
- **Spacing**: Horizontal padding 16px (1rem), no visible vertical padding beyond line-height
- **Composition**: Positioned as the leading action in button pairs

### Secondary button

- **Anatomy**: Text label centered within a pill outline
- **Surface**: Transparent background, 1px solid border `{colors.border}`, text color `{colors.muted-ink}`
- **Typography**: `{typography.body}` — 15px, weight 400
- **Shape**: Full pill radius 45px (2.8125rem), creating a softer, more tentative presence than the primary button's modest rounding
- **Spacing**: Horizontal padding 22px (1.375rem), slightly more generous than the primary button
- **Composition**: Follows the primary button with close proximity, suggesting an alternative rather than equal choice

### Feature list item

- **Anatomy**: Circular check icon followed by text label
- **Surface**: No background; icon stroke in `{colors.muted-ink}`
- **Typography**: `{typography.body}` — 15px, weight 400, color `{colors.ink}`
- **Spacing**: List items stack with comfortable vertical rhythm; left padding of 24px (1.5rem) on list container creates indentation
- **Composition**: Icon and text align to baseline; the circle's center matches the cap-height of the text

### Content section

- **Anatomy**: Section label followed by paragraph block
- **Surface**: No visible background separation
- **Typography**: Label uses `{typography.section-heading}` in `{colors.muted-ink}`; body uses `{typography.body}` in `{colors.ink}`
- **Spacing**: 120px (7.5rem) vertical padding between major sections; tight stacking within sections

## Responsive behavior

The supplied images show a single desktop viewport. The centered single-column layout suggests natural responsiveness: the content column maintains its maximum width while margins expand on wider viewports. The button pair may stack vertically on narrow viewports, with the primary action remaining first. The halftone mark should scale proportionally, maintaining its visual weight without becoming oversized on mobile screens. The 120px section spacing may compress on smaller screens to maintain page proportion—consider reducing to 80px or 60px below a tablet breakpoint. The 630px content width provides comfortable margins down to approximately 375px viewport width; below this, side margins should compress to minimum safe padding of 16–20px.

## Practical implementation guidance

### Preserve
- The halftone mark as the sole visual identity element; do not supplement with additional imagery or decorative patterns
- The extreme color restraint: ink, muted-ink, canvas, surface, border, and mark-black are sufficient for all states
- The centered, single-column document layout that creates meditative focus
- The generous 120px section spacing that prevents visual crowding
- Helvetica as the exclusive typeface, with weight 600 as the only emphasis beyond color

### Avoid
- Adding a navigation bar, footer links, or sidebar elements that break the page's monastic simplicity
- Using pure black (#000000) for text; the slightly warmed #121212 is intentional for readability
- Introducing additional border radii beyond the 8px button and 45px pill
- Applying background colors to content sections; the white canvas should remain continuous
- Using icon fonts or SVG illustrations beyond the simple checkmark circles

### Recommended build order
1. Establish the centered content column with max-width 630px and generous vertical margins
2. Implement the halftone mark at appropriate scale with responsive scaling
3. Set the typographic base in Helvetica 15px/22px with #121212
4. Build the primary and secondary button components with their distinct radii and padding
5. Add the feature list with circular check icons in muted-ink
6. Apply the 120px section spacing and verify vertical rhythm

### Accessibility
- The muted-ink (#9C9C9B) on white may fail WCAG AA for small text; verify contrast ratios and consider darkening to approximately #767676 if compliance is required
- The halftone mark contains no text; ensure an appropriate `aria-label` describes it as the Posts logo
- Button text should maintain sufficient contrast in all states; the surface-to-ink pairing on the primary button meets requirements
- The centered layout benefits users with magnification tools, as content remains in the reading flow without horizontal displacement

## Scope note

This guide covers the Posts.im landing page as visible in the supplied material. It does not include any interior application screens, account dashboards, or writing interfaces. Motion, hover states, focus indicators, loading states, and error handling are not represented in the source images and should be designed to match the system's restraint. Mobile-specific layouts and breakpoints were not captured and require separate exploration.
