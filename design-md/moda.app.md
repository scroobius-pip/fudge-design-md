# How moda.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/moda.app-design)

Last updated: 2026-08-10

## Captured pages

[![Version History modal overlay with search, filter tabs, and version list with current-state green badge on white panel with right-side preview pane.](https://pin.fontofweb.com/8322?format=jpg)](https://design.withfudge.com/share/pin-8322)

[Version History modal overlay with search, filter tabs, and version list with current-state green badge on white panel with right-side preview pane.](https://design.withfudge.com/share/pin-8322)

[![SaaS analytics dashboard canvas with sidebar navigation, four metric cards, line chart, recent signups table, and right-side AI chat panel with gradient accent button.](https://pin.fontofweb.com/8321?format=jpg)](https://design.withfudge.com/share/pin-8321)

[SaaS analytics dashboard canvas with sidebar navigation, four metric cards, line chart, recent signups table, and right-side AI chat panel with gradient accent button.](https://design.withfudge.com/share/pin-8321)

[![Workspace General settings page with left sidebar navigation, invite credits banner with cyan gradient, and member management card.](https://pin.fontofweb.com/8320?format=jpg)](https://design.withfudge.com/share/pin-8320)

[Workspace General settings page with left sidebar navigation, invite credits banner with cyan gradient, and member management card.](https://design.withfudge.com/share/pin-8320)

[![Custom Fonts settings page with dashed upload dropzone, empty state illustration, and sidebar navigation with selected state.](https://pin.fontofweb.com/8319?format=jpg)](https://design.withfudge.com/share/pin-8319)

[Custom Fonts settings page with dashed upload dropzone, empty state illustration, and sidebar navigation with selected state.](https://design.withfudge.com/share/pin-8319)

## Overview

Moda presents a polished SaaS interface for AI-powered design and presentation creation. The visual system balances professional utility with creative energy through a restrained neutral foundation punctuated by vibrant gradient accents. The interface organizes complex functionality—canvas editing, analytics dashboards, workspace management, and AI collaboration—into a coherent hierarchy using spatial rhythm, typographic contrast, and subtle surface differentiation. A distinctive dual-typeface approach pairs an expressive display face for headlines and brand moments with a highly legible sans-serif for all functional text, creating clear information hierarchy without visual noise. The design emphasizes white space, rounded corners, and soft shadows to reduce cognitive load while maintaining a sense of modern craft.

## Colors

The color system operates on a principle of near-monochrome neutrality with strategic chromatic accents. The foundation is built from warm-tinted grays that avoid the clinical coldness of pure neutrals, while gradient accents provide energy and brand recognition.

| token | value | use |
|---|---|---|
| ink | #171717 | Primary text, headings, active UI elements |
| muted-ink | #555555 | Secondary text, placeholders, disabled states |
| canvas | #FAF9F7 | Application background, page canvas |
| surface | #FFFFFF | Cards, modals, popovers, elevated surfaces |
| surface-elevated | #F6F5F5 | Sidebar, secondary panels, subtle differentiation |
| border | #E5E1E5 | Card borders, dividers, structural lines |
| border-subtle | #D4D0D3 | Dashed upload zones, inactive borders |
| accent-gradient-start | #FB45E4 | Gradient accent: pink/magenta origin |
| accent-gradient-mid | #FF111A | Gradient accent: red center |
| accent-gradient-end | #5A0175 | Gradient accent: deep purple terminus |
| accent-cyan | #00DEBD | Success states, promotional banners, positive indicators |
| accent-cyan-light | #66F2F2 | Gradient backgrounds, subtle cyan tints |
| success | #00DEBD | Success states, promotional banners, positive indicators |
| action-primary-bg | #000000 | Primary button background, high-emphasis actions |
| action-primary-text | #FFFFFF | Text on primary buttons, dark backgrounds |
| action-secondary-bg | #FFFFFF | Secondary button background |
| action-secondary-border | #D4D0D3 | Secondary button border |
| action-secondary-text | #171717 | Secondary button text |

The interface employs a light-mode-only palette with no dark mode visible in the supplied materials. Gradient accents appear primarily on call-to-action buttons and promotional elements, creating focal points against the neutral ground. The cyan accent functions as a secondary brand color for success states and incentive messaging, distinct from the pink-red-purple gradient used for primary actions. Photographic and illustration content on the marketing pages introduces additional color through image palettes, but these remain separate from the functional UI color system.

## Typography

Moda employs two primary typeface families: Season Mix for display and headline use, and Season Sans for all body text, labels, and interface elements. A monospace face, Geist Mono, appears for numerical data display. The system also includes Dm Sans and System-Uimonospace in the available font sources. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Season Mix | 3.3125rem | 400 | 1.5 | -0.025em | Marketing headlines, hero sections |
| section-display | Season Mix | 2rem | 400 | 1.5 | -0.02em | Section headings, feature titles |
| body | Season Sans | 1rem | 400 | 1.5 | normal | Primary body text, descriptions |
| body-medium | Season Sans | 1rem | 500 | 1.3 | 0.02em | Emphasized body, card titles |
| body-small | Season Sans | 0.875rem | 400 | 1.429 | normal | Secondary text, metadata |
| label | Season Sans | 0.75rem | 600 | 1.333 | 0.05em | Uppercase labels, section headers |
| navigation | Season Sans | 1rem | 400 | 1.5 | normal | Sidebar items, menu links |
| code | Geist Mono | 2.25rem | 500 | 1 | normal | Numerical displays, statistics |

Season Mix, designed by Martin Vácha and distributed by Displaay Type Foundry, provides the system's distinctive character through its slightly irregular, humanist letterforms. It appears at large sizes with negative letter-spacing for impactful headlines. Season Sans, from the same designer and foundry, offers a cleaner, more regular structure optimized for extended reading at smaller sizes. The weight range spans Regular (400) through Bold (700), with Medium (500) and Semibold (600) serving as the primary emphasis weights. Line heights remain generous for body text to support readability in dense interfaces, while display settings tighten leading for visual punch. Dm Sans appears in the font sources for potential use in numerical displays, while System-Uimonospace serves as a fallback monospace option.

## Layout

The interface follows a consistent application-shell pattern with three primary layout regions: a collapsible left sidebar for navigation, a central content area for canvas or dashboard views, and optional right-side panels for AI chat, properties, or preview. The sidebar maintains a fixed width of 16rem with internal padding of 1rem, creating a stable navigational anchor. Content areas use fluid widths with maximum constraints, centered within the viewport.

Spacing follows a base-2 system with 0.125rem (2px) as the fundamental unit. Key layout values include: 0.5rem for tight internal padding, 1rem for standard component padding, 1.5rem for card interiors, 2rem for section separations, and 3.75rem for major section breaks. The dashboard canvas employs a 64px left margin offset for content alignment, with 32px vertical spacing between major content blocks.

Grid structures within content areas use implicit grids for metric cards—typically four columns on desktop with responsive fallback to two columns. Tables occupy full width with consistent cell padding of 12px vertical and 16px horizontal. Modal dialogs appear centered with a maximum width constraint, using a two-pane layout for complex interactions like version history with a scrollable list on the left and preview on the right.

Border radii progress from 0.5rem for inputs and small elements, through 0.75rem for panels and buttons, to 1rem for cards and larger surfaces. Full pill shapes use 9999px for buttons and tags. The modal system employs a subtle backdrop blur over a 40% black overlay, with the modal panel receiving a soft shadow stack for elevation.

## Visual language

The visual character of Moda combines the precision expected of professional design tools with warmth that invites creative exploration. Surfaces are predominantly flat with subtle elevation achieved through shadow rather than borders. Cards float on the canvas background with 1px borders in warm gray, creating definition without heaviness.

Gradient accents serve as the primary brand expression, appearing on buttons, promotional banners, and highlighted UI elements. The signature gradient flows from magenta (#FB45E4) through red (#FF111A) to deep purple (#5A0175), typically at a 61-degree angle. A secondary cyan gradient supports promotional messaging, transitioning from pale blue through aqua to bright cyan.

Iconography appears as simple line icons with 1.5px stroke weight, paired with text labels in navigation. Empty states use centered illustrations with muted tones and clear instructional text. The overall density is moderate—information-rich but not crowded—with generous breathing room around interactive elements.

Shadows are layered and complex, using multiple stops to create natural depth. The primary elevation shadow combines: 0px -1px 28px, 0px 69px 28px, 0px 39px 23px, 0px 17px 17px, and 0px 4px 9px with decreasing opacity, producing a soft lift effect. Smaller shadows for cards and buttons use simpler two-stop configurations.

## Components

### Modal Dialog

Modals appear as centered panels over a blurred backdrop. The standard modal has a header with title and close button, separated by a 1px bottom border from the content area. The version history variant uses a split layout: a searchable, filterable list occupies the left two-thirds, with a preview pane on the right. List items show user attribution, timestamp, and action buttons, with the current version marked by a green success badge. Padding is 1.5rem for the header, 1rem for list items with 0.75rem vertical compactness.

### Sidebar Navigation

The sidebar serves as persistent application navigation with grouped sections. Each group has a 0.75rem uppercase label with 0.05em letter-spacing and 600 weight. Navigation items use 1rem body text with 0.75rem vertical padding and 0.5rem horizontal padding, with a 0.5rem border-radius for hover states. The active state receives a light background tint and left-edge accent. Icons precede labels with 0.75rem spacing. Section dividers use 1px borders with 1rem vertical margins.

### Metric Cards

Dashboard metric cards present key statistics in a 1rem bordered container with 1.5rem padding. Each card contains a label in muted-ink at 0.875rem, a large numerical value in ink at 1.5rem with 600 weight, and a change indicator in success green or muted gray. Cards arrange in responsive grids with 1rem gaps. The selected or highlighted card receives a subtle border color shift to the accent gradient.

### Data Table

Tables display tabular data with header rows in 0.75rem uppercase labels. Rows have 1px bottom borders in border-subtle, with 0.75rem vertical and 1rem horizontal cell padding. Avatar images appear as 2rem circles with 0.75rem right margin. Status text uses muted-ink, while primary identifiers use ink. The "View all" action appears as a text button in the header right.

### Gradient Button

The primary call-to-action button uses the signature gradient background with white text at 600 weight. Padding is 0.75rem 1.25rem with full pill rounding. A variant appears with the gradient as a 1.5px border with transparent fill for secondary emphasis. Hover states should lighten the gradient slightly; exact values are not visible in still images.

### Empty State

Empty states center content vertically and horizontally within their container. A large icon or illustration in muted-ink occupies the top, followed by a title in 1rem medium weight and description in 0.875rem muted-ink. The upload variant uses a dashed border container with 2rem padding, an upload icon, and instructional text. The border uses border-subtle at 1px with a dashed style.

### AI Chat Panel

The right-side chat interface shows message history in a scrollable area with user and assistant messages differentiated by background. User messages appear on a light surface; assistant messages on canvas. Input area sits fixed at bottom with an attach button, text input, and send action. Message bubbles have 1rem padding with 0.75rem border-radius. The assistant avatar uses the gradient accent as background.

### Settings Form

Settings pages organize content in labeled sections with 1.5rem vertical spacing. Section headers use 1.125rem medium weight. Form fields stack vertically with 1rem spacing, using 0.5rem border-radius inputs with 1px border-subtle borders. Promotional banners insert between sections with gradient backgrounds and 0.75rem padding. Member lists show avatar, name, email, and role badge in a row with 1px bottom border.

## Responsive behavior

The interface appears optimized for desktop use with the full three-panel layout. At narrower viewports, the right-side AI panel should collapse to a toggleable overlay or bottom sheet. The sidebar should collapse to an icon-only rail at medium breakpoints, hiding labels and section headers. Metric cards should reflow from four columns to two, then stack vertically on mobile. Modal dialogs should become full-screen sheets on small viewports, with the split layout converting to a stacked list-detail pattern. Font sizes should maintain their rem values, with hero display potentially scaling down to section-display size on mobile to prevent overflow.

## Practical implementation guidance

### Preserve
- The warm-tinted neutral palette; avoid pure grays that would feel clinical
- The generous 1.5 line height for body text and spacious card padding
- The dual-typeface hierarchy with Season Mix reserved for display sizes only
- The complex multi-stop shadows that create natural elevation
- The 61-degree angle on gradient accents as a brand signature
- The consistent 0.75rem border-radius on panels and 1rem on cards

### Avoid
- Using the gradient accent for large background areas; reserve for buttons and small highlights
- Pure black (#000000) for text; the ink value (#171717) provides warmth
- Tightening line height below 1.3 for any text size
- Adding borders to elements that already have shadow elevation
- Using Season Mix at body text sizes where legibility suffers

### Recommended Build Order
1. Establish the color tokens and apply to base HTML elements
2. Implement the type scale with Season Sans for all body text
3. Build the sidebar navigation component with active states
4. Create the card component with border and shadow variants
5. Implement the modal system with backdrop and panel
6. Add gradient button with hover state approximation
7. Build dashboard-specific components: metric cards, tables, charts
8. Implement the AI chat panel layout and message bubbles

### Accessibility
- Ensure gradient buttons maintain 4.5:1 contrast ratio; the white text on dark gradient endpoints meets this, but verify mid-gradient states
- Provide focus indicators with 2px outline offset from interactive elements
- Use aria-label on icon-only buttons in the toolbar
- Ensure the sidebar navigation is keyboard accessible with visible focus states
- Consider reduced-motion preferences for any gradient animations
- Test color-independent identification for status indicators that use color alone

## Scope note

This guide covers the Moda application interface including dashboard canvas, workspace settings, version history, and AI chat panels as visible in the supplied materials. Marketing pages, mobile layouts, animation specifications, and dark mode implementations are not included. The design system assumes a desktop-first context with responsive adaptations recommended rather than specified. Measurements derive from the documented pixel values converted to the base-2 relative unit system.

Verify licensing for Season Mix, Season Sans, Geist Mono, Dm Sans, and System-Uimonospace before production use.
