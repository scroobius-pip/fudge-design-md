# How bggs.qld.edu.au is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bggs.qld.edu.au-design)

Last updated: 2026-08-10

## Captured pages

[![Contact page with deep blue hero banner, white serif heading, and quicklink pill buttons on white content area](https://pin.fontofweb.com/3526?format=jpg)](https://design.withfudge.com/share/pin-3526)

[Contact page with deep blue hero banner, white serif heading, and quicklink pill buttons on white content area](https://design.withfudge.com/share/pin-3526)

[![Footer section with warm sand background, large navy serif ENROL heading, and oversized BGGS wordmark](https://pin.fontofweb.com/3525?format=jpg)](https://design.withfudge.com/share/pin-3525)

[Footer section with warm sand background, large navy serif ENROL heading, and oversized BGGS wordmark](https://design.withfudge.com/share/pin-3525)

[![Latest News grid with editorial serif headings, thumbnail photography, and category labels with square indicators](https://pin.fontofweb.com/3524?format=jpg)](https://design.withfudge.com/share/pin-3524)

[Latest News grid with editorial serif headings, thumbnail photography, and category labels with square indicators](https://design.withfudge.com/share/pin-3524)

[![Split-screen Years 5 and 6 section with warm sand text panel and candid student photography on the right](https://pin.fontofweb.com/3523?format=jpg)](https://design.withfudge.com/share/pin-3523)

[Split-screen Years 5 and 6 section with warm sand text panel and candid student photography on the right](https://design.withfudge.com/share/pin-3523)

## Overview

Brisbane Girls Grammar School's digital presence balances institutional gravitas with contemporary editorial refinement. The system is built on a distinctive warm sand surface that evokes heritage and approachability, contrasted with deep navy for authority and structure. Display typography relies on an elegant high-contrast serif for headlines, creating a classical yet fresh voice appropriate for an established educational institution. The layout favors generous whitespace, asymmetric splits, and large-scale photography that puts student life at the center. Navigation and functional elements employ a clean sans-serif with confident weight, ensuring clarity without competing with the expressive display type. The overall impression is one of quiet confidence—prestigious but welcoming, structured but breathing.

## Colors

The palette is intentionally restrained, deriving its richness from material warmth rather than chromatic complexity. Navy and sand form the core identity, with white and near-black ink providing functional contrast.

| token | value | use |
|---|---|---|
| navy | `#000000` | Primary brand dark; hero banners, buttons, wordmarks, navigation ink on sand |
| sand | `#F5E6D3` | Signature warm background; section panels, footer ground, text areas |
| white | `#FFFFFF` | Content canvas; hero text, card backgrounds, contact page body |
| ink | `#1A1A1A` | Body text on light grounds; contact details, descriptions, secondary content |

The navy reads as a deep midnight blue in context despite its black value, particularly when set against the warm sand where it takes on a cooler, more maritime character. The sand appears consistently across major sections, creating a recognizable institutional warmth that distinguishes the site from cooler corporate alternatives. White serves as the practical content ground for information-dense pages like Contact, where readability and task completion take priority over atmospheric warmth. The near-black ink provides sufficient contrast for extended reading without the harshness of pure black against white.

Photography introduces natural color variation—skin tones, institutional blues, greens, and occasional warm accents—but the UI palette remains disciplined, allowing imagery to carry chromatic interest while the interface provides stable framing.

## Typography

The type system pairs an expressive serif display family with a functional sans-serif for navigation and labels, creating clear role separation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PP Fragment Glare Medium | 5rem | 400 | 1 | -0.02em | Page titles, major section headings |
| section-display | PP Fragment Glare Medium | 3.5rem | 400 | 1.05 | -0.01em | Subsection headings, editorial titles |
| body | PP Fragment-Text Light | 1.25rem | 300 | 1.5 | 0 | Paragraphs, descriptions, contact details |
| label | PP Neue Montreal | 0.75rem | 600 | 1.2 | 0.05em | Category tags, section indicators, metadata |
| navigation | PP Neue Montreal | 1rem | 600 | 1.2 | 0.01em | Primary nav, menu items, quicklinks |
| button | PP Neue Montreal | 1rem | 600 | 1 | 0 | CTA buttons, action labels |

PP Fragment Glare Medium serves as the distinctive display voice, with its high contrast and refined serifs conveying academic tradition and editorial quality. The Light weight of PP Fragment-Text provides elegant, readable body copy with sufficient presence for longer passages. PP Neue Montreal in Semibold handles all functional and navigational text with crisp authority; its geometric clarity prevents visual competition with the serif display.

The scale uses a 4px relative unit, with display sizes at 80px and 56px, body at 20px, and functional sizes at 16px and 12px. All sizes are whole-number multiples of the 4px base.

PP Fragment-Text Light is designed by Francesca Bolognini and Mat Desjardins, available from Pangram Pangram. PP Neue Montreal is designed by Mathieu Desjardins, available from Pangram Pangram Foundry. PP Fragment Glare Medium and PP Neue Montreal-Variable credits are not specified. Verify licensing for these families before production use.

## Layout

The layout philosophy centers on editorial asymmetry and generous proportion. Major sections frequently employ split-screen compositions, with text content occupying a sand-colored panel on the left and photography extending to the right edge. This creates a magazine-like reading experience that breaks the centered-container convention.

The grid is fluid but disciplined. Content maintains consistent internal padding, with section spacing at 6rem creating clear territorial separation between major page regions. Horizontal rules in subtle tones divide functional areas without heavy visual weight.

Navigation sits at the top in a full-width bar, with the school crest and wordmark anchored left, primary categories centered, and utility controls (search, menu) right-aligned. The footer expands into a large-format presentation with oversized typography, institutional address details, and a monumental BGGS wordmark that serves as both branding and spatial anchor.

Card grids for news and related content use consistent gaps, with images maintaining aspect ratio and text sitting below in a clean vertical stack. The "More" section demonstrates how photography can fill card containers with overlaid white text, creating immersive entry points.

## Visual language

The visual language communicates established excellence through restraint. The warm sand surface is the most distinctive material choice, appearing in large uninterrupted planes that soften the institutional tone. Against this, navy elements feel precise and intentional rather than heavy.

Photography is candid and human-centered, showing students in natural interaction rather than posed formality. Images receive no border radius treatment, maintaining editorial directness. When text overlays photography, it is white and substantial, ensuring legibility against varied image content.

The BGGS wordmark in the footer demonstrates scale as a design element—letterforms become architectural, filling space and asserting institutional presence. This treatment appears only in the footer, creating a memorable terminal moment for each page.

Iconography is minimal and functional. Arrow indicators accompany buttons and links, suggesting forward movement. Small square indicators precede category labels, providing a subtle geometric anchor without decorative excess.

## Components

### Hero Banner

- **Anatomy**: Full-width container with navy background, large serif heading left-aligned, optional supporting content below
- **Surface**: Solid navy background
- **Typography**: Hero-display token, white text
- **Shape**: Full-width rectangle, no border radius
- **Spacing**: Generous vertical padding, approximately 4rem top and bottom
- **Composition**: Heading dominates, with ample breathing room on all sides

### Quicklink Pill

- **Anatomy**: Horizontal container with label left, arrow icon right
- **Surface**: Light gray-blue background (`#E8EDF2`)
- **Typography**: Navigation token, ink color
- **Shape**: Full pill radius (9999px)
- **Spacing**: Internal padding approximately 1rem horizontal, 0.75rem vertical
- **Composition**: Label and arrow separated by space, arrow indicating external or forward action
- **Variants**: Appears in horizontal row with consistent gap between items

### Section Label

- **Anatomy**: Small square indicator followed by uppercase text
- **Surface**: Transparent, inherits parent background
- **Typography**: Label token, navy color
- **Shape**: 4px square indicator, text inline
- **Spacing**: Tight internal spacing between indicator and text
- **Composition**: Left-aligned, precedes major content blocks

### Content Button

- **Anatomy**: Text label with trailing arrow, contained within rounded rectangle
- **Surface**: Navy background, white text
- **Typography**: Button token
- **Shape**: Small panel radius (0.5rem)
- **Spacing**: Internal padding approximately 1rem horizontal, 0.75rem vertical
- **Composition**: Inline with text or positioned below descriptive content

### News Card

- **Anatomy**: Image container above, category label and title below
- **Surface**: White background, image flush to top edge
- **Typography**: Section-display for title (at smaller scale), label for category
- **Shape**: No radius on image, square corners throughout
- **Spacing**: Gap between image and text, consistent card gap in grid
- **Composition**: Vertical stack, image dominant, text concise

### Footer Block

- **Anatomy**: Large-format section with institutional details left, navigation center, monumental wordmark right
- **Surface**: Sand background throughout
- **Typography**: Section-display for major headings, body for address, navigation for menu items, hero-display scale for BGGS wordmark
- **Shape**: Full-width, no radius
- **Spacing**: Extensive vertical padding, content organized in asymmetric columns
- **Composition**: Address and crest anchored left, menu categories center, wordmark bleeds to right edge

## Responsive behavior

The split-screen layouts should stack vertically on narrower viewports, with the text panel preceding the image. The sand background extends full-width in both orientations. Navigation collapses to a hamburger menu with the "Menu" label and icon visible in the top bar.

Footer content should reorganize from three-column asymmetry to a single vertical stack, preserving the address, menu, and wordmark sequence. The BGGS wordmark may scale down proportionally or crop to maintain legibility.

News grids should transition from three columns to two, then single column, with cards maintaining internal proportions. Quicklink pills should wrap to multiple rows rather than compressing horizontally.

Typography scales down proportionally: hero-display to section-display size, section-display to a 2.5rem intermediate, maintaining the 4px grid alignment. Body text may reduce to 1.125rem for comfortable mobile reading.

## Practical implementation guidance

### Preserve
- The warm sand (`#F5E6D3`) as the signature institutional background; it is more distinctive than default white or gray
- The high-contrast serif for display headings; this is the primary voice of the brand
- Generous section spacing; the breathing room conveys confidence and clarity
- The split-screen editorial layout for major content sections
- Square-corner photography without radius treatment; the editorial directness supports the institutional tone

### Avoid
- Adding decorative borders or shadows to cards and containers; the flat, clean surfaces are intentional
- Using the display serif for body text or navigation; role separation is essential
- Replacing the sand with cooler neutrals; the warmth is a deliberate differentiator
- Crowding the quicklink pills; they need space to read as individual actions

### Recommended Build Order
1. Establish the sand and navy color tokens with white and ink neutrals
2. Implement the typography scale with Fragment Glare Medium for display and Neue Montreal for function
3. Build the split-screen section component as the primary layout primitive
4. Create the hero banner for page-level identification
5. Implement navigation with the menu overlay pattern
6. Add card grids for news and related content
7. Construct the large-format footer with wordmark treatment

### Accessibility
- Ensure navy text on sand meets WCAG AA contrast ratios; the combination appears to satisfy this
- Provide focus indicators for all interactive elements, particularly the quicklink pills and navigation
- Maintain semantic heading hierarchy despite the visual scale of display type
- Consider reduced-motion preferences for any scroll-triggered animations
- Ensure the search and menu controls have accessible labels

## Scope note

This guide covers the homepage and contact page surfaces visible in the supplied images, including the hero banner, split-screen editorial sections, news grids, quicklink navigation, and footer systems. Interior page templates, form interactions, search functionality, motion design, and mobile-specific adaptations are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid.
