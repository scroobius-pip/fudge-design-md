# How theverge.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/theverge.com-design)

Last updated: 2026-08-10

## Captured pages

[![Login modal with white card centered over a collage of colorful tech photography, featuring purple primary action buttons and social sign-in options](https://pin.fontofweb.com/9402?format=jpg)](https://design.withfudge.com/share/pin-9402)

[Login modal with white card centered over a collage of colorful tech photography, featuring purple primary action buttons and social sign-in options](https://design.withfudge.com/share/pin-9402)

[![Article page with light purple-tinted comment card, purple navigation overlay, and bold headline typography in the main content area](https://pin.fontofweb.com/9401?format=jpg)](https://design.withfudge.com/share/pin-9401)

[Article page with light purple-tinted comment card, purple navigation overlay, and bold headline typography in the main content area](https://design.withfudge.com/share/pin-9401)

[![Dark footer with white The Verge wordmark, social media icons in teal circles, and organized link rows on near-black background](https://pin.fontofweb.com/9400?format=jpg)](https://design.withfudge.com/share/pin-9400)

[Dark footer with white The Verge wordmark, social media icons in teal circles, and organized link rows on near-black background](https://design.withfudge.com/share/pin-9400)

[![Streaming section with bright mint-green background, three-column card grid with bold headlines, and right sidebar with timestamped story list](https://pin.fontofweb.com/9399?format=jpg)](https://design.withfudge.com/share/pin-9399)

[Streaming section with bright mint-green background, three-column card grid with bold headlines, and right sidebar with timestamped story list](https://design.withfudge.com/share/pin-9399)

## Overview

The Verge presents a confident, editorial design system built for high-volume tech journalism. The visual language alternates between stark, immersive dark modes and clean, airy light layouts, unified by an electric purple accent that signals interactivity and brand identity. The system prioritizes typographic drama: massive condensed display faces for hero moments, a distinctive geometric sans for navigation and labels, and a refined serif for long-form reading. Photography and illustration sit prominently within rounded containers, while the interface itself maintains sharp, zero-radius buttons and precise hairline borders that contrast with the softer image treatments. The overall effect is authoritative yet playful—serious journalism delivered with contemporary visual energy.

## Colors

The palette operates in two primary modes: a dark immersive mode for the homepage and feature experiences, and a light mode for article reading and utility pages. Both share a vibrant purple action system and a mint accent for special moments.

| token | hex | use |
|---|---|---|
| action | #5200FF | Primary buttons, links, active states, navigation overlay background |
| action-hover | #3D00BF | Button hover, link underlines, pressed states |
| accent-mint | #3CFFD0 | Special section backgrounds, social icon borders, highlight moments |
| accent-teal | #3CFFD0 | Secondary icon color, subtle interactive elements |
| ink | #000000 | Primary text on light backgrounds, borders, dividers |
| ink-secondary | #131313 | Dark mode backgrounds, footer surface |
| ink-tertiary | #2D2D2D | Elevated dark surfaces, card backgrounds in dark mode |
| muted-ink | #4A4A4A | Secondary text, captions, metadata |
| muted-ink-light | #636363 | Tertiary text, disabled states |
| muted-ink-lighter | #949494 | Subtle borders, placeholder text |
| canvas | #FFFFFF | Primary light background, card surfaces, input backgrounds |
| surface | #E9E9E9 | Light mode secondary backgrounds, subtle dividers |
| surface-tint | #EEE6FF | Light purple tint for cards, comment sections, highlighted containers |
| border | #000000 | Hairline dividers, grid lines, structural borders |
| border-light | #E9E9E9 | Subtle separators on white backgrounds |
| border-accent | #5200FF | Focus rings, active input borders, selected states |

The dark mode (homepage, footer) uses ink-secondary as its canvas, with white typography and purple accents. Light mode (articles, login) inverts to white canvas with black ink. The mint accent appears as a full-bleed background color for special editorial sections, creating high-energy moments that break the standard rhythm. Purple dominates interactive elements—buttons, links, and the full-screen navigation overlay—while black provides the structural grid lines that organize content.

## Typography

The type system combines three distinct families: Manuka Condensed for explosive display headlines, Poly Sans (in multiple weights and widths) for UI elements and subheads, and Fk Roman for body text. This creates clear hierarchy through family contrast rather than size alone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Manuka Condensed | 5.625rem | 900 | 0.8 | normal | Homepage hero headlines, major feature titles |
| section-display | Poly Sans-Bulky | 1.25rem | 700 | 1 | normal | Section headers, category labels |
| headline-large | Poly Sans-Bulky | 1.75rem | 700 | 1 | normal | Article headlines, major card titles |
| headline-medium | Poly Sans-Bulky | 1.125rem | 700 | 1.1 | normal | Subheads, secondary headlines |
| headline-small | Poly Sans-Bulky | 1rem | 700 | 1 | normal | Compact headlines, list items |
| body | Fk Roman | 1rem | 400 | 1.3 | -0.01em | Article body text, descriptions |
| body-large | Fk Roman | 1.5rem | 400 | 1.2 | normal | Lead paragraphs, featured excerpts |
| label | Poly Sans-Median Mono | 0.75rem | 500 | 1.2 | 0.12em | Timestamps, categories, metadata |
| label-small | Poly Sans-Neutral Mono | 0.75rem | 400 | 1.18 | 0.1em | Fine labels, tag text |
| navigation | Poly Sans-Slim | 1.25rem | 300 | 1.2 | normal | Navigation items, menu labels |
| button-primary | Poly Sans-Median Mono | 0.75rem | 500 | 1.2 | 0.12em | Primary button text, CTAs |
| button-large | Poly Sans-Neutral | 2rem | 400 | 1.1 | 0.01em | Navigation overlay items, large menu links |
| caption | Poly Sans-Neutral | 0.75rem | 400 | 1.2 | 0.1em | Image captions, fine print |

Manuka Condensed, designed by Kris Sowersby at Klim Type Foundry, delivers the compressed, high-impact hero display. Poly Sans, designed by Milos Mitrovic at Gradient, provides the extensive sans family with Bulky, Median, Neutral, and Slim weights plus Mono variants for labels. Fk Roman, designed by Florian Karsten, supplies the editorial body text with subtle character. The design facts also list Applesystem and System-Uisansserif as detected font families in the interface; these appear to serve as system-level fallbacks rather than primary design voices. Verify licensing for these families before production use.

## Layout

The layout system uses a centered content column with generous margins that scale with viewport width. Article pages center the main content with approximately 18.75rem side margins on large screens, while the homepage employs a more complex asymmetric grid with offset elements and overlapping layers.

The base spacing unit is 0.125rem (2px), with all measurements building from this foundation. Content sections stack with 2.5rem to 3.75rem vertical padding, while major structural gaps reach 7.5rem or 8.125rem for dramatic separation between homepage features. Horizontal padding for contained elements typically uses 1.25rem.

Grid systems vary by context: article pages use a single centered column with occasional breakout elements; the homepage employs multi-column grids with 1.25rem to 1.5rem gutters; card grids use three-column layouts with consistent 1.25rem gaps. The navigation overlay fills the viewport with a full-bleed purple panel.

Margins create intentional asymmetry on the homepage—elements offset by 2.5rem to 7.5rem from expected positions, creating dynamic tension. The footer uses a contained width with centered alignment, contrasting with the more free-form homepage structure.

## Visual language

The visual identity balances editorial seriousness with tech-culture playfulness. Photography receives prominent treatment within rounded 1.25rem containers, while the interface surrounding it maintains sharp corners and precise geometry. This tension between soft image presentation and hard UI edges defines the system's character.

Color deployment follows a mode-based strategy: dark immersive experiences for brand moments and browsing, light functional spaces for reading and task completion. The mint accent appears strategically as full-bleed section backgrounds, creating memorable visual landmarks without overwhelming the purple action system.

Typography creates hierarchy through family contrast: the extreme compression of Manuka Condensed against the neutral geometry of Poly Sans and the classical warmth of Fk Roman. Mono variants for labels add technical precision that references the publication's subject matter.

Shadows are minimal and functional—subtle inset shadows for link underlines, soft drop shadows for elevated cards. The primary depth cue comes from color contrast rather than shadow. Borders are predominantly 1px hairlines, with black providing structural definition and purple indicating interactivity.

Iconography appears as simple line icons within circular containers for social links, maintaining the geometric precision of the type system. The Verge wordmark uses a custom logotype with distinctive angular cuts that echo the sharp interface corners.

## Components

### Primary button
- **Anatomy**: Text label with optional icon, full-width or inline
- **Surface**: Solid purple (#5200FF) background with white text
- **Typography**: Poly Sans-Median Mono at 0.75rem, uppercase with 0.12em letter-spacing
- **Shape**: Zero border-radius, sharp rectangular corners
- **Spacing**: 0.625rem vertical padding, 1.5rem horizontal padding
- **Composition**: Centered text, icons positioned with 0.5rem gap
- **Variants**: Full-width variant for mobile; icon-only variant for toolbars

### Secondary button
- **Anatomy**: Text label with optional icon, outlined style
- **Surface**: White background with 1px black border, black text
- **Typography**: Same as primary button
- **Shape**: Zero border-radius
- **Spacing**: Same as primary button
- **Composition**: Centered text, often used in social sign-in stacks with brand icons

### Input field
- **Anatomy**: Single-line text input with label above
- **Surface**: White background with 1px purple border when focused, black border default
- **Typography**: Poly Sans-Neutral at 1rem for input text; Poly Sans-Neutral at 0.875rem for labels with 0.02em letter-spacing
- **Shape**: 0.125rem border-radius (slightly rounded corners)
- **Spacing**: 0.5rem vertical padding, 0.75rem horizontal padding; 0.5rem gap between label and input
- **Composition**: Label stacked above input, full-width within container

### Card
- **Anatomy**: Image container, headline, optional metadata row
- **Surface**: Light purple tint (#EEE6FF) background for featured cards; white for standard cards
- **Typography**: Poly Sans-Bulky headline at 1.125rem; Poly Sans-Neutral caption at 0.6875rem
- **Shape**: 1.25rem border-radius for image containers and card backgrounds
- **Spacing**: 1rem top padding, 1.25rem horizontal padding; 0.625rem gap between image and text
- **Composition**: Image above, text below; metadata row with timestamp and category tags

### Navigation overlay
- **Anatomy**: Full-screen panel with category list, search, and utility links
- **Surface**: Solid purple (#5200FF) background with white text
- **Typography**: Poly Sans-Neutral at 2rem for category items; Poly Sans-Slim at 1.1875rem for secondary items
- **Shape**: Full-bleed, no border-radius
- **Spacing**: 1.5rem padding for header area; 1rem vertical spacing between category items
- **Composition**: Search at top, category list below, utility links at bottom; plus icons indicating expandable sections

### Footer
- **Anatomy**: Logo, social icon row, link columns, legal text
- **Surface**: Near-black (#131313) background with white text and teal accent icons
- **Typography**: Poly Sans-Median at 1rem for primary links; Poly Sans-Neutral at 0.8125rem for secondary links; Poly Sans-Neutral at 0.75rem for legal copy with 0.045em letter-spacing
- **Shape**: Full-width, no border-radius; social icons in 50% radius circles with 1px teal border
- **Spacing**: 2.5rem top padding, 3.125rem bottom padding; 1.25rem horizontal padding; 0.625rem gap between social icons
- **Composition**: Logo left-aligned, social icons right-aligned; link rows stacked with 0.75rem vertical spacing

### Comment card
- **Anatomy**: Author avatar, headline, body text, topic tags, action buttons
- **Surface**: Light purple tint (#EEE6FF) background with subtle border
- **Typography**: Poly Sans-Bulky at 1rem for author name; Fk Roman at 1rem for body; Poly Sans-Median Mono at 0.75rem for tags
- **Shape**: 1.25rem border-radius
- **Spacing**: 1rem padding; 1rem gap between elements
- **Composition**: Avatar and name in header row; body text below; tags as inline pill buttons; action bar at bottom

## Responsive behavior

The system adapts through margin reduction and stack reordering rather than breakpoint-specific component variants. On large viewports, article content maintains generous 18.75rem side margins; these compress to approximately 6.25rem on medium screens and 1.25rem on small screens.

The homepage grid collapses from three columns to two, then to a single column with full-bleed images. Hero headlines scale down from 5.625rem to approximately 3.5rem on medium screens and 2.5rem on small screens, maintaining line-height ratios.

The navigation overlay remains full-screen across all sizes, with category text scaling down slightly on smaller viewports. Footer links reorganize from horizontal rows to stacked columns on narrow screens.

Card components maintain their 1.25rem border-radius across sizes, with internal padding reducing from 1.25rem to 1rem on small screens. Image aspect ratios shift from landscape to square to portrait depending on grid context.

Typography remains largely consistent, with only the hero display and button-large tokens scaling significantly. Body text stays at 1rem across all breakpoints for readability.

## Practical implementation guidance

### Preserve
- The sharp zero-radius buttons against rounded image containers—this tension is central to the visual identity
- The purple action color for all interactive elements; do not introduce additional button colors
- The three-family typographic hierarchy: Manuka for display, Poly Sans for UI, Fk Roman for body
- The mono variant labels with explicit letter-spacing for metadata and categories
- The dark/light mode contrast between homepage and article experiences

### Avoid
- Rounding buttons or adding shadows to primary actions; the flat, sharp treatment is intentional
- Using the mint accent for standard UI elements; reserve it for special editorial moments
- Mixing Poly Sans weights within the same text block; use family contrast for hierarchy instead
- Generic gray backgrounds; use the specific surface tokens provided
- Underlining links outside of the inset shadow treatment used in articles

### Recommended build order
1. Establish the color tokens and mode-switching logic (dark/light/mint)
2. Implement the typography scale with all three families and their specific weights
3. Build the button components (primary sharp, secondary outlined, both zero-radius)
4. Create the card component with rounded image containers and consistent padding
5. Implement the navigation overlay with full-screen purple panel
6. Build the footer with dark surface and teal-accented social icons
7. Add the input field with its subtle rounding and purple focus state
8. Implement layout grids for homepage and article contexts

### Accessibility
- Ensure purple action elements meet contrast ratios against both white and dark backgrounds; the #5200FF purple may need adjustment for small text
- Provide visible focus indicators using the border-accent token with 2px width
- Maintain the 1rem minimum body text size; the 0.6875rem caption size should only be used for non-critical metadata
- The Manuka Condensed hero display at tight line-height (0.8) should be tested with actual content to prevent overlap at large sizes
- Navigation overlay requires keyboard trap management and clear close controls
- Social icon buttons need accessible labels beyond visual icons

## Scope note

This guide covers the homepage, article page, login modal, and footer as visible in the supplied images. Mobile-specific layouts, hover and focus states beyond the visible defaults, loading skeletons, video player components, and the full search experience are not represented. The comment system threading and user badges are partially visible but not fully documented. Measurements are derived from the desktop interface at standard resolution. Applesystem and System-Uisansserif appear in the detected font stack as system fallbacks but are not used as primary design voices in the visible components.
