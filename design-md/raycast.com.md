# How raycast.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/raycast.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with diagonal red light streaks, centered headline, and dual download buttons on pure black canvas](https://pin.fontofweb.com/7307?format=jpg)](https://design.withfudge.com/share/pin-7307)

[Homepage hero with diagonal red light streaks, centered headline, and dual download buttons on pure black canvas](https://design.withfudge.com/share/pin-7307)

[![Pricing table bottom rows showing subscription tiers with pill-shaped action buttons and subtle grid lines](https://pin.fontofweb.com/4918?format=jpg)](https://design.withfudge.com/share/pin-4918)

[Pricing table bottom rows showing subscription tiers with pill-shaped action buttons and subtle grid lines](https://design.withfudge.com/share/pin-4918)

[![Feature comparison matrix with five plan columns, checkmarks, and muted unavailable indicators](https://pin.fontofweb.com/4917?format=jpg)](https://design.withfudge.com/share/pin-4917)

[Feature comparison matrix with five plan columns, checkmarks, and muted unavailable indicators](https://design.withfudge.com/share/pin-4917)

[![Three pricing cards with tiered surfaces, large dollar figures, and detailed feature checklists](https://pin.fontofweb.com/4916?format=jpg)](https://design.withfudge.com/share/pin-4916)

[Three pricing cards with tiered surfaces, large dollar figures, and detailed feature checklists](https://design.withfudge.com/share/pin-4916)

## Overview

Raycast presents a dark-first productivity interface that treats absolute black as a canvas rather than a fallback. The visual system is built around theatrical contrast: deep void backgrounds allow photographic warm accents to command attention in hero moments, while the rest of the interface communicates through subtle surface elevation and precise typography. The design language speaks to developers and power users—every element feels calibrated for speed and clarity, from the monospace captions that surface version metadata to the tight spacing that keeps information dense without feeling cramped.

The homepage establishes the emotional register immediately with diagonal warm light streaks that cut across pure black, creating motion and energy without animation. This photographic treatment sits behind centered, confident typography that avoids decorative excess. The pricing pages translate this same intensity into structural clarity: tiered cards with deliberate surface differentiation, comparison tables that use minimal visual noise to communicate complex feature matrices, and action buttons that invert the dark palette to demand attention. The system is cohesive across marketing and conversion surfaces, maintaining the same tonal darkness while modulating elevation and border presence to create hierarchy.

## Colors

The palette is fundamentally subtractive: start with absolute black and add only what is necessary. The core colors serve distinct roles across the interface, from the immersive canvas to the subtle borders that define structure without breaking the darkness.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, hero sections, deepest layer |
| surface | `#07080A` | Navigation bar, primary cards, table rows |
| surface-elevated | `#0C0D0F` | Highlighted pricing tier, elevated panels |
| surface-highlight | `#111214` | Gradient endpoint for translucent overlays |
| border | `#2F3031` | Table dividers, card outlines, subtle separators |
| ink | `#FFFFFF` | Primary text, headlines, active labels |
| ink-muted | `#9C9C9D` | Secondary text, unavailable features, metadata |
| ink-dim | `#E6E6E6` | Strikethrough prices, tertiary information |
| action | `#FFFFFF` | Primary button fills, inverted surfaces |
| action-ink | `#000000` | Text on action surfaces |

The interface operates in a single dark mode with no light variant visible. Color relationships are established through luminance rather than hue: the jump from canvas to surface is barely perceptible but structurally significant, while ink maintains full luminance for maximum readability. The warm tones in homepage photography exist as emotional accents within imagery rather than as functional UI colors—this preserves their impact for brand moments while keeping interactions clean and monochrome. Gradients appear as translucent dark overlays (`linear-gradient(137deg, rgba(17, 18, 20, 0.75) 4.87%, rgba(12, 13, 15, 0.9) 75.88%)`) that deepen the canvas behind content without introducing new colors.

## Typography

Two families serve distinct roles: Inter handles all interface text with calibrated weights, while Geist Mono appears for technical metadata and version strings. The hierarchy is established through size and weight rather than style variation, maintaining a restrained, engineered feel.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4rem | 600 | 1.1 | normal | Homepage headline, major page titles |
| body-large | Inter | 1.125rem | 400 | 1.2 | 0.011em | Hero subheadlines, introductory paragraphs |
| body | Inter | 1rem | 400 | 1.15 | normal | General content, descriptions |
| label | Inter | 0.875rem | 500 | 1.15 | 0.014em | Navigation, buttons, table headers, feature names |
| label-muted | Inter | 0.875rem | 500 | 1.15 | 0.014em | Unavailable features, secondary labels |
| mono-caption | Geist Mono | 0.875rem | 400 | 1.2 | normal | Version strings, technical metadata, install commands |

Inter appears in Regular (400), Medium (500), and Semibold (600) weights. The hero display at 64px uses Semibold for confident presence without heaviness. Labels at 14px employ Medium weight to create distinction from body text without size change. Geist Mono, designed by Basementstudio and distributed by Vercel, serves as the technical voice—its single weight and monospace structure signal precision for version numbers and command-line references. Inter was designed by Rasmus Andersson. Verify licensing for these families before production use.

## Layout

The layout system is built on a 2px relative unit, creating fine-grained control that supports the dense information architecture of productivity software. Spacing tokens range from tight internal padding to dramatic section depths that create breathing room in long pages.

| token | value | use |
|---|---|---|
| unit | 0.125rem | Base grid increment |
| tight | 0.5rem | Icon-to-text gaps, compact internal padding |
| compact | 0.75rem | Button horizontal padding, table cell density |
| default | 1rem | Card internal padding, standard gaps |
| comfortable | 1.5rem | Navigation bar padding, relaxed card spacing |
| spacious | 2rem | Major section internal padding |
| section | 14rem | Hero vertical padding, major section breaks |
| section-deep | 23.125rem | Deepest hero sections with background imagery |

The homepage hero uses the deepest vertical padding (370px top, 212px bottom) to center content within the dramatic streak photography. Navigation sits in a pill-shaped container with 16px vertical and 32px horizontal padding, floating above the canvas with a subtle border. Pricing cards use 16px internal padding with 8px gaps between related elements. The feature comparison table relies on minimal vertical padding—approximately 12px per row—to maintain scannability across many rows.

Radii are deliberately conservative: 16px for the navigation container and major panels, 8px for cards and buttons, 6px for smaller interactive elements. The system avoids full circles except for functional pills like the "-20%" discount badge.

## Visual language

The visual language is defined by restraint and precision. Every element earns its presence through function rather than decoration. The absolute black canvas creates an immersive, focused environment that suggests terminal aesthetics without literal imitation. Surface elevation is achieved through near-imperceptible lightness shifts rather than shadows—the border from `#000000` to `#07080A` is enough to define a card, while `#0C0D0F` signals special status for highlighted tiers.

Photography and illustration follow a strict tonal discipline. The homepage hero uses high-contrast warm light streaks against black, creating diagonal energy that draws the eye toward centered content. This is not a gradient or generated pattern but photographic texture with grain and falloff. The warm tones exist as emotional accents within imagery rather than as functional UI colors—they never appear in buttons, links, or status indicators, preserving their impact for brand moments.

Iconography is minimal and functional: platform logos (Apple, Windows) appear at small scale in buttons, checkmarks indicate feature availability, and small circles mark unavailable features. The visual system avoids decorative icons in favor of text clarity, appropriate for a tool aimed at keyboard-driven power users.

## Components

### Navigation bar

The navigation bar floats as a self-contained pill near the top of the viewport. It uses surface background with a subtle border, creating separation from the canvas without a shadow. The left side carries the Raycast wordmark with its distinctive icon; the center holds text links in label typography with generous horizontal spacing; the right side clusters authentication and a primary download button. The container uses 16px vertical padding and 32px horizontal padding with 16px corner radius, creating a capsule that feels both permanent and lightweight.

### Hero section

The homepage hero centers all content vertically and horizontally against the photographic streak background. The headline uses hero-display typography in pure white, followed by a body-large subheadline in the same color. Two primary buttons sit side by side with tight spacing, each showing a platform icon and label. Below these, mono-caption text surfaces version and system requirements, followed by a secondary announcement link. The composition is strictly symmetrical, relying on the diagonal energy of the background to create dynamism rather than asymmetric layout.

### Pricing cards

Three pricing cards appear in a horizontal row with the center card elevated through surface-elevated background and subtle border treatment. Each card contains: a tier name in label typography, a tagline in muted color, a large dollar figure in hero-display size with "/ month" in label-muted, a strikethrough annual price in ink-dim, and a feature checklist with checkmark icons. The primary action button spans the card width at the bottom. Cards use 8px corner radius and 16px internal padding. The highlighted center card gains visual weight through slightly lighter background and more prominent border rather than color change.

### Feature comparison table

The comparison table uses a grid structure with plan names across the top and feature categories down the left. Rows alternate between feature names and availability indicators. Available features show checkmarks; unavailable features show small filled circles in muted color. The table relies on thin border lines for structure rather than row backgrounds, maintaining the dark density of the overall interface. Text uses label typography throughout, with feature descriptions in slightly smaller or lighter treatment when present.

### Buttons

Primary buttons use action background with action-ink text, appearing as bright inversions against the dark interface. They use 8px corner radius and compact horizontal padding with tight vertical padding. Secondary buttons use surface-elevated background with ink text and border color outline. Platform download buttons include a small icon before the label, maintaining visual consistency with the navigation download action. Pill-shaped badges for discounts use full radius with surface background and ink text.

## Responsive behavior

The design is documented from desktop viewport widths. The navigation bar likely collapses to a hamburger menu or simplifies link visibility at narrower widths, though this is not visible in supplied materials. The pricing card row should stack vertically on narrow viewports, with the highlighted card maintaining its elevated treatment. The feature comparison table requires horizontal scroll or transformation to an accordion pattern on mobile, as five-column grids exceed comfortable reading widths below approximately 1024px.

Typography scales down proportionally: hero-display should reduce to approximately 2.5rem on tablet and 2rem on mobile to maintain line length control. Body-large remains readable without adjustment. Section padding should compress to 6rem on tablet and 4rem on mobile, preserving vertical rhythm without excessive scroll distance.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the default background; never substitute a near-black charcoal
- The subtle surface elevation hierarchy: canvas → surface → surface-elevated → surface-highlight
- The photographic warm accents restricted to imagery, never functional UI
- The tight spacing and dense information architecture that signals productivity tooling
- The monospace treatment for version strings and technical metadata

### Avoid
- Adding shadows to cards or panels; the system uses borders and surface shifts exclusively
- Introducing additional accent colors that compete with the photographic imagery
- Light mode implementations without complete palette redefinition
- Generous spacing that breaks the dense, efficient character of the interface
- Decorative illustrations or icons where text clarity suffices

### Recommended build order
1. Establish the canvas and surface color tokens with exact hex values
2. Implement Inter at body and label sizes with correct weights
3. Build the navigation bar as the primary structural component
4. Create button variants with exact padding and radius values
5. Develop pricing cards with surface elevation hierarchy
6. Construct the feature comparison table with border-based structure
7. Add Geist Mono for technical captions and version displays
8. Integrate hero photography with gradient overlay treatment

### Accessibility
- Maintain 4.5:1 contrast minimum for all ink on surface combinations; the pure white on pure black exceeds this significantly
- Ensure the streak photography does not interfere with text readability through the gradient overlay
- Provide focus indicators that respect the dark palette, likely using border-color shifts or subtle glows rather than default browser outlines
- Consider reduced-motion preferences for any scroll or entrance animations, as the static photography already conveys energy
- Ensure pricing tier differences are communicated through structure and text, not color alone, for colorblind users

## Scope note

This guide covers the homepage and pricing surfaces of raycast.com. Mobile layouts, interactive states including hover and focus, animation specifications, and documentation or blog templates are not represented in the supplied materials. The Store, Pro, AI, iOS, Windows, Teams, Developers, and Blog sections referenced in navigation are not documented here. Measurements derive from retained interface values where available and from visual interpretation of supplied images for structural components.
