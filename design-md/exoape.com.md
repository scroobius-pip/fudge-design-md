# How exoape.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/exoape.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero viewport with full-bleed twilight basilica photography, oversized white display typography, and minimal top navigation on a cinematic blue gradient.](https://pin.fontofweb.com/5739?format=jpg)](https://design.withfudge.com/share/pin-5739)

[Hero viewport with full-bleed twilight basilica photography, oversized white display typography, and minimal top navigation on a cinematic blue gradient.](https://design.withfudge.com/share/pin-5739)

[![Dark immersive section with large warm-tan display heading, orbital 3D render, and structured multi-column footer with address and social links.](https://pin.fontofweb.com/5740?format=jpg)](https://design.withfudge.com/share/pin-5740)

[Dark immersive section with large warm-tan display heading, orbital 3D render, and structured multi-column footer with address and social links.](https://design.withfudge.com/share/pin-5740)

[![Contact page with split white background, oversized multilingual display type, portrait photography, and underlined contact details with bullet markers.](https://pin.fontofweb.com/5742?format=jpg)](https://design.withfudge.com/share/pin-5742)

[Contact page with split white background, oversized multilingual display type, portrait photography, and underlined contact details with bullet markers.](https://design.withfudge.com/share/pin-5742)

[![Our Story section with black background, warm-tan hero typography, elliptical 3D render, and organized footer columns with navigation and social links.](https://pin.fontofweb.com/5741?format=jpg)](https://design.withfudge.com/share/pin-5741)

[Our Story section with black background, warm-tan hero typography, elliptical 3D render, and organized footer columns with navigation and social links.](https://design.withfudge.com/share/pin-5741)

## Overview

Exo Ape's design system is built around cinematic visual storytelling that alternates between immersive darkness and pristine light. The studio presents itself through full-bleed photography, atmospheric 3D renders, and typography that commands attention through scale rather than weight. The visual language speaks to a global digital practice—multilingual, boundary-crossing, and technologically sophisticated.

The system operates in two primary modes: a dark immersive mode where near-black backgrounds let warm-tan typography and luminous imagery become the focal point, and a light editorial mode where white canvases support bold black display type with documentary photography. This duality creates rhythm across the experience, with each mode serving different narrative purposes. The dark mode carries emotional weight and mystery; the light mode delivers clarity and direct communication.

Navigation remains deliberately minimal, appearing as understated text links or a simple menu trigger, never competing with the visual content. The overall impression is of a studio confident enough to let space, type, and image do the work without decorative embellishment.

## Colors

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text on light backgrounds, dark section backgrounds, footer surfaces |
| canvas | `#ffffff` | Light page backgrounds, contact page base, hero text on photographic scenes |
| warm-tan | `#dcc8b8` | Display headings on dark backgrounds, accent text in story sections, footer links |
| deep-space | `#0a0a0a` | Near-black section backgrounds for immersive content areas |
| muted-ink | `#1a1a1a` | Subtle dark variation for layered surfaces, footer columns |

The color system is intentionally restrained, functioning as a stage for photography and 3D imagery rather than competing with it. Black and white establish the foundational contrast, with warm-tan serving as the singular emotional accent that humanizes the otherwise stark palette. This tan appears exclusively on dark backgrounds, where its muted warmth creates an organic counterpoint to digital renders and architectural photography.

The dark mode dominates the experience, with sections plunging into deep-space and ink tones that allow luminous imagery—glowing orbital rings, lit screens, twilight skies—to become the true color events. The light mode appears strategically for contact and informational pages, where readability and openness take precedence. No gradients or shadows are employed as structural elements; all depth comes from photography and deliberate spatial composition.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Twk Lausanne-300 | 8rem | 300 | 0.9 | -0.03em | Homepage hero words, massive viewport-filling statements |
| section-display | Twk Lausanne-300 | 6rem | 300 | 0.95 | -0.02em | Section headings like "Our Story", multilingual contact headers |
| body-large | Twk Lausanne-300 | 1.25rem | 300 | 1.5 | 0 | Introductory paragraphs, descriptive copy |
| body | Twk Lausanne-300 | 1rem | 300 | 1.6 | 0 | Footer addresses, contact details, general content |
| label | Twk Lausanne-300 | 0.875rem | 300 | 1.4 | 0.01em | Small metadata, captions, secondary information |
| navigation | Twk Lausanne-300 | 0.875rem | 300 | 1 | 0 | Top navigation links, menu triggers |

The typographic system relies on a single family, Twk Lausanne-300, designed by Nizar Kazan and available through Typeweltkern. The 300 weight is used exclusively across all roles, creating consistency through weight rather than contrast. The design achieves hierarchy through dramatic scale differences rather than boldness, with display sizes reaching 8rem while body text remains light and airy.

Tight negative tracking on display sizes (-0.03em to -0.02em) gives large headings a refined, editorial density. Line heights are compressed for display use (0.9–0.95) to create solid typographic blocks that feel architectural and intentional. Body text receives more generous leading (1.5–1.6) for comfortable reading.

Verify licensing for Twk Lausanne-300 through Typeweltkern before production use.

## Layout

The layout system is built on expansive spatial generosity. Sections frequently occupy full viewport height or greater, with content positioned asymmetrically rather than centered. The grid is loose and editorial—elements align to invisible margins rather than rigid columns, creating a sense of curated placement.

Horizontal padding is substantial, approximately 4rem to 6rem from viewport edges, giving content room to breathe. Vertical rhythm is driven by section breaks of 6rem or more, with internal spacing between text blocks typically 2rem. The contact page demonstrates a split composition: oversized display type occupies the left portion while a portrait photograph anchors the right, with contact details floating in the lower left at comfortable remove from the heading.

The footer organizes into multiple columns—address, navigation links, social links—spaced evenly across the width with thin horizontal rules separating footer from content above. This multi-column structure repeats consistently across dark sections.

Navigation sits fixed or absolute at the top, with the logo mark on the left and text links or menu trigger on the right. On the homepage hero, navigation overlays the photographic content directly, relying on sufficient contrast for legibility.

## Visual language

The visual language merges documentary realism with speculative digital aesthetics. Photography tends toward architectural and environmental subjects—twilight cityscapes, interior workspaces, historic buildings—captured in natural or available light with muted, atmospheric color. These images fill viewports edge-to-edge, serving as both content and background.

3D renders introduce a contrasting synthetic element: orbital rings, planetary bodies, and abstract geometric forms rendered with physical accuracy but impossible scale. These elements glow with warm light against void-black backgrounds, creating moments of wonder that offset the grounded photography.

The logo mark—a stylized primate face in profile—appears small and discrete, rendered in white or black depending on background. It carries a subtle sparkle or star accent, suggesting exploration and discovery without literal space imagery.

Typography itself becomes a visual element at display sizes, with characters large enough to read as shapes rather than merely words. The multilingual contact header demonstrates this: Chinese characters and Latin letters share equal visual weight, both treated as graphic forms at massive scale.

## Components

### Hero Section

- **Anatomy**: Full-bleed background image or video, overlaid navigation bar, massive display typography positioned lower-left or center-left, optional scroll indicator
- **Surface**: Background image dominates; text in pure white (`{colors.canvas}`) with no backing surface
- **Typography**: `{typography.hero-display}` for primary statement words
- **Shape**: No border radius; edges are crisp and photographic
- **Spacing**: Generous internal padding, text positioned well above bottom edge with comfortable margin
- **Composition**: Asymmetric, with text block occupying roughly 40% of width and positioned to avoid conflicting with image focal points

### Story Section

- **Anatomy**: Dark background panel, large display heading left-aligned, 3D render or image right-aligned, descriptive paragraph below heading, horizontal rule, multi-column footer
- **Surface**: `{colors.ink}` or `{colors.deep-space}` background; heading in `{colors.warm-tan}`; body text in muted warm tone
- **Typography**: `{typography.section-display}` for heading, `{typography.body-large}` for description
- **Shape**: Sharp rectangular edges throughout
- **Spacing**: Heading sits high in section with substantial gap to description text; footer columns begin below horizontal rule with 4rem+ top padding
- **Composition**: Two-zone layout with text left and visual right; footer spans full width below

### Contact Section

- **Anatomy**: Light background, oversized multilingual heading, supporting paragraph, bullet-marked contact links with underlines, portrait photograph, address block, map link
- **Surface**: `{colors.canvas}` background; text in `{colors.ink}`; links underlined
- **Typography**: `{typography.section-display}` for heading, `{typography.body}` for details and links
- **Shape**: No border radius; photograph is rectangular with sharp edges
- **Spacing**: Heading positioned upper-left with generous margin; photograph floats right at partial width; contact details cluster lower-left with bullet markers
- **Composition**: Asymmetric two-column feel with text dominant left and image anchoring right

### Footer

- **Anatomy**: Multi-column grid containing address block, navigation links, social platform links, occasional additional link with bullet marker
- **Surface**: Inherits parent section background (typically `{colors.ink}`); text in `{colors.warm-tan}` or muted equivalent
- **Typography**: `{typography.body}` for all content; links appear as plain text without button styling
- **Shape**: No border radius; separated from content by thin horizontal rule
- **Spacing**: Columns evenly distributed with consistent internal line height; substantial top and bottom padding
- **Composition**: Three to four columns on desktop, address leftmost, navigation center, social rightmost

### Navigation Bar

- **Anatomy**: Logo mark left, text links or menu trigger right
- **Surface**: Transparent, adapting to underlying content
- **Typography**: `{typography.navigation}` for links
- **Shape**: No background shape or border
- **Spacing**: Full width with horizontal padding matching section gutters
- **Composition**: Flex row, space-between alignment

## Responsive behavior

The system is documented from desktop viewports. At narrower widths, the massive display typography should scale down proportionally, maintaining hierarchy while preserving readability. The hero display at 8rem may reduce to 4rem or 3rem on tablet, and to 2.5rem on mobile, always remaining a whole-number multiple of the 0.25rem base unit.

The asymmetric two-column layouts—story section with text left and render right, contact section with heading left and portrait right—should stack vertically on narrow viewports, with text preceding imagery. Footer columns should collapse to single-column stacked lists with increased vertical spacing between groups.

Navigation text links visible in the homepage hero should condense to a single "Menu" trigger or hamburger icon on smaller screens, preserving the minimal aesthetic while accommodating touch targets. The logo mark should remain consistently sized and positioned.

Full-bleed photography should maintain coverage without cropping critical subjects; consider `object-fit: cover` with focal-point awareness. The massive display type that overlays photography on the homepage may require text-shadow or subtle darkening gradient to maintain contrast if the underlying image shifts on resize.

## Practical implementation guidance

### Preserve
- The stark weight-300 consistency across all typographic roles; do not introduce bolder weights for hierarchy
- The generous spatial margins and asymmetric compositions; the design depends on breathing room
- The warm-tan accent exclusively for dark backgrounds; never use it on white
- The sharp, unrounded edges throughout; the system is deliberately rectilinear
- The multilingual capability of display type; test with CJK and extended Latin character sets

### Avoid
- Adding decorative borders, shadows, or background patterns that compete with photography
- Centering display headings; the asymmetric left alignment is integral to the character
- Using gradients as backgrounds or overlays; rely on photography and solid colors
- Introducing additional font weights or families; the single-weight discipline is essential
- Crowding the navigation with multiple elements; keep it minimal

### Recommended Build Order
1. Establish the typographic foundation with Twk Lausanne-300 at all defined sizes
2. Implement the dark/light section system with ink, deep-space, and canvas backgrounds
3. Build the hero section with full-bleed image and oversized display type
4. Create the story section with two-zone layout and footer pattern
5. Develop the contact section with asymmetric text-image composition
6. Add navigation with transparent overlay behavior
7. Refine responsive scaling for display typography and stacked layouts

### Accessibility
- Ensure text over photography meets contrast minimums; the homepage hero white text on twilight blue generally succeeds, but verify with actual image content
- Provide `aria-label` descriptions for the logo mark and menu trigger
- Maintain visible focus indicators for navigation links despite the minimal styling; consider underline or outline that respects the aesthetic
- The light weight of Twk Lausanne-300 at small sizes may challenge low-vision users; consider slightly increased size or tracking for critical small text
- Ensure interactive areas meet minimum 44×44dp touch targets when navigation condenses

## Scope note

This guide covers the homepage hero, story section, and contact page surfaces visible in the supplied images. Mobile breakpoints, animation behavior, hover states, form interactions, and additional interior pages are not represented. Measurements are practical adaptation targets derived from visual estimation against the 0.25rem base unit.
