# How daylight-health.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/daylight-health.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with newsletter subscription, navigation columns, and oversized serif wordmark on warm yellow gradient background](https://pin.fontofweb.com/5657?format=jpg)](https://design.withfudge.com/share/pin-5657)

[Footer with newsletter subscription, navigation columns, and oversized serif wordmark on warm yellow gradient background](https://design.withfudge.com/share/pin-5657)

[![Hero section with botanical line illustration, cream headline, and pill button on deep plum background](https://pin.fontofweb.com/5656?format=jpg)](https://design.withfudge.com/share/pin-5656)

[Hero section with botanical line illustration, cream headline, and pill button on deep plum background](https://design.withfudge.com/share/pin-5656)

[![Testimonials section with staggered cream cards, client quotes, and circular avatars on peach-to-yellow gradient](https://pin.fontofweb.com/5655?format=jpg)](https://design.withfudge.com/share/pin-5655)

[Testimonials section with staggered cream cards, client quotes, and circular avatars on peach-to-yellow gradient](https://design.withfudge.com/share/pin-5655)

[![Statistics section with three overlapping cream metric cards and delicate line illustrations on warm peach background](https://pin.fontofweb.com/5654?format=jpg)](https://design.withfudge.com/share/pin-5654)

[Statistics section with three overlapping cream metric cards and delicate line illustrations on warm peach background](https://design.withfudge.com/share/pin-5654)

## Overview

Daylight Health presents a visual system built on warmth, trust, and editorial refinement. The design pairs an elegant, high-contrast serif display face with clean sans-serif body text, creating a tone that feels both personal and professionally grounded. The color strategy moves through a progression of warm environments: deep plum for dramatic hero moments, soft peach for content sections, and luminous warm yellow for closing areas. Delicate botanical line illustrations appear throughout, reinforcing a theme of growth and natural care. Rounded cards with generous padding soften the information architecture, while pill-shaped buttons maintain a consistent, friendly interaction language. The overall impression is of a healthcare service that values human connection, clarity, and calm confidence.

## Colors

The palette operates across four distinct modes that create rhythm as the user scrolls: a dark plum for dramatic contrast, warm peach and yellow for open, optimistic content areas, and cream for contained surfaces within those environments.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, wordmarks, and line illustrations on light backgrounds |
| cream | #FEF9E7 | Card surfaces, button fills, and contained content areas |
| peach | #F5CBA7 | Section backgrounds for statistics and testimonials |
| plum | #2D1F3D | Hero section background, high-contrast moments |
| warm-yellow | #F9E79F | Footer gradient base, closing section atmosphere |

The plum background creates a sophisticated, calming darkness that makes cream typography and botanical illustrations feel luminous. Peach provides an energetic but still gentle mid-tone for data presentation and social proof. Warm yellow appears most saturated at the page base, transitioning into the footer where it supports the oversized black wordmark. Cream serves as the universal surface for cards, buttons, and any element that needs to lift slightly from its background. Black ink maintains consistent authority across all environments, never shifting to softer charcoals or grays.

## Typography

Three font families create a clear hierarchy: Grenette Pro for editorial display moments, Styrene B Web for readable body text, and Dm Sans 9 Pt for functional labels and navigation. The system relies on weight and scale contrast rather than multiple weights within a single family.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Grenette Pro | 8rem | 300 | 0.9 | -0.02em | Oversized footer wordmark, dramatic display |
| section-display | Grenette Pro | 3rem | 300 | 1.1 | -0.01em | Section headlines, testimonial heading |
| body | Styrene B Web | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, card content |
| body-small | Styrene B Web | 0.875rem | 400 | 1.5 | 0em | Secondary descriptions, metadata |
| label | Dm Sans 9 Pt | 0.75rem | 400 | 1.2 | 0.08em | Buttons, category labels, uppercase tags |
| navigation | Dm Sans 9 Pt | 0.75rem | 400 | 1.2 | 0.06em | Footer links, header navigation items |

Grenette Pro, designed by Colophon Foundry, contributes a refined, slightly condensed serif character with elegant terminals that feel human and approachable rather than institutional. Styrene B Web, designed by Berton Hasebe and available from Commercial Type Inc, provides neutral, highly legible sans-serif texture for extended reading. Dm Sans 9 Pt offers compact, geometric clarity for functional text at small sizes. Verify licensing for these families before production use.

## Layout

The page follows a full-bleed section architecture where each major area receives its own background color, creating clear visual territories without heavy borders or separators. Content within sections centers on a comfortable reading width, with generous vertical breathing room between elements.

Section spacing uses 6rem as the standard vertical rhythm, creating deliberate pause between content areas. Cards and contained elements sit within this flow with 2rem internal padding, establishing a nested spacing system where components feel cushioned and approachable. The statistics section demonstrates an intentional overlap pattern: three cream cards stagger vertically, with the center card dropping below the outer pair to create visual interest and break rigid grid alignment.

The footer compresses information into a functional upper band—newsletter subscription, navigation columns, legal links—before releasing into the oversized wordmark that dominates the lower viewport. This creates a memorable closing signature that reinforces brand recognition. Horizontal rules in subtle dark tones separate functional footer content from the expressive wordmark below.

## Visual language

Botanical line illustrations in single-weight strokes appear as section accents, depicting potted plants, flowers, and still-life arrangements. These illustrations use the same ink color as text, maintaining visual unity while introducing organic shapes that soften the digital environment. The illustration style is deliberately delicate—thin continuous lines without fills, creating an airy, sketch-like quality that suggests care and attention.

Gradient transitions between warm yellow and peach appear in the footer and testimonials area, creating atmospheric depth without relying on photography. These gradients read as environmental color rather than decorative effects, supporting the content rather than competing with it.

Circular avatar images for testimonials introduce human presence through photography, cropped consistently at small sizes with natural lighting. The circular crop echoes the rounded corners of cards and buttons, reinforcing the system's soft geometry.

## Components

**Primary Button**
- Anatomy: Text label centered within a pill-shaped container
- Surface: Cream background with ink text
- Typography: Label token, uppercase with positive letter-spacing
- Shape: Full pill border radius
- Spacing: 0.875rem vertical padding, 2rem horizontal padding
- Composition: Appears inline after descriptive text or centered below content groups
- Variants: On dark plum backgrounds, the same cream fill creates high contrast; on light backgrounds, a subtle border may define the edge

**Statistics Card**
- Anatomy: Large percentage or number above a brief explanatory sentence
- Surface: Cream background with ink text
- Typography: Section-display token for the metric, body-small for the description
- Shape: 1.5rem border radius
- Spacing: 2rem internal padding
- Composition: Three cards in a row with center card offset vertically downward, creating a gentle wave pattern
- Hierarchy: The metric dominates visually, with description text centered below at reduced size

**Testimonial Card**
- Anatomy: Quotation text, circular avatar image, name, and location
- Surface: Cream background with ink text
- Typography: Body token for the quote, body-small for attribution
- Shape: 1.5rem border radius
- Spacing: 2rem internal padding
- Composition: Staggered arrangement with cards at varied vertical positions, creating an organic, non-uniform grid
- Hierarchy: The quote occupies the upper portion; avatar and attribution sit at the bottom left

**Newsletter Subscription**
- Anatomy: Email input field and submit button in horizontal arrangement
- Surface: Transparent or minimal background on warm yellow
- Typography: Body-small for input placeholder, label token for button
- Shape: Input uses bottom border only; button uses pill shape with visible border
- Spacing: Compact horizontal grouping with clear separation between input and button
- Composition: Left-aligned within footer grid, with descriptive text above

**Footer Wordmark**
- Anatomy: Single oversized word spanning full viewport width
- Surface: Transparent over warm yellow gradient
- Typography: Hero-display token at maximum scale
- Shape: Text naturally forms the shape; no container
- Spacing: Generous vertical padding above and below
- Composition: Centered, cropped at viewport edges, creating immersive brand moment

## Responsive behavior

The oversized footer wordmark should scale down proportionally on narrower viewports, maintaining legibility without horizontal scrolling. At smaller sizes, the hero headline may reduce from 8rem toward 4rem while preserving the tight line height and negative letter spacing.

The three-column statistics cards should stack vertically on narrow screens, with the center offset pattern either eliminated or transformed into a simple centered stack. Testimonial cards should similarly collapse from staggered grid to single-column scroll, maintaining full card width with consistent internal padding.

Navigation columns in the footer should reorganize from horizontal distribution to stacked sections, preserving category groupings. The newsletter subscription may shift from horizontal to vertical arrangement, with the button expanding to full width below the input field.

## Practical implementation guidance

**Preserve**
- The warm gradient progression from plum through peach to yellow; this color journey defines the emotional arc of the page
- The delicate single-weight line illustration style; heavier strokes would lose the airy quality
- The tight negative letter spacing on Grenette Pro display sizes; this creates the refined, editorial density
- The generous card padding and rounded corners; these establish the approachable, human-centered tone

**Avoid**
- Adding drop shadows to cards; the design relies on color contrast and overlap rather than elevation effects
- Introducing additional font weights or families; the three-family system is intentionally restrained
- Using pure white instead of cream; the warmth of cream is essential to the palette's character
- Sharp corners on interactive elements; the consistent rounding is a core visual signature

**Recommended build order**
1. Establish the color tokens and gradient backgrounds for each section
2. Implement typography hierarchy with Grenette Pro for display and Styrene B Web for body
3. Build the card component with consistent padding and border radius
4. Create the pill button with label typography
5. Add botanical illustrations as inline SVG or optimized images
6. Implement the footer with grid navigation and oversized wordmark
7. Fine-tune responsive behavior for card stacks and wordmark scaling

**Accessibility**
- Ensure cream text on plum backgrounds meets contrast ratios; the light cream against dark plum should be verified at WCAG AA minimum
- Maintain focus indicators on pill buttons that are visible against both light and dark backgrounds
- Provide alt text for botanical illustrations that describes their decorative purpose
- Consider reducing motion for gradient backgrounds if implementing animated transitions
- Ensure the oversized wordmark does not interfere with screen reader navigation when implemented as decorative text

## Scope note

This guide covers the landing page surface visible in the supplied images, including the hero, statistics, testimonials, and footer sections. Navigation header, interior pages, form validation states, mobile menu behavior, and motion design are not represented in the available material. Measurements are practical adaptation targets. Verify licensing for these families before production use.
