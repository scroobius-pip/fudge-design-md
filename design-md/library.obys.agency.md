# How library.obys.agency is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/library.obys.agency-design)

Last updated: 2026-08-10

## Captured pages

[![About page with halftone globe graphic, orange accent panel, and contact footer on textured gray background](https://pin.fontofweb.com/4666?format=jpg)](https://design.withfudge.com/share/pin-4666)

[About page with halftone globe graphic, orange accent panel, and contact footer on textured gray background](https://design.withfudge.com/share/pin-4666)

[![Books listing page with numbered rows, category tags, and large section heading on off-white background](https://pin.fontofweb.com/4664?format=jpg)](https://design.withfudge.com/share/pin-4664)

[Books listing page with numbered rows, category tags, and large section heading on off-white background](https://design.withfudge.com/share/pin-4664)

[![About page showing navigation dots, sidebar numbering, and decorative orange pixel pattern along right edge](https://pin.fontofweb.com/4663?format=jpg)](https://design.withfudge.com/share/pin-4663)

[About page showing navigation dots, sidebar numbering, and decorative orange pixel pattern along right edge](https://design.withfudge.com/share/pin-4663)

[![About page with bold manifesto text, halftone world map, and layered thumbnail navigation on black surround](https://pin.fontofweb.com/4662?format=jpg)](https://design.withfudge.com/share/pin-4662)

[About page with bold manifesto text, halftone world map, and layered thumbnail navigation on black surround](https://design.withfudge.com/share/pin-4662)

## Overview

Obys' Design Books is a curated digital library that treats the website itself as a design artifact. The visual system draws heavily from Swiss International Style and mid-century editorial design, presenting book recommendations through a stark, grid-driven interface. The experience is built on dramatic contrast: deep black surrounds frame textured gray content panels, while a single warm terracotta accent punctuates the otherwise monochrome palette. Typography is exclusively set in Kh Teka Bold, creating an unapologetically bold, uniform voice across all hierarchy levels. The design rejects decorative softness in favor of sharp edges, precise alignment, and a raw material quality conveyed through visible texture and halftone imagery. Every element serves the content—books are presented with clarity and authority, numbered sequentially, categorized with discrete tags, and surrounded by generous negative space that lets the editorial voice breathe.

## Colors

The color system is intentionally restrained, built on a foundation of black, textured gray, and off-white with one warm accent. This discipline creates strong visual hierarchy through value contrast rather than chromatic complexity.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, category tag backgrounds, and the outer canvas surround |
| canvas | #000000 | The outer page background that frames all content panels |
| surface | #7C7C7C | Main content panels, hero sections, and footer areas with visible texture |
| surface-light | #EAEAEA | Secondary content panels, book listing backgrounds, and alternate sections |
| accent | #C45C3E | Terracotta accent blocks, decorative pixel patterns, and highlighted callouts |
| text-inverse | #FFFFFF | Text on dark surfaces, navigation links, and hero headlines |
| text-muted | #808080 | Secondary information, captions, and de-emphasized content |

The interface operates in a light-dominant mode despite the black canvas. Content panels float as lighter surfaces against the dark surround, creating a framed, gallery-like presentation. The terracotta accent appears strategically in rectangular blocks and vertical pixel-strip decorations, never overwhelming the grayscale foundation. Textured surfaces add visual depth without introducing additional colors—the gray panels carry a subtle grain that suggests paper or concrete, reinforcing the tactile, book-centric theme. The halftone globe graphic uses the same gray values as the surface, integrating photography into the panel rather than treating it as separate imagery.

## Typography

The typographic system is radically unified: a single weight of one typeface carries all communication. Kh Teka Bold, designed by Kurppa Hosk (Jakob Ekelund and Wille Larsson) and published by Kh Type, provides a confident, contemporary sans-serif voice with subtle character that distinguishes it from generic geometric alternatives.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kh Teka | 2.5rem | 700 | 1.1 | -0.02em | Hero manifesto statements and introductory paragraphs |
| section-display | Kh Teka | 4rem | 700 | 1 | -0.03em | Major section headings like "Books We Recommend" and "Featured Books" |
| body | Kh Teka | 1rem | 700 | 1.3 | -0.01em | Book titles, author credits, descriptions, and footer content |
| label | Kh Teka | 0.75rem | 700 | 1 | 0em | Category tags, metadata, and small functional text |
| navigation | Kh Teka | 0.875rem | 700 | 1 | 0em | Primary navigation links and secondary menu items |

The type scale is built on a 4px relative unit, with sizes at 12px (0.75rem), 14px (0.875rem), 16px (1rem), 40px (2.5rem), and 64px (4rem). All sizes are whole-number multiples of the base unit. The bold weight creates strong presence even at small sizes, eliminating the need for lighter weights in the hierarchy. Negative letter spacing on display sizes tightens word shapes for impact, while body text maintains slightly reduced spacing for comfortable reading. The manifesto text in the hero panel demonstrates the typeface's excellent performance at medium-large sizes with tight leading, creating dense, authoritative blocks of text.

Verify licensing for Kh Teka through Kh Type before production use.

## Layout

The layout system is built on a strict editorial grid with asymmetric panel composition. The fundamental structure consists of a full-viewport black canvas that contains floating content panels of varying widths and heights.

The primary content area occupies a central panel with substantial margins on all sides, creating a framed presentation. Within this panel, a two-column system divides content: a narrower left column (approximately one-third) contains section numbers, introductory statements, and navigation; a wider right column (approximately two-thirds) holds main content, book listings, and large graphics. A persistent right-edge decorative strip runs the full height, composed of terracotta pixel blocks and black dots on a lighter ground, functioning as a visual spine.

Vertical rhythm is established through numbered sections (1, 2, 3, 4, 5) that appear in the left margin, each associated with horizontal content bands. These numbers are large and bold, serving as both navigation markers and graphic elements. Content bands stack with thin horizontal rules separating major sections.

The header remains minimal: primary navigation (About, Books, Credits, Contacts) sits at the top right in small bold text, with a "Menu" label at the far right. A secondary tab system (About, Books) appears within the content panel itself, using dot indicators for state. The footer consolidates contact information and social links into a gray panel with generous internal padding.

Spacing between elements follows a 4px base unit. Section breaks use 6rem (96px) of vertical space. Internal panel padding ranges from 1rem to 2rem. Grid gaps between book listing columns are 1rem. The overall density is low—content breathes within its containers, and the black surround provides essential visual rest.

## Visual language

The visual language merges digital precision with analog materiality. The most distinctive element is the pervasive texture: gray panels carry a subtle noise or grain that suggests aged paper, concrete, or newsprint. This texture prevents flat digital sterility and connects the interface to the physical books it catalogs.

Halftone imagery appears as a core graphic motif. The world map in the hero section is rendered in a coarse dot pattern using the same gray values as its background panel, creating a ghosted, integrated image that reads as texture rather than distinct photography. This technique references print production and reinforces the book/library theme.

The terracotta accent color appears in two forms: as solid rectangular blocks (notably the "Quotes" section and decorative panels) and as a vertical pixel-strip pattern along the right edge. The pixel pattern uses a regular rhythm of terracotta squares and black dots, suggesting digital display aesthetics and creating a moiré-like interaction with the textured background.

Geometric discipline governs all elements. Every corner is sharp—zero border radius throughout. Lines are thin and precise, functioning as hairline rules rather than heavy dividers. The numbered section system introduces a sequential, almost bureaucratic order that contrasts with the expressive typography and organic halftone imagery.

The black surround serves as more than background; it frames content like a mat around a photograph, creating depth through literal separation. Thumbnail navigation panels appear in this black space at left, suggesting a multi-view interface where users can preview and jump between page states.

## Components

### Site Header

- **Anatomy**: Horizontal bar spanning the full width, containing primary navigation links right-aligned and a "Menu" trigger at the far right
- **Surface and text color**: Transparent or black background (`{colors.canvas}`) with white text (`{colors.text-inverse}`)
- **Typography**: `{typography.navigation}` at 0.875rem
- **Shape and border**: No border, sharp corners with 0rem radius, minimal height
- **Spacing**: Compact vertical padding, generous horizontal margins
- **Composition**: Links spaced with consistent gaps; "About" link carries underline indicating current section

### Hero Panel

- **Anatomy**: Large gray content block containing manifesto text, halftone graphic, and metadata
- **Surface and text color**: Textured gray background (`{colors.surface}`) with white text (`{colors.text-inverse}`)
- **Typography**: `{typography.hero-display}` for the main statement; `{typography.body}` for secondary description
- **Shape and border**: Sharp rectangle with 0rem radius, thin horizontal rules below
- **Spacing**: Generous internal padding (approximately 2rem), substantial text blocks separated by space
- **Composition**: Two-column text layout with large statement left and smaller description right; halftone graphic centered below

### Book Listing Row

- **Anatomy**: Numbered row containing book title, author/year credit, and category tag
- **Surface and text color**: Off-white background (`{colors.surface-light}`) with black text (`{colors.ink}`)
- **Typography**: `{typography.body}` for title and credit; `{typography.label}` for category tag
- **Shape and border**: Full-width horizontal band with thin top border; category tag is a small black rectangle with white text
- **Spacing**: Comfortable vertical padding (approximately 1.5rem), title and credit stacked with tight leading
- **Composition**: Number in left margin, content in main column, tag right-aligned; sequential numbering (1, 2, 3, 4) creates clear order

### Category Tag

- **Anatomy**: Small rectangular label containing single word ("Practice", "Inspiration")
- **Surface and text color**: Black background (`{colors.ink}`) with white text (`{colors.text-inverse}`)
- **Typography**: `{typography.label}` at 0.75rem
- **Shape and border**: Sharp rectangle with 0rem radius, compact internal padding
- **Spacing**: Minimal horizontal and vertical padding creating tight fit to text
- **Composition**: Positioned at right edge of book row, aligned with title baseline

### Accent Block

- **Anatomy**: Solid terracotta rectangular panel containing text content
- **Surface and text color**: Terracotta background (`{colors.accent}`) with black text (`{colors.ink}`)
- **Typography**: `{typography.body}`
- **Shape and border**: Sharp rectangle with 0rem radius
- **Spacing**: Generous internal padding
- **Composition**: Appears as interrupting element within vertical flow, often partial-width

### Footer Panel

- **Anatomy**: Gray panel containing contact information and social links in two columns
- **Surface and text color**: Gray background (`{colors.surface}`) with white text (`{colors.text-inverse}`)
- **Typography**: `{typography.body}` with underlined links
- **Shape and border**: Full-width, thin top rule separating from content above
- **Spacing**: Generous vertical padding (approximately 2rem), comfortable line spacing
- **Composition**: "Contacts:" label with email link left; "Social:" label with platform links right

### Decorative Pixel Strip

- **Anatomy**: Vertical band running full page height, composed of repeating terracotta squares and black dots
- **Surface and text color**: Light ground with terracotta (`{colors.accent}`) and black (`{colors.ink}`) elements
- **Shape and border**: Individual pixels are sharp squares with 0rem radius; dots are circular
- **Spacing**: Regular repeating rhythm, consistent gaps between elements
- **Composition**: Fixed to right edge, creating persistent visual anchor and color accent

## Responsive behavior

The desktop layout presents a complex, multi-panel composition with fixed decorative elements and asymmetric columns. On narrower viewports, this structure should adapt through several predictable transformations.

The two-column hero text should stack vertically, with the manifesto statement preceding the secondary description. The left-margin numbering system may need to reduce in size or shift to inline position to preserve horizontal space. Book listing rows should maintain their horizontal structure but may allow category tags to wrap below titles on very narrow screens.

The decorative pixel strip along the right edge is a candidate for hiding on mobile, as it consumes significant horizontal space and its decorative function may impede content readability. Alternatively, it could transform into a horizontal band at the top or bottom of the viewport.

The black surround with thumbnail navigation panels appears to be a presentation or development view rather than the public-facing experience. If retained, these peripheral panels should collapse into a toggleable drawer or bottom sheet on mobile.

Typography should scale down proportionally, with the section-display size reducing most aggressively to prevent overflow. The unified bold weight maintains legibility across sizes, but line lengths must be controlled through container width rather than font size alone.

## Practical implementation guidance

### Preserve
- The single-typeface, single-weight typographic discipline—this is the system's most distinctive characteristic
- Sharp zero-radius corners on all elements; the absolute geometric precision is essential to the Swiss aesthetic
- The textured gray surfaces; implement through subtle noise overlays or grain textures rather than flat colors
- The black canvas surround that frames content panels; this creates necessary visual breathing room
- The numbered section system as both navigation and graphic element
- The terracotta accent used sparingly and strategically, never as a dominant color

### Avoid
- Introducing additional font weights or secondary typefaces; the uniformity is intentional and powerful
- Rounded corners or soft shadows that would contradict the sharp, editorial character
- Flat, textureless grays that read as generic digital surfaces
- Expanding the color palette beyond the established set; the restraint is the point
- Center-aligned text in major content areas; maintain the asymmetric, left-aligned discipline
- Decorative elements without functional or thematic connection to books, print, or libraries

### Recommended Build Order
1. Establish the black canvas and basic panel structure with zero-radius containers
2. Implement Kh Teka Bold at all sizes, verifying rendering and spacing
3. Build the hero panel with textured gray background and two-column text layout
4. Create the book listing row component with numbering, title stacking, and category tag
5. Add the footer panel with two-column contact/social layout
6. Implement the decorative pixel strip as fixed or absolute positioned element
7. Apply subtle texture overlays to gray surfaces
8. Fine-tune spacing and alignment across all breakpoints

### Accessibility
- Ensure the textured gray surfaces maintain sufficient contrast with white text; the grain effect should not reduce legibility
- The bold weight provides strong presence, but verify that small label text meets minimum contrast requirements against black tag backgrounds
- The halftone imagery is decorative; provide appropriate alt text or aria labeling if it conveys information
- Navigation links should have clear focus indicators that respect the zero-radius aesthetic
- Consider reduced-motion preferences if implementing the layered panel transitions suggested by the thumbnail navigation

## Scope note

This guide covers the About and Books listing surfaces visible in the supplied images. The Books detail page, Credits page, Contacts form, and any menu overlay states are not represented. Motion behavior, hover states, and mobile adaptations are inferred from static images and should be validated in implementation. Measurements are practical adaptation targets.
