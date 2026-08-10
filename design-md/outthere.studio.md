# How outthere.studio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/outthere.studio-design)

Last updated: 2026-08-10

## Captured pages

[![Large black display typography on vivid orange background with two-column services list below](https://pin.fontofweb.com/7360?format=jpg)](https://design.withfudge.com/share/pin-7360)

[Large black display typography on vivid orange background with two-column services list below](https://design.withfudge.com/share/pin-7360)

[![Massive OutThere wordmark spanning full width with project thumbnails and right sidebar navigation](https://pin.fontofweb.com/7359?format=jpg)](https://design.withfudge.com/share/pin-7359)

[Massive OutThere wordmark spanning full width with project thumbnails and right sidebar navigation](https://design.withfudge.com/share/pin-7359)

[![Urban furniture photography with orange duotone treatment and numbered project captions in corner](https://pin.fontofweb.com/7358?format=jpg)](https://design.withfudge.com/share/pin-7358)

[Urban furniture photography with orange duotone treatment and numbered project captions in corner](https://design.withfudge.com/share/pin-7358)

[![Contact section with rounded message button, heart icon, and footer columns on orange canvas](https://pin.fontofweb.com/7357?format=jpg)](https://design.withfudge.com/share/pin-7357)

[Contact section with rounded message button, heart icon, and footer columns on orange canvas](https://design.withfudge.com/share/pin-7357)

## Overview

OutThere Studio's website presents a deliberately restrained yet visually arresting design language built around a single, saturated orange canvas. The system serves a Montreal-based urban furniture design practice, and its visual choices reflect the studio's physical work: bold forms placed in public space, designed to be seen from a distance and remembered. The entire page operates on a near-monochrome principle—vivid orange (#FF6600) fills nearly every background, while all typography, borders, and interactive elements render in pure black (#000000). This extreme contrast creates immediate visual impact and ensures legibility even at the oversized scales employed throughout.

The design's most distinctive characteristic is its typographic scale. The studio name "OutThere" appears at a monumental size, spanning nearly the full viewport width, with letterforms that become architectural elements in their own right. Body text and service descriptions operate at a similarly confident scale—large enough to read comfortably at a glance, never timid or apologetic. The layout employs a consistent sidebar structure on the right edge, creating a stable navigation anchor against the scrolling content. Photography of urban furniture installations receives a unified orange duotone treatment, integrating documentary material into the site's color world rather than presenting it as separate, realistic imagery. The overall effect is one of confident minimalism: every element earns its place, and the limited palette forces attention toward form, proportion, and the quality of the work itself.

## Colors

The color system is intentionally austere, consisting of exactly three interface colors that create maximum contrast and immediate brand recognition.

| token | value | use |
|---|---|---|
| canvas | #FF6600 | Primary page background, fills nearly all viewport area; the signature OutThere orange |
| ink | #000000 | All typography, borders, icons, and interactive elements; pure black for maximum contrast against canvas |
| surface | #1B1B1B | Near-black for subtle depth variations; used sparingly for raised elements or secondary containers |
| surface-raised | #000000 | Solid black for buttons, badges, and emphasis elements that need to sit above the canvas |

The orange canvas dominates every visible surface. It is not an accent but the foundational atmosphere of the entire experience. Black ink serves every textual and graphical need without variation—there are no gray tones for secondary text, no muted captions. This binary relationship between orange and black creates the system's signature intensity. The near-black surface token (#1B1B1B) appears in limited contexts where a subtle distinction from pure black is needed, such as image treatment overlays or secondary container backgrounds. No gradients, shadows, or transparency effects are employed; the design relies entirely on flat color fields and edge contrast. The orange duotone applied to photography unifies documentary images with the interface, transforming realistic urban scenes into graphic elements that belong to the site's visual world.

## Typography

The typographic system is built on a single family with two weights, deployed at dramatic scale differences that create clear hierarchy through size rather than color or style variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Neue Haas Grotesk Disp W 02 Md | 5.14rem | 700 | 1 | -0.0125em | Monumental display text, studio name, largest statements |
| section-display | Neue Haas Grotesk Disp W 02 Md | 1.285rem | 700 | 1 | normal | Section headings, service category labels, navigation items |
| body | Neue Haas Grotesk Disp W 02 | 1.285rem | 400 | 1.25 | normal | Paragraphs, descriptions, sidebar text, footer information |
| body-large | Neue Haas Grotesk Disp W 02 | 5.14rem | 400 | 1 | -0.0125em | Large body statements, mission text, introductory paragraphs |
| label | Neue Haas Grotesk Disp W 02 Md | 1.928rem | 700 | 1 | normal | Project titles, emphasized list items, medium-scale headings |
| caption | Neue Haas Grotesk Disp W 02 | 0.964rem | 400 | 1.25 | normal | Small labels, image numbers, metadata |

Neue Haas Grotesk Disp W 02, designed by Christian Schwartz and available from Linotype GmbH, provides both Regular (400) and Medium (700) weights. Verify licensing for these families before production use. The family is deployed exclusively—no secondary or accent typefaces appear. The display cut is optimized for large sizes, maintaining tight spacing and crisp edges at the heroic scales employed for the studio name.

The type scale operates on a clear ratio: 0.964rem, 1.285rem, 1.928rem, and 5.14rem. These sizes relate as whole-number multiples of the 0.125rem base unit (approximately 8, 10.28, 15.42, and 41.12 pixels at 16px root). Tracking is tight (-0.0125em) only at the largest size, where letterforms need optical adjustment; all other sizes use normal spacing. Line heights are tight—1.0 for headings and 1.25 for body—creating dense, impactful blocks of text that sit confidently on the orange field.

## Layout

The page employs a distinctive asymmetric structure with a persistent right sidebar and a main content area that scrolls vertically through full-bleed sections.

The layout is anchored by a right-edge sidebar approximately one-fifth of the viewport width, containing navigation links (Projets, À propos, Contact) and project listings with numbered badges. This sidebar remains visually consistent across sections, providing orientation and stable access regardless of scroll position. A thin vertical border or hairline separates the sidebar from the main content, creating a crisp division without introducing additional color.

Main content sections span the remaining width and stack vertically with generous internal spacing. The hero section places the "OutThere" wordmark at maximum scale, bleeding to the edges of its container. Below, project grids display photography in asymmetric arrangements—single large images, paired columns, or staggered compositions—each with a numbered badge positioned in the corner. The services section organizes offerings in a two-column list with horizontal rules between items. The contact section centers a large rounded button within a bordered panel, with footer information arranged in multiple columns below.

Spacing follows a consistent rhythm based on 2.57rem (approximately 41.12px) as the primary gutter and block margin. Section padding uses 5.14rem for major divisions, while tighter 1.285rem spacing separates related elements within a section. The left edge of main content maintains a consistent inset of 2.57rem, creating alignment across disparate sections. No max-width container constrains the content; the design embraces the full viewport, allowing typography and imagery to scale with available space.

## Visual language

The visual language derives its power from restraint and scale. Every element is either orange or black, large or small, present or absent—there are no intermediate states, no decorative flourishes, no chromatic complexity.

Photography receives a consistent orange duotone treatment that maps shadows toward black and highlights toward the signature orange. This treatment transforms documentary images into graphic objects that belong to the interface rather than appearing as external content. The effect is particularly visible on urban scenes: concrete becomes warm, foliage takes on amber tones, and the overall mood shifts from documentary to designed. Numbered badges (01, 02, 06, 07) appear in solid black squares with white or orange numerals, positioned at image corners to identify projects without interrupting the visual field.

The wordmark "OutThere" functions as both identifier and structural element. At its maximum scale, individual letterforms become shapes that interact with the orange ground—the counters of 'O', 'u', 'e' creating negative space, the verticals of 'T', 'h' establishing rhythm. The mixed case treatment (OutThere) with its capital 'T' mid-word creates a distinctive silhouette that aids recognition.

Borders and rules appear as 1px black hairlines, used sparingly to separate list items, define the sidebar edge, or contain interactive elements. The rounded pill shape appears for buttons and badges, introducing a single geometric motif that contrasts with the otherwise rectilinear layout. No shadows, gradients, or dimensional effects are employed; the design maintains absolute flatness throughout.

## Components

### Navigation sidebar

- **Anatomy**: Vertical stack of text links (Projets, À propos, Contact) at top; below, project entries with numbered badge, category label, and project title
- **Surface and text color**: Transparent background over canvas orange; all text in ink black
- **Typography**: Navigation links use section-display; project titles use label; category labels use body
- **Shape**: No visible container; separated from main content by thin vertical border
- **Spacing**: Links stacked with 2.57rem vertical padding; project entries separated by substantial vertical space (approximately 5.14rem)
- **Composition**: Right-aligned text within sidebar width; consistent left padding creates alignment

### Project card

- **Anatomy**: Full-bleed photograph with orange duotone treatment; numbered badge in bottom-right corner; associated text entry in sidebar
- **Surface and text color**: Image treated to orange-black duotone; badge is solid black square with contrasting numeral
- **Typography**: Badge number uses body or caption size; sidebar entry uses label for title, body for category
- **Shape**: Image is rectangular, no border radius; badge is small square with minimal rounding
- **Spacing**: Images separated by 2.57rem gutters; badge inset from edges
- **Composition**: Images may appear singly at large scale, in pairs with asymmetric sizing, or in staggered arrangements

### Services list

- **Anatomy**: Section heading "Services" followed by two-column grid of service names; horizontal rules separate rows
- **Surface and text color**: Transparent over canvas; text in ink black
- **Typography**: Section heading uses section-display; service names use section-display at same size
- **Shape**: Horizontal rules as 1px black hairlines spanning column width
- **Spacing**: Rules positioned between rows with 2.57rem vertical rhythm; columns separated by substantial gutter
- **Composition**: Two-column grid with left-aligned text; six services arranged in three rows of two

### Contact button

- **Anatomy**: Large rounded rectangle containing text "Laissez un message" followed by heart icon
- **Surface and text color**: Transparent fill with 1px black border; text and icon in ink black
- **Typography**: Text uses body-large at 5.14rem; heart icon scales with text
- **Shape**: Rounded rectangle with 1.607rem radius (approximately 25.7px), creating a pill-like but not fully circular form
- **Spacing**: Generous internal padding creating substantial height; centered within bordered panel
- **Composition**: Horizontally centered in main content area; panel border creates contained field around button

### Footer

- **Anatomy**: Multiple columns containing studio address, email contact, social link, and copyright
- **Surface and text color**: Transparent over canvas; text in ink black
- **Typography**: Column headings use section-display; details use body
- **Shape**: No visible container or rules; clean text blocks
- **Spacing**: Columns distributed horizontally with consistent gutters; vertical padding of 2.57rem from content above
- **Composition**: Four-column layout with left-aligned text in each; final column contains attribution "Design & made by Xavier × Xavier"

## Responsive behavior

The design's desktop layout relies on a fixed sidebar and full-bleed main content, a structure that requires significant reorganization for narrower viewports. At reduced widths, the sidebar should stack above or below main content rather than compressing horizontally, as its text links and project entries need adequate line length. The two-column services grid should collapse to a single column, with horizontal rules extending full width. Project imagery should maintain aspect ratio while scaling to fit available width, with numbered badges remaining visible and legible. The monumental "OutThere" wordmark should scale down proportionally, though its impact depends on maintaining the largest possible size—consider reducing to a single line or abbreviated form rather than allowing excessive wrapping. The contact button's large rounded form should remain touch-friendly, with minimum height of 44px for accessibility. No breakpoint-specific behavior is visible in the source; these recommendations follow from the layout's structural properties.

## Practical implementation guidance

### Preserve
- The binary orange-and-black color relationship; introducing additional hues would undermine the system's intensity
- The monumental typographic scale, particularly for the studio name and large statements
- The orange duotone treatment on all photography; this is essential to visual cohesion
- The right sidebar as persistent navigation and project index
- Neue Haas Grotesk Disp W 02 in both Regular and Medium weights; substitute grotesques will not replicate the precise character

### Avoid
- Gray tones or opacity variations for "secondary" text; the design commits fully to black on orange
- Drop shadows, gradients, or dimensional effects; the flatness is intentional
- Rounded corners on images or containers except where specified (buttons, badges)
- Multiple font families or decorative typefaces
- Max-width containers that would constrain the full-bleed character

### Recommended build order
1. Establish the orange canvas as global background and black as default text color
2. Implement the typographic scale with Neue Haas Grotesk at specified sizes
3. Build the right sidebar structure with navigation and project entry pattern
4. Create the hero wordmark at maximum scale with proper letter-spacing
5. Develop project card component with duotone image treatment and numbered badge
6. Implement services list with two-column grid and horizontal rules
7. Build contact section with rounded bordered button
8. Add footer with multi-column information layout

### Accessibility
- The orange-black combination provides strong contrast for large text but should be verified against WCAG standards for smaller body text; the 5.14rem display sizes easily pass, but 1.285rem body text may need testing
- Ensure interactive elements in the sidebar have adequate touch targets on mobile
- The heart icon in the contact button should have accessible labeling if it functions as a submit action
- Consider focus indicators that maintain the visual language—perhaps a black outline offset from orange elements

## Scope note

This guide covers the OutThere Studio homepage including the hero, project showcase, services, and contact sections. Interior pages, mobile layouts, hover states, form validation, and motion behavior are not represented in the supplied material. The rounded message button and sidebar navigation suggest interactive functionality not fully demonstrated in static view. Measurements derive from the documented interface values and render at the specified pixel equivalents.
