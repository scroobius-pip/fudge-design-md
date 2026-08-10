# How ottografie.nl is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ottografie.nl-design)

Last updated: 2026-08-10

## Captured pages

[![Editorial page with large serif title, scattered fashion portraits, and floating category pill on warm off-white canvas](https://pin.fontofweb.com/366?format=jpg)](https://design.withfudge.com/share/pin-366)

[Editorial page with large serif title, scattered fashion portraits, and floating category pill on warm off-white canvas](https://design.withfudge.com/share/pin-366)

[![Campaigns page with oversized serif wordmark, four fashion images in loose collage, and dark rounded category selector](https://pin.fontofweb.com/365?format=jpg)](https://design.withfudge.com/share/pin-365)

[Campaigns page with oversized serif wordmark, four fashion images in loose collage, and dark rounded category selector](https://design.withfudge.com/share/pin-365)

[![Beauty section close-up with dramatic serif display type, parenthetical index number, and high-contrast beauty photography](https://pin.fontofweb.com/364?format=jpg)](https://design.withfudge.com/share/pin-364)

[Beauty section close-up with dramatic serif display type, parenthetical index number, and high-contrast beauty photography](https://design.withfudge.com/share/pin-364)

[![Home page hero with bio line, multi-image Beauty section layout, and sculptural black-and-white portrait on pale ground](https://pin.fontofweb.com/363?format=jpg)](https://design.withfudge.com/share/pin-363)

[Home page hero with bio line, multi-image Beauty section layout, and sculptural black-and-white portrait on pale ground](https://design.withfudge.com/share/pin-363)

## Overview

This design system describes the portfolio website of Otto van den Toorn, a beauty and fashion photographer based in the Netherlands. The visual language is deliberately restrained: a warm off-white canvas serves as the stage for large-format editorial photography, while typography operates at monumental scale to create section landmarks. The interface avoids conventional grids in favor of scattered, asymmetric image placements that overlap with type, producing a magazine-like spatial rhythm. Navigation and category labels are reduced to small, precise mono elements that recede behind the photographic content. The overall impression is of a curated exhibition space where images float freely and typography acts as architectural structure rather than mere labeling.

## Colors

The palette is extremely limited, derived from the interface and image surfaces visible across the portfolio. Four semantic tokens capture every UI color role.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, display type, bio line, and index numerals |
| canvas | `#f5f0eb` | Page background and negative space surrounding imagery |
| surface | `#1a1a1a` | Category pill backgrounds, dark UI chrome, and deep shadows |
| muted | `#8c8279` | Secondary text, inactive states, and subtle borders |

The canvas color is a warm, slightly pink-tinged off-white that appears consistently behind all imagery and type. It prevents the clinical coldness of pure white and harmonizes with skin tones in the photography. Ink is used at full strength for all display typography and body text, with no gray intermediates for primary reading. Surface appears only in the floating category pills and similar compact UI elements, providing a near-black contrast against the light ground. Muted serves for any secondary information that must recede, such as captions or metadata. No accent colors are present in the interface; color energy comes entirely from the photographs themselves. The system operates in a single light mode with no dark variant visible.

## Typography

The typographic system relies on a single family, Suisse Intl Mono, used across all roles with dramatic size contrast between display and functional text. Swiss Typefaces designed and distributes this family. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Suisse Intl Mono | 8rem | 400 | 0.9 | -0.03em | Section wordmarks such as "Beauty" and "Campaigns" |
| section-display | Suisse Intl Mono | 6rem | 400 | 0.95 | -0.02em | Secondary headings and medium-impact titles |
| body | Suisse Intl Mono | 1rem | 400 | 1.5 | 0em | Bio line, descriptions, and running text |
| label | Suisse Intl Mono | 0.875rem | 400 | 1.2 | 0.02em | Category pill text and compact labels |
| navigation | Suisse Intl Mono | 0.75rem | 400 | 1 | 0.05em | Small caps, metadata, and index numbers |

Display type is set at enormous scale, with hero-display reaching 8rem to create section identifiers that dominate the viewport horizontally. The mono structure of Suisse Intl Mono gives these large forms a technical, measured quality that contrasts with the organic photography. Letterspacing is tightened aggressively on display sizes to prevent the monospace rhythm from feeling too open. Body text remains at a comfortable 1rem with neutral tracking, while navigation and label sizes use slight positive tracking for legibility at small scale. Index numbers such as "(09)" appear to use a lighter weight or italic style within the same family, positioned as superscript or raised baseline annotations beside the main wordmark. No bold weights are employed in the visible interface; hierarchy is achieved through size and position alone.

## Layout

The layout abandons conventional container grids in favor of an editorial collage approach. The viewport is treated as a large canvas where images and type occupy absolute or loosely positioned coordinates.

The page structure begins with a centered bio line near the top, set in small uppercase mono text. Below this, the main content area opens into a generous field of canvas color. Section wordmarks such as "Beauty" or "Campaigns" are positioned centrally or slightly offset, scaled to extend well beyond comfortable reading width, creating a graphic layer that images can overlap or slide behind.

Images are scattered asymmetrically around these wordmarks. A typical composition places one large portrait image to the left of center, another to the right edge, and smaller detail shots at the lower left and lower right corners. Images do not align to a shared grid; their edges fall at seemingly arbitrary positions, producing a sense of curated randomness. Negative space between images is substantial, often exceeding 4rem, allowing each photograph to breathe independently.

The floating category pill anchors near the bottom center of the viewport, overlaying both imagery and canvas. It remains fixed or sticky during scroll, providing persistent navigation without competing visually with the content. Z-index layering places display typography behind some images and in front of others, creating depth through overlap rather than shadow.

Section transitions appear to replace the wordmark and reposition images while maintaining the same spatial logic. The overall density is low: a typical viewport contains four to six images and one dominant text element, with the majority of space left as warm negative ground.

## Visual language

The visual language merges high-fashion editorial aesthetics with Swiss typographic discipline. Photography is the undisputed protagonist, presented in varied aspect ratios without uniform framing. Some images are tight portraits, others show full figures, and detail crops focus on makeup or accessories. Black-and-white photography appears alongside color work, with the monochrome images often receiving placement at the right edge where their high contrast against the canvas creates visual anchors.

The scattered collage technique evokes physical mood boards or printed lookbooks. Images appear to have no border radius, maintaining sharp rectangular edges that emphasize their photographic nature. The warm canvas color unifies disparate image color temperatures, preventing the layout from feeling like a disconnected gallery.

Typography functions as graphic infrastructure. The oversized section titles are not merely labels but compositional elements that images interact with. A portrait may overlap the descender of a "y" or tuck beneath the crossbar of a "t", creating deliberate tension between text and image. Parenthetical index numbers add a cataloguing system reference, suggesting the portfolio is part of a larger archive.

Motion and interaction, while not visible in still images, would logically extend this spatial approach: images might drift to new positions on scroll, and wordmarks could scale or shift to announce section changes. The category pill implies a dropdown or filter mechanism for navigating between portfolio categories.

## Components

### Category pill

A compact, dark rounded button that provides persistent category navigation.

- **Anatomy**: Horizontal pill containing a small circular thumbnail, category name in label typography, and a chevron indicator.
- **Surface and text color**: Surface background with white text.
- **Typography**: `{typography.label}`, uppercase or title case.
- **Shape**: Full pill with `{rounded.pill}` radius.
- **Spacing**: Internal padding of approximately 0.75rem vertical and 1.5rem horizontal.
- **Composition**: Centered horizontally near the viewport bottom, floating above content with adequate margin to avoid image overlap.
- **Variants**: Active state shows the current category; inactive states would show other available categories in a dropdown.

### Bio line

The photographer's introduction, positioned at the top of the home view.

- **Anatomy**: Single line of centered text, sometimes with an arrow or link indicator.
- **Surface and text color**: Transparent background with ink text.
- **Typography**: `{typography.body}`, uppercase, with increased letterspacing.
- **Composition**: Centered horizontally, positioned in the upper portion of the viewport with generous top margin.

### Image tile

The fundamental content unit, representing individual portfolio photographs.

- **Anatomy**: Rectangular image without visible frame or border.
- **Surface**: No background color; image fills the tile entirely.
- **Shape**: Sharp corners, no radius.
- **Spacing**: External margins vary by position in the collage; no consistent gutter system.
- **Composition**: Positioned absolutely or with offset margins within the section canvas. Aspect ratios vary by source photograph.
- **Variants**: Some tiles appear partially cropped by the viewport edge; others float fully visible in the center ground.

### Section wordmark

The dominant typographic element identifying each portfolio category.

- **Anatomy**: Single word or short phrase, occasionally accompanied by a parenthetical index number.
- **Surface and text color**: Transparent background with ink text.
- **Typography**: `{typography.hero-display}` or `{typography.section-display}`.
- **Composition**: Centered or slightly offset horizontally, positioned in the middle vertical band where images can overlap it from above and below.
- **Variants**: Index numbers appear smaller and lighter, positioned at the upper right of the wordmark baseline.

## Responsive behavior

The collage layout presents clear challenges at narrower viewports. Images that scatter comfortably across a wide canvas will require repositioning to maintain visual hierarchy without excessive overlap. The hero-display size of 8rem will need reduction, likely to the section-display scale of 6rem or below, to prevent horizontal overflow and preserve the wordmark's graphic presence.

The category pill should remain accessible at the bottom of the viewport but may need to expand to a full-width bar on small screens to accommodate touch targets. Image tiles should stack or reduce to a single column, maintaining their aspect ratios while allowing vertical scrolling to replace the spatial exploration of the desktop layout.

The bio line can remain centered but should wrap naturally if the viewport becomes very narrow. No mobile-specific navigation patterns are visible in the supplied material; a minimal approach would preserve the pill as the primary navigation mechanism across all sizes.

## Practical implementation guidance

### Preserve
- The warm off-white canvas as the dominant background; do not shift to pure white or cool gray.
- The extreme scale contrast between display type and functional text; this is the system's primary hierarchy mechanism.
- The scattered, non-grid image placement; alignment to a strict grid would destroy the editorial character.
- Sharp rectangular image edges without border radius on photography tiles.
- The single type family across all roles; introducing a secondary display face would fracture the mono discipline.

### Avoid
- Adding borders, shadows, or frames around image tiles; the images must float freely.
- Centering all images symmetrically; the asymmetry is intentional and content-specific.
- Using bold weights for emphasis; the system relies on size and position, not weight variation.
- Introducing accent colors in the UI; let photography provide all chromatic energy.
- Fixed aspect ratios for image containers; the source photographs dictate their own proportions.

### Recommended build order
1. Establish the canvas background color and base typography scale with Suisse Intl Mono.
2. Implement the bio line as a simple centered text block to confirm vertical rhythm.
3. Build the section wordmark component at hero-display scale with proper negative tracking.
4. Create the image tile component with object-fit cover and no border radius.
5. Compose the first section layout manually, positioning four to six images around the wordmark.
6. Add the floating category pill with its dark surface and rounded form.
7. Refine z-index layering so images and type overlap convincingly.
8. Adapt spacing and type scale for narrower viewports.

### Accessibility
- The large display type provides strong visual hierarchy but should still use semantic heading levels for screen reader navigation.
- Image tiles require descriptive alt text conveying the photographic content, not merely "portfolio image."
- The category pill needs clear focus indicators and keyboard operability if it expands to a dropdown.
- Color contrast between ink and canvas exceeds WCAG requirements, but any muted text should be verified against the warm background.
- Motion effects, if implemented for the scattered collage, should respect prefers-reduced-motion and provide static alternatives.

## Scope note

This guide covers the home page and category section surfaces visible in the supplied images. The Editorial, Campaigns, and Beauty sections share a common layout language that has been documented. Individual project pages, contact forms, about pages, and mobile-specific adaptations are not represented in the available material. Measurements are practical adaptation targets derived from visual inspection. Verify licensing for Suisse Intl Mono through Swiss Typefaces before production use.
