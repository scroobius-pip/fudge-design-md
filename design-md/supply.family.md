# How supply.family is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/supply.family-design)

Last updated: 2026-08-10

## Captured pages

[![Product detail page for 403 Mesapholic serif font showing type specimen, licensing tiers, and purchase panel with dark navigation bar on white canvas](https://pin.fontofweb.com/9536?format=jpg)](https://design.withfudge.com/share/pin-9536)

[Product detail page for 403 Mesapholic serif font showing type specimen, licensing tiers, and purchase panel with dark navigation bar on white canvas](https://design.withfudge.com/share/pin-9536)

[![Close-up type specimen showing 403 Mesapholic Regular and Italic at large display size with style label in muted gray](https://pin.fontofweb.com/9535?format=jpg)](https://design.withfudge.com/share/pin-9535)

[Close-up type specimen showing 403 Mesapholic Regular and Italic at large display size with style label in muted gray](https://design.withfudge.com/share/pin-9535)

[![Homepage hero with dark background, white headline, search bar, and pill-shaped category filter buttons](https://pin.fontofweb.com/9534?format=jpg)](https://design.withfudge.com/share/pin-9534)

[Homepage hero with dark background, white headline, search bar, and pill-shaped category filter buttons](https://design.withfudge.com/share/pin-9534)

## Overview

Supply Family is a premium marketplace for design assets—fonts, mockups, and graphics—built around a stark, editorial visual language that lets the products speak for themselves. The system alternates between two dominant modes: a bright, gallery-like white canvas for product pages where type specimens and licensing details take center stage, and a deep, immersive dark mode for the homepage hero and discovery moments. Navigation sits in a near-black bar that anchors every page, creating consistent wayfinding without competing with the merchandise. The overall impression is one of confident restraint: generous whitespace, precise typographic hierarchy, and a near-absence of decorative elements beyond the assets themselves. Every surface is optimized for browsing and evaluation, with clear purchase pathways and specimen previews that dominate the viewport.

## Colors

The palette is deliberately minimal, built on a grayscale foundation with two distinct environmental modes.

| token | value | use |
|---|---|---|
| ink | #101010 | Primary text, navigation bar background, active UI elements |
| muted-ink | #4E4E4E | Secondary text, inactive states, subtle borders on dark surfaces |
| mid-gray | #AAAAAA | Tertiary labels, disabled options, placeholder text |
| border | #DADADA | Hairline dividers, input borders, card outlines |
| canvas | #FFFFFF | Primary page background, product page ground |
| surface-dark | #101010 | Hero sections, dark mode backgrounds |
| text-on-dark | #FFFFFF | Headlines and primary text on dark surfaces |
| border-on-dark | #4E4E4E | Subtle borders and dividers on dark backgrounds |

The light mode dominates product and transaction pages, where a white canvas lets font specimens and mockup imagery read with maximum clarity. The dark mode appears strategically on the homepage hero and discovery surfaces, creating visual drama and focus on the search experience. There are no accent colors in the traditional sense; the products themselves—particularly the colorful type specimens and mockup photography—provide all necessary chromatic interest. The grayscale system ensures that no UI element competes with the merchandise for attention.

## Typography

The typographic system pairs a neutral sans-serif for interface and display with a distinctive serif for body reading, while dynamic font-loading renders actual product fonts in specimen previews.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Untitled Sans | 3.5rem | 500 | 1 | -0.04em | Homepage headline on dark hero |
| section-display | Untitled Sans | 2.375rem | 500 | 1 | -0.07em | Product titles, section headers, prices |
| body | Klim Type Foundry | 1.0625rem | 400 | 1.5 | -0.02em | Long-form descriptions, paragraphs |
| body-medium | Untitled Sans | 1.0625rem | 500 | 1.5 | -0.02em | Emphasized body text, selected states |
| label | Untitled Sans | 1rem | 500 | 1.25 | -0.02em | Buttons, tags, category filters, navigation items |
| navigation | Klim Type Foundry | 1.0625rem | 400 | 1 | normal | Top-bar category links |
| specimen-display | Dynamic Font 8 Jjuxwsnn | 5rem | 400 | 1 | normal | Large type specimen previews |
| specimen-secondary | Dynamic Fonthm 6 R 5 Uax 7 | 5rem | 400 | 1 | normal | Alternate weight/style specimens |
| specimen-medium | Dynamic Font 8 Jjuxwsnn | 2.5625rem | 400 | 1 | normal | Medium-size specimen samples |
| price | Untitled Sans | 2.375rem | 500 | 1 | -0.07em | Cart totals, pricing display |

Untitled Sans, designed by Kris Sowersby of Klim Type Foundry, serves as the structural typeface for all interface elements, headlines, and pricing. Its Medium weight carries display hierarchy with tight tracking that feels contemporary and confident. The Klim Type Foundry serif provides body text with classical proportions and comfortable reading. The system also references Klim Type Foundry-Not Licensed For Desktop Use as a distinct web-licensed delivery of the same design lineage. For font product pages, the system loads the actual retail fonts dynamically—rendered here as Dynamic Font 8 Jjuxwsnn and Dynamic Fonthm 6 R 5 Uax 7—allowing customers to evaluate the exact typeface before purchase. Verify licensing for these families before production use.

## Layout

The layout system is built on a generous 40px horizontal padding that creates consistent breathing room across all viewport widths. Pages are fundamentally single-column with asymmetric two-column splits at the product detail level.

The global navigation occupies a full-width bar with near-black background, containing category links centered or left-aligned, with search, account, and cart utilities clustered at the right edge. Below this, product pages introduce a breadcrumb trail in muted text, establishing hierarchy without visual weight.

The product detail template divides into a wide left column for the type specimen or mockup preview—occupying roughly 60% of the available width—and a narrower right column for purchase controls, licensing selection, and metadata. This ratio prioritizes evaluation over transaction, letting customers experience the asset at scale before committing.

Vertical spacing follows a pronounced scale: major section breaks sit at 140px, content blocks separate at 50px, and related elements group at 20px. The homepage hero compresses this rhythm vertically, centering content with 92px top padding and 110px bottom padding, pushing the search interaction toward the optical center of the viewport.

The search bar spans nearly the full content width on the homepage, with rounded corners and subtle darkening against the already-dark background. Below it, category filter pills arrange in a centered, wrapping cluster with consistent internal spacing.

## Visual language

The visual language is defined by radical simplicity and material honesty. Surfaces are flat, shadows are absent, and depth is created entirely through color contrast and spatial arrangement. The near-total absence of decorative elements means that every typeface, every mockup photograph, and every graphic asset becomes the visual focus by default.

Borders function as precise hairlines—1px solid rules in light gray—that separate functional zones without creating visual heaviness. The product page for 403 Mesapholic demonstrates this clearly: a single horizontal rule divides the family selection area from the specimen above, and licensing tiers stack with thin borders between options.

The specimen presentation is the most distinctive visual behavior in the system. Fonts render at large scale—80px for primary specimens, 41px for secondary samples—using the actual retail font files rather than placeholder text. This creates an authentic evaluation environment where customers see exact character shapes, spacing, and optical weight. Italic and alternate styles display in parallel, with small muted labels identifying each variant.

Interactive elements favor restraint: buttons are rectangular with generous padding, select menus are minimal with subtle chevrons, and the save/bookmark action appears as a simple outline icon with text label. The overall effect is that of a well-lit gallery where the merchandise receives full attention and the architecture recedes.

## Components

### Global navigation

- **Anatomy**: Full-width bar with logo mark at left, category links centered, utility icons (search, account, cart) at right
- **Surface**: Background `{colors.ink}`, text `{colors.canvas}`
- **Typography**: `{typography.navigation}` for category links
- **Spacing**: Height accommodates comfortable touch targets; horizontal padding matches page gutter at 40px
- **Composition**: Flex row with space-between logic; category cluster groups Mockups, Fonts, Graphics, More, Bundles, Collections

### Search bar (homepage)

- **Anatomy**: Full-width input field with search icon at right edge, placeholder text centered-left
- **Surface**: Background slightly lighter than hero dark, border none or extremely subtle
- **Typography**: `{typography.label}` for placeholder, `{typography.body}` for entered text
- **Shape**: Full-width rectangle with minimal or no radius
- **Spacing**: Padding 8px 14px 9px internal; sits below headline with 55px margin

### Category filter pills

- **Anatomy**: Rounded button with search icon prefix and category label
- **Surface**: Transparent or subtle dark background, 1px border `{colors.border-on-dark}`, text `{colors.text-on-dark}`
- **Typography**: `{typography.label}`
- **Shape**: Pill radius at 32px
- **Spacing**: 8px–14px internal padding; buttons wrap with consistent gap
- **Composition**: Centered cluster below search bar, two rows visible at typical widths

### Type specimen preview

- **Anatomy**: Large-scale text sample with size/tracking controls above, style variants below
- **Surface**: `{colors.canvas}` background, no border or shadow
- **Typography**: `{typography.specimen-display}` or `{typography.specimen-secondary}` at 5rem; actual retail font files loaded dynamically
- **Spacing**: 20px bottom padding between specimen blocks; 140px top margin from preceding content
- **Composition**: Left-aligned, full width of primary content column; controls (size slider, tracking slider, features dropdown) in horizontal row above

### Licensing tier selector

- **Anatomy**: Stacked accordion rows with icon, tier name, and expand chevron
- **Surface**: `{colors.canvas}` background, 1px top border `{colors.border}` between rows
- **Typography**: `{typography.label}` for tier names; `{typography.body}` for descriptions when expanded
- **Spacing**: 19px 26px internal padding per row; 20px bottom padding on container
- **States**: Active/selected tier shows filled icon and darker text; inactive tiers show muted icon and `{colors.mid-gray}` text

### Purchase summary panel

- **Anatomy**: Selected item label, usage terms, price, and total
- **Surface**: `{colors.canvas}` background, 1px top border `{colors.border}` separating from selector
- **Typography**: `{typography.body}` for terms, `{typography.price}` for dollar amounts
- **Spacing**: 30px top padding from selector; 20px bottom padding
- **Composition**: Right-aligned price with left-aligned description; total emphasized at larger scale

### Breadcrumb trail

- **Anatomy**: Home > Category > Subcategory > Product name with chevron separators
- **Typography**: `{typography.body}` with `{colors.muted-ink}` for inactive segments, `{colors.ink}` for current page
- **Spacing**: 67px top padding below navigation; 0px 40px horizontal padding

## Responsive behavior

The system appears optimized for desktop browsing, with generous fixed widths and multi-column layouts that would require significant reorganization for smaller viewports. At minimum, the product page two-column layout should stack vertically on narrow screens, placing the purchase panel below the specimen preview. The type specimen controls—currently arranged horizontally with sliders—may need vertical stacking or simplification to touch-friendly inputs.

The global navigation's category cluster should collapse to a hamburger menu or condensed dropdown when horizontal space is insufficient. The homepage search bar and filter pills naturally adapt to full-width single-column arrangement.

Font specimen sizes, currently fixed at 80px, should scale down proportionally to maintain readability without excessive reflow. The 40px horizontal padding can reduce to 20px or 16px on mobile to maximize content area.

## Practical implementation guidance

### Preserve
- The stark light-dark environmental contrast; do not introduce intermediate gray backgrounds
- Actual font file rendering in specimens rather than static images or substitute typefaces
- The generous 40px horizontal padding and pronounced vertical section breaks
- The hairline 1px border vocabulary for all dividers and separators
- Pill-shaped category filters with icon prefix and subtle border treatment

### Avoid
- Adding decorative shadows, gradients, or background textures that compete with product imagery
- Using accent colors for calls-to-action; the grayscale system is intentional
- Condensing the specimen preview sizes; evaluation requires large-scale rendering
- Replacing dynamic font loading with static specimen images
- Introducing card-based containers with heavy borders or backgrounds

### Recommended build order
1. Establish the color system with both light and dark environmental modes
2. Implement typography scale with Untitled Sans and Klim Type Foundry, including dynamic font loading infrastructure
3. Build global navigation with consistent dark bar and utility clustering
4. Create the two-column product page template with specimen-first layout
5. Develop licensing selector accordion with tier states and pricing calculation
6. Add homepage hero with search bar and category filter pills
7. Refine spacing scale and responsive breakpoints

### Accessibility
- Ensure the dark hero mode meets WCAG AA contrast for all text sizes; the white-on-near-black combination exceeds requirements
- Provide visible focus indicators on the minimal button and link styles; the current flat design risks obscuring keyboard navigation
- Add aria-expanded and aria-controls to the licensing accordion for screen reader users
- Confirm that dynamic font specimens include alt text or aria-labels describing the font name and style being previewed
- Maintain touch targets at minimum 44px for all interactive elements, particularly the small slider controls in the specimen toolbar

## Scope note

This guide covers the homepage hero, global navigation, and font product detail page as visible on desktop. Mockup and graphic product pages, checkout flow, account management, and mobile layouts are not represented in the supplied material. The dynamic font families used for specimen rendering require proper licensing verification for production deployment.
