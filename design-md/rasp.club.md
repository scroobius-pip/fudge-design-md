# How rasp.club is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rasp.club-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with serif headline, pill button, and member list sidebar against dark gradient background with blue-green light streaks](https://pin.fontofweb.com/6318?format=jpg)](https://design.withfudge.com/share/pin-6318)

[Hero section with serif headline, pill button, and member list sidebar against dark gradient background with blue-green light streaks](https://design.withfudge.com/share/pin-6318)

[![Navigation bar with logo, member count, and login pill button above the same hero composition](https://pin.fontofweb.com/6317?format=jpg)](https://design.withfudge.com/share/pin-6317)

[Navigation bar with logo, member count, and login pill button above the same hero composition](https://design.withfudge.com/share/pin-6317)

## Overview

Rasp Club presents a dark, immersive landing experience for an exclusive creator community. The design centers on a dramatic full-viewport hero with a moody, atmospheric background that suggests depth through subtle gradient light effects. A refined serif display face delivers the primary message with editorial confidence, while a clean sans-serif handles all functional and interface text. The layout splits attention between a commanding left-aligned headline with a call-to-action and a scrolling member directory sidebar that provides social proof and community activity. The overall impression is sophisticated and selective—premium without pretension, technical without coldness. The visual system relies on restraint: limited color, generous negative space, and precise typographic hierarchy create clarity against the rich dark canvas.

## Colors

The palette is intentionally minimal, built on near-black foundations with white typography and subtle warm-cool atmospheric accents. The dark base allows the member avatars and the ambient background gradient to provide the primary color interest.

| token | value | use |
|---|---|---|
| ink | `#FFFFFF` | Primary text, headlines, navigation labels, member names |
| muted-ink | `#E8E8E8` | Secondary descriptions, status text, inactive states |
| canvas | `#0A0A0A` | Page background, deepest layer behind all content |
| surface | `#141414` | Member card backgrounds, elevated UI panels |
| border | `#2A2A2A` | Subtle dividers, card outlines, hairline separators |
| accent-teal | `#0F4C5C` | Deep atmospheric tone in background gradient |
| accent-cyan | `#00B4D8` | Bright horizontal light streak, ambient glow |

The background gradient layers deep charcoal and near-black with horizontal bands of teal and cyan that create a sense of horizon light—suggesting dawn or dusk over water. This photographic atmosphere sits behind all content at the lowest z-layer. UI elements use transparent white overlays for buttons and borders, allowing the background to show through while maintaining legibility. The member directory cards use solid surface color to ensure readability over the dynamic background. No light mode is present; the entire system assumes dark canvas conditions.

## Typography

Two families drive the typographic system: Instrument Serif for display moments and Geist for everything functional. The contrast between classical serif proportions and modern grotesque clarity defines the brand voice.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 5rem | 400 | 1.1 | -0.02em | Main headline, page title |
| body | Geist | 1rem | 400 | 1.5 | 0em | Descriptions, longer text |
| label | Geist | 0.875rem | 400 | 1.4 | 0em | Button text, member names, metadata |
| navigation | Geist | 0.875rem | 400 | 1 | 0em | Nav links, member count, utility text |

Instrument Serif appears only in the hero headline, where its high contrast and slightly condensed proportions deliver editorial impact at large scale. The negative tracking tightens the display without feeling compressed. Geist handles all interface elements with neutral, highly legible forms. The label and navigation tokens share the same size but differ in line height to accommodate their contexts—navigation sits on a single line, while labels may wrap in constrained card spaces.

Verify licensing for these families before production use. Instrument Serif is designed by Rodrigo Fuenzalida and distributed by Frag Type. Geist is designed by Basementstudio Andrés Briganti Mateo Zaragoza and distributed by Basementstudio Vercel Andrés Briganti Guido Ferreyra Mateo Zaragoza.

## Layout

The page uses a two-region composition: a dominant hero area occupying the left and center, and a fixed-width sidebar on the right containing the member directory.

The hero region places the headline with a soft wrap after "next-" creating a staggered vertical rhythm that draws the eye downward to the call-to-action button. The headline sits in the lower-left quadrant, leaving expansive negative space above and to the right where the atmospheric gradient is most active. This asymmetry creates visual tension and focuses attention on the text.

The sidebar occupies approximately one-third of the viewport width, flush against the right edge. It contains a vertically scrolling list of member cards, each with an avatar, username, activity description, and online status indicator. The sidebar has its own internal hierarchy: a header showing member count and a login action, followed by the scrollable member list. Cards stack with minimal gap, creating a dense social texture that contrasts with the spacious hero.

Navigation spans the full width at the top, with the wordmark "rasp" in a stylized script or custom logotype on the left and utility actions on the right. The nav uses transparent background, allowing the atmospheric gradient to show through.

Spacing follows a clear hierarchy: generous section gaps separate major regions, comfortable padding surrounds interactive elements, and tight internal spacing keeps member cards compact and scannable.

## Visual language

The visual language balances atmospheric depth with functional clarity. The background treatment is the most distinctive element—a smooth, photographic gradient suggesting low light with horizontal color bands that read as reflected light on water or distant horizon glow. This creates emotional resonance without competing with content.

Shape language favors pills and rounded rectangles over sharp corners. Primary actions use full pill shapes with generous horizontal padding. Member cards use moderate rounding that feels friendly but not playful. Avatars are circular, creating rhythm through repetition in the sidebar.

Transparency and layering add subtle depth. Buttons use semi-transparent white backgrounds with slightly more opaque borders, creating a glass-like quality that integrates with the atmospheric background. The member cards use solid dark surfaces to ensure text legibility against the variable gradient.

The overall density is low in the hero and high in the sidebar. This contrast between spacious editorial presentation and dense social information creates a dynamic reading experience. The member avatars provide the primary color accents, with their varied hues punctuating the restrained palette.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Semi-transparent white background (`rgba(255, 255, 255, 0.1)`) with subtle white border (`rgba(255, 255, 255, 0.2)`)
- **Typography**: `{typography.label}` in white
- **Shape**: Full pill with `{rounded.pill}`
- **Spacing**: `0.75rem` vertical padding, `2.5rem` horizontal padding
- **Composition**: Positioned below the hero headline with clear vertical separation
- **Variants**: Default state as described; no visible hover or active states in supplied images

### Navigation button (Log in)

- **Anatomy**: Text label within a compact pill
- **Surface**: Transparent background with visible white border
- **Typography**: `{typography.navigation}` in white
- **Shape**: Full pill with `{rounded.pill}`
- **Spacing**: `0.375rem` vertical padding, `1rem` horizontal padding
- **Composition**: Aligned right in the navigation bar, paired with member count text

### Member card

- **Anatomy**: Circular avatar, username, activity description, online status dot
- **Surface**: `{colors.surface}` solid background
- **Typography**: Username in `{typography.label}` white; description in smaller muted text
- **Shape**: `{rounded.card}` corners
- **Spacing**: `0.625rem` vertical padding, `0.875rem` horizontal padding; internal avatar-to-text gap of approximately `0.75rem`
- **Composition**: Horizontal flex layout with avatar left, text stack right; status dot positioned at avatar bottom-right
- **Variants**: Standard member entry; no visible selected or hover states

### Member directory sidebar

- **Anatomy**: Header with member count and login action, followed by scrollable card list
- **Surface**: No distinct sidebar background—cards float over the page canvas
- **Typography**: Header uses `{typography.navigation}`; cards use `{typography.label}`
- **Spacing**: Header padding matches navigation; card list begins after vertical offset
- **Composition**: Fixed-width right column, vertically scrollable independent of page

### Wordmark

- **Anatomy**: Custom "rasp" logotype in flowing script style
- **Surface**: White on transparent
- **Typography**: Custom letterforms, not matching either text family
- **Composition**: Positioned left in navigation, slightly oversized relative to nav text

## Responsive behavior

The two-column layout with fixed sidebar suggests specific responsive considerations. At narrower viewports, the sidebar should likely collapse or reposition below the hero content to maintain headline prominence. The hero headline's soft line break should become a natural wrap point rather than forced.

The atmospheric background gradient should maintain its aspect ratio and coverage across viewport sizes, potentially requiring adjusted focal points to preserve the horizontal light band composition.

The member directory's scrollable nature makes it well-suited to become a full-width section on mobile, with cards potentially expanding to use available horizontal space.

Touch targets for pill buttons should maintain minimum 44px height even as horizontal padding adjusts. The dense sidebar card list may benefit from increased vertical spacing on touch devices.

## Practical implementation guidance

### Preserve
- The serif/sans-serif pairing and its strict role separation
- The atmospheric dark gradient with horizontal light bands
- Pill-shaped interactive elements with transparent glass-like surfaces
- The asymmetrical hero placement with generous negative space
- Circular avatars with small status indicators in the member list
- The contrast between spacious hero and dense sidebar information

### Avoid
- Adding bright accent colors that compete with the atmospheric background
- Sharp-cornered buttons or cards that break the soft shape language
- Heavy borders or shadows that flatten the layered depth
- Centering the hero headline, which would destroy the compositional tension
- Light backgrounds that would eliminate the atmospheric effect

### Recommended build order
1. Establish the dark canvas and atmospheric gradient background
2. Implement the typographic hierarchy with Instrument Serif headline and Geist body
3. Build the navigation with wordmark and utility actions
4. Create the hero region with headline and primary button
5. Develop the member card component with avatar, text, and status
6. Assemble the sidebar with header and scrollable card list
7. Refine spacing, transparency values, and responsive behavior

### Accessibility
- Ensure white text on dark gradient maintains minimum 4.5:1 contrast; the variable background may require text shadows or subtle dark overlays behind critical text
- The atmospheric background is decorative; do not rely on it for information hierarchy
- Member status indicators use color alone; supplement with shape or label for colorblind users
- Sidebar scroll area should have visible focus indicators for keyboard navigation
- The custom wordmark should include an accessible text alternative

## Scope note

This guide covers the Rasp Club landing page hero and member directory sidebar. Interior pages, authentication flows, member profiles, and interactive states are not represented. Motion, animation, and mobile-specific layouts were not available for analysis. Measurements are practical adaptation targets derived from the visible interface.
