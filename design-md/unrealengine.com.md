# How unrealengine.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/unrealengine.com-design)

Last updated: 2026-08-10

## Captured pages

[![Developer Community section with gradient headline, five icon cards, and forums table on dark background](https://pin.fontofweb.com/7650?format=jpg)](https://design.withfudge.com/share/pin-7650)

[Developer Community section with gradient headline, five icon cards, and forums table on dark background](https://design.withfudge.com/share/pin-7650)

[![Getting started page with pill filters, tutorial cards, documentation sidebar, and sample projects grid](https://pin.fontofweb.com/7649?format=jpg)](https://design.withfudge.com/share/pin-7649)

[Getting started page with pill filters, tutorial cards, documentation sidebar, and sample projects grid](https://design.withfudge.com/share/pin-7649)

[![Article hero with cinematic game imagery, gradient overlay, tag pills, and studio info panel](https://pin.fontofweb.com/7648?format=jpg)](https://design.withfudge.com/share/pin-7648)

[Article hero with cinematic game imagery, gradient overlay, tag pills, and studio info panel](https://design.withfudge.com/share/pin-7648)

## Overview

The Unreal Engine website presents a dark, immersive visual system built around cinematic game imagery and precise technical typography. The design prioritizes content density and wayfinding clarity while maintaining a premium, developer-focused atmosphere. The interface rests on near-black backgrounds that allow vibrant game screenshots and the signature electric blue accent to command attention. Every surface is intentional: content sits in clearly delineated cards with subtle borders, navigation remains compact and persistent, and typographic hierarchy is established through weight and family pairing rather than size alone. The system balances the expressive needs of a creative tool with the functional demands of extensive documentation, community forums, and learning resources. Inter serves as the workhorse for body copy and UI labels, while Inter Tight delivers impact for headlines and section titles with its more condensed proportions. The overall impression is of a professional tool that respects the sophistication of its audience—clean, confident, and technically precise without being cold.

## Colors

The color system is built on a dark-mode foundation with a single vibrant accent and careful surface layering for depth.

| token | value | use |
|---|---|---|
| action | #26BBFF | Primary links, interactive highlights, active states, and the signature brand accent |
| ink | #FFFFFF | Primary text, headings, borders, and icons on dark surfaces |
| canvas | #000000 | Deepest background, hero image backdrops, and immersive full-bleed sections |
| surface | #101014 | Primary page background and base content areas |
| surface-raised | #18181C | Card backgrounds, elevated panels, and forum rows |
| surface-elevated | #202024 | Hover states, active rows, and highest surface level |
| border | #FFFFFF | Subtle hairline borders on cards, dividers, and container outlines at reduced opacity |

The dark palette creates a cinematic stage for game imagery. The near-black canvas (#000000) and deep surface (#101014) provide enough separation to establish hierarchy without introducing warmth or color cast. The electric blue action color (#26BBFF) appears in links, active navigation, and interactive highlights—cool and saturated against the neutral darks. White ink is used at full strength for primary content and at reduced opacity for secondary text. Surface layering progresses from #101014 through #18181C to #202024, creating subtle elevation without shadows. Borders are drawn in white at low opacity, appearing as soft hairlines that define card boundaries without heavy visual weight. The gradient overlay on article heroes transitions from transparent through semi-transparent dark to solid #101014, ensuring text legibility over complex imagery.

## Typography

The type system pairs Inter for readable body text and UI elements with Inter Tight for display headlines, leveraging the latter's more compact proportions for impact at scale.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter Tight | 2.5rem | 700 | 1.2 | normal | Page titles, major section headlines, article heroes |
| section-display | Inter Tight | 1.5rem | 700 | 1.2 | normal | Section headings, card titles, feature labels |
| body | Inter | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, general content |
| body-small | Inter | 0.875rem | 400 | 1.65 | 0.02em | Secondary descriptions, metadata, captions |
| label | Inter | 0.75rem | 400 | 1.65 | 0.03em | Timestamps, tags, small UI annotations |
| navigation | Inter | 0.875rem | 500 | 1 | 0.02em | Top nav items, category filters, wayfinding |
| button | Inter | 0.875rem | 400 | 1.4 | 0.02em | Button labels, pill text, CTAs |

Inter and Inter Tight are designed by Rasmus Andersson and available from Rsms. Verify licensing for these families before production use.

The hierarchy is established through family contrast and weight rather than dramatic size jumps. Hero display at 2.5rem (40px) provides clear page-level prominence without overwhelming the content. Section display at 1.5rem (24px) bridges headline and body scales for card titles and subsection headers. Body text at 1rem (16px) with 1.5 line height offers comfortable reading for extended content. The small body variant at 0.875rem (14px) handles metadata, card descriptions, and secondary information with slightly tighter leading and subtle positive tracking for clarity at reduced size. Labels at 0.75rem (12px) are reserved for timestamps and minor annotations. Navigation uses medium weight for active wayfinding clarity. Button text matches the small body size with tighter leading for compact pill and button shapes.

## Layout

The layout system employs generous section spacing with contained content widths, creating breathing room around dense information.

Content sections use padding of 5rem (80px) vertical and 4rem (64px) horizontal as a standard container, establishing consistent margins that frame the content without excessive whitespace. Card grids and feature rows adopt a 1.5rem (24px) gap between items, maintaining visual separation while keeping related content connected. The overall page structure follows a single-column flow with occasional sidebar arrangements for documentation and resource pages.

The navigation bar is fixed and compact, containing the Unreal Engine wordmark, primary category links with dropdown indicators, a search field, language selector, sign-in link, and a prominent download button. Content below scrolls beneath this persistent header.

Card layouts dominate the content presentation. Tutorial cards, sample project cards, and community resource cards share a consistent structure: media thumbnail at top, title in section-display typography, metadata in body-small, and description in body-small with reduced opacity. These cards sit in responsive grids with 1.5rem gaps.

The forums table presents a denser layout: category names in medium-weight text at left, engagement metrics centered, and recent topic previews at right with user avatars and timestamps. Row padding is generous at 1.5rem vertical, with subtle border separators between entries.

Article pages use a full-bleed hero image with gradient overlay, followed by contained content with a studio information panel that breaks the single-column flow. This panel uses raised surface color, rounded corners, and internal padding to create a distinct information block within the reading flow.

## Visual language

The visual language is defined by cinematic immersion, technical precision, and restrained expressiveness. Game imagery is treated as primary content, not decoration—screenshots and renders appear at large scale with minimal framing, often bleeding to edges or filling card surfaces. The dark interface recedes, allowing the colorful, high-contrast game visuals to carry the emotional weight.

Geometric discipline governs the UI elements. Cards use consistent 1.5rem corner radius, creating soft but defined containers. Buttons and pills employ sharper 0.375rem (6px) radius for interactive elements, while category filters and tags use full pill shapes (9999px radius) to distinguish them as non-structural labels.

Borders are uniformly thin—1px solid white at reduced opacity—creating subtle definition without visual heaviness. The border treatment is consistent across cards, panels, and table rows, unifying disparate content types under a single structural language.

The gradient overlay on hero images is specifically calibrated: transparent at top, transitioning through semi-transparent dark at 27.75% to solid surface color at 92.5%. This preserves image visibility in upper regions while guaranteeing text legibility where headlines and metadata sit.

Iconography is minimal and functional, appearing in category cards as simple line illustrations and in the forums table as engagement indicators. The Epic Games logo and Unreal Engine wordmark provide brand anchoring in the navigation.

## Components

### Navigation bar

- **Anatomy**: Fixed top bar containing Epic Games logo, Unreal Engine wordmark, primary links (Overview, Uses, News, Forums, Documentation, Learning, More), search field, globe icon, Sign in text link, and Download button
- **Surface**: Transparent or near-transparent background over page content, transitioning to solid surface on scroll
- **Typography**: Navigation token for primary links, button token for Download CTA
- **Shape**: Full-width bar, height approximately 3.5rem (56px)
- **Spacing**: Horizontal padding of 1.5rem (24px) to 4rem (64px), links spaced with 1.5rem gaps
- **Composition**: Logo group left-aligned, primary links centered-left, utility actions right-aligned

### Primary button

- **Anatomy**: Text label with optional icon, contained within a rounded rectangle
- **Surface**: Action blue (#26BBFF) background with dark text, or transparent with white border for secondary variant
- **Typography**: Button token, medium weight for emphasis
- **Shape**: 0.375rem (6px) corner radius, full pill variant available for filters
- **Spacing**: Padding of 0.25rem 0.75rem (4px 12px) for compact, 0.75rem 1rem (12px 16px) for standard
- **Variants**: Filled action for primary CTAs, outlined white for secondary actions, full pill for category filters

### Content card

- **Anatomy**: Media thumbnail, title, metadata line, description text
- **Surface**: Raised surface (#18181C) background, 1px white border at reduced opacity
- **Typography**: Section-display for title, body-small for metadata and description
- **Shape**: 1.5rem (24px) corner radius
- **Spacing**: Internal padding of 1.5rem (24px), media flush to top edge with rounded top corners
- **Composition**: Vertical stack with 0.75rem (12px) gaps between elements

### Category filter pill

- **Anatomy**: Text label within a fully rounded container
- **Surface**: Transparent with white border, or filled white with dark text when active
- **Typography**: Button token
- **Shape**: 9999px radius for full pill
- **Spacing**: Padding of 0.25rem 0.75rem (4px 12px), horizontal gap of 0.75rem between pills
- **Composition**: Horizontal scroll or wrap row, left-aligned

### Forum category row

- **Anatomy**: Category name, reply count, view count, latest topic preview with user avatar and timestamp
- **Surface**: Transparent background, 1px border bottom separator
- **Typography**: Navigation token weight for category name, body-small for metrics and preview
- **Shape**: Full-width row, no radius
- **Spacing**: Vertical padding of 1.5rem (24px), horizontal padding matching container
- **Composition**: Three-column implicit grid: category left, metrics center, preview right

### Studio information panel

- **Anatomy**: Studio logo, descriptive paragraph text
- **Surface**: Raised surface (#18181C) with 1px white border
- **Typography**: Body-small for description, italic style for narrative tone
- **Shape**: 1.5rem (24px) corner radius
- **Spacing**: Internal padding of 2rem (32px)
- **Composition**: Self-contained block within article flow, centered or offset from main text column

### Hero gradient overlay

- **Anatomy**: Linear gradient applied over full-bleed background image
- **Surface**: `linear-gradient(rgba(16, 16, 20, 0), rgba(16, 16, 20, 0.5) 27.75%, rgb(16, 16, 20) 92.5%)`
- **Composition**: Covers entire hero area, ensuring text legibility in lower portion while preserving image visibility above

## Responsive behavior

The design should maintain its dark cinematic character across viewport sizes while adapting layout density. The navigation bar should collapse primary links into a menu at smaller widths, preserving the logo, search, and download actions. Card grids should transition from four columns to two and then single column, maintaining 1.5rem gaps. The forums table should stack its three-column information vertically on narrow viewports, with category names remaining prominent. Hero images should scale proportionally, with gradient overlay and text positioning preserved. Section padding should reduce from 5rem 4rem to 3rem 1.5rem on mobile, preventing excessive whitespace while maintaining readable line lengths. Typography scales should remain fixed rather than fluid, as the established sizes already balance impact and readability.

## Practical implementation guidance

### Preserve
- The dark surface hierarchy: canvas, surface, raised, elevated progression
- The single electric blue accent against neutral darks
- Generous section padding with contained content widths
- Consistent 1.5rem card radius and 1px hairline borders
- Inter/Inter Tight family pairing for functional/display contrast
- Full-bleed imagery with calculated gradient overlays

### Avoid
- Introducing warm colors or additional accent hues that compete with the blue
- Heavy drop shadows instead of surface elevation changes
- Rounded corners larger than 1.5rem on structural containers
- Body text smaller than 1rem for primary content
- Pure black (#000000) for card backgrounds—use raised surface instead

### Recommended build order
1. Establish dark color tokens and surface hierarchy
2. Set up Inter and Inter Tight with defined type scale
3. Build navigation bar with search and download actions
4. Create card component with consistent radius, border, and padding
5. Implement hero section with gradient overlay pattern
6. Add pill button and filter components
7. Construct content grids with responsive column behavior
8. Build forums table with row separators and metric alignment

### Accessibility
- Ensure action blue (#26BBFF) meets contrast requirements against dark surfaces; it may need adjustment for small text compliance
- Provide focus indicators that match the action color with visible outlines
- Maintain text contrast on gradient overlay areas by verifying against the darkest gradient stop
- Support keyboard navigation through the pill filter rows and card grids
- Include aria-labels on icon-only buttons in the navigation

## Scope note

This guide covers the Unreal Engine marketing site homepage, getting started page, and article template as visible in the supplied images. Mobile layouts, animation behavior, hover states, form validation, search result pages, and the documentation reader interface are not represented. The footer, additional marketing pages, and account management flows fall outside the current scope.
