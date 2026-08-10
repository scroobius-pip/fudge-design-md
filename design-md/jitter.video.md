# How jitter.video is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jitter.video-design)

Last updated: 2026-08-10

## Captured pages

[![Delete workspace confirmation dialog with pink danger button on light gray background](https://pin.fontofweb.com/4646?format=jpg)](https://design.withfudge.com/share/pin-4646)

[Delete workspace confirmation dialog with pink danger button on light gray background](https://design.withfudge.com/share/pin-4646)

[![Settings page with Enterprise plan card, segmented control, and sidebar navigation](https://pin.fontofweb.com/4645?format=jpg)](https://design.withfudge.com/share/pin-4645)

[Settings page with Enterprise plan card, segmented control, and sidebar navigation](https://design.withfudge.com/share/pin-4645)

[![Enterprise pricing card with feature checklist and Contact us action button](https://pin.fontofweb.com/4644?format=jpg)](https://design.withfudge.com/share/pin-4644)

[Enterprise pricing card with feature checklist and Contact us action button](https://design.withfudge.com/share/pin-4644)

[![Team pricing card showing $35 monthly rate with Most popular badge and upgrade flow](https://pin.fontofweb.com/4643?format=jpg)](https://design.withfudge.com/share/pin-4643)

[Team pricing card showing $35 monthly rate with Most popular badge and upgrade flow](https://design.withfudge.com/share/pin-4643)

## Overview

Jitter's design system presents a clean, professional SaaS interface built for motion design creators. The visual language balances creative energy with operational clarity: light gray canvases provide a neutral stage for content, while high-contrast dark typography ensures readability across dense settings pages and marketing surfaces. The system employs two distinct typefaces—Twk Lausanne for bold display moments and Inter for functional body text—creating clear hierarchy without visual noise. Color is used sparingly and purposefully: black anchors primary actions, soft blues and purples mark status and plan tiers, and a vivid pink signals destructive operations. Rounded corners appear consistently on cards, buttons, and controls, softening the technical density of workspace management tools. The overall impression is of a capable, trustworthy creative platform that stays out of the user's way while providing clear paths to upgrade, configure, and collaborate.

## Colors

The palette is intentionally restrained, relying on a near-white canvas with dark ink for maximum legibility. Color enters the system through functional accents: plan badges, checkmarks, and action states.

| token | value | use |
|---|---|---|
| canvas | #F3F4F6 | Page background across settings, pricing, and workspace views |
| surface | #FFFFFF | Card backgrounds, elevated panels, active control states |
| ink | #111111 | Primary headings, body text, and iconography |
| muted-ink | #6B7280 | Secondary descriptions, helper text, disabled tab labels |
| action | #000000 | Primary buttons, active navigation, key interactive elements |
| danger | #EF4444 | Destructive action text and icons |
| danger-surface | #FCE7E9 | Background fill for danger buttons and warning containers |
| accent-blue | #93C5FD | Enterprise plan badges, informational highlights |
| accent-purple | #A78BFA | Team plan badges, "Most popular" indicators, feature checkmarks |
| success | #3B82F6 | Checkmark icons in feature lists |

The light mode dominates all visible surfaces. Dark text on light gray creates the primary reading experience. Accent colors are deployed at small scale—badges, icons, and button fills—never as large background fields. The danger color pairing (pink text on pink surface) appears only for irreversible actions like workspace deletion, creating an unmistakable visual warning without harsh red aggression.

## Typography

Two families serve distinct roles: Twk Lausanne handles display and brand moments with tight tracking and bold weights, while Inter manages all functional, readable text at smaller sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Twk Lausanne-700 | 4rem | 700 | 1 | -0.03em | Marketing page headlines |
| section-display | Twk Lausanne-700 | 2.5rem | 700 | 1.1 | -0.02em | Settings page titles like "Settings" |
| card-title | Twk Lausanne-700 | 2rem | 700 | 1.2 | -0.02em | Pricing plan names like "Custom", "Team" |
| body | Inter | 1rem | 400 | 1.5 | 0 | Paragraph descriptions, feature lists |
| body-medium | Inter | 1rem | 500 | 1.5 | 0 | Button labels, emphasized body text |
| label | Inter | 0.875rem | 500 | 1.4 | 0 | Navigation items, tab labels, form labels |
| caption | Inter | 0.75rem | 400 | 1.4 | 0 | Helper text, metadata, pricing sublines |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Sidebar menu items |

The design uses four supplied Twk Lausanne family labels: Twk Lausanne-600, Twk Lausanne-700, and Twk Lausanne-800. The display tokens above use Twk Lausanne-700. Twk Lausanne-600 and Twk Lausanne-800 are available for lighter or heavier display treatments when needed. Inter appears in Regular, Medium, Semibold, and Bold weights, designed by Rasmus Andersson. Twk Lausanne was designed by Nizar Kazan and distributed by Typeweltkern. Verify licensing for these families before production use.

## Layout

The workspace settings and pricing pages follow a two-column layout with a fixed left sidebar and a scrolling right content area. The sidebar occupies approximately 20% of the viewport width, containing workspace identity, navigation grouping, and action shortcuts. The main content area centers its content with generous horizontal padding, typically 4rem to 6rem from the viewport edges.

Content within the main area stacks vertically with clear section breaks. Page titles sit at the top in large display type, followed by grouped content cards. The pricing presentation uses a split composition: a prominent plan card on the left with detailed configuration and action on the right. This asymmetric layout draws attention to the value proposition while keeping controls accessible.

Cards use substantial internal padding of 2rem, creating breathing room around dense feature lists and pricing information. The card corner radius of 1.5rem is larger than button radii, establishing a clear containment hierarchy. Shadows are minimal or absent; depth is communicated through background color contrast alone.

## Visual language

The interface communicates through restraint and precision. Rounded geometry appears everywhere—cards, buttons, badges, and segmented controls—creating a friendly, approachable tone that offsets the technical complexity of motion design software. The pill shape is a recurring motif: plan toggles, action buttons, and status badges all share this fully rounded form.

Iconography is simple and functional, appearing at small scale beside navigation labels and feature checkmarks. Checkmarks use a bright blue or purple stroke against the white card background, providing immediate visual confirmation without additional text decoration.

The "Most popular" badge introduces a small sparkle icon paired with purple text, adding personality to the otherwise utilitarian pricing interface. This is one of the few decorative elements in the system, reserved for highlighting preferred user paths.

Empty states and destructive actions receive special visual treatment: the delete workspace dialog strips away all surrounding chrome to focus attention on the irreversible action, using the danger color pairing to create emotional weight.

## Components

### Pricing card

- **Anatomy**: Rounded container with plan badge, price display, description, feature checklist, and optional metadata
- **Surface**: White background (`{colors.surface}`) on gray canvas
- **Typography**: Plan name uses `{typography.card-title}`; price uses `{typography.section-display}` with caption-sized unit text; features use `{typography.body}`
- **Shape**: 1.5rem border radius, 2rem internal padding
- **Spacing**: 1.5rem between major sections (badge to title, title to description, description to features)
- **Composition**: Left-aligned content with checkmark icons preceding each feature
- **Variants**: Enterprise shows "Contact us" action; Team shows price with billing toggle; badges vary by plan tier (blue for Enterprise, purple for Team)

### Segmented control

- **Anatomy**: Pill-shaped container with two or three options, one active
- **Surface**: Gray track (`#E5E7EB`) with white active segment
- **Typography**: `{typography.label}` in muted ink for inactive, ink for active
- **Shape**: Full pill radius (`9999px`), generous horizontal padding
- **Spacing**: Tight internal spacing between segments, visual separation through background contrast only
- **Composition**: Centered or left-aligned within configuration panels
- **States**: Active segment elevates with white background; inactive segments recede

### Primary button

- **Anatomy**: Full-pill button with centered label
- **Surface**: Black background (`{colors.action}`), white text
- **Typography**: `{typography.body-medium}`
- **Shape**: `9999px` border radius, substantial vertical padding (approximately 1rem)
- **Spacing**: Full-width within configuration panels, or auto-width with horizontal padding
- **Composition**: Centered text, often paired with helper caption below
- **Variants**: "Contact us", "Upgrade to Team"—label changes by context

### Danger button

- **Anatomy**: Full-pill button with centered destructive label
- **Surface**: Light pink background (`{colors.danger-surface}`), vivid pink text (`{colors.danger}`)
- **Typography**: `{typography.body-medium}`
- **Shape**: `9999px` border radius
- **Spacing**: Appears isolated from other controls, often in dedicated dialog
- **Composition**: Centered within warning context, surrounded by explanatory text

### Sidebar navigation

- **Anatomy**: Vertical stack of grouped links with icons and labels
- **Surface**: Transparent, sitting directly on canvas
- **Typography**: `{typography.navigation}` in ink, with muted ink for inactive items
- **Shape**: No visible container; items sit flush left
- **Spacing**: 1rem vertical spacing between items, grouped under section headers with additional top margin
- **Composition**: Icon (16–20px) left of label, with active state indicated by text weight or color shift

### Feature checklist item

- **Anatomy**: Horizontal row with checkmark icon and text label
- **Surface**: Transparent within card
- **Typography**: `{typography.body}`
- **Shape**: No bounding shape; icon uses simple stroke checkmark
- **Spacing**: 0.75rem vertical spacing between items, 0.75rem between icon and text
- **Composition**: Left-aligned, icon vertically centered with first line of text

## Responsive behavior

The two-column sidebar layout likely collapses to a single column on narrower viewports, with the sidebar converting to a collapsible drawer or top navigation bar. The pricing card and configuration panel should stack vertically, with the card occupying full width above the controls.

Typography scales down proportionally: the 4rem hero display should reduce to 2.5rem or 2rem on mobile to prevent overflow. Card internal padding can reduce from 2rem to 1.5rem to preserve content density.

The segmented control remains functional at narrow widths, though option labels may truncate or stack if space is severely constrained. Pill buttons should maintain touch-friendly minimum heights of 44px.

## Practical implementation guidance

### Preserve
- The strict separation of Twk Lausanne for display and Inter for body text; this dual-family system is central to Jitter's personality
- Full-pill buttons for all primary actions; the 9999px radius is a signature element
- Light gray canvas with white cards; avoid introducing additional background colors
- Restrained accent usage; let the black/white/gray foundation carry the interface

### Avoid
- Adding shadows to cards; the system relies on flat color contrast for depth
- Using danger colors for anything except destructive, irreversible actions
- Introducing additional accent colors beyond the established blue and purple
- Setting body text lighter than 1rem; the interface depends on crisp readability at small sizes

### Recommended build order
1. Establish the type scale with both families loaded and weights verified
2. Implement the canvas/surface color foundation with proper contrast ratios
3. Build the pill button component as the primary action pattern
4. Create the pricing card with badge, title, and checklist variants
5. Add the segmented control for plan toggling
6. Compose the sidebar navigation with icon + label pattern
7. Integrate the danger button state for destructive flows

### Accessibility
- Ensure all text meets WCAG AA contrast against its background; the black-on-white and white-on-black pairings easily satisfy this
- Add visible focus indicators to pill buttons and segmented controls; the rounded shapes may need offset ring styles
- Provide aria-labels for icon-only navigation items in the sidebar
- Do not rely solely on color for plan differentiation; badge text should be readable even if color perception varies

## Scope note

This guide covers the workspace settings, pricing, and onboarding surfaces visible in the supplied images. The motion design editor canvas, animation timeline, and export workflows are not represented. Measurements are practical adaptation targets derived from the visible interface. Mobile breakpoints, dark mode, loading states, and micro-interactions are not documented. Verify licensing for Inter, Twk Lausanne-600, Twk Lausanne-700, and Twk Lausanne-800 before production use.
