# How hedra.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hedra.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark FAQ accordion section with footer navigation and large background wordmark on black canvas](https://pin.fontofweb.com/10793?format=jpg)](https://design.withfudge.com/share/pin-10793)

[Dark FAQ accordion section with footer navigation and large background wordmark on black canvas](https://design.withfudge.com/share/pin-10793)

[![Light FAQ section with expanded accordion item showing body text in gray rounded panels](https://pin.fontofweb.com/10792?format=jpg)](https://design.withfudge.com/share/pin-10792)

[Light FAQ section with expanded accordion item showing body text in gray rounded panels](https://design.withfudge.com/share/pin-10792)

[![Feature card grid with numbered AI product tiles and mixed photography on white background](https://pin.fontofweb.com/10791?format=jpg)](https://design.withfudge.com/share/pin-10791)

[Feature card grid with numbered AI product tiles and mixed photography on white background](https://design.withfudge.com/share/pin-10791)

[![Hero section with cinematic video background, thin display headline, and dual call-to-action buttons](https://pin.fontofweb.com/10775?format=jpg)](https://design.withfudge.com/share/pin-10775)

[Hero section with cinematic video background, thin display headline, and dual call-to-action buttons](https://design.withfudge.com/share/pin-10775)

## Overview

Hedra's design system is built for a cinematic AI video generation platform that moves between dramatic darkness and clinical light. The visual language treats the interface as a stage: hero sections plunge into pure black with immersive video backdrops, while content sections emerge onto clean white surfaces with precise, engineered typography. The system balances expressive display type against highly functional UI text, creating tension between creative possibility and technical reliability. Every element serves the narrative of transforming still images into living video—darkness represents the latent space, light represents the rendered output.

The architecture alternates between two modes: immersive dark canvases for emotional impact and structured light surfaces for information density. Navigation remains consistently minimal, floating above content with transparent backgrounds. The footer anchors every page with a massive, low-contrast wordmark that bleeds beyond viewport edges, treating the brand name as environmental texture rather than discrete logo.

## Colors

The palette operates in strict binary: pure black and pure white dominate, with a single blue accent reserved for interactive states. Dark surfaces use subtle elevation through near-black grays rather than shadows.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, hero sections, footer |
| canvas-light | #FFFFFF | Content sections, feature grids, FAQ areas |
| surface | #121212 | Elevated dark panels, FAQ accordion items |
| ink | #FFFFFF | Primary text on dark backgrounds |
| ink-primary | #000000 | Primary text on light backgrounds |
| ink-muted | #FFFFFF | Secondary text, footer links on dark |
| action | #0088FF | Links, active states, focus indicators |
| action-inverse | #FFFFFF | Primary button fills on dark backgrounds |
| border-subtle | #FFFFFF | 1px hairlines on dark surfaces |
| border-inverse | #000000 | 1px hairlines on light surfaces |

Dark sections use `canvas` as the base with `surface` for interactive elements. Light sections invert to `canvas-light` with `ink-primary` text. The single `action` blue appears sparingly in computed link states and focus rings, while buttons on dark backgrounds use white fills with black text for maximum contrast. Gradients appear as pure black overlays for video backgrounds, ensuring text legibility without introducing chromatic complexity.

## Typography

The type system pairs an extreme display face with utilitarian sans-serifs and a monospace for technical labels. The supplied families are PpValve, PpNeueMontreal, Geist, Geist Mono, Ui-sans-serif, and -apple-system. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PpValve | 19.875rem | 800 | 1 | -0.02em | Massive background wordmarks, hero statements |
| section-display | PpValve | 5.625rem | 200 | 1.05 | -0.025em | Section headlines, FAQ titles |
| heading-large | Geist | 1.5625rem | 500 | 1.3 | -0.03em | Card titles, accordion questions |
| heading-medium | Ui-sans-serif | 1.875rem | 600 | 1.2 | -0.03em | Feature section headers |
| body | Ui-sans-serif | 1.125rem | 400 | 1.3 | -0.03em | Paragraphs, descriptions |
| body-small | Ui-sans-serif | 1rem | 400 | 1.3 | -0.03em | Footer links, secondary content |
| label | Geist Mono | 0.9375rem | 400 | 1.5 | 0em | Buttons, tags, metadata |
| navigation | -apple-system | 0.75rem | 600 | 1.3 | 0em | Header links, nav items |
| legal-copy | Geist Mono | 0.875rem | 400 | 1.5 | 0em | Copyright, legal footer |

PpValve delivers the system's emotional core at enormous sizes with tight tracking, while Geist handles UI density with slightly negative letter-spacing for a contemporary feel. Ui-sans-serif serves as the workhorse for readable content. Geist Mono provides technical credibility for labels and legal text. The `-apple-system` stack ensures crisp navigation at small sizes. PpNeueMontreal appears in the type inventory and may serve additional display or heading roles in other page contexts.

## Layout

The layout system uses generous horizontal padding and dramatic vertical rhythm. Content containers max out at standard desktop widths with asymmetric internal spacing.

**Grid and containment.** Pages use full-bleed sections alternating between dark and light. Content within sections receives `5rem` horizontal padding on desktop, expanding to `6.25rem` in the footer. Feature grids employ asymmetric column arrangements—some cards span half width, others third width—creating visual rhythm without rigid uniformity.

**Section spacing.** Vertical padding scales dramatically: hero sections use minimal top padding with substantial bottom padding to accommodate video backdrops; content sections use `6.75rem` top and bottom; the footer compresses to tighter vertical rhythm. A `15rem` top padding value appears for hero content positioning over video.

**Navigation architecture.** The header floats absolutely over hero content with transparent background. Logo locks to the left, primary navigation centers, and utility actions (Log in, Sign Up) cluster right. Navigation links use `1.25rem` gap spacing.

**Z-index layering.** Video and image backgrounds sit at base layer with gradient overlays above. Content floats above at standard z-index. The footer wordmark sits at the lowest visible layer, partially cropped by viewport edges.

## Visual language

**Imagery and motion.** The system treats photography and video as immersive environmental elements rather than contained assets. Hero sections feature full-bleed cinematic video with motion blur and shallow depth of field. Feature cards use high-production still photography with saturated color palettes—teal sofas, pink office scenes, red sports cars—creating visual anchors against neutral backgrounds.

**Texture and depth.** Dark surfaces achieve depth through subtle elevation changes (`#000000` to `#121212`) rather than drop shadows. Light surfaces remain flat with zero shadow. The only shadow in the system is a functional `0px 4px 20px rgba(0,0,0,0.12)` for elevated dropdowns or modals.

**Brand expression.** The massive "HEDRA" wordmark at footer scale—approaching 20rem—serves as the system's signature element. Rendered in PpValve at extra-bold weight, it bleeds beyond viewport edges and operates at extremely low contrast against black, becoming texture rather than readable text. This treatment repeats across page transitions as a consistent environmental signature.

**Numbering system.** Feature cards and use cases employ zero-padded decimal indices ("03", "04", "05") in muted gray, positioned upper-right of card headers. This technical indexing reinforces the platform's systematic approach to creative tools.

## Components

**Primary action button.** Anatomy: text label with optional arrow icon, pill-shaped container. Surface: white fill (`#FFFFFF`) with black text on dark backgrounds; invert to black fill with white text on light backgrounds. Typography: `label` token at Geist Mono, 400 weight. Shape: full pill at `999px` radius. Spacing: `0.5625rem` vertical padding, `1.96875rem` horizontal padding. Composition: inline-flex with `0.28125rem` gap between text and icon. Variants: default with arrow, icon-only for compact contexts.

**Secondary action button.** Anatomy: text label, transparent container with hairline border. Surface: transparent with `1px solid #FFFFFF` on dark; `1px solid #000000` on light. Typography: `label` token. Shape: full pill. Spacing: identical to primary. States: hover adds subtle background fill at 10% opacity.

**FAQ accordion item.** Anatomy: question text, expand/collapse icon (`+` or `−`), optional answer body. Surface: `#121212` rounded panel on dark sections; light gray rounded panel on light sections. Typography: question uses `heading-large` (Geist, 500); answer uses `body` (Ui-sans-serif, 400) in muted gray. Shape: `1.03125rem` border radius. Spacing: `1.25rem` internal padding, `1.25rem` vertical gap between items. Composition: flex row with space-between alignment; answer appears below with top padding expansion. States: collapsed shows `+` icon; expanded shows `−` and reveals answer text at reduced opacity.

**Feature card.** Anatomy: index number, title, description, media asset. Surface: `#FFFFFF` background. Typography: title uses `heading-large`; description uses `body-small` in muted gray; index uses `body-small` in muted gray, right-aligned. Shape: `1.03125rem` border radius. Spacing: `1.875rem` internal padding. Media: image or video fills card width with `1.03125rem` bottom radius, maintaining aspect ratio. Composition: text block above media with `1.25rem` separation.

**Navigation header.** Anatomy: logo mark, text links, dropdown indicator, utility buttons. Surface: transparent background. Typography: links use `navigation` token; buttons use `label`. Spacing: `1.25rem` gap between nav items; `2.5rem` gap between nav cluster and utility actions. Composition: three-zone flex with logo left, nav center, actions right. Dropdowns show chevron icon at `0.5rem` offset.

**Footer.** Anatomy: massive background wordmark, three-column link grid, social links, legal text. Surface: `#000000` background. Typography: column headers use `body` in white; links use `body-small` in white; legal uses `legal-copy` in muted gray. Spacing: `5rem` horizontal padding; `2.5rem` row gap between link groups; `6.75rem` bottom padding for wordmark bleed. Composition: wordmark absolutely positioned at bottom, cropped by viewport; content grid above with `6.25rem` gap between columns.

## Responsive behavior

The system prioritizes desktop experience. Implementations should consider: hero video backgrounds require fallback poster images for reduced motion preferences; FAQ accordions maintain full width on narrow viewports with increased touch targets; feature card grids should stack from asymmetric multi-column to single column below `768px`; the footer wordmark should scale down proportionally, maintaining bleed behavior; navigation collapses to hamburger menu below `768px` with full-screen overlay maintaining dark theme.

## Practical implementation guidance

**Preserve.** The extreme contrast between dark hero and light content sections—this alternation defines the brand rhythm. The PpValve display type at massive scale for environmental wordmarks. The technical numbering system on feature cards. The pill-shaped buttons with monospace labels. The transparent navigation floating over immersive media.

**Avoid.** Adding color to the primary palette beyond the single blue accent. Using drop shadows on light surfaces. Making the footer wordmark fully legible—it should remain partially cropped. Introducing rounded corners larger than the panel radius on containers. Using the display typeface at small sizes where its character degrades.

**Recommended build order.** Establish the color modes (dark/light) with CSS custom properties and data attributes. Implement the type scale with font-face declarations for PpValve, Geist, and Geist Mono. Build the navigation shell with transparent background and z-index layering. Create the button components with pill shapes and icon support. Develop the FAQ accordion with height animation and state management. Construct the feature card grid with asymmetric column spans. Finally, implement the footer with absolutely positioned wordmark and responsive cropping.

**Accessibility.** Ensure all text over video backgrounds meets WCAG contrast minimums through gradient overlays—test with actual video frames, not placeholder colors. Provide `prefers-reduced-motion` fallbacks that replace video with static poster images. Maintain focus visibility on dark surfaces with the `#0088FF` action color at `2px` outline offset. Accordion items should use proper button semantics with `aria-expanded` states. The massive footer wordmark should have `aria-hidden="true"` to prevent screen reader fragmentation.

## Scope note

This guide covers the marketing site surface including hero sections, feature grids, FAQ accordions, and footer navigation. Pricing pages, authenticated studio interfaces, and mobile-native layouts are not represented. Motion behavior including video autoplay, scroll-triggered animations, and page transitions are recommended but not documented from still images. PpNeueMontreal is present in the type inventory but not visibly deployed in the captured sections.
