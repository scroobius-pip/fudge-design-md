# How concepts.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/concepts.app-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with dark background, centered tagline, blue download button, four-column link grid, social icons, and copyright text](https://pin.fontofweb.com/2517?format=jpg)](https://design.withfudge.com/share/pin-2517)

[Footer section with dark background, centered tagline, blue download button, four-column link grid, social icons, and copyright text](https://design.withfudge.com/share/pin-2517)

[![Pricing page with three-tier column layout showing Basic, Pro, and Teams plans with purple accent labels and blue store links](https://pin.fontofweb.com/2516?format=jpg)](https://design.withfudge.com/share/pin-2516)

[Pricing page with three-tier column layout showing Basic, Pro, and Teams plans with purple accent labels and blue store links](https://design.withfudge.com/share/pin-2516)

[![Use-case gallery with horizontal filter pills, two-column testimonial cards with architectural sketches and handwritten notes imagery](https://pin.fontofweb.com/2515?format=jpg)](https://design.withfudge.com/share/pin-2515)

[Use-case gallery with horizontal filter pills, two-column testimonial cards with architectural sketches and handwritten notes imagery](https://design.withfudge.com/share/pin-2515)

[![Feature grid with nine icon-driven capabilities arranged in three rows, each with purple line-art icons on dark background](https://pin.fontofweb.com/2514?format=jpg)](https://design.withfudge.com/share/pin-2514)

[Feature grid with nine icon-driven capabilities arranged in three rows, each with purple line-art icons on dark background](https://design.withfudge.com/share/pin-2514)

## Overview

Concepts App presents itself as a dark-mode creative-tool marketing experience built around the promise of infinite, flexible sketching. The visual system trades in high contrast: an unapologetic black canvas against crisp white typography, with electric purple and blue serving as the only chromatic relief. This restraint creates a gallery-like atmosphere where architectural sketches, handwritten notes, and interface screenshots become the true color fields. The design language is confident and minimal—every element earns its place through clear hierarchy rather than decorative excess. Geometric line-art icons in purple trace the contours of each feature, while the typographic system relies on a single family, Inter Tight, deployed across a narrow range of weights and sizes. The overall impression is of a professional tool that respects the creative process: it gets out of the way, provides clear navigation, and lets the work speak.

## Colors

The palette is severely limited by design, functioning as a stage for user-generated content rather than competing with it.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, footer ground, feature grid ground |
| surface | #1a1a1a | Elevated panels, filter pill backgrounds, subtle card differentiation |
| ink | #ffffff | Primary headings, active filter pills, button text, footer headings |
| muted-ink | #b3b3b3 | Body copy, descriptions, testimonial quotes, pricing details |
| accent | #8b5cf6 | Feature category labels, decorative line-art icons, pricing tier badges |
| action | #3b82f6 | Primary buttons, inline links, store references, footer navigation |
| action-hover | #60a5fa | Lighter blue for interactive hover states |

The relationship between colors follows a strict value scale. Black and near-black establish depth, white provides maximum contrast for scanning, and the two accent hues—purple and blue—never compete for attention. Purple owns the brand expression: it appears in static decorative moments like feature icons and pricing labels. Blue owns the interactive layer: every path to action, from downloading to visiting a store to navigating the footer, flows through this hue. The muted gray serves as the workhorse for readable paragraphs, deliberately stepping back so that user imagery and screenshots can advance. No gradients appear in the interface; no shadows model depth. The flatness is intentional, matching the two-dimensional nature of the sketching tool itself.

## Typography

The entire typographic system rests on Inter Tight, a geometric sans-serif designed by Rasmus Andersson and distributed by Rsms. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter Tight | 2.5rem | 700 | 1.1 | -0.02em | Page-level headlines, major section titles |
| section-display | Inter Tight | 2rem | 700 | 1.2 | -0.01em | Subsection headings, pricing questions |
| body | Inter Tight | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, testimonials |
| body-small | Inter Tight | 0.875rem | 400 | 1.5 | 0em | Secondary details, captions, fine print |
| label | Inter Tight | 0.75rem | 600 | 1.4 | 0.05em | Category badges, uppercase labels |
| navigation | Inter Tight | 0.875rem | 500 | 1.5 | 0em | Footer links, store references, UI navigation |

The type scale is built on a 4px relative unit, with every size landing on a whole-number multiple: 12px, 14px, 16px, 32px, 40px. Tight negative tracking on display sizes gives headlines a contemporary, engineered feel without becoming compressed. The single-family approach reinforces the tool's focus: no decorative serifs, no expressive alternates, just clarity. Weight differentiation is minimal—Regular for reading, Medium for navigation, Semibold for labels, Bold for display—creating a system that is easy to implement and harder to break.

## Layout

The layout follows a centered, contained model with generous vertical breathing room. Major sections stack with substantial separation, typically 6rem between distinct content blocks. Content lives within a maximum width container, approximately 1200px, keeping line lengths comfortable and maintaining focus on the center of the viewport.

Horizontal rhythm relies on a consistent grid gap of 2rem for multi-column arrangements. The pricing page deploys a three-column grid for tier comparison, while the feature capabilities use a three-by-three grid that reads left-to-right, top-to-bottom. Testimonials and use-case imagery favor a two-column asymmetric layout: one large image paired with a quote, or two images of differing aspect ratios creating visual tension.

The filter pill row on the use-case section demonstrates a horizontal scroll or wrap pattern, with pills sitting shoulder-to-shoulder with only their internal padding separating them. This compact clustering contrasts with the open vertical spacing elsewhere, creating a moment of density that invites interaction.

Footer organization spreads across four equal columns for link categories, then compresses to a single column for legal text and language selection. Social icons sit in their own row with ample surrounding space, treated as graphic elements rather than textual navigation.

## Visual language

The visual language of Concepts App is defined by restraint and precision. Every decorative element serves a communicative purpose. The purple line-art icons that accompany each feature are not merely illustrative—they establish a consistent graphic vocabulary of curves, arrows, and geometric forms that echo the drawing tools being marketed. These icons are thin, uniform in stroke weight, and never filled, maintaining the sketch-like quality of the product.

Photography and user content receive no frames, shadows, or borders. They sit directly on the black canvas, their natural edges providing all necessary containment. This treatment makes the interface feel like a continuous surface rather than a collection of discrete objects. When images appear in pairs, they are often mismatched in proportion—one vertical, one horizontal—creating dynamic compositions that prevent grid monotony.

The absence of gradients, glassmorphism, or layered shadows is notable. Depth is suggested only through spacing and scale, not through simulated material properties. This flatness aligns with the product's identity as a two-dimensional creative space. The only rounded elements are functional: pills for filters, modest corners for buttons. Even these are restrained, with the pill shape serving as the single instance of extreme radius.

## Components

### Primary Action Button

- **Anatomy**: Text label centered within a solid rectangular container
- **Surface**: Background `{colors.action}`, text `{colors.ink}`
- **Typography**: `{typography.label}` with uppercase treatment
- **Shape**: Border radius `{rounded.button}`, no border
- **Spacing**: Padding 0.75rem vertical, 1.5rem horizontal
- **Composition**: Centered within its container, often standing alone below a headline
- **Variants**: Default state only visible; hover should shift toward `{colors.action-hover}`

### Filter Pill

- **Anatomy**: Text label within a fully rounded container
- **Surface**: Default uses `{colors.surface}` with `{colors.muted-ink}` text; active state inverts to `{colors.ink}` background with `{colors.canvas}` text
- **Typography**: `{typography.body-small}`
- **Shape**: Full pill radius `{rounded.pill}`
- **Spacing**: Padding 0.5rem vertical, 1rem horizontal; pills sit adjacent with no gap
- **Composition**: Horizontal row, centered or left-aligned below a section title
- **Variants**: Inactive and active states visible; active state provides maximum contrast

### Feature Card

- **Anatomy**: Icon graphic above heading above description paragraph
- **Surface**: Transparent, sitting directly on `{colors.canvas}`
- **Typography**: Heading uses `{typography.section-display}` at reduced 1rem size; body uses `{typography.body}`
- **Shape**: No border, no background, no radius
- **Spacing**: Internal padding 1.5rem; icon sits 1rem above heading
- **Composition**: Grid cell, three columns at desktop
- **Variants**: Nine distinct instances with unique icons but identical structure

### Testimonial Card

- **Anatomy**: Full-bleed image above quotation paragraph above attribution
- **Surface**: Image sits unframed; text on `{colors.canvas}`
- **Typography**: Quote uses `{typography.body}`; attribution uses `{typography.body-small}` with muted weight
- **Shape**: Image corners at `{rounded.card}`
- **Spacing**: Image flush to card edge, text padding 1.5rem below
- **Composition**: Two-column grid with asymmetric image heights
- **Variants**: Architecture, illustration, note-taking, and other discipline variants

### Pricing Tier

- **Anatomy**: Tier name, subtitle, price category label, description, price, store links
- **Surface**: Transparent on `{colors.canvas}`
- **Typography**: Tier name in `{typography.section-display}` at 1.5rem; category label in `{typography.label}` with `{colors.accent}`; price in `{typography.body}` with heavier weight
- **Shape**: No containing card, no border
- **Spacing**: Generous internal vertical rhythm, approximately 1.5rem between major elements
- **Composition**: Three equal columns with aligned tops
- **Variants**: Basic, Pro, Teams; Pro and Teams include nested subsections for purchase types

### Footer

- **Anatomy**: Tagline, action button, four link columns, social icons, copyright, legal, language selector
- **Surface**: `{colors.canvas}` throughout
- **Typography**: Column headings in `{typography.section-display}` at 1rem; links in `{typography.navigation}` with `{colors.action}`; legal in `{typography.body-small}` with `{colors.muted-ink}`
- **Shape**: No borders, no dividers
- **Spacing**: 6rem above tagline, 4rem below button before columns, 3rem below columns before social icons
- **Composition**: Centered tagline and button, then left-aligned four-column grid, then centered social row, then full-width legal block
- **Variants**: Single layout visible across all states

## Responsive behavior

The design assumes a desktop-first presentation with clear opportunities for adaptation. The three-column pricing grid should collapse to a single column on narrow viewports, with each tier becoming a full-width card separated by horizontal rules or increased vertical spacing. The feature grid's three-by-three arrangement should shift to two columns on tablet and single column on mobile, maintaining the icon-heading-body stacking.

The two-column testimonial layout presents a natural breakpoint: at narrower widths, the asymmetric image pairs should stack vertically, with each image followed by its associated quote. This preserves the narrative flow without requiring horizontal scrolling.

Filter pills should wrap to multiple lines rather than scroll horizontally, as the compact pill design accommodates multi-line presentation gracefully. The footer columns should collapse sequentially: four to two to one, with category headings becoming accordion triggers if space becomes severely constrained.

Touch targets for buttons and pills should maintain minimum 44px height even as horizontal padding adjusts. The generous line heights in the typographic system already support this without modification.

## Practical implementation guidance

### Preserve
- The absolute black canvas; any lightening destroys the gallery effect
- The single-family typographic system; introducing a second family fractures the tool-like clarity
- The purple-blue accent separation: purple for brand expression, blue for interaction
- The unframed, shadowless image treatment; user content must feel native to the surface
- The geometric line-art icon style; filled or illustrative icons would contradict the sketching metaphor

### Avoid
- Adding background colors or borders to feature cards; the current transparency is intentional
- Using gradients or shadows to create depth; the flatness is a core aesthetic commitment
- Expanding the color palette beyond the established seven tokens; additional hues compete with user imagery
- Reducing the generous section spacing; the vertical rhythm is essential to the premium feel
- Using the accent purple for interactive elements; this would confuse the established action color convention

### Recommended Build Order
1. Establish the black canvas and white ink foundation with Inter Tight loaded at all required weights
2. Implement the type scale with exact sizes and tracking values
3. Build the primary action button and filter pill components as the most reused interactive elements
4. Construct the feature grid with placeholder icons matching the thin purple line-art style
5. Develop the pricing tier layout with its three-column structure and nested content hierarchy
6. Add the testimonial section with asymmetric image handling and quote typography
7. Implement the footer with its distinct vertical zones and four-column link organization
8. Apply responsive collapse rules, testing the single-column flow for all major sections

### Accessibility
- Ensure the blue action color against black meets WCAG AA contrast for normal text; the current `#3b82f6` should be verified at 16px and below
- Provide visible focus indicators that do not rely solely on color shift; consider outline or underline additions
- Maintain the generous line heights and paragraph spacing for readability at increased zoom levels
- Use semantic heading hierarchy despite the visual similarity of some sizes; the pricing category labels are visually small but should not displace proper heading structure
- Ensure interactive pills have sufficient touch target size when wrapping to multiple lines

## Scope note

This guide covers the marketing homepage and pricing page surfaces visible in the supplied images. Navigation header, mobile menu, form states, loading indicators, and in-app interface elements are not represented. Measurements are practical adaptation targets derived from the visible compositions.
