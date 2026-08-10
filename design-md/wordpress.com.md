# How wordpress.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wordpress.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage themes showcase with serif headline 'Drag, drop, set it apart' and blue action button above a grid of colorful website preview cards](https://pin.fontofweb.com/4488?format=jpg)](https://design.withfudge.com/share/pin-4488)

[Homepage themes showcase with serif headline 'Drag, drop, set it apart' and blue action button above a grid of colorful website preview cards](https://design.withfudge.com/share/pin-4488)

[![About page network statistics section with large white numerals on dark background and serif heading with outlined button](https://pin.fontofweb.com/768?format=jpg)](https://design.withfudge.com/share/pin-768)

[About page network statistics section with large white numerals on dark background and serif heading with outlined button](https://design.withfudge.com/share/pin-768)

[![About page hero with serif display heading 'We're as diverse as the websites our customers create' above a full-width team photograph](https://pin.fontofweb.com/767?format=jpg)](https://design.withfudge.com/share/pin-767)

[About page hero with serif display heading 'We're as diverse as the websites our customers create' above a full-width team photograph](https://design.withfudge.com/share/pin-767)

[![About page values section with white text and icons on a solid blue background featuring two-column card layout with photographs](https://pin.fontofweb.com/766?format=jpg)](https://design.withfudge.com/share/pin-766)

[About page values section with white text and icons on a solid blue background featuring two-column card layout with photographs](https://design.withfudge.com/share/pin-766)

## Overview

WordPress.com presents itself as a platform for creative ownership through a design system that balances editorial warmth with digital clarity. The visual language centers on a distinctive pairing: a rounded serif with humanist proportions, supplied by the font files attributed to Jorge Cisterna, handles all display and headline duties, while Inter, a highly legible sans-serif, manages body copy, labels, and navigation. This typographic contrast creates immediate hierarchy—serif for personality and pause, sans-serif for scanning and action.

The color system is intentionally restrained. A near-black ink anchors the interface, appearing as both text and full-bleed section backgrounds. Against this darkness, white typography achieves maximum contrast and confidence. A vibrant blue serves as the singular accent, reserved for primary actions, value-statement surfaces, and interactive emphasis. The result is a system that feels simultaneously premium and accessible, editorial and functional. Photography plays a supporting role, often appearing in rounded cards or full-bleed documentary contexts, never competing with the typographic voice.

## Colors

The palette derives its power from restraint: four core colors handle nearly every interface need, with a warm neutral and subtle border completing the set.

| token | value | use |
|---|---|---|
| ink | #101517 | Primary text, dark section backgrounds, footer surfaces |
| canvas | #ffffff | Page backgrounds, text on dark surfaces, card fills |
| action | #3858e9 | Primary buttons, value section backgrounds, link emphasis |
| muted | #8c8f94 | Secondary text, captions, disabled states |
| surface-warm | #f6f7f8 | Subtle section alternation, card backgrounds on light pages |
| border-subtle | #dcdcde | Hairline dividers, card outlines, form field borders |

The system operates in two primary modes. Light mode dominates: ink text on canvas backgrounds, with action blue appearing as contained buttons and inline links. Dark mode inverts this relationship for impact sections—network statistics, team photography backdrops, and closing statements—where white text on ink backgrounds creates dramatic contrast. The action blue occasionally expands to fill entire sections, functioning as a third mode where white text and icons float on a saturated field. No gradients or shadows are employed; color transitions are handled through hard section breaks or photographic content.

## Typography

Two families create the full typographic range. The serif display face is provided by the font files labeled "By Jorge Cisterna-14066154350215534249" and "By Jorge Cisterna-18335614256516950002" in the source, both attributed to designer Jorge Cisterna and vendor Latinotype Ltda. Inter, designed by Rasmus Andersson and provided by vendor Rsms, handles functional text. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Jorge Cisterna-14066154350215534249 | 4rem | 400 | 1.1 | -0.01em | Homepage headlines, major section openings |
| section-display | By Jorge Cisterna-14066154350215534249 | 2.5rem | 400 | 1.2 | -0.01em | About page headings, value statements |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, introductory copy |
| label | Inter | 0.75rem | 600 | 1.4 | 0.08em | Eyebrows, category tags, uppercase metadata |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Primary nav, secondary links, buttons |

The serif appears exclusively at 400 weight, relying on size and spacing for hierarchy rather than weight variation. Its rounded terminals and generous counters give headlines a welcoming, crafted quality that distinguishes the brand from generic tech platforms. Inter provides the workhorse range, with Medium (500) for navigation and Semibold (600) for labels creating sufficient differentiation without additional weight imports. Body text maintains a comfortable 1.6 line height for extended reading, while display lines tighten to 1.1–1.2 to read as cohesive statements.

## Layout

The layout system favors generous breathing room and clear content bands. Sections stack vertically with substantial separation, typically 6rem between major content areas. Within sections, a centered content column constrains reading width while allowing full-bleed exceptions for photography and colored backgrounds.

Grid behavior follows a predictable pattern: hero sections use asymmetric two-column layouts with text left and imagery right, or centered single-column for maximum statement. Card grids employ consistent gaps of 2rem, with cards themselves receiving minimal rounding (0.25rem) that suggests digital precision without excessive softness. The themes showcase on the homepage demonstrates a horizontal overflow pattern—cards extend beyond the viewport edge, inviting scroll exploration.

Content alignment respects reading gravity: left-aligned text dominates, with centered alignment reserved for narrow containers and closing calls-to-action. The statistics section on the About page uses a four-column grid with equal distribution, each metric anchored by an icon above and a label below. Value statements on the About page employ a two-column card layout within a full-bleed blue section, maintaining internal padding that mirrors the global section spacing.

Responsive behavior should maintain these relationships: stack multi-column layouts at smaller viewports, preserve section spacing proportionally, and ensure serif headlines scale down without losing their characterful proportions. The horizontal card scroll on the homepage should become a vertical stack or maintain horizontal swipe on touch devices.

## Visual language

Photography treatment varies by context. Documentary photography—team gatherings, office environments—appears full-bleed with natural color, serving as authentic documentation of the platform's human scale. Interface screenshots and theme previews receive rounded corners and subtle separation, presented as objects to browse and select. Portrait photography in value cards receives a desaturated or monochrome treatment, creating consistency across diverse source material.

Iconography is strictly linear and monochrome, matching the weight of Inter at its medium weight. Icons appear in two contexts: as semantic markers above statistics (globe, people, image, comment symbols) and as decorative accents in value statements (building, sparkle). They never carry color independently, inheriting the text color of their container.

The overall impression is one of confident simplicity. There are no decorative textures, no gradient overlays, no drop shadows creating false depth. The design trusts in type scale, color contrast, and whitespace to create hierarchy. When blue appears, it commands attention; when ink dominates, it creates gravitas; when white space prevails, it invites exploration.

## Components

### Primary action button
- **Anatomy**: Text label centered within a filled rectangular container
- **Surface**: Solid action blue background (#3858e9) with white text
- **Typography**: Inter 1rem, weight 500, line height 1.4
- **Shape**: 0.25rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Appears inline following headlines or within content blocks
- **Variants**: On dark backgrounds, the same styling maintains; on blue sections, a secondary variant with transparent background and white border appears

### Secondary action button
- **Anatomy**: Text label within a bordered container
- **Surface**: Transparent background with 1px solid white border, white text
- **Typography**: Inter 1rem, weight 500
- **Shape**: 0.25rem border radius
- **Spacing**: Matches primary button padding
- **Composition**: Used in dark or blue sections where a filled button would compete with the background

### Statistic display
- **Anatomy**: Icon above, large numeral, descriptive label below
- **Surface**: Transparent on dark backgrounds
- **Typography**: Numerals use the serif at hero-display scale (4rem); labels use Inter at body size with muted color
- **Shape**: No container; elements stack vertically with 0.5rem gaps
- **Composition**: Four items distributed evenly in a row, separated by equal whitespace
- **States**: Static display only; no interaction

### Value card
- **Anatomy**: Optional photograph at top, heading, paragraph, and optional icon
- **Surface**: Transparent within blue section; photograph has 0.25rem radius
- **Typography**: Heading uses Inter at 1.5rem, weight 500; body uses Inter at 1rem
- **Shape**: Photographs receive subtle rounding; text containers are flush
- **Spacing**: 1.5rem between photograph and heading, 1rem between heading and body
- **Composition**: Two cards side by side within a full-bleed blue section, each occupying roughly half the content width with a 2rem gap

### Theme preview card
- **Anatomy**: Screenshot or artwork filling the card, with optional text overlay
- **Surface**: Image fills container; text overlays use white with subtle text-shadow or gradient scrim for legibility
- **Typography**: Overlay headings use Inter at 1.25rem, weight 500
- **Shape**: 0.25rem border radius
- **Composition**: Cards appear in horizontal scroll or grid, with 1rem gaps, extending partially off-screen to suggest more content

### Navigation
- **Anatomy**: Logo or wordmark left, link cluster right
- **Surface**: Transparent over light or dark backgrounds; no visible container
- **Typography**: Inter at navigation token size (0.875rem, weight 500)
- **Composition**: Horizontal list with 1.5rem gaps between items
- **Variants**: On dark backgrounds, links invert to white; no background change on scroll is visible in supplied images

## Responsive behavior

The supplied images show desktop layouts exclusively. Based on these compositions, implement the following adaptive patterns:

- **Headline scaling**: Serif hero-display should reduce to section-display size (2.5rem) on tablet, and to 1.75rem on mobile, maintaining the same weight and tight line height
- **Grid collapse**: Four-column statistic grids should become two-column on tablet and single-column stacked on mobile, with numerals remaining prominent
- **Card scroll**: Horizontal theme card scroll should either persist with snap points on touch devices or convert to a vertical stack with full-width cards
- **Section spacing**: Maintain 6rem section padding on desktop, reducing to 4rem on tablet and 3rem on mobile to preserve rhythm without excessive whitespace
- **Two-column layouts**: Asymmetric hero and value card layouts should stack to single column, with images preceding text in reading order

## Practical implementation guidance

### Preserve
- The serif/sans-serif pairing; this is the system's most distinctive quality
- High contrast between text and background; never place ink text on action blue
- Generous section spacing; cramped layouts will undermine the premium feel
- The single accent color discipline; resist adding secondary button colors
- Rounded corners at 0.25rem consistently; this small radius is a signature

### Avoid
- Additional weights of the serif; the design achieves hierarchy through size alone
- Gradient backgrounds or shadow effects; the system is flat by intention
- Centered body text beyond narrow containers; left alignment maintains reading comfort
- Decorative borders or separators beyond the subtle hairline; whitespace handles division
- Multiple button styles beyond primary filled and secondary outlined

### Recommended build order
1. Establish the type scale with both the Cisterna serif and Inter loaded, verifying metrics
2. Implement the color tokens with ink, canvas, and action as the core trio
3. Build the section spacing system with 6rem major and 2rem minor gaps
4. Create the primary and secondary button components
5. Implement the hero section with asymmetric layout
6. Build the statistic grid for social proof sections
7. Add the value card pattern for blue-background sections
8. Implement the theme preview card with horizontal scroll behavior

### Accessibility
- Ensure white text on action blue meets WCAG AA contrast (the combination should verify at 4.5:1 minimum)
- Provide visible focus states for all interactive elements; the current design's flatness requires clear focus rings
- Maintain semantic heading hierarchy despite the visual dominance of the serif; do not skip levels for styling
- Ensure statistic numerals are readable as text, not implemented as images
- Provide alternative text for all theme preview screenshots and documentary photographs

## Scope note

This guide covers the homepage and About page surfaces visible in the supplied images. Pricing page layouts, mobile breakpoints, navigation dropdown behavior, form interactions, and footer components are not represented. Motion, hover states, and loading patterns are not documented. The font files "By Jorge Cisterna-14066154350215534249" and "By Jorge Cisterna-18335614256516950002" both resolve to the same design attribution; production implementations should consolidate to a single Recoleta family reference. Measurements are practical adaptation targets.
