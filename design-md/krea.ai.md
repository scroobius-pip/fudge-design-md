# How krea.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/krea.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page hero with large display type and four-column plan cards on light canvas](https://pin.fontofweb.com/9749?format=jpg)](https://design.withfudge.com/share/pin-9749)

[Pricing page hero with large display type and four-column plan cards on light canvas](https://design.withfudge.com/share/pin-9749)

[![Business and Enterprise tier cards with slider control and dark inverted CTA](https://pin.fontofweb.com/9748?format=jpg)](https://design.withfudge.com/share/pin-9748)

[Business and Enterprise tier cards with slider control and dark inverted CTA](https://design.withfudge.com/share/pin-9748)

[![Dark-themed sign-up modal with OAuth buttons and generative art preview](https://pin.fontofweb.com/9747?format=jpg)](https://design.withfudge.com/share/pin-9747)

[Dark-themed sign-up modal with OAuth buttons and generative art preview](https://design.withfudge.com/share/pin-9747)

[![Moodboards feature section with layered imagery and dark immersive background](https://pin.fontofweb.com/9746?format=jpg)](https://design.withfudge.com/share/pin-9746)

[Moodboards feature section with layered imagery and dark immersive background](https://design.withfudge.com/share/pin-9746)

## Overview

Krea's design system operates across two distinct modes: a light, airy marketing surface for plans and pricing, and an immersive dark environment for the generative product experience. The light mode prioritizes clarity and conversion through generous whitespace, crisp borders, and a disciplined typographic hierarchy. The dark mode shifts to cinematic presentation, letting generated imagery and interactive controls dominate while maintaining legibility through careful contrast management. Both modes share a common structural language—rounded cards, consistent spacing rhythms, and the same Swiss typographic foundation—creating continuity as users move from discovery to creation.

The system's personality emerges from restraint: minimal decoration, precise geometric relationships, and typography that commands attention without shouting. Color is used sparingly as an accent, primarily for interactive states and the signature blue action element. Photography and generated imagery provide the visual richness, while the interface recedes into a neutral, supportive role.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, primary button backgrounds, header elements |
| ink-secondary | #171717 | Elevated dark surfaces, secondary headings |
| ink-tertiary | #404040 | Tertiary text, subtle UI elements |
| muted | #737373 | Descriptions, captions, disabled states |
| canvas | #FAFAFA | Light mode page background |
| surface | #FFFFFF | Cards, modals, elevated containers |
| surface-elevated | #F5F5F5 | Subtle background variations, input fields |
| border | #E5E5E5 | Card outlines, dividers, subtle separators |
| border-strong | #D4D4D5 | Focused borders, active controls |
| action | #006EFF | Primary interactive accent, links, active states |
| action-contrast | #FFFFFF | Text on action backgrounds |
| dark-canvas | #0C0C0C | Dark mode page background |
| dark-surface | #101010 | Dark mode cards, containers |
| dark-surface-elevated | #171717 | Elevated dark elements, inputs |
| dark-border | #262626 | Dark mode subtle borders |
| dark-border-strong | #202020 | Dark mode focused borders |
| dark-ink | #FFFFFF | Primary text on dark backgrounds |
| dark-muted | #A3A3A3 | Secondary text on dark backgrounds |

The light mode establishes a near-white canvas with pure black ink, creating maximum contrast for reading and scanning. The dark mode inverts this relationship, using deep charcoal backgrounds that let colorful generated imagery and the blue action accent pop. Both modes avoid gradients in favor of flat, material surfaces with subtle border definitions. The action blue appears consistently across modes as the singular brand accent, used for primary buttons, active slider states, and link text.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Font | 4.5rem | 600 | 1.05 | -0.025em | Page headlines, pricing hero |
| section-display | Font | 3.5rem | 500 | 1 | -0.02em | Section titles, feature headers |
| feature-headline | Font | 2.25rem | 600 | 1.11 | -0.01em | Card titles, sub-section headings |
| body | Font | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, navigation |
| body-small | Font | 0.875rem | 400 | 1.43 | 0 | Captions, metadata, fine print |
| label | Font | 0.75rem | 600 | 1.33 | 0 | Tags, badges, category labels |
| navigation | Font | 0.9375rem | 400 | 1.5 | 0.01em | Header links, menu items |
| button-primary | Font | 0.8125rem | 600 | 1 | 0 | Button labels, CTAs |

The type system is built on Font, supplied by Swiss Typefaces as "Font-Copyright C 2016 Swiss Typefaces Sàrl All Rights Reserved". Weights range from 400 to 600, with the heavier weights reserved for display and interactive elements. Display sizes employ negative tracking for a tighter, more intentional feel, while body text maintains neutral spacing for extended reading. The hierarchy is established through size and weight rather than color variation, keeping the palette restrained. Applesystem appears as a system fallback at 14px in limited contexts. Verify licensing for these families before production use.

## Layout

The layout follows a centered content model with generous horizontal margins. Light mode sections use substantial vertical padding—160px top, 128px bottom—to create breathing room between content blocks. Content containers are constrained by side margins of 260px on the pricing page, creating a narrow, focused reading column that draws attention to plan comparisons.

Dark mode product pages expand to wider margins, with 356px side gutters on feature sections that let imagery breathe against the deep background. The header maintains consistent horizontal padding across modes: 64px in light, 32px in dark, reflecting the different density expectations of marketing versus product contexts.

Grid structures are implicit rather than explicit. Pricing cards arrange in equal-width columns with 20px gutters. Feature sections use asymmetric compositions, with text blocks offset from imagery to create visual tension. The moodboards section demonstrates this clearly: text occupies the left third while layered imagery fills the right two-thirds, breaking the centered convention for editorial impact.

Spacing follows a modular rhythm based on 2px increments. Common values include 8px for tight element grouping, 12px for related items, 16px for component internal padding, 24px for card padding, 32px for section internal spacing, 48px for major element separation, 64px for section breaks, and 128-160px for page section divisions.

## Visual language

The visual language balances clinical precision with creative warmth. Interface elements are reduced to essential forms: flat buttons with minimal radius, hairline borders that define without decorating, and shadows so subtle they register as depth rather than ornament. The only decorative elements are the generated images themselves, which appear in rounded containers with consistent 16px radius.

Imagery treatment varies by context. Marketing pages show clean product screenshots and UI mockups with light borders. Product pages display full-bleed generated art with no border, letting the content merge with the dark canvas. The moodboards feature uses layered, overlapping images with slight rotation and offset, suggesting creative process and experimentation.

Iconography is minimal and functional, rendered in the current text color at small sizes. Checkmarks indicate plan features, arrows suggest navigation, and social provider logos appear at standard sizes in authentication flows. No custom icon font is used; system and brand SVGs serve all needs.

The slider control in pricing cards introduces the most complex interactive visual: a track with filled progress, a draggable thumb with subtle shadow, and labeled tick marks. This element bridges the gap between static information and dynamic configuration.

## Components

**Pricing Card**

- Anatomy: Card container, plan name, description, price display with currency and period, feature list with checkmarks, primary action button
- Surface: White background (#FFFFFF), 1px border (#E5E5E5), 16px radius
- Typography: Plan name uses feature-headline token, description uses body-small in muted, price uses hero-display at reduced size, features use body-small
- Shape: 16px border radius, consistent across all plan tiers
- Spacing: 24px internal padding, 20px gap between elements
- Composition: Vertical stack with left-aligned text, full-width button at bottom
- Variants: Enterprise tier inverts to dark surface (#000000) with white text and white-outlined button; Business tier includes slider control for compute unit selection

**Primary Button**

- Anatomy: Text label, optional icon, full-width or intrinsic width
- Surface: Black background (#000000), white text (#FFFFFF), no border
- Typography: button-primary token, 600 weight
- Shape: 8px border radius in light mode, 10px in dark mode product contexts
- Spacing: 12px vertical padding, 20px horizontal padding in navigation; 8px vertical, 24px horizontal in product contexts
- Composition: Centered text, flex row with 4-8px gap when icon present
- Variants: Inverted for dark backgrounds (white surface, black text); outlined variant with 1px border for secondary actions

**Sign-Up Modal**

- Anatomy: Overlay backdrop, modal container, split layout with form left and imagery right, close control, OAuth buttons, email input, submit button, legal text
- Surface: Dark modal (#171717) on darker backdrop (#0C0C0C at opacity), right panel shows generative art preview
- Typography: Headline uses section-display at reduced size, buttons use body weight, legal text uses body-small in muted
- Shape: 10px modal radius, 14px input radius, full-width buttons with 8px radius
- Spacing: 16px internal padding, 12px gap between form elements
- Composition: Two-column on desktop, stacked on smaller viewports; left column constrained to readable width

**Feature Section**

- Anatomy: Section container, eyebrow label, headline, body text, imagery block, optional CTA
- Surface: Dark background (#0C0C0C), text in white, imagery with subtle border or shadow
- Typography: Headline uses section-display, body uses body at 20px for lead paragraphs, labels use body-small in muted
- Shape: Imagery containers at 16px radius, overlapping images may break grid with rotation
- Spacing: 160px vertical section padding, 80px gap between text and imagery blocks
- Composition: Asymmetric two-column with text left, imagery right; imagery may extend beyond container bounds

**Slider Control**

- Anatomy: Track, filled progress indicator, draggable thumb, value labels
- Surface: Track in border color, fill in ink or action color, thumb in surface with shadow
- Typography: Value labels in body-small, weight 600 for active value
- Shape: Track height 4px, thumb 16px diameter with full rounding
- Spacing: Labels positioned above track with 8px gap
- Composition: Full-width within card, labels distributed across track length

## Responsive behavior

The system adapts through margin reduction and column stacking rather than breakpoint-specific redesigns. Pricing cards transition from four columns to two columns to single column as viewport narrows, maintaining internal spacing and typography scale. The sign-up modal collapses from split-panel to single column, hiding the imagery preview on smallest viewports.

Dark mode product pages maintain their immersive character across sizes, with imagery scaling proportionally and text blocks gaining horizontal padding as side margins compress. The moodboards section's layered imagery reconfigures from overlapping desktop composition to vertical scroll on mobile.

Typography scales down modestly: hero-display reduces to 3rem, section-display to 2.5rem. Body text remains at 1rem for readability. Touch targets maintain minimum 44px height for accessibility.

## Practical implementation guidance

**Preserve**
- The stark black-and-white contrast in light mode; it defines the brand's clinical precision
- Generous vertical spacing between sections; the rhythm feels intentional and premium
- Single-font typographic system; the discipline of Font across all weights
- Consistent 16px card radius; this small detail unifies all container types
- The dark mode's near-black canvas; anything lighter loses the immersive product feel

**Avoid**
- Introducing additional accent colors beyond the action blue; the system depends on chromatic restraint
- Heavy shadows or elevation effects; the flat material language is core to the aesthetic
- Decorative gradients in UI elements; photography and generated art provide all necessary visual interest
- Tightening display letterspacing further; the current values are calibrated for legibility at scale
- Using border-radius inconsistently; the 8px/10px/16px hierarchy serves distinct component roles

**Recommended build order**
1. Establish the dual color modes with complete token sets before any component work
2. Implement the typography scale with Font at all specified weights and sizes
3. Build the pricing card as the primary light-mode component; it exercises surface, border, spacing, and button systems
4. Create the dark mode feature section with asymmetric layout to validate imagery handling
5. Implement the sign-up modal to test overlay, form, and split-panel composition
6. Add the slider control last, as it requires the most complex interactive state management

**Accessibility**
- Maintain 4.5:1 minimum contrast for all body text; the light mode's black-on-white and dark mode's white-on-charcoal both exceed this
- Ensure the action blue (#006EFF) meets contrast requirements when used for text; test against both canvas colors
- Provide visible focus states for all interactive elements; the current design implies focus through border color shifts
- Add aria-labels to icon-only buttons in the header and modal close controls
- Consider reduced-motion preferences for the moodboards imagery transitions and slider interactions

## Scope note

This guide covers the marketing and product landing surfaces visible in the supplied images, including pricing, authentication, and feature presentation. It does not include the in-app generation interface, real-time canvas, video editing timeline, or mobile-native layouts. Motion design for generative previews, hover states on interactive cards, and form validation feedback are not documented here.
