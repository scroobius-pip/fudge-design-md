# How surrealdb.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/surrealdb.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large display heading, purple gradient CTA button, and abstract purple wave visualization on near-black background](https://pin.fontofweb.com/10109?format=jpg)](https://design.withfudge.com/share/pin-10109)

[Hero section with large display heading, purple gradient CTA button, and abstract purple wave visualization on near-black background](https://design.withfudge.com/share/pin-10109)

[![Feature grid with six dark cards containing purple particle burst illustrations and descriptive text with arrow links](https://pin.fontofweb.com/10110?format=jpg)](https://design.withfudge.com/share/pin-10110)

[Feature grid with six dark cards containing purple particle burst illustrations and descriptive text with arrow links](https://design.withfudge.com/share/pin-10110)

## Overview

SurrealDB's website presents a deeply dark, immersive environment built for a technical audience evaluating database infrastructure. The visual system centers on a near-black canvas that lets electric purple gradients and generative particle imagery become the primary emotional signal. The design avoids conventional SaaS brightness in favor of a cinematic, almost nocturnal atmosphere that suggests sophistication and computational depth. Typography is restrained and modern, using a single geometric sans-serif at multiple sizes with tight tracking on display text. The layout alternates between expansive hero moments with full-bleed abstract visuals and dense, card-based feature grids that organize complex product capabilities into scannable units. Every surface is intentionally dark, with subtle elevation changes created through slightly lifted background values rather than shadows, maintaining a flat yet layered spatial quality.

## Colors

The palette is built on extreme contrast: a near-black foundation with pure white primary text and a vivid purple accent system. The purple appears in gradients, particle imagery, and interactive states, creating a cohesive brand signature across the experience.

| token | hex | use |
|---|---|---|
| canvas | #0D0D12 | Primary page background, deepest layer |
| surface | #161520 | Card backgrounds, elevated panels |
| surface-raised | #181721 | Subtle elevation above surface, nav divider area |
| ink | #FFFFFF | Primary headings, hero text, active nav items |
| ink-secondary | #C9C9C9 | Body text on dark cards, secondary descriptions |
| ink-muted | #79849A | Tertiary text, metadata, disabled states |
| accent-purple | #D255FE | Gradient start, particle imagery highlights, brand moments |
| accent-deep-purple | #651DDD | Gradient end, depth in purple tones |
| border | #262232 | Card borders, structural dividers |
| border-subtle | #181721 | Hairline separators on dark surfaces |

The purple accent operates as a gradient pair: `linear-gradient(45deg, #D255FE 0%, #651DDD 100%)` for primary call-to-action buttons and brand moments. A secondary text-gradient treatment uses `linear-gradient(to right, #D255FE 50%, #FFFFFF 50%)` for clipped or highlighted typographic effects. The near-black canvas allows the purple to achieve maximum saturation impact without competing with other hues. No light mode is present in the visible system.

## Typography

The type system uses Geist, a geometric sans-serif by Basement Studio and Vercel, as the sole family for visible interface text. The design relies on size and tracking contrast rather than weight variation, using Regular (400) throughout. Display sizes are tightly tracked, while body sizes use neutral spacing. The design facts also reference Applesystem, Times, and System-Systemui as detected families; these appear to be browser defaults or fallback stacks rather than actively rendered brand typefaces in the visible interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 4.5rem | 400 | 1.04 | -0.02em | Hero headlines, page titles |
| section-heading | Geist | 1.0625rem | 400 | 1.3 | -0.02em | Card titles, feature headings |
| body-large | Geist | 1.0625rem | 400 | 1.45 | -0.01em | Hero descriptions, lead paragraphs |
| body | Geist | 0.875rem | 400 | 1.55 | normal | Default body text, navigation |
| label | Geist | 0.8125rem | 400 | 1 | normal | Buttons, tags, small UI labels |

The hero display at 72px (4.5rem) with -1.44px tracking creates an oversized, confident statement that dominates the viewport. Section headings at 17px with -0.34px tracking maintain tightness at smaller sizes. Body text at 15px with 23.25px line-height provides comfortable reading density for technical descriptions. The label size at 13px handles button text and compact UI elements. Verify licensing for Geist through Basement Studio or Vercel before production use.

## Layout

The page uses a centered container system with generous horizontal margins that create breathing room around content. The navigation and main content share a consistent inset, suggesting a single max-width container.

The navigation bar sits fixed at the top with a subtle bottom border in `border-subtle`, using flex distribution between logo and links on the left, utility actions on the right. Navigation items include dropdown indicators for hierarchical sections.

The hero section occupies substantial vertical space with asymmetric text placement: large display heading left-aligned with supporting description beneath, followed by a button pair. The hero background features a full-bleed abstract visualization—purple waveforms or particle fields that extend to viewport edges.

Below the hero, feature grids use a responsive column system. The visible layout shows a 2-column top row followed by 3-column rows, creating visual rhythm through density variation. Each card contains a title, description, generative particle illustration, and an arrow-prefixed link.

Section spacing is dramatic: 160px vertical padding for major sections, 80px for compact sections. Internal card padding is 24px with 12px gaps between elements. Container horizontal margins are approximately 128px, creating wide side gutters that focus attention on content.

## Visual language

The defining visual characteristic is the generative particle imagery: radial bursts, waveforms, and field patterns rendered in purple and magenta tones against dark surfaces. These illustrations appear to be procedural or WebGL-generated, with soft glows and depth-of-field effects that suggest data visualization or neural network aesthetics.

The imagery serves as both decoration and semantic signal—each card's particle pattern subtly evokes its feature topic (radial distribution for deployment, focused beams for AI, network meshes for security). The particles use the same purple gradient as interactive elements, creating system coherence.

Buttons use two distinct treatments: a filled gradient primary with white text, and a dark filled secondary with muted text. The gradient button employs the 45-degree purple pair, while the dark button sits slightly above the canvas with a subtle border.

The overall atmosphere is immersive and technical, avoiding conventional corporate cleanliness in favor of a more experimental, research-lab aesthetic. The darkness suggests depth and focus; the purple suggests innovation and creative computation.

## Components

### Navigation bar

- **Anatomy**: Logo mark with wordmark left, primary links center-left, utility actions right
- **Surface**: Transparent over hero, `surface-raised` background with `border-subtle` bottom divider
- **Typography**: `{typography.navigation}` for links, `{typography.label}` for buttons
- **Spacing**: 12px vertical padding, ~128px horizontal margins, 8px gap between nav items
- **Composition**: Flex row with space-between distribution; dropdown chevrons on "Platform", "Resources", "Why Surreal"

### Hero section

- **Anatomy**: Eyebrow logo mark, display heading, description paragraph, button pair, full-bleed background visualization
- **Surface**: Transparent over generative purple wave imagery
- **Typography**: `{typography.hero-display}` for heading, `{typography.body-large}` for description
- **Spacing**: Generous top padding below nav, left-aligned within container
- **Composition**: Text block left, background imagery fills entire section; buttons arranged horizontally with 10px gap

### Primary button

- **Anatomy**: Text label with optional icon, gradient background
- **Surface**: `linear-gradient(45deg, {colors.accent-purple}, {colors.accent-deep-purple})`
- **Typography**: `{typography.label}` in `{colors.ink}`
- **Shape**: 4px radius, 0px 18px padding (asymmetric for icon balance)
- **States**: Default shows full gradient; hover state should lighten or shift hue

### Secondary button

- **Anatomy**: Text label, dark filled background
- **Surface**: `{colors.surface}` background, subtle border
- **Typography**: `{typography.label}` in `{colors.ink-secondary}`
- **Shape**: 4px radius, 0px 18px padding
- **Spacing**: 4px internal gaps for icon+text pairs

### Feature card

- **Anatomy**: Title, description paragraph, generative particle illustration, arrow link
- **Surface**: `{colors.surface}` background, 4px radius
- **Typography**: `{typography.section-heading}` for title, `{typography.body}` in `{colors.ink-secondary}` for description, `{typography.body}` in `{colors.ink}` for link
- **Spacing**: 24px padding, 12px gap between elements
- **Composition**: Text stacked above illustration; link positioned bottom-left with arrow prefix
- **Imagery**: Full-width generative particle burst, purple/magenta on dark

### Announcement banner

- **Anatomy**: "NEW" badge, text label, link with arrow
- **Surface**: Transparent or very subtle elevation above nav
- **Typography**: `{typography.label}` for badge, `{typography.body}` for text
- **Composition**: Horizontal row with badge left, text center, navigation right

## Responsive behavior

The visible system shows a desktop viewport with wide container margins and multi-column grids. At narrower viewports, the feature grid should collapse from 3-column to 2-column to single-column, maintaining card aspect ratios and internal spacing. The hero display text should scale down proportionally, potentially to 2.5rem on mobile to prevent overflow. Navigation items with dropdowns should convert to a consolidated menu or hamburger pattern below approximately 1024px. The generative background imagery should remain fixed or scale to cover, preserving its atmospheric quality across sizes. Container margins should reduce from ~128px to 24px on mobile, maintaining readable line lengths without excessive side padding.

## Practical implementation guidance

### Preserve
- The extreme dark canvas with near-black values; avoid lifting the background lightness
- The single-family typographic system with tracking variation rather than weight variation
- The generative particle imagery as a core brand expression, not decorative afterthought
- The purple gradient as the sole accent, used consistently across interactive elements and imagery
- The generous section spacing that creates dramatic pacing between content blocks

### Avoid
- Adding multiple accent colors; the system succeeds through purple discipline
- Using shadows for elevation; rely on surface color changes instead
- Generic stock photography or flat illustrations that contradict the generative aesthetic
- Weight variations below 400; the system uses size and tracking for hierarchy
- Light mode without careful rethinking of the particle imagery and gradient impact

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement Geist with the full type scale, verifying web font loading
3. Build the navigation with container constraints and border treatment
4. Create the hero section with text layering over a placeholder for generative imagery
5. Develop the gradient button component with proper padding and radius
6. Construct the feature card with internal spacing and particle image containers
7. Implement the responsive grid system for card layouts
8. Add the announcement banner and secondary button variants

### Accessibility
- Ensure the purple gradient buttons maintain 3:1 contrast against the canvas; the gradient edges may need adjustment for WCAG AA
- Provide `prefers-reduced-motion` alternatives for the generative particle animations
- Use `aria-label` on icon-only buttons in the navigation
- Consider focus indicators that use the accent purple with sufficient offset from dark surfaces
- The 72px display text should scale with browser settings; test at 200% zoom

## Scope note

This guide covers the SurrealDB platform landing page including the hero, feature grid, navigation, and announcement banner. Footer content, documentation pages, pricing tables, authentication flows, and mobile navigation patterns are not represented in the supplied material. The generative particle imagery requires WebGL or canvas implementation; static fallbacks should preserve the purple color field composition. Applesystem, Times, and System-Systemui appear in the source as fallback or system font references and are not part of the active brand typography.
