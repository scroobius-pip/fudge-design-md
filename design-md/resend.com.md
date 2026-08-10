# How resend.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/resend.com-design)

Last updated: 2026-08-10

## Captured pages

[![Login page with centered auth form, dark canvas, and abstract grayscale fabric photography framing the composition](https://pin.fontofweb.com/9321?format=jpg)](https://design.withfudge.com/share/pin-9321)

[Login page with centered auth form, dark canvas, and abstract grayscale fabric photography framing the composition](https://design.withfudge.com/share/pin-9321)

[![Audience contacts dashboard with left sidebar navigation, tabbed sub-navigation, and empty-state card with centered call-to-action](https://pin.fontofweb.com/6941?format=jpg)](https://design.withfudge.com/share/pin-6941)

[Audience contacts dashboard with left sidebar navigation, tabbed sub-navigation, and empty-state card with centered call-to-action](https://design.withfudge.com/share/pin-6941)

[![Domains management table with verified status badge, region flag indicator, and filter controls in a dark interface](https://pin.fontofweb.com/6940?format=jpg)](https://design.withfudge.com/share/pin-6940)

[Domains management table with verified status badge, region flag indicator, and filter controls in a dark interface](https://design.withfudge.com/share/pin-6940)

[![Pricing page with four-tier card layout, interactive slider, and green checkmark feature comparison on dark background](https://pin.fontofweb.com/5164?format=jpg)](https://design.withfudge.com/share/pin-5164)

[Pricing page with four-tier card layout, interactive slider, and green checkmark feature comparison on dark background](https://design.withfudge.com/share/pin-5164)

## Overview

Resend's visual system is built around a dark-first philosophy that prioritizes developer focus and clarity. The interface immerses users in near-black surfaces with carefully calibrated warm gray typography, creating a subdued canvas where content and interactive elements command attention through contrast rather than decoration. The design language bridges editorial sophistication with utilitarian dashboard density—serif display type introduces personality on marketing surfaces while a geometric sans-serif family handles all functional interface text. A single mint-green accent color serves multiple roles: status indication, interactive feedback, and brand recognition. The overall impression is of a premium, technically precise tool that respects the user's visual environment without defaulting to generic dark-mode conventions.

## Colors

The palette is intentionally narrow, deriving its sophistication from value contrast rather than hue variety. Near-black establishes the dominant canvas, with layered warm grays creating subtle depth for elevated surfaces and borders.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, login backdrop, empty areas |
| surface | #18191C | Sidebar background, secondary panels, input backgrounds |
| surface-elevated | #212629 | Card backgrounds, table rows, elevated containers |
| ink | #F0F0F0 | Primary headings, active navigation, primary button text |
| ink-muted | #8798A6 | Body text, secondary labels, inactive navigation items |
| ink-dim | #A1A4A5 | Placeholder text, disabled states, tertiary information |
| border | #212629 | Card outlines, table dividers, container boundaries |
| border-subtle | #18191C | Hairline separators, input borders in rest state |
| action | #22FF99 | Primary accent, interactive highlights, success states |
| action-hover | #46FEA5 | Hover state for action elements, brighter accent moments |
| status-success | #22FF99 | Verified badges, positive indicators, checkmarks |
| status-success-bg | #212629 | Background fill for success badges |
| focus | #B0C7D9 | Focus rings, keyboard navigation indicators |

The dark canvas dominates all authenticated views and the login experience. Marketing pages like Pricing share the same dark foundation, maintaining continuity between product and promotional surfaces. The mint accent appears sparingly—only where user attention must be directed or status must be communicated. Warm gray ink tones prevent the coldness typical of pure-white-on-black interfaces, lending the system a refined, approachable quality.

## Typography

Resend employs a split typographic strategy: editorial display faces for brand expression and a workhorse geometric sans for all interface functionality. This separation ensures marketing moments feel distinctive while dashboard interactions remain maximally legible at small sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Domaine Display Narrow | 4rem | 400 | 1 | -0.02em | Marketing page headlines, pricing hero |
| section-display | Abc Favorit | 1.75rem | 500 | 1.2 | -0.045em | Dashboard page titles, section headers |
| body | Inter | 1rem | 400 | 1.5 | 0 | Primary body text, descriptions, form labels |
| body-small | Inter | 0.875rem | 400 | 1.4 | 0 | Secondary descriptions, metadata, table content |
| label | Inter | 0.875rem | 600 | 1.4 | 0 | Button text, tab labels, emphasized UI elements |
| navigation | Inter | 0.875rem | 400 | 1.4 | 0 | Sidebar links, top-bar actions, breadcrumbs |
| code | Commit Mono | 0.875rem | 400 | 1.5 | 0 | Code snippets, technical identifiers, API references |

Domaine Display Narrow, designed by Kris Sowersby at Klim Type Foundry, provides the editorial voice for marketing surfaces. Abc Favorit, from Dinamo Typefaces, supplies the distinctive medium-weight character for dashboard headings with its tight negative tracking. Inter, designed by Rasmus Andersson, handles all functional text from navigation to form inputs. Commit Mono by Eigil Nikolajsen serves technical content.Verify licensing for these families before production use.

## Layout

The authenticated dashboard employs a fixed left sidebar with a fluid main content area. The sidebar maintains consistent width and contains primary navigation organized by functional domain—Emails, Broadcasts, Templates, Audience, Metrics, Domains, Logs, API Keys, Webhooks, and Settings. Each navigation item pairs an icon with a text label, with the active state receiving a subtle elevated background treatment.

The main content area uses generous horizontal margins—approximately 9.5rem on each side at desktop widths—creating a centered, focused reading experience that prevents interface elements from stretching uncomfortably wide. Within this container, content follows a predictable hierarchy: page title at the top, followed by tabbed sub-navigation when applicable, then primary actions aligned to the right, and finally the main content surface below.

Page titles use the section-display token with tight tracking, establishing immediate visual hierarchy. Action buttons sit in the upper right of the content header, maintaining consistent placement across different dashboard views. Empty states occupy centered positions within card containers, with both heading and descriptive text aligned to center and a primary call-to-action button below.

The login page breaks from the sidebar pattern, using a full-bleed dark canvas with abstract grayscale photography positioned at the corners. The authentication form occupies the exact center of the viewport, with social login buttons arranged horizontally and email input below a horizontal rule separator.

## Visual language

Surface treatment relies on subtle value shifts rather than heavy shadows. The progression from canvas (#000000) to surface (#18191C) to surface-elevated (#212629) creates three distinct depth planes without introducing colored shadows or glow effects. Borders are hairline-thin and desaturated, appearing only where separation is functionally necessary.

Photography plays a distinctive role in the brand expression. The login page features abstract grayscale fabric imagery with dramatic lighting—smooth, flowing forms that suggest movement and technical precision without depicting literal technology. These images are desaturated entirely, allowing the mint accent to remain the sole color focus when it appears.

Iconography is minimal and functional. Navigation icons are simple line weights, paired with text labels to eliminate ambiguity. Status indicators use small colored dots or pill badges rather than complex icon systems. The verified badge on the Domains page combines a small icon with the "Verified" label in mint on a dark background, creating immediate scannability.

The pricing page introduces an interactive slider element—a horizontal track with a circular thumb for selecting email volume. This component uses the same dark surfaces with a light thumb, maintaining visual consistency while adding interactive engagement to the marketing experience.

## Components

### Primary button

Anatomy: Text label with optional leading icon, contained within a rounded rectangle.

Surface and text color: Two variants exist. The dark variant uses ink (#F0F0F0) text on a transparent or near-black background with a subtle border. The light variant uses near-black text on a white or off-white background. The login page shows a gradient-enhanced dark button with subtle sheen.

Typography: label token, Inter at 0.875rem weight 600.

Shape: 0.75rem border radius, creating a soft pill-like rectangle without being fully circular.

Spacing: Horizontal padding of 0.75rem to 1.25rem, vertical padding of 0.5rem to 0.75rem depending on context.

Variants: Default dark for dashboard actions, light for high-emphasis calls-to-action on dark backgrounds, icon-leading for actions like "Add contacts" or "Add domain."

### Secondary button / ghost button

Anatomy: Text label only, no background fill.

Surface and text color: Transparent background with ink-muted (#8798A6) text, transitioning to ink (#F0F0F0) on hover.

Typography: navigation or body-small token.

Shape: No border radius or matching the 0.75rem of primary buttons when container-style.

Spacing: Compact horizontal padding, typically 0.5rem.

Composition: Used for cancel actions, secondary navigation, and filter toggles.

### Input field

Anatomy: Label text above, single-line text entry area below.

Surface and text color: surface (#18191C) background with ink-muted placeholder text and ink text for entered values.

Typography: body token for entered text, body-small for labels.

Shape: 0.75rem border radius, matching button treatment.

Border: 1px solid border-subtle (#18191C) in rest state, transitioning to border (#212629) or focus (#B0C7D9) on interaction.

Spacing: Full width within container, internal padding of 0.75rem horizontal and 0.5rem vertical.

### Card / elevated surface

Anatomy: Contained rectangular area for grouping related content.

Surface: surface-elevated (#212629) or surface (#18191C) depending on context.

Shape: 1rem border radius for larger cards, 0.75rem for compact containers.

Border: 1px solid border (#212629) creating subtle definition against the canvas.

Spacing: Internal padding of 1.5rem to 2.5rem, depending on content density.

Composition: Used for empty states, table containers, and feature comparisons. The empty-state card centers all content vertically and horizontally.

### Table

Anatomy: Column headers with sortable indicators, data rows with consistent vertical rhythm.

Surface: Transparent or surface-elevated backgrounds alternating subtly.

Typography: body-small for headers and cell content, label for emphasized cell content like domain names.

Shape: Row separators are 1px solid border (#212629), no vertical borders.

Spacing: Cell padding of 0.75rem vertical, 1rem horizontal.

Composition: Status badges align to their column, action menus (three dots) align right. Region indicators combine a flag icon with text label.

### Badge / status pill

Anatomy: Text label with optional leading icon, contained in a fully rounded rectangle.

Surface and text color: status-success text on status-success-bg for verified states.

Typography: body-small at reduced size, weight 500.

Shape: 9999px border radius for full pill appearance.

Spacing: Horizontal padding of 0.5rem to 0.75rem, vertical padding of 0.25rem.

### Sidebar navigation

Anatomy: Vertical stack of icon-text pairs, with active state indicator.

Surface: surface (#18191C) background, active item uses surface-elevated (#212629) with rounded container.

Typography: navigation token, Inter 0.875rem weight 400.

Shape: 0.75rem border radius on active item container.

Spacing: Items stacked with 0.25rem gap, horizontal padding of 0.75rem, vertical padding of 0.5rem per item.

Composition: Icons are 1rem square, positioned left of text with 0.75rem gap. User profile and organization switcher fixed at top, user email truncated with ellipsis at bottom.

### Tab navigation

Anatomy: Horizontal row of text labels, with active indicator.

Surface: Transparent background, active tab uses surface-elevated with rounded container.

Typography: label token for active, navigation for inactive.

Shape: 0.75rem border radius on active tab.

Spacing: Horizontal gap of 0.25rem between tabs, internal padding of 0.5rem 0.75rem.

### Pricing card

Anatomy: Vertical stack with plan name, price, description, feature list, and call-to-action button.

Surface: Transparent or subtle surface-elevated with border.

Typography: hero-display for price numerals, section-display for plan names, body-small for features.

Shape: 1rem border radius, consistent height across tier columns.

Border: 1px solid border (#212629).

Spacing: Internal padding of 2rem, feature list with 0.75rem vertical gap.

Composition: Feature items align left with leading checkmark or cross icon. Price numerals are large and centered. Call-to-action button spans full width at card bottom.

## Responsive behavior

The sidebar navigation collapses to an icon-only rail or hamburger menu at narrower viewports, though the exact breakpoint is not visible in supplied materials. The main content margins should reduce proportionally—maintaining readability without the generous 9.5rem side margins on smaller screens.

Pricing cards transition from four-column horizontal layout to stacked vertical arrangement, likely at a medium breakpoint around 768px. The volume slider remains interactive but may require touch-optimized thumb sizing on mobile devices.

Form layouts like the login page maintain centered positioning but reduce in width, with social login buttons potentially stacking vertically on narrow screens. Input fields should remain full-width within their container with comfortable touch targets of at least 44px height.

Typography scales down modestly: section-display may reduce to 1.5rem on small screens, hero-display to 2.5rem. Line heights increase slightly for body text at small sizes to maintain readability.

## Practical implementation guidance

### Preserve
- The near-black canvas as the default background; resist adding lighter themes without clear purpose
- The warm gray ink tones rather than pure white; this subtle warmth defines the system's character
- The mint accent as the sole bright color, used only for interactive feedback and status
- The generous side margins on dashboard content; this breathing room is essential to the premium feel
- The split between editorial display type (marketing) and functional sans-serif (dashboard)

### Avoid
- Introducing additional accent colors beyond the mint green; the palette's restraint is intentional
- Heavy drop shadows or glow effects; depth comes from value shifts only
- Pure white backgrounds for any authenticated interface surfaces
- Rounding beyond 1rem for large containers; the system stays disciplined and rectangular
- Generic placeholder illustrations for empty states; the current text-centered approach is cleaner

### Recommended build order
1. Establish the dark canvas and surface color tokens with proper contrast ratios
2. Implement Inter for all body, navigation, and button text at specified sizes
3. Build the sidebar navigation with active state treatment
4. Create the card component with proper border and radius values
5. Add Abc Favorit for dashboard headings and Domaine Display Narrow for marketing heroes
6. Implement the mint accent system for buttons, badges, and status indicators
7. Build form components (input, button) with consistent radius and spacing
8. Add table components with proper row separators and cell padding

### Accessibility
- Ensure all text meets WCAG AA contrast ratios against the dark canvas; ink-muted (#8798A6) on canvas (#000000) should be verified as it may be borderline for small text
- Provide visible focus indicators using the focus token (#B0C7D9) for all interactive elements
- Maintain keyboard navigation order in the sidebar that matches visual order
- Use aria-labels for icon-only navigation states when sidebar collapses
- Ensure the pricing slider is operable via keyboard and screen reader announcements communicate the selected volume value

## Scope note

This guide covers the authenticated dashboard (Audience, Domains), authentication flow, and marketing pricing surfaces. Mobile layouts, animation specifications, hover and focus state details, toast notifications, and email template rendering are not represented in the supplied materials. The empty font-size lists for Commit Mono, Domaine Display Narrow, and By Johannes Breyer Fabian Harb Erkin Karamemet indicate those faces were not captured in measurable text contexts; implementers should verify optical sizing against the design intent.
