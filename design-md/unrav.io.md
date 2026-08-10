# How unrav.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/unrav.io-design)

Last updated: 2026-08-10

## Captured pages

[![Login modal with neon yellow headline, cyan subtext, and magenta border accents on a near-black background](https://pin.fontofweb.com/3536?format=jpg)](https://design.withfudge.com/share/pin-3536)

[Login modal with neon yellow headline, cyan subtext, and magenta border accents on a near-black background](https://design.withfudge.com/share/pin-3536)

[![Vibrant magenta call-to-action banner with black display type and yellow button, followed by a dark footer with pink rules](https://pin.fontofweb.com/3534?format=jpg)](https://design.withfudge.com/share/pin-3534)

[Vibrant magenta call-to-action banner with black display type and yellow button, followed by a dark footer with pink rules](https://design.withfudge.com/share/pin-3534)

[![FAQ grid with eight bright yellow cards containing black condensed headlines and monospace body copy on a dark canvas](https://pin.fontofweb.com/3533?format=jpg)](https://design.withfudge.com/share/pin-3533)

[FAQ grid with eight bright yellow cards containing black condensed headlines and monospace body copy on a dark canvas](https://design.withfudge.com/share/pin-3533)

## Overview

The unrav.io design system is a high-energy, dark-mode interface built around electric neon accents and extreme typographic contrast. The visual identity centers on a near-black canvas punctuated by saturated yellow, magenta, and cyan elements that create immediate visual hierarchy and a distinctive technological personality. The system employs two primary type treatments: a heavily condensed, bold sans-serif for display and interface headings, and a clean monospace for body copy and form inputs. This dual-type approach reinforces the product's positioning as a tool for transforming complex content into structured, accessible outputs.

The interface organizes content through bold color blocking rather than subtle shading. Yellow serves as the primary action and emphasis color, appearing in buttons, card backgrounds, and headline highlights. Magenta functions as a framing and accent color, defining borders, decorative rules, and secondary calls-to-action. Cyan appears selectively for informational highlights and alternative action paths. The overall composition favors centered, stacked layouts with generous internal spacing and sharp geometric edges, creating a sense of precision and computational clarity.

## Colors

The color system operates on a dark-first principle with three neon accent colors providing all interactive and emotional expression. The near-black canvas absorbs light while the saturated accents emit it, producing a screen-native glow effect.

| token | value | use |
|---|---|---|
| canvas | #050505 | Primary page background, modal backdrop |
| surface | #0a0a0a | Elevated panels, input fields, card interiors on dark |
| action | #ffff00 | Primary buttons, FAQ card backgrounds, headline highlights |
| action-ink | #000000 | Text on action surfaces, button labels, card headings |
| accent-magenta | #ff00a0 | Modal borders, decorative rules, footer accents, secondary CTAs |
| accent-cyan | #00e5ff | Informational text, alternative links, promotional messaging |
| ink-primary | #ffffff | Primary headings, body text on dark surfaces |
| ink-secondary | #a0a0a0 | Supporting descriptions, placeholder text |
| ink-muted | #808080 | Footer navigation, disabled states, tertiary information |
| border-subtle | #333333 | Input outlines, divider lines, inactive borders |
| border-accent | #ff00a0 | Focus states, modal framing, decorative panel edges |

The dark canvas and surface colors create depth through minimal lightness differentiation—just enough to distinguish interactive fields from the page ground. The action yellow is applied at full saturation without transparency to maintain its electric quality against both black and photographic content. Magenta appears most frequently as a one-pixel hairline border or rule, functioning as a structural accent rather than a fill color. Cyan is reserved for secondary information hierarchies, preventing competition with the yellow-magenta primary relationship.

## Typography

The type system combines a bold, geometric sans-serif for display and interface elements with a monospace face for body copy and data entry. This pairing creates tension between expressive headlines and utilitarian content, reflecting the product's purpose of restructuring information.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 900 | 1 | -0.03em | Page titles, modal headlines, major section headers |
| section-display | Inter | 2.5rem | 900 | 1.05 | -0.02em | Banner headlines, CTA statements |
| card-heading | Inter | 1.25rem | 800 | 1.1 | -0.01em | FAQ questions, feature titles, compact labels |
| body | Inter | 1rem | 400 | 1.6 | 0 | General paragraphs, descriptions |
| body-mono | JetBrains Mono | 0.875rem | 400 | 1.6 | 0 | Form inputs, technical content, code-like displays |
| label | Inter | 0.75rem | 700 | 1.2 | 0.05em | Form field labels, uppercase metadata tags |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0.02em | Footer links, secondary navigation |

The display type is set in all-caps for maximum impact, with tight negative tracking that creates a compressed, poster-like density. The monospace body copy introduces rhythm through its fixed-width character spacing, making even plain text feel structured and processed. Labels and metadata tags use uppercase transformation with positive tracking for scannability. Verify licensing for these families before production use.

## Layout

The layout system employs centered, single-column stacking for primary content with contained maximum widths to prevent excessive line lengths. The base spacing unit is 0.25rem, with all measurements building from this increment.

Content containers use a maximum width of 75rem centered with automatic margins. Section spacing defaults to 4rem between major content blocks, creating clear territorial separation without excessive whitespace. Card grids, as seen in the FAQ section, use a two-column arrangement with 1rem gutters and 1.5rem internal padding per card.

The modal layout centers a fixed-width panel vertically and horizontally, framed by a magenta border offset with decorative yellow and magenta corner accents. Form elements within modals stack with consistent 1rem vertical rhythm between label-input pairs and 1.5rem between major groups.

The footer compresses vertically with minimal padding, separated from content by a full-width magenta hairline rule. Navigation links within the footer distribute horizontally with even spacing, maintaining the centered alignment principle established in upper sections.

Border treatments reinforce the geometric precision: inputs and secondary buttons use 1px solid borders in subtle gray, while accent borders appear at 2px in magenta for modal frames and decorative panel edges. The FAQ cards eliminate external borders entirely, relying on their saturated yellow fill to define boundaries against the dark canvas.

## Visual language

The visual language of unrav.io draws from rave culture aesthetics and early digital interface design, combining neon glow effects with stark geometric structure. The system avoids gradients, shadows, and rounded excessive rounding in favor of flat color fields and sharp corners.

Photographic and illustrative content appears heavily processed with high contrast and saturated color grading that harmonizes with the interface palette. The magenta-to-yellow gradient in the call-to-action banner demonstrates how photographic content is treated as a color field rather than naturalistic representation.

Decorative elements include diagonal stripe patterns in magenta and black that appear at panel edges, adding dynamic tension to otherwise rectilinear compositions. These stripes function as brand signatures rather than functional UI, appearing consistently at section boundaries.

The interface maintains consistent corner philosophy: functional interactive elements use slight rounding at 0.25rem to suggest clickability, while display containers and cards employ moderate 0.5rem rounding. The overall effect balances computational precision with approachable tactility.

Iconography appears as simple line drawings in the interface gray, avoiding filled styles that would compete with the bold color system. The eye icon for password visibility and the mail icon for email input exemplify this restrained treatment.

## Components

### Primary Button

- **Anatomy**: Rectangular button with centered text label and optional arrow icon
- **Surface**: Solid action yellow fill with black text
- **Typography**: Label token, uppercase, bold weight
- **Shape**: 0.25rem corner radius, no border
- **Spacing**: 1rem vertical padding, 2rem horizontal padding
- **Composition**: Full-width within modal contexts, intrinsic width in banners
- **States**: Static appearance visible; hover and active states not documented

### Secondary Button

- **Anatomy**: Outlined button with centered text, Google icon visible in social login variant
- **Surface**: Transparent fill with subtle gray border
- **Typography**: Label token, uppercase
- **Shape**: 0.25rem corner radius, 1px solid border
- **Spacing**: Matching primary button proportions
- **Composition**: Stacked above divider with separator text

### Text Input

- **Anatomy**: Rectangular field with leading icon, placeholder text, and optional trailing action icon
- **Surface**: Dark surface fill with subtle border
- **Typography**: Body-mono token for user content, ink-secondary for placeholders
- **Shape**: 0.25rem corner radius, 1px solid border-subtle
- **Spacing**: 0.875rem vertical padding, 1rem horizontal with icon insets
- **Composition**: Full-width within form containers, stacked with 1rem gap between fields
- **Icons**: Mail icon leading, lock icon leading, eye icon trailing for password visibility

### FAQ Card

- **Anatomy**: Rectangular card with uppercase "FAQ" label, bold question heading, and paragraph answer
- **Surface**: Solid action yellow fill throughout
- **Typography**: Label token for category tag, card-heading for question, body-mono for answer in black
- **Shape**: 0.5rem corner radius, no border
- **Spacing**: 1.5rem internal padding, 1rem gap in grid
- **Composition**: Two-column grid on desktop, single column implied for narrow contexts

### Modal Panel

- **Anatomy**: Centered rectangular panel with decorative corner accents, containing headline, subhead, form fields, and actions
- **Surface**: Canvas background with magenta border frame
- **Typography**: Hero-display for welcome headline, body for subhead in cyan
- **Shape**: 0.75rem corner radius on panel, 2px magenta border with offset decorative bars
- **Spacing**: 2rem internal padding, centered content alignment
- **Composition**: Fixed width approximately 24rem, vertically centered

### Footer

- **Anatomy**: Full-width dark band with copyright, tagline, and horizontal navigation
- **Surface**: Canvas background with magenta top rule
- **Typography**: Label token for copyright in magenta, body for tagline in yellow, navigation token for links in muted gray
- **Shape**: Full bleed, no border radius
- **Spacing**: Compact vertical padding, generous horizontal distribution of links
- **Composition**: Centered text stack above evenly spaced link row

## Responsive behavior

The layout system adapts through column reduction and spacing compression rather than fundamental restructuring. The FAQ grid transitions from two columns to a single column at narrower viewports, maintaining card proportions and internal spacing. The modal panel remains centered with consistent width, relying on viewport margins for breathing room rather than fluid expansion.

Typography scales down by approximately one step in the hierarchy for mobile contexts: hero-display becomes section-display, section-display becomes card-heading. The extreme tracking values remain constant to preserve the compressed poster aesthetic at all sizes.

The banner section with its magenta background maintains full bleed and centered content, with button width becoming full-width on narrow screens. Footer navigation links wrap to multiple rows with maintained horizontal distribution when space constrains single-line display.

Touch targets for buttons and inputs meet minimum 44px height through generous padding rather than explicit sizing, ensuring accessibility without visual compromise.

## Practical implementation guidance

### Preserve
- The stark black-to-neon contrast ratio; this is the system's defining characteristic
- The all-caps, tightly tracked display typography for headlines and labels
- The dual-type pairing of geometric sans-serif with monospace body copy
- The flat color fields without gradients, shadows, or glassmorphism
- The magenta hairline rules as section dividers and frame accents
- The diagonal stripe decorative motif at panel edges

### Avoid
- Adding drop shadows or elevation effects; the system achieves depth through color alone
- Rounding corners beyond the specified tokens; excessive rounding contradicts the geometric precision
- Desaturating or tinting the action yellow; full saturation is required for the electric effect
- Using the magenta as a text color at small sizes; it functions as border and accent only
- Introducing additional accent colors; the yellow-magenta-cyan triad is complete

### Recommended Build Order
1. Establish the dark canvas and surface color foundation
2. Implement the display typography with correct weights, tracking, and uppercase treatment
3. Build the primary button component with action yellow fill
4. Create the modal panel structure with magenta border framing
5. Develop the FAQ card grid as the primary content pattern
6. Add form input components with monospace typography
7. Implement the footer with rule separators and navigation distribution
8. Apply decorative corner accents and stripe patterns

### Accessibility
- Ensure yellow-on-black text combinations meet WCAG contrast requirements; the action yellow on canvas may need slight darkening for small text
- Provide visible focus indicators using the magenta accent color for keyboard navigation
- Maintain the 44px minimum touch target for all interactive elements
- Consider a reduced-motion alternative for the decorative stripe patterns if they animate
- Test color independence: the interface should remain usable if neon accents are perceived differently

## Scope note

This guide covers the login modal, marketing page sections, FAQ grid, and footer visible in the supplied captures. Navigation headers, interior application interfaces, loading states, and mobile-specific layouts are not represented. Motion behavior, hover states, and form validation feedback are not documented from the still images. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid.
