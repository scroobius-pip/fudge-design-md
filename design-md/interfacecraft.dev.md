# How interfacecraft.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/interfacecraft.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with dark background, large serif title 'Interface Craft', tagline, and colorful floating cards with abstract patterns in orange, cream, blue, green, and dark gray.](https://pin.fontofweb.com/6231?format=jpg)](https://design.withfudge.com/share/pin-6231)

[Hero section with dark background, large serif title 'Interface Craft', tagline, and colorful floating cards with abstract patterns in orange, cream, blue, green, and dark gray.](https://design.withfudge.com/share/pin-6231)

[![Author biography section with testimonial quote, membership pricing, and a white pill-shaped button on near-black background.](https://pin.fontofweb.com/6302?format=jpg)](https://design.withfudge.com/share/pin-6302)

[Author biography section with testimonial quote, membership pricing, and a white pill-shaped button on near-black background.](https://design.withfudge.com/share/pin-6302)

[![FAQ accordion section with bold question headings and muted body text, followed by membership pricing and pill button.](https://pin.fontofweb.com/6233?format=jpg)](https://design.withfudge.com/share/pin-6233)

[FAQ accordion section with bold question headings and muted body text, followed by membership pricing and pill button.](https://design.withfudge.com/share/pin-6233)

[![Combined author section and membership area showing testimonial, pricing details, and start of FAQ questions on dark background.](https://pin.fontofweb.com/6232?format=jpg)](https://design.withfudge.com/share/pin-6232)

[Combined author section and membership area showing testimonial, pricing details, and start of FAQ questions on dark background.](https://design.withfudge.com/share/pin-6232)

## Overview

Interface Craft presents a dark, editorial landing page for a design library. The visual system is built on a near-black canvas that lets content breathe through generous whitespace and careful typographic contrast. A single refined serif, Signifier, anchors the hero and section headings with classical proportions, while a system sans handles all body text, labels, and navigation with crisp neutrality. The personality emerges through a cluster of vivid, color-blocked cards that appear to float in the hero space—each card a distinct hue with abstract pattern fills, suggesting the breadth of material inside the library. The overall impression is restrained and confident: warm rather than cold, crafted rather than corporate, with a clear hierarchy that moves visitors from atmospheric introduction through author credibility to direct membership conversion.

## Colors

The palette is built on a dark foundation with warm undertones, using a small set of vivid accents for the floating cards and a single bright action element.

| token | value | use |
|---|---|---|
| canvas | `#0C0A09` | Primary page background, deep near-black with warm undertone |
| surface | `#211F1E` | Elevated card backgrounds, subtle depth on dark canvas |
| surface-warm | `#524733` | Warm brown accent for select card surfaces |
| ink | `#E7E5E4` | Primary text on dark backgrounds, headings and body |
| ink-muted | `#E7E5E4` | Secondary text, descriptions, FAQ answers |
| ink-inverse | `#0C0A09` | Text on light or white surfaces |
| accent-orange | `#E54F10` | Vivid card background, energetic warm accent |
| accent-cream | `#F6EBD9` | Soft card background, warm neutral accent |
| accent-sky | `#0A90D2` | Bright blue card background, technical accent |
| accent-mint | `#53F399` | Vibrant green card background, growth accent |
| accent-ice | `#AEFFFF` | Cyan card detail, cool highlight |
| accent-lemon | `#FFFFC2` | Pale yellow card detail, soft highlight |
| accent-green | `#004D00` | Deep green card detail, grounded accent |
| action | `#FFFFFF` | Primary button fill, maximum contrast conversion point |

The dark mode is the sole visible mode—there is no light variant in the current surface. The near-black canvas creates a cinematic quality that makes the white action button and colorful cards feel luminous. Text hierarchy is achieved through weight and size rather than color variation, with ink and ink-muted serving nearly identical values but distinguished by context and surrounding spacing. The card colors are fully saturated and unmixed, each functioning as a distinct category marker without gradients or overlays.

## Typography

Two families create the typographic tension: Signifier for display moments and System (system-ui) for everything functional.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Signifier | 3.125rem | 400 | 1 | -0.025em | Page title, hero headline |
| section-display | Signifier | 1.75rem | 400 | 1.071 | normal | Card titles, section subheads |
| body | System | 1.125rem | 400 | 1.556 | normal | Paragraphs, descriptions, answers |
| body-small | System | 1rem | 400 | 1.5 | normal | Compact descriptions, metadata |
| label | System | 0.9375rem | 500 | 1.333 | normal | Buttons, navigation links |
| section-heading | System | 1.125rem | 600 | 1.556 | normal | FAQ questions, section labels |

Signifier appears exclusively at display sizes, lending editorial authority to the hero and card titles. Its Regular weight is sufficient for impact at these sizes, and the negative tracking on the hero tightens the wordmark into a cohesive unit. System handles all functional text at 400, 500, and 600 weights, creating hierarchy through weight rather than family change. The 1.125rem body size with 1.556 line height produces comfortable reading for long-form content, while the slightly smaller label size at 500 weight gives buttons and links appropriate density.

Signifier is designed by Kris Sowersby of Klim Type Foundry. Verify licensing for these families before production use.

## Layout

The page follows a single-column centered layout with a narrow reading measure. Content is constrained to a maximum width that creates generous margins on either side, focusing attention on the text. The hero section breaks this pattern with full-bleed atmosphere: the title and tagline remain centered, but the floating cards extend visually beyond the content well, creating depth through overlapping, rotated rectangles.

Vertical rhythm is established through consistent section spacing. Major sections are separated by substantial gaps, with smaller internal spacing for related elements. The content well uses auto margins for horizontal centering rather than a fixed container, allowing the layout to adapt to viewport width while maintaining readable line lengths.

The floating cards in the hero are composed as an overlapping cluster, each card slightly rotated and offset from its neighbors. This creates a sense of casual abundance—material piled with intention rather than rigid grid alignment. Cards appear at various z-depths implied by overlap order, with no visible shadows to ground them, letting the dark canvas provide infinite depth.

## Visual language

The visual language balances restraint with moments of exuberance. The dark canvas and neutral typography establish a serious, craft-oriented tone, while the colorful cards inject energy and suggest creative possibility. This tension mirrors the site's purpose: a library for "designing with uncommon care" that spans practical and imaginative territory.

Card surfaces are flat and unshaded, each a single bold color with abstract line or grid patterns in a contrasting tone. The patterns are geometric and repetitive—vertical lines, crosshatches, wave forms—suggesting technical precision without depicting specific tools. Card corners are softly rounded, contrasting with the sharp edges implied by the patterns within.

The overall composition avoids decorative borders, rules, or background textures. Separation between sections is achieved through whitespace alone, with occasional thin horizontal lines serving as subtle dividers. The absence of gradients, shadows, or glassmorphism keeps the aesthetic grounded and print-like, appropriate for a resource that values clarity and directness.

## Components

### Primary action button

A pill-shaped button with maximum contrast against the dark canvas.

- **Anatomy**: Text label with optional strikethrough pricing context
- **Surface**: Solid white background (`{colors.action}`)
- **Typography**: `{typography.label}` in dark text (`{colors.ink-inverse}`)
- **Shape**: Full pill radius (`{rounded.pill}`), no border
- **Spacing**: `0.75rem` vertical padding, `1.5rem` horizontal padding
- **Composition**: Left-aligned within its section, following descriptive text
- **Variants**: Shows current price with original price struck through in muted text

### Content card (hero)

Colorful floating rectangles that represent library categories.

- **Anatomy**: Colored surface with abstract pattern fill, title text at bottom
- **Surface**: Flat solid color from accent palette, no shadow or border
- **Typography**: `{typography.section-display}` in color-matched or contrasting text
- **Shape**: `1rem` corner radius, portrait orientation
- **Composition**: Overlapping cluster with slight rotation per card, centered below hero text
- **Variants**: Orange with vertical lines, cream with grid, blue with waves, mint with horizontal lines, dark with wireframe outline

### FAQ item

Collapsible question-answer pair with clear typographic hierarchy.

- **Anatomy**: Bold question heading followed by paragraph answer
- **Typography**: Question uses `{typography.section-heading}`, answer uses `{typography.body}`
- **Spacing**: `0.5rem` between question and answer, `2rem` between items
- **Composition**: Stacked vertically within content well, left-aligned
- **Surface**: No background or border, relying on whitespace for separation

### Testimonial block

Quoted endorsement with attribution.

- **Anatomy**: Quotation marks or styled blockquote, attribution with avatar and name
- **Typography**: Quote uses `{typography.body}` or `{typography.section-display}`, attribution uses `{typography.body-small}`
- **Spacing**: Indented from main content well, with avatar and name stacked vertically
- **Surface**: No visible background, integrated into flowing content

### Section label

Small bold heading introducing content areas.

- **Anatomy**: Single line of text, often a role or category name
- **Typography**: `{typography.section-heading}` or `{typography.label}` at 600 weight
- **Spacing**: `1.5rem` below preceding content, `1rem` above following content
- **Composition**: Left-aligned within content well

## Responsive behavior

The design appears optimized for desktop viewing with a narrow content well. At smaller viewports, the following adaptations should be considered:

- The content well should maintain comfortable margins, reducing from the wide desktop centering to narrower side padding
- Hero card cluster should scale down proportionally, potentially reducing overlap and rotation to prevent clipping
- FAQ items should remain single-column with maintained spacing
- The primary action button should remain fully visible without horizontal overflow
- Body text at 1.125rem should remain comfortable without reduction; label sizes may decrease slightly if necessary

No mobile-specific breakpoints are visible in the source material. Implementation should test readability at viewports down to 320px width.

## Practical implementation guidance

### Preserve
- The near-black canvas with warm undertone rather than pure black or cool gray
- The single serif display family paired with system sans for all functional text
- The flat, shadowless card aesthetic with bold unmixed colors
- The generous vertical spacing between major sections
- The pill-shaped primary action with maximum contrast
- The overlapping, slightly rotated card composition in the hero

### Avoid
- Adding shadows, glows, or glassmorphism effects to cards or surfaces
- Introducing additional font families beyond Signifier and system-ui
- Using gradient fills where solid colors are specified
- Tightening the content well to full-width on desktop
- Replacing the flat card patterns with photographic imagery
- Adding decorative borders or rules between sections

### Recommended build order
1. Establish the dark canvas background and content well constraints
2. Implement the typography scale with Signifier and system-ui
3. Build the hero section with title, tagline, and placeholder card structure
4. Create the card component with color variants and pattern fills
5. Implement the content sections with proper vertical spacing
6. Add the primary action button with pill styling
7. Build FAQ and testimonial components
8. Refine the overlapping card composition with rotation and positioning

### Accessibility
- Ensure the white action button meets contrast requirements against the dark canvas
- Verify that each card's text color maintains 4.5:1 contrast against its background color
- Provide keyboard focus indicators for the primary action and any interactive FAQ elements
- Consider `prefers-reduced-motion` for any card hover or scroll animations
- Maintain the semantic heading hierarchy from h1 through h3 as visible in the structure

## Scope note

This guide covers the landing page surface for Interface Craft, including the hero, author biography, membership conversion, and FAQ sections. Navigation, footer, interior pages, and any checkout or authentication flows are not represented. Motion behavior, hover states, and mobile-specific layouts are not documented and should be designed to match the system's restrained character.
