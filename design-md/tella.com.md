# How tella.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tella.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page with purple Pro card and dark Premium card showing yearly toggle switches and feature lists](https://pin.fontofweb.com/6354?format=jpg)](https://design.withfudge.com/share/pin-6354)

[Pricing page with purple Pro card and dark Premium card showing yearly toggle switches and feature lists](https://design.withfudge.com/share/pin-6354)

[![Features grid on purple gradient background with app icons for Auto Layouts, Auto Cut, Studio Voice, and platform downloads](https://pin.fontofweb.com/6353?format=jpg)](https://design.withfudge.com/share/pin-6353)

[Features grid on purple gradient background with app icons for Auto Layouts, Auto Cut, Studio Voice, and platform downloads](https://design.withfudge.com/share/pin-6353)

[![Hero section with large display type reading Record incredible videos on vibrant purple gradient with video preview below](https://pin.fontofweb.com/6352?format=jpg)](https://design.withfudge.com/share/pin-6352)

[Hero section with large display type reading Record incredible videos on vibrant purple gradient with video preview below](https://design.withfudge.com/share/pin-6352)

[![Footer CTA with sky photography background, purple action button, and dark footer with multi-column link navigation](https://pin.fontofweb.com/6351?format=jpg)](https://design.withfudge.com/share/pin-6351)

[Footer CTA with sky photography background, purple action button, and dark footer with multi-column link navigation](https://design.withfudge.com/share/pin-6351)

## Overview

Tella's design system is built around a bold, energetic personality that communicates creative empowerment. The visual language pairs a distinctive, tightly-tracked display typeface with a clean, utilitarian sans-serif for interface text. The signature purple gradient dominates the marketing experience, shifting from deep violet to bright lavender across hero sections and feature areas. This gradient treatment creates immediate brand recognition while supporting the product's positioning as a modern, AI-enhanced video tool.

The system operates across two primary modes: vibrant gradient surfaces for marketing and acquisition, and clean white or near-white surfaces for functional content like pricing. Dark surfaces appear selectively for premium positioning and footer areas. Component design favors rounded rectangles with generous padding, creating friendly, approachable forms that contrast with the precise geometry of the typography. The overall effect is confident and contemporary—professional without being corporate, expressive without sacrificing clarity.

## Colors

| token | value | use |
|---|---|---|
| action | #5E51F8 | Primary buttons, Pro pricing card background, gradient endpoints |
| action-light | #8278FA | Gradient highlights, hover states, secondary purple accents |
| accent-purple | #9B32E6 | Deep gradient tones, decorative purple variations |
| accent-cyan | #ADE0FF | Soft gradient backgrounds, sky-like atmospheric effects |
| accent-lavender | #DEC8FF | Gradient mid-tones, decorative text effects |
| ink | #0F172A | Primary headings on light surfaces, darkest text |
| ink-secondary | #172133 | Premium card background, dark UI surfaces |
| ink-muted | #475569 | Secondary text, descriptions, footer links |
| canvas | #FFFFFF | Primary background, card text on dark surfaces |
| surface | #F8FAFC | Subtle off-white backgrounds, pricing page base |
| surface-warm | #F9F9FA | Warm neutral backgrounds, subtle surface variation |
| surface-dark | #222222 | Primary dark buttons, dark UI elements |
| surface-darker | #282432 | Deep gradient endpoints, premium dark accents |
| border | #808A99 | Subtle dividers, muted interface elements |

The color strategy centers on a vibrant purple family that serves as the brand's immediate identifier. The action purple (#5E51F8) anchors the system, appearing in primary buttons, the Pro pricing tier, and as the dominant gradient color. A lighter variant (#8278FA) provides gradient lift and hover energy. Dark surfaces use ink-secondary (#172133) for premium positioning, seen in the Premium pricing card and footer areas.

Light mode dominates functional pages with canvas white and subtle surface grays. Dark text on these surfaces uses the ink family, with muted tones for secondary information. Gradient applications range from full-bleed purple backgrounds to soft radial glows that create atmospheric depth. The accent-cyan and accent-lavender appear in decorative gradients, particularly in CTA sections with sky photography, where they blend with photographic content.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Na N Jaune | 5.25rem | 400 | 1.1 | -0.0357em | Homepage hero headlines, major page titles |
| section-display | Na N Jaune | 3.5rem | 400 | 1.2 | -0.0536em | Section headings, feature titles |
| feature-heading | Inter | 1.75rem | 500 | 1.5 | 0em | Subsection headings, card titles |
| body | Inter | 1rem | 500 | 1.5 | 0em | Primary body text, descriptions |
| body-large | Inter | 1.25rem | 500 | 1.95 | 0em | Lead paragraphs, pricing descriptions |
| body-small | Inter | 0.875rem | 500 | 1.6 | 0em | Secondary descriptions, metadata |
| label | Inter | 0.75rem | 500 | 1.5 | 0em | Captions, trial notices, fine print |
| navigation | Inter | 0.875rem | 600 | 1.6 | 0em | Navigation links, button labels |
| legal-copy | Inter | 0.75rem | 500 | 1.5 | 0em | Footer text, legal information |

The typographic system pairs two distinct personalities: Na N Jaune for expressive display moments and Inter for all functional interface text. Na N Jaune appears exclusively in large sizes with tight negative tracking, creating impactful headlines that feel contemporary and slightly playful. The display face is used sparingly—only for hero and section headings—preserving its visual power.

The supplied font families are Inter, Na N Jaune-Midi Bold, Na N Jaune-Midi Regular, and System-Sansserif. Na N Jaune-Midi Bold and Na N Jaune-Midi Regular are the specific weights used for the display face, with Na N Jaune-Midi Bold serving the hero-display and section-display roles. System-Sansserif appears in the source at 12px for small UI labels and system-generated text. Inter handles everything else with a medium weight (500) default, shifting to semibold (600) for navigation and button labels. The type scale is restrained, with body sizes clustering around 14-16px and display sizes jumping to 56-84px. Line heights are compact for display (1.1-1.2) and generous for body (1.5-1.95), ensuring readability without looseness.

Verify licensing for these families before production use. Na N Jaune is designed by Jeremy Landes Studio Triple and distributed by Jeremy Landes Na N.

## Layout

The layout system uses a generous horizontal padding of 2.5rem (40px) for section containers, creating breathing room around content. Vertical section spacing is expansive at 10.5rem (168px), establishing dramatic rhythm between content blocks. This generous whitespace is a defining characteristic—sections feel distinct and unhurried.

Content typically centers within a max-width container, with hero sections occasionally breaking to full-bleed gradients. The pricing page demonstrates a two-column asymmetric layout where the Pro card overlaps and extends beyond the Premium card, creating visual hierarchy through dimensional layering. Feature grids use three or four columns with consistent gaps, while app download rows spread across the available width.

Card-based layouts dominate component organization. Feature cards, pricing cards, and platform download items all share rounded rectangular forms with internal padding of 1.5-2rem. The navigation bar is minimal and centered, with logo left-aligned and utility actions right-aligned. Footer areas use multi-column link grids with clear category headings, maintaining the spacious padding of other sections.

## Visual language

The visual language is defined by gradient richness and rounded softness. Purple gradients flow across hero backgrounds with subtle noise texture, creating depth without photographic dependency. These gradients shift from deep violet through bright lavender to soft cyan at atmospheric edges, suggesting creative energy and digital fluency.

Photography appears selectively—sky imagery in CTA sections, product screenshots in feature cards, video previews in hero areas. When photography appears, it integrates with gradient overlays rather than competing with them. The sky photography in the footer CTA blends seamlessly with the cyan-tinted gradient above.

Shape language favors continuous rounding: buttons at 12px, cards at 24px, panels at 32px. Pill shapes appear for small badges and toggles. Shadows are subtle and layered, using multiple stacked values to create soft elevation without harsh edges. The inset white highlight on dark buttons adds dimensional refinement.

Iconography is simple and functional, appearing as small app icons in feature grids and checkmarks in pricing lists. The overall decorative approach is restrained—visual interest comes from color and typography rather than ornament.

## Components

### Navigation bar

- **Anatomy**: Logo left, centered text links (Features, Resources, Pricing), right-aligned Log in text and Sign up button
- **Surface**: Transparent over gradients, white background on functional pages
- **Typography**: Navigation token for links, label token for active states
- **Spacing**: Compact vertical padding, generous horizontal section padding
- **Composition**: Flex row with space-between alignment

### Primary action button

- **Anatomy**: Text label centered within rounded rectangle
- **Surface**: Dark background (#222222) with subtle layered shadow and inset white highlight
- **Typography**: Navigation token, white text
- **Shape**: 12px border radius
- **Spacing**: 16px vertical, 48px horizontal padding
- **Variants**: Purple background variant for secondary prominence

### Hero section

- **Anatomy**: Display headline, supporting description, primary action button, trial notice, media preview
- **Surface**: Full-bleed purple gradient background with subtle texture
- **Typography**: Hero-display token for headline, body-large for description, label for trial notice
- **Shape**: Media preview with rounded corners (24-32px)
- **Spacing**: Generous vertical padding (168px top), centered alignment
- **Composition**: Stacked center alignment with media below text

### Feature card

- **Anatomy**: Icon or screenshot, title, description
- **Surface**: Semi-transparent white (rgba(255,255,255,0.1)) with backdrop blur on purple backgrounds
- **Typography**: Feature-heading for title, body-small for description
- **Shape**: 24px border radius
- **Spacing**: Internal padding 24-32px

### Pricing card

- **Anatomy**: Tier badge, yearly toggle, price display, feature list with checkmarks, action button, secondary link
- **Surface**: Pro card uses action purple; Premium card uses ink-secondary dark
- **Typography**: Section-display for price numbers, body for features, navigation for button
- **Shape**: 32px border radius, full card rounding
- **Spacing**: 32px internal padding, 120px vertical padding for header area
- **Composition**: Asymmetric two-card layout with Pro card elevated and overlapping

### Footer

- **Anatomy**: Logo, multi-column link grid, social icon
- **Surface**: Dark background (ink-secondary)
- **Typography**: Navigation token for column headers, body-small for links
- **Spacing**: Generous vertical padding, consistent column gaps
- **Composition**: Four-column grid for links, full-width top border from CTA section above

## Responsive behavior

The design appears optimized for desktop viewing with generous fixed widths. Key responsive considerations include:

- Hero headlines should scale down on smaller viewports, maintaining line breaks that preserve meaning
- The asymmetric pricing card layout should stack vertically on narrow screens, with Pro card remaining prominent on top
- Feature grids should collapse from four columns to two, then single column
- Navigation should condense to a hamburger menu or simplified logo-plus-action pattern
- Footer link columns should stack to two columns, then single column with category accordions
- Gradient backgrounds should maintain their character across aspect ratios, with radial focal points shifting to remain centered

Touch targets should maintain minimum 44px height for all interactive elements. The generous button padding already supports this.

## Practical implementation guidance

### Preserve
- The distinctive pairing of Na N Jaune display type with Inter functional text
- Generous section spacing (168px vertical) as a core brand characteristic
- Purple gradient identity with specific #5E51F8 to #8278FA range
- Asymmetric pricing card elevation with overlapping layers
- Subtle layered shadows with inset highlights on dark buttons
- Semi-transparent card surfaces with backdrop blur over gradients

### Avoid
- Adding decorative elements that compete with gradient backgrounds
- Using Na N Jaune at small sizes or for body text
- Tightening section spacing below 120px vertical
- Pure black backgrounds instead of the warmer ink-secondary
- Sharp corners on primary components—maintain the rounded system
- Saturated purple text on purple backgrounds—use white or very light lavender

### Recommended build order
1. Establish gradient background system with noise texture overlay
2. Implement typography scale with Na N Jaune loading strategy
3. Build navigation with transparent and white variants
4. Create button component with layered shadow system
5. Develop hero section with centered composition
6. Build feature card with glassmorphism treatment
7. Implement pricing cards with asymmetric layout
8. Construct footer with dark surface and link grid

### Accessibility
- Ensure white text on purple gradients meets WCAG AA contrast; the vibrant purple may need darkening for small text
- Provide text alternatives for all feature card icons and screenshots
- Maintain keyboard focus visibility on gradient backgrounds with offset rings
- Respect reduced-motion preferences for any gradient animations
- Use semantic heading hierarchy despite visual styling—Na N Jaune headlines should map to h1-h2 levels appropriately

## Scope note

This guide covers the marketing homepage and pricing page surfaces visible in the supplied images. Mobile breakpoints, interactive states beyond static hover, loading skeletons, error pages, and the authenticated application interface are not represented. The design system documentation for component variants, motion specifications, and form patterns would require additional exploration.
