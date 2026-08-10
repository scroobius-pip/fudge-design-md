# How liveblocks.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/liveblocks.io-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with centered display headline, white primary button, and curved gradient arc on black background with footer navigation columns](https://pin.fontofweb.com/8084?format=jpg)](https://design.withfudge.com/share/pin-8084)

[Hero section with centered display headline, white primary button, and curved gradient arc on black background with footer navigation columns](https://design.withfudge.com/share/pin-8084)

[![Feature cards with dashboard preview, agility testimonial quote, and four benefit icons in a bordered grid layout](https://pin.fontofweb.com/8083?format=jpg)](https://design.withfudge.com/share/pin-8083)

[Feature cards with dashboard preview, agility testimonial quote, and four benefit icons in a bordered grid layout](https://design.withfudge.com/share/pin-8083)

[![Code editor interface showing syntax-highlighted React code with floating AI toolbar and colored token accents](https://pin.fontofweb.com/8082?format=jpg)](https://design.withfudge.com/share/pin-8082)

[Code editor interface showing syntax-highlighted React code with floating AI toolbar and colored token accents](https://design.withfudge.com/share/pin-8082)

[![Feature overview panel with colored product icons, four-quadrant benefit grid, and large display text about human-AI collaboration](https://pin.fontofweb.com/8081?format=jpg)](https://design.withfudge.com/share/pin-8081)

[Feature overview panel with colored product icons, four-quadrant benefit grid, and large display text about human-AI collaboration](https://design.withfudge.com/share/pin-8081)

## Overview

Liveblocks presents a developer platform identity built on absolute contrast: pure black canvas against crisp white typography, with color reserved for functional accents and code syntax. The visual system communicates technical precision through Swiss typographic discipline while using subtle gradients, curved forms, and colored interface elements to suggest the collaborative, AI-enhanced experiences the platform enables. The design prioritizes readability for developers scanning documentation and feature lists, with generous whitespace in dark space that lets content breathe. Every element serves the dual audience of technical decision-makers and implementation teams, balancing marketing clarity with engineering credibility.

## Colors

The palette operates on a near-binary foundation with strategic color injections.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, infinite dark field |
| surface | #272626 | Elevated card backgrounds, footer panels, subtle borders |
| ink | #FFFFFF | Primary headings, body text, navigation labels |
| muted-ink | #918D8D | Secondary descriptions, footer links, inactive states |
| accent-cyan | #00C1D6 | Status indicators, operational badges, interactive highlights |
| accent-mint | #6CEFCE | Success states, system operational indicators |
| accent-teal | #70E1C8 | Secondary positive accents, gradient endpoints |
| accent-purple | #9F8DFC | Code tokens, AI-related interface elements |
| accent-magenta | #BF7AF0 | Syntax highlighting, decorative gradients |
| accent-coral | #F44E6B | Error states, attention markers |
| accent-pink | #F76E99 | Secondary alerts, gradient accents |
| border | #272626 | Card outlines, section dividers, subtle containment |
| status-green | #6CEFCE | Live system status, "All systems operational" badge |

The color philosophy separates content from chrome. Text and structural elements use only white and gray values against black, ensuring maximum legibility for code-heavy pages. Color enters through four channels: product feature icons (gradient-filled shapes in coral, purple, teal, and green), code syntax highlighting (cyan, purple, pink, green, yellow, and blue tokens), status indicators (mint green for operational), and decorative hero gradients (subtle gray-to-black arcs). This restraint makes colored elements feel intentional and functional rather than decorative.

## Typography

The type system pairs a precise Swiss sans-serif for all interface and marketing text with a monospace face for code demonstrations.In practice, the sans-serif renders as "Font" in computed styles across all measured elements.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Font | 3.25rem | 500 | 1.1 | -0.02em | Homepage hero headlines, major section titles |
| section-display | Font | 2rem | 500 | 1.2 | -0.01em | Feature section headers, testimonial quotes |
| feature-heading | Font | 1.5rem | 500 | 1.25 | -0.01em | Card titles, product feature names |
| metric-display | Font | 3rem | 500 | 1.05 | normal | Large statistics, dashboard numbers |
| body | Font | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, footer content |
| body-large | Font | 1.25rem | 400 | 1.375 | 0.005em | Lead paragraphs, introductory copy |
| label | Font | 0.875rem | 500 | 1 | normal | Buttons, badges, category headers |
| navigation | Font | 0.875rem | 400 | 1 | normal | Header links, dropdown items |
| code | Jet Brains Mono | 0.875rem | 400 | 1.43 | normal | Code blocks, inline syntax, API references |

Font appears in Regular (400) and Medium (500) weights. The Medium weight carries display and interactive hierarchy; Regular handles body reading. Jet Brains Mono serves exclusively for code content at a single size. The hero display at 52px with tight -1.04px tracking creates commanding presence without heaviness. Body text at 16px with 24px line-height maintains comfortable reading density for technical documentation.

Verify licensing for these families before production use. Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved is designed and distributed by Swiss Typefaces.

## Layout

The page structure follows a centered, contained model with generous peripheral breathing room. Maximum content width centers at approximately 1200px with 40px side padding, creating consistent margins across viewport sizes. The header maintains a fixed presence with 16px vertical padding, separating navigation from content with a thin border rule.

Section spacing uses dramatic vertical rhythm: hero areas command substantial top margin (280px above headline), while content sections compress to tighter 24-28px internal padding. This creates a scroll narrative where the eye travels through expansive negative space into dense information clusters.

The grid system employs asymmetric compositions. Feature cards arrange in 2x2 and 4-quadrant layouts with 1px borders dividing cells, eliminating gap spacing in favor of line-based separation. Testimonial blocks offset quote text against attribution with horizontal padding asymmetry. Code demonstrations use full-bleed dark panels with internal padding, creating immersive technical previews.

Navigation follows a split pattern: product links left-aligned with the logo, utility actions right-aligned. Footer content organizes into four-column link grids with category labels above muted link stacks. The overall spatial logic prioritizes scannability for developers evaluating features quickly.

## Visual language

The aesthetic character balances technical minimalism with subtle warmth. The pure black canvas avoids the coldness of dark-gray alternatives by pairing with off-white text and mint-green status accents. Curved gradient arcs in the hero introduce organic motion against the rigid grid, suggesting collaboration flows and connection networks.

Iconography uses simple line drawings for feature benefits—arrows for scaling, lightning for speed, tools for maintenance, shields for security. Product feature icons employ filled gradient shapes with soft glows: rounded squares and circles in coral-to-orange, purple-to-magenta, and teal-to-green transitions. These feel like app icons rather than interface glyphs, elevating product features to first-class visual citizens.

Code presentations receive special treatment: dark backgrounds with syntax highlighting in cyan (keywords), purple (functions), pink (strings), green (comments), and yellow (attributes). The floating AI toolbar demonstrates contextual intelligence through a compact dark pill with colored action buttons.

Shadows remain minimal and functional: a single 1px inset border in #272626 defines card elevations without blur diffusion. The restraint reinforces the flat, engineering-focused personality while maintaining depth through tonal contrast alone.

## Components

### Primary button
- Anatomy: Text label with optional arrow icon, contained within a rounded rectangle
- Surface: White (#FFFFFF) background on dark canvas, or transparent with white border
- Typography: label token, Medium weight, 14px
- Shape: 6px border radius, 8px 12px padding
- Spacing: Compact horizontal presence, 4px margin offsets in navigation context
- Variants: Filled white for primary actions; text-only with arrow for secondary navigation

### Feature card
- Anatomy: Icon or illustration top, heading, description paragraph, optional link
- Surface: Transparent or #272626 background, 1px border separation in grid contexts
- Typography: feature-heading for titles, body for descriptions in muted-ink
- Shape: 8px radius on standalone cards, sharp edges in grid-divided layouts
- Spacing: 28px internal padding, 24px vertical margins between card groups
- Composition: 2-column or 4-quadrant arrangements with border-based gutters

### Testimonial block
- Anatomy: Large quotation marks, pull quote text, avatar image, name, title
- Surface: Transparent, integrated into content flow
- Typography: section-display for quote body, body for attribution in muted-ink
- Spacing: Generous horizontal padding (82px offset), vertical margin 96px below
- Hierarchy: Company logo above quote, attribution below with thumbnail

### Code demonstration panel
- Anatomy: Line-numbered editor, syntax-highlighted content, floating contextual toolbar
- Surface: Near-black background, slightly elevated from canvas
- Typography: code token for all content, with color-coded syntax categories
- Shape: 6px radius on floating toolbars, full-bleed edges on main panels
- Spacing: 16px horizontal padding for code lines, 14px vertical for toolbar items

### Navigation header
- Anatomy: Logo mark left, product links center-left, utility actions right
- Surface: Transparent over hero, acquiring subtle background on scroll
- Typography: navigation token for links, label for "Get started" button
- Shape: 6px radius on button, 4px on dropdown triggers
- Spacing: 16px vertical padding, 8px link padding, 12px horizontal gaps

### Status badge
- Anatomy: Dot indicator with label text
- Surface: Transparent
- Typography: label token in accent-mint
- Composition: Preceded by 4px colored dot, used for system status and operational indicators

## Responsive behavior

The design assumes desktop-primary viewing for technical documentation and product evaluation. At narrower viewports, the multi-column footer grid should collapse to stacked category sections with maintained link grouping. Feature card grids transition from 4-quadrant to 2-column to single-column arrangements, preserving border separators as horizontal rules.

Hero headline sizes should scale down proportionally: hero-display reduces to section-display dimensions on tablet, then to feature-heading on mobile. The curved gradient arc element may require repositioning or simplification to avoid cropping awkwardly.

Navigation collapses to a hamburger menu on mobile, with dropdown categories becoming expandable accordion sections. Code demonstration panels should remain horizontally scrollable rather than wrapping, preserving line integrity for readability.

Touch targets for buttons and links must maintain minimum 44px height regardless of viewport, with increased padding on mobile primary actions.

## Practical implementation guidance

### Preserve
- The absolute black canvas with pure white text; this contrast defines the brand
- Swiss typographic precision: tight tracking on displays, generous line-height on body
- Mint green for operational status and positive system feedback
- Border-based grid separation rather than gap-based spacing for feature cards
- Syntax highlighting palette: cyan keywords, purple functions, pink strings, green comments
- Curved gradient arcs as hero decorative elements with gray-to-black transitions

### Avoid
- Introducing additional background colors beyond black and surface gray
- Using color for body text; reserve it for accents, code, and status only
- Heavy drop shadows; rely on tonal contrast and 1px borders for depth
- Rounding corners beyond 8px; the system favors subtle curvature
- Mixing font weights beyond Regular and Medium for Font

### Recommended build order
1. Establish black canvas and white typography foundation with Font
2. Implement spacing scale with 2px base unit and section rhythm
3. Build navigation header with transparent-to-solid scroll behavior
4. Create button components in filled and text variants
5. Develop feature card grid with border-based separation
6. Add code demonstration panels with syntax highlighting
7. Implement hero gradient arcs and decorative elements
8. Polish with status badges, testimonial layouts, and footer grid

### Accessibility
- Maintain 4.5:1 minimum contrast for all body text; the white-on-black pairing exceeds this
- Ensure code panels have keyboard-navigable focus indicators
- Provide visible focus states on all interactive elements with 2px outline offset
- Use aria-labels for icon-only buttons in feature grids
- Respect reduced-motion preferences for gradient arc animations
- Test syntax highlighting contrast ratios; some accent colors may need adjustment for WCAG AAA

## Scope note

This guide covers the Liveblocks marketing homepage and product feature surfaces visible in the supplied captures. Pricing pages, documentation interior pages, dashboard interfaces, and mobile-native applications are not represented. Interactive states including hover, active, focus, and loading behaviors should be validated against live implementation. Measurements are exact where retained and practical adaptation targets where rounded to the 2px base grid.
