# How sanalabs.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sanalabs.com-design)

Last updated: 2026-08-10

## Captured pages

[![Careers page hero with employee portrait quote and lime-green principles section with navigation header](https://pin.fontofweb.com/10198?format=jpg)](https://design.withfudge.com/share/pin-10198)

[Careers page hero with employee portrait quote and lime-green principles section with navigation header](https://design.withfudge.com/share/pin-10198)

[![Company mission section with split headline and body text above large portrait video thumbnail](https://pin.fontofweb.com/10200?format=jpg)](https://design.withfudge.com/share/pin-10200)

[Company mission section with split headline and body text above large portrait video thumbnail](https://design.withfudge.com/share/pin-10200)

[![Office interior carousel showing London workspace with warm lighting and location selector thumbnails](https://pin.fontofweb.com/10199?format=jpg)](https://design.withfudge.com/share/pin-10199)

[Office interior carousel showing London workspace with warm lighting and location selector thumbnails](https://design.withfudge.com/share/pin-10199)

[![Dark moody office interior with Stockholm London New York location text overlay and carousel thumbnails](https://pin.fontofweb.com/10201?format=jpg)](https://design.withfudge.com/share/pin-10201)

[Dark moody office interior with Stockholm London New York location text overlay and carousel thumbnails](https://design.withfudge.com/share/pin-10201)

## Overview

Sana Labs presents itself as an AI company with a distinctly human, editorial sensibility. The visual system balances technological credibility with warmth through a careful interplay of restrained typography, generous whitespace, and immersive photography. The design avoids the cold minimalism typical of enterprise software in favor of a more approachable, magazine-like aesthetic that foregrounds people, places, and ideas.

The system operates across two primary modes: a light, airy default state with black text on white, and dramatic dark sections where photography takes center stage with overlaid white typography. A signature electric-lime accent color appears selectively to energize specific moments—most notably the "Principles we live by" section—without overwhelming the overall restraint. The variable Sana Sans typeface provides the entire typographic voice, ranging from delicate labels to commanding display sizes with consistent negative tracking that lends a crafted, contemporary feel.

## Colors

The palette is intentionally compact, deriving its character from extreme contrast rather than complexity. Black and white dominate, with warm neutrals and a single vibrant accent providing range.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark backgrounds, primary buttons |
| ink-soft | #090909 | Slightly softened black for image overlays and deep surfaces |
| canvas | #FFFFFF | Page background, text on dark sections, button fills |
| surface-warm | #EFEFED | Warm gray for subtle section differentiation |
| accent-lime | #CDFE00 | Energetic highlight for principles section and key moments |
| accent-blue | #0055FF | Links and interactive accents |
| muted | #0A0A0A | Shadow tones, subtle borders |

The default mode presents black text on a white canvas with generous breathing room. Dark sections invert this relationship, placing white text over immersive photography with a subtle gradient overlay that ensures readability without sacrificing image presence. The lime accent operates as a deliberate disruption—its high chroma against black text creates an unmistakable focal point that signals cultural content rather than product features. Image palette colors from photography remain strictly descriptive; no photographic tones are elevated to interface tokens.

## Typography

Sana Sans Vf, a variable font from Letters From Sweden and Stockholm Design Lab, carries the entire typographic system. Its consistent use across all weights and sizes creates a unified voice that feels both precise and approachable. The typeface is licensed; verify licensing for this family before production use.

The design facts also list Applesystem and Times as detected font families. These appear to be system-level fallbacks or browser defaults rather than actively chosen design voices, as Sana Sans Vf dominates every visible text element in the interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Sana Sans Vf | 5.5rem | 400 | 0.95 | -0.03em | Homepage hero headlines |
| section-display | Sana Sans Vf | 2rem | 500 | 1.1 | -0.01em | Section headings, "Principles we live by" |
| body | Sana Sans Vf | 1rem | 400 | 1.4 | -0.01em | Paragraphs, descriptions, general content |
| body-medium | Sana Sans Vf | 1rem | 500 | 1.4 | -0.01em | Emphasized body text, quote attributions |
| label | Sana Sans Vf | 0.875rem | 450 | 1.4 | -0.01em | Buttons, tags, small UI elements |
| navigation | Sana Sans Vf | 1rem | 400 | 1.4 | -0.01em | Header navigation items |
| quote-display | Sana Sans Vf | 1.375rem | 500 | 1.2 | -0.01em | Employee testimonials, pull quotes |

The type scale is built on a 2px relative unit, with sizes snapping to whole multiples. Display sizes push into dramatic territory—88px for the homepage hero, 72px for secondary heroes—while maintaining the same tight leading and tracking that unites the system. Body text at 16px with 22.4px line-height provides comfortable reading density. The 450 weight for labels offers a subtle differentiation from body without jumping to full medium weight.

## Layout

The layout system follows a centered container model with consistent horizontal padding and generous vertical rhythm. Content lives within a max-width container centered via auto margins, creating a refined editorial frame.

The base grid uses 32px horizontal padding on containers, with the main content area constrained by 104.5px side margins that create a comfortable reading measure. Section vertical padding varies by purpose: standard sections receive 40px top and bottom, hero sections expand to 100px top with 40px bottom, and immersive dark sections can push to 192px vertical padding for maximum presence.

Grid gaps follow a consistent pattern: 18px column gaps for tight content groupings, 20px for standard grids, and 24px row gaps for multi-line layouts. The principles section uses a two-column grid with substantial internal spacing, while location cards and similar components stack with tighter 16px internal gaps.

The header maintains a fixed presence with 32px horizontal padding, 20px column gaps between navigation clusters, and 8px gaps for tightly grouped elements like logo-lockups. A subtle shadow—`rgba(10, 10, 10, 0.05) 0px 0px 0px 1px, rgba(10, 10, 10, 0.08) 0px 8px 16px 0px`—lifts dropdown menus and floating elements without heavy chrome.

## Visual language

Photography drives the emotional core of the Sana experience. Images are treated as full-bleed immersive fields, often with dark overlays that allow white typography to float with authority. The office location photography emphasizes warmth—wood tones, soft lighting, human presence—positioning the company as a place of craft rather than pure technology.

The visual language oscillates between two temperatures: cool, bright whites for information-dense sections, and warm, shadowed photography for cultural storytelling. This temperature shift creates narrative rhythm as users move through the page. The lime accent section breaks this pattern entirely, functioning as a high-energy interlude that demands attention through pure color rather than image.

Typography treatment reinforces this duality. On light backgrounds, black text sits with classical restraint. On photography, white text gains weight through size and the subtle gradient overlay that anchors it visually. The location selector uses a stacked list treatment where inactive cities appear muted, with the active city in full white—an elegant solution for navigation within immersive space.

Rounded corners appear selectively: 8px for contained panels and cards, 32px for prominent floating elements and buttons. The pill shape for primary actions creates friendly, approachable touchpoints against the system's otherwise rectilinear discipline.

## Components

### Header

The header floats above content with a clean white background and subtle bottom border when scrolled. It contains the Sana wordmark, primary navigation with dropdown indicators, and a prominent "Book an intro" call-to-action. Navigation items use the standard body weight with generous 16px gaps between items. The header container matches the global margin structure.

### Hero section

The homepage hero presents massive display typography—up to 88px—centered or left-aligned above the fold, with supporting body text beneath. A secondary hero variant on interior pages uses 72px headlines with tighter spacing to the content below. Both variants maintain the 100px top padding that clears the header and establishes presence.

### Location card

Full-bleed photography containers with overlaid text and a bottom gradient. The location selector presents three city names in a vertical stack, with the active city in white and inactive cities in muted gray. Thumbnail navigation sits at the bottom edge, allowing direct jumping between locations. The card uses 8px border radius and the standard dark gradient overlay.

### Quote block

Employee testimonials appear as large-format pull quotes with the quote text in quote-display size, followed by attribution in body-medium. These often sit adjacent to or overlaid on portrait photography, with the text positioned to maintain clear hierarchy against variable image backgrounds.

### Principles grid

The signature lime section presents a two-column grid of principle statements. Each item follows a consistent structure: a bold principle name in section-display size, followed by explanatory text in body weight. Items are separated by subtle top borders in semi-transparent black. The section heading uses section-display weight and size, with substantial 64px bottom margin before the grid begins.

### Video thumbnail

Large-format video previews use 8px border radius with a play button indicator and "Watch the film" label positioned over the image. The label uses body weight with a small play icon, maintaining the system's typographic restraint even in interactive moments.

### Primary button

Pill-shaped buttons with 32px border radius, using ink background and canvas text for the primary variant, or canvas background with ink text and canvas border for the secondary variant. Padding follows an asymmetric pattern: 10px top, 16px sides, 7px bottom, creating a subtle optical centering that feels intentional rather than mechanical.

## Responsive behavior

The system appears optimized for desktop presentation. The 104.5px side margins and large display sizes suggest a viewport-width-dependent approach that would require significant adaptation for smaller screens.

For implementation, consider these adaptations: reduce hero-display to 3rem on tablet and 2.5rem on mobile, maintaining the tight leading and tracking ratios. Convert the principles grid from two columns to a single column stack. Location cards should maintain full-bleed behavior but stack thumbnails vertically rather than horizontally. The header navigation would benefit from a collapsible pattern, with the "Book an intro" action remaining visible as a persistent floating element.

Touch targets should maintain minimum 44px height for all interactive elements. The asymmetric button padding may need adjustment to symmetrical values on smaller screens where precise optical tuning is less perceptible.

## Practical implementation guidance

### Preserve
- The extreme contrast between light and dark modes; this is the system's signature rhythm
- The consistent use of Sana Sans Vf across every text element—no secondary typefaces for any purpose
- The generous section padding that creates editorial breathing room
- The 8px and 32px radius vocabulary; do not introduce intermediate values
- The negative tracking at all sizes; this is essential to the crafted feel
- The warm photography treatment with its emphasis on human presence and material texture

### Avoid
- Adding additional accent colors beyond the lime and blue; the palette's restraint is deliberate
- Heavy borders or outlines; the system prefers shadow and spatial separation
- Centered text blocks for long-form reading; left alignment maintains the editorial voice
- Generic stock photography; the warm, specific imagery is integral to brand perception
- Rounded corners on large structural containers; reserve radius for components and floating elements

### Recommended build order
1. Establish the type scale with Sana Sans Vf loaded as a variable font, implementing the full size and weight range
2. Build the header with navigation structure and mobile collapse behavior
3. Create the light-mode section template with correct padding and margin structure
4. Implement the dark-mode hero with gradient overlay and location selector
5. Build the principles section with lime background and two-column grid
6. Add interactive elements: buttons, video thumbnails, location carousel
7. Polish with shadow system and micro-interactions

### Accessibility
- Ensure all text over photography meets WCAG contrast requirements; the gradient overlay is essential for this
- Provide visible focus states for keyboard navigation; the pill buttons should show clear focus rings
- Maintain semantic heading hierarchy despite the visual size variations
- Consider reduced-motion preferences for any carousel or video interactions
- The lime accent section should be tested for color blindness impact; the black text on lime generally performs well but verify for specific vision types

## Scope note

This guide covers the careers and about page surfaces with their hero sections, location photography, principles display, and navigation patterns. Homepage-specific hero treatments, product pages, and any interactive states beyond static presentation are not represented. Motion behavior, mobile breakpoints, and form components fall outside the current scope. The 2px relative unit underlies the spacing scale; all values are production-ready implementations. Applesystem and Times appear in the source data as system-level families but do not appear in the visible interface; Sana Sans Vf is the sole active typeface.
