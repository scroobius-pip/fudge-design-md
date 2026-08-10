# How pinterest.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pinterest.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pin detail page showing Lofree Flow84 keyboard with modal survey overlay, left navigation rail, and related pins grid with rounded card corners](https://pin.fontofweb.com/7928?format=jpg)](https://design.withfudge.com/share/pin-7928)

[Pin detail page showing Lofree Flow84 keyboard with modal survey overlay, left navigation rail, and related pins grid with rounded card corners](https://design.withfudge.com/share/pin-7928)

[![Business analytics dashboard with metric cards, green percentage indicators, and tabular top pins data with rounded panel borders](https://pin.fontofweb.com/7175?format=jpg)](https://design.withfudge.com/share/pin-7175)

[Business analytics dashboard with metric cards, green percentage indicators, and tabular top pins data with rounded panel borders](https://design.withfudge.com/share/pin-7175)

[![Home feed header with pill-shaped search bar, notification icons with badges, and horizontal scrollable topic chips with rounded thumbnails](https://pin.fontofweb.com/7071?format=jpg)](https://design.withfudge.com/share/pin-7071)

[Home feed header with pill-shaped search bar, notification icons with badges, and horizontal scrollable topic chips with rounded thumbnails](https://design.withfudge.com/share/pin-7071)

[![Business hub resources section with four pastel-colored course cards featuring rounded corners and arrow action buttons](https://pin.fontofweb.com/5912?format=jpg)](https://design.withfudge.com/share/pin-5912)

[Business hub resources section with four pastel-colored course cards featuring rounded corners and arrow action buttons](https://design.withfudge.com/share/pin-5912)

## Overview

Pinterest's visual system is built to make imagery the hero. The interface recedes behind content through a disciplined use of warm neutrals, generous rounding, and minimal chrome. Every container—from pin cards to search bars—uses soft, pill-like corners that echo the platform's friendly, approachable character. The layout prioritizes vertical scrolling through dense masonry grids, with a persistent left navigation rail on desktop that provides wayfinding without competing for attention. Action moments are marked by a distinctive red accent visible in the Save button and notification badges, while success states and growth metrics employ a deep green. Typography is handled entirely by Pin Sans Mac Os, a geometric sans-serif that renders crisply at small sizes and carries enough weight contrast to establish clear hierarchy without visual noise. The overall effect is a system that feels both organized and organic, letting user-generated content breathe while maintaining consistent structural rhythms across home feeds, pin detail pages, and business tools.

## Colors

The palette is intentionally restrained, with warm grays serving as the structural foundation and a small set of functional accents handling interaction states and feedback.

| token | value | use |
|---|---|---|
| canvas | #000000 | Main page background behind grids and feeds |
| surface | #FFFFFF | Cards, modals, dropdowns, and content containers |
| surface-warm | #FBFBF9 | Alternate page background, subtle section differentiation |
| surface-muted | #E5E5E0 | Disabled states, secondary backgrounds, input fields |
| border | #C8C8C1 | Hairline dividers, card borders, table rules |
| ink | #211922 | Primary text, headings, active navigation |
| ink-secondary | #757570 | Metadata, captions, placeholder text, secondary labels |
| action | #097239 | Positive metrics, growth indicators, success states |

The dark canvas (#000000) creates a theatrical framing effect that makes photography and illustration pop, particularly in the home feed and search results. Warm surface tones prevent the interface from feeling sterile on business and settings pages where white cards stack against off-white backgrounds. The near-black ink (#211922) is warmer than pure black, softening reading experiences in long-form content areas. Green appears almost exclusively in analytics contexts to represent positive change, as seen in the percentage indicators on metric cards. The red accent used for primary Save actions and notification badges is a recognizable brand signal, though its exact hex value is not present in the retained interface color data.

## Typography

Pin Sans Mac Os, designed by Grilli Type AG, is the sole type family. It is used in Regular (400), Medium (500), and Bold (700) weights. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pin Sans Mac Os | 1.75rem | 700 | 1.1 | -0.03125em | Page titles, modal headlines, major section headers |
| section-display | Pin Sans Mac Os | 1.25rem | 700 | 1.4 | 0em | Card titles, feature headings, resource names |
| body | Pin Sans Mac Os | 1rem | 400 | 1.4 | 0em | Descriptions, comments, longer reading passages |
| body-small | Pin Sans Mac Os | 0.875rem | 400 | 1.4 | 0em | Secondary descriptions, analytics labels, metadata |
| label | Pin Sans Mac Os | 0.75rem | 400 | 1.2 | 0em | Timestamps, small metadata, navigation labels |
| label-medium | Pin Sans Mac Os | 0.875rem | 500 | 1.4 | 0em | Button text, chip labels, active tab text |
| navigation | Pin Sans Mac Os | 0.75rem | 400 | 1.2 | 0em | Left rail icons with text, bottom bar labels |

The type scale is compact and functional. Hero-display uses tight negative tracking for impact at larger sizes, while body and label sizes prioritize legibility in dense information environments. The 0.75rem label size appears extensively in the navigation rail and pin metadata areas, where space is constrained but readability must remain high. Medium weight is reserved for interactive elements that need to feel tactile without the heaviness of bold. Line heights for the smallest sizes are set to 1.2 to maintain comfortable reading in tightly spaced navigation and label contexts.

## Layout

The desktop layout follows a three-zone architecture: a fixed left navigation rail, a scrollable main content area, and occasional overlay modals or flyouts. The left rail occupies a narrow persistent column containing icon-driven navigation with stacked labels, keeping primary wayfinding visible without consuming content space. The main area uses a fluid grid that adapts to viewport width, with columns of pin cards that reflow based on available space.

Content density is high. Pin grids use tight gutters—typically 1rem between cards—with cards themselves flush to their internal images. The masonry-style arrangement means cards have variable heights based on image aspect ratio, but consistent width within a column. This creates a rhythmic, staggered visual flow that encourages exploration.

On business and analytics pages, the layout shifts to a more structured two-column or card-based system. Metric summaries occupy left-aligned panels while detailed data tables or top-performing content lists fill remaining space. These panels use generous internal padding—1.5rem is common—to separate data clusters and prevent visual crowding.

Horizontal scrolling containers appear for topic chips and related content carousels. These break the vertical flow intentionally, signaling a different browsing mode. Chips sit edge-to-edge within their scrollable track with compact internal spacing.

Modals and dialogs are centered with a backdrop scrim, typically darkening the underlying content to focus attention on the foreground task. Survey modals and confirmation dialogs use this pattern consistently.

## Visual language

The visual language is defined by softness and approachability. Every interactive container uses rounded corners, with the degree of rounding scaled to the element's size and importance. Small buttons use 0.75rem radii, standard cards use 1rem, and the search bar and avatar containers use full pill rounding (9999px). This creates a family of related shapes that feel cohesive without being monotonous.

Imagery dominates. Photos and illustrations extend to the edges of their containers, with no internal borders or frames. Text overlays on images are rare; when they occur, they use dark scrims or gradient fades to ensure legibility. The platform's identity is carried more by the consistent treatment of content containers than by decorative elements.

Shadows are minimal and functional. Modals use a soft, diffuse shadow to separate from their backdrop. Cards in grids typically do not shadow, maintaining a flat, layered appearance. The exception is hover or active states where a subtle elevation change may occur.

The left navigation rail uses simple line icons with text labels beneath. Active states are indicated by filled icons or weight changes rather than background pills. The overall chrome is desaturated and neutral, allowing colorful user content to provide all visual vibrancy.

Business hub pages introduce more deliberate color through illustrated cards and pastel backgrounds. These educational resources use soft blues, lavenders, and yellows as section identifiers, breaking from the neutral feed aesthetic while maintaining the same rounded, card-based structure.

## Components

### Pin card

Anatomy: Rounded rectangular container with an image filling the top portion, title text below, and optional metadata (source domain, save count) at the bottom. Some variants include a small "Sponsored" label or video duration badge.

Surface and text color: White background (#FFFFFF) with near-black text (#211922) for titles. Secondary metadata uses ink-secondary (#757570).

Typography: Section-display for titles on expanded views; label or body-small for compact grid views.

Shape and border: 1rem border radius. No border. Overflow hidden on image.

Spacing: Internal padding of 0.75rem to 1rem below the image for text. External gutter of 1rem between cards.

Composition: Image aspect ratio preserved from source. Text truncated with ellipsis after two lines.

Variants: Standard pin, video pin (with duration badge), sponsored pin (with labeled indicator), product pin (with pricing overlay).

### Search bar

Anatomy: Pill-shaped input field with search icon prefix, placeholder text, and optional clear or voice input suffix.

Surface and text color: surface-muted background (#E5E5E0) with ink text. Placeholder uses ink-secondary.

Typography: body token for input text.

Shape and border: Full pill rounding (9999px). No visible border.

Spacing: Horizontal padding of 1rem, vertical padding of 0.75rem. Height approximately 3rem.

Composition: Flex row with centered vertical alignment. Icon and text maintain 0.5rem gap.

### Primary button

Anatomy: Solid filled button with centered text, optionally with icon prefix.

Surface and text color: action background (#097239) with white text (#FFFFFF) for success-oriented contexts; red for Save actions in feed contexts.

Typography: label-medium token.

Shape and border: 0.75rem border radius. No border.

Spacing: Horizontal padding of 1rem, vertical padding of 0.5rem to 0.75rem.

Variants: Save button (red, prominent), Follow button (may use black or red depending on context), Submit button in modals.

### Modal dialog

Anatomy: Centered card with title, body text, and action button row. Backdrop scrim darkens underlying content.

Surface and text color: surface background (#FFFFFF) with ink headings and body text.

Typography: hero-display for title, body for description, label-medium for buttons.

Shape and border: 1.25rem border radius. Shadow: 0 4px 24px rgba(0,0,0,0.15).

Spacing: Internal padding of 1.5rem to 2rem. Button row with 0.75rem gap between actions.

Composition: Title centered or left-aligned depending on content. Buttons right-aligned or centered for single actions.

### Metric card

Anatomy: Bordered panel containing a label, large value, and optional change indicator with directional arrow.

Surface and text color: surface background with border (#C8C8C1). Positive changes use action green (#097239).

Typography: label for metric name, section-display or hero-display for value, body-small for change percentage.

Shape and border: 1.25rem border radius. 1px solid border.

Spacing: Internal padding of 1.5rem. External margin between cards of 1rem.

Composition: Value and change indicator on same row, right-aligned. Label above.

### Topic chip

Anatomy: Horizontal scrollable row of rounded cards, each with thumbnail image and text label.

Surface and text color: Variable background tints (gray, pink, beige) with ink text.

Typography: label or body-small for description text.

Shape and border: 1rem border radius on container. Thumbnail uses same rounding or circular crop.

Spacing: Internal padding of 0.75rem. Gap between chips of 0.75rem.

Composition: Thumbnail left, text right in horizontal arrangement. Entire chip is interactive.

### Navigation rail

Anatomy: Vertical stack of icon-button pairs, fixed to left viewport edge.

Surface and text color: Transparent or canvas background. Icons and labels in ink-secondary, active state in ink.

Typography: navigation token for labels.

Shape and border: No rounding on rail itself. Individual items may have invisible touch targets.

Spacing: Items stacked with 1.5rem vertical gap. Icon size approximately 1.5rem with 0.25rem gap to label.

Composition: Icon above label, centered in each item's horizontal space. Rail width approximately 4.5rem.

## Responsive behavior

The left navigation rail collapses to a bottom bar on narrower viewports, maintaining the same icon set but shifting to a horizontal arrangement. This preserves thumb reachability and maximizes vertical space for content scrolling.

Pin grids reduce column count as viewport narrows, transitioning from five or six columns on wide desktop to two columns on mobile. Gutter width compresses proportionally, though card internal spacing remains constant.

Modals may transition to bottom sheets on mobile, anchoring to the viewport bottom and allowing swipe-to-dismiss. This follows platform conventions and prevents modal content from feeling cramped.

Search behavior shifts from persistent header bar to a tappable search icon that expands inline or navigates to a dedicated search view, depending on implementation complexity.

Topic chip carousels maintain horizontal scrolling across all breakpoints, with touch-based momentum scrolling essential on mobile.

## Practical implementation guidance

### Preserve
- The warm neutral palette with true black canvas; this framing is essential to Pinterest's content-forward identity
- Consistent rounding scale: pills for inputs and avatars, 1rem for cards, 1.25rem for panels
- Pin Sans Mac Os at all sizes; the typeface's geometric clarity is central to the system's readability
- High image-to-chrome ratio; never add decorative borders or frames around user content
- Red accent restraint for Save actions; limit to primary actions and brand moments only

### Avoid
- Pure white page backgrounds; the warm off-white (#FBFBF9) prevents harsh contrast in non-feed contexts
- Sharp corners on interactive elements; they conflict with the platform's soft visual character
- Multiple type families; the single-family system is intentional and should not be diluted
- Heavy shadows on cards; the flat layering is part of the modern aesthetic
- Centered text in dense reading contexts; left alignment supports the scanning behavior of feed users

### Recommended build order
1. Establish the color tokens and apply canvas/surface hierarchy to page backgrounds
2. Implement Pin Sans Mac Os with the full type scale, ensuring 0.75rem labels render crisply
3. Build the pin card component with image handling, text truncation, and rounding
4. Create the grid system with responsive column logic and masonry height handling
5. Add navigation rail with active state indicators and collapse behavior
6. Implement search bar and topic chip carousel with horizontal scroll
7. Layer in modals, buttons, and form elements with consistent spacing
8. Add business-specific components: metric cards, data tables, resource panels

### Accessibility
- Ensure all images have descriptive alt text or are marked decorative appropriately
- Maintain minimum 4.5:1 contrast ratio for body text; the ink (#211922) on surface (#FFFFFF) exceeds this
- Red action buttons should not be the sole color indicator for state; pair with icon or text changes
- Support keyboard navigation through the left rail and modal focus trapping
- Respect reduced-motion preferences for any scroll-triggered or hover animations
- Touch targets should be minimum 44×44 points on mobile, particularly for small navigation icons

## Scope note

This guide covers the desktop feed, pin detail, business analytics, and business hub surfaces visible in the supplied images. Mobile layouts, dark mode, animation specifications, and complex interactive states like drag-and-drop board organization are not represented. The rounded corners and spacing values reflect the current design system; older legacy pages may use sharper corners and different spacing. The exact hex values for the red Save button accent and link blue are not present in the retained interface color data.
