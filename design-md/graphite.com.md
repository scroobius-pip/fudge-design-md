# How graphite.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/graphite.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large white headline, glowing hexagonal wireframe illustration, and two primary action buttons on a near-black background](https://pin.fontofweb.com/4465?format=jpg)](https://design.withfudge.com/share/pin-4465)

[Hero section with large white headline, glowing hexagonal wireframe illustration, and two primary action buttons on a near-black background](https://design.withfudge.com/share/pin-4465)

[![Feature grid showing stacked cards with product screenshots, Slack notification mockup, and pill-shaped feature tags with icons](https://pin.fontofweb.com/4467?format=jpg)](https://design.withfudge.com/share/pin-4467)

[Feature grid showing stacked cards with product screenshots, Slack notification mockup, and pill-shaped feature tags with icons](https://design.withfudge.com/share/pin-4467)

[![Upper page section with CLI terminal screenshot, review inbox interface, and feature cards with arrow-link CTAs](https://pin.fontofweb.com/4466?format=jpg)](https://design.withfudge.com/share/pin-4466)

[Upper page section with CLI terminal screenshot, review inbox interface, and feature cards with arrow-link CTAs](https://design.withfudge.com/share/pin-4466)

## Overview

Graphite presents a dark, developer-focused visual system built around near-black backgrounds and high-contrast white typography. The interface communicates technical sophistication through restrained color, generous whitespace, and precise geometric accents. A glowing wireframe hexagon serves as the central brand motif, rendered in luminous white against the dark canvas. The design prioritizes readability for long-form technical content while using card-based layouts to break complex product narratives into scannable units. Navigation remains minimal and unobtrusive, allowing product screenshots and terminal interfaces to dominate the visual field. The overall impression is of a tool built by engineers for engineers—clean, confident, and free of decorative excess.

## Colors

The color system is intentionally austere, relying on value contrast rather than hue variation to establish hierarchy. The near-black canvas creates immersive focus, while pure white typography ensures maximum legibility for technical content.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Primary page background, establishing the dark environment |
| surface | #141414 | Card backgrounds, section containers, elevated planes |
| surface-elevated | #1a1a1a | Interactive elements, pill tags, hover states within cards |
| ink | #ffffff | Primary text, headlines, active navigation, icons |
| ink-muted | #a3a3a3 | Secondary descriptions, captions, supporting body text |
| action | #ffffff | Primary button fills, glowing accents, CTA highlights |
| action-ink | #0a0a0a | Text on primary buttons, inverted contexts |
| border | #262626 | Subtle dividers, card outlines, button strokes |

The palette operates in a single dark mode with no light variant visible. Photographic and screenshot content introduces color through product interfaces—terminal greens, avatar hues, and code syntax highlighting—while the design system itself remains neutral. The glowing hexagonal illustration uses pure white with soft bloom effects rather than a distinct accent color. This restraint allows user-generated content and product imagery to carry any necessary chromatic variation.

## Typography

Graphite uses Matter, a contemporary sans-serif family designed by Martin Vácha and distributed by Displaay. The family is employed in Regular, Medium, and Semi Bold weights with tight tracking for display sizes and neutral spacing for body text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Matter | 4rem | 600 | 1.05 | -0.03em | Homepage hero headlines, major section titles |
| section-display | Matter | 2.5rem | 600 | 1.1 | -0.02em | Feature section headings, card titles |
| body-large | Matter | 1.25rem | 400 | 1.5 | 0em | Hero descriptions, introductory paragraphs |
| body | Matter | 1rem | 400 | 1.6 | 0em | General paragraphs, feature descriptions |
| label | Matter | 0.875rem | 500 | 1.4 | 0em | Buttons, tags, navigation items, CTAs |
| navigation | Matter | 0.875rem | 500 | 1 | 0em | Header links, dropdown triggers |

Display typography is set tight and large, with the hero headline commanding immediate attention through scale and negative tracking. Body text maintains generous line height for comfortable reading of technical explanations. The Medium weight (500) serves interface elements and labels, while Semi Bold (600) is reserved for display hierarchy. Verify licensing for Matter through Displaay before production use.

## Layout

The page structure follows a centered single-column flow with contained width for text content and full-bleed sections for visual demonstrations. The header floats above the hero with a transparent or near-transparent background, containing the Graphite logomark, primary navigation, and authentication actions.

Content sections alternate between text-heavy explanatory blocks and screenshot-rich feature cards. The hero section places headline and actions on the left with the hexagonal illustration offset to the right, creating asymmetrical balance. Below the hero, a video or screenshot preview occupies nearly full width, establishing the product context immediately.

Feature sections employ a two-column card grid. Each card contains a text block with headline, description, and arrow-link CTA on one side, paired with a product screenshot or interface mockup on the other. Cards are separated by consistent vertical rhythm, with internal padding creating breathing room around content.

The lower sections introduce horizontal scrolling or stacked pill tags for feature enumeration, allowing dense capability listing without overwhelming the vertical flow. Spacing between major sections is generous, typically six to eight times the base unit, creating clear territorial separation between product narratives.

## Visual language

The dominant visual motif is the glowing hexagonal wireframe—a nested series of white geometric lines that suggests precision, structure, and technological depth. This element appears in the hero with a soft bloom effect, creating an almost holographic presence against the dark canvas.

Interface screenshots are presented with rounded corners and subtle shadows, often tilted or layered to suggest depth and interactivity. Terminal windows show authentic command-line output with syntax highlighting, reinforcing the developer credibility. Notification mockups reproduce real messaging interfaces with accurate iconography and timestamp formatting.

Feature pills use fully rounded caps with small icons, creating a tag-like vocabulary for capability listing. These pills stack vertically with consistent internal spacing, each containing an icon, label, and optional chevron. Arrow links ("Read the docs →", "Learn more →") replace traditional buttons for secondary actions, using the rightward arrow as a consistent directional cue.

The overall aesthetic avoids gradients in favor of flat planes with subtle value shifts. Borders are hairline-thin and low-contrast, present more as structural seams than decorative elements. The design embraces the darkness of developer environments—IDEs, terminals, night modes—making the interface feel native to its audience's daily tools.

## Components

### Primary button
- **Anatomy**: Text label with optional right arrow icon, contained within a rounded rectangle
- **Surface**: Solid white fill (#ffffff) with near-black text (#0a0a0a)
- **Typography**: `{typography.label}` at 0.875rem, Medium weight
- **Shape**: 0.5rem border radius, comfortable horizontal padding
- **Spacing**: 0.75rem vertical padding, 1.25rem horizontal padding
- **Composition**: Often paired with a secondary button or text link, positioned below descriptive text
- **Variants**: Hero variant may include subtle glow or shadow treatment; standard variant is flat

### Secondary button
- **Anatomy**: Text label with transparent background and visible border
- **Surface**: Transparent fill with 1px solid border in #262626, white text
- **Typography**: `{typography.label}` at 0.875rem, Medium weight
- **Shape**: 0.5rem border radius matching primary button
- **Spacing**: Identical padding to primary for visual pairing
- **Composition**: Positioned adjacent to primary button with small gap between

### Feature card
- **Anatomy**: Container with headline, description, arrow-link CTA, and optional media
- **Surface**: #141414 background, 0.75rem border radius, no visible border or subtle border
- **Typography**: Section display for headline, body for description, label for CTA
- **Shape**: 0.75rem rounded corners
- **Spacing**: 2rem internal padding, generous margin between cards
- **Composition**: Text block left-aligned, media positioned to right or below; cards arranged in two-column grid with consistent gap

### Feature pill
- **Anatomy**: Icon, label text, and optional chevron in a fully rounded container
- **Surface**: #1a1a1a background, creating subtle elevation from card surface
- **Typography**: `{typography.label}` at 0.875rem, white text
- **Shape**: 9999px border radius for pill appearance
- **Spacing**: 0.5rem vertical padding, 1rem horizontal padding
- **Composition**: Stacked vertically in lists of five to seven items; icons left-aligned with consistent width

### Arrow link
- **Anatomy**: Text label with rightward arrow (→) character
- **Surface**: Transparent, no background
- **Typography**: `{typography.label}` at 0.875rem, white or muted text
- **Composition**: Follows description text within cards; arrow suggests forward navigation or external resource

### Header navigation
- **Anatomy**: Logomark, text links with dropdown indicators, authentication buttons
- **Surface**: Transparent or near-transparent over hero
- **Typography**: `{typography.navigation}` at 0.875rem, Medium weight
- **Composition**: Logomark left, navigation center, actions right; dropdown links marked with downward chevron

## Responsive behavior

The layout appears optimized for desktop presentation with substantial horizontal space. At narrower viewports, the two-column feature grid should collapse to a single column with media stacking below text. The hero headline, currently set at 4rem, should scale down to maintain comfortable line lengths without excessive wrapping—2.5rem or 2rem would preserve hierarchy on smaller screens.

Navigation items with dropdowns may require a hamburger menu or condensed pattern below approximately 768px viewport width. The feature pill lists, currently shown as vertical stacks, could adapt to horizontal scroll or two-column grids on tablet-sized viewports.

The hexagonal hero illustration should maintain proportional scaling without cropping, potentially shifting to a centered position above headline text on narrow screens. Video and screenshot embeds should use responsive containers with 16:9 or similar aspect ratio preservation.

## Practical implementation guidance

### Preserve
- The near-black canvas as the dominant background; resist adding light sections that would break the immersive dark environment
- High contrast between white text and dark backgrounds; maintain WCAG AAA compliance for all body text
- The hexagonal wireframe as a distinctive brand element, rendered with authentic glow effects rather than flat approximation
- Matter type family across all text; the tight tracking on display sizes is essential to the refined aesthetic
- Generous section spacing; the breathing room between content blocks is part of the premium feel

### Avoid
- Introducing saturated accent colors; the palette succeeds through restraint
- Heavy drop shadows on cards; use subtle value shifts or borders instead
- Generic button styling; the specific radius, padding, and arrow treatments define the interactive voice
- Light mode as a default; the dark environment is integral to the developer-tool positioning
- Decorative gradients behind content; keep surfaces flat and value-driven

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement Matter font loading with Regular, Medium, and Semi Bold weights
3. Build the hero section with headline scale, button pair, and hexagonal illustration placement
4. Create the feature card component with consistent padding, radius, and internal spacing
5. Add the feature pill pattern for capability listing
6. Implement header navigation with transparent treatment
7. Refine responsive behavior for card grids and hero layout

### Accessibility
- Ensure all white text on dark backgrounds meets minimum 7:1 contrast ratio for body text and 4.5:1 for large text
- Provide visible focus indicators for keyboard navigation; the dark environment may require adjusted focus ring color
- Maintain logical heading hierarchy from h1 hero through h2 section titles to h3 card headlines
- Include alt text for all product screenshots describing the depicted interface state
- Ensure arrow links have sufficient target size for touch interaction when adapted to mobile

## Scope note

This guide covers the Graphite homepage and its primary marketing sections. Measurements are practical adaptation targets. Items not addressed include interior product pages, documentation, pricing tables, authentication flows, mobile-specific layouts, animation and transition behavior, and dark-to-light mode switching. The design system assumes a single dark theme throughout.
