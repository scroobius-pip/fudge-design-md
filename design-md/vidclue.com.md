# How vidclue.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/vidclue.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed video idea library interface showing category navigation sidebar with coral-red textured device frame and example content panel](https://pin.fontofweb.com/3157?format=jpg)](https://design.withfudge.com/share/pin-3157)

[Dark-themed video idea library interface showing category navigation sidebar with coral-red textured device frame and example content panel](https://design.withfudge.com/share/pin-3157)

[![Minimal dark interface with coral-red textured frame in dimmed state showing navigation dots and promotional banner](https://pin.fontofweb.com/3156?format=jpg)](https://design.withfudge.com/share/pin-3156)

[Minimal dark interface with coral-red textured frame in dimmed state showing navigation dots and promotional banner](https://design.withfudge.com/share/pin-3156)

## Overview

Vidclue presents a video idea library as a dark, immersive application wrapped in a distinctive textured coral-red device frame. The interface treats content discovery like browsing a dedicated hardware device, with a split-panel layout that separates category navigation from example content. The visual system relies on extreme contrast between deep black surfaces and warm coral structural elements, creating a cinematic atmosphere that keeps attention on the video concepts themselves. The design avoids conventional web page conventions in favor of an app-like experience where the frame itself becomes a memorable brand signature. Every element serves the core task of helping creators find and explore video ideas efficiently, with minimal chrome and maximum content density.

## Colors

The palette builds tension between warm structural coral and cool, deep content surfaces. The coral frame provides immediate visual identity, while the near-black interior panels create a theater-like environment for viewing video concepts.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary content panel backgrounds, active category fill, deepest shadows |
| surface | #151515 | Slightly elevated dark surfaces, category hover states, secondary panels |
| coral | #D14D4D | Primary accent, active navigation indicators, brand highlights |
| coral-dark | #A03030 | Frame shadow edges, depth modeling on textured surfaces |
| coral-texture | #B84040 | Main device frame background with visible grain texture |
| muted-ink | #444444 | Scroll prompts, secondary controls, disabled states |
| canvas | #F5F0EB | Light content preview areas, example card backgrounds, contrast panels |
| action | #D14D4D | Primary interactive elements, selected states, brand moments |

The coral frame operates as a warm envelope around cold dark content. The texture visible across the frame surface adds organic variation that prevents the color from feeling flat or digital. Inside the frame, content panels use pure ink black to eliminate visual competition with colorful video thumbnails or example imagery. The canvas tone appears selectively in content preview areas, offering necessary light contrast without breaking the dark-dominant mood. The promotional banner introduces an independent indigo accent (#6366F1) for external calls-to-action, clearly separating platform content from third-party messaging.

## Typography

The type system uses Inter exclusively, leveraging its extensive weight range for clear hierarchy within a single family. The design favors small, efficient sizes that maximize content density while maintaining legibility against dark backgrounds.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| brand | Inter | 1.25rem | 600 | 1.2 | -0.01em | Logo wordmark "Vidclue" |
| tagline | Inter | 0.5rem | 500 | 1.4 | 0.08em | "VIDEO IDEA LIBRARY" descriptor |
| section-label | Inter | 0.625rem | 500 | 1.3 | 0.06em | Category section headers like "5. INTERNET TRENDS" |
| navigation | Inter | 0.875rem | 400 | 1.4 | 0 | Top filter tabs "ALL", "BKM", "MOR" |
| category-active | Inter | 0.875rem | 600 | 1.4 | 0 | Selected category with bullet indicator |
| category-inactive | Inter | 0.875rem | 400 | 1.4 | 0 | Unselected category list items |
| body | Inter | 0.875rem | 400 | 1.5 | 0 | Description paragraphs in content panel |
| counter | Inter | 0.75rem | 500 | 1.3 | 0.02em | Item counts, scroll prompts, metadata |

The brand token uses a slightly negative tracking to tighten the logotype, while tagline and section-label tokens employ positive tracking and uppercase transformation for institutional, utilitarian voice. Body text maintains generous line height for comfortable reading of longer descriptions. The counter token handles small numeric information with slightly increased weight for scannability. Verify licensing for these families before production use. Inter was designed by Rasmus Andersson and is available from Rsms.

## Layout

The interface follows a rigid split-panel architecture contained within the decorative device frame. The frame itself establishes an outer boundary with substantial rounded corners, creating the impression of a physical tablet or dedicated viewing device.

The left panel occupies approximately 45 percent of the interior width, serving as the primary navigation surface. It contains the brand lockup at top, followed by scrollable category lists organized into numbered sections. Each category entry spans the full panel width with comfortable vertical padding. A subtle divider or spacing separates section groups.

The right panel takes the remaining 55 percent, presenting the active category's description and example content. A fixed header within this panel shows the category title with an item counter, accompanied by bookmark and overflow actions. Below, a description paragraph introduces the category concept, followed by a scrollable content area. A persistent scroll prompt anchored at the bottom encourages further exploration.

Between the panels, a narrow vertical divider with a draggable handle provides resize affordance. The right edge of the frame features a vertical control strip with circular hardware-style buttons for power, navigation up, and navigation down, plus a textured speaker grille pattern below.

The promotional banner in the second image demonstrates an overlay pattern: fixed position, full-width at bottom, rounded pill shape with dismiss action. This sits outside the device frame metaphor, indicating external platform messaging.

## Visual language

The dominant visual signature is the textured coral device frame, which transforms a conventional web application into something resembling premium consumer electronics. The texture suggests fabric or fine-grain metal, catching light unevenly across its surface and creating subtle depth variation. This materiality contrasts deliberately with the flat, matte black of the interior panels.

The frame's corner radius is generous and consistent, softening the overall silhouette. Interior panels use a smaller but still substantial radius, maintaining family resemblance while establishing clear containment hierarchy. The hardware buttons on the right edge reinforce the device metaphor with circular recesses and simple iconography.

Content hierarchy relies on extreme value contrast rather than color variation. Active categories gain a subtle background lift to surface tone, while inactive items recede against ink black. The bullet indicator for active categories uses a small filled circle, minimal but unambiguous. Typography weight shifts provide the primary hierarchical signal within the constrained palette.

The promotional banner introduces a secondary visual mode: rounded pill containers with solid indigo fill, clearly distinguishable from the coral-and-black product language. This separation prevents commercial messaging from polluting the core experience aesthetic.

## Components

### Device Frame

The outermost container presents a textured coral surface with substantial rounded corners. The texture appears as fine grain or noise distributed evenly across the surface, visible in both direct light and shadow. The frame wraps all interface elements with consistent internal padding, creating a bezel-like border around the functional panels.

- **Surface**: Textured coral fill with subtle shadow modeling along edges
- **Shape**: Large rounded corners, approximately 1.5rem radius
- **Padding**: Generous internal spacing, approximately 1.5rem on all sides
- **Hardware strip**: Right edge contains circular control buttons and speaker grille pattern

### Content Panel

Interior panels use pure ink black with smaller rounded corners, creating nested containment. The left panel shows category navigation; the right panel shows active content.

- **Surface**: Solid ink black fill
- **Shape**: 0.75rem corner radius
- **Typography**: Varies by panel purpose
- **Scroll behavior**: Vertical scrolling with custom scrollbar styling

### Category List Item

Individual category entries span the full navigation panel width with comfortable vertical padding. The active state receives a subtle surface background lift and weight increase.

- **Anatomy**: Leading bullet indicator, label text, full-width touch target
- **Active surface**: Slightly elevated dark tone with filled bullet
- **Inactive surface**: Transparent, ink black inherited from panel
- **Typography**: 0.875rem Inter, weight 400 inactive, 600 active
- **Spacing**: Approximately 1rem vertical padding per item

### Category Header

Section dividers within the category list use small uppercase labels with positive tracking, establishing organizational hierarchy without heavy visual weight.

- **Typography**: 0.625rem Inter, weight 500, uppercase, 0.06em tracking
- **Color**: Muted tone, slightly above inactive category visibility
- **Spacing**: Preceded by section gap, approximately 1.5rem from previous group

### Content Header

Fixed header within the right panel showing active category identification and available actions.

- **Anatomy**: Category title with item counter, bookmark icon, overflow menu
- **Typography**: Section-label style for category identifier, navigation style for actions
- **Surface**: Transparent over scrolling content, likely with blur backdrop when scrolled

### Scroll Prompt

Anchored action element encouraging further content exploration.

- **Surface**: Muted-ink gray with pill shape
- **Typography**: Counter token, 0.75rem with mouse icon
- **Shape**: Full pill, 9999px radius
- **Position**: Fixed to bottom of content panel

### Promotional Banner

External messaging component with distinct visual treatment.

- **Surface**: Indigo fill, full pill shape
- **Typography**: Navigation token, white text
- **Actions**: Text link with dismiss close button
- **Position**: Fixed overlay, bottom of viewport outside device frame

## Responsive behavior

The device frame metaphor implies a constrained viewport experience. On larger displays, the frame likely centers with surrounding negative space, maintaining fixed maximum dimensions. The split-panel ratio may adjust, with the left navigation panel potentially collapsing to an icon rail or drawer on narrower viewports. The hardware button strip on the right edge suggests touch-optimized interaction; mouse users would rely on conventional scroll and click patterns.

The promotional banner demonstrates awareness of viewport boundaries, sitting full-width below the framed experience. This component should remain accessible across viewport sizes, potentially stacking its content vertically on narrow screens.

Category lists with extensive item counts require careful scroll container management. The fixed header in the right panel should use backdrop blur or solid background when content scrolls beneath, maintaining readability.

## Practical implementation guidance

### Preserve
- The textured coral frame as the primary brand signature; replicate the grain texture through CSS noise or image assets
- Extreme contrast between warm frame and cool dark interiors
- Single-family typography with weight-based hierarchy
- Hardware button strip as distinctive right-edge detail
- Generous corner radii establishing device metaphor

### Avoid
- Adding colorful accents inside the dark panels; the coral frame provides sufficient warmth
- Flat frame surfaces without texture variation
- Multiple font families that compete with Inter's clean neutrality
- Breaking the device frame on standard laptop or desktop viewports
- Light mode inversion that would destroy the cinematic atmosphere

### Recommended build order
1. Establish the textured coral frame container with proper corner radius and internal padding
2. Implement the split-panel grid with draggable divider
3. Build category navigation with active/inactive states and section headers
4. Create content panel with fixed header and scrollable example area
5. Add hardware button strip with circular controls
6. Implement scroll prompt and promotional banner overlays
7. Polish scrollbar styling to match dark aesthetic

### Accessibility
- Ensure category list items have clear focus indicators distinct from active state
- Provide keyboard navigation for the draggable panel divider
- Maintain minimum 4.5:1 contrast for body text against ink backgrounds
- Add aria-labels to icon-only hardware buttons
- Consider reduced-motion preferences for any panel transitions
- The dark-dominant palette benefits users with light sensitivity but may need contrast adjustment for low-vision users

## Scope note

This guide covers the physical challenge category page and surrounding frame interface of Vidclue. Mobile layouts, additional category pages, video playback states, bookmark functionality, and user authentication flows are not represented in the supplied images. Motion design, loading states, and error handling are not described. Measurements are practical adaptation targets derived from visual inspection of the desktop interface.
