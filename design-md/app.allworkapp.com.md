# How app.allworkapp.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.allworkapp.com-design)

Last updated: 2026-08-10

## Captured pages

[![Talent profile detail view with sidebar navigation, gradient avatar, skill tags, and floating action bar with back button and invite action](https://pin.fontofweb.com/4618?format=jpg)](https://design.withfudge.com/share/pin-4618)

[Talent profile detail view with sidebar navigation, gradient avatar, skill tags, and floating action bar with back button and invite action](https://design.withfudge.com/share/pin-4618)

[![Talent search results list with search header, filter controls, stacked profile cards with gradient avatars, skill tags, and highlighted keyword matches](https://pin.fontofweb.com/4617?format=jpg)](https://design.withfudge.com/share/pin-4617)

[Talent search results list with search header, filter controls, stacked profile cards with gradient avatars, skill tags, and highlighted keyword matches](https://design.withfudge.com/share/pin-4617)

## Overview

This design system describes a talent marketplace interface for hiring real humans for real jobs. The visual language prioritizes clarity and approachability through a restrained grayscale palette, generous whitespace, and soft gradient accents that appear primarily in user avatars. The interface follows a classic two-column layout with a persistent left sidebar for primary navigation and a scrollable content area for talent discovery and profile review.

The personality of the system is professional yet friendly—achieved through rounded corners on nearly every interactive element, pill-shaped tags for skills and categories, and colorful gradient avatars that provide the only saturated visual moments in an otherwise muted environment. The hierarchy is flat, with no heavy shadows or dramatic elevation changes; instead, subtle background color shifts and hairline borders define boundaries between regions and components.

## Colors

The color system is intentionally minimal, relying on a grayscale foundation with a single functional accent for search highlighting. Every color serves a specific structural or interactive purpose.

| token | value | use |
|---|---|---|
| canvas | `#E5E7EB` | Main application background and sidebar fill |
| surface | `#F3F4F6` | Card backgrounds, search input fill, elevated panels |
| ink | `#111827` | Primary text, active navigation, usernames, headings |
| muted-ink | `#6B7280` | Secondary text, locations, metadata labels, inactive icons |
| border | `#D1D5DB` | Card outlines, dividers, tag backgrounds, input borders |
| action | `#000000` | Primary buttons, floating action bar |
| action-text | `#FFFFFF` | Text on primary buttons and dark surfaces |
| highlight | `#FEF08A` | Search term highlighting within profile descriptions |

The canvas and surface colors create a subtle two-step elevation system: the canvas serves as the deepest layer, while surface elements float slightly above through their lighter value. The border color functions doubly as both a dividing line and a filled background for inactive tags, keeping the palette tight. The action color is pure black, used exclusively for high-commitment interactions like "Invite to Job," ensuring maximum contrast and visual weight at the bottom of the viewport. The highlight color appears only as a text background for matched search terms, drawing attention without disrupting the grayscale calm.

## Typography

The type system uses a single sans-serif family stack with weight and size variations to establish hierarchy. No custom fonts are specified; the interface relies on system fonts for performance and familiarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| display | system-ui | 1.25rem | 600 | 1.2 | -0.01em | Page titles, usernames, card headers |
| body | system-ui | 1rem | 400 | 1.5 | 0 | Profile bios, descriptions, search results text |
| label | system-ui | 0.875rem | 500 | 1.4 | 0 | Skill tags, button text, metadata labels |
| caption | system-ui | 0.75rem | 400 | 1.4 | 0 | Location subtext, fine print, counts |
| navigation | system-ui | 1rem | 500 | 1.5 | 0 | Sidebar menu items |

The display weight of 600 for usernames creates clear focal points within each profile card without feeling aggressive. Body text at 1rem with 1.5 line height ensures comfortable reading for multi-line bios. The label size at 0.875rem is the workhorse for interactive elements—large enough for legibility in pills and buttons, small enough to feel auxiliary. Caption size is reserved for geographic locations and numeric metadata like "Completed 0" and "Earnings €0." Tracking remains neutral throughout; the slight negative tracking on display text tightens headlines for a more polished appearance.

Verify licensing for these families before production use.

## Layout

The interface employs a fixed sidebar with a scrollable main content area. The sidebar occupies the left portion of the viewport and contains the application brand mark, primary navigation links, and a "More" option for secondary actions. The main content area is centered within the remaining space and constrained to a readable maximum width.

The sidebar navigation stacks vertically with consistent vertical rhythm. Each item pairs a simple line icon with a text label, left-aligned with comfortable padding. The active or hovered state is not visible in the supplied images, but the structure suggests a clean, unadorned default state with potential for subtle background or text color change on interaction.

The main content area adapts its layout based on context. In search results view, it presents a vertical stack of profile cards with uniform spacing between them. In profile detail view, it centers a single profile with expanded information and a persistent floating action bar at the bottom. The search header sits fixed at the top of the content area with a search input, filter toggle, and sort control.

Profile cards in list view follow a consistent internal structure: gradient avatar and identity block at top, skill tag row below, and optional bio excerpt at the bottom. The detail view expands this structure with additional metadata rows and a full bio paragraph. The floating action bar in detail view combines a circular back button with a full-width primary action button, pinned to the bottom edge of the viewport.

## Visual language

The visual character of this interface is defined by restraint and softness. Every corner is rounded—no sharp edges appear on cards, buttons, tags, or inputs. The avatar gradients provide the sole source of color vibrancy, with each user receiving a unique blend of blues, purples, greens, and pinks that creates visual distinction in an otherwise monochrome environment.

The iconography is minimal and functional: a simple house for Home, magnifying glass for Search, speech bubble for Messages, bell for Alerts, plus for Create Post, and hamburger lines for More. These icons share the same stroke weight and geometric simplicity, appearing in muted ink by default.

Shadows are absent from the design vocabulary. Elevation is communicated purely through background color shifts—from canvas to surface—and through the floating action bar which appears to sit on the same plane but gains presence through its dark fill. The overall effect is flat, clean, and modern without feeling sterile.

The gradient avatars deserve special attention as the system's signature element. Each is a circular container with a smooth, multi-stop gradient that typically flows from cyan through blue to purple or from green through teal to blue. These gradients are not user-customizable in the visible interface; they appear algorithmically assigned, giving the platform a cohesive yet personalized feel.

## Components

### Sidebar Navigation

- **Anatomy**: Vertical stack of icon-label pairs with brand header at top
- **Surface**: Transparent, inheriting canvas background
- **Typography**: `{typography.navigation}` in muted ink
- **Spacing**: Items separated by `{spacing.inline}`, icons sized to match text height
- **Composition**: Left-aligned, consistent 1rem padding from edge

### Profile Card

- **Anatomy**: Gradient avatar (left), username and location (right stacked), skill tag row below, optional bio excerpt
- **Surface**: `{colors.surface}` with `{colors.border}` outline or subtle shadow
- **Typography**: Username uses `{typography.display}`, location uses `{typography.caption}` in `{colors.muted-ink}`, bio uses `{typography.body}`
- **Shape**: `{rounded.panel}` corners
- **Spacing**: Internal padding of `{spacing.section}`, card gap of `{spacing.card-gap}`
- **Variants**: List view (compact, stacked vertically) and detail view (expanded, single instance)

### Skill Tag

- **Anatomy**: Text label within a pill container
- **Surface**: `{colors.border}` fill
- **Typography**: `{typography.label}` in `{colors.ink}`
- **Shape**: `{rounded.pill}`—fully rounded capsule
- **Spacing**: Horizontal padding approximately 0.75rem, vertical padding approximately 0.375rem
- **Composition**: Tags flow left-to-right with small gaps, wrapping to multiple lines if needed

### Search Input

- **Anatomy**: Magnifying glass icon, placeholder or entered text, clear button (X)
- **Surface**: `{colors.surface}` fill with `{colors.border}` outline
- **Typography**: `{typography.body}`
- **Shape**: `{rounded.input}` corners
- **Spacing**: Internal padding approximately 0.75rem horizontal, 0.625rem vertical

### Floating Action Bar

- **Anatomy**: Circular back button (left), full-width primary button (right)
- **Surface**: Back button uses `{colors.surface}` with `{colors.border}` outline; primary button uses `{colors.action}`
- **Typography**: Primary button uses `{typography.label}` in `{colors.action-text}`
- **Shape**: Back button is circular (`{rounded.avatar}`); primary button is `{rounded.button}`
- **Spacing**: Fixed to bottom of viewport with comfortable margin, internal gap between buttons
- **Composition**: Back button sized to touch target minimum, primary button fills remaining width

### Gradient Avatar

- **Anatomy**: Circular image container with smooth multi-stop gradient
- **Surface**: Gradient fill (typically cyan-blue-purple or green-teal-blue)
- **Shape**: Perfect circle (`{rounded.avatar}`)
- **Size**: Approximately 3rem in list view, larger in detail view

## Responsive behavior

The sidebar navigation remains fixed at desktop widths, providing constant access to primary functions. On narrower viewports, the sidebar should collapse to a bottom tab bar or hamburger menu to preserve horizontal space for content. The main content area's maximum width prevents line lengths from becoming uncomfortable on large screens; on smaller screens, cards should use full available width with reduced horizontal margins.

The floating action bar in profile detail view should remain fixed to the viewport bottom across all sizes, ensuring the primary "Invite to Job" action is always accessible. The back button may shift to a top-left position on very narrow screens if bottom bar space is constrained.

Search results cards should maintain their internal layout—avatar left, content right—down to small widths, with text wrapping naturally. Skill tags should wrap to multiple lines rather than truncating, preserving full category visibility.

## Practical implementation guidance

### Preserve
- The soft, rounded aesthetic throughout—every interactive element benefits from generous border radius
- The grayscale foundation with gradient avatars as the only color accents
- The clear typographic hierarchy between usernames, locations, and body text
- The floating action bar pattern for primary commitments in detail views
- The pill-shaped tag system for skills and categories

### Avoid
- Adding saturated colors to UI chrome—this would compete with avatar gradients
- Heavy shadows or elevation effects—the flat, clean aesthetic depends on their absence
- Sharp corners on any component—they would break the soft visual language
- Truncating skill tags—wrapping preserves information density without interaction cost
- Multiple button styles—stick to the single black pill for primary actions

### Recommended Build Order
1. Establish the grayscale color tokens and apply to canvas and surface layers
2. Implement the sidebar navigation with system font stack and icon set
3. Build the profile card component with avatar, identity block, and tag row
4. Create the search input and filter header pattern
5. Add the floating action bar with back and primary actions
6. Integrate gradient avatar generation or assignment logic
7. Polish spacing, corner radius, and responsive behavior

### Accessibility
- Ensure the black action buttons on light backgrounds meet WCAG AA contrast minimums (they do at pure black on white)
- Verify that muted ink text on surface backgrounds maintains at least 4.5:1 contrast ratio
- Provide visible focus indicators for keyboard navigation, as the flat design lacks default browser outlines
- Consider adding aria-labels to icon-only buttons like the back arrow and clear search
- Ensure the floating action bar does not obscure essential content on zoom or small viewports

## Scope note

This guide covers the talent search and profile detail surfaces visible in the supplied images. Navigation, messaging, alerts, job creation, and payment flows are not represented. Motion, hover states, loading indicators, and error handling are not documented. Measurements are practical adaptation targets based on visual analysis of the interface at standard resolution.
