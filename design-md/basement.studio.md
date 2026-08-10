# How basement.studio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/basement.studio-design)

Last updated: 2026-08-10

## Captured pages

[![Contact form overlay styled as retro radio device with orange neon text on black screen, hands holding hardware interface](https://pin.fontofweb.com/5122?format=jpg)](https://design.withfudge.com/share/pin-5122)

[Contact form overlay styled as retro radio device with orange neon text on black screen, hands holding hardware interface](https://design.withfudge.com/share/pin-5122)

[![Massive BSMT.25 display type spanning viewport width above minimal footer with newsletter signup and navigation links](https://pin.fontofweb.com/5121?format=jpg)](https://design.withfudge.com/share/pin-5121)

[Massive BSMT.25 display type spanning viewport width above minimal footer with newsletter signup and navigation links](https://design.withfudge.com/share/pin-5121)

[![Capabilities section with large italic manifesto text and four-column service grid with pill tags on black background](https://pin.fontofweb.com/5120?format=jpg)](https://design.withfudge.com/share/pin-5120)

[Capabilities section with large italic manifesto text and four-column service grid with pill tags on black background](https://design.withfudge.com/share/pin-5120)

[![Hero section with architectural photography, studio tagline, and dense logo grid of client brands in bordered cells](https://pin.fontofweb.com/5119?format=jpg)](https://design.withfudge.com/share/pin-5119)

[Hero section with architectural photography, studio tagline, and dense logo grid of client brands in bordered cells](https://design.withfudge.com/share/pin-5119)

## Overview

The basement.studio identity is a dark-mode digital studio presentation built on absolute contrast: a void-black canvas supports massive, tightly-tracked display type and selective warm-orange accents. The system communicates creative confidence through scale rather than ornament—typography dominates the viewport, photography appears in controlled moments, and interactive elements borrow from retro-futuristic hardware interfaces. The visual language balances brutalist directness with polished execution: headlines are oversized and unapologetic, body copy is restrained and legible, and the occasional interactive set piece (such as the radio-styled contact form) introduces tactile personality without breaking the monochrome discipline. The overall impression is of a studio that treats its own site as a portfolio piece—every section is composed, every type scale is intentional, and the black ground serves as continuous negative space that lets content breathe.

## Colors

The palette is severely restricted, deriving its power from restraint and the single warm accent against an absolute dark ground.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background for all sections, hero, footer, and overlays |
| ink | #e6e6e6 | Primary text, headlines, body copy, navigation links |
| muted-ink | #808080 | Secondary text, labels, captions, disabled states, footer metadata |
| accent | #ff5500 | Active navigation states, interactive highlights, retro form elements, CTAs |
| surface | #1a1a1a | Elevated panels, input backgrounds, subtle card differentiation |
| border | #333333 | Dividers, logo grid cell borders, hairline separators |

The color logic follows a near-monochrome structure with one energetic warm accent. Black dominates every surface, creating a cinematic depth that makes photography and typography appear to float. The near-white ink avoids pure #ffffff, reducing eye strain and introducing a subtle material quality. The orange accent appears sparingly—primarily in active states and the distinctive retro contact form—so that every instance feels intentional and draws the eye. No gradients are visible in the interface; all transitions are handled through opacity or the single accent color. Photography in the hero uses its own warm, desaturated palette but is treated as content rather than system color.

## Typography

Two families drive the typographic hierarchy: a compressed, ultra-light display face for monumental headlines, and a clean geometric sans for everything else.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Ff Flauta-200 | 8rem | 200 | 0.85 | -0.04em | Massive section identifiers, brand marks, viewport-spanning type |
| section-display | Geist | 3.5rem | 400 | 1.1 | -0.02em | Manifesto statements, section headlines, contact CTAs |
| body | Geist | 1rem | 400 | 1.5 | 0 | Paragraphs, service descriptions, general reading |
| label | Geist | 0.75rem | 400 | 1.2 | 0.02em | Tags, metadata, small captions, counts in parentheses |
| navigation | Geist | 0.875rem | 400 | 1 | 0 | Primary nav, footer links, UI controls |

The hero-display token at 8rem produces the signature BSMT.25 treatment—letters that approach the edges of the viewport, their ultra-light weight creating a ghostly presence against black. Section-display at 3.5rem handles the manifesto voice with slightly tighter leading that stacks aggressively. Body text remains comfortable for reading at 1rem with generous 1.5 line height. The label token at 0.75rem serves the service category tags and parenthetical counts, while navigation at 0.875rem keeps the header and footer links unobtrusive yet crisp.

Geist is credited to designers Basementstudio Andrés Briganti Mateo Zaragoza and vendors Basementstudio Vercel Andrés Briganti Guido Ferreyra Mateo Zaragoza. Ff Flauta-200 carries no supported attribution. Verify licensing for these families before production use.

## Layout

The layout system is fundamentally single-column with strategic asymmetric interruptions. The viewport is treated as a continuous scrollable canvas with full-bleed sections separated by generous vertical whitespace.

Section rhythm relies on a 6rem section spacing token, creating distinct pauses between content blocks without visible dividers. The hero section occupies the full viewport width with a large architectural photograph positioned in the upper portion, overlaid by the studio tagline in section-display type. Below, the "Trusted by Visionaries" logo grid uses a strict multi-column arrangement with equal-width cells separated by 1px borders, creating a tessellated pattern of client marks.

The capabilities section introduces an asymmetric four-column grid for service descriptions, each column containing a headline, paragraph, and row of pill-shaped tags. This is the most structured layout moment—elsewhere, the system prefers free placement of large type against black space.

The footer splits into two zones: a newsletter capture area on the left with stacked text and an email input, and a vertical navigation stack on the right with oversized link text. Social links and copyright sit at the extreme bottom edge in a horizontal row.

No container max-width is enforced for display type, which bleeds to viewport edges. Content text maintains comfortable measure through implicit padding rather than explicit containers. The retro contact form breaks this pattern entirely, appearing as a centered hardware object with fixed proportions, framed by hands and floating above the page content.

## Visual language

The visual language merges digital studio polish with analog hardware nostalgia. The dominant mode is austere: black fields, precise typography, and grid-based information architecture. Against this, specific interactive moments introduce unexpected materiality—the radio-styled contact form with its orange CRT-style text, physical knobs, and embossed "basement" logo.

Photography appears in controlled doses. The hero image shows an interior architectural space with warm wood tones and dramatic lighting, establishing spatial depth without competing with the overlay text. This image is treated atmospherically rather than illustratively—it provides texture and scale while the type remains the primary message.

The logo grid is a key visual motif: dozens of client marks arranged in bordered cells, each mark rendered in white or light gray against black. The grid creates a sense of density and social proof while maintaining the monochrome discipline. Cell borders at 1px provide just enough separation without visual weight.

Motion is implied by the form of the typography—tight tracking and extreme scale suggest kinetic energy even in static compositions. The retro form elements introduce skeuomorphic depth through simulated buttons, dials, and screen glow, creating a deliberate anachronism against the flat digital surface.

## Components

### Primary navigation

- **Anatomy**: Horizontal row of text links with active state indicator, positioned at viewport top
- **Surface**: Transparent background over page content
- **Typography**: `{typography.navigation}` in `{colors.ink}`, active link in `{colors.accent}`
- **Spacing**: Compact horizontal arrangement with consistent gap between items
- **Composition**: Left-aligned logo mark, center-aligned page links, right-aligned utility controls and "Contact Us" CTA

### Hero section

- **Anatomy**: Full-width background photograph, overlaid tagline in two lines, supporting paragraph below
- **Surface**: Photographic background with dark gradient overlay preserving text legibility
- **Typography**: Tagline in `{typography.section-display}` at `{colors.ink}`, body in `{typography.body}` at `{colors.ink}`
- **Spacing**: Generous padding above and below text block, photograph fills upper portion

### Logo grid

- **Anatomy**: Multi-row grid of equal cells, each containing a centered client logo mark
- **Surface**: `{colors.canvas}` background, `{colors.border}` 1px borders between cells
- **Typography**: Logo marks as SVG or image, no text styling applied
- **Shape**: Rectangular cells with no border-radius
- **Spacing**: Tight packing with shared borders, no gap between cells
- **Composition**: Centered alignment within each cell, consistent visual weight across marks

### Service card

- **Anatomy**: Column containing service headline, descriptive paragraph, and horizontal row of capability tags
- **Surface**: Transparent, inherits `{colors.canvas}`
- **Typography**: Headline in `{typography.body}` at `{colors.ink}`, description in `{typography.body}` at `{colors.muted-ink}`, tags in `{typography.label}`
- **Shape**: Tags use `{rounded.pill}` with `{colors.surface}` background
- **Spacing**: Vertical stack with consistent rhythm, tags arranged horizontally with small gap

### Newsletter capture

- **Anatomy**: Text prompt, email input field, submit action with arrow indicator
- **Surface**: Input field uses `{colors.surface}` background
- **Typography**: Prompt in `{typography.body}` at `{colors.ink}`, input placeholder in `{typography.body}` at `{colors.muted-ink}`, action text in `{typography.body}` at `{colors.ink}`
- **Shape**: Input field with minimal or no border-radius
- **Spacing**: Stacked vertically with tight grouping

### Retro contact form

- **Anatomy**: Hardware frame with screen, physical controls, and hands; screen contains form fields and submit action
- **Surface**: Matte black plastic texture with embossed branding, screen area with orange phosphor glow
- **Typography**: Form labels and input text in monospace-style orange (`{colors.accent}`), "CONTACT US" and "CLOSE" headers in same treatment
- **Shape**: Rounded rectangle hardware body, rectangular screen with thin orange border
- **Spacing**: Form fields arranged in two-column grid within screen, full-width message area below, full-width submit button at bottom
- **Composition**: Centered in viewport, partially obscuring page content, hands entering from edges to hold device
- **Variants**: "CLOSE" control in upper right of screen area

### Footer navigation

- **Anatomy**: Vertical stack of page links with parenthetical counts on some items
- **Surface**: Transparent over `{colors.canvas}`
- **Typography**: Links in `{typography.section-display}` at `{colors.ink}`, counts in `{typography.label}` at `{colors.muted-ink}`
- **Spacing**: Generous line spacing between links, creating monumental list appearance

## Responsive behavior

The design is documented from a desktop viewport. At narrower widths, the massive hero-display type should scale down to preserve legibility and avoid excessive horizontal scrolling—consider a reduction to 4rem or 5rem on tablet and 3rem on mobile. The four-column capabilities grid should collapse to two columns on tablet and single column on mobile, maintaining the vertical stack of headline, text, and tags within each service block.

The logo grid, currently showing approximately eight columns, should reduce column count proportionally: five to six columns on tablet, three to four on mobile. The footer navigation stack may remain vertical but should reduce type size to prevent excessive wrapping.

The retro contact form, being a fixed-proportion hardware object, should scale to fit within the viewport without cropping, potentially reducing to 80% or 90% of viewport width on smaller screens. The hands framing the device may need to be repositioned or hidden at extreme narrow widths to preserve the form's usability.

Touch targets for navigation and the submit action should maintain minimum 44px height. The email input in the newsletter capture and all fields in the retro form should use appropriate mobile input types and prevent zoom on focus.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the dominant ground; any deviation weakens the system's impact
- The extreme scale contrast between hero-display and body type
- The single orange accent used sparingly and only for interactive emphasis
- The bordered logo grid as a signature social-proof pattern
- The retro hardware form as a distinctive interactive moment with its phosphor-orange screen treatment

### Avoid
- Introducing additional accent colors; the monochrome-plus-orange structure is intentionally severe
- Using borders heavier than 1px for dividers or cells
- Applying border-radius to the logo grid cells; the sharp rectangular tessellation is essential
- Setting hero-display type in weights heavier than 200; the ethereal quality depends on the ultra-light stroke
- Adding gradient backgrounds or drop shadows to interface elements

### Recommended build order
1. Establish the black canvas and Geist family for body text and navigation
2. Implement the hero section with viewport-width display type and photographic background
3. Build the logo grid with 1px bordered cells and centered marks
4. Create the capabilities section with four-column responsive grid and pill tags
5. Add the footer with newsletter capture and vertical navigation
6. Implement the retro contact form as an overlay with hardware styling and orange screen text

### Accessibility
- Ensure the orange accent on black meets WCAG AA contrast ratios for interactive elements; the current #ff5500 against #000000 achieves this for large text and UI components
- Provide visible focus indicators that extend beyond color alone, such as outline offsets on navigation links and form controls
- The retro form's orange-on-black screen text should be verified at small sizes; consider increasing weight or size if needed for the monospace-style treatment
- Maintain semantic heading hierarchy despite the visual flattening: the hero tagline should be h1, section headlines h2, service titles h3
- Ensure the email input and all retro form fields have associated labels, not just placeholder text

## Scope note

This guide covers the homepage surface including hero, capabilities, logo grid, footer, and the retro-styled contact overlay. Interior pages, mobile-specific layouts, motion behavior, hover states, and loading sequences are not represented in the supplied material. Measurements are practical adaptation targets derived from the visible desktop compositions.
