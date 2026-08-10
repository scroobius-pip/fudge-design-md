# How pingo.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pingo.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with blue background, app store badges, and language links showing the brand's global reach](https://pin.fontofweb.com/10067?format=jpg)](https://design.withfudge.com/share/pin-10067)

[Footer section with blue background, app store badges, and language links showing the brand's global reach](https://design.withfudge.com/share/pin-10067)

[![FAQ accordion with large display heading, expanded answer text, and circular plus-minus toggles](https://pin.fontofweb.com/10066?format=jpg)](https://design.withfudge.com/share/pin-10066)

[FAQ accordion with large display heading, expanded answer text, and circular plus-minus toggles](https://design.withfudge.com/share/pin-10066)

[![Testimonials carousel with star ratings, learner quotes, and reviewer attribution cards](https://pin.fontofweb.com/10065?format=jpg)](https://design.withfudge.com/share/pin-10065)

[Testimonials carousel with star ratings, learner quotes, and reviewer attribution cards](https://design.withfudge.com/share/pin-10065)

[![Feature cards grid on blue background showing conversation scenarios with illustrated icons](https://pin.fontofweb.com/10064?format=jpg)](https://design.withfudge.com/share/pin-10064)

[Feature cards grid on blue background showing conversation scenarios with illustrated icons](https://design.withfudge.com/share/pin-10064)

## Overview

Pingo AI's landing page presents a warm, approachable visual system built around the idea of effortless conversation. The design pairs a soft off-white canvas with electric blue accents, creating a friendly contrast that feels both energetic and trustworthy. Large, relaxed typography in Lexend sets a conversational tone, while generously rounded cards and pill-shaped buttons reinforce the app's accessibility. The page alternates between light sections and bold blue immersive moments, using illustrated scenario cards to demonstrate real-world language use. Every element—from the floating navigation pill to the star-rated testimonials—contributes to a sense of ease and encouragement, positioning Pingo as a companion rather than a classroom tool.

## Colors

The palette centers on warmth and clarity, with a distinctive electric blue as the primary accent.

| token | value | use |
|---|---|---|
| canvas | #FAF9F7 | Page background; warm off-white reducing eye strain |
| surface | #FFFFFF | Card backgrounds, header pill, elevated containers |
| ink | #000000 | Primary text, headings, body copy |
| muted-ink | #666666 | Secondary text, descriptions, FAQ answers |
| action | #006AFF | Primary buttons, links, active states, footer background |
| action-light | #3F95FF | Gradient start, hover highlights, decorative elements |
| action-hover | #1B1B1B | Dark button variant, emphasis backgrounds |
| footer-surface | #006AFF | Footer full-bleed background |
| footer-ink | #FFFFFF | Footer text, links, logo on blue background |
| hairline | #EAE5DD | Subtle borders, dividers, accordion separators |
| highlight-pink | #F25682 | Accent in illustrations, decorative dots |
| gradient-blue-start | #3F95FF | Linear gradient beginning for badges |
| gradient-blue-end | #006AFF | Linear gradient end for badges |

The system uses two dominant modes: a light mode with `canvas` or `surface` backgrounds and `ink` text for reading-heavy sections, and an immersive blue mode with `action` backgrounds and `surface` or `footer-ink` text for emotional, feature-driven moments. The footer extends the blue mode to a full-bleed conclusion. Gradients appear sparingly, primarily on small badges and decorative elements, moving from `action-light` to `action`. Image palette colors—yellows, pinks, and additional blues—appear only in photography and illustrations, never as interface tokens.

## Typography

The site uses Lexend as its primary typeface for all visible interface text, designed by Bonnie Shaver-Troup and Thomas Jockin, available from Lexend. The design facts also list Applesystem and Times as detected families; Applesystem appears on system-level elements and Times serves as a generic fallback, neither contributing to the designed visual language. Verify licensing for these families before production use.

The type system relies on size and tracking variation rather than weight, maintaining a consistent Regular (400) weight throughout for a calm, approachable voice. A single Medium (500) exception appears for emphasized labels within cards.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lexend | 4rem | 400 | 1.05 | -0.02em | Main page headlines, "Ready when you are" |
| section-display | Lexend | 2.875rem | 400 | 1.05 | -0.025em | Section headings, "Frequently asked questions" |
| card-heading | Lexend | 2rem | 400 | 1.2 | -0.02em | Feature card titles, scenario names |
| body | Lexend | 1rem | 400 | 1.5 | 0em | Default paragraph text, navigation |
| body-large | Lexend | 1.25rem | 400 | 1.1 | 0em | Hero descriptions, introductory paragraphs |
| body-small | Lexend | 0.875rem | 400 | 1.4 | 0em | Footer links, metadata, captions |
| label | Lexend | 0.75rem | 400 | 1.2 | 0em | Small tags, timestamps |
| navigation | Lexend | 0.875rem | 400 | 1.4 | 0em | Header links, footer navigation |
| stat-number | Lexend | 2.5rem | 400 | 1 | -0.02em | Large numerals, "6,000,000+" |

The display sizes use tight negative tracking for a modern, editorial feel, while body text maintains neutral spacing for readability. Line heights are generous in body contexts and tight in display contexts, creating clear hierarchy without weight changes.

## Layout

The page follows a centered, single-column layout with generous horizontal margins that create a comfortable reading measure. Content containers use a maximum width of approximately 25.25rem for standard sections and 36.25rem for wider hero moments, centered with auto margins. Sections stack vertically with substantial vertical padding of 7rem to 8rem, creating breathing room between content areas.

The header floats as a rounded pill container near the top of the viewport, containing the logo, navigation links, and a primary action button. This pill uses a white background with subtle border, sitting above both light and blue sections.

Main content areas alternate between full-width light sections and full-bleed blue sections. The light sections use the off-white `canvas` background, while blue sections immerse the entire viewport in `action`. Cards within blue sections use `surface` backgrounds to create elevation and focus.

Grids appear as needed: the feature cards use a three-column layout on desktop, while testimonials scroll horizontally as a carousel. FAQ items stack vertically with hairline separators. The footer spans full width with its blue background, containing a centered content area with logo, tagline, navigation links, language options, and copyright.

Spacing follows a consistent 0.125rem base unit. Key multiples include 0.5rem for tight internal gaps, 1rem for standard element spacing, 1.5rem for card gaps, 2rem for section internal spacing, 2.5rem for larger component gaps, and 3rem for major divisions. Section vertical padding uses 7rem or 8rem to create clear territorial boundaries between page areas.

## Visual language

The visual character balances playfulness with clarity. Rounded corners dominate: cards use 2.5rem radius, buttons and badges are fully pill-shaped at 9999px, and even small tags have generous rounding. This softness contrasts with the precision of the typographic system, creating an approachable but credible impression.

Illustrations within cards use simple, flat shapes in the brand's accent colors—blue, pink, yellow—depicting conversational scenarios like microphones, speech bubbles, and cultural landmarks. These icons sit at the top of feature cards, establishing context before the heading.

Shadows appear subtly on elevated cards, using a soft diffuse shadow with 8.6px vertical offset and 25.3px blur at 10% opacity, creating gentle depth without harsh edges. Some elements use an additional inset highlight shadow with white at 45% opacity, suggesting a light source from above.

The blue immersive sections create emotional peaks in the page rhythm. Against this saturated background, white cards float with clear separation, their content—conversation snippets in target languages, scenario titles—becoming the focal point. The blue itself carries meaning: it is the brand's signature, appearing in the logo, primary buttons, footer, and decorative gradients.

Testimonials use a horizontal scrolling pattern with partially visible off-screen cards, encouraging exploration. Each card contains yellow star ratings, a quote in body text, and reviewer attribution with platform source. The carousel implies abundance and social proof.

## Components

### Header pill

- **Anatomy**: Logo mark with colored dots, text wordmark, navigation links ("How it works", "Testimonials", "FAQ"), primary "Get the app" button
- **Surface**: White background with 1px solid `hairline` border
- **Typography**: Navigation links use `{typography.navigation}`, button uses `{typography.body}`
- **Shape**: Full pill radius (`9999px`), padding 0.5rem top and bottom, 0.75rem right, 1.5rem left
- **Spacing**: Internal gap of 1rem between elements; centered in viewport with 25.25rem side margins
- **Composition**: Horizontal flex layout, logo and nav left-aligned, button right-aligned

### Primary button

- **Anatomy**: Text label with optional icon, full click target
- **Surface**: `action-hover` background (`#1B1B1B`) with `surface` text; or `action` background (`#006AFF`) with `surface` text
- **Typography**: `{typography.body}`
- **Shape**: Pill radius (`9999px`), height approximately 3rem
- **Spacing**: Horizontal padding 1.5rem, internal gap 0.75rem between icon and text
- **Variants**: Dark variant for high contrast on light backgrounds; blue variant for emphasis

### Feature card

- **Anatomy**: Illustrated icon, heading, descriptive text, optional conversation snippet with language badge
- **Surface**: `surface` background on `action` section background
- **Typography**: Heading uses `{typography.card-heading}`, body uses `{typography.body}`, snippets use `{typography.body-small}`
- **Shape**: 2.5rem radius, padding 1.75rem
- **Spacing**: Internal gap 1.5rem between elements
- **Composition**: Vertical stack with icon at top, heading below, content at bottom

### Language badge

- **Anatomy**: Text label within rounded container
- **Surface**: Semi-transparent light blue background (`rgba(212, 232, 255, 0.7)`) with `action` text; or gradient from `action-light` to `action`
- **Typography**: `{typography.body-small}` at Medium (500) weight
- **Shape**: 2rem radius, padding 0.375rem vertical, 0.875rem horizontal
- **Use**: Highlights target language phrases within conversation snippets

### FAQ accordion

- **Anatomy**: Question text, circular toggle button with plus/minus icon, expandable answer area
- **Surface**: Transparent background, `hairline` top border on each item
- **Typography**: Question uses `{typography.body-large}` at 1.5rem equivalent, answer uses `{typography.body}` in `muted-ink`
- **Shape**: Toggle button is circular, approximately 2rem diameter
- **Spacing**: Item padding 1.5rem vertical, answer margin-top 1rem when expanded
- **States**: Collapsed shows plus icon in `action`; expanded shows minus icon, answer text revealed

### Testimonial card

- **Anatomy**: Star rating, quote text, reviewer name, platform attribution
- **Surface**: `surface` background
- **Typography**: Quote uses `{typography.body}`, name uses `{typography.body-small}`, platform uses `{typography.label}`
- **Shape**: 2.5rem radius, padding 1.75rem
- **Spacing**: Internal vertical stack with 1rem gaps
- **Composition**: Part of horizontal scrolling carousel with 1.25rem gap between cards

### Footer

- **Anatomy**: Logo, tagline, navigation links (Careers, Privacy, Terms, Help), language options row, copyright
- **Surface**: Full-bleed `action` background with `footer-ink` text
- **Typography**: Navigation uses `{typography.body-small}`, tagline and copyright use `{typography.body-small}` in reduced opacity
- **Spacing**: Padding 3.5rem top, 1.5rem sides, 2.5rem bottom; internal gap 2rem between major groups
- **Composition**: Centered content area, language options in horizontal wrap with dot separators

## Responsive behavior

The design appears optimized for desktop viewing with substantial horizontal margins. At narrower viewports, the following adaptations should occur: the header pill should collapse to a simplified layout with hamburger menu; the three-column feature card grid should stack to single column; the testimonial carousel should maintain horizontal scroll but show fewer cards; and the FAQ accordion should remain functional with full-width items. The generous section padding (7-8rem) should reduce proportionally on smaller screens, likely to 4-5rem. Font sizes should scale down modestly, with the 4rem hero display reducing to approximately 2.5rem on mobile to maintain line length control.

## Practical implementation guidance

### Preserve
- The warm off-white canvas (`#FAF9F7`) as the default page background; it distinguishes the site from sterile pure-white competitors
- Lexend's consistent Regular weight throughout; the calm voice is a brand differentiator
- Generous rounding on all interactive elements and cards; the softness supports the friendly positioning
- The blue immersive sections with floating white cards; this is the signature visual pattern
- Conversation snippets with highlighted target language phrases; they demonstrate product value immediately

### Avoid
- Introducing additional font weights beyond Regular and the single Medium exception; weight variation would break the calm tone
- Using pure black (`#000000`) for large backgrounds; the system reserves black only for small button surfaces
- Sharp corners on cards or buttons; they would contradict the approachable personality
- Crowding the header pill with too many links; the current minimal navigation supports focus

### Recommended build order
1. Establish the base: Lexend font loading, `canvas` background, base spacing unit
2. Build the header pill with logo, navigation, and "Get the app" button
3. Create the hero section with large display type and app store badges
4. Implement the feature card component with icon, heading, and snippet pattern
5. Build the blue immersive section with card grid
6. Add the FAQ accordion with toggle states
7. Implement the testimonial carousel with horizontal scroll
8. Construct the footer with full-bleed blue background

### Accessibility
- Ensure the blue-on-white and white-on-blue color combinations meet WCAG AA contrast ratios; the `action` blue (`#006AFF`) on white passes for large text, but verify for body sizes
- Provide visible focus indicators on the pill-shaped buttons and circular toggles; the default browser outline may be clipped by heavy rounding
- Make the FAQ accordion keyboard-navigable with Enter/Space to toggle, Arrow keys to move between items
- Include `prefers-reduced-motion` handling for the testimonial carousel; allow static grid or pause-on-hover alternatives
- Ensure the horizontal scroll carousel is operable with keyboard and screen readers, with clear scroll indicators

## Scope note

This guide covers the Pingo AI landing page's visible desktop surface, including header, hero, feature scenarios, testimonials, FAQ, and footer. Mobile breakpoints, animation specifications, hover states, form interactions, and the actual application interface beyond the marketing page are not included.
