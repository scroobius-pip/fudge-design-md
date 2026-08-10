# How wonder.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wonder.design-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with 'Wonder What's Possible' headline, product screenshot of AI design canvas interface, and purple 'Start for free' CTA button on near-black background](https://pin.fontofweb.com/8836?format=jpg)](https://design.withfudge.com/share/pin-8836)

[Hero section with 'Wonder What's Possible' headline, product screenshot of AI design canvas interface, and purple 'Start for free' CTA button on near-black background](https://design.withfudge.com/share/pin-8836)

[![Pricing grid showing four tiers from Free to Max with white text on dark cards, followed by mission statement with gradient background and purple CTA](https://pin.fontofweb.com/8835?format=jpg)](https://design.withfudge.com/share/pin-8835)

[Pricing grid showing four tiers from Free to Max with white text on dark cards, followed by mission statement with gradient background and purple CTA](https://design.withfudge.com/share/pin-8835)

[![Feature grid titled 'Wonder Toolkit' with four capability cards showing ideation, image generation, shaders, and code export with syntax-highlighted code blocks](https://pin.fontofweb.com/8834?format=jpg)](https://design.withfudge.com/share/pin-8834)

[Feature grid titled 'Wonder Toolkit' with four capability cards showing ideation, image generation, shaders, and code export with syntax-highlighted code blocks](https://design.withfudge.com/share/pin-8834)

## Overview

Wonder presents itself as an AI-native design tool through a deliberately dark, immersive interface that puts content and generative output at center stage. The visual system is built on a near-black canvas that absorbs attention inward, punctuated by electric purple accents and crisp white typography. The design language balances technical credibility with creative possibility—monospace labels signal precision and code-adjacent workflows, while generous whitespace and rounded pill buttons keep the experience approachable. Product screenshots appear to float in layered depth against gradient backgrounds that shift from deep violet to black, creating a sense of space without clutter. The overall impression is of a professional tool that feels futuristic yet immediately usable, with every element serving the core narrative of generative design power.

## Colors

The color system operates on a high-contrast dark mode with a restrained accent palette. The foundation is an extremely dark purple-black that reads as pure depth, with white and near-white text providing maximum legibility. Purple serves as the singular brand accent, appearing in buttons, labels, and decorative gradients.

| token | value | use |
|---|---|---|
| canvas | `#0F0217` | Primary page background, the deep purple-black that establishes the immersive environment |
| surface | `#000000` | Pure black for navigation bars, footer regions, and maximum-contrast panels |
| ink | `#FFFFFF` | Primary text color for headlines, body copy, and navigation |
| muted-ink | `#E1E4E8` | Secondary text for descriptions, pricing details, and supporting content |
| action | `#D262FF` | Primary CTA buttons, active states, and key interactive highlights |
| action-hover | `#B392F0` | Lighter purple for hover states and secondary accent emphasis |
| accent-blue | `#79B8FF` | Code syntax highlighting, technical indicators, and informational accents |
| accent-green | `#85E89D` | Success states, positive indicators, and secondary technical accents |
| accent-lavender | `#9ECBFF` | Tertiary accent for varied code highlighting and subtle differentiation |
| accent-deep-purple | `#390E4D` | Dark purple for shadow layers, depth effects, and gradient endpoints |
| border | `#FFFFFF` | Hairline dividers between sections, card borders at reduced opacity |

The interface maintains consistent dark mode throughout with no light variant visible. Gradients in the hero and mission sections blend from `accent-deep-purple` toward `canvas`, creating atmospheric depth without introducing new hues. Product screenshots introduce their own color through generated imagery, but the UI chrome remains disciplined in the purple-white-black triangle.

## Typography

Wonder employs two font families: Uncut Sans for all interface text and Martian Mono for labels, tags, and technical annotations. The design facts identify the exact supplied families as Uncut Sans and Martian Mono-Semi Expanded Regular, which is the specific width variant used for the Martian Mono instances in this system. Uncut Sans appears in Regular (400), Medium (500), and Semibold (600) weights. Martian Mono-Semi Expanded Regular appears at its defined width with Regular (400) weight, giving labels presence without density.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Uncut Sans | 3.125rem | 600 | 1.12 | -0.05em | Primary page headlines, "Wonder What's Possible" |
| section-display | Uncut Sans | 2.375rem | 600 | 1.10 | -0.025em | Section headings, "Our mission is to make design intuitive" |
| feature-headline | Uncut Sans | 1.125rem | 500 | 1.56 | normal | Card titles within feature grids |
| body | Uncut Sans | 1rem | 400 | 1.50 | normal | Navigation, descriptions, general content |
| body-small | Uncut Sans | 0.875rem | 400 | 1.43 | normal | Pricing details, list items, compact descriptions |
| body-large | Uncut Sans | 1.125rem | 400 | 1.45 | normal | Hero subheadlines, emphasized paragraphs |
| label | Martian Mono | 0.75rem | 400 | 1.50 | normal | Tags, status indicators, technical labels |
| navigation | Uncut Sans | 1rem | 400 | 1.50 | normal | Top bar links and actions |
| pricing-amount | Uncut Sans | 1.5rem | 500 | 1.33 | normal | Pricing figures with currency symbols |

The hero display size uses tight negative tracking that gives headlines a crafted, editorial quality. Section displays maintain similar weight but with slightly relaxed tracking for longer phrases. Martian Mono labels appear in uppercase or title-case depending on context, always at the small 12px size that keeps them subordinate to content. The type scale is built on a 2px relative unit, with sizes snapping to clean multiples.

Verify licensing for these families before production use. Uncut Sans is designed by Kasper Nordkvist and distributed by Uncu Twtf. Martian Mono is designed by Roman Shamin and distributed by Evil Martians.

## Layout

The layout system uses generous horizontal margins and a centered content column that creates breathing room around dense information. The navigation bar spans full width with internal padding of `0px 32px 0px 56px`, establishing an asymmetric left bias that accommodates the logo mark. Main content regions center with margins around `202.5px` to `293px` on either side, creating a readable line length for text-heavy sections.

Vertical rhythm is established through section padding of `40px` to `48px`, with larger gaps of `32px` between major content blocks. The feature grid in the toolkit section uses a two-column layout with `1px` white horizontal dividers separating rows, creating a subtle table-like structure without full borders. Cards within this grid maintain internal padding of `40px` with generous whitespace between text and illustrative elements.

The hero section stacks vertically: label, headline, description, and CTA, with `12px` to `16px` gaps between elements. Product screenshots below the hero appear to break the centered column, extending wider to create visual drama and demonstrate the tool's interface at realistic scale. The pricing section uses a four-column grid with equal-width cards separated by `1px` vertical dividers, creating a clean comparison table that reads left to right.

## Visual language

The visual language communicates technical sophistication through restraint. The near-black background absorbs chrome and emphasizes content, while the single purple accent (`#D262FF`) concentrates attention on actionable elements. Rounded shapes appear throughout—pill buttons, soft-cornered tags, and circular icon containers—but are balanced by sharp rectangular cards and precise grid lines.

Depth is created through layered shadows rather than heavy borders. The primary button shadow uses a complex stack: a dark drop shadow, a purple outline glow, and an inset white highlight that suggests dimensional bevel. Product screenshots float with subtle perspective and gradient underlays that separate them from the background without harsh edges.

Imagery style in the product screenshots shows the tool generating art-directed content—paintings, interfaces, and code—with the AI output serving as the visual interest while the UI chrome remains neutral. The overall effect is that Wonder disappears as a tool and presents only the creative possibility.

Code blocks appear as a distinct visual mode: dark backgrounds with syntax highlighting in blues, greens, and purples, using Martian Mono for the code itself. This creates a clear material shift when moving from marketing content to technical demonstration.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container, optionally preceded by an icon
- **Surface**: `action` (`#D262FF`) background with complex shadow stack creating depth and glow
- **Typography**: `body` token, Uncut Sans Medium (500), white text
- **Shape**: Full pill with `9999px` radius
- **Spacing**: Horizontal padding of `12px`, vertical padding derived from line height
- **Composition**: Inline-flex with centered items, gap for icon-text pairs
- **Variants**: Default state with full shadow; the shadow includes a purple outline glow that reinforces the brand color

### Navigation bar

- **Anatomy**: Logo mark and wordmark left-aligned, action links right-aligned with "Sign in" button
- **Surface**: `surface` (`#000000`) background, transparent or matching page background
- **Typography**: `navigation` token for links, `body` weight for the sign-in action
- **Shape**: Full-width bar with internal asymmetric padding (`56px` left, `32px` right)
- **Spacing**: Links padded with `12px` horizontal spacing
- **Composition**: Flex row with space-between alignment

### Feature card

- **Anatomy**: Label tag, headline, description paragraph, and illustrative media or code block
- **Surface**: Transparent or `canvas` background, separated from neighbors by `1px` white horizontal dividers
- **Typography**: `label` token (Martian Mono) for category tags in accent colors, `feature-headline` for titles, `body-small` for descriptions
- **Shape**: Rectangular with no border radius on the card itself; internal elements may use `rounded.panel`
- **Spacing**: `40px` internal padding, generous vertical gaps between text elements
- **Composition**: Two-column grid at section level; within each card, vertical stack with media below or beside text

### Pricing card

- **Anatomy**: Tier name, description, price with currency and period, feature list with checkmarks
- **Surface**: Transparent background with `1px` vertical white dividers between cards
- **Typography**: `feature-headline` for tier names, `body-small` for descriptions and features, `pricing-amount` for prices with `body-small` for "/month"
- **Shape**: No border radius; grid lines define structure
- **Spacing**: `40px` to `48px` internal padding
- **Composition**: Equal-width columns in a four-column grid

### Tag/label

- **Anatomy**: Short text string, sometimes with colored left border or background
- **Surface**: Transparent or subtle `accent-deep-purple` background
- **Typography**: `label` token, Martian Mono Regular, sometimes in accent colors (`#79B8FF`, `#85E89D`, `#D262FF`) for categorization
- **Shape**: `rounded.tag` (8px radius) or pill-shaped
- **Spacing**: `2px 8px` or `4px 8px` internal padding
- **Composition**: Inline element, often preceding headlines

### Product screenshot frame

- **Anatomy**: Browser-like or application window chrome containing generated content
- **Surface**: Light interface within (white or light gray), floating above dark page background
- **Typography**: Internal UI uses system-like sans-serif for the tool interface, distinct from page typography
- **Shape**: Large rounded corners (`3.35544e+07px` suggests near-pill or fully rounded rectangle for buttons within)
- **Composition**: Centered or offset within hero, with gradient underlay creating depth separation

## Responsive behavior

The design appears optimized for desktop viewing with generous margins and multi-column layouts. At narrower viewports, the four-column pricing grid should collapse to two columns and then single column, with dividers shifting from vertical to horizontal. The feature grid's two-column layout with horizontal dividers would naturally stack to single column, maintaining the divider as a section separator.

The hero headline at `50px` may require reduction on mobile to maintain comfortable line lengths; a scale to `38px` or `32px` would preserve hierarchy. Navigation links should collapse to a menu affordance when horizontal space is constrained. Product screenshots, which appear to break the content column, should maintain their aspect ratio while scaling to viewport width, potentially losing the floating perspective effect on smaller screens.

## Practical implementation guidance

### Preserve
- The extreme dark background (`#0F0217`) as the default canvas; this is foundational to the brand atmosphere
- The single purple accent (`#D262FF`) for all primary actions; do not introduce competing accent colors for CTAs
- The two-font system: Uncut Sans for everything readable, Martian Mono only for labels and technical annotations
- The generous asymmetric navigation padding that creates visual weight on the left
- The complex button shadow with purple glow and inset highlight; this dimensional treatment is distinctive

### Avoid
- Light mode backgrounds; the system is conceived for dark immersion
- Multiple accent colors for interactive states; keep the purple monopoly
- Sharp-cornered buttons; the pill shape is a consistent signature
- Generic system fonts for body text; the Uncut Sans character contributes significantly to the modern feel
- Heavy borders around cards; prefer hairline dividers or shadow depth

### Recommended build order
1. Establish the dark canvas background and white text defaults
2. Implement Uncut Sans at `body` size with proper weights
3. Build the navigation bar with asymmetric padding and logo placement
4. Create the primary button component with full shadow stack and pill radius
5. Develop the hero section with label-headline-description-CTA vertical stack
6. Add the feature grid with horizontal dividers and two-column responsive behavior
7. Implement pricing cards with vertical divider grid
8. Add Martian Mono labels and code block styling for technical sections

### Accessibility
- White text on near-black backgrounds provides excellent contrast ratios; maintain this for all body text
- The purple accent (`#D262FF`) against black meets WCAG AA for large text but should be verified for small UI elements; consider lightening or adding borders if used for small text
- Button shadows provide visual depth but should not be relied upon as the sole indicator of interactivity; maintain clear hover states
- The complex button shadow may cause rendering issues in high contrast modes; ensure a solid border or outline alternative
- Code blocks with syntax highlighting should maintain minimum 4.5:1 contrast for all token colors; the blue and green accents may need adjustment for small sizes

## Scope note

This guide covers the marketing homepage visible in the supplied images, including hero, feature toolkit, pricing, and mission sections. Navigation dropdowns, mobile layouts, form interactions, account dashboards, and the design tool interface itself are not represented. Motion design, loading states, and error handling are not documented. Measurements are derived from the exact values in the design facts and rounded to the 2px relative unit where applicable.
