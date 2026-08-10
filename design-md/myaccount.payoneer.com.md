# How myaccount.payoneer.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/myaccount.payoneer.com-design)

Last updated: 2026-08-10

## Captured pages

[![Feature grid with nine benefit cards showing line-art icons in purple and coral gradients, each with bold dark headings and muted gray body text on white background](https://pin.fontofweb.com/6718?format=jpg)](https://design.withfudge.com/share/pin-6718)

[Feature grid with nine benefit cards showing line-art icons in purple and coral gradients, each with bold dark headings and muted gray body text on white background](https://design.withfudge.com/share/pin-6718)

[![Account verification page with four-step horizontal progress indicator showing completed, active, and pending states with purple checkmarks and gray labels](https://pin.fontofweb.com/6717?format=jpg)](https://design.withfudge.com/share/pin-6717)

[Account verification page with four-step horizontal progress indicator showing completed, active, and pending states with purple checkmarks and gray labels](https://design.withfudge.com/share/pin-6717)

## Overview

The Payoneer account setup interface presents a calm, methodical onboarding experience designed to build user confidence during financial account creation. The visual system centers on clarity and progressive disclosure: a horizontal step tracker anchors the top of the verification flow, while a structured feature grid below communicates platform capabilities. The aesthetic is deliberately restrained—white surfaces, disciplined typography, and a single purple accent color create an environment of institutional trust without visual noise. Every element serves the functional goal of reducing friction during a high-stakes account setup process. The design avoids decorative excess in favor of readable hierarchies, consistent spacing rhythms, and purposeful color coding that signals completion status and available actions.

## Colors

The palette is intentionally minimal, built around a near-neutral foundation with a single vibrant accent for interactive states and progress indication.

| token | value | use |
|---|---|---|
| action | #702FFF | Primary interactive elements, active step indicators, icon accents, progress checkmarks |
| action-light | #F7F3FF | Subtle purple-tinted backgrounds for hover or selected states |
| ink | #252526 | Primary headings, bold labels, active step text |
| muted-ink | #666666 | Body copy, descriptions, secondary labels, inactive step text |
| canvas | #FFFFFF | Page background, card surfaces, input fields |
| surface | #FFFFFF | Elevated panels and contained content areas |
| border | #A8A8A8 | Inactive step borders, divider lines, subtle boundaries |

The color logic follows a completion-state pattern: purple (#702FFF) signals active or completed progress, while gray tones (#A8A8A8, #666666) indicate pending or inactive states. This creates immediate visual parsing of where a user stands in the onboarding sequence. The near-black ink (#252526) provides strong contrast for headings without the harshness of pure black, while muted-ink body text maintains readability at smaller sizes. The action-light tint offers a way to soften purple presence when full saturation would overwhelm, such as in hover backgrounds or selected item states. Connector lines between step tracker nodes use the same border color as inactive elements, maintaining visual consistency across the progress indicator. No dark mode or photographic color treatments are visible in the current interface surfaces.

## Typography

The system relies on a single type family with weight and size variation to establish hierarchy. Avenir Next World W 05, designed by The Monotype Studio (2020), Adrian Frutiger (1988), and Akira Kobayashi (2009), and provided by Monotype GmbH, serves all text roles. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Avenir Next World W 05 | 2.625rem | 600 | 1.24 | normal | Page titles, verification status headlines |
| section-display | Avenir Next World W 05 | 2rem | 600 | 1.31 | normal | Section headers, feature grid introductions |
| body-large | Avenir Next World W 05 | 2rem | 400 | 1.31 | normal | Prominent descriptive paragraphs |
| label | Avenir Next World W 05 | 1.25rem | 600 | 1.3 | normal | Feature card headings, step labels |
| body | Avenir Next World W 05 | 1rem | 500 | 1.375 | normal | Descriptions, explanatory copy, secondary text |
| navigation | Avenir Next World W 05 | 1rem | 500 | 1 | normal | Step tracker labels, utility text |

The type scale is built on a 4px relative unit, with sizes landing at 16px (1rem), 20px (1.25rem), 32px (2rem), and 42px (2.625rem). Weight distinctions are decisive: 600 for all headings and labels, 500 for body copy, and 400 for the occasional lighter display treatment. Line heights are tight, reflecting the interface's information-dense nature while maintaining adequate breathing room. Letter spacing remains normal throughout, avoiding compressed or expanded treatments that would compromise legibility in a financial context. The absence of italic or condensed variants keeps the tone straightforward and authoritative.

## Layout

The page structure follows a centered, single-column model with generous horizontal margins. The maximum content width is approximately 50.1rem (801.6px), creating a readable measure that prevents text from stretching uncomfortably wide on larger screens. Content blocks stack vertically with consistent section spacing of 3rem (48px) between major regions.

The step tracker occupies the upper portion of the page, horizontally centered with its four stages distributed evenly across the available width. Below this, the feature grid employs a three-column layout at desktop widths, with each card containing an icon, heading, and description. Cards align to a strict grid with uniform internal padding of 0.5rem (8px) vertical and consistent gaps between columns.

Vertical rhythm is maintained through systematic padding: 0.5rem (8px) for tight internal spacing within components, 0.75rem (12px) for slightly more breathing room in contained elements, and 3rem (48px) for section breaks. The layout avoids sidebars, floating elements, or asymmetric compositions that might distract from the linear task flow. All content remains within the centered container, with no full-bleed sections or breakout imagery.

## Visual language

The visual character is precise and functional, communicating reliability through geometric consistency and restrained detail. Icons throughout the interface use thin-line art with gradient accents in purple and coral tones, giving technical financial concepts a friendly, approachable quality. These icons sit above text blocks rather than beside them, creating a vertical reading pattern that scans easily.

The step tracker embodies the system's visual logic: circular nodes connected by horizontal lines, with completed states showing filled purple circles containing white checkmarks, active states showing purple-outlined circles with interior icons, and pending states showing gray-outlined circles. This progression creates a clear narrative of accomplishment and remaining work.

Feature cards have no visible borders or backgrounds—they exist as typographic and iconographic groupings on the white canvas, separated by grid gutters alone. This absence of container chrome reduces visual weight and keeps focus on the content. The only rounded elements are the pill-shaped step indicators (50% radius circles) and occasional 1rem-radius panels. Shadows are absent; depth is implied solely through spacing and color contrast.

## Components

### Step tracker

- **Anatomy**: Horizontal sequence of four circular nodes connected by thin lines, each node paired with a text label below
- **Surface and text color**: Completed nodes use action (#702FFF) fill with white checkmark icons; active nodes use action (#702FFF) border with action icon; pending nodes use border (#A8A8A8) border with muted icon; labels use ink (#252526) for completed/active, muted-ink (#666666) for pending
- **Typography**: label token for all stage names
- **Shape**: Perfect circles with 50% border-radius, approximately 2.5rem (40px) diameter; connector lines are 0.8px solid
- **Spacing**: Nodes distribute evenly across container width; labels sit 0.5rem below nodes with centered alignment
- **Composition**: Flexbox or grid with equal column distribution; line connectors absolutely positioned between node centers
- **Variants**: Completed (filled purple with checkmark), Active (purple outline with stage icon), Pending (gray outline with gray icon)

### Feature card

- **Anatomy**: Icon graphic above bold heading above descriptive paragraph
- **Surface and text color**: Transparent background on canvas (#FFFFFF); heading uses ink (#252526); description uses muted-ink (#666666)
- **Typography**: label token for headings, body token for descriptions
- **Shape**: No border, no background, no shadow; purely typographic with icon
- **Spacing**: Icon sits with 0.5rem to 0.75rem clearance above heading; heading has 0.5rem below before description; card padding is implicit through grid gutter
- **Composition**: Vertical stack with left-aligned text; icons are approximately 3rem wide, centered above text block
- **Variants**: No visible variants; all cards share identical structure

### Icon system

- **Anatomy**: Line-art illustrations using 1.5px to 2px strokes, often with gradient fills in purple and coral
- **Surface and text color**: Gradients range from action (#702FFF) through coral tones; backgrounds remain transparent
- **Shape**: Geometric and symbolic rather than illustrative; currency symbols, hand gestures, document shapes, and financial metaphors
- **Composition**: Centered within implied square area above card text
- **Variants**: Each feature has a unique icon; no state changes visible

## Responsive behavior

The three-column feature grid should reflow to two columns on medium viewports and single column on narrow screens, maintaining card internal proportions and readable line lengths. The step tracker should remain horizontally scrollable or wrap to a vertical stack on mobile, preserving the left-to-right narrative while accommodating limited width. Font sizes may scale down by one step on small screens, with hero-display reducing to section-display and section-display to label, ensuring headings remain proportional without overwhelming the viewport. The centered container should maintain comfortable side margins of at least 1rem at all widths, preventing content from touching screen edges.

## Practical implementation guidance

### Preserve
- The strict centering and maximum content width that creates a calm, focused reading experience
- The purple-to-gray state progression in the step tracker, which provides immediate orientation
- The weight-based type hierarchy using a single family, which maintains cohesion
- The absence of card backgrounds and borders, which keeps the interface lightweight
- The consistent vertical spacing rhythm at 0.5rem, 0.75rem, and 3rem intervals

### Avoid
- Adding background colors or shadows to feature cards, which would introduce unnecessary visual weight
- Using pure black (#000000) for text when the softer ink (#252526) maintains readability with less harshness
- Expanding the color palette beyond the single purple accent, which would dilute the focused brand presence
- Reducing line heights below the specified values, which would compromise legibility in dense content areas
- Using the Times family for any interface text, as it appears to serve only fallback or system purposes

### Recommended build order
1. Establish the centered container with maximum width and base spacing tokens
2. Implement the type scale with Avenir Next World W 05 at all specified sizes and weights
3. Build the step tracker with its three visual states and connector lines
4. Create the feature grid with icon, heading, and description stacking
5. Apply color tokens, ensuring state logic in the progress indicator
6. Add responsive breakpoints for grid reflow and type scaling

### Accessibility
- Maintain color contrast ratios of at least 4.5:1 for body text and 3:1 for large text; the ink (#252526) on canvas (#FFFFFF) and muted-ink (#666666) on canvas both exceed these thresholds
- Ensure step tracker states are distinguishable without color alone by using icon shape differences (checkmark versus stage icon versus empty)
- Provide visible focus indicators for interactive elements using the action (#702FFF) color
- Use semantic heading hierarchy with a single h1 for page title, h2 for section headers, and h3 for card labels
- Allow sufficient touch targets for step tracker nodes on mobile, with minimum 2.75rem tap areas

## Scope note

This guide covers the account setup and verification page surfaces visible in the supplied images, including the step tracker and feature grid components. Navigation headers, footer elements, form inputs, button components, loading states, error messaging, and mobile-specific layouts are not represented in the current material. Measurements are derived from exact retained values where available.
