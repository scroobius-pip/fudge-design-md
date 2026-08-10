# How x.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/x.ai-design)

Last updated: 2026-08-10

## Captured pages

[![News article page for Grok 4.5 with dark background, white headline, and orange-accented benchmark chart showing model performance comparisons.](https://pin.fontofweb.com/10438?format=jpg)](https://design.withfudge.com/share/pin-10438)

[News article page for Grok 4.5 with dark background, white headline, and orange-accented benchmark chart showing model performance comparisons.](https://design.withfudge.com/share/pin-10438)

[![Careers landing page with large centered headline using muted gray secondary text, white pill button, and dark benefit cards in a two-column grid layout.](https://pin.fontofweb.com/9744?format=jpg)](https://design.withfudge.com/share/pin-9744)

[Careers landing page with large centered headline using muted gray secondary text, white pill button, and dark benefit cards in a two-column grid layout.](https://design.withfudge.com/share/pin-9744)

[![Grok product page showing Chat feature section with conversational UI mockup, feature list with checkmarks, and dark card with rounded corners.](https://pin.fontofweb.com/9743?format=jpg)](https://design.withfudge.com/share/pin-9743)

[Grok product page showing Chat feature section with conversational UI mockup, feature list with checkmarks, and dark card with rounded corners.](https://design.withfudge.com/share/pin-9743)

[![Grok hero section with gradient text effect on headline, two pill buttons, and product screenshot showing Tokyo itinerary conversation interface.](https://pin.fontofweb.com/9742?format=jpg)](https://design.withfudge.com/share/pin-9742)

[Grok hero section with gradient text effect on headline, two pill buttons, and product screenshot showing Tokyo itinerary conversation interface.](https://design.withfudge.com/share/pin-9742)

## Overview

The x.ai design system presents a dark, engineering-forward visual language built for AI product storytelling. The system centers on a near-black canvas with high-contrast white typography, creating a focused, technical atmosphere that emphasizes content over decoration. The visual approach is restrained and precise: generous whitespace, subtle gray tonal layers for depth, and a single vibrant orange accent reserved for data visualization and key moments of emphasis. This creates a hierarchy where product capabilities, benchmark data, and conversational interfaces become the focal points against the muted background.

The system serves multiple page types—from product landing pages with hero sections and feature breakdowns to news articles with data charts and careers pages with benefit grids. Across all surfaces, the design maintains consistency through rounded pill buttons, subtle border treatments, and a typographic scale that shifts cleanly between display headlines and functional body text. The overall impression is of a research-driven organization presenting complex technical information with clarity and confidence.

## Colors

The color system is built on a dark-mode foundation with intentional restraint. The palette uses a near-black canvas as its base, layered with slightly lighter surfaces for elevation, and relies on white and muted grays for typography hierarchy. A single orange accent provides energy for data visualization and calls to action.

| token | hex | use |
|---|---|---|
| canvas | #0A0A0A | Primary page background, deepest layer |
| surface | #111111 | Card backgrounds, elevated containers |
| surface-elevated | #1A1A1A | Hover states, active cards, input fields |
| ink | #FFFFFF | Primary text, headlines, primary buttons |
| ink-muted | #7D8187 | Secondary text, captions, disabled states |
| ink-dim | #A9B2BC | Tertiary text, placeholder content |
| border-subtle | #1F2228 | Dividers, card borders, hairline separators |
| border-default | #D5D9E2 | Button borders, active input outlines |
| accent | #FF6308 | Data highlights, benchmark bars, emphasis |
| accent-soft | #9CB8DD | Decorative gradients, secondary highlights |

The dark canvas creates immersive reading conditions for long-form technical content. Surface elevation is achieved through subtle lightness shifts rather than shadows, maintaining the flat, technical aesthetic. The orange accent appears sparingly—primarily in benchmark charts and performance visualizations—where it draws immediate attention to comparative data. White borders on dark buttons create high-contrast interactive elements without introducing additional colors. The system avoids gradients in UI surfaces, reserving them for decorative hero treatments and photographic overlays.

## Typography

The typographic system uses Universal Sans as its primary family, with Geist Mono providing monospace accents for labels, navigation, and technical annotations. The design facts also identify Applesystem, Times, and Universal Sans-400 as present in the interface, though these appear to serve fallback or system-level roles rather than as primary design voices. The scale is tuned for dark-mode readability with slightly open line heights and negative letter spacing on display sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Universal Sans | 4.5rem | 500 | 1 | -0.03em | Page headlines, hero statements |
| section-display | Universal Sans | 3rem | 400 | 1 | -0.025em | Section headings, feature titles |
| headline | Universal Sans | 2.25rem | 400 | 1.1 | -0.02em | Article titles, sub-hero content |
| body-large | Universal Sans | 1.125rem | 400 | 1.6 | normal | Lead paragraphs, descriptions |
| body | Universal Sans | 1rem | 400 | 1.5 | normal | Primary reading text |
| body-small | Universal Sans | 0.875rem | 400 | 1.6 | normal | Secondary content, metadata |
| label | Universal Sans | 0.875rem | 500 | 1.4 | normal | Buttons, navigation, tags |
| caption | Universal Sans | 0.75rem | 400 | 1.3 | normal | Fine print, chart annotations |
| mono-label | Geist Mono | 0.875rem | 400 | 1.4 | 0.1em | Technical labels, nav accents |

Universal Sans is designed by Briton Smith of Family Type. Geist Mono is designed by Basementstudio (Andrés Briganti, Mateo Zaragoza) and distributed by Vercel. Verify licensing for these families before production use.

The type scale emphasizes weight over size for hierarchy. Display headlines use Medium weight (500) while body text remains Regular (400). Negative letter spacing on headlines creates tight, impactful statements that feel engineered rather than decorative. The monospace family appears in navigation and technical contexts, providing visual texture through its fixed-width rhythm and wide letter spacing.

## Layout

The layout system uses a centered content model with generous horizontal margins that scale with viewport width. Content containers are constrained to readable widths while maintaining visual breathing room.

The base spacing unit is 0.25rem, with semantic tokens derived from this foundation. Section spacing uses 8rem vertical padding to create dramatic separation between content areas. Content gaps of 4rem separate major blocks within sections, while component gaps of 1.5rem handle internal element spacing.

Page containers use horizontal padding of 1.5rem on mobile, expanding to match centered margin constraints on larger viewports. The header navigation sits within a full-width container with internal horizontal padding, while page content typically centers with margins of approximately 24rem on either side at maximum width. This creates a narrow, focused reading column that emphasizes the technical precision of the content.

Grid layouts appear in feature sections and benefit cards, typically using two-column arrangements with 4rem gaps. The careers page shows this pattern clearly: a text-heavy left column paired with a card grid on the right, both sharing the same vertical alignment. Product pages use asymmetric layouts with text content on the left and interface mockups on the right, creating a natural reading flow that explains before demonstrating.

## Visual language

The visual language is characterized by restraint, precision, and technical credibility. Rounded corners appear throughout but are calibrated to context: 1rem for cards and panels, 9999px for pills and buttons. This creates a system where interactive elements feel organic and approachable while content containers maintain subtle structure.

Borders function as optical hairlines—1px solid lines in subtle gray for card separation, slightly brighter for active button states. The system avoids heavy shadows, relying instead on surface color shifts for depth. When shadows do appear, they are minimal: a faint white glow for focus states or subtle elevation.

Imagery and mockups are presented within rounded containers that sit flush against the dark canvas. Product screenshots show conversational interfaces with their own internal spacing and typography, creating nested visual systems that demonstrate the product within the marketing context. Charts and data visualizations use the accent orange against muted gray bars, establishing an immediate visual hierarchy that guides the eye to performance claims.

The overall density is low. Sections breathe with generous vertical spacing, and text blocks are constrained to readable widths. This creates a pace that feels deliberate and authoritative—appropriate for a research organization presenting complex technical achievements.

## Components

### Navigation

The global navigation sits at the top of every page, contained within a full-width bar with horizontal padding. It uses a flex layout with the logo on the left, primary links in the center, and utility actions on the right.

- **Anatomy**: Logo mark, text links with dropdown indicators, pill-shaped contact button, and split "Try for free" button with chevron dropdown
- **Surface**: Transparent background over dark canvas, white text
- **Typography**: Label style for links, mono-label for accent elements
- **Shape**: Links use pill border-radius (9999px) with subtle padding; active states show filled white background with dark text
- **Spacing**: 1rem vertical padding, 1rem gap between nav items, 0.375rem horizontal padding on individual links
- **Composition**: Centered link cluster with logo left-aligned, utility buttons right-aligned

### Hero Section

Hero sections establish page context with large display typography and minimal supporting elements.

- **Anatomy**: Eyebrow label, headline with potential gradient treatment, subheadline paragraph, and one or two pill buttons
- **Surface**: Transparent over dark canvas; headline may use gradient text effect (white to transparent)
- **Typography**: Hero-display for headline, body-large for subheadline, label for eyebrow
- **Shape**: Buttons are pill-shaped; headline text may have gradient mask
- **Spacing**: Generous top padding (12rem typical), 1rem gap between elements, centered alignment
- **Variants**: Single headline with muted secondary line; two-button layout with primary and secondary actions

### Feature Card

Cards appear in grids for benefits, capabilities, and similar grouped content.

- **Anatomy**: Icon, title, and description text
- **Surface**: Surface-elevated background (#1A1A1A), no visible border
- **Typography**: Label for title, body-small for description
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem internal padding, 1rem gap between icon and text
- **Composition**: Icon top-aligned, text stacked below with consistent vertical rhythm

### Product Mockup

Interface demonstrations appear as contained screenshots or live-style interfaces.

- **Anatomy**: Container with internal content showing conversational UI, input field, and action buttons
- **Surface**: Surface background (#111111) with subtle border in border-subtle
- **Typography**: Body-small for conversation text, label for input placeholder
- **Shape**: 1rem border radius for container; internal elements use smaller rounding
- **Spacing**: 1rem internal padding, 0.5rem gaps between message elements
- **Composition**: Messages left-aligned with sender indicators; input field fixed to bottom with send button

### Data Visualization

Benchmark charts and performance comparisons use bar charts with distinctive accent coloring.

- **Anatomy**: Tab selector, vertical bar chart with labeled axes, data labels on bars
- **Surface**: Transparent over canvas; bars use solid fills
- **Color**: Accent orange (#FF6308) for highlighted item; muted gray for comparison bars
- **Typography**: Caption for axis labels and annotations, label for tab selectors
- **Shape**: Rectangular bars with no radius; tabs use pill shape
- **Spacing**: 2rem gap between tabs and chart; 1.5rem bar width with proportional gaps

### Button

Two button variants handle all interactive actions.

- **Primary**: White background, dark text, pill shape, label typography
- **Secondary**: Transparent background, white text, 1px white border, pill shape, label typography
- **Spacing**: 0.75rem vertical padding, 1.25rem horizontal padding
- **States**: Hover may invert colors or add subtle background shift; focus shows outline

## Responsive behavior

The system appears optimized for desktop viewing with substantial content widths and generous spacing. At narrower viewports, the centered content margins should compress and eventually convert to full-width with maintained horizontal padding. The two-column feature grids should stack vertically, with text content preceding visual demonstrations. Navigation links may collapse into a menu trigger, preserving the pill-shaped utility buttons. Typography should scale down proportionally: hero-display reducing to 3rem on tablet and 2.25rem on mobile, maintaining the tight line heights and negative letter spacing that define the visual character.

## Practical implementation guidance

### Preserve
- The near-black canvas as the dominant background; do not introduce light mode without careful consideration of the entire color system
- The tight negative letter spacing on display headlines; this is essential to the engineered aesthetic
- The single orange accent for data emphasis; resist adding secondary accent colors
- The pill-shaped buttons with generous horizontal padding; this creates the approachable yet precise interaction style
- The generous section spacing; the low density is intentional and supports readability of technical content

### Avoid
- Heavy drop shadows or elevation effects; the system uses surface color for depth
- Multiple accent colors; the orange is deliberately singular
- Decorative gradients on UI surfaces; reserve gradients for hero text treatments only
- Tight content widths without sufficient margins; the breathing room is part of the brand expression
- Generic sans-serif fallbacks; Universal Sans carries significant character at display sizes

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement Universal Sans with the full type scale, testing negative letter spacing at display sizes
3. Build the navigation component with pill-shaped active states
4. Create the button system with primary and secondary variants
5. Implement section containers with proper max-width and centered margins
6. Add feature cards and product mockup containers
7. Integrate the orange accent for data visualization and emphasis moments

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text; the white-on-near-black pairing exceeds this
- Ensure the orange accent (#FF6308) against dark backgrounds meets 3:1 for large text or graphical elements
- Provide visible focus states on all interactive elements; the existing white glow shadow pattern works well
- Do not rely solely on color for data differentiation in charts; add patterns or labels
- Test reduced motion preferences for any gradient text animations

## Scope note

This guide covers the marketing and product pages visible in the supplied images, including news articles, careers, product features, and company information. Mobile layouts, form interactions, loading states, and the full checkout or authentication flows are not represented. Motion design, including gradient text animations and scroll-triggered reveals, is suggested by the visual system but not documented here. Measurements are derived from the exact values present in the interface.
