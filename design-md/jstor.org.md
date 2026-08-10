# How jstor.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jstor.org-design)

Last updated: 2026-08-10

## Captured pages

[![Independent Voices collection grid showing archival newspaper thumbnails with left sidebar filters for content type, date, subcollection, and access type](https://pin.fontofweb.com/4292?format=jpg)](https://design.withfudge.com/share/pin-4292)

[Independent Voices collection grid showing archival newspaper thumbnails with left sidebar filters for content type, date, subcollection, and access type](https://design.withfudge.com/share/pin-4292)

[![Independent Voices collection landing page with serif page title, search bar, Reveal Digital logo, and four category cards with archival imagery](https://pin.fontofweb.com/4291?format=jpg)](https://design.withfudge.com/share/pin-4291)

[Independent Voices collection landing page with serif page title, search bar, Reveal Digital logo, and four category cards with archival imagery](https://design.withfudge.com/share/pin-4291)

[![Account registration modal with email field, social login buttons, and dark red Create account button on white surface](https://pin.fontofweb.com/4290?format=jpg)](https://design.withfudge.com/share/pin-4290)

[Account registration modal with email field, social login buttons, and dark red Create account button on white surface](https://design.withfudge.com/share/pin-4290)

[![Login modal overlaying homepage hero with landscape painting, showing username, password fields, and dark red Log in button](https://pin.fontofweb.com/4289?format=jpg)](https://design.withfudge.com/share/pin-4289)

[Login modal overlaying homepage hero with landscape painting, showing username, password fields, and dark red Log in button](https://design.withfudge.com/share/pin-4289)

## Overview

JSTOR presents a research platform that balances scholarly authority with approachable clarity. The visual system centers on a stark white canvas that lets archival content and photography breathe, punctuated by a deep burgundy-red action color that signals primary interactions without overwhelming the academic context. Editorial hierarchy is established through the contrast of By Goran Soderstrom-7472105643338214754—a refined serif with classical proportions—for page titles and collection names, against GT America's neutral, highly legible sans-serif for all functional text, labels, navigation, and body copy. The overall impression is one of institutional trust: generous spacing, restrained decoration, and a clear information architecture that guides researchers through vast digital collections without visual fatigue. Modals for authentication float above content with subtle shadow depth, maintaining the clean aesthetic while demanding attention for account-related tasks.

## Colors

The palette is intentionally minimal, derived from the interface rather than photographic content. Four core colors define the system, with a fifth supporting tone for borders and dividers.

| token | value | use |
|---|---|---|
| action | #990000 | Primary buttons, log in, create account, and key interactive anchors |
| ink | #000000 | Primary text, headings, active navigation, and strong emphasis |
| muted-ink | #333333 | Secondary text, descriptions, filter labels, and metadata |
| canvas | #ffffff | Page backgrounds, modal surfaces, input fields, and card backgrounds |
| surface | #f5f5f5 | Subtle background variation for section alternation or hover states |
| border | #cccccc | Input borders, dividers, sidebar separators, and hairline rules |

The action color appears as a deep, warm red—almost oxblood—used exclusively for primary call-to-action buttons in authentication modals and likely for critical pathway highlights elsewhere. This restrained application makes the color highly meaningful when encountered. The near-black ink provides maximum readability for scholarly content, while muted-ink softens hierarchical levels without introducing a true gray that would feel washed out. Canvas white dominates, creating the expansive, uncluttered environment appropriate for extended research sessions. The border color is a neutral mid-gray that recedes visually, serving structural needs without competing for attention.

## Typography

Two font families carry the entire typographic system. By Goran Soderstrom-7472105643338214754, designed by Goran Soderstrom and available from Letters From Sweden, provides editorial distinction for display contexts. GT America, designed by Noel Leu and available from Grilli Type, handles all functional and body text across Regular, Medium, and Regular Italic cuts. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Goran Soderstrom-7472105643338214754 | 3rem | 500 | 1.1 | -0.01em | Page titles, collection names, major section headers |
| section-display | By Goran Soderstrom-7472105643338214754 | 2rem | 500 | 1.2 | 0 | Subsection headings, explore sections, feature titles |
| body | GT America | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, general content |
| body-small | GT America | 0.875rem | 400 | 1.5 | 0 | Metadata, item counts, captions, filter options |
| label | GT America | 0.75rem | 500 | 1.3 | 0.05em | Form labels, uppercase section headers, badges |
| navigation | GT America | 0.875rem | 500 | 1.3 | 0 | Top-level navigation, category links, sort controls |

The type scale builds from a 0.25rem relative unit, with sizes at 0.75rem, 0.875rem, 1rem, 2rem, and 3rem. By Goran Soderstrom-7472105643338214754's Medium weight at large sizes creates confident, authoritative display text without the heaviness of Bold. GT America's Regular weight provides excellent readability at body sizes, while Medium adds sufficient emphasis for navigation and labels without requiring Bold. The slight negative tracking on hero-display tightens the serif's classical forms for contemporary screen use. Label text uses modest positive tracking for all-caps treatments, creating visual separation from sentence-case body text.

## Layout

The system employs a clear two-zone architecture for collection browsing: a fixed or sticky left sidebar for faceted search filters, and an expansive right content area for result grids and collection exploration. The sidebar maintains a narrow, efficient width with collapsible sections for content type, date range, subcollection, and access type—each indicated by a small chevron icon. The main content area uses a responsive grid for thumbnail cards, with generous gutters that prevent visual crowding despite high information density.

Page-level layouts alternate between full-bleed hero sections on the homepage—featuring large-scale landscape or archival photography with overlaid search functionality—and contained, centered content for collection landing pages. Authentication modals appear as centered overlays with substantial padding, dimming the underlying content rather than displacing it. The modal width is moderate, approximately 24-28rem, keeping form fields comfortably within reading measure.

Vertical rhythm relies on section spacing of 4rem between major content blocks, with 1.5rem component spacing for related elements within a section. Tight 0.5rem spacing handles inline relationships like label-to-input pairs. The overall density is low, prioritizing scannability and reducing cognitive load during research tasks.

## Visual language

Photography and archival imagery dominate the visual field, presented with minimal framing—no borders, light shadows only on interactive cards, and direct thumbnail crops that reveal document character. The Independent Voices collection demonstrates this clearly: yellowed newspaper pages, hand-drawn illustrations, and period graphic design appear unretouched, their age and texture becoming part of the visual interest. Category cards use these archival images at roughly 16:10 aspect ratio, with text labels below rather than overlaid.

The Reveal Digital logo introduces a distinctive typographic mark: sans-serif capitals with the V rendered in the same deep red as the action color, creating brand linkage without additional graphic elements. This treatment suggests a system where partner or sub-brand identities may introduce limited color variation while remaining within the overall restraint.

Iconography is minimal and functional: small chevrons for expand/collapse, a magnifying glass for search, checkmarks for feature lists. These appear to be simple line icons or even Unicode characters rather than a custom icon set, maintaining the utilitarian aesthetic. The green checkmarks in authentication modals are a notable exception, providing positive confirmation through color contrast against the otherwise red-and-neutral system.

## Components

### Primary action button

The primary action button uses the deep red action background with white text, set in the label typography token at 0.75rem with 500 weight. Buttons span full width within modals, creating clear tap targets and visual prominence. The border radius is minimal at 0.125rem, presenting as nearly rectangular with slightly softened corners—more institutional than friendly. Padding is generous vertically at 0.75rem, with 1.5rem horizontal padding in contained contexts. Hover and active states are not visible in still images but should darken the background slightly for feedback.

### Authentication modal

Modals for login and registration share a common structure: white canvas surface with 0.25rem border radius, centered on screen with a backdrop that dims underlying content. The header uses hero-display typography for "Log in to a free account" or "Register for a free account," with a close × button in the upper right. Below, three green-checkmark feature items establish value proposition in body-small text. Social login buttons appear as outlined rectangles with provider logos and centered text, followed by a horizontal-rule "or" divider. Form fields stack vertically with label typography for field names, required asterisks in action color, and body-size placeholder text. The primary action button anchors the bottom, with secondary text links below for account recovery and alternative access paths.

### Search input

Search inputs appear as single-line fields with 1px border-color borders and minimal 0.125rem radius. Placeholder text uses muted-ink at body size. A search icon button sits at the right edge, providing explicit activation. In collection contexts, the search field spans the available width above result grids. In the homepage hero, the search field likely appears larger and more prominent, though the modal overlay obscures this in available images.

### Collection card

Cards for browsing collections or search results present a thumbnail image at top, followed by a title in body-small at ink color, and metadata in muted-ink. Item counts appear below titles in the same body-small size. Cards have no visible border or background separation, relying on image-to-text spacing and grid gutters for definition. On hover, a subtle surface background or slight shadow may appear; in static images, cards read as clean, flat elements. The aspect ratio for thumbnails appears consistent within grids but may vary across page types.

### Filter sidebar

The left sidebar for collection filtering uses canvas background with a right border in border color. Section headers use label typography in all caps with chevron toggle icons. Filter options appear as checkbox lists with body-small text, counts in parentheses, and generous vertical spacing between items. The "Show more" expansion pattern suggests long lists are truncated by default. Radio button groups for access type use the same spacing and typography, with selected states indicated by filled circles.

## Responsive behavior

The two-column filter-and-results layout should collapse to a single column on smaller viewports, with filters becoming a collapsible drawer or accordion above results. The sidebar width of approximately 16-20rem does not accommodate narrow screens; a full-width overlay or dedicated filter page would maintain usability. Collection cards should reflow from five columns to three, then two, then single column as viewport narrows, maintaining minimum thumbnail sizes that preserve archival image legibility.

Authentication modals should remain centered with consistent padding, potentially expanding to near-full-width on very small screens while maintaining touch-friendly input heights. The social login buttons, already full-width in desktop modals, require no adaptation. Touch targets throughout should meet 44px minimum, particularly for small checkboxes and radio buttons in filter interfaces.

Hero sections with background imagery should scale proportionally, with text and search inputs maintaining readable contrast through overlay scrims or image selection rather than relying on responsive text sizing alone.

## Practical implementation guidance

### Preserve
- The stark white canvas as the dominant background; resist adding decorative textures or patterns
- The serif/sans-serif pairing: By Goran Soderstrom-7472105643338214754 for display, GT America for everything functional
- The restrained use of action red—reserve it for primary buttons and critical links only
- Generous spacing around archival imagery; let the content breathe
- The flat, borderless card aesthetic for collection browsing

### Avoid
- Heavy drop shadows or dimensional effects that would contradict the clean, institutional aesthetic
- Additional accent colors beyond the established red; the system achieves variety through photography
- Bold weights where Medium suffices; the type system is intentionally restrained
- Tight line heights on body text; the 1.5 ratio supports extended reading
- Decorative borders around thumbnails that would compete with archival content

### Recommended build order
1. Establish the type system with both font families and the six defined tokens
2. Implement the color tokens, confirming the exact action red against accessibility requirements
3. Build the modal component with its specific padding, shadow, and form field stack
4. Create the filter sidebar with collapsible sections and checkbox/radio patterns
5. Develop the collection card and responsive grid system
6. Integrate search inputs with icon buttons and placeholder styling
7. Add the primary action button with its minimal radius and full-width modal behavior

### Accessibility
- Ensure the action red (#990000) meets WCAG AA contrast against white for text; at 4.5:1 it likely passes for large text but may need verification for small label sizes
- Provide visible focus indicators on all interactive elements, particularly the near-rectangular buttons and flat cards
- Maintain semantic heading hierarchy: h1 for page titles in hero-display, h2 for section-display, avoiding skipped levels
- Associate form labels explicitly with inputs in authentication modals
- Consider reduced-motion preferences for any modal transitions

## Scope note

This guide covers the homepage, collection landing pages, collection browsing with faceted filters, and authentication modals as visible in the supplied images. Article pages, search results, user workspaces, and mobile-specific layouts are not represented. Motion, hover states, focus styles, and error messaging were not captured. Measurements are practical adaptation targets derived from visual inspection against a 0.25rem relative unit grid.
