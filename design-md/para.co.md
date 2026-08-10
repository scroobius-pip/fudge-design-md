# How para.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/para.co-design)

Last updated: 2026-08-10

## Captured pages

[![Sign-in form with lime-green submit button, dark input fields, and red error message on black background](https://pin.fontofweb.com/9322?format=jpg)](https://design.withfudge.com/share/pin-9322)

[Sign-in form with lime-green submit button, dark input fields, and red error message on black background](https://design.withfudge.com/share/pin-9322)

[![Full sign-in page with PARA back button, dark theme, and muted green disabled submit state](https://pin.fontofweb.com/9315?format=jpg)](https://design.withfudge.com/share/pin-9315)

[Full sign-in page with PARA back button, dark theme, and muted green disabled submit state](https://design.withfudge.com/share/pin-9315)

[![Vibrant coral-orange social media panel with bold black Gramatika typography and platform icons](https://pin.fontofweb.com/9314?format=jpg)](https://design.withfudge.com/share/pin-9314)

[Vibrant coral-orange social media panel with bold black Gramatika typography and platform icons](https://design.withfudge.com/share/pin-9314)

[![Hero section with username claim CTA, large white Gramatika display type, and green pill button on black](https://pin.fontofweb.com/9313?format=jpg)](https://design.withfudge.com/share/pin-9313)

[Hero section with username claim CTA, large white Gramatika display type, and green pill button on black](https://design.withfudge.com/share/pin-9313)

## Overview

Para's visual system is built on radical contrast: absolute black canvases against electric accent colors, with bold geometric typography that commands attention. The design language rejects subtle gradients and soft shadows in favor of flat, saturated color fields and crisp typographic hierarchy. Every interactive element is reduced to essential shapes—pill buttons, rounded panels, and clean input fields—creating a UI that feels immediate and unapologetically modern.

The system serves two primary contexts: a dark authentication experience and a vibrant marketing surface. Both share the same structural DNA but deploy color differently. Authentication relies on restrained dark tones with a single lime-green action signal, while marketing pages explode with coral, purple, and green accents against the same black void. This dual-mode approach lets the brand shift from utilitarian to expressive without rebuilding its core architecture.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, authentication screens, hero sections |
| surface | #262626 | Input fields, elevated dark panels, disabled button states |
| surface-raised | #F5F5F5 | Light mode panels, inverted sections |
| ink | #000000 | Text on light or accent backgrounds |
| ink-inverted | #FFFFFF | Primary text on dark backgrounds |
| ink-muted | #828282 | Placeholder text, secondary labels, disabled states |
| action-primary | #71EB44 | Primary buttons, success states, key CTAs |
| action-primary-hover | #A7FF38 | Brighter lime for hover/active button states |
| action-secondary | #5B55FF | Secondary buttons, link accents |
| accent-coral | #F95841 | Social panels, high-energy marketing surfaces |
| accent-pink | #FD97FF | Decorative accents, badge backgrounds |
| accent-orange | #FF6B00 | Warm accent for gradients and highlights |
| accent-blue-muted | #9E9EFF | Subtle purple-blue for secondary accents |
| border-subtle | #828282 | Hairline borders on dark inputs |

The color philosophy centers on chromatic tension. Black and white provide the structural contrast, while a tightly controlled accent palette delivers emotional range. Lime green (#71EB44) carries the primary action burden—it is the only color that appears on interactive buttons in the authentication flow, making it instantly recognizable as "go." Coral (#F95841) shifts the mood entirely when deployed on marketing panels, creating warmth and social energy. The muted blue-purple (#9E9EFF) and bright pink (#FD97FF) extend the palette for secondary moments without competing with the primaries.

Dark mode is not an alternate theme but the default state. Light surfaces (#F5F5F5) appear only as deliberate inversions, typically for content panels that need to break the black continuity. Text always maintains maximum contrast: white on black, black on coral or lime.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gramatika | 6.25rem | 700 | 1 | -0.01em | Maximum impact headlines, username claims |
| section-display | Gramatika | 5rem | 700 | 1 | -0.01em | Section headers, social panel headlines |
| headline | Gramatika | 4.375rem | 700 | 1 | -0.01em | Page titles, auth headers |
| subheadline | Gramatika | 3.125rem | 700 | 1 | -0.01em | Secondary headings, feature titles |
| body | Inter | 0.9375rem | 400 | 1.55 | 0 | Paragraphs, descriptions, form labels |
| body-large | Inter | 1.25rem | 400 | 1.4 | -0.02em | Lead paragraphs, introductory copy |
| label | Inter | 0.9375rem | 600 | 1 | 0 | Navigation, button text, active states |
| label-small | Inter | 0.75rem | 600 | 1 | 0 | Badges, compact UI labels |
| button-primary | Gramatika | 2.1875rem | 700 | 1 | -0.01em | Primary CTA buttons |

Gramatika Bold provides the voice of the brand: geometric, tightly tracked, and unafraid of scale. At 100px (6.25rem), it dominates hero sections with a square, almost brutalist presence. The negative letter spacing (-0.01em) keeps large settings from feeling loose, pulling characters into cohesive word-shapes. Inter Regular and Semibold handle everything else—body copy, navigation, labels, and form text—at a consistent 15px (0.9375rem) base size with generous 1.55 line height for readability.

The type system operates on a clear functional split: Gramatika for display and brand expression, Inter for interface and information. This separation prevents visual fatigue while allowing each family to play to its strengths. Gramatika's bold weight and tight spacing make it ideal for short, impactful statements; Inter's neutral, open forms sustain longer reading.

Verify licensing for these families before production use.

## Layout

The layout system is fundamentally centered and contained. Authentication pages use a narrow single-column form centered at approximately 41.25rem (660px) maximum width, creating a focused, task-oriented experience. Marketing pages expand to a wider container at roughly 52.5rem (840px) for content sections, with generous horizontal margins that let the black canvas breathe.

Vertical rhythm is established through a base unit of 0.125rem (2px), with meaningful spacing multiples at 0.625rem, 0.9375rem, 1.25rem, 2.5rem, 3.75rem, and 6.25rem. Section breaks typically use 3.75rem to 6.25rem of vertical space, creating dramatic pauses between content blocks. The generous top padding on panels—2.5rem to 3.75rem—gives content room to sit comfortably within rounded containers.

Grid behavior is implicit rather than explicit: content stacks vertically with consistent left alignment, and interactive elements maintain full-width or auto-width pill shapes. The authentication form stacks inputs with tight 0.625rem gaps, while marketing panels use 2.5rem internal padding to separate text from container edges.

Responsive behavior should maintain the centered single-column structure at all widths, with padding scaling down from 2.5rem to 1.25rem on narrow viewports. Display type should reduce by approximately 25% on mobile to prevent overflow, with hero-display dropping to 4.375rem and section-display to 3.125rem.

## Visual language

The visual character is defined by three principles: absolute flatness, geometric confidence, and chromatic boldness. Surfaces do not use shadows, gradients, or texture—color exists as pure fields with hard edges. Rounded corners are systematic and generous: 2.5rem for major panels, 1.875rem for buttons, 0.9375rem for inputs. This creates a family of related shapes that feel cohesive without becoming monotonous.

Photography and illustration, where present, are treated as color fields rather than delicate artifacts. The coral social panel demonstrates this: the background color dominates, and any imagery is subordinate to the typographic message. Icons for social platforms appear as simple glyphs integrated into the text flow, not as standalone decorative elements.

The interaction model is equally direct. Buttons are large, pill-shaped, and immediately identifiable by color. The lime green primary action stands alone—no competing CTAs share its visual weight. Disabled states shift to muted dark green (#262626-adjacent) with reduced opacity, maintaining shape recognition while signaling unavailability. Error states use coral text on the black canvas, avoiding the cliché of red backgrounds that would disrupt the dark aesthetic.

## Components

### Primary Button

- **Anatomy**: Pill-shaped container with centered text, no icon by default.
- **Surface**: Background `{colors.action-primary}` (#71EB44), text `{colors.ink}` (#000000).
- **Typography**: `{typography.button-primary}` — Gramatika Bold at 2.1875rem, tightly tracked.
- **Shape**: Full pill radius (`{rounded.pill}`), height approximately 3.75rem, padding `0 2.5rem`.
- **Spacing**: Margin-top 1.25rem from preceding element in forms.
- **Variants**: Disabled state uses muted green with reduced saturation; hover state brightens to `{colors.action-primary-hover}` (#A7FF38).

### Secondary Button

- **Anatomy**: Identical pill shape to primary, differentiated by color.
- **Surface**: Background `{colors.action-secondary}` (#5B55FF), text `{colors.ink}`.
- **Typography**: Same Gramatika Bold treatment as primary.
- **Shape**: `{rounded.pill}`, generous horizontal padding.
- **Use**: Alternative CTAs, sign-in actions in navigation.

### Input Field

- **Anatomy**: Stacked label and input container, or floating label pattern.
- **Surface**: Background `{colors.surface}` (#262626), no visible border in default state.
- **Typography**: Label uses `{typography.body}` in `{colors.ink-muted}`; entered text uses `{colors.ink-inverted}`.
- **Shape**: `{rounded.input}` (0.9375rem), full width within form container.
- **Spacing**: Padding `0.8125rem 1rem`, vertical gap between fields 0.625rem.
- **States**: Focus state may add subtle border; error state does not change field appearance but triggers adjacent error message.

### Error Message

- **Anatomy**: Text block below associated input or form.
- **Surface**: No background, transparent on canvas.
- **Typography**: `{typography.body}`, color `{colors.accent-coral}` (#F95841).
- **Spacing**: Margin-top 0.9375rem from preceding element.

### Social Panel

- **Anatomy**: Large rounded container with headline text and platform references.
- **Surface**: Background `{colors.accent-coral}` (#F95841), text `{colors.ink}`.
- **Typography**: `{typography.section-display}` — Gramatika Bold at 5rem with platform names and integrated icons.
- **Shape**: `{rounded.panel}` (2.5rem), full width with internal padding 2.5rem.
- **Composition**: Text fills horizontal space, wrapping naturally; platform icons sit inline with text at cap height.

### Navigation Pill

- **Anatomy**: Small rounded button for secondary actions.
- **Surface**: Background `{colors.surface}` or transparent, text `{colors.ink-inverted}`.
- **Typography**: `{typography.label}` — Inter Semibold at 0.9375rem.
- **Shape**: `{rounded.button}` (1.875rem), compact padding `0 1.125rem`.

### Back Button

- **Anatomy**: Horizontal pill with left arrow and brand text.
- **Surface**: Background `{colors.surface}`, text `{colors.ink-inverted}`.
- **Typography**: `{typography.label-small}` with arrow glyph.
- **Shape**: Full pill, positioned fixed or absolute at top-left of viewport.

## Responsive behavior

The system is designed desktop-first but adapts cleanly to narrower viewports. The centered form container on authentication pages should maintain its maximum width of 41.25rem until viewport drops below 48rem, then scale to 100% width with 1.25rem horizontal margins. Marketing panels with `{rounded.panel}` corners should reduce to `{rounded.card}` (1.25rem) on mobile to prevent excessive rounding at small scales.

Display typography requires the most aggressive scaling. Hero-display at 6.25rem should drop to 4.375rem below 64rem viewport and to 3.125rem below 40rem. Section-display follows the same stepped reduction. Body text remains fixed at 0.9375rem across all breakpoints—Inter's readability at this size does not require adjustment.

Touch targets must maintain minimum 2.75rem height for all buttons and inputs. The pill button shape naturally accommodates this with its generous vertical padding. Form stacking should increase vertical gaps from 0.625rem to 0.9375rem on touch devices to prevent accidental activation.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the default background; it is foundational to the brand's visual impact.
- The Gramatika/Inter type split—display versus interface is deliberately exclusive.
- The lime green (#71EB44) as the sole primary action color; diluting it with alternatives weakens recognition.
- Generous border radii; the pill and panel shapes are signature elements.
- High contrast in all text pairings; never place mid-gray on black.

### Avoid
- Adding shadows or gradients to flat surfaces; the system achieves depth through color and scale, not elevation.
- Using coral (#F95841) for error states on dark backgrounds; it is reserved for marketing energy and social contexts.
- Shrinking Gramatika display type below 2.5rem; at small sizes its tight spacing becomes illegible.
- Introducing additional border colors beyond the subtle gray; the palette is intentionally limited.

### Recommended Build Order
1. Establish the black canvas and white text foundation with Inter body typography.
2. Implement the pill button component with lime green primary and Gramatika Bold text.
3. Build the form stack with dark inputs and consistent vertical rhythm.
4. Add display typography scales with Gramatika, testing at maximum and minimum sizes.
5. Introduce accent colors progressively: lime for actions, coral for marketing panels, purple for secondary buttons.
6. Polish with rounded panel containers and social platform integrations.

### Accessibility
- All text on black backgrounds uses pure white (#FFFFFF) for 21:1 contrast minimum.
- Lime green buttons with black text achieve approximately 12:1 contrast, exceeding WCAG AAA for large text.
- Coral panels with black text maintain strong contrast but should be tested for color-blind visibility; the large type size helps compensate.
- Focus indicators should use a 2px outline in `{colors.action-primary-hover}` or white, offset by 2px from element edges.
- Form error messages should include an icon or aria-live announcement, not rely solely on color.

## Scope note

This guide covers the authentication flow and marketing landing surfaces visible in the supplied materials. Mobile layouts, animation behavior, hover states beyond color shifts, form validation micro-interactions, and additional interior pages are not documented. The spacing and radius values derive from the exact interface measurements provided; implementers should verify visual consistency when extending to new contexts.
