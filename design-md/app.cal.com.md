# How app.cal.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.cal.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark onboarding screen with calendar provider list and step progress indicator showing two completed steps out of five](https://pin.fontofweb.com/5535?format=jpg)](https://design.withfudge.com/share/pin-5535)

[Dark onboarding screen with calendar provider list and step progress indicator showing two completed steps out of five](https://design.withfudge.com/share/pin-5535)

[![Centered email verification card with envelope icon on dark background and resend link](https://pin.fontofweb.com/5534?format=jpg)](https://design.withfudge.com/share/pin-5534)

[Centered email verification card with envelope icon on dark background and resend link](https://design.withfudge.com/share/pin-5534)

[![Split-panel signup form with account creation fields and interactive calendar booking preview on right](https://pin.fontofweb.com/5533?format=jpg)](https://design.withfudge.com/share/pin-5533)

[Split-panel signup form with account creation fields and interactive calendar booking preview on right](https://design.withfudge.com/share/pin-5533)

[![Signup page with social authentication buttons and product award badges above calendar preview](https://pin.fontofweb.com/4811?format=jpg)](https://design.withfudge.com/share/pin-4811)

[Signup page with social authentication buttons and product award badges above calendar preview](https://design.withfudge.com/share/pin-4811)

## Overview

The Cal.com application interface presents a dark-first, productivity-oriented design system built around scheduling and calendar management. The visual language emphasizes clarity through high-contrast typography, restrained color usage, and generous rounded corners that soften the technical density of scheduling interfaces. The system operates across authentication flows, onboarding sequences, and account management screens, maintaining consistent spatial rhythms and component behaviors throughout.

The interface balances functional minimalism with persuasive elements. Split-panel layouts pair form-driven tasks on the left with product-preview illustrations on the right, demonstrating the scheduling experience while users complete account creation. This dual-purpose composition reinforces the product value without disrupting task completion. The dark canvas reduces visual fatigue during extended use while making calendar events and availability states more legible through controlled accent applications.

Typography plays a structural role, with Cal Sans providing distinctive display hierarchy and Inter handling functional body text and interface labels. The type system scales from prominent page titles through compact form labels without losing the geometric clarity that defines the brand presence. Surface layers create subtle depth through carefully controlled elevation, keeping the interface flat enough for rapid scanning while providing enough separation to guide attention through multi-step workflows.

## Colors

The color system rests on a near-black canvas with layered gray surfaces and white typography, punctuated by functional accent colors for validation states and interactive emphasis.

| token | value | use |
|---|---|---|
| canvas | #111111 | Primary page background across all screens |
| surface | #1a1a1a | Card backgrounds, input fields, elevated panels |
| surface-elevated | #242424 | Hover states, active selections, calendar day cells |
| ink | #ffffff | Primary text, headings, active icons |
| muted-ink | #a0a0a0 | Secondary text, descriptions, placeholders, inactive labels |
| border | #333333 | Visible dividers, input outlines, card borders |
| border-subtle | #2a2a2a | Hairline separators between list items, progress track |
| action | #ffffff | Primary button fills, active step indicators |
| action-text | #111111 | Text on primary buttons and light surfaces |
| success | #22c55e | Password validation checks, confirmation states |
| accent-orange | #f97316 | Product rating stars, promotional highlights |

The dark mode is intrinsic rather than optional—the canvas at #111111 provides the foundation for all screens, with surfaces stepping up in lightness to create elevation without introducing color temperature shifts. The border system uses two weights: a subtle #2a2a2a for internal list separations and a more visible #333333 for containing elements like cards and inputs. White serves dual roles as both primary ink and active action surface, with the action-text token ensuring legibility when white becomes background.

The success green appears selectively for validation feedback, as seen in password requirement checks during signup. The orange accent derives from product imagery and rating displays, functioning as a warm counterpoint to the cool grayscale system without becoming a persistent UI element. No light mode variant is visible in the supplied material.

## Typography

The type system combines a custom display family with a variable-width functional family, creating clear role separation between brand expression and interface utility.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cal Sans | 2rem | 600 | 1.1 | -0.02em | Page titles, form headings |
| section-display | Cal Sans | 1.5rem | 600 | 1.2 | -0.01em | Card titles, preview headings |
| body | Inter | 1rem | 400 | 1.5 | 0em | Descriptions, form text, legal copy |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0em | Captions, helper text, metadata |
| label | Inter | 0.875rem | 500 | 1.25 | 0em | Button text, input labels, navigation |
| navigation | Inter | 0.875rem | 400 | 1.25 | 0em | Links, back buttons, secondary actions |

Cal Sans appears exclusively for display hierarchy, with its semibold weight and tight negative tracking giving headings a confident, contemporary presence. The font is credited to Designer Mark Davis Dba Mark Fonts. Inter handles all functional typography, from body paragraphs through compact labels, with Rasmus Andersson credited as designer and Rsms as vendor. Verify licensing for these families before production use.

The type scale builds from a 0.25rem relative unit, with sizes landing at whole-number multiples: 0.875rem (7 units), 1rem (4 units), 1.5rem (6 units), and 2rem (8 units). Line heights stay tight for display use at 1.1-1.2 and open up to 1.5 for body readability. No italic styles are visible in the interface.

## Layout

The layout system employs centered single-column flows for focused tasks and split-panel compositions for persuasive signup experiences.

Single-column layouts center content within a maximum width, using generous vertical spacing to separate page titles, progress indicators, and action cards. The calendar connection screen demonstrates this pattern: a heading group with step counter sits above a contained card listing integration options, with tertiary actions below the primary surface. This vertical stacking creates clear reading order and accommodates variable content lengths without layout shifts.

Split-panel layouts divide the viewport into two asymmetric regions. The left panel carries the functional form—account creation fields, authentication options, or data entry—while the right panel presents a product preview. The preview panel shows the scheduling interface in action: a calendar grid with available time slots, event details, and feature callouts. This composition maintains approximately 45:55 or 40:60 proportions, with the functional side receiving slightly less space to emphasize the product demonstration.

Both patterns share consistent internal spacing. Cards and panels use padding of 1.5rem to 2rem, creating breathing room around dense content. Form fields stack with 1rem vertical gaps, while related field groups compress to 0.75rem for visual association. The progress indicator on multi-step flows uses horizontal segments with 0.5rem gaps, creating a connected but readable timeline.

Border radius creates containment hierarchy: outer panels receive 0.75rem rounding, internal cards and inputs use 0.5rem, and circular elements like avatar placeholders or icon backgrounds use full rounding. No sharp corners appear on interactive surfaces.

## Visual language

The visual character balances technical precision with approachable warmth through controlled geometry and selective depth.

Surface treatment follows a strict elevation model. The canvas at #111111 sits deepest, with cards and panels rising to #1a1a1a and interactive elements like selected calendar days or hovered items reaching #242424. This three-level system prevents the muddiness that comes from excessive gray variation while providing enough distinction for state changes. Borders reinforce rather than replace elevation, with subtle lines defining card perimeters and stronger outlines for focusable inputs.

Iconography appears functional and monochrome, integrated directly into list items or used as standalone indicators within circular containers. The email verification screen shows an envelope icon centered in a muted circular background, creating a focal point without decorative illustration. Calendar provider logos introduce the only multicolor elements, appearing as recognizable brand marks within otherwise monochrome rows.

The product preview panel introduces photographic and interface complexity that contrasts with the austere form panel. Calendar grids, time slot buttons, and event detail cards demonstrate the product's visual density while maintaining the same dark theme. Award badges and rating stars add social proof through small, high-contrast elements that draw scanning attention without disrupting the form completion flow.

Shadows are minimal or absent; depth derives from surface lightness changes and thin borders rather than atmospheric effects. This flatness supports the interface's technical, efficient character.

## Components

**Primary button**
- Anatomy: Text label with optional trailing icon, contained within a rounded rectangle
- Surface: White background (#ffffff) with near-black text (#111111)
- Typography: Inter 500 at 0.875rem, line-height 1.25
- Shape: 0.5rem border radius, padding 0.75rem vertical and 1.5rem horizontal
- Spacing: Full width within form containers, centered text
- States: The disabled state shows reduced opacity or muted background, as seen on the "Connect a calendar first" action

**Secondary button / outline button**
- Anatomy: Text label centered within bordered container
- Surface: Transparent background with #333333 border, white text
- Typography: Inter 500 at 0.875rem
- Shape: 0.5rem border radius, matching padding to primary variant
- Variants: Social authentication buttons add leading brand icon with inline text, using white background for Google sign-in

**Text input**
- Anatomy: Label above, input field below, optional helper text or validation list beneath
- Surface: #1a1a1a background, #333333 border, white text
- Typography: Inter 400 at 1rem for input text, Inter 500 at 0.875rem for label
- Shape: 0.5rem border radius, padding 0.75rem 1rem
- Composition: Label separated by 0.5rem from input; validation items stack with 0.25rem gaps and success-colored checkmarks

**Card / panel**
- Anatomy: Contained surface with optional header, body content, and footer actions
- Surface: #1a1a1a background, #2a2a2a or #333333 border
- Shape: 0.75rem border radius
- Spacing: 1.5rem to 2rem internal padding
- Variants: List cards use horizontal item layout with icon, title, and trailing action; form cards use vertical field stacking

**Progress step indicator**
- Anatomy: Horizontal sequence of segmented bars with step counter label
- Surface: Active segments use white (#ffffff), inactive use #2a2a2a
- Typography: Inter 400 at 0.875rem for step label
- Composition: Segments arranged left-to-right with 0.5rem gaps, approximately 4-6 segments visible

**Calendar preview (product demonstration)**
- Anatomy: Month header with navigation, day grid, time slot list, event detail sidebar
- Surface: #242424 for day cells, #1a1a1a for container, white text for active elements
- Typography: Cal Sans for event titles, Inter for metadata and time labels
- Composition: Asymmetric three-zone layout with event details left, calendar center, time slots right

**List item with action**
- Anatomy: Leading icon or logo, primary text, trailing button
- Surface: Transparent within card, subtle hover elevation to #242424
- Typography: Inter 500 at 0.875rem for item name
- Spacing: 1rem vertical padding, 1rem horizontal padding, full-width with internal flex distribution

## Responsive behavior

The split-panel layout should collapse to single-column on narrower viewports, with the product preview either hiding below the form or converting to a compact carousel. The functional form panel maintains its maximum width and centered alignment to preserve readable line lengths.

Form fields and buttons should expand to full width within their containers on all viewport sizes, with internal padding scaling down slightly on very narrow screens. The calendar connection list maintains its horizontal item layout but may stack icon and text vertically if horizontal space becomes constrained.

Typography scales down modestly: hero-display may reduce to 1.5rem on narrow viewports, with section-display following to 1.25rem. Body text and labels remain at fixed sizes since they already occupy efficient space.

The progress indicator segments should remain horizontally scrollable or compress proportionally rather than wrapping to multiple lines.

## Practical implementation guidance

**Preserve**
- The dark canvas as the default and only visible mode; do not assume a light variant exists
- The distinctive Cal Sans display typography for headings; this is central to brand recognition
- The split-panel composition for signup and onboarding flows; the product preview significantly reduces perceived friction
- The three-level surface elevation system (canvas, surface, surface-elevated) for consistent depth
- Full-width contained buttons within cards, with generous horizontal padding for comfortable touch targets

**Avoid**
- Adding decorative shadows or atmospheric depth effects; the flat surface model is intentional
- Introducing additional accent colors beyond the functional green and derived orange; the grayscale system is deliberately restrained
- Using Cal Sans for body text or interface labels; reserve it for display hierarchy only
- Sharp corners on interactive elements; the rounded treatment is consistent across all components
- Lightening the canvas significantly; even small shifts away from #111111 reduce the premium dark-mode character

**Recommended build order**
1. Establish the canvas and surface color tokens with the three-level elevation system
2. Implement the typography scale with Cal Sans and Inter loaded from the specified sources
3. Build the card and panel containers with correct border radius and padding
4. Create button variants (primary, secondary, outline) with consistent sizing
5. Implement form inputs with label stacking and validation state styling
6. Construct the split-panel layout shell for signup flows
7. Add the progress indicator and list-item components for onboarding
8. Integrate the calendar preview demonstration panel

**Accessibility**
- Ensure white text on dark surfaces meets WCAG AA contrast ratios; the #ffffff on #111111 combination exceeds requirements
- Provide visible focus indicators on all interactive elements; the current border-color changes should be enhanced with additional outline or ring treatments for keyboard navigation
- Maintain semantic heading hierarchy with Cal Sans display sizes mapping to h1-h3 levels
- Use aria-label or visible text for icon-only buttons like the password visibility toggle
- Consider reducing motion for users with vestibular sensitivities when implementing the step indicator transitions

## Scope note

This guide covers the authentication, email verification, and calendar onboarding surfaces visible in the supplied material. Dashboard, settings, booking management, and mobile-specific layouts are not represented. Motion, hover states, focus styles, and error messaging beyond password validation were not captured. Measurements are practical adaptation targets derived from visual inspection against a 0.25rem relative unit grid.
