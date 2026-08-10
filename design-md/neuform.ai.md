# How neuform.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/neuform.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with pixel-art 'DREAMCOMPOSER' title, dark sidebar navigation, and white idea cards on deep maroon canvas](https://pin.fontofweb.com/8825?format=jpg)](https://design.withfudge.com/share/pin-8825)

[Homepage hero with pixel-art 'DREAMCOMPOSER' title, dark sidebar navigation, and white idea cards on deep maroon canvas](https://design.withfudge.com/share/pin-8825)

[![Pricing modal overlay with four-tier runway plans, purple gradient Pro card, and detailed feature bullet lists on dark background](https://pin.fontofweb.com/8822?format=jpg)](https://design.withfudge.com/share/pin-8822)

[Pricing modal overlay with four-tier runway plans, purple gradient Pro card, and detailed feature bullet lists on dark background](https://design.withfudge.com/share/pin-8822)

[![Starter boost banner with yellow gradient, prompt input field, model selector, and file upload area in dark interface](https://pin.fontofweb.com/8821?format=jpg)](https://design.withfudge.com/share/pin-8821)

[Starter boost banner with yellow gradient, prompt input field, model selector, and file upload area in dark interface](https://design.withfudge.com/share/pin-8821)

[![Community dashboard with tagged project grid, creator leaderboard sidebar, and floating prompt composer overlay](https://pin.fontofweb.com/8820?format=jpg)](https://design.withfudge.com/share/pin-8820)

[Community dashboard with tagged project grid, creator leaderboard sidebar, and floating prompt composer overlay](https://design.withfudge.com/share/pin-8820)

## Overview

Neuform presents a dark-first creative platform that merges technical precision with expressive, almost playful visual moments. The interface operates primarily in deep space blacks and charcoal surfaces, punctuated by vibrant accent gradients in purple, blue, and warm gold. The system serves dual purposes: a community-driven showcase for AI-generated design work and a functional prompt-to-interface generation tool. Visual hierarchy relies on dramatic scale contrasts—large DM Sans display type against compact monospace labels—while maintaining information density through careful spacing and subtle borders. The platform's personality emerges through unexpected elements like pixel-art typography, glowing gradient cards, and glassmorphic overlays that float above the dark canvas. Navigation remains persistent and unobtrusive, allowing content to dominate the viewport while keeping tools accessible.

## Colors

The color system anchors on absolute darkness, building upward through translucent layers and selective chromatic accents.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background, deepest layer |
| surface | #0A0C12 | Secondary backgrounds, sidebar panels |
| surface-elevated | #14181F | Card backgrounds, elevated containers |
| ink | #E7E7E7 | Primary text, headings, active states |
| ink-secondary | #9392A9 | Body text, descriptions, secondary content |
| ink-muted | #747885 | Tertiary text, metadata, disabled hints |
| accent-purple | #5865F2 | Primary action gradient start, Pro tier highlight |
| accent-purple-bright | #626FFF | Primary action gradient end, hover states |
| accent-blue | #5381D6 | Secondary gradient, information accents |
| accent-warm | #BF835A | Warm accent, pixel art elements, special states |
| accent-gold | #FFCB53 | Starter boost banner, promotional highlights |
| accent-gold-soft | #FFE27A | Gradient partner for gold, subtle glows |
| border-subtle | #1D1D20 | Hairline dividers, card outlines |
| border-light | #FFFFFF | High-contrast borders, focus rings |
| success | #4B4B4B | Neutral confirmation, system states |
| system-orange | #D48C5B | System indicators, telemetry data |

The interface employs a near-black canvas universally, with content surfacing through layered translucency. Gradients function as both decorative and functional elements: the purple linear gradient from #626FFF to #5461EC defines primary actions, while a warm gold gradient signals promotional or onboarding contexts. Glassmorphic surfaces use dark semi-transparent fills with subtle white inner shadows to create depth without departing from the dark aesthetic. The pixel-art homepage introduces a distinct maroon-brown photographic palette that exists as content imagery rather than interface chrome.

## Typography

The type system combines geometric sans-serif display faces with utilitarian body fonts and technical monospace accents.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | DM Sans | 3.35rem | 500 | 1.02 | -0.07em | Page titles, major headlines |
| section-display | DM Sans | 3.2rem | 500 | 1.05 | -0.06em | Section headers, pricing tiers |
| body | Inter | 1rem | 400 | 1.5 | 0em | Primary body text, descriptions |
| body-small | Inter | 0.84rem | 400 | 1.65 | 0em | Secondary descriptions, metadata |
| label | IBM Plex Mono | 0.6rem | 500 | 1.2 | 0.12em | Category tags, status indicators |
| navigation | Segoe UI | 1rem | 400 | 1.2 | 0em | Sidebar links, top-level nav |
| button | Arial | 0.84rem | 400 | 1.2 | 0em | Button labels, action text |
| mono-data | IBM Plex Mono | 0.6rem | 400 | 1.5 | 0em | Data values, technical readouts |

DM Sans serves as the expressive voice for large display moments, with tight negative tracking creating a compressed, impactful presence. Inter handles readable body copy at small sizes with comfortable line height. IBM Plex Mono provides technical credibility for labels, data, and system indicators. Segoe UI anchors navigation with familiar system-font neutrality. Arial appears in button contexts for compact, utilitarian action labels. The pixel-art homepage title uses a distinct bitmap face that exists outside this system as expressive content.

The design facts also record System-UI monospace and System-UI sans-serif as detected families in telemetry and dashboard contexts. These appear to be platform-rendered system fonts rather than loaded typefaces, used for data readouts and interface chrome at small sizes.

DM Sans is designed by Colophon Foundry and Jonny Pinhorn. IBM Plex Mono is designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen, available from Bold Monday. Verify licensing for these families before production use.

## Layout

The interface follows a persistent sidebar-plus-canvas architecture. The left sidebar occupies a fixed narrow column containing navigation, search, project organization, and social features like creator leaderboards. The main canvas expands to fill remaining viewport width, scrolling independently when content overflows.

Content density varies dramatically by context. The community dashboard presents a masonry or grid of project cards with generous gaps, while the prompt composer interface compresses tools into a compact floating bar. Modal overlays center within the viewport with backdrop blur, dimming the underlying canvas without fully obscuring it.

Spacing operates on a 2px base unit (0.125rem), with major structural gaps at 24px (1.5rem) and 32px (2rem). Cards receive 24px internal padding. Section breaks use 96px (6rem) vertical separation on marketing surfaces, compressing to 48px (3rem) in tool interfaces.

The prompt composer represents a distinct layout pattern: a floating horizontal bar anchored near the bottom of the viewport, containing model selection, input field, action buttons, and file attachments. This element persists across context switches, maintaining user orientation during navigation.

Grid systems adapt to content type. Project showcases use irregular masonry layouts that celebrate individual work proportions, while pricing and settings pages enforce strict columnar alignment for scannable comparison.

## Visual language

Neuform's visual identity balances technical credibility with creative exuberance. The dark canvas creates immediate immersion, suggesting a focused workspace removed from typical bright SaaS conventions. Depth emerges through layered translucency rather than drop shadows alone—glassmorphic panels float with subtle inner glows and edge highlights.

The pixel-art homepage title "DREAMCOMPOSER" introduces deliberate retro-computing texture against the otherwise sleek interface, establishing that this platform values creative expression over corporate uniformity. This expressive mode contrasts with the precision of data-dense dashboard views where monospace labels and tight spacing dominate.

Gradient accents carry semantic weight. Purple gradients signal primary progression and paid tiers. Gold gradients indicate onboarding assistance and promotional contexts. Blue gradients appear in information surfaces and secondary actions. The gradients typically run at slight angles (135–155 degrees) rather than pure vertical, adding subtle dynamism.

Imagery and generated previews sit within rounded containers, often with slight inner shadows that lift them from their backgrounds. The community grid shows work at actual proportions, avoiding forced cropping that would misrepresent design output.

Interactive elements provide immediate visual feedback through color inversion, scale shifts, or glow intensification. The prompt composer button shifts from dark to bright fill on hover, while pricing tier cards elevate with enhanced shadow depth.

## Components

### Sidebar Navigation

- Anatomy: Vertical stack with logo mark, primary links (Home, Community), search field, project filters (All, Favorites, Hidden), project list, and creator leaderboard
- Surface: Background {colors.surface}, border-right {colors.border-subtle}
- Typography: Navigation links use {typography.navigation}, section headers use {typography.label} in uppercase
- Spacing: 16px horizontal padding, 8px vertical gap between items
- Composition: Fixed width, full viewport height, scrollable independently

### Project Card

- Anatomy: Preview thumbnail, title, creator attribution, tag chips, interaction metrics
- Surface: Background {colors.surface-elevated}, border {colors.border-subtle} 1px solid, radius {rounded.card}
- Typography: Title uses {typography.body} at {colors.ink}, metadata uses {typography.body-small} at {colors.ink-muted}
- Spacing: 24px padding, 16px gap between elements
- Composition: Aspect ratio preserved from source, thumbnail fills top portion, text stacks below

### Prompt Composer Bar

- Anatomy: Model selector dropdown, text input field, tool buttons (globe, clock, upload, draw, layout, code), primary Create button, file attachment area
- Surface: Background {colors.surface-elevated} with subtle transparency, border {colors.border-subtle}
- Typography: Input uses {typography.body}, button labels use {typography.button}
- Shape: Radius {rounded.panel}, full-width with internal horizontal flex
- Spacing: 10px vertical padding, 8px horizontal gaps between tools
- Variants: Expanded state shows file upload area with attachment chips; collapsed state hides secondary tools

### Pricing Tier Card

- Anatomy: Tier label, price display, description, feature bullet list, CTA button
- Surface: Default uses {colors.surface-elevated}; Pro tier uses linear gradient from {colors.accent-purple-bright} to {colors.accent-purple}
- Typography: Price uses {typography.section-display}, features use {typography.body-small}
- Shape: Radius {rounded.card}, consistent internal padding
- Spacing: 32px padding, 16px between price and features
- Hierarchy: Pro tier elevates with glow shadow and distinct color treatment

### Starter Boost Banner

- Anatomy: Dismissible horizontal bar with icon, headline text, and descriptive subtext
- Surface: Linear gradient from {colors.accent-gold-soft} to {colors.accent-gold}, text in dark inverse
- Typography: Headline uses {typography.label} uppercase, body uses compact sans
- Shape: Radius {rounded.pill} or full rounded ends
- Spacing: 12px vertical, 16px horizontal, floating above composer bar

### Button

- Anatomy: Text label, optional icon prefix, optional badge
- Surface: Primary uses gradient fill; secondary uses transparent with {colors.border-light} 1px; ghost uses no border
- Typography: {typography.button}
- Shape: Default radius {rounded.button}; pill variant uses {rounded.pill}
- Spacing: {spacing.button-padding}
- States: Hover brightens gradient or inverts border; active scales to 0.98

### Modal Overlay

- Anatomy: Centered panel, close button top-right, scrollable content area
- Surface: Semi-transparent dark fill with backdrop blur, {colors.canvas} scrim at 60% opacity
- Shape: Radius {rounded.card}
- Spacing: 32px padding, max-width 640px centered
- Shadow: 0 26px 72px rgba(0,0,0,0.36)

## Responsive behavior

The sidebar collapses to a minimal icon rail below 1024px viewport width, expanding on hover or tap. The prompt composer bar remains fixed-position across all breakpoints, though tool buttons may collapse into a single overflow menu on narrow viewports.

Project grids transition from multi-column masonry to single-column stacked cards below 768px. Pricing tier cards stack vertically with the Pro tier maintaining its elevated visual treatment at full width.

Modal overlays transition to bottom-sheet presentation on mobile, anchoring to the viewport bottom with drag-to-dismiss gesture support. The glassmorphic background simplifies to solid dark fill on devices with reduced transparency support.

Typography scales down proportionally: hero-display reduces to 2.5rem, section-display to 2rem on narrow viewports. Line height increases slightly for touch readability.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the universal foundation; never introduce light mode without complete recoloring
- DM Sans display type with aggressive negative tracking for headlines; this compression is signature to the brand voice
- Glassmorphic surfaces with both inner highlight and outer shadow for authentic depth
- The prompt composer's persistent presence; it anchors user orientation across all contexts
- Gradient angle consistency at approximately 145 degrees for primary actions

### Avoid
- Pure white backgrounds in any context; even elevated surfaces remain deeply dark
- Drop shadows without accompanying inner highlights; the depth system relies on both
- Generic button styling; the gradient-filled primary action is a recognizable brand element
- Crowding the sidebar with excessive navigation levels; keep primary paths visible and secondary paths nested

### Recommended Build Order
1. Establish the dark canvas and sidebar shell with navigation typography
2. Implement the prompt composer bar with glassmorphic treatment
3. Build project card component with consistent spacing and hover states
4. Create button system with gradient, bordered, and ghost variants
5. Add modal overlay with backdrop blur and centered panel
6. Implement pricing tier cards with gradient Pro variant
7. Polish with starter boost banner and micro-interactions

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text against dark surfaces; {colors.ink-secondary} may need adjustment for small sizes
- Ensure gradient text or buttons have sufficient perceived lightness; avoid relying solely on hue for state differentiation
- Provide focus indicators that exceed default browser styles; use {colors.border-light} 2px solid for keyboard navigation
- Respect prefers-reduced-motion by disabling backdrop blur and gradient animations
- Ensure the persistent composer bar does not obscure focused elements; manage z-index and scroll padding

## Scope note

This guide covers the community dashboard, project showcase, pricing interface, and prompt composer as visible on desktop. Mobile layouts, animation specifications, form validation states, and user account settings are not represented in the supplied material. The pixel-art homepage treatment exists as a distinct visual mode with its own color palette that may require separate documentation. System-UI monospace and System-UI sans-serif appear as platform-rendered system fonts in telemetry contexts rather than loaded typefaces.
