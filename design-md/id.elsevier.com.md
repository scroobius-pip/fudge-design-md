# How id.elsevier.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/id.elsevier.com-design)

Last updated: 2026-08-10

## Captured pages

[![Modal dialog showing Elsevier institutional login with orange-accented header, text input field, and disabled submit button](https://pin.fontofweb.com/4303?format=jpg)](https://design.withfudge.com/share/pin-4303)

[Modal dialog showing Elsevier institutional login with orange-accented header, text input field, and disabled submit button](https://design.withfudge.com/share/pin-4303)

[![Full page view with ScienceDirect header, vintage map background, centered login modal, and institutional footer with RELX branding](https://pin.fontofweb.com/4302?format=jpg)](https://design.withfudge.com/share/pin-4302)

[Full page view with ScienceDirect header, vintage map background, centered login modal, and institutional footer with RELX branding](https://design.withfudge.com/share/pin-4302)

[![Cookie consent banner with teal primary action button, white secondary button, and footer links on gray background](https://pin.fontofweb.com/4301?format=jpg)](https://design.withfudge.com/share/pin-4301)

[Cookie consent banner with teal primary action button, white secondary button, and footer links on gray background](https://design.withfudge.com/share/pin-4301)

## Overview

This design system governs the Elsevier institutional authentication experience, a focused interface for organizational login and access verification. The visual approach pairs a clean, centered modal dialog with a distinctive vintage cartographic background, creating an atmosphere of scholarly heritage while maintaining modern usability standards. The interface prioritizes clarity and trust: the Elsevier tree-and-scholar logo anchors the top of the modal, instructional text guides users through the authentication flow, and interactive elements use a teal accent color that signals action without overwhelming the restrained palette.

The system operates across two primary surfaces: the authentication modal itself and the persistent page footer containing institutional links, legal information, and cookie consent. A cookie consent banner overlays the footer when active, presenting a clear choice between accepting cookies or adjusting settings. The overall impression is one of institutional confidence—professional, uncluttered, and deliberately branded through color and imagery rather than decorative elements.

## Colors

The color palette is intentionally limited, drawing from institutional neutrals, a single warm accent, and a functional teal for interactive states.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, input underlines, secondary button borders |
| canvas | #FFFFFF | Modal background, primary button text, cookie banner surface |
| surface | #F5F5F5 | Page footer background, disabled states |
| muted | #7E7E7E | Disabled button text, placeholder states |
| action | #007398 | Primary buttons, text links, active input labels, cookie policy links |
| action-hover | #005A75 | Darker teal for hover states on action elements |
| accent | #E9711C | Modal top border, Elsevier wordmark, ScienceDirect header |
| accent-warm | #C67D3A | Vintage map tint, photographic warmth in background imagery |
| border | #D9D9D9 | Footer divider, subtle structural borders |
| disabled | #D9D9D9 | Inactive submit button background |

The warm orange accent appears sparingly as a brand signal: a 4px top border on the modal, the Elsevier wordmark beneath the tree logo, and the ScienceDirect header in the upper left of the full page view. The teal action color carries all functional weight for buttons, links, and interactive text. The vintage map background uses desaturated warm tones that harmonize with the accent without competing for attention. Light and dark modes are not present; the system relies on a single light theme with sufficient contrast for accessibility.

## Typography

The type system uses a single font family, Hprefvnquvjibbpblyxjblvckra, which loads from the Elsevier font source as NexusSansWebPro. The family was designed by Martin Majoor with a nonwestern version by Inka Strotmann, available from Fsi/FontFont. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Hprefvnquvjibbpblyxjblvckra | 1.5rem | 400 | 1.2 | 0em | Modal heading "Find your organization" |
| section-display | Hprefvnquvjibbpblyxjblvckra | 1.25rem | 400 | 1.3 | 0em | Cookie banner heading |
| body | Hprefvnquvjibbpblyxjblvckra | 1rem | 400 | 1.5 | 0em | Instructional text, button labels, form content |
| body-small | Hprefvnquvjibbpblyxjblvckra | 0.875rem | 400 | 1.5 | 0em | Footer navigation, cookie notice text |
| label | Hprefvnquvjibbpblyxjblvckra | 1rem | 400 | 1.5 | 0em | Input field labels, active states |
| navigation | Hprefvnquvjibbpblyxjblvckra | 0.875rem | 400 | 1.5 | 0em | Footer link rows |
| legal-copy | Hprefvnquvjibbpblyxjblvckra | 0.75rem | 400 | 1.5 | 0em | Copyright, cookie disclaimer |

All type is set in regular weight with neutral tracking, relying on size and color rather than weight variation to establish hierarchy. The modal heading at 1.5rem provides clear focal presence, while body text at 1rem maintains comfortable readability for instructional content. The input label uses the same size as body text but shifts from muted gray to teal when active, creating state change through color rather than size. Footer text scales down through two steps, with navigation at 0.875rem and legal copy at 0.75rem, keeping the footer informative without competing with the primary task.

## Layout

The page structure centers entirely on task completion, with the authentication modal as the dominant element.

The full page view reveals a layered composition: a fixed vintage map photograph fills the viewport as background, with a semi-transparent or lightly tinted overlay ensuring the modal remains legible. The ScienceDirect header occupies the absolute top-left, establishing product context without intruding on the authentication flow. The modal itself is centered both vertically and horizontally, with generous surrounding whitespace that isolates it from the decorative background.

The modal uses a fixed maximum width of approximately 28rem, with internal padding of 2rem on all sides. Content within the modal follows a strict vertical stack: logo and wordmark, heading, two paragraphs of instructional text, input field with bottom-border styling, submit button, and help link. Vertical spacing between these elements appears to be 1.5rem, creating clear separation without excessive distance.

Below the modal, the footer spans the full viewport width with a light gray background. It organizes content in horizontal bands: a top row of navigation links, a middle row with cookie notice and settings link, a text row with cookie explanation, and a bottom copyright line. The RELX Group logo appears right-aligned in the footer, balancing the Elsevier logo on the left.

The cookie consent banner, when active, overlays the lower portion of the viewport with a white background. It presents explanatory text on the left and two stacked buttons on the right, maintaining the modal's clean rectangular aesthetic.

## Visual language

The visual character derives from the deliberate contrast between historical imagery and contemporary interface elements. The vintage map—showing street layouts with labels like "Portland Street" and "Work House"—evokes Elsevier's long publishing heritage while functioning as atmospheric texture. This map is desaturated, light-toned, and sufficiently neutral that the white modal remains the clear focal point.

The Elsevier tree-and-scholar logo is rendered in fine line art, black on white, with the wordmark "ELSEVIER" in warm orange beneath it. This logo treatment appears both in the modal header and the footer, creating vertical brand continuity. The RELX Group logo in the footer uses a similar restrained approach.

Rectangularity dominates the interface language. All buttons, inputs, and containers use zero border radius, creating crisp edges that contrast with the organic curves of the map background. The modal's only decorative flourish is the 4px orange top border, which serves as both brand marker and visual anchor.

Photography and illustration are used exclusively as background atmosphere; no product imagery or user photography appears. The overall density is low, with generous whitespace supporting the focused task flow.

## Components

### Modal dialog

- **Anatomy**: Fixed-width container with logo block, heading, instructional paragraphs, form field, submit button, and help link stacked vertically.
- **Surface and text color**: White background with black text; teal for interactive elements.
- **Typography**: Heading uses hero-display; body text uses body; input label uses label in teal.
- **Shape and border**: Zero border radius; 4px solid orange top border; no side or bottom borders.
- **Spacing**: 2rem internal padding; 1.5rem between major elements.
- **Composition**: Centered in viewport; maximum width 28rem.
- **Variants**: The close button (X) appears in the upper right corner for dismissal.

### Text input

- **Anatomy**: Single-line field with bottom border only; no visible top, left, or right borders; no background fill.
- **Surface and text color**: Transparent background; label text in teal when active; underline in black.
- **Typography**: Label token for placeholder/label text.
- **Shape and border**: Full-width within modal; 1px solid black bottom border.
- **Spacing**: Padding 0.5rem top and bottom, 0 left and right.
- **Composition**: Sits directly above the submit button with standard form gap.

### Primary button

- **Anatomy**: Rectangular button with centered text; may include arrow indicator.
- **Surface and text color**: Teal background with white text.
- **Typography**: Body token; centered.
- **Shape and border**: Zero border radius; full width within modal padding.
- **Spacing**: Padding 0.75rem vertical, 1.5rem horizontal.
- **Variants**: Disabled state uses gray background with muted gray text.

### Secondary button

- **Anatomy**: Rectangular button with centered text.
- **Surface and text color**: White background with black text; 1px black border.
- **Typography**: Body token; centered.
- **Shape and border**: Zero border radius.
- **Spacing**: Padding 0.75rem vertical, 1.5rem horizontal.
- **Composition**: Used in cookie banner as "Cookie Settings" option.

### Text link

- **Anatomy**: Inline text with no underline in default state; underlined on hover expected.
- **Surface and text color**: Teal text on white or gray backgrounds.
- **Typography**: Body or body-small token depending on context.
- **Composition**: Used for "Get help with access," "Cookie Settings" in footer, and "Cookie Policy" in banner.

### Footer

- **Anatomy**: Full-width container with logo, navigation links, cookie notice, legal text, and corporate logo.
- **Surface and text color**: Light gray background; black text; teal for interactive links.
- **Typography**: Navigation token for links; legal-copy for copyright; body-small for notices.
- **Shape and border**: 1px top border in gray; no side or bottom borders.
- **Spacing**: Multiple horizontal bands with consistent vertical rhythm.
- **Composition**: Logo left-aligned; RELX logo right-aligned; navigation links in horizontal row.

## Responsive behavior

The modal maintains its centered position and fixed maximum width across viewport sizes. On narrower viewports, the modal should retain its 2rem internal padding while shrinking to fit available width. The footer navigation links should wrap to multiple lines on small screens, maintaining left alignment and consistent spacing between items.

The cookie consent banner's two-column layout with text left and buttons right should stack vertically on narrow viewports, with buttons full-width below the explanatory text. The "Accept all cookies" button should remain the primary action, appearing first in the stacked order.

The vintage map background should cover the viewport without distortion, using background-size cover behavior. On very short viewports, the modal may require internal scrolling if content exceeds available height.

## Practical implementation guidance

### Preserve
- The 4px orange top border on the modal as the primary brand signature.
- The vintage map background with its desaturated, light treatment.
- The single-font typographic system with size-based hierarchy.
- The full-bleed footer with institutional links and dual branding.
- The zero-border-radius rectangular aesthetic for all interactive elements.

### Avoid
- Adding border radius to buttons, inputs, or containers; the sharp rectangularity is intentional.
- Using the orange accent for functional actions; reserve it for brand identification only.
- Introducing additional font weights or families; the single regular weight is sufficient.
- Darkening the map background to the point where modal contrast suffers.
- Creating multiple modal variants with different border treatments.

### Recommended build order
1. Establish the base page with vintage map background and centered flex or grid container.
2. Build the modal shell with orange top border, white background, and internal padding.
3. Add typographic hierarchy with Hprefvnquvjibbpblyxjblvckra at specified sizes.
4. Implement the form with bottom-border input and full-width submit button.
5. Create the footer with gray background, navigation links, and dual logos.
6. Add the cookie consent banner with stacked button layout.
7. Implement state changes: active input labels in teal, disabled submit button in gray.

### Accessibility
- Ensure the teal action color (#007398) on white meets WCAG AA contrast ratios for normal text; verify against the 4.5:1 threshold.
- The disabled button state should not be the only indicator of form validity; add aria-disabled and descriptive text.
- The modal close button needs an accessible label and keyboard focus indicator.
- The vintage map background should not contain essential information; all content must be available without background image loading.
- Cookie banner buttons should be reachable via keyboard navigation and clearly labeled.
- Consider focus trapping within the modal when it is open, as it represents a modal dialog pattern.

## Scope note

This guide covers the institutional authentication page and cookie consent flow visible in the supplied images. Mobile breakpoints, hover and focus states, loading indicators, error messaging, and additional authentication steps are not represented. Measurements are practical adaptation targets.
