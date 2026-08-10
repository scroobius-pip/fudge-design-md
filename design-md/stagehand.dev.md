# How stagehand.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/stagehand.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with green-accent footer, pixel-art landscape illustration, and top navigation with logo and action buttons](https://pin.fontofweb.com/10710?format=jpg)](https://design.withfudge.com/share/pin-10710)

[Hero section with green-accent footer, pixel-art landscape illustration, and top navigation with logo and action buttons](https://design.withfudge.com/share/pin-10710)

[![FAQ accordion section with left-aligned heading and stacked question rows with chevron indicators](https://pin.fontofweb.com/10709?format=jpg)](https://design.withfudge.com/share/pin-10709)

[FAQ accordion section with left-aligned heading and stacked question rows with chevron indicators](https://design.withfudge.com/share/pin-10709)

[![Feature cards grid showing four product screenshots with API method labels and descriptive text below](https://pin.fontofweb.com/10708?format=jpg)](https://design.withfudge.com/share/pin-10708)

[Feature cards grid showing four product screenshots with API method labels and descriptive text below](https://design.withfudge.com/share/pin-10708)

## Overview

Stagehand's design system is built for developer trust and immediate comprehension. The visual language pairs extreme restraint in color with bold typographic contrast: a near-monochrome black-and-white foundation is punctuated by a single vivid green that dominates the footer and brand moments. The interface avoids decoration in favor of clarity, using a geometric display typeface for headlines and a neutral sans-serif for everything else. Product screenshots appear as flat, bordered cards in a grid, while the FAQ section uses a clean accordion pattern with minimal chrome. The overall impression is of a tool that is precise, modern, and unafraid of strong color when it serves structural hierarchy.

## Colors

The palette is intentionally limited to create high contrast and immediate readability. Black ink on white canvas is the dominant mode, with green reserved for brand surfaces and the footer.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, buttons, logos, and structural lines |
| muted-ink | #686562 | Secondary text, captions, and supporting descriptions |
| canvas | #FFFFFF | Page background, card surfaces, and input fields |
| accent | #00C851 | Footer background, brand moments, and active states |
| accent-text | #FFFFFF | Text on green surfaces |
| border-subtle | #C5D3E8 | Card borders, dividers, accordion separators, and contained element outlines |

The green accent is saturated and electric, used at full strength in the footer. The border-subtle blue-gray appears in product screenshot cards, accordion separators, and other contained elements, providing definition without visual weight. No gradients are present in the interface; all backgrounds are flat and opaque. Photography and illustrations introduce warmer tones—yellows, oranges, and earth tones in the pixel-art landscape—but these remain content-level and do not influence the UI palette.

## Typography

The type system pairs three families across distinct roles. GtPlanar serves as the display face with its geometric, engineered character. Plain handles body text and UI labels with neutral clarity. GtStandardMono appears for code references and technical labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | GtPlanar | 2.25rem | 500 | 1.05 | -0.01em | Hero headlines and major section titles |
| section-heading | GtPlanar | 2.25rem | 500 | 1.05 | -0.01em | FAQ headings and section labels |
| body | Plain | 1rem | 400 | 1.5 | 0.01em | Paragraphs and descriptions |
| body-tight | Plain | 1rem | 400 | 1.2 | 0.01em | Dense text blocks and card descriptions |
| ui | Plain | 1rem | 500 | 1.2 | 0.015em | Buttons, navigation, and accordion triggers |
| label | Plain | 1rem | 500 | 1.2 | 0.015em | Category headers and footer column titles |
| code | GtStandardMono | 0.875rem | 500 | 1.2 | 0.06em | API method names and inline code |
| nav | -apple-system | 0.875rem | 400 | 1.3 | 0em | Top navigation links |

GtPlanar's tight tracking and slight negative letter-spacing give headlines a compact, authoritative presence. Plain at 1rem is the workhorse, appearing in both Regular and Medium weights with subtle tracking adjustments. The monospace face is used sparingly, with elevated tracking for readability at small sizes. Verify licensing for these families before production use.

## Layout

The page uses a centered, contained layout with generous horizontal margins. Content sits within a max-width container that creates breathing room on larger viewports. Sections stack vertically with substantial padding between them.

The hero section spans full width with a large illustrative element below the headline and action buttons. The illustration is positioned to bleed toward the edges, creating visual depth against the white canvas. Below, feature cards appear in a horizontal grid with equal-width columns and consistent gaps. The FAQ section uses an asymmetric two-column layout: the heading anchors the left, while accordion items occupy the right in a wider column. The footer is full-bleed green with a multi-column link grid and a large logo mark.

Spacing follows a modular scale based on 0.125rem increments. Key structural values include 6rem for major section vertical padding, 2rem for content gaps, and 1rem for internal component spacing. The top navigation is compact, with minimal vertical padding and horizontal gaps of approximately 1.5rem between links.

## Visual language

The aesthetic is utilitarian and developer-centric, with flat surfaces, minimal shadows, and precise edges. Rounded corners are restrained: cards use a subtle 0.25rem radius, while buttons are fully pill-shaped. The pixel-art landscape illustration in the hero introduces organic texture and warmth, contrasting with the otherwise clinical interface. Product screenshots in feature cards are presented as framed browser-like windows with soft blue-gray borders, suggesting contained environments without skeuomorphic excess.

Iconography is minimal and functional—chevrons for accordion expansion, carets for button actions. The Stagehand logo combines a geometric "S" mark with a wordmark, both rendered in black on light surfaces and white on green. No decorative patterns or background textures appear outside of content imagery. The green footer creates a strong horizontal anchor at the page base, with the large white logo mark providing immediate brand recognition against the saturated field.

## Components

### Primary action button
- **Anatomy**: Text label with trailing chevron icon
- **Surface**: Solid black background with white text
- **Typography**: `{typography.ui}`
- **Shape**: Full pill border radius
- **Spacing**: Compact padding, approximately 0.4375rem vertical and 1.125rem horizontal
- **Composition**: Inline with other buttons, separated by small gaps

### Secondary action button
- **Anatomy**: Text label with trailing chevron icon
- **Surface**: Light blue-gray background with black text
- **Typography**: `{typography.ui}`
- **Shape**: Full pill border radius
- **Spacing**: Same padding as primary variant
- **Composition**: Appears adjacent to primary button with 0.5rem gap

### Feature card
- **Anatomy**: Product screenshot image, API method label, description paragraph
- **Surface**: White background with subtle blue-gray border
- **Typography**: Method name uses `{typography.code}`, description uses `{typography.body-tight}`
- **Shape**: 0.25rem corner radius
- **Spacing**: Internal padding is minimal; image bleeds to edges, text sits below with standard gaps
- **Composition**: Four cards in equal-width horizontal grid with 2rem gaps

### Accordion item
- **Anatomy**: Question text with trailing chevron indicator
- **Surface**: Transparent, with bottom border only
- **Typography**: `{typography.ui}` in black
- **Shape**: No radius; full-width horizontal rule below
- **Spacing**: 1rem vertical padding, border uses `{colors.border-subtle}`
- **Composition**: Stacked vertically in a single column, right-aligned under section heading
- **States**: Chevron rotates to indicate expansion; no visible background change on hover

### Footer
- **Anatomy**: Large logo mark, multi-column link grid, social icons, legal links
- **Surface**: Full-bleed green background with black and white text
- **Typography**: Column headers use uppercase `{typography.label}` with wide tracking, links use `{typography.body-tight}`
- **Shape**: No radius; sharp edges
- **Spacing**: Generous internal padding, approximately 5rem top and substantial bottom
- **Composition**: Logo and wordmark stacked left, four link columns arranged right, social and legal links at bottom right

## Responsive behavior

The design appears optimized for desktop viewports with a contained content width. On narrower screens, the feature card grid should collapse to two columns and then single column, maintaining card proportions and internal spacing. The FAQ two-column layout should stack, with the heading above the accordion list. The footer link grid should reflow to fewer columns or a single column with maintained category grouping. Navigation links may collapse to a menu trigger on small viewports. Typography sizes should remain fixed rather than scaling fluidly, preserving the deliberate hierarchy.

## Practical implementation guidance

### Preserve
- The stark black-white-green color hierarchy; do not introduce additional accent colors
- The geometric display typeface for all headlines; do not substitute with a rounded or humanist face
- The flat, shadowless surfaces throughout the interface
- The pill-shaped buttons with chevron indicators
- The contained, centered layout with generous outer margins

### Avoid
- Gradients, drop shadows, or glassmorphism effects
- Rounded corners on containers larger than cards
- Decorative background patterns or textures outside of content imagery
- Multiple font sizes for body text; keep the 1rem standard consistent
- Borders heavier than 1px except for structural emphasis

### Recommended build order
1. Establish the color tokens and typography scale with the three font families
2. Build the top navigation with logo, text links, and action buttons
3. Implement the hero section with headline, button group, and illustration placement
4. Create the feature card component with image, code label, and description
5. Build the accordion pattern for the FAQ section
6. Implement the full-bleed footer with multi-column link grid

### Accessibility
- Ensure the green footer background meets contrast requirements for both black and white text; test carefully if adding interactive elements
- Provide visible focus indicators for pill buttons and accordion triggers
- Use button elements for all interactive actions rather than styled divs
- Maintain keyboard operability for accordion expansion and collapse
- Consider reduced-motion preferences for any chevron rotation animations

## Scope note

This guide covers the Stagehand homepage including the hero, feature cards, FAQ accordion, and footer. Interior pages, documentation layouts, code block syntax highlighting themes, and mobile navigation patterns are not represented in the supplied material. Measurements are practical adaptation targets.
