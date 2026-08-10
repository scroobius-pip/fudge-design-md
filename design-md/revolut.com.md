# How revolut.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/revolut.com-design)

Last updated: 2026-08-10

## Captured pages

[![Crypto conversion hero with dark background, floating 3D coin renders, and a compact conversion calculator card overlaying the right side.](https://pin.fontofweb.com/7775?format=jpg)](https://design.withfudge.com/share/pin-7775)

[Crypto conversion hero with dark background, floating 3D coin renders, and a compact conversion calculator card overlaying the right side.](https://design.withfudge.com/share/pin-7775)

[![Dark footer with multi-column link grid, Revolut logo, social icons, and regulatory disclaimers in muted gray text.](https://pin.fontofweb.com/7748?format=jpg)](https://design.withfudge.com/share/pin-7748)

[Dark footer with multi-column link grid, Revolut logo, social icons, and regulatory disclaimers in muted gray text.](https://design.withfudge.com/share/pin-7748)

[![FAQ accordion section on black background with expanded answer revealing card types and a subtle plus-minus toggle.](https://pin.fontofweb.com/7747?format=jpg)](https://design.withfudge.com/share/pin-7747)

[FAQ accordion section on black background with expanded answer revealing card types and a subtle plus-minus toggle.](https://design.withfudge.com/share/pin-7747)

[![Corporate cards hero with dramatic 3D card stack renders in metallic finishes and two pill-shaped call-to-action buttons.](https://pin.fontofweb.com/7746?format=jpg)](https://design.withfudge.com/share/pin-7746)

[Corporate cards hero with dramatic 3D card stack renders in metallic finishes and two pill-shaped call-to-action buttons.](https://design.withfudge.com/share/pin-7746)

## Overview

Revolut's design system is built for financial credibility through extreme contrast and disciplined restraint. The interface alternates between immersive near-black canvases and clean light surfaces, using typography as the primary structural element rather than decorative ornament. The system serves two distinct modes: dark immersive experiences for product storytelling and conversion flows, and light functional surfaces for dense information and account management. Across both modes, the visual hierarchy is established through scale and weight rather than color variation, with Aeonik Pro providing confident display typography and Inter handling readable body text. The overall impression is one of precision engineering—every element feels calculated, from the tight letter-spacing on headlines to the exact pill curvature of buttons.

## Colors

The color system is intentionally narrow, relying on value contrast rather than hue variation to create hierarchy and focus.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary immersive backgrounds, hero sections, crypto pages |
| canvas-elevated | #161618 | Footer backgrounds, elevated dark panels |
| surface | #191C1F | Card backgrounds, conversion calculators, elevated containers on dark |
| surface-light | #F4F4F4 | Light mode backgrounds, secondary page canvases |
| ink | #FFFFFF | Primary text on dark backgrounds, maximum contrast |
| ink-primary | #F4F4F4 | Headlines and primary content on dark, slightly softer than pure white |
| ink-secondary | #A1A1A3 | Supporting text, labels, footer navigation links |
| ink-muted | #717173 | Tertiary information, captions, disabled states |
| ink-dark | #191C1F | Primary text on light backgrounds |
| action-primary | #F4F4F4 | Filled buttons, primary CTAs on dark |
| action-primary-text | #000000 | Text on filled buttons |
| action-secondary-surface | #000000 | Background for outlined buttons on dark |
| action-secondary-border | #F4F4F4 | Border for outlined buttons on dark |
| action-secondary-text | #F4F4F4 | Text for outlined buttons on dark |
| accent | #7F84F6 | Links, interactive highlights, crypto indicators |
| border-subtle | #242426 | Dividers on dark backgrounds, accordion separators |
| border-light | #EBEBF0 | Dividers on light backgrounds |

The dark mode dominates the marketing and product experience. Light surfaces appear as functional inversions for account dashboards and documentation. The accent purple is used sparingly for interactive states and crypto-related indicators, never as a primary brand wash. On dark backgrounds, text progresses from #F4F4F4 for headlines to #A1A1A3 for body and #717173 for fine print, creating a clear three-tier hierarchy without leaving the grayscale.

## Typography

The type system pairs a custom geometric sans-serif for display and UI with a neutral grotesque for body text. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Aeonik Pro | 5.863rem | 500 | 1 | -0.022em | Homepage heroes, largest marketing headlines |
| section-display | Aeonik Pro | 3.431rem | 500 | 1 | -0.011em | Section headers, page titles |
| feature-headline | Aeonik Pro | 2rem | 500 | 1.188 | -0.01em | FAQ questions, card titles, feature names |
| body | Inter | 1rem | 400 | 1.5 | -0.01em | Paragraphs, descriptions, general content |
| body-small | Inter | 0.75rem | 400 | 1.5 | 0.015em | Captions, metadata, fine print |
| label | Aeonik Pro Revolut 19 | 1.125rem | 400 | 1.333 | 0 | Category labels, overlines, taglines |
| navigation | Aeonik Pro | 1rem | 500 | 1.375 | 0 | Header links, buttons, nav items |
| legal | Inter | 0.875rem | 400 | 1.571 | -0.005em | Footer disclaimers, regulatory text |

Aeonik Pro and Aeonik Pro Revolut 19 are designed by Joe Leadbeater and Mark Bloom, available from Co Type Foundry. Inter carries no attributed designer or vendor in the supplied records.

The display scale is aggressive, with hero sizes reaching nearly 94px on the homepage and scaling down to 32px for section headers. Tight negative letter-spacing on all display sizes creates a compact, authoritative presence. The label style uses Aeonik Pro Revolut 19 at 18px with slightly looser line-height, functioning as a bridge between display and body. Body text remains consistent at 16px across contexts, with line-height adjusting from normal for UI elements to 1.5 for readable passages.

## Layout

The layout system uses a centered content model with generous horizontal margins and clear vertical rhythm. Header navigation sits at 16px vertical padding with horizontal margins of approximately 352px on desktop, creating a floating navigation bar that feels detached from the content edge. Main content sections use 64px to 88px vertical padding, with 72px top padding common on hero sections.

The grid is fundamentally single-column for text content, with asymmetric two-column compositions for hero sections where imagery occupies the right portion. On the crypto conversion page, a compact calculator card overlays the right side of the hero, breaking the strict two-column model with a floating element. FAQ sections use full-width accordion items with horizontal rules separating entries, each question receiving substantial vertical breathing room.

Spacing follows a 2px base unit, with common increments at 8px, 16px, 24px, 32px, 40px, and 64px. Component internal padding typically uses 16px for cards and 24px for larger panels. Buttons use 10px vertical and 24px horizontal padding for the standard size, with a smaller 8px by 20px variant for header actions. Margins between paragraphs sit at 16px to 20px, while section breaks use 40px to 64px.

## Visual language

The visual language is characterized by dimensional product photography and restrained UI chrome. Marketing pages feature large-scale 3D renders—metallic credit cards with machined edges, floating cryptocurrency coins with iridescent glass surfaces, device mockups with subtle shadows. These renders are photographed or rendered against pure black, allowing the products to emerge from darkness with dramatic lighting.

UI elements reject decoration in favor of geometric purity. Buttons are strictly pill-shaped with 9999px border radius. Cards use 20px radius for substantial panels and 16px for smaller containers. The corner radius system creates a family of related shapes: pills for actions, rounded rectangles for content, and sharp corners for structural dividers.

Iconography is minimal and functional. The FAQ accordion uses a simple plus-minus circular toggle. Navigation avoids icons entirely in favor of text labels. Social links in the footer use small recognizable platform icons in muted gray. The overall effect is that of a premium hardware brand—every surface feels considered, every edge has purpose.

## Components

### Header navigation

The header floats above content with a transparent or near-black background. The Revolut wordmark appears left-aligned in white, followed by primary navigation links in Aeonik Pro Medium at 16px. Right-aligned actions include a "Log in" text link and a "Sign up" pill button with white fill and black text. Navigation links use 8px to 10px vertical padding and 20px to 24px horizontal padding, with 4px margins between items. The header maintains 16px vertical padding and substantial horizontal margins that create a contained, premium feel.

### Hero section

Hero sections on dark backgrounds use a left-aligned text block with a large display headline, supporting paragraph, and one or two pill buttons. The headline uses Aeonik Pro at sizes up to 93.808px with tight negative letter-spacing. A label or overline in Aeonik Pro Revolut 19 at 18px precedes the headline, establishing context. The paragraph sits below with 18px to 24px top margin, using Inter at 16px in white or near-white. Buttons appear below with 16px to 24px top margin, using the pill shape with either filled white or transparent with white border variants.

On the crypto conversion page, the right side features a floating calculator card with dark surface background, rounded corners, and compact internal spacing. This card contains currency selectors, amount inputs, and rate information in a stacked layout with 12px to 16px internal padding.

### FAQ accordion

FAQ sections use a black background with full-width accordion items. Each question is rendered in Aeonik Pro Medium at 32px with white text. A circular plus icon in muted gray sits right-aligned, inverting to a minus when expanded. Expanded answers reveal in Inter at 16px with generous line-height, using bold labels for subsections like "Physical cards" and "Virtual cards." A horizontal rule in subtle gray separates each item. The accordion maintains substantial vertical spacing between entries, with 40px to 64px between questions.

### Footer

The footer uses an elevated dark background (#161618) with a multi-column link grid. Column headers use Inter at 16px in white with 600 weight. Links below use Inter at 16px in muted gray (#A1A1A3), with 8px vertical padding per link. The Revolut wordmark appears above the legal section in white. Social platform icons sit right-aligned in muted gray. Below, regulatory disclaimers use Inter at 12px to 14px in muted gray, with 20px paragraph spacing and substantial top padding before the legal text block. A country selector with flag icon appears left-aligned above the legal links.

### Buttons

Primary buttons use a white fill with black text, pill shape, and 10px by 24px padding. Secondary buttons use transparent fill with white border and white text, identical padding and shape. A smaller variant uses 8px by 20px padding for header actions. Text within buttons uses Aeonik Pro Medium at 16px with 22px line-height. On light backgrounds, an inverted variant uses black fill with white text.

### Cards

Content cards on dark backgrounds use #191C1F fill with 20px border radius and 16px internal padding. The conversion calculator card uses this treatment, stacking currency rows with flag icons, currency codes, and amounts. On light backgrounds, cards use subtle off-white fills with 16px radius and similar padding.

## Responsive behavior

The system appears optimized for desktop presentation in the supplied material. For implementation, the following adaptations are recommended: reduce hero display sizes to 48px on tablet and 32px on mobile while maintaining the tight letter-spacing; stack the two-column hero layout to single column with the calculator card moving below the text block; convert the footer multi-column grid to a two-column layout on tablet and single column on mobile with accordion behavior for column groups; maintain pill button shapes at all sizes with adjusted padding of 8px by 16px on mobile; ensure the header navigation collapses to a hamburger menu on narrow viewports, preserving the Sign up button as a persistent action.

## Practical implementation guidance

### Preserve
- The extreme contrast between near-black backgrounds and crisp white typography
- Tight negative letter-spacing on all Aeonik Pro display sizes
- Pill-shaped buttons with 9999px border radius as the exclusive button treatment
- The two-tier typographic hierarchy: Aeonik Pro for display and UI, Inter for body
- Generous section padding (64px to 88px) to create breathing room around content
- Subdued color progression on dark backgrounds: #F4F4F4 → #A1A1A3 → #717173

### Avoid
- Introducing additional accent colors beyond the single purple (#7F84F6)
- Using rounded corners other than the established pill, 20px, 16px, and 12px values
- Breaking the geometric sans-serif pairing with decorative or serif typefaces
- Reducing contrast below WCAG AA standards for financial readability
- Adding background patterns or textures that compete with product photography

### Recommended build order
1. Establish the dark canvas background and white text base
2. Implement the Aeonik Pro display scale with tight letter-spacing
3. Build the pill button system with primary and secondary variants
4. Create the header navigation with contained margins and floating appearance
5. Develop the hero section with asymmetric two-column layout
6. Add the FAQ accordion with plus-minus toggle behavior
7. Construct the footer with multi-column grid and legal text hierarchy

### Accessibility
- Ensure all text on dark backgrounds meets WCAG AAA contrast ratios; the #F4F4F4 on #000000 pairing exceeds this threshold
- Provide visible focus states for pill buttons, using the accent purple or white outline
- Maintain touch targets of at least 44px for mobile navigation and buttons
- Use semantic heading hierarchy with h1 for hero headlines and h2 for section headers
- Ensure FAQ accordion toggles are keyboard accessible with aria-expanded states
- Provide reduced motion alternatives for any 3D render animations

## Scope note

This guide covers the marketing and product page surfaces visible in the supplied images, including the crypto conversion experience, corporate cards landing page, and homepage hero system. Mobile breakpoints, interactive states beyond the visible static view, form validation, loading skeletons, and account dashboard interfaces are not represented. The 3D product renders and cryptocurrency coin illustrations are photographic assets rather than UI components. Measurements are exact values from the retained interface records.
