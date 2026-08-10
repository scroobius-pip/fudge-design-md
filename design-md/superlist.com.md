# How superlist.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/superlist.com-design)

Last updated: 2026-08-10

## Captured pages

[![Open Source page with three colored project cards and large split-color headline](https://pin.fontofweb.com/8890?format=jpg)](https://design.withfudge.com/share/pin-8890)

[Open Source page with three colored project cards and large split-color headline](https://design.withfudge.com/share/pin-8890)

[![Pricing page with stylized PRICING headline and three-tier plan cards](https://pin.fontofweb.com/8889?format=jpg)](https://design.withfudge.com/share/pin-8889)

[Pricing page with stylized PRICING headline and three-tier plan cards](https://design.withfudge.com/share/pin-8889)

[![Footer with multi-column navigation and version update card](https://pin.fontofweb.com/8888?format=jpg)](https://design.withfudge.com/share/pin-8888)

[Footer with multi-column navigation and version update card](https://design.withfudge.com/share/pin-8888)

[![Testimonials section with masonry grid and red download button](https://pin.fontofweb.com/8887?format=jpg)](https://design.withfudge.com/share/pin-8887)

[Testimonials section with masonry grid and red download button](https://design.withfudge.com/share/pin-8887)

## Overview

Superlist presents a dark, immersive visual system built around deep navy canvases and bursts of saturated color. The brand identity balances the seriousness of productivity software with playful, expressive moments: oversized headlines that split colors mid-word, stylized hand-drawn graphics, and project cards in vivid lavender, mint, and coral. The interface avoids conventional SaaS sterility by employing dramatic scale contrasts, generous whitespace, and a confident typographic voice. Every page section feels intentionally composed as a distinct visual scene rather than a standard content block. The system serves users who want their tools to feel personal and energizing while maintaining the clarity required for task management.

## Colors

The palette operates on a dark-mode foundation with strategic accent deployment. The canvas colors create atmospheric depth, while accent colors carry semantic and emotional weight across different contexts.

| token | value | use |
|---|---|---|
| canvas | #181824 | Primary page background, deepest layer |
| canvas-deep | #191C2B | Footer and gradient endpoints |
| surface | #1D1F31 | Card backgrounds, elevated panels |
| surface-elevated | #1D2031 | Hover states, active pricing tiers |
| ink | #FFFFFF | Primary text, headlines, body copy |
| ink-muted | #8B8AA0 | Secondary descriptions, metadata |
| ink-dim | #535676 | Tertiary labels, disabled indicators |
| accent-coral | #FF4A36 | Primary CTAs, critical highlights, download buttons |
| accent-orange | #F84F39 | Gradient endpoints, warm emphasis |
| accent-mint | #33B887 | Success states, Super Extensions card |
| accent-green | #2A966F | Secondary success, gradient support |
| accent-lavender | #8F89FA | Super Editor card, pricing headline |
| accent-purple | #6B66DA | Deep purple accents, link hover |
| accent-pink | #F866DB | Decorative highlights, playful moments |
| accent-ice | #E7E7F6 | Subtle backgrounds, code blocks |
| accent-ghost | #F7F7FF | Lightest tint, badge backgrounds |

The dark canvas system uses near-black navy rather than pure black, which prevents harsh contrast while allowing colored elements to vibrate. Gradient accents appear as linear blends from coral to orange, creating warmth against the cool background. Individual project cards receive full-color backgrounds in lavender, mint, or coral, with white text maintaining legibility. The pricing page introduces a subtle surface elevation for cards, with the active tier gaining a slightly lighter background. Text hierarchy relies on opacity and color temperature rather than gray values: pure white for primary content, muted lavender-gray for secondary, and dim slate for tertiary information.

## Typography

The typographic system pairs a distinctive display face with a neutral body face, creating clear role separation. Haffer Xh carries all display and headline responsibilities with its tight spacing and geometric confidence, while Inter handles readable body text at smaller scales.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Haffer Xh | 5.5rem | 600 | 0.95 | -0.02em | Page headlines, hero statements |
| section-display | Haffer Xh | 3rem | 600 | 1.1 | -0.02em | Section titles, pricing headers |
| subhead-display | Haffer Xh | 1.375rem | 400 | 1.5 | -0.02em | Card titles, feature names |
| body | Inter | 1rem | 400 | 1.5 | -0.01em | Paragraphs, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.3 | -0.005em | Captions, metadata, fine print |
| label | Haffer Xh | 1.125rem | 400 | 1.5 | -0.015em | Buttons, navigation labels |
| navigation | Haffer Xh | 1rem | 600 | 1.2 | 0em | Nav items, active states |
| legal | System-Sansserif | 0.75rem | 400 | 1.2 | 0em | Copyright, technical notes |

Haffer Xh appears in Semibold (600) for headlines and Regular (400) for subheads and labels. The 88px hero size creates immediate visual dominance on landing pages, while the 48px section size maintains presence without overwhelming. Inter serves at 16px for body and 14px for supporting text, with negative letter-spacing tuned for each scale. The system also employs Jersey 10 for expressive decorative headlines and Custom Blender for specific body contexts, though these appear as special-purpose treatments rather than core hierarchy. Satoshi Medium appears selectively for emphasis within body contexts.

Verify licensing for Haffer Xh (Displaay, Martin Vácha), Inter, Satoshi (Indian Type Foundry, Deni Anggara), Jersey 10, and Custom Blender before production use.

## Layout

The layout system favors centered, contained compositions with dramatic vertical breathing room. Sections stack with substantial gaps, allowing each to register as a distinct scene. Content typically lives within a centered max-width container with generous horizontal padding.

Page sections employ `12.5rem` vertical padding for major transitions, creating the spacious, unhurried rhythm visible across the homepage and pricing pages. Internal card grids use `2.5rem` gaps, maintaining consistent tactile spacing. The footer breaks from standard rectangular treatment with a pronounced top radius of `12.5rem`, creating an architectural cap that visually separates it from main content.

The pricing page demonstrates a three-column card layout with equal-width tiers, each card receiving internal padding of `2.5rem`. The Open Source page shows a three-card project grid where cards maintain equal height through flex distribution. Testimonials arrange in a masonry-style grid with varied card heights, creating organic visual rhythm against the rigid structure elsewhere.

Navigation sits minimally at the top, often blending into the dark canvas until interaction reveals it. The system avoids sidebar layouts entirely, committing to single-column reading experiences interrupted only by intentional card grids.

## Visual language

Superlist's visual language thrives on contrast between restraint and exuberance. The dark canvas provides constant visual quiet, against which color, scale, and illustration erupt strategically.

Photography and illustration follow a stylized, almost editorial approach. The pricing page features a hand-drawn "PRICING" headline where the letter "I" becomes a dollar sign crossed out in coral, communicating value proposition through visual wit rather than text alone. This illustrative quality extends to small decorative marks within pricing cards—subtle line drawings that humanize the commercial content.

Project cards on the Open Source page demonstrate the color-block strategy: each card receives a full background color (lavender, mint, coral) with white typography, creating immediate identity for each project. The cards share identical structure but diverge completely in color, making scanning effortless.

Shadows remain subtle and functional: `rgba(0, 0, 0, 0.08) 0px 10px 15px` for card elevation, with an inset highlight `rgba(255, 255, 255, 0.45) 0px 0.5px 0px` that creates a faint top-edge glow on interactive elements. Gradients appear as linear blends from coral to orange, used sparingly for primary action buttons and decorative accents.

The overall impression is of a system that takes productivity seriously but refuses corporate blandness—every surface has been considered for emotional as well as functional impact.

## Components

### Primary action button

- **Anatomy**: Text label centered within a fully rounded container
- **Surface**: Gradient background from `accent-orange` to `accent-coral`, or solid `accent-coral`
- **Typography**: `{typography.label}` in white
- **Shape**: Full pill with `9999px` radius
- **Spacing**: `0.875rem` vertical padding, `1.5625rem` horizontal padding
- **Composition**: Centered within its container, often the sole CTA in a section
- **States**: The button gains subtle shadow elevation; inset white highlight creates top-edge luminosity

### Pricing card

- **Anatomy**: Tier name, price with period indicator, yearly equivalent, feature list with checkmarks, decorative line illustration
- **Surface**: `{colors.surface}` background, `{rounded.card}` corners
- **Typography**: Tier name in `{typography.section-display}`, price in `{typography.hero-display}` at reduced scale, features in `{typography.body-small}`
- **Shape**: `1.25rem` radius, no visible border
- **Spacing**: `2.5rem` internal padding, features stacked with `1rem` gaps
- **Composition**: Three cards in equal-width row, middle card slightly elevated or emphasized through subtle background shift
- **Variants**: Free, Basic, Super tiers with identical structure; Super tier receives accent treatment

### Project card

- **Anatomy**: Project name with colored accent word, description paragraph, GitHub link button
- **Surface**: Full background color per project—lavender, mint, or coral variants
- **Typography**: Name in `{typography.section-display}` with second line in accent color matching card background; description in `{typography.body}` in white
- **Shape**: `{rounded.card}` corners
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Equal-height cards in three-column grid, content top-aligned
- **Variants**: Super Editor (lavender), Super Extensions (mint), Super SliverList (coral)

### Testimonial card

- **Anatomy**: Quote text, reviewer name, platform attribution
- **Surface**: `{colors.surface}` or transparent against canvas
- **Typography**: Quote in `{typography.body}`, attribution in `{typography.body-small}` with muted color
- **Shape**: Subtle rounding or fully rectangular
- **Spacing**: `2.5rem` padding, generous internal whitespace
- **Composition**: Masonry grid with varied heights, cards arranged in three columns with staggered vertical positions

### Footer

- **Anatomy**: Multi-column link grid, version update card, copyright line
- **Surface**: `{colors.canvas-deep}` with distinctive `12.5rem` top radius creating inverted arch
- **Typography**: Column headers in `{typography.label}` with colored accents per column; links in `{typography.body-small}` muted; update card headline in `{typography.subhead-display}`
- **Shape**: Architectural top radius, otherwise rectangular
- **Spacing**: `5rem` top padding, `3.125rem` horizontal padding, `2.5rem` bottom padding
- **Composition**: Five-column link grid left-aligned, update card positioned right; copyright centered below

### Navigation

- **Anatomy**: Logo mark, minimal link set, possible CTA
- **Surface**: Transparent over canvas, or `{colors.canvas}` background
- **Typography**: `{typography.navigation}` in white or `{colors.accent-coral}` for active/hover
- **Shape**: No distinct container, fully integrated with page
- **Spacing**: `1.4375rem` vertical padding typical

## Responsive behavior

The design prioritizes desktop presentation with its dramatic scale and multi-column grids. At narrower viewports, the three-column card grids should stack to single columns, preserving internal card padding and typography scale. The hero headline at `5.5rem` requires reduction to prevent overflow; a `3rem` section size serves as the mobile hero anchor.

The footer multi-column grid collapses to two columns then single column, with the update card moving below the link grid. Pricing cards stack vertically with the middle tier maintaining visual prominence through background treatment. Masonry testimonials simplify to a single column with consistent card heights.

Touch targets should maintain minimum `44px` height for all interactive elements. The pill-shaped primary action button adapts naturally to wider touch targets without shape distortion.

## Practical implementation guidance

### Preserve
- The dark navy canvas as the constant background; never introduce light themes without complete palette rederivation
- Haffer Xh's tight negative letter-spacing at display sizes; this character is essential to the brand voice
- Full-color project cards with white text; the color-block identity is central to product recognition
- The footer's architectural top radius; this distinctive shape separates Superlist from generic dark-mode sites
- Gradient coral-to-orange for primary actions; this warmth against cool backgrounds creates signature energy

### Avoid
- Pure black backgrounds; the nuanced navy (`#181824`) prevents harshness and allows color vibrancy
- Generic gray borders for card definition; rely on background color contrast and subtle shadow
- Mixing display type below its intended scale; Haffer Xh below `1.375rem` loses its designed character
- Centering body text beyond single-line captions; the system relies on left-aligned reading rhythms
- Adding decorative elements to the dark canvas without purpose; negative space is an active design element

### Recommended build order
1. Establish the dark canvas background and verify color rendering across displays
2. Implement Haffer Xh with correct weights and spacing; test headline rendering at hero scale
3. Build the primary action button with gradient treatment and inset highlight shadow
4. Create the pricing card component with three-tier structure
5. Implement the project card with full-color background variants
6. Construct the footer with architectural radius and multi-column grid
7. Add testimonial masonry with responsive collapse behavior

### Accessibility
- White text on coral and mint cards requires minimum `4.5:1` contrast verification; the lavender card may need darker text adjustment
- The dark canvas with light text generally exceeds contrast requirements, but `ink-muted` at `#8B8AA0` should be reserved for non-essential information only
- Focus indicators should use `accent-coral` with sufficient offset from dark backgrounds
- The stylized "PRICING" headline with crossed dollar sign should have `aria-label` providing plain text equivalent
- Motion and animation, if added, should respect `prefers-reduced-motion`

## Scope note

This guide covers the marketing site surfaces visible in the supplied homepage, pricing, and open source pages. In-app interface patterns, mobile application layouts, authentication flows, and notification systems are not represented. Iconography and illustration beyond the stylized pricing headline are not documented. Measurements reflect the extracted interface values where available.
