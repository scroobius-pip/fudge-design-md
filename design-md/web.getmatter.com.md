# How web.getmatter.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/web.getmatter.com-design)

Last updated: 2026-08-10

## Captured pages

[![Matter landing page with centered signup form, social proof grid, and dark gradient background fading into testimonial cards](https://pin.fontofweb.com/9225?format=jpg)](https://design.withfudge.com/share/pin-9225)

[Matter landing page with centered signup form, social proof grid, and dark gradient background fading into testimonial cards](https://design.withfudge.com/share/pin-9225)

[![Matter Pro subscription modal with yearly and monthly pricing options, feature checklist, and dark overlay backdrop](https://pin.fontofweb.com/9227?format=jpg)](https://design.withfudge.com/share/pin-9227)

[Matter Pro subscription modal with yearly and monthly pricing options, feature checklist, and dark overlay backdrop](https://design.withfudge.com/share/pin-9227)

[![Queue page header with Matter logo, navigation bar, and empty reading list state on near-black background](https://pin.fontofweb.com/9226?format=jpg)](https://design.withfudge.com/share/pin-9226)

[Queue page header with Matter logo, navigation bar, and empty reading list state on near-black background](https://design.withfudge.com/share/pin-9226)

## Overview

Matter presents a dark, immersive reading environment built around focus and content clarity. The interface uses a near-black canvas with subtle surface elevation to create depth without distraction. Purple accents mark premium features and interactive states, while the typographic system relies on two weights of the Camphor family—heavy display cuts for headlines and navigation, regular weights for body text—to establish clear hierarchy with minimal visual noise. The design favors centered compositions for authentication and onboarding flows, shifting to structured grids for content browsing. Cards with generous rounding and soft borders organize information into scannable units. The overall impression is of a premium productivity tool: restrained, confident, and built for extended use.

## Colors

The color system operates in a dark-first mode with selective warm and cool accents. The palette derives its character from deep blacks and charcoal surfaces, using white and near-white text for maximum contrast. Purple serves as the singular brand accent, appearing in badges, selected states, and premium indicators.

| token | value | use |
|---|---|---|
| canvas | #0E0E0E | Primary page background, modal overlay backdrop |
| surface | #1F2023 | Card backgrounds, elevated panels, input fields |
| surface-elevated | #1D1D1D | Modal dialog background, focused content areas |
| ink | #FFFFFF | Primary text, active navigation, button labels on dark |
| ink-muted | #EBDCFF | Secondary text, pricing details, subdued labels |
| ink-dim | #DADCE0 | Tertiary text, placeholders, disabled states |
| action | #8449CF | Selected states, premium badges, active borders |
| action-muted | #2E1A47 | Badge backgrounds, subtle accent fills |
| border | #3C4043 | Card borders, dividers, input outlines |
| border-subtle | #F0F0F0 | Hairline borders on light buttons, footer elements |

The dark canvas dominates every surface, with gradients fading from #0E0E0E to transparent used to blend content into photographic or testimonial backgrounds. White buttons and text create high-contrast focal points against this darkness. The purple accent is disciplined—appearing only to indicate selection, premium status, or interactive emphasis. No light mode is visible in the supplied material.

## Typography

Matter employs the Camphor type family in two optical weights: Camphor W 01 for display and heavy UI elements, and Camphor W 04 for body text and readable content. The system uses a single sans-serif family with weight and size differentiation to create hierarchy, avoiding decorative or secondary typefaces entirely. The System-Systemui family appears in platform-specific sign-in buttons as a functional fallback.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Camphor W 01 | 2.5rem | 700 | 1 | normal | Landing page headlines, modal titles |
| section-display | Camphor W 01 | 1.125rem | 700 | 1.2 | normal | Card headers, section labels, pricing plan names |
| body | Camphor W 04 | 1rem | 400 | 1.5 | normal | Primary body text, navigation items, list entries |
| body-small | Camphor W 04 | 0.875rem | 400 | 1.5 | normal | Descriptions, metadata, testimonial text |
| label | Camphor W 01 | 0.875rem | 900 | 1.2 | normal | Badges, tags, promotional pills |
| button | Camphor W 01 | 1.25rem | 700 | 1.2 | normal | Primary CTA buttons, footer actions |
| navigation | Camphor W 01 | 1.0625rem | 700 | 1.2 | normal | Top bar page titles, active nav items |

Display sizes use tight line-height for impact, while body sizes maintain generous leading for readability during extended reading sessions. The heavy weight of Camphor W 01 at 900 for labels creates crisp, compact badges that stand out against dark surfaces. System-Systemui appears only in secondary button contexts at 14px for platform-specific sign-in elements.

Camphor W 04 is designed by Nick Job and distributed by Monotype Imaging Inc. Camphor W 01 is distributed by Monotype Imaging Inc. Verify licensing for these families before production use.

## Layout

The layout system centers content within generous horizontal margins, using fixed-width containers for focused tasks and fluid grids for browsing contexts.

**Page structure.** The top navigation bar spans the full viewport width with internal padding of 0px 80px (5rem), creating consistent side gutters. The bar itself sits flush against the canvas with no visible border, using only typography and a small logo mark for identification. A plus icon in the upper right suggests content addition functionality.

**Content containers.** Main content areas use padding of 0px 40px (2.5rem) for standard views and 0px 80px (5rem) for wider layouts. Modal dialogs appear centered with a backdrop overlay, using a fixed-width elevated panel with 1.875rem (30px) corner radius.

**Grid behavior.** The landing page arranges testimonial cards in a masonry-style grid flanking a centered signup form. This creates visual density and social proof without overwhelming the primary conversion action. The queue page presents an empty state with centered modal content, suggesting a single-column or centered layout for primary interactions.

**Spacing scale.** The system uses a base unit of 0.125rem (2px), with practical increments at 0.75rem (12px) for tight internal spacing, 1.25rem (20px) for element margins, 2.5rem (40px) for content padding, 3.125rem (50px) for section breaks, and 5rem (80px) for page gutters.

## Visual language

**Depth and elevation.** Surfaces gain depth through background color shifts rather than heavy shadows. The canvas at #0E0E0E sits beneath surface layers at #1F2023 and #1D1D1D, creating a subtle stepped effect. A single visible shadow—`rgba(255, 255, 255, 0.07) 0px 0px 0px 1px`—appears as an inner glow or hairline highlight on certain elements, inverting the typical dark-shadow convention for a luminous edge effect.

**Gradients.** Linear gradients fade from #0E0E0E at 13.44% to transparent, used in all four cardinal directions to blend content areas into backgrounds. These gradients appear behind testimonial grids and hero sections, allowing background texture to show through while maintaining text legibility.

**Imagery and avatars.** User avatars appear as circular crops with consistent sizing, paired with names in bold and handles in muted text. The testimonial cards use these avatar-name pairings as headers, with body text in a smaller size below.

**Iconography.** Simple geometric marks appear sparingly: a checkmark in a circle for feature lists, a filled circle for selected radio options, and an empty circle for unselected options. The Matter logo uses a stylized "M" mark in white.

## Components

**Modal dialog**
- Anatomy: Backdrop overlay, elevated panel with header content, body area, and footer action row
- Surface: Backdrop uses canvas color at full opacity; panel uses surface-elevated at 1.875rem radius
- Typography: Hero-display for titles, body for descriptions, section-display for subheadings
- Shape: 1.875rem corner radius on the panel; 1rem radius on footer buttons
- Spacing: Internal padding of approximately 3.125rem; footer buttons separated by flex space-between
- Composition: Centered horizontally and vertically; content max-width creates readable line lengths

**Pricing plan selector**
- Anatomy: Two selectable rows with plan name, pricing details, and radio indicator; "Most Popular" badge on primary option
- Surface: Unselected uses surface color; selected uses surface with action border at 1px solid
- Typography: Section-display for plan names, body-small for pricing details, label for badge
- Shape: 0.5rem (8px) radius on rows; pill radius on badge
- Spacing: 0.75rem vertical gap between options; internal padding of approximately 0.875rem 1.5rem
- Variants: Selected state shows action border and filled radio; unselected shows muted border and empty radio

**Feature checklist**
- Anatomy: Vertical list with icon, description text pairs
- Surface: Transparent; icons use ink color
- Typography: Body for descriptions
- Spacing: 1.25rem vertical gap between items; icon margin-right of approximately 0.75rem
- Composition: Left-aligned with consistent icon width creating a visual column

**Primary button**
- Anatomy: Text label with optional icon; full background fill
- Surface: Background uses ink (#FFFFFF); text uses canvas (#0E0E0E)
- Typography: Button token at 1.25rem
- Shape: 1rem (16px) radius
- Spacing: Padding of 0.875rem 1.5rem (14px 24px)

**Secondary button**
- Anatomy: Text label with muted background
- Surface: Background uses surface-elevated; text uses ink-muted
- Typography: Button token
- Shape: 1rem radius
- Spacing: Same padding as primary

**Social sign-in button**
- Anatomy: Platform icon left-aligned, label centered
- Surface: Background uses ink; text and icon use canvas
- Typography: System-Systemui at 0.875rem for platform-specific buttons; Camphor W 04 at 1.0625rem for email option
- Shape: 0.25rem (4px) radius with 1px solid border in border-subtle
- Spacing: Height of approximately 2.75rem; internal padding 0px 0.625rem

**Testimonial card**
- Anatomy: Avatar image, name, handle, body text
- Surface: Surface color with subtle border
- Typography: Section-display for names, body-small for handles and body text
- Shape: 0.5rem radius
- Spacing: Internal padding of approximately 1.25rem; avatar margin-right of 0.75rem

**Text input**
- Anatomy: Single-line field with placeholder text
- Surface: Transparent background with border
- Typography: Body for input text
- Shape: 0.5rem radius
- Border: 1px solid border color

**Badge**
- Anatomy: Compact label with background fill
- Surface: Action-muted background; ink text
- Typography: Label token at 0.875rem weight 900
- Shape: Pill radius (9999px)
- Spacing: Padding of approximately 0.25rem 0.75rem

## Responsive behavior

The supplied images show desktop-width layouts. The centered modal and signup forms suggest a max-width constraint that would maintain readability across viewports. The testimonial grid on the landing page appears to use multiple columns that should collapse to fewer columns or a single scrollable row on narrower screens.

Implementation guidance: Maintain the 5rem side gutters down to tablet width, then reduce to 2.5rem for mobile. The modal dialog should remain centered with a viewport-relative max-width and consistent internal padding. Pricing selectors should stack vertically on narrow screens with full-width rows. Testimonial grids should reflow from three columns to two, then to a single column with horizontal scroll as a fallback. The navigation bar should collapse to a hamburger or simplified icon set on mobile, preserving the logo and primary action.

## Practical implementation guidance

**Preserve**
- The near-black canvas as the dominant background; light surfaces should be the exception, not the rule
- The disciplined use of purple; reserve action color for selected states, badges, and premium indicators only
- The tight weight contrast between Camphor W 01 and Camphor W 04; this pairing defines the interface character
- Generous corner radii on panels (30px) and buttons (16px); these soft shapes distinguish the visual language
- Centered compositions for conversion-focused pages; the symmetry creates focus

**Avoid**
- Adding additional accent colors; the single purple against monochrome surfaces is intentional
- Using heavy drop shadows for elevation; prefer surface color shifts and the subtle white inner glow
- Tightening body line-height below 1.5; readability in a reading app is paramount
- Creating light-mode variants without careful consideration; the dark palette is central to the brand

**Recommended build order**
1. Establish the canvas and surface color tokens with the dark background
2. Implement Camphor W 01 and Camphor W 04 with the full type scale
3. Build the modal shell with backdrop, panel radius, and internal spacing
4. Create button variants (primary white, secondary dark, social sign-in)
5. Implement form elements: text input, radio selector, pricing plan row
6. Construct the testimonial card with avatar, name, handle, and body text
7. Add the gradient overlays for blending content into backgrounds
8. Polish with badge component and micro-interactions

**Accessibility**
- Maintain the high contrast between ink (#FFFFFF) and canvas (#0E0E0E); this exceeds WCAG AAA for normal text
- Ensure interactive elements have visible focus states; consider using the action color for focus rings
- Provide visible labels or aria-labels for icon-only buttons like the navigation plus icon
- Test the purple accent (#8449CF) against dark surfaces for sufficient contrast; it may need lightening for small text
- Ensure form inputs have visible error states beyond color alone
- Consider reduced-motion preferences for any modal transitions

## Scope note

This guide covers the Matter landing page and queue page modal as visible in desktop screenshots. Mobile layouts, additional app screens, reading view typography, and animation specifications are not included. The spacing and radius values reflect exact measurements from the supplied interface; minor rounding may occur in implementation.
