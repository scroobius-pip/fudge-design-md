# How qoves.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/qoves.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero banner with flowing teal gradient background, white headline, and centered CTA button above a structured footer and large metallic QOVES wordmark.](https://pin.fontofweb.com/9258?format=jpg)](https://design.withfudge.com/share/pin-9258)

[Hero banner with flowing teal gradient background, white headline, and centered CTA button above a structured footer and large metallic QOVES wordmark.](https://design.withfudge.com/share/pin-9258)

[![Content section with centered dark and muted teal two-tone heading, body text, and two stacked card lists with rounded borders on white background.](https://pin.fontofweb.com/9257?format=jpg)](https://design.withfudge.com/share/pin-9257)

[Content section with centered dark and muted teal two-tone heading, body text, and two stacked card lists with rounded borders on white background.](https://design.withfudge.com/share/pin-9257)

[![Numbered three-step facial analysis explainer with circular step indicators, thumbnail images, and a bottom testimonial quote card with left accent border.](https://pin.fontofweb.com/9256?format=jpg)](https://design.withfudge.com/share/pin-9256)

[Numbered three-step facial analysis explainer with circular step indicators, thumbnail images, and a bottom testimonial quote card with left accent border.](https://design.withfudge.com/share/pin-9256)

[![Wide muted teal transformation panel with white headline, four-step horizontal process flow with numbered circles, and right-aligned CTA button.](https://pin.fontofweb.com/9255?format=jpg)](https://design.withfudge.com/share/pin-9255)

[Wide muted teal transformation panel with white headline, four-step horizontal process flow with numbered circles, and right-aligned CTA button.](https://design.withfudge.com/share/pin-9255)

## Overview

QOVES presents a clinical yet approachable digital experience for facial analysis and personal transformation planning. The visual system balances medical credibility with consumer warmth through a restrained palette of cool teals, generous whitespace, and typographic hierarchy that guides users through educational content toward conversion. The design avoids clinical coldness by employing soft gradients, rounded corners on interactive elements, and a two-tone heading treatment that creates visual rhythm without decorative excess.

The interface alternates between light, airy content sections and immersive gradient panels that signal key conversion moments. Typography remains consistently understated—Pp Neue Montreal in Book weight handles nearly all text, with Medium weight reserved for labels and emphasis—creating a cohesive reading experience that feels premium without being austere. F 37 Zagma Mono appears sparingly for category labels and technical annotations, adding a subtle layer of precision to the clinical positioning.

## Colors

The color system is built around a cool teal family that evokes medical cleanliness and digital sophistication, anchored by near-black ink for primary text and a progression of warm neutrals for surfaces and borders.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active UI elements, dark backgrounds |
| ink-secondary | #233137 | Headings in gradient panels, emphasized body text |
| ink-tertiary | #515255 | Footer text, muted captions, secondary metadata |
| accent | #5D767E | Primary teal for interactive states, icon fills |
| accent-muted | #758084 | Secondary teal for subdued emphasis |
| accent-light | #798F97 | Hover states, tertiary interactive elements |
| surface-cool | #9AAEB5 | Mid-tone teal for gradient midpoints, decorative fills |
| surface-cool-light | #AEC2C9 | Light teal for card backgrounds, step indicators |
| border-subtle | #CCD6D9 | Card borders, dividers, hairline rules |
| border-faint | #CDDBE1 | Button borders, input outlines, ghost elements |
| surface-warm | #E8E8E8 | Warm neutral for alternating sections |
| surface-off-white | #F2F2F2 | Subtle background variation for depth |
| surface-canvas | #F9FBFB | Near-white with cool cast for content areas |
| surface-pure | #FAFAFA | Card and panel backgrounds |
| canvas | #FFFFFF | Page background, button fills, inverted text |

The palette operates in three modes. Light mode dominates: white or near-white backgrounds with black-to-teal text progression. Gradient mode uses flowing teal-to-dark gradients for hero and CTA sections, with white text for contrast. Accent mode introduces the brighter teal (#9AAEB5 to #AEC2C9) for contained panels and step indicators. No dark mode is present in the visible interface. The two-tone heading treatment pairs ink-secondary with accent-muted or surface-cool to create semantic emphasis without weight changes.

## Typography

The type system relies on two families: Pp Neue Montreal for all interface and display text, and F 37 Zagma Mono for technical labels and category markers. Pp Neue Montreal was designed by Mathieu Desjardins and is available from Pangram Pangram Foundry. F 37 Zagma Mono was designed by Rick Banks and Ryan Williamson and is available from F 37 Foundry. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Neue Montreal | 3.75rem | 400 | 1.1 | -0.017em | Hero headlines, major section titles |
| section-display | Pp Neue Montreal | 2.6875rem | 400 | 1.17 | -0.015em | Section headings, two-tone titles |
| body-large | Pp Neue Montreal | 1.34375rem | 400 | 1.17 | normal | Lead paragraphs, feature descriptions |
| body | Pp Neue Montreal | 1.0625rem | 400 | 1.25 | normal | Standard paragraphs, list items |
| body-small | Pp Neue Montreal | 0.875rem | 400 | 1.25 | normal | Secondary text, card descriptions |
| label | Pp Neue Montreal | 0.75rem | 500 | 1.33 | normal | Buttons, tags, navigation items |
| label-mono | F 37 Zagma Mono | 0.671875rem | 400 | 1.17 | -0.005em | Category labels, technical annotations |
| navigation | Pp Neue Montreal | 0.78125rem | 400 | 1.12 | normal | Nav links, footer links |

The type scale is built on a 2px relative unit, with sizes snapping to whole multiples. Display sizes carry negative letter spacing for tight, confident headlines. Body sizes use neutral tracking. The Medium weight (500) appears only in label and emphasis contexts, never for display text, maintaining the system's restrained character. Line heights stay compact—1.1 to 1.25—to preserve the clean, editorial feel.

## Layout

The layout follows a centered, single-column content model with generous horizontal margins and clear section breaks. Maximum content width is constrained to approximately 860px (13.4375rem in the relative scale, or 215px actual), creating a focused reading experience that feels intentional rather than constrained.

Sections stack vertically with substantial vertical rhythm. Content sections use 4.5rem to 6.75rem of vertical padding, while contained panels and cards use tighter internal spacing. The horizontal centering is strict—text blocks, cards, and process flows all align to the same central axis, reinforcing the clinical precision of the service.

Grid behavior is implicit rather than explicit. Cards and process steps flow in single columns or horizontal sequences within the centered container. The four-step transformation panel spans nearly full width but maintains internal padding that respects the content max. Numbered explainers use a two-column layout at the card level: left text with right-aligned thumbnail images.

Responsive behavior should maintain the centered single-column structure, with display sizes scaling down proportionally. The two-column card internals should stack on narrower viewports, with thumbnails moving below text. Horizontal process flows should convert to vertical stacks with connecting lines replaced by simple numbering.

## Visual language

The visual language communicates clinical expertise through restraint and precision. Rounded corners are pervasive but subtle—cards at approximately 10.75px, buttons at 7.17px, small tags at 5.38px—softening the interface without feeling playful. Borders are hairline-thin (1px) and low-contrast, creating containment without visual weight.

Gradients are the primary decorative element, appearing as flowing, organic teal-to-dark transitions in hero and CTA sections. These gradients avoid hard edges and create an immersive, almost liquid quality that contrasts with the crisp typography and geometric cards. The large metallic QOVES wordmark in the footer extends this gradient language into three-dimensional chrome.

Photography appears sparingly and clinically: small thumbnail crops of facial analysis interfaces, neutral portraits, and UI mockups. Images receive the same subtle rounding as cards, maintaining consistency. No decorative illustration or iconography is visible beyond functional arrows and step numbers.

The two-tone heading is a signature pattern: the first phrase in dark teal (#233137) and the second in muted teal (#9AAEB5 or #AEC2C9), creating emphasis through color rather than weight or size. This pattern appears across hero, section, and card headings.

## Components

### Primary button

- Anatomy: Text label with right arrow icon, separated by a subtle vertical divider
- Surface: White background with 1px faint teal border
- Typography: `{typography.label}` in Medium weight, ink color
- Shape: Rounded rectangle with approximately 7.17px radius
- Spacing: Comfortable internal padding (14.33px vertical, relaxed horizontal)
- Composition: Centered or right-aligned within containers; arrow icon suggests forward action
- Variants: Dark variant with teal background and white text for high-contrast panels

### Secondary button / CTA

- Anatomy: Text label with arrow icon
- Surface: Teal background (`{colors.accent}` to `{colors.surface-cool}`), white text
- Typography: `{typography.label}` in Medium weight
- Shape: More generous rounding at approximately 13.44px radius
- Spacing: Relaxed padding (21.5px to 28.67px)
- Composition: Positioned at panel edges or centered below process flows

### Content card

- Anatomy: Contained block with optional header, body text, and footer
- Surface: Pure white or light teal background (`{colors.surface-pure}` or `{colors.surface-cool-light}`)
- Border: 1px subtle teal border for outlined variants; no border for filled variants
- Typography: Section heading in `{typography.section-display}`, body in `{typography.body}`
- Shape: 10.75px radius for standard cards, 13.44px for featured panels
- Spacing: Comfortable to generous internal padding (17.92px to 21.5px)
- Composition: Full-width within content max, stacked vertically with section spacing

### Step card / Numbered explainer

- Anatomy: Circular number indicator, heading, body text, optional thumbnail image
- Surface: Light teal background for the number circle; white or off-white card background
- Typography: Number in `{typography.label}` white on teal; heading in `{typography.body-large}`; body in `{typography.body-small}`
- Shape: Perfect circle for step indicator (50% radius); rounded card container
- Spacing: Generous vertical padding between steps; horizontal padding for text-image separation
- Composition: Left-aligned text stack with right-floating thumbnail; or full-width stacked on narrow viewports

### Process flow panel

- Anatomy: Horizontal sequence of numbered circles connected by thin lines, with labels below
- Surface: Full-width teal gradient or solid muted teal panel
- Typography: White labels in `{typography.body}`; numbers in circles using `{typography.label}`
- Shape: Circles with generous padding; connecting lines as 1px rules
- Spacing: Even horizontal distribution with arrow connectors
- Composition: Left-aligned headline with right-aligned CTA button above the flow

### Footer

- Anatomy: Multi-column link grid, company info, disclaimer, large brand mark
- Surface: White background
- Typography: Category labels in `{typography.label-mono}` with trailing slash; links in `{typography.body-small}`; disclaimer in smallest body size
- Spacing: Generous top padding, structured column gaps
- Composition: Asymmetric grid with company info left, link columns right, full-width wordmark below

## Responsive behavior

The visible interface suggests a desktop-first approach with a constrained content width. For implementation, the following adaptations are recommended:

- Maintain the centered single-column structure across all breakpoints
- Reduce hero display from 3.75rem to 2.5rem on tablet, 2rem on mobile
- Stack two-column card internals vertically, moving thumbnails below text
- Convert horizontal process flows to vertical numbered lists with connecting lines removed
- Increase touch targets for buttons to minimum 44px height
- Reduce section vertical padding by 30-40% on mobile to maintain scroll rhythm
- Footer columns should collapse to stacked sections with accordion behavior if space-constrained

## Practical implementation guidance

### Preserve
- The strict two-tone heading treatment as a signature pattern
- Generous whitespace and centered content constraint
- Subtle rounding consistency across interactive elements
- Hairline borders with low-contrast colors for containment
- The clinical restraint of single-font-family typography
- Gradient panels as immersive conversion moments

### Avoid
- Heavy drop shadows or elevation effects—depth comes from color and spacing
- Saturated or warm accent colors that break the cool teal family
- Decorative icons or illustrations that compete with the clinical positioning
- Multi-weight display typography—keep headlines in Book weight
- Full-bleed content without the centered constraint

### Recommended build order
1. Establish the 2px relative unit and type scale
2. Implement the color tokens, especially the teal progression and neutrals
3. Build the centered content container with max-width constraint
4. Create the two heading components (standard and two-tone)
5. Implement button variants with arrow icon pattern
6. Build card and panel components with consistent rounding
7. Add the step explainer and process flow patterns
8. Compose sections with proper vertical rhythm
9. Implement footer with asymmetric grid

### Accessibility
- Ensure gradient backgrounds meet contrast minimums for white text; test with APCA or WCAG 2.1
- The two-tone heading pattern should not convey meaning alone; structure with proper heading hierarchy
- Step indicators need aria-labels or visually hidden text for screen readers
- Arrow icons in buttons should have aria-hidden with descriptive button text
- Focus states should use visible outlines, not relying on color alone; consider 2px offset ring in accent color

## Scope note

This guide covers the visible homepage and landing sections including hero, educational content, process explanation, transformation CTA, and footer. Interior pages, mobile navigation patterns, form states, loading indicators, and motion design are not represented in the supplied material. The spacing and sizing values derive from the documented relative unit scale and exact interface measurements.
