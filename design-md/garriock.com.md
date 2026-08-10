# How garriock.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/garriock.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero landing with oversized Garriock & Co. wordmark in white serif against pure black canvas, with minimal top navigation and section indicator 01/.](https://pin.fontofweb.com/7367?format=jpg)](https://design.withfudge.com/share/pin-7367)

[Hero landing with oversized Garriock & Co. wordmark in white serif against pure black canvas, with minimal top navigation and section indicator 01/.](https://design.withfudge.com/share/pin-7367)

[![Services section with mixed-weight centered statement and six-row capability list with hairline separators on black ground, showing section indicator 03/.](https://pin.fontofweb.com/7365?format=jpg)](https://design.withfudge.com/share/pin-7365)

[Services section with mixed-weight centered statement and six-row capability list with hairline separators on black ground, showing section indicator 03/.](https://design.withfudge.com/share/pin-7365)

[![Partners section with bold name highlights in centered biography text and bullet-separated client list below, section indicator 05/.](https://pin.fontofweb.com/7364?format=jpg)](https://design.withfudge.com/share/pin-7364)

[Partners section with bold name highlights in centered biography text and bullet-separated client list below, section indicator 05/.](https://design.withfudge.com/share/pin-7364)

[![Clean hero variant with identical wordmark composition and navigation, demonstrating consistent black-background landing treatment.](https://pin.fontofweb.com/7366?format=jpg)](https://design.withfudge.com/share/pin-7366)

[Clean hero variant with identical wordmark composition and navigation, demonstrating consistent black-background landing treatment.](https://design.withfudge.com/share/pin-7366)

## Overview

Garriock & Co. presents itself as a design leadership consultancy through an uncompromisingly minimal visual system. The entire experience rests on a pure black canvas that eliminates visual noise and forces attention onto typography alone. There are no photographs, no gradients, no decorative elements—only precisely set type in two distinct voices. The system communicates authority through scale and restraint rather than complexity.

The design operates as a single-page editorial narrative divided into numbered sections. Each section maintains the same black ground while varying the typographic treatment to establish hierarchy. The oversized wordmark "Garriock & Co." anchors the hero with almost architectural presence, sitting low in the viewport like a foundation stone. Subsequent sections introduce mixed-weight statements, capability lists with hairline separators, and client rosters, all sharing the same disciplined spatial rhythm.

Navigation remains deliberately understated—a thin top bar with small system text and a central dot indicator—never competing with the content. Section numbers ("01/", "03/", "05/") appear as quiet marginalia, reinforcing the editorial quality without drawing primary attention. The overall effect is that of a premium printed annual report translated into screen space, where every element earns its place through absolute necessity.

## Colors

The palette is ruthlessly reduced to functional extremes. Black serves as the universal canvas, white as the sole ink, and a single blue appears only for default link states. No secondary colors, no tints, no overlays complicate the system.

| token | value | use |
|---|---|---|
| canvas | #000000 | Universal page background, all section grounds, navigation bar |
| ink | #FFFFFF | Primary text, wordmarks, headings, body copy, labels |
| accent | #0000EE | Default link color in navigation and inline references |
| muted-ink | #FFFFFF | Capability descriptions, secondary text (same value as ink, distinct token for semantic flexibility) |

The black canvas is absolute—no texture, no subtle variation, no image backgrounds appear in the visible system. White text sits directly on this void with no intermediate layers. The blue accent appears sparingly, reserved for interactive elements where browser-default link styling would otherwise intrude. This near-monochrome approach makes the occasional typographic weight shift feel like a color change in itself, creating hierarchy through mass rather than hue.

## Typography

Two commissioned typefaces establish the system's voice: Serrif Condensed for display and editorial text, Es Allianz for functional body copy. A system sans-serif handles navigation and labels at small sizes. The contrast between the condensed serifs' classical proportions and the clean sans-serif's neutrality creates tension without visual clutter.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Serrif Condensed | 4.875rem | 300 | 1.06 | -0.02em | Main wordmark, largest section statements |
| section-display | Serrif Condensed | 4.5rem | 300 | 1.15 | -0.02em | Secondary headlines, partner names in context |
| body-large | Serrif Condensed | 1.25rem | 300 | 1.25 | 0em | Capability labels, descriptive text |
| body | Es Allianz | 1.375rem | 400 | 1 | 0em | Mixed-weight statements, functional copy |
| label | System-Sansserif | 0.75rem | 400 | 1.2 | 0em | Section numbers, navigation items |
| navigation | System-Sansserif | 0.75rem | 400 | 1.2 | 0em | Top bar links, utility text |

Serrif Condensed, designed by Martin Vácha and available from Displaay Type Foundry, carries the brand's editorial authority through its light weight and compressed proportions. At display sizes, its tight letter-spacing (-0.02em) creates almost ligatured connections between characters, giving headlines a custom-crafted quality. Es Allianz, designed by David Mamie and available from Extraset Type Foundry, provides a more neutral voice for body content—slightly larger than the serif text but with cleaner, more open forms that maintain readability in mixed-weight paragraphs.

The system uses weight contrast within single lines to create emphasis: light serifs for flowing text, bold sans-serif for highlighted names or key terms. This technique appears in the partners section where "Glenn Garriock" and "Mike Sullivan" gain prominence through weight alone while remaining in the same size and color as surrounding text.

Verify licensing for these families before production use.

## Layout

The layout follows a strict editorial grid with generous but consistent margins. Content never bleeds to edges; horizontal padding of 60 pixels (3.75rem) creates a contained reading area that floats within the black void. Vertical rhythm is measured in large units—sections separate by hundreds of pixels, creating dramatic pauses that let each statement resonate before the next appears.

The top navigation bar spans full width with 60px horizontal padding, establishing the page's lateral boundaries. A thin horizontal rule separates this bar from the content below, the only visible structural line in the system. The central dot indicator in the navigation provides minimal orientation without textual labels.

Section spacing follows a clear hierarchy: hero sections receive the most dramatic vertical treatment, with content pushed toward the lower portion of the viewport. Text sections center their content both horizontally and vertically, creating symmetrical blocks that feel deliberately placed. Capability lists occupy a narrower central column, approximately one-third of the full width, forcing the eye to travel across the black space to read each row.

The bottom of each section carries a section number (formatted as "01/", "03/", "05/") in the lower left and a section title ("What we do", "How we work", "The Partners") in the lower right. These marginal elements frame the content and provide subtle navigation cues without interrupting the reading flow.

## Visual language

The visual language derives from high-end editorial design—annual reports, gallery catalogs, and architectural monographs. Every element submits to a hierarchy of silence: the black ground speaks first, then the white type, then the relationships between type sizes. There are no icons, no buttons, no cards, no shadows. The only "component" is the hairline separator used in capability lists, so thin it nearly disappears but sufficient to structure the vertical rhythm.

Typography itself becomes imagery. The "Garriock & Co." wordmark at hero scale functions as a logo, a photograph, and a headline simultaneously. Its serifs extend into the black space like architectural details, creating negative shapes as meaningful as the positive forms. The ampersand receives particular attention, its loop and tail exaggerated by the condensed proportions.

The system avoids all decorative flourish. No hover states are visible in still image, no loading animations, no scroll-triggered reveals. The confidence of the design lies in this restraint—trusting that the type, properly set, carries sufficient presence without enhancement. Even the client list, which could become a grid of logos, instead appears as pure text: names separated by centered bullets, flowing like prose rather than assembling as badges.

## Components

### Top navigation bar

- **Anatomy:** Full-width bar with left tagline, center dot indicator, right-aligned link group
- **Surface:** Background color `{colors.canvas}`, no elevation or shadow
- **Typography:** `{typography.navigation}` for all text elements
- **Shape:** Rectangular, height determined by content plus vertical padding
- **Spacing:** Horizontal padding of `{spacing.content-pad}` (60px), thin bottom border in subtle white
- **Composition:** Three-zone flex layout with tagline left, dot center, links right

The tagline "Design leadership and trusted talent, on demand." establishes immediate context. Links "Get in touch" and "Introduction" sit at the far right with comfortable separation. The central dot, approximately 8-10px, provides a minimal brand mark or scroll indicator.

### Hero wordmark

- **Anatomy:** Single line of oversized text, bottom-aligned within viewport
- **Surface:** Transparent, revealing `{colors.canvas}` below
- **Typography:** `{typography.hero-display}` at 78px/4.875rem
- **Shape:** Text only, no container
- **Spacing:** Generous bottom margin, left-aligned with page padding
- **Composition:** Occupies lower third of viewport, extends nearly full width

The wordmark "Garriock & Co." includes a terminal period, treated as part of the logotype. The period's dot echoes the navigation's central indicator, creating subtle visual rhyme across the page.

### Section statement

- **Anatomy:** Centered paragraph with mixed typographic weights
- **Surface:** Transparent on `{colors.canvas}`
- **Typography:** `{typography.section-display}` for base text, with `{typography.body}` weight variations for emphasis
- **Shape:** Fluid text block, width constrained by implicit max-width
- **Spacing:** Vertical padding of `{spacing.section}` (260px) above and below
- **Composition:** Center-aligned, approximately 60-70% of viewport width

Key names or terms receive bold weight within the light serif flow, creating emphasis without size change. Underlines appear beneath these bold terms, extending slightly beyond the text width like manual annotation marks.

### Capability list

- **Anatomy:** Vertical stack of labeled rows with right-aligned descriptions
- **Surface:** Transparent, each row separated by hairline border
- **Typography:** `{typography.body-large}` for labels, same family at lighter weight for descriptions
- **Shape:** Full-width rows, content centered within narrower inner column
- **Spacing:** Row padding approximately 16px vertical, hairline border top
- **Composition:** Two-column within each row: left-aligned category, right-aligned services

Categories include "Brand & Identity", "Product & Experience", "Motion & Visual", "Technology", "Research & Strategy", "Leadership". The right-aligned descriptions create an asymmetrical balance that keeps the list from feeling tabular.

### Client roster

- **Anatomy:** Centered paragraph of names separated by bullet characters
- **Surface:** Transparent on `{colors.canvas}`
- **Typography:** `{typography.body-large}` or slightly reduced display size
- **Shape:** Flowing text block, natural line breaks
- **Spacing:** Generous top and bottom margins matching section rhythm
- **Composition:** Center-aligned, wrapping naturally at viewport edges

Names include Apple, Microsoft, Toyota, Vodafone, GV, AI71, Kaia Health, Materia, Carter, HighGround, TUI, Dazed + Confused, Levi Strauss + Co, Chanel, Oscar, Nike, Cutler & Gross, Channel 4, Adobe, Sony, Subway, BBC, Perrier-Jouët, Le Coq Sportif. The centered bullet separator (•) creates rhythmic punctuation without visual weight.

### Section indicator

- **Anatomy:** Number prefix and section title, separated to opposite corners
- **Surface:** Transparent
- **Typography:** `{typography.label}`
- **Shape:** Text only
- **Spacing:** Positioned at bottom of section, aligned with page padding
- **Composition:** Number left, title right, both at baseline

The format "01/" with trailing slash suggests an editorial or filmic convention, implying continuation and sequence.

## Responsive behavior

The system as shown appears optimized for large viewports where the oversized typography achieves its intended impact. At reduced widths, several adaptations should preserve the design's integrity:

The hero wordmark, currently set at 78px, should scale down proportionally to maintain legibility without breaking layout. A minimum size of approximately 36px preserves character recognition while preventing overflow. The mixed-weight section statements require careful line-break handling—centered text with bold highlights needs to avoid orphaning emphasized terms on separate lines.

The capability list's two-column row structure should stack at narrow widths, placing the category label above its description rather than maintaining side-by-side alignment. This prevents the description text from compressing into unreadable narrow columns.

Navigation links in the top bar may collapse into a single "Menu" trigger or remain visible depending on viewport width, though the current minimal set of two links suggests they could persist across most sizes. The central dot indicator should remain visible as a consistent anchor.

The client roster's flowing text will naturally rewrap; no special handling required beyond ensuring bullets don't land at line starts where they might read as list markers rather than separators.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the only background; never introduce texture, image, or tint
- The two-typeface hierarchy: Serrif Condensed for display and editorial, Es Allianz for functional body
- The 60px horizontal padding as a consistent content boundary
- The hairline separator aesthetic for structural lists—subtle, nearly invisible, strictly functional
- The mixed-weight emphasis technique within single lines rather than color or size changes
- The section numbering convention with trailing slash

### Avoid
- Adding color beyond the specified black, white, and link blue
- Introducing photography, illustration, or iconography into the visual system
- Creating card-based or containerized layouts that would break the flat editorial surface
- Using the display typeface at small sizes where its condensed proportions compromise legibility
- Centering text that exceeds comfortable reading measure (approximately 75 characters)

### Recommended build order
1. Establish the black canvas and 60px horizontal padding as foundational constraints
2. Implement the top navigation bar with its three-zone composition and thin border
3. Set the hero wordmark at 78px with proper font loading and fallback handling
4. Build the section statement component with mixed-weight support and underline decoration
5. Create the capability list with hairline separators and two-column row structure
6. Add section indicators and marginal navigation elements
7. Implement the client roster as flowing centered text with bullet separators

### Accessibility
- The pure black and white contrast exceeds WCAG AAA requirements for normal text
- The light weight of Serrif Condensed at display sizes may challenge users with low vision; ensure browser zoom preserves readability
- The small system text (12px) in navigation should not carry critical information exclusively; consider minimum 16px for interactive elements to prevent zoom-triggered layout shifts on iOS
- Link color (#0000EE) against black fails contrast requirements; implement as underlined text or adjust to a lighter blue for interactive states
- The centered text alignment in statements and rosters creates uneven left edges; maintain sufficient line height (1.15 or greater) to aid tracking for readers with dyslexia

## Scope note

This guide covers the landing and primary content sections of garriock.com as visible in desktop view. Mobile layouts, breakpoint behavior, form interactions, motion design, and hover or focus states are not represented in the supplied material. The footer area and any additional pages beyond the single-scroll experience remain undocumented.
