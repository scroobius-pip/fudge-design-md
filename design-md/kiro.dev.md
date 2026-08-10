# How kiro.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kiro.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Hero headline in bold rounded mono type on pure black background showing the site's typographic voice](https://pin.fontofweb.com/8141?format=jpg)](https://design.withfudge.com/share/pin-8141)

[Hero headline in bold rounded mono type on pure black background showing the site's typographic voice](https://design.withfudge.com/share/pin-8141)

[![Full homepage hero with navigation, announcement pill, headline, subhead, purple CTA buttons, and app screenshot](https://pin.fontofweb.com/8140?format=jpg)](https://design.withfudge.com/share/pin-8140)

[Full homepage hero with navigation, announcement pill, headline, subhead, purple CTA buttons, and app screenshot](https://design.withfudge.com/share/pin-8140)

[![Pricing page with four-tier card grid, enterprise section, and outlined secondary buttons on dark surfaces](https://pin.fontofweb.com/8139?format=jpg)](https://design.withfudge.com/share/pin-8139)

[Pricing page with four-tier card grid, enterprise section, and outlined secondary buttons on dark surfaces](https://design.withfudge.com/share/pin-8139)

## Overview

Kiro presents a dark-mode developer tool interface built on an unapologetically deep black canvas with electric purple accents and rounded mono typography. The visual system communicates technical precision through its use of AWS Diatype Rounded Semi Mono for nearly all interface text, while the warmer, more open AWS Diatype handles longer descriptive passages. The result is a high-contrast, code-adjacent aesthetic that feels both premium and approachable—like a well-designed IDE or terminal application translated into a marketing site. The homepage establishes this voice immediately with a massive bold headline, a subdued body paragraph, and a product screenshot that demonstrates the tool's actual interface. The pricing page extends this language into structured card layouts with clear hierarchy and restrained color use. Every element reinforces the core proposition: this is a serious tool for developers who appreciate structure and craft.

## Colors

The color system is built on a near-black foundation with carefully tuned surface layers and a single vibrant purple accent family. White and near-white text maintains exceptional readability against the dark backgrounds.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, deepest layer |
| surface | `#19161D` | Card backgrounds, elevated panels, announcement pill |
| surface-elevated | `#211D25` | Hover states, subtle elevation shifts |
| surface-highlight | `#352F3D` | Borders on dark surfaces, subtle separators |
| ink | `#FAFAFA` | Primary text, headlines, button labels on dark |
| ink-secondary | `#A1A1AA` | Muted body text, secondary descriptions |
| ink-muted | `#C1BEC6` | Tertiary text, disabled states, subtle labels |
| accent | `#9046FF` | Primary buttons, interactive highlights, brand moments |
| accent-light | `#C6A0FF` | Announcement pill text, hover accents, links |
| accent-pale | `#C084FC` | Gradient endpoints, decorative purple tints |
| border-subtle | `#352F3D` | Card borders on dark backgrounds |
| border-default | `#000000` | Navigation bar border, structural dividers |
| border-light | `#FFFFFF` | Outlined button borders on dark surfaces |

The palette operates in a strict dark mode. The canvas is pure black, with surfaces stepping up through increasingly warm dark grays. The purple accent family provides the only saturated color, appearing in buttons, links, and decorative moments. Text hierarchy is achieved through luminance rather than hue: bright white for primary content, mid-gray for secondary, and slightly warmer gray for tertiary information. The pricing page introduces a subtle variation where some cards use slightly different surface treatments, but the overall system remains consistent.

## Typography

Kiro's typographic system relies on two related families from Dinamo's AWS Diatype collection. The rounded semi-mono variant dominates interface elements, headlines, and navigation, lending a technical yet friendly character. The standard Diatype handles longer reading passages with more open proportions.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Aws Diatype Rounded Semi Mono | 4.25rem | 700 | 1.01 | -0.0176em | Homepage headline |
| section-display | Aws Diatype Rounded Semi Mono | 3rem | 700 | 1 | -0.025em | Section headlines, pricing values |
| headline | Aws Diatype Rounded Semi Mono | 1.75rem | 700 | 1.1 | -0.03em | Card titles, feature headers |
| subhead | Aws Diatype Rounded Semi Mono | 1.25rem | 700 | 1.1 | -0.028em | Small headlines, emphasis |
| body-large | Aws Diatype | 1.75rem | 400 | 1.2 | -0.0143em | Hero description, long-form text |
| body | Aws Diatype Rounded Semi Mono | 1rem | 400 | 1.5 | normal | Default paragraphs, UI text |
| label | Aws Diatype Rounded Semi Mono | 0.875rem | 400 | 1.4286 | normal | Captions, metadata, tags |
| label-medium | Aws Diatype Rounded Semi Mono | 0.875rem | 500 | 1.5 | normal | Navigation items, emphasis labels |
| button | Aws Diatype Rounded Semi Mono | 1rem | 500 | 1.5 | normal | Button labels, CTAs |
| price | Aws Diatype Rounded Semi Mono | 3rem | 700 | 1 | -0.025em | Pricing amounts |
| legal | Aws Diatype Rounded Semi Mono | 0.875rem | 500 | 1.5 | normal | Footer, terms, small print |

The hero display at 68px with tight negative tracking creates immediate impact on the homepage. The body-large token at 28px provides generous readable text for the hero description without competing with the headline. Weight distinctions are meaningful: 400 for body and labels, 500 for buttons and navigation emphasis, and 700 for all display and headline roles. The mono-tinged character of the rounded semi-mono family gives code and technical content natural integration.

Verify licensing for these families before production use. Aws Diatype and Aws Diatype Rounded Semi Mono are designed by Johannes Breyer, Fabian Harb, Elias Hanzer, Renan Rosatti, Arnaud Chemin, and Erkin Karamemet, and distributed by Dinamo.

## Layout

The layout system uses a consistent page gutter and centered content areas with generous vertical breathing room. Horizontal padding of 80px frames the main content on desktop, creating a contained reading experience without excessive width. The navigation sits within a rounded pill-shaped container with internal padding of 8px top and sides, floating against the black canvas.

Content sections stack vertically with substantial margins—70px top and 64px bottom for major breaks, 72px top and 42px bottom for interior sections. The pricing page uses a tighter 24px padding within cards, with 24px vertical spacing between card rows and list elements. Centered content blocks use margins of approximately 280.5px on each side, creating a narrow reading column for focused content.

The homepage hero follows a classic centered alignment: announcement pill above, massive headline, body paragraph, and paired action buttons, then a full-width product screenshot below. The pricing page shifts to a four-column grid for tier cards, with an enterprise section below that splits into a left-aligned CTA area and a right-aligned feature grid. This asymmetry in the enterprise section breaks the strict grid without losing hierarchy.

## Visual language

Kiro's visual language merges developer-tool aesthetics with polished consumer-product presentation. The deep black canvas evokes terminal environments and code editors, while the rounded corners, generous spacing, and purple accents soften the technical edge into something more approachable. The product screenshot on the homepage is not merely decorative—it demonstrates the actual interface, creating continuity between marketing promise and product reality.

The rounded semi-mono typography is the most distinctive element. It reads as code-adjacent without being fully monospaced, suggesting structure and precision while maintaining the warmth of rounded letterforms. This choice appears consistently from the largest headline to the smallest navigation label, creating a unified voice.

Imagery and screenshots are presented with subtle rounded corners and soft shadows, floating above the dark canvas. The purple accent appears with restraint—primarily in primary buttons, link text, and small decorative moments. The overall effect is disciplined: a limited palette, consistent typography, and clear hierarchy that lets the product speak rather than the decoration.

## Components

### Navigation bar

- **Anatomy**: Logo mark and wordmark on the left, horizontal link list center-left, utility cluster on the right containing search, keyboard shortcut hint, sign-in link, and download button.
- **Surface**: Transparent or black background with a rounded pill-shaped container using 1px black border and 18px radius.
- **Typography**: Label-medium for all navigation items, 500 weight.
- **Shape**: Large rounded pill (18px radius) for the container; individual nav items use smaller radius.
- **Spacing**: 8px padding top, 8px sides, 24px left padding for logo area; 12px 16px for individual link padding.
- **Composition**: Flex row with space-between alignment; utility cluster grouped tightly with consistent gaps.

### Announcement pill

- **Anatomy**: Text label with trailing arrow indicator.
- **Surface**: Dark surface background (#19161D) with accent-light text.
- **Typography**: Label token, 400 weight.
- **Shape**: Full pill radius (9999px).
- **Spacing**: 8px vertical, 16px horizontal padding.
- **Composition**: Centered above hero content; acts as secondary entry point.

### Hero section

- **Anatomy**: Announcement pill, hero-display headline, body-large paragraph, primary and secondary button pair, full-width product screenshot.
- **Surface**: Pure black canvas.
- **Typography**: Hero-display for headline, body-large for description, button for CTAs.
- **Shape**: Buttons use full pill radius; screenshot has subtle rounded corners.
- **Spacing**: 70px top margin, 64px bottom margin for content block; comfortable gap between text and buttons.
- **Composition**: Centered text alignment; screenshot bleeds to edges below.

### Primary button

- **Anatomy**: Icon optional, label text.
- **Surface**: Accent purple background (#9046FF) with white text.
- **Typography**: Button token, 500 weight.
- **Shape**: Full pill radius.
- **Spacing**: 12px 24px padding.
- **Variants**: Default with icon+text; icon positioned left of label.

### Secondary button

- **Anatomy**: Label text only.
- **Surface**: Transparent background with 1px white border.
- **Typography**: Button token, 500 weight.
- **Shape**: Full pill radius.
- **Spacing**: 12px 24px padding.
- **Composition**: Paired with primary button; equal height and baseline.

### Pricing card

- **Anatomy**: Tier label, price display, billing period, feature list with checkmarks, CTA button.
- **Surface**: Dark surface (#19161D) with 1px subtle border (#352F3D).
- **Typography**: Label for tier name, price for amount, body for features, button for CTA.
- **Shape**: 16px border radius.
- **Spacing**: 24px internal padding; 24px top margin for feature lists.
- **Composition**: Equal-height cards in horizontal grid; consistent internal alignment.

### Enterprise section

- **Anatomy**: Left column with headline and two outlined buttons; right column with feature grid.
- **Surface**: Dark surface background, continuous with page.
- **Typography**: Headline for section title, body for feature descriptions.
- **Shape**: Buttons use full pill radius with white borders.
- **Spacing**: Generous internal padding matching page gutters.
- **Composition**: Asymmetric two-column layout; feature grid uses checkmark icons with text pairs.

## Responsive behavior

The design should maintain its dark canvas and typographic hierarchy across viewport sizes. The homepage hero headline, currently at 68px on desktop, should scale down on smaller screens while preserving the tight line-height and negative tracking that give it character. The body-large description may require size reduction to maintain comfortable line lengths.

The navigation bar's horizontal link list will need collapse into a menu or hamburger pattern on narrow viewports, with the utility cluster (search, sign-in, download) either compressing or moving to the menu. The pricing page's four-column grid should stack to single-column cards on mobile, with full-width CTA buttons for touch targets.

Product screenshots should remain visible but may require horizontal scroll or scaled presentation rather than full-width bleed on very small screens. Touch targets for all buttons should maintain at least 44px height.

## Practical implementation guidance

### Preserve
- The strict dark mode palette—pure black canvas with stepped dark surfaces and single purple accent family.
- The rounded semi-mono typography for all interface elements; this is the site's most recognizable voice.
- Generous vertical spacing between sections; the breathing room is essential to the premium feel.
- Pill-shaped buttons with full radius; this softens the technical aesthetic consistently.
- The centered, contained content model with 80px page gutters on desktop.

### Avoid
- Introducing additional accent colors; the purple family is intentionally singular.
- Using fully monospaced type for body text; the rounded semi-mono is already at the edge of readability for long passages.
- Light mode variants without careful consideration; the entire system is optimized for dark presentation.
- Sharp-cornered cards or buttons; the rounded language is pervasive and should not be broken.
- Excessive borders; most surfaces rely on background color difference rather than outlines.

### Recommended build order
1. Establish the black canvas and surface color tokens.
2. Implement the typography scale with both font families loaded and optimized.
3. Build the navigation bar with its pill container and flex layout.
4. Create the button components (primary purple, secondary outlined) with consistent pill radius.
5. Construct the homepage hero with announcement pill, headline, body, and button pair.
6. Implement the pricing card grid with proper internal spacing and alignment.
7. Add the enterprise section with asymmetric two-column layout.

### Accessibility
- Ensure white and near-white text on black backgrounds meets WCAG AAA contrast ratios; the current values do.
- The accent purple (#9046FF) against black should be verified for large text compliance; consider a slightly lighter variant for small text if needed.
- Button focus states should use visible outlines, likely in the accent-light color, rather than relying solely on color change.
- The product screenshot should include descriptive alt text or be marked decorative if redundant with surrounding content.
- Keyboard navigation order should follow the visual hierarchy: announcement pill, headline, buttons, then screenshot.

## Scope note

This guide covers the homepage and pricing page surfaces visible in the supplied images. Footer content, documentation pages, authentication flows, and mobile-specific layouts are not represented. Motion, hover states, loading indicators, and form validation patterns are not documented. Measurements are derived from the exact values supplied in the design facts.
