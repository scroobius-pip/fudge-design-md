# How dashboard.plaid.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dashboard.plaid.com-design)

Last updated: 2026-08-10

## Captured pages

[![Signup page with black left panel, white right panel, and three selectable role cards with illustrations](https://pin.fontofweb.com/4325?format=jpg)](https://design.withfudge.com/share/pin-4325)

[Signup page with black left panel, white right panel, and three selectable role cards with illustrations](https://design.withfudge.com/share/pin-4325)

[![Signin page with email input field, error state, gray continue button, and colorful geometric illustration on right side](https://pin.fontofweb.com/4324?format=jpg)](https://design.withfudge.com/share/pin-4324)

[Signin page with email input field, error state, gray continue button, and colorful geometric illustration on right side](https://design.withfudge.com/share/pin-4324)

## Overview

The Plaid Dashboard design system governs the authentication and onboarding surfaces for developer and business accounts. The visual language is built on stark contrast: a deep black sidebar anchors the signup experience against a clean white content area, while the signin page inverts to a predominantly white canvas with colorful geometric illustration. The system prioritizes clarity and task completion over decorative flourish, using restrained color, consistent geometric corners, and a single type family with clear weight distinctions. Role selection, email authentication, and account recovery flow through a shared component vocabulary that keeps visual noise minimal while maintaining sufficient hierarchy to guide users through multi-step onboarding.

## Colors

The palette is intentionally narrow, relying on black and white for structural contrast with gray serving as the sole neutral accent. Color is reserved for functional states and illustration, not for branding repetition.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, sidebar background, logo mark |
| canvas | #FFFFFF | Page background, card surfaces, input fields, sidebar text |
| muted | #757575 | Secondary text, disabled button states, placeholder content |
| surface | #F5F5F5 | Subtle background variation for inactive or hover states |
| border | #D0D0D0 | Input outlines, card borders, divider lines |
| error | #D32F2F | Invalid input messages, error icons, form validation |
| action | #757575 | Primary button fill, active selection indicators |

The black sidebar on the signup page demonstrates the system's confidence in high-contrast pairing: white text at multiple sizes sits directly on #000000 without intermediate layers. The signin page shifts to a white-dominant scheme where the same gray (#757575) carries button and secondary text responsibilities. Error states introduce the only warm color, a clear red that interrupts the cool neutrality to signal form validation failure. The geometric illustration on the signin page uses purple, blue, and green tones, but these remain strictly illustrative and do not appear in interface elements.

## Typography

The system uses Cern-Italic 600, a geometric sans-serif designed by Ian Lynam and distributed by Wordshape. Verify licensing for these families before production use.| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cern-Italic 600 | 2.5rem | 600 | 1.1 | -0.01em | Sidebar headlines, major page titles |
| section-display | Cern-Italic 600 | 1.75rem | 600 | 1.2 | 0em | Content area headings, welcome messages |
| body | Cern-Italic 600 | 1rem | 400 | 1.5 | 0em | Paragraph text, list items, card descriptions |
| body-small | Cern-Italic 600 | 0.875rem | 400 | 1.5 | 0em | Supporting details, error messages, captions |
| label | Cern-Italic 600 | 0.75rem | 400 | 1.4 | 0.01em | Form field labels, compact metadata |
| navigation | Cern-Italic 600 | 0.875rem | 600 | 1 | 0em | Buttons, links, top-bar actions |

The hero-display size at 2.5rem (40px) drives the sidebar's "Join thousands of businesses" message with tight leading that stacks cleanly without excessive vertical spread. Section-display at 1.75rem (28px) handles the "Welcome back" and "Welcome! How can we help you get started?" headings in the white content areas. Body text at 1rem (16px) maintains comfortable reading length for descriptive paragraphs and card content. The navigation token's 600 weight and compact line height suit button labels and header actions where vertical space is constrained. All sizes are whole-number multiples of the 4px base unit.

## Layout

The signup page employs a fixed split-panel layout: approximately 40% width allocated to a black sidebar with vertically centered content, and 60% to a white content area with horizontally centered selection cards. The sidebar content maintains generous padding, roughly 3rem from edges, with the Plaid logo positioned at the top. The content area centers its material within a maximum width, leaving substantial whitespace on larger viewports.

The signin page shifts to a single-column form layout on the left portion of the screen, approximately 50% width, with the remaining right portion dedicated to full-height illustration. The form column uses left-aligned content with moderate left padding, while the illustration bleeds to the viewport edge. A top navigation bar spans full width with logo left and action buttons right.

Spacing follows a 4px base unit. Section-level vertical spacing uses 4rem (64px) between major content groups. Component internal padding ranges from 1rem to 1.5rem. Tight spacing at 0.5rem (8px) handles label-to-input relationships and inline icon-text pairs. The role cards on the signup page stack with 0.75rem (12px) vertical gaps, creating distinct but connected selection targets.

## Visual language

The aesthetic is deliberately institutional and developer-focused: clean lines, minimal rounding, and absence of decorative gradients or shadows. Corner radius is consistently 0.25rem (4px) across buttons, inputs, and cards—just enough to soften edges without suggesting playfulness. The geometric illustration style on the signin page uses flat color blocks, thin black outlines, and abstract human figures in constructed environments, reinforcing the "building" metaphor without literal construction imagery.

Iconography appears as simple line illustrations within role cards: a browser window with code brackets for developers, stacked books for hobbyists, and a mobile device with heart for app users. These share the illustration style's flat color treatment and thin outlines. The Plaid logo itself is a black geometric knot mark, wordmark optional.

The system avoids depth effects: no drop shadows on cards or buttons, no gradient overlays, no glassmorphism. Elevation is communicated solely through color inversion (black sidebar vs. white content) and border presence. This flatness supports the technical credibility appropriate for a financial infrastructure platform.

## Components

**Primary button**
- Anatomy: Text label with right-pointing chevron icon
- Surface: Solid #757575 fill with #FFFFFF text
- Typography: navigation token, 0.875rem, weight 600
- Shape: 0.25rem corner radius, full-width in forms or content-width in navigation
- Spacing: 1rem vertical padding, 1.5rem horizontal, icon positioned at right edge with internal padding
- Composition: Flex row with space-between alignment; chevron indicates forward progression
- States: The signup page shows a disabled or inactive gray state; active state would maintain the same fill with potential hover darkening

**Secondary button**
- Anatomy: Text label with right-pointing chevron, bordered container
- Surface: #FFFFFF fill with #000000 text and #D0D0D0 border
- Typography: navigation token
- Shape: 0.25rem corner radius
- Spacing: Matching primary button dimensions
- Composition: Used in top navigation for "Get started" action, paired with plain text "Log in" link

**Text input**
- Anatomy: Label text above, single-line field below, error message and icon below when invalid
- Surface: #FFFFFF fill with #D0D0D0 border; error state adds #D32F2F border and message
- Typography: label token for field name, body token for entered text, body-small for error
- Shape: 0.25rem corner radius, 1px border weight
- Spacing: 0.5rem between label and field, 0.5rem between field and error message
- States: Default shows placeholder or empty; invalid state displays red border, error icon (circle with X), and "Email is invalid" message in red

**Role selection card**
- Anatomy: Icon illustration left, text block right (title and description), full-width container
- Surface: #FFFFFF fill with #D0D0D0 border
- Typography: body token for title at weight 600, body-small for description at weight 400
- Shape: 0.25rem corner radius
- Spacing: 1.5rem internal padding, icon sized approximately 3rem square
- Composition: Horizontal flex with centered vertical alignment; three cards stack vertically with 0.75rem gaps
- States: Default border state; selected or hovered state would likely darken border or add surface background

**Top navigation bar**
- Anatomy: Logo mark and wordmark left, text link and secondary button right
- Surface: Transparent or #FFFFFF background
- Typography: navigation token for button, body-small for "Log in" link
- Composition: Flex row with space-between, items vertically centered
- Spacing: Approximately 1.5rem horizontal padding from viewport edges

**Error message**
- Anatomy: Icon (circle with X) left, text right
- Surface: No background; text and icon in #D32F2F
- Typography: body-small token
- Composition: Inline flex row, icon approximately 1rem square with 0.5rem right margin

## Responsive behavior

The split-panel signup layout likely collapses to single-column on narrower viewports, with the black sidebar moving above the white content area or converting to a collapsible header. The sidebar's marketing copy and checklist would need vertical stacking with reduced section spacing.

The signin page's illustration-heavy right panel should hide or reposition below the form on smaller screens, preserving the functional login flow as the primary content. The form column's generous left padding would reduce to standard viewport margins.

Button full-width behavior in forms should maintain on mobile for thumb reachability. Role cards would stack identically but with increased touch targets, likely expanding vertical padding to 2rem or more.

## Practical implementation guidance

**Preserve**
- The stark black-white contrast as the primary visual signature; do not introduce additional neutrals between these poles
- The consistent 4px corner radius across all interactive elements; resist pressure to differentiate buttons with larger radii
- The right-aligned chevron in buttons as a directional cue for multi-step flows
- The geometric illustration style with flat color and thin black outlines when commissioning new artwork

**Avoid**
- Adding drop shadows or gradients to cards and buttons; the system's flatness is intentional and differentiating
- Using the illustration palette colors (purple, blue, green) for UI elements; reserve these for artwork only
- Increasing type size beyond the established scale; the current hierarchy is deliberately restrained
- Replacing the geometric Cern-Italic 600 family with a more humanist or decorative sans-serif

**Recommended build order**
1. Establish the 4px base grid and type scale with Cern-Italic 600 at all six defined sizes
2. Implement the black sidebar and white content area as the foundational layout structure
3. Build the input field and button components with shared 0.25rem radius and consistent padding
4. Add form validation states with the red error color and inline icon pattern
5. Construct role cards with horizontal flex layout and illustration sizing
6. Integrate the top navigation with logo and action button pairing
7. Commission or adapt geometric illustration in the established flat style

**Accessibility**
- Ensure the black sidebar's white text maintains 4.5:1 contrast ratio at body size and 3:1 for large hero text
- The gray button fill (#757575) on white text passes contrast for large text but should be verified against WCAG AA for smaller button labels; consider darkening to #595959 if needed
- Error states should not rely on color alone; the icon plus text pattern already supports this
- Form labels should remain persistently visible, not shifting to placeholder-only patterns
- Focus indicators should be clearly visible against both black and white backgrounds; a 2px outline offset from element edges works across both surfaces

## Scope note

This guide covers the signup and signin entry surfaces of the Plaid Dashboard. Dashboard interior pages, data visualization, table components, and mobile-specific layouts are not represented in the supplied material. Motion, loading states, and success confirmations are not documented. Measurements are practical adaptation targets.
