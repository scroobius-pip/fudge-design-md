# How aurorashouse.webflow.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aurorashouse.webflow.io-design)

Last updated: 2026-08-10

## Captured pages

[![About Me page with bold Helvetica hero heading, Lora body text, and pill-shaped dark navigation bar on white canvas](https://pin.fontofweb.com/518?format=jpg)](https://design.withfudge.com/share/pin-518)

[About Me page with bold Helvetica hero heading, Lora body text, and pill-shaped dark navigation bar on white canvas](https://design.withfudge.com/share/pin-518)

[![Mothers project case study with full-bleed brick building photograph, serif description, and bold Next Project link with circular icon](https://pin.fontofweb.com/517?format=jpg)](https://design.withfudge.com/share/pin-517)

[Mothers project case study with full-bleed brick building photograph, serif description, and bold Next Project link with circular icon](https://design.withfudge.com/share/pin-517)

[![Mothers project hero with oversized tight-tracking Helvetica display heading and Lora subheading on generous white space](https://pin.fontofweb.com/516?format=jpg)](https://design.withfudge.com/share/pin-516)

[Mothers project hero with oversized tight-tracking Helvetica display heading and Lora subheading on generous white space](https://design.withfudge.com/share/pin-516)

[![Quest project card with vivid red background, white geometric star illustration, and pill-shaped category tag with arrow](https://pin.fontofweb.com/515?format=jpg)](https://design.withfudge.com/share/pin-515)

[Quest project card with vivid red background, white geometric star illustration, and pill-shaped category tag with arrow](https://design.withfudge.com/share/pin-515)

## Overview

Aurora's House is a graphic designer's portfolio built on stark contrasts: massive, tightly tracked Helvetica headlines against generous white space, with Lora's warm serifs providing readable, human-scale body text. The system favors editorial confidence over decorative complexity. Navigation sits in a dark pill bar that floats at the top of pages, while project pages unfold as long-form case studies anchored by full-bleed photography and bold typographic hierarchy. A vivid red accent color appears selectively on project cards and interactive moments, creating punctuation points in an otherwise monochrome environment. The overall impression is that of a print-aware designer translating magazine-like layouts to the web—precise, spacious, and intentionally restrained in its color palette.

## Colors

The palette is intentionally minimal, built on a stark black-and-white foundation with a single vivid accent. Colors serve clear semantic roles rather than creating complex harmonies.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, navigation bar background, category tags |
| canvas | #ffffff | Page backgrounds, card text on red surfaces, icon backgrounds |
| muted-ink | #555555 | Body paragraphs, secondary descriptions, email links |
| accent-red | #e63946 | Project card backgrounds, interactive highlights, visual punctuation |
| surface-dark | #1a1a1a | Navigation bar fill, near-black surfaces requiring subtle distinction from pure black |

The system operates in a light mode exclusively across visible pages. White canvas dominates, allowing photography and typography to carry visual weight. Black ink provides maximum contrast for display type. The muted-ink tone softens long-form reading without introducing a true gray scale. The accent-red appears as a full-bleed surface on project cards rather than as small UI elements, giving it the presence of a brand color rather than a button state. No dark mode, gradient fills, or shadow systems are visible in the current interface.

## Typography

Two families create the typographic tension: Helvetica for all display, navigation, and label material; Lora for body copy and descriptive text. This pairing evokes editorial design—sans-serif authority against serif warmth.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Helvetica | 5rem | 700 | 0.95 | -0.03em | Page titles, name introductions |
| section-display | Helvetica | 3.5rem | 700 | 1 | -0.02em | Project headings, "Next Project" links |
| body | Lora | 1.25rem | 400 | 1.5 | 0em | Paragraphs, descriptions, case study text |
| label | Helvetica | 0.875rem | 400 | 1.2 | 0.02em | Category tags, metadata |
| navigation | Helvetica | 0.875rem | 400 | 1 | 0.01em | Nav bar links, "CV" label |

Helvetica appears in Bold (700) for display sizes and Regular (400) for functional text. The tight negative tracking on display sizes—particularly the hero-display token—creates a compressed, impactful headline form that distinguishes the portfolio's voice. Lora serves exclusively at body size with open leading for comfortable reading across long case study descriptions.

Verify licensing for these families before production use. Lora is designed by Olga Karpushina and Alexei Vanyashin (Cyrillic) through Cyreal. Helvetica attribution is not supported by the available source records.

## Layout

The layout system relies on generous margins and asymmetric content placement rather than rigid grids. Pages feel spacious, with significant breathing room between elements.

**Page structure.** A fixed or sticky navigation bar spans the full viewport width, contained within a rounded pill shape with internal horizontal padding. Below this, content areas use substantial top margins—approximately 6rem—before major headings appear. The hero section on the About Me page places the name introduction flush left with no containing max-width constraint, allowing the oversized type to define its own spatial boundaries.

**Content width.** Body text and descriptions operate within a comfortable reading measure, roughly 60-70 characters per line, achieved through implicit width constraints rather than explicit container borders. Project case studies center descriptive paragraphs with generous side margins, while display headings may break this containment and extend wider.

**Vertical rhythm.** Section spacing follows a 6rem baseline between major content blocks. Within sections, element spacing uses 2rem gaps between headings and body text, tightening to 0.5rem for related label-value pairs like "Email:" and the address itself.

**Project pages.** Case studies lead with a full-bleed photograph occupying the upper viewport, followed by white space, then descriptive text, and conclude with a prominent "Next Project" link. This sequential, scroll-driven structure treats each project as a self-contained editorial spread.

**Z-index and layering.** The navigation bar floats above content with its dark surface creating clear separation. No visible shadows or elevation tokens are present; layering is achieved through color contrast alone.

## Visual language

The visual language draws from print editorial and Swiss typography traditions, adapted for a portfolio context where the work itself must remain central.

**Photography treatment.** Images appear full-bleed without borders, rounded corners, or overlay effects. The Mothers project photograph shows a brick building facade in natural daylight—unguarded, documentary in tone. This treatment suggests the designer lets project imagery speak without interface interference.

**Iconography and marks.** A distinctive circular icon accompanies the "Next Project" link: a light gray circle containing a red heart and the letter "A" in a playing-card reference. This personal mark reappears on the Quest project card as corner ornaments—star bursts and reversed "A" characters—suggesting a consistent designer monogram used as decorative punctuation.

**Card surfaces.** The Quest project card demonstrates a bold inversion: vivid red background with white typography and geometric illustration. This full-color card treatment contrasts sharply with the otherwise monochrome site, functioning as a portfolio piece rather than a UI component.

**Line and rule.** No visible borders, dividers, or horizontal rules separate sections. White space alone carries the burden of structural separation. Underlined text appears only on functional links (email addresses, Instagram handles), using standard browser-like underlining rather than custom decorative rules.

**Motion and interaction cues.** Static images reveal no animation states. The "Next Project" link's circular icon and the category tag's arrow (→) suggest hover targets, but no motion language is visible in still images.

## Components

**Navigation bar**
- Anatomy: Horizontal pill-shaped container with left-aligned "CV" label, center-aligned "AURORA" logotype, and right-aligned "Email" and "About me" links
- Surface: Dark near-black fill (`{colors.surface-dark}`) with white text
- Typography: `{typography.navigation}` for all elements; center logotype may share weight with display type
- Shape: Full pill border radius (`{rounded.pill}`), creating a capsule that floats near the viewport top
- Spacing: Internal horizontal padding of approximately 1.5rem; link spacing of roughly 1.5rem between "Email" and "About me"
- Composition: Three-zone layout with flexible centering of the logotype

**Project card (Quest)**
- Anatomy: Rounded rectangle with project title "Quest" at top left, category tag at top right, central geometric illustration, and corner monogram marks
- Surface: Solid vivid red fill (`{colors.accent-red}`)
- Typography: White Helvetica display for title; white label text for category tag
- Shape: `{rounded.card}` border radius
- Spacing: 2rem internal padding; illustration centered with generous surrounding space
- Composition: Asymmetric with title and tag on opposing horizontal axes; corner marks at top-left and bottom-right create diagonal balance

**Category tag**
- Anatomy: Pill-shaped label with text and trailing arrow (→)
- Surface: Black fill (`{colors.ink}`) with white text
- Typography: `{typography.label}`
- Shape: `{rounded.tag}` border radius
- Spacing: Compact horizontal padding of approximately 1.25rem

**Next Project link**
- Anatomy: Bold text "Next Project" followed by circular icon containing heart and "A" mark
- Surface: Transparent background; icon uses light gray circle
- Typography: `{typography.section-display}`
- Shape: Icon circle uses 50% border radius
- Spacing: Approximately 1rem gap between text and icon
- Composition: Inline horizontal arrangement with icon slightly elevated from baseline

**Body text block**
- Anatomy: Paragraphs of Lora text with occasional label prefixes ("Email:", "Instagram:")
- Surface: Transparent on white canvas
- Typography: `{typography.body}` for descriptions; labels appear to use same family at similar size with possible weight or style distinction
- Spacing: 2rem after headings; 1rem between label and value pairs

## Responsive behavior

No mobile layouts are visible in the supplied images. Based on the desktop-first structure, implement the following adaptive strategy:

- The navigation pill should remain fixed-width on smaller viewports, potentially converting to a hamburger or simplified mark below a tablet breakpoint
- Hero display type at 5rem will require scaling down to 3rem or 2.5rem on narrow viewports to prevent overflow
- Body text measure should maintain comfortable line length; consider increasing side margins on mobile rather than reducing type size
- Project card aspect ratio may shift from portrait to landscape on wider viewports, or stack vertically in a scroll sequence
- Full-bleed photography should maintain aspect ratio with `object-fit: cover` rather than stretching

## Practical implementation guidance

**Preserve**
- The stark Helvetica/Lora type pairing and its weight distribution—bold sans for voice, regular serif for reading
- Generous white space as a structural element, not merely absence
- The single vivid red as an accent surface rather than scattered small elements
- The pill-shaped navigation as a distinctive, floating chrome element
- The personal monogram/icon system (heart, "A", star burst) as consistent decorative punctuation

**Avoid**
- Adding gray backgrounds or card surfaces that compete with the white canvas
- Introducing additional accent colors beyond the established red
- Tightening body text leading or reducing display tracking—the spaciousness is intentional
- Border-based separators where white space suffices
- Shadow systems or elevation effects; the flat, print-like surface quality is essential

**Recommended build order**
1. Establish the 0.25rem spacing unit and 6rem section baseline
2. Implement Helvetica display type with tight negative tracking
3. Add Lora body text with open leading
4. Build the pill navigation with dark fill and three-zone layout
5. Create the project card component with red surface and white content
6. Add the "Next Project" link pattern with circular icon
7. Integrate full-bleed photography treatment for case studies

**Accessibility**
- Ensure the dark navigation bar meets WCAG AA contrast (white on near-black passes)
- The red project card (#e63946) with white text should be verified for contrast compliance; if insufficient, darken the red or add text shadow
- Display type at 5rem with -0.03em tracking may reduce legibility for some users; consider a less-tracked alternative at smaller sizes
- Underlined links for email and social handles provide clear affordance without relying on color alone

## Scope note

This guide covers the About Me and project case study surfaces visible in the supplied images. The Mothers and Quest project pages represent the primary content types, but additional project templates, a homepage index, footer elements, form states, and mobile breakpoints are not included. Motion, hover states, and loading behavior are not documented. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid.
