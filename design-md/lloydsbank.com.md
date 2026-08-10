# How lloydsbank.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lloydsbank.com-design)

Last updated: 2026-08-10

## Captured pages

[![Business banking page showing green promotional card, article grid, and video thumbnail with play button overlay](https://pin.fontofweb.com/8963?format=jpg)](https://design.withfudge.com/share/pin-8963)

[Business banking page showing green promotional card, article grid, and video thumbnail with play button overlay](https://design.withfudge.com/share/pin-8963)

[![Sector cards with photography overlays and plus icons above dark specialist resources banner with telescope illustration](https://pin.fontofweb.com/8962?format=jpg)](https://design.withfudge.com/share/pin-8962)

[Sector cards with photography overlays and plus icons above dark specialist resources banner with telescope illustration](https://design.withfudge.com/share/pin-8962)

[![Six white product cards on mint green background with black action buttons and green promotional banner with horse logo](https://pin.fontofweb.com/8961?format=jpg)](https://design.withfudge.com/share/pin-8961)

[Six white product cards on mint green background with black action buttons and green promotional banner with horse logo](https://design.withfudge.com/share/pin-8961)

[![Personal banking homepage with expanded mega menu showing borrowing categories and Lloyds Ultra Credit Card promotion](https://pin.fontofweb.com/8960?format=jpg)](https://design.withfudge.com/share/pin-8960)

[Personal banking homepage with expanded mega menu showing borrowing categories and Lloyds Ultra Credit Card promotion](https://design.withfudge.com/share/pin-8960)

## Overview

Lloyds Bank's digital presence combines established financial credibility with a fresh, modern sensibility. The system centers on a vibrant green brand color that signals growth and trust, paired with stark black-and-white typography and surfaces. GT Ultra and GT Ultra Median from Grilli Type provide a distinctive typographic voice—friendly yet authoritative, with the Median variant offering slightly more characterful display forms for headlines. The layout relies on generous rounded cards that soften the banking experience, creating approachable containers for products, articles, and sector-specific content. Photography feels authentic and human, showing real business owners and professionals in their environments rather than staged stock imagery. The overall impression is one of clarity and confidence: information is well-structured, actions are clearly signaled through color and weight, and the visual rhythm alternates between calm white space and energetic green moments.

## Colors

The palette is intentionally constrained, deriving its energy from a single vibrant green against a neutral black-and-white foundation. This creates strong accessibility and instant brand recognition.

| token | value | use |
|---|---|---|
| action | #11B67A | Primary brand green for headers, promotional banners, key CTAs, and interactive highlights |
| ink | #000000 | Primary text, borders, primary button fills, and strong graphic elements |
| muted-ink | #323233 | Secondary headings and subtle text hierarchy |
| subtle-ink | #757575 | Tertiary text, captions, and disabled states |
| canvas | #F1F1F1 | Page background for content sections, creating separation from white cards |
| surface | #FFFFFF | Card backgrounds, modal surfaces, and content containers |
| surface-mint | #C7FFC6 | Light green tint for product grid backgrounds, creating a fresh atmosphere |
| border | #000000 | 2px solid borders for secondary buttons and navigation items |

The green action color dominates the top navigation bar and promotional surfaces, appearing in solid fills rather than as accents. Black serves as the primary text and button color, creating maximum contrast against both white and green backgrounds. White cards float on either the light gray canvas or the mint green surface-mint, establishing clear material layers. The system does not use gradients or shadows for elevation; depth comes from color contrast and rounded container shapes alone.

## Typography

The type system uses two related families from Grilli Type: GT Ultra for body text, labels, and navigation, and GT Ultra Median for display headings. Both were designed by Noël Leu and are available from Grilli Type Ag. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | GT Ultra Median | 3rem | 700 | 1.08 | normal | Page hero headlines, major campaign titles |
| section-display | GT Ultra Median | 2.5rem | 700 | 1.2 | normal | Section headings, major feature titles |
| heading-large | GT Ultra Median | 2rem | 400 | 1.125 | normal | Card titles, article headlines, promotional banners |
| heading-medium | GT Ultra Median | 1.5rem | 400 | 1.125 | normal | Sub-section headings, smaller card titles |
| body-large | GT Ultra | 1.125rem | 400 | 1.33 | normal | Lead paragraphs, descriptions, navigation items |
| body | GT Ultra | 1rem | 400 | 1.25 | normal | Standard body text, UI labels, form inputs |
| body-small | GT Ultra | 0.875rem | 400 | 1.25 | normal | Captions, metadata, fine print |
| label | GT Ultra | 1rem | 700 | 1.33 | normal | Button text, emphasized links, category tags |
| navigation | GT Ultra | 1.125rem | 400 | 1.33 | normal | Primary navigation, mega menu links |

GT Ultra Median carries display headings with slightly more characterful proportions than a neutral sans, giving the bank a distinctive voice without sacrificing clarity. Weights are used sparingly: Regular (400) for most text, Bold (700) reserved for display headlines and emphasized labels. Line heights are tight for headings, creating compact vertical stacks, while body text receives more generous leading for readability. No italic styles are employed in the visible system.

## Layout

The layout follows a centered container model with generous horizontal margins and clear vertical rhythm. Content sections alternate between full-bleed colored backgrounds and contained white or gray areas.

The page structure begins with a fixed top bar containing audience navigation (Personal, Business, Private Banking, International Banking) on a black background. Below this, the main navigation bar uses the action green with the Lloyds horse logo, menu trigger, search field, and login. This two-tier header creates clear wayfinding hierarchy.

Content sections use a maximum content width with centered alignment, creating comfortable reading measure. The hero and promotional areas often break into asymmetric layouts: a large green card paired with a photographic card, or a video thumbnail with play button overlay. Below this, grids of equal-width cards create predictable browsing patterns.

Spacing follows a clear hierarchy: 1.5rem within cards, 2.5rem between related elements, and 5rem to 6rem between major sections. The product grid uses a mint green background with white cards arranged in three columns, each card containing an illustration, title, description, and full-width black button. Sector cards use a four-column layout with photography filling the entire card and white text overlaid at the top.

The mega menu expands to full viewport width, with a left sidebar showing category navigation and a right panel displaying detailed links organized by subcategory. A promotional card can appear in the rightmost column of the mega menu, maintaining the card-based language at every level.

## Visual language

The visual language balances institutional trust with contemporary approachability. Photography is central to the experience, showing diverse people in authentic work environments—shops, factories, professional offices, construction sites. Images are treated with natural color rather than heavy filters, though sector cards use a subtle dark gradient at the bottom to ensure text legibility.

Illustrations appear as simple, flat vector graphics with the same green and black palette: a telescope for specialist resources, coins and cards for financial products, an open sign for business accounts. These illustrations are playful but restrained, avoiding the overly friendly aesthetic of fintech startups while still feeling modern.

Rounded corners are a defining feature: 1rem on cards and containers, 0.75rem on buttons. This consistent rounding softens the rectangular grid without becoming overly playful. The Lloyds horse logo appears in black on green backgrounds, maintaining brand heritage within the contemporary system.

Iconography is minimal and functional: plus icons on sector cards indicate expandable content, play buttons on video thumbnails use a simple circle with triangle. The search field uses a microphone icon for voice search, suggesting modern convenience.

## Components

### Primary button

- **Anatomy**: Text label centered within a rounded pill shape
- **Surface**: Solid black background with white text
- **Typography**: `{typography.label}` — GT Ultra, 1rem, Bold
- **Shape**: 0.75rem border radius, full pill appearance
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Full-width within cards, auto-width in navigation contexts
- **Variants**: Green background variant for promotional contexts; white text on green maintains the same weight and proportions

### Secondary button

- **Anatomy**: Text label within a rounded pill with visible border
- **Surface**: Transparent background, 2px solid black border, black text
- **Typography**: `{typography.label}`
- **Shape**: 0.75rem border radius
- **Spacing**: Same padding as primary button
- **Composition**: Used for alternative actions, often paired with primary buttons

### Product card

- **Anatomy**: Illustration at top, heading, description paragraph, full-width button at bottom
- **Surface**: White background on mint green section background
- **Typography**: `{typography.heading-large}` for title, `{typography.body-large}` for description, `{typography.label}` for button
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem internal padding, generous gap between cards in grid
- **Composition**: Three-column grid on desktop, equal heights within row

### Sector card

- **Anatomy**: Full-bleed photograph with white heading at top-left, circular plus button at bottom-right
- **Surface**: Photography with subtle dark gradient overlay for text legibility
- **Typography**: `{typography.heading-large}` in white
- **Shape**: 1rem border radius, overflow hidden
- **Spacing**: Tight internal padding, generous gap between cards
- **Composition**: Four-column grid, cards are taller than wide to showcase vertical photography

### Promotional banner

- **Anatomy**: Icon or logo, heading, description, text link with chevron
- **Surface**: Solid action green background with black text
- **Typography**: `{typography.heading-large}` for heading, `{typography.body-large}` for description
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem to 2rem padding
- **Composition**: Horizontal layout with icon left, text center, often spans full content width

### Navigation bar

- **Anatomy**: Audience tabs (black bar), then main bar with logo, menu, search, login
- **Surface**: Action green for main bar, black for audience tabs
- **Typography**: `{typography.navigation}` for menu items, `{typography.body}` for utility text
- **Shape**: No rounding on bar itself, 0.75rem on search field
- **Spacing**: 0.75rem vertical padding in main bar, generous horizontal margins
- **Composition**: Fixed position, full viewport width

### Mega menu

- **Anatomy**: Left sidebar with category list, center panel with detailed links, optional right promotional card
- **Surface**: White background, black text, subtle separators
- **Typography**: `{typography.heading-medium}` for category titles, `{typography.navigation}` for links
- **Shape**: No rounding on menu container, 1rem on promotional card
- **Spacing**: 1.5rem padding on panels, generous line height for link lists
- **Composition**: Full viewport width overlay, left sidebar fixed width, remaining space divided between links and promotion

## Responsive behavior

The system shows a desktop-first approach with substantial content density. At narrower viewports, the three-column product grid should collapse to two columns and then single column, maintaining card proportions and internal spacing. The four-column sector grid becomes two columns, then stacked single cards with maintained aspect ratio.

The mega menu transforms to an accordion-style mobile navigation, with category headers expanding to show nested links rather than the multi-panel desktop layout. The search field collapses to an icon trigger, expanding on tap.

Navigation bars consolidate: the audience tabs may hide behind a single "Menu" trigger, and the main bar simplifies to logo, hamburger, and essential actions. Touch targets maintain minimum 48px height for accessibility.

Video thumbnails and hero imagery should maintain aspect ratio, with text overlays repositioning below the image at narrow widths rather than remaining overlaid.

## Practical implementation guidance

### Preserve
- The distinctive GT Ultra / GT Ultra Median pairing; the Median variant's characterful display forms are essential to the brand voice
- The 2px solid black border on secondary buttons; this weight is consistent across the system
- The 1rem card radius and 0.75rem button radius; this rounding hierarchy creates visual coherence
- The mint green product grid background; this fresh color differentiates product browsing from content reading
- The black audience navigation bar above the green main bar; this two-tier structure is fundamental to wayfinding

### Avoid
- Adding drop shadows to cards; the system relies on color contrast and rounding alone for elevation
- Using gradients on UI surfaces; photography provides visual interest, interfaces remain flat
- Introducing additional accent colors; the green-black-white triad is intentionally constrained
- Reducing button padding to fit more text; the generous proportions are part of the approachable character
- Using generic sans-serif fallbacks that lose the distinctive character of GT Ultra

### Recommended build order
1. Establish the color tokens and typography scale with licensed font files
2. Build the two-tier navigation with audience tabs and main green bar
3. Create the button system with primary, secondary, and action variants
4. Implement the card component with consistent rounding and padding
5. Build the product grid layout with mint background and three-column responsive behavior
6. Add the sector card with photography overlay and gradient treatment
7. Implement the mega menu with sidebar, link panels, and promotional card slot
8. Polish with promotional banners and illustration integration

### Accessibility
- Ensure the action green (#11B67A) on white, and white on action green, meet WCAG AA contrast requirements; the black-on-green combination in the navigation is strongest
- Provide visible focus indicators on all interactive elements; the 2px border style can extend to focus rings
- Maintain the generous touch targets visible in the interface; navigation items and buttons should remain at least 48px in the smaller dimension
- Use semantic heading hierarchy: h1 for page titles, h2 for sections, h3 for cards
- Ensure the mega menu is keyboard navigable with clear escape and return paths
- Provide alt text for all sector and product illustrations that convey functional meaning

## Scope note

This guide covers the personal and business banking homepage surfaces, including navigation, product grids, sector browsing, and promotional components. Mobile layouts, form interactions, account dashboards, motion behavior, and error states are not represented in the supplied material. The exact spacing values from the source have been consolidated into semantic tokens for practical implementation.
