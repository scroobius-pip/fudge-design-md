# How subq.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/subq.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Two-column product comparison with API and Code cards, featuring a light lavender left panel with blue accent and a near-black right panel with cream text.](https://pin.fontofweb.com/9662?format=jpg)](https://design.withfudge.com/share/pin-9662)

[Two-column product comparison with API and Code cards, featuring a light lavender left panel with blue accent and a near-black right panel with cream text.](https://design.withfudge.com/share/pin-9662)

[![Early access request form page with dark charcoal form card, navigation header, and multi-column footer with monospace legal text.](https://pin.fontofweb.com/9659?format=jpg)](https://design.withfudge.com/share/pin-9659)

[Early access request form page with dark charcoal form card, navigation header, and multi-column footer with monospace legal text.](https://design.withfudge.com/share/pin-9659)

## Overview

Subquadratic's visual system establishes credibility through restraint and contrast. The design pairs a warm, paper-like cream canvas with near-black typography, creating an editorial atmosphere that feels more scholarly than corporate. Serif display type in Libre Baskerville anchors headlines with classical authority, while Manrope handles interface text with geometric clarity. A single vibrant blue accent cuts through the muted palette to mark actionable elements and differentiate product paths. The system operates in two modes: a light mode for general browsing with cream backgrounds and dark text, and an inverse mode for immersive product cards and forms where dark surfaces carry light content. This duality extends across the homepage's product comparison, the early access request flow, and the systematic footer architecture. Every element maintains sharp, unrounded corners except for subtle 2px radius on buttons, reinforcing a precision-engineered aesthetic appropriate for developer tooling and enterprise infrastructure.

## Colors

The palette is intentionally narrow, deriving its sophistication from value contrast rather than chromatic range. Warm neutrals dominate, with a single blue family providing functional accent.

| token | value | use |
|---|---|---|
| ink | #0F0E0D | Primary text, borders, button outlines, form backgrounds |
| ink-secondary | #1C1A17 | Inverse surfaces, dark card backgrounds, footer form fields |
| muted-ink | #6B6660 | Secondary text, input placeholders, subdued labels |
| canvas | #F0EDE8 | Page background, light text on dark surfaces, button text on filled buttons |
| surface | #E5E5E5 | Light card backgrounds, subtle dividers, inactive states |
| surface-inverse | #1C1A17 | Dark product cards, form containers, high-contrast sections |
| accent | #2D5BFF | Primary action buttons, product category labels, interactive highlights |
| accent-deep | #0834BC | Shadow tints, hover depth, subtle glow effects |
| border-light | #E5E5E5 | Card borders on light surfaces, hairline dividers |
| border-ink | #0F0E0D | Button borders, structural outlines, emphasis borders |

The light mode applies `canvas` as the global background with `ink` for all primary text. Product cards alternate between `surface` for the API offering and `surface-inverse` for the Code offering, with corresponding text inversion. The accent blue appears sparingly—on category labels, primary buttons, and subtle arrow indicators—never competing with the typographic hierarchy. A soft blue glow emanates from form elements using `accent-deep` at reduced opacity, creating depth without breaking the flat material language.

## Typography

Four families appear in the system: Libre Baskerville for editorial display, Manrope for interface and body text, Roboto Mono for technical labels and legal microcopy, and Applesystem as a fallback face in limited utility contexts. Libre Baskerville was designed by Pablo Impallari and Rodrigo Fuenzalida. Manrope was designed by Mikhail Sharanda. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Libre Baskerville | 2.75rem | 500 | 1.08 | -0.02em | Homepage section headlines |
| section-display | Libre Baskerville | 2.25rem | 400 | 1.55 | -0.02em | Product card titles, feature headers |
| page-title | Libre Baskerville | 2rem | 400 | 1.55 | normal | Page-level H1 headings |
| body | Manrope | 0.9375rem | 400 | 1.55 | normal | Paragraphs, descriptions, general content |
| body-large | Manrope | 1rem | 400 | 1.55 | normal | Emphasized body, form labels |
| label | Manrope | 0.875rem | 400 | 1.55 | normal | List items, secondary descriptions |
| navigation | Manrope | 0.875rem | 500 | 1.55 | -0.005em | Header links, nav items |
| button | Manrope | 0.8125rem | 600 | 1.55 | 0.02em | CTA buttons, form submit |
| mono-caption | Roboto Mono | 0.625rem | 400 | 1.55 | 0.1em | Legal microcopy, consent text |
| mono-label | Roboto Mono | 0.6875rem | 500 | 1.55 | 0.14em | Footer headings, category labels |

Libre Baskerville's weight 500 at hero scale creates substantial presence without heaviness, while its weight 400 at section scale maintains elegance. Manrope spans 400 through 600 weights, with semibold reserved exclusively for button text to signal action. Roboto Mono's tight sizing and generous letterspacing establish a technical, utilitarian voice for compliance and navigation labels. Applesystem appears at 14px in fallback contexts and does not drive the visual hierarchy. Line heights cluster tightly around 1.55 for Manrope and expand slightly for Libre Baskerville's larger sizes to preserve readability.

## Layout

The layout system centers content within generous margins, using fixed max-width containers that create breathing room around dense information. The base spacing unit is 0.125rem (2px), with all measurements building from this foundation.

Page gutters are set at 3.5rem (56px) horizontally, creating consistent side padding across header, section, and footer elements. Content containers max out at approximately 25.5rem (408px) for narrow forms and 51rem for wider sections, centering via auto margins. Vertical section spacing uses 4.5rem (72px) as the standard rhythm, with some sections compressing to 4rem (64px) for tighter information density.

The header employs a split composition: logo and navigation left-aligned, utility actions right-aligned, with 2rem (32px) gaps between navigation clusters. The product comparison section uses a strict two-column grid with equal-width cards, each receiving 2.75rem (44px) top and bottom padding with 2.5rem (40px) horizontal padding. Internal card spacing runs at 1.375rem (22px) between elements.

Form layouts stack vertically with identical 1.375rem gaps between fields. Input fields extend full-width within their container, using only bottom borders to minimize visual weight. The footer distributes across five columns with 2rem (32px) inter-column gaps, maintaining alignment with the page gutter system.

## Visual language

The aesthetic balances warmth against precision. The cream canvas avoids sterile white, lending an aged-paper quality that complements the serif typography. Sharp corners dominate—cards, inputs, and containers all terminate at 0px radius—creating a cut-paper, architectural feel. The sole exception is a 2px radius on buttons, softening interactive elements just enough to distinguish them from structural panels.

Contrast operates through value inversion rather than color complexity. The API product card rests on light lavender-gray with dark text; the Code card inverts to near-black with cream text. This binary rhythm extends to buttons: filled blue for primary actions, outlined dark for secondary. Arrows accompany button labels, always pointing right, reinforcing forward momentum.

Shadow appears only as a subtle blue glow around form cards, using the accent-deep color at 12% and 5% opacity layers to create atmospheric depth without material elevation. No drop shadows appear on static elements. Borders are hairline-precise at 1px, serving as structural delineation rather than decorative framing.

Imagery is absent from the interface itself; the visual story relies entirely on typography, spacing, and the two-mode surface system. The small logo mark uses a four-square grid in warm tones, providing the only non-typographic brand element in the header.

## Components

### Product comparison card

Anatomy: Header row with category title left and audience label right; horizontal rule; description paragraph; feature list with arrow bullets; CTA button at bottom.

Surface: Two variants exist. The light variant uses `surface` background with `ink` text and `border-light` right border. The dark variant uses `surface-inverse` background with `canvas` text. The API card shows the light variant; the Code card shows the dark variant.

Typography: Category title uses `section-display` in Libre Baskerville. Audience label uses `mono-label` in Roboto Mono, uppercase with wide tracking. Description and features use `body` in Manrope. Feature bullets prepend a small blue arrow.

Shape: Zero border radius. Right border on light variant at 1px solid. Internal horizontal rule at 1px, color matching text at reduced opacity.

Spacing: 2.75rem vertical padding, 2.5rem horizontal padding. 1.375rem gap between major zones. Feature list items stack with 0.75rem (12px) vertical padding each, separated by 1px borders.

Composition: Equal-width columns in a two-up grid. Cards share a container with no gap between them, creating a continuous surface broken only by the internal border.

Variants: Light (API) and inverse (Code). The light variant's CTA uses `cta-button-filled` with `accent` background. The inverse variant's CTA uses `cta-button-outline` with `canvas` border and text.

### Early access form

Anatomy: Stacked input fields for name, email, and product selection; submit button; consent microcopy below.

Surface: `surface-inverse` background with `canvas` text. Subtle blue glow shadow using `accent-deep` at reduced opacity.

Typography: Input labels use `body-large` in Manrope. Submit button uses `button` weight. Consent text uses `mono-caption` in Roboto Mono, centered, with `muted-ink` color.

Shape: Zero border radius on container. Input fields use `input-underline` style with only bottom borders.

Spacing: 2.75rem vertical padding, 2.5rem horizontal padding. 1.375rem gap between fields. Submit button receives 0.5rem top margin. Consent text has additional top margin for separation.

Composition: Narrow centered container, approximately 25.5rem maximum width, creating focused task completion.

### Navigation header

Anatomy: Logo mark and wordmark left; primary navigation center-left; utility CTA right.

Surface: Transparent background over `canvas` page. Navigation links use `ink` color.

Typography: Logo wordmark uses Libre Baskerville at 1.125rem weight 700. Navigation links use `navigation` in Manrope. CTA button uses `button` style.

Shape: No border or background on navigation bar. CTA button uses 2px radius with 1px outline.

Spacing: 0.875rem (14px) vertical padding, 3.5rem horizontal padding. 2rem gap between navigation clusters.

### Footer

Anatomy: Five-column grid with category headings and link lists; brand tagline and copyright far right.

Surface: `canvas` background continuing from page. No top border.

Typography: Category headings use `mono-label` in Roboto Mono, uppercase. Links use `label` in Manrope. Tagline uses `mono-label`. Copyright uses `mono-caption` at reduced opacity.

Shape: No borders or separators between columns.

Spacing: 4.5rem top padding, 3.75rem (60px) bottom padding. 3.5rem horizontal gutters. 0.625rem (10px) gap between links within columns. 2rem (32px) gap between major footer zones.

Composition: Asymmetric five-column layout with brand messaging occupying the rightmost column at wider measure.

## Responsive behavior

The two-column product grid should stack vertically on narrower viewports, with the light variant preceding the inverse variant to maintain the established reading order. Card internal padding should reduce to 2rem vertically and 1.5rem horizontally on medium screens, compressing further to 1.5rem all-around on small screens.

The early access form container should remain centered but expand to full width with page gutters on small screens, preserving the narrow reading measure for input fields. Footer columns should collapse to two-column then single-column stacks, with category headings remaining visible as section dividers.

Navigation should consolidate to a menu trigger on small screens, with the utility CTA remaining visible in the header bar. Typography scales should reduce by one step: hero-display to section-display, section-display to page-title, maintaining the type hierarchy without overflow.

## Practical implementation guidance

### Preserve
- The warm cream canvas against near-black ink; this pairing defines the brand's editorial character.
- Sharp corners on cards and containers; the 0px radius is intentional and distinctive.
- The two-mode surface system for product differentiation—light lavender-gray versus near-black.
- Libre Baskerville for all display headings; the serif voice provides authority that sans-serif cannot replicate.
- Roboto Mono's wide tracking for labels and captions; the technical voice balances the classical serif.

### Avoid
- Rounding card corners; even slight radius undermines the cut-paper precision.
- Adding background colors to the header; transparency over canvas maintains vertical rhythm.
- Using the accent blue for large surfaces; reserve it for interactive elements and small indicators.
- Mixing more than two surface modes on a single view; the binary light/inverse system is intentionally limited.

### Recommended build order
1. Establish the canvas background and ink text defaults, with Manrope at body scale.
2. Implement Libre Baskerville for H1 and H2 headings with negative tracking.
3. Build the two-column product card component with light and inverse variants.
4. Add the form card with inverse surface and underline inputs.
5. Implement the footer grid with mono category labels.
6. Layer in the accent blue for buttons, arrows, and form glow.

### Accessibility
- Ensure the inverse card variant maintains at least 4.5:1 contrast between `canvas` text and `surface-inverse` background.
- The accent blue on `canvas` should meet 3:1 for large text and UI components; verify for small button labels.
- Form inputs should have visible focus states beyond the default browser outline, using the accent color for underline expansion or glow intensification.
- The consent microcopy at 0.625rem should not be the sole carrier of critical information; repeat key terms at body scale where possible.

## Scope note

This guide covers the homepage product comparison and early access request page surfaces. Navigation, footer, form, and card components are represented. Motion, hover states, mobile breakpoints, and additional product pages are not documented. The spacing and type scales derive from the extracted interface values with no estimation required.
