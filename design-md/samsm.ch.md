# How samsm.ch is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/samsm.ch-design)

Last updated: 2026-08-10

## Captured pages

[![A long-form travel article with a centered narrow column, serif headings, and a large black-and-white photograph of a Chinese temple with an italic caption.](https://pin.fontofweb.com/9914?format=jpg)](https://design.withfudge.com/share/pin-9914)

[A long-form travel article with a centered narrow column, serif headings, and a large black-and-white photograph of a Chinese temple with an italic caption.](https://design.withfudge.com/share/pin-9914)

[![A tech essay page showing a split keyboard photograph, blue hyperlinks in body text, and the same centered single-column layout with a hairline header rule.](https://pin.fontofweb.com/9913?format=jpg)](https://design.withfudge.com/share/pin-9913)

[A tech essay page showing a split keyboard photograph, blue hyperlinks in body text, and the same centered single-column layout with a hairline header rule.](https://design.withfudge.com/share/pin-9913)

## Overview

This design system describes a personal blog built around classical typography and extreme restraint. The visual identity is that of a digital chapbook: a single centered column of text set in a Computer Modern serif, surrounded by abundant white space. There are no sidebars, no cards, no background colors beyond pure white, and no decorative elements except a single hairline rule beneath the site header. The overall impression is academic and timeless, evoking printed matter more than typical web design. Every element serves readability first, with photographs and captions integrated directly into the text flow without frames or borders. The system is intentionally small, consisting of a handful of typographic roles, one structural layout pattern, and a near-monochrome palette with a single accent color reserved for hyperlinks.

## Colors

The palette is severely limited, built on near-black text against a pure white ground with one functional accent and a pure black for image rendering.

| token | value | use |
|---|---|---|
| ink | #333333 | Primary text, headings, header rule, and all body copy |
| muted-ink | #595959 | Captions, date labels, and secondary metadata |
| canvas | #FFFFFF | Page background; uninterrupted white field |
| link | #1D60A3 | Inline hyperlinks within article body text |
| rule | #333333 | Single-pixel header border |
| image-shadow | #000000 | Image rendering and shadow base |

The design operates in a permanent light mode. There is no dark mode or alternate surface color. The near-black ink (#333333) is slightly softened from pure black, reducing contrast strain during long reading sessions while maintaining crisp legibility. The muted-ink variant appears only in supporting roles—dates below titles and italic captions beneath photographs—creating a clear hierarchy without introducing additional hues. The link blue (#1D60A3) is the only departure from the grayscale system, appearing as underlined text within paragraphs to mark external references and internal navigation. Pure black (#000000) appears in the interface as a text color on div and html elements and serves as the deepest value for image rendering. Photographs are presented in their native color or black-and-white without color treatment, letting image content stand independently against the neutral canvas.

## Typography

The type system is built on three families: Cmu Serif, Cmu Classical Serif Italic, and Applesystem as a system fallback.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| site-title | Cmu Serif | 2rem | 700 | 1.5 | normal | Site name in header |
| article-title | Cmu Serif | 2rem | 700 | 1.5 | normal | Page and post headings |
| section-heading | Cmu Serif | 1.3rem | 600 | 1.1 | normal | Subsection headings within articles |
| subheading | Cmu Serif | 1.3rem | 700 | 1.5 | normal | Secondary headings |
| body | Cmu Serif | 1rem | 400 | 1.5 | normal | All paragraphs and running text |
| caption | Cmu Classical Serif | 0.75rem | 400 | 1.5 | normal | Image captions and figure labels |
| date-label | Cmu Classical Serif | 0.75rem | 400 | 1.5 | normal | Publication dates below titles |
| navigation | Cmu Serif | 1rem | 400 | 1.5 | normal | Header navigation links |

Cmu Serif serves as the primary family in Regular (400), Semibold (600), and Bold (700) weights. Cmu Classical Serif Italic appears exclusively at 12px for captions and dates, lending a traditional scholarly feel to metadata. Applesystem appears in the source at 14px as a fallback family on div elements, though Cmu Serif dominates the visible interface. The site title and article titles share the same 32px bold treatment, creating continuity between the persistent header and individual posts. Body text is set at 16px with a comfortable 24px line height, producing a measured reading rhythm. Section headings within articles use a lighter weight (600) and tighter line height (1.1) than the subheading token, distinguishing structural breaks from emphasized titles. Verify licensing for these families before production use.

## Layout

The layout consists of a single centered column with fixed side margins. The body element carries substantial horizontal margins (approximately 548.5px on each side at the measured viewport), creating a narrow text measure that remains comfortable for extended reading. This is not a fluid container with max-width; the margins scale with viewport width, keeping the column proportionally narrow across screen sizes.

The vertical rhythm is established through consistent spacing between elements. Paragraphs receive 8px top margin, with the first paragraph after a title or heading beginning without additional spacing. Images and figures are separated from surrounding text by 16px margins above and below. Figure captions sit 8px beneath their associated images, tighter than the gap between major text blocks.

The header spans the full content width and concludes with a 1px solid rule in the ink color. Below this rule, the main content area begins with a 16px gap, then the article title and date cluster, followed by the body text flow. There are no grids, no multi-column arrangements, and no aside elements. The entire spatial system serves the single purpose of presenting linear text with occasional embedded media.

## Visual language

The visual character is austere and literary. The absence of decorative elements—no icons, no buttons, no badges, no background patterns—focuses attention entirely on the text and photographs. The header contains only the site name left-aligned and two navigation links right-aligned, separated by whitespace rather than any visual divider beyond the bottom rule.

Photographs are presented at full content width without borders, shadows, or rounded corners. They appear as rectangular blocks interrupting the text flow, with italic captions directly beneath. The caption style, set in the smaller italic family, echoes traditional book and journal conventions.

Hyperlinks are the only interactive visual element. They appear as colored text with underline, using the link blue against the otherwise monochrome page. There are no hover states visible in the static presentation, no visited-link distinctions, and no button-like treatments. The overall effect is that of a carefully typeset document that happens to be delivered through a browser.

## Components

### Site header

- **Anatomy**: Left-aligned site title as a bold text link; right-aligned navigation links ("Archive", "About") in regular weight
- **Surface and text color**: Transparent background; ink-colored text
- **Typography**: Site title uses site-title token; navigation uses navigation token
- **Shape and border**: Full-width block with 1px solid bottom border in ink; 0rem border-radius
- **Spacing**: No internal padding visible; 16px margin below the border separating header from content
- **Composition**: Flex-like arrangement with title left and navigation right, balanced by whitespace

### Article header

- **Anatomy**: Article title followed immediately by date label on the line below
- **Surface and text color**: Transparent; ink for title, muted-ink for date
- **Typography**: Article title uses article-title token; date uses date-label token in italic
- **Spacing**: Title has 32px top margin where it follows the header rule; date sits directly beneath with standard text-gap spacing

### Body text block

- **Anatomy**: Sequential paragraphs of running text
- **Typography**: Body token throughout
- **Spacing**: 8px top margin on paragraphs; first paragraph after title begins without extra space
- **Composition**: Justified or left-aligned text block with even word spacing; no indentation on paragraphs

### Inline link

- **Anatomy**: Text span within paragraph
- **Surface and text color**: Link blue; underline decoration
- **Typography**: Inherits body token with color override
- **States**: No visible hover, focus, or visited states in static presentation

### Figure with image and caption

- **Anatomy**: Full-width image element followed by italic caption paragraph
- **Surface and text color**: Transparent; caption in muted-ink
- **Typography**: Caption uses caption token in italic style
- **Spacing**: Image has 16px vertical margins; caption has 8px top margin and sits close to image
- **Shape**: 0rem border-radius; no border, shadow, or frame on image; rectangular presentation

### Section heading

- **Anatomy**: Text heading within article body, marking topical divisions
- **Typography**: Section-heading token
- **Spacing**: 17.264px top margin (approximately 1.5rem) to separate from preceding content
- **Composition**: Left-aligned, creating clear structural breaks in long articles

## Responsive behavior

The design appears optimized for a centered narrow column on desktop viewports. The substantial side margins suggest the layout may simply scale those margins down on smaller screens rather than switching to a fundamentally different structure. For implementation, consider the following: maintain the single-column structure at all viewport widths; reduce side margins proportionally on tablets and phones, transitioning to modest padding (approximately 1–1.5rem) on the narrowest screens; preserve the 16px body text size as a minimum for readability; allow images to scale to full container width without exceeding viewport bounds; and maintain the header rule and navigation arrangement, potentially stacking navigation below the site title on very narrow screens if horizontal space becomes constrained. No breakpoint-specific behavior is visible in the supplied material.

## Practical implementation guidance

### Preserve
- The exact two-family type hierarchy: Cmu Serif for all primary text, Cmu Classical Serif Italic exclusively for captions and dates
- The 1px hairline header border as the sole decorative line in the entire system
- The generous white space and narrow measure; resist widening the content column
- The pure white background without any surface variation
- The understated link treatment: colored underline without button styling
- The square-cornered, frameless presentation of all elements

### Avoid
- Adding background colors, cards, or containers around content
- Introducing additional font families or weights beyond those specified
- Creating hover effects, animations, or transitions not present in the original
- Using border-radius on images or any element
- Adding sidebar navigation, related posts, or other peripheral modules

### Recommended build order
1. Establish the base page styles: white background, ink text, Cmu Serif at 16px/24px
2. Implement the centered column layout with substantial side margins
3. Build the site header with flex alignment, bottom border, and navigation links
4. Create article header composition with title and date stacking
5. Style body paragraphs with proper vertical rhythm
6. Add figure and caption components with correct spacing and italic treatment
7. Implement inline link color and underline
8. Refine responsive margins for smaller viewports

### Accessibility
- Ensure the link blue (#1D60A3) meets contrast requirements against white; the 4.5:1 ratio should be verified for the specific font and size combination
- Maintain the generous line height (1.5) and paragraph spacing for cognitive accessibility
- Consider adding visible focus indicators for keyboard navigation, as the original design shows no explicit focus states
- Preserve semantic heading hierarchy (h1 for site/article title, h2 for section headings) for screen reader navigation

## Scope note

This guide covers the single-article page template as visible on the supplied blog posts. The homepage, archive listing, and any other page types are not represented. No interactive states, motion design, form elements, or comment systems are included. Applesystem appears in source records as a fallback family but is not visually prominent in the rendered interface. The spacing values reflect the measured desktop presentation and should be treated as practical adaptation targets for implementation.
