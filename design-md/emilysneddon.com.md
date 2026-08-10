# How emilysneddon.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/emilysneddon.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage portfolio grid with bold black navigation bar, project thumbnails in varied aspect ratios, and year-category-title metadata beneath each image](https://pin.fontofweb.com/5049?format=jpg)](https://design.withfudge.com/share/pin-5049)

[Homepage portfolio grid with bold black navigation bar, project thumbnails in varied aspect ratios, and year-category-title metadata beneath each image](https://design.withfudge.com/share/pin-5049)

[![Fran Sans essay page showing large red-orange monospace display type in stacked verse paragraphs against white background](https://pin.fontofweb.com/5048?format=jpg)](https://design.withfudge.com/share/pin-5048)

[Fran Sans essay page showing large red-orange monospace display type in stacked verse paragraphs against white background](https://design.withfudge.com/share/pin-5048)

[![Close-up of essay page header with red-orange geometric sans-serif type showing tight letter-spacing and blocky letterforms](https://pin.fontofweb.com/5047?format=jpg)](https://design.withfudge.com/share/pin-5047)

[Close-up of essay page header with red-orange geometric sans-serif type showing tight letter-spacing and blocky letterforms](https://design.withfudge.com/share/pin-5047)

## Overview

This design system describes a portfolio website for a designer and typographer. The visual language is deliberately stark and editorial, built on a near-monochrome foundation with a single warm accent color. The homepage presents work as a horizontal scroll of project thumbnails, each annotated with year, category, and title. Interior pages, such as the typeface essay, shift to a typographic experience where large display text dominates the viewport. The system relies on two contrasting typefaces: a rigid, geometric, almost modular display face for impact, and a neutral grotesk for navigation, metadata, and body reading. The overall impression is confident, restrained, and craft-focused—letting the work and the letterforms speak without decorative interference.

## Colors

The palette is intentionally minimal, derived from the high-contrast interface and the warm red-orange used for typographic emphasis.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, navigation bar background, project titles, borders |
| canvas | #FFFFFF | Page background, card surfaces, reversed text on dark bars |
| accent | #D13A1A | Display type on essay pages, energetic highlights, call-to-action emphasis |
| muted | #5A5A5A | Secondary metadata, category labels, captions |

The near-black ink and white canvas create the dominant high-contrast rhythm. The accent color appears selectively on the essay page as the sole typographic color against white, giving that section a distinctive material presence. The muted tone serves supporting text roles such as year and category labels beneath project thumbnails. No gradients or shadows are present in the visible interface; color is applied flat and decisively.

## Typography

Two font families drive the system: Fran Sans-Solid for display and editorial impact, and ABC Monument Grotesk (credited to Larissa Kasper Rosario Florio Dinamo) for functional text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| display | Fran Sans-Solid | 3rem | 400 | 1.1 | 0.05em | Essay page headlines, large poetic statements, typographic specimens |
| body | ABC Monument Grotesk | 1rem | 400 | 1.5 | 0 | Project titles, body paragraphs, general reading |
| label | ABC Monument Grotesk | 1rem | 400 | 1.4 | 0.01em | Year and category metadata beneath thumbnails |
| navigation | ABC Monument Grotesk | 1rem | 400 | 1 | 0.02em | Site header links, info button |

Fran Sans-Solid is a geometric sans-serif with blocky, almost stencil-like construction and wide proportions. It carries noticeable letter-spacing even at large sizes, giving it an engineered, poster-like quality. ABC Monument Grotesk provides a neutral, contemporary grotesk voice for all functional text. The display size of 3rem (48px) is an exact multiple of the 4px relative unit. Verify licensing for these families before production use. ABC Monument Grotesk is designed by Larissa Kasper Rosario Florio Dinamo and distributed by Dinamo Typefaces Gmb H. No designer or vendor attribution is available for Fran Sans-Solid.

## Layout

The homepage employs a horizontal scrolling gallery that extends beyond the viewport width, presenting projects as a continuous ribbon of mixed-aspect imagery. The layout is edge-to-edge with minimal framing, letting project thumbnails sit directly against the white canvas. A fixed navigation bar anchors the top-left corner, compact and utilitarian.

The essay page inverts this density into spacious vertical rhythm. Large display type occupies generous margins, with paragraphs stacked with substantial inter-paragraph spacing—approximately 2.5rem to 3rem between verse blocks. Text alignment is flush left, and lines break naturally to create ragged right edges that reinforce the poetic, spoken quality of the content.

Grid behavior on the homepage suggests implicit columns sized to thumbnail content rather than a rigid modular grid. Thumbnails vary in aspect ratio—some square, some landscape, some portrait—creating visual rhythm through proportion rather than uniform repetition. Metadata sits directly beneath each image with consistent left alignment to the thumbnail above.

Spacing follows a 4px base unit (0.25rem). Section spacing is 4rem, component internal padding is 1.5rem, and the tight grid-gap between thumbnails is 1rem. The navigation bar uses compact vertical padding of 0.75rem with horizontal padding of 1.5rem.

## Visual language

The aesthetic is editorial and typographically self-aware. The designer's identity is bound to the display of type itself—projects include typefaces, essays, lectures, and visual identity systems. This meta-quality is reflected in the treatment of text as image: on the essay page, the red-orange display type becomes the entire visual field.

Imagery on the homepage includes process documentation, event posters, technical drawings, and physical artifacts. These are presented without borders, shadows, or frames, maintaining the flat material honesty of the system. The one visible interface chrome—the black navigation bar—uses a thin rectangular outline with sharp corners, echoing the geometric precision of the display typeface.

The warm accent color against white creates an almost printed quality, suggesting letterpress or silkscreen ink. This material reference aligns with the portfolio's focus on physical and digital typography craft. No decorative elements, icons, or background patterns compete for attention.

## Components

### Site header

- **Anatomy**: A compact horizontal bar containing the name "EMILY SNEDDON" left-aligned and an "INFO" link right-aligned, separated by space.
- **Surface and text color**: Background is ink (#000000), text is canvas (#FFFFFF).
- **Typography**: Navigation token, uppercase, with subtle positive letter-spacing.
- **Shape and border**: Sharp rectangle with no border-radius. A thin border or outline in canvas may define the bar's edge against the page.
- **Spacing**: Vertical padding of 0.75rem, horizontal padding of 1.5rem. The bar appears fixed or sticky at the top of the viewport.
- **Composition**: Inline flex or horizontal layout with space-between alignment. The name and info link are the only visible navigation elements.

### Project card

- **Anatomy**: A thumbnail image followed by three lines of metadata: year, category, and title.
- **Surface and text color**: Transparent or canvas background. Year and category use muted (#5A5A5A); title uses ink (#000000).
- **Typography**: Label token for year and category; body token with bold weight for title.
- **Shape and border**: No border, no shadow, no radius. Image edges are sharp.
- **Spacing**: 1rem gap between adjacent cards in the horizontal scroll. Metadata sits approximately 0.5rem to 0.75rem beneath the image.
- **Composition**: Vertical stack with consistent left alignment. Thumbnails maintain their native aspect ratios.

### Essay display

- **Anatomy**: Large verse paragraphs rendered as block-level text with generous vertical spacing.
- **Surface and text color**: Canvas background, accent text (#D13A1A).
- **Typography**: Display token at 3rem, with the wide, geometric character of Fran Sans-Solid.
- **Shape and border**: No containing box or background shape. Text sits directly on the page.
- **Spacing**: Paragraph spacing of approximately 2.5rem to 3rem. Horizontal margins are generous, roughly 10% to 15% of viewport width on each side.
- **Composition**: Flush left, ragged right. Line breaks appear intentional, preserving poetic phrasing. The type scale dominates the viewport, requiring minimal additional elements.

## Responsive behavior

The horizontal project scroll on the homepage should remain accessible on narrower viewports, either through maintained horizontal scroll or by reflowing to a vertical stack with consistent card proportions. The essay page's large display type should scale down to avoid horizontal overflow—consider reducing to 2rem on tablet and 1.5rem on mobile while maintaining the wide letter-spacing that defines Fran Sans-Solid's character. Navigation may collapse to a more compact form or remain as-is given its minimal footprint.

## Practical implementation guidance

### Preserve
- The stark black-and-white foundation with single warm accent.
- The two-typeface hierarchy: geometric display versus neutral grotesk.
- Sharp corners throughout; no border-radius on any interface element.
- The horizontal scroll gallery as the primary homepage experience.
- Generous paragraph spacing on essay pages; the text needs room to breathe.

### Avoid
- Adding decorative shadows, gradients, or background textures.
- Rounding corners on buttons, cards, or the navigation bar.
- Using the accent color for body text or navigation; reserve it for display and emphasis.
- Crowding the essay page with supplementary UI; let the type remain the sole visual element.

### Recommended build order
1. Establish the 4px base unit and set up the two font families with @font-face declarations.
2. Build the site header with ink background and canvas text.
3. Implement the horizontal project gallery with native aspect ratio thumbnails and metadata stack.
4. Create the essay page template with accent-colored display type and generous vertical spacing.
5. Fine-tune responsive scaling for the display typeface across breakpoints.

### Accessibility
- Ensure the accent red-orange (#D13A1A) on white meets WCAG AA contrast ratios for large text; at 3rem it qualifies as large text but verify computed contrast ratio.
- Provide visible focus indicators for the horizontal scroll gallery and navigation links.
- Consider `prefers-reduced-motion` for any scroll-snap or auto-advancing gallery behavior.
- Maintain semantic heading hierarchy even when visual size is uniform; the essay page's verse blocks may use paragraph elements with display styling rather than successive h1 tags.

## Scope note

This guide covers the homepage portfolio gallery and the Fran Sans essay page as visible in the supplied images. Other project pages, mobile layouts, hover states, form elements, and motion behavior are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px base unit.
