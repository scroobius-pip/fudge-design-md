# How saaslandingpage.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/saaslandingpage.com-design)

Last updated: 2026-08-10

## Captured pages

[![Claude hero headline with serif type on warm off-white background showing editorial typography style](https://pin.fontofweb.com/8832?format=jpg)](https://design.withfudge.com/share/pin-8832)

[Claude hero headline with serif type on warm off-white background showing editorial typography style](https://design.withfudge.com/share/pin-8832)

[![Claude page cropped hero text demonstrating the bold serif display treatment and generous line spacing](https://pin.fontofweb.com/8831?format=jpg)](https://design.withfudge.com/share/pin-8831)

[Claude page cropped hero text demonstrating the bold serif display treatment and generous line spacing](https://design.withfudge.com/share/pin-8831)

[![Resources page with navigation, hero section, book cards in three-column grid, and article cards with varied imagery](https://pin.fontofweb.com/7309?format=jpg)](https://design.withfudge.com/share/pin-7309)

[Resources page with navigation, hero section, book cards in three-column grid, and article cards with varied imagery](https://design.withfudge.com/share/pin-7309)

## Overview

This design system captures the visual language of a SaaS landing page curation and resource site. The aesthetic balances editorial confidence with functional clarity: large serif-inspired display typography commands attention in hero sections, while a restrained neutral palette and systematic spacing keep the experience feeling organized and trustworthy. The site serves as both a gallery of landing page inspiration and a marketplace for design resources, so the interface must present varied visual content without competing with it. The overall impression is warm and professional rather than coldly corporate, achieved through an off-white background tint and generous whitespace that lets photography and illustration breathe.

## Colors

The palette is intentionally minimal, built around a near-black ink, a muted secondary gray, and warm off-white backgrounds that soften the overall impression.

| token | value | use |
|---|---|---|
| ink | #27272A | Primary text, headings, logo, and strong UI elements |
| muted-ink | #71717A | Secondary text, descriptions, prices, and subtle labels |
| canvas | #FFFFFF | Card surfaces, content backgrounds, and clean separation layers |
| warm-canvas | #FAFAF8 | Page background, hero sections, and header area |

The ink color reads as a very dark charcoal rather than pure black, which reduces harsh contrast against the warm canvas. Muted-ink serves all secondary reading needs, from body copy in hero descriptions to price labels and metadata. The warm-canvas tint appears behind the main content area and in the header, creating a subtle tonal shift that distinguishes the page ground from pure white card surfaces. No accent colors are defined in the interface itself; color interest comes entirely from the photography and illustration within resource cards. This discipline keeps the design system neutral enough to showcase varied visual content without clashing.

## Typography

Two font families drive the typographic hierarchy: Outfit for display and editorial moments, Inter for all functional and body text. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Outfit | 3.75rem | 700 | 1.1 | -0.03em | Page hero headlines, major statements |
| section-display | Outfit | 3rem | 700 | 1.15 | -0.02em | Section titles, resource page headings |
| body-large | Inter | 1.125rem | 400 | 1.75 | 0 | Hero descriptions, introductory paragraphs |
| body | Inter | 1rem | 400 | 1.75 | 0 | General reading text, card descriptions |
| label | Inter | 0.875rem | 500 | 1.5 | 0 | Card titles, category labels, metadata |
| navigation | Inter | 0.875rem | 500 | 1.5 | 0 | Header links, menu items |
| price | Inter | 0.875rem | 400 | 1.5 | 0 | Pricing information, free labels |

Outfit carries the visual personality of the site. At display sizes it delivers a modern serif-like presence with high contrast strokes and confident geometry, appropriate for editorial headlines that need to feel crafted rather than generic. The tight negative tracking at display sizes keeps headlines compact and impactful. Inter handles all utilitarian communication with neutrality and excellent readability. The weight distinction between label at 500 and price at 400 is subtle but meaningful: labels need slightly more presence to scan as titles, while prices read as secondary metadata. Body text uses a generous 1.75 line height for comfortable reading across longer descriptions.

## Layout

The layout follows a centered content model with generous horizontal margins and clear section breaks. The maximum content width is approximately 80rem, within which grids and text blocks are centered. Horizontal page margins scale with viewport size: 5.5rem on larger screens, relaxing to 1.5rem on smaller breakpoints.

The header spans full width with a warm-canvas background, containing a left-aligned logo, centered navigation cluster, and right-aligned search icon. Navigation items are spaced evenly with approximately 3rem between groups.

Below the header, hero sections use centered text alignment with constrained line lengths for readability. The hero display breaks across lines naturally, creating a stacked headline effect that feels editorial rather than rigid.

Content sections follow a consistent vertical rhythm. Section headings align left and introduce grid content below. The resources page shows a three-column card grid with consistent gaps of approximately 1.5rem between cards. Cards themselves are flush to the grid with internal padding of approximately 1.5rem on all sides.

Vertical section spacing is substantial, typically 5rem between major content blocks, allowing each section to feel distinct without heavy divider lines. The overall density is low, prioritizing scannability and visual rest.

## Visual language

The visual character is editorial-meets-product: the confidence of a design publication with the clarity of a modern SaaS interface. Photography and illustration within cards provide all color vibrancy, while the surrounding interface remains neutral and supportive.

Card surfaces are pure white against the warm off-white page ground, creating subtle depth through tonal contrast rather than shadows. No visible drop shadows are used on cards; the design relies on spacing and background separation to define hierarchy.

Imagery within cards is treated as content-first: book covers, course thumbnails, and article illustrations appear at their natural aspect ratios within rounded containers. The 0.5rem corner radius on cards is large enough to feel contemporary without becoming bubbly.

The header includes a promotional banner with a dark background and light text, creating a strong horizontal band that separates from the warm canvas below. This banner uses small centered text with decorative spark icons, establishing a friendly but functional tone.

Search functionality is indicated by a simple magnifying glass icon rather than an expanded input field, keeping the header minimal and focused on navigation.

## Components

### Site header

- **Anatomy**: Promotional banner (full-width, dark background), main header bar with logo left, navigation center, search icon right
- **Surface**: Warm-canvas background for main bar; dark ink for promotional banner
- **Typography**: Navigation links use `{typography.navigation}`; banner text uses small centered text with icon decorations
- **Spacing**: Main bar height approximately 4rem; promotional banner approximately 2.5rem; horizontal padding matches page margins
- **Composition**: Logo and search act as bookends; navigation cluster is visually centered

### Hero section

- **Anatomy**: Centered headline, optional description paragraph, optional call-to-action
- **Surface**: Warm-canvas background
- **Typography**: Headline uses `{typography.hero-display}`; description uses `{typography.body-large}` in muted-ink
- **Spacing**: Generous vertical padding, typically 5rem top and bottom; headline to description gap approximately 1.5rem
- **Composition**: Text is centered with maximum width constraint of approximately 50rem for comfortable reading

### Resource card

- **Anatomy**: Media container (image or illustration), title label, price or metadata label
- **Surface**: White background with 0.5rem corner radius
- **Typography**: Title uses `{typography.label}` in ink; price uses `{typography.price}` in muted-ink
- **Spacing**: Internal padding approximately 1.5rem; gap between media and text approximately 1rem
- **Composition**: Media fills top of card; text sits below aligned to left edge
- **Variants**: Book cards show product photography with price; article cards show illustrative thumbnails with "Free" label

### Section heading

- **Anatomy**: Left-aligned text label, sometimes with descriptive paragraph below
- **Typography**: Heading uses `{typography.section-display}`; optional description uses `{typography.body-large}` in muted-ink
- **Spacing**: Margin below heading approximately 2rem before grid content

### Promotional banner

- **Anatomy**: Full-width horizontal strip with centered text and decorative icons
- **Surface**: Dark background (ink) with white or warm text
- **Typography**: Small text, approximately 0.875rem, with icon decorations
- **Spacing**: Compact vertical padding, approximately 0.75rem

## Responsive behavior

The three-column resource grid should collapse to two columns on medium viewports and single column on small screens, maintaining card proportions and internal spacing. Hero headline sizes should scale down proportionally: section-display at tablet, with further reduction on mobile to preserve line breaks and readability. Page margins reduce from 5.5rem to 1.5rem on smaller screens. Navigation may collapse to a menu trigger on mobile rather than maintaining the centered cluster. The promotional banner should remain visible but may truncate or wrap text on narrow viewports.

## Practical implementation guidance

### Preserve
- The warm off-white page background against pure white cards; this subtle tonal layering creates depth without shadows
- Outfit's tight tracking and bold weight for display headlines; this is the site's primary visual signature
- Generous section spacing and centered content constraints; the editorial feeling depends on breathing room
- Left-aligned section headings with centered hero text; this asymmetry creates visual interest

### Avoid
- Adding interface accent colors that would compete with card imagery
- Heavy drop shadows or borders on cards; the design relies on spacing and tonal contrast
- Tight line heights on body text; the generous 1.75 leading is essential for readability
- Pure black text; the charcoal ink is deliberately softer

### Recommended build order
1. Establish the warm-canvas page background and centered content container
2. Implement the typographic scale with Outfit and Inter at the specified sizes
3. Build the header with promotional banner and navigation
4. Create the hero section with centered display text
5. Develop the card component with media container and text labels
6. Assemble the grid layout for resource sections
7. Refine responsive breakpoints for grid collapse and type scaling

### Accessibility
- Ensure the dark promotional banner meets WCAG AA contrast against its text
- Maintain sufficient contrast between muted-ink and warm-canvas for secondary text
- Preserve logical heading hierarchy: h1 for hero, h2 for sections, h3 for card titles
- Consider focus indicators for the search icon and navigation links that are visible against warm-canvas and dark banner backgrounds

## Scope note

This guide covers the resources listing page and Claude product page hero as visible in the supplied images. Footer, mobile navigation patterns, form interactions, and hover states are not represented. Measurements are practical adaptation targets.
