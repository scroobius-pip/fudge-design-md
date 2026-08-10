# How app.issen.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.issen.com-design)

Last updated: 2026-08-10

## Captured pages

[![Onboarding language selection card with gradient progress bar, country flag icons, and pink-orange gradient Continue button](https://pin.fontofweb.com/5678?format=jpg)](https://design.withfudge.com/share/pin-5678)

[Onboarding language selection card with gradient progress bar, country flag icons, and pink-orange gradient Continue button](https://design.withfudge.com/share/pin-5678)

[![Welcome landing page with gradient ISSEN logo, centered value proposition, and gradient Get started button on warm off-white background](https://pin.fontofweb.com/5677?format=jpg)](https://design.withfudge.com/share/pin-5677)

[Welcome landing page with gradient ISSEN logo, centered value proposition, and gradient Get started button on warm off-white background](https://design.withfudge.com/share/pin-5677)

## Overview

ISSEN presents a language-learning experience through a warm, approachable visual system that prioritizes clarity and encouragement. The interface centers on a distinctive pink-to-orange gradient that threads through branding, progress indicators, and primary actions, creating cohesive energy across onboarding and welcome surfaces. The design favors generous whitespace, soft rounded corners, and a restrained typographic hierarchy that keeps attention on content choices rather than decorative elements. Every screen appears as a contained moment—either a centered welcome statement or a card-based selection flow—suggesting a step-by-step progression that feels manageable and focused. The overall impression is of a modern consumer application that balances playfulness with functional directness, using gradient warmth to differentiate from colder productivity tools.

## Colors

The palette builds from a warm off-white canvas, letting a vibrant pink-orange gradient serve as the singular accent system. Dark ink provides readable text against light surfaces, while muted gray handles secondary labels and hints. The gradient appears consistently across the logo, progress bar, and primary buttons, making it the unmistakable brand signature.

| token | value | use |
|---|---|---|
| canvas | #FAF9F6 | Page background, warm off-white establishing the ambient environment |
| surface | #FFFFFF | Card backgrounds, input fields, elevated containers |
| ink | #18181B | Primary text, headings, selected options, high-emphasis content |
| muted-ink | #71717A | Secondary text, captions, placeholder hints, disabled affordances |
| action-gradient-start | #E84393 | Gradient origin for buttons, progress fill, logo—vibrant magenta-pink |
| action-gradient-end | #FF6B4A | Gradient terminus for buttons, progress fill, logo—warm coral-orange |
| action-text | #FFFFFF | Text atop gradient surfaces, ensuring contrast and clarity |
| border | #E4E4E7 | Subtle dividers, input outlines, card edges in resting state |
| progress-track | #FDE2E8 | Light pink background behind the progress indicator fill |

The gradient operates as a continuous spectrum rather than discrete states: the ISSEN logo shifts from pink left to orange right, the progress bar fills with the same left-to-right warmth, and primary buttons carry the full horizontal blend. This creates immediate visual continuity between brand identity, user progress, and action prompts. The canvas warmth prevents clinical sterility without competing for attention—photographic or illustrative content would sit naturally against it. Dark ink avoids pure black, softening the contrast slightly for extended reading comfort.

## Typography

ISSEN uses Inter as its sole type family, deployed in a compact range of weights and sizes that serve distinct content roles. The type system favors medium and bold weights for interface chrome, with regular weight reserved for body reading and longer descriptions.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 800 | 1 | -0.03em | Large brand moments, welcome logo lockup |
| section-display | Inter | 1.5rem | 700 | 1.2 | -0.02em | Card headings, step titles, primary questions |
| body | Inter | 1rem | 400 | 1.5 | 0 | Descriptions, explanatory paragraphs |
| body-medium | Inter | 1rem | 500 | 1.5 | 0 | Button labels, selected options, emphasized body |
| label | Inter | 0.875rem | 500 | 1.4 | 0.01em | Form labels, list items, navigation hints |
| caption | Inter | 0.75rem | 400 | 1.4 | 0.01em | Fine print, metadata, auxiliary information |

The hero-display token at 3rem carries the custom ISSEN logotype weight, establishing immediate brand presence on the welcome screen. Section-display at 1.5rem handles the primary question on the onboarding card, large enough to command attention without overwhelming the contained space. Body and body-medium share the same 1rem size, differentiated by weight alone—this creates clear hierarchy without introducing excessive scale jumps. Label at 0.875rem serves the language list items and secondary button text, while caption handles the smallest readable elements. Tracking remains tight on display sizes for visual density, loosening slightly on smaller functional text to aid legibility. Inter's variable font file supports weight graduation smoothly; verify licensing for these families before production use.

## Layout

The layout system follows a centered, single-column philosophy that constrains content width for comfortable reading and decision-making. Pages read as discrete stages rather than continuous scrolls, with content anchored to the vertical center of the viewport and action elements grounded at the bottom.

The welcome page presents a classic centered hero composition: the ISSEN logo and tagline occupy the visual center, with primary and secondary actions fixed near the bottom edge. This creates breathing room above and urgency below, guiding the eye naturally from brand recognition to action. The content max-width of approximately 28rem prevents line lengths from stretching uncomfortably wide on larger screens.

The onboarding card introduces a contained panel model: a white rounded card floats against the warm canvas, with internal padding creating a clear content boundary. Inside the card, elements stack vertically with consistent section gaps. The progress bar sits above the card as a separate horizontal element, spanning slightly wider than the card itself to create visual hierarchy between step indicator and current task.

Spacing follows a 0.25rem base unit, with practical increments building to 1.5rem for card internal padding and 2rem for major section separations. The card itself uses substantial corner rounding at 1rem, distinguishing it from the sharper 0.75rem of buttons and inputs. This radius differential—cards softer than buttons—creates subtle depth layering without shadows.

The bottom action bar on the onboarding screen uses a split layout: secondary action left, primary action right, with equal height and balanced width proportions. This two-button pattern appears consistently, suggesting a navigation model where users can always step backward or forward.

## Visual language

The visual language communicates accessibility and momentum through rounded geometry, gradient energy, and minimal chrome. Every interactive element carries soft corners—nothing in the interface approaches sharp right angles, reinforcing the friendly, non-intimidating tone appropriate for language learners.

The pink-to-orange gradient functions as the singular decorative element, appearing in three critical locations: the ISSEN wordmark, the progress indicator fill, and primary action buttons. This repetition trains users to associate gradient warmth with forward movement and brand trust. The gradient direction remains consistently horizontal left-to-right, creating a subtle reading-flow alignment.

Iconography in the language list uses circular country flags rather than abstract symbols, adding recognizable color and cultural specificity to an otherwise restrained palette. These 1.5rem circular icons sit inline with label text, creating compact list rows that scan quickly. The selected state for English shows a bordered container around flag and text, elevating that row above the plain text of unselected options.

The progress bar exemplifies the system's restraint: a thin horizontal track in light pink, with a rounded capsule fill that extends partially across, showing completion status without numerical precision. The fill carries the same gradient as buttons, linking progress to actionability.

No shadows appear in the visible interface—depth comes from color contrast, spacing, and size hierarchy alone. This flat approach keeps the interface feeling lightweight and responsive, appropriate for a web application that may run across device capabilities.

## Components

### Primary action button

The primary action button is the most visually prominent interactive element, carrying the full pink-to-orange horizontal gradient.

- **Anatomy**: Rounded rectangle containing centered text label
- **Surface**: Linear gradient from action-gradient-start to action-gradient-end
- **Typography**: body-medium token, action-text color, centered
- **Shape**: 0.75rem border radius, full-width within its container on mobile, balanced width in split layouts
- **Spacing**: Internal vertical padding approximately 1rem, creating a substantial touch target
- **Composition**: Appears at the bottom of flows, often paired with a secondary action of equal height

### Secondary action button

The secondary button provides an alternative path without competing for visual dominance.

- **Anatomy**: Rounded rectangle with subtle border, centered text
- **Surface**: surface background, 1px solid border in border color
- **Typography**: body-medium token, muted-ink color
- **Shape**: 0.75rem border radius, matching primary button height
- **Composition**: Positioned adjacent to primary action, typically left in a two-button arrangement

### Selection card

The card contains focused decision content, isolating the current step from page background.

- **Anatomy**: Rounded container with internal vertical stack of header, content, and optional footer
- **Surface**: surface background, no visible shadow
- **Shape**: 1rem border radius, creating soft containment
- **Spacing**: 1.5rem internal padding on all sides, 2rem gap between major content zones
- **Composition**: Centered horizontally, max-width constrained, with progress indicator above

### Language option row

Individual selectable items within the card follow a consistent list pattern.

- **Anatomy**: Horizontal row with circular flag icon left, label text right, optional selection border
- **Surface**: Transparent in default state; surface background with border when selected
- **Typography**: label token, ink color
- **Shape**: 0.75rem border radius on selected state container
- **Spacing**: Approximately 1rem vertical padding per row, creating generous touch targets
- **Variants**: Default (transparent, no border), selected (subtle border, slightly elevated background)

### Progress indicator

A thin horizontal bar showing step completion status.

- **Anatomy**: Full-width rounded track with partial gradient fill
- **Surface**: progress-track for unfilled portion, gradient fill for completed portion
- **Shape**: 9999px border radius creating full pill/capsule appearance
- **Composition**: Positioned above the card, slightly wider than card width, centered horizontally

## Responsive behavior

The visible interface suggests a mobile-first or centered narrow-column approach that scales gracefully to larger viewports. The welcome page and onboarding card both maintain centered alignment with constrained maximum width, implying that wider screens will show more canvas background rather than stretching content.

The two-button bottom bar on the onboarding screen uses a split layout that would compress naturally on smaller viewports, potentially stacking vertically if horizontal space becomes constrained. The language list within the card scrolls internally if content exceeds viewport height, though the visible example shows a contained set that fits comfortably.

For implementation, maintain the centered single-column model across all breakpoints. Increase horizontal margins on tablet and desktop to preserve the focused, stage-like presentation. The gradient buttons and progress bar should remain full-width within their containers to maintain visual impact. Touch targets should stay at least 44px in the smallest dimension; the visible button and row heights already exceed this.

## Practical implementation guidance

### Preserve
- The warm off-white canvas against pure white cards—this temperature shift creates subtle depth without shadows
- The consistent pink-to-orange gradient direction and placement; it is the brand's most recognizable element
- Generous internal card padding and row spacing; the airy feel reduces cognitive load during decision steps
- Circular flag icons inline with text for language selection; recognizable imagery outperforms abstract codes
- The two-button bottom pattern with primary right, secondary left

### Avoid
- Adding drop shadows to cards or buttons; the flat aesthetic depends on color and spacing alone
- Introducing additional accent colors that compete with the gradient system
- Sharp corners on any element; maintain the soft radius language throughout
- Numerical progress indicators (e.g., "Step 2 of 5"); the visual progress bar communicates sufficiently
- Stretching content to full viewport width on large screens; the narrow column is intentional

### Recommended build order
1. Establish the canvas and surface color tokens, then implement the gradient as a reusable utility
2. Set Inter at 1rem/400 as the base, layering in weight variations for hierarchy
3. Build the card container with 1rem radius and 1.5rem padding
4. Implement primary and secondary button components with matching height and differentiated surface
5. Create the progress bar as a rounded track with gradient fill
6. Compose the language list with flag icons and selected-state border treatment
7. Assemble page layouts: centered welcome hero, then card-based onboarding flow

### Accessibility
- Ensure gradient text and buttons meet contrast minimums; the white-on-gradient combination appears sufficient but should be verified with automated tools
- Provide visible focus indicators that do not rely solely on color; consider outline or ring treatments for keyboard navigation
- Flag icons should include language names as visible text; do not rely on icon recognition alone
- The progress bar should have an accessible name and value communicated to screen readers, since the visual fill alone does not expose percentage numerically
- Maintain touch target sizes at or above 44px for all interactive rows and buttons

## Scope note

This guide covers the welcome landing and native-language onboarding surfaces visible in the supplied images. Dashboard, conversation, settings, and other authenticated flows are not represented. Motion, sound, and real-time chat interfaces fall outside the current scope. Measurements are practical adaptation targets.
