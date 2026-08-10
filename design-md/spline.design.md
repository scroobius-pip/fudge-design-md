# How spline.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/spline.design-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with multi-column link grid, Spline logo, social icons, and copyright on pure black background](https://pin.fontofweb.com/5135?format=jpg)](https://design.withfudge.com/share/pin-5135)

[Footer with multi-column link grid, Spline logo, social icons, and copyright on pure black background](https://design.withfudge.com/share/pin-5135)

[![Getting started section with community platform card, blue CTA button, and four resource link cards with icons](https://pin.fontofweb.com/5134?format=jpg)](https://design.withfudge.com/share/pin-5134)

[Getting started section with community platform card, blue CTA button, and four resource link cards with icons](https://design.withfudge.com/share/pin-5134)

[![Testimonials section with three quote cards featuring company logos, quotes, and avatar attribution rows](https://pin.fontofweb.com/5133?format=jpg)](https://design.withfudge.com/share/pin-5133)

[Testimonials section with three quote cards featuring company logos, quotes, and avatar attribution rows](https://design.withfudge.com/share/pin-5133)

[![Platform shipping section with 3D cube demo, code snippet panel, platform tabs, and integration logo row](https://pin.fontofweb.com/5132?format=jpg)](https://design.withfudge.com/share/pin-5132)

[Platform shipping section with 3D cube demo, code snippet panel, platform tabs, and integration logo row](https://design.withfudge.com/share/pin-5132)

## Overview

Spline's design system is built around a dark, immersive canvas that lets 3D content and colorful product imagery take center stage. The visual language is restrained and technical—nearly everything sits on pure black or near-black surfaces, with white typography providing crisp contrast. Electric blue serves as the singular accent for calls-to-action, creating a clear hierarchy without competing with the vibrant 3D renders and community content that fill the product's marketing pages.

The system balances creative expression with developer credibility. Marketing sections use large, confident headlines and generous whitespace, while implementation sections introduce monospace code typography and syntax highlighting to speak directly to technical users. Cards organize content into scannable, bordered containers that feel native to the dark environment. The overall impression is of a professional creative tool—sophisticated, current, and unafraid to let the product's visual output dominate the experience.

## Colors

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, footer ground, empty space around 3D content |
| surface | `#111111` | Card backgrounds, panel fills, elevated containers |
| surface-elevated | `#1a1a1a` | Hover states, secondary buttons, code block backgrounds |
| ink | `#ffffff` | Primary headings, body text on dark, active tab labels |
| ink-muted | `#888888` | Secondary descriptions, inactive tab text, footer links |
| ink-dim | `#555555` | Tertiary text, captions, disabled states |
| action | `#2563eb` | Primary buttons, interactive highlights, link accents |
| action-hover | `#1d4ed8` | Button hover states, pressed action elements |
| border | `#222222` | Card outlines, dividers, structural separators |
| border-subtle | `#1a1a1a` | Inner panel borders, hairline divisions |
| code-string | `#a5d6ff` | Syntax highlighting for strings and URLs in code blocks |
| code-keyword | `#ff7b72` | Syntax highlighting for HTML tags and reserved words |
| code-comment | `#7ee787` | Syntax highlighting for comments and annotations |

The color model is strictly dark-mode with no light variant visible. Pure black canvas absorbs attention and makes 3D renders with their own lighting appear to float. The near-black surface tokens create subtle depth through value shifts rather than shadows. White ink maintains maximum legibility at all sizes, while the muted gray scale handles supporting information without visual noise. The blue action color is saturated and bright enough to register instantly against black, but single-purpose—it never appears in gradients or as a background wash. Code syntax colors are restrained pastels that read clearly against dark surfaces without the garishness of classic terminal themes.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Spline Sans | 3rem | 500 | 1.1 | -0.02em | Major section headlines, above-the-fold messaging |
| section-display | Spline Sans | 2.5rem | 500 | 1.15 | -0.01em | Subsection headings, feature introductions |
| body | Spline Sans | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general reading |
| body-large | Spline Sans | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, section descriptions |
| label | Spline Sans | 0.875rem | 500 | 1.4 | 0.01em | Buttons, card titles, navigation labels |
| navigation | Spline Sans | 0.875rem | 400 | 1.4 | 0 | Footer links, header navigation items |
| code | Spline Sans Mono 30 | 0.875rem | 400 | 1.7 | 0 | Code snippets, technical documentation |
| legal | Spline Sans | 0.875rem | 400 | 1.5 | 0 | Copyright, terms, fine print |

Spline Sans carries all marketing and interface text with a modern geometric sensibility—clean, open, and slightly technical without being cold. The Medium weight (500) is reserved for headlines and labels, while Regular (400) handles body and navigation. Tight negative tracking on display sizes gives headlines presence and contemporary density. Spline Sans Mono 30 appears exclusively for code presentation, with its taller line height accommodating the inline syntax highlighting and maintaining readability in dark panels. The type scale is restrained: three display sizes, one body size with a larger lead variant, and a single small size for labels, navigation, code, and legal contexts. Verify licensing for these families before production use.

## Layout

The page structure follows a centered, contained model with full-bleed dark canvas. Major sections stack vertically with generous internal padding, typically six to eight rem of vertical space between content blocks. Content width is constrained to a readable maximum, approximately 75 to 80 rem, centered within the viewport.

Grid systems vary by content type. The footer uses a four-column link grid with equal distribution and left-aligned column headers. Resource cards and testimonial cards use flexible grids—four columns for compact resource links, three columns for quote cards with more generous internal spacing. The platform shipping section demonstrates an asymmetric two-column layout: a large interactive demo panel on the left, a code snippet panel on the right, both roughly equal in visual weight.

Card-based containers are the primary content organization pattern. Each card sits on the surface color with a subtle border, rounded corners, and internal padding of two rem. Cards never float with visible shadows; depth is communicated through border presence and value contrast with the canvas. Between cards, gap spacing of one to one-and-a-half rem maintains relationship without crowding.

The code panel in the platform section shows a nested layout: a header label, a scrollable code block with line numbers, and a bottom action bar with two buttons. This panel uses the same surface treatment as other cards but with tighter internal spacing and monospace typography to signal its technical function.

## Visual language

Spline's visual identity is defined by restraint around exuberant content. The interface itself is nearly monochromatic—black, near-black, white, and a single blue—so that 3D renders, community artwork, and colorful product screenshots become the visual events. This creates a gallery-like presentation where the tool's output is always the hero.

Borders are hairline and functional, not decorative. One or two pixel strokes in near-black separate cards and panels without creating visual weight. Rounded corners are consistent across all containers, softening the technical severity of the dark theme. There are no drop shadows; elevation is implied through surface value alone.

Iconography is minimal and monochrome. Small glyphs accompany resource card labels and platform tabs, rendered in the muted ink color. The Spline logo itself is a colorful gradient sphere—one of the few places where the interface breaks its own monochrome rule, and even then it appears small and contained.

Photography and 3D imagery dominate content sections. Community platform cards show rendered scenes with their own color palettes, framed within rounded containers. The 3D cube demo in the platform section uses simple geometric forms with primary-color accents (red, green, blue) against a dark grid floor—demonstrating the tool's output without visual complexity.

## Components

### Primary button
- **Anatomy**: Text label centered within a rounded rectangle
- **Surface**: Solid action blue background
- **Typography**: Label token, white ink
- **Shape**: Border radius of 0.75 rem, pill-like but not fully circular
- **Spacing**: Padding of 0.75 rem vertical, 1.5 rem horizontal
- **Composition**: Typically appears alone or as the leftmost action in a pair
- **Variants**: Hover state darkens to action-hover; no visible disabled state in supplied images

### Secondary button
- **Anatomy**: Text label centered within a rounded rectangle
- **Surface**: Surface-elevated background, no border or subtle border
- **Typography**: Label token, white ink
- **Shape**: Same radius as primary, 0.75 rem
- **Spacing**: Same padding as primary
- **Composition**: Paired with primary buttons in code panel action bars

### Resource card
- **Anatomy**: Icon top-left, title with chevron, description below
- **Surface**: Surface background, border color border
- **Typography**: Label token for title, body token for description
- **Shape**: 1 rem border radius
- **Spacing**: 1.5 rem internal padding
- **Composition**: Four-column grid with 1 rem gaps
- **Variants**: Hover state not visible; icon and chevron suggest clickability

### Testimonial card
- **Anatomy**: Company logo top, quote text center, avatar and attribution bottom
- **Surface**: Surface background, border color border
- **Typography**: Section-display for headline above cards; body token for quotes; label for names; ink-muted for titles
- **Shape**: 1 rem border radius
- **Spacing**: 2 rem internal padding
- **Composition**: Three-column grid with 1.5 rem gaps
- **Hierarchy**: Company logos establish credibility before the quote; avatar row grounds attribution

### Code panel
- **Anatomy**: Header label, line-numbered code block, bottom action bar with two buttons
- **Surface**: Surface background, subtle inner border for code area
- **Typography**: Code token for all syntax; syntax highlighting with code-string, code-keyword, code-comment
- **Shape**: 0.75 rem border radius for panel, no radius for internal code area
- **Spacing**: Compact vertical rhythm, approximately 1.5 rem padding around code
- **Composition**: Right column in two-column layout; action bar spans full width below code

### Platform tab
- **Anatomy**: Icon and label pair, three items in horizontal row with dividers
- **Surface**: Transparent, sits on canvas
- **Typography**: Label token; inactive uses ink-muted, active uses ink
- **Shape**: No visible container, text and icon only
- **Spacing**: Even horizontal distribution with vertical dividers
- **Composition**: Centered above the two-column demo and code panels
- **Variants**: Active state shows full white ink; inactive shows muted gray

### Footer
- **Anatomy**: Logo left, four-column link grid center-right, social icons right, copyright bottom-left
- **Surface**: Canvas background, no elevation
- **Typography**: Navigation token for all links; legal token for copyright
- **Shape**: No cards or containers; full-bleed section
- **Spacing**: Generous top padding, horizontal rule above copyright row
- **Composition**: Asymmetric balance with logo anchoring left, dense information center, social proof right

## Responsive behavior

The design appears optimized for desktop presentation with substantial viewport width. The two-column platform section, three-column testimonial grid, and four-column resource grid all require significant horizontal space. At narrower viewports, these should collapse to single columns with maintained internal card spacing. The footer link grid should stack to two columns then single column, preserving category grouping.

Typography should scale down modestly on smaller screens. Hero display may reduce to 2 rem, section display to 1.75 rem, maintaining the same weight and tracking relationships. Code panels should become full-width stacked above or below their associated demo, rather than side-by-side.

Touch targets for buttons and cards should maintain minimum 44 by 44 pixel areas. The resource card chevrons and platform tabs need adequate spacing for finger interaction. Dark mode is the only mode; no light variant is suggested by the source material.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the foundation; any deviation lightens the entire mood
- Single blue accent discipline; resist adding secondary action colors
- Monospace code presentation with syntax highlighting for technical credibility
- Card-based content organization with visible borders rather than shadows
- Generous section spacing that lets 3D imagery breathe

### Avoid
- Light backgrounds or white sections that would break the immersive dark continuity
- Gradient backgrounds behind text that reduce legibility
- Multiple button colors competing for attention
- Drop shadows on cards; the design achieves depth through value contrast
- Decorative borders heavier than one or two pixels

### Recommended build order
1. Establish the canvas and surface color tokens with pure black foundation
2. Implement Spline Sans with the display and body scale, verifying weights load correctly
3. Build the card component with border, radius, and padding as the primary content container
4. Add the primary button with its distinctive blue and pill-like radius
5. Create the code panel with monospace typography and syntax highlighting tokens
6. Assemble section layouts starting with the centered headline + description + grid pattern
7. Implement the footer as a full-bleed, non-card section with link columns

### Accessibility
- White on pure black exceeds WCAG AAA contrast for normal text; verify ink-muted against surface meets AA for small text
- Code syntax colors should be tested for contrast against the dark panel background; the pastel values may need slight lightening
- Interactive cards should have visible focus indicators, likely a border color shift or subtle glow
- Platform tabs need clear active state beyond color alone; consider underline or background pill
- 3D demo areas should have alternative text or descriptive labels for screen reader users

## Scope note

This guide covers the marketing homepage surface visible in supplied images, including the footer, getting-started section, testimonials, and platform shipping demonstration. Navigation header, mobile layouts, animation behavior, and the 3D tool interface itself are not represented. Measurements are practical adaptation targets derived from visual inspection.
