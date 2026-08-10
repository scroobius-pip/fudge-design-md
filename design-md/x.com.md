# How x.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/x.com-design)

Last updated: 2026-08-10

## Captured pages

[![Onboarding modal with email verification code entry over dark background with X logo watermark](https://pin.fontofweb.com/10071?format=jpg)](https://design.withfudge.com/share/pin-10071)

[Onboarding modal with email verification code entry over dark background with X logo watermark](https://design.withfudge.com/share/pin-10071)

[![Premium subscription pricing page with tier cards and monthly toggle switch](https://pin.fontofweb.com/9971?format=jpg)](https://design.withfudge.com/share/pin-9971)

[Premium subscription pricing page with tier cards and monthly toggle switch](https://design.withfudge.com/share/pin-9971)

[![Annual premium upgrade page showing detailed feature comparison between tiers](https://pin.fontofweb.com/7333?format=jpg)](https://design.withfudge.com/share/pin-7333)

[Annual premium upgrade page showing detailed feature comparison between tiers](https://design.withfudge.com/share/pin-7333)

[![Vertical navigation sidebar with icon-label pairs and pill-shaped Post button](https://pin.fontofweb.com/5046?format=jpg)](https://design.withfudge.com/share/pin-5046)

[Vertical navigation sidebar with icon-label pairs and pill-shaped Post button](https://design.withfudge.com/share/pin-5046)

## Overview

X's visual system is built on absolute contrast: a pure black canvas against near-white typography, with electric blue serving as the sole vibrant accent. The interface rejects gradients and decorative textures in favor of flat, geometric precision. Every interactive element is either a full pill or a softly rounded rectangle, creating a rhythm of circles and rounded corners against the sharp rectangular viewport. The system communicates through density and hierarchy rather than ornament—navigation is bold and immediate, pricing information is scannable through size contrast, and verification states are signaled through color alone. This is a dark-mode-native design that treats light as an accent rather than a default, using luminosity to guide attention toward actions and away from chrome.

## Colors

| token | hex | use |
|---|---|---|
| canvas | #000000 | Absolute black page background, modal backdrop, empty states |
| surface | #16181C | Elevated card backgrounds, modal containers, input fields |
| surface-elevated | #202327 | Hover states on cards, secondary containers, button rests |
| ink | #E7E9EA | Primary text, headings, active navigation, primary button text |
| ink-muted | #71767B | Secondary text, descriptions, disabled states, placeholder text |
| ink-dim | #595D62 | Tertiary text, timestamps, legal copy, footer links |
| action | #1D9BF0 | Links, active toggles, verification badges, promotional highlights |
| action-hover | #1E2126 | Subtle hover backgrounds for non-interactive surfaces |
| border | #3F3F46 | Input outlines, card dividers, subtle separators |
| border-subtle | #202327 | Hairline dividers between content sections |
| success | #1D9BF0 | Confirmation states, checkmarks, active selections |
| verified | #1D9BF0 | Identity verification indicators, trusted account markers |

The color philosophy is strictly subtractive. The canvas absorbs light while typography reflects it at maximum luminosity. Blue appears only in functional moments—never as decoration—making it the most salient element in any composition. Surfaces exist in a narrow range between #16181C and #202327, close enough to the canvas that elevation is perceived through border and shadow rather than value shift. Text hierarchy is achieved through opacity and weight rather than color variation, with #E7E9EA commanding attention and #71767B receding into informational support.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 4rem | 600 | 0.9 | -0.0156em | Landing headlines, onboarding titles |
| section-display | Font | 2.5rem | 700 | 1.1 | -0.01em | Page titles, pricing headers |
| card-title | Font | 1.4375rem | 700 | 1.25 | normal | Card headers, tier names |
| body | Font | 0.9375rem | 400 | 1.5 | normal | Paragraphs, descriptions, form labels |
| body-medium | Font | 0.9375rem | 500 | 1.33 | normal | Emphasized body, button labels |
| label | Font | 0.875rem | 500 | 1.14 | normal | Badges, metadata, small controls |
| price-display | Font | 2rem | 400 | 1 | normal | Currency amounts, large numerals |
| legal | Font | 0.8125rem | 400 | 1.23 | normal | Terms, disclaimers, footer text |
| navigation | Font | 1.25rem | 700 | 1.2 | normal | Sidebar links, primary navigation |

The type system pairs Geist for display moments requiring geometric precision and tight tracking with Font (the family identified in sources as "Font-Copyright 2022 By Noel Leu And Grilli Type All Rights Reserved", designed by Noel Leu and Grilli Type, available from Grilli Type AG) for all interface text. Font carries the load from body copy through navigation, with weight shifts from 400 to 700 creating hierarchy within the same size. Display sizes use negative tracking for density, while body sizes maintain neutral spacing for readability. Applesystem and Times also appear in the supplied sources as system-level fallbacks. Verify licensing for these families before production use.

## Layout

The layout system is built on a narrow central column with generous side gutters. Content maxes out at approximately 600px for focused tasks like authentication and pricing, while navigation occupies a fixed sidebar of roughly 275px. The remaining viewport is surrendered to the black canvas, creating a theatrical framing effect that isolates content.

Spacing follows a 2px base unit, with semantic tokens aggregating these into practical increments. The layout avoids full-bleed content except for the canvas itself—cards, modals, and forms all float within defined boundaries. Navigation is vertically stacked with consistent icon-text pairs, each occupying a full-width hit target. Pricing pages use a two-column card layout with equal-width containers separated by 20px gaps.

Margins scale dramatically with context: authentication forms use 144px horizontal padding to compress the working area, while cards internalize their spacing at 20px. The system prefers vertical stacking with 8px, 12px, and 16px gaps over complex grids. Section breaks are achieved through 32px to 64px vertical margins rather than ruled lines.

## Visual language

The visual language is austere and functional, drawing from terminal aesthetics and minimalist interface traditions. Every element is either a circle, a rounded rectangle, or text—no organic shapes, no decorative illustrations beyond the X logomark. The X logo appears as a watermark in onboarding flows, rendered in a ghosted outline that sits behind content without competing for attention.

Iconography is strictly monochrome and line-based, paired with labels in navigation and standing alone in feature lists. The verified badge is a distinctive element: a blue circle with white checkmark, often accompanied by a glow effect that separates it from flat surfaces. Toggle switches use pill containers with circular indicators, sliding between states with color inversion.

Shadow is used sparingly and specifically: premium tier cards receive a white glow (`rgba(255, 255, 255, 0.2) 0px 0px 25px 0px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px`) to signal selection or recommendation. This is the only decorative shadow in the system—otherwise, elevation is flat.

## Components

### Modal Dialog

- **Anatomy**: Centered container with close button (back arrow or X) in top-left, centered X logo mark, title, description, form fields or verification inputs, primary action button, footer links
- **Surface**: `surface` background with `border-subtle` 1px border, `card` radius (16px)
- **Typography**: Title uses `section-display`, body uses `body`, footer uses `legal`
- **Shape**: 16px corner radius, full-bleed internal padding of 20px
- **Spacing**: 32px vertical margin above content, 16px gaps between elements
- **Composition**: Fixed width approximately 440px, centered horizontally and vertically

### Pricing Tier Card

- **Anatomy**: Header with tier name and promotional badge, price block with currency symbol and billing period, feature list with icon-text pairs, optional footer call-to-action
- **Surface**: `surface` background, `border` 2px solid when selected, `card` radius (16px)
- **Typography**: Tier name uses `card-title`, price uses `price-display`, features use `body`
- **Shape**: 16px radius, full-width within column
- **Spacing**: 20px internal padding, 12px gaps between features, 16px below price block
- **Variants**: Selected state adds white glow shadow and 2px `action` border; unselected shows no border

### Toggle Switch

- **Anatomy**: Pill-shaped track with circular indicator, two text labels (Monthly/Annual)
- **Surface**: Track uses `surface-elevated`, active segment uses `ink`, inactive text uses `ink-muted`
- **Typography**: Labels use `label` weight 500
- **Shape**: `pill` radius (9999px), height approximately 32px
- **Spacing**: 4px internal padding, indicator offset 4px from edge
- **States**: Active segment inverts to white background with black text

### Primary Button

- **Anatomy**: Text label centered, optional leading icon
- **Surface**: `ink` background with `canvas` text, or `canvas` background with `ink` text and `ink` border
- **Typography**: `body-medium` weight 700
- **Shape**: `pill` radius (9999px)
- **Spacing**: 12px vertical padding, 24px horizontal padding
- **Variants**: Filled (white on black), outlined (black on white with border), disabled (`surface-elevated` background, `ink-muted` text)

### Navigation Sidebar

- **Anatomy**: Vertical stack of icon-label pairs, X logo at top, Post button at bottom
- **Surface**: Transparent over `canvas`
- **Typography**: Links use `navigation`, active state maintains same size with `ink` color
- **Shape**: Post button uses `pill` radius, navigation items have no visible container
- **Spacing**: 16px horizontal padding, 12px vertical padding per item, 8px gap between icon and label
- **Composition**: Fixed width, items left-aligned with consistent 24px icon width

### Text Input

- **Anatomy**: Label text above, input field with placeholder, optional helper text below
- **Surface**: `canvas` background, `border` 2px solid outline
- **Typography**: Input text uses `body`, label uses `body` at `ink-muted`
- **Shape**: `input` radius (6px)
- **Spacing**: 8px internal padding, 6px bottom padding on label
- **States**: Focus adds `action` border color

### Verification Code Input

- **Anatomy**: Row of 6 identical square inputs
- **Surface**: `canvas` background, `border` 1px solid
- **Shape**: `input` radius (6px), fixed aspect ratio approximately 48x48px
- **Spacing**: 8px gap between boxes, centered in modal

## Responsive behavior

The system is designed dark-first with no light mode equivalent visible in the source. On narrower viewports, the sidebar navigation collapses to icon-only or hides entirely behind a menu trigger. The central content column maintains its maximum width, creating increasing side margins on larger screens rather than expanding content.

Pricing cards stack vertically below approximately 768px, with the toggle switch remaining centered above. Modal dialogs transition to near-full-screen on mobile, retaining their 16px radius but expanding to 95% viewport width. Text sizes remain fixed across breakpoints—the system relies on layout changes rather than fluid typography.

Touch targets maintain minimum 44px height throughout, with navigation items expanding to fill available width. The Post button in sidebar navigation remains visible and accessible in collapsed states.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the default background; any deviation weakens the system's identity
- Pill-shaped buttons as the primary interactive shape; this is the most recognizable component pattern
- The strict two-family typography hierarchy: Geist for display, Font for everything else
- Electric blue (#1D9BF0) as the only saturated color; reserve it for actions and verification
- The verification badge glow effect; it is the sole decorative lighting in the interface

### Avoid
- Adding gradients or texture to surfaces; the system is aggressively flat
- Using border-radius values other than 9999px for pills, 16px for cards, or 6px for inputs
- Introducing additional accent colors; the blue-white-black triad is complete
- Light mode implementations without extensive rethinking of elevation and shadow
- Decorative shadows outside the premium card glow pattern

### Recommended Build Order
1. Establish the canvas and typography foundations: black background, Font family, white text
2. Build the pill button system with filled and outlined variants
3. Implement the modal container with 16px radius and centered positioning
4. Create the navigation sidebar with icon-text pairs and Post button
5. Add the pricing card with selection states and glow shadow
6. Implement form inputs with 6px radius and focus states
7. Polish with the toggle switch and verification badge components

### Accessibility
- Ensure all text meets WCAG AAA contrast against the black canvas; the current #E7E9EA on #000000 exceeds requirements
- Provide visible focus indicators on all interactive elements; the current system relies on border color shifts
- Add `prefers-reduced-motion` support for the toggle switch and any future animated transitions
- Consider high-contrast mode users by maintaining 1px minimum borders on inputs and buttons
- Verify that the verification badge glow does not trigger photosensitive responses; provide a static alternative

## Scope note

This guide covers the onboarding, premium subscription, and navigation surfaces of X. It does not include the main timeline feed, individual post components, media handling, search results, profile pages, direct messaging interfaces, or Grok conversational UI. Motion design, loading states, and error handling patterns are not documented.
