# How properm.ru is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/properm.ru-design)

Last updated: 2026-08-10

## Captured pages

[![Article body text showing Open Sans at 18px with 30px line height, featuring weather forecast paragraphs with bold lead sentence and regular body copy](https://pin.fontofweb.com/9166?format=jpg)](https://design.withfudge.com/share/pin-9166)

[Article body text showing Open Sans at 18px with 30px line height, featuring weather forecast paragraphs with bold lead sentence and regular body copy](https://design.withfudge.com/share/pin-9166)

[![Identical article layout demonstrating consistent typography and spacing with bold introductory paragraph followed by regular weight body text blocks](https://pin.fontofweb.com/9165?format=jpg)](https://design.withfudge.com/share/pin-9165)

[Identical article layout demonstrating consistent typography and spacing with bold introductory paragraph followed by regular weight body text blocks](https://design.withfudge.com/share/pin-9165)

## Overview

Properm.ru presents a stark, utilitarian reading environment optimized for long-form news content. The visual system strips away decorative elements in favor of maximum legibility: pure black text on a pure white ground, a single humanist sans-serif typeface at two weights, and generous vertical spacing between paragraphs. This is a content-first design where the typography itself carries the entire visual identity. The system serves regional news readers with a straightforward, no-frills presentation that prioritizes scanning comfort and reading endurance over brand expression. Every decision reinforces clarity: the bold lead sentence grabs attention, the regular body weight sustains extended reading, and the ample line height prevents visual fatigue. The absence of color, borders, shadows, or rounded surfaces creates a deliberately flat, newspaper-like aesthetic translated for digital consumption.

## Colors

The palette contains a single functional color used for all text against the browser-default white background.

| token | value | use |
|---|---|---|
| ink | #000000 | All text, headings, body copy, and interactive elements |

The design operates in a permanent light mode. The #000000 ink against the white ground produces maximum contrast for reading comfort. No border colors, shadow colors, gradient stops, or accent colors appear in the interface. Image content within articles may contain its own color palettes, but these remain strictly photographic and do not influence the UI color system. There are no brand accent colors, no call-to-action color distinctions, and no surface elevation through color variation. The entire chromatic experience is minimal: text is black, the ground is white, and nothing else competes for attention.

## Typography

The type system is built on a single family with two weights and multiple sizes, creating a functional hierarchy through size and weight variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Open Sans | 1.125rem | 400 | 1.67 | 0em | Article paragraphs and general reading text |
| body-bold | Open Sans | 1.125rem | 600 | 1.67 | 0em | Lead sentences, emphasis, and subheadings within text |
| label | Open Sans | 0.9375rem | 400 | 1.33 | 0em | Captions, metadata, and secondary information |
| caption | Open Sans | 0.9375rem | 600 | 1.33 | 0em | Bold captions and emphasized metadata |
| headline | Open Sans | 1.5rem | 600 | 1.33 | 0em | Article titles and major headings |
| subheadline | Open Sans | 1.25rem | 600 | 1.4 | 0em | Section headings and secondary titles |

Open Sans is supplied by Ascender Corporation. Verify licensing for these families before production use.

The body size of 1.125rem (18px) with 1.67 line height (30px) creates exceptionally generous vertical rhythm for Cyrillic text. This proportion prevents the dense packing common in smaller line heights and accommodates the taller x-height and ascenders of Russian typography. The 600 weight semibold serves as the bold counterpart, used strategically for the opening sentence of article sections to create entry points for scanners. The label and caption sizes at 0.9375rem (15px) with tighter 1.33 line height handle secondary information where space efficiency matters. The headline and subheadline sizes extend the scale for page titles and section headings, using the same semibold weight with proportionally tighter line heights. No condensed or extended variants appear. The system relies on weight contrast and spatial separation rather than dramatic size contrast to establish hierarchy. Letter spacing remains at 0em throughout, with no tightened or expanded tracking for any role.

## Layout

The layout follows a single-column reading model with no sidebar, no navigation chrome visible in the content area, and no multi-column text flows. Content occupies a centered container with comfortable margins on either side, creating a focused reading column that mimics the measure of traditional print columns.

The spacing system derives from a 0.25rem (4px) base unit. Key layout values include:

| token | value | use |
|---|---|---|
| paragraph-gap | 1.25rem | Vertical space between consecutive paragraphs |
| section-gap | 2rem | Space between major content blocks or article sections |
| block-gap | 0.5rem | Tight spacing between related inline elements |

Paragraphs receive 1.25rem (20px) bottom margin, creating clear separation without excessive white space. Larger content divisions use 2rem (32px) bottom margin to establish section breaks. The 0.5rem (16px) spacing handles tighter groupings where elements belong to the same semantic unit. No grid system is visible; the layout is fundamentally a flow document where block-level elements stack vertically with consistent margins. There are no cards, no panels, no aside boxes, and no floating elements interrupting the text stream. The reading experience is uninterrupted linear progression from top to bottom.

## Visual language

The visual language is deliberately austere, drawing from digital-native journalism and early web minimalism rather than contemporary glossy interfaces. All corners are square: no rounded corners appear on any element. There are no shadows, no borders, and no background color variations. The absence of these elements creates a flat, two-dimensional space where only text and imagery exist.

Photography and illustration appear inline with article content but receive no special framing: no rounded corners, no border treatments, no drop shadows, and no caption backgrounds. Images sit directly on the white canvas, their edges forming the only visual interruption in the otherwise text-dominated field.

The bold lead sentence technique—opening each section with 600-weight text before transitioning to 400-weight body copy—creates a rhythmic scanning pattern. Readers can grasp section topics from the bolded openings, then choose to read or skip the regular-weight elaboration. This pattern repeats throughout long articles, breaking monotony without introducing new visual elements.

There is no visible iconography, no button styling, no badge system, and no status indicators. The entire visual vocabulary consists of: black text, white ground, two weights of one typeface, square corners on all elements, and three spacing increments. This restraint is the defining characteristic of the system.

## Components

### Article body

- **Anatomy**: Sequential paragraphs of body text, each separated by consistent vertical spacing. No containing card, no background panel, no border enclosure.
- **Surface and text color**: Transparent background inheriting the white ground; text in ink black.
- **Typography**: body token at 400 weight for standard paragraphs; body-bold token at 600 weight for lead sentences and emphasis.
- **Shape and border**: Square corners with 0rem border-radius. No border, no shadow. Pure rectangular text blocks.
- **Spacing**: 1.25rem bottom margin between paragraphs; 2rem bottom margin between major sections.
- **Composition**: Full-width within the content column, left-aligned with no indentation. Text flows naturally with standard word wrapping.
- **Variants**: Lead paragraph variant uses body-bold typography for the opening sentence of each content section, then transitions to body weight for subsequent sentences in the same paragraph.

### Article lead sentence

- **Anatomy**: A single sentence or clause at the start of a content block, set in semibold weight to create a visual entry point.
- **Surface and text color**: Same transparent background and ink text as body paragraphs.
- **Typography**: body-bold token; identical size and line height to body but with 600 weight.
- **Shape and border**: No special treatment; flows as inline text within the paragraph. Square corners inherited from parent.
- **Spacing**: No additional spacing beyond standard paragraph margins; the weight change alone creates the hierarchy.
- **Composition**: Runs as the first sentence of a paragraph, followed by regular-weight text in the same block or by a paragraph break.
- **Variants**: May appear as a standalone single-sentence paragraph or as the opening of a longer paragraph.

### Content section

- **Anatomy**: A major topical division within an article, separated from preceding content by increased vertical space.
- **Surface and text color**: No visible container; transparent background with ink text.
- **Typography**: Typically begins with body-bold lead sentence, followed by body paragraphs.
- **Shape and border**: Square corners with 0rem border-radius. No border, no background, no shadow.
- **Spacing**: 2rem bottom margin on the final element creates separation from the next section.
- **Composition**: Stacks vertically within the single content column, maintaining full width.
- **Variants**: Sections may open with headline or subheadline tokens when hierarchical structure demands explicit titles rather than inline lead sentences.

## Responsive behavior

The single-column layout adapts primarily through margin and padding adjustments rather than structural transformation. At narrower viewports, the content column should maintain comfortable side margins while allowing text to reflow naturally. The 18px body size remains legible on mobile devices without reduction, though the line height may compress slightly if viewport constraints demand.

No breakpoint-specific behavior is visible in the supplied material. Implementation should ensure that paragraph spacing remains consistent across viewport sizes, preserving the reading rhythm that defines the experience. The bold lead sentence technique becomes even more valuable on mobile, where scanning behavior dominates and screen real estate limits how much text appears above the fold.

## Practical implementation guidance

### Preserve
- The stark black-on-white contrast; do not introduce gray body text or tinted backgrounds.
- The generous 1.67 line height for body text; this is central to the reading experience.
- The weight-based hierarchy using only 400 and 600 weights of Open Sans.
- The paragraph spacing of 1.25rem; tighter packing destroys the rhythm.
- The single-column, uninterrupted text flow without sidebars or intrusive elements.
- Square corners on all elements; resist adding border-radius to any component.

### Avoid
- Adding background colors, borders, or shadows to content containers.
- Introducing additional type sizes or weights beyond the established system.
- Using color for emphasis instead of weight; the system relies on black alone.
- Rounding corners on images or creating card-like containers for text.
- Reducing line height below 1.5 for any text size.

### Recommended build order
1. Establish the base Open Sans loading with 400 and 600 weights.
2. Set global styles: black text, white background, 0em letter spacing.
3. Implement body typography at 1.125rem with 1.67 line height.
4. Add paragraph margins at 1.25rem bottom.
5. Apply body-bold to lead sentences and emphasized inline text.
6. Tune the content column width for optimal reading measure (approximately 60-75 characters per line for Cyrillic text).
7. Add section spacing at 2rem for major topic breaks.
8. Explicitly set border-radius to 0rem on all elements to maintain the square-corner aesthetic.

### Accessibility
- The maximum contrast #000000 on white exceeds WCAG AAA requirements for normal text.
- The generous line height and paragraph spacing benefit readers with dyslexia and those using screen magnification.
- Maintain semantic HTML structure: use `strong` or `b` for bold lead sentences rather than styling alone, ensuring screen readers can convey emphasis.
- Avoid justified text alignment; the left-aligned ragged right edge aids readability for all users, especially in Cyrillic scripts.

## Scope note

This guide covers the article reading surface of Properm.ru as visible in the supplied material. Navigation headers, footers, category pages, homepage layouts, comment sections, and mobile-specific adaptations are not represented. No interactive states, form elements, or advertising integrations are documented. Measurements are practical adaptation targets.
