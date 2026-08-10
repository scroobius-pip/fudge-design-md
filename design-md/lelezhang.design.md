# How lelezhang.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lelezhang.design-design)

Last updated: 2026-08-10

## Captured pages

[![Chat explorations article page with sticky table of contents, expressive handwritten headings, and a dense photo grid illustrating interface concepts.](https://pin.fontofweb.com/6396?format=jpg)](https://design.withfudge.com/share/pin-6396)

[Chat explorations article page with sticky table of contents, expressive handwritten headings, and a dense photo grid illustrating interface concepts.](https://design.withfudge.com/share/pin-6396)

[![Minimal footer featuring an oversized calligraphic signature in slate grey with monospace social links and visitor counter.](https://pin.fontofweb.com/5815?format=jpg)](https://design.withfudge.com/share/pin-5815)

[Minimal footer featuring an oversized calligraphic signature in slate grey with monospace social links and visitor counter.](https://design.withfudge.com/share/pin-5815)

[![Playful homepage hero with scattered polaroid-style project cards, a chat widget, and soft gradient background transitioning from white to periwinkle.](https://pin.fontofweb.com/5814?format=jpg)](https://design.withfudge.com/share/pin-5814)

[Playful homepage hero with scattered polaroid-style project cards, a chat widget, and soft gradient background transitioning from white to periwinkle.](https://design.withfudge.com/share/pin-5814)

[![Clean footer variant with large Miss Fajardose script lettering and right-aligned monospace contact links on near-white background.](https://pin.fontofweb.com/4822?format=jpg)](https://design.withfudge.com/share/pin-4822)

[Clean footer variant with large Miss Fajardose script lettering and right-aligned monospace contact links on near-white background.](https://design.withfudge.com/share/pin-4822)

## Overview

This design system captures the visual language of a personal portfolio that balances technical precision with human warmth. The site pairs rigorous Swiss-inspired sans-serif typography with flowing script and handwritten display faces, creating tension between structure and expression. The overall atmosphere is airy and conversational—generous whitespace, soft periwinkle-to-white gradients, and rounded pill-shaped UI elements suggest approachability rather than corporate formality. Content surfaces include long-form writing with sticky navigation, a playful homepage with scattered project cards, and a persistent chat widget that reinforces the designer's interest in conversational interfaces. The system supports both reading-heavy pages and expressive landing surfaces through a restrained palette and flexible component vocabulary.

## Colors

The color system is intentionally minimal, relying on a near-white canvas with deep slate typography and subtle warm accents. This restraint lets photography and project imagery carry chromatic energy while maintaining typographic clarity.

| token | hex | use |
|---|---|---|
| ink | #2F3557 | Primary text, headings, navigation, body copy on light surfaces |
| ink-deep | #041209 | Near-black for maximum emphasis, bold statements, and selected strong text |
| muted-ink | #000000 | Default browser black used sparingly for subtle labels and secondary metadata |
| canvas | #FFFFFF | Page background, card surfaces, chat bubbles, button fills |
| surface | #FBFBFC | Slightly warm off-white for secondary backgrounds, hover states, and subtle elevation |
| border | #C6C7D2 | Cool grey for hairline dividers, inactive states, and subtle structural boundaries |
| accent-warm | #C6C7D2 | Reused border tone for soft highlights and image matting on project cards |

The palette operates in a light mode exclusively across visible surfaces. The homepage gradient shifts from pure white at the top through soft periwinkle-grey toward the bottom, creating atmospheric depth without introducing new hue tokens. Photography appears full-bleed and unfiltered, with the neutral slate ink ensuring text remains legible regardless of image content. No dark mode or inverted surface treatments are present in the current system.

## Typography

Four font families create distinct voice layers: Test Untitled Sans handles all functional text with clean neutrality, Caveat provides expressive handwritten section headings, Compagnon serves monospace-styled labels and decorative text, and Miss Fajardose delivers dramatic calligraphic display moments. Test Untitled Sans is designed by Kris Sowersby of Klim Type Foundry. Compagnon is designed by Juliette Duhe and Lea Pradine, distributed by Velvetyne Type Foundry. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Miss Fajardose | 8rem | 400 | 1 | 0em | Oversized signature lettering in footer |
| section-display | Caveat | 1.75rem | 500 | 1.6 | -0.02em | Article subheadings, expressive labels, handwritten emphasis |
| body | Test Untitled Sans | 1rem | 400 | 1.6 | -0.02em | Paragraphs, navigation, primary reading text |
| body-small | Test Untitled Sans | 0.75rem | 400 | 1.333 | normal | Chat messages, compact UI labels, metadata |
| label | Test Untitled Sans | 0.8rem | 400 | 1.6 | normal | Button text, tags, inline labels |
| navigation | Test Untitled Sans | 1rem | 400 | 1.6 | normal | Header links, site navigation, table of contents |
| mono-label | Compagnon | 1rem | 400 | 1.5 | 0.05em | Footer links, visitor counter, technical asides |

Type scale steps align to a 4px grid. The 1rem base equals 16px, with display sizes extending to 128px for the signature treatment. Negative tracking on body and display styles creates tighter, more intentional word shapes. Caveat's weight 500 distinguishes section headings from its Regular weight used elsewhere. Test Untitled Sans appears in both Regular (400) and Medium (500) for inline emphasis within paragraphs.

## Layout

The layout system favors centered single-column reading with generous margins and asymmetric homepage compositions. Article pages constrain text to a comfortable measure with substantial side padding, while the homepage breaks the grid with rotated and scattered project cards.

Page structure uses a fixed header with navigation pills and location indicator, followed by scrollable content regions. The article template places a sticky table of contents along the left edge on wide viewports, with the main content column offset to the right. This creates a three-zone hierarchy: persistent navigation, contextual section links, and primary reading surface.

Horizontal margins scale with viewport width, reaching approximately 19.5rem on the widest screens for article content. Section spacing is dramatic—article openings begin with 12rem of top padding, establishing breathing room before the first heading. Between-section gaps of 3rem separate content blocks without feeling cramped.

The homepage abandons strict alignment for playful composition. Project cards rotate slightly, overlap in z-space, and cluster around a central chat widget. This scattered arrangement sits atop a full-height gradient background that transitions from white through soft grey-blue. The chat widget anchors the lower center, creating a focal point that invites interaction.

Responsive behavior should maintain the single-column reading experience on narrow viewports, collapsing the sticky table of contents into inline navigation or a collapsible menu. The scattered homepage cards should reflow to a vertical stack with reduced rotation angles to preserve readability without losing character.

## Visual language

The visual language oscillates between two modes: the warm, human, and slightly messy energy of handwriting and scattered cards, and the cool precision of Swiss typography and geometric pills. This duality reflects the portfolio's subject matter—designing chat interfaces that feel organic while functioning reliably.

Rounded corners are systemic and pronounced. Buttons, tags, chat bubbles, and navigation pills all use full pill rounding (9999px), creating a soft, approachable silhouette. Cards use gentler 1rem rounding, enough to feel friendly without becoming childish. The signature display in the footer is unrounded—pure calligraphic line against blank space.

Shadows are minimal to absent. Elevation is suggested through subtle background color shifts (white to off-white) rather than drop shadows. The homepage gradient provides the only environmental depth, a slow atmospheric shift that grounds the floating cards without explicit shadow casting.

Imagery appears in two modes: dense documentary grids on article pages, and polaroid-style framed cards on the homepage. Article grids use tight gutters and uniform thumbnails, creating visual rhythm through repetition. Homepage cards float with white borders and slight rotation, suggesting physical photographs casually arranged on a surface.

The chat widget embodies the system's conceptual core: a rounded-corner input field, a small avatar circle, and a soft grey bubble containing conversational text. This component bridges the visual and thematic concerns of the portfolio.

## Components

### Navigation pill

- **Anatomy**: Text label within a fully rounded container, occasionally paired with a small icon
- **Surface**: Background transparent or filled with surface color when active
- **Typography**: `{typography.navigation}`
- **Shape**: Border radius `{rounded.pill}`, no visible border
- **Spacing**: Padding approximately 0.75rem horizontal, 0.5rem vertical
- **Composition**: Horizontal row in header, left-aligned group with logo centered or right-aligned location indicator
- **Variants**: Default transparent, active/filled with subtle background

### Article table of contents

- **Anatomy**: Vertical list of section links with nested subsections, sticky positioned
- **Surface**: Transparent background, text in muted ink
- **Typography**: `{typography.navigation}` at reduced size for nested items
- **Shape**: No container, no visible border
- **Spacing**: Tight vertical rhythm, approximately 0.75rem between items
- **Composition**: Fixed left column on wide viewports, inline or hidden on narrow
- **Hierarchy**: Parent sections in regular weight, subsections slightly indented or lighter

### Project card

- **Anatomy**: Rectangular image container with optional caption below, white background visible as border/matting
- **Surface**: `{colors.canvas}` background, no shadow
- **Typography**: Caption in `{typography.label}`, dark ink
- **Shape**: `{rounded.card}` corners, slight rotation (-5deg to +5deg) for scattered effect
- **Spacing**: Internal padding approximately 1rem, external margins vary for overlap
- **Composition**: Absolute or relative positioning for scattered layout, z-index layering for depth
- **Variants**: Homepage cards with rotation and overlap; article grid cards without rotation in tight grid

### Chat widget

- **Anatomy**: Avatar circle, message bubble containing text, input field below with send mechanism
- **Surface**: Bubble `{colors.surface}`, input field `{colors.canvas}` or slightly darker
- **Typography**: Message text `{typography.body-small}`, input placeholder same
- **Shape**: Bubble `{rounded.pill}`, avatar circle 50%, input field `{rounded.pill}`
- **Spacing**: Generous internal padding, comfortable gap between avatar and bubble
- **Composition**: Anchored bottom-center on homepage, inline in article contexts
- **States**: Default showing greeting message, input ready for user entry

### Signature display

- **Anatomy**: Single line of calligraphic script, full name as display piece
- **Surface**: Transparent, text in ink color at reduced opacity or lighter tone
- **Typography**: `{typography.hero-display}`
- **Shape**: No container, text flows as organic line
- **Spacing**: Massive vertical padding above and below, centered horizontally
- **Composition**: Dominant footer element, with small monospace links positioned to the right

### Photo grid

- **Anatomy**: Dense matrix of square thumbnail images, uniform sizing
- **Surface**: Images flush to grid, no borders or gaps visible between cells
- **Typography**: Optional caption below grid in `{typography.section-display}`
- **Shape**: Sharp corners on individual images, grid as rectangular block
- **Spacing**: Tight internal packing, generous margin above and below grid
- **Composition**: Centered within content column, full width of reading measure

## Responsive behavior

The system should adapt from scattered homepage compositions to disciplined single-column reading without losing its essential character. On narrow viewports, the sticky article navigation collapses into a horizontal scroll or hamburger menu. Project card rotations reduce to near-zero to prevent awkward cropping, while maintaining their white-border framing. The chat widget remains bottom-anchored but expands to full width minus safe margins.

Typography scales down modestly: the 8rem signature reduces to approximately 4rem on tablet and 2.5rem on mobile, still using Miss Fajardose at display sizes. Body text remains 1rem across all breakpoints for reading comfort. Section spacing halves on mobile, from 12rem to 6rem, preserving hierarchy without excessive scrolling.

The gradient background on the homepage should remain full-height but shift to a more vertical emphasis, ensuring cards remain visible against the light-to-soft-grey transition. Touch targets for pill buttons expand to minimum 44px height for accessibility.

## Practical implementation guidance

### Preserve
- The tension between precise sans-serif and expressive script—this duality is the system's signature
- Generous whitespace around text blocks; the airy quality depends on unconstrained margins
- Pill rounding on all interactive elements; sharp corners should be reserved for image grids only
- The sticky table of contents pattern for long-form reading; it reinforces the site's conversational, navigable ethos

### Avoid
- Adding drop shadows to cards or buttons; elevation should remain implied through color and position
- Introducing additional accent colors beyond the slate and warm grey palette; let photography provide chromatic variety
- Using Miss Fajardose at small sizes; the calligraphic details require display scale to remain legible
- Centering body text; the system relies on left-aligned reading with comfortable measure

### Recommended build order
1. Establish the type scale with Test Untitled Sans as the foundation
2. Implement the color tokens and gradient background system
3. Build the pill button and navigation components
4. Create the article layout with sticky table of contents
5. Add expressive typography layers (Caveat headings, Miss Fajardose signature)
6. Implement the scattered project card composition with rotation and z-layering
7. Integrate the chat widget with message bubbles and input field

### Accessibility
- Ensure the 8rem Miss Fajardose signature has sufficient contrast when used at reduced opacity; test against both white and light grey backgrounds
- Provide focus indicators for pill buttons that do not rely solely on color change; consider outline or subtle background shift
- The scattered card layout should maintain logical tab order despite visual rotation; consider `tabindex` management or alternative list presentation for keyboard users
- Chat widget input requires clear labeling and ARIA live regions for message updates if implemented functionally

## Scope note

This guide covers the homepage, article pages, and footer surfaces visible in the supplied images. Mobile breakpoints, animation, hover states, form validation, and additional project detail pages are not represented.
