# How technicshistory.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/technicshistory.com-design)

Last updated: 2026-08-10

## Captured pages

[![Blog post entry featuring a large historical railway viaduct illustration with serif headline, italic metadata, and body text excerpt with continue-reading link](https://pin.fontofweb.com/4672?format=jpg)](https://design.withfudge.com/share/pin-4672)

[Blog post entry featuring a large historical railway viaduct illustration with serif headline, italic metadata, and body text excerpt with continue-reading link](https://design.withfudge.com/share/pin-4672)

[![Sidebar with search field and archives list showing dotted hairline separators between month-year entries in a clean vertical stack](https://pin.fontofweb.com/4671?format=jpg)](https://design.withfudge.com/share/pin-4671)

[Sidebar with search field and archives list showing dotted hairline separators between month-year entries in a clean vertical stack](https://design.withfudge.com/share/pin-4671)

## Overview

This design system describes a scholarly blog with a classical, print-inspired aesthetic. The visual language centers on historical subject matter presented through a restrained, editorial layout. The site uses a single serif type family—Libre Baskerville—across all text, creating a cohesive reading experience that evokes traditional book typography. The design prioritizes content hierarchy through scale variation and italic styling rather than color or decorative elements. A clean white canvas provides maximum contrast for both text and historical imagery, while generous vertical spacing creates breathing room between posts and sidebar elements. The overall impression is of a carefully curated publication where the writing and illustrations take precedence over interface chrome.

## Colors

The palette is intentionally minimal, drawing from classical print conventions. All interface colors serve functional roles rather than decorative ones.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, links, and all interactive text |
| canvas | #ffffff | Page background, card surfaces, and input fields |
| muted-ink | #4a4a4a | Secondary metadata, captions, and de-emphasized text |
| hairline | #b4b4b4 | Dotted separators in archive lists and subtle dividers |

The design operates in a single light mode. There is no dark mode visible in the supplied material. The near-absence of color in the interface directs attention toward the historical illustrations, which carry the full chromatic range of the page. Black ink on white canvas provides the highest possible reading contrast, appropriate for long-form scholarly content. The muted-ink tone appears in metadata lines such as dates and categories, establishing hierarchy without introducing additional hue. Hairline gray appears only as functional separators, rendered as dotted lines that feel lighter than solid rules. No accent colors, gradients, or shadows are present in the interface layer.

## Typography

All text is set in Libre Baskerville, a transitional serif designed by Pablo Impallari and Rodrigo Fuenzalida, available through Google Fonts. The family provides Regular, Italic, and Bold weights. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Libre Baskerville | 2rem | 700 | 1.2 | -0.01em | Post titles and major headings |
| section-display | Libre Baskerville | 1.25rem | 700 | 1.3 | 0 | Sidebar headings, sub-section titles |
| body | Libre Baskerville | 1rem | 400 | 1.6 | 0 | Paragraph text and primary content |
| body-italic | Libre Baskerville-Italic | 1rem | 400 | 1.6 | 0 | Excerpts, quotes, and emphasized phrases |
| label | Libre Baskerville-Italic | 0.875rem | 400 | 1.4 | 0 | Dates, categories, bylines, metadata |
| navigation | Libre Baskerville | 0.875rem | 400 | 1.4 | 0 | Archive links, pagination, utility links |

The type scale is built on a 4px relative unit. Display sizes use whole-number multiples: 2rem (32px) for post titles and 1.25rem (20px) for sidebar headings. Body text sits at 1rem (16px), the root reference. Smaller utility text at 0.875rem (14px) handles navigation and metadata. Italic styling carries semantic weight in this system—it distinguishes metadata from content, signals linked continuation text, and provides voice for excerpts. Bold appears only at display sizes, never in body text. Line heights are generous, with body text at 1.6 creating comfortable measure for multi-paragraph reading. Letter spacing remains tight to zero throughout, with a slight negative value on large headings preventing looseness.

## Layout

The page follows an asymmetric two-column structure with a dominant content area and a narrower sidebar. The main column occupies roughly two-thirds of the width, while the sidebar takes the remaining third. This proportion creates clear editorial hierarchy without requiring heavy borders or background color shifts.

Content flows vertically with substantial section spacing of 3rem between major regions. Individual posts within the main column stack with consistent internal spacing of 1.5rem between title, metadata, image, and excerpt. The sidebar maintains its own vertical rhythm, with search and archives sections separated by equivalent whitespace.

Post layouts follow a predictable pattern: large serif title left-aligned at full column width, followed by stacked italic metadata lines, then a full-width historical illustration, then a paragraph excerpt with italic continue-reading link. This single repeating structure creates scannable consistency across the blog index.

The sidebar sits flush to the content area without visible background separation. Archive entries stack vertically with dotted hairline separators between each month-year link, creating a list that reads as continuous text rather than discrete buttons. No cards, panels, or elevated containers appear in the sidebar treatment.

## Visual language

The aesthetic draws from nineteenth-century print publications and academic journals. Historical illustrations function as the primary visual interest, rendered at full column width with natural aspect ratios preserved. These images carry aged color palettes—sepia tones, hand-colored engravings, and faded watercolor washes—that contrast with the stark monochrome interface.

Typography provides the only intentional visual texture. The interplay between upright and italic variants of a single family creates hierarchy without weight or color changes. Dotted separators reference traditional index and table-of-contents conventions. The absence of rounded corners, shadows, or background fills reinforces the flat, page-like quality.

Links are indicated through underline and italic styling rather than color change. The continue-reading link combines both treatments—italic text with underline and a trailing arrow glyph—making its action explicit without departing from the monochrome palette. This restraint ensures that colorful historical imagery remains the focal point of each post entry.

## Components

### Post card

The post card is the primary content unit, presenting a single blog entry in the main column.

- **Anatomy**: Title, metadata block, featured image, excerpt paragraph, category tag, continue-reading link
- **Surface**: Transparent background on white canvas; no border, shadow, or fill
- **Typography**: Title uses `{typography.hero-display}`; metadata uses `{typography.label}`; excerpt uses `{typography.body}`; continue-reading uses `{typography.body-italic}` with underline
- **Shape**: `{rounded.panel}`; all elements align to column edges
- **Spacing**: 1.5rem between internal elements; 3rem below each post card before the next entry or pagination
- **Composition**: Title and metadata left-aligned; image full-width within column; excerpt left-aligned with comfortable measure
- **Variants**: None visible; all posts follow identical structure

### Sidebar search

A minimal search input in the sidebar header area.

- **Anatomy**: Section heading, text input with placeholder
- **Surface**: Transparent background; no visible input border except bottom underline
- **Typography**: Heading uses `{typography.section-display}`; placeholder uses `{typography.body-italic}`
- **Shape**: `{rounded.input}`; underline only on bottom edge
- **Spacing**: 1.5rem below heading before input; 3rem below entire search section before archives

### Archives list

A vertical index of month-year links representing post history.

- **Anatomy**: Section heading, stacked link entries with dotted separators
- **Surface**: Transparent background; no card or panel treatment
- **Typography**: Heading uses `{typography.section-display}`; entries use `{typography.navigation}`
- **Shape**: No border radius; separators are horizontal dotted hairlines
- **Spacing**: Tight vertical packing with separators providing rhythm; generous space above section heading
- **Composition**: Full sidebar width; left-aligned text; separators extend full width
- **States**: Default links appear in ink color with no underline; hover state not visible in supplied images

### Continue-reading link

An inline text link at the end of post excerpts.

- **Anatomy**: Italic text phrase with trailing arrow glyph
- **Surface**: No background; inline with excerpt paragraph
- **Typography**: `{typography.body-italic}` with underline
- **Shape**: No border or padding; flows as continuous text
- **Composition**: Appears at end of excerpt, often mid-sentence with ellipsis preceding

## Responsive behavior

The two-column layout likely collapses to a single column on narrower viewports, with the sidebar moving below the main content. No specific breakpoint values are visible in the supplied material. When adapting, maintain the typographic scale rather than reducing sizes dramatically—the classical aesthetic depends on readable serif text. Archive lists may benefit from multi-column treatment if sidebar width becomes excessive in wider viewports. Images should remain full-width within their container at all sizes, preserving natural aspect ratios without cropping.

## Practical implementation guidance

### Preserve
- The single-family typographic system using only Libre Baskerville variants
- Generous line height of 1.6 for body text to maintain comfortable reading
- Italic styling as a semantic and hierarchical tool, not merely emphasis
- Full-width historical imagery with natural aspect ratios
- Dotted hairline separators for archive list rhythm
- The monochrome interface against colorful historical content

### Avoid
- Introducing additional font families or sans-serif alternatives
- Adding background fills, borders, or shadows to post cards or sidebar sections
- Using color alone to indicate links—maintain underline and italic conventions
- Rounding corners on any element; keep the sharp editorial aesthetic
- Crowding the archive list with excessive vertical spacing between entries

### Recommended build order
1. Establish the 4px relative unit and typographic scale with Libre Baskerville loaded at all weights
2. Implement the single-column reading layout with correct measure and line height
3. Add the two-column grid with asymmetric proportions
4. Build the post card component with title-metadata-image-excerpt structure
5. Implement the sidebar with search and archives sections
6. Refine dotted separator styling and link treatments
7. Add historical imagery with responsive width behavior

### Accessibility
- Ensure link underlines remain visible for colorblind users who may not perceive italic styling differences
- Provide visible focus indicators for keyboard navigation, as the monochrome palette offers limited color contrast for default browser outlines
- Consider increasing touch targets for archive links on mobile viewports, as the current compact vertical packing may challenge precise tapping
- Maintain the high contrast between ink and canvas text pairings, which already exceeds WCAG AA requirements

## Scope note

This guide covers the blog index page with post listings and sidebar utilities. The about page, individual post pages, search results, and any navigation header or footer areas are not represented in the supplied material. Measurements are practical adaptation targets. No motion, interaction states, or mobile-specific layouts are documented.
