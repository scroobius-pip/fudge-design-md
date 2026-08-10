# How tweakcn.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tweakcn.com-design)

Last updated: 2026-08-10

## Captured pages

[![Full editor layout showing dark theme with left sidebar color controls and right preview area with dashboard cards, calendar, charts, and payment tables](https://pin.fontofweb.com/6202?format=jpg)](https://design.withfudge.com/share/pin-6202)

[Full editor layout showing dark theme with left sidebar color controls and right preview area with dashboard cards, calendar, charts, and payment tables](https://design.withfudge.com/share/pin-6202)

[![Theme code export modal overlay displaying CSS variables with syntax highlighting and package manager tabs against darkened preview background](https://pin.fontofweb.com/6204?format=jpg)](https://design.withfudge.com/share/pin-6204)

[Theme code export modal overlay displaying CSS variables with syntax highlighting and package manager tabs against darkened preview background](https://design.withfudge.com/share/pin-6204)

[![Collapsed mobile sidebar view with color category accordions, hex inputs, and Tailwind color search dropdown in vertical layout](https://pin.fontofweb.com/6203?format=jpg)](https://design.withfudge.com/share/pin-6203)

[Collapsed mobile sidebar view with color category accordions, hex inputs, and Tailwind color search dropdown in vertical layout](https://design.withfudge.com/share/pin-6203)

## Overview

Tweakcn is a theme generator and customization interface for shadcn/ui components. The design presents a dark-first, developer-oriented workspace split between a dense left control sidebar and a live preview canvas. The visual system prioritizes information density, immediate visual feedback, and code-forward workflows. Every surface sits on near-black foundations with subtle elevation changes creating hierarchy without heavy shadows. The interface speaks in the language of design systems: hex values, OKLCH color strings, CSS variables, and component variants are all surfaced as first-class content rather than hidden configuration. Typography remains neutral and functional, letting color and code syntax carry the personality. The overall impression is of a professional tool that respects the user's attention—minimal decoration, maximum utility, with clear pathways from visual exploration to code export.

## Colors

The color system is built on a near-monochrome dark foundation with carefully restrained warm and cool accents. The palette supports both the tool chrome and the previewed component themes simultaneously.

| token | value | use |
|---|---|---|
| canvas | #0A0A0A | Root background, deepest surface |
| surface | #111111 | Sidebar background, code blocks, primary panels |
| surface-raised | #171717 | Preview cards, modal backgrounds, elevated containers |
| surface-elevated | #222222 | Input backgrounds, button fills, hover states |
| border | #262626 | Default borders, dividers, separators |
| border-subtle | #201E18 | Warm-tinted borders for thematic variation |
| ink | #EEEEEE | Primary text, headings, active labels |
| ink-muted | #A1A1A1 | Secondary text, descriptions, disabled states |
| ink-dim | #ABB2BF | Tertiary text, placeholders, code comments |
| accent | #61AFEF | Blue accent for interactive highlights, links, focus |
| accent-warm | #D19A66 | Orange accent for warnings, attention states |
| accent-highlight | #FFE0C2 | Warm highlight for primary color previews |
| action | #FAFAFA | Primary button fill, high-contrast actions |
| action-inverse | #111111 | Text on primary buttons, dark-on-light contexts |
| success | #E5E5E5 | Positive states, confirmation feedback |
| danger | #393028 | Destructive actions, error containers |

The dark hierarchy progresses from #0A0A0A through #111111, #171717, to #222222, creating four discernible elevation levels. Borders remain subtle at #262626, appearing as hairlines that define structure without visual weight. The warm accents (#D19A66, #FFE0C2) appear in code syntax highlighting and primary color previews, while the cool blue accent (#61AFEF) serves interactive states. The preview canvas demonstrates how the tool generates themes for light surfaces—the exported themes include light backgrounds that invert the tool's own dark chrome.

## Typography

The type system uses three families across distinct functional zones. System UI handles all interface chrome and preview content. Roboto serves button labels and action elements. Fira Code appears exclusively in code export blocks and syntax-highlighted CSS variables.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | System | 2.25rem | 700 | 1.11 | -0.05em | Page titles, major headings |
| section-display | System | 1.25rem | 600 | 1.4 | -0.025em | Section headers, card titles |
| card-title | System | 1rem | 600 | 1 | -0.025em | Compact headings, metric labels |
| body | System | 1rem | 400 | 1.5 | normal | Primary reading text, descriptions |
| body-small | System | 0.875rem | 400 | 1.43 | normal | Secondary content, form labels |
| label | System | 0.875rem | 500 | 1.43 | normal | Navigation, category headers, badges |
| caption | System | 0.75rem | 500 | 1.33 | normal | Metadata, timestamps, small labels |
| code | Fira Code | 0.875rem | 400 | 1.43 | normal | CSS variables, export blocks, syntax |
| button-primary | Roboto | 0.875rem | 500 | 1.43 | normal | Primary and secondary button labels |
| button-small | Roboto | 0.75rem | 500 | 1.33 | normal | Compact buttons, tab labels |

System UI renders at 16px for body text with a tight display hierarchy above (18px, 20px, 36px for hero). Roboto at 14px/500 provides the authoritative voice for actions. Fira Code, designed by Carrois Corporate Edenspiekermann Ag Nikita Prokopov, appears at 14px for code blocks. Roboto, designed by Christian Robertson and provided by Google, serves button typography. Verify licensing for these families before production use.

## Layout

The interface follows a classic tool layout: fixed left sidebar, scrollable main canvas, and floating overlays for modals and exports. The sidebar occupies approximately one-third of the viewport width on desktop, containing nested accordions of color controls. The preview canvas fills the remaining space with a responsive grid of component cards demonstrating the active theme.

The sidebar organizes controls into collapsible sections: Primary Colors, Secondary Colors, Accent Colors, Base Colors, Card Colors, Popover Colors, Muted Colors, Destructive Colors, Border & Input Colors, Chart Colors, and Sidebar Colors. Each section contains labeled inputs with hex values, color swatches, and occasional OKLCH string displays. Sections stack vertically with consistent internal padding.

The preview canvas arranges cards in a masonry-like grid. Cards vary in size: small stat cards showing "Total Revenue" with sparklines, medium cards with calendar widgets, large cards with form elements like subscription upgrades, and full-width cards with data tables. The grid maintains consistent gutters between cards while allowing card height to vary by content.

A top bar spans the full width, containing the logo, theme selector dropdown, navigation arrows, view tabs (Custom, Cards, Dashboard, Mail, Pricing, Color Palette), and action buttons (Reset, Import, Edit, Share, Save, Code). On the right, a secondary toolbar offers Open in V0, layout toggle, and refresh actions.

Modals appear centered with a backdrop overlay, as seen in the Theme Code export dialog. The modal contains tabbed package manager selection, a code block with syntax highlighting, and copy actions.

## Visual language

The visual character is austere and technical, drawing from code editors and developer tools rather than consumer applications. Surfaces are flat with no gradients and minimal shadows—depth comes from background color changes alone. Borders are omnipresent but whisper-thin, creating cellular structure without visual noise.

Code syntax highlighting introduces the only vibrant color moments: blue for CSS properties, orange for values, white for punctuation, and warm cream for strings. This highlighting appears both in the export modal and implicitly in the color preview swatches.

Interactive elements signal state through background shifts rather than borders or shadows. Buttons fill from #222222 to #FAFAFA when primary. Inputs rest at #222222 and gain focus through subtle border changes. The active tab in package manager selectors inverts to a filled state.

The preview cards demonstrate the generated theme in situ: light text on dark surfaces for the tool chrome, but the previewed components themselves may show light backgrounds, colored accents, and varied data visualizations. This creates a meta-visual effect where the tool's dark canvas makes previewed light themes appear more luminous.

Iconography is minimal and functional—chevrons for expansion, arrows for navigation, copy icons for clipboard actions. The "Get Pro" badge and star count in the header add social proof without visual interruption.

## Components

**Sidebar accordion**
- Anatomy: Section header with label and chevron, expandable content area with color input rows
- Surface: Background {colors.surface}, border-bottom {colors.border}
- Typography: Section header {typography.label}, input labels {typography.body-small}
- Shape: No border-radius on outer container, 0.5rem on inputs
- Spacing: 1.5rem padding on section content, 0.75rem between input rows
- Composition: Full-width sections stack vertically, each independently collapsible
- Variants: Expanded state shows full content; collapsed shows header only with right-aligned chevron

**Color input row**
- Anatomy: Label text, hex value input, color swatch preview, optional OKLCH display, action icon
- Surface: Input background {colors.surface-elevated}, border {colors.border}
- Typography: Label {typography.body-small}, value {typography.code}
- Shape: 0.5rem border-radius on input field
- Spacing: 0.75rem vertical padding, 0.5rem horizontal internal padding
- Composition: Label left, value center, swatch and actions right; flex row with space-between

**Preview card**
- Anatomy: Optional header with title and action, content area with component preview, optional footer
- Surface: Background {colors.surface-raised}, border {colors.border}
- Typography: Title {typography.section-display}, body {typography.body}, metadata {typography.body-small}
- Shape: 0.5rem border-radius
- Spacing: 1.5rem padding
- Composition: Internal layout varies by card type—stat cards center metrics, form cards left-align labels, table cards use full-bleed rows with internal borders

**Theme code modal**
- Anatomy: Header with title and close, package manager tabs, code block with line numbers, copy button, format selectors
- Surface: Modal background {colors.surface-raised}, backdrop overlay {colors.canvas} at reduced opacity
- Typography: Title {typography.section-display}, tabs {typography.button-primary}, code {typography.code}
- Shape: 0.5rem border-radius on modal, 0.5rem on code block
- Spacing: 1.5rem padding on modal, 1.5rem on code block
- Composition: Tabs left-aligned with active fill, code block full-width with internal scroll, action buttons bottom-right
- Variants: Tab state changes between pnpm, npm, yarn, bun; format selector toggles between Tailwind v4 and oklch

**Primary button**
- Anatomy: Text label with optional icon
- Surface: Background {colors.action}, text {colors.action-inverse}
- Typography: {typography.button-primary}
- Shape: 0.5rem border-radius, or 9999px for pill variant
- Spacing: 0.5rem 1rem padding
- Composition: Centered text, full-width in forms or auto-width in toolbars

**Secondary button**
- Anatomy: Text label with optional icon
- Surface: Background {colors.surface-elevated}, border {colors.border}, text {colors.ink}
- Typography: {typography.button-primary}
- Shape: 0.5rem border-radius
- Spacing: 0.5rem 1rem padding
- Composition: Same as primary but visually recessed

**Top navigation bar**
- Anatomy: Logo left, theme selector, view tabs center, action buttons right
- Surface: Background {colors.surface}, border-bottom {colors.border}
- Typography: Tabs {typography.label}, buttons {typography.button-primary}
- Shape: No border-radius
- Spacing: 1rem horizontal padding, 0.75rem vertical
- Composition: Flex row with space-between, tabs grouped with active state indicated by filled background

## Responsive behavior

The interface adapts from a three-column desktop layout to a stacked mobile view. On narrow viewports, the sidebar collapses to a full-screen overlay or accordion stack, as shown in the mobile view where color categories become vertically scrollable sections. The preview canvas reorders to a single column of full-width cards.

The top bar compresses by hiding text labels in favor of icons, and the view tabs may scroll horizontally or collapse into a dropdown. Action buttons in the header consolidate into a single "more" menu.

Touch targets maintain minimum 44px height for buttons and inputs. The code export modal becomes full-screen on mobile with reduced padding to maximize readable code area.

## Practical implementation guidance

**Preserve**
- The near-black canvas (#0A0A0A) as the foundational atmosphere—this is the tool's signature
- Subtle elevation through background color alone—avoid adding shadows that compete with the flat aesthetic
- Code syntax highlighting with the exact blue-orange-white palette—this carries the brand personality
- The split between tool chrome (dark) and preview content (theme-dependent)—this meta-relationship is core to the experience
- Consistent 0.5rem border-radius across all interactive elements—this small radius feels technical, not friendly

**Avoid**
- Adding gradients or shadows to create depth—the design deliberately uses flat surfaces
- Light mode for the tool chrome—the dark interface is part of the product identity
- Decorative imagery or illustrations—the preview components are the only visual content
- Large border-radius values that would soften the technical character
- Multiple font weights within a single component—keep hierarchy through size and color, not weight variation

**Recommended build order**
1. Establish the dark canvas and surface hierarchy (#0A0A0A through #222222)
2. Implement the sidebar accordion structure with collapsible sections
3. Build the color input row component with swatch, hex field, and copy action
4. Create the preview card container with consistent padding and border
5. Add the top navigation bar with view tabs and action buttons
6. Implement the code export modal with syntax highlighting and package manager tabs
7. Populate preview cards with representative shadcn/ui components (stats, forms, tables, calendars)
8. Add responsive behavior for sidebar collapse and card reflow

**Accessibility**
- Ensure all color inputs have accessible labels beyond the visual hex display
- Provide keyboard navigation for sidebar accordion expansion and collapse
- Maintain 4.5:1 contrast ratios for all text on dark surfaces—the current #EEEEEE on #0A0A0A exceeds this
- Add focus indicators that are visible against dark backgrounds, using the accent blue (#61AFEF)
- Consider reduced-motion preferences for accordion expand/collapse and modal transitions
- Ensure code blocks in the export modal are keyboard-scrollable and screen-reader accessible with proper language declaration

## Scope note

This guide covers the theme editor interface at tweakcn.com/editor/theme, including the color customization sidebar, live preview canvas, and code export modal. Mobile responsive behavior, animation and transition specifications, form validation states, and the user authentication flow are not documented. The previewed component variants (Dashboard, Mail, Pricing, Color Palette) share the same container structure but contain distinct internal layouts not fully detailed here. Measurements are practical adaptation targets based on the extracted interface data.
