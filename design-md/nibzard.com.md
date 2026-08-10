# How nibzard.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nibzard.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with four-column link grid, AI summary request prompt, and social platform icons in monochrome](https://pin.fontofweb.com/5950?format=jpg)](https://design.withfudge.com/share/pin-5950)

[Footer section with four-column link grid, AI summary request prompt, and social platform icons in monochrome](https://design.withfudge.com/share/pin-5950)

[![Homepage header with Nikola Balic wordmark, navigation, and multi-column article grid with colored left borders and category tags](https://pin.fontofweb.com/5949?format=jpg)](https://design.withfudge.com/share/pin-5949)

[Homepage header with Nikola Balic wordmark, navigation, and multi-column article grid with colored left borders and category tags](https://design.withfudge.com/share/pin-5949)

## Overview

Nibzard presents a restrained, engineering-minded personal site built around monospace typography and systematic spacing. The visual system prioritizes readability and information density over decoration, using a near-white canvas with dark charcoal text and selective warm accents. Three related monospace families from the Monaspace collection create typographic hierarchy through style rather than weight alone: Argon for neutral body text, Krypton for structural labels and navigation, and Radon for expressive, script-like emphasis. Content cards in the main grid are distinguished by thin colored vertical borders rather than shadows or background shifts, giving the layout a clean, editorial rhythm. The overall impression is of a developer's notebook made public—precise, uncluttered, and intentionally technical in its aesthetic choices.

## Colors

The palette is extremely limited, relying on tonal contrast and a single warm accent against an almost-white ground.

| token | value | use |
|---|---|---|
| ink | `#2D3032` | Primary text, headings, navigation links, strong emphasis |
| muted-ink | `#5A646F` | Secondary text, footer links, dates, category tags in inactive states |
| accent-coral | `#E45B5F` | Wordmark highlight, decorative borders on select cards, visual anchors |
| surface-warm | `#FAFAFA` | Subtle background variation for interactive or elevated surfaces |
| canvas | `#FFFFFF` | Page background, card backgrounds, primary surface |

The site operates in a single light mode. Dark text on white dominates, with muted-ink serving as the only intermediate tone. The coral accent appears sparingly—most notably in the wordmark and as vertical card borders—preventing it from overwhelming the restrained palette. Image content, such as the squirrel illustration, introduces its own grayscale values that sit naturally within the monochrome system. No dark mode, gradient, or shadow system is visible in the current interface.

## Typography

Three Monaspace variable families by Riley Cran and The Lettermatic Team power the entire typographic system. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Monaspace Krypton | 1.5rem | 900 | 1.5 | -0.01em | Wordmark, brand mark |
| section-display | Monaspace Argon | 1.6rem | 500 | 1.3 | -0.01em | Article titles, major headings |
| body | Monaspace Argon | 1.125rem | 400 | 1.5 | normal | Primary body text, descriptions |
| body-small | Monaspace Argon | 1rem | 400 | 1.5 | normal | Compact body, card excerpts |
| label | Monaspace Krypton | 0.75rem | 400 | 1.5 | normal | Category tags, metadata, dates |
| label-medium | Monaspace Krypton | 0.85rem | 400 | 1.5 | normal | Footer column headers, small labels |
| navigation | Monaspace Krypton | 1rem | 500 | 1.5 | 0.02em | Header navigation links |
| script-body | Monaspace Radon | 1rem | 400 | 1.6 | normal | Italic-style emphasis, quoted passages |
| script-emphasis | Monaspace Radon | 1rem | 700 | 1.6 | normal | Bold emphasis within script contexts |
| legal | Monaspace Argon | 0.875rem | 400 | 1.4 | normal | Copyright, fine print |

The type scale is built on a 4px relative unit. Monaspace Argon handles the majority of reading text with its clean, neutral forms. Monaspace Krypton's narrower, more geometric character provides structural hierarchy for labels, navigation, and the wordmark. Monaspace Radon, with its handwritten quality, appears for expressive emphasis and block quotations, creating deliberate contrast against the mechanical regularity of the other two families. Letter spacing remains tight to normal throughout; the wordmark and section headings use slight negative tracking for optical density.

## Layout

The page employs a centered, max-width container with generous horizontal padding. The header spans full width with internal alignment constraints. The main content area uses a multi-column grid for article cards, with consistent gutter spacing between items.

The article grid appears to use a three-column layout on desktop, with cards arranged in rows of equal height. Each card maintains internal vertical rhythm: date and optional tag at top, title below, description or excerpt following, and category tags at the bottom. Cards are separated by standard gutters without visible dividers—the colored left border on each card provides the primary spatial definition.

The footer expands to a four-column link grid with uniform column widths. Column headers use uppercase treatment with label-medium styling. Link lists stack vertically with comfortable but compact spacing. A centered section above the link grid contains a prompt line and row of platform icons, creating a visual pause before the structured footer content.

Vertical spacing between major sections follows a generous section token, while internal card padding uses moderate values that keep content breathable without excessive whitespace. The overall density is medium-high—appropriate for a content-heavy personal site where scanning and discovery matter.

## Visual language

The site's character emerges from the tension between mechanical precision and selective warmth. Monospace letterforms throughout create a terminal-like, code-adjacent atmosphere. The three-family Monaspace system allows this single genre to serve multiple communicative roles without introducing sans-serif or serif contrasts.

Colored vertical borders—appearing in coral, blue, yellow, and other hues—provide the primary decorative system. These 4px left borders transform otherwise identical white cards into distinguishable content types or series markers. The effect is reminiscent of syntax highlighting or diff markers, reinforcing the engineering aesthetic.

Imagery appears rarely and is treated neutrally when present. The squirrel illustration in one card uses grayscale, avoiding color competition with the border system. Platform icons in the footer are rendered in simple monochrome outlines, maintaining the restrained palette.

The wordmark "Nikola Balic" uses a distinctive treatment: the first portion in coral accent weight, the remainder in standard ink weight, creating a signature-like identifier without a separate logo mark.

## Components

### Article card

- **Anatomy**: Vertical stack containing optional date, optional status tag, title, optional description or excerpt, optional image, and bottom category tags. A colored left border runs the full card height.
- **Surface and text color**: White background (`canvas`), ink text for titles, muted-ink for descriptions and tags.
- **Typography**: Title uses section-display; body text uses body or body-small; category tags use label; dates use label-medium.
- **Shape and border**: No border-radius; flat rectangular form with 4px left border in varying colors (coral, blue, yellow, or others).
- **Spacing**: Internal padding of 1.5rem; comfortable vertical rhythm between elements.
- **Composition**: Full-width within grid cell; height varies with content; image when present sits between text blocks.
- **Variants**: Cards with script-body text for emphasis passages; cards with "THOUGHT" or "NOW" status tags in filled pill shapes; cards with or without images.

### Category tag

- **Anatomy**: Small inline label, sometimes with filled background.
- **Surface and text color**: Two variants visible—filled ink background with white text for prominent tags like "THOUGHT" and "NOW"; or text-only muted-ink for standard category listings.
- **Typography**: label token, uppercase treatment.
- **Shape and border**: Small border-radius (0.25rem) for filled variants; text-only variants have no radius.
- **Spacing**: Compact internal padding for filled variants; inline flow for text-only.
- **Composition**: Appears as single items or horizontal groups at card bottoms; status tags position at top-right of card.

### Site header

- **Anatomy**: Wordmark left, navigation center-right, search icon far right.
- **Surface and text color**: Transparent or white background; ink text throughout.
- **Typography**: Wordmark uses hero-display; navigation links use navigation token.
- **Shape and border**: Full-width bar with subtle bottom border or shadow; no visible border-radius.
- **Spacing**: Moderate horizontal padding; navigation items spaced with comfortable gaps.
- **Composition**: Flex row with space-between alignment; navigation cluster grouped with consistent spacing.

### Site footer

- **Anatomy**: Centered prompt section with platform icons above; four-column link grid below; copyright line at bottom.
- **Surface and text color**: White background; muted-ink for links and prompt text; ink for column headers.
- **Typography**: Prompt text uses body; column headers use label-medium with uppercase treatment; links use body; copyright uses legal.
- **Shape and border**: No visible borders except optional top separator; flat rectangular regions.
- **Spacing**: Generous vertical padding in prompt section; compact but readable spacing in link grid.
- **Composition**: Centered single-column prompt area transitions to full-width four-column grid; copyright left-aligned at bottom.

### Platform icon row

- **Anatomy**: Horizontal row of simple monochrome icons representing AI platforms.
- **Surface and text color**: Ink or near-ink monochrome; no color variation between icons.
- **Shape and border**: Small consistent size, approximately 24px; simple line or filled geometric forms.
- **Spacing**: Even horizontal distribution with comfortable gaps.
- **Composition**: Centered below prompt text; visually balanced as a unit.

## Responsive behavior

The multi-column article grid should collapse to fewer columns on narrower viewports, likely transitioning from three to two to one column as available width decreases. Card internal padding and typography should remain consistent across breakpoints to preserve readability.

Navigation in the header should convert to a compact menu or hamburger pattern on small screens, given the number of items visible. The four-column footer grid should stack to two columns then single column on narrow viewports, maintaining logical grouping of links.

The centered content container should maintain horizontal padding at all sizes, preventing text from touching viewport edges. Image-containing cards should allow images to scale proportionally or stack above text rather than compressing horizontally.

## Practical implementation guidance

### Preserve
- The three-family monospace hierarchy—Argon for body, Krypton for structure, Radon for emphasis
- Colored left borders as the primary card differentiation system
- Extremely limited palette with coral as the sole warm accent
- Generous whitespace in section transitions combined with medium-high content density
- Flat, shadowless card surfaces with no border-radius

### Avoid
- Introducing sans-serif or serif families that would break the terminal aesthetic
- Adding shadows, gradients, or background tints behind cards
- Expanding the accent palette beyond the single coral value
- Rounding card corners or adding visible borders beyond the left accent
- Using Radon for extended reading text—reserve for short emphasis passages

### Recommended build order
1. Establish the 4px relative unit and base typography with Monaspace Argon
2. Implement the header with wordmark color split and navigation
3. Build the article card component with configurable left-border color
4. Create the three-column grid layout with consistent gutters
5. Add category tag variants (filled status, text-only)
6. Implement the footer with prompt section and four-column link grid
7. Integrate Monaspace Krypton for labels and navigation, Radon for emphasis

### Accessibility
- Ensure colored left borders are not the sole indicator of content type; supplement with visible text labels
- Maintain sufficient contrast between muted-ink text and white backgrounds for all readable text
- Provide focus indicators for navigation links and footer links that are visible against the white ground
- Consider `prefers-reduced-motion` for any future interactive enhancements
- Use semantic heading hierarchy within cards despite the visual uniformity of monospace styling

## Scope note

This guide covers the homepage and footer surfaces visible in the supplied images. Interior article pages, mobile-specific layouts, hover and focus states, dark mode, and any animation or interaction patterns are not represented. The spacing and radius scales are derived from visible proportions against the 4px relative unit; exact measurements should be verified during implementation.
