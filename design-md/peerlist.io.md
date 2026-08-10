# How peerlist.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/peerlist.io-design)

Last updated: 2026-08-10

## Captured pages

[![Signup page with stacked avatar group, italic serif subhead, and rounded dark submit button in a shadowed card](https://pin.fontofweb.com/2702?format=jpg)](https://design.withfudge.com/share/pin-2702)

[Signup page with stacked avatar group, italic serif subhead, and rounded dark submit button in a shadowed card](https://design.withfudge.com/share/pin-2702)

[![Login page with gradient serif welcome text, Google SSO option, and pill-shaped dark login button](https://pin.fontofweb.com/2701?format=jpg)](https://design.withfudge.com/share/pin-2701)

[Login page with gradient serif welcome text, Google SSO option, and pill-shaped dark login button](https://design.withfudge.com/share/pin-2701)

[![Homepage footer with italic serif headline, username claim input with green icon, and multi-column link grid](https://pin.fontofweb.com/2700?format=jpg)](https://design.withfudge.com/share/pin-2700)

[Homepage footer with italic serif headline, username claim input with green icon, and multi-column link grid](https://design.withfudge.com/share/pin-2700)

[![FAQ section with bold question headings and muted gray body text in a narrow centered column](https://pin.fontofweb.com/2699?format=jpg)](https://design.withfudge.com/share/pin-2699)

[FAQ section with bold question headings and muted gray body text in a narrow centered column](https://design.withfudge.com/share/pin-2699)

## Overview

Peerlist presents itself as a professional network for technology builders, and its visual system communicates this through a deliberate tension between utilitarian clarity and editorial personality. The interface is built on a foundation of stark black-and-white contrast, with moments of warmth introduced through an italic serif typeface that handles display and emotional headlines. The overall impression is of a platform that takes professionalism seriously but avoids corporate stiffness—more design-forward portfolio than traditional résumé database.

The system uses a restrained palette with a single bright green accent that appears selectively, primarily in the brand mark and call-to-action moments. Layouts are spacious and centered, with generous whitespace that lets the typography breathe. Forms are contained within softly shadowed cards that float against clean backgrounds, creating a sense of focused task completion without visual noise. The combination of Geist for all functional text and Instrument Serif for display moments creates a clear hierarchy that guides the eye from expressive headlines to actionable UI elements.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, primary button backgrounds, strong borders |
| canvas | #ffffff | Page backgrounds, card surfaces, input backgrounds, button text on dark |
| muted | #6b7280 | Secondary text, placeholders, divider labels, footer links, legal copy |
| accent | #22c55e | Brand mark, success states, primary interactive highlights |
| surface | #f9fafb | Subtle background variations, hover states for light surfaces |
| border | #e5e7eb | Input borders, card outlines, dividers, separator lines |

The color system operates in a near-monochrome mode for most of the interface, with black serving as the dominant presence for text and primary actions. This creates high contrast and immediate legibility. The green accent is used sparingly enough that it retains visual punch when it appears—most notably in the circular Peerlist mark with its white "P" on green.

Text hierarchy is achieved through opacity and weight rather than color variation: body text sits at full black, while secondary and tertiary information shifts to the muted gray. The border color provides subtle structure without competing for attention, appearing as hairline dividers and input outlines. There is no dark mode visible in the supplied surfaces; the system appears optimized for light-background presentation throughout.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 2.5rem | 400 | 1.2 | -0.01em | Page headlines, signup/login display text |
| section-display | Instrument Serif | 2rem | 400 | 1.25 | -0.01em | Section headers, italic callouts |
| body | Geist | 1rem | 400 | 1.6 | 0em | Paragraph text, descriptions, FAQ answers |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0em | Compact descriptions, helper text |
| label | Geist | 0.875rem | 500 | 1.4 | 0em | Form labels, button text, navigation links |
| navigation | Geist | 0.875rem | 400 | 1.4 | 0em | Footer links, secondary navigation |
| legal-copy | Geist | 0.75rem | 400 | 1.5 | 0em | Copyright, terms references, fine print |

The typographic system pairs two distinct voices: Instrument Serif for moments of personality and Geist for everything functional. Instrument Serif appears exclusively in its italic form for display headlines, lending an approachable, almost handwritten quality to what would otherwise be sterile conversion pages. The "Join 152,778+ peers" and "Welcome back!" texts demonstrate how this italic treatment softens the transactional nature of authentication flows.

Geist handles all interface text with a clean, contemporary sans-serif presence. Its medium weight is reserved for labels and buttons, while regular weight carries body copy and navigation. The type scale is compact, with only a few sizes serving multiple roles—this restraint keeps the system manageable and the visual rhythm consistent.

Instrument Serif was designed by Rodrigo Fuenzalida and is available from Frag Type. Geist was created by Basement Studio with contributions from Andrés Briganti, Guido Ferreyra, and Mateo Zaragoza, and is available from Vercel. Roboto is also present in the source but does not appear to serve a visible role in the captured surfaces. Verify licensing for these families before production use.

## Layout

The layout philosophy centers on single-column, centered compositions that prioritize focus and readability. Maximum content widths are constrained, creating comfortable line lengths and a sense of intentional whitespace on larger viewports. The authentication pages demonstrate this clearly: all elements stack vertically in a narrow central column, with the card container providing the primary structural boundary.

Vertical rhythm is generous, with significant space between the page headline and the action card, and again between the card and footer elements. This breathing room prevents the interface from feeling cramped even when the actual content is minimal. The homepage footer shows a more complex layout with a two-column link grid, yet even here the overall container remains centered and bounded.

The card component serves as the primary content container on transactional pages. It features rounded corners and a subtle shadow that lifts it from the background without dramatic elevation. Internal padding is substantial, keeping form elements comfortably separated from edges and from each other. Input fields stack with consistent vertical spacing, and labels sit directly above their associated controls in a tight, scannable relationship.

Grid usage is minimal in the captured surfaces—what structure exists is largely implicit through stacking and alignment rather than explicit grid lines. The footer link columns are the most complex layout element visible, using a simple two-column text arrangement with clear category headers.

## Visual language

The visual language of Peerlist balances restraint with selective expressiveness. The most distinctive element is the use of italic serif typography for emotional headlines, creating a human voice within an otherwise systematic interface. This editorial touch appears on conversion pages where user motivation matters most, suggesting that the platform understands the personal significance of professional identity.

Photographic elements are limited but purposeful: the stacked avatar group on the signup page provides social proof through tiny circular portraits, their overlapping edges creating a sense of community density. These avatars use full circular cropping, contrasting with the rounded rectangles elsewhere in the system.

The Peerlist mark itself is a simple green circle containing a white "P" letterform—clean, memorable, and scalable. It appears in the username claim input as a small inline icon and in the footer at a larger scale as a wordmark rendered in a light gray tone.

Shadows are subtle and functional rather than decorative. The card shadow provides just enough depth to establish layering without suggesting heavy materiality. There are no gradients visible in interface elements, no glassmorphism effects, and no animated transitions captured in the still images. The overall aesthetic is one of confident simplicity: every element earns its place through utility, with the serif headlines providing the sole decorative relief.

## Components

### Authentication card

- **Anatomy**: Vertically stacked container with social login option, divider with text, form fields, primary action button, and legal text footer
- **Surface**: White background with subtle shadow, rounded corners
- **Typography**: Display headline in italic serif above; labels in medium sans-serif; button text in medium sans-serif with arrow icon
- **Shape**: `border-radius: 1rem` for card; `border-radius: 9999px` for primary button
- **Spacing**: Generous internal padding; comfortable vertical rhythm between elements
- **Composition**: Centered on page; narrow maximum width for focused task completion
- **Variants**: Signup variant includes avatar stack and peer count; login variant includes "Forgot Password?" link and "Create One!" conversion path

### Social login button

- **Anatomy**: Full-width button with leading provider icon and text label
- **Surface**: White background with light border
- **Typography**: Medium weight sans-serif, 0.875rem
- **Shape**: Pill-shaped with `border-radius: 9999px`
- **Spacing**: Centered content with comfortable horizontal padding
- **Composition**: Sits at top of form card, above divider

### Text input

- **Anatomy**: Label above, input field below; password variant includes visibility toggle
- **Surface**: White background with light gray border
- **Typography**: Placeholder text in muted gray; input text in black
- **Shape**: Rounded corners at `0.75rem`
- **Spacing**: Label sits close above input; inputs stack with consistent gap
- **Composition**: Full width within card container

### Primary button

- **Anatomy**: Full-width container with centered text and trailing arrow icon
- **Surface**: Solid black background with white text
- **Typography**: Medium weight sans-serif, 0.875rem
- **Shape**: Fully pill-shaped at `border-radius: 9999px`
- **Spacing**: Tall vertical padding for substantial click target
- **Composition**: Centered text with icon; full width within container

### Username claim input

- **Anatomy**: Inline brand mark, URL prefix text, editable username portion, and submit button
- **Surface**: White background with light border and shadow
- **Typography**: URL prefix in black; username placeholder in muted gray; submit arrow in white on gray circle
- **Shape**: Pill-shaped overall container; circular submit button
- **Spacing**: Compact horizontal arrangement with clear visual separation between static and editable text
- **Composition**: Centered below display headline; functions as primary homepage conversion element

### Footer

- **Anatomy**: Large faint wordmark, two-column link grid, copyright line with brand mark
- **Surface**: White or near-white background
- **Typography**: Category headers in medium weight sans-serif; links in regular weight sans-serif at muted gray
- **Spacing**: Generous top margin; comfortable spacing between link rows
- **Composition**: Centered content with asymmetric left-side wordmark and right-side link columns

## Responsive behavior

The captured surfaces suggest a mobile-first or mobile-optimized approach, with single-column layouts that would translate directly to smaller viewports without significant restructuring. The authentication cards appear to use a width that would comfortably fill a phone screen with modest margins, and the centered stacking pattern requires no breakpoint intervention.

For larger viewports, the system likely maintains its centered narrow-column approach for transactional pages, preserving the focused task-completion experience. The homepage footer shows awareness of wider screens through its two-column link grid, which would compress to a single column on mobile.

Touch targets appear adequately sized, particularly the pill-shaped buttons with their generous vertical padding. Input fields maintain comfortable heights with clear borders that would remain tappable at reduced scale.

When implementing responsive behavior, maintain the single-column card layout for authentication across all breakpoints, allowing only the external margins to expand. The footer link grid should stack vertically on narrow viewports while the large wordmark may scale down or hide to prioritize functional navigation.

## Practical implementation guidance

### Preserve
- The stark black-and-white palette with single green accent; this restraint is central to the brand identity
- Italic Instrument Serif for all display headlines; the personality of this voice is irreplaceable
- Pill-shaped primary buttons with trailing arrow icons; this pattern signals forward momentum
- Generous whitespace around cards and between form elements; the breathing room conveys confidence
- The stacked circular avatar pattern for social proof; the overlapping edge detail creates community density

### Avoid
- Adding additional accent colors; the green alone carries sufficient brand weight
- Using Instrument Serif for body text or UI labels; reserve it for display moments only
- Heavy shadows or dramatic elevation; the subtle card shadow is the maximum depth needed
- Tight spacing in form cards; the current padding contributes significantly to perceived quality
- Generic placeholder text; the current placeholders are specific and actionable ("At least 8 characters")

### Recommended build order
1. Establish the color tokens and typography scale, ensuring Instrument Serif italic loads correctly
2. Build the card container with its shadow and rounded corners
3. Implement form inputs with proper label association and placeholder styling
4. Create the pill button component with arrow icon and full-width behavior
5. Assemble the authentication page layout with centered column and vertical stacking
6. Add the social login button and divider pattern
7. Implement the homepage footer with link grid and wordmark

### Accessibility
- Ensure the green accent meets contrast requirements when used for text or interactive elements; the brand green on white may need darkening for small text
- Provide visible focus indicators for all interactive elements; the current design does not show focus states
- Maintain the association between labels and inputs programmatically
- The arrow icons in buttons should have appropriate screen-reader treatment or be marked decorative
- Consider reduced-motion preferences for any future animated transitions

## Scope note

This guide covers the authentication flows and homepage footer visible in the supplied images. Navigation headers, profile pages, job listings, and interactive states such as hover, focus, loading, and error conditions are not represented. The dark mode presentation, if any exists, is not documented here. Measurements are practical adaptation targets derived from the visible surfaces.
