# How thefinch.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/thefinch.design-design)

Last updated: 2026-08-10

## Captured pages

[![Dark hero section with contact modal overlay showing blue gradient stats panel and white form card with blue submit button](https://pin.fontofweb.com/2286?format=jpg)](https://design.withfudge.com/share/pin-2286)

[Dark hero section with contact modal overlay showing blue gradient stats panel and white form card with blue submit button](https://design.withfudge.com/share/pin-2286)

[![Client logo marquee on white background with PROUDLY WORKED WITH label and eight partner logos in grayscale](https://pin.fontofweb.com/2285?format=jpg)](https://design.withfudge.com/share/pin-2285)

[Client logo marquee on white background with PROUDLY WORKED WITH label and eight partner logos in grayscale](https://design.withfudge.com/share/pin-2285)

[![Light hero homepage with large italic display typography, blue pill button, trust badges, and decorative arc wireframe graphic](https://pin.fontofweb.com/2284?format=jpg)](https://design.withfudge.com/share/pin-2284)

[Light hero homepage with large italic display typography, blue pill button, trust badges, and decorative arc wireframe graphic](https://design.withfudge.com/share/pin-2284)

[![Navigation bar with blue geometric logo, gray text links with chevrons, and blue pill-shaped inquiry button](https://pin.fontofweb.com/2283?format=jpg)](https://design.withfudge.com/share/pin-2283)

[Navigation bar with blue geometric logo, gray text links with chevrons, and blue pill-shaped inquiry button](https://design.withfudge.com/share/pin-2283)

## Overview

TheFinch presents a dual-mode visual system that alternates between bright, airy editorial surfaces and immersive dark environments. The homepage opens with a clean white canvas dominated by oversized display typography that shifts from upright light weight to bold italic, creating a rhythmic cadence in the headline. A precise electric blue serves as the singular accent, appearing in pill-shaped buttons, small icon badges, and gradient endpoints. The navigation sits transparently over the light hero, while deeper sections of the site transition to near-black navy backgrounds where statistics and contact forms gain dramatic contrast. Decorative thin-line arcs in the background add spatial depth without competing with content. The overall impression is of a technically proficient, contemporary agency that balances creative expressiveness with systematic restraint.

## Colors

The palette operates in two modes: a light mode for primary storytelling and a dark mode for immersive sections and modals. The electric blue action color bridges both contexts.

| token | value | use |
|---|---|---|
| action | #2563EB | Primary buttons, badges, gradient endpoints, active states |
| action-hover | #1D4ED8 | Button hover states, interactive emphasis |
| ink | #0F172A | Primary text on light backgrounds, logo mark |
| muted-ink | #64748B | Secondary text, navigation links, captions |
| canvas | #FFFFFF | Page background, modal card surface, button text |
| surface | #F8FAFC | Subtle alternate backgrounds, input fields |
| surface-dark | #0A1628 | Deep section backgrounds, hero overlays |
| surface-dark-elevated | #0F1D32 | Elevated cards on dark backgrounds, gradient start |
| border | #E2E8F0 | Dividers, input underlines on light backgrounds |
| border-dark | #1E293B | Subtle separators on dark backgrounds |

The light mode relies on pure white canvas with near-black ink for maximum readability. The dark mode uses a rich navy-black that avoids pure black, allowing the blue gradient in statistics panels to feel luminous rather than harsh. The blue accent is saturated and warm enough to feel energetic without becoming garish. Grayscale photography and client logos maintain neutrality across both modes.

## Typography

Three families appear in the source: Bw Gradual Demo for display, Lexend for body and interface text, and Cl 3 Iskicons for icon glyphs. The display family shifts dramatically between light upright and bold italic weights within the same headline, creating visual tension and emphasis. Cl 3 Iskicons provides the symbol set for UI icons and should not be used for body text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bw Gradual Demo | 4rem | 300 | 1.1 | -0.02em | Homepage headline, upright words |
| hero-display-italic | Bw Gradual Demo | 4rem | 700 | 1.1 | -0.02em | Homepage headline, emphasized words |
| section-display | Bw Gradual Demo | 2.5rem | 300 | 1.2 | -0.01em | Section headings, modal titles |
| body | Lexend | 1rem | 300 | 1.6 | 0em | Paragraphs, descriptions |
| body-small | Lexend | 0.875rem | 300 | 1.5 | 0em | Form labels, captions, metadata |
| label | Lexend | 0.75rem | 300 | 1.4 | 0.05em | Buttons, tags, uppercase labels |
| navigation | Lexend | 0.875rem | 300 | 1 | 0.01em | Menu items, dropdown triggers |

The display typeface contributes personality through its geometric construction and the dramatic weight contrast between light and bold italic. Lexend provides a neutral, highly legible counterpoint with its open forms and light weight. All type sizes are whole-number multiples of 4px (0.25rem), creating a rational underlying grid. Verify licensing for these families before production use. Lexend is designed by Bonnie Shaver-Troup and Thomas Jockin, available from Lexend.

## Layout

The page structure follows a centered editorial model with generous whitespace. The hero section occupies substantial vertical space, with the main headline centered and supported by a horizontal row of trust indicators below. Content max-width appears to be approximately 1200px, with text blocks narrower for readability.

Navigation spans the full width with logo left, links center, and primary action right. The logo combines a blue geometric mark with wordmark text. Navigation links include downward chevrons indicating dropdown menus, separated by subtle slash dividers.

Section spacing uses 6rem (96px) between major content areas, creating breathing room that reinforces the premium positioning. Component internal padding standardizes at 1.5rem (24px). The modal overlay centers a white card over a darkened backdrop, with the card receiving elevated shadow treatment.

Grid behavior in visible sections suggests a flexible approach: the hero is strictly centered, while statistics panels and service listings imply multi-column arrangements at wider viewports. The decorative arc graphics float in the background, partially cropped by viewport edges, suggesting a continuous underlying canvas rather than contained boxes.

## Visual language

The visual system communicates precision and creative confidence through several recurring motifs. Thin wireframe arcs appear as background decoration, rendered in light gray on white or subtle tones on dark backgrounds. These arcs suggest technical drawing and design process without literal illustration.

Iconography follows a minimal, filled style. Small circular badges contain simple icons—a star, flame, and checkmark for trust indicators—each with a colored dot accent. Social and contact icons appear as white glyphs on dark circular buttons, or as simple line icons in the floating action bar.

The button language is consistently pill-shaped, with full rounded ends creating friendly, approachable forms. Primary buttons use solid blue with white text and sometimes include a small arrow icon. Secondary buttons on dark backgrounds invert to dark fills with light text.

Gradient usage is restrained and purposeful: the statistics panel employs a diagonal gradient from dark navy through to electric blue, creating depth and drawing attention to metrics. This is the only visible gradient application, preventing visual fatigue.

Photography and logos appear in grayscale when displayed as client proof points, ensuring the blue accent remains the dominant color signal.

## Components

### Primary button

- Anatomy: Pill-shaped container with centered text label, optional arrow icon at right
- Surface and text color: Solid action blue background with white text
- Typography: Label token, uppercase, letter-spaced
- Shape: Full pill radius (9999px)
- Spacing: 0.875rem vertical padding, 2rem horizontal padding
- Composition: Inline-flex with centered content and 0.5rem gap to icon
- Variants: Standard size for hero, compact size for navigation bar

### Navigation bar

- Anatomy: Fixed or sticky header containing logo mark, text links with chevron indicators, primary action button
- Surface and text color: Transparent over light hero, white text and links; or solid white with dark text when scrolled
- Typography: Navigation token for links, label token for CTA
- Shape: Full-width bar, no border radius
- Spacing: 1rem vertical padding, 2rem horizontal page margins
- Composition: Flex row with space-between, logo left, links center, button right
- Variants: Light mode (visible on hero), dark mode (over dark sections)

### Modal card

- Anatomy: Centered overlay card with close button, title, description, form fields, submit action
- Surface and text color: White background, dark text, blue submit button
- Typography: Section-display for title, body-small for description and labels
- Shape: 1rem border radius, subtle shadow
- Spacing: 1.5rem internal padding, stacked fields with 1rem gaps
- Composition: Vertical stack, full-width inputs, full-width button at bottom
- States: Visible with backdrop overlay, dismissible via close button

### Statistics panel

- Anatomy: Dark container with gradient background, grid of metric pairs
- Surface and text color: Gradient from surface-dark to action, white numbers and labels
- Typography: Hero-display for numbers, body-small for category labels
- Shape: 1rem border radius
- Spacing: 1.5rem padding, 2rem gaps between metric groups
- Composition: Two-by-two grid or horizontal row depending on context
- Variants: Inline within dark sections, or as elevated card

### Trust badge row

- Anatomy: Horizontal row of circular icon badges with text labels
- Surface and text color: Light circular backgrounds with colored icon dots, dark text
- Typography: Body-small for metrics, label for category names
- Shape: Circular badge containers approximately 2.5rem diameter
- Spacing: 1.5rem gaps between badges, inline with hero content
- Composition: Flex row, centered below headline

### Form input

- Anatomy: Single-line text field with bottom border only, no visible container
- Surface and text color: Transparent background, dark text, gray bottom border
- Typography: Body-small for placeholder and value
- Shape: No border radius, 1px bottom border
- Spacing: 0.75rem vertical padding, full width
- Composition: Stacked vertically with 1rem gaps, labels above or placeholder within

## Responsive behavior

The visible desktop layout suggests several adaptive considerations. The hero headline at 4rem will require reduction on narrow viewports; a scale to 2.5rem maintains hierarchy while preserving line breaks. The navigation links with dropdown chevrons should collapse to a hamburger menu below approximately 768px viewport width, with the inquiry button remaining visible or moving to the mobile menu.

Trust badge rows that sit horizontally below the hero should stack vertically on mobile, maintaining centered alignment. The statistics panel grid should shift from two-by-two to a single column, with metrics stacking and maintaining left alignment for readability.

Modal cards should transition from fixed-width centered containers to nearly full-width with small margins on mobile, preserving the 1.5rem internal padding. Touch targets for buttons and form inputs must maintain minimum 44px height for accessibility.

The decorative arc graphics, partially visible in the hero, should scale down or hide on mobile to prevent horizontal overflow and maintain performance.

## Practical implementation guidance

### Preserve
- The dramatic weight contrast in display headlines between light upright and bold italic
- The singular electric blue accent against both white and dark navy backgrounds
- Pill-shaped buttons as the primary interactive language
- Generous whitespace between sections, at least 6rem
- The thin arc decorations as subtle background depth
- Grayscale treatment for client logos and partner marks

### Avoid
- Introducing additional accent colors beyond the established blue
- Using pure black (#000000) for dark backgrounds; maintain the warm navy tone
- Sharp-cornered buttons or cards that break the soft pill and panel language
- Crowding the hero with too many elements above the fold
- Underlining navigation links instead of using the established chevron indicators

### Recommended build order
1. Establish the color tokens and apply light/dark mode foundations
2. Implement the typography scale with Bw Gradual Demo for headlines and Lexend for body
3. Build the navigation bar with logo, links, and pill button
4. Create the hero section with display type, trust badges, and primary CTA
5. Develop the modal system with form inputs and submit action
6. Add the dark section variant with statistics panel and gradient
7. Implement decorative arc graphics as background elements
8. Polish responsive behavior and touch target sizing

### Accessibility
- Ensure the blue action color meets WCAG AA contrast against both white and dark backgrounds; the current shade may need darkening for small text
- Provide visible focus indicators on pill buttons and form inputs, using outline or ring treatments that respect the rounded shapes
- Maintain logical tab order through modal forms, trapping focus within open modals
- Use aria-labels for icon-only buttons in the floating action bar
- Respect reduced-motion preferences for any decorative arc animations

## Scope note

This guide covers the homepage and visible contact modal of TheFinch. Interior pages, mobile navigation behavior, dropdown menus, and motion design are not represented in the supplied material. Measurements are practical adaptation targets derived from visible proportions.
