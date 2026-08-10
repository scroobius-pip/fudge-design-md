# How indexsy.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/indexsy.com-design)

Last updated: 2026-08-10

## Captured pages

[![About page with serif headline, blue metric numbers in white cards, and 3D abacus illustration on the right](https://pin.fontofweb.com/5228?format=jpg)](https://design.withfudge.com/share/pin-5228)

[About page with serif headline, blue metric numbers in white cards, and 3D abacus illustration on the right](https://design.withfudge.com/share/pin-5228)

[![Homepage hero with serif and blue sans-serif mixed headline, yellow CTA buttons, 3D chart and arch illustrations, and media logo bar](https://pin.fontofweb.com/5227?format=jpg)](https://design.withfudge.com/share/pin-5227)

[Homepage hero with serif and blue sans-serif mixed headline, yellow CTA buttons, 3D chart and arch illustrations, and media logo bar](https://design.withfudge.com/share/pin-5227)

[![Footer on deep blue background with white navigation, yellow CTA button, and speckled 3D arch illustration](https://pin.fontofweb.com/5226?format=jpg)](https://design.withfudge.com/share/pin-5226)

[Footer on deep blue background with white navigation, yellow CTA button, and speckled 3D arch illustration](https://design.withfudge.com/share/pin-5226)

## Overview

Indexsy is a modern business-acquisition and SEO-services brand with a deliberately editorial personality. The visual system balances sophistication and playfulness: large serif headlines establish authority and trust, while electric blue accents and chunky 3D illustrations inject energy and memorability. The homepage opens with a dramatic mixed-type headline—serif for "We Buy," sans-serif in vivid blue for "Incredible"—flanked by dimensional graphics that feel tactile and approachable rather than corporate. Yellow buttons punctuate the otherwise restrained palette, creating unmistakable calls to action that draw the eye without overwhelming the composition. The About page shifts to a more structured presentation with metric cards and a 3D abacus, while the footer inverts the entire scheme to a deep blue ground with white typography. This is a system designed for conversion and credibility simultaneously, using contrast of type genre, color temperature, and surface value to guide attention through a clear narrative hierarchy.

## Colors

The palette is intentionally small and high-impact, built around a stark black-and-white foundation with two functional accents. Every color serves a specific communicative role, from establishing brand energy to enabling clear interactive affordances.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, serif headlines, logo, media logos in the trust bar |
| canvas | #FFFFFF | Page backgrounds, card surfaces, footer text on blue ground |
| action | #3B5BFF | Hero accent words, metric numerals, 3D illustration highlights, interactive emphasis |
| action-deep | #2A3FCC | Footer background, hover states, secondary blue surfaces |
| accent | #FFE600 | Primary CTA buttons, newsletter badge, "Get an Offer" and "Schedule a Call" actions |
| muted-ink | #666666 | Secondary body text, card descriptions, footer sub-links |

The system operates in two distinct surface modes. The light mode dominates the homepage and About page: white canvas with black ink text and blue action accents. This creates maximum readability and a clean, gallery-like presentation for the 3D illustrations. The dark mode appears only in the footer, where action-deep becomes the ground and canvas inverts to text color. The yellow accent remains consistent across both modes, ensuring CTA recognition never degrades. No gradients are used in the interface; color fields are flat and decisive. The 3D illustrations extend the blue family into lighter sky tones and deeper shadows, but these remain photographic rather than interface tokens.

## Typography

Three font families collaborate across the system. GT Super Display, designed by Noel Leu and distributed by Grilli Type, provides the editorial serif voice for headlines. Inter, designed by Rasmus Andersson, handles all sans-serif roles from body text to navigation. Roboto appears in the font stack but serves primarily as a system fallback. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | GT Super Display | 4rem | 500 | 1.1 | -0.02em | Homepage hero headlines, About page manifesto statements |
| section-display | Inter | 2.5rem | 400 | 1.2 | -0.01em | Section headings, SEO interest prompt |
| body | Inter | 1rem | 400 | 1.6 | 0em | Descriptive paragraphs, card explanations |
| label | Inter | 0.875rem | 400 | 1.4 | 0.02em | Button labels, small headings, category titles |
| navigation | Inter | 0.875rem | 400 | 1 | 0.01em | Header menu items, dropdown triggers |
| metric-number | Inter | 2.5rem | 400 | 1.1 | -0.02em | Statistical values in metric cards |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0.01em | Copyright, privacy links, footer metadata |

The hero-display token at 4rem creates commanding presence without excess, its slight negative tracking tightening the serif forms for headline impact. The metric-number token shares the same size as section-display but with tighter leading, treating numerals as display objects rather than readable prose. Navigation and label sizes are deliberately close, differentiated by context and weight rather than scale. Body text maintains generous leading for comfortable reading in longer passages. The mixed headline treatment—serif for functional words, sans-serif for emotional emphasis—requires both families at similar optical sizes to maintain baseline alignment.

## Layout

The layout philosophy centers on generous whitespace and centered content bands that break into asymmetric illustration placements. The homepage hero occupies a full viewport-width band with a centered text block flanked by 3D graphics that bleed toward the edges. The header navigation floats above with a simple horizontal arrangement: logo left, menu center-right, newsletter CTA far right. Below the hero, a trust bar spans full width with centered media logos, followed by a conversion section with centered heading, subtext, and CTA.

The About page introduces a two-column logic: a manifesto headline spans full width above, then a metrics grid occupies the left two-thirds while a large 3D illustration anchors the right third. The metrics grid uses a 2×3 card arrangement with consistent internal padding and thin borders separating cells. Cards align to a subtle background grid that keeps numerals and labels in strict vertical rhythm.

The footer inverts to a four-column layout on deep blue: primary navigation stacked vertically at largest scale, location and resource links in smaller grouped lists, and a final CTA column with heading and button. A large 3D arch bleeds from the right edge, partially cropped by the viewport boundary. Social icons and legal copy occupy a bottom band with horizontal separation.

Spacing follows a 0.25rem base unit. Section vertical padding is typically 6rem, creating dramatic breathing room between content bands. Component gaps of 1.5rem separate related elements within a section. Card padding of 2rem provides comfortable internal margins for metric cells. The system avoids tight packing; even the dense footer maintains generous line spacing between link groups.

## Visual language

The brand's most distinctive quality is the pairing of refined editorial typography with playful dimensional illustration. The 3D graphics—an abacus, a chart with rising line, a magnifying glass, an arch with speckled texture—share a consistent material language: soft shadows, rounded forms, and a limited palette of blues, whites, and subtle warm neutrals. These elements cast realistic shadows onto the white background, creating depth without breaking the flat interface aesthetic.

Photography is absent; the visual system relies entirely on typography, illustration, and color field. This makes the 3D assets function as both decoration and brand signature. They are positioned asymmetrically, often bleeding beyond comfortable margins, which prevents the centered typography from feeling too static.

The yellow buttons provide the only warm color in the interface, making them immediately scannable. Their rectangular shape with sharp corners contrasts the rounded forms of the illustrations, reinforcing their functional rather than decorative role. The black border on buttons adds definition against white backgrounds and ensures visibility against the yellow fill.

Iconography is minimal and functional: small chevrons indicate dropdown menus in navigation, social icons appear only in the footer at reduced scale. The media logo bar uses grayscale versions of partner marks, maintaining visual hierarchy by subordinating external brands to the Indexsy identity.

## Components

### Primary action button

- **Anatomy**: Text label centered within a rectangular container with sharp corners
- **Surface**: Solid yellow fill (#FFE600) with black text (#000000)
- **Typography**: Uppercase label token, semibold weight, tight letter spacing
- **Shape**: Zero border radius, creating a crisp, stamp-like silhouette
- **Spacing**: Internal padding approximately 0.75rem vertical, 1.5rem horizontal
- **Composition**: Typically centered below descriptive text or aligned to header edge
- **Variants**: Header variant appears smaller as "FREE NEWSLETTER" badge; hero variant larger as "GET AN OFFER"; conversion variant as "SCHEDULE A CALL"; footer variant as "REQUEST FREE SEO AUDIT"

### Metric card

- **Anatomy**: Large numeral above small descriptive label, contained in bordered rectangle
- **Surface**: White background with 1px subtle border (rgba black at low opacity)
- **Typography**: Metric-number token for value, body token for description
- **Shape**: Small border radius (0.5rem) softening corners without excess roundness
- **Spacing**: 2rem internal padding, numerals centered or left-aligned depending on card position
- **Composition**: Arranged in 2-column grid with consistent gaps; illustration balances the grid asymmetrically
- **States**: Static display only; no visible hover or interactive states

### Navigation bar

- **Anatomy**: Logo mark left, horizontal link list center-right, CTA button far right
- **Surface**: Transparent or white background, black text
- **Typography**: Navigation token for links, label token for dropdown triggers with chevron indicators
- **Composition**: Flex row with space-between logic; menu items evenly distributed
- **Variants**: Collapses to stacked layout in footer at much larger scale (section-display size)

### Footer surface

- **Anatomy**: Full-width blue ground with four content columns and decorative illustration
- **Surface**: Deep blue (#2A3FCC) background, white text, yellow CTA button
- **Typography**: Section-display size for primary navigation links, body size for resource lists, label size for headings
- **Composition**: Asymmetric balance with heavy left-side navigation and right-side illustration bleed
- **Spacing**: Generous vertical padding, grouped link lists with 1.5rem gaps between items

### Trust bar

- **Anatomy**: Centered "As seen on" label above horizontal logo row
- **Surface**: White or near-white background, grayscale partner marks
- **Typography**: Small centered label above logos
- **Composition**: Logos evenly spaced in single row, scaled to consistent visual weight

## Responsive behavior

The system appears designed for desktop-first presentation with clear adaptation paths. The hero headline's mixed serif-sans treatment requires both families to load before rendering; consider font-display strategies to prevent layout shift. The 3D illustrations, positioned as bleed elements, should scale down or reposition to avoid overlapping text on narrower viewports. The metrics grid's 2-column layout should collapse to single column on mobile, with the abacus illustration moving below rather than beside. Footer columns should stack vertically, with the large navigation links remaining prominent and the resource lists collapsing into accordions or simplified menus. The yellow buttons maintain their rectangular shape across breakpoints; their tap targets should expand to minimum 44px height on touch devices. The header navigation's horizontal menu should collapse to a hamburger pattern, preserving the newsletter CTA as a persistent element if possible.

## Practical implementation guidance

### Preserve
- The serif-sans headline pairing; this is the brand's most recognizable typographic gesture
- The electric blue (#3B5BFF) as the single accent color for emphasis and interactive identity
- The sharp-cornered yellow buttons against all backgrounds; the contrast pattern is consistent and conversion-optimized
- The 3D illustration style with soft shadows and rounded forms; replacing with flat icons would lose brand character
- The generous section spacing; the airy presentation signals confidence and clarity

### Avoid
- Adding more accent colors; the palette's restraint is integral to its impact
- Rounding the CTA buttons; their rectangular severity distinguishes them from the organic illustrations
- Using the deep blue footer color as a primary background; it should remain a terminal surface
- Reducing the headline size below 3rem; the display type needs room to breathe
- Centering body text in long passages; the current left-aligned or centered-short-block approach maintains readability

### Recommended build order
1. Establish the type scale with GT Super Display and Inter loaded, verifying metric compatibility
2. Implement the hero section with mixed headline treatment and centered CTA
3. Build the yellow button component with zero border radius and uppercase text
4. Create the metric card grid with consistent borders and internal padding
5. Add the 3D illustration containers with responsive scaling rules
6. Implement the footer inversion with deep blue ground and white typography
7. Polish the header navigation with dropdown chevrons and persistent CTA

### Accessibility
- Ensure the yellow button text meets contrast ratios against the #FFE600 fill; if necessary, darken to near-black or increase font weight
- Provide alt text for 3D illustrations describing their conceptual content (e.g., "3D abacus representing financial metrics")
- Maintain focus indicators on all interactive elements; the flat button style requires visible focus rings
- Test the deep blue footer (#2A3FCC) with white text for WCAG AA compliance at all sizes
- Preserve semantic heading hierarchy: hero-display as h1, section-display as h2, labels as h3 or appropriate

## Scope note

This guide covers the homepage, About page, and footer surfaces visible in the supplied images. Mobile breakpoints, dropdown menu interactions, form fields, loading states, and motion behavior are not represented. Measurements are practical adaptation targets. Verify licensing for GT Super Display, Inter, and Roboto before production use.
