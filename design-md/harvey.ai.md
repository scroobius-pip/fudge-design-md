# How harvey.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/harvey.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Blog landing page with light warm-gray background, featuring a large editorial card with portrait photography and serif headline, plus an Innovation Spotlight section below.](https://pin.fontofweb.com/8744?format=jpg)](https://design.withfudge.com/share/pin-8744)

[Blog landing page with light warm-gray background, featuring a large editorial card with portrait photography and serif headline, plus an Innovation Spotlight section below.](https://design.withfudge.com/share/pin-8744)

[![Dark homepage section showing Solutions navigation with customer logos card, followed by a full-bleed photography band with trust message and Request a Demo button.](https://pin.fontofweb.com/8743?format=jpg)](https://design.withfudge.com/share/pin-8743)

[Dark homepage section showing Solutions navigation with customer logos card, followed by a full-bleed photography band with trust message and Request a Demo button.](https://design.withfudge.com/share/pin-8743)

[![Footer on near-black background with serif CTA headline, multi-column navigation links, and a large H mark logo in the corner.](https://pin.fontofweb.com/8742?format=jpg)](https://design.withfudge.com/share/pin-8742)

[Footer on near-black background with serif CTA headline, multi-column navigation links, and a large H mark logo in the corner.](https://design.withfudge.com/share/pin-8742)

[![Enterprise security section with dark background, compliance certification icons in a four-column grid, and a bordered outline button for More About Security.](https://pin.fontofweb.com/8741?format=jpg)](https://design.withfudge.com/share/pin-8741)

[Enterprise security section with dark background, compliance certification icons in a four-column grid, and a bordered outline button for More About Security.](https://design.withfudge.com/share/pin-8741)

## Overview

Harvey's design system conveys institutional confidence through restraint and contrast. The visual language alternates between warm near-black surfaces and soft light backgrounds, using typography as the primary differentiator rather than color alone. Harvey Serif provides editorial authority for headlines and display moments, while Harvey Sans Diatype delivers crisp, readable utility for navigation, body copy, and interface labels. The result is a system that feels simultaneously modern and established—appropriate for a platform serving the legal profession.

The design employs two dominant modes: a dark mode used for the homepage hero, product sections, and footer, and a light mode for editorial content like the blog. Both modes share the same typographic scale and spacing logic, ensuring consistency across contexts. Photography is treated with warmth and naturalism, often showing professionals in candid moments rather than staged corporate imagery.

## Colors

The palette is intentionally narrow, relying on temperature and value contrast rather than hue variation. Dark surfaces use a warm near-black that avoids the harshness of pure black, while light surfaces employ a soft warm white and muted gray for depth.

| token | value | use |
|---|---|---|
| ink | #0F0E0D | Primary dark background, footer, deep sections |
| ink-deep | #000000 | Pure black for maximum contrast moments |
| surface | #FAFAF9 | Primary light background, blog pages, cards |
| surface-warm | #CCCAC6 | Editorial card backgrounds, subtle elevation |
| muted | #706D66 | Secondary text on dark backgrounds, captions |
| muted-light | #8F8B85 | Tertiary text, disabled states, metadata |
| text-primary | #33312C | Body text on light backgrounds |
| text-inverse | #FFFFFF | Text on dark backgrounds, primary buttons |
| action | #4D4B46 | Interactive elements, hover states |
| border-subtle | #33312C | Hairline borders on dark surfaces |

Dark sections use ink as the dominant background with text-inverse for primary content and muted for secondary information. Light sections invert this relationship, using surface as the canvas with text-primary for reading content. The surface-warm tone appears selectively for editorial cards and featured content blocks, creating gentle elevation without shadows. No gradients or drop shadows appear in the visible interface; depth is achieved through value contrast and spacing alone.

## Typography

Harvey employs two complementary families: a variable sans-serif for interface and body text, and a refined serif for display and editorial moments. The scale is built on a 2px relative unit, with sizes snapping to even multiples for consistency.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Harvey Serif | 5rem | 400 | 1.05 | -0.0125em | Homepage hero headlines, major section titles |
| section-display | Harvey Serif | 2.25rem | 400 | 1.1 | -0.01em | Section headers, CTA headlines, blog titles |
| body-large | Harvey Sans Diatype | 1.25rem | 400 | 1.3 | normal | Lead paragraphs, feature descriptions |
| body | Harvey Sans Diatype | 1rem | 400 | 1.5 | normal | Standard paragraphs, UI copy |
| label | Harvey Sans Diatype | 0.875rem | 500 | 1.25 | normal | Buttons, tags, metadata labels |
| navigation | Harvey Sans Diatype | 0.875rem | 500 | 1.43 | normal | Primary nav, dropdown items, footer columns |
| legal-copy | Harvey Sans Diatype | 0.875rem | 400 | 1.3 | normal | Copyright, disclaimers, fine print |

Harvey Serif appears at 80px (5rem) for the homepage hero, 56px (3.5rem) for secondary display moments, 36px (2.25rem) for section headers, and 32px (2rem) for the footer CTA. Harvey Sans Diatype operates at 16px (1rem) for body and navigation, 20px (1.25rem) for lead text, and 14px (0.875rem) for labels and secondary navigation. Weight distinctions are minimal: Regular (400) for body and display, Medium (500) for labels, navigation, and emphasized UI elements.

Harvey Sans Diatype was designed by Johannes Breyer, Fabian Harb, Elias Hanzer, Renan Rosatti, and Erkin Karamemet of Dinamo. Harvey Serif was designed by Nolan Paparelli of Typeweltkern. Verify licensing for these families before production use.

## Layout

The layout system is built on generous horizontal padding and substantial vertical rhythm. Content is constrained to a centered container with asymmetric internal spacing that favors left-aligned text blocks over centered compositions.

Horizontal padding uses 36px (2.25rem) as the standard gutter for both header and main content regions. The navigation bar maintains this padding while distributing links across the full width. Main content sections employ the same 36px padding, creating consistent alignment from header through footer.

Vertical spacing operates at multiple scales. Section breaks use 72px (4.5rem) to create clear territorial separation between content areas. Internal component spacing uses 18px (1.125rem) for related elements and 36px (2.25rem) for distinct blocks within a section. The footer CTA employs a dramatic 144px (9rem) bottom margin on its headline, demonstrating how extreme vertical space can signal section importance.

The grid is implicitly asymmetric. On the blog page, editorial cards split into a two-column arrangement with photography occupying roughly 55% and text 45%. The homepage solutions section places navigation links in a narrow left column while featured content occupies the wider right space. This asymmetry creates visual interest without requiring complex grid declarations.

## Visual language

Photography treatment emphasizes natural light, candid professionalism, and warm color temperature. Subjects appear in authentic work environments rather than isolated against seamless backgrounds. The image palette tends toward muted earth tones—soft grays, warm beiges, and desaturated blues—that harmonize with the interface colors rather than competing for attention.

Iconography is minimal and functional. Security certifications use simple line-art badges in muted tones against dark backgrounds. Navigation dropdowns employ small chevrons for expand/collapse indication. The Harvey wordmark uses Harvey Serif in the header, while a large standalone H mark anchors the footer.

The static interface suggests a preference for understated transitions—color shifts on links, subtle background changes on buttons—rather than dramatic animations. The overall impression is of a system that values stability and predictability, appropriate for its professional audience.

## Components

### Navigation bar

The navigation bar spans the full viewport width with 36px horizontal padding. On light backgrounds, the Harvey wordmark appears in dark text alongside primary nav links in text-primary. On dark backgrounds, all elements invert to text-inverse. The right side clusters secondary actions: a Login text link and a Request a Demo button with filled surface background and ink text.

- Anatomy: Wordmark left, primary nav center-left, secondary actions right
- Surface: Transparent, adapting to parent background
- Typography: navigation token for links, label token for the demo button
- Spacing: 36px horizontal padding, 16px between nav items
- Variants: Light mode (dark text on light ground), dark mode (light text on dark ground)

### Editorial card

Featured on the blog landing page, this component pairs photography with serif typography in a warm gray container. The card uses a two-column layout with rounded corners and internal padding.

- Anatomy: Photography left, category label above, serif headline, body text, and attribution right
- Surface: surface-warm background, no border
- Typography: label for category, section-display for headline, body for description
- Shape: 8px (0.5rem) border radius
- Spacing: Generous internal padding creating breathing room around content

### Solutions menu

A dark-mode navigation overlay showing product categories with descriptive text. Each category pairs a bold label with a concise value proposition.

- Anatomy: Stacked list of category labels with descriptions, featured content card to the right
- Surface: ink background
- Typography: label for category names, body for descriptions
- Composition: Narrow left column for navigation, wider right column for featured case study or customer logos

### Security compliance grid

Four-column layout displaying certification badges with labels and detail links. Each item centers an icon above text on a dark background.

- Anatomy: Icon, certification name, and "Details" link with arrow
- Surface: ink background, icons in muted tone
- Typography: body for certification names, legal-copy for detail links
- Composition: Equal-width columns, generous vertical space between icon and text

### Footer

The footer combines a strong CTA headline with multi-column navigation and legal information. A large H mark occupies the bottom left as a brand anchor.

- Anatomy: Serif CTA headline top, five-column link grid below, copyright and privacy bottom left
- Surface: ink background throughout
- Typography: section-display for CTA, navigation for column headers, body for links
- Spacing: 72px top padding, horizontal rule separating CTA from navigation

### Buttons

Two variants are visible: a filled primary with surface background and ink text, and an outlined secondary with transparent background, text-inverse text, and a 1px text-inverse border.

- Anatomy: Text label with optional icon
- Surface: surface for primary, transparent for secondary
- Typography: label token
- Shape: 4px (0.25rem) border radius
- Spacing: 14px vertical, 28px horizontal padding for primary; similar proportions for secondary

## Responsive behavior

The design implies a desktop-first approach with substantial fixed-width elements. The navigation bar, content containers, and card layouts all assume adequate horizontal space. At narrower viewports, the two-column editorial card should stack vertically, with photography preceding text. The solutions menu would likely collapse to an accordion or full-screen overlay on mobile.

The security compliance grid should reflow to two columns on tablet and single column on mobile, maintaining centered alignment for each item. Footer navigation columns should stack vertically, preserving the H mark and copyright at the bottom.

Typography should scale down proportionally: hero-display reducing to 3rem on tablet and 2.5rem on mobile, section-display to 1.75rem. Line heights can tighten slightly at smaller sizes to maintain vertical rhythm.

## Practical implementation guidance

### Preserve
- The warm temperature of dark backgrounds; avoid pure black (#000000) except in specific high-contrast moments
- The serif/sans pairing; Harvey Serif for display, Harvey Sans Diatype for everything else
- Generous vertical spacing; the 72px section break and 144px dramatic margins are intentional
- The asymmetric two-column layouts in editorial cards and feature sections
- Minimal color usage; let typography and spacing carry the design

### Avoid
- Adding saturated accent colors; the palette succeeds through restraint
- Centering long text blocks; the system prefers left-aligned reading
- Heavy shadows or gradients for elevation; use value contrast and spacing instead
- Reducing horizontal padding below 36px; the generous gutters are part of the premium feel
- Using Harvey Serif at small sizes; it is optimized for display, not body text

### Recommended build order
1. Establish the color tokens and apply dark/light mode contexts
2. Implement the typography scale with both families at their designated sizes
3. Build the navigation bar with light and dark variants
4. Create the editorial card component with proper two-column behavior
5. Develop the footer with multi-column navigation and CTA headline
6. Add button variants and refine interactive states
7. Implement the security compliance grid with responsive reflow

### Accessibility
- Ensure text-inverse on ink backgrounds meets WCAG AAA contrast ratios; the near-black provides sufficient depth
- Maintain focus indicators on all interactive elements; the minimal visual language requires clear keyboard navigation
- Use semantic heading hierarchy: h1 for hero headlines, h2 for sections, h3 for card titles
- Provide alt text for all photography, describing the professional context rather than generic labels
- Ensure dropdown menus are operable via keyboard and screen reader

## Scope note

This guide covers the Harvey homepage and blog landing page as visible in the supplied images. Interior pages, mobile breakpoints, form interactions, loading states, and motion specifications are not included. The spacing and sizing values reflect the exact measurements from the desktop interface.
