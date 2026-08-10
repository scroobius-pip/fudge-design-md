# How generalbread.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/generalbread.co-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with Renaissance-style bread imagery, dark header button with gradient, and light body background](https://pin.fontofweb.com/8328?format=jpg)](https://design.withfudge.com/share/pin-8328)

[Hero section with Renaissance-style bread imagery, dark header button with gradient, and light body background](https://design.withfudge.com/share/pin-8328)

[![Hero section showing centered white display typography over blue sky with cloud texture and outstretched hands holding bread](https://pin.fontofweb.com/8327?format=jpg)](https://design.withfudge.com/share/pin-8327)

[Hero section showing centered white display typography over blue sky with cloud texture and outstretched hands holding bread](https://design.withfudge.com/share/pin-8327)

## Overview

General Bread presents itself as a single-purpose landing page for a Bitcoin application. The design strategy is deliberately minimal: a light, almost blank canvas surrounds one dominant hero image that carries the entire visual narrative. The interface recedes, letting the classical art reference—a Renaissance-style scene of hands exchanging bread against a vivid blue sky—do the communicative work. This creates a distinctive tension between old and new, tangible and digital, that defines the brand personality without requiring extensive UI chrome.

The page structure is straightforward: a sparse header with logo and single call-to-action, followed by the immersive hero section. There are no navigation menus, no feature grids, no footer blocks visible in the supplied material. The design relies on confidence through restraint, using generous whitespace, a limited palette, and precise typography to frame the central image. The overall impression is editorial and gallery-like, as if the page were a museum placard for the artwork itself, with the app offering merely implied.

## Colors

The color system is extremely disciplined, built from a near-monochrome base with one atmospheric accent drawn from the hero imagery.

| token | value | use |
|---|---|---|
| canvas | `#FCFCFC` | Page background, the dominant surface |
| ink | `#1A1A1A` | Primary text, button gradients, header elements |
| muted-ink | `#4A4A4A` | Gradient endpoint for depth on buttons |
| surface | `#000000` | Deepest shadow layers, header button backgrounds |
| action | `#1A1A1A` | Primary button fill, interactive emphasis |
| action-text | `#FFFFFF` | Text on dark buttons and surfaces |
| accent-sky | `#8ECFE2` | Atmospheric reference from hero sky, available for subtle highlights |
| border-subtle | `#AAAAAA` | Inset hairlines on buttons |

The light mode is absolute: `#FCFCFC` canvas with `#1A1A1A` text provides high contrast without the harshness of pure black on white. The hero image introduces warm flesh tones, golden bread crust, and that distinctive cerulean sky, but these remain photographic rather than interface colors. The dark UI elements—header button, hero CTA—use a gradient from `#1A1A1A` to `#4A4A4A` that adds dimensional depth without introducing new hues. Shadows are restrained, using `rgba(0, 0, 0, 0.1)` for ambient elevation and an inset `#AAAAAA` hairline for button definition.

## Typography

The type system is built entirely on the Applesystem family, using weight and size to establish hierarchy rather than multiple typefaces. The design favors tight leading and negative tracking at display sizes for a contemporary, compact feel.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Applesystem | 4rem | 700 | 1.05 | -0.02em | Main headline, centered over hero image |
| section-display | Applesystem | 3rem | 700 | 1.1 | -0.01em | Secondary headlines, section titles |
| body | Applesystem | 1rem | 400 | 1.5 | normal | Default reading text |
| body-small | Applesystem | 0.875rem | 400 | 1.5 | normal | Supporting text, captions |
| button-primary | Applesystem | 0.9375rem | 500 | 1 | normal | Primary CTA buttons |
| button-small | Applesystem | 0.875rem | 500 | 1 | normal | Compact buttons, header actions |
| label | Applesystem | 0.75rem | 500 | 1.25 | 0.02em | Tags, metadata, fine print |
| navigation | Applesystem | 1rem | 400 | 1.5 | normal | Header links, nav items |

The hero display is the system's most distinctive voice: large, bold, tightly tracked, and rendered in white against the photographic sky. This inversion—light text on image rather than dark text on canvas—creates the page's primary focal moment. Body text maintains comfortable readability with standard weight and generous leading. Button typography is slightly smaller than body, medium weight, with line-height equal to font-size for vertical centering in pill-shaped containers. The label and navigation roles extend the system for completeness, though the visible page uses only a subset in practice.

Verify licensing for these families before production use.

## Layout

The page uses a centered, contained layout with dramatic vertical spacing to isolate the hero experience.

The header occupies the full viewport width with internal padding, floating the logo at the left edge and a single action button at the right. This creates a clean horizontal tension without visible borders or background separation—the header is transparent, letting the canvas color show through.

The hero section receives substantial top padding (`164px`, or `10.25rem`), pushing the content well below the header to create breathing room. The hero image itself spans nearly the full viewport width with rounded corners (`1.5rem`), inset from the edges by consistent margins. Content within the hero is centered both horizontally and vertically, with the headline stacked above the CTA button.

There is no visible grid system, sidebar, or multi-column arrangement. The layout is fundamentally one-dimensional: header, then hero, with the hero image functioning as a full-bleed atmospheric container for centered text. This vertical stacking with generous whitespace between elements reinforces the gallery-like, single-focus presentation.

## Visual language

The visual language derives its power from juxtaposition. The UI is ruthlessly contemporary—system fonts, subtle shadows, rounded rectangles—while the imagery references classical religious painting. This anachronism is intentional: the cracked paint texture, the outstretched hands, the loaf of bread replacing expected iconography all create memorable visual metaphor.

The hero image dominates the viewport, framed by rounded corners that soften its historical reference with modern interface conventions. The sky's gradient from deeper blue at top to lighter cerulean below provides natural contrast for the white headline, while cloud formations add texture without competing for attention.

UI elements are reduced to essentials. The header button and hero CTA share the same visual treatment: dark gradient fill, white text, rounded corners, subtle shadow. This repetition creates system coherence across the sparse interface. There are no icons visible beyond the logo mark, no decorative elements, no secondary navigation. The design trusts the image to carry emotional weight and the typography to deliver the message with precision.

The overall mood is contemplative rather than urgent, despite the financial-technology subject matter. The classical reference slows the viewer down, inviting interpretation rather than immediate conversion.

## Components

### Header

- **Anatomy**: Logo mark at left, single text button at right, no navigation links or menu
- **Surface**: Transparent background, canvas color shows through
- **Typography**: Button uses `{typography.button-small}`
- **Shape**: No visible border or shadow on the header container itself
- **Spacing**: Internal padding consistent with page margins, elements pushed to extremes
- **Composition**: Flex row with justify-between, items vertically centered

### Primary button

- **Anatomy**: Text label centered within rounded rectangle
- **Surface**: `linear-gradient(rgb(26, 26, 26), rgb(74, 74, 74))` from `{colors.ink}` to `{colors.muted-ink}`
- **Typography**: `{typography.button-primary}` or `{typography.button-small}`, `{colors.action-text}`
- **Shape**: `{rounded.button}` (`0.75rem`) corner radius
- **Border**: Inset `1px` `{colors.border-subtle}` hairline
- **Shadow**: `rgba(0, 0, 0, 0.1) 0px 0px 24px 0px` for ambient elevation
- **Spacing**: `{spacing.button-pad-y}` (`0.75rem`) vertical, `{spacing.button-pad-x}` (`1.5rem`) horizontal; compact variant uses `{spacing.button-pad-y-small}` and `{spacing.button-pad-x-small}`
- **Variants**: Two sizes visible—larger in hero, smaller in header—with identical surface treatment

### Hero section

- **Anatomy**: Full-width rounded image container with centered text overlay
- **Surface**: Photographic image fills container; text rendered directly over image
- **Typography**: `{typography.hero-display}` in white, centered
- **Shape**: `{rounded.panel}` (`1.5rem`) corners on image container
- **Spacing**: `{spacing.section-hero-top}` (`10.25rem`) padding above, generous internal vertical centering
- **Composition**: Headline stacked above CTA button, both centered; button uses same dark treatment as header button for system coherence

### Logo mark

- **Anatomy**: Simple geometric icon, black filled square with internal white cutout resembling bread slice or wallet shape
- **Surface**: Solid `{colors.ink}` fill
- **Size**: Compact, approximately header height proportion
- **Placement**: Absolute left edge of header, vertically centered

## Responsive behavior

The design's simplicity suggests straightforward responsive adaptation. The hero image should maintain aspect ratio while scaling to viewport width, with corner radius preserved. Headline size should reduce on narrower viewports to prevent overflow; the tight tracking and bold weight will remain legible at smaller sizes but may require size reduction to `2.5rem` or `3rem` on mobile.

The header's extreme left-right button placement should collapse to a more compact arrangement on small screens, potentially stacking or reducing to icon-only if space constrains the text label. The generous top padding on the hero section should compress proportionally, perhaps to `6rem` or `8rem`, to maintain visual balance without pushing content below the fold.

The single-column structure requires no reflow logic—content remains centered throughout. Touch targets for buttons should maintain minimum `44px` height regardless of viewport size.

## Practical implementation guidance

### Preserve
- The stark contrast between minimal UI and maximal imagery
- White text directly over photographic content in the hero
- The gradient button treatment as the sole interactive signature
- Generous, almost excessive whitespace above the hero section
- Rounded corners on the hero image container as a modern framing device
- Single-font system using weight and tracking for hierarchy

### Avoid
- Adding navigation menus, feature lists, or footer content that would dilute the single-focus presentation
- Pure black (`#000000`) for text or backgrounds where the softer `#1A1A1A` is specified
- Additional accent colors that compete with the sky blue of the hero image
- Hard-edged rectangles where rounded corners establish the visual rhythm
- Multiple button styles—maintain the one gradient treatment throughout

### Recommended build order
1. Establish the canvas color and Applesystem font stack
2. Build the header with transparent background and extreme edge alignment
3. Implement the gradient button component with both size variants
4. Place the hero image with rounded container and centered text overlay
5. Tune the `164px` top padding to establish correct vertical rhythm
6. Verify headline legibility across viewport widths, adjusting size as needed

### Accessibility
- Ensure the white hero headline maintains `4.5:1` contrast against the sky image; the deeper blue upper regions provide better contrast than the lighter cloud areas—consider a subtle text shadow or scrim if the image varies
- The dark gradient buttons provide excellent contrast with white text
- The header button on transparent background should remain visible if the page ever scrolls over non-canvas content
- Provide descriptive alt text for the hero image, which carries significant narrative content

## Scope note

This guide covers the single landing page visible in the supplied material: a sparse header and immersive hero section. No additional pages, navigation states, form interactions, mobile layouts, motion design, or footer content are represented. The measurements reflect exact values from the interface where available.
