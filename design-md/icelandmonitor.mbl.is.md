# How icelandmonitor.mbl.is is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/icelandmonitor.mbl.is-design)

Last updated: 2026-08-10

## Captured pages

[![Article body with portrait photograph of Florian Jacob, caption bar, and lead paragraphs with black text on white background](https://pin.fontofweb.com/9140?format=jpg)](https://design.withfudge.com/share/pin-9140)

[Article body with portrait photograph of Florian Jacob, caption bar, and lead paragraphs with black text on white background](https://design.withfudge.com/share/pin-9140)

[![Upper article section showing portrait image with blue fleece collar and caption, followed by historical narrative paragraphs](https://pin.fontofweb.com/9139?format=jpg)](https://design.withfudge.com/share/pin-9139)

[Upper article section showing portrait image with blue fleece collar and caption, followed by historical narrative paragraphs](https://design.withfudge.com/share/pin-9139)

[![University of Iceland Lögberg building photograph with photo credit, article subheading, and biographical text about Florian Jacob](https://pin.fontofweb.com/9138?format=jpg)](https://design.withfudge.com/share/pin-9138)

[University of Iceland Lögberg building photograph with photo credit, article subheading, and biographical text about Florian Jacob](https://design.withfudge.com/share/pin-9138)

## Overview

Iceland Monitor presents a straightforward editorial reading experience built around clarity and photographic storytelling. The design prioritizes large, full-width imagery that anchors each article, with text flowing in a single-column format beneath. The visual system is intentionally restrained: one type family at a few functional sizes, a near-black text color on pure white, and a single blue tone reserved for interactive elements. This economy of means keeps attention on the content while maintaining professional polish. The layout avoids sidebars, cards, or complex grids in the article view, instead using generous vertical spacing and clear typographic hierarchy to separate sections. Caption bars sit directly against images with a subtle gray background, creating a distinct zone for attribution without decorative borders. The overall impression is that of a contemporary news publication that trusts its photography and reporting to carry the visual interest.

## Colors

The palette is minimal and functional, drawn from the exact interface colors present in the system.

| token | hex | use |
|---|---|---|
| ink | #212529 | Primary body text, headings, and main content |
| ink-secondary | #999999 | Captions, photo credits, metadata, and de-emphasized text |
| action | #2244CC | Inline links and interactive text elements |
| action-hover | #1A429B | Link hover and active states |
| canvas | #FFFFFF | Page background and image surround |
| surface-muted | #EEEEEE | Caption bar backgrounds, subtle dividers |
| border-muted | #EEEEEE | Structural separators when needed |

The color logic separates content from chrome. Body text uses a very dark gray rather than pure black, reducing harshness during extended reading. The blue action color appears only in links, creating a clear signal without competing with photography. The muted surface tone serves a single purpose: distinguishing caption areas from both images and body text. There is no dark mode evident in the supplied material; the system operates entirely on a light canvas. Photographic content supplies its own color interest, from the blue sky in the University of Iceland building shot to the warmer tones in portrait photography.

## Typography

The system uses a single font family across all text roles. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Lato | 1.0625rem | 400 | 1.5 | normal | Article paragraphs, subheadings, main reading text |
| body-small | Lato | 0.8rem | 400 | 1.5 | normal | Navigation links, secondary content, link lists |
| caption | Lato | 0.8rem | 400 | 1.5 | normal | Image captions, photo credits, attribution lines |
| label | Lato | 0.64rem | 400 | 1.5 | normal | Metadata tags, timestamps, small labels |
| section-display | Lato | 1.0625rem | 400 | 1.5 | normal | Article subheadings within body flow |
| navigation | Lato | 0.8rem | 400 | 1.5 | normal | Header navigation links and site menu items |

Lato Regular at 400 weight carries all text duties. The hierarchy is established through size contrast rather than weight variation. Body text at 17px (1.0625rem) with 1.5 line height provides comfortable reading measure. The smaller 12.8px (0.8rem) size handles captions, navigation, and secondary content without feeling cramped due to the same generous line height. The 10.24px (0.64rem) label size appears sparingly for metadata. No bold or italic styles are employed in the visible system; emphasis comes from size, color, and spacing alone. The normal letter spacing throughout maintains the clean, neutral character of the typeface.

## Layout

The article layout follows a single-column structure with full-bleed imagery and centered text blocks. The reading area appears to occupy a comfortable maximum width, with text lines that do not extend to the viewport edges on larger screens. Images break out of any text container, extending to the full available width with no border radius or shadow treatment.

Vertical spacing follows a clear rhythm. Paragraphs separate by 16px (1rem), creating distinct blocks without excessive white space. Section breaks between image groups and text passages use larger gaps, approximately 24px (1.5rem), to signal content shifts. The caption bars sit flush against image bottoms with internal padding of roughly 5px, keeping attribution tight to its associated photograph.

The header and navigation area, visible in the upper portions of the supplied images, uses a dark background with light text, creating a strong horizontal band that anchors the page. Below this, the article content flows uninterrupted. There are no visible sidebars, related-story modules, or advertising inserts within the main reading path. The layout prioritizes continuous reading with visual rests provided by photographs rather than interface elements.

Content hierarchy moves from site navigation to article imagery to caption to body text to subheadings and additional imagery. This linear progression suits long-form journalism and prevents cognitive fragmentation.

## Visual language

The visual character is editorial and documentary. Photography dominates the page, with images presented at large scale and without decorative frames. The caption treatment—a light gray bar with small italic text—recalls print newspaper conventions translated to digital space. This creates a sense of journalistic authority and proper attribution.

The absence of rounded corners, shadows, or border effects on images keeps the presentation direct and unstyled. Photographs appear as they were captured, with their own inherent color and composition providing visual variety. The blue accent color in links echoes the blue tones frequently present in Icelandic photography—sky, water, fleece garments—creating subtle harmony without forced theming.

Text treatment is equally direct. No pull quotes, drop caps, or decorative initial letters interrupt the flow. Subheadings within articles use the same size and weight as body text, distinguished only by their position and the paragraph spacing around them. This restraint prevents the design from competing with the content for attention.

The overall density is moderate. While text blocks are substantial, the generous image placement and paragraph spacing prevent overwhelming walls of text. The system respects the reader's need for visual rest while maintaining information density appropriate to news content.

## Components

### Article image

- **Anatomy**: Full-width photograph with a caption bar positioned directly below the image bottom edge.
- **Surface**: Image has no border, radius, or shadow. Caption bar uses `{colors.surface-muted}` background.
- **Typography**: Caption text uses `{typography.caption}` in `{colors.ink-secondary}`, often italicized for photo credits.
- **Spacing**: No gap between image and caption bar. Vertical margin below the caption bar uses `{spacing.section-gap}` to separate from subsequent body text.
- **Composition**: Images break the content flow, extending to viewport edges or maximum content width.

### Article body

- **Anatomy**: Sequential paragraphs of body text with occasional subheadings.
- **Surface**: Transparent background on `{colors.canvas}` page.
- **Typography**: `{typography.body}` in `{colors.ink}`.
- **Spacing**: Paragraphs separated by `{spacing.paragraph-gap}`. No indentation; block spacing creates paragraph distinction.
- **Composition**: Single column with comfortable line length. Text does not wrap around images.

### Inline link

- **Anatomy**: Text link within body or navigation contexts.
- **Surface**: No background; text color only.
- **Typography**: `{typography.body-small}` in navigation contexts, `{typography.body}` when appearing in article text.
- **Color**: `{colors.action}` default, `{colors.action-hover}` on hover.
- **Shape**: No underline visible in default state; color alone indicates interactivity.

### Photo credit

- **Anatomy**: Attribution line within or adjacent to caption bar.
- **Typography**: `{typography.caption}` with italic styling.
- **Color**: `{colors.ink-secondary}`.
- **Composition**: Preceded or followed by caption description, separated by punctuation or spacing.

### Navigation header

- **Anatomy**: Horizontal bar with site branding and category links.
- **Surface**: Dark background (`#000000`) with light text.
- **Typography**: `{typography.navigation}` in white or near-white.
- **Spacing**: Compact padding, approximately `{spacing.content-padding}`.

## Responsive behavior

The single-column layout adapts naturally to narrower viewports. Images maintain full width, scaling proportionally. Text padding likely increases slightly on very small screens to maintain readable line lengths. The navigation header may collapse to a simplified menu or hamburger pattern, though this behavior is not visible in the supplied material.

Line length should be constrained to approximately 65-75 characters for optimal reading. On wider viewports, the content area may reach a maximum width with centered alignment, preventing excessive line lengths that impair readability.

Image caption bars should maintain their full-width relationship to photographs across all breakpoints. Text size may require slight adjustment at very small sizes to maintain the 1.5 line height ratio without excessive leading.

## Practical implementation guidance

### Preserve
- The single-type-family hierarchy using size alone for distinction
- Full-bleed, unframed photography with immediate caption bars
- The dark navigation header against light content area contrast
- Generous paragraph spacing that creates rhythm without fragmentation
- Blue link color reserved exclusively for interactive elements

### Avoid
- Adding border radius or shadow to photographs
- Introducing additional font weights or families
- Creating card-based layouts or sidebar modules within article flow
- Using pure black (#000000) for body text instead of the softer ink tone
- Decorative elements like pull quotes or drop caps that break the editorial restraint

### Recommended build order
1. Establish the type scale with Lato at body, body-small, and caption sizes
2. Set the color foundation with ink on canvas, action for links
3. Build the article image component with full-width behavior and gray caption bar
4. Implement article body spacing with consistent paragraph gaps
5. Add the dark navigation header with light text links
6. Refine responsive constraints for maximum content width and image scaling

### Accessibility
- Ensure link color contrast meets WCAG AA against white backgrounds; the action blue should be verified
- Provide visible focus indicators for keyboard navigation, as color alone is insufficient
- Maintain alt text for all documentary photographs
- Consider increasing body text size for users who need larger reading text, as the hierarchy depends on size contrast
- Caption and credit text at 0.8rem should be tested for readability; avoid reducing further

## Scope note

This guide covers the article reading experience on Iceland Monitor's news pages. The supplied images show a single article template with portrait and architectural photography, body text, captions, and header navigation. Mobile layouts, breakpoint behavior, homepage grids, category listings, search results, comments, subscription flows, and advertising integrations are not represented. Footer content, social sharing controls, and related article modules are also outside the current scope.
