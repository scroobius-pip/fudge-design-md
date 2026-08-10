# How rt.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rt.com-design)

Last updated: 2026-08-10

## Captured pages

[![Article page with large black headline, gray subheadline, and white content area with right sidebar containing Top stories and image thumbnails](https://pin.fontofweb.com/8998?format=jpg)](https://design.withfudge.com/share/pin-8998)

[Article page with large black headline, gray subheadline, and white content area with right sidebar containing Top stories and image thumbnails](https://design.withfudge.com/share/pin-8998)

[![Homepage with black header, green RT logo, red breaking-news banner, and grid of story cards with image overlays and headline typography](https://pin.fontofweb.com/8997?format=jpg)](https://design.withfudge.com/share/pin-8997)

[Homepage with black header, green RT logo, red breaking-news banner, and grid of story cards with image overlays and headline typography](https://design.withfudge.com/share/pin-8997)

## Overview

RT's visual system is built for rapid news consumption at high information density. The design employs a stark black-and-white foundation with a single vibrant green accent that anchors the brand identity. The homepage presents a dramatic dark environment where photography and video thumbnails compete for attention, while article pages invert to a light surface for extended reading. Typography is exclusively set in Archivo, a geometric sans-serif that delivers authority through weight variation rather than style diversity. The hierarchy is aggressive: massive headlines, bold section labels, and tight packing of story modules. Every element serves the urgency of breaking news, from the green-accented banner that interrupts the black header to the gradient overlays that ensure headline legibility over any image. The system balances editorial gravitas with digital-native density, creating a recognizable voice in the competitive news landscape.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background for homepage, headers, and dark modules |
| surface | #FFFFFF | Article page background and light content areas |
| ink | #000000 | Primary text on light surfaces, headline color |
| muted-ink | #6E6E6E | Secondary text, timestamps, less prominent metadata |
| light-ink | #999999 | Tertiary information, footer links, disabled states |
| faint-ink | #C7C7C7 | Subtle borders, divider lines, inverse muted text |
| action | #77BC1F | Primary brand green, category tags, active indicators, section title underlines, breaking news banner |
| action-hover | #6BBD26 | Slightly adjusted green for hover states on action elements |
| link | #0000EE | Standard hyperlink color in article body text |
| link-visited | #595959 | Visited link state |
| text-inverse | #FFFFFF | All text on dark backgrounds, card headlines, navigation |
| text-inverse-muted | #C7C7C7 | Secondary text on dark backgrounds, card metadata |

The color philosophy is deliberately polarized. The black canvas creates theatrical contrast for photography and establishes immediate visual authority. White surfaces appear only when the user commits to reading, reducing eye strain for long-form content. The green action color is used sparingly but consistently—always as a functional marker rather than a decorative element. It appears in the logo mark, category tags, section underlines, and the breaking news banner that interrupts the header flow. No gradients appear in UI elements except the functional image-to-text overlays on story cards. The palette is intentionally small to maintain speed of recognition across a site that publishes hundreds of stories daily.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Archivo | 2.875rem | 800 | 1.22 | normal | Article page main headlines |
| section-display | Archivo | 1.6875rem | 700 | 1.19 | normal | Subheadlines, section headers, card titles on homepage |
| card-headline | Archivo | 1.1875rem | 500 | 1.29 | normal | Story card headlines in grids |
| body | Archivo | 1.125rem | 400 | 1.28 | normal | Article body text, primary reading content |
| body-small | Archivo | 1rem | 400 | 1.5 | normal | Secondary descriptions, expanded card text |
| label | Archivo | 0.8125rem | 700 | 1.54 | normal | Navigation, category labels, timestamps, bylines |
| caption | Archivo | 0.75rem | 400 | 2.0 | normal | Fine print, legal text, image credits |
| micro | Archivo | 0.5625rem | 500 | 1.78 | normal | Tag pills, compact labels, badge text |

Archivo, designed by Hector Gatti and distributed by Omnibus Type, is the sole type family. The design exploits its geometric clarity and extensive weight range to create hierarchy without introducing secondary fonts. The 800-weight hero display delivers impact for article headlines, while the 500-weight card headlines maintain density in grid layouts without visual fatigue. Body text at 400 weight with tight 1.28 line height prioritizes information density over traditional reading comfort, appropriate for a scan-first audience. The system uses size and weight as the primary hierarchy tools, with letter spacing remaining neutral throughout. Verify licensing for these families before production use.

## Layout

The layout system is built on a 2px relative unit, yielding a granular but practical spacing scale. The homepage employs a complex multi-column grid that juxtaposes a dominant feature story against a dense sidebar of breaking headlines and thumbnail grids. The article page shifts to a more conventional two-column structure: expansive reading area on the left, related stories and promotional modules on the right.

Page gutters are consistently 20px (1.25rem), establishing breathable margins without sacrificing content width. Section vertical spacing uses 30px (1.875rem) as a standard rhythm, with 15px (0.9375rem) for tighter internal grouping. The homepage hero area uses dramatic padding—up to 251px (15.7rem) top padding on story card links—to push text overlays toward the bottom third of images, ensuring the gradient overlay has sufficient room to establish contrast.

Grid gaps between story cards are minimal, typically 10px (0.625rem) to 15px (0.9375rem), reinforcing the dense editorial packing. The right sidebar on article pages maintains a fixed proportion, roughly one-third of the total width, with internal story listings separated by 1px hairline borders or 15px vertical spacing. Navigation spans full width with horizontal scrolling category tabs on the homepage, collapsing to a hierarchical menu on article pages.

The system avoids centered single-column layouts except for narrow promotional modules. Asymmetry is constant: the eye is always directed toward the next story, the related headline, the breaking update. This creates a restless, always-updating spatial rhythm that matches the editorial tempo.

## Visual language

Photography treatment is direct and unfiltered: news imagery appears in its native aspect ratio with minimal cropping, often presented as large background images behind text overlays. The signature visual technique is the bottom-weighted gradient overlay on story cards—transparent at the top, transitioning to solid black at the bottom—which guarantees white headline legibility regardless of image content. This gradient is functional, not decorative, and appears consistently across card sizes.

The RT brand mark appears as a solid green square with white "RT" letterforms, positioned in the header as a persistent anchor. Category tags use the same green as solid filled pills with white micro text, creating instant scannability. The green breaking banner introduces chromatic disruption for urgent updates, making it attention-grabbing when it appears.

Iconography is minimal and utilitarian: small arrows for video indicators, simple geometric shapes for navigation affordances. No illustrative or decorative graphics intrude on the photographic content. The overall impression is of a wire service aesthetic updated for digital consumption—fast, factual, visually loud.

## Components

### Breaking news banner

- **Anatomy**: Full-width horizontal strip spanning the viewport, containing a single line of uppercase text.
- **Surface**: Solid green background (`{colors.action}`) with no border or shadow.
- **Typography**: `{typography.label}` in white, uppercase, centered or left-aligned depending on content length.
- **Spacing**: Compact vertical padding of approximately 10px, no horizontal margin.
- **Composition**: Interrupts the normal header flow, pushing all content downward. Appears conditionally based on editorial priority.
- **Variants**: Single-line compact version; may expand to include a dismiss control or timestamp.

### Story card (homepage)

- **Anatomy**: Rectangular container with background image, gradient overlay, and bottom-positioned text block. May include a small category tag pill and video indicator.
- **Surface**: Image fills container; gradient overlay from transparent to black; no border, small 5px radius on some implementations.
- **Typography**: Headline uses `{typography.section-display}` or `{typography.card-headline}` in white; description uses `{typography.body-small}` in muted white; category tag uses `{typography.micro}`.
- **Shape**: Mostly sharp corners; occasional 5px radius on thumbnail variants.
- **Spacing**: Generous internal padding pushing text to bottom edge (up to 250px top padding on hero cards); 10px–15px gaps in grids.
- **Composition**: Aspect ratios vary by prominence—hero cards are nearly 16:9, sidebar thumbnails are 4:3 or square.
- **States**: Hover state may brighten image slightly or reveal additional metadata.

### Story card (article sidebar)

- **Anatomy**: Horizontal row with small left thumbnail and right text block.
- **Surface**: White background, no image overlay needed.
- **Typography**: Headline in `{typography.card-headline}` black; timestamp in `{typography.label}` gray.
- **Spacing**: 15px vertical padding between items; thumbnail approximately 80px–120px wide.
- **Composition**: Text wraps to two lines maximum; clear separation between items.

### Category tag

- **Anatomy**: Small inline pill containing uppercase category name.
- **Surface**: Solid green fill (`{colors.action}`), no border, fully rounded ends.
- **Typography**: `{typography.micro}` in white, uppercase.
- **Spacing**: Internal padding approximately 7px vertical, 12px horizontal; may include negative margin tricks for tight integration with headlines.
- **Composition**: Positioned absolute or inline at top-left of cards, or inline before headlines.

### Primary navigation

- **Anatomy**: Horizontal bar with logo left, category links center, utility controls right.
- **Surface**: Black background, full width, no border.
- **Typography**: `{typography.label}` in white for category links; smaller size for secondary utilities.
- **Spacing**: Links padded at 11px–12px horizontal; 20px page gutters.
- **Composition**: Fixed or sticky positioning on scroll; horizontal overflow with scroll on smaller viewports.
- **Variants**: Expanded state shows full category menu; collapsed shows hamburger on mobile (not visible in supplied images).

### Article headline block

- **Anatomy**: H1 headline, optional subheadline paragraph, metadata line.
- **Surface**: White background, no containing border.
- **Typography**: Headline `{typography.hero-display}` black; subheadline `{typography.section-display}` gray; metadata `{typography.label}` gray.
- **Spacing**: 15px margin below headline, 20px below subheadline, 10px below metadata.
- **Composition**: Full width of content column; no maximum width constraint visible.

## Responsive behavior

The supplied images show desktop layouts exclusively. Based on visible patterns, the following responsive adaptations are recommended:

The homepage multi-column grid should collapse to a single column on narrow viewports, with the dominant hero story stacking above the thumbnail grid. The right sidebar content should either move below the main feed or convert to a horizontally scrollable strip.

Article pages should maintain the two-column structure on tablet widths, transitioning to single-column with the sidebar appearing as an expandable section or bottom-of-article module on phones. The large hero headline at 46px should scale down to approximately 32px on mobile to prevent excessive line breaks.

Navigation must convert to a touch-friendly horizontal scroll or hamburger menu below 768px viewport width. The breaking news banner should remain full-width but may reduce to a single truncated line with an expand control.

Image aspect ratios in story cards should be preserved through `object-fit: cover` rather than allowed to distort, maintaining the gradient overlay's effectiveness at all sizes.

## Practical implementation guidance

### Preserve
- The stark black-to-white polarity between homepage and article contexts
- The green accent as a functional marker only—never as a large background area
- The gradient overlay technique for all image-backed headlines
- The weight-driven typographic hierarchy within the single Archivo family
- The dense, minimal-gutter grid packing on homepage sections

### Avoid
- Introducing secondary typefaces that compete with Archivo's geometric clarity
- Using green accent for non-urgent content—it will dilute its functional signaling power
- Centered text alignment except for the smallest promotional modules
- Generous whitespace that slows scanning speed
- Decorative shadows or borders that add visual noise without information value

### Recommended build order
1. Establish the 2px base unit and core spacing scale
2. Implement Archivo at all weights with the defined type scale
3. Build the black canvas homepage with gradient-overlay story cards
4. Add the green category tag and breaking banner as overlay components
5. Construct the white article page with headline hierarchy
6. Integrate the sidebar story listing with thumbnail grid
7. Polish navigation states and responsive breakpoints

### Accessibility
- Ensure white text on gradient overlays meets WCAG contrast requirements; the gradient's black endpoint must extend far enough to guarantee 4.5:1 ratio for all text
- Provide visible focus indicators on navigation links that work against both black and white backgrounds
- Consider a reduced-motion preference that disables any auto-advancing carousels in the hero area
- Maintain logical heading order despite visual size variations—hero headlines should be H1, section headers H2, card headlines H3

## Scope note

This guide covers the homepage and article page surfaces visible in the supplied images. Mobile layouts, search results pages, video player interfaces, live blog templates, and account or subscription flows are not represented. Interactive states including hover, active, focus, and loading are inferred from static view and should be verified against a live environment.
