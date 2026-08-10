# How oracle.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/oracle.com-design)

Last updated: 2026-08-10

## Captured pages

[![Corporate mission hero with red-orange gradient background, stylized bird illustration, and white headline over light gray fact cards with dark text](https://pin.fontofweb.com/2330?format=jpg)](https://design.withfudge.com/share/pin-2330)

[Corporate mission hero with red-orange gradient background, stylized bird illustration, and white headline over light gray fact cards with dark text](https://design.withfudge.com/share/pin-2330)

[![Dark charcoal footer with five-column link grid, social icons, legal row, and floating chat widget with teal accent](https://pin.fontofweb.com/2329?format=jpg)](https://design.withfudge.com/share/pin-2329)

[Dark charcoal footer with five-column link grid, social icons, legal row, and floating chat widget with teal accent](https://design.withfudge.com/share/pin-2329)

[![Global navigation bar with red Oracle wordmark, white text links, search icon, country selector, and two outlined buttons on dark background](https://pin.fontofweb.com/2328?format=jpg)](https://design.withfudge.com/share/pin-2328)

[Global navigation bar with red Oracle wordmark, white text links, search icon, country selector, and two outlined buttons on dark background](https://design.withfudge.com/share/pin-2328)

## Overview

Oracle's public-facing design system presents a corporate technology identity built on contrast and clarity. The visual language moves between warm, expressive hero moments and disciplined dark utility surfaces. A single variable sans-serif type family carries all text from monumental headlines to legal fine print, creating cohesion across marketing and functional pages. The homepage and corporate About page share a common structural vocabulary: a dark global navigation bar, full-bleed hero sections with photographic or illustrative backgrounds, light content cards for structured information, and a comprehensive dark footer. The system prioritizes readability and scanability over decorative flourish, using color strategically to guide attention toward calls to action and conversational interfaces.

## Colors

The palette operates in two modes: warm light surfaces for content consumption and dark charcoal surfaces for navigation and footer utility. A single warm red-orange serves as the brand's expressive accent, appearing in hero backgrounds and the logo mark. Teal provides functional accent for interactive elements like chat widgets.

| token | value | use |
|---|---|---|
| ink | #000000 | primary text on light backgrounds, icon fills |
| canvas | #FFFFFF | card backgrounds, chat widget surface, hero text |
| surface-dark | #312D2A | global navigation, footer, dark panels |
| surface-light | #F7F7F5 | page background below heroes, subtle section fills |
| accent-red | #C74634 | hero backgrounds, Oracle wordmark, brand moments |
| accent-teal | #00758F | chat widget accents, link highlights, interactive cues |
| text-primary | #1A1A1A | body text on light surfaces |
| text-inverse | #FFFFFF | navigation text, footer text, hero headlines |
| text-muted | #6B6B6B | secondary labels, supporting information |
| border-subtle | #E0E0E0 | card borders, dividers, hairline separators |

The hero section on the corporate page demonstrates the warm mode: a saturated red-orange gradient background with white text and an illustrative bird motif. This warmth does not extend into the content area, which returns to neutral light grays and white cards. The dark mode of the navigation and footer creates a visual anchor that persists across page types. The chat widget introduces a third surface—white with teal accents—floating above the dark footer to signal conversational availability.

## Typography

The type system relies on one family: By Dalton Maag Ltd-14087066475762335141, a variable sans-serif designed by Dalton Maag Ltd and served from Oracle's own infrastructure. The family supports weight variation from Regular through Bold, and the system uses weight and size hierarchy rather than multiple families to distinguish roles. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Dalton Maag Ltd-14087066475762335141 | 3rem | 400 | 1.1 | -0.01em | mission statements, page headlines |
| section-display | By Dalton Maag Ltd-14087066475762335141 | 1.75rem | 600 | 1.2 | 0 | section introductions, card headers |
| body | By Dalton Maag Ltd-14087066475762335141 | 1rem | 400 | 1.5 | 0 | paragraphs, list items, descriptions |
| body-bold | By Dalton Maag Ltd-14087066475762335141 | 1rem | 700 | 1.5 | 0 | emphasized statements, lead paragraphs |
| label | By Dalton Maag Ltd-14087066475762335141 | 0.875rem | 600 | 1.4 | 0.01em | button text, card titles, category labels |
| navigation | By Dalton Maag Ltd-14087066475762335141 | 0.875rem | 400 | 1 | 0 | top-bar links, footer column headers |
| legal | By Dalton Maag Ltd-14087066475762335141 | 0.75rem | 400 | 1.5 | 0 | copyright, privacy links, fine print |

The hero display at 3rem uses a lighter weight with tight leading to create an elegant, editorial presence against photographic backgrounds. Body text remains at a comfortable 1rem with generous 1.5 line height for extended reading. The navigation and label sizes are close—both at 0.875rem—but distinguished by weight, with labels receiving semibold treatment to indicate actionability.

## Layout

The page structure follows a predictable vertical rhythm. The global navigation occupies a fixed-height bar at approximately 3.5rem, containing the logo, primary navigation links, utility actions, and two right-aligned buttons. Below this, hero sections extend full viewport width with asymmetric internal composition: text positioned left, imagery or illustration positioned right or full-bleed behind.

Content sections below the hero use a contained width with generous horizontal padding, approximately 2rem on each side at desktop scale. The corporate page shows a two-column card grid with equal-width cards separated by a 2rem gap. Cards themselves carry internal padding of 2rem, creating breathing room around dense lists of facts and figures.

The footer expands to full width with a five-column link grid. Column headers use semibold weight while links beneath remain regular. A bottom legal row separates copyright, policy links, and social icons with horizontal spacing. The chat widget floats fixed-position in the lower right, overlaying footer content without integrating into the grid.

Section spacing follows a 5rem vertical rhythm between major content blocks, with 2rem gaps between related elements like cards or list items. The relative unit of 0.25rem underlies all measurements, allowing for consistent scaling.

## Visual language

Photography and illustration on Oracle's site serves brand storytelling rather than product demonstration. The corporate hero features a stylized bird with textured plumage in orange, black, and cream tones against a warm red field—an artistic, non-literal image that supports the mission statement without depicting technology directly. This approach signals human-centered values over technical specifications.

Iconography in the interface is minimal and functional. The navigation uses a search magnifier, country flag selector, and simple line icons for account and contact actions. The footer social icons are monochrome silhouettes. The chat widget uses a speech-bubble icon with a small notification dot, rendered in the teal accent against white.

Shadow and depth are restrained. Cards appear to float slightly above the page background through subtle shadow or border definition rather than dramatic elevation. The chat widget carries a more pronounced shadow to establish its floating, interactive nature above the footer plane.

The overall impression is of a mature enterprise system: confident enough to use warm color and artistic imagery in heroes, yet disciplined in information architecture and functional surfaces.

## Components

### Global navigation

- **Anatomy**: Oracle wordmark left, seven primary links center-left, search icon and country selector center-right, "View Accounts" and "Contact Sales" buttons right
- **Surface**: Solid dark charcoal background (#312D2A) with no border or shadow
- **Typography**: Navigation token, white text
- **Shape**: Full-width bar with no border-radius
- **Spacing**: Horizontal padding approximately 2rem, vertical centering of all elements
- **Composition**: Flex row with logo fixed left, links distributed with generous gap, utility cluster right-aligned
- **Variants**: Buttons use transparent fill with 1px white border; "Contact Sales" includes external-link icon

### Hero section

- **Anatomy**: Full-width background, left-aligned headline block, optional illustrative or photographic element
- **Surface**: Warm red-orange gradient or solid accent-red; white text
- **Typography**: Hero-display token, sentence-case mission language
- **Shape**: No border-radius; extends to viewport edges
- **Spacing**: Generous vertical padding, approximately 5rem top and bottom; headline constrained to roughly 60% width
- **Composition**: Asymmetric with text left, imagery right or full-bleed behind

### Content card

- **Anatomy**: White container with header and body list
- **Surface**: White background, optional subtle border or shadow
- **Typography**: Label token for header, body token for list items
- **Shape**: 0.5rem border-radius
- **Spacing**: 2rem internal padding; 2rem gap between cards in grid
- **Composition**: Two-column grid on desktop, stacked on narrower viewports

### Footer

- **Anatomy**: Five-column link grid, legal row with copyright, policy links, social icons
- **Surface**: Dark charcoal matching navigation
- **Typography**: Navigation token for column headers, body token for links, legal token for bottom row
- **Shape**: Full-width, no border-radius
- **Spacing**: Generous top padding, approximately 3rem; column gaps distribute evenly
- **Composition**: Grid with equal columns; legal row separated by spacing rather than visible rule

### Chat widget

- **Anatomy**: Floating card with header, contact options, close control
- **Surface**: White background with subtle shadow; teal accent for interactive elements
- **Typography**: Label token for header, body token for contact details
- **Shape**: 0.5rem border-radius on card
- **Spacing**: Compact internal padding, approximately 1.5rem
- **Composition**: Fixed position lower right, overlaying footer content

## Responsive behavior

The design should maintain its two-mode color system across breakpoints. The global navigation will require adaptation: primary links collapse to a menu control on smaller viewports while utility buttons and search remain accessible. Hero headlines should scale down from 3rem to maintain readability without overwhelming smaller screens; 2rem provides a practical minimum for the display role.

The two-column card grid on the corporate page should stack to single column below approximately 768px viewport width, with cards maintaining full width and internal padding. Footer columns should reflow from five across to two or one column, preserving link groupings. The chat widget remains fixed-position but may require width adjustment to avoid obscuring essential footer content.

Touch targets for navigation and buttons should meet minimum 44px height. The relative unit scale of 0.25rem supports fine-grained adjustments for different densities.

## Practical implementation guidance

### Preserve
- The strict single-family typography system; do not introduce secondary display or body faces
- The contrast between warm hero moments and neutral/dark functional surfaces
- The dark navigation and footer as persistent anchors across page types
- The restrained use of teal as a functional accent limited to interactive cues

### Avoid
- Adding decorative borders or shadows to cards beyond the subtle existing treatment
- Using the warm red-orange for functional UI elements like buttons or form controls
- Introducing additional accent colors that compete with the established red-teal pairing
- Rendering body text below 1rem or line height below 1.5 for accessibility

### Recommended build order
1. Establish the By Dalton Maag Ltd-14087066475762335141 font family with variable weight support
2. Implement the dark global navigation with logo, links, and utility buttons
3. Build the hero section with flexible background handling for imagery and gradients
4. Create the content card component with consistent padding and border-radius
5. Construct the footer grid with responsive column behavior
6. Add the floating chat widget as an overlay component

### Accessibility
- Ensure white text on red-orange heroes meets contrast requirements; the warm background may need darkening for smaller text
- Maintain focus indicators on all navigation links and buttons against dark backgrounds
- Structure footer columns with proper heading hierarchy for screen reader navigation
- Provide visible labels alongside icons in utility buttons for clarity

## Scope note

This guide covers the homepage and corporate About page surfaces visible in the supplied images. Product detail pages, documentation, authenticated dashboards, and mobile-specific layouts are not represented. Motion, hover states, form interactions, and loading patterns are not described. Measurements are practical adaptation targets.
