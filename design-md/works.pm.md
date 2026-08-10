# How works.pm is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/works.pm-design)

Last updated: 2026-08-10

## Captured pages

[![About page with split-pane layout showing biography text, client lists, and navigation links in a minimal black-and-white typographic system](https://pin.fontofweb.com/8498?format=jpg)](https://design.withfudge.com/share/pin-8498)

[About page with split-pane layout showing biography text, client lists, and navigation links in a minimal black-and-white typographic system](https://design.withfudge.com/share/pin-8498)

[![Masonry grid of design work thumbnails with studio navigation header and light gray surrounding canvas](https://pin.fontofweb.com/8497?format=jpg)](https://design.withfudge.com/share/pin-8497)

[Masonry grid of design work thumbnails with studio navigation header and light gray surrounding canvas](https://design.withfudge.com/share/pin-8497)

[![Full-bleed project hero image with overlaid white text labels and a descriptive paragraph below on light gray background](https://pin.fontofweb.com/8496?format=jpg)](https://design.withfudge.com/share/pin-8496)

[Full-bleed project hero image with overlaid white text labels and a descriptive paragraph below on light gray background](https://design.withfudge.com/share/pin-8496)

[![Homepage hero with split-pane white space, introductory statement, and a bold red-orange rectangular accent at the bottom](https://pin.fontofweb.com/8495?format=jpg)](https://design.withfudge.com/share/pin-8495)

[Homepage hero with split-pane white space, introductory statement, and a bold red-orange rectangular accent at the bottom](https://design.withfudge.com/share/pin-8495)

## Overview

This design system describes a portfolio website for a designer with a deliberately austere, editorial sensibility. The visual language is built on extreme restraint: near-exclusive use of black and white, generous negative space, and a rigid split-pane layout that organizes content into clear informational zones. The system feels closer to a printed monograph than a conventional web portfolio, with typography doing the heavy lifting of establishing hierarchy and rhythm.

The site operates in two primary modes: a light, airy presentation for project browsing and a stark, high-contrast mode for biographical and index content. Project pages immerse the viewer in full-bleed photography with minimal UI chrome, while informational pages use a disciplined two-column structure that keeps navigation persistently visible. A single vivid accent color—a saturated red-orange—appears sparingly as a compositional anchor, preventing the monochrome palette from feeling clinical.

## Colors

The color system is intentionally minimal, relying on value contrast rather than hue variation to create visual interest.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, buttons, and all UI chrome |
| muted-ink | #11111F | Subtle dark variation for depth without pure black harshness |
| canvas | #FFFFFF | Primary background for content areas and text panels |

The interface operates predominantly in a black-on-white mode for text-heavy pages, inverting to white text overlaid on photography for project heroes. The light gray background visible in project grids and image surrounds derives from the canvas white, with photographic content providing tonal variation. The red-orange accent visible in the homepage hero appears as a large geometric block, functioning as a pure visual punctuation mark within the otherwise achromatic system.

## Typography

The typographic system uses two families: Inter for all interface and display text, and Arial for small functional labels. The hierarchy is established through size and line height rather than weight variation, with the entire system using Regular weight exclusively.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Inter | 1rem | 400 | 1 | 0em | Navigation, lists, captions, and all running text |
| body-large | Inter | 1.75rem | 400 | 1.43 | 0em | Introductory paragraphs and biographical statements |
| display | Inter | 1.25rem | 400 | 1.3 | 0em | Project titles, card overlays, and section headers |
| label | Arial | 0.875rem | 400 | 1 | 0em | Small functional labels and metadata |
| hero-display | Inter | 1.75rem | 400 | 1.43 | 0em | Large introductory statements and hero text |
| navigation | Inter | 1rem | 400 | 1 | 0em | Site navigation and wayfinding links |

The body size at 16px with tight 1.0 line height creates a dense, information-forward feel for lists and navigation. The body-large size at 28px with 40px line height opens up for readable paragraphs. Display at 20px bridges the gap for medium-length labels that need presence without dominating. The Arial label at 13.3333px serves a purely utilitarian role for small metadata. Hero-display matches body-large in specification but serves a distinct semantic role for page-opening statements. Navigation duplicates body specifications for a dedicated wayfinding token. Verify licensing for these families before production use.

## Layout

The layout system is built on a persistent split-pane architecture that divides the viewport into two vertical zones. On informational pages, the left pane carries the site identity and primary navigation, while the right pane contains scrollable content. This structure creates a stable anchor for wayfinding while allowing deep content exploration without losing context.

The split uses a visible 1px vertical border in pure black, positioned at approximately the midpoint of the viewport. Both panes share the same canvas background, with the left pane receiving asymmetric horizontal padding—slightly more on the left edge than the right—to create optical balance against the content margin in the right pane.

Project browsing pages abandon the split in favor of a centered content column set within a light gray surrounding area. This column is narrower than the full viewport, creating a substantial margin that frames the work. Within this column, content flows as a masonry-style grid of project thumbnails with consistent gutter spacing.

Spacing follows a 2px base unit, with practical increments at 6px, 8px, 12px, 20px, 24px, 32px, and 40px. The section spacing of 40px separates major content blocks, while 24px/20px asymmetric padding defines pane interiors. Grid gutters use 12px for tight thumbnail arrangements, and 8px handles small internal adjustments.

## Visual language

The visual language draws from Swiss editorial design and contemporary gallery presentation. The aesthetic is deliberately anti-decorative: no border radii, no shadows, no gradients in the interface itself. The only gradient visible in the system is a subtle white-to-transparent fade used to ease the transition between overlaid text and photography in project heroes.

Imagery is presented with minimal framing. Thumbnails sit edge-to-edge within their grid cells, with no visible borders or hover states apparent in the still views. Full-bleed project images dominate their containers, with white text positioned in the lower-left and lower-right corners as identifiers. This treatment treats photography as primary content rather than decoration.

The red-orange accent block introduces the only saturated color in the system. It appears as a large geometric rectangle, positioned at the bottom of a page like a grounding element. Its scale is substantial—roughly the full width of the content column and a significant portion of the viewport height—making it function as a compositional counterweight to the airy white space above.

A persistent scroll indicator appears as a small black circle with a white downward arrow, fixed to the lower-right corner of the viewport. This is the only consistently visible interactive element beyond text links.

## Components

### Split-pane layout

- **Anatomy**: Two vertical panes separated by a 1px black border. Left pane contains site identity and navigation. Right pane contains scrollable content.
- **Surface**: Both panes use canvas white background. The dividing border uses ink black.
- **Typography**: Navigation links use navigation token. Site identity uses body token at the same size, creating a flat hierarchy where all text elements share equal visual weight.
- **Spacing**: Left pane uses asymmetric padding of 24px left and 20px right. Right pane uses 40px top padding and 32px bottom padding, with 24px left and 20px right content padding.
- **Composition**: The split maintains its proportions across the viewport height, with the left pane acting as a persistent sidebar.

### Project card

- **Anatomy**: Rectangular thumbnail image with overlaid text labels positioned at corners or edges.
- **Surface**: No visible border or background beyond the image itself. Text overlays in white with no text-shadow or backing panel.
- **Typography**: Project titles use display token in white. Date and note counts use body token in white. Tags use body token in white with a hash prefix.
- **Composition**: Images vary in aspect ratio, creating an organic masonry rhythm. Text sits directly on imagery, relying on image content for legibility contrast.

### Navigation link

- **Anatomy**: Plain text link with no underline, no background, and no visible hover state in the still views.
- **Typography**: Navigation token in ink black for light backgrounds. On dark or photographic backgrounds, inverted to white.
- **Spacing**: Links appear with standard inline spacing, separated by whitespace rather than dividers.
- **Composition**: In the split-pane layout, navigation clusters in the upper portion of the left pane. On project pages, a horizontal row of links sits at the top of the content column.

### Scroll indicator

- **Anatomy**: Fixed-position circular button containing a downward arrow icon.
- **Surface**: Solid ink black circle with canvas white arrow icon. No border.
- **Shape**: Perfect circle, sized approximately 40px in diameter.
- **Position**: Fixed to lower-right corner of viewport with consistent margin from edges.

### Content list

- **Anatomy**: Grouped lists with small uppercase or sentence-case category labels followed by comma-separated entries or stacked items.
- **Typography**: Category labels use body token, identical in size to list content, creating a flat hierarchy where spatial grouping alone establishes structure.
- **Spacing**: 40px vertical spacing between category groups. Individual entries stack with tight line height.

## Responsive behavior

The split-pane layout suggests a natural breakpoint where the two-column structure collapses to a single column. At this transition, the left pane content—site identity and navigation—would likely stack above the main content, with the vertical border becoming a horizontal divider or disappearing entirely.

The project grid's masonry arrangement would simplify to fewer columns on narrower viewports, potentially becoming a single column of full-width thumbnails. The generous margins on the light gray surrounding area would compress proportionally, maintaining framing without excessive whitespace.

The fixed scroll indicator should remain visible but may require touch-friendly sizing adjustments for primary input methods. Text overlays on project images may need repositioning or backing treatments if image crops shift dramatically at different aspect ratios.

## Practical implementation guidance

### Preserve
- The extreme restraint of the color palette—resist adding secondary colors beyond the single red-orange accent
- The flat typographic hierarchy where Regular weight dominates all sizes
- The visible 1px borders that structure the split-pane layout
- The generous negative space around content columns and between elements
- The direct text-on-image treatment for project labels, which relies on careful image curation

### Avoid
- Adding border radii to any element—the system is strictly rectilinear
- Introducing drop shadows or elevation effects
- Using the accent color for text, icons, or small UI elements—it is strictly for large geometric fields
- Creating typographic contrast through weight rather than size
- Cluttering the left pane of the split layout with secondary information

### Recommended build order
1. Establish the split-pane layout structure with visible borders and correct padding values
2. Implement the typography scale with Inter at all specified sizes
3. Build the project grid with masonry-like variable aspect ratios
4. Add the full-bleed project hero with corner-positioned white text overlays
5. Implement the red-orange accent as a compositional block element
6. Add the fixed scroll indicator and navigation patterns

### Accessibility
- Ensure text overlaid on images maintains minimum contrast ratios; consider dynamic contrast detection or subtle text backing for unpredictable image content
- The flat visual hierarchy may benefit from semantic HTML structure to communicate information architecture to screen readers
- Navigation links should have clear focus indicators since default browser outlines may be suppressed
- The scroll indicator should be keyboard accessible and have an appropriate aria-label

## Scope note

This guide covers the homepage, about page, and project browsing surfaces visible in the supplied images. Mobile layouts, hover states, loading sequences, and project detail page structures are not represented. All interface corners are square with zero radius throughout.
