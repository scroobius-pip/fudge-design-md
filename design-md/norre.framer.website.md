# How norre.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/norre.framer.website-design)

Last updated: 2026-08-10

## Captured pages

[![Ember & Oak project card with craft beer photography, light background, and outlined pill button with arrow icon](https://pin.fontofweb.com/5584?format=jpg)](https://design.withfudge.com/share/pin-5584)

[Ember & Oak project card with craft beer photography, light background, and outlined pill button with arrow icon](https://design.withfudge.com/share/pin-5584)

[![Norré Studio hero with full-bleed portrait photography, bold white display typography, and dark navigation bar with contact pill button](https://pin.fontofweb.com/5583?format=jpg)](https://design.withfudge.com/share/pin-5583)

[Norré Studio hero with full-bleed portrait photography, bold white display typography, and dark navigation bar with contact pill button](https://design.withfudge.com/share/pin-5583)

## Overview

Norré Studio presents itself as a premium brand and digital design practice. The visual system relies on three core tensions: monumental photography against airy whitespace, delicate extralight display type against confident sans-serif body copy, and minimal UI chrome against immersive full-bleed imagery. The homepage alternates between a dark, cinematic hero treatment and a clean, gallery-like project presentation. Navigation remains understated throughout, allowing portfolio work to dominate the visual field. The overall impression is editorial and confident—suggesting a studio that trusts its craft to speak without decorative embellishment.

## Colors

The palette is intentionally narrow, built for maximum contrast and photographic flexibility.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, borders, navigation, and UI outlines on light surfaces |
| action | `#0000EE` | Standard link color; reserved for interactive text states |
| canvas | `#FFFEFA` | Page background, card surfaces, and light-theme project presentation areas |
| surface-inverse | `#000000` | Hero background, dark overlays, and inverse button borders |

The system operates in two modes. The **light mode**—seen in project cards and content sections—uses `canvas` as the dominant surface with `ink` for all text and structural lines. The **dark mode**—used in the hero—places white text directly over full-bleed photography, with `surface-inverse` providing the deep backing when imagery loads or fails. No mid-tone grays appear in the interface; the design commits fully to either pure light or pure dark contexts. The `action` blue appears only in default link styling, kept separate from the brand expression to avoid competing with photography.

## Typography

Five type families are present in the system: Switzer for display, Inter for interface and body, False-Normal for accent moments, and System-Sansserif for fallback legal or utility text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Switzer | 6rem | 300 | 1 | -0.02em | Hero headlines, maximum impact statements |
| section-display | Switzer | 3rem | 300 | 1.1 | -0.01em | Project titles, section headers |
| body | Inter | 1.125rem | 400 | 1.5 | 0em | Descriptions, supporting copy |
| label | Inter | 0.75rem | 400 | 1 | 0.05em | Buttons, tags, metadata |
| navigation | Inter | 0.75rem | 400 | 1 | 0.05em | Primary nav, header links |
| legal-copy | System-Sansserif | 0.75rem | 400 | 1.5 | 0em | Copyright, terms, utility text |

Switzer appears in Extralight weight for display use, giving headlines an airy, editorial quality that contrasts with the denser photography. Inter handles all functional text at Regular weight, maintaining clarity at small sizes. The label and navigation tokens share identical metrics but serve distinct semantic roles. False-Normal, designed by Deni Anggara and distributed by Indian Type Foundry, is available in the system but its specific application is not visible in the captured surfaces. System-Sansserif serves as the system fallback for small utility text where custom font loading is unnecessary. Verify licensing for these families before production use.

## Layout

The page structure follows a full-viewport hero followed by scrolling project modules. The hero occupies 100 viewport height with content positioned in the lower-left quadrant, leaving the upper portion open for the photographic subject. Navigation sits as a fixed or sticky header with items distributed horizontally: logo left, primary links center, contact action right.

Project cards use a single-column or limited-grid presentation with generous vertical breathing room. Each card contains a full-width photograph, a project title in section-display type, a brief description in body type, and a pill-shaped call-to-action. The photograph dominates the card, with text positioned below in a clean left-aligned stack. Padding within cards is restrained; the whitespace lives between elements rather than inside containers.

The spacing system builds from a 6px base unit (0.375rem at 16px root), producing a compact but usable scale. Section spacing at 6rem creates clear territorial boundaries between projects. Component internal spacing uses 1.5rem for comfortable text-to-element relationships. The 60px pill radius appears on all interactive buttons, creating a consistent soft geometry that contrasts with the rectangular photography.

## Visual language

Photography drives the emotional character of the site. The hero image is a tightly cropped, dramatically lit portrait with shallow depth of field—suggesting intimacy and craft. Project photography shifts to product and lifestyle contexts, maintaining high production value and warm, natural color palettes. Images receive no visible border radius treatment; they remain sharp-edged and photographic against the soft UI elements.

The arrow icon appears as a consistent interactive motif: a simple diagonal arrow in a circle, placed inside pill buttons. This element signals external links, project exploration, and contact initiation without requiring text expansion. The icon treatment is flat, monochrome, and scaled to match the label typography.

No decorative patterns, gradients, or illustrations appear. The visual interest comes entirely from typography scale contrast, photographic quality, and the interplay of dark and light sections. The system avoids shadows on cards or buttons, relying on spatial separation and border definition instead.

## Components

### Navigation bar

- **Anatomy**: Logo mark left, text links center, contact button right
- **Surface**: Transparent over hero; likely inverts to `canvas` with `ink` text on scroll
- **Typography**: `{typography.navigation}` for all links
- **Shape**: Full-width bar, no visible border or background in hero state
- **Spacing**: Horizontal padding consistent with page margins; vertical height determined by content plus comfortable touch targets

### Hero section

- **Anatomy**: Full-bleed background image, studio name in upper left, headline in lower left, supporting copy and CTA in lower right
- **Surface**: Photography fills viewport; text in white with no visible scrim or overlay
- **Typography**: `{typography.hero-display}` for headline; `{typography.body}` for description
- **Shape**: Rectangular, 100vh
- **Composition**: Asymmetric two-column layout in lower portion; headline spans wide, copy column narrower and right-aligned relative to headline
- **States**: The "Remix Template" badge appears as a floating pill in the lower right, suggesting a secondary persistent action

### Project card

- **Anatomy**: Full-width photograph, project title, description paragraph, pill button with arrow icon
- **Surface**: `{colors.canvas}` background; photograph sits directly on surface without frame
- **Typography**: `{typography.section-display}` for title; `{typography.body}` for description; `{typography.label}` for button
- **Shape**: Image is rectangular with `{rounded.image}`; button uses `{rounded.pill}`
- **Spacing**: Generous gap between image and text stack; comfortable padding within button
- **Variants**: Light variant shown; dark variant would invert to `{colors.surface-inverse}` background with `{colors.canvas}` text

### Pill button

- **Anatomy**: Text label with circular arrow icon, both horizontally centered within pill
- **Surface**: Transparent fill; 1px border in `{colors.ink}` or `{colors.canvas}` depending on context
- **Typography**: `{typography.label}` in uppercase
- **Shape**: `{rounded.pill}` (3.75rem)
- **Spacing**: 12px vertical padding, 18px horizontal padding
- **Composition**: Icon positioned to the right of text with small internal gap

## Responsive behavior

The hero's asymmetric lower layout should stack vertically on narrower viewports, with headline and description copy forming a single left-aligned column. The navigation center links may collapse into a menu trigger or hamburger icon when horizontal space becomes constrained, preserving the logo and contact button as persistent elements.

Project cards should maintain full-width imagery but may reduce title size from `{typography.section-display}` to a smaller scale on mobile to prevent excessive line breaks. The pill buttons require adequate touch targets; the existing 12px vertical and 18px horizontal padding meets minimum recommendations but should not be reduced further.

The two-tone section rhythm—dark hero, light project cards—creates natural visual rest points. On long scrolls, consider maintaining this alternation or introducing subtle background shifts to prevent monotony.

## Practical implementation guidance

### Preserve
- The extreme weight contrast between Switzer Extralight headlines and Inter Regular body copy
- Full-bleed, unbordered photography with no overlay treatments
- The strict black/white/off-white palette without intermediate grays
- 60px pill radius on all buttons for consistent soft geometry
- Uppercase label styling with wide tracking for all interactive elements

### Avoid
- Adding drop shadows to cards or buttons; the system relies on flat spatial separation
- Introducing additional accent colors that compete with photography
- Rounding image corners; keep photographs rectangular and sharp
- Using Switzer at heavier weights for display; the extralight weight is essential to the editorial character

### Recommended build order
1. Establish the 6px base unit and implement the color tokens
2. Load Switzer Extralight and Inter Regular with appropriate fallbacks
3. Build the hero section with full-viewport photography and asymmetric text placement
4. Implement the navigation with transparent-to-solid scroll behavior
5. Create the project card component with image, title, description, and pill button
6. Add the arrow icon system and verify alignment within pill buttons

### Accessibility
- Ensure white text over photography maintains 4.5:1 contrast; the dark hero images provide sufficient backing, but verify with actual image content
- The small label typography (0.75rem) should not be used for critical information without adequate weight or size alternatives
- Arrow-only buttons require aria-labels describing the destination
- Consider reduced-motion preferences for any scroll-triggered transitions

## Scope note

This guide covers the homepage hero and project card surfaces visible in the supplied images. Interior pages, mobile breakpoints, hover and focus states, form elements, and the full project detail template are not represented. The footer, additional navigation patterns, and any motion or loading treatments fall outside the current scope.
