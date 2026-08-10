# How pharos.jstor.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pharos.jstor.org-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with deep blue-to-red gradient, italic display type, and three-column card grid with JSTOR brand imagery](https://pin.fontofweb.com/4294?format=jpg)](https://design.withfudge.com/share/pin-4294)

[Homepage hero with deep blue-to-red gradient, italic display type, and three-column card grid with JSTOR brand imagery](https://design.withfudge.com/share/pin-4294)

[![Dark sidebar navigation with italic Pharos wordmark, section labels, and chevron-disclosure menu items](https://pin.fontofweb.com/4293?format=jpg)](https://design.withfudge.com/share/pin-4293)

[Dark sidebar navigation with italic Pharos wordmark, section labels, and chevron-disclosure menu items](https://design.withfudge.com/share/pin-4293)

[![Help page with large serif heading, italic subheadings, body text, and outlined button with external-link icon](https://pin.fontofweb.com/4296?format=jpg)](https://design.withfudge.com/share/pin-4296)

[Help page with large serif heading, italic subheadings, body text, and outlined button with external-link icon](https://design.withfudge.com/share/pin-4296)

[![FAQ page with bold question headings, multi-paragraph answers, and inline text links in a single-column reading layout](https://pin.fontofweb.com/4295?format=jpg)](https://design.withfudge.com/share/pin-4295)

[FAQ page with bold question headings, multi-paragraph answers, and inline text links in a single-column reading layout](https://design.withfudge.com/share/pin-4295)

## Overview

Pharos is JSTOR's design system, expressed through a visual language that balances scholarly authority with contemporary clarity. The system pairs an elegant serif display typeface for headlines and editorial moments with a neutral sans-serif for functional body text and navigation. The homepage presents a dramatic full-bleed gradient hero that shifts from deep navy through purple to warm red, establishing an intellectual yet approachable tone. Below the hero, content organizes into clean card grids with generous whitespace. Interior pages strip back to essential typography and spacing, prioritizing readability for documentation and support content. The overall impression is of a mature, trustworthy system that serves academic and research contexts without visual heaviness.

## Colors

The color system operates in two modes: a dramatic gradient-rich presentation layer and a restrained monochrome functional layer for reading and documentation.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, sidebar background, headings, borders |
| canvas | #ffffff | Page backgrounds, card surfaces, button fills |
| hero-surface | #0a1f5c | Deep navy gradient start, dark presentation surfaces |
| accent-warm | #c44536 | Gradient endpoint, warm accent moments |
| muted-ink | #444444 | Secondary body text, descriptions, captions |
| border-subtle | #d0d0d0 | Button outlines, card separators, hairline rules |

The hero gradient transitions from hero-surface through purple mid-tones to accent-warm, creating a luminous depth behind white italic display text. This gradient is the system's most distinctive color expression and appears only in presentation contexts, not in functional UI. For reading surfaces, the system relies on the stark contrast of ink on canvas, with muted-ink providing hierarchy for secondary information. The sidebar inverts this relationship, placing canvas text on an ink background. Border-subtle appears as one-pixel rules that define buttons and section divisions without visual weight. No additional accent colors appear in the visible interface; the warm gradient tones serve as the sole chromatic departure from the neutral palette.

## Typography

The type system combines two families with distinct roles: By Goran Soderstrom-14777969638463037520 for display and editorial emphasis, GT America for functional text and navigation.| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Goran Soderstrom-14777969638463037520 | 3.5rem | 400 | 1.1 | -0.01em | Homepage hero statements, major page titles |
| section-display | By Goran Soderstrom-14777969638463037520 | 2.5rem | 400 | 1.15 | -0.01em | Section headings, page titles on interior pages |
| body | GT America | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, card content |
| body-small | GT America | 1rem | 400 | 1.5 | 0 | Compact text, captions, tight spaces |
| label | GT America | 0.75rem | 400 | 1.4 | 0.05em | Uppercase section labels, category markers |
| navigation | GT America | 1rem | 400 | 1.4 | 0 | Menu items, sidebar links, button text |

By Goran Soderstrom-14777969638463037520 appears in both roman and italic forms, with By Goran Soderstrom-6035107815411163369 serving as the italic source. The italic variant carries the system's most expressive moments, particularly in the homepage hero where it conveys a humanistic, editorial voice. Roman By Goran Soderstrom-14777969638463037520 serves for standard headings. GT America maintains neutral readability across all functional contexts. The weight range is intentionally narrow: Regular weight handles nearly all text, with hierarchy established through size and family contrast rather than boldness. Verify licensing for these families before production use. By Goran Soderstrom-14777969638463037520 and By Goran Soderstrom-6035107815411163369 are designed by Goran Soderstrom and available from Letters From Sweden. GT America is designed by Noel Leu and available from Grilli Type.

## Layout

The layout system favors generous margins and clear content hierarchy. The homepage presents a full-bleed hero section occupying approximately half the viewport height, followed by a three-column card grid with consistent internal spacing. Interior pages use a single-column reading layout with substantial left and right margins that keep line lengths comfortable for extended reading.

The sidebar navigation appears as a fixed or overlay panel with full-height ink background, creating a strong spatial separation from page content. Navigation items stack vertically with consistent vertical rhythm, grouped by category with uppercase label dividers.

Content spacing follows a modular approach based on a 0.25rem unit. Section spacing of 4rem separates major content blocks. Card grids use gaps of 1.5rem between items. Interior text blocks maintain 1.5rem between paragraphs and 2rem between sections. The system avoids tight packing; even compact elements like buttons receive padding of 0.75rem vertical and 1.25rem horizontal, ensuring touch targets remain comfortable and visual breathing room persists.

## Visual language

The visual language draws from editorial and academic traditions while remaining digitally native. The italic serif display evokes scholarly publishing and humanistic inquiry, while the clean sans-serif body grounds the system in contemporary interface conventions.

Photography and illustration appear in card thumbnails with varied treatments: abstract gradient orbs, systematic component specimens, and brand heritage imagery including the JSTOR decorative initial. These thumbnails sit within cards that have no border radius and no shadow, relying on whitespace and subtle borders for definition.

The gradient hero represents the system's most dramatic visual statement, suggesting depth, discovery, and intellectual warmth. This gradient does not repeat elsewhere in the interface, making it a singular brand signature. Elsewhere, the system exercises restraint: no shadows on cards, no rounded corners on primary surfaces, no decorative backgrounds behind content. The visual discipline reinforces the system's purpose as a tool for building consistent, unobtrusive academic experiences.

Iconography appears sparingly: external-link arrows on buttons and sidebar items, chevrons for disclosure states. These icons are simple, geometric, and monochrome, matching the functional character of GT America.

## Components

**Hero Section**
- Anatomy: Full-width container with gradient background, single large italic heading, no additional elements visible
- Surface: Linear gradient from hero-surface through purple to accent-warm
- Typography: hero-display in italic By Goran Soderstrom-6035107815411163369, canvas color
- Shape: Full-bleed rectangle with 0rem border radius
- Spacing: Generous internal padding, approximately 4rem on all sides

**Content Card**
- Anatomy: Thumbnail image, heading in sans-serif, descriptive paragraph, optional text button
- Surface: canvas background, no shadow, no border
- Typography: Section heading in body-small or body weight, description in body-small, button in body-small
- Shape: Sharp corners, 0rem radius
- Spacing: Internal padding of approximately 1.5rem, thumbnail fills top of card
- Composition: Vertical stack with image above text

**Text Button**
- Anatomy: Text label with optional trailing icon
- Surface: canvas fill, 1px border-subtle border
- Typography: body-small in GT America
- Shape: Sharp rectangle, 0rem radius
- Spacing: 0.75rem vertical padding, 1.25rem horizontal padding
- Variants: Default with border, icon variant with external-link arrow

**Sidebar Navigation**
- Anatomy: Stacked vertical list with category labels, expandable sections, external links
- Surface: ink background, canvas text
- Typography: navigation for items, label for category headers
- Shape: Full-height panel, sharp edges with 0rem radius
- Composition: Category groups separated by hairline rules; expandable items show chevron icons; external links show diagonal arrows

**FAQ Entry**
- Anatomy: Bold question heading followed by paragraph answer, occasional inline link
- Surface: Transparent, inherits page canvas
- Typography: body weight for questions, body for answers, standard underline for links
- Spacing: 2rem between entries, 1rem between question and answer

## Responsive behavior

The three-column card grid should collapse to a single column on narrow viewports, with cards stacking vertically and maintaining full width. The sidebar navigation should transform to a horizontal menu or hamburger-triggered overlay on small screens, preserving the ink background and vertical item stacking when expanded.

Hero text should scale down proportionally, maintaining the italic character but reducing from hero-display toward section-display size to prevent overflow. Line lengths for body text should remain between 45 and 75 characters through padding adjustments rather than font size changes.

Touch targets for navigation items and buttons should maintain minimum 44px height regardless of viewport size. The external-link icons in buttons and sidebar items should remain visible and tappable.

## Practical implementation guidance

**Preserve**
- The sharp contrast between italic serif display and neutral sans-serif body
- The gradient hero as a singular, unrepeatable brand moment
- The zero-border-radius aesthetic on all primary surfaces
- The generous whitespace that gives content room to breathe
- The monochrome functional palette with warm gradient reserved for presentation

**Avoid**
- Adding shadows or elevation to cards; the system relies on flat planes
- Rounding corners on buttons, cards, or panels
- Introducing additional accent colors beyond the hero gradient
- Using bold weights for emphasis; rely on size and family contrast instead
- Crowding the sidebar with icons or decorative elements

**Recommended build order**
1. Establish the type system with By Goran Soderstrom-14777969638463037520, By Goran Soderstrom-6035107815411163369, and GT America loaded and configured
2. Implement the gradient hero with proper color stops and italic text rendering
3. Build the card grid with sharp corners, image thumbnails, and text buttons
4. Create the sidebar navigation with category labels and disclosure behavior
5. Polish interior page layouts with proper reading margins and FAQ spacing

**Accessibility**
- Ensure the gradient hero meets contrast requirements; the deep navy start provides sufficient darkness for white text
- Provide focus indicators for all interactive elements, particularly the flat-styled buttons
- Use semantic heading hierarchy with By Goran Soderstrom-14777969638463037520 reserved for h1 and h2 levels
- Maintain keyboard operability for sidebar disclosure sections and external links
- Consider a reduced-motion alternative for the gradient hero if animation is implemented

## Scope note

This guide covers the homepage presentation layer, sidebar navigation, help page, and FAQ page as visible in the supplied images. Component documentation pages, interactive states, form elements, data tables, and mobile-specific layouts are not represented. Measurements are practical adaptation targets.
