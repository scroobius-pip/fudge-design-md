# How quantumbody.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/quantumbody.io-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with email signup form, key links navigation, and abstract black ring logo on warm beige background](https://pin.fontofweb.com/1626?format=jpg)](https://design.withfudge.com/share/pin-1626)

[Footer section with email signup form, key links navigation, and abstract black ring logo on warm beige background](https://design.withfudge.com/share/pin-1626)

[![Contact page with large display heading, stacked form fields, dark submit button, and rounded landscape photograph](https://pin.fontofweb.com/1625?format=jpg)](https://design.withfudge.com/share/pin-1625)

[Contact page with large display heading, stacked form fields, dark submit button, and rounded landscape photograph](https://design.withfudge.com/share/pin-1625)

[![Dark hero section with split headline framing an orange abstract fluid image, plus Instagram gallery strip](https://pin.fontofweb.com/1624?format=jpg)](https://design.withfudge.com/share/pin-1624)

[Dark hero section with split headline framing an orange abstract fluid image, plus Instagram gallery strip](https://design.withfudge.com/share/pin-1624)

[![Instagram social proof strip with handle label and horizontal row of rounded square thumbnail images on dark background](https://pin.fontofweb.com/1623?format=jpg)](https://design.withfudge.com/share/pin-1623)

[Instagram social proof strip with handle label and horizontal row of rounded square thumbnail images on dark background](https://design.withfudge.com/share/pin-1623)

## Overview

Quantum Body presents a wellness brand identity built on the tension between organic fluidity and systematic restraint. The design language moves between two distinct modes: expansive dark surfaces that let photography and warm accent tones breathe, and light, airy layouts that prioritize readability and calm. The overall impression is meditative and contemporary—spacious without feeling empty, warm without becoming rustic. Typography plays a foundational role: a single grotesk family carries all communication, from monumental display headings to small functional labels, creating cohesion across dramatically different scales and contexts. The system relies on generous rounding of image containers, consistent vertical rhythm, and a disciplined two-tone palette that shifts between deep espresso darks and warm parchment lights. Photography is treated as a primary design element, often breaking the grid with rounded corners that soften the technical precision of the underlying layout.

## Colors

The color system operates in two primary modes: a light mode built on warm neutrals for functional and informational surfaces, and a dark mode that creates immersive, contemplative spaces for hero content and photography.

| token | value | use |
|---|---|---|
| canvas | #D4CFC4 | Primary footer and secondary page backgrounds; warm stone beige |
| canvas-warm | #F5F0E8 | Light page backgrounds, form surfaces, and text on dark |
| ink | #1A1714 | Primary dark backgrounds, primary button fills, body text on light |
| ink-muted | #6B6560 | Secondary text, placeholders, footer metadata |
| surface | #2C2824 | Elevated dark cards, hover states, thumbnail overlays |
| surface-warm | #3D3832 | Instagram gallery counter badge, subtle dark accents |
| action | #1A1714 | Primary button and interactive element backgrounds |
| action-text | #F5F0E8 | Text on primary buttons and dark interactive surfaces |
| accent-warm | #E8A838 | Warm photographic accent, decorative highlights in imagery |
| border-subtle | #C4BFB4 | Dividers, input underlines, footer separators |

The dark mode dominates the upper portions of the experience, using ink as a near-black canvas that makes warm photography and cream typography luminous. The light mode inverts this relationship, using canvas and canvas-warm as breathable fields where ink text maintains strong contrast. The accent-warm appears primarily through photography—golden hour light, amber fluids, warm skin tones—rather than as applied UI color, keeping the interface restrained while allowing imagery to supply emotional temperature.

## Typography

The typographic system is built entirely on Neue Haas Grotesk Pro-55 Roman, a revival of the classic Swiss grotesk by Christian Schwartz after Max Miedinger, available from Commercial Type. The family is used at a single weight (Roman/400) across all roles, with scale and spacing creating hierarchy rather than weight variation. This creates a distinctive quiet authority—headings feel declarative without shouting, and small text feels considered rather than neglected.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Neue Haas Grotesk Pro-55 Roman | 4rem | 400 | 1 | -0.02em | Page titles, major section headings |
| section-display | Neue Haas Grotesk Pro-55 Roman | 3rem | 400 | 1.05 | -0.01em | Subsection headings, contact page title |
| body | Neue Haas Grotesk Pro-55 Roman | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, form labels |
| body-small | Neue Haas Grotesk Pro-55 Roman | 0.875rem | 400 | 1.5 | 0 | Footer text, secondary descriptions |
| label | Neue Haas Grotesk Pro-55 Roman | 0.75rem | 400 | 1.3 | 0.05em | Buttons, tags, uppercase functional text |
| navigation | Neue Haas Grotesk Pro-55 Roman | 0.875rem | 400 | 1.2 | 0.02em | Menu items, links, email addresses |

Display sizes use tight negative tracking to create dense, impactful lines that feel contemporary and confident. The label style is set in uppercase with positive tracking, creating a clear functional voice for buttons and calls-to-action. The single-weight approach means hierarchy depends entirely on size and spacing decisions—there is no bold for emphasis, only the contrast between large display and small functional sizes.

Verify licensing for these families before production use.

## Layout

The layout system favors asymmetry and generous whitespace over rigid grids. Content areas are defined by relationship rather than equal division—headings may occupy the left third while supporting content fills the right two-thirds, or a form may sit beside a photograph with no attempt at equal width.

The base spacing unit is 0.25rem, with section-level padding at 6rem creating substantial vertical breathing room between content zones. Content gaps of 1.5rem maintain related elements as visual groups without crowding. The page structure flows from immersive dark hero sections through lighter informational zones, concluding with functional footer surfaces.

Image containers break from rectangular severity through consistent rounding at 1.5rem, creating soft portals that contrast with the technical precision of the typography. Thumbnails use a tighter 0.75rem radius, maintaining the rounded language at smaller scales. The Instagram gallery strip demonstrates a horizontal overflow pattern: rounded square thumbnails in a continuous row, with a counter badge indicating additional content.

Forms use a stacked vertical arrangement with consistent 0.5rem gaps between fields, each input filling the available width of its container. The contact page shows a two-column composition at desktop scale: form left, photograph right, with the image extending to the rounded container edge.

## Visual language

The visual language balances organic and systematic qualities. Photography is warm, human, and often abstract—fluid macro shots, golden-hour landscapes, intimate portraits—while the interface remains coolly geometric. This tension is the brand's signature: the body as both measurable system and mysterious organism.

Imagery receives prominent treatment through large-scale display, rounded corners, and placement that breaks conventional grid alignment. The abstract fluid photograph on the dark background becomes a luminous focal point, framed by split headline text that wraps around it. This creates a cinematic, editorial quality more common to print than web.

The logo appears as a minimal black ring—an abstract, almost calligraphic circle that suggests both quantum orbit and human form. It is used small and quietly, never competing with content.

Color temperature shifts dramatically between modes. Dark surfaces feel contemplative and infinite; light surfaces feel clinical and actionable. The warm beige of the footer and form backgrounds prevents either mode from feeling cold, maintaining human warmth even in functional zones.

## Components

### Primary Button

- **Anatomy**: Text label centered within a solid rectangular container
- **Surface**: backgroundColor `{colors.action}`, color `{colors.action-text}`
- **Typography**: `{typography.label}` in uppercase with positive tracking
- **Shape**: borderRadius `{rounded.button}`, full-width in form contexts
- **Spacing**: padding 1rem vertical, 2rem horizontal
- **Composition**: Appears below stacked form fields, spanning container width

### Text Input

- **Anatomy**: Single-line field with placeholder text, no visible border in resting state
- **Surface**: backgroundColor `#E8E4DC` (slightly darker than canvas-warm for distinction)
- **Typography**: `{typography.body-small}` for placeholder and value text
- **Shape**: borderRadius `{rounded.input}`, subtle rounded corners
- **Spacing**: padding 1rem internal, stacked with 0.5rem gap between fields
- **Composition**: Full-width within form container, sequential vertical stack

### Footer Surface

- **Anatomy**: Full-width section with email signup, navigation links, contact info, and logo
- **Surface**: backgroundColor `{colors.canvas}`, color `{colors.ink}`
- **Typography**: `{typography.body-small}` for descriptive text, `{typography.navigation}` for links
- **Shape**: No rounding on outer container; logo as free-floating organic form
- **Spacing**: Generous internal padding, multi-column layout with left-aligned content blocks
- **Composition**: Three-zone horizontal arrangement—signup left, links center, attribution right; logo positioned low left as signature element

### Instagram Gallery Strip

- **Anatomy**: Label with handle, horizontal row of rounded square thumbnails, overflow indicator
- **Surface**: backgroundColor `{colors.ink}`, thumbnails with varied photographic content
- **Typography**: `{typography.body-small}` for "Follow us on instagram", `{typography.section-display}` for handle
- **Shape**: Thumbnail borderRadius `{rounded.thumbnail}`, counter badge with `{colors.surface-warm}` background
- **Spacing**: Thumbnails in continuous horizontal sequence with minimal gap
- **Composition**: Left-aligned label, right-aligned scrolling thumbnail row; counter badge as first item indicating additional content

### Dark Hero Section

- **Anatomy**: Full-width dark surface with split headline text and central image
- **Surface**: backgroundColor `{colors.ink}`, text in `{colors.canvas-warm}`
- **Typography**: `{typography.hero-display}` for headline, split across left and right of image
- **Shape**: Central image with borderRadius `{rounded.image}`, creating rounded portal effect
- **Spacing**: Substantial vertical padding, image centered with text flanking
- **Composition**: Asymmetric text placement—"Life Is a Journey of" left, "Interconnectedness" right, with image bridging the gap

## Responsive behavior

The two-column contact layout should stack vertically on narrower viewports, with the photograph moving above or below the form depending on content priority. The split headline in the dark hero section may need to stack or reduce in size to maintain readability; consider moving to a single centered headline with image below when horizontal space is constrained.

The Instagram gallery strip maintains horizontal scroll behavior across all sizes, with thumbnail dimensions scaling down proportionally. The footer multi-column layout should collapse to a single vertical stack on mobile, preserving content order: signup, links, contact, attribution, logo.

Form inputs should remain full-width within their container at all sizes, with touch targets maintaining minimum 44px height. The primary button in form contexts should remain full-width on mobile for easy thumb reach.

## Practical implementation guidance

### Preserve
- The single-weight typographic system—resist adding bold weights that break the quiet authority of the Roman
- Generous rounding on image containers (1.5rem) as a signature brand element
- The warm-cool tension between dark immersive sections and light functional surfaces
- Asymmetric compositions that let content breathe rather than forcing equal columns
- The abstract ring logo used small and quietly, never as a dominant graphic

### Avoid
- Adding weight variations to Neue Haas Grotesk that don't exist in the loaded Roman cut
- Sharp corners on primary imagery—the rounding is integral to the brand softness
- Pure white backgrounds; the warm parchment tones are essential to the palette
- Crowding the Instagram strip with additional UI chrome or borders around thumbnails
- Centering body text; the system favors left alignment for all text blocks

### Recommended Build Order
1. Establish the two-mode color system with CSS custom properties for light/dark context switching
2. Implement the typography scale with the single Roman weight at all sizes
3. Build the rounded image container as a reusable component with consistent 1.5rem radius
4. Create the dark hero section with split headline and central image placement
5. Develop the stacked form pattern with full-width inputs and primary button
6. Assemble the footer with multi-column responsive behavior
7. Add the horizontal Instagram gallery strip with overflow scrolling

### Accessibility
- Ensure the dark hero section maintains minimum 4.5:1 contrast between canvas-warm text and ink background
- Provide visible focus indicators on the rounded button and input components
- Add aria-labels to the Instagram gallery strip describing the horizontal scroll region
- Consider reduced-motion preferences for any scroll-linked or parallax imagery effects
- Verify that placeholder text in form inputs meets contrast requirements or use persistent labels

## Scope note

This guide covers the landing page and contact page surfaces visible in the supplied imagery, including footer, form, hero, and social gallery components. Interior pages, mobile navigation patterns, loading states, and motion behavior are not represented. Measurements are practical adaptation targets derived from visual inspection of the interface.
