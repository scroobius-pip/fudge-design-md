# How ft.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ft.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with multi-column navigation, promotional banner with editorial photography mosaic, and Nikkei Company attribution on deep charcoal background.](https://pin.fontofweb.com/2915?format=jpg)](https://design.withfudge.com/share/pin-2915)

[Dark footer with multi-column navigation, promotional banner with editorial photography mosaic, and Nikkei Company attribution on deep charcoal background.](https://design.withfudge.com/share/pin-2915)

[![Subscription pricing cards on warm cream background with burgundy badges, teal Select buttons, and outlined device icons in a three-column layout.](https://pin.fontofweb.com/2914?format=jpg)](https://design.withfudge.com/share/pin-2914)

[Subscription pricing cards on warm cream background with burgundy badges, teal Select buttons, and outlined device icons in a three-column layout.](https://design.withfudge.com/share/pin-2914)

[![Article paywall overlay with serif headline quotation, darkened cityscape photography, white trial pricing, and light button on near-black gradient.](https://pin.fontofweb.com/2913?format=jpg)](https://design.withfudge.com/share/pin-2913)

[Article paywall overlay with serif headline quotation, darkened cityscape photography, white trial pricing, and light button on near-black gradient.](https://design.withfudge.com/share/pin-2913)

[![Hero subscription banner with circuit board imagery and dark gradient, followed by cream-background pricing grid with mixed card arrangements.](https://pin.fontofweb.com/2287?format=jpg)](https://design.withfudge.com/share/pin-2287)

[Hero subscription banner with circuit board imagery and dark gradient, followed by cream-background pricing grid with mixed card arrangements.](https://design.withfudge.com/share/pin-2287)

## Overview

The Financial Times subscription experience presents a premium editorial interface built on a foundation of warm cream surfaces, deep charcoal structural elements, and precise typographic hierarchy. The system pairs a refined serif display face for headlines and quotations with a clean sans-serif for functional text, pricing, and navigation. Visual storytelling anchors the experience through full-bleed photography overlaid with dark gradients, creating dramatic contrast for subscription messaging. The interface moves between two dominant modes: immersive dark hero sections that leverage editorial imagery to establish authority, and light cream content areas that present pricing and selection with clarity and warmth. Component language is restrained—buttons are sharp-cornered and direct, badges are pill-shaped for promotional emphasis, and pricing information scales aggressively to drive decision-making. The overall impression is one of established credibility combined with contemporary digital service design.

## Colors

The color system operates across three functional zones: warm light surfaces for commerce, deep dark surfaces for editorial immersion, and two accent colors for action and promotion.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, sans-serif headlines, icon strokes |
| canvas | #FFF1E5 | Main page background, pricing card surfaces, content areas |
| surface-dark | #262A33 | Footer background, dark overlay gradients, navigation columns |
| accent-teal | #0A5F5A | Primary action buttons, text links, interactive emphasis |
| accent-burgundy | #990F3D | Promotional badges, save indicators, urgency signals |
| text-inverse | #FFFFFF | Text on dark surfaces, button labels on teal, badge text |
| text-muted | #A8A8A8 | Footer navigation links, secondary information on dark |
| border-subtle | #D1D1D1 | Card dividers, hairline separators, faint rules |

The warm cream canvas dominates subscription and pricing flows, creating an approachable, paper-like environment that softens the transactional nature of the interface. Against this, the deep charcoal surface-dark provides weight and grounding in the footer and immersive hero overlays. The teal accent carries all positive action: subscription selection, link underlining, and button fills. Burgundy appears exclusively for promotional badges and percentage savings, creating a distinct emotional register of urgency without contaminating the primary action color. White text inverts cleanly against both dark photography and solid teal surfaces. Muted gray text in the footer reduces visual noise while maintaining legibility for dense link lists.

## Typography

The type system is built on two variable font families from Klim Type Foundry, designed by Kris Sowersby. Financier Display VF serves editorial and display purposes with classical proportions, while Metric2 VF handles functional and interface text with geometric clarity. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Financier Display Vf | 2.5rem | 400 | 1.1 | -0.01em | Article quotation headlines, immersive hero statements |
| section-display | Financier Display Vf | 2rem | 400 | 1.15 | -0.01em | Section headers, pricing page titles |
| headline | Financier Display Vf | 1.5rem | 400 | 1.2 | 0em | Card titles, promotional subheads |
| body | Copyright Klim Type Foundry-Not Licensed For Desktop Use | 1rem | 400 | 1.5 | 0em | Descriptions, terms, general content |
| body-bold | Copyright Klim Type Foundry-Not Licensed For Desktop Use | 1rem | 700 | 1.5 | 0em | Emphasized descriptions, terms emphasis |
| label | Copyright Klim Type Foundry-Not Licensed For Desktop Use | 0.875rem | 600 | 1.25 | 0.01em | Button text, badge text, navigation labels |
| price | Copyright Klim Type Foundry-Not Licensed For Desktop Use | 1.75rem | 700 | 1.1 | -0.02em | Pricing figures, trial costs |
| legal | Copyright Klim Type Foundry-Not Licensed For Desktop Use | 0.75rem | 400 | 1.5 | 0em | Footer copyright, terms references |

The serif display face carries editorial authority through its classical construction and slight negative tracking at larger sizes. Tight leading on hero-display creates impactful, newspaper-style headline blocks. The sans-serif family maintains generous leading for body text, ensuring readability in longer subscription descriptions. Price tokens use the heaviest weight and tightest tracking to create visual dominance within card layouts. Label tokens are slightly condensed with positive tracking for button and badge clarity at small sizes. Legal text scales down to 0.75rem but retains the same line height ratio to prevent dense stacking in footer areas.

## Layout

The layout system alternates between full-bleed immersive sections and contained content grids. Maximum content width centers at approximately 75rem with responsive padding. Section spacing uses 4rem vertical rhythm, with component internal padding at 1.5rem to 2rem depending on content density.

Immersive hero sections employ full-width photography with dark gradient overlays, positioning text in the left third of the viewport. This creates asymmetric visual tension and preserves the photographic subject matter in the remaining frame. The gradient typically runs from near-black at the bottom and left edges to transparent toward the center-right, ensuring text legibility without obliterating imagery.

Pricing and subscription grids use a three-column layout at desktop widths, with cards separated by subtle borders or generous whitespace. Each card contains an icon, badge, title, price block, description, and action row. The action row pairs a solid teal button with a text-only disclosure trigger, maintaining horizontal alignment across cards.

The footer expands to full width with a deep charcoal background, organizing links into six-column clusters with category headers. Below the link grid, legal text spans the full width at reduced size, followed by a Nikkei Company attribution mark positioned right-aligned on a slightly darker strip.

Content flow follows a clear hierarchy: promotional context at top, selection mechanism in middle, and institutional trust signals at bottom. No sidebar navigation intrudes on the subscription focus; the experience is intentionally linear.

## Visual language

Photography treatment is central to the FT visual identity. Editorial images appear full-bleed with heavy darkening overlays, allowing white text to float with minimal contrast risk. The photography itself spans documentary, architectural, and abstract subjects—cityscapes, circuit boards, cultural artifacts—reflecting the breadth of FT coverage.

Iconography is minimal and functional, appearing as simple outlined devices (phone, tablet, newspaper stack) in pricing cards. These icons use single-weight strokes without fill, matching the ink color and scaling to approximately 2.5rem in height. No decorative illustration or gradient backgrounds appear outside photography overlays.

The interface avoids rounded corners on primary containers and buttons, preferring sharp 0px corners that echo newspaper page edges. Only badges and pills receive full rounding, creating a clear distinction between promotional labels and structural elements. Borders are hairline-thin, functioning as subtle dividers rather than heavy containment.

Shadows are absent from the visible system; depth is created through color contrast and photography layering rather than elevation effects. The overall material quality is flat, precise, and editorial.

## Components

### Subscription hero banner

- **Anatomy**: Full-width photographic background, dark gradient overlay, headline block, price or offer statement, description paragraph, action row with primary button and disclosure link.
- **Surface**: Background image with linear gradient overlay from surface-dark to transparent; text in text-inverse.
- **Typography**: Headline uses hero-display in Financier Display Vf; pricing uses price token in sans-serif; description uses body.
- **Shape**: Full-bleed width, no border radius, sharp edges.
- **Spacing**: Generous internal padding (approximately 4rem top and bottom), text constrained to left 40% of viewport.
- **Composition**: Asymmetric left-weighted layout preserves photographic interest on right.
- **Variants**: Dark photography variant (cityscapes, architecture) and warm photography variant (cultural, product imagery).

### Pricing card

- **Anatomy**: Optional badge, outlined icon, title, price with period suffix, description paragraph, action row with Select button and What's included disclosure.
- **Surface**: Canvas background with optional left border in border-subtle; no shadow.
- **Typography**: Title in headline; price in price token with "per month" or "per year" in body-bold at reduced size; description in body.
- **Shape**: 0px border radius; optional 1px left border for column separation.
- **Spacing**: 2rem internal padding; 1.5rem between icon and title; 1rem between price and description.
- **Composition**: Vertical stack with consistent alignment across card set.
- **Variants**: Badge-present variant (burgundy pill) for promotional offers; no-badge variant for standard pricing.

### Primary button

- **Anatomy**: Text label only, no icon.
- **Surface**: Solid accent-teal background with text-inverse label.
- **Typography**: label token, semibold weight.
- **Shape**: 0px border radius, sharp rectangle.
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding.
- **States**: Visible state is solid teal; no visible hover or disabled states in supplied imagery.

### Secondary button

- **Anatomy**: Text label only, used on dark backgrounds.
- **Surface**: Solid text-inverse background with ink text.
- **Typography**: label token, semibold weight.
- **Shape**: 0px border radius.
- **Spacing**: Matches primary button proportions.

### Promotional badge

- **Anatomy**: Text label within pill container.
- **Surface**: Solid accent-burgundy background with text-inverse.
- **Typography**: label token, semibold weight, slightly reduced size.
- **Shape**: 9999px border radius for full pill.
- **Spacing**: 0.5rem vertical padding, 1rem horizontal padding.
- **Use**: "Save 40%", "Complete coverage" indicators above pricing cards.

### Footer navigation

- **Anatomy**: Category headers with stacked link lists, legal paragraph, attribution mark.
- **Surface**: Solid surface-dark background.
- **Typography**: Category headers in body-bold at text-inverse; links in body at text-muted; legal in legal token.
- **Shape**: Full width, no radius.
- **Spacing**: 4rem vertical padding above link grid; 2rem below before legal; generous column gutters.
- **Composition**: Six-column link grid at top, full-width legal text, right-aligned attribution strip at bottom.

### Disclosure trigger

- **Anatomy**: Text label with downward chevron icon.
- **Surface**: Transparent background.
- **Typography**: label token in accent-teal with underline.
- **Shape**: No border, no radius.
- **Composition**: Appears inline after primary buttons in card action rows.

## Responsive behavior

The three-column pricing grid should collapse to single-column stacking on narrow viewports, with cards maintaining full width and internal padding. The asymmetric hero layout should center text and allow photography to recede to background-only status on mobile, potentially increasing overlay darkness to maintain legibility.

Footer navigation columns should reflow to two-column or single-column arrangements on smaller screens, preserving category grouping. The legal text and attribution should stack vertically rather than maintaining horizontal separation.

Typography scales should reduce by approximately one step on mobile: hero-display to section-display, section-display to headline. Price tokens may remain at full size to preserve commercial impact. Touch targets for buttons should maintain minimum 44px height regardless of scaling.

## Practical implementation guidance

### Preserve
- The sharp-cornered button treatment; rounding should be reserved exclusively for badges.
- The warm cream canvas as the dominant subscription surface; it differentiates FT from cooler, more clinical competitors.
- The dual-typeface hierarchy; Financier Display for editorial voice, Metric2 for functional clarity.
- The left-weighted asymmetric hero composition; centering all hero text would diminish the photographic storytelling.
- The burgundy-teal color separation; never use burgundy for primary actions or teal for promotional urgency.

### Avoid
- Adding shadows or elevation effects; the system achieves depth through photography and color contrast alone.
- Using the serif face for body text or UI labels; its role is display-only.
- Rounding card corners; the newspaper-sharp aesthetic is intentional.
- Mixing badge and button colors; burgundy and teal serve distinct psychological purposes.

### Recommended build order
1. Establish the cream canvas and dark surface color foundations.
2. Implement the two font families with the full type scale.
3. Build the pricing card component with all internal spacing and border treatments.
4. Create the primary and secondary button components with sharp corners.
5. Construct the hero banner with gradient overlay and asymmetric text positioning.
6. Implement the footer with multi-column navigation and legal text hierarchy.
7. Add the badge component for promotional contexts.

### Accessibility
- Ensure gradient overlays achieve minimum 4.5:1 contrast ratio for all text-inverse usage over photography; test with actual image content rather than placeholder gradients.
- Provide visible focus indicators for all interactive elements; the current sharp-cornered buttons should receive clear outline or background shift on focus.
- Maintain semantic heading hierarchy: hero-display as h1, section-display as h2, headline as h3.
- Ensure "What's included" disclosure triggers are implemented as expandable sections with appropriate ARIA attributes.
- Test color independence: the burgundy-teal distinction should not be the sole indicator of promotional versus standard offers.

## Scope note

This guide covers the subscription and article paywall surfaces visible in the supplied imagery. It does not include the full FT article reading experience, search functionality, account management dashboards, or live market data displays. Navigation header components above the hero zone are not represented. Measurements are practical adaptation targets derived from visual inspection of the supplied page sections.
