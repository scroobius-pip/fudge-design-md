# How bunny.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bunny.net-design)

Last updated: 2026-08-10

## Captured pages

[![Footer navigation with multi-column product links, orange Contact Sales button, and illustrated bunny mascot on light blue background](https://pin.fontofweb.com/4569?format=jpg)](https://design.withfudge.com/share/pin-4569)

[Footer navigation with multi-column product links, orange Contact Sales button, and illustrated bunny mascot on light blue background](https://design.withfudge.com/share/pin-4569)

[![Cookie consent banner with dark navy bar, orange bunny character illustration, and white dismissible notice strip](https://pin.fontofweb.com/4568?format=jpg)](https://design.withfudge.com/share/pin-4568)

[Cookie consent banner with dark navy bar, orange bunny character illustration, and white dismissible notice strip](https://design.withfudge.com/share/pin-4568)

[![Hero call-to-action panel with dark navy rounded rectangle, orange primary button, outlined secondary button, and astronaut bunny illustration](https://pin.fontofweb.com/4567?format=jpg)](https://design.withfudge.com/share/pin-4567)

[Hero call-to-action panel with dark navy rounded rectangle, orange primary button, outlined secondary button, and astronaut bunny illustration](https://design.withfudge.com/share/pin-4567)

[![Social proof section with customer testimonial card, dark navy case study badge, G2 and Trustpilot ratings, and four-column benefit metrics](https://pin.fontofweb.com/4566?format=jpg)](https://design.withfudge.com/share/pin-4566)

[Social proof section with customer testimonial card, dark navy case study badge, G2 and Trustpilot ratings, and four-column benefit metrics](https://design.withfudge.com/share/pin-4566)

## Overview

bunny.net presents itself as a global edge platform with a visual identity that balances technical credibility and approachable warmth. The design system centers on a deep navy foundation that conveys infrastructure reliability, punctuated by energetic orange accents that signal action and momentum. Playful illustrated bunny mascots in various heroic poses—astronaut, superhero, casual ambassador—appear throughout the interface, softening the technical subject matter and creating memorable brand moments. The overall composition favors generous whitespace on light blue backgrounds, with content organized into rounded panels and cards that float above the canvas. Typography is clean and geometric, using a single sans-serif family across all hierarchies with weight and size as the primary differentiators. The result is a marketing site that feels simultaneously enterprise-capable and human-friendly, targeting developers and business decision-makers who value both performance metrics and brand personality.

## Colors

The color system operates on a clear functional hierarchy: deep navy establishes trust and technical authority, warm orange drives action and draws attention, and a pale blue canvas provides breathing room that prevents visual fatigue.

| token | value | use |
|---|---|---|
| action | #F97316 | Primary buttons, key highlights, mascot accent details, CTA emphasis |
| action-hover | #EA580C | Hover state for primary interactive elements |
| ink | #0F172A | Primary text, dark backgrounds, footer bars, maximum contrast moments |
| ink-secondary | #1E3A5F | Panel backgrounds, secondary dark surfaces, case study badges |
| canvas | #E0F2FE | Page background, section fills, lightest atmospheric layer |
| surface | #FFFFFF | Cards, testimonial backgrounds, button text on dark, cookie banner |
| surface-elevated | #F8FAFC | Subtle elevation for nested containers, hover backgrounds |
| border | #CBD5E1 | Dividers, structural separators between metric columns |
| border-subtle | #E2E8F0 | Hairline rules, inactive states, very light boundaries |

The dark navy panels create high-impact moments for calls-to-action, where white text and orange buttons achieve maximum readability and conversion focus. The light blue canvas dominates the marketing page experience, allowing the illustrated mascots with their orange ears and warm gradients to pop without competing for attention. Photography and illustration use their own palettes—teals, warm oranges, soft grays—that harmonize with the UI colors without being directly sampled from them. The system maintains accessibility through strong contrast pairings: white text on ink-secondary panels, dark ink on canvas backgrounds, and always light text on the action orange.

## Typography

The typographic system relies entirely on Rubik, a geometric sans-serif with rounded terminals that complement the friendly brand character. Weight variations create hierarchy rather than introducing additional families.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Rubik | 3rem | 700 | 1.1 | -0.02em | Major page headlines, hero statements |
| section-display | Rubik | 2.25rem | 600 | 1.2 | -0.01em | Section headers, customer count callouts |
| body-large | Rubik | 1.25rem | 400 | 1.5 | 0 | Hero descriptions, introductory paragraphs |
| body | Rubik | 1rem | 400 | 1.6 | 0 | General content, testimonials, explanations |
| label | Rubik | 0.875rem | 500 | 1.4 | 0.01em | Buttons, navigation links, category headers |
| navigation | Rubik | 0.875rem | 500 | 1.4 | 0 | Footer column headers, menu items |
| legal-copy | Rubik | 0.75rem | 400 | 1.5 | 0 | Copyright, terms links, fine print |

The bold weight for hero display creates confident impact without feeling aggressive, while the medium weight for labels and navigation maintains scannability at smaller sizes. Negative letter spacing on display sizes tightens the geometric forms for a more polished, contemporary feel. Body text uses generous line height for comfortable reading of technical descriptions. Verify licensing for these families before production use. Rubik is designed by Hubert And Fischer.

## Layout

The page structure follows a centered, contained model with generous vertical rhythm. Sections stack with substantial breathing room between them, typically six rem units of separation, allowing each content block to register as a distinct moment. The horizontal system appears to use a maximum content width that centers on larger viewports, with internal grids adapting to content type.

The hero call-to-action panel demonstrates the core layout pattern: a rounded rectangular container with internal padding, left-aligned text and buttons, and an illustrated character breaking the right edge to create dynamic asymmetry. This panel-with-bleed-illustration pattern repeats across sections, maintaining visual interest while preserving readable text areas.

Footer navigation organizes into a multi-column grid with clear category headers, creating efficient scanning for the extensive product catalog. The layout balances density with clarity—many links are available but grouped logically under Products, Developers, Support, and Company headings.

Social proof sections use a two-tier composition: headline and ratings centered above, with a testimonial card and case study badge arranged in an offset pairing below. Four-column metric grids sit beneath, separated by vertical hairline borders that create structure without heaviness.

Spacing follows a modular approach based on quarter-rem increments. Component internal padding typically runs at 1.5 to 2 rem, while gap spacing between related elements stays tight at 0.5 rem. Section breaks use the full 6 rem to reset visual attention between major content types.

## Visual language

The brand's visual language is defined by the interplay of technical precision and playful personality. Illustrated bunny mascots serve as the primary distinctive element—anthropomorphic characters in heroic costumes that reference speed, space exploration, and superhuman capability. These illustrations use smooth gradients, clean vector shapes, and a limited palette of navy, orange, teal, and warm neutrals that integrate seamlessly with the UI system.

Rounded corners appear universally on interactive elements and containers, reinforcing the friendly, approachable tone. Buttons use moderate rounding that feels contemporary without appearing childish. Cards and panels use slightly more pronounced rounding that creates soft containment for content.

The icon system relies on Font Awesome for functional symbols—social media logos, contact method indicators, navigation affordances. These appear in solid weights for maximum clarity at small sizes, rendered in the current text color to maintain consistency.

Shadows are minimal or absent in the visible interface, with depth created instead through color contrast and strategic layering of the canvas, surface, and elevated surface tones. The cookie consent banner demonstrates this flat approach: a solid dark bar with no shadow, relying on color blocking to separate it from content.

Visual hierarchy is established through size contrast, weight variation, and color temperature rather than decorative elements. The warm orange action color appears sparingly, reserved for the most important interactive moments, which makes it highly effective at guiding attention.

## Components

### Primary action button

- **Anatomy**: Text label with right-pointing chevron icon pair
- **Surface**: Solid action orange background with white text
- **Typography**: Label token, medium weight, slightly increased size for prominence
- **Shape**: Rounded rectangle with moderate corner radius
- **Spacing**: Generous horizontal padding creating substantial click target, comfortable vertical padding
- **Composition**: Icon sits at right edge with consistent gap from text
- **Variants**: Appears in hero contexts at larger scale; footer context uses same styling at standard size

### Secondary action button

- **Anatomy**: Text label with right-pointing chevron icon pair
- **Surface**: Transparent background with white text and white border
- **Typography**: Label token, medium weight
- **Shape**: Rounded rectangle matching primary button proportions
- **Spacing**: Identical padding to primary for visual pairing
- **Composition**: Positioned adjacent to primary button with consistent gap
- **States**: Visible on dark navy panels where border provides definition against background

### Hero CTA panel

- **Anatomy**: Rounded rectangular container with headline, description, dual buttons, and illustration
- **Surface**: Ink-secondary dark navy fill
- **Typography**: Hero-display white headline, body-large white description, label buttons
- **Shape**: Large rounded corners creating card-like container
- **Spacing**: Substantial internal padding, comfortable text-to-button spacing
- **Composition**: Left-aligned text stack with right-side illustration breaking container bounds; illustration overlaps right edge creating dynamic tension
- **Variants**: Single-button and dual-button configurations visible

### Testimonial card

- **Anatomy**: Quote text, attribution with avatar image, name, and role
- **Surface**: White surface background with subtle elevation
- **Typography**: Body text for quote, label weight for name, legal-copy styling for role
- **Shape**: Rounded corners matching card token
- **Spacing**: Comfortable padding creating breathable quote presentation
- **Composition**: Avatar positioned left of attribution block, creating horizontal author unit

### Case study badge

- **Anatomy**: Company label, headline, and arrow-linked call-to-action
- **Surface**: Ink-secondary dark navy with white and orange text
- **Typography**: Label for company, section-display weight for headline in orange, label for link
- **Shape**: Rounded rectangle with pronounced corners, slightly more compact than hero panel
- **Spacing**: Tight internal padding appropriate for promotional unit
- **Composition**: Stacked text with bottom-aligned link, positioned to overlap or sit adjacent to testimonial card

### Footer navigation

- **Anatomy**: Logo mark, multi-column link groups with category headers, contact section, social icons, legal bar
- **Surface**: Canvas background with ink dark bar at very bottom
- **Typography**: Navigation weight for headers and links, body for contact details, legal-copy for copyright
- **Shape**: Full-width with contained content area
- **Spacing**: Generous vertical padding, consistent column gaps
- **Composition**: Four-column grid for links, two-column split for contact and social, full-width legal strip

### Cookie consent banner

- **Anatomy**: Illustrated character, notice text with inline link, dismiss button
- **Surface**: Ink dark bar with white surface strip for notice
- **Typography**: Body text for notice, label weight for link, icon for dismiss
- **Shape**: Full-width horizontal bar
- **Spacing**: Compact vertical padding appropriate for persistent notice
- **Composition**: Character left, text center, dismiss right; stacked on smaller widths

## Responsive behavior

The design appears optimized for desktop presentation based on visible layouts, with several patterns suggesting responsive considerations. The multi-column footer navigation would naturally stack to single-column on narrow viewports, with category headers becoming collapsible sections or maintaining vertical flow. The hero panel's side-by-side text-and-illustration composition would likely transition to stacked vertical arrangement, with the illustration moving above or below the text block and scaling proportionally.

The four-column metrics grid with vertical dividers would require horizontal scrolling or stacking to two-by-two or single-column layouts at narrow widths. The testimonial and case study pairing would similarly stack vertically, with the offset positioning collapsing to centered sequential blocks.

Button groups in the hero should maintain side-by-side arrangement where space permits, stacking to full-width on very narrow screens with the primary action remaining first in source order. Text sizes would likely scale down modestly, with the hero display reducing by approximately twenty-five percent to maintain fit without excessive line breaks.

The cookie banner's horizontal arrangement with character, text, and dismiss control would compress to a vertical stack on mobile, with the character potentially hidden to prioritize the notice content and action.

## Practical implementation guidance

### Preserve
- The warm orange against deep navy pairing for primary actions; this contrast defines the brand's energetic personality
- Illustrated mascot characters breaking container bounds; this creates memorable visual moments and distinguishes from generic SaaS aesthetics
- Generous rounded corners on all containers and interactive elements; the softness is integral to the friendly tone
- Single-family typography with weight-based hierarchy; the geometric consistency reinforces technical credibility
- Light blue canvas as the dominant background; it prevents the navy-and-orange combination from becoming visually exhausting

### Avoid
- Introducing additional font families; the Rubik-only approach is a deliberate restraint that works
- Heavy drop shadows or dimensional effects; the flat color-blocking approach is cleaner and more contemporary
- Saturated orange for large text areas or backgrounds; reserve it for accents and actions to maintain impact
- Sharp corners on interactive elements; they would conflict with the rounded, approachable character
- Dark text on the orange action color; white text maintains necessary contrast

### Recommended build order
1. Establish the color tokens and canvas background
2. Implement Rubik at all weights with the typographic scale
3. Build the hero CTA panel as the primary composition template
4. Create button components with primary and secondary variants
5. Develop card and badge surfaces with consistent rounding
6. Add illustrated mascot assets with bleed positioning
7. Construct footer navigation with multi-column grid
8. Implement social proof section with testimonial and case study pairing

### Accessibility
- Ensure white text on orange action buttons meets minimum contrast ratios; the warm orange may need darkening for smaller text
- Provide visible focus indicators that maintain the rounded aesthetic, such as offset rings or inner borders
- Preserve keyboard navigation order in the hero panel, with primary action preceding secondary
- Add descriptive alt text for mascot illustrations that conveys their decorative purpose without redundant content
- Consider reduced-motion preferences for any scroll-triggered animations of the illustrated characters

## Scope note

This guide covers the bunny.net marketing homepage visible in the supplied images, including hero sections, social proof, and footer navigation. Interior product pages, dashboard interfaces, pricing tables, and mobile-specific layouts are not represented. Measurements are practical adaptation targets derived from visual inspection.
