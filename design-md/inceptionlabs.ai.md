# How inceptionlabs.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/inceptionlabs.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed Overview section with three feature cards showing speed metrics, quality checkmarks, and integration icons on near-black background with cyan accents](https://pin.fontofweb.com/8042?format=jpg)](https://design.withfudge.com/share/pin-8042)

[Dark-themed Overview section with three feature cards showing speed metrics, quality checkmarks, and integration icons on near-black background with cyan accents](https://design.withfudge.com/share/pin-8042)

[![Light-themed About page with ASCII art rocket illustration and editorial typography explaining diffusion-based language models on warm off-white background](https://pin.fontofweb.com/7215?format=jpg)](https://design.withfudge.com/share/pin-7215)

[Light-themed About page with ASCII art rocket illustration and editorial typography explaining diffusion-based language models on warm off-white background](https://design.withfudge.com/share/pin-7215)

[![Dark-themed model comparison grid for Mercury 2 and Mercury Edit with pricing tables, feature lists, and pill-shaped action buttons on near-black background](https://pin.fontofweb.com/7214?format=jpg)](https://design.withfudge.com/share/pin-7214)

[Dark-themed model comparison grid for Mercury 2 and Mercury Edit with pricing tables, feature lists, and pill-shaped action buttons on near-black background](https://design.withfudge.com/share/pin-7214)

[![Light-themed Enterprise page hero with navigation bar and colorful particle cloud illustration on warm off-white background](https://pin.fontofweb.com/7213?format=jpg)](https://design.withfudge.com/share/pin-7213)

[Light-themed Enterprise page hero with navigation bar and colorful particle cloud illustration on warm off-white background](https://design.withfudge.com/share/pin-7213)

## Overview

Inception Labs presents a distinctive dual-mode visual system that serves both editorial storytelling and technical product surfaces. The brand operates across two primary environments: a warm, paper-like light mode for narrative and company pages, and an immersive near-black dark mode for product interfaces, model specifications, and technical documentation. This bifurcation creates clear semantic separation between "why we exist" and "what we build."

The light mode establishes an editorial, research-forward personality through generous whitespace, warm off-white backgrounds, and expressive display typography set in Kmr Apparat. ASCII art illustrations and particle visualizations provide a human, craft-oriented counterpoint to the technical subject matter. The dark mode shifts to a precision instrument aesthetic: high-contrast cyan and white text on deep black, monospace data readouts, and grid-based information architecture that emphasizes speed metrics and comparative specifications.

Typography drives the system's personality. Kmr Apparat's distinctive geometric-humanist forms anchor headlines with a weight of 375 that feels deliberate rather than heavy. Inter handles body text with clarity at small sizes, while Geist Mono appears exclusively for data visualization and technical metrics. The system maintains tight leading on display type (1.0 to 1.2) while allowing breathing room in body copy (1.7 to 1.93).

## Colors

The color system is built around two complete palettes that never mix within a single view. Each mode carries full semantic coverage for surfaces, text, and accents.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text on light backgrounds; dark mode surface base |
| ink-soft | #041414 | Elevated dark surfaces; card backgrounds in dark mode |
| canvas | #FAF8F0 | Primary light mode background; warm paper tone |
| surface | #F5F3EB | Secondary light surfaces; navigation pills |
| surface-warm | #EFF9F9 | Tertiary light accents; subtle highlight regions |
| accent-cyan | #18C4C3 | Primary action color; links; feature highlights in dark mode |
| accent-cyan-muted | #159999 | Secondary cyan; hover states; de-emphasized accents |
| accent-teal | #17C4C4 | Tertiary cyan variant; gradient endpoints |
| accent-indigo | #7674FF | Secondary accent; code-focused highlights; Mercury Edit branding |
| accent-orange | #F0783D | Tertiary accent; warm highlights; particle visualization tones |
| text-primary | #000000 | Body text on light backgrounds |
| text-inverse | #FFFFFF | Primary text on dark backgrounds |
| text-muted | #2B2A29 | Secondary text; captions; metadata |
| text-cyan | #18C4C3 | Inline links; emphasized terms in dark mode |
| text-indigo | #7674FF | Inline links; emphasized terms in light mode |
| text-orange | #F0783D | Highlighted terms; warm emphasis |
| background-dark | #000000 | Primary dark mode background |
| background-dark-elevated | #041414 | Card surfaces; elevated panels in dark mode |
| background-light | #FAF8F0 | Primary light mode background |
| background-light-warm | #F5F3EB | Secondary light surfaces |

The light mode palette draws from warm paper and ink metaphors: canvas and surface tones create subtle depth without departing from a cohesive off-white field. The dark mode inverts this logic completely, using pure black as the ground with near-black (#041414) for elevation. Accent colors function as signal: cyan dominates the dark mode for its association with speed and technology, while indigo and orange appear as secondary accents for specific product lines or emphasis. Text colors are strictly polarized: white on dark, black on light, with muted gray for secondary information.

## Typography

The system employs four material type families with distinct roles. Kmr Apparat, designed by Michael Clasen and Marcel Saidov and published by Kimera, serves as the display face. Inter handles all body text and UI labels. Geist Mono, designed by Basement Studio and published through Vercel, appears exclusively for technical data and metrics. System and System-Sansserif provide fallback rendering for navigation links and small UI text where a neutral sans-serif is appropriate. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kmr Apparat | 4rem | 375 | 1.0 | 0em | Page titles; hero statements |
| section-display | Kmr Apparat | 3.5rem | 375 | 1.2 | 0em | Section headers; model names |
| headline | Kmr Apparat | 3rem | 375 | 1.1 | 0em | Subsection titles; feature headers |
| subheadline | Kmr Apparat | 1.75rem | 375 | 1.5 | 0em | Card titles; metric labels |
| body-large | Inter | 1.0625rem | 400 | 1.7 | 0em | Editorial paragraphs; about copy |
| body | Inter | 0.9375rem | 400 | 1.93 | 0em | Standard paragraphs; descriptions |
| body-medium | Inter | 0.9375rem | 500 | 1.2 | 0em | Pricing values; feature names |
| label | Inter | 0.8125rem | 500 | 1.1 | 0em | Small labels; metadata |
| data-mono | Geist Mono | 1.75rem | 400 | 1.0 | 0em | Speed metrics; technical values |
| navigation | System | 0.75rem | 400 | 1.2 | 0em | Nav links; button text |
| legal | Inter | 0.8125rem | 400 | 1.7 | 0em | Footnotes; copyright |

Kmr Apparat's 375 weight is a deliberate choice that sits between regular and medium, giving headlines presence without heaviness. The tight leading on display sizes (1.0 to 1.2) creates compact, impactful statements, while body copy receives generous leading (1.7 to 1.93) for extended reading. Geist Mono appears at 1.75rem for data highlights like "1000 tokens/s" metrics, maintaining the same tight leading as display type to keep numerical readouts visually anchored. System and System-Sansserif appear at 0.75rem for navigation elements, rendered with a line height of 1.2 to maintain legibility at small sizes.

## Layout

The layout system is built on a 2px relative unit (0.125rem), enabling fine-grained control while maintaining whole-number relationships. Section spacing is generous, with primary sections receiving 10rem of vertical padding and content blocks separated by 2.5rem. Horizontal padding follows a consistent 3.5rem (56px) rhythm for main content areas, with navigation and compact elements using 1.25rem (20px) gutters.

The grid philosophy shifts between modes. Light mode pages employ a single-column editorial flow with centered content max-widths, allowing ASCII art and particle illustrations to breathe. Dark mode product pages use strict two-column grids for model comparison, with equal-width columns separated by hairline borders. Feature cards in the Overview section distribute across three columns with internal vertical rhythm: illustration area, metric or icon zone, and text block.

Navigation sits as a floating pill bar in light mode, with individual links receiving 1rem horizontal padding and the container using 0.625rem internal padding. In dark mode, navigation flattens into the surface with minimal separation. Buttons maintain consistent 0.75rem vertical and 1.25rem horizontal padding across both modes, with pill-shaped radii of 3.75rem creating a distinctive elongated capsule form.

Content hierarchy is established through size contrast rather than weight variation. The jump from Kmr Apparat display to Inter body is approximately 4:1 in size, creating clear typographic layers without relying on bold weights. Spacing reinforces this: 1.25rem between text elements within a block, 2.5rem between distinct content blocks, and 10rem between major sections.

## Visual language

The visual language balances technical precision with human craft. ASCII art illustrations—composed of colored characters forming rockets, clouds, and abstract forms—serve as the brand's signature imagery. These illustrations use the full accent palette: cyan, indigo, orange, and warm tones blend within the character matrices, creating depth through color density rather than shading. The effect suggests computational creativity: machines generating art through text, which aligns with the company's diffusion-based language model narrative.

Particle and line-based abstractions appear in feature cards, using subtle motion-implied graphics: vertical line patterns suggesting throughput, checkmark sequences indicating quality validation, and icon grids representing integration breadth. These elements remain monochromatic or near-monochromatic within their cards, letting the ASCII illustrations carry color expression.

The dark mode aesthetic draws from terminal interfaces and data dashboards. Near-black backgrounds with subtle elevation through #041414 create depth without departing from the darkness. Cyan accents function as the primary interactive signal, appearing in links, highlighted terms, and metric callouts. The overall effect is immersive: the interface recedes, content advances.

The light mode inverts this relationship. Warm off-white backgrounds feel like quality paper stock. Black text has the authority of ink. The ASCII illustrations become the color focal point, their multicharacter gradients providing the visual interest that dark mode achieves through contrast alone. This creates a reading experience closer to editorial design than software interface.

## Components

### Navigation Bar

Anatomy: Horizontal row of text links with optional pill-shaped primary action.

Surface and text color: In light mode, transparent background with black text links and a warm surface pill for the primary action. In dark mode, transparent or near-black background with white text and cyan-accented links.

Typography: Navigation token at 0.75rem, System font family.

Shape: No border radius on the bar itself. Primary action pill uses 1.625rem radius (26px). Individual nav links have no visible container.

Spacing: Bar padding of 0.625rem top and bottom, 0.625rem left. Link padding of 1rem horizontal. Action pill padding of 0.75rem vertical, 1.25rem horizontal.

Composition: Links left-aligned, primary action right-aligned or inline at far right.

### Primary Button

Anatomy: Text label within a filled pill container.

Surface and text color: White background with black text in dark mode; black background with white text in light mode.

Typography: Navigation token, System font family.

Shape: Full pill at 3.75rem radius (60px).

Spacing: 0.75rem vertical, 1.25rem horizontal padding.

Variants: Secondary variant uses near-black (#041414) background with white text in dark mode.

### Feature Card

Anatomy: Vertical stack containing illustration area, optional metric display, title, and description.

Surface and text color: Near-black (#041414) background with white text. Cyan accent for titles.

Typography: Title uses subheadline token (Kmr Apparat, 1.75rem). Description uses body token (Inter, 0.9375rem). Metrics use data-mono token (Geist Mono, 1.75rem).

Shape: No border radius. Sharp corners maintain technical precision.

Spacing: 2.5rem internal padding. Illustration area occupies upper portion with generous bottom margin before text.

Composition: Three cards in horizontal row on desktop, equal width, separated by component gaps.

### Model Comparison Card

Anatomy: Vertical stack with model name, description, dual action buttons, pricing table, features list, and use cases list.

Surface and text color: Black background with white text. Inline accent colors for emphasized terms (cyan for "reasoning LLM," indigo for "coding-focused dLLM").

Typography: Model name uses section-display token. Description uses body token. Pricing uses body-medium token. Feature and use case labels use body token.

Shape: No border radius. Full-bleed within grid cell. Hairline horizontal borders separate sections.

Spacing: 2.5rem internal padding. Button pair with 1.5rem gap. Section spacing of 2.5rem between description, buttons, pricing, features, and use cases.

Composition: Two-column grid on desktop, equal width. Each column is self-contained.

### Pricing Row

Anatomy: Horizontal pair of label and value.

Surface and text color: Transparent background. White text. No visible row container.

Typography: Label uses body token. Value uses body-medium token, right-aligned.

Shape: No border radius. Hairline bottom border in subtle white (1px solid rgba(255,255,255,0.1)).

Spacing: 0.75rem vertical padding. Full width within parent card.

### ASCII Illustration

Anatomy: Preformatted text block composed of colored characters forming representational imagery.

Surface and text color: Transparent or matching background. Characters use full accent palette: cyan, indigo, orange, warm tones.

Typography: System monospace rendering at variable sizes depending on illustration density.

Shape: No border. Natural bounding box from character grid.

Composition: Centered or left-aligned within content area. Scale varies with viewport but maintains character proportions.

## Responsive behavior

The system maintains its dual-mode character across viewport sizes, with structural adaptations for narrower screens. The three-column feature card grid should stack to single column on mobile, preserving internal card spacing but allowing full-width cards. The two-column model comparison grid should similarly collapse to single column, with each model card becoming a full-width section.

Navigation should collapse to a compact menu or hamburger pattern on mobile, preserving the pill-shaped primary action as a persistent element where possible. ASCII illustrations should scale down proportionally, maintaining character legibility without reflowing text around them.

Typography scales down modestly: hero-display may reduce to 3rem on tablet and 2.5rem on mobile. Body text maintains its size for readability, with line height increasing slightly on very small screens. Section padding reduces from 10rem to 6rem on tablet and 4rem on mobile, while horizontal padding tightens from 3.5rem to 1.25rem.

Button padding remains consistent across breakpoints, but button groups may stack vertically on narrow screens. The pill shape is preserved at all sizes as a brand signature.

## Practical implementation guidance

### Preserve
- The strict separation of light and dark modes; never mix canvas backgrounds with dark surfaces in the same view
- Kmr Apparat's 375 weight for all display type; do not substitute heavier weights
- The 2px base unit for all spacing and sizing decisions
- Full pill shapes (60px radius) for primary actions; this is a distinctive brand element
- ASCII art illustrations as the primary visual content type; do not replace with conventional photography
- Cyan as the dominant accent in dark mode, with indigo and orange as secondary accents
- The warm paper tone (#FAF8F0) as the light mode ground; do not shift to pure white

### Avoid
- Introducing additional font weights beyond those specified; the system's restraint is intentional
- Using Geist Mono for non-data content; its role is strictly technical metrics
- Adding border radius to cards or panels in dark mode; sharp corners are part of the technical aesthetic
- Mixing light and dark elements within components; maintain mode purity per page
- Using the accent orange as a primary action color; it serves emphasis and illustration only
- Exceeding 1.2 line height on display type; tight leading is essential to the compact headline style

### Recommended Build Order
1. Establish the dual-mode color system with CSS custom properties or theme tokens
2. Implement Kmr Apparat at 375 weight with the display type scale
3. Build the navigation component in both light and dark variants
4. Create the pill button system with consistent padding and radius
5. Implement the feature card grid with three-column desktop layout
6. Build the model comparison card with internal section hierarchy
7. Add ASCII illustration containers with proportional scaling
8. Refine responsive behavior for card grids and navigation

### Accessibility
- Maintain a minimum contrast ratio of 4.5:1 for all body text; the white-on-black and black-on-canvas pairings exceed this
- The cyan accent (#18C4C3) on black should be verified for large text compliance; it may need adjustment for small sizes
- Ensure ASCII illustrations have appropriate alt text describing the represented imagery
- Preserve focus indicators on pill buttons; the high-contrast mode inversions should provide visible focus rings
- Consider a reduced-motion preference for any particle or ASCII animations
- Navigation links should have clear hover states beyond color change; underline or background shift

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: homepage, model pages, about page, and enterprise page. It does not include documentation interfaces, console or dashboard designs, mobile applications, or email templates. Motion behavior, loading states, and form validation patterns are not documented. System-Sansserif is named as a material family in the type system. Measurements reflect the extracted interface values and should be verified against live implementation before production use.
