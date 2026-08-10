# How easlo.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/easlo.co-design)

Last updated: 2026-08-10

## Captured pages

[![Apps grid section with four app icons on rounded square tiles, footer with Easlo logo, social links, and multi-column navigation](https://pin.fontofweb.com/2536?format=jpg)](https://design.withfudge.com/share/pin-2536)

[Apps grid section with four app icons on rounded square tiles, footer with Easlo logo, social links, and multi-column navigation](https://design.withfudge.com/share/pin-2536)

[![Second Brain product hero with centered headline, black pill button, and device mockup showing Notion template interface](https://pin.fontofweb.com/2535?format=jpg)](https://design.withfudge.com/share/pin-2535)

[Second Brain product hero with centered headline, black pill button, and device mockup showing Notion template interface](https://design.withfudge.com/share/pin-2535)

[![Top navigation bar with Easlo logo, text links, and two pill buttons including a black primary action](https://pin.fontofweb.com/2533?format=jpg)](https://design.withfudge.com/share/pin-2533)

[Top navigation bar with Easlo logo, text links, and two pill buttons including a black primary action](https://design.withfudge.com/share/pin-2533)

## Overview

Easlo presents a deliberately restrained visual system that communicates clarity and focus for productivity-minded users. The design operates on a binary of pure black against clean white, eliminating chromatic distraction in favor of typographic hierarchy and geometric precision. Every element serves the narrative of simplicity: from the bold, tightly-tracked headlines to the soft-rounded app tiles that invite interaction without visual noise. The system feels engineered rather than decorated—each component exists to reduce friction between the user and the tools being offered. This is a design language built for trust and task-completion, where the absence of color becomes a brand signature rather than a limitation. The overall impression is of a studio that values craft over ornament, letting the structure of information and the quality of the products speak through generous whitespace and confident scale.

## Colors

The Easlo palette is intentionally austere, operating on a near-monochrome foundation with a single muted tone for secondary information. This restraint creates immediate visual hierarchy: black commands attention, white provides rest, and gray recedes to supporting roles.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, primary button fills, iconography, logo wordmark |
| canvas | #FFFFFF | Page backgrounds, button text on dark surfaces, app tile backgrounds, footer |
| muted-ink | #666666 | Secondary descriptions, footer links, caption text, non-interactive metadata |
| surface | #F5F5F5 | Subtle section backgrounds, hover states, divider-adjacent areas |

The relationship between these colors is strictly functional. Black carries all semantic weight—headlines, primary actions, and brand identity converge on this single value. White provides the expansive ground that makes the black elements feel intentional rather than heavy. The muted gray appears only where information density requires differentiation without competing for attention: app descriptions, footer navigation, and secondary labels. No accent colors appear in the interface; the system relies entirely on scale, weight, and spacing to create interest. Photographic or illustrative content, when present, maintains its own color integrity against this neutral frame. Dark mode is not visibly implemented in the supplied surfaces, though the binary palette would invert cleanly.

## Typography

Two families divide the typographic labor: Inter handles all display and interface text with its precise, engineered forms, while Manrope manages longer reading passages with slightly more open proportions. Both families are used in Regular weight for body contexts, with Inter extending into Semibold and Bold for navigation and headlines respectively.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1.1 | -0.02em | Page headlines, product names |
| section-display | Inter | 2.5rem | 700 | 1.1 | -0.02em | Section titles, feature headers |
| body | Manrope | 1rem | 400 | 1.6 | 0em | Descriptions, explanatory text |
| body-small | Manrope | 0.875rem | 400 | 1.5 | 0em | Captions, metadata, footer content |
| label | Inter | 0.875rem | 600 | 1.2 | 0em | Button text, app names, category headers |
| navigation | Inter | 1rem | 500 | 1.2 | 0em | Top-bar links, active states |

The display sizes employ tight negative tracking that gives headlines a compact, confident stance. Body text maintains neutral tracking with generous line height for readability. The 0.25rem grid step governs all type sizes: 3rem equals 48px (12 steps), 2.5rem equals 40px (10 steps), 1rem equals 16px (4 steps), and 0.875rem equals 14px (3.5 steps rounded to practical implementation). Verify licensing for these families before production use. Inter is designed by Rasmus Andersson via Rsms. Manrope is designed by Mikhail Sharanda.

## Layout

The layout philosophy centers on centered, single-column compositions with generous vertical breathing room. Content rarely stretches to extreme widths; instead, it clusters in readable columns that emphasize the message over the container.

The top navigation spans the full viewport width with internal padding, establishing a clear boundary between system chrome and page content. Below this, hero sections stack headline, description, and action vertically with consistent rhythm. The "Second Brain" product page demonstrates this pattern: headline at maximum scale, supporting description at body size with constrained line length, then a pill button that breaks the vertical flow with its horizontal emphasis.

The apps grid introduces a four-column layout at desktop widths, with each app presented as an independent tile. These tiles maintain equal internal padding and external gutters, creating a rhythmic pattern that scans easily. The footer expands into a multi-column link structure while retaining the same centered container logic as the rest of the page.

Spacing follows a 0.25rem base unit. Section vertical padding sits at 5rem (20 steps), creating clear territorial boundaries between content types. Content gaps within sections use 1.5rem (6 steps) for related elements. The generous section spacing prevents the monochrome palette from feeling dense or monolithic.

## Visual language

The visual character of Easlo is defined by three qualities: geometric purity, tactile roundness, and absolute contrast. Every interactive element receives generous border radius treatment—buttons become full pills, app tiles become squircles with substantial corner curvature. This softness counterbalances the starkness of the black-and-white palette, preventing the interface from feeling clinical.

Iconography follows a consistent stroke-weight convention: bold, uniform lines with minimal detail, rendered in pure black against white grounds. The app icons in the grid demonstrate this clearly—each is a simple geometric abstraction that reads instantly at small sizes. The "Menu" icon even abandons pictography entirely for typographic play, stacking the four letters in a two-by-two grid that becomes a memorable brand mark.

Shadows are absent from the interface vocabulary; depth is suggested only through the device mockups in product imagery, which use realistic hardware shadows that exist outside the UI system proper. Borders are hairline-thin when present, serving as subtle dividers rather than structural elements. The overall effect is of objects resting on a clean surface rather than floating in space—grounded, stable, and trustworthy.

## Components

### Primary button

- **Anatomy**: Text label centered within a fully rounded container
- **Surface and text color**: `{colors.ink}` background with `{colors.canvas}` text
- **Typography**: `{typography.label}` — Inter Semibold at 0.875rem
- **Shape**: Full pill via `{rounded.pill}` (9999px), creating a capsule silhouette
- **Spacing**: Padding of 0.75rem vertical and 1.5rem horizontal
- **Composition**: Typically appears centered below descriptive text, or inline in navigation
- **Variants**: The "Create a free account" variant uses this exact treatment; no visible hover state is captured

### Secondary button

- **Anatomy**: Text label within a bordered, fully rounded container
- **Surface and text color**: `{colors.canvas}` background with `{colors.ink}` text, plus a subtle `#E5E5E5` border
- **Typography**: `{typography.label}` — matching primary button weight and size
- **Shape**: Full pill identical to primary
- **Spacing**: Same padding as primary button
- **Composition**: Positioned adjacent to primary buttons in navigation contexts, creating a clear hierarchy through fill versus outline

### App tile

- **Anatomy**: Square container with centered icon above app name and description
- **Surface and text color**: `{colors.canvas}` background with `{colors.ink}` icon and name, `{colors.muted-ink}` description
- **Typography**: App name uses `{typography.label}`; description uses `{typography.body-small}`
- **Shape**: `{rounded.tile}` at 1.5rem, creating a squircle softer than standard rounding but not fully circular
- **Spacing**: Internal padding of 2rem, with icon receiving additional visual weight through scale
- **Composition**: Arranged in equal-width grids with consistent gutters; icon occupies upper portion, text anchors bottom
- **Variants**: Four visible instances (Menu, Journal, Experiments, SyncTasks) share identical structure with unique iconography

### Navigation bar

- **Anatomy**: Logo lockup left, text links center-left, action buttons right
- **Surface and text color**: Transparent or `{colors.canvas}` background with `{colors.ink}` text and icons
- **Typography**: Links use `{typography.navigation}`; logo wordmark uses heavier weight
- **Shape**: Full-width bar with internal horizontal padding
- **Spacing**: Comfortable gaps between links, with button group separated from navigation text
- **Composition**: Flexbox-style distribution with logo anchored left, actions anchored right

### Footer

- **Anatomy**: Logo and tagline left, multi-column link grid right, copyright below
- **Surface and text color**: `{colors.canvas}` background throughout, `{colors.ink}` for headings, `{colors.muted-ink}` for links
- **Typography**: Column headers use `{typography.label}`; links use `{typography.body-small}`
- **Shape**: Full-width with internal container constraints
- **Spacing**: Generous top padding matching section spacing, with social icons clustered below logo
- **Composition**: Asymmetric two-zone layout with brand identity left and utility navigation right

## Responsive behavior

The supplied images show desktop-width compositions exclusively. Based on the visible structure, several responsive adaptations are recommended. The four-column apps grid should collapse to two columns at medium widths and single column on narrow viewports, maintaining tile proportions and internal spacing. The footer multi-column layout should stack vertically, with link columns becoming accordions or simple stacked lists. The top navigation text links should collapse to a menu trigger, preserving the two-button action group if space permits. Headline sizes should scale down proportionally: hero-display at 2rem on medium screens and 1.75rem on small screens, maintaining the tight tracking that characterizes the brand voice. The device mockup in the "Second Brain" section should scale to fit viewport width without overflowing, potentially switching from side-by-side tablet and phone to stacked or single-device focus.

## Practical implementation guidance

### Preserve
- The absolute black-and-white contrast as the foundational brand signature
- Generous border radius on all interactive elements—pills for buttons, substantial rounding for tiles
- Tight negative tracking on display headlines, particularly the -0.02em value
- Centered, stacked compositions for hero sections
- The two-family typographic split: Inter for interface, Manrope for reading

### Avoid
- Introducing accent colors that would break the monochrome discipline
- Sharp corners on any interactive or branded element
- Dense paragraph text without adequate line height
- Left-aligned headlines in centered sections, which would fracture the compositional calm
- Shadows or dimensional effects within the UI proper

### Recommended build order
1. Establish the color tokens and apply to base elements
2. Implement the typographic scale with Inter and Manrope loaded
3. Build the pill button component with both fill and outline variants
4. Construct the navigation bar with responsive collapse behavior
5. Create the app tile component with flexible icon slot
6. Assemble the footer with its asymmetric two-zone structure
7. Add the device mockup treatment for product showcases

### Accessibility
- Ensure the pure black on pure white combination meets contrast requirements (it exceeds WCAG AAA)
- Provide focus indicators that maintain the rounded aesthetic, such as outline-offset rings in black
- When implementing the monochrome palette, avoid relying on color alone for state changes; use weight or border changes for selected versus unselected app tiles
- Maintain touch targets at minimum 44px for all interactive elements, which the current button padding comfortably supports
- Consider a subtle focus-visible treatment that respects the clean visual language without default browser outlines

## Scope note

This guide covers the Easlo homepage and product showcase surfaces visible in the supplied images. Mobile layouts, animation, form interactions, and template marketplace pages are not represented. Measurements are practical adaptation targets derived from the visible desktop compositions.
