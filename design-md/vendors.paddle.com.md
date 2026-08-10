# How vendors.paddle.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/vendors.paddle.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ section with dark testimonial block featuring radial gradient background and quote typography](https://pin.fontofweb.com/7187?format=jpg)](https://design.withfudge.com/share/pin-7187)

[FAQ section with dark testimonial block featuring radial gradient background and quote typography](https://design.withfudge.com/share/pin-7187)

[![ProfitWell integration modal overlay with dark hero gradient and step indicator UI](https://pin.fontofweb.com/7186?format=jpg)](https://design.withfudge.com/share/pin-7186)

[ProfitWell integration modal overlay with dark hero gradient and step indicator UI](https://design.withfudge.com/share/pin-7186)

[![Invoices list page with empty state, search field, and dark sidebar navigation](https://pin.fontofweb.com/6757?format=jpg)](https://design.withfudge.com/share/pin-6757)

[Invoices list page with empty state, search field, and dark sidebar navigation](https://design.withfudge.com/share/pin-6757)

[![Sandbox experimentation section with code snippet preview and three-column guide cards](https://pin.fontofweb.com/6756?format=jpg)](https://design.withfudge.com/share/pin-6756)

[Sandbox experimentation section with code snippet preview and three-column guide cards](https://design.withfudge.com/share/pin-6756)

## Overview

The Paddle vendor dashboard presents a sophisticated dual-mode interface that separates navigation from content through extreme contrast. A permanent dark sidebar anchors the left edge in pure black, while the main workspace operates on light, airy surfaces. This creates immediate visual hierarchy: the sidebar recedes into the background frame, allowing analytical content and marketing surfaces to command attention.

The system serves two distinct contexts within the same product shell. Dense operational interfaces—invoice lists, subscription metrics, customer data—use Inter for maximum readability at small sizes and tight line heights. Marketing and onboarding surfaces switch to Graphik, bringing a more editorial, approachable voice to feature announcements and educational content. A consistent accent blue threads through both modes, appearing as the primary action color against light surfaces and as subtle gradient accents in dark hero sections.

Visual depth is achieved through careful restraint. Shadows are minimal; instead, the system relies on border-subtle dividers, background color shifts between canvas and surface, and occasional radial gradients for dramatic dark sections. Rounded corners are disciplined: 4px for buttons, 8px for cards and panels, 12px for larger containers, with full pills reserved for tags and status indicators.

## Colors

The color system is built around a stark light-dark dichotomy with a unified accent family.

| token | value | use |
|---|---|---|
| action | #0096FF | Primary buttons, links, active states, focus rings |
| ink | #0E1414 | Primary text on light surfaces, dark button backgrounds |
| ink-secondary | #36476C | Secondary headings, card titles, emphasized labels |
| muted-ink | #696D6D | Placeholder text, empty states, disabled hints |
| canvas | #F7F8F9 | Page backgrounds, table header rows, inactive zones |
| surface | #FFFFFF | Cards, modals, dropdowns, primary content areas |
| surface-elevated | #FCFCFC | Slightly lifted cards, metric tiles |
| border | #D2D4DE | Input borders, table dividers, structural separators |
| border-subtle | #E2E5E7 | Card borders, section dividers, hairline rules |
| sidebar-bg | #000000 | Permanent navigation sidebar background |
| sidebar-text | #F5F5F8 | Primary navigation labels, section headers |
| sidebar-muted | #A5A7A9 | Inactive icons, collapsed section hints |
| dark-hero-start | #2B3242 | Radial gradient origin for dark marketing sections |
| dark-hero-end | #0E1414 | Radial gradient terminus, deep shadow tone |
| accent-purple | #3838CA | Secondary action links, code syntax highlights |
| accent-blue-light | #C5ECFE | Gradient accent, decorative bars, hover tints |
| accent-pink | #E5D6E3 | Gradient partner, soft decorative warmth |

The dark sidebar operates as a fixed chromatic anchor. Its pure black background makes the light workspace feel expansive and clean by contrast. Dark marketing sections—testimonials, integration modals, feature heroes—use a radial gradient that shifts from slate-blue (#2B3242) to near-black (#0E1414), creating atmospheric depth without departing from the core palette. Light surfaces maintain neutrality: warm grays for borders, cool whites for elevation, with the action blue providing the only saturated color in operational contexts.

## Typography

Three type families appear in the system. Graphik, designed by Christian Schwartz and available from Commercial Type, handles marketing headlines, navigation, and button labels. Inter, an open-source family, manages data-dense interfaces where legibility at small sizes matters. System-Sansserif appears as a fallback in limited contexts such as SVG text elements and system-rendered components. Verify licensing for Graphik before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Graphik | 2.5rem | 400 | 1.5 | normal | Dark section headlines, integration modals |
| section-display | Graphik | 1.875rem | 400 | 1.5 | normal | FAQ headers, feature section titles |
| body | Inter | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, form labels |
| body-small | Inter | 0.875rem | 400 | 1.714 | normal | Table cells, metadata, secondary descriptions |
| label | Inter | 0.75rem | 500 | 1.667 | normal | Badges, timestamps, table headers |
| navigation | Graphik | 0.875rem | 400 | 1.714 | normal | Sidebar items, top-level menu labels |
| page-title | Inter | 1.438rem | 600 | 1.391 | -0.02em | Page headers, invoice titles, dashboard headings |
| section-title | Inter | 1.125rem | 600 | 1.556 | -0.02em | Card headers, metric group labels |
| card-title | Inter | 1rem | 500 | 1.75 | normal | Individual card headings, list item titles |
| metric-large | Inter | 1.25rem | 600 | 1.4 | -0.02em | Revenue figures, key performance numbers |
| button-primary | Graphik | 0.875rem | 500 | 1.571 | normal | All button labels, CTA text |
| legal-copy | Inter | 0.75rem | 400 | 1.667 | normal | Terms links, disclaimers, fine print |

Graphik appears at 14px and 30px for marketing content, with a 40px display size reserved for major hero moments. Inter scales from 12px labels through 16px body to 23px page titles, with negative letter spacing (-0.02em) applied at 20px and above to tighten word spacing for headlines. Line heights stay generous for body text (1.5) and compact for labels (1.667) to maintain density without crowding.

## Layout

The dashboard uses a fixed sidebar with fluid main content. The sidebar occupies 16rem of horizontal space, pinned to the viewport left edge, with vertical padding of 2.5rem top and 1.5rem sides. Navigation items stack with 0.5rem vertical padding and 0.75rem horizontal padding, creating a comfortable touch target while maintaining density.

Main content areas receive 3.5rem to 5rem of vertical section spacing, with horizontal margins that adapt to content width. Operational pages like Invoices use narrower gutters (56px side padding), while marketing and onboarding pages expand to 120px or more for breathing room. Cards and panels sit on the canvas background with 1.5rem internal padding.

The grid for guide cards and feature blocks uses three equal columns with 1.5rem gaps. Metric cards and data tables span the full available width, using internal borders rather than grid gaps to separate items. Empty states center vertically and horizontally within their container, with 5rem vertical padding to signal intentional whitespace.

Modal overlays cover the full viewport with a semi-transparent black scrim (rgba(0,0,0,0.5)) and optional backdrop blur. Modal content centers horizontally, with 2.5rem internal padding and a 10px border radius. Large marketing modals extend to 80% viewport width, while confirmation dialogs remain narrow and focused.

## Visual language

The visual character balances clinical precision with approachable warmth. The dark sidebar's icon-only collapsed state and text-expanded state create a recognizable silhouette: a vertical rhythm of simple line icons in muted gray, punctuated by the occasional active item in white. This pattern repeats across all functional pages, providing wayfinding consistency.

Marketing surfaces introduce the system's more expressive side. Radial gradients on dark backgrounds create a sense of infinite depth, as if the content floats in a controlled void. A horizontal gradient bar—shifting from ice blue to soft pink—appears as a decorative accent, often beneath headlines or as a progress indicator. These gradients never overlap with operational data; they remain in promotional and educational contexts.

Photography and avatars appear as perfect circles against dark backgrounds, creating a coin-like presence that humanizes the interface without disrupting its geometry. Code snippets and integration previews use dark surfaces with syntax highlighting in the accent purple, establishing a developer-friendly tone.

The overall density is medium-high. Operational pages prioritize information access with tight spacing and visible grid lines. Marketing pages open up with larger type, more whitespace, and centered compositions. The transition between these modes is handled by the persistent sidebar, which never changes, grounding the user regardless of context.

## Components

### Sidebar Navigation

- **Anatomy**: Vertical stack of icon-text pairs, with section headers in muted text and expandable submenus indicated by chevrons.
- **Surface**: Pure black background (#000000) with no border.
- **Typography**: Graphik Regular, 14px, 1.714 line height, white text for active items, muted gray for inactive.
- **Shape**: No border radius on the container; individual items use 4px radius on hover and active states.
- **Spacing**: 2.5rem top padding, 1.5rem horizontal padding, 0.5rem vertical item padding.
- **Composition**: Fixed 16rem width, full viewport height, scrollable independently.
- **States**: Hover shows 8% white background; active shows 12% white background with Semibold weight.

### Primary Button

- **Anatomy**: Text label with optional icon, no visible border.
- **Surface**: Solid action blue (#0096FF) background, white text.
- **Typography**: Graphik Medium, 14px, 1.571 line height.
- **Shape**: 4px border radius, 4px vertical padding, 15px horizontal padding.
- **Spacing**: 12px right margin when adjacent to secondary buttons.
- **States**: No visible shadow on any state.

### Secondary Button

- **Anatomy**: Text label with 1px border.
- **Surface**: Transparent background, ink-secondary text (#36476C), border-subtle border (#E2E5E7).
- **Typography**: Graphik Medium, 14px.
- **Shape**: 4px border radius, matching padding to primary.
- **States**: Hover darkens border to border color (#D2D4DE).

### Card

- **Anatomy**: Container with optional header, body, and footer regions.
- **Surface**: White background, 1px border-subtle border.
- **Shape**: 12px border radius.
- **Spacing**: 1.5rem internal padding.
- **Variants**: Elevated variant uses surface-elevated background without border; metric variant uses tighter 1rem padding.

### Table

- **Anatomy**: Header row with column labels, sortable indicators, and data rows.
- **Surface**: Canvas background for header (#F7F8F9), white for rows, border-bottom dividers.
- **Typography**: Label style for headers (Inter 12px Medium), body-small for cells (Inter 14px Regular).
- **Shape**: No outer border radius; internal cell padding 1rem vertical, 1.5rem horizontal.
- **States**: Hover rows show canvas background tint.

### Search Input

- **Anatomy**: Text field with magnifying glass icon prefix and optional clear button.
- **Surface**: White background, border-subtle border.
- **Typography**: Inter Regular, 14px, muted-ink placeholder text.
- **Shape**: 8px border radius, 0.5rem vertical padding, 1rem horizontal padding with 2.5rem left padding for icon.
- **States**: Focus ring in action blue, 2px offset.

### Step Indicator

- **Anatomy**: Numbered circles connected by horizontal lines.
- **Surface**: White or transparent circles with border for inactive, ink-filled for active.
- **Typography**: Inter Regular for numbers, body-small for labels below.
- **Shape**: 2.5rem diameter circles, 1px border, 3rem connector lines.
- **States**: Active step fills with ink background and white text; completed steps may show checkmark.

### Dark Hero Section

- **Anatomy**: Centered headline, optional subhead, and call-to-action cluster.
- **Surface**: Radial gradient from #2B3242 to #0E1414.
- **Typography**: Graphik Regular, 40px for headline, 16px Inter for subhead.
- **Shape**: Full width, 3.75rem to 8.375rem vertical padding depending on importance.
- **Composition**: Centered text alignment, max-width container for readability.

### Empty State

- **Anatomy**: Icon or illustration, heading, descriptive text, and optional action button.
- **Surface**: Transparent, inheriting parent background.
- **Typography**: Inter Regular, 16px body for description, muted-ink color.
- **Composition**: Centered, 5rem vertical padding, generous horizontal margins.

## Responsive behavior

The sidebar collapses to icon-only mode below 1024px viewport width, reducing from 16rem to 4rem. Navigation labels hide, with tooltips appearing on hover. The main content area expands to fill released space.

At 768px, the three-column guide card grid collapses to two columns, then single column below 480px. Table columns with lower priority (customer email, sent date) hide behind an expandable row detail pattern.

Modal dialogs transition to full-screen below 640px, with close buttons repositioned to the top-left for thumb reach. Dark hero sections reduce headline size from 40px to 30px and padding proportionally.

Search and filter controls on list pages stack vertically below 768px, with the status dropdown moving below the search field. The "New invoice" primary action remains pinned to the top-right via fixed positioning on scroll.

## Practical implementation guidance

### Preserve
- The stark sidebar/main contrast; never lighten the sidebar or remove its fixed positioning.
- Graphik for all navigation and button labels; Inter for all data and form content.
- The 4px/8px/12px radius hierarchy: buttons smallest, inputs medium, cards largest.
- Radial gradients for dark sections; do not substitute with flat colors or linear gradients.
- The action blue as the sole saturated accent in operational contexts.

### Avoid
- Adding shadows to cards or buttons; the system relies on borders and background shifts.
- Using Graphik for body text or data tables; its spacing is too loose for dense information.
- Centering text in operational interfaces; left-alignment supports scanning and comparison.
- Rounded corners on the sidebar container; its sharp edges define the application frame.

### Recommended Build Order
1. Sidebar shell with navigation items and collapse behavior.
2. Color tokens and typography scale as CSS custom properties.
3. Button variants (primary, secondary, ghost, dark) with hover states.
4. Card component with surface, border, and padding variants.
5. Table structure with header, row, and cell components.
6. Search input with icon integration and focus states.
7. Modal overlay and content containers.
8. Dark hero section with radial gradient and responsive type.
9. Empty state pattern with icon, text, and CTA composition.
10. Step indicator for multi-step flows.

### Accessibility
- Ensure sidebar navigation items have visible focus indicators using the action blue.
- Maintain 4.5:1 contrast minimum for all text; the ink on surface pairing exceeds 15:1.
- Provide aria-labels for icon-only sidebar items in collapsed mode.
- Use button elements for all clickable actions, not divs with click handlers.
- Respect reduced-motion preferences for modal transitions and gradient backgrounds.
- Ensure table headers are sortable via keyboard when sort functionality is present.

## Scope note

This guide covers the Paddle vendor dashboard's core interface patterns as visible in the overview, invoicing, onboarding, and subscription metrics surfaces. Mobile layouts below 768px, animation specifications, dark mode variants beyond the fixed sidebar, complex data visualization components such as interactive charts, and status badge color variants are not included. System-Sansserif appears only as a fallback family in limited rendering contexts and is not recommended for primary use.
