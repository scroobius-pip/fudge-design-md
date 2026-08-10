# How iamnoman.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/iamnoman.com-design)

Last updated: 2026-08-10

## Captured pages

[![About page with split layout showing biography text on the left and a vertical work history timeline on the right against a black background.](https://pin.fontofweb.com/1217?format=jpg)](https://design.withfudge.com/share/pin-1217)

[About page with split layout showing biography text on the left and a vertical work history timeline on the right against a black background.](https://design.withfudge.com/share/pin-1217)

[![About page in a narrower viewport with stacked biography and work history sections, maintaining the dark theme and typographic hierarchy.](https://pin.fontofweb.com/1216?format=jpg)](https://design.withfudge.com/share/pin-1216)

[About page in a narrower viewport with stacked biography and work history sections, maintaining the dark theme and typographic hierarchy.](https://design.withfudge.com/share/pin-1216)

[![Footer section with a large white signature mark centered on black, featuring a collaboration CTA and social links in the corners.](https://pin.fontofweb.com/1215?format=jpg)](https://design.withfudge.com/share/pin-1215)

[Footer section with a large white signature mark centered on black, featuring a collaboration CTA and social links in the corners.](https://design.withfudge.com/share/pin-1215)

[![Project showcase displaying light and dark mode UI cards for Bland, with colorful inline icons and a live project link.](https://pin.fontofweb.com/1214?format=jpg)](https://design.withfudge.com/share/pin-1214)

[Project showcase displaying light and dark mode UI cards for Bland, with colorful inline icons and a live project link.](https://design.withfudge.com/share/pin-1214)

## Overview

This design system describes a personal portfolio website for a product designer. The visual language is aggressively minimal: an unbroken black canvas serves as the foundation for all content, with white typography providing the sole source of luminance. The system rejects decorative excess in favor of spatial confidence and typographic precision. Content is organized into clear hierarchical zones—a persistent header, narrative biography blocks, structured work history, project showcases, and a dramatic footer anchored by a large signature mark. The overall impression is editorial and self-assured, treating the portfolio as a designed object rather than a conventional web page. Every element earns its place through contrast, scale, or negative space.

## Colors

The palette is intentionally reductive, built on a pure black canvas with white ink and a single muted tone for secondary information. No gradients, shadows, or decorative colors appear in the interface chrome.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background for all pages and sections |
| ink | #ffffff | Primary text, headings, links, and signature mark |
| muted-ink | #7a7a7a | Secondary text, timestamps, company handles, faded history entries |
| surface | #111111 | Elevated card backgrounds for project showcases |
| border | #333333 | Hairline dividers under header, between history items, and around cards |
| accent-link | #ffffff | Underlined inline links within body text |

The color strategy is monochromatic with absolute contrast. The black canvas absorbs light and creates a gallery-like environment for project imagery. White ink maintains crisp legibility at all sizes. The muted-ink tone introduces temporal depth in the work history, where older entries fade toward gray while recent roles remain fully white. Project cards use a near-black surface to separate them from the canvas without introducing a new color temperature. The accent-link token reinforces that all interactive text remains white, with underline as the sole affordance. No colored accents, badges, or status indicators appear in the interface itself; color appears only within project screenshots where it belongs to the showcased work.

## Typography

Two type families create a clear functional division: Neue Haas Grotesk Pro-65 Medium carries display and heading duties with geometric authority, while Inter handles all body, label, and navigation text with neutral readability.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Neue Haas Grotesk Pro-65 Medium | 2.5rem | 500 | 1.1 | -0.02em | Page titles, footer collaboration CTA |
| section-display | Neue Haas Grotesk Pro-65 Medium | 1.5rem | 500 | 1.2 | -0.01em | Subsection headings, project names |
| body | Inter | 1rem | 400 | 1.6 | 0em | Biography paragraphs, descriptions |
| label | Inter | 0.875rem | 400 | 1.4 | 0em | Work history entries, metadata |
| navigation | Inter | 0.875rem | 400 | 1 | 0em | Header links, footer social links |
| legal-copy | Inter | 0.75rem | 400 | 1.4 | 0em | Copyright, build credits |

Neue Haas Grotesk Pro-65 Medium is credited to Christian Schwartz After Max Miedinger, available from Commercial Type. Inter is credited to Rasmus Andersson, available from Rsms. Verify licensing for these families before production use.

The type scale is built on a 4px relative unit. Display sizes use tight negative tracking for a composed, editorial feel. Body text maintains generous line height for comfortable reading in longer paragraphs. The weight distinction is minimal—Medium for display, Regular for everything else—creating hierarchy through size and spacing rather than boldness.

## Layout

The layout system favors asymmetry and generous negative space. Pages are built on a fluid canvas with content aligned to logical zones rather than rigid grids.

The header spans the full width with a thin bottom border, containing a logomark on the left and navigation links on the right. No container max-width constrains the header; it breathes against the viewport edges.

The about page uses a split composition at wider widths: biography content occupies the left portion with a comfortable max-width for reading, while work history stacks vertically on the right. At narrower widths, these zones collapse into a single column with biography preceding history. The biography block itself is constrained to approximately 28rem for optimal line length.

Section spacing is dramatic. Major zones are separated by 6rem or more of black canvas, allowing each content block to feel like a distinct beat. Within content blocks, gaps of 1.5rem separate paragraphs and related elements. Tight 0.5rem spacing handles inline relationships like labels and their values.

The footer inverts the header's spread: a large signature mark dominates the center, with small legal text and social links pushed to the corners. This creates a compositional balance that feels signed and personal rather than templated.

Project showcases use contained cards with internal padding, centered within the black canvas. The card structure provides a boundary for complex project imagery while maintaining the site's dark continuity.

## Visual language

The visual language is defined by restraint and signature. The black canvas is not merely a background but an active design element that frames all content as intentional. White elements appear to float in this void, their edges crisp and their presence deliberate.

The signature mark is the system's most distinctive visual element—a flowing white script that occupies substantial horizontal space in the footer. It transforms the footer from functional closure into personal statement. The mark's organic curves contrast with the geometric precision of the typography, introducing human warmth without breaking the monochrome discipline.

Project imagery introduces the only color in the system, and it does so within controlled boundaries. Cards contain these colorful showcases, preventing visual spill into the surrounding canvas. The contrast between the restrained interface and vibrant project work creates a gallery effect: the frame disappears, the art speaks.

There are no decorative shapes, no background patterns, no ornamental dividers beyond the single-pixel hairline. The border token functions as a subtle seam rather than a frame. Rounded corners appear only on project cards, softening the containment of external imagery without affecting the site's sharp editorial tone elsewhere.

## Components

### Site Header

- **Anatomy**: Logomark ("n-i" in italicized lowercase) on the left, navigation links ("Work", "Contact") on the right
- **Surface**: Transparent over canvas, with 1px bottom border in border color
- **Typography**: Navigation token, white ink
- **Spacing**: 1rem vertical padding, 1.5rem horizontal padding
- **Composition**: Flex row, space-between alignment, full viewport width

### Biography Block

- **Anatomy**: Page title with inline avatar image, followed by multiple paragraphs with inline links
- **Surface**: Transparent over canvas
- **Typography**: Hero-display for the "About [avatar] Noman Ijaz" heading; body token for paragraphs
- **Shape**: No border or background; text flows naturally
- **Spacing**: 1.5rem gap between paragraphs; comfortable max-width for reading
- **Composition**: Left-aligned, vertically stacked

### Work History Item

- **Anatomy**: Role title with optional company handle, date range on the right
- **Surface**: Transparent; separated by 1px bottom border
- **Typography**: Label token for role and date; muted-ink for company handles and older entries
- **Spacing**: 1rem vertical padding per item
- **Composition**: Flex row with space-between; full width within its container
- **Variants**: Recent entries use full white ink; older entries fade to muted-ink for temporal depth

### Project Card

- **Anatomy**: Contained image or screenshot showing project interface, with project name and live link below
- **Surface**: Near-black surface background with 1px border
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem internal padding
- **Composition**: Centered within the viewport; stacked vertically with metadata below

### Footer

- **Anatomy**: Collaboration CTA in upper left, social links in upper right, large signature mark centered, copyright and build credit in bottom corners
- **Surface**: Transparent over canvas
- **Typography**: Hero-display for "Let's Collaborate" and underlined "Send me a DM on X."; navigation for social links; legal-copy for corner credits
- **Composition**: Asymmetric corner elements with dominant central signature; generous vertical space

## Responsive behavior

The about page's split layout collapses to a single column at narrower widths, with biography content preceding work history. This preserves narrative flow while adapting to reduced horizontal space.

Typography scales down proportionally. The hero-display token may reduce to section-display size on small viewports to prevent excessive line breaks in the collaboration CTA.

Project cards maintain their contained structure but may expand to near-full viewport width on mobile, preserving internal padding while maximizing imagery visibility.

The signature mark scales to fit available width, never exceeding the viewport. Corner footer elements may stack or center on very narrow screens rather than maintaining their spread composition.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the unbroken foundation; never introduce gray backgrounds or gradients
- The signature mark as a central footer element; it is the site's emotional anchor
- The hairline border as the sole decorative line; no heavier dividers or shadow elevations
- The two-family type system with Neue Haas Grotesk for display and Inter for everything else
- The temporal fading of work history entries; this is a distinctive information design choice

### Avoid
- Adding color to the interface chrome; let project imagery provide all chromatic interest
- Centering body text; the system is left-aligned and editorial
- Introducing card backgrounds or borders outside of project showcases
- Using bold weights for emphasis; the system relies on size, spacing, and muted tones instead
- Decorative icons or illustrations in the interface; the logomark and signature carry all visual identity

### Recommended Build Order
1. Establish the black canvas and white ink as root tokens
2. Implement the type system with both families at all six tokens
3. Build the header with logomark and navigation
4. Create the biography block with proper max-width and paragraph spacing
5. Implement work history with temporal ink fading
6. Build project cards with surface background and rounded corners
7. Construct the footer with signature mark and corner composition
8. Add responsive collapse for the about page split layout

### Accessibility
- The pure black and white pairing provides maximum contrast for text legibility
- Underlined links within body text provide clear affordance without relying on color change
- Ensure the signature mark has appropriate alt text as a decorative image or is hidden from screen readers
- Consider adding focus indicators that maintain the minimal aesthetic, such as subtle outline offsets in border color
- The temporal fading of history entries should not reduce contrast below WCAG AA thresholds; verify muted-ink against canvas

## Scope note

This guide covers the homepage and about page surfaces visible in the supplied images, including the header, biography, work history, project showcase, and footer with signature mark. Measurements are practical adaptation targets. Unseen interior pages, mobile breakpoints, hover states, form interactions, and motion behavior are not included.
