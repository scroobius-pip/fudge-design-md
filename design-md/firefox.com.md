# How firefox.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/firefox.com-design)

Last updated: 2026-08-10

## Captured pages

[![Features page showing a two-column hero with cyan and yellow browser-window illustrations, followed by a three-column grid of feature cards with white surfaces and blue text links.](https://pin.fontofweb.com/2710?format=jpg)](https://design.withfudge.com/share/pin-2710)

[Features page showing a two-column hero with cyan and yellow browser-window illustrations, followed by a three-column grid of feature cards with white surfaces and blue text links.](https://design.withfudge.com/share/pin-2710)

[![Download confirmation page with a mint-green notification banner, centered Firefox logo, large dark headline, and minimal centered layout on white canvas.](https://pin.fontofweb.com/2709?format=jpg)](https://design.withfudge.com/share/pin-2709)

[Download confirmation page with a mint-green notification banner, centered Firefox logo, large dark headline, and minimal centered layout on white canvas.](https://design.withfudge.com/share/pin-2709)

[![Dark footer with four-column link grid, Firefox wordmark, horizontal rule, legal links, Mozilla attribution, and a bordered language selector.](https://pin.fontofweb.com/2708?format=jpg)](https://design.withfudge.com/share/pin-2708)

[Dark footer with four-column link grid, Firefox wordmark, horizontal rule, legal links, Mozilla attribution, and a bordered language selector.](https://design.withfudge.com/share/pin-2708)

[![Homepage section with rounded gray panel containing retro computer illustration, dark headline, body copy, and a blue download button with download icon.](https://pin.fontofweb.com/2707?format=jpg)](https://design.withfudge.com/share/pin-2707)

[Homepage section with rounded gray panel containing retro computer illustration, dark headline, body copy, and a blue download button with download icon.](https://design.withfudge.com/share/pin-2707)

## Overview

The Firefox.com design system presents an open, trustworthy browser brand built on clarity and restraint. The visual language centers on generous white space, bold Mozilla custom typography, and a disciplined two-mode surface strategy: light pages for product storytelling and a near-black footer for grounding and navigation density. Color arrives through functional accents—vivid mint notifications, warm yellow and cool cyan illustration panels, and a single authoritative blue for calls to action. The system avoids decorative noise; every element serves readability or conversion. Feature pages organize content into card grids with consistent internal spacing, while download flows reduce the interface to centered messaging and a single prominent button. The result is a design that feels both institutional and approachable, balancing Mozilla's non-profit ethos with the polish expected of a modern browser product.

## Colors

The palette operates in two primary modes: a light product mode for pages above the fold, and a dark inverse mode reserved for the global footer. Accent colors appear in illustration panels and notification surfaces rather than as competing brand hues.

| token | value | use |
|---|---|---|
| action | #0060DF | Primary buttons, text links, and interactive accents |
| action-hover | #0250BB | Button and link hover states |
| ink | #15141A | Primary headings and body text on light surfaces |
| muted-ink | #5B5B66 | Secondary descriptions, captions, and footer sub-links |
| canvas | #FFFFFF | Page background and card surfaces |
| surface | #F0F0F4 | Rounded content panels and section backgrounds |
| surface-warm | #FFF4DE | Warm illustration panels and feature callouts |
| surface-cool | #C7FFFF | Cool illustration panels and feature callouts |
| border | #E0E0E6 | Card outlines, dividers, and subtle separators |
| border-subtle | #8F8F9D | Footer horizontal rules and inactive form borders |
| inverse-canvas | #15141A | Footer background and dark section surfaces |
| inverse-ink | #FFFFFF | Footer headings and primary links |
| inverse-muted | #CFCFD8 | Footer secondary text and legal copy |
| accent-mint | #88FFD1 | Notification banners and success messaging |
| accent-orange | #FF7139 | Brand illustration accents and Firefox logo warmth |

The light mode dominates the product experience. White canvas provides maximum contrast for the dark ink typography, while gray surface panels create contained moments for storytelling without breaking the page rhythm. The warm and cool surface tokens appear as full-bleed illustration backgrounds in feature grids, giving each feature block a distinct emotional temperature—cool cyan for speed, warm yellow for privacy—while maintaining overall harmony through shared saturation levels. The dark footer inverts the entire relationship, using the same ink value as a background to create visual weight and signal the end of the page journey. The single action blue threads through every interactive element, ensuring that calls to action remain scannable regardless of surrounding color context.

## Typography

The system relies on two related Mozilla families: Mozilla Headline for display and section headings, and Mozilla Text for everything else. Both were designed by Studio Drama and are distributed by Studio Drama. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Mozilla Headline | 3.5rem | 600 | 1.1 | -0.02em | Homepage hero and download confirmation headlines |
| section-display | Mozilla Headline | 2.5rem | 600 | 1.15 | -0.01em | Feature section titles and panel headings |
| body-large | Mozilla Text | 1.125rem | 400 | 1.5 | 0 | Lead paragraphs and emphasized descriptions |
| body | Mozilla Text | 1rem | 400 | 1.5 | 0 | Standard paragraphs and card descriptions |
| body-small | Mozilla Text | 0.875rem | 400 | 1.5 | 0 | Compact descriptions and footer links |
| label | Mozilla Text | 0.875rem | 700 | 1.2 | 0.01em | Button labels and category headings |
| navigation | Mozilla Text | 1rem | 400 | 1.2 | 0 | Primary navigation and dropdown triggers |
| legal-copy | Mozilla Text | 0.75rem | 400 | 1.5 | 0 | Copyright, privacy links, and terms |

Mozilla Headline appears exclusively at semibold weight for display sizes, delivering a confident, slightly condensed character that differentiates product pages from generic marketing sites. The negative letter spacing at display sizes tightens word shapes without collapsing readability. Mozilla Text handles all functional typography at regular weight, with bold reserved for button labels and footer category titles. The type scale is built on a 4px relative unit, with sizes stepping cleanly from 0.75rem through 3.5rem without fractional values. Line heights stay tight for headings and generous for body, creating clear rhythm separation between reading and scanning contexts.

## Layout

The page architecture follows a centered single-column model for conversion pages and a contained multi-column grid for feature discovery. Maximum content width appears to sit near 80rem, with internal padding scaling from 1.5rem on mobile to 3rem on desktop.

The feature page layout in the supplied images shows a two-column hero section with equal-width illustration panels, followed by a three-column card grid with uniform gaps. Cards maintain internal padding of 1.5rem on all sides, with headlines stacked directly above body copy and text links positioned at the card bottom. The grid gap matches the card padding, creating square breathing room between elements.

The download confirmation page strips away navigation complexity to a centered vertical stack: notification banner at top, brand logo, hero headline, help link, and footer action. This funnel layout uses approximately 60% of the viewport width for text blocks, keeping line lengths comfortable for the display type.

The homepage section with the retro computer illustration demonstrates an asymmetric panel composition: a rounded gray surface panel spans most of the content width, with internal padding of roughly 3rem, an illustration offset to the left, and text content flowing to the right with generous internal spacing. Below this panel, the primary download button centers with additional surrounding whitespace before the footer transition.

The global footer occupies the full viewport width with a dark background, organizing links into four equal columns with category labels above link lists. A horizontal rule separates the link grid from legal and attribution content below. The Firefox wordmark anchors the lower right, while a bordered language selector sits at the bottom edge.

## Visual language

Illustration style on Firefox.com favors flat, friendly vector work with bold outlines and limited shading. The browser window icons in feature cards use simple geometric shapes with functional metaphors—speedometer, crossed-eye privacy symbol—rendered in near-black against colored panels. The retro computer illustration introduces a playful anachronism: a CRT monitor with the Firefox logo on screen, accompanied by a starburst shape in gradient blue-to-purple, suggesting energy and independence without literal motion.

Photography is absent from the visible system; imagery is entirely illustrative or brand-graphic. This reinforces the product-focused, non-corporate tone. Color in illustrations stays within the defined palette: warm yellows, cool cyans, and the signature orange-to-purple gradient of the Firefox wordmark.

Surface treatments are minimal. Cards receive no shadow, relying on border definition alone. The rounded panel treatment on the homepage creates depth through background color change rather than elevation. The only shadow visible appears on the notification banner, a subtle drop shadow that lifts the ephemeral message above the page plane.

Iconography is functional and sparse. The download button includes a downward-arrow icon. External links in the footer display a small diagonal-arrow glyph. The language selector shows a globe icon. These icons are simple line treatments, matching the weight of body text rather than standing alone as decorative elements.

## Components

### Primary action button

The primary download button is the system's most critical interactive element. It uses a solid action blue background with white text, rendered in the bold label typography at 0.875rem. The button shape is a rounded rectangle with 0.25rem corner radius—sharp enough to feel precise, soft enough to avoid austerity. Internal padding measures approximately 0.75rem vertical and 1.5rem horizontal, creating a substantial target. A download icon sits to the right of the label with consistent spacing. On the homepage, this button centers below a content panel with additional whitespace above and below, isolating it as the primary conversion moment.

### Feature card

Feature cards organize product capabilities in a repeating grid. Each card presents on a white background with a 1px border in the border token color and 0.5rem corner radius. Internal padding is 1.5rem on all sides. The card headline uses section-display typography at a reduced size within the card context, sitting directly above body text in the standard body size. A "Learn more" text link in action blue appears at the bottom of the card, providing the only color accent within the card boundary. Cards do not use shadows or hover elevation changes in the visible state.

### Notification banner

The notification banner appears as a full-width or contained alert surface with mint green background and dark text. It uses the standard body typography size and includes an inline text link for the primary action. The banner has rounded corners at 0.5rem and subtle shadow elevation that separates it from the page background. This component appears at the top of the download confirmation page, delivering system feedback without disrupting the centered content flow below.

### Content panel

The content panel is a large rounded surface for storytelling sections. It uses the surface gray background with 1.5rem corner radius and substantial internal padding of approximately 3rem. Content inside the panel can be asymmetrically arranged, with illustrations positioned to one side and text flowing on the other. The panel spans nearly the full content width, creating a contained moment within the otherwise open page. Typography inside follows the standard hierarchy: section-display for headlines, body-large for descriptions.

### Footer

The footer inverts the entire page palette to near-black with white and muted gray text. It organizes content into a four-column link grid with bold category labels above regular-weight link lists. External links display a diagonal-arrow icon. Below the link grid, a horizontal rule in border-subtle separates navigation from legal content. The legal row includes inline text links for privacy notice, terms, cookie policy, and trademark licensing. The Firefox wordmark appears in the lower right with the full color logo and white wordmark text. A bordered language selector with globe icon sits at the bottom edge, using the inverse canvas background with a visible border in border-subtle.

### Navigation header

The navigation header appears minimal and functional. It presents the Firefox wordmark at left, with primary navigation links centered or right-aligned. Dropdown triggers include a small chevron indicator. The header uses a white or transparent background with dark text, maintaining the light mode palette. On the download confirmation page, the header is simplified to logo and essential links only.

## Responsive behavior

The supplied images show desktop layouts exclusively. Based on the component structures visible, the following responsive adaptations are recommended.

The three-column feature card grid should collapse to two columns at medium widths and single column on narrow viewports, maintaining card internal padding and border treatments throughout. The two-column hero with illustration panels should stack vertically, with illustrations above text content to preserve the visual hook.

The centered download confirmation layout can maintain its narrow text width across breakpoints, though the notification banner should expand to full width on mobile to maximize touch targets. The footer link grid should collapse from four columns to two, then to a single stacked column with accordion-style category headers if space requires.

The large rounded content panel on the homepage should retain its internal padding but allow the illustration and text to stack vertically on narrow screens. The illustration should remain above the headline to maintain visual interest before reading begins.

Type sizes should scale down by one step on mobile: hero-display to section-display, section-display to a 2rem intermediate size. Line heights can remain constant due to the generous defaults.

## Practical implementation guidance

### Preserve
- The strict two-family typography hierarchy; do not substitute system fonts for Mozilla Headline or Mozilla Text
- The single action blue for all interactive elements; avoid introducing secondary button colors
- The high contrast between light pages and dark footer; this inversion is a signature structural element
- The flat card treatment with border-only definition; shadows would contradict the open-source aesthetic
- The generous whitespace around primary conversion buttons; crowding reduces perceived importance

### Avoid
- Gradient backgrounds on UI surfaces; gradients are reserved for the Firefox logo and illustration accents only
- Rounded corners larger than 1.5rem on panels; excessive rounding would soften the brand's precision
- Body text in Mozilla Headline; the display family is optimized for large sizes only
- Colored text outside of links and labels; the system relies on dark gray for readability
- Card shadows or hover lift effects; these would introduce elevation language not present in the source

### Recommended build order
1. Establish the 4px relative unit and type scale with Mozilla Text at all body sizes
2. Implement the dark footer as the structural anchor, since it inverts the entire palette
3. Build the primary action button with exact padding, radius, and icon placement
4. Create the feature card component with border, padding, and internal spacing
5. Add the content panel with asymmetric illustration support
6. Implement the notification banner with mint surface and shadow elevation
7. Polish the navigation header with dropdown chevrons and logo lockup

### Accessibility
- Ensure the action blue on white meets WCAG AA contrast for normal text; the dark ink value provides additional safety for body copy
- The dark footer must maintain at least 4.5:1 contrast for all link text; the inverse-muted token should not be used for links below 18px
- Button targets should maintain minimum 44px touch height; the current padding achieves this at standard sizes
- Focus indicators should use the action color with a 2px outline offset, visible against both canvas and surface backgrounds
- The notification banner should include an aria-live region for automatic download announcements
- Language selector should include proper lang attributes and announce changes to screen readers

## Scope note

This guide covers the Firefox.com homepage, feature discovery pages, and download confirmation flow as visible in desktop screenshots. Mobile breakpoints, animation, form validation states, and secondary marketing pages are not represented. Measurements are practical adaptation targets derived from visible layout proportions. The Mozilla Headline and Mozilla Text families require verified licensing before production deployment.
