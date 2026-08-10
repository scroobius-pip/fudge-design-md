# How mongodb.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mongodb.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ accordion section with dark green serif headings, muted body text, and green interactive icons on white background](https://pin.fontofweb.com/2805?format=jpg)](https://design.withfudge.com/share/pin-2805)

[FAQ accordion section with dark green serif headings, muted body text, and green interactive icons on white background](https://design.withfudge.com/share/pin-2805)

[![Dark navy contact page with green primary button, tab navigation, and form fields with white underline accents](https://pin.fontofweb.com/2804?format=jpg)](https://design.withfudge.com/share/pin-2804)

[Dark navy contact page with green primary button, tab navigation, and form fields with white underline accents](https://design.withfudge.com/share/pin-2804)

[![Deep green hero section with white serif display type, green CTA button, and dark card with checkmark list](https://pin.fontofweb.com/2803?format=jpg)](https://design.withfudge.com/share/pin-2803)

[Deep green hero section with white serif display type, green CTA button, and dark card with checkmark list](https://design.withfudge.com/share/pin-2803)

[![Customer success section with logo tabs, large serif quote, green statistic highlight, and dark action button](https://pin.fontofweb.com/2802?format=jpg)](https://design.withfudge.com/share/pin-2802)

[Customer success section with logo tabs, large serif quote, green statistic highlight, and dark action button](https://design.withfudge.com/share/pin-2802)

## Overview

MongoDB's digital presence communicates technical authority through a carefully calibrated contrast of classical and modern elements. The system anchors itself in deep, atmospheric darks—forest greens and midnight navies—that evoke the depth of data infrastructure, while a single bright green accent cuts through with the energy of a terminal cursor or status indicator. This is not a light, friendly SaaS aesthetic; it is a tool for developers who expect precision and density.

The visual hierarchy relies on typographic contrast rather than decorative elements. A distinctive serif display face, MongoDB Value Serif, handles all major headlines and quotes, lending an editorial gravitas that separates MongoDB from generic tech branding. Against this, Source Sans Pro provides the workhorse clarity for body text, labels, navigation, and interface elements. The result is a system that reads as both sophisticated and utilitarian—appropriate for a database company serving engineers and enterprise architects.

The component language favors dark surfaces with subtle elevation changes, minimal border treatments, and generous internal spacing. Forms appear as dark panels with white underline accents rather than enclosed boxes. Calls to action use a vivid green that maintains visibility against both light and dark backgrounds. Photography and illustration are restrained, allowing the color system and typography to carry the brand recognition.

## Colors

The palette operates in two primary modes: a light mode for content-heavy and documentation surfaces, and a dark mode for product immersion, forms, and hero moments. A single accent green unifies both.

| token | value | use |
|---|---|---|
| action | #00ED64 | Primary buttons, links, checkmarks, active states, success indicators |
| action-hover | #00C853 | Hover state for primary buttons and interactive green elements |
| ink | #001E2B | Primary text on light backgrounds, deep dark backgrounds |
| ink-secondary | #0A2A3B | Elevated dark surfaces, card backgrounds, form panels |
| canvas | #FFFFFF | Primary page background, text on dark surfaces |
| surface | #F9FBFA | Subtle section alternation, footer areas |
| surface-elevated | #112733 | Dark cards, modals, elevated panels on dark pages |
| muted | #5C6C75 | Secondary text, descriptions, placeholder content |
| border | #E8EDEB | Dividers on light backgrounds, accordion separators |
| border-inverse | #3D4F58 | Subtle borders on dark surfaces, inactive tab outlines |

The action green (#00ED64) functions as the system's pulse. It appears on primary buttons, inline links, checkmark icons, and tab active states. Against dark backgrounds it maintains strong luminance; against light backgrounds it provides sufficient contrast for interactive elements without overwhelming the composition. The darker action-hover (#00C853) provides a natural state change for cursor interaction without introducing a new hue.

Dark surfaces dominate product and conversion pages. The ink (#001E2B) and ink-secondary (#0A2A3B) pair creates depth through layering rather than shadow—cards sit slightly lighter than page backgrounds, forms sit within rounded panels that float above. Light surfaces appear in content sections, customer testimonials, and FAQ areas, where readability of longer text takes priority.

## Typography

Three font families serve distinct roles. MongoDB Value Serif, designed by Colophon Foundry, provides display and editorial voice. Source Sans Pro, designed by Paul D Hunt and available from Adobe, handles all interface and body text. Euclid Circular B, from Swiss Typefaces and listed in source materials as "Font-Copyright C 2018 Swiss Typefaces Sarl All Rights Reserved," appears in the font stack for bold interface moments though its primary visible use is in the heaviest weights.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | MongoDB Value Serif | 3.5rem | 400 | 1.1 | -0.01em | Page heroes, major section openings |
| section-display | MongoDB Value Serif | 2.5rem | 400 | 1.15 | -0.01em | Section headings, feature titles |
| body | Source Sans Pro | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, form labels |
| body-large | Source Sans Pro | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, introductory copy |
| label | Source Sans Pro | 1rem | 600 | 1.4 | 0.05em | Buttons, tags, category labels, uppercase treatments |
| navigation | Source Sans Pro | 1rem | 600 | 1 | 0.02em | Primary navigation, tabs, breadcrumbs |

The serif display sizes use tight leading and slight negative tracking to maintain cohesion at large scales. Body text is set loosely for screen readability. Labels carry a subtle positive tracking that adds authority to small uppercase treatments. The type scale is built on a 4px relative unit, with sizes landing at whole-number multiples: 16px (1rem), 20px (1.25rem), 40px (2.5rem), and 56px (3.5rem).

## Layout

The layout system favors centered, contained compositions with generous vertical breathing room. Major sections stack with substantial separation, typically 6rem between distinct content blocks. Within sections, content aligns to a centered column that narrows for text-heavy areas and widens for feature showcases.

Grid behavior follows a predictable pattern: hero sections often split asymmetrically, with text occupying the left 40-45% and imagery or cards filling the remainder. Form pages use a two-column layout at desktop widths, with contextual information or alternative contact methods on the left and the primary form on the right. Content sections like customer testimonials or FAQs return to a single centered column.

Horizontal padding remains consistent across breakpoints, estimated at 1.5rem on smaller viewports and expanding to 3rem or more on desktop. The system does not appear to use full-bleed content except for background color fields and decorative graphic elements. Cards and panels receive internal padding of 2rem, creating clear separation between container edges and content.

Navigation and tabs sit within the content flow rather than as floating elements. On dark pages, the entire viewport background carries the deep ink color, with content cards layered above using ink-secondary. On light pages, white canvas extends edge to edge with subtle surface alternation for section differentiation.

## Visual language

The visual character balances technical precision with unexpected warmth. The serif display type is the most distinctive choice—against the sans-serif body, it creates a magazine-like quality that elevates product descriptions into editorial content. This pairing appears intentional: MongoDB wants to be read as a thought leader, not merely a utility.

Color application follows a disciplined pattern. Green is reserved for action and success; it never appears as a background fill except in small decorative shapes. Dark backgrounds dominate conversion and product pages, creating an immersive, focused environment. Light backgrounds appear where credibility and readability matter—customer quotes, documentation, support content.

Graphic elements include abstract organic shapes in bright green that bleed off viewport edges, visible in product hero sections. These soft, blob-like forms contrast with the rigid geometry of cards and buttons, adding visual interest without competing for attention. Customer logos appear in grayscale or their native colors, contained within tab-like selectors with subtle bottom borders.

Iconography is minimal and functional: checkmarks for feature lists, plus and minus for accordion states, simple arrows for links. The checkmark shares the action green, reinforcing the positive association. No decorative illustration style is visible in the supplied images; the system relies on typography, color blocking, and photography for visual interest.

## Components

### Primary button

- **Anatomy**: Text label centered within a rectangular container
- **Surface**: Solid action green (#00ED64) background
- **Typography**: label token, ink (#001E2B) text, semibold weight
- **Shape**: 0.25rem border radius, sharp enough to feel technical but not harsh
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Typically left-aligned within content blocks, occasionally centered in narrow columns
- **Variants**: On dark backgrounds, the same treatment applies with no modification; on light backgrounds, a dark inverse variant may appear with ink background and canvas text

### Tab navigation

- **Anatomy**: Horizontal row of text labels with optional bottom border or background fill
- **Surface**: Transparent background for inactive tabs; subtle border-inverse outline or ink-secondary fill for active/selected state
- **Typography**: navigation token, canvas text on dark backgrounds
- **Shape**: Full-width equal distribution within a contained panel, approximately 0.25rem radius on outer corners when treated as buttons
- **Spacing**: Internal padding of 0.75rem to 1rem, gap of 0.5rem between tabs
- **Composition**: Centered or left-aligned below section headers, serving as content filters or form category selectors
- **States**: Active tab receives a visible border or background distinction; inactive tabs remain muted

### Form input

- **Anatomy**: Text label floating above or within the field, followed by underline-accented input area
- **Surface**: Ink-secondary (#0A2A3B) background on dark pages, with 2px white bottom border as the primary visual indicator
- **Typography**: body token for input text, muted color for placeholder state
- **Shape**: Zero border radius, full-width within container
- **Spacing**: 1rem vertical padding, 0.75rem horizontal padding, generous 1.5rem gap between stacked fields
- **Composition**: Arranged in single or double columns within form panels; paired fields like First Name/Last Name sit side by side with 1rem gap
- **States**: Focus state likely intensifies the white border; error state not visible in supplied images

### Accordion

- **Anatomy**: Question text as trigger, expandable answer area, plus/minus icon at right edge
- **Surface**: Transparent background on light canvas, with 1px border (#E8EDEB) separating items
- **Typography**: section-display or body-large token for questions in dark ink; body token for answers in muted color
- **Shape**: Full-width rows, no border radius
- **Spacing**: 1.5rem vertical padding per item, 1rem between question and answer when expanded
- **Composition**: Stacked vertically within a centered container, typically 60-70% of viewport width
- **States**: Collapsed shows plus icon in action green; expanded shows minus icon, answer text revealed below with top margin

### Feature card

- **Anatomy**: Container with internal padding, optional header label, list of items with icons
- **Surface**: Ink-secondary (#112733) background on dark pages, rounded panel corners
- **Typography**: label token for small uppercase headers; body-large for list items in canvas white
- **Shape**: 1.5rem border radius, creating soft but substantial containment
- **Spacing**: 2rem internal padding, 1rem between list items
- **Composition**: Positioned to the right of hero text or centered within feature grids
- **Iconography**: Green checkmarks as bullet replacements, maintaining the action color association

### Customer testimonial

- **Anatomy**: Logo selector tabs, large quotation, attribution block, optional metric highlight, case study link
- **Surface**: Canvas white background, with logo tabs separated by subtle borders
- **Typography**: hero-display or section-display serif for the quote itself; body for attribution; large serif or sans-serif for metrics in action green
- **Shape**: Tabs as underlined text buttons; metric numbers may appear oversized relative to surrounding text
- **Spacing**: 3rem between logo row and quote content, 1.5rem between quote and attribution
- **Composition**: Asymmetric layout with metric and logo on left, quote and attribution on right; or centered single column on narrower viewports

## Responsive behavior

The system appears designed with a desktop-first approach, though specific breakpoint values are not visible in the supplied images. Based on layout patterns, several responsive adaptations are recommended.

The asymmetric hero layouts with text-left and card-right should stack vertically on narrow viewports, with the feature card moving below the headline and CTA. Form two-column layouts should collapse to single column, with the contextual sidebar (chat options, FAQ links) appearing above the form rather than beside it.

Typography should scale down proportionally: hero-display from 3.5rem to approximately 2.5rem on tablet and 2rem on mobile; section-display from 2.5rem to 2rem and 1.75rem respectively. Body text may remain at 1rem across all breakpoints for readability.

Navigation tabs that distribute horizontally at desktop should become horizontally scrollable or collapse to a dropdown on mobile, preserving the equal-width treatment where possible. Accordion containers should expand to full viewport width on mobile, removing the centered column constraint.

The dark page backgrounds should extend to full viewport width at all sizes, with internal content maintaining consistent horizontal padding. Decorative green shapes may reposition or scale down on mobile to avoid overwhelming the reduced content area.

## Practical implementation guidance

### Preserve

- The serif/sans-serif contrast between display and body text; this is the system's most distinctive quality
- The disciplined use of green: reserve it for interactive elements, links, checkmarks, and primary buttons only
- Dark form treatments with white underline accents rather than enclosed input boxes
- Generous section spacing; the system breathes, even with dense technical content
- Rounded panels (1.5rem) for elevated content on dark backgrounds

### Avoid

- Lightening the dark backgrounds; the depth of #001E2B and #0A2A3B is essential to the brand atmosphere
- Adding decorative borders or shadows to cards; rely on background color contrast for elevation
- Using the serif face for body text or UI labels; it is strictly for display and editorial moments
- Introducing additional accent colors; the single green carries sufficient weight
- Shrinking body text below 1rem for readability; the system prioritizes clarity

### Recommended build order

1. Establish the dark page background and light page background as foundational tokens
2. Implement the type scale with MongoDB Value Serif for headings and Source Sans Pro for body
3. Build the primary button component with action green background and ink text
4. Create the form input pattern with dark background and white underline
5. Develop the accordion component for FAQ and expandable content
6. Add the feature card with checkmark list for product pages
7. Implement tab navigation for content filtering and form categories
8. Build the customer testimonial with logo selector and large serif quote

### Accessibility

- Ensure action green (#00ED64) against ink backgrounds meets WCAG contrast requirements for text; it may need darkening for small text compliance
- Maintain visible focus indicators on dark form inputs; the white underline should intensify or add a glow
- Provide keyboard navigation for accordion triggers and tab panels
- Use semantic heading hierarchy despite the visual uniformity of serif display sizes
- Consider a reduced-motion preference for any decorative shape animations
- Ensure placeholder text in form fields does not rely solely on color distinction from filled values

## Scope note

This guide covers the visual system as visible on MongoDB's homepage, product pages, contact forms, and customer success sections. It does not include mobile-specific layouts, animation specifications, dark mode toggle behavior, or component states beyond those visible in still images. Measurements are practical adaptation targets derived from the supplied interface images.
