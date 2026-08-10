# How mimo.xiaomi.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mimo.xiaomi.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large 'HELLO, I'M MiMo' display text against a repeating MiMo watermark pattern, with navigation bar containing Blog, 1001, Join us links and language selector](https://pin.fontofweb.com/5934?format=jpg)](https://design.withfudge.com/share/pin-5934)

[Hero section with large 'HELLO, I'M MiMo' display text against a repeating MiMo watermark pattern, with navigation bar containing Blog, 1001, Join us links and language selector](https://design.withfudge.com/share/pin-5934)

[![Numbered job listings table with 01-06 index column, role titles in serif type, arrow action cells, and email contact footer on warm off-white background](https://pin.fontofweb.com/5935?format=jpg)](https://design.withfudge.com/share/pin-5935)

[Numbered job listings table with 01-06 index column, role titles in serif type, arrow action cells, and email contact footer on warm off-white background](https://design.withfudge.com/share/pin-5935)

## Overview

The Xiaomi MiMo landing page presents a research-oriented AI brand through a deliberately restrained, editorial visual system. The design balances two distinct typographic voices: Mi Sans, a geometric sans-serif with wide letter-spacing, handles all display and navigation material, while PT Serif carries the body content and interface labels. The overall impression is scholarly and confident rather than flashy—appropriate for a page that discusses intelligence, prediction, and the nature of cognition.

The color system is extremely limited, relying on warm off-white as a canvas against which black and near-black text achieves high contrast without coldness. There are no accent colors, no gradients, and no shadows. Visual interest comes instead from scale contrast between the massive hero display and the refined body text, from the repeating watermark pattern in the hero, and from the precise horizontal rules that structure the job listings table. The page feels like a well-designed academic journal or a thoughtful technology manifesto.

## Colors

The palette is built from six exact interface colors, used in a strict hierarchy that keeps the page feeling unified and calm.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary headings, hero display text, strong emphasis, table rules |
| ink-secondary | #213547 | Navigation links, default body text in some contexts |
| ink-tertiary | #333333 | Body paragraphs, secondary reading material |
| muted | #666666 | Index numbers, footer contact text, de-emphasized labels |
| faint | #999999 | Watermark pattern in hero background |
| canvas | #FAF7F5 | Page background, all surfaces |

The canvas color is a warm off-white with subtle peach undertones, preventing the starkness that pure white would introduce against the black type. The ink-secondary and ink-tertiary values provide two calibrated steps of reduced intensity for longer reading passages, while muted handles truly auxiliary information. The faint value appears only in the decorative repeating "MIMO" watermark behind the hero, where it must remain legible as pattern yet invisible as content. No dark mode or alternate theme is visible in the supplied material; the entire system operates in this single warm light environment.

## Typography

Two font families create the typographic tension that defines the page. Mi Sans, supplied by Hanyi Fonts, is used exclusively at display sizes with bold weight and generous tracking. PT Serif, designed by A Korolkova, O Umpeleva, and V Yefimov for Para Type Ltd, handles everything else from body text to small labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Mi Sans | 6rem | 700 | 1.7 | 0.12em | Hero "HELLO, I'M MiMo" |
| section-display | Mi Sans | 3.25rem | 700 | 1.6 | 0.3em | Large section headings, watermark-scale text |
| body | PT Serif | 1.25rem | 400 | 1.7 | normal | Primary body paragraphs |
| body-small | PT Serif | 1rem | 400 | 1.7 | normal | Footer contact, compact reading |
| heading-3 | PT Serif | 1.5rem | 600 | 1.7 | normal | Subsection headings |
| label | PT Serif | 0.875rem | 500 | 1.43 | normal | Index numbers, small labels, buttons |
| navigation | Mi Sans | 1.5rem | 600 | 1.7 | normal | Nav bar links |

The hero display at 96px with 0.12em tracking creates an architectural presence, while the section display at 52px with dramatically wider 0.3em tracking functions almost as a graphic element rather than readable text—this is the scale used in the background watermark. PT Serif at 20px with 1.7 line height provides comfortable reading for the manifesto-style paragraphs. The 16px body-small size appears in footer and contact contexts where space is tighter. Verify licensing for these families before production use.

## Layout

The page uses a single full-width column with generous horizontal margins, creating an editorial rather than app-like feel. No sidebar, card grid, or complex multi-column structure is visible.

The hero section occupies the full viewport width with centered content. The navigation bar sits fixed at the top with the MiMo wordmark left-aligned and utility links right-aligned, separated by a single 1px horizontal rule in black that spans the full width. Below this, the hero display centers both horizontally and vertically within a field of repeating "MIMO" watermarks.

The body content follows with a comfortable measure—paragraphs appear to run about 65-75 characters per line, well within optimal reading width. The job listings section uses a table structure with three implicit columns: a narrow index column for two-digit numbers, a wide title column for role names, and a narrow action column containing right-pointing arrows. Each row is separated by 1px horizontal rules, with the first rule appearing above row 01 and subsequent rules between each entry.

Vertical rhythm is established through consistent paragraph spacing. The body paragraphs appear to have margins equivalent to one full line height between them, creating breathable but connected prose blocks. The job listings table uses substantially more internal vertical padding, giving each role room to feel like a distinct opportunity rather than cramped list items.

## Visual language

The dominant visual motif is restraint. Where many technology landing pages compete with color, animation, and imagery, MiMo's page trusts typography and whitespace to carry meaning. The repeating watermark pattern in the hero is the single decorative element, and even this is executed in faint gray on the warm canvas so that it reads as texture rather than ornament.

The contrast between Mi Sans and PT Serif is not merely aesthetic but functional: the sans-serif speaks in headlines and navigation with mechanical precision and wide tracking, while the serif delivers the philosophical body text with humanist warmth. This pairing reinforces the page's subject matter—artificial intelligence discussed in human terms.

Horizontal rules function as the primary structural device. The navigation bar's bottom border, the table row dividers, and implied section breaks all use the same 1px black line. This consistency makes the sparse layout feel intentional rather than unfinished. There are no rounded corners, no elevation shadows, no border-radius softness anywhere in the interface.

The arrow glyphs in the job listings table are simple rightward arrows, rendered in the same black as the text without any circle container or button-like treatment. They read as invitations to proceed rather than calls to action.

## Components

### Navigation bar

- **Anatomy**: Left-aligned MiMo wordmark in Mi Sans, right-aligned link cluster containing Blog, 1001, Join us, and a language selector with dropdown indicator.
- **Surface**: Transparent or canvas-colored background, no elevation.
- **Typography**: Navigation token for links; the wordmark appears to use similar weight and size.
- **Shape**: Full-width bar with 1px solid black bottom border, 0rem border radius.
- **Spacing**: Compact vertical padding, approximately 1rem.
- **Composition**: Flex row with space-between justification.

### Hero section

- **Anatomy**: Centered display text "HELLO, I'M MiMo" over a field of repeating "MIMO" characters in a lighter weight.
- **Surface**: Canvas background with faint watermark pattern.
- **Typography**: Hero-display token for primary text; the background watermark uses section-display scale with faint color.
- **Shape**: Full-width, 0rem border radius.
- **Spacing**: Generous vertical padding creating substantial presence, approximately 10-12rem equivalent.
- **Composition**: Absolute center alignment. The watermark repeats in a grid-like pattern across the entire hero area.

### Body content

- **Anatomy**: Sequential paragraphs of philosophical text about intelligence and AI.
- **Surface**: Canvas background continuing from hero.
- **Typography**: Body token for paragraphs; heading-3 for any subsections.
- **Shape**: No containing borders or backgrounds, 0rem border radius.
- **Spacing**: Paragraph margins at approximately 1.5rem between blocks.
- **Composition**: Centered column with comfortable measure, left-aligned text within the column.

### Job listings table

- **Anatomy**: Numbered rows with index, title, and arrow action. Six visible entries covering research and engineering roles.
- **Surface**: Canvas background, no row striping or hover states visible.
- **Typography**: Body token for titles; label token for index numbers; arrow as text glyph.
- **Shape**: Full-width rows with 1px solid black top borders, 0rem border radius.
- **Spacing**: Generous vertical cell padding, approximately 2.5rem per row.
- **Composition**: Three-column table with fixed narrow index and action columns, fluid title column.

### Footer contact

- **Anatomy**: Single line of text with email link.
- **Surface**: Canvas background continuing from table.
- **Typography**: Body-small token.
- **Shape**: No border or background separation from content above, 0rem border radius.
- **Spacing**: Moderate top margin after table, approximately 2rem.
- **Composition**: Left-aligned or following the content column alignment.

## Responsive behavior

The supplied images show only desktop layouts. Based on the visual system, several responsive adaptations are recommended.

At viewports below approximately 768px, the hero display at 6rem will likely require reduction to maintain comfortable fit. A reduction to 3rem preserves hierarchy while preventing overflow. The wide tracking on section-display text should reduce proportionally to prevent characters from fragmenting across lines.

The navigation bar's right-aligned link cluster should collapse to a hamburger menu or stack vertically on narrow screens, as the four items plus wordmark will crowd at mobile widths. The language selector with its dropdown chevron needs touch-friendly minimum heights of 44px.

The job listings table presents the clearest responsive challenge. The three-column structure should transition to a stacked layout on mobile: index number above the title, with the arrow repositioned to the right of the title on the same line. Alternatively, the index and arrow can become inline elements flanking the title, eliminating the table semantics entirely below a breakpoint.

Body text measure should remain constrained even on mobile—expanding to full viewport width would damage readability. Maintaining approximately 1rem side margins ensures the 20px body text stays within comfortable line lengths.

## Practical implementation guidance

### Preserve
- The strict two-family typographic system: Mi Sans for display and navigation, PT Serif for everything else.
- The warm off-white canvas against black type; this warmth is essential to the page's humanistic tone.
- The 1px black horizontal rules as the sole structural and decorative device.
- The generous tracking on Mi Sans display sizes, especially the 0.3em on watermark-scale text.
- The high contrast between hero display and its faint background pattern.
- The completely square corners throughout; any border radius would contradict the flat, editorial severity.

### Avoid
- Adding accent colors or gradient backgrounds; the palette's restraint is intentional.
- Rounding corners or adding shadows; the visual language is flat and crisp.
- Using Mi Sans for body text or PT Serif for headlines; the role separation is fundamental.
- Making the watermark pattern darker or more prominent; it must remain atmospheric.
- Adding card containers or bordered boxes around content sections.

### Recommended build order
1. Establish the canvas background color and load both font families with appropriate weights.
2. Build the navigation bar with its full-width bottom border and flex layout.
3. Implement the hero section with centered display text and the repeating watermark pattern.
4. Set up the body text column with proper measure and paragraph spacing.
5. Construct the job listings table with its three-column structure and row borders.
6. Add the footer contact line.
7. Implement responsive reductions for hero text and table layout.

### Accessibility
- The black on off-white combinations exceed WCAG AAA contrast ratios for normal and large text.
- Ensure the faint watermark pattern does not interfere with screen reader parsing; it should be implemented as decorative background or hidden from assistive technology.
- The arrow actions in the job table need explicit link semantics or button roles with accessible labels indicating the destination, as the glyph alone is not descriptive.
- Language selector should use proper `lang` attributes and announce the current selection state.
- Maintain focus indicators that respect the flat visual language—consider an offset outline or underline rather than a filled background change.

## Scope note

This guide covers the Xiaomi MiMo homepage landing experience including the hero, navigation, body manifesto, job listings table, and contact footer. Mobile layouts, hover and focus states, loading sequences, dark mode, and any interior pages linked from the navigation are not represented in the supplied material.
