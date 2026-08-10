# How min.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/min.io-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with gradient headline 'Exascale AI Data Store', product dashboard screenshot, and partner logo grid on light background](https://pin.fontofweb.com/6313?format=jpg)](https://design.withfudge.com/share/pin-6313)

[Hero section with gradient headline 'Exascale AI Data Store', product dashboard screenshot, and partner logo grid on light background](https://design.withfudge.com/share/pin-6313)

[![Full-bleed dark statistics slide with gradient '77%' numeral over abstract purple-pink fluid art background](https://pin.fontofweb.com/6312?format=jpg)](https://design.withfudge.com/share/pin-6312)

[Full-bleed dark statistics slide with gradient '77%' numeral over abstract purple-pink fluid art background](https://design.withfudge.com/share/pin-6312)

[![Dark navy footer with three-column link grid, email subscription form, social icons, and oversized 'MINIO' wordmark](https://pin.fontofweb.com/6314?format=jpg)](https://design.withfudge.com/share/pin-6314)

[Dark navy footer with three-column link grid, email subscription form, social icons, and oversized 'MINIO' wordmark](https://design.withfudge.com/share/pin-6314)

## Overview

MinIO's design system is built for enterprise credibility with theatrical visual moments. The interface alternates between two distinct modes: immersive dark sections that use full-bleed abstract imagery with gradient typography, and clean light surfaces that present product information with clinical precision. This dual-mode approach lets the brand communicate technical authority while maintaining emotional impact through bold color and scale.

The system centers on a high-contrast palette anchored by deep navy and pure black, punctuated by a vibrant magenta-to-blue gradient used for hero headlines and statistics. Typography splits role between Satoshi for commanding display sizes and Geist for readable interface text. Components are minimal and geometric—pill buttons, sharp cards, and generous whitespace keep the focus on product claims and data visualization. The overall impression is of infrastructure software that understands both performance metrics and visual storytelling.

## Colors

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text on light surfaces, deep backgrounds |
| ink-deep | #01091B | Footer background, darkest immersive sections |
| ink-navy | #021016 | Header bar, secondary dark surfaces |
| surface-navy | #1C2D4E | Muted UI elements, subtle borders on dark |
| action-blue | #3A8CF1 | Interactive highlights, data visualization accents |
| muted | #4D5761 | Secondary text, disabled states |
| slate | #8995A7 | Tertiary text, footer labels, subtle UI |
| accent-magenta | #C515B1 | Gradient endpoint, brand energy moments |
| accent-red | #CF163D | Primary action buttons, urgent highlights |
| canvas | #FFFFFF | Light section backgrounds, text on dark |

The color strategy divides into functional and expressive roles. Functional colors—ink, canvas, muted, slate—handle everyday interface needs with predictable contrast. Expressive colors emerge in the gradient system: the magenta-to-cyan sweep across hero headlines and statistics creates visual heat that distinguishes MinIO from conventional enterprise blue-gray palettes. Dark sections use ink-deep and ink-navy as atmospheric depths, while light sections stay nearly monochrome with canvas backgrounds and ink text. The accent-red appears sparingly, reserved for primary calls-to-action where it demands attention against both light and dark contexts.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Satoshi | 6rem | 700 | 1.1 | -0.02em | Hero headlines with gradient fill |
| section-display | Satoshi | 3.5rem | 500 | 1.17 | normal | Section headings, trust statements |
| body | Geist | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, navigation |
| body-large | Geist | 1.125rem | 400 | 1.55 | normal | Lead paragraphs, feature descriptions |
| label | Geist | 0.75rem | 500 | 1.5 | 0.08em | Category headers, footer column titles |
| stat-display | Geist | 15rem | 700 | 0.8 | normal | Oversized statistics, immersive numbers |
| button | Geist | 1rem | 600 | 1.6 | 0.0125em | Button labels, emphasized links |

Satoshi carries the brand voice at display sizes with its confident geometric construction and tight tracking on hero headlines. Geist handles everything else: from body copy to navigation to the massive stat-display numerals that anchor immersive slides. The weight range stays disciplined—400 for reading, 500 for labels, 600 for buttons, 700 for display and statistics. Letter spacing opens slightly for labels to create all-caps-like presence without actually using uppercase, while hero-display tightens to -0.02em for visual density.

Geist is designed by Basementstudio, Andrés Briganti, Mateo Zaragoza and available through Basementstudio, Vercel, Andrés Briganti, Guido Ferreyra, Mateo Zaragoza. Satoshi is designed by Deni Anggara and available through Indian Type Foundry. Verify licensing for these families before production use.

## Layout

The page structure alternates between contained content bands and full-bleed immersive sections. Standard content uses a maximum width of approximately 73rem with 2.5rem horizontal padding, creating comfortable reading margins on large screens. The header maintains this containment while adding vertical padding of 0.75rem, keeping navigation compact and persistent.

Immersive sections break the container entirely, filling the viewport width with dark atmospheric backgrounds and centered content. These sections use generous vertical padding—typically 6rem or more—to let the background imagery breathe and to create dramatic pacing against the tighter light sections.

The spacing scale derives from a 0.125rem base unit: 0.625rem for tight internal gaps, 0.75rem for component padding, 1rem for standard element separation, 1.5rem for related groups, 3rem for section subsections, and 6rem for major section breaks. This progression supports both dense data presentations and airy marketing moments without arbitrary values.

Grid behavior in content sections tends toward asymmetric two-column layouts: a text block with headline and description on the left, paired with a product screenshot, statistics, or logo grid on the right. The footer compresses this into a dense four-zone grid: three link columns plus a contact and subscription zone, all against the deep navy background.

## Visual language

The visual language balances technical precision with organic energy. On the technical side: sharp corners on cards and panels, consistent pill-shaped buttons, monochrome logo grids with uniform sizing, and dashboard screenshots presented with subtle shadow and rounded corners. On the organic side: full-bleed abstract fluid imagery in purple, pink, and coral tones; gradient-filled typography that shifts from magenta through violet to cyan; and oversized numerals that dominate their sections like environmental graphics.

Photography and illustration serve as atmospheric depth rather than literal representation. The abstract fluid forms suggest data in motion, transformation, and scale without depicting specific technology. These images always sit behind text, with sufficient darkness or blur to maintain readability of white or gradient typography.

The gradient system is the signature visual effect: applied to headline text and statistics, it creates a color temperature shift from warm magenta to cool cyan. This same gradient logic appears in subtle background glows and accent elements, unifying the expressive moments across the page. Against this color energy, the rest of the interface stays restrained—white, black, and gray handle the work of navigation, forms, and data presentation.

## Components

### Primary action button
- Anatomy: Text label with right-pointing chevron icon, no visible icon container separation
- Surface: Solid accent-red background with white text
- Typography: button token, 1rem, weight 600
- Shape: Full pill radius, generous horizontal padding approximately 1.125rem, vertical padding approximately 0.75rem
- Spacing: Typically appears with 1rem gap to secondary button
- Composition: Left-aligned in button groups, often paired with outline variant

### Secondary action button
- Anatomy: Text label with right-pointing chevron icon
- Surface: Transparent background with ink border and ink text
- Typography: button token
- Shape: Full pill radius, matching padding to primary
- Variants: On dark backgrounds, may invert to white border and white text

### Navigation bar
- Anatomy: Logo left, dropdown links center-left, utility links right, download button far right
- Surface: Transparent or ink-navy background depending on scroll position
- Typography: body token for links, button token for download action
- Composition: Horizontal flex with space-between, items vertically centered
- Spacing: Horizontal padding 2rem, vertical padding 0.75rem

### Announcement banner
- Anatomy: Icon, text, and inline link, dismissible with close button
- Surface: Ink-navy background with white text
- Typography: body token at reduced size
- Shape: Full width, no radius, subtle bottom border or shadow
- Composition: Centered text with close button absolute right

### Statistics slide
- Anatomy: Slide counter top-left, pagination dots top-right, oversized numeral center, caption below
- Surface: Full-bleed abstract imagery with dark overlay
- Typography: stat-display for numeral with gradient fill, body for caption in white
- Shape: Full viewport width, no internal containers
- Composition: Centered both axes, generous vertical padding

### Footer
- Anatomy: Three link columns with category labels, contact zone with social icons and email form, legal row with address and copyright
- Surface: Ink-deep background, white text, slate for secondary information
- Typography: label token for column headers, body token for links, reduced size for legal
- Shape: No border radius, full width
- Composition: Four-zone grid above, single row below with logo mark left and copyright right

### Email capture
- Anatomy: Text input with placeholder, submit button inline right
- Surface: Input has subtle dark surface or transparent with border, submit matches primary button or simplified text style
- Typography: body token for input, label token for submit
- Shape: Input with small radius or sharp, submit as text or minimal button
- Composition: Horizontal flex, input expands, submit fixed width

## Responsive behavior

The design's dramatic scale requires careful adaptation for smaller viewports. The hero-display at 6rem and stat-display at 15rem will need substantial reduction—target 3rem and 6rem respectively on tablet, with further compression on mobile to prevent overflow and maintain readability. The asymmetric two-column layouts should stack vertically, with imagery preceding or following text depending on narrative priority.

Navigation collapses to a hamburger menu on mobile, with the announcement banner remaining full-width and dismissible. The footer grid compresses from four zones to a single column sequence: links accordion or stacked, then contact, then legal. Pill buttons maintain their shape but expand to full width on mobile when stacked, preserving touch targets of at least 44px height.

The immersive statistics slides remain full-bleed but may crop differently, ensuring the numeral stays centered and the caption remains within safe margins. Gradient text effects should be tested for contrast compliance when reduced in size—consider solid white fallback for very small displays.

## Practical implementation guidance

### Preserve
- The strict separation between expressive dark sections and functional light sections; this rhythm defines the brand experience
- Gradient typography on headlines and statistics; implement as background-clip text with fallback solid color
- Pill button shapes consistently across all button variants
- Generous whitespace in immersive sections; the scale of empty space communicates enterprise confidence
- The two-typeface system: Satoshi for display, Geist for everything else

### Avoid
- Adding decorative elements that compete with the abstract background imagery
- Using accent-red for non-action purposes; its intensity is reserved for primary conversion moments
- Breaking the monochrome discipline in light sections with arbitrary color additions
- Shrinking the stat-display numerals too aggressively; they are designed for environmental impact
- Using gradient fills on body text or small labels; the effect requires size to read clearly

### Recommended build order
1. Establish the color tokens and type scale first, as these govern every subsequent decision
2. Build the light-section container system with max-width, padding, and grid behavior
3. Implement the dark immersive section with full-bleed imagery and centered content
4. Create the button system with primary, secondary, and inverted variants
5. Add the navigation with transparent-to-solid scroll behavior
6. Polish with gradient text effects and statistics animations

### Accessibility
- Ensure gradient text has sufficient contrast against its background; the magenta-to-cyan shift may fail in portions against light or mid-tone surfaces
- Provide visible focus indicators on pill buttons that work across both light and dark contexts
- Maintain keyboard navigation through the announcement banner dismiss action
- Test stat-display numerals with screen readers; consider aria-labels that speak the value clearly
- Verify color contrast for slate text on dark backgrounds meets WCAG AA standards

## Scope note

This guide covers the MinIO homepage including hero, statistics, partner trust, and footer surfaces. Interior pages, product documentation, dashboard interfaces, and mobile navigation patterns are not represented in the supplied material. Motion behavior for statistics, gradient animation, and scroll-triggered transitions are recommended but not documented here.
