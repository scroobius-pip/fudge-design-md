# How curated.supply is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/curated.supply-design)

Last updated: 2026-08-10

## Captured pages

[![Minimal footer with starburst logo, email subscription pill, and affiliate disclosure on light gray background](https://pin.fontofweb.com/4066?format=jpg)](https://design.withfudge.com/share/pin-4066)

[Minimal footer with starburst logo, email subscription pill, and affiliate disclosure on light gray background](https://design.withfudge.com/share/pin-4066)

[![Full footer layout with starburst logo, email capture, multi-column navigation links, and copyright attribution](https://pin.fontofweb.com/4065?format=jpg)](https://design.withfudge.com/share/pin-4065)

[Full footer layout with starburst logo, email capture, multi-column navigation links, and copyright attribution](https://design.withfudge.com/share/pin-4065)

[![Homepage hero with centered headline, subscription form, category filter pills, and three-column product card grid](https://pin.fontofweb.com/4064?format=jpg)](https://design.withfudge.com/share/pin-4064)

[Homepage hero with centered headline, subscription form, category filter pills, and three-column product card grid](https://design.withfudge.com/share/pin-4064)

[![Browse categories page with tab navigation and four-column grid of category cards with product images and counts](https://pin.fontofweb.com/4063?format=jpg)](https://design.withfudge.com/share/pin-4063)

[Browse categories page with tab navigation and four-column grid of category cards with product images and counts](https://design.withfudge.com/share/pin-4063)

## Overview

Curated Supply presents itself as a quiet, confident product discovery platform. The visual system strips away decoration in favor of clarity: a warm light-gray canvas holds crisp white cards, typography stays in a single weight family with subtle size gradations, and every interactive element adopts a soft pill shape. The result feels more like a well-edited print catalog than a conventional e-commerce interface. Product photography sits at center stage, framed by generous padding and rounded corners that echo the site's rounded buttons and input fields. The starburst mark in the upper left serves as the sole brand flourish, repeated consistently across homepage and interior pages. Navigation is sparse—top-level links float in a centered row, while deeper wayfinding lives in the expansive footer grid. The overall rhythm alternates between breathing room and tight information density: hero areas stretch vertically with centered text, while browse grids pack multiple cards into clean rows.

## Colors

The palette is intentionally narrow, built on a near-monochrome foundation with one warm neutral that separates content from chrome. Every surface choice supports the goal of letting product photography provide the color.

| token | value | use |
|---|---|---|
| canvas | `#F3F3F3` | Page background behind all content; creates subtle depth against white cards |
| surface | `#FFFFFF` | Cards, input fields, button fills, and any elevated container |
| ink | `#1A1A1A` | Primary text, active navigation, category names, product titles |
| muted-ink | `#737373` | Secondary labels, disabled states, footer section headings, affiliate disclosure, item counts |
| border | `#E5E5E5` | Hairline rules around pills, input fields, and subtle card delineation |

The canvas color reads as a warm light gray rather than pure white, preventing the sterility of a fully monochrome environment. White surfaces pop against this ground without harsh contrast. Ink carries a slight warmth that keeps black text from feeling cold against the gray. Muted-ink serves as the workhorse for hierarchy reduction: it appears in tab labels that are not selected, in the small superscript counts on category pills, and in the footer column headers. Border is used sparingly, most visibly as the thin ring around the email subscription field and category filter pills. No gradients, shadows, or accent colors appear in the interface itself; any chromatic energy comes entirely from the product photography within cards.

## Typography

The site uses Geist, a contemporary sans-serif family, in two weights: Regular for body reading and Medium for emphasis, labels, and display headings. The type system is compact, with sizes snapping to a 4px grid.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 2.5rem | 500 | 1.1 | -0.02em | Homepage headline, major page titles |
| section-display | Geist | 2rem | 500 | 1.15 | -0.01em | Browse page headings, section intros |
| body | Geist | 1rem | 400 | 1.5 | 0 | Default paragraph text, descriptions |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0 | Form placeholders, footer links, metadata |
| label | Geist | 0.875rem | 500 | 1.4 | 0 | Category pills, navigation tabs, button text |
| caption | Geist | 0.75rem | 400 | 1.4 | 0 | Footer column headers, counts, legal copy |

Display sizes use tight negative tracking that gives headlines a crafted, editorial density. Body sizes stay neutral with zero tracking for comfortable reading at smaller sizes. The weight contrast between Regular and Medium is subtle but sufficient: Medium appears in every interactive label and display line, while Regular handles all descriptive and navigational reading. No italic, bold, or condensed styles are employed. Verify licensing for these families before production use. Geist was designed by Basement Studio (Andrés Briganti, Mateo Zaragoza) and is available through Vercel.

## Layout

The layout follows a centered, contained model with generous outer margins and consistent internal gutters. The homepage hero occupies a full-width band with centered text alignment, while interior pages shift to left-aligned section headings with full-bleed card grids.

The grid system uses a fluid approach: category browse pages display four equal columns of cards with fixed gaps, while the homepage product grid shows three larger cards. Card aspect ratios appear to be roughly square, with product images centered and scaled to fit within generous internal padding. The footer spans full width and organizes links into four equal columns with a left-hand brand column that holds the logo, email capture, and legal text.

Spacing follows a 4px base unit. Major section breaks use 5rem of vertical separation. Content gaps between related elements sit at 1.5rem. Card internal padding is 1.25rem on all sides. The email capture pill uses compact horizontal padding of 1.25rem with slightly reduced vertical padding at 0.625rem.

Horizontal page margins appear substantial on desktop—approximately 3rem to 4rem on each side—creating a framed, gallery-like presentation. The top navigation bar floats without a visible background, with links centered and the starburst logo anchored to the left edge.

## Visual language

The visual language is defined by softness and restraint. Every interactive element is pill-shaped: the email input, category filters, navigation tabs, and search button all share the same full-rounded geometry. This creates a friendly, approachable tone that counterbalances the editorial precision of the typography.

Cards use 1rem corner rounding, large enough to feel contemporary without becoming playful. Product images sit on pure white card backgrounds with no border, no shadow, and no hover state visible in the static view. The only depth cue is the subtle contrast between card white and page gray.

The starburst logo mark—an eight-pointed asterisk—functions as the sole brand graphic. It appears at small scale in the upper left, rendered in the ink color, and never competes with product imagery. No other icons, illustrations, or decorative patterns appear in the interface.

Photography treatment is consistent: products are shot on white or transparent backgrounds, centered in the frame, with even lighting that eliminates harsh shadows. The result is a clean, catalog-like presentation where every item feels equally considered.

## Components

### Navigation bar

- **Anatomy**: Starburst logo mark left-aligned; centered text links (Discover, Browse, Blog, Info); search icon in a pill button at far right
- **Surface**: Transparent background, no visible border or shadow
- **Typography**: `{typography.label}` for all links
- **Shape**: Search button uses `{rounded.pill}` with `{colors.surface}` fill and `{colors.border}` hairline
- **Spacing**: Links spaced approximately 1.5rem apart; generous top margin from page edge

### Hero section

- **Anatomy**: Centered headline, subheadline, and email capture pill stacked vertically
- **Surface**: Transparent, sitting directly on `{colors.canvas}`
- **Typography**: `{typography.hero-display}` for headline; `{typography.body}` for subheadline in `{colors.muted-ink}`
- **Spacing**: Headline to subheadline approximately 1rem; subheadline to form approximately 1.5rem

### Email capture pill

- **Anatomy**: Single-line input with placeholder text and "Subscribe" action text inline at right
- **Surface**: `{colors.surface}` fill with `{colors.border}` hairline
- **Typography**: `{typography.body-small}` for placeholder; `{typography.label}` for action text
- **Shape**: `{rounded.pill}` with full horizontal padding
- **Spacing**: Internal padding approximately 0.625rem vertical, 1.25rem horizontal

### Category filter pills

- **Anatomy**: Horizontal scroll or wrap of pill buttons, each with optional icon, label, and superscript count
- **Surface**: `{colors.surface}` fill with `{colors.border}` hairline; active state not visible
- **Typography**: `{typography.label}` for text; `{typography.caption}` for superscript count in `{colors.muted-ink}`
- **Shape**: `{rounded.pill}` with consistent horizontal padding
- **Composition**: Pills arranged in horizontal sequence with 0.75rem gap; "See More" link at far right in same row

### Product card

- **Anatomy**: White card containing product image, external-link icon in upper right, brand and category label, product name
- **Surface**: `{colors.surface}` with `{rounded.card}` corners
- **Typography**: `{typography.caption}` for brand and category in `{colors.muted-ink}`; `{typography.body-small}` for product name in `{colors.ink}`
- **Spacing**: `{spacing.card-padding}` on all sides; image occupies upper portion with approximately 1:1 aspect ratio
- **Composition**: External-link arrow icon positioned absolute top-right, rendered in `{colors.muted-ink}`

### Category browse card

- **Anatomy**: White card containing category product image, category name left-aligned, item count right-aligned
- **Surface**: `{colors.surface}` with `{rounded.card}` corners
- **Typography**: `{typography.body-small}` for category name; `{typography.caption}` for count in `{colors.muted-ink}`
- **Spacing**: `{spacing.card-padding}` on all sides; image centered with generous vertical breathing room

### Footer

- **Anatomy**: Full-width section with logo and email capture in left column; four columns of navigation links; copyright and attribution at bottom
- **Surface**: `{colors.canvas}` background, continuous with page
- **Typography**: `{typography.footer-section-heading}` for column headers; `{typography.body-small}` for links; `{typography.caption}` for legal text
- **Composition**: Four equal link columns with 2rem horizontal gaps; bottom bar splits copyright left and attribution right

## Responsive behavior

The desktop layout assumes a wide viewport with substantial side margins. At narrower widths, the four-column category grid should collapse to two columns, then to a single column with full-width cards. The three-column homepage product grid should similarly step down to two columns, then one.

The category filter pill row likely requires horizontal scrolling on mobile rather than wrapping, given the number of items and the "See More" anchor at the end. Navigation links should collapse to a minimal menu or hamburger pattern below approximately 768px, though this behavior is not visible in the supplied captures.

Footer columns should stack vertically on mobile, with the brand and email capture block remaining at top. Type sizes may scale down slightly at small viewports, though the hierarchy should remain legible: hero display should not drop below 1.75rem to preserve impact.

## Practical implementation guidance

### Preserve
- The near-monochrome palette with warm gray canvas; it is the site's signature restraint
- Pill-shaped controls throughout; this geometry is the primary friendly gesture in an otherwise austere system
- Generous card padding and rounded corners; the whitespace is as important as the content
- Centered homepage hero with tight tracking on display type
- Consistent product photography treatment: centered, shadowless, on white

### Avoid
- Adding accent colors or gradients to the interface; the photography provides all necessary color
- Harsh shadows or elevation effects on cards; the flat layering is intentional
- Tightening page margins below 2rem on any viewport; the framed presentation requires breathing room
- Using bold weight where Medium is specified; the weight contrast is deliberately narrow

### Recommended build order
1. Establish the 4px spacing unit and apply canvas, surface, and ink colors
2. Set up Geist Regular and Medium with the six type tokens
3. Build the pill component with border, padding, and full rounding
4. Implement the navigation bar with transparent background and centered links
5. Create the card component with 1rem rounding and consistent internal padding
6. Lay out the homepage hero and category browse grids
7. Construct the footer with multi-column link organization

### Accessibility
- Ensure the muted-ink text on canvas meets WCAG AA contrast ratios; at `#737373` on `#F3F3F3`, verify computed contrast is at least 4.5:1 for body text
- Provide visible focus states for pill buttons and navigation links; the current design shows no visible focus ring
- Add `aria-label` to the starburst logo link and search button, which rely on icon-only presentation
- Consider increasing touch targets for category pills on mobile to at least 44px height
- Ensure the email capture form has an associated `label` element or `aria-label` for screen reader users

## Scope note

This guide covers the homepage hero, category browse grid, and footer surfaces visible in the supplied captures. Product detail pages, search results, mobile navigation patterns, hover states, loading states, and any dark mode are not represented. Measurements are practical adaptation targets derived from visual inspection of the desktop interface.
