# How replit.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/replit.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed Replit workspace showing a generated Mandarin Reader web app with cream cards, purple accents, and a chat-based builder sidebar.](https://pin.fontofweb.com/8012?format=jpg)](https://design.withfudge.com/share/pin-8012)

[Dark-themed Replit workspace showing a generated Mandarin Reader web app with cream cards, purple accents, and a chat-based builder sidebar.](https://design.withfudge.com/share/pin-8012)

[![Replit Pro marketing page with a white hero, bold orange gradient section, and product screenshot with collaborator avatars.](https://pin.fontofweb.com/8010?format=jpg)](https://design.withfudge.com/share/pin-8010)

[Replit Pro marketing page with a white hero, bold orange gradient section, and product screenshot with collaborator avatars.](https://design.withfudge.com/share/pin-8010)

[![Replit homepage footer with warm cream background, large gray logotype, and organized link columns with a California location badge.](https://pin.fontofweb.com/8009?format=jpg)](https://design.withfudge.com/share/pin-8009)

[Replit homepage footer with warm cream background, large gray logotype, and organized link columns with a California location badge.](https://design.withfudge.com/share/pin-8009)

[![Replit pricing page showing four tier cards with orange headings, black pill buttons, and feature lists on a cream background.](https://pin.fontofweb.com/8008?format=jpg)](https://design.withfudge.com/share/pin-8008)

[Replit pricing page showing four tier cards with orange headings, black pill buttons, and feature lists on a cream background.](https://design.withfudge.com/share/pin-8008)

## Overview

Replit's visual system is built around a warm, approachable foundation that contrasts with the cold precision typical of developer tools. The interface pairs a soft cream canvas with near-black typography, using vivid orange as an energetic accent for calls-to-action and key moments. This creates a distinctive personality that feels both creative and professional. The system is expressed across two primary contexts: a light, editorial marketing experience and a dark, focused workspace environment. Typography plays a central role, with Dinamo's ABC Diatype family providing a contemporary grotesque voice that ranges from monumental display settings to precise UI labels. The overall impression is one of confident simplicity—generous whitespace, clear hierarchy, and moments of bold color that guide attention without overwhelming.

## Colors

The color system operates on a warm neutral foundation with a single vivid accent. The palette avoids pure grays in favor of tones with subtle warmth, creating an inviting atmosphere that distinguishes Replit from conventional tech aesthetics.

| token | hex | use |
|---|---|---|
| action | #EC4E02 | Primary buttons, links, pricing tier names, key highlights |
| action-hover | #EB5809 | Hover state for action elements |
| canvas | #F6F5F4 | Default page background, footer sections |
| surface | #FFFFFF | Cards, panels, elevated content areas |
| surface-warm | #FAF5F0 | Pricing cards, alternate section backgrounds |
| ink | #0E0E0F | Primary headings, body text on light surfaces |
| ink-secondary | #322F2F | Secondary text, descriptions, navigation items |
| ink-tertiary | #61646B | Muted labels, timestamps, metadata |
| muted | #949494 | Disabled states, placeholders, decorative text |
| border | #DBD9D3 | Card borders, dividers, structural lines |
| border-subtle | #E7E7E8 | Hairline separators, inner boundaries |
| success | #0066CB | Informational accents, confirmation states |
| accent-purple | #6D2F6D | Workspace chrome, generated app accents |

The light mode dominates marketing and public pages, where cream backgrounds let the orange accent pop with maximum impact. Dark mode appears in the workspace and builder interfaces, where near-black surfaces reduce eye strain and let generated content take focus. The orange accent is used sparingly but decisively—never as a background fill at large scale, but as a signal for primary actions, active states, and value propositions. Warm gradients occasionally bridge sections, particularly the orange-to-white transition seen in product marketing pages.

## Typography

Replit's typographic voice is built on Dinamo's ABC Diatype and ABC Diatype Plus families, with Abc Diatype-Regular Pixel Beta and By Dinamo-Abc Diatype Plus Variable also present in the source materials for expressive display moments. The system favors a single family across all roles, letting weight and size create hierarchy rather than mixing typefaces.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | ABC Diatype Plus | 4.5rem | 400 | 1 | -0.06em | Homepage hero, major campaign headlines |
| section-display | ABC Diatype Plus | 3.75rem | 400 | 1.1 | -0.05em | Section openings, product page titles |
| headline | ABC Diatype Plus | 2.5rem | 400 | 1.15 | -0.04em | Feature headings, pricing page titles |
| body-large | ABC Diatype Plus | 1.25rem | 400 | 1.4 | -0.02em | Lead paragraphs, hero descriptions |
| body | ABC Diatype Plus | 1rem | 400 | 1.5 | normal | Standard paragraphs, descriptions |
| body-small | ABC Diatype Plus | 0.875rem | 400 | 1.6 | normal | Secondary descriptions, card copy |
| label | ABC Diatype Plus | 0.75rem | 500 | 1.5 | normal | Tags, badges, metadata labels |
| navigation | ABC Diatype Plus | 0.875rem | 400 | 1.5 | normal | Header links, footer columns |
| button | ABC Diatype Plus | 0.875rem | 500 | 1 | -0.02em | Button labels, CTAs |

The display sizes use tight negative tracking that gives headlines a crafted, editorial density. Body text maintains comfortable readability with neutral tracking and generous line height. The pixel-beta variant of ABC Diatype appears at large sizes for special display treatments, adding a subtle technical texture to hero moments. Verify licensing for these families before production use. ABC Diatype Plus is designed by Dinamo; ABC Diatype is designed by Johannes Breyer, Fabian Harb, Elias Hanzer, Renan Rosatti, and Erkin Karamemet, also from Dinamo.

## Layout

The layout system is built on a 2px relative unit, creating a fine-grained scale that supports both airy marketing compositions and dense workspace interfaces. Sections are generously proportioned, with major vertical rhythm established through 120px padding blocks on homepage sections and 80px to 100px on interior pages.

The page structure follows a consistent pattern: a fixed or sticky header with logo, navigation, and account actions; a main content area with full-bleed sections alternating between cream and white surfaces; and a substantial footer with organized link columns and a dramatic oversized logotype. Content containers max out at comfortable reading widths, with pricing tables and feature grids expanding to use available space.

Grid systems are implicit rather than rigid. The pricing page shows four equal columns with consistent internal padding. Marketing pages use centered single-column compositions for hero text, then transition to asymmetric layouts with product screenshots and descriptive copy. The workspace interface reverses this logic, with a persistent sidebar for builder controls and a main stage for preview output.

Spacing tokens resolve to practical values: 8px for tight internal padding, 16px for component gaps, 32px for card padding, 48px for section internal spacing, and 120px for major section breaks. Border radius follows a clear hierarchy: 4px for small buttons, 8px for cards and inputs, 16px for panels, 24px for large feature cards, and 9999px for pill buttons.

## Visual language

The visual language balances warmth with precision. Surfaces are never pure white or pure black—creams carry subtle warmth, and dark modes use deep charcoal rather than absolute black. This creates a softer, more approachable environment for extended use.

Imagery and product screenshots are presented with minimal framing, often floating against gradient backgrounds or clean surfaces. The orange accent appears in circular badges, notification dots, and active states rather than as large fills. Generated app previews in the workspace show how the system accommodates user-created content without visual competition.

Decorative elements include the oversized "Replit" logotype in the footer, rendered at a scale that makes it a structural element rather than mere branding. Gradients are used transitionally—most notably the orange-to-white fade that separates hero content from product demonstrations. Shadows are subtle and warm, avoiding the blue-tinted defaults common in many systems.

The overall character is confident without aggression. Typography is large and legible. Color is used with restraint. The system trusts content and whitespace to create impact rather than relying on heavy containers or aggressive borders.

## Components

### Header Navigation

- **Anatomy**: Logo mark and wordmark on the left; primary navigation links with dropdown indicators in the center; utility links and primary CTA on the right
- **Surface**: Transparent over light backgrounds, or cream solid when scrolled
- **Typography**: Navigation token for links, button token for the primary action
- **Spacing**: 16px vertical padding, 8px horizontal gaps between items
- **Shape**: No border radius on the container; pill radius on the primary action button
- **Variants**: Light mode with dark text; dark mode with light text in workspace contexts

### Primary Button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Action orange background with white text
- **Typography**: Button token, medium weight
- **Shape**: Full pill radius (9999px)
- **Spacing**: 10px vertical, 20px horizontal padding
- **States**: Default at full saturation; hover shifts slightly warmer to action-hover

### Secondary Button

- **Anatomy**: Text label within a bordered pill
- **Surface**: Transparent background with action orange border and text
- **Typography**: Button token, medium weight
- **Shape**: Full pill radius
- **Spacing**: 10px vertical, 20px horizontal padding

### Pricing Card

- **Anatomy**: Tier name, description, price block, primary action button, feature list with bullet indicators
- **Surface**: Warm cream background at surface-warm
- **Typography**: Headline token for tier names in action orange; body token for descriptions; body-small for feature lists
- **Shape**: 24px border radius
- **Spacing**: 40px padding internally; 32px between major sections within the card
- **Composition**: Equal-width columns in a row, with consistent vertical alignment of price blocks and buttons

### Feature Card

- **Anatomy**: Optional media area, heading, description, optional link or action
- **Surface**: White or cream depending on section background
- **Typography**: Headline token for titles; body for descriptions
- **Shape**: 16px border radius
- **Spacing**: 32px padding

### Footer

- **Anatomy**: Logo and location badge on the left; organized link columns for Handy Links, Company, Legal, and Connect; oversized decorative logotype at the bottom
- **Surface**: Cream canvas background
- **Typography**: Navigation token for link columns; body-small for legal text
- **Spacing**: 32px padding in the content area; 100px bottom spacing before the decorative type
- **Composition**: Asymmetric two-column layout for content, full-bleed decorative element below

### Workspace Panel

- **Anatomy**: Dark chrome with sidebar navigation, chat-based builder interface, and preview stage
- **Surface**: Near-black background at ink; elevated panels at slightly lighter dark grays
- **Typography**: IBM Plex Sans at 14px for UI chrome; ABC Diatype for generated content
- **Shape**: 8px radius on cards and panels; 6px on small buttons
- **Spacing**: 16px padding on sidebar sections; 4px to 8px on compact button arrays

## Responsive behavior

The system is designed desktop-first with clear adaptation paths. The four-column pricing grid should collapse to two columns on tablet and single column on mobile, maintaining internal card padding. Navigation collapses to a hamburger menu on smaller viewports, with the primary CTA remaining visible.

Hero typography scales down proportionally: hero-display reduces to section-display on tablet and headline on mobile. The oversized footer logotype remains a distinctive element but may crop differently based on viewport width.

Workspace interfaces maintain their three-panel structure on larger screens, with the sidebar collapsing to icons or hiding entirely on smaller viewports. The preview stage remains the primary visible surface when space is constrained.

## Practical implementation guidance

### Preserve
- The warm cream canvas as the default surface; avoid shifting to pure white
- The single orange accent used with discipline; do not introduce additional bright accents
- The tight negative tracking on display typography; this is central to the editorial character
- The pill-shaped primary buttons with generous horizontal padding
- The substantial section spacing that creates breathing room around content

### Avoid
- Pure black backgrounds in dark mode; the near-black ink token maintains warmth
- Multiple font families in marketing contexts; ABC Diatype Plus handles all roles
- Heavy borders and shadows; the system relies on surface contrast and whitespace
- Small, cramped touch targets; buttons and links maintain generous sizing

### Recommended Build Order
1. Establish the color tokens, particularly the cream canvas and orange action
2. Implement the typography scale with ABC Diatype Plus at all sizes
3. Build the header with navigation and primary button
4. Create the section spacing system with 120px major breaks
5. Implement pricing cards as the primary complex component
6. Add the footer with its distinctive oversized logotype
7. Adapt the dark workspace theme for builder interfaces

### Accessibility
- Ensure the orange action meets contrast requirements against both cream and white surfaces; it may need darkening for small text
- Maintain the generous line heights in body text for readability
- Provide clear focus indicators on pill buttons, as their full radius can make default outlines clip
- Consider reduced-motion preferences for any gradient or transition animations

## Scope note

This guide covers the public marketing site and workspace builder interface as visible in the supplied images. Mobile layouts, motion design, form validation states, and the complete dark-theme workspace component library are not fully represented. Generated app previews show user-created content rather than system components. Measurements are derived from the documented interface values.
