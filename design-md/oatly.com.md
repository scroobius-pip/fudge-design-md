# How oatly.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/oatly.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with pink sustainability panel, product lookbook photography, and mission statement in bold condensed type](https://pin.fontofweb.com/5811?format=jpg)](https://design.withfudge.com/share/pin-5811)

[Homepage hero with pink sustainability panel, product lookbook photography, and mission statement in bold condensed type](https://design.withfudge.com/share/pin-5811)

[![FAQ page header with Oatfinder illustration, black action button, and utility toolbar icons](https://pin.fontofweb.com/5738?format=jpg)](https://design.withfudge.com/share/pin-5738)

[FAQ page header with Oatfinder illustration, black action button, and utility toolbar icons](https://design.withfudge.com/share/pin-5738)

[![FAQ contact section with massive condensed display headline, black pill button, and mono body copy on textured background](https://pin.fontofweb.com/5737?format=jpg)](https://design.withfudge.com/share/pin-5737)

[FAQ contact section with massive condensed display headline, black pill button, and mono body copy on textured background](https://design.withfudge.com/share/pin-5737)

[![FAQ category tabs in black rectangles with mono text, accordion questions with plus icons, and food photography card](https://pin.fontofweb.com/5736?format=jpg)](https://design.withfudge.com/share/pin-5736)

[FAQ category tabs in black rectangles with mono text, accordion questions with plus icons, and food photography card](https://design.withfudge.com/share/pin-5736)

## Overview

The Oatly design system is built around a deliberately confrontational, anti-corporate aesthetic that uses stark black-and-white contrast, oversized condensed display type, and raw textured surfaces to communicate sustainability with personality. The visual language rejects polished minimalism in favor of something more tactile and human—like a zine that learned to code. Every page surface carries a subtle grain or noise texture that prevents the high-contrast palette from feeling sterile. The system balances massive, attention-demanding headlines with disciplined monospace body copy, creating a rhythm between shout and whisper. Photography appears in unframed, full-bleed blocks or as casual product still-lifes with natural lighting. Navigation and functional elements stay small and utilitarian, letting the display typography own the emotional space. The overall effect is confident, slightly weird, and immediately recognizable—design that behaves like the brand talks.

## Colors

The color strategy is intentionally restrained: a near-binary black and white foundation with selective warm accents drawn from packaging and photography. This limitation makes the occasional color intervention feel loud and intentional.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, buttons, borders, and all display typography |
| canvas | #FFFFFF | Page backgrounds, button text on dark surfaces, and reversed type |
| accent-pink | #F7C5D6 | Promotional panels, campaign backgrounds, and emotional highlights |
| accent-tan | #C4A574 | Packaging photography accents, report covers, and warm neutral moments |

The ink and canvas pairing drives almost every interface decision. Black is not merely a text color—it fills buttons, forms category tabs, draws borders, and creates the massive display headlines. White serves as both background and active text color on dark surfaces. The accent-pink appears most dramatically in the sustainability campaign panel, where it creates a soft but unmistakable visual break from the monochrome system. The accent-tan emerges from product photography and packaging materials, particularly in the "Future of Taste Report" cover and seasonal lookbook imagery. No gradients or shadows are visible in the interface; all depth and hierarchy come from scale, weight, and color blocking. The textured backgrounds add visual interest without introducing additional hue complexity.

## Typography

The type system relies on a stark contrast between two families: a bold, tightly packed condensed sans for display and voice, and a clean monospace for everything functional and readable. The system also includes Oatlyicons, a custom icon font used for utility and interface symbols.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Girdo Black Pro | 6rem | 400 | 0.9 | -0.01em | Page headlines, campaign statements, and section openers |
| section-display | Girdo Black Pro | 4rem | 400 | 0.95 | -0.01em | Subsection titles, article headers, and mission statements |
| body | Magda Clean Mono Ot | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, FAQ answers, and long-form content |
| label | Magda Clean Mono Ot | 0.75rem | 400 | 1.2 | 0.05em | Buttons, tags, category labels, and metadata |
| navigation | Magda Clean Mono Ot | 0.875rem | 400 | 1 | 0.02em | Primary nav, breadcrumbs, and utility links |
| icon | Oatlyicons | 1.25rem | 400 | 1 | 0em | Toolbar symbols, interface glyphs, and functional icons |

Girdo Black Pro carries the brand's voice at massive sizes, with tight leading that stacks lines into dense blocks of personality. It appears in all-caps for maximum impact, though the typeface's natural weight makes even mixed case feel bold. Magda Clean Mono Ot, designed by Critzla Cornel Windlin Henning Krause and available from Fsi, handles every utilitarian task with mechanical clarity. The monospace creates a deliberate tension against the organic, hand-drawn quality of the display headlines. Oatlyicons renders the custom symbols in the utility toolbar and other interface locations as a font-based icon system. Margo Pro and Toni Noveau Pro 04 are present in the font stack but do not appear in the visible interface samples. Verify licensing for these families before production use.

## Layout

The layout philosophy favors asymmetry and intentional collision over balanced grids. Content blocks abut directly with minimal gutter separation, and the eye is drawn through the page by dramatic scale shifts rather than consistent rhythm.

The homepage arranges itself in a loose bento-like structure: a mission statement block floats left of center, a product report card sits above a full-bleed lookbook photograph, and a tall pink sustainability panel anchors the right edge. This creates a reading path that zigzags rather than flows linearly. The FAQ page compresses into a more vertical stack: a utility toolbar, an illustrated finder section, massive category tabs in a three-column row, and then an accordion list with an offset image card.

Spacing follows a 4px base unit. Section breaks use 6rem of vertical separation to create dramatic pauses between content zones. Component gaps stay tight at 1rem, reinforcing the collage-like density. No border-radius appears on structural panels or cards—edges are sharp and deliberate. The only rounded elements are functional: buttons and pills use full 9999px radius to distinguish interactive targets from content containers.

The textured background treatment extends full-bleed across all visible page areas, creating a unified surface that makes the clean white and black blocks feel like objects placed on a concrete wall. This texture is subtle enough to not compete with content but consistent enough to read as a deliberate material choice.

## Visual language

The visual language is built on three core tensions: handmade versus systematic, loud versus quiet, and flat versus textured. The grainy background texture appears on every surface, suggesting recycled paper or a photocopied flyer. Against this, black rectangles and white spaces feel like freshly printed shapes with crisp edges.

Photography follows a natural, unstyled documentary approach. Food and product shots use soft daylight, visible imperfections, and casual composition rather than heroic studio lighting. The seasonal lookbook image shows layered drinks with real condensation and incidental objects like a pear, suggesting lifestyle context without staging. The overnight oats photograph uses overhead framing with ingredients scattered at the edges, feeling like a cooking process captured mid-action rather than a final plated dish.

Graphic elements include a hand-drawn pink thumbs-up illustration that floats casually near the FAQ category tabs, reinforcing the brand's informal, slightly absurd personality. The Oatfinder logo combines a coffee cup icon with chunky custom lettering, treating utility tools with the same expressive energy as marketing campaigns. No icons appear from a standard set—everything is either custom drawn or rendered through the Oatlyicons font.

The overall impression is of a system that knows the rules of corporate design and chooses to break them selectively. Alignment is intentional but not rigid. White space exists but is deployed unevenly, creating moments of breath amid dense information.

## Components

### Primary action button

A black filled pill with white monospace label text. The button uses full border-radius, creating a capsule shape that stands out against the sharp rectangular panels surrounding it. Text is centered, with generous horizontal padding that makes the button feel substantial despite its small type size. A right arrow icon appears inline with the label, suggesting forward movement. The button inverts to white with black text when placed on dark backgrounds, maintaining the same pill shape and proportions.

### Category tab

A large black rectangle with centered white monospace label text. These tabs function as section anchors, grouping FAQ content into browseable categories. The rectangle fills its grid cell completely with no internal border-radius, creating a solid color block. Text uses the label token with uppercase styling and leading ellipsis punctuation ("...OUR PRODUCTS", "...HEALTH & NUTRITION", "...OATLY"). The three tabs sit in a row with tight 1rem gutters, creating a rhythmic black-and-white stripe pattern against the textured background.

### Accordion item

A horizontal question row with a plus icon at the right edge. The question text uses the body token in regular weight, left-aligned. A thin dashed or dotted horizontal rule separates items, creating a list rhythm without heavy borders. The plus icon is a simple two-stroke cross, suggesting expandability. Items stack vertically with consistent vertical padding. The active or expanded state is not visible in the supplied images.

### Mission statement block

A text-only content area with the section-display token, left-aligned, maximum width of approximately 40 characters. The statement reads as a manifesto rather than marketing copy, using first-person plural voice. Below the statement, a text link with arrow indicator uses the label token, creating a clear hierarchy between the emotional declaration and the functional call to action.

### Content card

A rectangular container with full-bleed photography and overlaid text. The lookbook card shows a seasonal product photograph with a white text block anchored to the left edge, containing the display headline and small metadata labels. No border-radius, shadow, or border separates the card from its surroundings—it sits flush against adjacent content. The report card uses a smaller format with a tan background image and a "NEWS" tag pill in the corner.

### Utility toolbar

A horizontal strip of icon buttons at the page top, separated by thin vertical rules. Icons include help, cart, language selector, and close functions, rendered through the Oatlyicons font. The toolbar uses the ink color at small scale, with square hit targets that feel mechanical and unobtrusive. A breadcrumb path ("RANDOM ANSWERS") appears left-aligned in the same toolbar zone, using the navigation token.

## Responsive behavior

The desktop layout visible in the images relies on a multi-column grid that will require significant reorganization for narrower viewports. The homepage's asymmetric bento arrangement should stack vertically on small screens, with the pink sustainability panel moving below the fold rather than remaining as a persistent sidebar. The three-column category tab row on the FAQ page should become a vertical stack of full-width buttons, maintaining the black fill and white text but expanding to touch edges.

The massive display type scales down proportionally but should remain visually dominant even on mobile. The hero-display token at 6rem may reduce to 3rem or 4rem on narrow screens, while the section-display token holds at 2.5rem to 3rem. The monospace body text benefits from slight size increase on mobile for readability, potentially moving from 1rem to 1.125rem.

Navigation on desktop spreads horizontally across the top with even distribution. On mobile, this should collapse to a hamburger menu or, given the brand's personality, an equally irreverent interaction pattern. The utility toolbar icons should remain accessible but may consolidate into a single "more" trigger.

Image cards should maintain aspect ratio but transition from side-by-side layouts to full-width stacking. The text overlays on photography need background contrast or text-shadow treatment when the image fills the viewport width, as edge-alignment alone may not guarantee readability across all photographic content.

## Practical implementation guidance

### Preserve
- The stark black-and-white palette with selective warm accents; this restraint is central to brand recognition
- The textured background treatment on all surfaces; it provides the tactile quality that distinguishes the system from generic flat design
- The tight leading on Girdo Black Pro display type; the stacked density is intentional and emotionally loaded
- The monospace body copy for all functional and explanatory text; the contrast with display type creates the system's signature tension
- The sharp, unrounded corners on all content containers; only interactive pills receive border-radius
- The casual, documentary photography style with natural lighting and visible imperfection

### Avoid
- Adding shadows, gradients, or glassmorphism effects; the system achieves depth through scale and texture alone
- Centering display headlines; the left-aligned, slightly ragged edge is part of the anti-corporate posture
- Using rounded corners on cards or panels; this would soften the deliberately raw aesthetic
- Replacing the custom icon set with standard libraries; the hand-drawn quality of illustrations is non-negotiable
- Justifying body text; the monospace works best left-aligned with its natural ragged edge

### Recommended build order
1. Establish the textured canvas background as a global base layer
2. Implement the typography scale with Girdo Black Pro for display and Magda Clean Mono Ot for body
3. Build the primary action button as the foundational interactive element
4. Create the content card component with full-bleed image and edge-anchored text
5. Assemble the homepage layout with asymmetric grid placement
6. Develop the FAQ accordion with dashed separators and plus icons
7. Add the category tab row for section navigation
8. Implement the utility toolbar with Oatlyicons

### Accessibility
- The high-contrast black and white pairing meets WCAG AAA for normal text, but the textured background may reduce effective contrast for some users; test with actual texture rendering
- The massive display type benefits users with low vision, but the tight leading may cause readability issues for dyslexic users; consider a slightly increased line-height option in user preferences
- The monospace body copy is generally readable but may be unfamiliar to some users; ensure sufficient size and line-length limits
- All interactive elements must have visible focus states; the current design's starkness should extend to a clear, high-contrast focus indicator
- The FAQ accordion requires keyboard operability and aria-expanded state management
- Custom icons rendered through Oatlyicons need aria-label or visually hidden text equivalents

## Scope note

This guide covers the homepage and FAQ page surfaces visible in the supplied images. Product detail pages, checkout flows, account interfaces, and mobile layouts are not represented. Motion behavior, hover states, form validation, and loading patterns were not captured and should be designed to match the system's tactile, high-contrast character. Measurements are practical adaptation targets. Verify licensing for all font families before production use.
