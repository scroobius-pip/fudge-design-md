# How nicelydone.club is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nicelydone.club-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with diagonal grid of UI screenshots, bold display heading, and dual CTA buttons on a clean white canvas.](https://pin.fontofweb.com/7993?format=jpg)](https://design.withfudge.com/share/pin-7993)

[Hero section with diagonal grid of UI screenshots, bold display heading, and dual CTA buttons on a clean white canvas.](https://design.withfudge.com/share/pin-7993)

[![Vibrant orange conversational banner with floating chat bubbles and centered white typography.](https://pin.fontofweb.com/7994?format=jpg)](https://design.withfudge.com/share/pin-7994)

[Vibrant orange conversational banner with floating chat bubbles and centered white typography.](https://design.withfudge.com/share/pin-7994)

[![Feature grid with large product screenshots, section heading, and four-column benefit cards with orange icons.](https://pin.fontofweb.com/7995?format=jpg)](https://design.withfudge.com/share/pin-7995)

[Feature grid with large product screenshots, section heading, and four-column benefit cards with orange icons.](https://design.withfudge.com/share/pin-7995)

[![Footer area with category navigation list, conversion headline, dark pill button, and minimal footer bar.](https://pin.fontofweb.com/7996?format=jpg)](https://design.withfudge.com/share/pin-7996)

[Footer area with category navigation list, conversion headline, dark pill button, and minimal footer bar.](https://design.withfudge.com/share/pin-7996)

## Overview

Nicelydone presents a confident, product-led visual system built around clarity and speed. The design pairs a distinctive display typeface with restrained system typography, creating hierarchy through contrast rather than decoration. A near-white canvas dominates, punctuated by strategic moments of vibrant orange that signal action and emotional resonance. The overall impression is editorial yet functional—generous whitespace frames dense product imagery, while bold headlines speak directly to user pain points. Every element serves conversion: from the dual-button hero CTAs to the social-proof logo bar and statistics row. The system balances personality with professionalism, using rounded pill shapes for interactive elements and sharp corners for content containers, establishing a visual rhythm that guides the eye from discovery to action.

## Colors

The palette is intentionally narrow, relying on value contrast and a single high-saturation accent to create visual interest.

| token | value | use |
|---|---|---|
| action | #FF6600 | Primary accent for CTA banners, interactive highlights, and emotional moments |
| ink | #1C1D22 | Primary text, dark button fills, and high-contrast headings |
| muted-ink | #313130 | Secondary text, footer copy, and de-emphasized labels |
| canvas | #FFFFFF | Page background, card surfaces, and light button fills |
| surface | #F3F3F2 | Footer background and subtle section alternation |
| border | #3C3D4C | Hairline dividers and subtle structural boundaries |
| border-subtle | #929190 | Disabled or tertiary borders |

The color logic follows a light-mode-first approach with no dark variant visible. The action orange (#FF6600) appears exclusively in high-impact moments: the conversational "Sound familiar?" banner and icon accents throughout feature cards. Text hierarchy is established through ink density rather than hue variation—primary headings use near-black ink, body copy steps down to muted-ink, and captions settle into border-subtle territory. The surface warm gray provides gentle grounding for footer areas without competing with content. Shadows use ink at low opacity rather than introducing additional neutrals, maintaining palette discipline.

## Typography

Two type families create the system's voice: Mnky Klaus for display personality and System UI sans-serif for functional clarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Mnky Klaus | 3.3rem | 700 | 1.25 | normal | Primary page headlines, hero statements |
| section-display | System | 2.5rem | 600 | 1.11 | normal | Section headings, feature introductions |
| body | System | 1rem | 400 | 1.5 | normal | Primary reading text, descriptions |
| body-large | System | 1.15rem | 400 | 1.5 | normal | Lead paragraphs, emphasized descriptions |
| body-small | System | 0.875rem | 400 | 1.43 | normal | Feature card copy, secondary details |
| label | System | 0.8rem | 400 | 1.33 | normal | Captions, metadata, legal microcopy |
| navigation | System | 1rem | 600 | 1.5 | normal | Header links, primary navigation |
| button | System | 0.9375rem | 600 | 1.5 | normal | CTA buttons, interactive labels |
| display-accent | Mnky Klaus | 2.01rem | 600 | 1.2 | normal | Sub-headings, category labels, accent display |
| display-medium | Mnky Klaus | 1rem | 400 | 1.43 | normal | Small display text, tag-style labels |

Mnky Klaus, designed by Mitch Paone and published by Monkey Type LLC, provides the system's distinctive character. Its bold weight carries hero messaging with authority, while lighter weights appear in category navigation and accent contexts. System UI handles all functional typography with weights 400, 500, and 600, creating clear hierarchy through weight rather than size alone. Verify licensing for Mnky Klaus before production use.

## Layout

The layout system favors centered, single-column compositions for messaging with asymmetric grids for visual content. Maximum content width appears constrained to approximately 85rem with generous side margins that scale with viewport.

The hero section establishes the spatial vocabulary: large display text left-aligned with substantial padding, paired with a diagonal grid of product screenshots that bleeds toward the right edge. This creates dynamic tension between stable messaging and energetic imagery. Below the hero, content sections alternate between full-bleed colored banners and contained white cards.

Spacing follows a 0.125rem base unit, with semantic jumps at 0.5rem, 1rem, 1.5rem, 3rem, 6rem, and 8rem. Section vertical padding typically uses 6rem, creating breathing room between content blocks. Component internal padding ranges from 1rem for compact elements to 3rem for feature cards.

The grid system visible in feature sections uses a four-column layout for benefit cards, each with consistent internal padding and top-aligned iconography. Product showcase areas employ a two-column asymmetric split, with larger screenshots on the left and supporting context on the right.

Navigation sits at the top with minimal height, using a flex layout with logo left, links center-right, and CTAs far right. The footer compresses to a single row with copyright left and legal links right, maintaining the system's horizontal efficiency.

## Visual language

The visual personality balances editorial restraint with moments of playful energy. Photography and screenshots dominate the right portions of layouts, while typography anchors the left. This diagonal visual flow creates momentum that draws the eye downward and rightward.

Iconography appears as simple line icons in the action orange color, paired with bold labels in feature cards. The icon style is minimal—single-weight strokes without fills, typically 1.5rem square with 1rem right margin.

The conversational banner represents the system's most distinctive visual moment: a full-width orange field with floating white chat bubbles containing sample search queries. This breaks the otherwise rectilinear layout with soft pill shapes that appear to drift, creating emotional resonance through visual metaphor.

Shadows are subtle and functional rather than decorative. Cards and interactive elements use a layered shadow system: a near-transparent ink shadow for elevation, combined with a subtle colored shadow that echoes the border tone. This creates depth without heaviness.

Border radius distinguishes element types: 0.75rem for cards and containers, 9999px for all interactive elements including buttons, tags, and chat bubbles. No sharp-cornered buttons appear in the system.

## Components

### Primary Button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Background fills with ink (#1C1D22), text renders in canvas white
- **Typography**: button token at 0.9375rem, weight 600
- **Shape**: Full pill radius (9999px), no visible border
- **Spacing**: Padding 0.5rem vertical, 1rem horizontal
- **Composition**: Typically appears alongside a secondary button variant
- **States**: Default shows solid fill; no hover state visible in static view

### Secondary Button

- **Anatomy**: Text label within pill outline or light fill
- **Surface**: Background transparent or canvas white, text in ink
- **Typography**: button token, identical weight to primary
- **Shape**: Full pill radius, optional 1px border in border-subtle
- **Spacing**: Matches primary button padding
- **Composition**: Positioned immediately adjacent to primary button with 0.5rem gap

### Feature Card

- **Anatomy**: Icon top-left, bold label below, descriptive paragraph beneath
- **Surface**: Canvas white background, no visible border
- **Typography**: Label uses body-small at 0.875rem in ink; description uses body-small in muted-ink
- **Shape**: 0.75rem radius when contained within larger card
- **Spacing**: Internal padding 1.5rem, icon-to-label gap 0.5rem, label-to-description gap 0.5rem
- **Composition**: Arranged in horizontal rows of four with equal gaps

### Product Showcase Card

- **Anatomy**: Large screenshot image, category label, optional context text
- **Surface**: White or very light gray, subtle shadow for elevation
- **Typography**: Category label uses display-medium in action orange or ink
- **Shape**: 0.75rem radius, shadow with ink and subtle border-color layers
- **Spacing**: Padding 1rem to 3rem depending on context
- **Composition**: Grid arrangement with varying sizes creating visual rhythm

### CTA Banner

- **Anatomy**: Full-width colored field with centered text and floating decorative elements
- **Surface**: Solid action orange (#FF6600)
- **Typography**: Heading uses section-display in canvas white; subheading uses body-large in canvas white at reduced opacity
- **Shape**: 0.75rem radius when inset, full bleed when edge-to-edge
- **Spacing**: Generous vertical padding, typically 6rem
- **Composition**: Decorative chat bubbles positioned asymmetrically above text

### Navigation Bar

- **Anatomy**: Logo left, text links center-right, pill buttons far right
- **Surface**: Transparent over hero, likely canvas or blur on scroll
- **Typography**: Navigation token for links, button token for CTAs
- **Shape**: No background shape for bar; individual buttons use pill radius
- **Spacing**: Horizontal padding 1.5rem, vertical padding 1rem
- **Composition**: Flex row with space-between logic

### Footer

- **Anatomy**: Copyright left, legal links right, optional category navigation above
- **Surface**: Surface warm gray (#F3F3F2)
- **Typography**: body-small in muted-ink for copyright; navigation weight for links
- **Shape**: No radius, full-width bar
- **Spacing**: Padding 2rem vertical, 1.5rem horizontal
- **Composition**: Single row on desktop, stacked on narrower viewports

## Responsive behavior

The system appears optimized for desktop presentation with clear adaptation paths. Hero text scales down proportionally, likely dropping from 3.3rem to approximately 2rem on tablet and 1.75rem on mobile. The diagonal screenshot grid would collapse to a single column or hide overflow on narrow viewports.

Feature card rows of four should stack to two columns on tablet and single column on mobile, maintaining internal padding but increasing vertical gaps between cards. The CTA banner's floating chat bubbles would reduce in number and reposition to avoid text overlap.

Navigation would collapse to a hamburger menu on mobile, with the "Try it free" pill button potentially persisting as the primary visible CTA. Footer content would stack vertically, centering copyright above legal links.

Typography maintains consistent line heights across breakpoints, with adjustments to font size preserving readable measure. The 0.125rem base unit allows fine-grained spacing adjustments without breaking the modular scale.

## Practical implementation guidance

### Preserve
- The stark contrast between Mnky Klaus display type and System UI functional text
- Full pill radius on all interactive elements without exception
- Generous whitespace around conversion elements—never crowd the CTA
- The single accent orange used sparingly for maximum impact
- Shadow layering with ink opacity plus subtle colored tint

### Avoid
- Introducing additional accent colors that compete with action orange
- Sharp corners on buttons, tags, or badges—maintain the pill vocabulary
- Body text smaller than 0.875rem or line heights below 1.4
- Heavy borders on cards; prefer shadow-based elevation
- Centering hero text—left alignment with right-side imagery creates the signature dynamic

### Recommended Build Order
1. Establish the type scale with Mnky Klaus loaded and System UI as fallback
2. Implement the two-button hero pattern with correct pill shapes and spacing
3. Build the screenshot grid with proper aspect ratios and shadow treatment
4. Create the orange CTA banner with floating decorative elements
5. Add feature cards with iconography and four-column responsive behavior
6. Polish with footer, navigation, and micro-interactions

### Accessibility
- Ensure action orange on white meets minimum contrast for large text; pair with ink for small text
- Provide visible focus states on pill buttons, likely an inset ring or offset outline
- Maintain logical tab order through the hero CTAs before screenshot grid
- Add aria-labels to decorative chat bubbles in the CTA banner
- Consider reduced-motion preferences for any floating or parallax elements

## Scope note

This guide covers the marketing homepage surface visible in the supplied captures. Interior pages, search results, authentication flows, and the actual product interface are not represented. Motion behavior, hover states, and mobile-specific layouts are inferred from static images and should be validated in implementation. Measurements are drawn from retained interface data where available.
