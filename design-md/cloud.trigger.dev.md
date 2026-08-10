# How cloud.trigger.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cloud.trigger.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Split-screen login page with left-side auth options, right-side testimonial quote, and bottom trust logos including Lyft and Cal.com](https://pin.fontofweb.com/1556?format=jpg)](https://design.withfudge.com/share/pin-1556)

[Split-screen login page with left-side auth options, right-side testimonial quote, and bottom trust logos including Lyft and Cal.com](https://design.withfudge.com/share/pin-1556)

[![Centered magic-link login form with email input field, purple send button, and terms agreement text on dark background](https://pin.fontofweb.com/1557?format=jpg)](https://design.withfudge.com/share/pin-1557)

[Centered magic-link login form with email input field, purple send button, and terms agreement text on dark background](https://design.withfudge.com/share/pin-1557)

## Overview

The Trigger.dev cloud authentication interface presents a dark, developer-centric visual system built around clarity and trust. The design employs a near-black canvas with carefully layered surface tones, using a distinctive purple accent to guide users through login and signup flows. The interface balances minimalism with credibility: sparse forms sit alongside social proof elements including testimonials and company logos. Typography is handled entirely through Geist, a contemporary geometric sans-serif that delivers crisp readability at all scales. The overall impression is of a polished, production-ready tool that respects developer attention spans while maintaining approachable warmth through its rounded components and generous spacing.

## Colors

The color system is intentionally restrained, relying on a dark foundation with a single vibrant accent family. This creates high contrast for readability while establishing brand recognition through the purple action elements.

| token | value | use |
|---|---|---|
| canvas | `#18181b` | Primary page background, deep neutral dark |
| surface | `#27272a` | Elevated card backgrounds, input fields, secondary buttons |
| action | `#6366f1` | Primary buttons, interactive highlights, brand accent |
| action-hover | `#4f46e5` | Darker purple for button hover states |
| ink | `#fafafa` | Primary text, headings, button labels |
| muted-ink | `#a1a1aa` | Secondary text, placeholders, captions |
| border | `#3f3f46` | Subtle dividers, input outlines, secondary button borders |
| link | `#818cf8` | Inline text links, legal references, support contacts |

The dark canvas dominates both authentication screens, creating an immersive environment that reduces eye strain. The surface tone appears one step lighter, used for input fields and secondary buttons to establish subtle elevation without shadows. The purple action color carries the full interactive burden: it appears on primary buttons, link text, and the brand logo gradient. Muted ink serves descriptive and placeholder text, maintaining hierarchy without competing for attention. The border color is deliberately subdued, appearing only where structural definition is needed.

## Typography

The typographic system uses Geist exclusively, a geometric sans-serif designed by Basementstudio with distribution through Vercel. The family delivers clean, modern letterforms with excellent screen rendering.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 2rem | 600 | 1.2 | -0.02em | Page headings, "Welcome" titles |
| body | Geist | 1rem | 400 | 1.5 | 0em | Input text, descriptions, quotes |
| label | Geist | 0.875rem | 500 | 1.4 | 0em | Button labels, navigation |
| legal | Geist | 0.75rem | 400 | 1.5 | 0em | Terms text, support links, captions |

The hero-display token carries the page's primary greeting with a slightly tightened letter spacing that adds density and presence. Body text maintains comfortable reading length for form inputs and testimonial quotes. The label weight at 500 provides sufficient emphasis for actionable elements without appearing bold. Legal text scales down to 0.75rem for dense information that must remain legible but subordinate. Verify licensing for these families before production use.

## Layout

The authentication interface employs two distinct layout patterns across its screens. The primary login page uses a split-screen composition: the left half contains the authentication form centered vertically, while the right half presents a testimonial quote and company trust logos. A single vertical divider separates these zones. The magic-link variant simplifies to a single centered column, concentrating focus on the email capture flow.

Both layouts share common structural principles. Content is vertically centered within their respective zones, creating balanced negative space above and below interactive elements. The split-screen maintains approximately equal width proportions, with the left form area feeling slightly narrower due to internal padding. Horizontal margins are generous, keeping text lines at comfortable reading lengths.

The header area spans the full width in both layouts, containing the Trigger.dev logo at left and a documentation link at right. This creates consistent wayfinding without interfering with the authentication task. Footer elements appear at the bottom of their respective zones: support links on the left, trust indicators on the right.

Spacing follows a modular rhythm based on 0.25rem increments. Component internal padding uses 1.5rem for buttons and inputs, while element gaps between form fields measure 0.75rem. Section-level spacing of 3rem separates major content groups like the heading from the form, or the quote from attribution.

## Visual language

The visual language communicates technical sophistication through restraint and precision. Rounded corners appear on all interactive elements at 0.375rem for buttons and inputs, creating a friendly but not playful character. The corner radius is consistent enough to feel systematic, yet subtle enough to avoid cartoonishness.

Iconography is functional and minimal: a mail envelope precedes email actions, the GitHub mark identifies social login, and a left arrow indicates navigation return. These icons sit inline with text at matching optical size, creating integrated label-icon pairings rather than decorative elements.

The brand logo in the header uses a gradient treatment transitioning from green through yellow to purple, providing the only chromatic complexity in an otherwise disciplined palette. This gradient serves as immediate brand recognition without overwhelming the interface.

Photography and illustration are entirely absent from the authentication flow. The right-panel testimonial relies on typography alone: a large quotation mark glyph in muted ink introduces the quote, followed by body-sized text and smaller attribution. Company logos in the trust section appear as monochrome wordmarks at reduced opacity, creating texture without visual competition.

Shadows are not employed for elevation; instead, the system relies on background color differentiation and subtle borders to establish hierarchy. This flat approach reinforces the modern, developer-tool aesthetic.

## Components

### Primary button

The primary button is the system's most visually prominent interactive element. It features a solid purple background at `#6366f1` with white text at 500 weight. The button spans the full width of its container in the authentication forms. An icon precedes the label with comfortable internal spacing. The surface is completely flat with no shadow, relying on color contrast for visibility. On hover, the background shifts to the darker `#4f46e5` value. Padding measures 1.5rem vertically and 4rem horizontally, creating substantial touch targets.

### Secondary button

The secondary button shares the same dimensions and typography as the primary variant but inverts the surface treatment. It uses the dark surface color `#27272a` with a 1px border in `#3f3f46`, maintaining white text. This creates a clear hierarchy when paired with the primary action, as seen in the "Continue with Email" option below the GitHub button. The border provides just enough definition without suggesting disabled state.

### Text input

The email input field presents a dark surface background with subtle border treatment. Placeholder text appears in muted ink, transitioning to white when user content enters. The field spans full width with internal padding of 1.5rem vertical and 1rem horizontal. The border radius matches buttons at 0.375rem, maintaining family consistency. Focus states are not visible in the supplied images but should implement a ring or border shift to the action purple for accessibility.

### Link text

Inline links appear in a lighter purple `#818cf8` that distinguishes them from surrounding muted text without matching the primary button saturation. These appear in legal and support contexts: terms and privacy policy references, email support contacts, and Discord community links. The links use the legal typography token at 0.75rem, maintaining their subordinate informational role.

### Testimonial panel

The right-side panel in the split layout presents a centered text block with generous surrounding space. A decorative quotation mark in muted ink introduces the quote, which uses body typography at 1rem. Attribution follows at smaller size with name and company separated by comma. The composition is vertically centered within its half of the screen, with the quote occupying the upper portion and company logos anchored at the bottom.

### Trust logo bar

Company logos appear in a horizontal row at the bottom of the right panel, labeled "Trusted by developers at." Each logo renders as monochrome with reduced opacity against the dark background, creating a subtle texture. The row includes Lyft, Unkey, midday, appsmith, Cal.com, and tldraw wordmarks at varying visual weights but consistent height treatment.

## Responsive behavior

The split-screen layout implies a breakpoint where the right panel with testimonial content would collapse or hide, leaving the authentication form centered on narrower viewports. The single-column magic-link layout already demonstrates the mobile-adapted pattern.

Form elements should maintain full-width behavior across all viewport sizes, with horizontal padding scaling proportionally. The generous internal button padding ensures touch targets remain accessible on smaller screens. Typography should scale down modestly: the hero-display heading may reduce to 1.5rem on narrow viewports while maintaining weight and tracking.

The trust logo bar would likely scroll horizontally or wrap to multiple rows on constrained widths, preserving logo legibility without excessive compression. Support links at the bottom should stack vertically rather than maintaining horizontal arrangement when space is limited.

## Practical implementation guidance

### Preserve
- The dark canvas as the dominant background; light mode would fundamentally alter the brand impression
- The single purple accent family for all interactive and linked elements
- Full-width buttons within form containers for clear action hierarchy
- Generous vertical spacing between form elements, maintaining the breathable, unhurried rhythm
- The split-screen composition on desktop as a distinctive brand moment

### Avoid
- Introducing additional accent colors that would compete with the established purple system
- Using shadows for elevation; the flat color-layer approach is integral to the aesthetic
- Reducing button padding to compact sizes; the substantial targets are part of the approachable character
- Placing decorative imagery in the authentication flow; the typographic testimonial is the correct visual weight

### Recommended build order
1. Establish the dark canvas and surface color tokens with proper contrast ratios
2. Implement Geist at all four type scales with correct weights and tracking
3. Build the button components with full-width behavior and icon-label composition
4. Create the input field with matching radius and focus state
5. Assemble the split-screen layout with divider and responsive collapse behavior
6. Add the testimonial panel with quotation styling and logo bar

### Accessibility
- Ensure the purple action color on dark surface meets WCAG AA contrast for normal text; the current `#6366f1` on `#18181b` should be verified
- Provide visible focus indicators on all interactive elements, likely using the action color as a ring or outline
- Maintain the icon-label pairings for all buttons to support multiple recognition modes
- Consider focus management when transitioning between login methods, particularly the email-to-magic-link flow

## Scope note

This guide covers the Trigger.dev cloud authentication pages including login, magic-link email entry, and associated social proof elements. Dashboard interfaces, logged-in application surfaces, marketing pages, and interactive states such as loading, error, or success confirmations are not represented in the supplied material. Motion, animation, and mobile-specific layouts are not documented. Measurements are practical adaptation targets.
