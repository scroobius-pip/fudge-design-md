# How newkino.studio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/newkino.studio-design)

Last updated: 2026-08-10

## Captured pages

[![Hero viewport with dark cinematic background, white headline, and two pill-shaped action buttons in the lower-left quadrant.](https://pin.fontofweb.com/3688?format=jpg)](https://design.withfudge.com/share/pin-3688)

[Hero viewport with dark cinematic background, white headline, and two pill-shaped action buttons in the lower-left quadrant.](https://design.withfudge.com/share/pin-3688)

[![Alternate hero frame showing a silhouetted figure against a warm dusk sky with the same headline and navigation treatment.](https://pin.fontofweb.com/3687?format=jpg)](https://design.withfudge.com/share/pin-3687)

[Alternate hero frame showing a silhouetted figure against a warm dusk sky with the same headline and navigation treatment.](https://design.withfudge.com/share/pin-3687)

[![Team section with black background, grayscale portrait cards, pink primary button, and dark footer with social icons.](https://pin.fontofweb.com/3686?format=jpg)](https://design.withfudge.com/share/pin-3686)

[Team section with black background, grayscale portrait cards, pink primary button, and dark footer with social icons.](https://design.withfudge.com/share/pin-3686)

[![Services section with vivid magenta-pink background and three rounded cards in purple, coral-pink, and light blue with isometric illustrations.](https://pin.fontofweb.com/3685?format=jpg)](https://design.withfudge.com/share/pin-3685)

[Services section with vivid magenta-pink background and three rounded cards in purple, coral-pink, and light blue with isometric illustrations.](https://design.withfudge.com/share/pin-3685)

## Overview

NewKino Studio's design system channels the drama and craft of cinema into a digital experience. The visual language is built on extreme contrast: deep black canvases that let imagery and typography breathe, punctuated by an electric pink accent that signals action and creative energy. The system serves a film, animation, and new-media studio, so every element must feel intentional, polished, and slightly theatrical without becoming ornate.

The homepage structure visible in the materials follows a classic narrative arc: an immersive hero that establishes mood, a services section that bursts with color and playfulness, a team section that grounds the studio in human craft, and a footer that quietly provides wayfinding. Typography is geometric and confident, using Cera Pro for all reading matter and Krona One for small uppercase labels that feel like film credits or production slates. Rounded shapes appear throughout—pill buttons, circular email actions, and generously rounded cards—softening the stark palette with approachable modernism.

The design succeeds through restraint in its dark sections and exuberance in its accent moments. When the background is black, content is white or muted gray, photography is monochrome, and the pink accent is used sparingly for primary actions. When the background shifts to the vivid magenta-pink of the services section, the palette inverts to dark text on light card surfaces, creating a deliberate jolt that keeps the experience from feeling monotonous.

## Colors

| token | value | use |
|---|---|---|
| action | `#FF0055` | Primary buttons, email icon circle, logo accent, hover states |
| ink | `#FFFFFF` | Headlines, body text on dark backgrounds, navigation text |
| muted-ink | `#888888` | Secondary labels, footer legal text, disabled states |
| canvas | `#000000` | Page background, hero backdrop, team section ground |
| surface | `#111111` | Card backgrounds on dark sections, footer ground |
| surface-elevated | `#1A1A1A` | Elevated panels, subtle hierarchy within dark zones |
| border | `#333333` | Subtle dividers, navigation pill outlines, hairline separators |
| accent-purple | `#8B5CF6` | Services card background (Animation) |
| accent-coral | `#F87171` | Services card background (Cinematics) |
| accent-sky | `#7DD3FC` | Services card background (New Media) |

The color strategy operates in two modes. The **dark mode** dominates: pure black canvas with white ink, using the electric pink as a singular accent for actions and brand moments. This mode appears in the hero, team, and footer sections. The **vivid mode** inverts the energy: a saturated magenta-pink background with dark text, where three pastel service cards provide friendly contrast. The pink (`#FF0055`) is the system's emotional core—aggressive, creative, unmistakably digital. Grayscale photography in the team section reinforces the cinematic heritage, letting the pink accent feel even more electric by comparison.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cera Pro | 4rem | 500 | 1.1 | -0.02em | Homepage hero headline |
| section-display | Cera Pro | 2.5rem | 500 | 1.2 | -0.01em | Section headings ("Our Team", "Our Services") |
| body | Cera Pro | 1rem | 400 | 1.6 | 0em | Descriptive paragraphs, team bios |
| label | Krona One | 0.75rem | 400 | 1.4 | 0.08em | Uppercase section labels, button text, role titles |
| navigation | Cera Pro | 0.875rem | 400 | 1 | 0em | Top navigation, footer links |

Cera Pro serves as the workhorse family, designed by Jakob Runge with contributions from Lisa Fischbach, Irene Vlachou, Ilya Ruderman, and Yury Ostromentsky, and published by Type Mates. It appears in Light, Regular, and Medium weights in this system, with Medium reserved for display sizes and Regular for body. Krona One, a geometric sans with a constructed feel, handles all uppercase labeling—its wide stance and mechanical rhythm evoke film production credits and technical readouts.

Verify licensing for these families before production use. The Cera Pro files are self-hosted, while Krona One loads from Google Fonts.

Type sizing follows a 4px grid: hero-display at 64px, section-display at 40px, body at 16px, navigation at 14px, and label at 12px. All sizes are whole-number multiples of the 4px relative unit. Display sizes use tight negative tracking for impact, while body text remains neutral and readable.

## Layout

The page operates on a full-bleed, edge-to-edge philosophy with generous internal breathing room. The hero section fills the entire viewport with a cinematic background image, placing content in the lower-left quadrant rather than centering it—this asymmetry creates tension and visual interest, drawing the eye across the frame like a widescreen composition.

A consistent horizontal margin of approximately 3rem (48px) pads content from viewport edges in desktop contexts. The navigation bar floats at the top with the logo anchored left and action items right, maintaining this margin. Below the hero, sections stack vertically with substantial vertical rhythm: approximately 6rem (96px) between major section boundaries.

The team section uses a two-column editorial layout: text and call-to-action occupy the left third, while portrait cards occupy the right two-thirds in a horizontal arrangement. The services section breaks into a three-column grid of equal-width cards with consistent gap spacing of roughly 1.5rem (24px). The footer compresses into a multi-column link cluster with the logo mark isolated on the left and legal text on the far right.

Content alignment favors left-justified stacks over centered blocks, reinforcing the cinematic, editorial quality. When cards appear, they use generous internal padding of 2rem (32px) and prominent border radii of 1.5rem (24px), making them feel like physical objects placed on the surface.

## Visual language

The aesthetic vocabulary merges film-production minimalism with playful digital energy. Three qualities define the system: **immersion**, **contrast**, and **roundness**.

Immersion comes from full-bleed photography and video backgrounds that dominate the viewport, with UI elements treated as thin overlays rather than framed containers. The hero backgrounds show atmospheric, slightly desaturated imagery—an abstract teal form in one state, a silhouetted figure against warm dusk in another—suggesting narrative without demanding attention.

Contrast operates at every level: black against white, monochrome photography against electric pink, stark minimalism against colorful illustration. The team section's grayscale portraits feel deliberately analog and human against the digital precision of the surrounding UI. The services section's sudden shift to vivid magenta-pink breaks the monochrome spell with intentional exuberance.

Roundness appears as a unifying formal gesture. Buttons are fully pill-shaped. The email contact icon is a perfect circle. Service cards and team portrait containers use 1.5rem radii. Even the isometric illustrations within service cards feature rounded, friendly forms. This softness prevents the high-contrast palette from feeling aggressive or clinical.

The logo treatment is distinctive: "newkino" in lowercase with a small triangular play-icon mark, the triangle filled with the action pink. This mark reappears in the footer at larger scale as a brand signature.

## Components

### Primary Button

- **Anatomy**: Text label centered within a fully rounded pill shape
- **Surface**: Solid action pink (`#FF0055`) background with white text
- **Typography**: Krona One label token, uppercase, 0.75rem
- **Shape**: Border radius 9999px (full pill)
- **Spacing**: Padding approximately 0.875rem vertical, 2rem horizontal
- **Composition**: Appears in pairs with secondary button variant; primary button leads the visual hierarchy

### Secondary Button

- **Anatomy**: Text label centered within a pill outline
- **Surface**: Transparent background with 1px white border and white text
- **Typography**: Krona One label token, matching primary button
- **Shape**: Border radius 9999px, identical height to primary button
- **Spacing**: Same padding as primary button for visual pairing
- **Composition**: Positioned to the right of primary button in hero context

### Navigation Pill

- **Anatomy**: Text label within a subtle outlined container
- **Surface**: Transparent with 1px border in muted gray (`#333333`)
- **Typography**: Cera Pro navigation token, sentence case
- **Shape**: Border radius 9999px
- **Spacing**: Padding approximately 0.5rem vertical, 1.25rem horizontal
- **Composition**: Used for "Home" active state in top navigation; inactive items appear as plain text

### Email Action Icon

- **Anatomy**: Envelope icon centered within a circular container
- **Surface**: Solid action pink (`#FF0055`) background with white icon
- **Shape**: Perfect circle, 2.5rem diameter
- **Composition**: Positioned in top-right navigation cluster, distinct from text links by its filled shape and color

### Team Portrait Card

- **Anatomy**: Grayscale photograph with text overlay at bottom
- **Surface**: Dark surface (`#111111`) background, image with subtle gradient overlay for text legibility
- **Typography**: Name in Cera Pro section-display size (approximately 1.25rem), role in Krona One label token uppercase
- **Shape**: Border radius 1.5rem, overflow hidden
- **Spacing**: Internal text padding approximately 1.5rem from edges
- **Composition**: Cards appear in horizontal sequence with consistent gap; slight rotation or perspective variation may add dynamism

### Service Card

- **Anatomy**: Isometric illustration centered with category label below
- **Surface**: Pastel background per category—purple, coral-pink, or sky-blue
- **Typography**: Category name in Cera Pro section-display size, white or dark depending on background value
- **Shape**: Border radius 1.5rem
- **Spacing**: Generous internal padding, illustration occupying upper two-thirds, label in lower third
- **Composition**: Three cards in equal-width horizontal grid with consistent gap spacing

### Footer

- **Anatomy**: Logo mark, link columns, social icon row, legal text
- **Surface**: Dark surface (`#111111`) background
- **Typography**: Column headers in Krona One label token uppercase, links in Cera Pro navigation token, legal text in muted gray
- **Composition**: Logo isolated left, link columns center-left, social icons center, legal text far right; multi-column layout with clear information hierarchy

## Responsive behavior

The desktop layout visible in the materials suggests a single breakpoint strategy for smaller viewports. The hero headline, currently set at 4rem, should scale down to approximately 2.5rem on tablet and 2rem on mobile to maintain line-length control. The two-button hero cluster should stack vertically on narrow screens, with the primary button full-width and the secondary button below it.

The three-column services grid should collapse to a single column on mobile, with cards stacking and scrolling vertically. The team section's two-column editorial layout should invert to a single column, placing text above the portrait sequence rather than beside it.

Navigation should condense to a hamburger menu or simplified icon set on mobile, preserving the email action circle as a persistent contact affordance. The footer multi-column layout should stack into a single column with the logo at top, links grouped, and legal text at bottom.

Touch targets must maintain minimum 44px height; the current pill buttons and circular icon exceed this comfortably. Card padding should reduce from 2rem to 1.5rem on mobile to preserve screen real estate without feeling cramped.

## Practical implementation guidance

### Preserve
- The extreme contrast between dark sections and the vivid services interlude—this rhythm is central to the brand experience
- The asymmetrical lower-left hero placement; centering would destroy the cinematic tension
- The consistent use of Krona One for all uppercase labels; mixing other fonts for this role would dilute the technical, credits-like quality
- The full-bleed photography with minimal UI overlay; frames and heavy containers would contradict the immersive intent
- The electric pink as a singular, disciplined accent—do not introduce additional saturated colors in dark sections

### Avoid
- Generic gray backgrounds in place of pure black; the depth of `#000000` is essential
- Sharp-cornered buttons or cards; the rounded vocabulary is a defining formal trait
- Centered text blocks in editorial sections; left alignment maintains the filmic, storyboard-like quality
- Photographic color in team portraits; the monochrome treatment is a deliberate aesthetic choice
- Multiple accent colors competing with the action pink in dark sections

### Recommended Build Order
1. Establish the color tokens and apply the black canvas with white ink globally
2. Implement Cera Pro and Krona One with the full type scale
3. Build the hero section with full-bleed background, asymmetric content placement, and pill button pair
4. Create the navigation bar with logo, text links, outlined pill, and filled email circle
5. Develop the services section with magenta-pink background and three pastel cards
6. Construct the team section with dark ground, editorial two-column layout, and portrait cards
7. Assemble the footer with multi-column link structure and social icons
8. Add responsive breakpoints and test touch targets

### Accessibility
- Ensure white text on black backgrounds meets WCAG AAA contrast ratios (it does at normal sizes)
- Verify that the action pink on white or light surfaces meets WCAG AA minimum contrast; when used as text, `#FF0055` may need darkening for small sizes
- Provide visible focus states for all interactive elements; consider a 2px white outline offset for dark backgrounds
- Maintain logical heading hierarchy: hero-display as h1, section-display as h2, with Krona One labels as visual headings rather than semantic if appropriate
- Ensure the email icon circle has an accessible label and is reachable by keyboard navigation
- For the services section's pastel cards, verify that illustration labels have sufficient contrast against their respective backgrounds

## Scope note

This guide covers the homepage surface visible in the supplied materials: hero, services, team, and footer sections. Interior pages, project detail templates, motion behavior, hover states, form interactions, and mobile-specific layouts are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px grid. Verify licensing for Cera Pro and Krona One before production use.
