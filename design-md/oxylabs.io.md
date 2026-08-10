# How oxylabs.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/oxylabs.io-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with dark navy background, white headline, product dashboard visualization with gradient accents, and dual CTA buttons with top utility bar and navigation](https://pin.fontofweb.com/9865?format=jpg)](https://design.withfudge.com/share/pin-9865)

[Hero section with dark navy background, white headline, product dashboard visualization with gradient accents, and dual CTA buttons with top utility bar and navigation](https://design.withfudge.com/share/pin-9865)

[![Extended hero view showing code snippet overlay, feature announcement with green accent label, and bottom conference banner with dark pill button](https://pin.fontofweb.com/9864?format=jpg)](https://design.withfudge.com/share/pin-9864)

[Extended hero view showing code snippet overlay, feature announcement with green accent label, and bottom conference banner with dark pill button](https://design.withfudge.com/share/pin-9864)

## Overview

Oxylabs presents a dark-mode-first technical interface built around authority and precision. The system opens with a deep navy hero that fills the viewport, placing white typography against a near-black ground to maximize contrast and readability. Product visualization appears as layered dashboard cards with subtle gradient accents in teal, green, and magenta—suggesting data flow without overwhelming the structured layout. The design communicates infrastructure reliability through restraint: generous whitespace within the dark frame, consistent button hierarchies, and a single type family that handles everything from navigation to display headlines. A secondary light canvas appears only in ancillary surfaces like promotional banners, creating a clear temperature shift between primary product experience and secondary messaging.

## Colors

The palette operates on a binary temperature system: deep cold navy for primary surfaces, warm off-white for content and action, with a near-white tint reserved for subtle surface variation.

| token | value | use |
|---|---|---|
| action | `#130F35` | Primary dark surface, hero background, filled button backgrounds, header text on light grounds |
| action-inverse | `#FFFFFF` | Hero headlines, body text on dark surfaces, primary button fill, secondary button border |
| canvas | `#F7F7FD` | Promotional banner background, light section grounds |
| surface | `#FDFFFF` | Subtle warm tint for elevated cards or alternate light panels |
| ink | `#000000` | Default body text on light backgrounds, navigation links |
| muted-ink | `#130F35` | Button text on light fills, labels requiring slightly softened black |

The hero section commits fully to the dark experience: background, text, and UI chrome all resolve to the action/action-inverse pairing. Product imagery introduces controlled chromatic accents through gradient overlays on dashboard cards—teal at the top edge, green and magenta at the bottom right—but these remain photographic and illustrative rather than interface tokens. The promotional banner at the bottom of the viewport shifts to canvas, creating a deliberate break that signals secondary content. No gradient or shadow tokens are defined in the interface layer; depth comes from layering and color contrast alone.

## Typography

The system relies on a single variable-weight family, Anek Latin, spanning Regular and Semibold weights. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Anek Latin | 3rem | 550 | 1.3 | normal | Hero headlines, primary page titles |
| body-large | Anek Latin | 1.25rem | 400 | 1.5 | normal | Hero descriptions, introductory paragraphs |
| body | Anek Latin | 1rem | 400 | 1.15 | normal | Navigation, default content, banner text |
| label | Anek Latin | 1.125rem | 550 | 1 | normal | Primary and secondary button text |
| navigation | Anek Latin | 1rem | 400 | 1.15 | normal | Header menu items, dropdown labels |
| legal-copy | Anek Latin | 0.875rem | 550 | 1 | normal | Small buttons, tags, announcement labels |

Anek Latin's compressed proportions and geometric construction suit the technical subject matter. The 550 weight serves as the system's semibold, appearing in headlines and button labels where emphasis is needed without the heaviness of a full bold. Line heights stay tight: 1.3 for display to maintain vertical rhythm in multi-line headlines, 1.15 for body and navigation to keep menus compact, and 1.5 for the longer hero description to aid readability. No letter-spacing adjustments are applied; the typeface's native spacing suffices across all scales.

## Layout

The page structure follows a layered vertical stack with clear elevation zones. The topmost layer is a utility bar in canvas, holding tertiary navigation links and account actions. Below this sits the main header with the brand mark left-aligned and primary navigation center-weighted, with action buttons anchored to the right. The hero occupies the full viewport width with asymmetric internal padding: substantial left indentation creates breathing room for the headline block while the right side bleeds to the edge with product visualization.

The hero's internal grid places text content in a narrow left column—roughly 40 percent of the width—while the product dashboard visualization occupies the remaining space, overlapping the hero boundary slightly to create depth. Below the hero, a conference banner spans full width in the light canvas color, using a centered horizontal layout with logo, text, and call-to-action distributed evenly.

Spacing resolves to a 4-pixel base unit. Section padding is generous: 160 pixels vertical in the hero, creating substantial breathing room around content. Component gaps use 16 pixels for related elements, 24 pixels for distinct groups. The header uses 16 pixels vertical and 24 pixels horizontal padding. Buttons carry 8 pixels vertical and 20 pixels horizontal padding for the primary size, compressing to 4 pixels by 8 pixels for small variants.

## Visual language

The visual character balances technical credibility with approachable clarity. The Oxylabs mark uses a stylized X in gradient teal-to-green, paired with a clean wordmark in dark navy. Product visualization favors dark interface mockups with glassmorphism hints—subtle transparency, thin borders, and soft glows around data cards. Code snippets appear as monospace overlays in the hero imagery, reinforcing the developer-facing positioning.

Iconography is minimal and functional: small glyphs for navigation dropdowns, a globe icon for language selection, and standard interface icons for user actions. The product dashboard cards use category labels with small icons—location pin for Proxies, sparkle for Data for AI, API badge for Scraper API—establishing a consistent micro-language for feature identification.

The overall impression is of a control panel or terminal interface rendered for broad accessibility: dark, focused, with color reserved for data states and product differentiation rather than decorative flourish.

## Components

### Primary button

- **Anatomy**: Text label centered within a rectangular container
- **Surface**: White background with dark navy text
- **Typography**: `{typography.label}` at 1.125rem, weight 550
- **Shape**: 4px corner radius
- **Spacing**: 8px vertical padding, 20px horizontal padding
- **Composition**: Inline with sibling buttons, separated by 16px gaps

### Secondary button

- **Anatomy**: Text label within a bordered container
- **Surface**: Transparent background with white border and white text
- **Typography**: `{typography.label}` at 1.125rem, weight 550
- **Shape**: 4px corner radius, 1px solid white border
- **Spacing**: 8px vertical padding, 20px horizontal padding
- **Composition**: Paired with primary button in hero; appears after primary in reading order

### Tertiary button (dark fill)

- **Anatomy**: Compact text label in dark container
- **Surface**: Dark navy background with white text
- **Typography**: `{typography.legal-copy}` at 0.875rem, weight 550
- **Shape**: 4px corner radius
- **Spacing**: 4px vertical padding, 8px horizontal padding
- **Composition**: Used in header for "Try Oxylabs today" and in promotional banners

### Hero section

- **Anatomy**: Full-width dark container with left-aligned text block and right-bleed product visualization
- **Surface**: `{colors.action}` background
- **Typography**: Headline in `{typography.hero-display}`, description in `{typography.body-large}`, both white
- **Shape**: 4px radius on internal elements; section itself is full-bleed
- **Spacing**: 160px top and bottom padding, 24px left padding
- **Composition**: Text block left, dashboard visualization right with intentional overlap into adjacent space

### Announcement pill

- **Anatomy**: Small inline label with text
- **Surface**: Dark navy background with white text
- **Typography**: `{typography.legal-copy}`
- **Shape**: 4px corner radius
- **Spacing**: 4px by 8px padding
- **Composition**: Appears above feature descriptions in hero; paired with brief explanatory text

### Conference banner

- **Anatomy**: Full-width light strip with logo, headline, date, and button
- **Surface**: `{colors.canvas}` background
- **Typography**: Headline in `{typography.body}` weight 550, detail text in `{typography.body}` weight 400
- **Shape**: Full-width bar; internal button uses 4px radius
- **Spacing**: Compact vertical padding, generous horizontal distribution
- **Composition**: Centered content with logo left, text center, button right; close action at far right

### Navigation header

- **Anatomy**: Logo left, menu center, actions right
- **Surface**: White or transparent background
- **Typography**: `{typography.navigation}` in dark navy
- **Shape**: No radius on header itself
- **Spacing**: 16px vertical, 24px horizontal padding
- **Composition**: Flex row with space-between alignment; dropdown indicators on parent items

## Responsive behavior

The desktop layout assumes a wide viewport with the hero's two-column text-and-visualization arrangement. On narrower viewports, the product dashboard visualization should stack below the headline and description, maintaining the left-aligned text block but allowing the image to become full-width. The navigation should collapse to a horizontal scroll or hamburger menu when space no longer accommodates the full menu plus action buttons.

The conference banner should remain single-row on tablet but stack vertically on mobile, with the logo, text, and button each occupying full width in sequence. Button groups in the hero should stack vertically on narrow viewports, with the primary action first and secondary action below it, both becoming full-width.

Typography should scale down proportionally: the 3rem hero display may reduce to 2rem on tablet and 1.5rem on mobile, while maintaining the weight 550 for headline presence. Body-large at 1.25rem should remain readable without reduction, though line length should be constrained through padding or max-width to prevent excessive measure.

## Practical implementation guidance

### Preserve
- The stark contrast between dark navy hero and white typography; this is the system's signature
- The single-family type hierarchy with weight 550 as the sole emphasis level
- The 4px radius on all interactive elements for consistent tactile quality
- The asymmetric hero padding with substantial left indent and right-edge bleed
- The binary button system: white fill for primary, transparent with white border for secondary

### Avoid
- Introducing additional accent colors into UI elements; reserve chromatic gradients for product imagery only
- Using the dark navy background with dark text; the system depends on white text for dark grounds
- Expanding the type scale beyond the defined roles; the existing six tokens cover all visible needs
- Adding drop shadows to cards or buttons; the flat layered approach is intentional
- Centering hero text; the left alignment creates purposeful asymmetry with the visualization

### Recommended build order
1. Establish the color tokens and apply action (`#130F35`) as the hero background
2. Implement Anek Latin at all scales with weight 550 for headlines and labels
3. Build the button system with 4px radius and the two primary variants
4. Construct the hero section with correct asymmetric padding and two-column layout
5. Add the navigation header with logo, menu, and action buttons
6. Implement the conference banner as the first light-surface exception
7. Refine spacing and responsive behavior across breakpoints

### Accessibility
- Ensure white text on dark navy maintains WCAG AAA contrast; the current pairing exceeds requirements
- Provide visible focus indicators on all buttons; the 1px border on secondary buttons can serve as a foundation
- Use semantic heading hierarchy: single h1 in hero, subsequent sections in logical order
- Include alt text for the product dashboard visualization describing the interface features shown
- Ensure the language selector and all dropdown menus are keyboard accessible
- When buttons stack on mobile, maintain adequate touch targets at 44px minimum height

## Scope note

This guide covers the Oxylabs homepage hero and promotional banner surfaces visible in the supplied images. Interior pages, documentation, pricing tables, account dashboards, and mobile-specific layouts are not represented. Motion, loading states, and form validation patterns are not documented. Measurements reflect the extracted interface values where available.
