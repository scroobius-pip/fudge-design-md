# How hellotalk.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hellotalk.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with bold headline, purple primary button, and expansive multi-column footer on light background](https://pin.fontofweb.com/5354?format=jpg)](https://design.withfudge.com/share/pin-5354)

[Hero section with bold headline, purple primary button, and expansive multi-column footer on light background](https://design.withfudge.com/share/pin-5354)

[![Global community section with dotted world map, circular avatars, and purple-accented Search heading](https://pin.fontofweb.com/5352?format=jpg)](https://design.withfudge.com/share/pin-5352)

[Global community section with dotted world map, circular avatars, and purple-accented Search heading](https://design.withfudge.com/share/pin-5352)

[![Voicerooms feature section with phone mockup, NEW label, and dark UI with purple accents](https://pin.fontofweb.com/5351?format=jpg)](https://design.withfudge.com/share/pin-5351)

[Voicerooms feature section with phone mockup, NEW label, and dark UI with purple accents](https://design.withfudge.com/share/pin-5351)

[![Detailed footer layout with QR code, app store badges, and categorized link columns](https://pin.fontofweb.com/5353?format=jpg)](https://design.withfudge.com/share/pin-5353)

[Detailed footer layout with QR code, app store badges, and categorized link columns](https://design.withfudge.com/share/pin-5353)

## Overview

HelloTalk presents itself as an approachable, globally-minded language exchange platform. The visual system balances confident, modern typography with warm, human-centered imagery. The design communicates scale and community through a clean, spacious layout that lets bold headlines and vibrant purple accents carry the brand personality. Light backgrounds dominate the marketing surface, creating an open, breathable feel, while rich dark-mode app screenshots provide dramatic contrast and showcase the product's immersive social features. The overall impression is trustworthy yet energetic—professional enough to suggest serious language learning, friendly enough to invite casual participation.

## Colors

The color system centers on a distinctive purple action hue against neutral light surfaces, with a deep navy-dark mode for in-app contexts.

| token | value | use |
|---|---|---|
| action | #5B4DFF | Primary buttons, feature labels, accent headings, interactive highlights |
| action-hover | #4A3FE6 | Hover state for primary actions |
| ink | #111111 | Primary text, display headings, footer headings |
| muted-ink | #6B6B6B | Secondary body text, footer links, descriptions |
| canvas | #FFFFFF | Page backgrounds, button fills, card surfaces |
| surface | #F5F5F7 | Subtle section alternates, footer upper area |
| border | #E5E5E5 | Dividers, secondary button borders, subtle separators |
| dark-surface | #0F1B2E | App UI backgrounds, dark feature sections |
| dark-ink | #FFFFFF | Text on dark surfaces |
| accent-warm | #FF6B4A | Occasional warm accents, notification badges |

The light mode establishes trust and clarity: near-white canvas with soft gray borders creates hierarchy without heaviness. The purple action color appears selectively—on primary buttons, in the "Search" accent within display text, and as uppercase "NEW" labels—making it feel premium rather than overwhelming. Dark surfaces appear only within product mockups and potential dark-mode contexts, where the same purple maintains brand continuity. No gradients are visible in the interface; color application is flat and confident.

## Typography

Two families drive the typographic hierarchy: Gellix for bold, editorial display moments and Inter for everything functional and readable.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gellix | 3.5rem | 700 | 1.1 | -0.02em | Homepage hero headlines |
| section-display | Gellix | 2.5rem | 700 | 1.15 | -0.01em | Section headings, feature titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Hero subheadings, lead text |
| label | Inter | 0.75rem | 600 | 1.2 | 0.05em | Uppercase labels, badges, "NEW" |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Nav items, footer links |
| footer-heading | Inter | 0.875rem | 600 | 1.4 | 0 | Footer column titles |

Gellix carries the brand voice with tight tracking and substantial weight, giving headlines a contemporary, slightly tech-forward personality. Inter handles all functional text with neutral clarity—its range from Regular to Semibold covers the full interface without introducing visual noise. The size scale uses 4px steps: 12px labels, 14px navigation, 16px body, 20px body-large, 40px section-display, and 56px hero-display. Verify licensing for these families before production use. Gellix appears to be a custom or commercially licensed family; Inter is designed by Rasmus Andersson and available from Rsms.

## Layout

The page structure follows a centered, max-width container pattern with generous vertical breathing room. Sections stack with substantial whitespace between them—typically 6rem or more—creating a scrolly, narrative pace appropriate for product storytelling.

The hero section centers its content: a large display headline, supporting subheading, and paired action buttons sit in a tight vertical cluster. Below, content sections alternate between centered text blocks and asymmetric layouts that place phone mockups beside descriptive copy. The "Search the World" section spreads horizontally, using the full viewport width to display its dotted world map and scattered avatar clusters.

The footer expands into a dense multi-column grid: six or more columns of links organized by category, with the brand mark and QR code occupying the leftmost area. A thin horizontal rule separates the main footer from the legal bar below, which splits copyright and policy links to opposite edges.

Component spacing uses a 4px base unit. Buttons carry 14px vertical and 32px horizontal padding. Section gutters appear to be 24px on mobile, expanding to 48px or more on desktop. Content max-width likely sits around 1200px for text blocks, with some full-bleed exceptions for visual features.

## Visual language

Photography and illustration follow a consistent human-centered approach. Circular avatar crops appear throughout—user photos, community portraits, and app interface elements all share the same 50% border-radius treatment. The world map visualization uses a delicate dotted pattern in light purple, creating texture without competing with the avatar photography layered above it.

App screenshots within phone mockups show a rich dark interface with conversational UI: message bubbles, user status rings, and small flag icons indicating language pairs. These mockups typically appear at slight angles or with subtle shadows, adding depth to the otherwise flat marketing page.

The decorative vocabulary is restrained: no heavy shadows, no glassmorphism, no animated gradients. The purple accent carries visual interest while geometric simplicity—circles, clean rectangles, thin rules—maintains focus on the community and product imagery. Small flag icons appear as circular badges attached to avatars, adding color and geographic context at a glance.

## Components

**Primary action button**
- Anatomy: Text label centered within a solid filled rectangle
- Surface: action background with canvas text
- Typography: body token, weight 500
- Shape: 8px border radius
- Spacing: 14px vertical, 32px horizontal padding
- Composition: Often paired with a secondary outline button

**Secondary action button**
- Anatomy: Text label within a bordered rectangle
- Surface: canvas background, ink text, 1px border in border color
- Typography: body token, weight 500
- Shape: 8px border radius
- Spacing: Identical padding to primary
- Composition: Positioned beside primary with 16px gap

**Feature label**
- Anatomy: Uppercase text, often with "NEW" or similar
- Surface: Transparent, action-colored text
- Typography: label token with 0.05em tracking
- Composition: Precedes section-display headings with 8-12px margin

**Community avatar**
- Anatomy: Circular image with optional flag badge
- Surface: 50% border-radius, object-fit cover
- Size: 64px standard, smaller variants in dense grids
- Composition: Arranged in horizontal rows or scattered across map illustrations; flag badges positioned at bottom-right

**Footer column**
- Anatomy: Vertical stack of heading plus link list
- Surface: Transparent on surface background
- Typography: footer-heading for title, navigation for links
- Spacing: 24px between columns, 8px between links
- Composition: Left-aligned within each column, six or more columns in a row

**Phone mockup**
- Anatomy: Device frame containing app screenshot
- Surface: Dark device bezel, dark-surface app UI
- Composition: Positioned to left or right of descriptive text, often with slight rotation; screenshot shows messaging interface with circular avatars, message bubbles, and purple accent elements

## Responsive behavior

The layout likely collapses from multi-column to stacked on smaller viewports. The hero headline should scale down to section-display size on tablet and maintain readability on mobile. Footer columns probably fold into two-column grids then single-column accordions.

The "Search the World" avatar grid requires careful handling: on narrow screens, avatars should maintain minimum touch targets while scrolling horizontally or reflowing into fewer rows. Phone mockups may shift from beside text to above or below, maintaining their visual impact without overwhelming the viewport.

Button pairs should stack vertically on mobile with full-width treatment, preserving the primary-on-top hierarchy. The legal footer bar should stack copyright above links rather than splitting to edges.

## Practical implementation guidance

**Preserve**
- The bold Gellix/Inter pairing—this contrast between editorial display and functional body text defines the brand voice
- The restrained purple accent discipline—use action color only for interactive elements and key labels, never for decorative bulk
- Circular avatar treatment with small flag badges as a signature community element
- Generous section spacing that lets each feature breathe

**Avoid**
- Adding gradients or shadows that compete with the flat, clean surface aesthetic
- Using Gellix for body text or long paragraphs—its tight tracking reduces readability at small sizes
- Dark backgrounds on marketing sections unless specifically showcasing app UI
- Crowding the footer—its current density works because of consistent alignment and spacing

**Recommended build order**
1. Establish the 4px spacing unit and type scale with Inter body text
2. Implement hero section with Gellix headline and paired action buttons
3. Build the purple action system with hover states
4. Create avatar component with flag badge variant
5. Construct footer grid with responsive collapse behavior
6. Add phone mockup containers with dark UI screenshots

**Accessibility**
- Ensure the purple action color meets contrast requirements against white—test at minimum 4.5:1 for body text, 3:1 for large text
- Provide visible focus indicators that extend beyond color change, such as outline offsets on buttons
- Flag badge icons need alt text indicating language or country
- Footer link lists should use semantic heading structure for screen reader navigation
- Dark app screenshots within mockups should not be relied upon for critical information—provide equivalent text descriptions

## Scope note

This guide covers the HelloTalk marketing homepage visible in the supplied images, including the hero, community features, Voicerooms section, and footer. Navigation bar, mobile menu, form interactions, and additional interior pages are not represented. Motion, hover states, and dark-mode toggle behavior are not documented. Measurements are practical adaptation targets derived from visual inspection against a 4px base unit.
