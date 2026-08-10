# How eclecticlight.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/eclecticlight.co-design)

Last updated: 2026-08-10

## Captured pages

[![Minimal search overlay with large serif query text and right-edge utility icons](https://pin.fontofweb.com/5692?format=jpg)](https://design.withfudge.com/share/pin-5692)

[Minimal search overlay with large serif query text and right-edge utility icons](https://design.withfudge.com/share/pin-5692)

[![Homepage masthead with circular logo, red feature cards, and multi-column article grid with classical paintings](https://pin.fontofweb.com/5691?format=jpg)](https://design.withfudge.com/share/pin-5691)

[Homepage masthead with circular logo, red feature cards, and multi-column article grid with classical paintings](https://design.withfudge.com/share/pin-5691)

## Overview

The Eclectic Light Company presents a distinctive editorial voice that merges classical art history with contemporary technology commentary. The visual system is built on a stark white canvas with high-contrast black typography, creating a gallery-like environment where content commands full attention. A vivid red accent color punctuates the interface through feature cards and category labels, lending urgency and visual rhythm to the otherwise restrained palette. The design philosophy prioritizes readability and intellectual authority: generous whitespace frames dense editorial content, while serif typefaces evoke print journalism and academic publishing. The circular logo—a stylized lighthouse beacon—anchors the masthead with geometric simplicity against the typographic grandeur of the site title. This is a system designed for sustained reading, where visual decoration is minimal and every element serves the transmission of ideas.

## Colors

The color system operates on a principle of maximum contrast with selective warmth. The foundation is an unmodulated white canvas against pure black text, creating the crispness of fine book paper. The vivid red accent functions as both structural marker and emotional signal, appearing in feature panels, category links, and interactive highlights.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, navigation, search query text |
| canvas | #ffffff | Page background, search overlay, article card surfaces |
| accent | #e63333 | Feature card backgrounds, category link text, emphasis labels |
| muted-ink | #333333 | Secondary body text, captions, metadata lines |
| border | #cccccc | Subtle dividers, navigation underlines, card separators |

The interface maintains a strictly light mode. The red accent derives from classical painting traditions—evoking the vermilion and cadmium pigments visible in the site's featured artworks—while functioning as a modern digital signal for importance and interactivity. Category labels within article metadata appear in the accent color, creating scannable entry points through the content stream. The near-black ink avoids the harshness of pure #000000 in extended reading contexts, though the exact interface specifies this value for maximum legibility. Photographic content, particularly the classical paintings that illustrate articles, introduces warm ochres, umbers, and flesh tones that provide natural color variation without requiring additional UI palette complexity.

## Typography

The typographic system pairs two serif families in a traditional editorial hierarchy: Playfair serves display and headline roles with its high-contrast, elegant letterforms, while Droid Serif handles body text and navigation with robust, screen-optimized proportions. This pairing creates tension between decorative authority and functional readability.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Playfair | 4rem | 400 | 1 | 0.02em | Search overlay query text, exceptional display moments |
| section-display | Playfair | 2rem | 400 | 1.1 | 0 | Article headlines, feature card titles, section headers |
| body | Droid Serif | 1rem | 400 | 1.6 | 0 | Article paragraphs, descriptions, general content |
| body-bold | Droid Serif | 1rem | 700 | 1.6 | 0 | Emphasized inline text, card summaries |
| label | Droid Serif | 0.875rem | 400 | 1.4 | 0.01em | Dates, metadata, captions, secondary information |
| navigation | Droid Serif | 1rem | 700 | 1.2 | 0.05em | Primary navigation categories, uppercase treatments |

Playfair, designed by Claus Eggers Sørensen, contributes neoclassical elegance appropriate for a publication spanning art history and cultural commentary. Droid Serif provides the workhorse readability for extended technical and historical prose. Font Awesome supplies the iconographic language for search, subscription, and utility functions. Verify licensing for these families before production use.

## Layout

The page architecture follows a centered, contained editorial model with clear hierarchical zones. The masthead occupies a commanding vertical presence: a circular logo mark centered above the full-width site title, followed by a subtitle strapline with decorative horizontal rules, then a primary navigation bar with evenly distributed category links. This tripartite header establishes institutional identity before any content appears.

Below the masthead, the content area employs an asymmetric multi-column grid. Feature cards occupy prominent left and center positions with solid red backgrounds, while the right column presents a vertical stream of standard article entries. This creates visual weight distribution that guides the eye through priority content before regular updates. Article entries stack vertically with consistent internal structure: headline, optional image, excerpt, and metadata line with date and colored category tags.

The search overlay demonstrates a radically reduced layout state: full-viewport white field with centered query display and minimal instructional text. A persistent right-edge utility bar contains search, close, and subscription functions, maintaining tool access without visual intrusion.

Spacing follows a 4px base unit (0.25rem), with section breaks at 4rem and content gaps at 2rem. The generous vertical breathing room between masthead, navigation, and content zones prevents the density of information from overwhelming the reader. Images within articles appear at natural aspect ratios, with circular cropping used for specific illustrative thumbnails that echo the logo's geometric language.

## Visual language

The visual character derives from print magazine traditions translated to digital space. Decorative horizontal rules flank the subtitle strapline, creating a formal symmetrical frame around the "Macs & Painting — No AI Content" tagline. The circular logo—a quartered disk suggesting a lighthouse beam—provides the sole geometric abstraction in an otherwise typographic identity.

Photography and illustration treatment respects source material integrity. Classical paintings appear in full color without overlay effects, presented as cultural artifacts rather than decorative background. The circular crop applied to certain thumbnails creates visual variety and connects to the logo form without imposing uniformity on diverse artistic content.

The red accent panels invert normal figure-ground relationships: black text on saturated red creates poster-like impact for featured content. These panels eschew imagery entirely, relying on typographic hierarchy and color alone to communicate importance. This restraint elsewhere makes the red moments genuinely arresting.

Iconography is minimal and functional, drawn from Font Awesome in regular weight. The search magnifier, subscription envelope, and close mark maintain thin stroke weights that harmonize with the fine serifs of the type system. No decorative illustration or pattern work competes with the editorial photography and artwork.

## Components

### Masthead

- **Anatomy**: Circular logo mark (approximately 80px diameter), full-width site title in Playfair, subtitle strapline with decorative rules, primary navigation bar
- **Surface**: White background, black text, thin horizontal rules in border color
- **Typography**: Site title uses Playfair at approximately 3.5rem with tight tracking; subtitle uses Droid Serif in uppercase with expanded letter-spacing
- **Shape**: Logo is perfect circle; rules are full-width hairlines
- **Spacing**: Generous vertical padding between logo, title, subtitle, and navigation; navigation bar separated by top border
- **Composition**: Centered alignment throughout; navigation items evenly distributed with consistent horizontal spacing

### Feature Card

- **Anatomy**: Solid background panel containing headline, descriptive text, date and category metadata
- **Surface**: Accent red (#e63333) background, black text, category links underlined
- **Typography**: Headline in Playfair section-display; body text in Droid Serif body-bold; metadata in Droid Serif label
- **Shape**: Sharp corners (0 radius), rectangular form
- **Spacing**: Internal padding approximately 1.5rem; comfortable line-height for multi-line headlines
- **Composition**: Text-only, no imagery; headline dominates with supporting text below

### Article Entry

- **Anatomy**: Headline, optional featured image, excerpt paragraph, metadata line with date and colored category tags
- **Surface**: White background, black headline and body, accent-colored category links
- **Typography**: Headline in Playfair section-display; excerpt in Droid Serif body; metadata in Droid Serif label
- **Shape**: Images at natural aspect ratio or circular crop; no card border or shadow
- **Spacing**: Vertical separation between entries; image margin-bottom before text
- **Composition**: Left-aligned text; images full-width of column or circular thumbnail

### Search Overlay

- **Anatomy**: Full-viewport white layer, centered large query text, instructional subtext, right-edge utility icons
- **Surface**: White background, black text, thin vertical divider on right edge
- **Typography**: Query text in Playfair hero-display at 4rem; instruction in Droid Serif body
- **Shape**: Full-bleed rectangle; sharp edges
- **Spacing**: Query text vertically centered; instruction text immediately below with minimal gap
- **Composition**: Left-aligned text block positioned in lower-center area; utility icons stacked vertically at far right

### Navigation Bar

- **Anatomy**: Horizontal row of category links with consistent spacing
- **Surface**: White background, bottom border in subtle gray
- **Typography**: Droid Serif navigation weight, uppercase treatment, expanded tracking
- **Shape**: Full-width bar; no individual link backgrounds
- **Spacing**: Generous horizontal padding between items; vertical padding within bar
- **Composition**: Centered or evenly distributed alignment

## Responsive behavior

The multi-column grid should collapse to single-column stacking on narrower viewports, with feature cards converting to full-width blocks that maintain their red background and internal padding. The masthead title may require slight reduction in size to prevent overflow, though the serif display face maintains legibility across a range of sizes. The right-edge utility bar in the search overlay should reposition to a more conventional top placement on mobile, avoiding the narrow strip that becomes a touch target challenge. Navigation categories may require horizontal scroll or hamburger consolidation when space constrains even distribution. Article images should remain at natural aspect ratios rather than forcing uniform heights, preserving the integrity of diverse artwork and screenshot content.

## Practical implementation guidance

### Preserve
- The stark white canvas and pure black text contrast; this is foundational to the site's gallery-like reading environment
- The Playfair and Droid Serif pairing; the contrast between display elegance and body robustness defines the editorial voice
- The vivid red accent for feature cards and category labels; this specific saturation creates the signature visual punch
- The circular logo form and its geometric echo in select image crops
- The decorative horizontal rules flanking the subtitle strapline

### Avoid
- Adding background colors or textures to article content areas; the white field is essential
- Introducing sans-serif typefaces for body or navigation; this would break the classical authority
- Rounding corners on feature cards; the sharp rectangles provide deliberate contrast to circular elements
- Shadow effects on cards or panels; the flat color fields rely on hue alone for separation
- Auto-playing or animated elements that would disturb the contemplative reading pace

### Recommended build order
1. Establish the typographic foundation with Playfair and Droid Serif loaded and baseline-adjusted
2. Implement the masthead with logo, title, subtitle rules, and navigation structure
3. Build the multi-column grid system with appropriate gutters and responsive breakpoints
4. Create the feature card component with red background and text-only content pattern
5. Develop the article entry component with flexible image treatment and metadata line
6. Implement the search overlay as a full-viewport state with centered typography
7. Refine spacing and vertical rhythm across all components

### Accessibility
- Ensure the red accent on white meets minimum contrast ratios for text; the feature card's black-on-red combination should be verified for large text compliance
- Provide visible focus indicators for navigation and interactive elements that match the accent color rather than default browser outlines
- Maintain generous touch targets for the right-edge utility icons, particularly the search and close functions
- Preserve semantic heading hierarchy despite the visual similarity between some display sizes
- Consider reduced-motion preferences for any overlay transitions

## Scope note

This guide covers the homepage and search overlay surfaces visible in the supplied images. Interior article pages, archive listings, comment sections, and footer areas are not represented. Measurements are practical adaptation targets derived from visual inspection. No mobile-specific layouts, dark mode, loading states, or form validation patterns are documented. Verify licensing for Playfair, Droid Serif, and Font Awesome before production use.
