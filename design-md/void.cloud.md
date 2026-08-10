# How void.cloud is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/void.cloud-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large display headline, terminal-style UI mockup, and feature grid with icons on dark background](https://pin.fontofweb.com/8096?format=jpg)](https://design.withfudge.com/share/pin-8096)

[Hero section with large display headline, terminal-style UI mockup, and feature grid with icons on dark background](https://design.withfudge.com/share/pin-8096)

[![Footer with purple gradient CTA banner, company links, social icons, and copyright on near-black background](https://pin.fontofweb.com/8097?format=jpg)](https://design.withfudge.com/share/pin-8097)

[Footer with purple gradient CTA banner, company links, social icons, and copyright on near-black background](https://design.withfudge.com/share/pin-8097)

## Overview

Void presents a developer-centric deployment platform through a dark, immersive visual language that evokes terminal environments and code editors. The design prioritizes technical credibility over decorative flourish, using a near-black canvas with electric purple accents to create depth and focus. The page structure follows a classic landing pattern: a bold hero with product positioning, a feature grid explaining capabilities, a prominent call-to-action banner, and a comprehensive footer. What distinguishes the system is its restrained palette and typographic hierarchy—display type carries the emotional weight while utilitarian body copy delivers technical specifics. The terminal mockup in the hero section reinforces the product's developer DNA, presenting code organization as a visual metaphor for the platform's capabilities. Every element serves the narrative of speed, simplicity, and technical sophistication.

## Colors

The color system operates on a principle of maximum contrast with selective accent energy. The foundation is absolute darkness, allowing content and the signature purple to command attention.

| token | hex | use |
|---|---|---|
| canvas | `#000000` | Page background, deepest layer |
| surface | `#14121A` | Card backgrounds, elevated panels |
| surface-elevated | `#16171D` | Terminal mockup chrome, subtle elevation |
| ink | `#FFFFFF` | Primary text, headings, primary buttons |
| muted-ink | `#867E8E` | Body text, descriptions, secondary information |
| accent | `#6C3BFF` | Primary brand purple, CTA backgrounds, active states |
| accent-light | `#7D88FF` | Lighter purple variant, hover states, gradients |
| accent-bright | `#98989F` | Technical labels, mono text highlights |
| border | `#FFFFFF` | Hairline borders, dividers, navigation outlines |

The palette divides into three functional zones. The dark foundation (canvas, surface, surface-elevated) creates depth through near-imperceptible layering. The neutral text range (ink, muted-ink) establishes readable hierarchy without chromatic distraction. The purple accent family provides the emotional signature, appearing most dramatically in the gradient CTA banner where accent and accent-light blend into an atmospheric glow. The terminal mockup introduces subtle blue-green photographic tones that complement the purple without competing. White borders appear as precise hairlines—never heavy dividers—maintaining the system's lightweight technical aesthetic.

## Typography

Three font families collaborate to create distinct voice territories. Apk Protocol handles display and structural hierarchy with geometric confidence. Inter manages all body, interface, and navigation text with neutral clarity. Kh Teka Mono appears sparingly for technical labels and code-adjacent moments, reinforcing the developer positioning.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Apk Protocol | 3.75rem | 500 | 1.12 | -0.05em | Hero headline, maximum impact |
| section-display | Apk Protocol | 3rem | 500 | 1 | -0.025em | Section headings, CTA banner |
| feature-headline | Apk Protocol | 1.5rem | 500 | 1.17 | normal | Feature card titles |
| body-large | Inter | 1.125rem | 400 | 1.56 | normal | Hero description, lead paragraphs |
| body | Inter | 1rem | 400 | 1.4 | normal | Standard paragraphs, navigation |
| body-small | Inter | 0.875rem | 400 | 1.43 | normal | Footer descriptions, captions |
| label | Inter | 0.875rem | 500 | 1.4 | normal | Button text, form labels |
| navigation | Inter | 0.875rem | 500 | 1 | normal | Header links, nav items |
| mono-label | Kh Teka Mono | 0.75rem | 400 | 1.33 | 0.025em | Technical tags, code labels |

Apk Protocol carries tight negative tracking at display sizes, creating a compressed, authoritative presence that feels engineered rather than decorative. Inter's weight range is limited to Regular (400) and Medium (500), avoiding heavy weights that would disrupt the system's lightweight technical character. Kh Teka Mono appears at a single small size with slight positive tracking for legibility at technical labels. Verify licensing for these families before production use. Apk Protocol is designed by Autograph Peter Korsman and available from Maël Bächtold for APK Type. Kh Teka Mono is designed by Kurppa Hosk (Jakob Ekelund, Wille Larsson) and available from Kh Type, a type foundry by Kurppa Hosk.

## Layout

The layout system centers content within generous horizontal margins, creating a focused reading experience that feels more editorial than conventional SaaS. The maximum content width appears constrained to approximately 75rem with asymmetric padding that shifts visual weight.

The hero section employs a split composition: textual content occupies the left portion while a terminal mockup dominates the right. This asymmetry breaks the predictable center-aligned hero pattern, suggesting technical sophistication through compositional confidence. The terminal element extends to the right edge, bleeding into the viewport margin and creating dimensional depth.

Below the hero, a feature grid organizes capabilities in a two-column layout with substantial vertical breathing room. Each feature card contains an icon, headline, and description, separated by hairline borders that divide without dominating. The grid maintains consistent internal padding of 2.5rem, with cards appearing to span equal widths.

The CTA banner interrupts the dark rhythm with a full-width purple gradient container. Centered text and a single button create a moment of reduced choice—directing attention to conversion.

The footer expands into a multi-column link architecture: company information, open source projects, and social connections arranged with generous top padding and a copyright bar at the absolute base. Footer links use muted-ink color to recede from the primary content hierarchy.

Spacing follows a 2px base unit, with major sections separated by 5rem or more. Component internal padding scales from 0.5rem for compact tags to 5rem for the CTA banner, creating clear spatial hierarchy through proportional contrast.

## Visual language

The visual identity draws from developer tooling aesthetics—terminal windows, code editors, and command-line interfaces—without becoming pastiche. The terminal mockup in the hero section is the central visual metaphor: a dark chrome window with file tree navigation, syntax-highlighted elements, and framework tabs (React, Vue, Svelte, Solid) that demonstrate platform breadth.

Iconography appears as simple line symbols preceding feature headlines: a terminal prompt for deployment, stacked layers for full-stack architecture, a wand for infrastructure automation, and a shield for reliability. These icons are minimal, monochromatic, and scaled to match the feature headline size without overpowering.

The purple gradient in the CTA banner introduces the system's only chromatic warmth, radiating from deep violet to brighter lavender with subtle texture that suggests light emission rather than flat color. This gradient treatment contrasts with the otherwise flat, matte surfaces elsewhere.

Borders function as precision instruments—1px hairlines in white or subtle dark tones that separate regions without visual weight. The navigation button uses a 2px solid white border as its defining feature, creating an outlined pill that inverts on interaction.

The overall impression is of a tool built by developers for developers: confident, uncluttered, and technically articulate. There is no decorative photography beyond the functional terminal screenshot; the product itself becomes the imagery.

## Components

**Primary Button**
- Anatomy: Text label within a bordered container
- Surface: Transparent background with accent purple border
- Typography: `{typography.label}` in accent purple
- Shape: 0.5rem radius, 2px border
- Spacing: 0.75rem vertical, 1.25rem horizontal padding
- Composition: Inline, left-aligned in context

**Secondary Button (CTA)**
- Anatomy: Text label on solid background
- Surface: White background with dark text
- Typography: `{typography.label}` in canvas color
- Shape: 0.5rem radius
- Spacing: 0.5rem vertical, 1rem horizontal padding
- Composition: Centered within banner contexts

**Navigation Link**
- Anatomy: Text with surrounding border
- Surface: Transparent with white border
- Typography: `{typography.navigation}`
- Shape: 0.5rem radius, 2px solid white border
- Spacing: 0.75rem vertical, 1rem horizontal
- Composition: Header right-aligned

**Feature Card**
- Anatomy: Icon, headline, and description stacked vertically
- Surface: Dark surface background
- Typography: `{typography.feature-headline}` for title, `{typography.body}` in muted-ink for description
- Shape: 0.5rem radius
- Spacing: 2.5rem internal padding
- Composition: Two-column grid with hairline dividers

**CTA Banner**
- Anatomy: Headline, subheadline, and button centered
- Surface: Purple gradient background (accent to accent-light)
- Typography: `{typography.section-display}` for headline, `{typography.body-large}` for subheadline
- Shape: 0.5rem radius
- Spacing: 5rem internal padding
- Composition: Full-width, centered content

**Terminal Mockup**
- Anatomy: Window chrome with tabs, file tree, and content area
- Surface: Elevated dark surface with subtle depth
- Typography: Mono labels for tabs, Inter for file names
- Shape: 0.5rem radius for container
- Composition: Right-bleeding, asymmetric hero placement

**Footer Section**
- Anatomy: Columnar link groups with category labels
- Surface: Canvas background
- Typography: `{typography.body-small}` in muted-ink for links, uppercase labels in mono or small text
- Spacing: Generous top padding (4rem+), structured column gaps
- Composition: Three-column layout with social icons right-aligned

## Responsive behavior

The layout appears optimized for desktop viewing with its asymmetric hero and multi-column grids. At narrower viewports, the split hero should stack vertically with the terminal mockup following the text content. The feature grid should collapse to single-column with maintained internal padding. The footer columns should compress to stacked groups or accordion patterns to preserve touch targets.

The terminal mockup, being a fixed-aspect image, should scale proportionally rather than crop, potentially becoming the dominant visual element on mobile. Text sizes should maintain hierarchy while reducing absolute scale—the hero display at 3.75rem may require reduction to prevent overflow on narrow screens.

Navigation should collapse to a compact menu or hamburger pattern, preserving the outlined button aesthetic in a constrained header. The CTA banner should remain full-width with reduced internal padding to maintain proportional breathing room.

## Practical implementation guidance

**Preserve**
- The absolute black canvas; any lightening destroys the terminal aesthetic
- Apk Protocol's tight tracking at display sizes; loosening creates a different voice
- The 2px hairline borders as precise separators, not heavy dividers
- The purple gradient's direction and saturation in the CTA banner
- The asymmetric hero composition with right-bleeding terminal

**Avoid**
- Adding decorative imagery unrelated to the product; the terminal is the visual
- Introducing additional accent colors; the purple family is sufficient
- Heavy drop shadows or dimensional effects; the system is flat and matte
- Centering all content; the left-weighted asymmetry is intentional
- Generic SaaS illustration styles that contradict the technical tone

**Recommended Build Order**
1. Establish the canvas and surface color tokens with pure black foundation
2. Implement Apk Protocol for display headings with specified tracking
3. Build the hero section with split layout and terminal mockup placement
4. Create the feature grid with hairline borders and icon system
5. Implement the purple gradient CTA banner with centered composition
6. Construct the multi-column footer with link hierarchy
7. Add Inter for all body and interface text
8. Introduce Kh Teka Mono for technical labels and tags

**Accessibility**
- Ensure the purple gradient CTA maintains minimum 4.5:1 contrast for text; the gradient may require a subtle dark overlay or text shadow
- The muted-ink body text on dark surfaces should meet WCAG AA for large text and AA for normal text if used at sufficient size
- Terminal mockup content is decorative; ensure alt text describes the functional purpose rather than transcribing code
- Focus indicators should use the accent purple with sufficient offset or outline to be visible against dark backgrounds
- Navigation buttons with 2px borders should maintain visible focus states that do not rely solely on color change

## Scope note

This guide covers the void.cloud landing page hero, feature grid, CTA banner, and footer as visible in the supplied captures. Navigation dropdowns, mobile breakpoints, form interactions, and interior pages are not represented. Motion behavior, hover states, and loading sequences are not documented. Measurements derive from the exact retained values in the design facts.
