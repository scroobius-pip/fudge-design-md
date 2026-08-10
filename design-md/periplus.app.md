# How periplus.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/periplus.app-design)

Last updated: 2026-08-10

## Captured pages

[![Login modal with dark brown background, email input field, and primary amber action button for authentication flow](https://pin.fontofweb.com/2223?format=jpg)](https://design.withfudge.com/share/pin-2223)

[Login modal with dark brown background, email input field, and primary amber action button for authentication flow](https://design.withfudge.com/share/pin-2223)

[![Three feature cards with amber icons showing search, connections, and review capabilities on dark background](https://pin.fontofweb.com/2222?format=jpg)](https://design.withfudge.com/share/pin-2222)

[Three feature cards with amber icons showing search, connections, and review capabilities on dark background](https://design.withfudge.com/share/pin-2222)

[![Pricing section with Basic and Premium tier cards, amber toggle switch, and highlighted subscription button](https://pin.fontofweb.com/2221?format=jpg)](https://design.withfudge.com/share/pin-2221)

[Pricing section with Basic and Premium tier cards, amber toggle switch, and highlighted subscription button](https://design.withfudge.com/share/pin-2221)

[![Product showcase grid with four feature panels demonstrating connected exploration, courses, personal library, and knowledge retention interfaces](https://pin.fontofweb.com/2220?format=jpg)](https://design.withfudge.com/share/pin-2220)

[Product showcase grid with four feature panels demonstrating connected exploration, courses, personal library, and knowledge retention interfaces](https://design.withfudge.com/share/pin-2220)

## Overview

Periplus presents a dark, contemplative interface designed for extended learning sessions. The visual system pairs deep warm browns with vibrant amber accents, creating an atmosphere that feels both scholarly and approachable. The design emphasizes clarity through generous whitespace within card containers, while maintaining visual warmth through its earthy palette. Content is organized into modular card-based layouts that showcase AI-generated documents, learning paths, and interactive features. The interface avoids harsh contrasts, instead relying on subtle border distinctions and layered surfaces to establish hierarchy. Typography combines an elegant serif display face for headings with a clean sans-serif for body content, reinforcing the balance between intellectual depth and modern usability. The overall impression is of a premium knowledge tool that respects the user's attention and time.

## Colors

The color system builds on a dark warm foundation with selective amber accents for interactive elements and positive indicators. The palette avoids pure black in favor of rich browns that reduce eye strain during prolonged use.

| token | value | use |
|---|---|---|
| canvas | `#1C1917` | Page background, deepest layer |
| surface | `#292524` | Card backgrounds, input fields, modal containers |
| surface-elevated | `#44403C` | Hover states, elevated panels, toggle track |
| ink | `#FAFAF9` | Primary text, headings, icons on dark |
| ink-muted | `#A8A29E` | Secondary text, descriptions, placeholders |
| action | `#D97706` | Primary buttons, active toggles, accent icons, links |
| action-hover | `#B45309` | Button hover states, deeper amber emphasis |
| success | `#65A30D` | Positive indicators, checkmarks, available features |
| error | `#DC2626` | Negative indicators, crossed restrictions, validation errors |
| border | `#44403C` | Card outlines, section dividers, structural borders |
| border-subtle | `#57534E` | Input borders, inactive states, hairline separators |

The dark mode is intrinsic to the brand rather than an alternate theme. The canvas and surface colors create a three-layer depth system: page background at `#1C1917`, cards and containers at `#292524`, and elevated interactive elements at `#44403C`. Amber (`#D97706`) serves as the sole accent color, appearing in primary buttons, active toggle switches, feature icons, and call-to-action links. This restraint keeps the interface focused and prevents visual competition with content. Success and error states use standard semantic colors but appear sparingly, primarily in feature comparison lists. Text maintains high contrast against dark surfaces without reaching pure white, with ink-muted providing clear hierarchy for secondary information.

## Typography

The type system pairs Gelica, a refined serif, with Inter, a highly legible sans-serif. Gelica carries display and heading duties with weights from Regular through Semi Bold, while Inter handles all body text, labels, and navigation. This combination evokes scholarly publishing while maintaining screen readability.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gelica | 3rem | 600 | 1.1 | -0.02em | Page titles, major section headers |
| section-display | Gelica | 2rem | 600 | 1.2 | -0.01em | Section headings, card group titles |
| card-title | Gelica | 1.5rem | 600 | 1.3 | 0 | Feature card headings, pricing tier names |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, form labels |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Captions, metadata, feature list items |
| label | Inter | 0.75rem | 500 | 1.4 | 0.02em | Badges, tags, fine print |
| navigation | Inter | 0.875rem | 500 | 1.5 | 0 | Buttons, links, menu items |

Gelica appears exclusively in headings, where its classical proportions convey authority and intellectual character. The Semi Bold weight (600) is preferred for display sizes, while Regular may appear at smaller heading scales. Inter's variable font capability allows precise weight control, with 500 serving navigation and button contexts where slightly more presence aids scannability. Body text maintains generous line height for comfortable reading of longer passages about learning features. All type sizes are whole-number multiples of the 4px base unit.

Verify licensing for these families before production use. Inter is designed by Rasmus Andersson and distributed by Rsms. Gelica attribution is not supported by the available records.

## Layout

The layout system relies on centered containers with generous horizontal margins and consistent vertical rhythm. Content typically occupies a maximum readable width, with feature grids expanding to fill available space.

The page structure follows a single-column flow with occasional two-column arrangements for comparable content like pricing tiers. Cards are the fundamental layout unit, appearing in grids of two, three, or four depending on content density. The three-card feature row demonstrates equal-width distribution with consistent gaps. The four-panel product showcase uses a 2×2 grid on wider viewports, with each panel containing an illustrative screenshot above descriptive text.

Spacing follows a 4px base unit with semantic tokens for common patterns. Card internal padding uses 1.5rem on all sides, creating breathable containers without excessive whitespace. Gap between cards in a row is also 1.5rem, maintaining visual consistency. Section vertical spacing uses 4rem to separate major content areas. Within cards, element stacking uses 1rem gaps between title, description, and action elements.

The pricing section demonstrates a centered narrow container for introductory text and toggle, followed by a wider container for the tier comparison. This creates a focal hierarchy that guides users from explanation to decision. Feature cards in the three-up row align their top edges, with internal content top-aligned and action links positioned at consistent heights through flexible spacing.

## Visual language

The visual language balances warmth with precision. Rounded corners appear on all interactive containers, with cards using 0.75rem and buttons using 0.5rem, creating a family of related shapes without uniform application. The pill shape (9999px) appears exclusively for toggle switches and status badges.

Icons are simple line drawings in amber for feature illustrations, maintaining consistency with the action color. Checkmarks and crosses in feature lists use filled shapes rather than outlines, with success green and error red providing immediate semantic recognition. The toggle switch uses a filled amber track with a white circular thumb, clearly communicating active state.

Subtle background texture appears in the form of faint geometric line patterns behind content sections, adding depth without distraction. These lines use the border color at very low opacity, creating an atmospheric quality that suggests networks and connections appropriate to the learning platform's purpose.

Shadows are minimal or absent; depth is achieved through surface color layering and border definition rather than elevation shadows. This flat-but-layered approach keeps the interface feeling grounded and stable.

## Components

### Authentication modal

The sign-in modal centers on the viewport with a dark surface background and rounded corners. Anatomy includes a brand mark (dot grid icon), welcome label, primary heading, supporting description, email input field, primary action button, divider with "or" text, and secondary social authentication button.

- **Surface**: Background uses surface color with subtle border
- **Typography**: Welcome label uses body-small in ink-muted; heading uses section-display in ink; description uses body in ink-muted
- **Shape**: Rounded corners at card radius
- **Spacing**: Generous internal padding with 1rem gaps between elements

### Feature card

Three-column feature cards display an icon, title, and description. The icon appears in amber at upper right, title in card-title at left, description in body-small below.

- **Surface**: Surface background with border
- **Typography**: Title in card-title, description in body-small ink-muted
- **Shape**: Card radius corners
- **Composition**: Icon positioned top-right, text left-aligned and top-aligned
- **Spacing**: Card padding on all sides

### Pricing card

Two-tier pricing comparison with distinct visual treatments for free and paid options. The Premium card receives an amber border to indicate recommendation.

- **Surface**: Surface background; Premium has action-colored border
- **Typography**: Tier name in card-title; price in hero-display with "/month" in body-small; features in body-small
- **Shape**: Card radius; Subscribe button uses button radius
- **Composition**: Price prominently displayed; feature list with leading icons; action button at bottom
- **Variants**: Basic uses secondary button style; Premium uses primary button with action background

### Toggle switch

Binary control for monthly/annual billing selection. Pill-shaped track with circular thumb.

- **Surface**: Track uses surface-elevated when inactive, action when active
- **Shape**: Pill radius (9999px)
- **States**: Active position shows amber fill with white thumb; inactive position shows muted track

### Input field

Single-line text entry with icon prefix.

- **Surface**: Surface background
- **Border**: Border-subtle, transitioning to border on focus
- **Typography**: Placeholder in ink-muted, value in ink
- **Shape**: Input radius
- **Spacing**: Horizontal padding with icon inset

### Product showcase panel

Large cards containing illustrative screenshots above descriptive content.

- **Surface**: Surface background with border
- **Typography**: Heading in section-display, description in body, link in navigation with action color
- **Composition**: Screenshot occupies upper portion with internal rounded corners; text content below with icon, heading, description, and arrow link stacked vertically
- **Spacing**: Internal padding with 1rem vertical gaps between text elements

## Responsive behavior

The layout should adapt gracefully to narrower viewports. The three-card feature row should stack vertically on small screens, maintaining full-width cards with consistent internal spacing. The pricing comparison should transition from side-by-side to stacked, with the Premium card following the Basic card in source order.

The four-panel product grid should collapse to single column on narrow viewports, preserving the screenshot-to-text relationship within each panel. Typography should scale down modestly, with hero-display reducing to 2rem and section-display to 1.5rem on small screens to prevent overflow.

Navigation and authentication modal should remain centered with comfortable margins, never touching viewport edges. Touch targets should maintain minimum 44px height for all interactive elements.

## Practical implementation guidance

### Preserve
- The warm dark palette with amber-only accent discipline
- Serif/sans-serif type pairing for headings and body
- Card-based content organization with consistent internal spacing
- Subtle borders rather than heavy shadows for depth
- Rounded corners on all interactive containers

### Avoid
- Pure black backgrounds that destroy the warm scholarly atmosphere
- Multiple accent colors that compete with amber
- Sharp-cornered containers that feel harsh against rounded elements
- Excessive whitespace that scatters related content
- Drop shadows that contradict the flat layered aesthetic

### Recommended build order
1. Establish color tokens and apply canvas background
2. Implement typography scale with Gelica and Inter
3. Build card component with padding, radius, and border
4. Create button variants with primary and secondary styles
5. Assemble feature card composition with icon positioning
6. Construct pricing layout with toggle and tier comparison
7. Add product showcase panels with screenshot containers
8. Implement authentication modal as centered overlay

### Accessibility
- Maintain minimum 4.5:1 contrast for body text against all backgrounds
- Ensure amber action elements have sufficient contrast for interactive states
- Provide visible focus indicators on all interactive elements
- Use semantic heading hierarchy without skipping levels
- Include aria-labels on icon-only buttons and decorative imagery
- Support keyboard navigation through toggle, modal, and card actions

## Scope note

This guide covers the marketing page and authentication surfaces of Periplus. The in-application learning interface, document viewer, flashcard system, and mobile-specific layouts are not represented in the supplied images. Motion design, loading states, and error page treatments are not documented. Measurements are practical adaptation targets derived from visual inspection.
