# How mew.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mew.xyz-design)

Last updated: 2026-08-10

## Captured pages

[![Navigation bar with MEW mascot, social icons, and MEDIA/MEW TALES/CREATIVE section headers on dark canvas with red accents](https://pin.fontofweb.com/278?format=jpg)](https://design.withfudge.com/share/pin-278)

[Navigation bar with MEW mascot, social icons, and MEDIA/MEW TALES/CREATIVE section headers on dark canvas with red accents](https://design.withfudge.com/share/pin-278)

[![Hero banner with bold black typography on saturated red background and white cat mascot with green backpack](https://pin.fontofweb.com/277?format=jpg)](https://design.withfudge.com/share/pin-277)

[Hero banner with bold black typography on saturated red background and white cat mascot with green backpack](https://design.withfudge.com/share/pin-277)

[![Full hero section with scrolling red ticker, partner logo grid with red icons on dark cells, and social action buttons](https://pin.fontofweb.com/276?format=jpg)](https://design.withfudge.com/share/pin-276)

[Full hero section with scrolling red ticker, partner logo grid with red icons on dark cells, and social action buttons](https://design.withfudge.com/share/pin-276)

[![Dramatic typographic statement with oversized red MEW lettering and spray-painted white M accent on dark background](https://pin.fontofweb.com/275?format=jpg)](https://design.withfudge.com/share/pin-275)

[Dramatic typographic statement with oversized red MEW lettering and spray-painted white M accent on dark background](https://design.withfudge.com/share/pin-275)

## Overview

The MEW visual system is built for maximum impact and immediate recognition. It draws from street art, punk zines, and meme culture to create a confrontational, anti-establishment tone. The design rejects subtlety in favor of raw contrast: saturated red against near-black, massive geometric lettering, and a mascot that channels attitude over cuteness. Every element competes for attention and wins through sheer visual force.

The system operates in two dominant modes. The first is the red field: full-bleed scarlet backgrounds with black typography that reads like a protest poster. The second is the dark canvas: deep navy-black surfaces where white and red elements punch through with equal aggression. A third, more playful mode appears through the spray-painted accent typography, which introduces organic texture and human imperfection into an otherwise mechanically precise layout.

Navigation and section structure are deliberately heavy. Headers are not whispered suggestions but shouted declarations. The MEW wordmark functions as both identity and architecture, with letterforms large enough to serve as background texture. Social proof and ecosystem partners are displayed in a rigid grid that resembles a stock ticker or scoreboard, reinforcing the project's competitive positioning against established players.

## Colors

| token | value | use |
|---|---|---|
| action | #FF0000 | Primary brand red for backgrounds, emphasis, borders, and the ticker band |
| ink | #000000 | Typography on red fields, dark backgrounds, and icon fills |
| canvas | #0A0A0F | Primary dark surface for sections, navigation, and partner grid |
| surface | #111118 | Slightly elevated dark panel for cards and contained areas |
| accent-spray | #FFFFFF | Typography on dark canvas, social button fills, and spray-paint accents |
| border | #FF0000 | Structural dividers between sections and grid cells |

The color strategy is intentionally reductive. Red and black carry almost all semantic weight, with white reserved for reversal moments and the spray-painted accent. The red is fully saturated, avoiding orange or blue shifts that would soften its aggression. The dark canvas is not pure black but carries a subtle blue undertone that prevents the flatness of #000000 while maintaining depth.

Image photography and mascot illustrations introduce secondary palette moments—greens in the backpack, pinks in the ears—but these remain content-driven rather than systemic. No gradient or shadow tokens are present; the design achieves hierarchy through scale and color blocking alone.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Heavitas | 6rem | 400 | 0.9 | -0.02em | Massive statement headlines and the MEW wordmark |
| section-display | Heavitas | 4rem | 400 | 1 | -0.01em | Section headers like MEDIA, MEW TALES, CREATIVE |
| body | Heavitas | 1.5rem | 400 | 1.4 | 0em | Descriptive text and manifesto statements |
| label | Heavitas | 1rem | 400 | 1.2 | 0.05em | Ticker text, navigation labels, and small caps |
| spray-accent | Spray Letters | 3rem | 400 | 1.1 | 0em | Painted accent letters and disruptive typographic moments |

Heavitas drives the entire typographic voice. It is a heavy, geometric sans-serif with squared terminals and minimal contrast, built for billboard-scale impact. At display sizes, its tight apertures and dense forms create a wall of texture that reads as pattern as much as language. The single weight keeps the system brutally simple—there is no lighter voice for secondary information, only smaller sizes.

Spray Letters, designed by Woodcutter Manero, provides the only typographic contrast. Its rough, aerosol edges and irregular baseline introduce deliberate imperfection. It appears sparingly, typically as a single painted letter that disrupts the clean geometry of Heavitas. Verify licensing for these families before production use.

## Layout

The page structure follows a stacked, full-width rhythm with no sidebar or contained center column. Each section bleeds edge to edge, separated by heavy horizontal rules in red. The vertical pacing alternates between explosive red fields and grounding dark canvas areas, creating a breathing pattern that prevents visual exhaustion.

The hero zone occupies the full viewport width and substantial height, dominated by the mascot illustration positioned to the right and massive left-aligned typography. Below this, a continuous ticker band scrolls horizontally with repeating taglines. The partner grid follows immediately: seven equal columns with vertical red dividers, each cell containing a single icon or logo mark in red against the dark canvas.

Section headers like MEDIA, MEW TALES, and CREATIVE function as navigational anchors. They appear as full-width bands with generous vertical padding, white text on dark background, and red borders above and below. The small downward arrow appended to some headers suggests expandable or scrollable content below.

Spacing follows a 4px base unit. Major section breaks use 6rem (96px), while component internal padding uses 1.5rem (24px). The tight packing of elements within sections—buttons clustered directly below text, icons touching grid borders—reinforces the aggressive, no-waste attitude.

## Visual language

The mascot is central to the visual identity: a white cat with pink inner ears, heavy-lidded eyes, and a smug expression that conveys dismissive confidence. It wears a bright green backpack, the only sustained non-palette color in the system. The character is rendered in clean vector illustration with bold outlines, positioned as a peer to the typography rather than decoration.

Iconography throughout uses simple geometric marks: circles, arrows, and abstract symbols. Partner logos are reduced to single-color red versions, stripped of their native palettes to maintain system coherence. Social platform icons appear in rounded square buttons with light fills and dark symbols, creating a softer moment within the otherwise harsh environment.

The spray-paint effect is the system's most distinctive texture. It appears as white paint drips and overspray, typically overlaying a single letter in a headline. This introduces organic randomness and street credibility without undermining the underlying grid structure. The effect works because it is rare: one painted letter among hundreds of clean ones.

## Components

**Hero Banner**
- Anatomy: Full-width red background, left-aligned black typography in two to three lines, mascot illustration positioned right, social action buttons below text
- Surface: action (#FF0000) background with ink (#000000) text
- Typography: hero-display for manifesto statements, body for secondary lines
- Shape: No border radius; sharp rectangular field
- Spacing: Generous internal padding, approximately 4rem top and 3rem sides
- Composition: Asymmetric balance with visual weight shifted left, mascot as counterweight

**Social Button Cluster**
- Anatomy: Horizontal row of four square buttons with rounded corners, each containing a platform icon
- Surface: accent-spray (#FFFFFF) fill with ink (#000000) icon
- Typography: No text; icon-only
- Shape: icon-button radius (0.5rem)
- Spacing: Tight 0.5rem gap between buttons
- Composition: Left-aligned below hero text, forming a single visual unit

**Scrolling Ticker**
- Anatomy: Full-width band with horizontally scrolling text, repeating taglines separated by bullet markers
- Surface: ink (#000000) background with action (#FF0000) text
- Typography: label token, all uppercase
- Shape: No radius; full bleed
- Spacing: Compact vertical padding, approximately 0.75rem
- Composition: Continuous loop, no start or end visible

**Partner Logo Grid**
- Anatomy: Seven equal columns with vertical red dividers, each cell containing a centered icon
- Surface: canvas (#0A0A0F) background with action (#FF0000) icon fills
- Typography: No text; icon-only
- Shape: No cell radius; sharp grid
- Spacing: 2rem internal cell padding
- Composition: Rigid horizontal band, icons scaled to fill cell width proportionally

**Section Header**
- Anatomy: Full-width band with large white text, optional downward arrow suffix
- Surface: canvas (#0A0A0F) background with accent-spray (#FFFFFF) text
- Typography: section-display token
- Shape: No radius; bordered by 2px solid red lines above and below
- Spacing: 1.5rem vertical padding, 2rem horizontal padding
- Composition: Left-aligned text, arrow icon as inline suffix

**Navigation Bar**
- Anatomy: Fixed top bar with mascot avatar left, social icons center-right, ecosystem dropdown and close button far right
- Surface: action (#FF0000) background with mixed ink and accent-spray elements
- Typography: label token for dropdown text
- Shape: button radius for dropdown and close button
- Spacing: Compact horizontal padding with clustered right-side controls
- Composition: Horizontal flex with space-between logic, mascot as brand anchor

## Responsive behavior

The design's bold simplicity provides natural responsive advantages. The heavy typography scales down proportionally while maintaining impact. The seven-column partner grid should reflow to fewer columns on narrower viewports—four on tablet, two on mobile—with vertical dividers becoming horizontal separators between rows.

The hero mascot, currently positioned as a large right-side element, should stack below the text on narrow screens rather than shrinking to insignificance. The manifesto text can remain left-aligned at all sizes; centering would undermine its confrontational tone.

The ticker band should maintain its continuous scroll behavior across all breakpoints, with font size reducing to the label token minimum. Touch targets for social buttons must remain at least 44px square for accessibility.

## Practical implementation guidance

**Preserve**
- The absolute contrast between red and black; no muted or tinted variants
- The single-weight Heavitas voice; do not introduce lighter weights for hierarchy
- The mascot's specific expression and pose; alternative illustrations should match its attitude
- The spray-paint accent as a rare, disruptive element rather than a pattern
- The heavy border structure between sections; this is architectural, not decorative

**Avoid**
- Subtle shadows or gradients that would soften the flat, poster-like aesthetic
- Rounded corners on major structural elements; the system favors sharp geometry
- Center-aligned typography for manifesto or headline content
- Multiple colors in partner logos; enforce the single-red rule
- Animated transitions that would delay the immediate, aggressive impact

**Recommended build order**
1. Establish the color tokens and apply the red/black/white foundation
2. Implement Heavitas at display sizes and verify legibility at hero scale
3. Build the hero banner with mascot positioning and social button cluster
4. Create the ticker component with continuous horizontal scroll
5. Construct the partner grid with responsive column logic
6. Add section headers with border structure
7. Integrate Spray Letters for accent moments
8. Polish spacing and verify touch target sizes

**Accessibility**
- The red-on-black and black-on-red pairings must meet WCAG contrast requirements; the pure red (#FF0000) on pure black passes for large text but may fail for smaller label sizes—consider darkening the red slightly or lightening the black for body-scale text
- Provide pause controls for the scrolling ticker to respect reduced-motion preferences
- Ensure the mascot illustration has appropriate alt text that conveys its role as brand identity
- The spray-painted text should not carry critical information alone; duplicate any spray-accent content in clean typography

## Scope note

This guide covers the landing page surface visible in the supplied images: hero banner, navigation, scrolling ticker, partner grid, and section headers. Measurements are practical adaptation targets. Footer content, interior pages, motion behavior beyond the ticker scroll, and mobile-specific layouts are not represented. Form interactions, wallet connection flows, and dynamic content states require additional design exploration.
