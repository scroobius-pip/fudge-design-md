# How helenazhang.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/helenazhang.com-design)

Last updated: 2026-08-10

## Captured pages

[![Portfolio grid showing six project cards including Toyota Research Institute, Waze, PayPal, SoulCycle, Phosphor for Android, and Prolific Interactive with monochrome thumbnails](https://pin.fontofweb.com/5055?format=jpg)](https://design.withfudge.com/share/pin-5055)

[Portfolio grid showing six project cards including Toyota Research Institute, Waze, PayPal, SoulCycle, Phosphor for Android, and Prolific Interactive with monochrome thumbnails](https://design.withfudge.com/share/pin-5055)

[![Phosphor for Android banner with icon pattern background, centered serif title, black pill button, and three Dribbble project cards with arrow-link labels above footer](https://pin.fontofweb.com/5054?format=jpg)](https://design.withfudge.com/share/pin-5054)

[Phosphor for Android banner with icon pattern background, centered serif title, black pill button, and three Dribbble project cards with arrow-link labels above footer](https://design.withfudge.com/share/pin-5054)

[![Hero section with circular avatar portrait, large serif biography text with underlined links, and four article cards with thumbnail images and mono-spaced read links](https://pin.fontofweb.com/5053?format=jpg)](https://design.withfudge.com/share/pin-5053)

[Hero section with circular avatar portrait, large serif biography text with underlined links, and four article cards with thumbnail images and mono-spaced read links](https://design.withfudge.com/share/pin-5053)

[![Full page view showing header with status line and social links, circular avatar beside large serif bio, and article grid with iconography thumbnails and arrow buttons](https://pin.fontofweb.com/5052?format=jpg)](https://design.withfudge.com/share/pin-5052)

[Full page view showing header with status line and social links, circular avatar beside large serif bio, and article grid with iconography thumbnails and arrow buttons](https://design.withfudge.com/share/pin-5052)

## Overview

Helena Zhang's portfolio presents a deliberately restrained, monochrome editorial system that foregrounds typography and project imagery over decorative effects. The design establishes its character through the tension between two typefaces: a warm, classical serif used for all display and body text, and a precise mono face used for labels, navigation, and metadata. This pairing creates a voice that feels both personal and technically credible, appropriate for a designer whose work spans icon systems, brand identity, and product design.

The layout is organized around strict horizontal rules that divide the page into clear horizontal bands. Content sits within a centered container with generous whitespace, allowing project thumbnails and article imagery to breathe. The hero section introduces the designer through a circular avatar portrait set beside a large serif biography, establishing the scale relationship between display text and body that repeats throughout the page. Project cards follow a consistent grid pattern with monochrome or desaturated thumbnails, serif titles, and mono-spaced action links marked by arrow icons. The overall impression is of a carefully edited publication rather than a conventional portfolio template, with every element serving the content rather than competing with it.

## Colors

The color system is intentionally minimal, operating entirely in black, white, and grayscale. This restraint allows project imagery to provide the only color variation on the page, making each thumbnail or screenshot more visually significant. The palette derives from the interface itself rather than from photographic sources.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, rules, button fills, arrow icons |
| canvas | #ffffff | Page background, card backgrounds, button text on dark fills |
| muted | #808080 | Secondary text, captions, disabled states, subtle dividers |
| surface | #c0c0c0 | Mid-tone backgrounds for banners, placeholder regions, icon pattern fills |

The ink token serves as the dominant visual force: all text, horizontal rules, card borders, and the circular arrow buttons use pure black. The canvas token provides the negative space that makes the dense content feel breathable. Muted appears in secondary contexts where hierarchy needs softening without full disappearance. Surface activates for larger background areas such as the Phosphor for Android banner, where the icon pattern sits on a light gray field rather than white, creating depth without introducing color.

No accent colors appear in the interface. The design relies on typography weight, scale, and spacing to create hierarchy rather than chromatic contrast. When project thumbnails contain color, that color becomes the only saturated element on the page, drawing attention precisely where intended.

## Typography

The type system is built on two families with distinct roles. Cooper Lt Btwxx Light handles all display and reading text with its warm, slightly condensed serif character. Font-Copyright 2014 By Timo Gaessner 123 Buero All Rights Reserved, a mono face, manages all functional and navigational text. This division is absolute: no serif text appears in buttons or labels, and no mono text appears in headings or body paragraphs.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cooper Lt Btwxx Light | 2.5rem | 400 | 1.2 | -0.01em | Hero biography, major page titles |
| section-display | Cooper Lt Btwxx Light | 1.5rem | 400 | 1.3 | 0 | Project card titles, article headings |
| body | Cooper Lt Btwxx Light | 1rem | 400 | 1.5 | 0 | Project descriptions, article excerpts |
| label | Font-Copyright 2014 By Timo Gaessner 123 Buero All Rights Reserved | 0.75rem | 400 | 1.4 | 0.02em | Button text, link labels, metadata |
| navigation | Font-Copyright 2014 By Timo Gaessner 123 Buero All Rights Reserved | 0.75rem | 400 | 1.4 | 0.02em | Header links, social links, footer text |

The hero-display size at 2.5rem establishes the maximum text scale for the biography paragraph, which reads as a display block despite its sentence structure. Section-display at 1.5rem serves project and article titles with slightly tighter leading. Body text at 1rem provides comfortable reading for longer descriptions. The mono tokens at 0.75rem create clear subordination to the serif hierarchy while maintaining legibility for functional text.

Cooper Lt Btwxx Light is credited without designer or vendor attribution in the supplied records. Font-Copyright 2014 By Timo Gaessner 123 Buero All Rights Reserved is designed by Timo Gaessner 123 Buero and available from Timo Gaessner 123 Buero via milieugrotesque.com. Verify licensing for these families before production use.

## Layout

The page structure follows a single-column centered container with internal grids for project and article collections. The header occupies a full-width band containing a status line, centered name, and right-aligned social links, all separated by horizontal rules. Below this, the hero section places a circular avatar image to the left of a large serif biography block, with the text wrapping naturally beside and below the portrait.

Project cards arrange in a responsive grid, visible as two rows of three cards in the wider views. Each card contains a thumbnail image at top, followed by a serif title, descriptive text, and a mono arrow-link. The cards appear to share equal width within their row, with consistent gutters between them. Article cards follow a similar four-column grid in the lower section, each with thumbnail, title, excerpt, and arrow-link.

Horizontal rules appear as a recurring structural element: thick black lines separate the header from content, divide major sections, and underline the footer. These rules are not decorative borders but primary layout devices that organize the page into clear horizontal territories. The spacing between sections is generous, with the section token at 4rem creating clear breathing room between the hero, project grid, article grid, and footer.

The container maintains consistent side margins, keeping content centered and readable without reaching full viewport width. This restraint prevents the monochrome system from feeling harsh or unfinished at large sizes.

## Visual language

The visual language is editorial and systematic, drawing from print design and early digital aesthetics rather than contemporary gradient-heavy or shadow-based trends. The monochrome palette, strict grid, and prominent horizontal rules create a sense of curated permanence, as if the page were a well-designed document rather than a transient web interface.

Circular forms provide the primary geometric relief from the otherwise rectilinear system. The avatar portrait is cropped to a perfect circle, and arrow buttons use circular black backgrounds with white arrow icons. These circles introduce organic softness that balances the rigid horizontal rules and grid lines.

Imagery throughout is treated with consistent restraint. Project thumbnails appear in their native color or in deliberate monochrome, never with overlaid gradients or text. The Phosphor for Android banner uses a pattern of line icons on a gray surface, demonstrating how the system handles decorative imagery without breaking its tonal discipline. Article thumbnails show iconography, interface elements, and character illustrations at consistent aspect ratios.

The arrow icon appears as a repeated motif: a simple diagonal arrow within a circle, used for all external links and case study references. This single icon replaces the need for varied button styles or link treatments, reinforcing the systematic approach.

## Components

### Header

The header spans the full content width with three horizontal bands. The top band contains a left-aligned status phrase, a centered name in serif text, and right-aligned social links in mono. A thick horizontal rule separates this from the content below. A secondary rule appears below the hero section, creating a framed territory for the biography and avatar.

- Anatomy: status line, name, social links, horizontal rules
- Surface: transparent background, ink text
- Typography: name uses hero-display scale, social links use navigation token
- Spacing: compact vertical padding, rules at full width

### Hero section

The hero presents the designer's identity through a circular avatar portrait and a large serif biography paragraph. The avatar floats left with text wrapping to its right and below. Links within the biography are underlined in the traditional manner, using the ink color.

- Anatomy: circular avatar image, biography paragraph with inline links
- Surface: canvas background
- Typography: biography uses hero-display token, links inherit with underline
- Shape: avatar at 50% border-radius, perfect circle
- Spacing: generous padding below before the next horizontal rule

### Project card

Project cards appear in a multi-column grid, each containing a thumbnail image, serif title, descriptive text, and a circular arrow-link with mono label. Cards have no visible border or shadow, relying on whitespace and the grid structure for separation.

- Anatomy: thumbnail image, title, description, arrow-link
- Surface: canvas background
- Typography: title uses section-display, description uses body, link uses label
- Spacing: consistent internal padding between elements, external gutter matching content-gap

### Article card

Article cards follow the same structural pattern as project cards but with smaller thumbnails and more compact text. The four-column layout visible in the images suggests a denser information hierarchy for written content versus project work.

- Anatomy: thumbnail image, title, excerpt, arrow-link
- Surface: canvas background
- Typography: title uses section-display, excerpt uses body, link uses label
- Spacing: matching project card system

### Pill button

A single pill button appears in the Phosphor for Android banner, using a black fill with white mono text. This is the only filled button visible in the interface, reserved for the primary call-to-action within a promotional context.

- Anatomy: text label within rounded container
- Surface: ink background, canvas text
- Typography: label token
- Shape: full pill at 9999px border-radius
- Spacing: comfortable internal padding

### Arrow-link

The arrow-link combines a circular black button containing a white arrow icon with adjacent mono text. This component appears universally for all external references, case studies, and article links.

- Anatomy: circular button with arrow icon, text label
- Surface: ink circle with canvas arrow, ink text
- Typography: label token
- Shape: circle at 50% border-radius for button
- Composition: icon and text in horizontal arrangement with small gap

## Responsive behavior

The grid layouts should collapse gracefully as viewport width decreases. The three-column project grid and four-column article grid will require breakpoint transitions to two-column and single-column arrangements. The hero section's side-by-side avatar and text should stack vertically on narrow viewports, with the avatar centered above the biography.

Typography scales should maintain their rem-based relationships, ensuring the hero biography does not become uncomfortably large on small screens. The mono label text may require slight size reduction or increased letter spacing at small sizes to maintain legibility.

The horizontal rules that organize the desktop layout become even more critical on mobile, as they provide the primary visual structure when grid gutters disappear. Touch targets for arrow-links should expand to accommodate finger interaction, with the circular button providing adequate size.

## Practical implementation guidance

### Preserve
- The strict two-typeface hierarchy: serif for all display and reading, mono for all functional text
- The monochrome palette as a deliberate constraint; do not introduce accent colors
- The circular avatar and arrow-button motifs as signature geometric elements
- The thick horizontal rules as primary layout organizers
- The underlined inline links within body text, avoiding colored or button-styled alternatives

### Avoid
- Adding background colors to cards or sections beyond the surface token
- Using shadows, gradients, or blur effects
- Introducing additional icon styles beyond the circular arrow
- Making the mono face larger than the label scale; its role is subordinate
- Stretching thumbnails to inconsistent aspect ratios

### Recommended build order
1. Establish the typeface loading and base typography scale
2. Implement the horizontal rule system and container spacing
3. Build the header with its three-part layout and rules
4. Create the hero section with circular avatar and biography
5. Develop the project card component with thumbnail, text, and arrow-link
6. Extend to article cards with the same pattern
7. Add the pill button variant for promotional banners
8. Implement grid collapse behavior for narrower viewports

### Accessibility
- Ensure the circular arrow buttons have sufficient touch target size, minimum 44 by 44 pixels
- Provide visible focus states for all links, maintaining the underline convention
- Use semantic heading hierarchy with the section-display and hero-display scales
- Confirm color contrast meets standards: ink on canvas provides maximum contrast, but verify muted text against canvas meets WCAG guidelines for small text
- Consider adding skip navigation for the repeated arrow-link pattern

## Scope note

This guide covers the homepage and its visible components including the header, hero biography, project grid, article grid, and footer. Interior pages, hover states, loading behavior, and motion design are not represented in the supplied material. Measurements are practical adaptation targets derived from visual inspection.
