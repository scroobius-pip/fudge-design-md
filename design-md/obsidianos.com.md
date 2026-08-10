# How obsidianos.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/obsidianos.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page with dark gradient hero, product cards, and regulatory trust section with orange accent icons](https://pin.fontofweb.com/8843?format=jpg)](https://design.withfudge.com/share/pin-8843)

[Pricing page with dark gradient hero, product cards, and regulatory trust section with orange accent icons](https://design.withfudge.com/share/pin-8843)

[![Footer with oversized obsidian wordmark, multi-column links, GDPR badge, and RockCore attribution](https://pin.fontofweb.com/8842?format=jpg)](https://design.withfudge.com/share/pin-8842)

[Footer with oversized obsidian wordmark, multi-column links, GDPR badge, and RockCore attribution](https://design.withfudge.com/share/pin-8842)

[![Product feature cards with 3D sphere and candlestick visuals above dark rocky landscape with floating UI overlays](https://pin.fontofweb.com/8841?format=jpg)](https://design.withfudge.com/share/pin-8841)

[Product feature cards with 3D sphere and candlestick visuals above dark rocky landscape with floating UI overlays](https://design.withfudge.com/share/pin-8841)

[![Consolidators section with dark mountain photography, glassmorphic conversion cards, and right-aligned feature list](https://pin.fontofweb.com/8840?format=jpg)](https://design.withfudge.com/share/pin-8840)

[Consolidators section with dark mountain photography, glassmorphic conversion cards, and right-aligned feature list](https://design.withfudge.com/share/pin-8840)

## Overview

Obsidian presents a dark, premium fintech aesthetic built on near-black canvases that evoke solidity and trust. The visual system pairs elegant, light-weight serif display typography with clean sans-serif body text, creating a sophisticated hierarchy that feels both established and technologically current. The design employs dramatic photography of dark geological forms—obsidian rock, mountains, and abstract mineral textures—as atmospheric backdrops, often overlaid with subtle gradients to ensure text legibility. Warm orange accents appear sparingly in icons and interactive states, providing energy without disrupting the restrained palette. The overall impression is of institutional confidence: a platform built for regulated financial environments that nevertheless communicates modern efficiency through its typographic refinement and generous spatial rhythm.

## Colors

The color system is intentionally minimal, anchored by absolute black and near-black surfaces with white typography. Warm dark tones provide subtle elevation, while a single blue accent serves interactive elements.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deepest layer |
| surface | #0D0D10 | Card backgrounds, elevated panels |
| surface-elevated | #1A1A1A | Floating UI elements, modal backdrops |
| surface-warm | #2F2C2A | Gradient endpoints, warm dark accents |
| ink | #FFFFFF | Primary text, headings, primary button fill |
| ink-muted | #0D0D10 | Text on light surfaces (rare) |
| ink-dim | #1C1C1C | Subdued text, disabled states |
| accent | #0000EE | Link color, interactive blue (system default retained) |

The interface operates almost exclusively in dark mode. Gradients transition from pure black to warm dark gray (#2F2C2A) at approximately 60-85% positions, creating depth behind hero content without introducing new hues. Photography of dark rock and mountain landscapes reinforces this monochromatic world. Small geometric icons in warm orange appear against dark backgrounds as trust indicators and category markers; this warm tone is drawn from image palette values rather than defined as a formal interface token. White text maintains high contrast across all surfaces, with subtle opacity reductions or size variations creating hierarchy rather than gray values.

## Typography

The typographic system pairs a refined serif display family with a neutral sans-serif for body text, creating clear role separation between editorial headlines and functional information.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Ivory Ll Tt | 5rem | 300 | 0.9 | -0.02em | Page titles, hero statements |
| section-display | Ivory Ll Tt | 3.25rem | 300 | 1.15 | -0.019em | Section headings, large statements |
| feature-headline | Ivory Ll Tt | 1.5rem | 300 | 1.17 | -0.02em | Card titles, feature names |
| body | Inter | 0.875rem | 400 | 1.21 | -0.006em | Paragraphs, descriptions |
| body-small | Inter | 0.75rem | 400 | 1.25 | -0.001em | Captions, legal text, metadata |
| label | Inter | 0.875rem | 400 | 1.21 | -0.006em | Buttons, navigation links |
| navigation | System-Sansserif | 0.75rem | 400 | 1 | 0em | Top-bar navigation items |

Ivory Ll Tt, designed by Aurele Sack and distributed by Lineto, provides the distinctive editorial voice at Light weight (300). Its tight letter-spacing and compact line-height give headlines a refined, almost classical density that contrasts with the technological subject matter. Inter handles all functional typography with Regular weight (400), offering clarity at small sizes. System-Sansserif serves navigation at 12px with default metrics, keeping the top bar lightweight and unobtrusive.

The False family (Indian Type Foundry, designed by Jeremie Hornus, Theo Guillard, Morgane Pambrun, Alisa Nowak, and Joachim Vu) appears in the attribution data as False-Normal but serves no visible typographic role in the captured interface; it may be reserved for specific interactive states or secondary pages not represented here. Ivory Tt, also from Lineto and designed by Aurele Sack, appears in the font inventory but is not visibly distinguished from Ivory Ll Tt in the captured surfaces.

Verify licensing for Ivory Ll Tt, Ivory Tt, Inter, and False families before production use.

## Layout

The layout follows a spacious, centered approach with strong horizontal padding and generous vertical rhythm. Content is constrained to a comfortable reading width rather than edge-to-edge expansion.

**Page structure.** The top navigation bar floats over content with a transparent background, containing the Obsidian logomark left, centered navigation links, and a "Get started" pill button right. Below this, hero sections occupy substantial vertical space with centered or left-aligned typography over photographic backgrounds. Content sections alternate between full-bleed imagery and contained text blocks.

**Grid and spacing.** Horizontal padding of 2.5rem (40px) defines the content margins on desktop, creating breathing room around all elements. Section spacing ranges from 5rem to 6.875rem, with the largest gaps appearing between major thematic transitions. Internal component padding uses 1.5rem for standard cards and 2.5rem for feature panels. The spacing scale derives from a 2px base unit, producing clean whole-number relationships: 6px, 10px, 12px, 16px, 20px, 24px, 40px, 68px, and 82px all appear as measured values.

**Responsive considerations.** The generous desktop padding (40px) suggests a comfortable maximum content width. On narrower viewports, this padding should compress while maintaining minimum touch targets. The two-column pricing layout and three-column trust section will require stacking on smaller screens, with the left-aligned section headings becoming full-width above their associated content.

## Visual language

**Photography and atmosphere.** Dark, moody photography of geological forms—obsidian rock, mountain silhouettes, mineral textures—dominates the visual field. These images are heavily shadowed, often appearing almost as pure black shapes against slightly lighter dark backgrounds. The photography functions as atmospheric texture rather than illustrative content; it reinforces the brand name and suggests permanence, solidity, and natural formation.

**Gradient overlays.** Linear gradients protect text legibility over photography. The standard pattern transitions from opaque black at the top or bottom to transparent or semi-transparent warm dark gray, with transition points varying by section purpose. A top-down gradient might run from black through to rgba(47, 44, 42, 0.9) at 60%, while a bottom-up gradient for footer protection runs from transparent at 5% to black at 87%.

**Iconography and accents.** Small geometric icons—triangles, hexagons, and abstract marks—appear in warm orange against the dark backgrounds. These function as trust indicators and category markers rather than detailed illustrations. The icon style is minimal and flat, avoiding gradients or dimensional effects.

**Glassmorphic elements.** Floating cards over photography employ subtle elevation through dark translucent backgrounds with soft shadows, creating depth without breaking the monochromatic mood. These cards contain status indicators, progress states, and action buttons.

## Components

**Navigation bar**
- Anatomy: Logomark left, text links center, pill button right
- Surface: Transparent background over page content
- Typography: System-Sansserif at 12px for links, Inter 14px for button
- Shape: Full-width bar with 40px horizontal padding
- Spacing: Links spaced with comfortable gaps; dropdown indicators on "What we offer" and "Who's it for"
- Composition: Flex row with space-between alignment

**Primary action button**
- Anatomy: Text label with optional icon
- Surface: White fill (#FFFFFF) on dark background, black text
- Typography: Inter 14px Regular
- Shape: Full pill (9999px radius)
- Spacing: 10px vertical, 16px horizontal padding
- Variants: Secondary variant uses transparent fill with white text and subtle border

**Product card**
- Anatomy: Visual media top, title, description, action button below
- Surface: Dark surface (#0D0D10) with subtle elevation
- Typography: Ivory Ll Tt 24px Light for title, Inter 12px for body
- Shape: 12px corner radius
- Spacing: 24px internal padding
- Composition: Vertical stack with media occupying upper portion

**Feature highlight card**
- Anatomy: Icon or status indicator, title, description, optional action
- Surface: Elevated dark surface (#1A1A1A) with soft shadow
- Typography: Inter 14px for labels, smaller sizes for metadata
- Shape: 12px corner radius
- Spacing: Generous internal padding (40px+)
- Composition: Centered or left-aligned content over photographic backgrounds

**Trust section**
- Anatomy: Large left-aligned heading, three-column feature grid right
- Surface: Pure black background
- Typography: Ivory Ll Tt 52px Light for heading, Inter 14px for descriptions
- Shape: No visible borders; implied grid through spacing
- Composition: Asymmetric two-zone layout with heading dominating left third

**Footer**
- Anatomy: Regulatory disclaimer top, multi-column links center, oversized wordmark bottom
- Surface: Black background continuing page canvas
- Typography: Inter 12px for legal text and links, Ivory Ll Tt at massive scale for decorative wordmark
- Shape: Horizontal rule separating disclaimer from main footer content
- Composition: Four-column link grid (Product, Obsidian, Others) with company information left; wordmark spans full width at bottom in extremely large, low-opacity serif type

## Responsive behavior

The desktop layouts captured show generous fixed padding and multi-column arrangements that will require thoughtful adaptation for smaller viewports. The navigation dropdowns suggest a complex information architecture that may collapse to a hamburger menu or simplified list on mobile. Hero typography at 80px display size should scale down proportionally, potentially to 48px or 52px on tablets and 36px on phones, maintaining the Light weight and tight letter-spacing. Two-column pricing cards and three-column trust features should stack vertically with full-width cards, preserving internal padding but allowing edge-to-edge presentation. The massive footer wordmark may require horizontal scaling or truncation to prevent overflow. Photography backgrounds should maintain cover behavior with focal point awareness, ensuring the dark gradient overlays continue to protect text legibility at all sizes.

## Practical implementation guidance

**Preserve**
- The absolute black canvas as the dominant background; resist adding light sections or alternating themes
- The distinctive weight contrast between Ivory Ll Tt Light headlines and Inter Regular body text
- Generous spatial rhythm; the premium feel depends on whitespace and section breathing room
- Warm orange accents in extremely limited, functional roles only
- Gradient overlays as protective layers over photography, not as decorative elements

**Avoid**
- Introducing additional accent colors beyond the warm orange; the palette's restraint is essential to its character
- Using the serif family for body text or UI labels; reserve it for display and editorial moments
- Light backgrounds or card fills that break the dark continuity
- Heavy borders or outlines; rely on spacing and tonal variation for separation
- Generic stock photography; the geological imagery is integral to brand expression

**Recommended build order**
1. Establish the black canvas and gradient overlay system
2. Implement Ivory Ll Tt Light at 52px and 80px for hero validation
3. Add Inter Regular at 12px and 14px for body and label hierarchy
4. Build the navigation bar with transparent background and pill button
5. Create product card component with dark surface and 12px radius
6. Implement trust section with asymmetric heading and feature grid
7. Add footer with multi-column links and decorative wordmark
8. Fine-tune gradient positions over photography for text protection

**Accessibility**
- White text on black backgrounds provides excellent contrast; maintain this for all essential content
- The warm orange accent should not be the sole indicator of interactive state; pair with shape or position changes
- Large display typography benefits from adequate line-height; the 0.9 leading on hero sizes may require adjustment for multi-line content
- Ensure focus indicators are visible against dark surfaces, potentially using the white ink or warm accent with sufficient offset
- Navigation dropdowns should support keyboard traversal and screen reader announcement

## Scope note

This guide covers the homepage and pricing page surfaces visible in the captured images, including navigation, hero sections, product cards, trust features, and footer. Mobile layouts, motion design, form interactions, and additional pages are not represented. Measurements are derived from the supplied interface data with values snapped to the documented scale.
