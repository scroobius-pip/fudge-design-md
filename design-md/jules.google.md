# How jules.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jules.google-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with ASCII art title, code editor mockup, and floating task cards on deep purple background](https://pin.fontofweb.com/5850?format=jpg)](https://design.withfudge.com/share/pin-5850)

[Hero section with ASCII art title, code editor mockup, and floating task cards on deep purple background](https://design.withfudge.com/share/pin-5850)

[![Feature grid with pixel-art octopus mascot and four capability cards with neon accent icons](https://pin.fontofweb.com/5851?format=jpg)](https://design.withfudge.com/share/pin-5851)

[Feature grid with pixel-art octopus mascot and four capability cards with neon accent icons](https://design.withfudge.com/share/pin-5851)

[![Pricing tier cards with Pro and Ultra badges, decorative pixel border, and stacked CTA buttons](https://pin.fontofweb.com/5852?format=jpg)](https://design.withfudge.com/share/pin-5852)

[Pricing tier cards with Pro and Ultra badges, decorative pixel border, and stacked CTA buttons](https://design.withfudge.com/share/pin-5852)

[![Three-column pricing comparison with tier headers, bullet lists, and subtle card surfaces](https://pin.fontofweb.com/5853?format=jpg)](https://design.withfudge.com/share/pin-5853)

[Three-column pricing comparison with tier headers, bullet lists, and subtle card surfaces](https://design.withfudge.com/share/pin-5853)

## Overview

Jules presents itself as an autonomous coding agent through a deliberately retro-futuristic visual language. The design immerses visitors in a deep purple void that evokes terminal screens and late-night development sessions. Pixel-art motifs appear throughout: an ASCII-art logotype, decorative border patterns, and a central octopus mascot rendered in blocky neon colors. The aesthetic merges 8-bit nostalgia with contemporary developer-tool credibility.

The interface relies entirely on a single monospace type family, reinforcing the coding context. Content surfaces as dark cards floating against the purple canvas, with strategic neon accents in cyan, magenta, and yellow drawing attention to interactive elements and tier distinctions. The composition balances dense information—pricing tables, feature lists, code mockups—with generous negative space and playful decorative elements that prevent the technical content from feeling sterile.

## Colors

The color system builds atmosphere through extreme contrast between a deep purple canvas and near-black surfaces, with neon accents providing functional hierarchy.

| token | value | use |
|---|---|---|
| canvas | #1a0b2e | Primary page background, the deep purple void behind all content |
| surface | #0d0618 | Card backgrounds, code editor chrome, feature panels |
| surface-raised | #161026 | Elevated cards, pricing tiers, hover states |
| ink | #e8e0f0 | Primary text, headings, body copy on dark surfaces |
| ink-muted | #a090b8 | Secondary text, descriptions, metadata |
| accent-cyan | #4deeea | Secondary buttons, decorative pixels, code highlights |
| accent-magenta | #ff006e | Primary buttons, urgent labels, error states |
| accent-yellow | #ffbe0b | Decorative elements, warning indicators, pixel art details |
| accent-lavender | #9d4edd | Card borders, tier badges, subtle structural lines |
| action-primary | #ff006e | Primary call-to-action buttons |
| action-secondary | #4deeea | Secondary actions, documentation links |

The palette operates in a dark mode by default with no light variant visible. The canvas purple (#1a0b2e) establishes an immersive environment that suggests space and screens. Surfaces descend further into darkness (#0d0618, #161026) to create depth through layering. Ink tones stay cool and desaturated to reduce eye strain against the saturated background.

Neon accents serve distinct functional roles: magenta commands immediate action, cyan offers alternative paths, and yellow appears primarily in decorative pixel art and illustration. Lavender bridges the gap between structural and decorative, appearing as subtle borders and tier indicators. The accents never compete for attention; each has a clear hierarchy in the interaction model.

## Typography

The typographic system uses a single monospace family throughout, creating a cohesive developer-tool identity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Roboto Mono | 3rem | 400 | 1.1 | -0.02em | ASCII art title, main page headline |
| section-display | Roboto Mono | 1.5rem | 400 | 1.2 | -0.01em | Section headings, pricing tier names |
| body | Roboto Mono | 1rem | 400 | 1.6 | 0em | Descriptions, feature explanations |
| body-small | Roboto Mono | 0.875rem | 400 | 1.5 | 0em | Card content, bullet lists, metadata |
| label | Roboto Mono | 0.75rem | 400 | 1.4 | 0.04em | Badges, tags, small annotations |
| navigation | Roboto Mono | 0.875rem | 400 | 1 | 0.02em | Header links, buttons, footer items |

Roboto Mono appears in Regular weight exclusively. The absence of heavier weights shifts emphasis through size and color rather than mass. Tracking stays tight for display sizes to maintain the blocky, terminal-like density, while body text relaxes into neutral spacing for readability.

Type sizes follow a 4px grid: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 24px (1.5rem), and 48px (3rem). This constrained scale reinforces the systematic, engineered quality of the brand.

Verify licensing for these families before production use. Roboto Mono is designed by Google.

## Layout

The page structure follows a centered, single-column flow with occasional asymmetric breaks for visual interest. Maximum content width appears constrained to approximately 1200px, with generous horizontal padding that expands on wider viewports.

Sections stack vertically with substantial breathing room—roughly 6rem between major content blocks. The hero section dominates the viewport height, pushing the ASCII title and code mockup to center stage. Below, feature grids and pricing tiers adopt a centered alignment that keeps focus on the content rather than edge-to-edge expansion.

The pricing section uses a three-column grid at desktop widths, with equal-width cards separated by consistent gutters. Feature cards in the capabilities section arrange in a 2x2 grid flanking the central mascot illustration, creating a symmetrical composition that breaks the vertical rhythm.

Spacing follows a 4px base unit (0.25rem). Common increments include 8px for tight internal padding, 16px for component gaps, 24px for card padding, and 48-96px for section separation. This modular approach allows the dense monospace content to feel organized rather than cramped.

The code editor mockup in the hero uses a fixed-width container with internal padding, simulating an IDE window. Floating elements like the task card overlay break the grid deliberately, creating depth through apparent z-layering.

## Visual language

The visual identity revolves around pixel-art nostalgia translated into a modern developer context. Three decorative systems work together: ASCII text art, pixel-pattern borders, and the blocky octopus mascot.

ASCII art renders the "Jules" logotype using character density variation, creating texture through typographic characters rather than vector shapes. This technique extends to decorative horizontal rules composed of repeating pixel characters that separate sections.

The octopus mascot anchors the feature section, split vertically between solid lavender and a circuit-board pattern in neon pink, cyan, and yellow. This illustration style—flat colors, hard edges, visible pixel grid—connects to the broader retro-gaming aesthetic while the circuit pattern communicates technical capability.

Decorative pixel borders appear as horizontal bands of varied density, creating rhythm and visual rest between content-heavy sections. These borders use the accent lavender at reduced opacity, maintaining atmosphere without competing for attention.

Card surfaces employ subtle depth cues: slightly raised backgrounds, single-pixel borders in lavender, and internal shadows that suggest physical panels floating in the purple void. The overall effect is of a control panel or terminal interface rendered with contemporary refinement.

## Components

### Navigation bar

The top navigation floats over the canvas with minimal chrome. A small pixel-art icon mark sits left, while action buttons cluster right. The "Plans" button uses a secondary treatment with cyan border and text, while "Try Jules" appears as a filled magenta primary button. Links use the navigation type token at 14px.

### Hero section

The hero centers an ASCII-art "Jules" title rendered in lavender and white characters against the purple canvas, with scattered decorative pixels in cyan and magenta creating constellation-like detail. Below, the subtitle "An Autonomous Coding Agent" uses section-display sizing in muted ink.

A simulated code editor window dominates the lower hero. It features a dark surface background with syntax-highlighted JavaScript: keywords in magenta, strings in yellow, comments in muted purple, and standard code in light ink. Line numbers run down the left margin in muted text. A small pixel-art avatar floats at the editor's edge, connecting to a wavy line that leads to a task card overlay.

The task card appears as a raised dark panel with rounded corners, containing a sad-face icon, descriptive text, and four small tag buttons in magenta, cyan, yellow, and lavender. This composition demonstrates the product's value proposition through visual narrative rather than explanation.

### Feature cards

Four capability cards arrange around the central mascot in a 2x2 grid. Each card uses the surface background with generous internal padding. A colored icon mark sits above the heading: pink for GitHub Integration, yellow for Virtual Machine, cyan for Test Suite, and white for Available Anywhere. Headings use section-display sizing, with body-small descriptions below. Links within descriptions appear underlined in cyan.

### Pricing cards

Three tier cards share a common structure with graduated visual distinction. The base "Jules" tier shows minimal decoration. "Jules in Pro" adds a lavender badge with rounded corners. "Jules in Ultra" receives the most prominent badge treatment with brighter lavender fill.

Each card header contains the tier name and a small pixel-bar indicator showing relative capability. Body content lists features with bullet markers, using body-small sizing with comfortable line height. The cards rest on surface-raised backgrounds with subtle lavender borders, creating separation from the canvas without harsh contrast.

### Footer

The footer region contains a decorative pixel-border band, followed by stacked action buttons centered horizontally. The primary "Try Jules" button uses magenta fill, while "Documentation" appears as a light/white filled button with dark text—a rare inversion of the dark-surface pattern. Below, footer links for Google Labs, Terms of Service, and Privacy Policy use navigation sizing in muted ink.

## Responsive behavior

The design's single-column flow and centered alignment suggest natural adaptation to narrower viewports. The three-column pricing grid should collapse to a single stacked column on mobile, maintaining card width and internal spacing while eliminating horizontal gutters.

The ASCII art title will require scaling down or horizontal scrolling on narrow screens, as its fixed character width resists fluid reflow. Consider rendering a simplified version below a breakpoint.

Feature cards currently flank the mascot in a 2x2 arrangement; this should stack vertically on mobile with the mascot centered between or above the grid.

The code editor mockup, with its fixed aspect ratio and detailed syntax highlighting, should maintain its container proportions while allowing horizontal scroll for the code content itself.

Button groups in the footer should stack vertically with full-width treatment on mobile, preserving the primary/secondary visual hierarchy through color rather than position.

## Practical implementation guidance

### Preserve
- The deep purple canvas as the default and only background mode
- Monospace typography throughout; do not substitute sans-serif for any text
- Pixel-art decorative elements at their native blocky resolution
- The specific neon accent trio: magenta for primary actions, cyan for secondary, yellow for decorative
- Dark card surfaces with subtle lavender borders as the primary content container

### Avoid
- Adding a light mode; the dark atmosphere is integral to the brand
- Using gradients or shadows that soften the flat, retro aesthetic
- Introducing rounded corners larger than the card radius; keep edges crisp
- Mixing in sans-serif or serif typefaces for contrast
- Overusing the neon accents; reserve them for interactive and highlighted elements

### Recommended build order
1. Establish the canvas background and load Roboto Mono
2. Implement the hero ASCII title with proper character spacing
3. Build the code editor mockup with syntax highlighting colors
4. Create the feature card component with icon marks
5. Develop the pricing tier cards with badge variants
6. Add decorative pixel borders and mascot illustration
7. Implement navigation and footer button patterns

### Accessibility
- Ensure the magenta primary buttons meet contrast ratios against the dark surface; the neon colors may need adjustment for WCAG AA compliance
- Provide focus indicators that match the pixel aesthetic, such as dashed or dotted outlines in cyan
- Consider adding a reduced-motion option that disables any decorative pixel animations
- The ASCII art title should have a proper text alternative or aria-label for screen readers
- Code mockup content should be marked as decorative or provided with accessible descriptions of what it illustrates

## Scope note

This guide covers the Jules marketing page as captured, including the hero, features, pricing, and footer surfaces. Measurements are practical adaptation targets. Mobile breakpoints, interactive states beyond static view, form components, and the actual application interface are not represented in the supplied material.
