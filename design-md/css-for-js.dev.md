# How css-for-js.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/css-for-js.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with dark gradient wave, Josh Comeau logo in pink, and link columns on near-black background](https://pin.fontofweb.com/1382?format=jpg)](https://design.withfudge.com/share/pin-1382)

[Footer section with dark gradient wave, Josh Comeau logo in pink, and link columns on near-black background](https://design.withfudge.com/share/pin-1382)

[![Testimonials grid with white cards, Twitter avatars, and star ratings on dark background](https://pin.fontofweb.com/1381?format=jpg)](https://design.withfudge.com/share/pin-1381)

[Testimonials grid with white cards, Twitter avatars, and star ratings on dark background](https://design.withfudge.com/share/pin-1381)

[![FAQ accordion section with three-column layout, expanded yellow-highlighted question, and dark theme](https://pin.fontofweb.com/1380?format=jpg)](https://design.withfudge.com/share/pin-1380)

[FAQ accordion section with three-column layout, expanded yellow-highlighted question, and dark theme](https://design.withfudge.com/share/pin-1380)

[![Bonus features section with gradient heading, 3D illustrations, and alternating image-text layout](https://pin.fontofweb.com/1379?format=jpg)](https://design.withfudge.com/share/pin-1379)

[Bonus features section with gradient heading, 3D illustrations, and alternating image-text layout](https://design.withfudge.com/share/pin-1379)

## Overview

The CSS for JavaScript Developers landing page presents a bold, dark-themed visual system designed for technical credibility and playful personality. The design centers on a near-black canvas that makes vibrant gradient accents and 3D illustrations pop with theatrical impact. The page communicates expertise through clean typography and structured content while using whimsical visual elements—retro computer renders, treasure chests, and gradient text effects—to signal that learning CSS can be engaging rather than dry.

The visual hierarchy moves visitors through social proof, detailed feature explanations, and pricing information with consistent rhythm. Every section maintains the dark foundation while introducing color through purposeful accents: pink-to-yellow gradients for headlines, white cards for testimonials, and yellow highlights for interactive states. The overall impression is of a premium, thoughtfully crafted educational product that respects the visitor's intelligence while remaining approachable.

## Colors

The color system operates on a high-contrast dark mode with selective vibrant accents. The near-black canvas creates immersion and makes illuminated elements feel intentional.

| token | value | use |
|---|---|---|
| canvas | #0d0d0d | Primary page background, deep sections, footer base |
| surface | #1a1a1a | Slightly elevated dark panels, subtle differentiation |
| surface-elevated | #ffffff | Testimonial cards, content cards on dark background |
| ink | #ffffff | Primary text, headings, body copy on dark backgrounds |
| ink-muted | #a0a0a0 | Secondary text, captions, footer legal copy |
| action | #ff6b9d | Primary brand accent, logo, gradient start, links |
| accent-yellow | #ffd93d | Gradient end, FAQ active states, highlight emphasis |
| accent-cyan | #4ecdc4 | Secondary accent, occasional UI details |

The gradient system uses action-to-accent-yellow transitions for key headlines, creating a warm, energetic spectrum against the dark canvas. White appears exclusively for elevated surfaces where readability of dark text is required, such as the testimonial cards. The muted gray serves footer text and secondary information without competing for attention. Yellow functions as an interactive signal color, appearing in expanded FAQ items to indicate active state.

## Typography

The type system relies on Wotfard across all roles, leveraging its geometric clarity and friendly character. The family supports Regular and Semibold weights, with Semibold reserved for display and emphasis.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Wotfard | 4rem | 600 | 1.1 | -0.02em | Page hero, major section headings with gradient treatment |
| section-display | Wotfard | 2.5rem | 600 | 1.2 | -0.01em | Section titles, feature headings |
| body | Wotfard | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, FAQ content |
| body-small | Wotfard | 0.875rem | 400 | 1.5 | 0 | Testimonial quotes, card content, secondary descriptions |
| label | Wotfard | 0.75rem | 600 | 1.4 | 0.05em | Category labels, uppercase metadata |
| navigation | Wotfard | 0.875rem | 400 | 1.5 | 0 | Footer links, header navigation |

Display sizes use tight negative tracking for visual density and impact, while body sizes maintain neutral tracking for extended reading. The 1.6 line height on body text provides comfortable reading for technical content. Verify licensing for Wotfard before production use.

## Layout

The page employs a centered single-column layout with controlled maximum width for readability. Content sections stack vertically with generous section spacing, creating clear narrative progression.

The grid system uses a three-column arrangement for the FAQ section, where questions distribute across columns in a masonry-like flow. This maximizes information density while maintaining scannability. Testimonials use a responsive grid that adapts from single column to multiple columns based on viewport width.

Section spacing follows a consistent vertical rhythm with 6rem between major sections. Internal content gaps of 1.5rem separate related elements within sections. Cards use 1.5rem internal padding to create breathing room around content.

The footer presents an asymmetric two-column layout: brand identity and copyright on the left, organized link columns on the right. A decorative wave gradient transitions from the main content into the footer, softening the section boundary.

## Visual language

The visual character balances technical precision with playful personality. Three-dimensional illustrations rendered in a soft, stylized aesthetic appear throughout—retro CRT monitors on rolling carts, treasure chests overflowing with tools and jewels, abstract geometric forms. These elements use realistic materials (wood grain, metallic surfaces, plastic sheens) but with exaggerated proportions and clean lighting that feels contemporary rather than kitschy.

Gradient treatments define the most important textual moments. Headlines shift from pink through orange to yellow, creating warmth and energy that contrasts with the cool darkness of the canvas. These gradients appear as fill treatments on text, requiring background-clip techniques for implementation.

The wave motif appears as a transitional element between sections, particularly at the footer boundary. This organic curve softens the otherwise rectilinear layout and creates visual momentum.

Iconography remains minimal and functional—small triangles for FAQ expand indicators, social platform logos for testimonials. The design avoids decorative icon clutter in favor of illustration and typography as primary visual carriers.

## Components

### Testimonial Card

- **Anatomy**: Avatar image, name, Twitter handle, platform icon, quote text, optional star rating
- **Surface**: White background (#ffffff) on dark canvas
- **Typography**: Name in body-small Semibold, handle in body-small Regular with muted color, quote in body-small Regular
- **Shape**: 0.75rem border radius
- **Spacing**: 1.5rem internal padding
- **Composition**: Avatar and identity row at top, quote below, stars at bottom when present
- **Variants**: Some cards contain longer quotes that span multiple paragraphs; height varies based on content

### FAQ Accordion Item

- **Anatomy**: Triangle indicator, question text, expandable answer region
- **Surface**: Transparent on canvas; no visible container boundary
- **Typography**: Question in body Regular, answer in body Regular with standard line height
- **Shape**: No border radius; full-width items
- **Spacing**: Generous vertical padding between items, approximately 1.5rem
- **Composition**: Three-column grid distribution; expanded answer spans full width below question
- **States**: Collapsed shows right-pointing triangle; expanded shows down-pointing triangle with yellow question text highlight; answer text appears with standard white color

### Gradient Heading

- **Anatomy**: Text element with gradient fill
- **Surface**: Transparent background, gradient applied as text fill
- **Typography**: hero-display or section-display token
- **Gradient**: Linear gradient from action (#ff6b9d) through intermediate warm tones to accent-yellow (#ffd93d)
- **Composition**: Centered or left-aligned depending on section; often paired with subtitle in standard white

### Footer

- **Anatomy**: Wave transition, brand logo, copyright text, link columns with headers
- **Surface**: Canvas color continuing from main content; wave uses surface gradient
- **Typography**: Logo in action color with custom mark, links in navigation token, copyright in body-small with ink-muted
- **Composition**: Two-column layout with brand left, links right; links organized under "Links" header

## Responsive behavior

The three-column FAQ grid should collapse to two columns on medium viewports and single column on small screens, maintaining readable line lengths. Testimonial cards should reflow from multi-column masonry to single column stack, preserving card proportions and internal spacing.

The asymmetric feature sections with 3D illustrations should stack vertically on narrow viewports, with illustrations appearing above their accompanying text. Gradient headings should scale down proportionally, maintaining impact without overflow.

Navigation and footer link columns should consolidate into simplified arrangements on mobile, potentially collapsing to accordion or single-column lists.

## Practical implementation guidance

### Preserve
- The dark canvas as the dominant background; resist adding light sections that break immersion
- Gradient text treatments for primary headlines; these are signature visual moments
- Generous section spacing; the breathing room contributes to premium perception
- 3D illustration style consistency; mix of realistic materials with stylized proportions

### Avoid
- Adding borders or shadows to testimonial cards; the flat white-on-dark contrast is sufficient
- Using the gradient palette for UI chrome or buttons; reserve for text and emphasis
- Crowding the FAQ grid; the three-column distribution requires adequate viewport width
- Lightening the canvas; the near-black is essential for gradient and illustration impact

### Recommended Build Order
1. Establish dark canvas and typography scale with Wotfard
2. Implement gradient heading treatment as core brand element
3. Build FAQ accordion with three-column layout and expand behavior
4. Create testimonial card component with white surface
5. Add 3D illustration sections with alternating layout
6. Implement footer with wave transition and link organization

### Accessibility
- Ensure gradient text meets contrast requirements; provide solid-color fallback for reduced-motion or high-contrast modes
- Maintain focus indicators on FAQ accordion triggers that are visible against dark canvas
- Testimonial cards on white background should use dark text meeting WCAG AA standards
- Consider `prefers-reduced-motion` for any illustration animations or gradient shifts

## Scope note

This guide covers the landing page surface for CSS for JavaScript Developers, including the hero, testimonials, FAQ, bonus features, and footer sections. Pricing tables, course curriculum details, checkout flows, and mobile navigation patterns are not represented in the supplied images. Measurements are practical adaptation targets derived from visual inspection. Verify licensing for Wotfard before production use.
