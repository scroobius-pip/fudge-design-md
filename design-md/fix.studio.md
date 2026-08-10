# How fix.studio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fix.studio-design)

Last updated: 2026-08-10

## Captured pages

[![Amazon AWS case study with dark navy canvas, lavender display type, and horizontal rule metadata grid](https://pin.fontofweb.com/362?format=jpg)](https://design.withfudge.com/share/pin-362)

[Amazon AWS case study with dark navy canvas, lavender display type, and horizontal rule metadata grid](https://design.withfudge.com/share/pin-362)

[![Amazon AWS project header with full navigation and lavender text on dark navy background](https://pin.fontofweb.com/361?format=jpg)](https://design.withfudge.com/share/pin-361)

[Amazon AWS project header with full navigation and lavender text on dark navy background](https://design.withfudge.com/share/pin-361)

[![Work index page with alphabetical grid, black typography on off-white canvas, and colorful project thumbnails](https://pin.fontofweb.com/360?format=jpg)](https://design.withfudge.com/share/pin-360)

[Work index page with alphabetical grid, black typography on off-white canvas, and colorful project thumbnails](https://design.withfudge.com/share/pin-360)

[![Footer contact grid with black text on off-white background and horizontal rule separators](https://pin.fontofweb.com/359?format=jpg)](https://design.withfudge.com/share/pin-359)

[Footer contact grid with black text on off-white background and horizontal rule separators](https://design.withfudge.com/share/pin-359)

## Overview

Fix Studio presents itself as a design practice with a deliberately bifurcated visual personality. The public face—an alphabetical work index and contact footer—operates in a restrained off-white environment with black typography, evoking the clarity of International Typographic Style reference systems. Project case studies invert this logic entirely, plunging visitors into a deep navy darkness where oversized lavender type becomes the primary light source. This oscillation between archival neutrality and immersive chromatic experience defines the studio's communicative strategy. The system relies on a single type family, Rules, deployed across an extreme scale range from small functional labels to monumental display settings that bleed beyond viewport edges. Horizontal rules function not merely as dividers but as structural grid lines that organize information across both light and dark modes. The overall impression is of a practice that treats its own portfolio as a design object worthy of the same rigor applied to client work.

## Colors

The palette is intentionally minimal, derived from functional needs rather than decorative impulse. Two dominant modes—light and dark—share a single accent color that shifts in perceived intensity based on surrounding luminance.

| token | value | use |
|---|---|---|
| canvas | #F7F7F7 | Primary background for index, footer, and navigation pages |
| canvas-dark | #111827 | Immersive case-study backgrounds, near-black with subtle blue depth |
| ink | #000000 | Primary text on light canvas, index typography, footer content |
| ink-light | #F7F7F7 | Inverted text when needed on dark surfaces |
| accent | #C084FC | Lavender display type on dark backgrounds, project metadata, navigation highlights |
| accent-green | #00FF7F | Project thumbnail accent, photographic color reference |

The light mode establishes an archival neutrality. The off-white canvas avoids pure white harshness while maintaining maximum contrast with black ink for optimal readability of dense index information. The dark mode exploits the same accent color at much larger scales—what functions as a subtle highlight in navigation becomes an atmospheric glow in project headers. The accent-green appears primarily within client work imagery rather than as a systematic UI element, though it occasionally punctuates the index grid through project thumbnails. No gradients or shadows are employed; color fields remain flat and absolute, reinforcing the system's graphic confidence.

## Typography

Rules, designed by Matthieu Salvaggio and Léon Hugues for Blaze Type, serves as the sole type family. The family is available in Regular and Medium weights, with the Medium weight carrying display and navigation duties while Regular handles body and label settings. The italic variant is loaded but not prominently visible in the supplied surfaces.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Rules | 8rem | 500 | 0.85 | -0.03em | Monumental project titles that extend beyond viewport edges |
| section-display | Rules | 4rem | 500 | 0.9 | -0.02em | Index section headers, alphabetical markers |
| body | Rules | 1rem | 400 | 1.4 | 0em | Footer contact details, project descriptions |
| label | Rules | 0.75rem | 400 | 1.2 | 0.02em | Metadata categories, year indicators, service tags |
| navigation | Rules | 0.875rem | 400 | 1 | 0.01em | Primary navigation, index item labels |

The type scale operates on a 4px grid, with sizes at 12px, 14px, 16px, 64px, and 128px. The extreme jump between body and display sizes creates deliberate tension—functional information remains modest while project identities achieve environmental scale. Negative tracking increases with size, tightening large settings into cohesive visual masses. Line heights below 1.0 in display settings indicate that ascenders and descenders are expected to collide or crop, treated as graphic elements rather than readable text blocks.

Verify licensing for these families before production use. Rules is available from Blaze Type.

## Layout

The layout system is fundamentally grid-based, with horizontal rules serving as both visual separators and structural alignment guides. The index page demonstrates a complex multi-column grid where alphabetical markers, project names, years, and thumbnail images occupy distinct zones that maintain consistent baselines across rows.

Page margins appear generous but not excessive, approximately 1.5rem to 2rem on standard viewports. The index grid uses a flexible column system where project thumbnails occupy square or near-square proportions, with text information aligned to the left and right edges of each row. Row heights are determined by content rather than fixed modules, though the horizontal rules enforce consistent spacing relationships.

The project case-study layout inverts this density. A full-viewport dark canvas carries minimal information—project title, year, and service categories—arranged in a loose upper grid before the massive display type dominates the lower portion. This creates a scroll-driven reveal where the initial view presents documentary information and subsequent scrolling immerses the viewer in typographic scale.

Vertical rhythm is maintained through the 0.25rem base unit, with section spacing at 6rem providing clear territorial separation between functional zones. The footer compresses information into a dense multi-column grid that mirrors the index's organizational logic, suggesting that the entire site operates as a single continuous document rather than discrete pages.

## Visual language

The visual language derives from archival and editorial traditions reinterpreted through digital-native scale. The horizontal rule is the system's most distinctive element—appearing as 1px black lines in light mode and subtle lavender lines in dark mode, these lines create a ruled-paper effect that organizes information without boxing it in.

Imagery treatment varies by context. Index thumbnails appear as unframed rectangles with zero border radius, presented as specimens in a catalog. Case-study imagery shifts to full-bleed or near-full-bleed presentation, with the AWS SageMaker thumbnail demonstrating how client logos and product imagery integrate into the dark canvas without decorative framing.

The color-mode switching between pages creates a cinematic quality—visitors move from the bright, information-dense index into dark, atmospheric project spaces. This is not a toggleable theme but a contextual strategy, with each mode optimized for its content type. The light mode prioritizes scanning and comparison; the dark mode prioritizes immersion and emotional impact.

Typography functions as image at large scales. The hero-display settings reduce letterforms to abstract shapes, with the extreme size and tight leading causing intentional overlap and cropping. This treatment elevates project names from readable text to environmental graphics.

## Components

### Site Header

- **Anatomy**: Fixed-position bar containing studio wordmark left, navigation links distributed across remaining width
- **Surface**: Transparent or matching canvas background, transitioning to canvas-dark on case-study pages
- **Typography**: navigation token, uppercase or small-caps treatment with parenthetical indicators for index count
- **Shape**: Full-width, height approximately 3rem, bordered below by 1px horizontal rule
- **Spacing**: Internal padding of 1rem horizontal, text vertically centered
- **Composition**: Wordmark "FIX STUDIO" left-aligned, navigation items "(INFO)", "(SERVICES)", "(CONTRIBUTORS)" distributed with generous space
- **Variants**: Light variant with ink text on canvas; dark variant with accent text on canvas-dark

### Project Header

- **Anatomy**: Metadata band below site header containing project description, client name, year, and service tags
- **Surface**: canvas-dark background
- **Typography**: label token for categories, body token for description, all in accent color
- **Shape**: Full-width, multiple horizontal rules creating row divisions
- **Spacing**: Compact vertical rhythm, approximately 0.5rem between rule lines
- **Composition**: Left column for description, center for client/year, right for service categories
- **States**: Static display, no visible interactive states in supplied imagery

### Index Grid

- **Anatomy**: Alphabetical listing with large letter markers, project names, years, and thumbnail images
- **Surface**: canvas background
- **Typography**: section-display for alphabetical markers (A, B, C...), label for project names and years, body for additional metadata
- **Shape**: Thumbnails at 0rem radius, square or 4:3 proportions
- **Spacing**: Grid gap of 1rem, row spacing determined by thumbnail height with text aligned to top baseline
- **Composition**: Irregular grid where some rows contain multiple projects, others single large entries; alphabetical markers float left of content blocks
- **Variants**: Dense rows with small thumbnails, sparse rows with large thumbnails or no image

### Footer Grid

- **Anatomy**: Multi-column contact and credit information below horizontal rule
- **Surface**: canvas background
- **Typography**: body token for contact details, label for section headers
- **Shape**: Full-width, bordered above by 1px rule, internal rows separated by additional rules
- **Spacing**: Generous top padding of 3rem, compact row spacing of 1.5rem
- **Composition**: Five-column distribution with contact information left, social links center-left, location center, credits center-right, copyright right
- **Content**: Phone, email, Instagram, LinkedIn, Brooklyn NY location, design and development credits, dynamic time display

## Responsive behavior

The supplied imagery shows desktop-width layouts exclusively. Based on the system's structural logic, several responsive adaptations are recommended.

The index grid's multi-column layout should collapse to single-column on narrow viewports, with alphabetical markers becoming section headers rather than inline labels. Project thumbnails should stack vertically with text below rather than beside, maintaining the 0rem radius treatment.

The project header's multi-column metadata should reflow to stacked rows, preserving the horizontal rule separators but allowing each field to occupy full width. The monumental hero-display type should scale down to section-display or smaller to prevent excessive horizontal scrolling or clipping.

The site header's distributed navigation should consolidate to a compact menu or hamburger pattern on mobile, with the parenthetical count indicators hidden to reduce width. The studio wordmark should remain visible as the primary anchor.

Footer grid columns should stack in logical groups—contact information first, then social links, then credits—maintaining the horizontal rule separators between groups rather than between individual items.

Dark mode case-study pages should maintain their immersive quality at all widths, with display type scaling proportionally rather than reflowing to multiple lines, preserving the graphic impact of oversized letterforms.

## Practical implementation guidance

### Preserve
- The absolute flatness of color fields—no shadows, no gradients, no translucency
- The 0rem radius on all thumbnails and containers; the system's sharpness depends on this
- The horizontal rule as primary organizational device, at 1px weight in all contexts
- The extreme type scale contrast between functional and display settings
- The contextual color mode: light for index/archive, dark for immersive case studies

### Avoid
- Adding border radius to any element; the system's severity depends on rectilinear precision
- Introducing additional type families; the monofamily approach is central to the identity
- Using the accent color on light backgrounds where it would lose luminosity
- Creating hover states that add background fills or shadows; maintain the flat graphic language
- Centering text in the index grid; the left-aligned, rule-based structure is essential

### Recommended Build Order
1. Establish the 4px base grid and horizontal rule system as CSS custom properties
2. Implement Rules font loading with Regular and Medium weights
3. Build the site header with light and dark variants
4. Create the index grid with flexible column logic and alphabetical markers
5. Develop the project header metadata band with rule-separated rows
6. Implement the dark-mode case-study canvas with accent-colored display type
7. Construct the footer grid with multi-column collapse behavior
8. Add the dynamic time display in the footer as a final refinement

### Accessibility
- Ensure horizontal rules have sufficient contrast against their backgrounds; the lavender rules on dark navy meet this, but verify against WCAG 2.1 non-text contrast guidelines
- Provide skip navigation for the dense index grid; the alphabetical structure can serve as an anchor system
- Consider reduced-motion preferences for any scroll-driven typography reveals
- Maintain text resizing compatibility by using rem units throughout; the display sizes will scale proportionally
- Ensure the dark-mode case studies do not trigger photosensitive responses; the static imagery suggests no animation, but verify if motion is added

## Scope note

This guide covers the home page, work index, and Amazon AWS case study as visible in the supplied imagery. Mobile layouts, animation behavior, form interactions, and additional project case studies are not represented. The dynamic footer time display suggests real-time functionality not fully documented here. Measurements are practical adaptation targets derived from visual inspection against a 4px grid system.
