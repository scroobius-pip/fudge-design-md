# How jenwagner.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jenwagner.co-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with warm-toned portrait photography, large white headline, and minimal navigation bar with JEN WAGNER TYPE wordmark](https://pin.fontofweb.com/8799?format=jpg)](https://design.withfudge.com/share/pin-8799)

[Hero section with warm-toned portrait photography, large white headline, and minimal navigation bar with JEN WAGNER TYPE wordmark](https://design.withfudge.com/share/pin-8799)

[![Dark grayscale portrait background with numbered feature list, thin horizontal rules, and outlined pill button reading JOIN THE CREW](https://pin.fontofweb.com/8800?format=jpg)](https://design.withfudge.com/share/pin-8800)

[Dark grayscale portrait background with numbered feature list, thin horizontal rules, and outlined pill button reading JOIN THE CREW](https://design.withfudge.com/share/pin-8800)

[![Warm amber and cream abstract texture background with centered white headline and circular arrow icon button](https://pin.fontofweb.com/8802?format=jpg)](https://design.withfudge.com/share/pin-8802)

[Warm amber and cream abstract texture background with centered white headline and circular arrow icon button](https://design.withfudge.com/share/pin-8802)

[![Light cream FAQ section with two-column layout, dark section headings, and muted body text with vertical divider line](https://pin.fontofweb.com/8801?format=jpg)](https://design.withfudge.com/share/pin-8801)

[Light cream FAQ section with two-column layout, dark section headings, and muted body text with vertical divider line](https://design.withfudge.com/share/pin-8801)

## Overview

The Jen Wagner Co. affiliate page presents a warm, editorial visual system built around full-bleed photography and confident, minimal typography. The design alternates between immersive hero moments—where large imagery fills the viewport with white type overlaid—and quieter content sections that rest on light, neutral grounds. The overall impression is of a refined creative brand: approachable yet precise, with a restrained palette that lets photography and typography carry the emotional weight. The system uses a single sans-serif family across all text, creating cohesion through scale and weight variation rather than type contrast. Navigation is sparse and unobtrusive, allowing the content to breathe. The affiliate program's benefits are presented through numbered lists with thin horizontal rules, suggesting editorial rigor without heaviness.

## Colors

The color system is intentionally narrow, built on a near-monochrome foundation with a single warm accent. Dark values anchor the interface, while white provides high-contrast readability against photography. The warm accent appears sparingly, reserved for moments of emphasis.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text on light grounds, deep backgrounds |
| near-ink | #0F0F0F | Subtle dark variation for layered surfaces |
| warm-dark | #1D1C1A | Warm black for photographic regions and rich dark areas |
| muted | #4C4C4B | Secondary body text, captions, and de-emphasized content |
| accent | #FF5C00 | Warm orange for occasional emphasis and brand energy |
| canvas | #FFFFFF | Primary text on dark grounds, page background in content sections |

The dark-to-light relationship defines the page's rhythm. Hero sections invert the typical reading experience: white text floats over warm, atmospheric photography. Content sections like the FAQ return to a light cream or white ground with dark text, giving the eye rest between immersive moments. The accent orange appears in the interface as a background color for small interactive elements, providing a spark of warmth without overwhelming the photographic palette. No gradients or complex shadows are present; color operates through flat, confident application.

## Typography

All interface typography uses Jw Type Sans, a custom sans-serif designed by Jen Wagner Type. The family is deployed in Medium and Semibold weights, with optical sizing handled through scale rather than weight stacking. Times appears as a system fallback at 16px but does not contribute to the visual hierarchy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Jw Type Sans | 4.0625rem | 400 | 1.1 | normal | Primary hero headlines |
| section-display | Jw Type Sans | 3.625rem | 400 | 1.1 | normal | Secondary hero headlines |
| medium-display | Jw Type Sans | 2.8125rem | 400 | 1.2 | normal | Mid-scale display text |
| body-large | Jw Type Sans | 1.875rem | 400 | 1.2 | 0.047em | Feature list titles |
| body-medium | Jw Type Sans | 1.5625rem | 400 | 1.2 | 0.039em | Numbered list labels |
| body | Jw Type Sans | 0.875rem | 400 | 1.8 | normal | Standard paragraph text |
| body-tight | Jw Type Sans | 0.875rem | 400 | 1.7 | normal | Dense paragraph text |
| label | Jw Type Sans | 1.0625rem | 400 | 1.7 | normal | Navigation, button labels |
| label-semibold | Jw Type Sans | 1.0625rem | 600 | 1.7 | normal | FAQ questions, emphatic labels |
| caption | Jw Type Sans | 0.8125rem | 600 | 1.8 | normal | Small emphatic text |
| caption-tight | Jw Type Sans | 0.8125rem | 400 | 1.8 | 0.022em | Feature annotations |
| legal | Jw Type Sans | 0.8125rem | 400 | 1.8 | normal | Fine print, disclaimers |

The type system favors generous line heights for readability at small sizes and tight leading for display text. Letter spacing is generally normal, with slight positive tracking applied to mid-scale display sizes for optical refinement. The 65px hero size and 60px secondary hero create a clear size hierarchy without excessive variation. Body text at 14px with 25.2px line height ensures comfortable reading in longer passages. Verify licensing for Jw Type Sans through Jen Wagner Type before production use.

## Layout

The page employs a full-bleed, viewport-locked structure for hero sections, transitioning to contained, centered content for informational areas. Maximum content width appears to be approximately 1200px in text-heavy sections, with generous internal padding.

Hero sections occupy the full viewport width and height, with text centered both horizontally and vertically. Photography extends edge-to-edge without visible cropping frames. The navigation bar floats above the first hero with a transparent or near-transparent background, containing the wordmark left-aligned and utility links right-aligned.

Content sections like the FAQ use a two-column grid with substantial gutter space. A thin vertical rule separates the columns, creating visual structure without heavy borders. The feature list section centers its content within a narrow reading column, approximately 600px wide, with each list item spanning the full width and separated by thin horizontal rules.

Spacing between sections is generous, typically 6rem or more, allowing photography and content to exist as distinct moments. Internal component padding uses 2rem as a standard unit, with 0.5rem for tight groupings. The overall rhythm is spacious and unhurried, appropriate for a brand selling creative tools to a design-conscious audience.

## Visual language

The visual language balances warmth and restraint. Photography dominates the experience—warm-toned portraits, abstract textures, and atmospheric black-and-white images create emotional texture. Images are treated full-bleed without visible borders, rounded corners, or shadow effects, letting the photography speak directly.

Typography interacts with photography through high-contrast white text, always centered and set with generous line spacing. The sans-serif letterforms feel contemporary and clean against the organic warmth of the imagery. Thin rules—horizontal in the feature list, vertical in the FAQ—provide the only geometric ornamentation, functioning as editorial punctuation rather than decoration.

Buttons and interactive elements are minimal: outlined pills with thin borders, transparent backgrounds, and centered text. The circular arrow button in the hero uses a single-pixel border and a simple rightward arrow, suggesting movement without visual weight. The overall effect is of a gallery or editorial spread rather than a conventional marketing page, with each section feeling like a composed frame.

## Components

**Primary button**
- Anatomy: Text label centered within a rounded pill shape
- Surface: Transparent background with 2px solid white border
- Typography: `{typography.label}`, white text
- Shape: Pill radius of 3.125rem
- Spacing: Internal padding approximately 1rem vertical, 2.5rem horizontal
- Composition: Centered within its container, often below descriptive text
- Variants: The "JOIN THE CREW" button appears in both hero and feature sections with consistent styling

**Secondary button**
- Anatomy: Smaller text label within a pill outline
- Surface: Transparent background with 2px solid white border
- Typography: `{typography.caption}`, white text
- Shape: Pill radius of 3.125rem
- Spacing: More compact than primary, approximately 0.75rem vertical, 2rem horizontal
- Composition: Used for lower-emphasis actions within content areas

**Icon button**
- Anatomy: Circular container with arrow icon centered
- Surface: Transparent background with 1px solid white border
- Shape: Perfect circle using full rounding
- Spacing: Approximately 3rem diameter
- Composition: Centered below hero text, suggesting scroll or navigation

**Feature list item**
- Anatomy: Number prefix, title, and optional note arranged horizontally with thin rule below
- Surface: Transparent over photography
- Typography: Number uses `{typography.body-medium}`, title uses `{typography.body-large}`, note uses `{typography.caption-tight}`
- Shape: Full-width horizontal rule, 1px, white at reduced opacity
- Spacing: Generous vertical padding between items, approximately 2.5rem
- Composition: Left-aligned number with left-aligned title, note inline or below title

**FAQ item**
- Anatomy: Question heading followed by paragraph answer
- Surface: Light ground, no visible container
- Typography: Question uses `{typography.label-semibold}` in ink, answer uses `{typography.body}` in muted
- Spacing: Substantial margin between question and answer, generous vertical gap between items
- Composition: Two-column layout with vertical divider, items distributed across columns

**Navigation bar**
- Anatomy: Wordmark left, text links right, utility icons far right
- Surface: Transparent or near-transparent over hero
- Typography: Links use `{typography.label}` in ink
- Spacing: Full-width with horizontal padding, approximately 2rem
- Composition: Flex row with space-between alignment

## Responsive behavior

The design's centered text and single-column feature list suggest a straightforward responsive adaptation. At narrower viewports, the two-column FAQ should collapse to a single column with the vertical divider removed. Hero text sizes should scale down proportionally, maintaining the centered composition. The feature list numbers and titles may stack vertically on small screens. Navigation links should collapse to a menu icon when horizontal space is insufficient. Photography should remain full-bleed, with text padding increased to maintain readability against image edges. Touch targets for buttons and icon buttons should maintain minimum 44px dimensions.

## Practical implementation guidance

**Preserve**
- The full-bleed photography treatment with centered white typography
- The generous spacing between sections and within components
- The thin, single-pixel rules as the primary decorative element
- The transparent outlined button style with consistent pill shaping
- The warm, editorial tone of the imagery selection

**Avoid**
- Adding background colors or shadows to buttons that would break the transparent aesthetic
- Using multiple typefaces or introducing serif fonts for display text
- Crowding the feature list items or reducing their vertical breathing room
- Applying borders or frames to photography
- Using the accent orange for large areas or text, which would compete with photography

**Recommended build order**
1. Establish the typography scale with Jw Type Sans loaded at Medium and Semibold weights
2. Build the hero section with full-bleed image and centered white text
3. Implement the navigation bar with transparent background
4. Create the feature list component with numbered items and horizontal rules
5. Build the FAQ section with two-column layout and vertical divider
6. Implement button variants with consistent pill styling
7. Add the icon button for hero scroll indication

**Accessibility**
- Ensure white text over photography meets contrast requirements; consider subtle dark overlays or text shadows if image variation risks readability
- Maintain focus indicators on transparent buttons, possibly using the accent color or increased border width
- Provide alt text for all photography that conveys the emotional tone for screen reader users
- Ensure the circular icon button has an accessible label describing its function
- Test that the light-on-dark and dark-on-light section transitions do not cause disorientation

## Scope note

This guide covers the affiliate landing page surface with its hero sections, feature list, FAQ, and navigation. Interior pages, mobile-specific layouts, hover and focus states, form interactions, and checkout flows are not represented in the supplied material. The spacing scale uses the 4px relative unit with semantic rem values applied throughout.
