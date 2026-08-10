# How scribd.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/scribd.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with dark photographic banner, centered search bar, and category card grid below](https://pin.fontofweb.com/7160?format=jpg)](https://design.withfudge.com/share/pin-7160)

[Homepage hero with dark photographic banner, centered search bar, and category card grid below](https://design.withfudge.com/share/pin-7160)

[![Trial offer page with green primary button, feature checklist, and horizontal timeline explainer](https://pin.fontofweb.com/7164?format=jpg)](https://design.withfudge.com/share/pin-7164)

[Trial offer page with green primary button, feature checklist, and horizontal timeline explainer](https://design.withfudge.com/share/pin-7164)

[![Payment options page with card form in rounded panel, payment method tabs, and order summary sidebar](https://pin.fontofweb.com/7165?format=jpg)](https://design.withfudge.com/share/pin-7165)

[Payment options page with card form in rounded panel, payment method tabs, and order summary sidebar](https://design.withfudge.com/share/pin-7165)

## Overview

Scribd's design system balances editorial warmth with conversion-focused clarity. The homepage opens with a dramatic dark hero section featuring classical library photography, creating an authoritative, knowledge-rich atmosphere. This dark mode introduction contrasts sharply with the light, airy content sections that follow, using warm off-white backgrounds and generous whitespace to keep the reading experience comfortable.

The system employs two type families: a custom sans-serif for all interface and display text, and Source Sans Pro for supplementary body content. Rounded corners appear throughout—generous 24px radii on cards and panels, smaller 6px radii on buttons and inputs—softening the overall geometry without feeling playful. A single green accent color anchors all primary actions, appearing on trial buttons, download prompts, and key conversion points. The layout philosophy centers content with ample breathing room, using contained panels for transactional flows while letting editorial content extend to comfortable reading widths.

## Colors

| token | value | use |
|---|---|---|
| canvas | `#000000` | Hero banner backgrounds, dark sections |
| canvas-ink | `#000514` | Deep dark variant for text on black |
| surface | `#FAF9F5` | Main page background, warm off-white |
| surface-raised | `#FFFFFF` | Cards, panels, input fields, elevated surfaces |
| ink | `#16171B` | Primary headings, body text on light backgrounds |
| ink-secondary | `#282828` | Secondary headings, emphasized body text |
| ink-tertiary | `#424242` | Tertiary text, captions, meta information |
| muted | `#63605B` | Descriptions, helper text, disabled states |
| border | `#CCCCCC` | Default borders, dividers, input outlines |
| border-subtle | `#D3D2D0` | Card borders, light separators |
| border-light | `#EDEDED` | Very subtle dividers, timeline tracks |
| action | `#098647` | Primary buttons, trial CTAs, success states |
| action-text | `#FFFFFF` | Text on green buttons |
| accent-warm | `#201C14` | Warm dark accent for special sections |
| accent-cool | `#303140` | Cool dark accent for navigation elements |
| text-inverse | `#FFFFFE` | White text on dark backgrounds |

The color architecture operates in two modes: dark and light. Dark mode dominates the hero and immersive sections, using pure black with near-white text. Light mode covers the majority of the experience with warm `#FAF9F5` as the foundation, avoiding sterile pure white for the main canvas. The green action color is reserved exclusively for conversion moments—trial starts, downloads, and primary commitments—making it highly meaningful when it appears. Neutral grays handle all non-action UI: borders, secondary text, and structural elements. No gradients are used in the interface; color transitions happen through photography or solid background changes.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Scribd Ja Sn | 3.25rem | 700 | 1.3 | normal | Homepage hero headline |
| section-display | Scribd Ja Sn | 2.875rem | 700 | 1.3 | normal | Section headlines, trial pages |
| subhead-large | Scribd Ja Sn | 2.25rem | 700 | 1.3 | normal | Large subheads, pricing |
| subhead-medium | Scribd Ja Sn | 1.25rem | 600 | 1.3 | normal | Card titles, timeline labels |
| body-large | Scribd Ja Sn | 1.125rem | 400 | 1.4 | normal | Hero descriptions, lead paragraphs |
| body | Scribd Ja Sn | 1rem | 400 | 1.5 | normal | Default body text, navigation |
| body-small | Scribd Ja Sn | 0.875rem | 400 | 1.5 | normal | Captions, meta, fine print |
| label | Scribd Ja Sn | 0.75rem | 400 | 1.5 | normal | Legal copy, timestamps |
| navigation | Scribd Ja Sn | 1rem | 600 | 1.5 | normal | Top nav, category labels |
| button-primary | Scribd Ja Sn | 1rem | 600 | 1.5 | normal | All button text |

Scribd Ja Sn, designed by Arve Båtevik of Baat As Skriftkompani, serves as the exclusive typeface for all interface, display, and body text. It renders in three weights: Regular (400), Medium (600), and Bold (700). Source Sans Pro by Paul D Hunt of Adobe appears in limited supporting roles for specific content areas. The type scale is built on a 2px relative unit, with sizes snapping to clean multiples: 12px, 14px, 16px, 18px, 20px, 36px, 41px, 46px, and 52px. Display sizes use tight 1.3 line height while body text relaxes to 1.5 for readability. No italic styles are employed in the visible interface. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with distinct zone treatments. The homepage hero occupies full viewport width with a dark photographic background, centering its search interface and headline over the imagery. Below, content sections use a max-width container with generous horizontal padding—24px on mobile, expanding to comfortable reading widths on desktop.

The grid system for category cards uses a horizontal scroll on narrower viewports, with four cards visible in the desktop viewport. Each card maintains consistent internal padding of 24px with a fixed aspect ratio that accommodates a title, category count, and thumbnail image at the bottom.

Transactional pages like checkout and payment options split into asymmetric two-column layouts. The primary action panel—containing forms, trial details, or payment options—occupies roughly 55% of the width, while the summary or explanation sidebar takes the remaining 45%. This sidebar contains pricing, terms, and timeline information with its own internal padding of 24px.

Vertical rhythm uses a base 8px grid with section spacing at 120px (7.5rem) for major breaks between content zones. Component internal spacing ranges from 12px for tight button groups to 48px for panel margins. The header navigation remains fixed or sticky, containing the logo, search field, utility links, and primary CTA button.

## Visual language

Photography plays a central role in establishing Scribd's intellectual, authoritative tone. Hero imagery features classical subjects—library interiors, busts, leather-bound books—rendered in desaturated, moody color grading that harmonizes with the dark background. Category cards use smaller thumbnail images with warmer, more accessible subjects that hint at content without dominating.

The corner radius language creates clear hierarchy: 24px for major containers and cards, 20px for medium panels, 6px for interactive elements like buttons and inputs. This stepped approach makes containers feel furniture-like while keeping controls precise. Borders are uniformly 1px solid lines in subtle grays, never heavy or colored except for active states.

Shadow usage is minimal and functional. The homepage search bar floats above the hero with a subtle shadow, and category cards may lift slightly on interaction. No heavy drop shadows or layered elevation system is visible. The overall impression is flat but tactile, relying on color contrast and spacing rather than dimensional effects to create hierarchy.

Iconography appears sparingly: checkmarks for feature lists, payment brand logos, and simple arrows for navigation. The visual system prioritizes text clarity over decorative elements.

## Components

### Hero banner

The hero banner spans full viewport width with a dark photographic background. A large centered headline in white uses the hero-display size, followed by a body-large description. The search bar sits below as a raised white panel with rounded corners, containing placeholder text and a dark search button. The Scribd logo appears both in the navigation and overlaid on the hero image itself.

### Search bar

A white rectangular panel with 6px border radius and subtle shadow. Contains left-aligned placeholder text in muted color and a dark search button with white text and icon on the right. Padding is 16px vertical, 24px horizontal. The button uses the secondary-button treatment with dark background.

### Category card

A tall rectangular card with 24px border radius, warm off-white background, and 1px subtle border. Internal padding of 24px. Title in subhead-medium weight sits at top, followed by category count in body-small. A thumbnail image occupies the bottom portion. A "View all" link with right arrow appears above the image. Cards arrange horizontally with consistent gap spacing, scrolling on overflow.

### Trial card

A centered panel with 20px border radius, white background, and light border. Contains a headline in subhead-large, pricing in body-large, and a prominent green primary button spanning full width. Below, a feature list with checkmark icons and body text. Padding is generous at 40px. The "Cancel anytime" reassurance appears as body-small centered text below the button.

### Primary button

Full-width or auto-width button with green action background, white text, and 6px border radius. Padding of 12px vertical, 24px horizontal for large CTAs; 8px vertical, 16px horizontal for compact variants. Typography uses button-primary token. No border, flat appearance.

### Secondary button

White or transparent background with dark text, optional 1px border in default gray. Same 6px border radius. Used for search actions, alternate options, and navigation elements.

### Payment method tabs

Horizontal row of selectable containers with 6px border radius, white background, and 1px border. Active state shows a darker border or background distinction. Each tab contains an icon and label, with generous padding of 16px. Used for Card, PayPal, and other payment options.

### Form inputs

White background, 1px border in default gray, 6px border radius. Label text in body size sits above. Internal padding of 12px. Focus states should use a clearly visible outline. Helper text and validation appears below in body-small.

### Timeline explainer

Horizontal track with nodes at key points. Track line in light gray, active segments in dark ink. Circular nodes contain icons or are filled dots. Labels above in subhead-medium, descriptions below in body-small. Used for trial period explanation showing Today, Day 14, and Day 30 milestones.

### Navigation header

Fixed top bar with white background, containing logo left, search field center, and utility links right. Category navigation sits below as a secondary row with dropdown indicators. Primary CTA button in green appears at far right.

## Responsive behavior

The system shows clear adaptation patterns across viewport sizes. The homepage hero maintains centered alignment with headline scaling down from 52px to 41px. Search bar remains prominent but may stack elements vertically on narrow screens. Category cards transition from a four-column grid to horizontal scroll with partial card visibility, ensuring touch-friendly browsing.

Transactional pages restructure from two-column to single-column, with the summary or sidebar moving below the primary action panel. Form inputs expand to full width with comfortable touch targets at 48px minimum height. Typography scales down proportionally: section-display reduces from 46px to 36px, body text maintains 16px minimum for readability.

The navigation collapses to a hamburger menu on mobile, with search becoming an icon-triggered overlay. Category dropdowns become full-screen drawers. Green primary buttons maintain full-width behavior on mobile for easy thumb reach.

## Practical implementation guidance

### Preserve
- The warm off-white `#FAF9F5` as the default canvas; pure white only for raised surfaces
- Generous 24px border radius on cards and panels; reserve 6px for interactive controls
- The single green accent for all primary conversion actions
- High-contrast dark hero sections with classical, desaturated photography
- Scribd Ja Sn for all interface text; maintain the 400/600/700 weight distinctions

### Avoid
- Using green for non-action elements like decorative icons or passive status
- Heavy shadows or dimensional effects; keep the flat, editorial aesthetic
- Pure black text on pure white backgrounds; use the warm ink and surface colors
- Multiple button styles competing for attention on the same screen
- Tight spacing below 12px between related elements

### Recommended build order
1. Establish the color tokens and type scale with Scribd Ja Sn loaded
2. Build the hero banner with dark background and centered search component
3. Implement card components with correct border radius and internal spacing
4. Create button variants with proper padding and color states
5. Add form elements for transactional flows
6. Assemble checkout and trial page layouts with asymmetric two-column structure
7. Implement responsive breakpoints for card scrolling and column stacking

### Accessibility
- Ensure white text on dark hero backgrounds meets WCAG AAA contrast ratios
- Maintain 48px minimum touch targets for all interactive elements on mobile
- Provide visible focus states with sufficient color contrast for keyboard navigation
- Include aria-labels on icon-only buttons like search and navigation toggles
- Respect reduced-motion preferences for any scroll-triggered animations
- Use semantic heading hierarchy: h1 for hero, h2 for sections, h3 for cards

## Scope note

This guide covers the homepage, checkout flow, and payment options pages as visible in the supplied images. Mobile breakpoints, hover states, loading skeletons, error pages, and the full document reader interface are not represented. The document upload experience, user library, and account settings were not captured. Measurements reflect the desktop viewport widths shown in the source images.
