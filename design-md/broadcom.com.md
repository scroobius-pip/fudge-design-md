# How broadcom.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/broadcom.com-design)

Last updated: 2026-08-10

## Captured pages

[![Broadcom homepage with expanded Products mega-menu showing Storage and Systems categories, left sidebar navigation, and circuit board hero imagery](https://pin.fontofweb.com/2322?format=jpg)](https://design.withfudge.com/share/pin-2322)

[Broadcom homepage with expanded Products mega-menu showing Storage and Systems categories, left sidebar navigation, and circuit board hero imagery](https://design.withfudge.com/share/pin-2322)

[![Three-column feature section with Latest Products, News, and Connecting Everything video thumbnail with red circular icons](https://pin.fontofweb.com/2321?format=jpg)](https://design.withfudge.com/share/pin-2321)

[Three-column feature section with Latest Products, News, and Connecting Everything video thumbnail with red circular icons](https://design.withfudge.com/share/pin-2321)

[![What Are You Designing Today section with six blue circular solution icons and three resource portal buttons](https://pin.fontofweb.com/2320?format=jpg)](https://design.withfudge.com/share/pin-2320)

[What Are You Designing Today section with six blue circular solution icons and three resource portal buttons](https://design.withfudge.com/share/pin-2320)

[![Broadcom header navigation bar with logo, primary nav items, search field, and red accent underline](https://pin.fontofweb.com/2319?format=jpg)](https://design.withfudge.com/share/pin-2319)

[Broadcom header navigation bar with logo, primary nav items, search field, and red accent underline](https://design.withfudge.com/share/pin-2319)

## Overview

The Broadcom design system presents a corporate technology identity built around high-contrast red branding against expansive white space. The visual language communicates semiconductor precision and enterprise reliability through disciplined typography, geometric iconography, and hierarchical navigation structures. The system balances marketing storytelling with dense product information architecture, serving both investor relations and engineering procurement audiences. Key characteristics include a persistent red brand bar anchoring the header, circular solution icons in deep blue, and a dual-mode navigation that switches between light promotional surfaces and dark functional menus. The overall impression is of a mature B2B technology company—authoritative, structured, and globally scaled.

## Colors

The color system operates on a principle of high-visibility brand signaling with functional restraint. Red dominates as the emotional and navigational anchor, while blue serves as the actionable workhorse for links and solution categories. Neutrals provide information hierarchy without visual noise.

| token | value | use |
|---|---|---|
| brand-red | #E31837 | Primary brand color; logo mark, navigation text, section headings, icon accents |
| brand-red-dark | #B5122E | Hover states for red elements; active navigation indicators |
| ink-primary | #000000 | Primary body text; high-emphasis content |
| ink-secondary | #333333 | Secondary text; menu items; product descriptions |
| ink-tertiary | #666666 | Metadata; dates; captions; placeholder text |
| canvas | #FFFFFF | Primary page background; card surfaces; input fields |
| surface-muted | #F5F5F5 | Alternating section backgrounds; subtle content grouping |
| surface-dark | #4A4A4A | Mega-menu sidebar; dark overlay contexts |
| action-blue | #005C8F | Interactive links; solution category labels; resource card icons |
| action-blue-dark | #004A72 | Link hover states; active solution category emphasis |
| border-light | #CCCCCC | Card borders; input field outlines; subtle dividers |
| border-medium | #999999 | Secondary borders; disabled state indicators |

The brand-red token appears most aggressively in the header navigation text and the 4px bottom border that permanently anchors the primary navigation bar. This creates an immediate visual signature that persists across all page states. The action-blue token provides the functional counterpoint, appearing in solution icons, resource links, and product names where user action is expected. The dark surface token enables the mega-menu's dramatic context switch, transforming the navigation from light promotional mode to dense functional mode without leaving the page. White canvas dominates spatially, typically occupying 70-80% of any viewport, which keeps the red and blue accents sharp and intentional.

## Typography

The type system pairs a geometric sans-serif display face with a workhorse system sans for body content. This creates clear hierarchy between marketing headlines and technical specifications.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Metropolis | 2.5rem | 600 | 1.2 | -0.01em | Page hero headlines; major campaign messaging |
| section-display | Metropolis | 2rem | 600 | 1.25 | 0 | Section introductions; "What Are You Designing Today?" |
| heading-large | Metropolis | 1.5rem | 600 | 1.3 | 0 | Feature card titles; mega-menu category headers |
| heading-medium | Metropolis | 1.25rem | 600 | 1.35 | 0 | Solution labels; news headlines; product names |
| body | Arial W 01 Regular | 1rem | 400 | 1.5 | 0 | Primary body text; navigation items; descriptions |
| body-small | Arial W 01 Regular | 0.875rem | 400 | 1.5 | 0 | Product specifications; news dates; secondary descriptions |
| label | Arial W 01 Regular | 0.75rem | 400 | 1.4 | 0.02em | Metadata; timestamps; category tags |
| navigation-primary | Arial W 01 Regular | 1rem | 400 | 1 | 0 | Header navigation; top-level menu items |
| navigation-secondary | Arial W 01 Regular | 0.875rem | 400 | 1.4 | 0 | Mega-menu subcategories; footer links |

Metropolis serves as the brand voice for headlines and calls-to-action, its geometric construction reinforcing the technical precision of semiconductor engineering. The Semibold weight (rendered as weight 600) provides sufficient impact without the heaviness of full bold, maintaining elegance at display sizes. Arial W 01 Regular handles all functional text with neutral legibility, ensuring that dense product information remains readable at small sizes. The type scale builds in increments of 0.25rem, with display sizes at 2.5rem and 2rem establishing clear dominance over the 1rem body baseline. Letter spacing remains tight or neutral throughout, avoiding the looseness typical of consumer brands.

The design facts identify four font families present in the source: Metropolis, Arial W 01 Regular, Cl 3 Iskicons, and Video Js. Cl 3 Iskicons functions as the icon font for interface glyphs, while Video Js serves as the video player interface font. Neither is used for body or display typography in the visible page surfaces.

Verify licensing for these families before production use. Metropolis is attributed to Chris Simpson via Victory One Media Pty Ltd. Arial W 01 Regular is attributed to Monotype Imaging Inc.

## Layout

The layout system follows a full-width fluid model with contained content zones. The header spans the complete viewport width with interior content capped at a maximum readable measure. Navigation occupies a fixed 4rem height with a 4px brand-red bottom border that creates a persistent baseline across all pages.

The primary content area employs a centered single-column flow for promotional sections, transitioning to multi-column grids for information-dense areas. The "What Are You Designing Today?" section demonstrates a six-column icon grid for solution categories, with each icon centered above its label and equal horizontal distribution. Below this, a three-column resource card grid provides balanced access to support materials.

The mega-menu represents the most complex layout pattern, implementing a split-panel design: a dark left sidebar (approximately 30% width) contains primary category navigation with expandable sections, while a light right panel (approximately 70% width) displays nested subcategories in multi-column lists. This layout preserves context while revealing deep taxonomies. A persistent "All Products" link floats in the upper right of the expanded menu, providing escape hatch navigation.

Spacing follows a 0.25rem base unit. Section vertical padding typically measures 4rem, creating breathable separation between content zones. Component internal padding ranges from 1rem for compact elements to 1.5rem for cards and featured blocks. The grid system appears to rely on percentage-based fluid columns rather than fixed breakpoints, with content reflowing naturally as viewport width changes.

## Visual language

The visual language communicates engineered precision through geometric discipline and restrained color application. Circular motifs dominate the icon system—solution category icons appear as 5rem circles in solid action-blue with white glyph interiors, while section indicators use smaller red circles containing white symbols. This circular vocabulary softens the otherwise rectilinear grid without introducing organic irregularity.

Imagery strategy balances two modes: technical photography showing circuit boards, data centers, and semiconductor components; and human-centered photography showing connected workplaces and digital infrastructure. The hero imagery in the "Connecting Everything" section uses a composite grid of technology and people images, unified by warm color grading and overlaid with a central play button. Product photography appears as small thumbnail chips adjacent to technical specifications, maintaining literal accuracy over emotional appeal.

The icon font (Cl 3 Iskicons) provides functional glyphs for navigation and interface elements, while custom circular icons carry the brand expression for solution categories. Red appears as an accent in small doses—navigation text, icon backgrounds, section headings—never as large field colors. Blue carries the functional burden for interactive elements and category identification. The overall effect is of a system that reserves its most intense color for brand recognition while delegating action to a calmer, more trustworthy hue.

## Components

### Primary navigation

The primary navigation bar spans the full viewport width with a white background and 4px brand-red bottom border. The Broadcom logo (red circular mark with black wordmark) sits left-aligned with 1.5rem spacing from the navigation items. Navigation links appear in brand-red at 1rem size, with hover states transitioning to brand-red-dark. A search input field with placeholder text and magnifying glass icon occupies the right side, alongside utility links for "Support Portal" and language selection. The navigation maintains fixed positioning behavior, remaining visible during scroll.

### Mega-menu

The mega-menu expands below the primary navigation on hover or click, presenting a full-width overlay. The left panel uses surface-dark background with white text for primary categories (Products, Solutions, Support and Services, Company, How To Buy). Each category may expand to reveal subcategories with plus indicators. The right panel switches to canvas background with ink-secondary text for detailed subcategory lists. Category headers in the right panel appear in brand-red. A "Search the Menu" field sits at the top of the left panel. The "All Products" escape link appears in brand-red at the upper right. The menu casts a subtle shadow (0 4px 12px rgba(0,0,0,0.15)) to separate it from page content.

### Solution icon

Solution icons appear as 5rem circular containers in solid action-blue, centered above two-line labels in heading-medium typography. The icon glyphs are white and abstractly represent their categories: Wi-Fi router for broadband, server racks for data center, classical building for financial services, shield for security, speedometer for access, automobile for automotive. Labels appear in action-blue below each icon, with text centered and wrapped to two lines maximum. The circular shape creates visual rhythm against the rectangular grid.

### Resource card

Resource cards present as bordered rectangles with 1px border-light outlines and 1.5rem internal padding. Each card contains a left-aligned icon in action-blue, a title in heading-medium typography, and a description in body-small with ink-tertiary color. The three-card layout ("Support Portal," "Documents + Downloads," "Security Center") distributes evenly across the content width with consistent gaps. Cards have no border-radius, maintaining the system's rectilinear precision.

### News card

News cards display chronological content with a red circular icon containing a white speaker/announcement glyph at top center. Below, date stamps appear in label typography with ink-tertiary color. Headlines appear in heading-medium with action-blue color, transitioning to action-blue-dark on hover. The "More News" link at bottom center uses action-blue with implied hover state. Content density is moderate, with three headline-date pairs visible before truncation.

### Product listing

Product listings combine small thumbnail imagery (approximately 3rem square) with product names in heading-medium action-blue and technical descriptions in body-small ink-secondary. The "Latest Products" variant shows chip photography alongside specifications, with a "More" link at bottom center. List items stack vertically with consistent 1rem spacing between entries.

## Responsive behavior

The design system appears optimized for desktop viewport widths, with the mega-menu and multi-column grids requiring substantial horizontal space. At narrower viewports, the six-column solution icon grid should reflow to three columns then two columns, maintaining touch-friendly tap targets at minimum 44px. The mega-menu's split-panel layout may transition to a single scrollable column on mobile, with the dark sidebar collapsing to an accordion pattern.

The search field in the primary navigation may compress to an icon-only trigger at narrow widths, expanding on interaction. Resource cards should stack vertically below approximately 768px viewport width, with full-width cards replacing the three-column layout. Typography scales down proportionally, with hero-display reducing to section-display size and section-display reducing to heading-large for small screens.

Touch considerations include expanding the solution icon hit areas beyond their visual bounds and increasing the mega-menu category row heights to accommodate finger tapping. The persistent navigation bar should remain fixed but may reduce in height slightly to preserve viewport space.

## Practical implementation guidance

### Preserve
- The 4px brand-red bottom border on the primary navigation; this is the most distinctive and persistent brand signature
- The circular solution icon motif with white glyphs on action-blue backgrounds
- The red-and-black logo lockup with consistent spacing
- The split dark/light mega-menu pattern for category navigation
- The Metropolis/Arial type pairing for display/body hierarchy

### Avoid
- Using brand-red for large background fields or buttons; reserve it for text accents and the navigation border
- Introducing rounded corners on cards or buttons; the system maintains sharp rectilinear edges
- Replacing the circular solution icons with generic stock imagery
- Using blue for non-interactive text; action-blue should signal clickability
- Adding drop shadows to cards; the flat aesthetic communicates technical precision

### Recommended build order
1. Implement the primary navigation with logo, links, search, and 4px red border
2. Build the mega-menu structure with dark sidebar and light content panel
3. Create the solution icon component with circular container and centered label
4. Implement the three-column resource card grid
5. Add the news and product listing patterns
6. Polish typography scale and spacing tokens across all components

### Accessibility
- Ensure the brand-red navigation text meets minimum contrast ratios against white backgrounds; the current red may require darkening for WCAG AA compliance
- Provide visible focus indicators for all interactive elements, particularly the solution icons and mega-menu categories
- Implement keyboard navigation for the mega-menu, with Escape to close and arrow keys to traverse categories
- Add aria-labels to the circular icon buttons that describe their destination categories
- Ensure the search field has an associated label for screen reader users
- Test color independence by verifying that links are distinguishable without relying solely on blue hue

## Scope note

This guide covers the Broadcom homepage and its primary navigation, solution categories, resource portals, and content card patterns. Mega-menu interior pages, product detail templates, documentation pages, and footer components are not represented in the supplied images. Motion behavior, mobile-specific layouts, form validation states, and e-commerce checkout flows are not documented. Measurements are practical adaptation targets derived from visual inspection of the desktop interface.
