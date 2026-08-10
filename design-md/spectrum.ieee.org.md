# How spectrum.ieee.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/spectrum.ieee.org-design)

Last updated: 2026-08-10

## Captured pages

[![Article page with red circuit board hero image, serif headline, and dark Related Stories sidebar with orange category labels](https://pin.fontofweb.com/10431?format=jpg)](https://design.withfudge.com/share/pin-10431)

[Article page with red circuit board hero image, serif headline, and dark Related Stories sidebar with orange category labels](https://design.withfudge.com/share/pin-10431)

[![Article body with social share icons, monospace tags, and body text with inline links and right sidebar ads](https://pin.fontofweb.com/10416?format=jpg)](https://design.withfudge.com/share/pin-10416)

[Article body with social share icons, monospace tags, and body text with inline links and right sidebar ads](https://design.withfudge.com/share/pin-10416)

[![Article page with large hardware photograph, serif headline, and dark sidebar with related computing stories](https://pin.fontofweb.com/10415?format=jpg)](https://design.withfudge.com/share/pin-10415)

[Article page with large hardware photograph, serif headline, and dark sidebar with related computing stories](https://design.withfudge.com/share/pin-10415)

[![Darkened page with subscription modal overlay featuring orange CTA button and cookie consent banner](https://pin.fontofweb.com/10414?format=jpg)](https://design.withfudge.com/share/pin-10414)

[Darkened page with subscription modal overlay featuring orange CTA button and cookie consent banner](https://design.withfudge.com/share/pin-10414)

## Overview

IEEE Spectrum presents a technology journalism experience that balances editorial warmth with technical precision. The design centers on a warm off-white canvas that evokes printed magazine pages, paired with a stark dark sidebar for related content that creates dramatic visual contrast. The typographic system layers three distinct voices: elegant serif headlines for authority, clean sans-serif body text for readability, and monospace labels for technical categorization. This three-tier approach signals editorial hierarchy while maintaining the engineering credibility expected of an IEEE publication. The overall composition favors generous whitespace, clear content segmentation through subtle borders, and a restrained accent palette that uses orange sparingly for category indicators and calls-to-action. The result is a reading environment that feels both contemporary and institutionally grounded, supporting long-form technical journalism without visual fatigue.

## Colors

The color system operates across three distinct modes: a warm light editorial surface, a dark content panel mode, and accent-driven interactive states.

| token | value | use |
|---|---|---|
| canvas | #ECECE9 | Primary page background, warm off-white editorial surface |
| ink | #0D0D0D | Primary text, borders, and structural dividers |
| muted-ink | #595959 | Secondary headlines, dek text, and subdued content |
| subtle-ink | #A6A6A6 | Tertiary text, timestamps, and metadata |
| surface-dark | #141414 | Related Stories sidebar background |
| surface-darker | #1A1A1A | Modal overlays and cookie banner background |
| border | #0D0D0D | Primary dividers and hairline borders |
| border-subtle | #404040 | Tag borders and secondary dividers on dark surfaces |
| accent | #FF4C00 | Category labels, active states, and primary CTA buttons |
| accent-muted | #C33A00 | Hover states and secondary accent applications |
| text-inverse | #FFFFFF | Text on dark surfaces and within modals |
| text-muted-inverse | #BFBFBF | Secondary text on dark surfaces |

The warm canvas (#ECECE9) distinguishes Spectrum from cooler neutral backgrounds common in technology publishing, creating an immediate tactile association with quality print media. The near-black ink (#0D0D0D) provides maximum contrast without the harshness of pure black. Dark surfaces use a slightly lifted black (#141414 and #1A1A1A) to prevent excessive contrast fatigue while maintaining dramatic separation from the light editorial area. The orange accent (#FF4C00) appears exclusively in category labels, subscription prompts, and interactive highlights—never as large background areas—preserving its signaling power for navigation and action.

## Typography

The typographic system combines multiple families across semantic roles, each serving distinct content functions. The supplied font families include: By Goran Soderstrom, By Goran Soderstrom-14756326017235886016, By Goran Soderstrom-3538923081934168568, By Goran Soderstrom-9660175224236127218, By Johannes Breyer Fabian Harb Chi Long Trieu, By Johannes Breyer Fabian Harb Chi Long Trieu-13302111462790024180, By Johannes Breyer Fabian Harb Erkin Karamemet, By Johannes Breyer Fabian Harb Erkin Karamemet-11476492140018895279, By Johannes Breyer Fabian Harb Erkin Karamemet-12852950907390376169, By Johannes Breyer Fabian Harb Erkin Karamemet-15343710665573212509, By Johannes Breyer Fabian Harb Erkin Karamemet-7828067264164189317, By Teguh Arief-4222301590106173831, Favorit Mono, Favorit Pro, Font Awesome, Helvetica, I Headline, Roboto, System, System-Serif, and Theinhardt.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Goran Soderstrom | 3rem | 400 | 1.1 | -0.015em | Article headlines, major titles |
| section-display | By Johannes Breyer Fabian Harb Erkin Karamemet | 2.625rem | 300 | 1.05 | -0.02em | Section headers, modal titles |
| body | Theinhardt | 1.125rem | 400 | 1.66 | normal | Article body text, descriptions |
| body-large | By Goran Soderstrom | 1.5rem | 400 | 1.5 | normal | Article dek, lead paragraphs |
| label | By Johannes Breyer Fabian Harb Chi Long Trieu | 0.75rem | 400 | 1 | 0.0625em | Category tags, metadata labels |
| label-small | By Johannes Breyer Fabian Harb Chi Long Trieu | 0.875rem | 400 | 1.125 | 0.007em | Inline tags, author metadata |
| navigation | By Johannes Breyer Fabian Harb Erkin Karamemet | 1.125rem | 400 | 1.66 | normal | Navigation items, dropdowns |
| button | By Johannes Breyer Fabian Harb Erkin Karamemet | 1.125rem | 400 | 1.78 | -0.01em | Button labels, CTA text |

By Goran Soderstrom, designed by Goran Soderstrom and available from Letters From Sweden, provides the editorial authority for headlines with its classical proportions and restrained contrast. By Johannes Breyer Fabian Harb Erkin Karamemet, from Dinamo, handles interface and display text with geometric clarity across Light, Regular, and Bold weights. By Johannes Breyer Fabian Harb Chi Long Trieu, also from Dinamo, serves technical labeling needs with its fixed-width discipline. Theinhardt delivers body text with neutral, highly legible forms. Roboto appears at 14px for specific interface elements. Helvetica appears at 16px for certain UI contexts. I Headline appears at 48px for display purposes. System and System-Serif serve as fallback families. Font Awesome provides icon glyphs. Verify licensing for these families before production use.

The scale respects a 2px relative unit, with all sizes landing on whole-number multiples: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 18px (1.125rem), 24px (1.5rem), 32px (2rem), 42px (2.625rem), and 48px (3rem). Letter spacing tightens at display sizes to prevent looseness, while body sizes use natural spacing for reading comfort.

## Layout

The page architecture follows an asymmetric two-column editorial model with a dominant content area and a narrower sidebar. The main column occupies approximately two-thirds of the available width, with the sidebar taking the remaining third. This proportion echoes traditional magazine layouts and provides adequate space for both long-form text and supporting visual content.

Content containers use generous horizontal margins—243px on each side at maximum width—creating substantial breathing room around the editorial frame. Internal spacing relies on a 2px base unit, with common increments of 16px (1rem), 20px (1.25rem), 24px (1.5rem), 32px (2rem), 40px (2.5rem), 50px (3.125rem), and 100px (6.25rem) for section separations. The 50px top margin paired with 40px bottom margin appears repeatedly as a standard section rhythm.

Vertical stacking within the main column follows a clear hierarchy: category labels sit closest to content, followed by the headline with minimal top spacing, then the dek with slightly more breathing room, then author metadata in monospace, and finally the hero image with substantial bottom margin before body text begins. The sidebar maintains independent scrolling potential with its dark background creating a persistent visual anchor.

Borders function as subtle structural elements: 1px solid lines in ink color separate navigation from content, while hairline borders in subtle tones divide related story items within the dark sidebar. No border-radius appears on primary content containers, maintaining editorial rectilinearity; only interactive inputs receive the 4px (0.25rem) corner treatment.

## Visual language

The visual identity of IEEE Spectrum communicates institutional authority through restraint and precision. Photography receives prominent placement with full-bleed hero images that establish technical subject matter immediately. Images are presented without decorative borders or shadows, letting content speak directly. The warm canvas tint unifies disparate photographic sources under a consistent editorial temperature.

Iconography appears minimal and functional: social sharing uses simple outlined glyphs in the accent orange, while navigation relies on a hamburger icon and search magnifier in the ink color. The IEEE logo maintains its established brand lockup in the header, with the Spectrum wordmark set in a custom weight that bridges the gap between the institutional mark and the editorial content below.

Category labeling employs a distinctive visual convention: uppercase monospace text with generous letter-spacing, often paired with a small rectangular outline or presented in the accent color against the dark sidebar. This treatment makes technical taxonomies feel like editorial infrastructure rather than afterthoughts. Tags in the article body extend this convention with subtle bordered pills that invite exploration without demanding attention.

The interplay between light and dark surfaces creates a rhythm across the page: the warm editorial column advances visually while the dark sidebar recedes, directing attention to primary content while maintaining the utility of related navigation. This contrast also serves practical purposes, distinguishing original content from promotional and navigational material.

## Components

### Article Header

- **Anatomy**: Category label pair (section + topic), headline, dek, author byline with timestamp and reading time
- **Surface**: Transparent over canvas background
- **Typography**: Headline uses hero-display in ink; dek uses body-large in muted-ink; metadata uses label-small in subtle-ink
- **Spacing**: 20px top padding, 32px horizontal padding, 5px bottom padding on the category label container; headline sits with 10px top margin; dek follows with 20px bottom margin
- **Composition**: Left-aligned, maximum width constrained by parent container margins

### Related Stories Panel

- **Anatomy**: Panel title, stacked story cards with category labels and headlines
- **Surface**: Background in surface-dark (#141414)
- **Typography**: Panel title in section-display at 32px in text-inverse; story headlines in navigation weight in text-inverse; category labels in label with accent color
- **Spacing**: 16px top padding, 16px–32px internal padding, 32px bottom padding on cards
- **Composition**: Fixed-width sidebar, internal items separated by subtle horizontal borders

### Tag Pills

- **Anatomy**: Monospace uppercase text with optional border
- **Surface**: Transparent background, optional 1px border in border-subtle
- **Typography**: label token, 12px size with 0.75px letter-spacing
- **Spacing**: 1px top padding, 8px horizontal padding, 5px bottom padding; 7px right margin, 10px bottom margin between items
- **Composition**: Inline flow, wrapping permitted

### Search Input

- **Anatomy**: Text field with placeholder, search icon
- **Surface**: White background (#FFFFFF), no visible border
- **Typography**: By Johannes Breyer Fabian Harb Erkin Karamemet at 16px (1rem) in ink color
- **Shape**: 4px border-radius
- **Spacing**: 2px top padding, 20px right padding, 30px left padding for icon accommodation

### Subscription Modal

- **Anatomy**: Centered card with close control, headline, body text, primary CTA button, secondary text button
- **Surface**: surface-darker background with semi-transparent page overlay
- **Typography**: Headline in section-display in text-inverse; body in body size in text-muted-inverse; CTA in label with text-inverse
- **Shape**: No border-radius on card
- **Spacing**: 24px–48px internal padding
- **Variants**: Primary action uses accent background; secondary action uses transparent background with border

### Cookie Consent Banner

- **Anatomy**: Fixed bottom bar with message text, privacy link, action button
- **Surface**: surface-darker background
- **Typography**: Body-sized text in text-inverse; button in label style
- **Spacing**: Full-width, comfortable vertical padding
- **Composition**: Left-aligned text with right-aligned action

## Responsive behavior

The two-column editorial layout should collapse to single-column on viewports below approximately 768px, with the Related Stories panel relocating below the article body. The substantial side margins (243px) should reduce progressively: to 32px on tablet widths, then to 16px on mobile devices. Headline sizes should scale down proportionally, with hero-display reducing to approximately 2rem on narrow viewports to prevent excessive line breaks.

The dark sidebar should maintain its background color when repositioned, creating a content break rather than attempting to blend with the light editorial flow. Navigation should collapse to a full-screen overlay when the hamburger icon is activated, preserving the category taxonomy in a scrollable vertical list.

Typography should maintain its relative proportions across breakpoints, with body text remaining at 1.125rem for readability. Touch targets for tags and buttons should expand to minimum 44px height on mobile devices. The subscription modal should transition to full-screen presentation on devices below 480px width, eliminating edge margins that would compromise usability.

## Practical implementation guidance

### Preserve
- The warm off-white canvas (#ECECE9) as the dominant surface; this tint is essential to the editorial character
- The three-family typographic hierarchy: serif for authority, sans-serif for utility, monospace for technical labeling
- The dramatic light/dark sidebar contrast that structures page hierarchy
- Generous whitespace around content, particularly the 243px maximum margins
- Orange accent restraint—reserve for categories, active states, and primary actions only

### Avoid
- Pure white (#FFFFFF) backgrounds that would destroy the warm editorial tone
- Introducing additional accent colors that compete with the established orange
- Border-radius on primary content containers; keep editorial surfaces rectilinear
- Reducing body text below 1.125rem for any reason other than explicit user preference
- Generic sans-serif fallbacks that lose the geometric character of By Johannes Breyer Fabian Harb Erkin Karamemet

### Recommended Build Order
1. Establish the canvas background and ink text colors as global defaults
2. Implement the typographic hierarchy with all families at their designated sizes
3. Build the two-column grid with sidebar dark surface
4. Create the article header component with category-label-headline-dek-metadata stacking
5. Implement the Related Stories panel with story card repetition
6. Add interactive elements: search, tags, subscription modal, cookie banner
7. Refine spacing rhythm across all components using the 2px base unit

### Accessibility
- Ensure the orange accent (#FF4C00) against dark surfaces meets minimum 4.5:1 contrast ratios; against light surfaces, verify it does not fall below 3:1 for large text
- Provide visible focus indicators for all interactive elements, using ink borders on light surfaces and text-inverse outlines on dark surfaces
- Maintain logical heading hierarchy: single h1 per article, section displays as h2, sidebar titles as h2 or h3 depending on nesting
- Ensure the subscription modal traps focus and provides clear close mechanisms
- Support reduced-motion preferences for any animated transitions

## Scope note

This guide covers the article page template and its associated components as visible in the supplied images. Homepage layouts, category landing pages, search results, user account interfaces, and video player implementations are not represented. Mobile breakpoint behavior and interactive states beyond the visible static images should be validated during implementation. Motion design, loading states, and error handling patterns are not documented here.
