# How checkout.rabbit.tech is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/checkout.rabbit.tech-design)

Last updated: 2026-08-10

## Captured pages

[![Full two-column checkout layout showing rabbit logo, express checkout buttons, contact and delivery form fields, and order summary sidebar with product image and pricing.](https://pin.fontofweb.com/1572?format=jpg)](https://design.withfudge.com/share/pin-1572)

[Full two-column checkout layout showing rabbit logo, express checkout buttons, contact and delivery form fields, and order summary sidebar with product image and pricing.](https://design.withfudge.com/share/pin-1572)

[![Payment section with credit card form fields, PayPal option, Shop Pay save-info checkbox, orange Pay now button, and footer policy links.](https://pin.fontofweb.com/1573?format=jpg)](https://design.withfudge.com/share/pin-1573)

[Payment section with credit card form fields, PayPal option, Shop Pay save-info checkbox, orange Pay now button, and footer policy links.](https://design.withfudge.com/share/pin-1573)

[![Order summary panel with r1 device thumbnail, quantity stepper, discount code input, and subtotal through total pricing breakdown.](https://pin.fontofweb.com/1574?format=jpg)](https://design.withfudge.com/share/pin-1574)

[Order summary panel with r1 device thumbnail, quantity stepper, discount code input, and subtotal through total pricing breakdown.](https://design.withfudge.com/share/pin-1574)

## Overview

The Rabbit checkout presents a warm, understated e-commerce flow that prioritizes clarity and trust over visual noise. The interface sits on a soft stone-colored canvas with near-black typography, creating a calm environment for completing a high-consideration purchase. A single vibrant orange anchors every decisive action, from the Pay now button to the product imagery itself. The layout splits into a focused form area and a persistent order summary, keeping pricing context visible without overwhelming the task at hand. Geometric sans-serif letterforms with tight apertures and confident weights reinforce the brand's contemporary hardware identity, while generous whitespace and deliberate containment prevent the dense checkout information from feeling cramped.

## Colors

The palette is intentionally restrained: a warm neutral ground, near-black text, and one saturated accent. This discipline keeps attention on the product and the completion path.

| token | value | use |
|---|---|---|
| canvas | `#E8E4DE` | Page background, input field fills, order summary panel |
| surface | `#FFFFFF` | Button text on dark or orange backgrounds, checkbox fills, card backgrounds |
| ink | `#000000` | Primary text, section headings, selected states, strong borders |
| muted-ink | `#6B6560` | Placeholder text, secondary labels, helper copy, footer links |
| action | `#FF4D00` | Primary buttons, product accent color, active indicators |
| action-hover | `#E64500` | Pressed or hovered primary button state |
| border | `#D4CFC8` | Input outlines, dividers, subtle containment |
| border-strong | `#000000` | Selected payment method outline, focused field rings |

The warm stone canvas (`#E8E4DE`) dominates the viewport, creating a tactile, paper-like quality that distinguishes this checkout from colder white-background alternatives. Black ink carries all primary information hierarchy, while muted-ink handles supporting text without competing for attention. The action orange appears sparingly but decisively: the Pay now button spans full width in the payment section, and the product thumbnail echoes the same hue, creating visual continuity between the item being purchased and the completion action. No gradients or shadows are present; all depth comes from color blocking and spacing.

## Typography

Two font families serve distinct roles. The geometric sans carries all interface text with a bold, contemporary voice, while the monospace family handles technical or data-dense moments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | It J Gg 9 Ex-600 | 2rem | 700 | 1.1 | -0.02em | Page title, major section headers |
| section-display | It J Gg 9 Ex-600 | 1.5rem | 700 | 1.2 | -0.01em | Form section headings (Contact, Delivery, Payment) |
| body | It J Gg 9 Ex-600 | 1rem | 400 | 1.5 | 0em | Input values, primary labels, pricing |
| body-small | It J Gg 9 Ex-600 | 0.875rem | 400 | 1.5 | 0em | Secondary text, helper copy, policy links |
| label | It J Gg 9 Ex-600 | 0.75rem | 400 | 1.4 | 0.01em | Field placeholders, micro-copy |
| mono | By Teguh Arief-4222301590106173831 | 0.875rem | 400 | 1.4 | 0em | Order quantities, technical metadata |

The geometric sans (It J Gg 9 Ex-600) shows tight letter-spacing at display sizes, giving headings a compact, confident presence. Body text relaxes to neutral tracking for readability in longer form fields. Weights cluster at 400 and 700; there is no intermediate semibold visible in the interface. The monospace family (By Teguh Arief-4222301590106173831, from Power Type Foundry, designed by Teguh Arief) appears in the quantity stepper and potentially in order metadata, providing a technical counterpoint to the main sans. Verify licensing for these families before production use.

## Layout

The checkout employs a two-column structure on desktop: a wider left column for the progressive form and a narrower right column for the persistent order summary. The left column contains the brand mark, express checkout options, and stacked form sections for contact, delivery, and payment information. The right column mirrors the product thumbnail, quantity controls, discount entry, and running total.

A single vertical divider or generous gutter separates the columns, maintaining clear ownership of each zone without heavy chrome. The left column's content is left-aligned with consistent internal margins, creating a reading path that descends naturally through the required fields. The right column's summary panel appears to float on the same canvas background, distinguished by internal spacing rather than a bounding box.

Vertical rhythm is established through section spacing of 2rem between major form groups, with 1.5rem between related fields within a group. Input fields share a uniform height and internal padding, creating horizontal alignment across single-column and multi-column field arrangements. The express checkout buttons sit in a three-column grid above the manual form, each button equal width with consistent internal padding.

## Visual language

The aesthetic is warm minimalism with hardware-brand confidence. Rounded corners are moderate and consistent: inputs and buttons share the same 0.5rem radius, while larger panels use 0.75rem. There are no sharp corners in interactive elements, softening the technical density of a multi-field checkout.

Imagery is product-focused and small-scale: the r1 device thumbnail sits in a rounded square container with a subtle shadow or border, showing the orange-accented hardware against a dark background. This thumbnail repeats in the summary panel, reinforcing purchase confidence.

Icons are simple and functional: a lock for security, a question mark in a circle for field help, plus and minus for quantity adjustment. These use the muted-ink color at small sizes, avoiding visual competition with text.

The express checkout buttons introduce external brand colors—Shop Pay's purple, PayPal's yellow and blue wordmark, Google Pay's black—within the same rounded button container. These are treated as embedded brand assets rather than recolored to match the system, preserving user recognition.

## Components

### Primary action button
- **Anatomy**: Full-width rectangular button with centered text label
- **Surface and text color**: Solid action orange (`#FF4D00`) background with white (`#FFFFFF`) text
- **Typography**: body token, bold weight
- **Shape**: 0.5rem border radius, no border
- **Spacing**: Comfortable vertical padding (1.5rem equivalent), generous horizontal breathing room
- **Composition**: Spans full width of its container, typically at the bottom of a form section
- **States**: The visible state is the default; hover should darken to action-hover (`#E64500`)

### Express checkout button group
- **Anatomy**: Three equal-width buttons in a horizontal row
- **Surface and text color**: Each button retains its native brand colors (Shop purple, PayPal yellow, Google Pay black)
- **Typography**: Brand wordmarks as embedded assets, not live text
- **Shape**: 0.5rem border radius, consistent height across all three
- **Spacing**: Compact gap between buttons, comfortable internal padding
- **Composition**: Centered below "Express checkout" label, above an "OR" divider with horizontal rules

### Text input field
- **Anatomy**: Single-line input with placeholder text, optional icon or action on right edge
- **Surface and text color**: Canvas background (`#E8E4DE`), ink text when filled, muted-ink placeholder
- **Typography**: body token for value, label token for placeholder
- **Shape**: 0.5rem border radius, 1px border in border color
- **Spacing**: Compact vertical padding, comfortable horizontal padding
- **Composition**: Full-width by default; half-width fields appear in pairs (first/last name, expiration/security code)
- **States**: Default shows placeholder; focused state should use border-strong

### Quantity stepper
- **Anatomy**: Horizontal group of minus button, numeric display, plus button
- **Surface and text color**: Canvas background for display area, surface for buttons with ink icons
- **Typography**: mono token for the numeric value
- **Shape**: 0.5rem border radius on outer buttons, squared internal junctions
- **Spacing**: Tight internal spacing, compact overall footprint
- **Composition**: Inline with product title, left-aligned in summary panel

### Payment method selector
- **Anatomy**: Expandable card with radio selection, method name, and accepted card icons
- **Surface and text color**: Canvas background default, surface with border-strong when selected
- **Typography**: body-small for method name, label for supporting text
- **Shape**: 0.75rem border radius for the container, 0.5rem for nested fields
- **Spacing**: Comfortable internal padding, section gap below when expanded
- **Composition**: Full-width stacked cards, single selection behavior
- **States**: Selected state shows strong border and reveals nested form fields; unselected shows subtle border only

### Order summary panel
- **Anatomy**: Product thumbnail with quantity badge, title, variant, stepper, discount row, subtotal, shipping, total
- **Surface and text color**: Canvas background throughout, ink for values, muted-ink for labels
- **Typography**: body for prices, body-small for variant and shipping status, section-display for total
- **Shape**: 0.75rem border radius implied by internal spacing
- **Spacing**: Comfortable padding around all content, compact gaps between line items
- **Composition**: Right-aligned prices, left-aligned labels, total row separated by extra space or subtle rule

## Responsive behavior

The two-column layout should stack to single column on narrow viewports, with the order summary moving above the form to confirm purchase context before scrolling. Express checkout buttons should remain in a row if space permits, or stack vertically on very narrow screens. Input field pairs (name, expiration/security code, city/state/ZIP) should collapse to full-width stacking below a moderate breakpoint. The primary action button should maintain full-width behavior at all sizes. Font sizes may reduce by one step on small screens to prevent horizontal overflow in compact fields.

## Practical implementation guidance

### Preserve
- The warm stone canvas as the dominant background; do not shift to pure white
- The single orange accent for all primary actions; avoid introducing competing accent colors
- The tight, geometric sans-serif voice in headings and body
- The consistent 0.5rem radius on all interactive elements
- The two-column desktop layout with persistent summary visibility

### Avoid
- Heavy shadows or elevation effects; the design is flat and color-blocked
- Multiple accent colors or gradient backgrounds
- Sharp-cornered inputs or buttons that break the soft geometric system
- Reducing the express checkout buttons to text-only or recoloring their brand assets
- Moving the order summary below the fold on desktop

### Recommended build order
1. Establish the canvas background and typography scale with the geometric sans
2. Build the two-column grid structure with appropriate gutters
3. Implement form inputs with consistent height, padding, and radius
4. Add the order summary panel with product thumbnail and line-item spacing
5. Style the primary action button in action orange with white text
6. Integrate express checkout buttons with native brand colors
7. Add payment method selector with expand/collapse behavior
8. Refine responsive stacking and touch targets

### Accessibility
- Maintain a minimum 4.5:1 contrast ratio between ink and canvas for all body text
- Ensure the action orange on white text meets contrast requirements, or darken the orange slightly if needed
- Provide visible focus indicators using border-strong on all interactive elements
- Associate all input placeholders with persistent visible labels for screen readers
- Make the quantity stepper operable via keyboard with clear focus states
- Preserve native radio button semantics in the payment method selector

## Scope note

This guide covers the desktop checkout flow for the Rabbit r1 device purchase. Measurements are practical adaptation targets. Unseen states including mobile breakpoint behavior, loading skeletons, error validation styling, confirmation page, and account creation post-purchase are not represented in the supplied images.
