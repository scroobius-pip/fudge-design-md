# How heyquin.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/heyquin.io-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ accordion list with light gray question pills on warm off-white background, showing twelve expandable items with small square icons.](https://pin.fontofweb.com/4928?format=jpg)](https://design.withfudge.com/share/pin-4928)

[FAQ accordion list with light gray question pills on warm off-white background, showing twelve expandable items with small square icons.](https://design.withfudge.com/share/pin-4928)

[![Three-column pricing table with Lite, Standard, Ultimate tiers and a full-width Enterprise row, featuring yellow and blue CTA buttons and black pricing numerals.](https://pin.fontofweb.com/4927?format=jpg)](https://design.withfudge.com/share/pin-4927)

[Three-column pricing table with Lite, Standard, Ultimate tiers and a full-width Enterprise row, featuring yellow and blue CTA buttons and black pricing numerals.](https://design.withfudge.com/share/pin-4927)

[![Hero section with large serif headline 'Meet your dream assistant', yellow announcement banner, navigation bar, and tabbed feature showcase with phone mockup on wood surface.](https://pin.fontofweb.com/3849?format=jpg)](https://design.withfudge.com/share/pin-3849)

[Hero section with large serif headline 'Meet your dream assistant', yellow announcement banner, navigation bar, and tabbed feature showcase with phone mockup on wood surface.](https://design.withfudge.com/share/pin-3849)

[![Split-screen signup page with white form on left and blue gradient product illustration on right, showing CRM sync card with contact profile and activity feed.](https://pin.fontofweb.com/3848?format=jpg)](https://design.withfudge.com/share/pin-3848)

[Split-screen signup page with white form on left and blue gradient product illustration on right, showing CRM sync card with contact profile and activity feed.](https://design.withfudge.com/share/pin-3848)

## Overview

Quin presents itself as an AI assistant for business workflows, and its visual system communicates that proposition through a carefully balanced tension between editorial warmth and software precision. The brand avoids the cold, clinical aesthetic common to productivity tools by employing a warm off-white canvas, elegant serif display typography, and selective use of saturated accent colors. At the same time, the interface maintains the clarity and structure users expect from professional SaaS products through disciplined spacing, consistent component shapes, and a clear typographic hierarchy.

The design operates across three distinct surface modes: the warm editorial canvas of the marketing pages, the clean white of transactional interfaces like signup forms, and the atmospheric blue gradients used for product storytelling illustrations. This multi-modal approach allows the brand to shift tone without breaking visual coherence—each mode shares the same underlying type system, spacing logic, and component vocabulary. The result is a system that feels both sophisticated and approachable, capable of supporting high-conversion landing pages as well as longer-form product education and pricing comparison.

## Colors

The palette is intentionally restrained, relying on a warm neutral foundation with two functional accents and one atmospheric gradient family. Black serves as the primary ink rather than a pure neutral, giving text a softer, more premium presence against the warm canvas.

| token | value | use |
|---|---|---|
| canvas | `#FDFCF7` | Primary page background; warm off-white with subtle yellow undertone |
| surface | `#FFFFFF` | Cards, input fields, elevated panels on colored or textured backgrounds |
| surface-warm | `#F5F3EE` | FAQ items, secondary panels, subtle grouping backgrounds |
| ink | `#141414` | Primary text, headings, pricing numerals, logo |
| ink-secondary | `#6B6B6B` | Body text, descriptions, placeholder text, muted labels |
| action-primary | `#F5C842` | Primary CTAs, announcement banners, active tab indicators, highlighted pricing tier |
| action-secondary | `#8ECAE6` | Secondary CTAs, alternative trial buttons, cool accent moments |
| action-inverse | `#1A1A1A` | Dark buttons, high-contrast moments on light backgrounds |
| border-subtle | `#E8E6E1` | Input borders, card dividers, hairline separators |
| link | `#4A90D9` | Inline text links, terms and conditions, login redirects |

The warm canvas distinguishes Quin from competitors who default to pure white or cool gray backgrounds. The yellow accent carries energy and optimism appropriate for an assistant product, while the blue accent provides cooler, more technical moments—particularly in product illustrations and secondary actions. The system does not currently show a dark mode; all interfaces assume light surfaces with dark text.

## Typography

Quin employs a three-family typographic system that separates display, interface, and monospace roles. Instrument Serif provides editorial personality for headlines, while Inter handles all interface text with its extensive weight range. Geist Mono appears selectively for technical or data-dense contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 4.5rem | 400 | 1.05 | -0.02em | Homepage hero headlines, major page titles |
| section-display | Instrument Serif | 3rem | 400 | 1.1 | -0.01em | Section headings, pricing tier names |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, hero descriptions |
| body | Inter | 1rem | 400 | 1.5 | 0 | General paragraphs, FAQ content, form labels |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, captions, metadata |
| label | Inter | 0.75rem | 500 | 1.2 | 0.08em | Buttons, navigation, uppercase labels |
| navigation | Inter | 0.875rem | 500 | 1 | 0.02em | Header nav items, dropdown triggers |
| mono | Geist Mono | 0.875rem | 400 | 1.4 | 0 | Code, data values, technical annotations |

Instrument Serif appears only in Regular weight; the design achieves emphasis through size and pairing with Inter rather than weight variation within the serif. Inter uses Regular (400), Medium (500), and Semibold (600) as visible in the interface—Medium for navigation and labels, Regular for body text. The uppercase label style with positive tracking is a distinctive brand element that appears on all primary buttons and category tags.

Verify licensing for these families before production use. Instrument Serif and Instrument Sans are designed by Rodrigo Fuenzalida for Frag Type. Inter and Inter Tight are designed by Rasmus Andersson. Geist Mono is designed by Basement Studio with Vercel.

## Layout

The layout system favors generous whitespace and centered content with a clear maximum width. Marketing pages use a single-column centered flow for hero content, transitioning to multi-column grids for feature showcases and pricing. The underlying grid appears to be based on a 4px relative unit, with major spacing decisions landing on multiples that create rhythmic vertical pacing.

Page sections are separated by substantial vertical space—approximately 6rem between major content blocks—allowing each section to breathe and maintaining the editorial quality established by the typography. Content containers appear to max out around 1200px, with consistent horizontal padding that prevents text from touching viewport edges on smaller desktop widths.

The pricing page demonstrates a three-column equal-width grid for tier comparison, with the Enterprise tier breaking to a full-width row below. This asymmetric conclusion to the pricing table creates visual hierarchy without abandoning the grid's underlying logic. The signup page uses a dramatic split-screen composition: a narrow white form panel on the left and an expansive blue gradient illustration on the right, roughly a 40/60 division that prioritizes the product story while keeping the conversion path immediately accessible.

Component spacing follows an 8px base with 16px and 24px as common increments. Buttons, inputs, and cards share consistent internal padding of approximately 12-16px vertical and 16-24px horizontal, creating a family of related rectangular shapes across the interface.

## Visual language

Quin's visual language merges editorial publishing aesthetics with contemporary SaaS patterns. The most distinctive element is the warm off-white canvas that pervades marketing surfaces, creating an immediate sensory difference from the sterile white-gray conventions of most productivity software. This warmth is reinforced by photography choices—natural wood surfaces, soft lighting, and human-centered contexts rather than abstract tech imagery.

The brand mark combines a geometric icon with a wordmark, both in black. The icon appears to be a stylized knot or interlocking shape, suggesting connection and assistance without literal representation. This mark scales from favicon to header navigation without losing clarity.

Accent color usage follows a clear functional grammar: yellow signals action, promotion, and primary conversion paths; blue supports product storytelling and secondary actions. The two accents rarely compete directly—yellow dominates the marketing surface layer while blue recedes into illustrative backgrounds. This discipline prevents the palette from feeling chaotic despite the saturation of both accents.

Shape language is predominantly rectilinear with soft rounding. Buttons use full pill shapes, while cards and panels use moderate corner radius. There are no sharp 90-degree corners on interactive elements, but the rounding stops well short of the bubbly excess common to more playful brands. This middle position reinforces the sophisticated-but-approachable positioning.

Typography creates hierarchy through dramatic scale contrast rather than weight variation. The hero display at 72px against body text at 16px creates nearly 5:1 scale ratio, allowing the serif headlines to dominate without needing bold weight. Subheadings and descriptions sit comfortably in the middle space, creating a clear three-tier reading order.

## Components

### Announcement Bar
A full-width horizontal strip at the page top, using the action-primary yellow background with ink-colored text. Contains a brief message with inline link and a "READ" call-to-action with arrow icon on the right edge. Height is approximately 40px with text vertically centered. Dismiss behavior is not visible in still images.

### Navigation Header
Fixed or sticky header with logo mark and wordmark on the left, horizontal link list center-right, and primary CTA button far right. Background matches canvas color with subtle bottom border. Navigation links use the navigation token in uppercase with medium weight. The "GET STARTED" button uses the ghost-button style with subtle border rather than filled background.

### Hero Section
Centered single-column layout with generous top padding. Contains hero-display headline, body-large description with ink-secondary color, and optional CTA cluster below. The tabbed feature showcase sits below the text block, with horizontal tab buttons and a large product mockup image. Active tab uses action-primary background; inactive tabs use transparent background with ink-secondary text.

### Feature Tabs
Horizontal row of pill-shaped tab buttons with label typography. Active state fills with action-primary yellow; inactive states show only text with optional hover background. Below the tabs, a large image container shows the corresponding feature context—phone mockups on natural surfaces, interface screenshots, or workflow diagrams. Tab content transitions are not visible in still images.

### Pricing Cards
Three equal columns for Lite, Standard, and Ultimate tiers. Each card contains: tier name in section-display, description in body-small with ink-secondary, large price figure in hero-display scale with dollar sign and "PER MONTH" label, feature category header in label style, and checklist items with checkmark icons. CTA buttons sit at card bottom, with Standard tier receiving action-primary fill and others using action-secondary or ghost styles.

### Enterprise Row
Full-width row below the three pricing cards, using surface-warm background. Two-column layout with left text block and right CTA. Contains tier name, description, feature checklist, and a bordered "CONTACT US" button. This row breaks the card rhythm to signal its different purchase motion.

### FAQ Accordion
Vertical stack of pill-shaped items on warm background. Each item shows a small square icon, question text in body token, and implied expand behavior. Items use surface-warm background with full pill rounding, creating a soft, approachable list that avoids the clinical severity of bordered accordion panels.

### Signup Form
Clean white panel with centered content. Social login buttons stack vertically with provider icons and full-width pill shapes. Divider text "or" sits between social and email paths. Form fields use two-column layout for name fields, full-width for email, with floating labels or top-aligned labels in body-small with medium weight. Primary submit button uses action-inverse fill with full width. Legal text and login redirect appear below in body-small with link-colored inline text.

### Product Illustration Panel
Large atmospheric panel used in signup and potentially other conversion contexts. Uses a blue gradient background with subtle grid pattern overlay. Contains floating UI cards showing actual product interfaces—CRM contact profiles, activity feeds, task lists. These cards use real surface white with shadow, creating depth against the gradient. Navigation arrows suggest carousel behavior for multiple product stories.

## Responsive behavior

The design appears optimized for desktop widths, with the split-screen signup and three-column pricing suggesting a minimum comfortable width around 1024px. At narrower viewports, the following adaptations should be considered: the pricing grid should collapse to a single column with cards stacking vertically, preserving the Enterprise row at full width below; the feature tabs may need horizontal scroll or conversion to a dropdown selector; the split-screen signup should stack with the form above and illustration below, or the illustration may be hidden entirely on small screens to prioritize conversion.

The navigation header likely collapses to a hamburger menu on mobile, though this pattern is not visible in the supplied images. Touch targets should maintain minimum 44px height for all interactive elements, with pill buttons expanding comfortably to meet this standard.

## Practical implementation guidance

### Preserve
- The warm off-white canvas color as the default marketing page background; pure white should be reserved for elevated surfaces and transactional contexts only.
- The dramatic scale contrast between Instrument Serif display type and Inter body text; do not reduce hero headline sizes or the editorial character will diminish.
- The uppercase label style with positive letter-spacing for all primary buttons and category tags; this is a distinctive brand rhythm element.
- The selective accent grammar: yellow for primary conversion, blue for product storytelling. Reversing these roles would confuse the visual hierarchy.

### Avoid
- Adding more accent colors beyond yellow and blue; the restraint of the palette is part of the premium positioning.
- Using Instrument Serif for body text or UI labels; the serif is strictly for display sizes and loses readability at smaller scales.
- Creating dark-bordered cards on the warm canvas; the design prefers subtle separation through background color shifts or hairline borders.
- Over-rounding corners beyond the established pill and panel tokens; the current rounding strikes a deliberate balance between friendly and serious.

### Recommended Build Order
1. Establish the color tokens and apply canvas background to all marketing surfaces.
2. Implement the typography system with Instrument Serif loaded for display sizes and Inter for all interface text.
3. Build the navigation header with logo, link list, and ghost CTA button.
4. Create the button component family with pill shapes and consistent label typography.
5. Implement the hero section with centered text block and tabbed feature showcase.
6. Build pricing cards with three-column grid and Enterprise row below.
7. Add FAQ accordion with pill-shaped items on warm background.
8. Implement signup split-screen with form panel and gradient illustration.

### Accessibility
- Ensure all text meets WCAG contrast ratios against its background; the ink on canvas pairing exceeds requirements, but ink-secondary on surface-warm should be verified.
- The yellow action-primary background with ink text should be checked for contrast compliance; if insufficient, consider darkening the yellow or adding a text shadow.
- Product illustration panels with white text on blue gradients must maintain readable contrast across the full gradient range.
- All interactive elements should have visible focus indicators that match the brand's rounded aesthetic.
- Form fields require explicit labels and error states with sufficient color differentiation from default states.

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: homepage hero, pricing page, FAQ section, and signup flow. Product dashboard interfaces, mobile navigation patterns, dark mode, loading states, and motion design are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid.
