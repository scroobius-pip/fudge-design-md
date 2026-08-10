# How stock.adobe.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/stock.adobe.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed account creation modal with email input, social sign-in buttons, and pricing summary panel showing 7-day free trial details.](https://pin.fontofweb.com/9842?format=jpg)](https://design.withfudge.com/share/pin-9842)

[Dark-themed account creation modal with email input, social sign-in buttons, and pricing summary panel showing 7-day free trial details.](https://design.withfudge.com/share/pin-9842)

[![Illustrations category page hero with warm brown gradient header and masonry grid of diverse stock illustration thumbnails.](https://pin.fontofweb.com/2089?format=jpg)](https://design.withfudge.com/share/pin-2089)

[Illustrations category page hero with warm brown gradient header and masonry grid of diverse stock illustration thumbnails.](https://design.withfudge.com/share/pin-2089)

[![Full-bleed green abstract hero banner with centered search bar for royalty-free stock illustrations discovery.](https://pin.fontofweb.com/2088?format=jpg)](https://design.withfudge.com/share/pin-2088)

[Full-bleed green abstract hero banner with centered search bar for royalty-free stock illustrations discovery.](https://design.withfudge.com/share/pin-2088)

[![Illustrations landing page with green hero, blue promotional banner, curated carousel, and large featured artwork cards.](https://pin.fontofweb.com/2087?format=jpg)](https://design.withfudge.com/share/pin-2087)

[Illustrations landing page with green hero, blue promotional banner, curated carousel, and large featured artwork cards.](https://design.withfudge.com/share/pin-2087)

## Overview

Adobe Stock presents a dark-mode-first creative marketplace designed to showcase photography, illustrations, vectors, and video content with minimal interface interference. The visual system prioritizes immersive imagery through near-black canvas surfaces, restrained typography, and a single vibrant blue accent that guides users toward search, trial conversion, and purchase actions. The interface alternates between deep charcoal environments for account and checkout flows and clean light surfaces for content browsing, creating distinct functional zones without fragmenting the brand experience. Photography dominates every page surface, with UI elements receding through low-contrast borders and subtle shadows. The result is a gallery-like atmosphere where creative assets remain the focal point while navigation and commerce functions remain immediately accessible through strategic color and compositional hierarchy.

## Colors

| token | value | use |
|---|---|---|
| action | #1473E6 | Primary buttons, promotional banners, trial CTAs, links |
| action-hover | #2680EB | Button hover states, interactive emphasis |
| action-light | #4096F3 | Secondary interactive highlights, focus indicators |
| action-muted | #5EAAF7 | Subtle blue accents, disabled action states |
| success | #46AA46 | Positive pricing indicators, confirmation states |
| warning | #EBBE32 | Trial badges, promotional tags, limited-time offers |
| ink | #000000 | Deepest backgrounds, modal overlays, maximum contrast |
| ink-primary | #1D1D1D | Primary dark canvas, body background, card surfaces |
| ink-secondary | #1E1E1E | Elevated dark surfaces, pricing panels, form containers |
| ink-tertiary | #303030 | Borders on dark backgrounds, subtle dividers |
| surface | #FFFFFF | Light mode backgrounds, search inputs, content cards |
| surface-muted | #EBEBEB | Secondary light backgrounds, hover states |
| surface-subtle | #E1E1E1 | Tertiary surfaces, disabled inputs |
| surface-hover | #D0D0D0 | Light surface interactions, dropdown highlights |
| muted | #B4B4B4 | Secondary text on dark backgrounds, placeholders |
| muted-light | #B0B0B0 | Tertiary text, captions, metadata |
| border | #4B4B4B | Dark theme borders, input outlines, card edges |
| border-subtle | #D0D0D0 | Light theme dividers, hairline separators |
| canvas-dark | #1D1D1D | Full-bleed dark page backgrounds |

The color architecture operates on a dark-first principle with two functional modes. The dark palette—built from pure black through charcoal grays—serves account creation, pricing, and checkout flows where focus and reduced eye strain matter. The light palette supports content discovery pages where white and off-white surfaces allow photography and illustration to read cleanly without color cast. Blue action colors appear exclusively for interactive elements, creating a consistent wayfinding system across both modes. The warning yellow appears sparingly as a high-visibility accent for trial badges and promotional urgency. Green success color confirms positive financial states like zero-due amounts and free trial indicators.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Adobe Clean | 2.5rem | 400 | 1.2 | normal | Page heroes, category headlines, immersive banners |
| section-display | Adobe Clean | 1.5rem | 400 | 1.3 | normal | Section headers, curated collection titles |
| body | Adobe Clean | 0.875rem | 400 | 1.5 | normal | Primary interface text, descriptions, labels |
| body-large | Adobe Clean | 1rem | 400 | 1.5 | normal | Promotional copy, banner text, emphasized body |
| label | Adobe Clean | 0.75rem | 400 | 1.4 | normal | Badges, tags, metadata, fine print |
| navigation | Adobe Clean | 0.8125rem | 400 | 1.5 | normal | Menu items, breadcrumbs, utility links |
| legal-copy | Adobe Clean | 0.75rem | 400 | 1.4 | normal | Terms, privacy notices, compliance text |

Adobe Clean serves as the primary type family across all interface functions, delivering a unified, neutral voice that never competes with creative content. The weight range spans 300 for light applications through 700 for bold emphasis, though the interface predominantly employs 400 weight for clarity at small sizes. Display sizes scale from 2.5rem for immersive hero moments down to 0.75rem for legal and metadata contexts. Line heights remain generous at 1.2 to 1.5 to maintain readability across the dark backgrounds that dominate the experience. Letter spacing stays neutral throughout, avoiding tightened or expanded treatments that would introduce visual noise.

The system also includes Applesystem as a system-ui fallback, Times as a generic serif fallback, and Cl 3 Iskicons as a dedicated icon font for interface symbols. Adobeclean-300 provides a light weight variant for delicate applications. Verify licensing for Adobe Clean, Adobeclean-300, and Cl 3 Iskicons before production use.

## Layout

The layout system centers content within flexible containers that adapt to viewport width while maintaining consistent internal rhythm. Full-bleed hero sections occupy the top of category and landing pages, with abstract photography or solid color treatments extending edge to edge. Below heroes, content organizes into structured grids with predictable gutters and section spacing.

The primary grid for illustration and photo browsing employs a responsive masonry or uniform column layout with 1rem to 1.5rem gaps between items. Cards maintain aspect ratios intrinsic to their media content rather than forcing uniform dimensions, allowing visual variety within ordered rows. Section headers include a title, optional subtitle, and right-aligned action link, separated from content by 1.5rem to 2rem vertical space.

Account and pricing interfaces use a split-panel composition on wider viewports, with form inputs and social authentication on the left and pricing summaries on the right. On narrower screens, these stack vertically with the pricing summary following the form. The pricing panel receives elevated visual treatment through border color and subtle background differentiation from the main canvas.

Global navigation remains minimal, with utility links like "My Libraries" positioned in the upper right corner. Search functionality receives prominent placement within hero banners, using a centered horizontal bar with category selector, text input, and visual search icon. Footer areas are not visible in the supplied materials.

Spacing follows a 2px base unit, with common increments at 8px, 10px, 12px, 14px, 16px, 25px, and 35px serving component padding, margins, and section breaks. Border radii cluster at 3px for small elements, 4px for inputs and cards, and 20px for pill-shaped buttons.

## Visual language

The visual language balances creative expression with commercial clarity. Photography and illustration dominate every surface, with UI elements designed to recede through darkness, transparency, and restraint. The aesthetic is contemporary and professional, avoiding decorative flourishes that would distract from the assets being sold.

Hero sections employ full-bleed imagery with overlaid text, using either darkened photography or abstract color fields as backgrounds. Text overlays maintain readability through sufficient contrast, with white or near-white type on darker imagery. Search interfaces within heroes use light surfaces that float above the photographic background, creating clear interactive zones.

Content cards for browsing use minimal chrome—often just the image itself with hover-revealed metadata. Rounded corners at 3px to 4px soften the rectangular grid without becoming ornamental. Shadows appear sparingly, with a notable deep shadow treatment (0px 8px 14px 3px at 20% opacity) used for elevated panels and modals.

The blue accent color functions as the brand's interactive signature, appearing on primary buttons, promotional banners, and trial indicators. This creates a consistent visual path for conversion actions across all page types. Yellow appears only for trial badges and urgency messaging, ensuring it retains attentional impact when deployed.

Iconography uses Cl 3 Iskicons, a custom icon font, for interface elements, maintaining stroke weight and geometric consistency with the clean sans-serif typography. No decorative illustrations or patterns appear in the interface itself—the visual interest comes entirely from the stock content being presented.

## Components

### Search bar

- **Anatomy**: Category dropdown selector, text input field, visual search icon button
- **Surface**: White (#FFFFFF) background with subtle border
- **Typography**: Body style for placeholder and input text
- **Shape**: 4px border radius, full-width within container constraints
- **Spacing**: Internal padding of approximately 11px top, 12px sides; height of 48px
- **Composition**: Horizontally arranged with fixed-width category selector (approximately 120px), flexible search input, and right-aligned camera icon
- **Variants**: Adapts placeholder text to current category context ("Search all illustrations", "Search all images")

### Promotional banner

- **Anatomy**: Full-width colored bar containing promotional text and CTA button
- **Surface**: Solid action blue (#1473E6) background
- **Typography**: Body-large in white, with secondary-action button style for CTA
- **Shape**: No border radius, full bleed horizontally
- **Spacing**: Generous vertical padding (approximately 16px), text and button centered or left-aligned with comfortable gap
- **Composition**: Single-line message with inline pill button, or stacked on narrow viewports
- **Variants**: Trial promotions, feature announcements, seasonal campaigns

### Pricing summary panel

- **Anatomy**: Bordered container with plan details, feature list, financial breakdown, and total
- **Surface**: Dark elevated background (#1E1E1E) with subtle border (#4B4B4B)
- **Typography**: Body for descriptions, label for badges, section-display for totals
- **Shape**: 4px border radius, 1px solid border
- **Spacing**: 15px to 16px internal padding, 12px to 16px between content groups
- **Composition**: Stacked vertical layout with plan name and badge at top, bulleted features, subtotal/tax/total hierarchy, and billing start date at bottom
- **Variants**: Trial state (green "7-day free trial" indicator, zero due), paid state (full pricing displayed)

### Content card

- **Anatomy**: Media thumbnail with optional hover overlay for title, artist, and actions
- **Surface**: Transparent or white background, image fills container
- **Typography**: Label or navigation style for metadata overlays
- **Shape**: 3px to 4px border radius on container
- **Spacing**: 1rem to 1.5rem gap in grid layouts
- **Composition**: Aspect ratio preserved from source media, uniform width within grid column
- **Variants**: Standard thumbnail, featured large format, collection hero with gradient overlay

### Primary button

- **Anatomy**: Text label with optional icon, full click target
- **Surface**: Action blue background, white text
- **Typography**: Body style, 14px
- **Shape**: Pill shape with 20px border radius, or 4px for rectangular variants
- **Spacing**: 9px vertical padding, 14px horizontal minimum
- **Composition**: Centered text, icon positioned left or right with 10px gap
- **Variants**: Filled primary, outlined secondary on dark backgrounds, full-width sticky footer variant

### Input field

- **Anatomy**: Label (floating or static), text input, optional helper text
- **Surface**: Dark background (#000000) with subtle border (#4B4B4B), white text
- **Typography**: Body for input, label style for field name
- **Shape**: 4px border radius
- **Spacing**: 11px top padding, 12px sides, 12px bottom margin between fields
- **Composition**: Full-width within form container, stacked vertically
- **Variants**: Email input, password, search query, with appropriate autocomplete and type attributes

### Social sign-in button

- **Anatomy**: Service icon, brand name text, full-width click target
- **Surface**: Dark background matching form, subtle border
- **Typography**: Body style, centered
- **Shape**: 4px border radius
- **Spacing**: 16px vertical padding, generous horizontal margins
- **Composition**: Icon left-aligned or centered with text, full-width within form container
- **Variants**: Google, Facebook, Apple (where supported)

## Responsive behavior

The layout system adapts through fluid grids and breakpoint-aware stacking. Hero search bars maintain centered positioning across widths, with the category selector collapsing to an icon or hiding on narrow viewports. Content grids transition from multi-column masonry to fewer columns, eventually single-column scrolling on mobile devices.

Split-panel layouts for account creation and pricing stack vertically on narrow screens, with the pricing summary moving below the form rather than beside it. The sticky footer action bar on mobile ensures primary conversion buttons remain accessible without scrolling.

Typography scales down modestly on smaller screens, with hero display potentially reducing from 2.5rem to 2rem or 1.75rem to preserve line length and prevent overflow. Section headers maintain hierarchy through size differentiation rather than weight changes.

Touch targets for buttons and links should maintain minimum 44px height on mobile, with pill-shaped buttons expanding to full width in sticky footers. Card grids increase tap target spacing to prevent accidental selections.

## Practical implementation guidance

### Preserve
- The dark-first canvas philosophy that lets photography dominate
- The restrained single-blue accent system for all interactive elements
- Adobe Clean as the exclusive type family with consistent 400 weight
- Generous whitespace around content cards and section breaks
- Pill-shaped primary buttons with 20px radius for high-priority actions
- Full-bleed hero sections with centered search functionality

### Avoid
- Introducing additional accent colors that compete with the blue action system
- Decorative patterns, gradients, or textures in UI surfaces
- Heavy borders or shadows that frame content cards aggressively
- Multiple type families or expressive typography that distracts from stock assets
- Light-themed account and checkout flows that break the immersive dark experience
- Rigid aspect ratio enforcement that crops diverse media content

### Recommended build order
1. Establish the dark canvas system with #1D1D1D body background and #000000 deepest surfaces
2. Implement Adobe Clean at 400 weight with the full type scale
3. Build the search bar component with category selector, input, and visual search
4. Create content card grid with responsive column behavior and preserved aspect ratios
5. Add promotional banner with action blue background and pill CTA
6. Implement account/pricing split-panel with form inputs and summary card
7. Refine interactive states: hover blues, focus rings, active presses

### Accessibility
- Ensure all text over photography meets WCAG contrast minimums through overlay darkening or text shadows
- Provide visible focus indicators using action-light (#4096F3) outlines on all interactive elements
- Maintain logical tab order through search bar, content grids, and conversion actions
- Use aria-labels on icon-only buttons like visual search
- Respect reduced-motion preferences for any scroll-triggered animations
- Test dark theme contrast ratios: white text on #1D1D1D achieves approximately 12:1, exceeding AAA requirements

## Scope note

This guide covers the account creation flow, illustration category browsing, and search discovery surfaces visible in the supplied materials. Pricing page layouts, mobile navigation patterns, footer structures, and video-specific interfaces are not represented. Motion design, loading states, and error handling patterns were not captured and should be developed with standard Adobe design system conventions. Applesystem, Times, Adobeclean-300, and Cl 3 Iskicons are named in the type system but their specific roles beyond fallback and icon duties were not fully determined from the captured surfaces.
