# How mykc.cargo.site is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mykc.cargo.site-design)

Last updated: 2026-08-10

## Captured pages

[![OSULLOC brand identity project page showing stacked teal and black product boxes against a white background, with the mykc logo and navigation visible in dark chrome.](https://pin.fontofweb.com/10403?format=jpg)](https://design.withfudge.com/share/pin-10403)

[OSULLOC brand identity project page showing stacked teal and black product boxes against a white background, with the mykc logo and navigation visible in dark chrome.](https://design.withfudge.com/share/pin-10403)

[![Directory Magazine cover featuring a teal book with black typography on a cool gray surface, displayed within the dark portfolio chrome.](https://pin.fontofweb.com/10321?format=jpg)](https://design.withfudge.com/share/pin-10321)

[Directory Magazine cover featuring a teal book with black typography on a cool gray surface, displayed within the dark portfolio chrome.](https://design.withfudge.com/share/pin-10321)

[![Directory Magazine interior spread showing a left-page photograph of a plastic container and a right-page headline Big Data Tells Us in black serif type on pale blue.](https://pin.fontofweb.com/10320?format=jpg)](https://design.withfudge.com/share/pin-10320)

[Directory Magazine interior spread showing a left-page photograph of a plastic container and a right-page headline Big Data Tells Us in black serif type on pale blue.](https://design.withfudge.com/share/pin-10320)

[![Directory Magazine interior spread with a left-page photograph of a person in a field and a right-page teal panel with the headline The Place Where The Carrot Leaf Took Me in](https://pin.fontofweb.com/10319?format=jpg)](https://design.withfudge.com/share/pin-10319)

[Directory Magazine interior spread with a left-page photograph of a person in a field and a right-page teal panel with the headline The Place Where The Carrot Leaf Took Me in](https://design.withfudge.com/share/pin-10319)

## Overview

MYKC Studio's portfolio site presents design work through a dark, immersive viewing environment. The interface functions as a minimal chrome that recedes behind project photography, allowing editorial and brand imagery to command full attention. The system employs a near-black deep indigo canvas with pure black overlays for navigation and structural elements, creating a cinematic presentation mode where each project appears as a focused light box against darkness.

The visual language is deliberately restrained: two type families serve distinct roles, with Apple SD Gothic Neo handling interface text at small sizes and By Dinamo providing display typography for project titles and descriptions. Spacing is generous and systematic, with consistent padding that creates breathing room around all content. The overall impression is of a professional studio confident enough to let work speak for itself, using the interface only to frame and navigate between projects.

## Colors

The color system is built on extreme contrast between dark interface surfaces and light project content. Every color serves a specific structural or communicative role.

| token | value | use |
|---|---|---|
| canvas | #14004A | Primary page background; deep indigo-black that creates cinematic darkness |
| surface | #000000 | Navigation overlays, modal backgrounds, and structural chrome |
| ink | #000000 | Body text color on light backgrounds; default text inheritance |
| ink-inverse | #FFFFFF | Text on dark surfaces; project titles and descriptions |
| accent | #0000EE | Standard link blue; visible in interactive elements |
| muted | #FFFFFF | Subtle light elements; available for secondary text on dark backgrounds |

The canvas color #14004A defines the site's atmospheric quality. This deep indigo-black is dark enough to function as black in most viewing conditions while carrying subtle color depth that prevents the flatness of pure #000000. The surface token uses pure black for navigation and overlay elements that must read as distinct planes above the canvas.

Project photography and editorial content typically appears against white or light backgrounds within the viewer, creating natural contrast without interface color intervention. The accent blue appears in standard hyperlink styling inherited from browser defaults, providing familiar interactive affordance without custom theming.

## Typography

The type system relies on three family labels with clear role separation. Apple SD Gothic Neo handles all body and interface text at small sizes with neutral, highly legible forms. By Dinamo, credited to Dinamo (https://abcdinamo.com/), provides display typography with distinctive character for project titles and descriptions. The font source data also references By Dinamo-4705424956708259704 as the specific webfont file identifier for the Cargo-hosted Dinamo Regular cut. Applesystem serves as a system fallback for chrome labels. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Apple SD Gothic Neo | 0.75rem | 400 | 1.4 | 0em | Interface labels, metadata, captions, navigation |
| body-large | Apple SD Gothic Neo | 1.0625rem | 400 | 1.4 | 0em | Extended reading text, larger body contexts |
| display | By Dinamo | 1.35rem | 400 | 1.4 | 0em | Project titles, descriptions, primary content |
| display-large | By Dinamo | 1.5rem | 400 | 1.2 | 0em | Featured headings, prominent project names |
| label | Applesystem | 0.875rem | 400 | 1.4 | 0em | System labels, chrome text, secondary navigation |
| caption | Apple SD Gothic Neo | 0.625rem | 400 | 1.4 | 0em | Small metadata, image credits, fine print |

The body size of 0.75rem (12px at 16px root) establishes the site's information-dense baseline. Body-large at 1.0625rem (17px) accommodates contexts requiring slightly more readable text without departing from the restrained scale. Display sizes at 1.35rem and 1.5rem create clear hierarchy without dramatic scale jumps, maintaining the refined, editorial quality appropriate for a design studio portfolio. Both display tokens use By Dinamo at 400 weight with normal letter spacing, allowing the typeface's inherent character to provide distinction rather than artificial compression or expansion.

Line heights remain comfortable and open at 1.4 for body, body-large, display, and caption, with display-large tightening slightly to 1.2 for more compact heading blocks. The caption token at 0.625rem serves fine print and metadata needs. The Applesystem family serves as a fallback and label-specific face at 0.875rem, slightly larger than body for improved readability in chrome contexts.

## Layout

The layout system centers on a full-bleed project viewer that occupies the viewport, surrounded by minimal persistent navigation. Content containers use consistent padding that scales with project type and density.

The base spacing unit is 0.125rem (2px), from which all measurements derive. Standard viewport padding is 2.625rem (42px), creating consistent margins between content edges and the browser chrome. Project containers receive 1.875rem (30px) padding for standard density layouts, while more spacious presentations use 3.375rem (54px) padding to create generous breathing room around individual images.

Vertical rhythm relies on substantial section spacing of 6.75rem (108px) between major content blocks, with tight 0.75rem (12px) spacing for related element clusters. The layout avoids borders and visible separators, relying entirely on whitespace to structure content relationships.

Project images typically appear centered within the viewer, with maximum dimensions constrained by viewport padding. The dark canvas creates natural vignetting that focuses attention on light project content. Navigation elements float above content in fixed or absolute positioning, ensuring persistent access without competing visually with project work.

## Visual language

The visual language prioritizes editorial presentation over interface decoration. Photography and print work appear as physical objects—books, boxes, spreads—photographed against neutral backgrounds and presented at slight angles that suggest three-dimensionality and craft. This treatment elevates portfolio pieces from flat screenshots to tangible artifacts.

Color in project photography tends toward muted, sophisticated palettes: teal and seafoam greens in packaging work, warm paper tones in editorial spreads, cool grays in product photography. The interface never competes with these project colors, maintaining its dark indigo-black constant across all pages.

Typography in project work shows deliberate contrast between display and body scales. Magazine spreads feature large serif headlines in black against pale blue or teal panels, with smaller body text in clean sans serifs for extended reading. This editorial hierarchy carries into the site's own typography, where By Dinamo's distinctive forms echo the crafted quality of the displayed work.

The overall mood is contemplative and professional, with darkness creating intimacy and focus. There is no decorative illustration, no gradient backgrounds, no shadow effects. Every visual element serves either navigation or content presentation.

## Components

### Project viewer

The project viewer is the central component, occupying the full viewport with the canvas background. It presents project photography centered and scaled to fit within padded bounds.

- **Anatomy**: Viewport-filling container, centered image/media element, optional caption or title overlay, navigation arrows on left and right edges
- **Surface**: Background color `{colors.canvas}`, no border, border-radius `{rounded.panel}`
- **Typography**: Project titles use `{typography.display}` in `{colors.ink-inverse}` when overlaid; captions use `{typography.body}`
- **Spacing**: Viewport padding `{spacing.viewport-pad}` on all sides; internal media padding `{spacing.standard}` or `{spacing.generous}` depending on project density
- **Composition**: Single image or sequential images stacked vertically with `{spacing.section}` between; images centered with `max-width: 100%` and `height: auto`
- **Variants**: Standard density (1.875rem padding) for image grids; generous density (3.375rem padding) for hero product shots

### Navigation chrome

Persistent navigation appears as minimal text links floating at viewport edges, typically top-left for logo and top-right for section links.

- **Anatomy**: Fixed-position container, logo mark, text links for major sections
- **Surface**: Transparent or `{colors.surface}` background, no visible border, border-radius `{rounded.panel}`
- **Typography**: `{typography.label}` in `{colors.ink-inverse}` with high contrast against dark canvas
- **Spacing**: Tight padding around individual links; generous margins from viewport edges
- **Composition**: Horizontal arrangement with substantial space between elements

### Project title overlay

Titles and descriptions appear as text blocks positioned over or adjacent to project imagery, using the display typeface for distinctive presence.

- **Anatomy**: Text container, heading element, optional paragraph description
- **Surface**: Transparent background; text color `{colors.ink-inverse}` on dark images or `{colors.ink}` on light images
- **Typography**: `{typography.display-large}` for primary titles; `{typography.display}` for secondary descriptions
- **Spacing**: `{spacing.tight}` below headings, `{spacing.standard}` between title and description

### Image caption

Small metadata text accompanies project images, providing context without visual weight.

- **Anatomy**: Inline text element below or beside image
- **Typography**: `{typography.caption}` in `{colors.ink-inverse}` or `{colors.ink}` depending on surrounding contrast
- **Spacing**: `{spacing.tight}` above or below associated image

## Responsive behavior

The layout maintains its dark canvas and centered content approach across viewport sizes. Viewport padding should reduce proportionally on smaller screens, likely to `{spacing.standard}` (1.875rem) for tablets and `{spacing.tight}` (0.75rem) for mobile devices. Project images should continue to center and scale to fit available width, maintaining aspect ratio.

Typography scales should remain fixed in rem units, ensuring that display text does not become overwhelming on small screens. The body size at 0.75rem may require minimum size enforcement or slight increase for mobile readability. Navigation chrome should collapse to a compact menu or remain as minimal text links depending on link count.

Touch targets for navigation arrows should expand to minimum 44px on touch devices, with invisible hit areas extending beyond visible arrow graphics. Project viewer swipe gestures should enable horizontal navigation between sequential images in multi-image projects.

## Practical implementation guidance

### Preserve
- The deep indigo-black canvas color that creates the site's distinctive cinematic atmosphere
- Generous viewport padding that frames content with breathing room
- The stark contrast between dark interface and light project photography
- By Dinamo's distinctive character for all display typography
- Editorial presentation of physical work (books, boxes, prints) rather than flat digital mockups

### Avoid
- Adding decorative backgrounds, gradients, or shadow effects to the interface
- Using light interface themes that would destroy the dark gallery effect
- Introducing additional typefaces beyond the established families
- Crowding navigation with too many visible links; maintain minimal chrome
- Borders or visible separators between content sections

### Recommended build order
1. Establish the dark canvas background and viewport padding system
2. Implement the project viewer with centered image presentation
3. Add persistent navigation with minimal text links
4. Integrate By Dinamo for display typography with proper font loading
5. Build project page templates with configurable padding density
6. Add sequential image navigation for multi-image projects

### Accessibility
- Ensure all text on dark backgrounds meets WCAG AA contrast ratios; the ink-inverse (#FFFFFF) on canvas (#14004A) exceeds requirements
- Provide visible focus indicators for keyboard navigation that do not rely on color alone
- Include alt text for all project photography describing the visual content
- Maintain logical tab order through navigation and project content
- Consider reduced motion preferences for any image transitions or navigation animations
- Ensure touch targets for navigation arrows meet minimum size requirements

## Scope note

This guide covers the portfolio presentation system visible on project pages for OSULLOC Brand Identity, Directory Magazine, and PRO-SPECS BRANDBOOK. The index or listing page, mobile-specific layouts, hover states, loading behavior, and contact or about pages are not represented in the supplied materials. Measurements derive directly from retained interface values. Verify licensing for By Dinamo and By Dinamo-4705424956708259704 before production use.
