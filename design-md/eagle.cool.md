# How eagle.cool is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/eagle.cool-design)

Last updated: 2026-08-10

## Captured pages

[![Hero trial section with glowing app icon, gradient headline, and dark download button on black background](https://pin.fontofweb.com/3698?format=jpg)](https://design.withfudge.com/share/pin-3698)

[Hero trial section with glowing app icon, gradient headline, and dark download button on black background](https://design.withfudge.com/share/pin-3698)

[![Testimonials grid with yellow accent label, cream display type, and dark elevated cards with avatars](https://pin.fontofweb.com/3697?format=jpg)](https://design.withfudge.com/share/pin-3697)

[Testimonials grid with yellow accent label, cream display type, and dark elevated cards with avatars](https://design.withfudge.com/share/pin-3697)

[![Features section with pink gradient headline, dark cards with app icons, and icon-grid feature list](https://pin.fontofweb.com/3696?format=jpg)](https://design.withfudge.com/share/pin-3696)

[Features section with pink gradient headline, dark cards with app icons, and icon-grid feature list](https://design.withfudge.com/share/pin-3696)

[![Browser extension showcase with dark interface mockup, browser icons, and tabbed navigation bar](https://pin.fontofweb.com/3695?format=jpg)](https://design.withfudge.com/share/pin-3695)

[Browser extension showcase with dark interface mockup, browser icons, and tabbed navigation bar](https://design.withfudge.com/share/pin-3695)

## Overview

Eagle's landing page presents a dark, immersive environment built for creative professionals who manage visual assets. The design system centers on a near-black canvas that makes product imagery and gradient typography feel luminous. The visual hierarchy moves from a hero trial section through feature deep-dives, social proof, and browser-extension capabilities. Each section maintains consistent elevation through subtly layered surfaces—cards rest slightly above the canvas with thin borders rather than heavy shadows. The overall impression is of a premium utility: restrained, confident, and technically precise. Color arrives through controlled accents—warm yellow for testimonials, soft pink for features, and electric blue for the product identity—rather than broad chromatic fields. The system prioritizes readability of dense information while letting interface mockups and iconography provide visual interest.

## Colors

The palette is fundamentally monochromatic with selective warm and cool accents. The near-black canvas creates maximum contrast for white typography and lets colorful product screenshots dominate. Surfaces step up in lightness through three levels: pure black canvas, dark gray cards, and slightly lighter elevated cards for testimonials.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #1a1a1a | Primary card backgrounds, feature grids |
| surface-elevated | #242424 | Testimonial cards, hovered or focused surfaces |
| ink | #ffffff | Primary headings, body text, icons |
| muted-ink | #a0a0a0 | Secondary descriptions, captions, inactive tabs |
| accent-yellow | #f5c842 | Section labels, decorative icons, testimonial header accent |
| accent-pink | #e8a4d0 | Gradient headline tints, feature section identity |
| accent-blue | #4a9eff | Product icon glow, interactive highlights |
| border | #333333 | Card outlines, dividers, subtle separation |

The gradient headlines in the hero and features sections blend from white through soft pink to pale blue, creating an iridescent effect against the dark ground. This treatment appears on key display text only, not on body copy or labels. The yellow accent functions as a categorical marker—appearing with a sparkle icon to introduce testimonial and feature sections—while pink serves as the primary chromatic identity for the features area. Blue appears most concentrated in the product icon's glow effect and browser extension iconography. Border colors remain deliberately subdued to avoid visual noise across dense card layouts.

## Typography

The type system relies on Inter Tight in a single family with weight and size variation to establish hierarchy. Display sizes use tight leading and negative tracking for a modern, compact presence. Body sizes open up for comfortable reading of feature descriptions and testimonials.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter Tight | 3.5rem | 700 | 1.1 | -0.02em | Hero trial headline, major section titles |
| section-display | Inter Tight | 2.75rem | 700 | 1.15 | -0.02em | Secondary section headings |
| body | Inter Tight | 1rem | 400 | 1.6 | 0 | Feature descriptions, primary body copy |
| body-small | Inter Tight | 0.875rem | 400 | 1.5 | 0 | Testimonial quotes, card descriptions |
| label | Inter Tight | 0.875rem | 600 | 1.4 | 0.01em | Button text, tab labels, feature titles |
| caption | Inter Tight | 0.75rem | 400 | 1.5 | 0 | Version strings, metadata, fine print |

Display text employs a gradient fill that shifts across the glyph forms, visible in the hero "Free 30-day trial" and features "User-Favorite Features" headings. This treatment requires background-clip: text with a linear gradient from white through pink to light blue. The label weight at 600 provides clear hierarchy for interactive elements without the heaviness of full bold. Caption size handles technical metadata like version numbers and system requirements. Verify licensing for these families before production use. Inter Tight is designed by Rasmus Andersson and distributed by Rsms.

## Layout

The page uses a centered single-column flow with contained width for text and full-bleed backgrounds for imagery. Sections stack vertically with generous internal padding, creating breathing room between dense information areas.

The hero trial section centers all elements vertically and horizontally: product icon, gradient headline, description paragraph, download button, and version caption form a tight vertical stack. This centered composition signals the primary conversion action.

Feature sections transition to asymmetric two-column layouts for rich content cards. The "User-Favorite Features" area places two large feature cards side by side—each containing an illustration or icon grid with title and description—followed by a four-column grid of smaller feature items below. This creates visual rhythm between expansive and compact information density.

The testimonials section implements a horizontal scrolling or masonry-like arrangement with multiple card sizes. Larger cards occupy more horizontal space while standard cards maintain uniform dimensions. Cards align to a subtle grid with consistent gaps.

The browser extension showcase returns to a split composition: a large interface mockup occupies the left two-thirds while explanatory text and browser icons sit right-aligned. A tab bar sits above the mockup, allowing section switching without page navigation.

Container max-width appears to constrain text content to approximately 72 characters for comfortable reading, while visual mockups and card grids extend toward viewport edges. Section vertical spacing uses 6rem between major areas, with 1.5rem gaps between related elements within sections.

## Visual language

The visual language balances technical precision with creative warmth. Interface mockups dominate the imagery strategy—showing the actual application in use rather than abstract illustrations. These mockups use realistic browser chrome, actual creative software icons, and photographic content to establish credibility with the target audience of designers and visual professionals.

Surface treatment relies on subtle elevation through lightness shifts and hairline borders rather than drop shadows. Cards feel pressed into the dark canvas rather than floating above it. The border color at #333333 provides just enough separation without glowing or drawing attention.

Iconography appears in two modes: small functional icons for feature lists (bookmark, batch, lock, video, audio, font, web, video bookmark) and larger application icons for integration partners. Functional icons use simple line or filled styles at 24px equivalent, while partner icons retain their brand colors within rounded square containers.

The product identity centers on a rounded-square app icon with a stylized eagle form in blue gradients, surrounded by a soft glow effect. This glow extends the brand blue into the surrounding darkness, creating a focal point without harsh edges.

Photography appears within mockups rather than as standalone hero imagery—animal photos, interface screenshots, and creative work samples demonstrate the application's purpose through context rather than decoration.

## Components

### Primary button

The download button uses a dark elevated surface with rounded corners and a subtle border. An Apple logo icon precedes the label text, with a dropdown chevron indicating platform selection. The button stretches to accommodate the label and icon comfortably, with horizontal padding creating a pill-like proportion without full circular ends.

- Anatomy: Icon, label text, dropdown indicator
- Surface: backgroundColor {colors.surface-elevated}, border 1px solid {colors.border}
- Typography: {typography.label}, color {colors.ink}
- Shape: borderRadius {rounded.button}
- Spacing: padding 0.75rem 1.5rem
- Composition: Inline flex with centered alignment, gap between icon and text

### Feature card

Large feature cards contain a title, description, and rich media area. The "Cloud Sync Tools" card shows four application icons in a rounded container with connecting lines, while "Compatible with All Formats" displays a dense grid of creative software badges. Cards share uniform background and border treatment regardless of internal content.

- Anatomy: Title, description, media/illustration area
- Surface: backgroundColor {colors.surface}, border 1px solid {colors.border}
- Typography: Title uses {typography.label}, description uses {typography.body-small}
- Shape: borderRadius {rounded.card}
- Spacing: padding {spacing.card-padding}
- Composition: Vertical stack with title at top, media centered, description below

### Small feature item

The eight-item grid below major feature cards uses a compact vertical layout: icon, title with external-link arrow, and description. Icons sit directly above text without background containers, creating a lighter visual weight than the bordered cards above.

- Anatomy: Icon, title with arrow, description
- Surface: Transparent, no border
- Typography: Title {typography.label}, description {typography.body-small}
- Spacing: Gap 0.75rem between icon and title, 0.5rem between title and description
- Composition: Vertical stack, four columns at desktop width

### Testimonial card

Testimonial cards present avatar, name, role, and quote text. Avatar images are circular at approximately 40px. Name and role stack horizontally at card top, with role in muted color. The quote body uses body-small size with comfortable line height for multi-line readability.

- Anatomy: Avatar image, name, role, quote text
- Surface: backgroundColor {colors.surface-elevated}, no visible border
- Typography: Name {typography.label}, role {typography.caption} in {colors.muted-ink}, quote {typography.body-small}
- Shape: borderRadius {rounded.card}
- Spacing: padding {spacing.card-padding}, internal gaps 0.75rem
- Composition: Horizontal header with avatar left of name/role stack, quote below

### Tab bar

The browser extension section uses a pill-style tab bar with five options. Active state receives elevated surface treatment with border, while inactive tabs remain transparent with muted text. This creates a segmented control appearance without heavy container chrome.

- Anatomy: Tab label text
- Surface: Active {colors.surface-elevated} with border, inactive transparent
- Typography: {typography.label}
- Shape: borderRadius {rounded.pill} for individual tabs
- Spacing: Padding 0.5rem 1rem per tab, gap between tabs 0.5rem
- Variants: Active with border and full color, inactive with muted color

### Browser icon row

Four circular browser icons—Chrome, Edge, Safari, and Firefox—appear as a horizontal group with consistent sizing. These use official brand colors and maintain their native circular or rounded-square proportions without additional styling containers.

- Anatomy: Browser brand icon images
- Surface: Transparent
- Composition: Horizontal row with even spacing, approximately 3rem diameter each

## Responsive behavior

The dense card grids and split layouts suggest clear responsive adaptation points. The two-column feature cards should stack vertically on narrower viewports, with the media illustration expanding to full width above text. The four-column small feature grid should collapse to two columns on tablet and single column on mobile, maintaining icon-text vertical relationship.

Testimonial cards currently show partial cards at viewport edges, suggesting a horizontal scroll or carousel behavior that would remain useful on mobile with swipe interaction. Alternatively, a single-column stack with full-width cards preserves readability without horizontal movement.

The browser extension mockup dominates its section; on narrow screens, the mockup should precede explanatory text in a single column, with the tab bar remaining horizontally scrollable if all options cannot fit.

Text sizes should maintain hierarchy while scaling down: hero-display may reduce to 2.5rem on mobile, section-display to 2rem. The gradient headline treatment remains effective at smaller sizes due to its high contrast against the dark background.

## Practical implementation guidance

### Preserve
- The near-black canvas as the dominant ground; any lighter background would diminish the luminous quality of gradient text and product imagery
- Gradient headline treatment on key display text only; overuse would dilute its impact
- Subtle surface elevation through lightness and borders rather than shadows
- Circular avatars and rounded-square app icons as consistent shape language
- Actual interface mockups and recognizable software icons for credibility

### Avoid
- Adding background colors or gradients behind cards; the flat dark surface system depends on restraint
- Using the gradient text treatment on body copy or interactive elements
- Introducing additional accent colors beyond the established yellow, pink, and blue
- Heavy drop shadows that would contradict the pressed-in surface aesthetic
- Generic stock photography in place of application screenshots or realistic mockups

### Recommended build order
1. Establish the dark canvas and surface color tokens with border definitions
2. Implement Inter Tight with the full type scale, verifying gradient text rendering
3. Build the hero section with centered stack layout and primary button
4. Create feature card component with flexible media areas
5. Implement small feature grid with icon and text stacking
6. Build testimonial card with avatar and quote structure
7. Add browser extension section with tab bar and mockup container
8. Refine responsive stacking and scroll behaviors

### Accessibility
- Ensure gradient text maintains sufficient contrast; the light-to-pink gradient should remain above 4.5:1 against black throughout its range
- Provide focus indicators for tab buttons and download button that are visible against dark surfaces
- Consider reduced-motion preferences for any horizontal scrolling testimonials
- Verify that small feature icons have adequate touch targets when grid collapses to single column
- Use semantic heading hierarchy despite visual styling similarities between hero and section displays

## Scope note

This guide covers the Eagle landing page's dark-mode marketing surface including hero, features, testimonials, and browser extension sections. Navigation header, footer, pricing tables, documentation pages, and application interface itself are not represented in the supplied images. Motion behavior, hover states, and mobile-specific layouts are not documented. Measurements are practical adaptation targets based on visible proportions.
