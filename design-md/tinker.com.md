# How tinker.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tinker.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with 'Follow your spark' headline, app store badges, and iPhone mockup showing Tinker app interface with Product Generator tool on green tiled background](https://pin.fontofweb.com/8576?format=jpg)](https://design.withfudge.com/share/pin-8576)

[Hero section with 'Follow your spark' headline, app store badges, and iPhone mockup showing Tinker app interface with Product Generator tool on green tiled background](https://design.withfudge.com/share/pin-8576)

[![Tools grid section with 'Tools or toys? Both.' headline, masonry layout of creative tool cards including Product Morph Video, 3D Floor Plan Generator, and Product Editorial Shot](https://pin.fontofweb.com/8575?format=jpg)](https://design.withfudge.com/share/pin-8575)

[Tools grid section with 'Tools or toys? Both.' headline, masonry layout of creative tool cards including Product Morph Video, 3D Floor Plan Generator, and Product Editorial Shot](https://design.withfudge.com/share/pin-8575)

[![Social proof section 'Tinker in the wild' with video player showing before/after jewelry content, floating decorative elements, and lime green 'Get the app' call-to-action](https://pin.fontofweb.com/8574?format=jpg)](https://design.withfudge.com/share/pin-8574)

[Social proof section 'Tinker in the wild' with video player showing before/after jewelry content, floating decorative elements, and lime green 'Get the app' call-to-action](https://design.withfudge.com/share/pin-8574)

[![Vibrant coral-red section with 'Play to learn' oversized display typography, hands-holding-phone video thumbnail, and lime green pill button in corner](https://pin.fontofweb.com/8573?format=jpg)](https://design.withfudge.com/share/pin-8573)

[Vibrant coral-red section with 'Play to learn' oversized display typography, hands-holding-phone video thumbnail, and lime green pill button in corner](https://design.withfudge.com/share/pin-8573)

## Overview

Tinker's marketing site presents a confident, energetic visual system built around creative play. The design alternates between clean white and light gray sections and bold, saturated color fields, creating rhythmic visual interest as users scroll. Black typography dominates at massive scale, with display headlines pushing toward edge-to-edge compositions that feel spontaneous and unconstrained. An electric lime green serves as the singular accent color, appearing exclusively on call-to-action buttons and interactive highlights. This restraint makes the accent feel electric rather than overwhelming. Photography and video content receives generous space, with device mockups, product shots, and lifestyle imagery arranged in asymmetric grids that suggest creative possibility rather than rigid structure. The overall impression is of a tool that takes itself seriously enough to be powerful but lightly enough to invite experimentation.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, body copy, button text on light surfaces |
| canvas | #FFFFFF | Primary backgrounds, nav pill fill, card interiors, button text on dark surfaces |
| surface | #F2F2F2 | Secondary section backgrounds, subtle card fills |
| surface-warm | #E5E7EB | Alternate section backgrounds, warm gray zones |
| accent-lime | #CCE600 | Primary action buttons, interactive highlights, "Use" badges, app download CTAs |
| muted-border | #D2D2D2 | Nav pill borders, subtle dividers, secondary button strokes |

The color system operates in two primary modes. Light mode uses white and near-white backgrounds with black text for maximum readability and a clean, gallery-like presentation of creative work. A saturated mode appears in the "Play to learn" section with a vivid red background and black text for emotional, high-impact moments that demand attention. The lime accent remains consistent across both modes, always signaling interactivity. No dark mode is present in the visible system; the design assumes light or bright contexts throughout. Image palettes drawn from photography introduce greens, purples, and warm skin tones, but these remain photographic rather than interface colors.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 5rem | 700 | 1.1 | -0.03em | Homepage hero headlines, maximum impact statements |
| section-display | Inter | 3.75rem | 700 | 1.1 | -0.03em | Section headlines, "Play to learn" scale |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0em | Subheadlines, descriptive paragraphs |
| body | Inter | 1rem | 400 | 1.5 | 0em | Navigation, general body text, card descriptions |
| label-small | Inter | 0.75rem | 500 | 1.125 | -0.03em | Small labels, metadata, category tags |
| button-primary | Inter | 0.9375rem | 600 | 0.95 | -0.04em | Primary and secondary button text |
| button-large | Inter | 1.25rem | 600 | 0.95 | -0.04em | Prominent CTAs, "Get the app" at scale |
| card-title | Inter | 1.5rem | 550 | 1.2 | 0em | Tool card headlines, feature titles |

Inter drives the entire typographic system with weights ranging from 400 to 700. Display sizes are aggressively large, with hero headlines at 80px creating an almost poster-like quality. Tight negative tracking on display sizes prevents the large forms from feeling loose or uncomposed. Body text maintains comfortable readability at 16px with 24px line height. The 550 weight appears for card titles, an intermediate step between regular and bold that feels contemporary without heaviness. Verify licensing for these families before production use.

## Layout

The page employs a full-width, edge-to-edge layout philosophy with generous internal breathing room. Sections stack vertically with substantial vertical spacing between them, typically 64px or more. Content areas use asymmetric padding, with left-side padding at 32px and occasional right-side padding at 192px for text-heavy sections that need asymmetric balance.

The navigation sits as a floating pill element near the top of the viewport, not a full-width bar. This pill contains the Tinker wordmark and a "Get the app" button, creating a lightweight, non-blocking presence. The nav pill uses a white background with subtle border and soft shadow for elevation against both light and saturated section backgrounds.

Content sections follow a center-aligned headline pattern: large display text centered, followed by centered subheadline, then a centered call-to-action button. Below this text block, content unfolds in asymmetric grids. The tools section uses a masonry-like arrangement with cards of varying heights and widths, some spanning multiple columns. Cards feature rounded corners at 25px for large media containers and 15px for smaller elements.

Spacing uses a 2px base unit, with common increments at 4px, 12px, 16px, 20px, 24px, 25px, 32px, 40px, and 64px. Section margins frequently appear at 64px top, creating clear separation between thematic zones. Horizontal margins of 25px provide consistent side gutters for card grids.

## Visual language

The visual language balances creative spontaneity with systematic restraint. Photography dominates the experience: product mockups, lifestyle shots, device screens, and user-generated content appear at full bleed within cards. Images receive minimal treatment—no heavy filters, no consistent color grading—allowing the diverse creative output to speak for itself.

Decorative elements appear sparingly but memorably. A gold ring element floats in the upper right of one section, suggesting jewelry and craft without literal illustration. The "loire" brand badge uses a soft mint-green rounded rectangle with a distinctive notched corner, introducing a single non-rectangular shape into an otherwise orthogonal system.

Device mockups appear frequently, always showing the Tinker app interface with its own internal card-based layout. These nested interfaces create depth and demonstrate the product in context. The phone mockups use realistic proportions with visible status bars and dynamic islands, grounding the marketing in tangible hardware.

Shadows are subtle and functional rather than decorative. A soft 7px blur shadow at 15% black appears behind elevated elements like the navigation pill. A slightly deeper shadow with 1px and 3px offsets at 10% black appears behind cards, creating gentle separation without heavy material effects.

## Components

### Navigation Pill

- **Anatomy**: Rounded container with Tinker wordmark (spark icon + "tinker" text) on the left, "Get the app" lime button on the right
- **Surface**: White background with 1px solid muted-border stroke
- **Shape**: Full pill radius (9999px)
- **Spacing**: Horizontal padding 12px, minimal vertical padding
- **Shadow**: Soft elevation shadow, rgba(0,0,0,0.15) 0px 0px 7px
- **Composition**: Floats near top of viewport, centered or slightly offset depending on section

### Primary Button

- **Anatomy**: Text label with optional icon, single-line
- **Surface**: Lime green background (#CCE600), black text
- **Typography**: button-primary or button-large token
- **Shape**: Full pill radius
- **Spacing**: Padding 10px 24px for standard, 12px 32px for prominent
- **Variants**: Standard size for inline use, large size for hero CTAs

### Secondary Button

- **Anatomy**: Text label, sometimes with leading icon (Apple or Google Play logos)
- **Surface**: White or transparent background, black text, optional border
- **Typography**: body token, weight 400
- **Shape**: Pill radius
- **Spacing**: Padding 12px 32px
- **Use**: App store download badges, alternative actions

### Tool Card

- **Anatomy**: Media container (image or video), text overlay with tool name and description, optional "Use" badge
- **Surface**: Image fills entire card, text in white or black depending on media darkness
- **Typography**: card-title for name, body for description, label-small for metadata
- **Shape**: 25px border radius for large cards, 15px for small
- **Spacing**: Internal padding 16px to 25px
- **Composition**: Variable aspect ratios in masonry grid, some cards span full height of row

### Video Player Card

- **Anatomy**: Video thumbnail, playback controls, duration display, before/after labels
- **Surface**: Dark overlay on video for controls, white background for surrounding frame
- **Typography**: label-small for timestamps and badges
- **Shape**: 25px radius for main container, 6px for internal control badges
- **States**: Play button overlay on thumbnail, "Before" and "After" labels on comparison content

### Section Header

- **Anatomy**: Display headline, subheadline paragraph, optional CTA button
- **Surface**: Inherits section background (white, gray, or red)
- **Typography**: hero-display or section-display for headline, body-large for subheadline
- **Spacing**: Generous vertical padding, typically 64px top margin
- **Composition**: Center-aligned text block, maximum width constrained for readability

## Responsive behavior

The design shows a desktop-first composition with substantial horizontal space. At narrower viewports, the asymmetric grids should collapse to single or double columns. The masonry layout of tool cards requires particular attention: cards that span multiple columns on desktop should stack vertically on mobile, maintaining their internal aspect ratios.

The navigation pill should remain visible and functional across breakpoints, potentially reducing to icon-only or simplified text at the smallest sizes. Display headlines at 80px will require scaling down, likely to 48px or 40px on mobile to prevent overflow and maintain impact without breaking layout.

Video content and device mockups should maintain proportional scaling, with the phone mockups potentially reducing to 60-70% width on tablet and stacking above descriptive text on mobile. The floating decorative elements (gold ring, "loire" badge) should reposition or hide on smaller screens to prevent obstruction of primary content.

Touch targets for buttons must maintain minimum 44px height even as horizontal padding adjusts. The lime "Use" badges within cards should remain tappable at small sizes.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between 80px display headlines and 12px labels—this hierarchy is central to the brand voice
- The single accent color discipline; lime green is the only interactive color
- Full-bleed photography without heavy filters or overlays
- The floating pill navigation rather than a traditional full-width header
- Asymmetric grid compositions that feel curated rather than rigid

### Avoid
- Introducing additional accent colors beyond lime; the system derives energy from restraint
- Heavy drop shadows or material design elevation; keep shadows soft and minimal
- Centering body text in paragraphs; subheadlines are centered but body copy should remain left-aligned for readability
- Rigid equal-height card grids; the masonry variation is intentional

### Recommended Build Order
1. Establish the typographic scale with Inter at all weights
2. Implement the color tokens, particularly the lime accent
3. Build the floating navigation pill with proper shadow and border treatment
4. Create the primary button component with pill shape and lime fill
5. Implement the section header pattern with centered display text
6. Build the tool card with variable aspect ratios and masonry positioning
7. Add the video player card with overlay controls
8. Implement decorative elements (floating shapes, brand badges)

### Accessibility
- Ensure 80px display text has sufficient line height (1.1) to prevent clipping at large sizes
- Provide text alternatives for all tool card imagery describing the creative output shown
- The lime green on white background should be checked for contrast; while energetic, it may need darkening for WCAG AA compliance on small text
- Video content requires captions and transcript availability
- The red section with black text maintains excellent contrast; ensure this pairing is preserved
- Focus indicators should use the lime accent color with sufficient offset from backgrounds

## Scope note

This guide covers the Tinker marketing homepage visible in the supplied images, including the hero, tools grid, social proof, and educational sections. Footer content, additional interior pages, mobile-specific layouts, and motion or animation behavior are not represented in the available material. Measurements reflect the exact values from the desktop interface.
