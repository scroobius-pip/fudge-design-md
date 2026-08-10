# How laylo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/laylo.com-design)

Last updated: 2026-08-10

## Captured pages

[![Settings page showing account login, phone number, custom policies, and Laylo affiliates sections with sidebar navigation and chat widget.](https://pin.fontofweb.com/10031?format=jpg)](https://design.withfudge.com/share/pin-10031)

[Settings page showing account login, phone number, custom policies, and Laylo affiliates sections with sidebar navigation and chat widget.](https://design.withfudge.com/share/pin-10031)

[![Agents page displaying inactive agent cards for abandoned cart, ticket sales, and UGC with integration options and recent activity panel.](https://pin.fontofweb.com/10030?format=jpg)](https://design.withfudge.com/share/pin-10030)

[Agents page displaying inactive agent cards for abandoned cart, ticket sales, and UGC with integration options and recent activity panel.](https://design.withfudge.com/share/pin-10030)

[![Messages composer interface with fan messaging form, phone number notice, email settings, scheduled messages, and mobile preview.](https://pin.fontofweb.com/10029?format=jpg)](https://design.withfudge.com/share/pin-10029)

[Messages composer interface with fan messaging form, phone number notice, email settings, scheduled messages, and mobile preview.](https://design.withfudge.com/share/pin-10029)

[![Profile customization page with details section, style options including color picker, font selector, gradient themes, and fan-facing preview.](https://pin.fontofweb.com/10028?format=jpg)](https://design.withfudge.com/share/pin-10028)

[Profile customization page with details section, style options including color picker, font selector, gradient themes, and fan-facing preview.](https://design.withfudge.com/share/pin-10028)

## Overview

Laylo is a creator-focused drop platform that helps artists, live events, festivals, and creators manage fan relationships through messaging, drops, and automated agents. The dashboard interface presents a clean, modern aesthetic built on a light gray canvas with white card surfaces, creating a calm workspace that keeps attention on content and actions. The visual system balances functional density with breathing room, using rounded corners throughout to soften the interface and reinforce a friendly, approachable brand personality.

The design operates in two distinct modes: a light-themed dashboard for creator tools and a dark-themed marketing site for public-facing pages. Both share the same core type system and accent colors, ensuring brand consistency across contexts. The cyan-to-blue gradient serves as the primary action signature, appearing on the most important buttons and interactive elements to guide users toward completion.

## Colors

The color system is built around a near-white canvas with carefully graded neutrals for text hierarchy and a distinctive cyan-blue gradient for primary actions.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary headings, active tab text, strong emphasis |
| muted-ink | #454A4D | Body text, secondary labels, inactive navigation |
| subtle-ink | #687178 | Tertiary text, placeholders, disabled states |
| canvas | #F5F7FC | Page background, sidebar fill, empty states |
| surface | #FFFFFF | Card backgrounds, input fields, elevated panels |
| surface-elevated | #EDF0F5 | Subtle elevation, hover backgrounds, chat widget |
| border | #C8D1DF | Card borders, dividers, input outlines |
| border-subtle | #DADBE1 | Inactive tabs, secondary dividers |
| action-primary-start | #1FC2CC | Gradient start for primary buttons |
| action-primary-end | #2B82DB | Gradient end for primary buttons |
| action-primary | #1795B0 | Text links, active states, icon accents |
| action-hover | #159DE6 | Hover state for action text |
| success | #12875B | Confirmation states, positive indicators |
| warning | #FED455 | Caution states, promotional highlights |
| danger | #F74B27 | Errors, destructive actions, urgent notices |
| pro-badge | #0D0D0D | Pro badge background |
| pro-badge-text | #FFFFFF | Pro badge text |

The light mode dominates the dashboard experience, with white cards floating on the #F5F7FC canvas. Text hierarchy is established through black for headings, dark gray for body copy, and medium gray for supporting text. The cyan-to-blue gradient (#1FC2CC to #2B82DB) is reserved for the highest-priority actions: "Create a Drop," "Apply," and primary form submissions. This gradient appears on pill-shaped buttons with no border, making them visually distinct from secondary outlined buttons.

On the marketing site, a dark mode inverts this relationship: black backgrounds with white and near-white text, while the same gradient accent maintains brand recognition. The gradient also appears in decorative form on the marketing site as section backgrounds and hero treatments.

## Typography

The type system pairs a distinctive display face for marketing headlines with a workhorse sans-serif for all interface text. The complete font inventory includes Bricolage Grotesque, Inter, Inter-600, Inter-800, Inter-900, Marcellus, Museo Moderno, Stardos Stencil, Oldenburg, Shrikhand, Bad Script, Junge, Quantico, Applesystem, Interf 367 F 3, System-Sansserif, and System-Systemui. Many of these families appear in specialized contexts such as profile font selection or system fallbacks rather than the core dashboard interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bricolage Grotesque | 3rem | 700 | 1.12 | -0.06em | Marketing page H1, hero headlines |
| section-display | Inter | 2.4375rem | 400 | 1.03 | -0.025em | Dashboard page titles (Settings, Agents, Messages) |
| heading-large | Inter | 1.75rem | 700 | 1.29 | -0.02em | Card titles, section headings (Account login, Phone number) |
| heading-medium | Inter | 1.25rem | 700 | 1.4 | -0.01em | Subsection titles, feature names |
| heading-small | Inter | 1rem | 700 | 1.25 | -0.005em | Form labels, small headings |
| body | Inter | 1rem | 400 | 1.5 | 0em | Primary body text, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.43 | 0em | Secondary descriptions, metadata, legal copy |
| label | Inter | 0.75rem | 400 | 1 | 0.017em | Badges, tags, micro-copy |
| navigation | Inter | 0.875rem | 400 | 1.25 | 0em | Sidebar links, tab labels |
| button-primary | Inter | 1.125rem | 700 | 2 | -0.005em | Primary CTA buttons |
| button-secondary | Inter | 0.875rem | 600 | 1.25 | 0em | Secondary actions, toggles |

Bricolage Grotesque, designed by Mathieu Triay and available from Atelier Triay, provides personality for marketing headlines with its slightly irregular, humanist character. Inter handles all interface text at weights from Regular (400) through Bold (700), with occasional use of ExtraBold (800) for pricing page emphasis and Black (900) for marketing hero text. The profile page reveals additional font options for creator customization: Marcellus, Museo Moderno, Stardos Stencil, Oldenburg, Shrikhand, Bad Script, Junge, and Quantico, each offered as display alternatives for fan-facing pages. System fallbacks include Applesystem, Interf 367 F 3, System-Sansserif, and System-Systemui for browser and platform compatibility. Verify licensing for these families before production use.

The type scale is tightly tracked at display sizes, with section titles at -0.025em and hero text at -0.06em, creating a crisp, modern feel. Body text uses neutral tracking for readability. Line heights are generous for body copy (1.5) and compact for display (1.03-1.12), creating clear visual separation between content types.

## Layout

The dashboard follows a fixed sidebar plus fluid main content pattern. The sidebar occupies approximately 16rem of width, sitting flush left with the viewport edge. It contains the brand mark, primary action button, navigation links, user profile summary, and upgrade prompt. The main content area flows to the right with generous margins, creating a centered reading experience that feels spacious even at wide viewports.

Page-level spacing uses a consistent 2.5rem (40px) vertical rhythm for section padding, with 1.5rem (24px) horizontal gutters. Cards stack vertically with 1.5rem gaps, while internal card content uses 1rem spacing between elements. The layout system relies heavily on negative space rather than heavy borders to separate content areas.

Content cards use a standard padding of 2rem (32px) on all sides, with some variants using asymmetric padding (24px top, 32px sides, 32px bottom) for forms with internal sections. Tab navigation sits directly below page titles with a 2px bottom border on the active tab, flush with the content area below.

Grid layouts for card collections, such as the Agents page, use a two-column grid with 1.5rem gutters. Each card maintains consistent internal structure: status indicator and help icon in the top row, title and description, then action area with integration options.

The marketing site uses a full-bleed approach with section-based scrolling, centered content blocks with maximum widths, and dramatic spacing between sections (up to 64px margins).

## Visual language

The visual language emphasizes clarity and approachability through rounded geometry, soft shadows, and restrained color. Every interactive element carries rounded corners: cards at 24px, buttons at 42px (full pill), inputs at 8px, and avatars at perfect circles. This consistent rounding creates a cohesive, friendly aesthetic that avoids the harshness of sharp corners.

Elevation is minimal and achieved through background color contrast rather than heavy shadows. Cards sit on the canvas background with no shadow in most cases; when shadows do appear, they are subtle inset shadows using the border color (#C8D1DF) for definition. The chat widget uses a slightly elevated surface color (#EDF0F5) with rounded corners to float above content.

Iconography appears as simple line icons in muted gray, paired with text labels in navigation and action items. Status indicators use small circular dots in appropriate semantic colors (orange for inactive, green for active). The "Pro" badge is a distinctive black pill with white text, appearing in the upper right of feature sections to denote premium functionality.

Gradient usage is disciplined: the cyan-to-blue linear gradient appears only on primary action buttons and select marketing elements. No other gradients are used in the dashboard interface, maintaining visual focus on these key actions.

Empty states receive thoughtful treatment with centered illustrations, descriptive text, and clear next steps rather than blank spaces.

## Components

### Sidebar Navigation

- Anatomy: Brand mark at top, primary CTA button ("Create a Drop"), vertical link list with icons, user profile card with avatar and upgrade prompt at bottom
- Surface: Transparent background, inherits canvas color
- Typography: Navigation tokens for links, label token for user handle
- Shape: Full height, fixed width
- Spacing: 1.5rem padding, 0.5rem gaps between nav items
- Composition: Icon left, label right, active state with subtle background pill
- Variants: Collapsed state not visible in current images

### Content Card

- Anatomy: Optional header row with title and actions, content area, optional footer
- Surface: White background, no border or subtle 1px border in some contexts
- Typography: Heading-large for titles, body for descriptions, body-small for metadata
- Shape: 24px border radius on all corners
- Spacing: 2rem padding standard, 1.5rem for compact variants
- Composition: Full width within content area, stacks vertically with 1.5rem gap

### Primary Button

- Anatomy: Text label, optional left icon
- Surface: Linear gradient from #1FC2CC to #2B82DB, left to right
- Typography: Button-primary token, white text
- Shape: Full pill (42px border radius), no border
- Spacing: 0.75rem top, 1.25rem sides, 0.875rem bottom padding
- Composition: Centered text, inline-flex with icon
- Variants: Full width in forms, auto-width in toolbars

### Secondary Button

- Anatomy: Text label, optional icon
- Surface: White background, 1px border in canvas or border color
- Typography: Button-secondary token, action-primary color for text
- Shape: Full pill or 8px radius depending on context
- Spacing: 0.5rem vertical, 1rem horizontal standard
- Composition: Inline with other actions

### Input Field

- Anatomy: Label (floating or static), input area, optional icon or action button
- Surface: White background, 1px border in border color
- Typography: Body token for input text, label token for floating label
- Shape: 8px border radius
- Spacing: Asymmetric padding with more top space (22.5px top, 14px right, 10.5px bottom) to accommodate floating labels
- Composition: Full width within form cards, stacked with 1rem vertical gap

### Tab Navigation

- Anatomy: Horizontal row of text labels
- Surface: Transparent, 2px bottom border on active tab
- Typography: Navigation token, black for active, muted-ink for inactive
- Shape: No background, text-only with underline indicator
- Spacing: 1.5rem horizontal gap between tabs
- Composition: Left-aligned below page title, full width with border-bottom on container

### Status Badge

- Anatomy: Text label, optional icon
- Surface: Black pill for Pro, white pill with border for standard
- Typography: Label token, white or black text depending on background
- Shape: 8px border radius, tight padding
- Spacing: 0.25rem vertical, 0.75rem horizontal

### Chat Widget

- Anatomy: Avatar, message bubble with header, body text, and action link
- Surface: Elevated surface color (#EDF0F5), rounded corners
- Typography: Body-small for message text, label for timestamp
- Shape: 24px border radius, positioned fixed bottom-right
- Spacing: 1rem internal padding
- Composition: Stacked messages with clear sender attribution

## Responsive behavior

The dashboard layout assumes a minimum width that accommodates the fixed sidebar plus meaningful content area. At narrower viewports, the sidebar should collapse to an icon-only rail or hide behind a toggle, though specific mobile breakpoints are not visible in the current material.

Content cards should stack to single column on narrow viewports, maintaining their internal padding and spacing. The two-column agent grid should collapse to single column below approximately 768px viewport width.

Form layouts with side-by-side elements, such as the phone number input with country selector, should stack vertically on narrow screens. The preview panel on the Messages and Profile pages should move below the form on narrow viewports rather than sitting side-by-side.

Font sizes should maintain their rem-based scale across viewport sizes, ensuring readability without manual breakpoint adjustments. The hero display size may reduce to section-display on very narrow viewports to prevent overflow.

## Practical implementation guidance

### Preserve
- The consistent 24px card radius and 42px pill button radius as signature shapes
- The cyan-to-blue gradient exclusively for primary actions
- The light gray canvas (#F5F7FC) with white card contrast
- The tight tracking on display type for modern crispness
- The floating label pattern in form inputs with asymmetric padding
- The Pro badge as a black pill with white text

### Avoid
- Adding heavy drop shadows to cards; prefer background contrast for elevation
- Using the gradient on non-action elements; it dilutes the CTA impact
- Sharp corners on any interactive element; maintain the rounded language
- Multiple font families in the dashboard interface; reserve Bricolage Grotesque for marketing
- Borders darker than #C8D1DF on card containers

### Recommended Build Order
1. Establish the canvas background and sidebar structure
2. Implement the type scale with Inter at core sizes
3. Build the card component with 24px radius and standard padding
4. Create the primary button with gradient and pill shape
5. Add form inputs with floating labels and 8px radius
6. Implement tab navigation with active underline pattern
7. Add secondary components: badges, chat widget, empty states
8. Integrate Bricolage Grotesque for marketing page heroes

### Accessibility
- Ensure the gradient primary button maintains minimum 4.5:1 contrast ratio; the white text on gradient meets this
- Provide visible focus states with 2px outline in action-primary color
- Use aria-labels for icon-only buttons in the sidebar and card headers
- Maintain keyboard navigation order through sidebar, main content, and floating widgets
- Ensure floating labels remain visible and readable when inputs are focused or filled

## Scope note

This guide covers the creator dashboard interface for Settings, Agents, Messages, and Profile pages, plus visible marketing page elements. Onboarding flows, pricing page details, and dark-mode marketing site specifics are partially represented. Mobile layouts, animation specifications, and error state variations are not included. The complete type inventory includes Bricolage Grotesque, Inter, Inter-600, Inter-800, Inter-900, Marcellus, Museo Moderno, Stardos Stencil, Oldenburg, Shrikhand, Bad Script, Junge, Quantico, Applesystem, Interf 367 F 3, System-Sansserif, and System-Systemui. Verify licensing for these families before production use.
