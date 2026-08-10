# How paulstamatiou.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/paulstamatiou.com-design)

Last updated: 2026-08-10

## Captured pages

[![2025 year-in-review article with dark olive background, left sidebar navigation with icon buttons, and serif body text with underlined inline links](https://pin.fontofweb.com/6704?format=jpg)](https://design.withfudge.com/share/pin-6704)

[2025 year-in-review article with dark olive background, left sidebar navigation with icon buttons, and serif body text with underlined inline links](https://design.withfudge.com/share/pin-6704)

[![Homepage hero with dark olive background, profile introduction, pill-shaped MORE button, email subscription field, and posts list panel with rounded corners](https://pin.fontofweb.com/6703?format=jpg)](https://design.withfudge.com/share/pin-6703)

[Homepage hero with dark olive background, profile introduction, pill-shaped MORE button, email subscription field, and posts list panel with rounded corners](https://design.withfudge.com/share/pin-6703)

[![Light cream footer section with profile avatar, email subscription input, previous and recently lists, and minimal footer navigation links](https://pin.fontofweb.com/3515?format=jpg)](https://design.withfudge.com/share/pin-3515)

[Light cream footer section with profile avatar, email subscription input, previous and recently lists, and minimal footer navigation links](https://design.withfudge.com/share/pin-3515)

[![Browse No More article with dark olive background, serif display heading, and body text with italicized phrases and underlined links](https://pin.fontofweb.com/3514?format=jpg)](https://design.withfudge.com/share/pin-3514)

[Browse No More article with dark olive background, serif display heading, and body text with italicized phrases and underlined links](https://design.withfudge.com/share/pin-3514)

## Overview

Paul Stamatiou's personal website presents a dark, contemplative reading environment built around long-form editorial content. The design establishes immediate atmosphere through an almost-black olive canvas that shifts warmth under text, creating a sense of depth without relying on gradients or shadows. The visual system pairs two distinct typographic personalities: a clean, geometric sans family for navigation and interface labels, and a classical serif family for all reading text. This split reinforces the site's identity as a designer's space—technically precise in its chrome, humanistic in its content.

The layout orbits around a persistent left sidebar containing iconic navigation, freeing the main content area for uninterrupted reading. Content density is intentionally low; generous vertical spacing between paragraphs, sections, and UI elements creates a meditative pace appropriate for reflective essays. The homepage introduces the author through a brief manifesto before transitioning into a paginated posts list, while article pages strip away everything except the text and a minimal header. Every interactive element is subdued—buttons sit quietly in raised surfaces, links underline on principle rather than decoration, and the overall impression is of a space that respects the reader's attention.

## Colors

The palette is restrained and warm-leaning, built on near-black with carefully modulated off-whites for readability and hierarchy.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background; deepest layer behind all content |
| ink | #FFFFFF | Primary text on dark backgrounds; headings and body copy |
| ink-muted | #A3B3A3 | Secondary text; descriptions, dates, and supporting information |
| ink-dim | #6E7465 | Tertiary text; footer links, captions, and inactive states |
| accent-warm | #F4FBF2 | Highlighted text selections and emphasized phrases in body |

The dark mode dominates all visible surfaces. Light values are reserved exclusively for typography and small accent moments. The olive cast in the canvas prevents the design from feeling cold or clinical; it suggests aged paper, reading lamps, and late-night composition. The accent-warm appears sparingly for inline emphasis, creating a gentle glow against the dark ground without the harshness of pure white. No light-mode variant is present in the shown pages; the system assumes persistent darkness.

## Typography

Six font families are supplied: Averta Std, Pp Fragment Glare, Pp Fragment Glare Medium, Psc, Psc-Italic Regular, and Source Sans 3 Vf. Five of these establish the visible typographic hierarchy, with clear role separation between interface and content. Pp Fragment Glare Medium and Psc-Italic Regular are present in the source files but do not appear in the captured interface text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Fragment Glare | 1.8rem | 500 | 1.35 | -0.015em | Article titles and major page headings |
| section-display | Averta Std | 1.3rem | 500 | 1.35 | -0.02em | Post list titles, section labels |
| body | Psc | 1.1875rem | 400 | 1.55 | 0 | Primary reading text in articles |
| body-lead | Psc | 1.25rem | 500 | 1.5 | 0 | Homepage introduction and lead paragraphs |
| body-emphasis | Psc | 1.35rem | 600 | 1.11 | 0 | Highlighted phrases and callout text |
| label | Averta Std | 1rem | 400 | 1.5 | 0 | Buttons, inputs, navigation labels |
| navigation | Averta Std | 1rem | 400 | 1.5 | 0 | Sidebar icon buttons and nav links |
| legal | Source Sans 3 Vf | 1.05rem | 480 | 1.5 | 0 | Footer text, metadata, and secondary lists |

Pp Fragment Glare carries display weight with classical proportions and subtle contrast modulation, lending authority to article titles without shouting. Psc serves as the workhorse reading face, with generous x-height and open counters that maintain clarity at the slightly larger-than-default body size. Averta Std's geometric neutrality keeps navigation and labels from competing with content. Source Sans 3 Vf appears only in lighter weights for supporting information where maximum neutrality is desired.

Verify licensing for these families before production use. No designer or vendor attribution is supplied in the source materials.

## Layout

The page architecture follows a fixed sidebar plus fluid main content pattern. The left sidebar occupies a narrow permanent column, approximately 4-5rem wide, positioned flush to the left edge. It contains stacked icon buttons for primary navigation—home, profile, posts, and theme toggle—each with generous vertical padding and rounded rectangular hit areas. The sidebar background matches the page canvas, creating a continuous dark plane that the icons barely disturb.

Main content sits in a centered column with maximum width constrained for optimal reading measure. The content area does not extend to full viewport width; comfortable margins remain on both sides even at wide resolutions. On the homepage, this column contains the author introduction, a subscription field, and a posts panel. On article pages, it carries the title, metadata, and flowing body text.

Vertical rhythm is established through section spacing of 10rem between major content blocks, with paragraph spacing at 1rem and tighter 0.75rem gaps between related text elements. The posts list panel uses negative margin tricks to create visual indentation, with left offset of -2.75rem pulling content slightly outside the main column boundary while internal padding restores readable alignment.

## Visual language

Photography and imagery appear inline with article content, breaking the text flow with full-width or near-full-width visuals that share the dark environment's muted warmth. Images are not heavily processed; they retain natural color with slight desaturation that prevents them from feeling pasted onto the dark canvas. Rounded corners on image containers—1.5rem—soften the transition between text and visual without becoming decorative.

The icon system is minimal and monochrome, using simple line or filled shapes in the muted ink color. Navigation icons are small, approximately 1rem, with no labels visible in the default state. The theme toggle appears as a crescent moon, suggesting dark-mode persistence with an option for light transition.

Links in body text receive underline treatment rather than color change, maintaining the warm off-white ink color while adding the traditional affordance. The underline weight appears slightly heavier than standard browser defaults, suggesting intentional optical tuning for the dark background.

## Components

### Sidebar navigation

- **Anatomy**: Vertical stack of four icon buttons with no visible text labels
- **Surface**: Transparent background, icons in ink-muted (#A3B3A3)
- **Shape**: Rounded rectangles with 1rem radius, 0.875rem vertical padding
- **Spacing**: Compact vertical rhythm with tight gaps between items
- **Composition**: Fixed position, left-aligned, vertically centered or top-aligned

### Hero introduction

- **Anatomy**: Display heading in hero-display, followed by body-lead paragraph and metadata list
- **Typography**: hero-display for name/identity, body-lead for description, legal for biographical details
- **Spacing**: 1rem between heading and lead, 0.75rem between metadata items
- **Surface**: Transparent, text directly on canvas

### MORE button

- **Anatomy**: Text label with dropdown chevron, contained in raised pill
- **Surface**: canvas background with subtle elevation, ink-muted text
- **Shape**: 0.625rem border radius, compact horizontal and vertical padding
- **Typography**: label token, uppercase or small-caps treatment
- **Spacing**: 1rem top margin from preceding content

### Email subscription field

- **Anatomy**: Text input with placeholder, RSS link positioned at right edge
- **Surface**: canvas background with subtle border definition
- **Shape**: Full pill radius (9999px), generous horizontal padding
- **Typography**: label token for placeholder, legal for RSS link
- **Spacing**: 2.5rem top margin from preceding content, full width of content column

### Posts list panel

- **Anatomy**: Contained card with header showing count and pagination, followed by stacked post entries
- **Surface**: canvas background with rounded container, 1.5rem border radius
- **Typography**: section-display for post titles, body for descriptions
- **Spacing**: 2.5rem internal padding, 1rem between entries
- **Shape**: Rounded corners with subtle border or shadow for elevation

### Article header

- **Anatomy**: hero-display title, body-lead subtitle, legal date
- **Typography**: hero-display with negative tracking for title density
- **Spacing**: 0.75rem between title and subtitle, 0.5rem to date
- **Surface**: Transparent on canvas

### Article body

- **Anatomy**: Flowing paragraphs with occasional inline links and emphasized phrases
- **Typography**: body token for paragraphs, body-emphasis for highlighted text
- **Spacing**: 1rem between paragraphs, 1.5rem after block elements
- **Surface**: Transparent, full content column width

## Responsive behavior

The sidebar navigation should collapse to a horizontal bar or hamburger menu at narrow viewports, preserving the icon-only pattern but adapting to touch-friendly sizing. The content column should maintain comfortable margins down to approximately 1rem on each side, with body text never exceeding 75 characters per line. The posts panel should remain full-width within the content column, with internal padding reducing proportionally on smaller screens.

Image containers should maintain their rounded corners at all sizes, with aspect ratios preserved through object-fit. The email subscription field should stack its RSS link below the input on narrow screens rather than maintaining the inline right-positioned layout.

## Practical implementation guidance

### Preserve
- The dark olive warmth of the canvas; pure black loses the site's character
- The typographic split between sans interface and serif content
- Generous vertical spacing; the reading pace depends on it
- Underlined inline links rather than color-shifted alternatives
- Rounded corners on all elevated surfaces and image containers

### Avoid
- Adding background colors to article body text; the transparent-on-canvas treatment is intentional
- Increasing label or navigation weight; the 400 weight maintains hierarchy
- Tightening paragraph spacing below 1rem; readability suffers on dark backgrounds
- Introducing bright accent colors; the muted palette is the point
- Shadow-heavy elevation; the flat raised surfaces communicate depth through color alone

### Recommended build order
1. Establish the dark canvas and content column max-width
2. Implement the typography scale with correct family loading and fallback stacks
3. Build the sidebar navigation with icon buttons and fixed positioning
4. Create the article body component with proper paragraph spacing and link underlines
5. Add the posts panel with rounded container and entry list
6. Implement the subscription field and MORE button
7. Polish with image containers, metadata lists, and footer elements

### Accessibility
- Ensure icon buttons have aria-labels or visually hidden text for screen readers
- Maintain minimum 4.5:1 contrast for all body text; the ink on canvas pairing exceeds this
- Consider a light mode option; the current system is permanently dark
- Provide focus indicators for keyboard navigation that complement the rounded shapes
- Test serif body text at 1.1875rem for readability with low vision users; the size is generous but verification helps

## Scope note

This guide covers the homepage and article page surfaces visible in the supplied images. The light cream footer from older images suggests a previous or alternate theme variant not present in current pages. Pagination behavior, search functionality, and individual post permutations beyond the shown layouts are not documented. Motion, loading states, and form validation visuals are not represented in the still images. Pp Fragment Glare Medium and Psc-Italic Regular are present in source files but not visible in the shown interface.
