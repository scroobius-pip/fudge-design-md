# How inkeep.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/inkeep.com-design)

Last updated: 2026-08-10

## Captured pages

[![Blog article page with blue gradient hero card, author bio, and serif body text on warm off-white background](https://pin.fontofweb.com/3766?format=jpg)](https://design.withfudge.com/share/pin-3766)

[Blog article page with blue gradient hero card, author bio, and serif body text on warm off-white background](https://design.withfudge.com/share/pin-3766)

[![Blog index with centered display heading, category filter pills, and featured post card with split content-image layout](https://pin.fontofweb.com/3765?format=jpg)](https://design.withfudge.com/share/pin-3765)

[Blog index with centered display heading, category filter pills, and featured post card with split content-image layout](https://design.withfudge.com/share/pin-3765)

[![Footer with multi-column navigation, email subscription form, and floating Ask AI pill button on gradient background](https://pin.fontofweb.com/3764?format=jpg)](https://design.withfudge.com/share/pin-3764)

[Footer with multi-column navigation, email subscription form, and floating Ask AI pill button on gradient background](https://design.withfudge.com/share/pin-3764)

[![Demo scheduling page with bold display heading, trust logos row, and minimal form with pill-shaped submit button](https://pin.fontofweb.com/3763?format=jpg)](https://design.withfudge.com/share/pin-3763)

[Demo scheduling page with bold display heading, trust logos row, and minimal form with pill-shaped submit button](https://design.withfudge.com/share/pin-3763)

## Overview

Inkeep presents a technical brand identity that balances editorial sophistication with product clarity. The system rests on three material choices: a warm off-white canvas that avoids sterile gray coolness, an electric blue accent family for interactive energy, and a deliberate type pairing between a precise Swiss grotesk and a readable serif. The result feels like a modern engineering journal—credible, approachable, and intentionally crafted.

The visual hierarchy is established through scale contrast rather than weight alone. Display headings at hero scale command attention with tight leading and negative tracking, while body content relaxes into comfortable serif paragraphs. Color is used strategically: blue appears as gradient washes in hero cards, as text for links and labels, and as fill for primary actions, but never overwhelms the warm neutral ground. The overall impression is of a company that builds serious infrastructure while communicating with human warmth.

## Colors

| token | value | use |
|---|---|---|
| canvas | `#F6F6F0` | Primary page background; warm off-white with subtle yellow undertone |
| surface | `#FFFFFF` | Card backgrounds, input fields, elevated panels |
| ink | `#1A1A1A` | Primary text, headings, logo mark |
| muted-ink | `#6B6B6B` | Secondary text, captions, metadata, placeholder text |
| action | `#3B82F6` | Links, primary buttons, active states, gradient start |
| action-hover | `#2563EB` | Button hover, link hover, focus indicators |
| accent-warm | `#F5F5DC` | Subtle warm tint for secondary surfaces, button fills |
| border-subtle | `#E5E5E0` | Card borders, dividers, input underlines |

The color system operates in a light mode only across the visible surfaces. The warm canvas (`#F6F6F0`) distinguishes Inkeep from cooler gray competitors and harmonizes with the blue accent family. Blue functions as the sole chromatic accent, appearing in gradients that range from saturated `#3B82F6` through lighter `#93C5FD` for hero cards and visual interest areas. Text hierarchy uses ink for maximum contrast on light surfaces, with muted-ink reserved for de-emphasized content like dates, author metadata, and placeholder text. The accent-warm token captures the cream-tinted button surfaces seen in secondary actions, providing a gentle alternative to pure white without introducing a second hue.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Neue Haas Grotesk Display Pro-65 Medium | 3.5rem | 500 | 1.05 | -0.02em | Page titles, major section headings |
| section-display | Neue Haas Grotesk Display Pro-65 Medium | 2.5rem | 500 | 1.1 | -0.01em | Section headings, card titles |
| body | Noto Serif | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, long-form content |
| body-large | Noto Serif | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, featured post excerpts |
| label | Jet Brains Mono | 0.75rem | 400 | 1.4 | 0.04em | Tags, buttons, category labels, metadata |
| navigation | Neue Haas Grotesk Display Pro-45 Light | 0.875rem | 400 | 1.3 | 0.01em | Nav links, footer columns, form labels |

The type system pairs two distinct voices. Neue Haas Grotesk Display Pro-65 Medium handles all display and interface text with confident neutrality. Its tight tracking and crisp forms convey technical precision. Neue Haas Grotesk Display Pro-45 Light serves navigation and supporting interface text at smaller sizes. Noto Serif provides editorial warmth for body content, with comfortable leading that supports extended reading. Jet Brains Mono appears exclusively at small scale for labels, tags, and button text, reinforcing the engineering culture without becoming decorative.

All font sizes are whole-number multiples of the 4px relative unit. Verify licensing for these families before production use. Neue Haas Grotesk Display Pro is designed by Christian Schwartz and available from Linotype GmbH. Jet Brains Mono is designed by Philipp Nurullin and Konstantin Bulenkov from JetBrains. Noto Serif is designed by the Monotype Design Team.

## Layout

The layout system favors centered single-column compositions for marketing pages, with generous horizontal padding that creates breathing room around content. Maximum content width appears to be approximately 1200px, centered with auto margins. Sections stack vertically with substantial gap—typically 6rem between major content blocks.

The blog index demonstrates a split-card pattern: featured content occupies a two-column card with text on the left and imagery on the right, maintaining equal vertical padding. Category filters appear as a horizontal row of text links centered below the section header, with even spacing between items.

The demo page uses an asymmetric two-column layout: persuasive content and trust indicators occupy the left approximately 55% of the width, while the form occupies the right 45%. This creates a natural reading flow from headline through explanation to conversion action.

Footer layout spans full width with a multi-column grid: logo and tagline left-aligned, four navigation columns with category headers, and a right-aligned social links column. Below this, a secondary bar contains location text, email subscription input, and floating action buttons.

Spacing follows a 4px base unit. Common increments include 0.5rem for tight internal gaps, 1.5rem for content element separation, 2rem for card padding, and 6rem for section breaks. Border radius is 0.75rem for cards and panels, 9999px for pill buttons, and 0.5rem for smaller input elements.

## Visual language

The visual language communicates technical competence through restraint. Photography and illustration are used sparingly; when present, imagery sits within rounded containers or as background gradients. The blue gradient hero card is a signature element—sweeping from deep to light blue with white text and logo overlay, it creates immediate brand recognition without relying on stock photography.

Iconography appears minimal and functional. External links use a diagonal arrow (↗) in text size. Form submit buttons pair text with a right arrow (→). The floating Ask AI button in the footer uses a chat bubble icon, establishing persistent access to conversational help.

Shadow is used subtly, if at all. Elevation is communicated primarily through background color shifts between canvas and surface, with occasional soft shadows on floating elements like the Ask AI pill. The overall effect is flat but layered, appropriate for a developer-facing product.

Texture appears in the form of soft gradient backgrounds that suggest depth without complexity. These gradients avoid harsh transitions, using long color stops that blend smoothly across large areas.

## Components

### Navigation header
- **Anatomy**: Logo mark left, navigation links center-right, primary action button far right
- **Surface**: Transparent over canvas, becoming surface on scroll
- **Typography**: Navigation token for links
- **Spacing**: 1.5rem vertical padding, 2rem horizontal page margins

### Category filter
- **Anatomy**: Horizontal row of text links
- **Typography**: Label token, uppercase or small caps treatment
- **Spacing**: 2rem gap between items
- **States**: Active item uses action color; inactive uses muted-ink

### Featured post card
- **Anatomy**: Two-column layout with text content left, imagery right
- **Surface**: Surface background, border-subtle border, panel radius
- **Typography**: Label token for "FEATURED POST" tag; section-display for title; body for excerpt; label for date and author
- **Spacing**: 2rem internal padding
- **Composition**: 50/50 split at desktop, imagery fills right half with object-fit cover

### Gradient hero card
- **Anatomy**: Full-width rounded container with centered content
- **Surface**: Linear gradient from action through lighter blues
- **Typography**: White text, display scale for headline
- **Shape**: Panel radius corners
- **Spacing**: 4rem vertical padding

### Author bio
- **Anatomy**: Circular avatar image, name in navigation weight, description in body
- **Surface**: Transparent on canvas
- **Typography**: Navigation token for name; body at reduced size for bio text
- **Spacing**: 1rem gap between avatar and text block

### Form minimal
- **Anatomy**: Stacked label-input pairs with submit button
- **Surface**: Transparent inputs with bottom border only
- **Typography**: Navigation token for labels in uppercase; body for input text
- **Shape**: No radius on inputs; pill radius on submit
- **Spacing**: 2rem gap between fields

### Primary button
- **Anatomy**: Text with optional icon, full pill shape
- **Surface**: Action background, surface text
- **Typography**: Label token, uppercase
- **Shape**: Pill radius
- **Spacing**: 0.75rem vertical, 1.5rem horizontal padding

### Secondary button
- **Anatomy**: Text with optional icon, outlined or filled warm
- **Surface**: Surface or accent-warm background, ink text, border-subtle border
- **Typography**: Label token
- **Shape**: Pill radius

### Footer
- **Anatomy**: Logo, multi-column links, social links, subscription bar, floating action
- **Surface**: Canvas background with subtle gradient toward surface at bottom
- **Typography**: Navigation token for column headers; body for links
- **Spacing**: 4rem top padding, 2rem bottom padding

### Floating action
- **Anatomy**: Pill button with icon and text, fixed or sticky positioned
- **Surface**: Surface background, border-subtle border, subtle shadow
- **Typography**: Label token
- **Shape**: Pill radius

## Responsive behavior

The system should maintain single-column stacking for all components below approximately 768px viewport width. The featured post card should collapse to full-width stacked layout with image above text. The demo page two-column layout should stack with form below persuasive content.

Navigation should collapse to a hamburger menu or simplified logo-plus-action pattern on mobile. Category filters should remain horizontally scrollable rather than wrapping, preserving the horizontal rhythm.

Font sizes should scale down by approximately 15% on mobile: hero-display to 3rem, section-display to 2rem. Body text remains at 1rem for readability. Section spacing should reduce to 4rem on mobile to maintain density without crowding.

The floating Ask AI button should remain visible and accessible at all viewport sizes, potentially shifting from fixed bottom-right to inline in the footer on very small screens.

## Practical implementation guidance

### Preserve
- The warm off-white canvas against pure white card surfaces; this subtle temperature shift defines the brand
- The grotesk-serif type pairing; neither family should be replaced with generic alternatives
- The electric blue as sole chromatic accent; resist adding secondary brand colors
- The generous whitespace and restrained component density
- The uppercase mono labels for tags, buttons, and metadata

### Avoid
- Cool gray backgrounds that contradict the warm canvas
- Drop shadows heavier than 0 4px 6px rgba(0,0,0,0.05)
- Rounded corners larger than 0.75rem on rectangular elements
- Multiple font weights beyond the specified Light/Regular/Medium set
- Decorative gradients that compete with the signature blue hero treatment

### Recommended build order
1. Establish the canvas and surface color variables with the warm off-white values
2. Implement the type system with Neue Haas Grotesk Display Pro-65 Medium for headings and Noto Serif for body
3. Build the card component with panel radius and border-subtle
4. Create the gradient hero card as the primary visual signature
5. Implement form patterns with minimal underline inputs
6. Add the floating action button for persistent conversion
7. Polish with category filters, author bios, and footer grid

### Accessibility
- Ensure blue action text on white maintains minimum 4.5:1 contrast ratio; the specified `#3B82F6` achieves this
- Provide visible focus states using action color with 2px outline offset
- Maintain touch targets of at least 44px for all interactive elements
- Use semantic heading hierarchy: single h1 per page, logical progression through h2-h4
- Ensure gradient hero cards have sufficient text contrast; white on the specified gradient passes WCAG AA
- Provide aria-labels for icon-only buttons like the floating Ask AI action

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: homepage, blog index, blog article, and demo scheduling page. Product interface, documentation, and dashboard surfaces are not represented. Interactive states including hover, focus, loading, and disabled are inferred from static images and should be validated in implementation. Motion, animation, and mobile-specific layouts are not documented. Measurements are practical adaptation targets.
