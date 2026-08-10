# How pentagram.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pentagram.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage footer with oversized Pentagram wordmark, news events list, and contact emails on black background](https://pin.fontofweb.com/8273?format=jpg)](https://design.withfudge.com/share/pin-8273)

[Homepage footer with oversized Pentagram wordmark, news events list, and contact emails on black background](https://design.withfudge.com/share/pin-8273)

[![Contact page with large serif heading and four office building photographs in a two-column grid](https://pin.fontofweb.com/8272?format=jpg)](https://design.withfudge.com/share/pin-8272)

[Contact page with large serif heading and four office building photographs in a two-column grid](https://design.withfudge.com/share/pin-8272)

[![News listing page with filterable categories, date-stamped events, and press article thumbnails](https://pin.fontofweb.com/8271?format=jpg)](https://design.withfudge.com/share/pin-8271)

[News listing page with filterable categories, date-stamped events, and press article thumbnails](https://design.withfudge.com/share/pin-8271)

[![About page partner grid with black-and-white portrait photographs and name-location captions](https://pin.fontofweb.com/8270?format=jpg)](https://design.withfudge.com/share/pin-8270)

[About page partner grid with black-and-white portrait photographs and name-location captions](https://design.withfudge.com/share/pin-8270)

## Overview

The Pentagram website presents a confident, gallery-like experience rooted in extreme contrast and typographic restraint. The system alternates between pure white content surfaces and immersive black sections, using a single serif type family at carefully calibrated sizes to establish hierarchy without visual noise. Editorial photography—whether partner portraits, office architecture, or project imagery—receives maximum breathing room through generous margins and a disciplined grid. The overall impression is institutional yet contemporary: a design consultancy's own site functioning as a clean, confident frame for its work and people.

Navigation remains minimal and persistent, with the Pentagram wordmark anchoring the upper left and primary sections arranged horizontally at the upper right. Content pages unfold with large display headings set in the same serif face, followed by structured grids of imagery or text. The footer inverts the entire palette, dropping white typography onto a black canvas and culminating in an oversized Pentagram logotype that spans the full viewport width.

## Colors

The palette is intentionally austere, built on a near-black ink, pure white canvas, and a narrow band of muted grays for secondary information. Color is used structurally rather than expressively—photography and project imagery supply the chromatic interest.

| token | value | use |
|---|---|---|
| ink | #1A1A1A | Primary text, headings, body copy on light surfaces |
| ink-secondary | #767676 | Muted captions, locations, metadata, inactive filters |
| ink-tertiary | #8C8C8C | Footer body text, tertiary labels on dark surfaces |
| canvas | #FFFFFF | Primary page background, card surfaces, button fills |
| surface-inverse | #000000 | Footer background, immersive dark sections, hero overlays |
| surface-elevated | #222222 | Slightly lifted dark surfaces, subtle depth on black |
| surface-muted | #E3E4E5 | Tag backgrounds, subtle UI chrome |
| border-light | #E8E8E8 | Horizontal rules, card dividers, news list separators |

The light mode dominates content pages: white backgrounds with #1A1A1A text. Dark mode appears selectively in the footer and in project hero sections where white text overlays photographic or black backgrounds. The system avoids gradients, shadows, and decorative color fields—every hue serves a structural or legibility purpose. Image palettes from project photography are never extracted into UI tokens; the design relies on the photographs themselves to introduce warmth, saturation, or thematic color.

## Typography

The entire typographic system is set in By Francois Rappo, with the exact source file identified as By Francois Rappo-17138443775533187087, designed by Francois Rappo and distributed by Optimo Sarl. The face carries classical proportions with contemporary crispness, making it equally effective at display sizes and compact body settings. Weights are restrained: Regular (400) for most text, with Medium (500) appearing sparingly for emphasis in footer headings and select labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Francois Rappo | 3.25rem | 400 | 1.05 | -0.02em | Page titles, major section headings |
| section-display | By Francois Rappo | 2rem | 400 | 1.2 | -0.01em | Subsection headings, pull quotes |
| body | By Francois Rappo | 1.1875rem | 400 | 1.315 | normal | Paragraphs, navigation, news descriptions |
| body-small | By Francois Rappo | 1rem | 400 | 1.25 | normal | Captions, footer text, partner locations |
| label | By Francois Rappo | 0.8125rem | 400 | 1.25 | normal | Tags, dates, metadata badges |
| navigation | By Francois Rappo | 1.1875rem | 400 | 1.315 | normal | Primary nav, header links |

The hero-display size at 52px with tight negative tracking creates immediate presence on page load. Body text at 19px with 25px line height maintains comfortable reading density for editorial content. The 16px body-small size handles captions and dense footer information without feeling cramped. Labels at 13px appear as date stamps and category tags, kept legible through generous line height. Verify licensing for these families before production use.

## Layout

The layout system is built on a fluid grid with consistent horizontal margins and vertical section spacing. Content is typically constrained by side margins of 24px, expanding to 32px or 48px for internal padding on larger elements. The grid favors asymmetry when needed—hero sections often break the margin with full-bleed imagery offset by negative margins, while text content maintains strict alignment.

Vertical rhythm follows a doubling pattern from the 4px base unit. Tight spacing at 8px handles internal element gaps and tag padding. Compact 16px spacing appears between related text blocks. Comfortable 24px spacing separates distinct content groups. Generous 48px spacing precedes major headings or section breaks. Section spacing at 96px and section-large at 192px create dramatic pauses between page regions, particularly between the final content block and the footer.

The partner grid on the About page uses a four-column layout with consistent gutters, each cell containing a square portrait photograph with name and location stacked beneath. News listings employ a hybrid approach: a top row of date-stamped events in four columns, followed by a two-column grid of press articles with thumbnail images. The Contact page presents a two-by-two image grid of office buildings, with the page title occupying the full width above.

## Visual language

The visual language is characterized by restraint, scale, and material honesty. Photography is presented without borders, shadows, or decorative frames—images sit directly on the white background or extend to full bleed. The black-and-white partner portraits establish a consistent, dignified tone that unifies individual personalities into a collective identity. Project and office photography retains its original color, creating natural variation against the neutral interface.

Typography functions as the primary visual element. The oversized Pentagram wordmark in the footer demonstrates the system's comfort with extreme scale—letterforms become architectural, functioning as both branding and spatial divider. Headings on content pages achieve similar presence through size and tracking rather than weight or color variation.

The interface avoids decorative elements: no icons in navigation, no background patterns, no gradient overlays on imagery. Interactive states are implied through cursor change and subtle underline behavior rather than color shifts. Tags and badges use minimal pill or rounded-rectangle shapes with muted backgrounds, never competing with content for attention.

## Components

### Site header

- **Anatomy**: Fixed-position bar containing the Pentagram wordmark (text, not image) at left, primary navigation links at right, search icon, and archive link.
- **Surface**: Transparent or white background, no border, no shadow.
- **Typography**: Navigation token, Regular weight.
- **Spacing**: 24px horizontal margins, 24px vertical padding.
- **Composition**: Flex row with space-between alignment, links evenly distributed at right.

### Page title

- **Anatomy**: Single heading element, often the only text above the fold.
- **Typography**: Hero-display token, #1A1A1A on light pages.
- **Spacing**: 64px top margin, no bottom margin—content sits directly below.
- **Composition**: Left-aligned, full width, no max-width constraint.

### Partner card

- **Anatomy**: Square photograph, partner name in body-small, location in ink-secondary below.
- **Surface**: White background, no border, no radius on image.
- **Typography**: Name in body-small Regular, location in body-small Regular with ink-secondary color.
- **Spacing**: Image fills cell, 8px gap between image and text, minimal bottom margin.
- **Composition**: Stacked vertically within grid cell, text left-aligned.

### News card

- **Anatomy**: Optional thumbnail image, category tag, date, headline with arrow indicator.
- **Surface**: White background, 1px top border in border-light.
- **Typography**: Headline in body token, date in label token, category tag in label with muted background.
- **Spacing**: 24px vertical padding, 32px right padding on text blocks.
- **Composition**: Horizontal flex on desktop with image at left, text at right; stacks vertically on narrower viewports.

### Footer

- **Anatomy**: Multi-section dark region containing news events, contact emails, about text, oversized logotype, and legal links.
- **Surface**: Pure black background (#000000).
- **Typography**: Body-small in ink-tertiary for general text, body-small in canvas for emphasized links and headings, footer subheadings in Medium weight.
- **Spacing**: 24px bottom padding on sections, 24px horizontal margins.
- **Composition**: Asymmetric two-column layout for contact and about sections; full-width logotype below; legal links in a single row at bottom.

### Tag

- **Anatomy**: Inline pill or rounded rectangle containing category or status text.
- **Surface**: Muted gray background (#E3E4E5).
- **Typography**: Label token, Regular weight.
- **Shape**: 4px radius, 4px 8px internal padding.
- **Composition**: Appears inline before headlines or in filter lists.

## Responsive behavior

The system maintains its core character across viewport sizes through proportional scaling and selective reflow. The four-column partner grid should collapse to two columns on tablet and single column on mobile, preserving square aspect ratios on portraits. News event cards reflow from four columns to two, then stack vertically. The oversized footer logotype scales down proportionally, remaining readable without breaking layout.

Navigation should collapse to a menu trigger on mobile rather than wrapping. Page titles maintain hero-display size where possible, scaling down to section-display on the narrowest viewports. Horizontal margins of 24px remain consistent, though internal grid gutters may compress to 16px. Touch targets for footer links and tags should maintain minimum 44px height.

## Practical implementation guidance

### Preserve
- The stark black-white-gray palette; do not introduce accent colors for interactive states.
- The single serif family across all text roles; avoid pairing with sans-serif for UI elements.
- Generous whitespace around imagery and between sections; the site's authority depends on breathing room.
- Full-bleed photography without borders, shadows, or overlays.
- The oversized footer wordmark as a distinctive brand moment.

### Avoid
- Drop shadows on cards or containers; the system relies on flat planes and spacing for separation.
- Gradient backgrounds or decorative patterns; photography supplies all visual richness.
- Multiple font weights within a single component; hierarchy comes from size and color, not weight variation.
- Rounded corners on photographs; keep imagery rectilinear and direct.

### Recommended build order
1. Establish the 4px base grid and spacing tokens.
2. Implement the single serif type family with all six size/role combinations.
3. Build the site header with transparent background and right-aligned navigation.
4. Create the page title component with hero-display sizing.
5. Implement the partner grid with square image constraints and caption stacking.
6. Build news cards with horizontal layout and top-border separation.
7. Construct the footer with inverted colors and the oversized logotype treatment.
8. Add tags and filter UI with muted backgrounds.

### Accessibility
- Ensure text on dark surfaces meets WCAG AA contrast; the canvas-on-black combination exceeds requirements.
- Provide visible focus indicators for keyboard navigation; the minimal UI benefits from clear focus rings.
- Maintain semantic heading hierarchy despite visual uniformity; screen readers depend on proper h1-h6 structure.
- The oversized footer wordmark should be implemented as decorative or include appropriate aria-label if interactive.

## Scope note

This guide covers the homepage, About, News, and Contact page surfaces visible in the supplied images. Project detail pages, search functionality, archive browsing, and mobile navigation patterns are not represented. Motion, hover states, and loading behavior are not described. Measurements are derived from the retained interface values where available.
