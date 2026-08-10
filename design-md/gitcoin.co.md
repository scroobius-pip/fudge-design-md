# How gitcoin.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gitcoin.co-design)

Last updated: 2026-08-10

## Captured pages

[![Blog article hero with large serif headline, Sei partnership graphic with circular line art, and red-to-black gradient call-to-action panel](https://pin.fontofweb.com/2773?format=jpg)](https://design.withfudge.com/share/pin-2773)

[Blog article hero with large serif headline, Sei partnership graphic with circular line art, and red-to-black gradient call-to-action panel](https://design.withfudge.com/share/pin-2773)

[![Blog index page with dark green featured card, category filter pills, search bar, and three-column article grid](https://pin.fontofweb.com/2772?format=jpg)](https://design.withfudge.com/share/pin-2772)

[Blog index page with dark green featured card, category filter pills, search bar, and three-column article grid](https://design.withfudge.com/share/pin-2772)

[![Site footer with dark background, Gitcoin logo mark, multi-column link navigation, social icons, and legal links](https://pin.fontofweb.com/2770?format=jpg)](https://design.withfudge.com/share/pin-2770)

[Site footer with dark background, Gitcoin logo mark, multi-column link navigation, social icons, and legal links](https://design.withfudge.com/share/pin-2770)

[![Popular resources section with six varied cards including purple blog card, dark green framework card, and patterned impact card](https://pin.fontofweb.com/2769?format=jpg)](https://design.withfudge.com/share/pin-2769)

[Popular resources section with six varied cards including purple blog card, dark green framework card, and patterned impact card](https://design.withfudge.com/share/pin-2769)

## Overview

Gitcoin's design system supports a public-goods funding platform with an editorial, trustworthy aesthetic. The visual language balances clean white space with rich dark green surfaces and selective purple accents, creating hierarchy through contrast rather than complexity. The system serves both marketing pages and content-heavy blog surfaces, requiring flexibility between expressive hero moments and dense information grids.

The design prioritizes readability and credibility. Large serif-style display typography from PP Mori anchors page headers with confident weight and slight negative tracking, while Modern Era handles body text with neutral, approachable clarity. A monospace label style from DM Mono provides technical precision for metadata, dates, and category tags. The overall impression is institutional without being cold—warm greens and purposeful color blocking soften the otherwise minimal palette.

Card-based layouts organize content across the homepage and blog index. These cards vary dramatically in surface treatment: some sit on white backgrounds with subtle borders, others fill with deep forest green or soft mint, and featured cards carry full-bleed photographic or illustrated backgrounds. This variety prevents grid monotony while maintaining structural consistency through uniform corner rounding and internal padding.

## Colors

The color system builds from a near-black and white foundation, extending into a distinctive forest green family and a single purple accent. Dark surfaces dominate featured content and footer areas, while light surfaces provide breathable space for reading and browsing.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark backgrounds, footer surfaces, strong borders |
| canvas | #ffffff | Primary page background, card surfaces, input fields |
| surface | #f2f2f2 | Secondary backgrounds, subtle card fills, section alternation |
| forest | #0b1f1a | Featured card backgrounds, dark hero panels, primary dark accent |
| mint | #e8f5f0 | Light green tint for text on dark backgrounds, subtle highlights |
| accent | #7c5cfc | Purple accent for blog cards, interactive highlights, brand moments |

The forest green serves as the signature dark color, appearing in the featured blog card with a subtle leaf pattern overlay and in the Grants Maturity Framework card. On these dark surfaces, mint-tinted text maintains readability while adding warmth. The purple accent appears selectively in the "Our Blog" resource card and as a highlight color, preventing the green-heavy palette from feeling monotonous.

White backgrounds dominate browsing surfaces like the blog index and article pages, with ink text providing maximum contrast. The surface gray appears in resource cards and as a subtle background for secondary content areas. No gradient tokens are defined in the system; the red-to-black gradient in the Sei partnership graphic is treated as campaign-specific artwork rather than a reusable UI element.

## Typography

Three font families create a clear hierarchy: PP Mori for display moments, Modern Era for reading and navigation, and DM Mono for technical labels and metadata. Each family serves a distinct communicative role.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PP Mori | 4rem | 400 | 1.1 | -0.02em | Page titles, article headlines, major hero statements |
| section-display | PP Mori | 3rem | 400 | 1.15 | -0.01em | Section headers, resource grid titles |
| body | Modern Era | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, card copy |
| body-medium | Modern Era | 1rem | 500 | 1.6 | 0 | Emphasized body text, card titles, featured descriptions |
| label | DM Mono | 0.75rem | 500 | 1.4 | 0.08em | Category tags, dates, metadata, uppercase labels |
| navigation | Modern Era | 0.875rem | 400 | 1.5 | 0 | Header links, footer links, utility navigation |

PP Mori appears exclusively at display sizes with its characteristic slightly condensed proportions and elegant terminals. The negative tracking tightens headlines without feeling compressed. Modern Era provides the workhorse text styles, with Regular weight for extended reading and Medium for interactive elements and card titles that need subtle emphasis. DM Mono's tracked, uppercase treatment distinguishes labels from prose and reinforces the technical, builder-oriented brand positioning.

Font attribution: PP Mori by Caio Kondo, Mathieu Desjardins, and Satsuki Arakaki via Pangram Pangram Foundry. Modern Era by Omse via Omse Type. DM Mono by Colophon Foundry. Verify licensing for these families before production use.

## Layout

The layout system relies on generous section spacing and clear content gutters. Pages alternate between full-bleed dark sections and contained light sections, creating rhythmic contrast as users scroll.

The blog index demonstrates a classic two-zone header: a large left-aligned title with descriptive text and filter controls, balanced by a search interface on the right. Below, content organizes into asymmetric grids—a large featured card occupies roughly half the width, with metadata and a "Read" link positioned to its right. Further down, a three-column grid presents standard article cards with thumbnail images, titles, and links.

Resource sections on the homepage use a denser two-by-three card grid. Cards span multiple rows or columns based on content priority: the "Our Blog" card and "Our Impact" card each occupy double-width spaces, while standard cards maintain uniform proportions. This masonry-like arrangement breaks visual predictability while preserving underlying grid alignment.

The footer spans full width with a dark background, containing a logo mark on the left, four columns of categorized links in the center, and social icon buttons on the right. Legal links anchor the bottom right corner. Content maintains consistent horizontal margins throughout, creating a recognizable page container.

## Visual language

The visual language combines geometric precision with organic warmth. Circular and curved forms appear throughout: the Sei partnership graphic features concentric circles with flowing line work, and the "Our Impact" card displays a subtle pattern of overlapping translucent circles. These organic shapes soften the otherwise rectilinear card grid.

Line art and technical illustration reinforce the builder-community positioning. The Grants Canvas card shows a structured diagram with grid lines and sticky-note elements. The Grants Maturity Framework card presents a bar chart with clean, flat color blocks. These information-dense visuals communicate analytical rigor without decorative excess.

Photography appears sparingly and strategically. The featured blog card uses a dark, atmospheric image with low contrast, allowing white text to remain legible without heavy overlays. Campaign-specific graphics like the Sei partnership piece introduce temporary color accents—in this case, a dramatic red-to-black gradient—that exist outside the core system.

Iconography remains minimal and functional. Social links in the footer use simple, filled square buttons with centered icons. Navigation lacks visible icons, relying on text clarity instead. The Gitcoin logo mark in the footer combines geometric and organic elements: a circular form with an internal spiral or eye-like shape.

## Components

### Featured card

The featured card is the system's most expressive component, reserved for primary content promotion.

- **Anatomy**: Background image or illustration, category label, large headline, descriptive text, and "Read" link
- **Surface**: Forest green background (#0b1f1a) with optional photographic or illustrated overlay; text in mint or white
- **Typography**: Headline uses hero-display token; supporting text uses body-medium at reduced size
- **Shape**: 0.75rem corner radius, full-bleed background image
- **Spacing**: 1.5rem internal padding, generous breathing room between label, headline, and text
- **Composition**: Left-aligned text stack over dark background; content positioned to avoid busy image areas

### Resource card

Resource cards populate the homepage grid with varied surface treatments based on content type.

- **Anatomy**: Title, description, optional thumbnail or illustration, and action link with chevron
- **Surface**: Varies by card—purple accent (#7c5cfc), dark forest green, light surface gray (#f2f2f2), or white with subtle pattern
- **Typography**: Title in body-medium; description in body; action link in label with right-pointing chevron
- **Shape**: 0.75rem corner radius
- **Spacing**: 1.5rem padding, consistent internal margins
- **Variants**: "Our Blog" uses purple background with white text; "Grants Maturity Framework" uses split dark green and white; "Grants Canvas" uses blue-tinted background with product screenshot; "Our Impact" uses light purple with circular pattern

### Category pill

Filter controls for content browsing, visible on the blog index.

- **Anatomy**: Text label with optional active state
- **Surface**: White background with 1px ink border; no fill change on default state
- **Typography**: label token, uppercase with wide tracking
- **Shape**: Full pill (9999px radius)
- **Spacing**: Horizontal padding approximately 1rem, vertical padding approximately 0.5rem
- **Composition**: Horizontal row with 0.75rem gap between pills

### Search field

The blog search interface combines an input with a separate submit button.

- **Anatomy**: Text input with placeholder, bordered submit button
- **Surface**: Input has bottom border only, no visible side or top borders; button has full rectangular border
- **Typography**: Input placeholder in label style; button text in navigation style
- **Shape**: Input has no radius; button has slight rounding or square corners
- **Composition**: Input occupies majority width; button positioned flush right

### Footer

The site footer provides persistent navigation and brand presence.

- **Anatomy**: Logo mark, four link columns (Community, Learn, More, Follow), social icon buttons, copyright, legal links
- **Surface**: Ink background (#000000) with white text and icons
- **Typography**: Column headers in label token, uppercase, muted; links in navigation token; copyright in smaller navigation size
- **Shape**: Social buttons are square with slight rounding; no card-like container
- **Spacing**: Generous vertical padding (section token); horizontal margins match page container
- **Composition**: Logo left-aligned; link columns centered in remaining space; social buttons right-aligned; legal links bottom right

## Responsive behavior

The card grids require careful breakpoint handling. The three-column blog grid should collapse to two columns at medium widths and single column on small screens, maintaining card proportions and internal spacing. The featured card's asymmetric layout—large image left, text right—should stack vertically on narrow viewports, with the image appearing first to preserve visual impact.

Resource grid cards with double-width spans should reflow to full-width on smaller screens, preventing cramped multi-column layouts. The split-layout cards like "Grants Maturity Framework" should maintain their two-zone structure at medium widths but stack on mobile.

Typography scales down proportionally. The hero-display token at 4rem should reduce to approximately 2.5rem on mobile to prevent excessive line breaks. Section-display reduces from 3rem to 2rem. Body text maintains 1rem for readability across all breakpoints.

The blog index header with title, filters, and search should stack vertically on mobile: title first, then filter pills wrapping to multiple lines, then search field full-width with button below or integrated.

## Practical implementation guidance

### Preserve
- The three-family typographic hierarchy: PP Mori for display, Modern Era for body, DM Mono for labels
- Dark green (forest) as the signature accent color for featured and premium content
- Generous whitespace between sections—at least 6rem vertical rhythm
- Card corner consistency at 0.75rem across all card variants
- The uppercase, wide-tracked label style for metadata and category tags

### Avoid
- Adding more accent colors beyond the defined purple; the restrained palette is intentional
- Using PP Mori at body sizes; it functions poorly for extended reading
- Removing the bottom-border-only treatment from search inputs
- Creating cards without clear surface distinction—every card should have a defined background
- Overlapping organic patterns with busy photography; use one or the other

### Recommended build order
1. Establish typography tokens and load all three font families
2. Implement the color system with ink, canvas, surface, forest, mint, and accent
3. Build the card component with variant surface treatments
4. Create the grid system for blog index and resource sections
5. Implement the footer with dark theme and link columns
6. Add category pills and search field as filter components
7. Apply responsive breakpoints for grid collapse and type scaling

### Accessibility
- Ensure mint text on forest backgrounds meets WCAG AA contrast; if not, lighten mint or darken forest
- Provide visible focus states for all interactive elements, particularly the minimal search input
- Maintain text resizing compatibility by using rem units throughout
- Add aria-labels to social icon buttons in the footer
- Consider skip navigation for the multi-column footer link structure

## Scope note

This guide covers the homepage and blog surfaces visible in the supplied images. Navigation header behavior, mobile menu patterns, form validation states, and animation are not documented. Measurements are practical adaptation targets. The Sei partnership campaign graphic with its red gradient is treated as temporary artwork rather than a core system element.
