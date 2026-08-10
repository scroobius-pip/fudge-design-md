# How writewithspiral.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/writewithspiral.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer area with Spiral logo, orange pill CTA, and minimal link columns on warm off-white background](https://pin.fontofweb.com/8452?format=jpg)](https://design.withfudge.com/share/pin-8452)

[Footer area with Spiral logo, orange pill CTA, and minimal link columns on warm off-white background](https://design.withfudge.com/share/pin-8452)

[![Pricing section with two-tier card layout, orange gradient buttons, and dark bundle subscription banner](https://pin.fontofweb.com/8451?format=jpg)](https://design.withfudge.com/share/pin-8451)

[Pricing section with two-tier card layout, orange gradient buttons, and dark bundle subscription banner](https://design.withfudge.com/share/pin-8451)

[![FAQ accordion with orange badge header, expanded answer panel, and circular toggle controls](https://pin.fontofweb.com/8450?format=jpg)](https://design.withfudge.com/share/pin-8450)

[FAQ accordion with orange badge header, expanded answer panel, and circular toggle controls](https://design.withfudge.com/share/pin-8450)

[![Feature grid with four large rounded cards, orange highlighted keywords, and product UI mockups](https://pin.fontofweb.com/8449?format=jpg)](https://design.withfudge.com/share/pin-8449)

[Feature grid with four large rounded cards, orange highlighted keywords, and product UI mockups](https://design.withfudge.com/share/pin-8449)

## Overview

Spiral's design system presents an AI writing assistant through a warm, editorial lens that feels more like a creative studio than a tech product. The visual language centers on three core tensions: classical typography against modern sans-serif utility, energetic orange against restrained neutrals, and generous rounded containers against precise geometric accents. The result is a conversational, approachable interface that invites exploration without sacrificing clarity.

The system operates across two primary modes—a light, warm canvas for marketing and storytelling surfaces, and dark, grounded surfaces for emphasis and conversion moments. Every component reinforces the product's positioning as a thoughtful writing partner rather than a generic AI tool, from the script-style "EVERY" wordmark to the interview-style feature illustrations.

## Colors

| token | value | use |
|---|---|---|
| action | #FD7F01 | Primary buttons, badges, highlighted keywords, brand moments |
| ink | #010101 | Primary text, headings, strong emphasis |
| muted-ink | #333333 | Secondary text, descriptions, footer links |
| canvas | #EBEBE4 | Page background, the warm neutral foundation |
| surface | #F7F7F7 | Card backgrounds, elevated containers, pricing cards |
| surface-warm | #E5E6E3 | Feature card backgrounds, subtle differentiation |
| surface-dark | #242424 | Dark buttons, emphasis bars, inverse surfaces |
| surface-darker | #1C1C1C | Deepest dark, gradient endpoints for dark buttons |
| border | #EEEEEE | Subtle dividers, hairline separators |
| text-inverse | #FFFFFF | Text on dark or orange backgrounds |
| text-muted | #333333 | Body text on light surfaces |

The palette builds from a warm off-white canvas that avoids sterile pure white, creating an immediate tactile quality. Orange functions as the singular accent—appearing in gradients for primary actions, as solid fills for badges and highlights, and nowhere else. Dark surfaces appear sparingly, reserved for high-conversion moments like the "Subscribe to EVERY" bundle banner. The system maintains accessibility through strong contrast ratios: orange on white, white on orange, and white on dark all meet readable thresholds.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Louize | 4rem | 400 | 1.3 | -0.02em | Page headlines, hero statements |
| section-display | Louize | 2.25rem | 400 | 1.2 | -0.02em | Section headings, card titles |
| body-large | System-Systemui | 1.125rem | 400 | 1.7 | 0em | Feature descriptions, FAQ answers |
| body | System-Systemui | 1rem | 400 | 1.6 | 0em | Standard paragraphs, navigation |
| body-small | System-Systemui | 0.875rem | 400 | 1.5 | 0.01em | Captions, metadata, fine print |
| label | System-Sansserif | 0.75rem | 400 | 1 | 0em | Tags, micro-labels, system text |
| navigation | System-Systemui | 1rem | 400 | 1.4 | 0em | Nav links, button text |
| accent-script | Beth Ellen | 1.1875rem | 400 | 0.8 | -0.02em | "EVERY" wordmark, brand moments |
| price-display | Geist | 1.25rem | 400 | 0.8 | 0em | Pricing figures, numerical display |

Louize, designed by Matthieu Cortat and available from 205.tf, serves as the editorial voice—its classical serif forms with tight negative tracking give headlines a refined, magazine-like quality. System-Systemui handles all functional text with clean neutrality. Beth Ellen provides the distinctive script character for the "EVERY" brand lockup. Geist, from Basement Studio and Vercel, offers a contemporary sans-serif for numerical display. Verify licensing for these families before production use.

## Layout

The layout system favors centered, contained compositions with generous breathing room. Sections stack vertically with substantial section spacing, typically 6rem between major zones. Content lives within a centered container that maintains comfortable reading widths.

The feature grid uses a two-column layout with large, equal-width cards separated by consistent grid gaps. Each card functions as an independent storytelling unit with centered or top-aligned content, descriptive text, and supporting imagery or UI mockups below.

The pricing section presents two prominent cards side by side, with a conversion banner beneath spanning a narrower width to create visual hierarchy. The FAQ section uses a single-column accordion stack, with items full-width within the content container.

Navigation appears as a floating pill bar, centered horizontally, containing logo, links, and primary CTA. This bar uses a rounded container with internal padding, creating a discrete module that hovers above the content.

Footer layouts organize links into minimal column groups, left-aligned with the brand mark anchoring the right side.

## Visual language

The visual language communicates thoughtfulness through roundedness and warmth. Every container carries generous border radius—cards at 1rem to 1.25rem, buttons as full pills, and even small badges with subtle rounding. This consistent softness contrasts with the precision of the typographic system.

Orange appears strategically as a highlight mechanism: single words within headlines receive solid orange rectangular backgrounds, creating a distinctive "highlighted keyword" pattern that draws attention without overwhelming. These inline badges use tight padding and sit naturally within text flow.

Product storytelling relies on conversational UI mockups—chat bubbles, document cards, and style selectors—rendered with realistic shadows and subtle depth. These illustrations appear within the warm card containers, making abstract features tangible.

The "EVERY" wordmark uses Beth Ellen's flowing script, creating an elegant signature that appears in orange badges, dark subscription banners, and footer marks. This script element provides the primary brand personality against the restrained system typography.

Shadows remain subtle and atmospheric: soft diffuse shadows for elevation, with layered shadows for cards that need additional depth. The overall effect is dimensional without heaviness.

## Components

**Primary Action Button**
- Anatomy: Text label centered within a full-pill container
- Surface: Solid #FD7F01 or gradient background
- Typography: System-Systemui, 1rem, weight 400, white text
- Shape: Border radius 6.25rem (full pill)
- Spacing: Padding 0.75rem vertical, 1.375rem horizontal
- Composition: Inline or centered placement, often the sole CTA

**Gradient Action Button**
- Anatomy: Same as primary but with explicit gradient background
- Surface: 180-degree linear gradient from #F5842D to #DE6B25
- Used for: "Try out Spiral" pricing CTAs, high-emphasis actions

**Secondary/Dark Button**
- Anatomy: Text within rounded rectangle
- Surface: #242424 background, or gradient to #1C1C1C
- Typography: System-Systemui, 1rem, white text
- Shape: Border radius 0.375rem (subtler than pill)
- Spacing: Padding 0.875rem vertical, 1rem horizontal
- Used for: "Subscribe to EVERY" bundle action

**Feature Card**
- Anatomy: Large rounded container with centered content stack
- Surface: #E5E6E3 warm background, no visible border
- Typography: Louize section-display for headline, System-Systemui body-large for description
- Shape: Border radius 1.25rem
- Spacing: Padding 2rem, internal stack gap 1.5rem
- Composition: Headline with inline orange keyword badge, description below, product illustration at bottom

**Pricing Card**
- Anatomy: Vertical stack with icon, price, title, CTA, and feature list
- Surface: #F7F7F7 background, subtle shadow
- Typography: Louize section-display for plan name, Geist for price figure, System-Systemui for features
- Shape: Border radius 1rem
- Spacing: Padding 1.5rem, generous internal gaps
- Variants: Personal (left, lighter emphasis), Teams (right, with "per seat" notation)

**FAQ Accordion Item**
- Anatomy: Question row with expand/collapse toggle, expandable answer area
- Surface: #F7F7F7 background for collapsed state
- Typography: Louize section-display for question, System-Systemui body-large for answer
- Shape: Border radius 1rem
- Spacing: Padding 1.5rem
- States: Collapsed shows plus icon, expanded reveals answer with minus icon; icons in circular containers

**Inline Keyword Badge**
- Anatomy: Text within solid orange rectangle, embedded in headlines
- Surface: #FD7F01 solid fill
- Typography: Same Louize as surrounding text, white color
- Shape: Subtle rounding, approximately 0.1875rem
- Spacing: Tight padding creating inset effect
- Used for: "interviews," "every angle," "grounded," "own style" in feature headlines

**Navigation Bar**
- Anatomy: Horizontal pill containing logo, text links, and CTA
- Surface: #F7F7F7 with subtle shadow
- Shape: Full pill border radius
- Spacing: Padding 0.75rem 1.5rem, internal flex layout
- Composition: Left-aligned logo, center links, right-aligned orange pill CTA

**Chat Bubble**
- Anatomy: Rounded message container with tail
- Surface: White fill, subtle shadow
- Typography: System-Systemui body
- Shape: 1.25rem border radius with asymmetric tail
- Used for: Product illustration showing conversational interface

## Responsive behavior

The two-column feature grid and pricing layout should stack to single column on narrower viewports, maintaining card proportions and internal spacing. The navigation pill may compress to a simplified mark or hamburger pattern when horizontal space is constrained. FAQ accordion items remain full-width across breakpoints, with touch-friendly tap targets for the toggle controls. Hero typography should scale down proportionally, with the 4rem display reducing to approximately 2.5rem on mobile while preserving the tight line-height and negative tracking character.

## Practical implementation guidance

### Preserve
- The warm off-white canvas as the default background; avoid pure white replacements
- Louize's tight negative tracking for all display headings; do not loosen letterspacing
- The single-orange-accent discipline; resist adding secondary accent colors
- Full-pill buttons for primary actions; maintain the 6.25rem radius
- The inline orange keyword badge pattern as a distinctive brand element

### Avoid
- Sharp-cornered containers; the rounded language is fundamental to the approachable tone
- Generic AI product aesthetics—cold blues, purples, or excessive gradients
- Tight section stacking; the generous vertical rhythm is essential
- Script typography outside the "EVERY" wordmark context; Beth Ellen should not become body text

### Recommended build order
1. Establish the canvas background and Louize/System-Systemui type foundation
2. Implement the orange gradient button as the primary action component
3. Build the feature card with warm background, rounded corners, and centered content stack
4. Create the inline keyword badge pattern for headlines
5. Add the navigation pill bar with floating shadow behavior
6. Develop the FAQ accordion with circular toggle icons
7. Polish with product illustration containers and chat bubble components

### Accessibility
- Ensure orange buttons meet contrast minimums; the gradient endpoints provide sufficient darkness
- Maintain visible focus states on all interactive elements, particularly the pill-shaped buttons
- Provide keyboard navigation for FAQ accordion toggles with clear expanded/collapsed state
- Use semantic heading hierarchy despite the visual uniformity; Louize headlines should map to appropriate levels

## Scope note

This guide covers the marketing and landing page surfaces of writewithspiral.com, including hero, features, pricing, FAQ, and footer sections. In-app interface states, mobile-specific layouts, animation behavior, and form validation states are not represented in the supplied material. The dark subscription banner and chat interface illustrations suggest additional components that may extend this system for authenticated experiences.
