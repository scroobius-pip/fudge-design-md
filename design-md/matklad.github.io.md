# How matklad.github.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/matklad.github.io-design)

Last updated: 2026-08-10

## Captured pages

[![Chronological article list with rust-red titles, gray dates, and footer action links with icons](https://pin.fontofweb.com/6334?format=jpg)](https://design.withfudge.com/share/pin-6334)

[Chronological article list with rust-red titles, gray dates, and footer action links with icons](https://design.withfudge.com/share/pin-6334)

[![Page header with matklad wordmark, About Links Blogroll navigation, and dated article index](https://pin.fontofweb.com/6333?format=jpg)](https://design.withfudge.com/share/pin-6333)

[Page header with matklad wordmark, About Links Blogroll navigation, and dated article index](https://design.withfudge.com/share/pin-6333)

## Overview

This design system describes a stark, content-forward personal blog built around readability and typographic restraint. The visual language prioritizes the written word above all else: generous white space, minimal chrome, and a deliberate two-typeface strategy that pairs classical elegance with modern clarity. The site presents a chronological index of technical articles, each entry consisting of a date stamp and a title link. The overall impression is that of a well-typeset manuscript rather than a conventional web application—there are no cards, no shadows, no rounded corners, and no decorative backgrounds. Every visual decision serves the goal of letting the reader focus on the content hierarchy and the author's voice. The rust-red accent color provides the only warm element in an otherwise neutral palette, functioning as a consistent signal for interactive targets across the entire page.

## Colors

The color system is intentionally austere, built on a binary foundation of black and white with a single warm accent. This restraint reinforces the blog's scholarly, text-first character.

| token | value | use |
|---|---|---|
| action | #BA3925 | Article title links, the primary interactive color |
| ink | #000000 | Body text, site wordmark, navigation, footer links, date stamps |

The action color is a muted rust red with strong orange undertones, appearing desaturated enough to feel literary rather than alarming. It is applied exclusively to article title links in the main listing, creating a rhythmic pattern of warm accents down the page. The ink color is pure black, used for all non-interactive text including the site identity, navigation, footer actions, and date labels. Date stamps share the same black as body text but are rendered in the lighter-weight Open Sans Light, causing them to recede visually without requiring a separate color value.

There is no dark mode visible in the supplied material; the system operates entirely on a light canvas. No borders, gradients, or shadows are employed. The background is the browser default white, treated as transparent canvas rather than a specified surface color. Photographic or illustrative content does not appear in the interface itself, though the image-palette data suggests warm neutrals and terracotta tones that harmonize with the chosen action color.

## Typography

The type system relies on two families with sharply differentiated roles: a classical serif for identity and long-form reading, and a light-weight sans-serif for structural and navigational elements.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| site-title | Eb Garamond | 1rem | 400 | 1.7 | 0em | Wordmark in header |
| article-title | Open Sans | 2rem | 300 | 1 | 0em | Article listing links |
| body | Eb Garamond | 1rem | 400 | 1.7 | 0em | Paragraph text, lists |
| date-label | Open Sans | 1rem | 300 | 1.7 | 0em | Publication dates |
| navigation | Eb Garamond | 1rem | 400 | 1.7 | 0em | Header nav links |
| footer-action | Open Sans | 0.875rem | 300 | 1.7 | 0em | Footer utility links |

Eb Garamond, designed by Georg Duffner and Octavio Pardo, carries the classical voice of the site. Its single supplied weight of Regular at 400 is sufficient for all serif duties—the wordmark, navigation, and body content all share this same treatment, creating continuity through family alone. Open Sans, provided by Ascender Corporation in its Light 300 weight, handles everything that needs to feel structural or utilitarian: the large article titles, date labels, and footer actions. The contrast between the delicate, airy Light weight at 2rem for titles and the sturdy Regular serif at 1rem for navigation creates an inverted hierarchy that feels intentional and modern.

The 2rem article title size equals 32px at the root reference, making it an exact whole-number multiple of the 3px relative unit. The 1rem base equals 16px, or approximately 5.33 steps—retained as 1rem for practical implementation. The 0.875rem footer size is 14px, the nearest whole-number multiple below the base. Line heights are generous at 1.7 for reading contexts and tightened to 1 for the large display titles, where the ascenders and descenders of Light-weight letterforms provide sufficient internal breathing room.

Verify licensing for these families before production use. The Eb Garamond and Open Sans files are served from distinct origins.

## Layout

The page follows a single-column, centered layout with no sidebar, no grid of cards, and no complex spatial choreography. Content occupies a narrow, reading-optimal measure centered in the viewport.

The header spans the full width with the site wordmark "matklad" positioned at the left margin and a small set of navigation links—About, Links, Blogroll—aligned to the right. This creates a balanced but asymmetrical header bar that reads as confident and uncluttered. Below the header, the main content area presents a vertical stack of article entries, each comprising a date line followed by a title line. The entries flow with consistent vertical rhythm, neither cramped nor excessively spaced.

The footer gathers utility actions into a horizontal row: "Fix typo" with an edit icon, "Subscribe" with an RSS icon, "Get in touch" with an envelope icon, and "matklad" with a GitHub icon. These are centered and spaced with comfortable gaps, maintaining the page's overall sense of calm order.

No container boundaries, background panels, or elevation changes segment the page. The white canvas is continuous from header through content to footer. The narrow content width—visually estimated at approximately 640-720px of actual text measure—keeps line lengths comfortable for reading and creates generous margins on wider viewports that feel intentional rather than empty.

## Visual language

The visual character is that of a contemporary digital commonplace book or technical journal: authoritative, unadorned, and confident in its restraint. Every element earns its place through function rather than decoration.

The rust-red action color is the sole warm accent in a cool, neutral environment. Its application is disciplined—only article titles receive this treatment, making them instantly scannable as the primary interactive elements. The color's desaturation prevents it from feeling commercial or urgent; instead it reads as ink mixed with iron oxide, appropriate to the scholarly tone.

Iconography appears only in the footer, rendered as small inline glyphs preceding their text labels. These are simple, monochrome, and scaled to match the footer text size without dominating. The edit, RSS, email, and GitHub icons serve as quick visual anchors for familiar actions without introducing a separate icon language.

There are no borders, no dividers between articles, no underlines on links, no hover states visible in the still images, and no background textures. Separation is achieved purely through whitespace and typographic contrast. The rhythm of date-title pairs creates its own visual structure down the page, with the lighter-weight dates acting as rests between the bolder red titles.

The overall density is low-medium: approximately fifteen to twenty articles visible in a full viewport, each consuming significant vertical space due to the large title size and comfortable leading. This density choice reinforces the value placed on each individual piece of content.

## Components

### Site header

- **Anatomy**: Left-aligned wordmark, right-aligned navigation cluster
- **Surface and text color**: Transparent background; ink color for all text
- **Typography**: Site-title token for wordmark; navigation token for links
- **Shape and border**: No visible border, no background fill, sharp corners throughout
- **Spacing**: Compact vertical padding, generous horizontal margins matching content width
- **Composition**: Flexbox-style space-between alignment; navigation links separated by consistent gaps
- **Variants**: None visible

### Article list item

- **Anatomy**: Date stamp on first line, article title link on second line
- **Surface and text color**: Transparent; ink for date, action for title
- **Typography**: Date-label token for date; article-title token for title
- **Shape and border**: No container, no border, no background, sharp corners
- **Spacing**: Consistent vertical gap between entries; date and title of same entry are tightly stacked
- **Composition**: Left-aligned, full content width; no indentation of title relative to date
- **Variants**: None visible; all entries share identical treatment regardless of age or prominence

### Footer action bar

- **Anatomy**: Horizontal row of icon-plus-text action links
- **Surface and text color**: Transparent; ink color for text and icons
- **Typography**: Footer-action token
- **Shape and border**: No visible separator from main content, sharp corners
- **Spacing**: Centered alignment; even distribution of items with comfortable gaps
- **Composition**: Icons precede text labels with tight internal spacing
- **Variants**: None visible

### Navigation link

- **Anatomy**: Plain text link
- **Surface and text color**: Ink on transparent
- **Typography**: Navigation token
- **Shape and border**: No underline visible in default state, sharp corners
- **Spacing**: Horizontal gaps between items in header cluster
- **Composition**: Inline, right-aligned group
- **Variants**: None visible

## Responsive behavior

The supplied images show a single viewport width. Based on the layout characteristics, the following responsive guidance is recommended:

The narrow, centered content measure suggests the design was conceived with readability constraints in mind. On smaller viewports, maintain the single-column structure with reduced horizontal margins. The header's split composition—wordmark left, navigation right—should stack vertically on very narrow screens to prevent crowding, with navigation links arranged horizontally beneath the wordmark.

The large 2rem article titles may require slight reduction on small screens to prevent excessive line wrapping, though the Light weight's compact character shapes provide some tolerance. The 1rem base text and 1.7 line height should remain comfortable across viewport sizes.

No breakpoint-specific behavior is visible in the source material. Implement smooth scaling of margins rather than abrupt layout changes. The footer action bar may need to wrap to two rows on narrow viewports if horizontal space becomes constrained.

## Practical implementation guidance

### Preserve
- The stark white canvas and absence of decorative surfaces
- The two-typeface system with serif for identity and sans-serif for structure
- The disciplined use of rust-red for article titles only
- The generous line height of 1.7 for reading contexts
- The tight line height of 1 for large display titles
- The centered, narrow content measure
- The absence of borders, shadows, and rounded corners throughout

### Avoid
- Adding background colors or elevation to article entries
- Introducing additional accent colors beyond the rust red
- Underlining links or adding other decorative link treatments
- Using bold weights where the source employs only Regular and Light
- Card-based layouts, grids, or sidebar arrangements
- Decorative dividers between articles—whitespace is sufficient

### Recommended build order
1. Establish the white canvas and centered content container with comfortable max-width
2. Implement the two font families with correct weights and sizes
3. Build the header with wordmark and navigation in the split composition
4. Create the article list item pattern with date-title stacking and correct colors
5. Populate with sample content to verify vertical rhythm
6. Add the footer action bar with icon-text pairs
7. Fine-tune spacing and responsive behavior

### Accessibility
- Ensure the rust-red action color meets contrast requirements against white; the supplied value #BA3925 may need verification for WCAG AA compliance at the 2rem size
- Provide visible focus indicators for keyboard navigation, as the source shows no default focus styles
- Maintain the semantic HTML structure with proper heading hierarchy for article titles
- Consider adding hover and active states that do not rely solely on color change
- The Light weight of Open Sans at 2rem should be checked for readability; avoid going lighter or smaller with this weight

## Scope note

This guide covers the article index page of a personal blog. It does not include article detail pages, dark mode, form elements, search functionality, or interactive states beyond the static visible presentation. No radius values were retained from the source interface, consistent with the fully sharp corners visible throughout.
