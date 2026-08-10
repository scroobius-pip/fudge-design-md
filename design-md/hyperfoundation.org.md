# How hyperfoundation.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hyperfoundation.org-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with dark green gradient background, large serif headline, and mint accent logo mark](https://pin.fontofweb.com/3491?format=jpg)](https://design.withfudge.com/share/pin-3491)

[Hero section with dark green gradient background, large serif headline, and mint accent logo mark](https://design.withfudge.com/share/pin-3491)

[![Full hero viewport with centered headline, body text, and two pill buttons on deep green backdrop](https://pin.fontofweb.com/3489?format=jpg)](https://design.withfudge.com/share/pin-3489)

[Full hero viewport with centered headline, body text, and two pill buttons on deep green backdrop](https://design.withfudge.com/share/pin-3489)

[![Footer area with large Hyperliquid wordmark in mixed roman and italic serif on pale mint background](https://pin.fontofweb.com/3488?format=jpg)](https://design.withfudge.com/share/pin-3488)

[Footer area with large Hyperliquid wordmark in mixed roman and italic serif on pale mint background](https://design.withfudge.com/share/pin-3488)

[![Close-up of Hyperliquid wordmark showing serif and italic type contrast with dark green logomark](https://pin.fontofweb.com/3487?format=jpg)](https://design.withfudge.com/share/pin-3487)

[Close-up of Hyperliquid wordmark showing serif and italic type contrast with dark green logomark](https://design.withfudge.com/share/pin-3487)

## Overview

The Hyper Foundation design system presents a sophisticated, dark-mode-first brand identity for a blockchain infrastructure platform. The visual language balances technical credibility with approachable elegance through a restrained palette of deep forest greens and luminous mint accents. The system relies on strong typographic contrast: a refined, light-weight serif display face commands attention in headlines and wordmarks, while a neutral sans-serif family handles all functional and body text with clarity.

The overall impression is immersive and premium. Large-scale photography and gradient backgrounds create depth, while the disciplined use of two type families and a tight color palette keeps the experience cohesive. The design favors generous whitespace in lighter sections and dense, atmospheric color in darker ones. Every interactive element uses fully rounded pill shapes, reinforcing a soft, contemporary feel against the sharp precision of the underlying technology brand.

## Colors

The color system operates in two modes: a deep, atmospheric dark mode that serves as the primary brand expression, and a pale mint light mode used for select sections and contrast moments. The dark canvas is not pure black but a very deep green-black that allows the mint accent to glow with organic warmth.

| token | value | use |
|---|---|---|
| `canvas-deep` | `#051814` | Primary page background, hero sections, footer |
| `canvas-mint` | `#DDFBF4` | Alternate section background, wordmark backdrop |
| `accent-mint` | `#8CF5D2` | Primary buttons, logo mark, interactive highlights |
| `ink-primary` | `#FFFFFF` | Headlines and primary text on dark backgrounds |
| `ink-inverse` | `#051814` | Text on mint surfaces, button labels on accent |
| `ink-muted` | `#A0B5AD` | Secondary body text, footer links, captions |
| `surface-elevated` | `#0A2E24` | Slightly lifted dark panels, subtle depth layers |

The dark canvas dominates the experience, with the mint accent functioning as the single vibrant call-to-action color. The pale mint background appears in transitional sections, creating breathing room and allowing the dark green wordmark to read with authority. No additional accent colors compete for attention; the system achieves hierarchy through scale, weight, and the strategic placement of luminous mint against absorbing dark green.

## Typography

Two font families define the typographic system: Teodor, a light-weight serif with elegant proportions, and Inter, a highly legible neo-grotesque sans-serif. Teodor carries all display and brand expression, while Inter handles every functional text need from navigation to body copy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Teodor | 4.5rem | 300 | 1.05 | -0.01em | Hero headlines, major statements |
| `section-display` | Teodor | 3rem | 300 | 1.1 | -0.01em | Section titles, large wordmarks |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions |
| `body-small` | Inter | 0.875rem | 400 | 1.5 | 0em | Footer text, captions, metadata |
| `label` | Inter | 0.875rem | 500 | 1.25 | 0.01em | Button text, emphasized labels |
| `navigation` | Inter | 0.875rem | 400 | 1.25 | 0em | Menu items, header links |

Teodor appears exclusively at light weight (300), leveraging its high contrast and refined serifs for editorial impact. The italic style is used within wordmarks for selective emphasis, creating a distinctive rhythm when paired with roman forms. Inter provides the workhorse utility across all sizes, with Medium weight reserved for interactive labels to distinguish them from passive text. Verify licensing for these families before production use.

## Layout

The layout system favors centered, single-column compositions for maximum impact in hero and statement sections. Content blocks are generously proportioned, with ample vertical padding creating clear sectional rhythm. The relative unit of 0.25rem provides fine-grained control, while major sections are separated by 6rem of vertical space.

Page structure follows a clear hierarchy: immersive full-viewport hero sections establish the brand, followed by content bands that alternate between dark and mint backgrounds. The footer anchors the page with a large-scale wordmark that bleeds toward the edges, creating a confident, expansive closing gesture.

Grid behavior is implicit rather than rigidly columnar. Text blocks center within a comfortable reading width, while decorative and brand elements scale to fill their containers. The large wordmark in the footer demonstrates this fluid approach, extending nearly the full viewport width without fixed column constraints.

Spacing tokens derive from the 0.25rem base unit. Component gaps of 1.5rem separate related elements, while 6rem section spacing creates dramatic pauses between thematic blocks. Buttons and interactive targets use internal padding that scales with their pill-shaped containers, maintaining generous touch targets without explicit specification.

## Visual language

The visual language communicates institutional confidence through restraint and precision. The deep green palette evokes financial stability and technological depth, while the mint accent introduces organic energy and contemporary freshness. This pairing avoids the cold sterility of typical fintech blues in favor of something more distinctive and alive.

Photography and atmospheric backgrounds play a significant role. The hero section employs a dark, abstract gradient with subtle green tonal shifts, suggesting depth and movement without literal imagery. This treatment allows typography to remain the focal point while the environment feels premium and immersive.

The brand mark—a rounded, biomorphic shape resembling a stylized bowtie or molecular node—appears in mint against dark backgrounds and in dark green against mint surfaces. Its soft, organic geometry contrasts deliberately with the sharp letterforms of the wordmark, creating visual tension between natural fluidity and technical precision.

Iconography in the footer uses simple, recognizable social platform marks in muted white, maintaining the understated functional aesthetic. No decorative illustration competes with the typographic and color statement.

## Components

### Primary Action Button

- **Anatomy**: Text label centered within a fully rounded pill container
- **Surface**: Solid mint fill (`accent-mint`) with dark green text (`ink-inverse`)
- **Typography**: Inter Medium, 0.875rem, with slight positive tracking
- **Shape**: Pill border radius (`9999px`), generous horizontal padding
- **Spacing**: Comfortable internal padding creating a substantial but not oversized target
- **Composition**: Typically paired with a secondary variant, separated by component-gap

### Secondary Action Button

- **Anatomy**: Text label within a pill outline container
- **Surface**: Transparent fill with mint border and mint text
- **Typography**: Inter Medium, 0.875rem, matching primary button
- **Shape**: Pill border radius with 1px hairline border
- **Spacing**: Identical internal padding to primary for visual alignment
- **Composition**: Positioned adjacent to primary action, creating a clear hierarchy of commitment

### Hero Section

- **Anatomy**: Centered content stack with logo mark, headline, body text, and action pair
- **Surface**: Deep gradient background (`canvas-deep`) with atmospheric green tonal variation
- **Typography**: Teodor Light hero display for headline, Inter Regular for body
- **Shape**: Full viewport height, content vertically centered
- **Spacing**: Generous internal padding, headline separated from body by component-gap, actions by larger gap
- **Composition**: Strict center alignment, maximum width constraint on text blocks for readability

### Footer

- **Anatomy**: Large wordmark, social icon row, and legal link row
- **Surface**: Dark green background (`canvas-deep`) with pale mint section above
- **Typography**: Teodor Light at display scale for wordmark with italic styling on "liquid"; Inter Regular small for links
- **Shape**: Wordmark extends full width, bleeding to edges; icons in simple monochrome
- **Spacing**: Ample vertical padding, social icons clustered with tight internal spacing
- **Composition**: Wordmark dominates visually; legal links distributed horizontally with center logo mark anchor

## Responsive behavior

The design should maintain its centered, immersive character across viewport sizes. Hero headlines will require significant scaling down on narrow viewports to preserve line breaks and readability. The Teodor display face remains effective at reduced sizes due to its generous x-height and open counters, but line length must be actively managed.

The footer wordmark, which extends nearly full-width on desktop, should scale proportionally or receive a maximum size constraint to prevent excessive thinning on large displays. Social icon clusters and legal link rows should reflow from horizontal to stacked arrangements on narrow screens, maintaining touch target sizes.

Button pairs in the hero should stack vertically on mobile with full-width treatment, preserving their pill shape and internal proportions. The mint accent must remain vibrant against the dark canvas at all sizes; test contrast ratios to ensure accessibility compliance.

## Practical implementation guidance

### Preserve
- The strict two-family typographic hierarchy: Teodor for display, Inter for everything functional
- The deep green-to-mint color relationship as the primary brand signature
- Fully rounded pill shapes for all interactive elements
- Centered, spacious compositions with generous vertical rhythm
- The italic treatment within the wordmark for distinctive brand rhythm

### Avoid
- Introducing additional accent colors that compete with the mint
- Using Teodor at weights heavier than Light or for body text
- Sharp-cornered buttons or cards that contradict the soft pill language
- Pure black backgrounds that would flatten the atmospheric depth
- Crowding the hero section with multiple competing messages

### Recommended Build Order
1. Establish the dark canvas and mint accent as CSS custom properties
2. Implement Inter at base size with proper fallbacks
3. Add Teodor with Light weight and test italic loading for wordmark
4. Build pill button components with primary and secondary variants
5. Construct hero section with centered content stack and gradient background
6. Implement footer with responsive wordmark scaling and icon clusters
7. Refine spacing scale and section rhythm across all components

### Accessibility
- Ensure mint-on-dark-green text meets WCAG AA contrast minimums, particularly for smaller label text
- Provide visible focus states that extend beyond color change, such as outline rings in accent mint
- Maintain button target sizes at minimum 44px in both dimensions
- Use semantic heading hierarchy with Teodor headlines as `h1` or `h2` as appropriate
- Test italic wordmark rendering for readability at all sizes; consider `font-synthesis: none` to prevent browser-generated italic

## Scope note

This guide covers the landing page hero and footer surfaces visible in the supplied images. Interior pages, additional components, motion behavior, and form patterns are not represented. Measurements are practical adaptation targets derived from visual inspection. Verify licensing for Inter and Teodor before production use.
