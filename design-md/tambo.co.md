# How tambo.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tambo.co-design)

Last updated: 2026-08-10

## Captured pages

[![Community testimonials section with mint-green background, Sentient Light display heading, and grid of white testimonial cards with avatar rows and monospace metadata labels.](https://pin.fontofweb.com/6691?format=jpg)](https://design.withfudge.com/share/pin-6691)

[Community testimonials section with mint-green background, Sentient Light display heading, and grid of white testimonial cards with avatar rows and monospace metadata labels.](https://design.withfudge.com/share/pin-6691)

[![Hero call-to-action area with concentric oval mint-gradient rings, centered line-art bird logo, Sentient Light heading, and paired pill buttons with arrow icons on dark and light](https://pin.fontofweb.com/6690?format=jpg)](https://design.withfudge.com/share/pin-6690)

[Hero call-to-action area with concentric oval mint-gradient rings, centered line-art bird logo, Sentient Light heading, and paired pill buttons with arrow icons on dark and light](https://design.withfudge.com/share/pin-6690)

[![Showcase section with three project preview cards featuring screenshot thumbnails, monospace titles, and circular plus buttons on a pale mint background.](https://pin.fontofweb.com/6689?format=jpg)](https://design.withfudge.com/share/pin-6689)

[Showcase section with three project preview cards featuring screenshot thumbnails, monospace titles, and circular plus buttons on a pale mint background.](https://design.withfudge.com/share/pin-6689)

[![Three-column pricing tier layout with mint-tinted header bands, Sentient Light price display, and checklist rows with monospace feature labels and mint checkmarks.](https://pin.fontofweb.com/6688?format=jpg)](https://design.withfudge.com/share/pin-6688)

[Three-column pricing tier layout with mint-tinted header bands, Sentient Light price display, and checklist rows with monospace feature labels and mint checkmarks.](https://design.withfudge.com/share/pin-6688)

## Overview

Tambo's visual system is built for a developer audience that values clarity, craft, and quiet confidence. The brand sits at the intersection of editorial elegance and engineering precision: large, airy display typography in Sentient Light establishes emotional presence, while Geist Mono handles every label, button, and metadata string with mechanical exactness. The color story is restrained and atmospheric—a pale mint canvas against near-black ink, with a single vibrant mint accent that signals action without shouting.

The overall impression is of a tool that has already been refined. Surfaces are generous and uncluttered. Rounded corners are pervasive but disciplined, creating a soft geometry that feels approachable rather than playful. The system uses elevation sparingly; depth is created through layered oval gradients and subtle border treatments rather than shadows. Every component is designed to survive in dense information environments—pricing tables, documentation, community grids—while maintaining the brand's calm, premium tone.

## Colors

The palette is intentionally narrow, deriving its range from a single mint family that stretches from whisper-pale backgrounds to a saturated accent. Dark values are used surgically for text and primary actions.

| token | value | use |
|---|---|---|
| ink | #0F1A17 | Primary text, primary button backgrounds, logo marks |
| canvas | #E5F0ED | Page background, section fills |
| surface | #FFFFFF | Card backgrounds, elevated panels, testimonial tiles |
| surface-warm | #F2F8F6 | Pricing header bands, subtle differentiation within white space |
| border-subtle | #CBE2DB | Card borders, dividers, secondary button strokes |
| border-strong | #B6FFDD | Hover states, active indicators, emphasis borders |
| accent-mint | #7FFFC3 | Primary accent, checkmarks, arrow icons, CTA highlights |
| accent-mint-soft | #D6FFEC | Badge backgrounds, tag fills, hover tints |
| accent-blue | #1D9BF0 | Link text, social media references, external anchors |
| action-primary-bg | #0F1A17 | Filled dark buttons |
| action-primary-text | #FFFFFF | Text on dark buttons |
| action-secondary-bg | #FFFFFF | Outlined light buttons |
| action-secondary-text | #0F1A17 | Text on light buttons |

The light mode is dominant and pervasive. Dark surfaces appear only as primary action buttons and occasional hero overlays. The mint accent is used with restraint—never as large fills, always as punctuation: a checkmark, an arrow in a circle, a tag background. The gradient system uses translucent mint stripes at -45 degrees to create subtle texture behind hero content, avoiding flatness without introducing competing colors.

## Typography

Three families define the system: Sentient for display voice, Geist for body and interface, and Geist Mono for labels, navigation, and metadata. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Sentient | 4rem | 300 | 1.1 | -0.05em | Page hero headlines, major section titles |
| section-display | Sentient | 3rem | 300 | 1.1 | -0.05em | Section headings, pricing tier names |
| sub-section-display | Sentient | 2rem | 300 | 1.1 | -0.05em | Card titles, sub-headings |
| body-large | Geist | 1.25rem | 400 | 1.1 | 0 | Lead paragraphs, hero descriptions |
| body | Geist | 1rem | 400 | 1.2 | 0 | General paragraphs, card descriptions |
| body-small | Geist | 0.875rem | 400 | 1.2 | 0 | Compact text, footer copy |
| label | Geist Mono | 0.875rem | 500 | 1.1 | 0.02em | Buttons, navigation items, category tags |
| label-small | Geist Mono | 0.625rem | 400 | 1.1 | 0.02em | Metadata, timestamps, avatar subtitles |
| navigation | Geist Mono | 0.875rem | 500 | 1.1 | 0.02em | Top-bar links, menu items |

Sentient Light carries the brand's personality: high contrast, generous letter-spacing reduction, and a classical serif structure that feels contemporary through its extreme lightness. Geist provides the workhorse sans, neutral and legible at all sizes. Geist Mono is the system's signature—every button label, every price detail, every community handle is set in monospace, creating a consistent developer-tooling rhythm across the interface.

## Layout

The page architecture is centered and spacious. Content lives within a generous max-width container with substantial horizontal padding, creating breathing room that separates the brand from denser competitor interfaces.

The grid system is flexible but predictable. Hero sections use full-width backgrounds with centered content stacks. Content sections typically employ single-column centered layouts for text introductions, then break into multi-column grids for cards, testimonials, or pricing tiers. The testimonial grid uses four columns on desktop, collapsing responsively. Pricing uses three equal columns with internal vertical stacking.

Vertical rhythm is established through section spacing of 12.5rem between major content blocks, with internal gaps of 3.5rem between related elements. Cards share a consistent 1rem gap in grid contexts. Padding inside cards is standardized at 1.5rem, creating uniform internal margins across testimonial, showcase, and pricing components.

The navigation bar is minimal and integrated, using pill-shaped containers with 1px borders and generous horizontal padding. It does not dominate; it recedes into the canvas while remaining accessible.

## Visual language

The brand's most distinctive visual element is its concentric oval motif—large, soft-edged rings in graduated mint tones that create depth behind hero content. These ovals use diagonal stripe gradients at -45 degrees, producing a moiré-like texture that feels organic and technical simultaneously. The effect is used as a background layer, never competing with foreground content.

Line art appears as a brand mark: a simple bird figure that anchors the hero CTA. This illustration style is spare and confident, matching the system's overall restraint.

Surface treatment follows a clear hierarchy. The canvas (#E5F0ED) is the default ground. White cards float above it with subtle 1px borders in #CBE2DB. Active or emphasized elements receive the mint accent as small filled shapes—circles containing arrows, checkmarks in lists, tag backgrounds. No drop shadows are used; elevation is communicated through color temperature and border presence alone.

The diagonal stripe pattern appears in multiple contexts: behind hero content, as subtle texture in empty states, and as a loading or progress indicator. The pattern uses 2px stripes with 8px gaps, creating a fine grain that reads as texture rather than decoration.

## Components

### Primary Button

- **Anatomy**: Text label in Geist Mono Medium, optional arrow icon in mint-filled circle, full pill shape
- **Surface**: Filled #0F1A17 background, white text
- **Typography**: label token, 0.875rem, uppercase or title-case depending on context
- **Shape**: 9999px radius, creating full pill
- **Spacing**: 8px vertical padding, 16px horizontal padding; icon receives additional 8px inset circle
- **Composition**: Label and icon sit inline, icon positioned at trailing edge
- **Variants**: Dark fill (primary), white fill with border (secondary)

### Secondary Button

- **Anatomy**: Text label in Geist Mono Medium, arrow icon in mint-filled circle, pill outline
- **Surface**: White background, 1px #CBE2DB border
- **Typography**: label token
- **Shape**: 9999px radius
- **Spacing**: Matching primary button proportions
- **Composition**: Identical structure to primary, differentiated by surface treatment

### Testimonial Card

- **Anatomy**: White container with subtle border, internal stack of metadata label, quote text, and avatar row
- **Surface**: #FFFFFF background, 1px #CBE2DB border, 1.25rem border radius
- **Typography**: label-small for username handle, body for quote, body-small for name, label-small for role/company
- **Shape**: 1.25rem radius corners
- **Spacing**: 1.5rem internal padding, consistent vertical stack with 0.5rem between text elements
- **Composition**: Avatar image (circular) sits left of name/role stack at bottom of card

### Showcase Card

- **Anatomy**: White container with screenshot thumbnail, monospace title, circular plus action button
- **Surface**: #FFFFFF background, 1px #CBE2DB border, thumbnail with internal rounded corners
- **Typography**: label token for project name in uppercase
- **Shape**: 1.25rem external radius, thumbnail uses 0.75rem internal radius
- **Spacing**: 1.5rem padding, thumbnail fills width with maintained aspect ratio
- **Composition**: Title and plus button in horizontal row below thumbnail, button aligned to trailing edge

### Pricing Tier

- **Anatomy**: Vertical stack of header band, CTA button, and feature checklist
- **Surface**: Header uses #F2F8F6 with 0.75rem radius; body is white with 1px #CBE2DB border
- **Typography**: section-display for tier name, sub-section-display for price, body for description, label for feature items
- **Shape**: 1.25rem overall radius, header band nested with 0.75rem radius
- **Spacing**: 1.5rem header padding, 1rem between header and button, 1.5rem checklist padding
- **Composition**: Checklist items use mint checkmark icon left-aligned with label text

### Navigation Pill

- **Anatomy**: Text label with optional icon, contained in bordered pill
- **Surface**: Transparent or white background, 1px #CBE2DB border
- **Typography**: navigation token
- **Shape**: 9999px radius
- **Spacing**: 8px vertical, 24px horizontal padding
- **Composition**: Inline with sibling pills, separated by small gaps

## Responsive behavior

The system is designed desktop-first with generous proportions that will require thoughtful scaling for smaller viewports. The four-column testimonial grid should collapse to two columns on tablet and single column on mobile, maintaining card proportions and internal spacing. The three-column pricing layout should stack vertically on narrow screens, with each tier becoming a full-width card.

Hero typography scales down proportionally: hero-display at 4rem on desktop should reduce to 2.5rem on tablet and 2rem on mobile to prevent overflow. Section-display follows a similar curve, maintaining the tight leading that defines the brand's airy presence.

Navigation pills should consolidate into a single menu trigger on mobile, preserving the monospace label treatment in the expanded state. The concentric oval hero background should scale to maintain its centered composition, potentially simplifying to fewer rings on very small screens.

Button touch targets must maintain minimum 44px height in all contexts; the current pill proportions already satisfy this. Card padding should reduce from 1.5rem to 1rem on mobile to maximize content area within narrow viewports.

## Practical implementation guidance

### Preserve
- The strict separation between Sentient display and Geist Mono interface typography—this duality is the brand's core character
- The pale mint canvas as the dominant background; white should feel like an elevation, not a default
- The 1px subtle borders on cards and buttons; they create definition without weight
- The monospace label treatment for all buttons, navigation, and metadata
- The concentric oval gradient as a hero signature element

### Avoid
- Introducing additional accent colors beyond the mint family and single blue link color
- Using Sentient for body text or small sizes; it loses clarity below 2rem
- Adding drop shadows to cards; the system achieves depth through color and border alone
- Stretching buttons to full width; the pill shape should maintain its intrinsic proportions
- Using the mint accent for large fills; it should remain punctuation-sized

### Recommended Build Order
1. Establish the canvas background and ink text colors as global defaults
2. Implement the typography scale with all three families loaded and verified
3. Build the button components (primary and secondary pills) as the most reused elements
4. Create the card container with its border, radius, and padding specifications
5. Assemble section layouts starting with the centered text stack pattern
6. Add the concentric oval gradient as a reusable background component
7. Implement grid systems for testimonials, showcase, and pricing

### Accessibility
- Maintain a minimum 4.5:1 contrast ratio between ink (#0F1A17) and canvas (#E5F0ED) for all body text
- The mint accent (#7FFFC3) against white fails contrast requirements; use it only for decorative icons and checkmarks, never for text
- Ensure button targets meet 44px minimum touch dimensions
- Provide visible focus states using the border-strong color (#B6FFDD) as an outline replacement
- Respect reduced-motion preferences for the concentric oval background; provide a static gradient fallback

## Scope note

This guide covers the Tambo homepage including hero, community testimonials, project showcase, and pricing sections. Navigation, footer, documentation pages, and interactive states such as hover, focus, loading, and form validation are not represented in the supplied material. Motion behavior, mobile breakpoints, and dark mode variants are also outside the current scope. Measurements are practical adaptation targets derived from the visible interface.
