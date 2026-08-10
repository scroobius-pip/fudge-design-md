# How wm.wts.edu is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wm.wts.edu-design)

Last updated: 2026-08-10

## Captured pages

[![Article hero with dark atmospheric painting, crimson navigation bar with white monospaced menu labels, and issue tag overlay](https://pin.fontofweb.com/5674?format=jpg)](https://design.withfudge.com/share/pin-5674)

[Article hero with dark atmospheric painting, crimson navigation bar with white monospaced menu labels, and issue tag overlay](https://design.withfudge.com/share/pin-5674)

[![Magazine index with crimson header, light gray content cards with serif article titles and monospaced metadata labels](https://pin.fontofweb.com/5673?format=jpg)](https://design.withfudge.com/share/pin-5673)

[Magazine index with crimson header, light gray content cards with serif article titles and monospaced metadata labels](https://design.withfudge.com/share/pin-5673)

## Overview

Westminster Media presents a scholarly editorial experience rooted in classical typography and restrained color. The system serves long-form theological and cultural content through a visual language that balances institutional authority with readable warmth. A deep crimson bar anchors every page, carrying navigation in a compressed monospaced voice that feels technical and precise. Below this header, the content unfolds on warm gray surfaces where a light-display serif commands attention for article titles and a regular-weight serif handles body text. The overall impression is of a printed journal translated to screen: generous whitespace, deliberate hierarchy, and no decorative excess. Photography and illustration appear in muted, atmospheric treatments that sit behind or alongside text rather than competing with it. The design prioritizes reading endurance over spectacle, making it appropriate for essays, magazine issues, and archival content that demands sustained attention.

## Colors

The palette is intentionally narrow, drawing its character from a single strong accent against neutral grounds.

| token | value | use |
|---|---|---|
| crimson | `#9B2335` | Primary navigation background, active states, brand accent |
| ink | `#1A1A1A` | Primary text, article headings, body copy |
| muted-ink | `#555555` | Secondary text, author names, descriptions, metadata |
| canvas | `#F5F5F0` | Content card backgrounds, page fill between sections |
| surface | `#FFFFFF` | Pure white for text on dark grounds, occasional contrast panels |
| border | `#D4D4D4` | Hairline dividers between article cards, subtle separation |
| action | `#9B2335` | Links, buttons, and interactive emphasis inherited from crimson |

The crimson navigation bar creates immediate visual identity and frames every page with institutional presence. Against this saturated ground, white monospaced navigation text maintains crisp legibility through generous letter spacing. The warm gray canvas serves as the primary content ground, softer than pure white and more forgiving for long reading sessions. Ink and muted-ink provide a two-tier text hierarchy without introducing additional hues. Border appears as a practical structural element, separating stacked article cards with minimal visual weight. The system does not employ gradients, shadows, or additional accent colors; all emphasis derives from scale, weight, and the single crimson voice.

## Typography

Four font sources support two distinct typographic voices: a classical serif family for editorial content and a technical monospaced family for interface labels and navigation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kepler Std Light Disp | 3rem | 300 | 1.1 | -0.01em | Article titles, feature headings |
| section-display | Kepler Std | 1.5rem | 400 | 1.2 | 0 | Card titles, section headings |
| body | Kepler Std | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions |
| label | Input Mono | 0.75rem | 500 | 1.4 | 0.08em | Issue tags, metadata, captions |
| navigation | Input Mono Compressed | 0.75rem | 500 | 1 | 0.12em | Primary menu, category labels |

Kepler Std Light Disp provides the display weight for hero headings, its light stroke offering elegance without fragility. Kepler Std Regular handles all body and subhead text with reliable readability. Input Mono Medium serves labels and metadata with open apertures and clear distinction at small sizes. Input Mono Compressed Medium squeezes navigation items into the crimson bar while maintaining legibility through expanded tracking. The compressed variant's narrower proportions allow more menu items to coexist without crowding.

The type scale builds from a 4px relative unit. Display sizes at 48px and 24px establish clear hierarchy. Body at 16px provides comfortable reading. Labels and navigation at 12px function as metadata voice, deliberately subordinate. Line heights stay tight for display (1.1) and navigation (1), then open to 1.6 for body text to accommodate the serif's ascenders and descenders.

Input Mono and Input Mono Compressed are designed by David Jonathan Ross, available from David Jonathan Ross and The Font Bureau. Kepler Std and Kepler Std Light Disp carry no attributed designer or vendor in the supplied materials. Verify licensing for these families before production use.

## Layout

The page structure follows a straightforward editorial pattern: fixed header, full-bleed hero, and stacked content regions.

The site header occupies the full viewport width at a height of 56px (3.5rem), with navigation centered horizontally. Menu items distribute with even spacing, not crowding the edges. A search icon sits at the far right, aligned with the menu baseline. The header remains fixed or appears at every scroll position, maintaining orientation.

Below the header, article pages present a full-bleed hero image that extends edge to edge. The image receives a dark treatment, either through photography selection or an overlay, allowing white text to sit directly on the visual. Issue tags and article titles position in the lower-left quadrant of this hero, respecting the image's focal area while remaining clearly readable.

Index and listing pages transition to the canvas background, presenting article cards in a vertical stack. Each card spans the full content width with internal padding of 24px (1.5rem). A hairline border separates cards. The layout does not appear to use a sidebar; navigation and content share a single centered column or modest-width container.

Content width appears constrained for readability, likely between 640px and 800px for article text, though cards and headers may extend wider. The system avoids complex grids in favor of clear vertical flow.

## Visual language

Photography and illustration receive restrained treatment. The hero image in the article view shows a dark, atmospheric painting with muted earth tones—browns, grays, and subdued highlights. This sits behind white text without a visible scrim or gradient overlay, suggesting either careful image selection or a subtle darkening treatment. The effect is museum-like: the image serves as context and mood, not as vibrant content competing with text.

On index pages, imagery appears absent or minimized. Cards rely on typography alone, with the serif title and monospaced metadata creating visual interest through contrast of voice rather than through thumbnails. This editorial restraint keeps the focus on writing and institutional voice.

The crimson header provides the only saturated color moment. Everywhere else, the palette retreats to warm neutrals. This discipline means that when crimson does appear—for a link, an active state, or the persistent navigation—it carries full attentional weight.

There are no rounded corners in the interface. Cards, buttons, and containers use sharp corners, reinforcing the printed-journal aesthetic. Shadows are absent; depth derives from color contrast and spacing alone.

## Components

### Site header

- **Anatomy**: Full-width bar containing centered navigation menu and right-aligned search icon.
- **Surface**: Solid crimson background (`{colors.crimson}`).
- **Typography**: Navigation token (`{typography.navigation}`), white text (`{colors.surface}`), all uppercase.
- **Shape**: No border radius; sharp rectangle.
- **Spacing**: Height 3.5rem; menu items spaced evenly with generous horizontal gaps.
- **Composition**: Horizontal flex layout, items centered, search icon at trailing edge with underline decoration.
- **Variants**: No visible variant states in supplied images.

### Article hero

- **Anatomy**: Full-bleed image container with overlaid text block containing issue tag and article title.
- **Surface**: Image fills container; text sits directly on image.
- **Typography**: Issue tag uses label token (`{typography.label}`) in white with pipe separator; title uses hero-display token (`{typography.hero-display}`) in white.
- **Shape**: No radius; flush to viewport edges.
- **Spacing**: Text positioned in lower-left with comfortable margin from edges.
- **Composition**: Image as background, text layered above, no visible overlay box or scrim.

### Article card

- **Anatomy**: Container with title, description, and author metadata.
- **Surface**: Canvas background (`{colors.canvas}`), separated by border (`{colors.border}`).
- **Typography**: Title uses section-display (`{typography.section-display}`) in ink; description uses body (`{typography.body}`) in muted-ink; author uses label (`{typography.label}`) in muted-ink.
- **Shape**: No radius; rectangular.
- **Spacing**: Padding 1.5rem all sides; vertical stack with 0.5rem to 1rem between elements.
- **Composition**: Full-width within content column, stacked vertically.
- **Variants**: No visible hover or active states.

### Issue tag

- **Anatomy**: Inline label with bracketed issue number and title fragment.
- **Typography**: Label token (`{typography.label}`), uppercase, expanded tracking.
- **Surface**: Transparent over image; white text.
- **Composition**: Prefixed with pipe character, issue number in brackets, em dash or colon before title.

## Responsive behavior

The supplied images show desktop-width layouts. No mobile or tablet views are available for direct interpretation. Based on the visible structure, the following responsive guidance applies:

The navigation bar should collapse to a hamburger menu or condensed list on narrow viewports, preserving the crimson identity while preventing horizontal overflow. The compressed monospaced font helps here, but five menu items plus search will not fit comfortably below approximately 640px width.

Hero images should maintain aspect ratio rather than fixed height, allowing the image to crop vertically on narrow screens. Text overlay should reposition to maintain margin from edges, potentially increasing padding to 1rem or more on mobile.

Article cards should remain full-width within the content column at all breakpoints, as the single-column layout already adapts naturally. Font sizes may reduce slightly: hero-display to 2rem, section-display to 1.25rem on the smallest screens.

The content column should maintain comfortable reading width, not stretching beyond 80 characters of body text. On very wide viewports, consider capping content width and centering, rather than allowing text to span the full screen.

## Practical implementation guidance

### Preserve
- The stark contrast between crimson navigation and warm gray content grounds; this two-mode system (saturated header, muted body) is central to the identity.
- The typographic pairing of classical serif for editorial voice and monospaced for technical/structural voice; do not substitute a sans-serif for either role.
- The expanded letter spacing in navigation and labels; this mechanical spacing is essential to the institutional tone.
- Full-bleed hero images with direct text overlay, trusting image selection over gradient overlays.
- Sharp corners throughout; rounded containers would contradict the printed-journal aesthetic.

### Avoid
- Adding accent colors beyond crimson; the palette's restraint is intentional and effective.
- Using drop shadows for elevation; rely on color and spacing instead.
- Thumbnail images in article cards; the typographic cards are a deliberate editorial choice.
- Tight line height for body text; the serif needs 1.6 to breathe.
- Generic sans-serif fallbacks for navigation; the compressed monospaced character is distinctive.

### Recommended build order
1. Establish the 4px relative unit and type scale.
2. Implement the crimson site header with centered navigation and search icon.
3. Set up the two background modes: crimson for header, canvas for content.
4. Implement hero-display and section-display with Kepler Std families.
5. Build article card component with border separation and metadata label.
6. Add article hero with full-bleed image and overlaid text.
7. Fine-tune spacing and responsive behavior.

### Accessibility
- Ensure white text on crimson navigation meets WCAG AA contrast; the dark crimson against white should pass for large text and likely for small text at this saturation.
- Hero text over images requires sufficient contrast; if image content varies, consider a subtle dark overlay or text-shadow to guarantee readability.
- The monospaced label text at 12px should not go smaller; already near the practical limit for body-level legibility.
- Maintain focus indicators for keyboard navigation; the crimson background can support a white or light outline.
- Respect reduced-motion preferences for any scroll or transition effects.

## Scope note

This guide covers the article page and magazine index surfaces visible in the supplied images. Mobile breakpoints, hover states, form interactions, audio or video players, and search functionality are not represented. Footer content, pagination, and subscription flows fall outside the current scope. Measurements are practical adaptation targets derived from visible proportions.
