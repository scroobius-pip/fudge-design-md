# How lowercase.club is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lowercase.club-design)

Last updated: 2026-08-10

## Captured pages

[![Blue-on-white halftone portrait with repeating 'book a call' marquee bands and minimal navigation sidebar](https://pin.fontofweb.com/5117?format=jpg)](https://design.withfudge.com/share/pin-5117)

[Blue-on-white halftone portrait with repeating 'book a call' marquee bands and minimal navigation sidebar](https://design.withfudge.com/share/pin-5117)

[![Full homepage with project grid, blue halftone hero portrait, category tags, and top navigation with red telephone icon](https://pin.fontofweb.com/5116?format=jpg)](https://design.withfudge.com/share/pin-5116)

[Full homepage with project grid, blue halftone hero portrait, category tags, and top navigation with red telephone icon](https://design.withfudge.com/share/pin-5116)

## Overview

lowercase.club presents itself as a technical design studio through a deliberately austere visual system. The site opens with a massive halftone-dithered portrait rendered in blue against white, immediately establishing a computational, almost print-production aesthetic. This is not a soft or approachable brand; it is precise, engineered, and slightly confrontational in its minimalism. The design language relies on three core tensions: the organic grain of dithered photography against the rigid geometry of the project grid; the warmth of a serif display face against the clinical neutrality of a grotesque sans; and the relentless repetition of functional text in scrolling marquee bands against the singular, unrepeatable nature of portfolio work. Every element serves the studio's positioning as builders for technology companies—there is no decorative excess, only systematic presentation of capability.

The homepage structure is immediately legible: a hero identity statement on the left, a dense project index on the right, with navigation compressed to essential links and a single prominent call-to-action. The visual system treats the browser viewport as a canvas for editorial layout rather than a scrolling document. Project entries are categorized with flat tag pills, each row a complete case study compressed into thumbnail grid and metadata. The overall impression is of a design team that understands systems so thoroughly they can afford to let their own site operate with restrained confidence.

## Colors

The palette is severely limited, functioning as a two-color print system expanded minimally for digital. Black and white provide all structural contrast; a single blue serves as the sole accent and functional color. This restraint is intentional—the studio's work is meant to speak louder than its container.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, grid lines, project card frames |
| canvas | #FFFFFF | Page background, text on dark surfaces, negative space in halftone images |
| action | #2563EB | Primary buttons, category tags, marquee bands, halftone image tone |
| action-hover | #1D4ED8 | Darker blue for interactive state emphasis |
| halftone | #3B82F6 | Lighter blue visible in dithered image midtones and gradients |
| muted-ink | #6B7280 | Secondary navigation, captions, de-emphasized metadata |

The blue appears in two distinct modes: as flat, saturated fills for interactive elements and tags, and as a dispersed, optical halftone in the hero imagery. This creates a material continuity between the site's functional layer and its atmospheric photography. The dithered images are not merely stylistic; they literalize the "technical" in the studio's positioning—suggesting bitmap displays, early digital rendering, or print production workflows. No gradients are used in UI elements; all color transitions occur within the photographic treatment. Dark mode is not present in the visible system, though the high-contrast foundation would invert cleanly.

## Typography

Three type families from Pangram Pangram Foundry establish a clear hierarchy through contrast of genre and scale. The display face carries editorial warmth; the sans and mono provide utilitarian clarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Mondwest | 4rem | 400 | 1 | -0.02em | Hero identity statement, large page titles |
| section-display | Pp Mondwest | 2.5rem | 400 | 1.1 | -0.01em | Section headers, project category introductions |
| body | Pp Neue Montreal | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, general content |
| label | Pp Neue Montreal Mono Book | 0.75rem | 400 | 1.2 | 0.05em | Category tags, metadata, technical annotations |
| navigation | Pp Neue Montreal | 0.875rem | 400 | 1.2 | 0.02em | Top nav links, sidebar links, utility text |

Pp Mondwest, designed by Steve Marchal Datalaze, supplies the site's only serif voice—used large and tight for the hero statement "we make brands and websites for technology companies." Its slight irregularity and humanist construction prevent the technical aesthetic from becoming sterile. Pp Neue Montreal, designed by Mathieu Desjardins, handles all functional text with neutral grotesque efficiency. Pp Neue Montreal Mono Book appears exclusively in small caps-like application for category labels and technical tags, its fixed-width rhythm reinforcing the systematic quality.

All type sizes are whole-number multiples of 4px (0.25rem), creating a stepped scale that aligns with the grid's underlying logic. The hero display at 64px dominates the viewport; no text exceeds this scale. Verify licensing for these families before production use.

## Layout

The page operates on a split-field composition: left column for identity and atmosphere, right column for content and navigation. This is not a conventional centered container but an asymmetric editorial spread.

The hero zone occupies approximately 40% of viewport width on the left, filled edge-to-edge with the halftone portrait. The right field contains the project index as a vertical stack of rows, each row a complete case study. A thin horizontal rule separates each project entry, with the rule weight matching the 1px borders around individual project thumbnails.

The top navigation compresses to essential links—"Careers," "Work," "Book a call"—aligned right, with the telephone icon treated as a literal visual element rather than abstract symbol. A secondary navigation appears in the left margin below the hero: "careers," "deck," "services," each as plain text links without button treatment.

Project rows follow a consistent internal structure: client name in bold caps, category tags in blue pills, then a horizontal scroll or wrap of thumbnail images. The tag pills sit inline with the project title, creating a label-line relationship. Thumbnail grids use tight gutters, with images framed by hairline borders that make them feel like specimens or slides.

The marquee bands interrupt the layout horizontally, spanning full viewport width with repeating "book a call" text. These create rhythmic breaks in the project grid and serve as persistent conversion prompts without requiring fixed-position elements.

## Visual language

The halftone dither is the site's most distinctive visual material. Applied to photographic portraits, it transforms organic imagery into something between bitmap art and newspaper print. The dither pattern uses vertical line clustering rather than conventional dot screens, creating a moiré-like texture that shifts as the image scales. This treatment appears on both the large hero portrait and smaller atmospheric images, establishing a consistent production language.

The project thumbnails preserve their original design work without halftone treatment—this contrast makes the studio's output feel contemporary and full-color against the retro-computing frame. The thumbnail borders and grid structure evoke design school pin-up boards or process walls, suggesting work in progress rather than finished portfolio.

Repetition is used as a compositional strategy: the scrolling marquee text, the grid of similar-sized thumbnails, the stacked project rows. This systematic accumulation implies volume and capability. The single red telephone icon in the top right corner introduces a spot of warm color against the cool blue system, functioning as a visual alarm or urgent call-to-action.

## Components

### Project row

Anatomy: Client name, category tag group, thumbnail grid, bottom border rule.

Surface and text color: Client name in ink on canvas; tags in canvas on action blue; thumbnails with 1px ink border.

Typography: Client name uses section-display token; tags use label token.

Shape and border: Tags have zero border-radius—sharp rectangular pills. Thumbnail borders are 1px solid ink. Row separator is 1px solid ink.

Spacing: Tags spaced 0.5rem apart internally; thumbnail grid gap of 0.5rem; row padding of 1.5rem vertical.

Composition: Tags sit immediately right of client name, baseline-aligned. Thumbnails wrap or scroll horizontally below.

Variants: Some rows show single large thumbnail; others show 6-8 small thumbnails. Tag count varies from one to four pills.

### Category tag

Anatomy: Text label with solid fill background.

Surface and text color: Background action blue; text canvas white.

Typography: label token, uppercase or small-caps treatment implied by mono face.

Shape and border: Sharp corners, no radius. Padding approximately 0.25rem vertical, 0.75rem horizontal.

Spacing: Inline with sibling tags, separated by 0.5rem gap.

### Marquee band

Anatomy: Full-width horizontal strip with repeating text content.

Surface and text color: Background action blue; text canvas white.

Typography: body token, though rendered at slightly larger apparent size in the visible bands.

Shape and border: No border, no radius. Full bleed to viewport edges.

Composition: Text repeats seamlessly, scrolling or static tiling. Two bands visible—one with canvas text on blue, one inverted or at different scroll position.

### Navigation link

Anatomy: Plain text, no button container.

Surface and text color: ink on canvas; no background.

Typography: navigation token.

Shape and border: None.

Spacing: Horizontal arrangement with generous gap, approximately 2rem between items.

### Hero portrait

Anatomy: Full-height image container with dithered photographic content.

Surface and text color: Blue halftone dots on canvas; no text overlay.

Shape and border: No border, no radius. Bleeds to container edges.

Composition: Portrait orientation, figure facing right. Dither pattern creates tonal variation through dot density.

## Responsive behavior

The split-field layout suggests a breakpoint where the left hero column stacks above the project grid. At narrower viewports, the project rows would maintain their internal structure but thumbnails would scroll horizontally rather than wrap. The marquee bands remain full-width at all sizes, though text size may reduce to maintain legible repetition count.

The navigation, currently horizontal and right-aligned, would likely compress to a minimal menu or remain as stacked text links. The category tags, being small and numerous, may wrap to multiple lines within each project row.

The halftone portrait, being the site's signature element, should remain visible but may crop or scale to maintain impact without dominating scroll length.

## Practical implementation guidance

### Preserve
- The exact three-typeface hierarchy: Mondwest for display, Neue Montreal for functional text, Mono for labels.
- The 1px hairline borders on all thumbnail frames and grid separators.
- The sharp-cornered tag pills—no radius on any UI element.
- The halftone dither treatment as a consistent photographic language.
- The asymmetric split between atmospheric left field and content right field.

### Avoid
- Rounded corners on any component—the system is deliberately rectilinear.
- Additional accent colors beyond the single blue; the palette's restraint is its strength.
- Drop shadows or dimensional effects; all depth is created through flat layering and border.
- Generic button styling for navigation; the plain text link is the system's native interactive element.

### Recommended build order
1. Establish the type scale with all three families loaded and the 4px baseline grid.
2. Build the project row component with tag pills and thumbnail grid.
3. Implement the split-field layout with hero portrait and project stack.
4. Add marquee bands with repeating text pattern.
5. Apply halftone image treatment to hero photography.
6. Fine-tune spacing and border weights across all components.

### Accessibility
- Ensure the blue action color meets contrast requirements against white; the saturated #2563EB should be verified for small text compliance.
- The halftone images require alt text describing the portrait content, not merely "decorative."
- Marquee scrolling, if animated, should respect reduced-motion preferences and not auto-play for users who have requested motion reduction.
- The thin 1px borders may be difficult to perceive for low-vision users; consider a minimum 2px alternative or increased contrast option.

## Scope note

This guide covers the homepage surface visible in the supplied images: the hero identity zone, project index grid, category tagging system, and marquee call-to-action bands. Interior pages, project detail views, mobile breakpoint layouts, form interactions, and motion behavior are not represented. Measurements are practical adaptation targets. The halftone image treatment algorithm is described by its visual output, not by implementation method.
