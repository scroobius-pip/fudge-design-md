# How vedomosti.ru is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/vedomosti.ru-design)

Last updated: 2026-08-10

## Captured pages

[![Hero news card with presidential photograph, gradient overlay, and headline in white text over dark image, followed by Главное section with article list on warm off-white](https://pin.fontofweb.com/9137?format=jpg)](https://design.withfudge.com/share/pin-9137)

[Hero news card with presidential photograph, gradient overlay, and headline in white text over dark image, followed by Главное section with article list on warm off-white](https://design.withfudge.com/share/pin-9137)

[![Minimal editorial illustration with hand-drawn fish in top hats and mechanical elements, section header #Технологии in bold black sans-serif on warm off-white canvas](https://pin.fontofweb.com/9090?format=jpg)](https://design.withfudge.com/share/pin-9090)

[Minimal editorial illustration with hand-drawn fish in top hats and mechanical elements, section header #Технологии in bold black sans-serif on warm off-white canvas](https://design.withfudge.com/share/pin-9090)

## Overview

Vedomosti presents itself as Russia's leading business publication through a visual system that prioritizes editorial authority and readability over decorative flourish. The design rests on a stark contrast between immersive photographic storytelling and clean typographic lists. A warm off-white canvas provides the primary reading surface, while deep navy-tinged dark tones anchor hero imagery through gradient overlays. The type system relies entirely on Fira Sans in a single weight family, using size and weight contrast rather than multiple typefaces to establish hierarchy. This creates a disciplined, newspaper-like experience where content density and information clarity take precedence over visual experimentation. The overall impression is of institutional seriousness: the design does not compete with the news but frames it with quiet confidence.

## Colors

The palette is intentionally narrow, built around a warm paper-like canvas and near-black ink with a single deep accent for image treatments.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, headlines, body copy, links |
| ink-deep | `#28283C` | Gradient base for hero overlays, muted secondary text |
| canvas | `#FDF6F2` | Page background, article list surfaces, editorial illustration ground |
| surface | `#FFFFFF` | Card backgrounds, elevated content areas |
| text-primary | `#000000` | Default reading text |
| text-inverse | `#FFFFFF` | Text overlaid on photographs and dark gradients |
| text-muted | `#28283C` | Secondary headlines, captions, de-emphasized content |
| gradient-base | `#28283C` | Bottom-up gradient fade on hero imagery |

The warm canvas tone distinguishes Vedomosti from cooler neutral news sites, lending a subtle print-newspaper warmth to digital reading. The gradient from transparent to `rgb(40, 40, 60)` at 99.37% creates a controlled fade that preserves photograph visibility while guaranteeing text legibility in the lower third of hero cards. No accent colors appear in the interface itself; color interest arrives entirely through photography and editorial illustration. The near-absence of chromatic UI color reinforces the publication's sober business positioning.

## Typography

Vedomosti uses Fira Sans exclusively, designed by Carrois Corporate Edenspiekermann Ag and supplied by Carrois Corporate Gb R Edenspiekermann Ag. Verify licensing for this family before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Fira Sans | 1.75rem | 700 | 1.1 | normal | Main headline overlaid on hero photographs |
| section-display | Fira Sans | 1.25rem | 700 | 1.15 | normal | Section headers like "Главное" |
| body | Fira Sans | 1rem | 400 | 1.5 | normal | Article summaries, list items, general reading |
| body-tight | Fira Sans | 1rem | 400 | 1.1875 | normal | Compact text blocks, captions |
| label | Fira Sans | 1rem | 400 | 1.5 | normal | Category tags, metadata, "Фото." prefix |
| tag | Fira Sans | 1rem | 400 | 1.5 | normal | Hashtag prefixes, topic markers, inline taxonomy |

The type system achieves hierarchy through three mechanisms: weight contrast (400 versus 700), size steps at 16px, 20px, and 28px, and line-height variation. The 28px hero display at 700 weight with tight 1.1 line-height creates impactful headline presence against photographic backgrounds. The 20px section display establishes clear content boundaries. Body text at 16px with 1.5 line-height supports extended reading, while the alternative 1.1875 line-height variant serves denser information contexts. The tag role at 16px supports inline taxonomy markers such as the "#Технологии" section identifier. No italic or condensed styles appear in the visible system. Letter spacing remains normal throughout, preserving the neutral rationality of the sans-serif forms.

## Layout

The layout follows a single-column editorial flow with consistent horizontal padding and modular content blocks. The base spacing unit is 0.3125rem (5px), with primary gutters and section gaps at 1.25rem (20px). This creates a 4:1 ratio between major structural spacing and the base grid.

Content organizes into distinct horizontal bands: full-bleed hero imagery with overlaid text, followed by padded content sections on the warm canvas. The hero card occupies the full viewport width with internal padding of 1.25rem on the sides and top, placing headline text in the lower portion where the gradient overlay is densest. Below the hero, article lists receive 1.25rem horizontal padding and 1.25rem bottom margins between entries, creating rhythmic vertical spacing without explicit dividers.

Negative margins of -1.25rem appear on container elements, suggesting a breakout pattern where inner content aligns to a padded parent while background colors or borders extend to viewport edges. The overall density is moderate—neither the cramped urgency of a breaking-news ticker nor the spacious minimalism of a magazine site. Content blocks stack vertically with consistent 1.25rem gaps, maintaining predictable scanning patterns for readers moving through multiple headlines.

## Visual language

The visual character balances documentary photography with warm, humanizing surface treatments. Hero imagery receives full photographic treatment with a calculated gradient overlay that darkens toward the bottom, creating a natural reading surface for white text without requiring opaque text boxes that would fragment the image. This technique preserves photographic integrity while ensuring accessibility.

Illustrations appear in a hand-drawn, editorial cartoon style—loose ink lines on the same warm canvas, creating visual continuity with the rest of the page while offering tonal contrast to photographic content. The illustration style suggests institutional personality: serious subject matter rendered with approachable, slightly satirical draftsmanship.

No border radii appear in the visible system; all elements are rectilinear with 0rem radius, reinforcing the newspaper heritage. Shadows are absent. The overall flatness, combined with the warm paper tone, evokes print translation rather than native digital gloss. Iconography is minimal and functional where present.

## Components

### Hero card

- **Anatomy**: Full-width photograph with bottom-weighted gradient overlay, headline text positioned in lower third, no separate text container
- **Surface**: Photographic background with `linear-gradient(rgba(40, 40, 60, 0) 0%, rgb(40, 40, 60) 99.37%)` overlay
- **Typography**: `{typography.hero-display}` in `{colors.text-inverse}`
- **Shape**: 0rem border radius, full bleed to viewport edges
- **Spacing**: 1.25rem internal padding, text anchored to lower portion
- **Composition**: Single headline, no visible subhead or metadata overlay

### Article list

- **Anatomy**: Stacked vertical entries on warm canvas background, each with headline and optional summary
- **Surface**: `{colors.canvas}` background
- **Typography**: Headlines in `{typography.section-display}` or `{typography.body}` depending on hierarchy; body text in `{typography.body}`
- **Shape**: 0rem border radius
- **Spacing**: 1.25rem bottom margin between entries, 1.25rem horizontal padding
- **Composition**: Left-aligned text, no thumbnails visible in list context

### Section header

- **Anatomy**: Bold text label introducing content groupings
- **Surface**: Transparent over `{colors.canvas}`
- **Typography**: `{typography.section-display}` in `{colors.text-primary}`
- **Shape**: 0rem border radius
- **Spacing**: 1.25rem padding top, 1.25rem bottom margin to first list item
- **Composition**: Full-width, left-aligned, no decorative rules or icons

### Category label

- **Anatomy**: Inline prefix to article headlines, such as "Фото."
- **Surface**: Transparent
- **Typography**: `{typography.label}` in `{colors.text-muted}` or highlighted variant
- **Shape**: 0rem border radius
- **Spacing**: Inline with headline, standard word spacing
- **Composition**: Prefix position, separated by period and space

### Tag

- **Anatomy**: Inline hashtag marker identifying topic sections, such as "#Технологии"
- **Surface**: Transparent over `{colors.canvas}`
- **Typography**: `{typography.tag}` in `{colors.text-primary}`
- **Shape**: 0rem border radius
- **Spacing**: Inline with surrounding content, standard word spacing
- **Composition**: Prefix position with hash symbol, no background pill or border treatment

## Responsive behavior

The supplied images show a single viewport state. Based on the visible structure, the following responsive adaptations are recommended:

- Hero headline size should reduce on narrow viewports to maintain comfortable line lengths; consider 1.25rem minimum to preserve weight presence
- Article list padding should remain at 1.25rem on mobile to maintain touch targets and readability
- The gradient overlay may need steeper progression on shorter aspect ratios to maintain text contrast
- Single-column layout appears appropriate across breakpoints given the editorial list structure
- Touch targets for inline links should maintain minimum 44px height

## Practical implementation guidance

### Preserve
- The warm `#FDF6F2` canvas as the dominant background; this subtle warmth is distinctive against cooler competitors
- The exact gradient formula for hero overlays; the 99.37% stop position is specific and effective
- Fira Sans as the sole type family; multi-family stacks would dilute the institutional voice
- The 700-weight hero display with tight line-height; this creates necessary impact against photography
- Rectilinear, 0rem-radius surfaces throughout; rounded corners would contradict the print-newspaper heritage

### Avoid
- Adding accent colors to the UI palette; the system derives color interest from content, not chrome
- Opaque text boxes over hero images; the gradient overlay achieves legibility without visual fragmentation
- Multiple typefaces or weights beyond 400 and 700; the discipline of the current system is a strength
- Drop shadows or dimensional effects; flatness supports the serious editorial tone
- Generous whitespace between list items; the current 1.25rem spacing maintains content density appropriate to news

### Recommended build order
1. Establish the base canvas color and Fira Sans font loading
2. Implement the hero card with gradient overlay and responsive image handling
3. Build the article list component with consistent spacing and typography tokens
4. Add section headers, category labels, and tag components
5. Refine responsive behavior for hero text sizing and gradient progression

### Accessibility
- Ensure hero text maintains 4.5:1 contrast against the gradient-darkened portion of images; test with actual photographs rather than solid colors
- Provide `aria-label` or visually hidden text for the gradient overlay mechanism
- Maintain focus indicators on links despite the minimal visual differentiation of default link states
- Consider `prefers-reduced-motion` for any image loading or scroll-triggered effects

## Scope note

This guide covers the Vedomosti homepage hero and article list surfaces visible in the supplied images. Navigation, footer, article detail pages, search, subscription flows, and interactive elements are not represented. Motion, hover states, and additional breakpoints were not captured.
