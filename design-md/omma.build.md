# How omma.build is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/omma.build-design)

Last updated: 2026-08-10

## Captured pages

[![Modal dialog showing credit top-up state with tab navigation and centered empty-state message on near-black background](https://pin.fontofweb.com/8400?format=jpg)](https://design.withfudge.com/share/pin-8400)

[Modal dialog showing credit top-up state with tab navigation and centered empty-state message on near-black background](https://design.withfudge.com/share/pin-8400)

[![Three-column pricing cards with Popular highlight badge, white primary action button, and dark filled secondary button](https://pin.fontofweb.com/8399?format=jpg)](https://design.withfudge.com/share/pin-8399)

[Three-column pricing cards with Popular highlight badge, white primary action button, and dark filled secondary button](https://design.withfudge.com/share/pin-8399)

[![Components page with centered heading, search input with rounded corners, and empty-state illustration with helper text](https://pin.fontofweb.com/8398?format=jpg)](https://design.withfudge.com/share/pin-8398)

[Components page with centered heading, search input with rounded corners, and empty-state illustration with helper text](https://design.withfudge.com/share/pin-8398)

[![Chat interface with prompt suggestions as pill buttons, message input bar with command hint, and minimal dark canvas](https://pin.fontofweb.com/8391?format=jpg)](https://design.withfudge.com/share/pin-8391)

[Chat interface with prompt suggestions as pill buttons, message input bar with command hint, and minimal dark canvas](https://design.withfudge.com/share/pin-8391)

## Overview

Omma is a dark-first creative platform for generating interactive components, 3D models, and visual assets through conversational AI. The interface prioritizes immersion and focus by anchoring every view to a near-black canvas, letting generated content and user creations become the visual center of attention. The design language is deliberately restrained: a single sans-serif type family handles all interface text, gray values create hierarchy without chromatic distraction, and rounded corners soften the technical density of code-generation tools. White surfaces appear only for primary actions and badges, creating high-contrast focal points that guide users toward conversion moments. The system balances the expressive potential of AI-generated output with the clarity required for a professional creative tool, using elevation through subtle background shifts rather than heavy shadows to define layers.

## Colors

The color system is built on a monochromatic foundation with reserved accent colors for functional signaling. Dark surfaces dominate; light values are used sparingly for emphasis and actionability.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Deepest background, modal overlays, empty states |
| surface | `#121212` | Primary page background, sidebar, chat canvas |
| surface-elevated | `#202020` | Cards, inputs, elevated panels, pricing cards |
| border-subtle | `#2A2A2A` | Dividers, input borders, card outlines, hairlines |
| ink-primary | `#ECECEC` | Headings, primary body text, active navigation |
| ink-secondary | `#B4B4B4` | Secondary text, descriptions, inactive tabs |
| ink-muted | `#6E6E6E` | Placeholder text, disabled states, tertiary labels |
| ink-dim | `#555555` | Subtle borders, iconography, decorative elements |
| ink-faint | `#404040` | Very subtle separators, background patterns |
| action-primary | `#FFFFFF` | Primary button fills, badge backgrounds, emphasis |
| action-primary-text | `#000000` | Text on primary buttons and white surfaces |
| action-secondary | `#202020` | Secondary button fills, dark CTAs |
| action-secondary-text | `#ECECEC` | Text on secondary buttons |
| accent-green | `#34D399` | Success states, positive indicators |
| accent-purple | `#818CF8` | Feature highlights, creative tool indicators |
| accent-pink | `#F472B6` | Decorative accents, generative content markers |
| accent-orange | `#FB923C` | Warnings, attention-grabbing labels |

The dark mode is not an alternative but the native environment. Light values progress from `#ECECEC` through `#404040` in roughly even perceptual steps, creating a grayscale ladder that supports four distinct levels of text hierarchy. The near-black canvas absorbs visual noise, making generated imagery and colorful AI outputs feel more vivid when they appear. White is reserved for moments of commitment—upgrading a plan, creating a new component, confirming an action—so that these surfaces carry implicit urgency. Accent colors appear in generated content and functional badges rather than in the chrome, keeping the interface neutral until user creativity introduces chromatic variety.

## Typography

All interface text is set in Geist, a contemporary sans-serif designed by Basement Studio with Vercel, available in Regular, Medium, Semibold, and Bold weights. Geist Mono handles code snippets, technical labels, and monospace contexts. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3rem | 600 | 1.1 | -0.03em | Landing page headlines, hero sections |
| section-display | Geist | 2rem | 600 | 1.15 | -0.03em | Section headings, pricing page titles |
| heading-large | Geist | 1.75rem | 500 | 1.2 | -0.02em | Modal titles, prominent page headers |
| heading-medium | Geist | 1.2rem | 600 | 1.3 | -0.01em | Card titles, feature headings |
| heading-small | Geist | 1.05rem | 600 | 1.3 | normal | Subsection labels, list headers |
| body | Geist | 1rem | 400 | 1.5 | normal | Primary body text, descriptions, navigation |
| body-small | Geist | 0.8rem | 400 | 1.5 | normal | Secondary descriptions, helper text, captions |
| label | Geist | 0.8rem | 500 | 1.4 | normal | Button text, tab labels, form labels |
| label-small | Geist | 0.75rem | 400 | 1.4 | normal | Badges, metadata, compact UI labels |
| price-display | Geist | 2.5rem | 700 | 1 | -0.02em | Pricing amounts, large numerical values |
| mono-label | Geist Mono | 0.7rem | 400 | 1.4 | normal | Code snippets, technical identifiers |

The type scale is tight and functional. Display sizes use negative letter spacing for a compact, engineered feel appropriate to a technical creative tool. Body sizes are generous enough for readability on dark backgrounds without becoming spacious. Weight variations create hierarchy more than size differences: a Semibold heading at 1.05rem can outrank a Regular label at 1.2rem through density alone. Line heights stay tight to maintain the interface's information-dense character.

## Layout

The layout system favors centered, contained compositions over full-bleed expansiveness. Content lives within modest maximum widths, creating focused work areas that feel like studios rather than galleries.

**Grid and containment.** Primary content areas use centered containers with generous horizontal padding—typically 1.5rem to 1.75rem on each side. The components page centers its heading, search, and empty state within a single column. Pricing cards distribute across a three-column grid with consistent gaps. Chat interfaces use a single centered column for the conversation history, with the input area anchored to the bottom.

**Spacing rhythm.** The base unit is 0.125rem, but practical spacing clusters around 0.5rem, 0.75rem, 1rem, 1.5rem, and 2rem. Section spacing uses 3rem to 4rem, with hero sections receiving up to 3.75rem vertical padding. Component internal padding typically ranges from 0.75rem to 1.5rem depending on importance.

**Layering and elevation.** Elevation is achieved through background color shifts rather than shadows. The hierarchy proceeds from `#000000` (deepest) through `#121212` (page) to `#202020` (elevated surfaces). This creates depth without the visual noise of drop shadows in a dark environment. When borders are needed, they use `#2A2A2A` at 1px solid, functioning as optical hairlines that separate without dividing.

**Navigation structure.** A persistent sidebar or top navigation uses the page background color with subtle active states. Navigation links at 0.8rem Regular weight use `#6E6E6E` for inactive items and `#ECECEC` for active items, with no additional background change required.

## Visual language

The visual character is technical minimalism with warmth. Rounded corners appear throughout but stay modest—0.5rem to 0.875rem for most elements, with full pills reserved for badges and compact labels. This prevents the interface from feeling clinical while maintaining precision.

**Surface treatment.** All surfaces are flat. There are no gradients, no glassmorphism, no backdrop blur. The darkness itself provides atmosphere. Subtle borders at `#2A2A2A` define edges where background shifts are insufficient.

**Iconography and imagery.** Icons are simple line or filled glyphs, typically at 1rem size, using `#6E6E6E` or `#B4B4B4` depending on importance. Empty states use centered icon illustrations in circular containers with `#202020` backgrounds, creating gentle visual anchors without competing for attention.

**Interactive feedback.** Buttons and inputs receive their feedback through background inversion rather than color change. A primary button is white on black; its pressed or hover state might simply maintain this high contrast. Secondary buttons on dark surfaces use subtle border or background shifts. The restrained palette means every interactive change is noticeable without being dramatic.

**Badge and label system.** Status badges use white backgrounds with black text, pill-shaped with tight padding. They sit atop cards or near headings to indicate state—"CURRENT", "POPULAR"—without requiring color coding that would compete with generated content.

## Components

### Modal dialog

**Anatomy.** A centered panel with a close control in the upper right, a title and optional subtitle at top left, tab navigation below the header, and a content area that adapts to state.

**Surface.** Panel background is `#121212` with no visible border; the contrast against the `#000000` overlay provides definition. The overlay itself is solid black at high opacity.

**Typography.** Title uses heading-large at 1.75rem Semibold. Subtitle uses body-small at 0.8rem in `#6E6E6E`. Tab labels use label at 0.8rem Medium, with active tab receiving `#ECECEC` and an underline, inactive receiving `#6E6E6E`.

**Spacing.** Panel padding is 1.5rem top and sides, with content areas receiving additional internal spacing. The close button sits flush with the panel edge.

**States.** Empty states center an icon in a 2.5rem circular container with `#202020` background, followed by heading-small and body-small text, then a primary button.

### Pricing card

**Anatomy.** A vertical card with a badge area at top, plan name and price, description, feature list with checkmarks, and a bottom action button.

**Surface.** Background is `#202020` with a 1px `#2A2A2A` border and 0.875rem radius. The highlighted card uses a slightly more visible border treatment.

**Typography.** Plan name uses heading-medium. Price uses price-display with `/mo` suffix in body-small. Description and features use body-small in `#6E6E6E`. Feature list items include a checkmark prefix.

**Composition.** Cards sit in a row with equal width distribution, internal padding of 1.5rem, and consistent vertical rhythm between price, description, and features.

**Variants.** The current plan card uses a disabled secondary button. The recommended plan uses a white primary button. The team plan uses a dark filled button with light text.

### Search input

**Anatomy.** A text field with a leading search icon, placeholder text, and no visible button.

**Surface.** Background `#202020`, border 1px `#2A2A2A`, radius 0.625rem. No focus ring visible in static state.

**Typography.** Placeholder uses body at 1rem in `#6E6E6E`. Input text uses body in `#ECECEC`.

**Spacing.** Padding of 0.75rem vertical and 1.5rem horizontal, with the icon inset from the left edge.

### Prompt suggestion pill

**Anatomy.** A compact button with text only, no icon.

**Surface.** Transparent background with 1px `#2A2A2A` border, 0.5rem radius. Hover state not visible in static view.

**Typography.** label-small at 0.75rem Regular in `#6E6E6E`.

**Spacing.** Padding of 0.75rem horizontal and 0.5rem vertical. Pills stack vertically with 0.5rem gap.

### Message input bar

**Anatomy.** A wide input area with placeholder hint, leading attachment button, and trailing action buttons for context and send.

**Surface.** Background `#202020`, radius 0.625rem, spanning nearly full width of the chat column.

**Typography.** Placeholder uses body-small in `#6E6E6E`. The command hint "Type / for commands" is integrated into the placeholder.

**Composition.** Left side holds a plus icon for attachments. Right side holds token counter, copy button, and send button. Internal padding of 1rem.

### Button system

**Primary button.** White background, black text, 0.5rem radius, padding 0.5rem 1rem. Used for creation actions, upgrades, and confirmations.

**Secondary button.** `#202020` background, `#ECECEC` text, 0.5rem radius, same padding. Used for alternative actions and dark-themed CTAs.

**Ghost button.** Transparent background, `#B4B4B4` text, no border or subtle border. Used for dismissals, secondary navigation, and low-priority actions.

**Bordered button.** Transparent background with 1px white border, white text. Used in navigation for outlined emphasis.

## Responsive behavior

The interface appears optimized for desktop and large tablet use, with centered single-column layouts that naturally adapt to narrower viewports. The pricing grid should collapse to a single stacked column on mobile, with cards maintaining full width and internal spacing. The chat interface's message input should remain fixed to the viewport bottom, with the conversation history scrolling above it. Modal dialogs should transition to full-screen or near-full-screen on small viewports, preserving the close control and header structure. Navigation should collapse to a compact bar or drawer on mobile, with the sidebar items becoming a horizontal scroll or hamburger menu. Typography scales down modestly: hero-display should reduce to 2rem on mobile, section-display to 1.5rem, with body text remaining at 1rem for readability.

## Practical implementation guidance

### Preserve
- The near-black canvas as the default environment; never introduce light mode without explicit design intent
- The tight, weight-driven type hierarchy rather than size-driven alone
- White buttons for primary actions only; do not dilute their significance
- The flat, shadowless elevation model using background color shifts
- Generous border radius on inputs and buttons for approachability

### Avoid
- Drop shadows on dark surfaces; they disappear or create muddy edges
- Color-coded status systems that compete with generated content
- Large size jumps in typography; the scale is intentionally compressed
- Light backgrounds for content areas; the darkness is the brand
- Multiple font families for interface text; Geist handles everything

### Recommended build order
1. Establish the dark canvas and surface color stack (`#000000`, `#121212`, `#202020`, `#2A2A2A`)
2. Implement Geist at 1rem/400 as the body foundation with proper font loading
3. Build the button system with primary (white) and secondary (dark) variants
4. Create the input component with search as the reference implementation
5. Construct the modal shell with overlay, panel, and close control
6. Add the pricing card with badge, price display, and feature list
7. Implement the chat interface with message input and prompt suggestions
8. Fine-tune spacing tokens against real content density

### Accessibility
- Ensure white text on black backgrounds meets WCAG AAA contrast; the `#ECECEC` on `#121212` combination exceeds 4.5:1
- Provide visible focus indicators for keyboard navigation, likely as outline or border shifts since the design avoids shadows
- Maintain touch targets at minimum 44px for buttons, especially the compact prompt suggestion pills
- Use aria-labels for icon-only buttons in the message input bar
- Ensure modal dialogs trap focus and provide escape key dismissal
- Consider reduced-motion preferences for any generative or loading animations

## Scope note

This guide covers the dark-themed application interface for Omma's component library, pricing, and chat experiences. Marketing pages with light backgrounds, mobile-specific layouts, loading and generative animation states, and email or notification templates are not represented in the supplied material. Measurements are derived from the documented interface values.
