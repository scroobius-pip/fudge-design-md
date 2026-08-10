# How wired.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wired.com-design)

Last updated: 2026-08-10

## Captured pages

[![Article page with WIRED logo, navigation bar, hero illustration of muscular figures with skyscraper, headline in condensed slab serif, author byline, and subscription prompt](https://pin.fontofweb.com/6786?format=jpg)](https://design.withfudge.com/share/pin-6786)

[Article page with WIRED logo, navigation bar, hero illustration of muscular figures with skyscraper, headline in condensed slab serif, author byline, and subscription prompt](https://design.withfudge.com/share/pin-6786)

[![Full-bleed hero illustration showing muscular torsos against blue sky with glass skyscraper, demonstrating the bold editorial photography treatment](https://pin.fontofweb.com/6785?format=jpg)](https://design.withfudge.com/share/pin-6785)

[Full-bleed hero illustration showing muscular torsos against blue sky with glass skyscraper, demonstrating the bold editorial photography treatment](https://design.withfudge.com/share/pin-6785)

## Overview

WIRED's article page presents a confident editorial voice built on extreme contrast and typographic drama. The system centers on a stark black-and-white palette that lets photography and illustration command full attention. A bold condensed slab-serif headline family creates immediate visual impact, while a clean sans-serif body face maintains readable warmth for long-form content. Monospaced labels and captions add a technical, data-driven accent that reinforces the publication's technology focus. The layout favors generous horizontal margins and clear vertical rhythm, with full-bleed hero imagery that breaks the container to create immersive story openings. Navigation stays minimal and unobtrusive, using small uppercase labels that recede behind content. The overall impression is authoritative and contemporary—designed for readers who expect visual sophistication alongside rigorous reporting.

## Colors

The color system is intentionally restrained, relying on photography to provide chromatic interest while interface elements remain neutral and functional.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, navigation links, logo, and all interactive elements |
| muted-ink | #333333 | Secondary text, captions, and de-emphasized labels |
| canvas | #FFFFFF | Primary page background, button surfaces, and content areas |
| surface | #F3F3F3 | Subtle background tint for promotional banners and secondary containers |

The palette operates in a strict light mode. Black text on white grounds provides maximum legibility and creates the high-contrast foundation that makes the slab-serif headlines feel especially punchy. The near-white surface tone appears sparingly, reserved for subscription prompts and utility bands that need gentle separation without visual heaviness. No dark mode is present in the visible system. Photographic content carries the full color spectrum, from the saturated blues and warm skin tones of hero illustrations to more muted editorial photography elsewhere. The design trusts imagery to supply emotional color rather than imposing it through UI chrome.

## Typography

Five distinct type families create a clear hierarchy from display to functional text. Each serves a specific editorial role with minimal overlap.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Wired-Bold Condensed Slab | 3.75rem | 400 | 1 | -0.011em | Article headlines, major section titles |
| body | Breve | 1.1875rem | 400 | 1.474 | 0.006em | Article paragraphs, primary reading text |
| deck | Breve | 1.1875rem | 400 | 1.474 | 0.006em | Article summaries, introductory paragraphs |
| label | Wired Mono | 0.8125rem | 400 | 1.231 | 0.071em | Navigation links, category tags, timestamps |
| caption | Wired Mono | 0.6875rem | 400 | 1.455 | 0.045em | Image credits, photo attributions |
| meta | By Mark Simonson-13699337075739030931 | 0.75rem | 400 | 1.33 | 0em | Author names, promotional microcopy |

Wired-Bold Condensed Slab, designed by Abbreviated Foundry and available from Abbreviated Projects, delivers the system's most distinctive voice: extremely condensed, high-impact letterforms with slab serifs that feel both retro and contemporary. Breve, designed by Dino Dos Santos of DSType Foundry, provides the body text with slightly rounded, humanist character that softens the headline's aggression. Wired Mono, designed by Piero Di Biase of Think Work Observe, supplies the technical accent with its geometric monospaced forms. By Mark Simonson-13699337075739030931, designed by Mark Simonson of Mark Simonson Studio, handles fine-grained metadata with neutral clarity.

Verify licensing for these families before production use.

## Layout

The page follows a centered single-column structure with generous fixed-width gutters that frame content against the viewport edges. The main content area sits within a container padded by 4rem on each side, creating substantial breathing room that signals editorial quality and prevents text lines from stretching uncomfortably wide.

Vertical rhythm is established through consistent section spacing. The hero image sits flush against the top navigation, bleeding to the viewport edges without side margins. Below the hero, article metadata and headlines receive 2rem of top padding, while body content begins after additional whitespace. The subscription prompt band uses 1.5rem vertical padding with a subtle background tint to interrupt the reading flow without visual heaviness.

Navigation occupies a fixed header height with compact vertical padding of 0.5rem, keeping category links accessible without consuming excessive viewport space. The logo locks to the left edge with navigation links following in horizontal sequence, while utility actions—search, newsletters, subscribe—cluster at the right margin.

Content hierarchy reads top-to-bottom with clear semantic breaks: full-bleed visual, attribution line, author and category metadata, headline, deck/summary, audio player, then body text. This progression slows the reader's descent through the page, using each element's size and spacing to establish information priority before the main article begins.

## Visual language

Photography and illustration receive premium treatment through full-bleed presentation and minimal overlay. The hero image spans the complete viewport width without side margins, separated from the navigation by only a thin hairline or direct adjacency. Image captions appear below the visual in small monospaced uppercase, maintaining attribution clarity without competing for attention.

The visual tone balances documentary authority with contemporary boldness. Hero imagery can be provocative and saturated, as seen in the high-contrast illustration with its vivid blue sky and warm flesh tones. The interface never competes with this content—black text, white grounds, and restrained UI chrome ensure photography remains the emotional center.

Graphic restraint extends to interactive elements. Buttons use sharp top-radius corners with square bottoms, creating a subtle tab-like silhouette that feels more editorial than conventional rounded pills. Borders are absent except for this single radius treatment; shadows and gradients play no role in the visible system. The overall effect is clean to the point of austerity, with every non-essential visual element removed.

## Components

**Primary navigation**
- Anatomy: Horizontal bar containing hamburger menu, WIRED wordmark logo, category links, search icon, newsletters link, and subscribe call-to-action
- Surface: Transparent background over page content, black text throughout
- Typography: Category links use label token (Wired Mono, 0.8125rem, uppercase with wide tracking)
- Spacing: 0.5rem vertical padding, 4rem horizontal page gutter, 0.5rem link padding
- Composition: Logo and menu left-aligned, categories center-left, utilities right-aligned

**Article headline**
- Anatomy: Single h1 element, often spanning multiple lines for long titles
- Typography: hero-display token (Wired-Bold Condensed Slab, 3.75rem, weight 400, tight leading)
- Surface: Black text on white ground
- Spacing: Centered within content column, preceded by metadata band with 2rem separation
- Variants: Headlines may include inline punctuation or compound phrases without size variation

**Metadata band**
- Anatomy: Author name pill, category tag, and timestamp in horizontal sequence
- Typography: Author uses label token in black pill with white text; category and date use label token in black text
- Surface: Author pill uses solid ink background with canvas text; remaining metadata sits directly on canvas
- Spacing: 0.5rem horizontal gap between elements, centered above headline

**Audio player prompt**
- Anatomy: Play icon circle, "Subscribe to listen" text, duration, and bullet separator
- Typography: body token for primary text, meta token for duration
- Surface: Canvas background, black text and iconography
- Spacing: 2rem top margin, inline horizontal layout with 0.5rem gaps

**Subscription banner**
- Anatomy: Centered text block with promotional message and "START FREE TRIAL" link
- Surface: surface token background (#F3F3F3) with ink text
- Typography: meta token for body, label token for call-to-action link with underline
- Spacing: 1.5rem vertical padding, full content column width

**Image caption**
- Anatomy: Single line of attribution text below hero or inline images
- Typography: caption token (Wired Mono, 0.6875rem, uppercase, wide tracking)
- Surface: Canvas background, muted-ink text for reduced emphasis
- Spacing: 1rem top margin below image, left-aligned with content column

## Responsive behavior

The visible system shows a desktop-optimized layout with substantial fixed gutters. At narrower viewports, the 4rem page gutters should compress to maintain readable line lengths without excessive whitespace. The hero image maintains full-bleed behavior across breakpoints, though its effective crop will shift.

The headline at 3.75rem will require scaling down on mobile to prevent excessive line breaks and maintain impact. A reduction to approximately 2.5rem preserves the display hierarchy while fitting narrower screens. Navigation categories should collapse into the hamburger menu at medium breakpoints, leaving only the logo and essential utility links visible.

Body text at 1.1875rem remains comfortable for mobile reading without adjustment. The metadata band may stack vertically on narrow viewports, with the author pill full-width above category and timestamp. Audio player and subscription banner should maintain horizontal layout where possible, wrapping gracefully when space constrains.

## Practical implementation guidance

**Preserve**
- The stark black-white contrast as the foundational palette; any additional colors should come from photography alone
- The distinctive condensed slab-serif headline voice; substituting a generic serif or sans-serif would lose the brand's editorial punch
- Generous horizontal margins that signal quality and prevent line-length fatigue
- Full-bleed hero imagery without side padding or overlay gradients
- Monospaced labels for technical, metadata, and attribution contexts

**Avoid**
- Adding background colors, shadows, or borders to content cards that would break the flat, editorial aesthetic
- Rounding all corners of buttons equally; preserve the asymmetric top-radius treatment
- Using the display slab face for body text or UI labels—its extreme condensation harms readability at small sizes
- Centering body text; the system relies on left-aligned reading rhythms
- Introducing accent colors for links or calls-to-action; black underlines and weight changes suffice

**Recommended build order**
1. Establish the type system with all four families loaded and the hero-display token configured
2. Implement the single-column layout with 4rem gutters and full-bleed hero treatment
3. Build navigation with label-token links and the asymmetric logo placement
4. Add article metadata band with pill-style author treatment
5. Style body content with Breve at the specified size and leading
6. Implement subscription banner with surface background
7. Refine button and interactive element shapes with the partial radius treatment

**Accessibility**
- Ensure the high-contrast black-on-white text meets WCAG AAA standards for body copy
- Provide visible focus indicators for navigation links and buttons that maintain the minimal aesthetic, such as underline or subtle background shift
- Add skip navigation for keyboard users to bypass the category link list
- Include transcript or alternative format for audio content referenced by the player
- Maintain sufficient touch targets for mobile navigation, expanding link padding beyond the visible text area

## Scope note

This guide covers the article page template visible in the supplied images, including navigation, hero imagery, headline treatment, metadata, audio integration, subscription prompts, and body content opening. Footer components, article body continuation, related content modules, comment systems, and mobile-specific layouts are not represented. Interactive states including hover, active, focus, and loading are not visible in the still images. Measurements reflect the desktop viewport shown.
