# How designjoy.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/designjoy.co-design)

Last updated: 2026-08-10

## Captured pages

[![Dark booking page with white headline, italic script subhead, colorful smiley face cluster, and calendar widget with pink notification banner](https://pin.fontofweb.com/106?format=jpg)](https://design.withfudge.com/share/pin-106)

[Dark booking page with white headline, italic script subhead, colorful smiley face cluster, and calendar widget with pink notification banner](https://design.withfudge.com/share/pin-106)

[![Vibrant orange-to-purple gradient card with 3D smiley avatar, white CTA button, and email contact option](https://pin.fontofweb.com/105?format=jpg)](https://design.withfudge.com/share/pin-105)

[Vibrant orange-to-purple gradient card with 3D smiley avatar, white CTA button, and email contact option](https://design.withfudge.com/share/pin-105)

[![Light gray FAQ section with italic serif heading, accordion questions with chevron icons, and muted answer text](https://pin.fontofweb.com/104?format=jpg)](https://design.withfudge.com/share/pin-104)

[Light gray FAQ section with italic serif heading, accordion questions with chevron icons, and muted answer text](https://design.withfudge.com/share/pin-104)

[![Pricing section with tilted colorful smiley card, black pricing panel, orange accent button, and feature grid](https://pin.fontofweb.com/103?format=jpg)](https://design.withfudge.com/share/pin-103)

[Pricing section with tilted colorful smiley card, black pricing panel, orange accent button, and feature grid](https://design.withfudge.com/share/pin-103)

## Overview

Designjoy presents a design-subscription service through a visual language that balances professional clarity with playful personality. The system centers on a distinctive smiley-face motif rendered in saturated, friendly colors—orange, pink, blue, green, and yellow—set against stark black or warm off-white backgrounds. This creates immediate brand recognition while maintaining the credibility expected of a high-ticket B2B service.

The interface alternates between dark and light modes across sections. Dark surfaces dominate conversion moments like booking and pricing, where the colorful brand elements pop with maximum contrast. Light surfaces carry informational content like FAQs, allowing extended reading without visual fatigue. Typography pairs a clean, geometric sans-serif for functional text with an expressive italic serif for emotional emphasis, creating a rhythm between utility and delight.

The overall impression is confident and approachable: bold headlines, generous whitespace, rounded containers, and a consistent 3D-smiley avatar system that humanizes the subscription model. Every element reinforces the core promise—design work that feels joyful rather than bureaucratic.

## Colors

The palette is intentionally small and high-contrast, with brand warmth delivered through gradient accents and the multi-color smiley system rather than broad color fields.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark backgrounds, pricing panels |
| canvas | #EBE8E4 | Page background for light sections, FAQ area |
| surface | #FFFFFF | Cards on dark backgrounds, primary buttons, input fields |
| surface-inverse | #111111 | Dark card interiors, calendar widget, footer areas |
| accent | #F97316 | Primary CTA buttons, smiley face elements, price highlights |
| accent-warm | #FBBF24 | Gradient endpoints, secondary smiley accents |
| accent-pink | #EC4899 | Smiley face variety, notification banners |
| accent-blue | #2563EB | Smiley face variety, gradient components |
| accent-green | #22C55E | Smiley face variety, success indicators |
| muted | #9CA3AF | Secondary text, borders, inactive states |

The dark mode sections use ink as the dominant background with surface text, creating a premium, focused atmosphere for conversion actions. The light mode sections invert this relationship, using canvas as the ground with ink text for readability. The accent colors appear primarily within the smiley illustrations and gradient compositions rather than as flat UI fills, preserving their impact. The orange accent carries the functional weight for interactive elements.

## Typography

Three font families create the typographic hierarchy: Figtree for all functional and display text, Seriously Nostalgic Fn It for expressive italic moments, and OCR A Std for technical or decorative mono treatments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Figtree | 3.5rem | 700 | 1.1 | -0.02em | Page headlines, booking section titles |
| section-display | Figtree | 2.5rem | 700 | 1.15 | -0.01em | Section headings, pricing titles |
| body | Figtree | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, answers |
| body-small | Figtree | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, metadata |
| label | Figtree | 0.75rem | 500 | 1.2 | 0.05em | Uppercase labels, category tags |
| navigation | Figtree | 0.875rem | 500 | 1.2 | 0 | Menu items, footer links |
| script-accent | Seriously Nostalgic Fn It | 2.5rem | 400 | 1.1 | -0.01em | Italic emphasis in headlines, emotional subheads |
| mono | OCR A Std | 0.75rem | 400 | 1.3 | 0.02em | Technical labels, decorative uppercase |

Figtree, designed by Erik Kennedy, provides the structural backbone with its geometric clarity and extensive weight range. Seriously Nostalgic Fn It delivers personality in carefully measured doses—typically one italicized phrase per major headline, creating a conversational, hand-crafted feeling. OCR A Std appears sparingly, lending a technical, almost retro-computing texture to small labels and decorative elements.

Verify licensing for these families before production use. Figtree is available from Erik Kennedy. OCR A Std is available from Adobe Systems Incorporated. Seriously Nostalgic Fn It has no vendor attribution in the supplied materials.

## Layout

The layout system relies on centered single-column compositions for content sections, with occasional asymmetric two-column splits for high-impact conversion areas. The maximum content width appears to be approximately 72rem, with generous horizontal padding that scales with viewport size.

Section spacing follows a clear rhythm: major sections receive 6rem vertical separation, while internal component gaps use 1.5rem as the standard measure. Tight groupings of related elements compress to 0.5rem.

The booking interface demonstrates a two-zone composition: the left two-thirds carries the headline, subhead, and brand illustration, while the right third hosts the functional calendar widget. This ratio keeps the emotional branding present without obstructing the task-focused interface.

Pricing uses a similar split: a large product visualization occupies the left space, while the actual purchase card anchors right. Below, feature reassurance cards span the full width in a two-column grid with dotted borders, creating a contained, trustworthy feeling.

The FAQ section simplifies to a single centered column, allowing the accordion pattern to breathe and keeping focus on the questions themselves. This restraint prevents the playful brand elements from overwhelming information-dense content.

Cards and panels use rounded corners consistently—1rem for standard cards, 1.5rem for larger feature panels, and 0.5rem for buttons and compact elements. Full pills use 9999px for tags and notification badges.

## Visual language

The smiley face is the central visual motif, rendered as simple circles with minimal curved-line features. These appear in two forms: flat color clusters for brand moments, and a single 3D-rendered avatar with dimensional lighting for personal touches like the booking card. The color distribution follows a fixed palette—orange, pink, blue, green, yellow, and black—each smiley maintaining the same simple expression.

Gradients serve as emotional amplifiers, particularly in the booking card where orange flows through pink to purple. These gradients are smooth and warm, never harsh, reinforcing the "joy" positioning. The gradient card floats with subtle shadow, separating it from the page ground.

The 3D avatar treatment adds tangible presence: a glossy yellow sphere with soft shadow, set against a dark circular backdrop. This dimensional style elevates the playful iconography into something that feels crafted and premium, appropriate for the service's price point.

Iconography elsewhere remains minimal and functional—chevrons for accordion states, simple line icons for feature lists. The visual weight stays with the typography and smiley elements rather than spreading across decorative icon systems.

Shadows are soft and diffused, used primarily to lift cards and panels from their backgrounds rather than creating harsh depth. The pricing card and booking widget both demonstrate this restrained shadow treatment.

## Components

**Booking Widget**
- Anatomy: Calendar month header with navigation arrows, day grid with selectable dates, time slot list below
- Surface: Dark background (surface-inverse) with light text, selected date highlighted in surface with ink text
- Typography: Month header uses body weight, day labels use label token, time slots use body-small
- Shape: Rounded panel with 1.5rem radius
- Spacing: Internal padding of 1.5rem, day cell spacing of 0.5rem
- Composition: Self-contained card that can anchor right of content or stack on narrow viewports
- States: Selected date inverts to light background; available times appear below date selection

**Pricing Card**
- Anatomy: Plan name, price with period suffix, feature grid, CTA button with icon, decorative smiley accent
- Surface: Dark background (surface-inverse) with light text; feature grid uses slightly elevated dark surface
- Typography: Plan name uses section-display, price uses hero-display with body-small suffix, features use body-small
- Shape: Large rounded panel with 1.5rem radius; CTA button uses 0.5rem radius with orange accent background
- Spacing: Generous internal padding of 2rem; feature grid in two columns with 1.5rem gap
- Composition: Smileys peek from corners as decorative overflow; "Pause or cancel anytime" appears as small label in upper right

**Gradient CTA Card**
- Anatomy: 3D avatar, headline, primary button, secondary email contact with arrow icon
- Surface: Warm gradient from orange through pink to purple; button inverts to surface color
- Typography: Headline uses section-display in surface color, button uses body in ink
- Shape: 1rem rounded card with full-bleed gradient
- Spacing: 1.5rem internal padding, stacked vertical rhythm
- Variants: The arrow icon suggests this card may link to an expanded flow

**FAQ Accordion**
- Anatomy: Section heading, expandable question rows with chevron indicators, revealed answer text
- Surface: Canvas background throughout; no card container, letting the section breathe
- Typography: Heading pairs section-display with script-accent italic; questions use body; answers use body-small in muted color
- Shape: No visible border radius; horizontal rules or subtle borders separate items
- Spacing: Questions stack with 1.5rem vertical rhythm; answers indent slightly or maintain flush left with reduced top spacing
- States: Expanded state reveals answer with chevron rotated upward; collapsed shows downward chevron

**Feature Reassurance Cards**
- Anatomy: Icon, heading, description in bordered container
- Surface: Canvas background with subtle dotted border in muted color
- Typography: Heading uses body weight, description uses body-small in muted
- Shape: 1rem rounded corners
- Spacing: 1.5rem internal padding; two-column grid with 1.5rem gap

## Responsive behavior

The two-column compositions in booking and pricing should stack vertically on narrower viewports, with the functional widget or pricing card moving above the brand illustration to prioritize conversion actions. The FAQ single-column layout remains consistent across breakpoints, with only padding adjustments needed.

The large display type scales down proportionally: hero-display should reduce to approximately 2.5rem on tablet and 2rem on mobile to maintain line-length control. The script-accent italic should scale in parallel to preserve the headline rhythm.

Gradient cards and smiley clusters should maintain aspect ratio rather than stretching; the 3D avatar may reduce in size but should remain visually prominent as the primary brand anchor.

Navigation, if present in full implementations, should collapse to a compact menu or hamburger pattern on mobile, though the supplied images do not show this state directly.

## Practical implementation guidance

### Preserve
- The strict two-tone section rhythm: dark conversion sections alternating with light information sections
- The smiley color palette as a fixed set—orange, pink, blue, green, yellow, black—never introducing additional hues
- The italic script as a single phrase or clause within headlines, not as continuous body text
- The generous border radius on all containers; sharp corners would break the friendly personality
- The high contrast between text and background in both dark and light modes

### Avoid
- Using the accent colors as flat backgrounds for large areas; they should remain within smiley illustrations and gradient endpoints
- Replacing the 3D avatar with flat alternatives; the dimensional treatment is critical to premium perception
- Overcrowding the smiley clusters; the loose, overlapping arrangement in the brand illustration is intentional
- Generic button styles; the orange pill with smiley icon is a signature element

### Recommended build order
1. Establish the color tokens and section background rhythm
2. Implement Figtree at all text sizes with proper weight hierarchy
3. Add Seriously Nostalgic Fn It for italic accent phrases in headlines
4. Build the card and panel components with consistent radius values
5. Create the smiley illustration system in both flat and 3D forms
6. Implement the booking widget as the most complex interactive component
7. Add gradient treatments to CTA surfaces
8. Polish with shadow, spacing, and micro-interaction refinement

### Accessibility
- Ensure the dark sections maintain at least 4.5:1 contrast for body text; the surface text on surface-inverse background meets this
- Provide visible focus indicators on all interactive elements, particularly the calendar date cells and time slots
- The gradient CTA card should not rely on color alone for its interactive nature; maintain clear button boundaries
- Accordion items should be keyboard-navigable with Enter or Space to toggle, and arrow keys to move between questions
- The script-accent italic should be used for visual emphasis only, with semantic heading structure maintained underneath

## Scope note

This guide covers the landing page surface visible in the supplied images, including the booking flow, pricing presentation, FAQ accordion, and gradient CTA components. Navigation behavior, mobile-specific layouts, form validation states, payment flow screens, and motion design are not represented in the available materials. Measurements are practical adaptation targets derived from visual inspection of the supplied images.
