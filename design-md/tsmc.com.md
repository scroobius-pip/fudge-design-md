# How tsmc.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tsmc.com-design)

Last updated: 2026-08-10

## Captured pages

[![About TSMC hero banner with semiconductor fabrication facility photograph and white text overlay on blue sky gradient](https://pin.fontofweb.com/2327?format=jpg)](https://design.withfudge.com/share/pin-2327)

[About TSMC hero banner with semiconductor fabrication facility photograph and white text overlay on blue sky gradient](https://design.withfudge.com/share/pin-2327)

[![Footer section with three portal cards on dark gray background, multi-column site map, and social media icons](https://pin.fontofweb.com/2326?format=jpg)](https://design.withfudge.com/share/pin-2326)

[Footer section with three portal cards on dark gray background, multi-column site map, and social media icons](https://design.withfudge.com/share/pin-2326)

[![Three-column content cards featuring Sustainability Report, TCIA awards, and Charity Foundation with red action links](https://pin.fontofweb.com/2325?format=jpg)](https://design.withfudge.com/share/pin-2325)

[Three-column content cards featuring Sustainability Report, TCIA awards, and Charity Foundation with red action links](https://design.withfudge.com/share/pin-2325)

[![Primary navigation bar with TSMC logo, main menu items, search icon, and language selector pill](https://pin.fontofweb.com/2324?format=jpg)](https://design.withfudge.com/share/pin-2324)

[Primary navigation bar with TSMC logo, main menu items, search icon, and language selector pill](https://design.withfudge.com/share/pin-2324)

## Overview

The TSMC corporate website presents a technology-forward, institutionally authoritative visual system designed for global stakeholders including investors, customers, suppliers, and prospective employees. The design prioritizes clarity and credibility over decorative flourish, reflecting the precision of semiconductor manufacturing. The interface employs a restrained palette anchored by neutral grays and white, with a distinctive red accent color drawn from the corporate identity. Content density varies dramatically between expansive hero photography, structured multi-column information grids, and dense footer navigation. The overall impression is of a mature, trustworthy enterprise that communicates through structured information hierarchy rather than visual noise. Typography is clean and highly legible, using a single sans-serif family at carefully calibrated weights and sizes. The system balances corporate formality with approachable readability through generous line heights in body text and decisive weight contrasts in headings.

## Colors

The color system is intentionally minimal, deriving its character from disciplined application rather than variety. The palette supports both light and dark surface modes, with photography providing the primary visual warmth.

| token | value | use |
|---|---|---|
| action | #C41230 | Primary action links, active navigation indicators, carousel pagination dots, and interactive emphasis |
| ink | #333333 | Primary body text, headings, and navigation labels |
| muted-ink | #666666 | Secondary text, descriptions, footer links, and supporting content |
| canvas | #FFFFFF | Primary page background, hero text on photography, card surfaces, and navigation bar |
| surface | #F5F5F5 | Footer background, alternate section backgrounds, and subtle content separation |
| surface-inverse | #808080 | Portal card backgrounds in footer, hero overlay regions, and dark UI surfaces |
| border | #E0E0E0 | Subtle dividers, card separators, and light-mode hairlines |
| border-inverse | #999999 | Dividers on dark surfaces, portal card separators |

The red action color appears selectively and consistently: in "LEARN MORE" links with chevron icons, in the active navigation underline, and in carousel pagination indicators. This restraint makes the accent highly scannable when it does appear. The interface operates primarily in a light mode, with dark gray surfaces reserved for the footer portal cards and photographic hero regions. Photography carries significant color responsibility, with the blue-sky industrial imagery in the hero and the warm-toned charity foundation photography providing emotional range that the UI palette deliberately suppresses.

## Typography

The typographic system relies on a single family, Roboto, designed by Christian Robertson and provided by Google. Verify licensing for these families before production use. Font Awesome 5 Pro serves as the icon system and is not used for body typography.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Roboto | 3rem | 700 | 1.1 | -0.01em | Hero banner headlines overlaid on photography |
| section-display | Roboto | 1.5rem | 700 | 1.2 | 0 | Card titles, section headings, and content module headers |
| body | Roboto | 1rem | 400 | 1.6 | 0 | Long-form paragraphs, company descriptions, and primary content |
| body-small | Roboto | 0.875rem | 400 | 1.5 | 0 | Card descriptions, footer navigation, and secondary content |
| label | Roboto | 0.875rem | 500 | 1.4 | 0.02em | Action links, portal card titles, and emphasized UI labels |
| navigation | Roboto | 0.875rem | 400 | 1 | 0 | Primary navigation items and breadcrumb text |
| legal-copy | Roboto | 0.75rem | 400 | 1.5 | 0 | Copyright text, legal notices, and fine print |

The hierarchy depends on weight and size contrast rather than family variation. The hero display at 3rem with tight line height creates impact against photographic backgrounds, while the body text at 1rem with generous 1.6 line height ensures comfortable reading for extended corporate content. The label style at medium weight with slight positive tracking provides clear affordance for interactive elements without resorting to uppercase transformation.

## Layout

The layout system follows a conventional centered container model with full-bleed sections for visual emphasis. The primary navigation occupies a fixed-height bar at 4.5rem, with the TSMC logo positioned at the left margin and main navigation items distributed across the horizontal center. The right cluster contains a search icon and a language selector rendered as a rounded pill containing "English" in red text alongside Chinese and Japanese alternatives in muted text.

Hero sections extend full viewport width with a photographic background, featuring left-aligned text content positioned in the upper-left quadrant with substantial padding from the viewport edges. Below the hero, content sections employ a centered container with generous horizontal margins, estimated at approximately 4rem to 6rem on desktop viewports.

The three-column card grid visible in the content modules uses equal-width columns with consistent gutters. Cards are arranged in a horizontal row with top-aligned imagery, followed by title, description, and action link stacked vertically. The footer presents a more complex architecture: a full-width dark gray band containing three portal cards with iconography, followed by a multi-column site map on a light gray surface, and finally a legal bar with the corporate logo and copyright text.

Spacing between major sections is substantial, creating clear rhythmic separation between content types. Component internal padding appears consistent at approximately 1.5rem for cards and content blocks.

## Visual language

The visual language communicates institutional confidence through geometric precision and photographic authenticity. The TSMC logo—a circular mark with radiating grid lines suggesting wafer geometry—appears in full color in the navigation and footer, establishing immediate brand recognition. Line-based iconography accompanies portal cards in the footer, rendered in white against dark gray backgrounds with a technical, schematic quality.

Photography plays a central role in the visual expression. The hero imagery features industrial architecture against expansive skies, conveying scale and technological capability. Content card imagery includes documentary photography of awards, abstract sustainability graphics, and warm-toned charity communications. This range allows different business units to express distinct personalities while remaining within the unified container system.

The absence of rounded corners on primary containers reinforces the engineered, precise character of the brand. Only the language selector pill and social media icon containers employ border-radius, creating a subtle hierarchy between utilitarian and interactive elements. Shadows are minimal or absent; depth is created through color value contrast and photographic layering rather than elevation effects.

The red accent color functions as a navigational signal, consistently marking interactive endpoints. Its application is disciplined: never used for decorative emphasis, always for user-actionable elements. This creates a learnable pattern where red indicates progression.

## Components

### Primary navigation

- **Anatomy**: TSMC logo (left), seven primary navigation items (center), search icon and language selector pill (right)
- **Surface**: White background with subtle bottom border
- **Typography**: Navigation style for menu items; active item receives red underline indicator
- **Shape**: Full-width bar, zero border-radius
- **Spacing**: Horizontal padding approximately 1.5rem; items spaced with comfortable gaps
- **Composition**: Flexbox row with space-between distribution; logo and utility cluster pinned to edges

### Hero banner

- **Anatomy**: Full-bleed photographic background, left-aligned headline and subheadline text block
- **Surface**: Photographic with potential subtle gradient overlay for text legibility
- **Typography**: Hero display for headline; body style for supporting description
- **Shape**: Full viewport width, height approximately 20rem
- **Spacing**: Generous left and top padding, approximately 4rem from edges
- **Composition**: Text positioned in upper-left quadrant; imagery extends to all edges

### Content card

- **Anatomy**: Photographic thumbnail (top), title, description paragraph, action link with chevron icon
- **Surface**: White background
- **Typography**: Section display for title; body-small for description; label for action link in red
- **Shape**: Rectangular, zero border-radius
- **Spacing**: Internal padding approximately 1.5rem; vertical stack with consistent gaps
- **Composition**: Equal-width columns in three-column grid; imagery maintains aspect ratio

### Portal card

- **Anatomy**: Line icon (left), title with chevron, description text
- **Surface**: Dark gray (#808080) background
- **Typography**: Label style for title in white; body-small for description in white with reduced opacity
- **Shape**: Full-height within container, separated by vertical dividers
- **Spacing**: Internal padding approximately 2rem; icon sized to match text block height
- **Composition**: Three equal cards in horizontal row; icon and text in left-aligned stack

### Footer

- **Anatomy**: Portal cards band, multi-column site map, legal bar with logo and copyright
- **Surface**: Inverse gray for portal cards; light gray (#F5F5F5) for site map and legal
- **Typography**: Label for column headers; body-small for links; legal-copy for copyright
- **Shape**: Full-width sections with centered content container
- **Spacing**: Generous vertical padding between bands; column gaps approximately 2rem
- **Composition**: Site map uses seven-column distribution matching navigation structure; social icons stacked vertically on right edge

### Action link

- **Anatomy**: Text label plus right-pointing chevron icon
- **Typography**: Label style in red action color
- **Spacing**: Tight icon-to-text gap, approximately 0.25rem
- **States**: Default in red; hover state may include underline or chevron shift

## Responsive behavior

The design should maintain its structural integrity across viewport sizes through predictable adaptations. The three-column card grid should collapse to a single column on narrow viewports, with cards stacking vertically and full-width imagery. The primary navigation should condense to a hamburger menu or consolidated dropdown when horizontal space becomes insufficient for seven primary items plus utilities.

The hero banner text should remain left-aligned but increase relative padding on smaller screens to maintain readability against potentially cropped imagery. Footer site map columns should reflow to two or three columns on tablet widths before collapsing to accordion or single-column stack on mobile.

The language selector, currently exposed as a pill with multiple options, may require truncation to a single "EN" indicator or globe icon at narrow widths. Portal cards in the footer should stack vertically on mobile, losing their vertical dividers and gaining horizontal separators instead.

## Practical implementation guidance

### Preserve
- The disciplined red accent application—reserve #C41230 exclusively for interactive and navigational elements
- The generous line height (1.6) in body text for readability of corporate content
- The sharp-cornered, zero-radius container aesthetic for primary surfaces
- The photographic hero treatment with left-aligned text overlay
- The multi-band footer architecture with distinct functional zones

### Avoid
- Introducing additional accent colors that compete with the established red signal
- Applying border-radius to primary content cards or navigation containers
- Using uppercase text transforms that contradict the clean, readable lowercase approach
- Adding drop shadows to create false depth—the system relies on color and photography contrast
- Reducing the substantial whitespace between major content sections

### Recommended build order
1. Establish the color tokens and apply to base surfaces (canvas, surface, surface-inverse)
2. Implement Roboto at all defined sizes and weights with the specified line heights
3. Build the primary navigation with logo, menu items, search, and language selector
4. Create the hero banner component with photographic background and text overlay positioning
5. Develop the content card with image, title, description, and action link structure
6. Construct the footer with portal cards, site map columns, and legal bar
7. Add interactive states to action links and navigation items

### Accessibility
- Ensure hero text maintains minimum contrast ratio against photographic backgrounds; consider a subtle dark gradient overlay behind text
- Provide visible focus indicators for keyboard navigation that match or exceed the red underline treatment used for active states
- Maintain touch targets of at least 44 by 44 pixels for navigation items and action links on touch devices
- Use semantic heading hierarchy with the hero display as h1, section displays as h2, and card titles as h3
- Ensure the language selector is fully keyboard accessible and announces the current selection to screen readers

## Scope note

This guide covers the TSMC corporate website homepage and About TSMC page surfaces visible in the supplied images, including primary navigation, hero banners, content card grids, footer architecture, and portal links. Mobile layouts, hover and focus states, loading indicators, form interactions, search functionality, and interior page templates are not represented. Measurements are practical adaptation targets derived from visual inspection of desktop screenshots.
