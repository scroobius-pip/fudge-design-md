# How tenor.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tenor.design-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed UI component gallery showing radio tuner, team invite modal, folder selection dialog, and sound settings panel with rounded cards and subtle borders](https://pin.fontofweb.com/9034?format=jpg)](https://design.withfudge.com/share/pin-9034)

[Dark-themed UI component gallery showing radio tuner, team invite modal, folder selection dialog, and sound settings panel with rounded cards and subtle borders](https://design.withfudge.com/share/pin-9034)

[![Hero section with AI-native UI design tagline above a large product screenshot showing Smart Light Control interface with layers panel and properties sidebar](https://pin.fontofweb.com/9033?format=jpg)](https://design.withfudge.com/share/pin-9033)

[Hero section with AI-native UI design tagline above a large product screenshot showing Smart Light Control interface with layers panel and properties sidebar](https://design.withfudge.com/share/pin-9033)

## Overview

Tenor presents a dark-first design system built for AI-native UI design tools. The visual language rests on near-black surfaces layered with subtle elevation changes, creating depth without departing from the monochrome foundation. Warm gray typography provides readable hierarchy against the dark canvas, while restrained use of warm tan and cool blue-gray accents signal interactive states and metadata. The system emphasizes precision through consistent rounding, measured spacing, and a typographic scale that favors clarity over ornament. Components appear as softly bounded cards and panels with hairline borders, suggesting physical surfaces that can be manipulated and rearranged. The overall impression is of a professional creative tool: dense with functionality yet visually calm, prioritizing the user's content and workflow over decorative elements.

## Colors

The color system operates on a dark-mode foundation with layered surfaces and a restrained accent palette.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #0A0A0A | Primary content areas, nav bar |
| surface-raised | #111111 | Cards, list items, secondary panels |
| surface-elevated | #1A1A1A | Modals, dialogs, floating panels |
| surface-highlight | #161616 | Input fields, selected states, tags |
| ink | #E5E5E5 | Primary headings, body text, primary button fill |
| ink-secondary | #999999 | Secondary text, descriptions, inactive labels |
| ink-tertiary | #666666 | Metadata, timestamps, disabled hints |
| ink-muted | #777777 | Tertiary labels, code comments |
| accent-warm | #A8957A | Warm highlights, selected indicators, FM badge |
| accent-warm-light | #C4B49A | Lighter warm accents, hover states |
| accent-cool | #8898A8 | Cool indicators, info states, slider elements |
| border | #FFFFFF | High-contrast borders, focus rings, hairlines on dark |
| border-subtle | #333333 | Card borders, dividers, panel separation |
| border-muted | #1E1E1E | Input borders, inactive dividers |
| action-primary | #FFFFFF | Primary button background, active nav |
| action-secondary | #E5E5E5 | Secondary button text, hover emphasis |
| danger | #6B5D40 | Destructive or warning indicators |

The system uses true black as its canvas, with surfaces stepping upward in lightness through tightly controlled increments. Text follows an inverse progression from near-white for primary content down through mid-grays for metadata. The warm accent family appears sparingly—most notably in the radio tuner FM indicator and selected states—providing organic contrast against the cool digital darkness. Borders are predominantly subtle, with white reserved for moments requiring maximum definition: focus states, active selections, and the thinnest hairline separators. The overall effect is a controlled environment where color serves functional hierarchy rather than brand expression.

## Typography

The typographic system relies on system sans-serif and monospace families, tuned for dense interface reading at small sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | System | 3.25rem | 600 | 1.15 | -0.025em | Hero headlines, major value propositions |
| section-display | System | 2.25rem | 600 | 1.11 | -0.025em | Section headings, feature titles |
| headline | System | 1.75rem | 600 | 1.25 | -0.02em | Card titles, modal headers |
| body-large | System | 1rem | 400 | 1.5 | normal | Primary descriptions, marketing copy |
| body | System | 0.9375rem | 400 | 1.625 | normal | Standard body text, paragraphs |
| body-small | System | 0.8125rem | 400 | 1.5 | normal | Compact descriptions, helper text |
| label | System | 0.75rem | 500 | 1.5 | normal | Buttons, tags, navigation items |
| label-small | System | 0.625rem | 500 | 1.5 | 0.05em | Badges, timestamps, micro-labels |
| navigation | System | 0.875rem | 500 | 1.43 | normal | Nav links, breadcrumbs, wayfinding |
| code | System-Uimonospace | 0.75rem | 400 | 1.5 | normal | Code blocks, technical values |

The system uses System UI Sans Serif as its primary family, with Applesystem-Regular appearing in select interface elements and System-Uimonospace for code and technical readouts. Weights are distributed across 400 Regular, 500 Medium, and 600 Semibold, with no Bold employed. Display sizes use negative letter spacing for tighter, more impactful headlines, while body sizes maintain neutral spacing for extended reading. The scale is anchored at 16px with finer gradations below for dense UI contexts. Verify licensing for these families before production use.

## Layout

The layout system favors centered, contained compositions with generous vertical breathing room and disciplined horizontal alignment.

The page structure uses a single centered column for primary content, with a maximum width that keeps line lengths comfortable for reading. The hero section occupies substantial vertical space, with the headline and description positioned in the upper-left quadrant of the centered container, leaving significant negative space to the right and below. This asymmetry creates visual tension and draws attention to the call-to-action.

Navigation sits at the top in a full-width bar with centered content, separated from the hero by a subtle horizontal rule. Below the hero, product demonstrations appear as large, rounded panels that break the centered column and extend toward the viewport edges, creating a layered, dimensional effect.

Component galleries and feature sections use a grid of equal-width cards with consistent internal padding. Cards maintain uniform heights within rows and align to a strict baseline grid. Spacing between sections follows a rhythmic progression: 5rem for standard section separation, 6rem for major transitions.

Internal card layouts use stacked vertical arrangements with 1rem gaps between elements. Horizontal layouts within cards—such as list items with avatars—employ flexbox with 0.75rem gaps between media and text blocks. Modal dialogs center in the viewport with substantial external padding, while side panels and property inspectors anchor to edges with internal scroll regions.

The spacing scale derives from a 2px base unit, expressed in rem for fluid adaptation. Key values include 0.5rem for tight internal gaps, 1rem for standard element separation, 1.5rem for card padding, 2rem for section internal spacing, and 5-6rem for major section breaks.

## Visual language

The visual language communicates precision craft through restrained materiality and subtle depth cues.

Surfaces are matte and non-reflective, with elevation conveyed solely through border color shifts and minute background lightness changes rather than shadows. The exception is a single inset shadow treatment: `rgba(0, 0, 0, 0.4) 0px 1px 3px 0px inset` for recessed elements like sliders and toggles, and its inverse `rgba(255, 255, 255, 0.12) 0px 0px 8px 0px inset` for highlighted wells.

Rounding is pervasive and consistent. Cards use 16px radius, buttons 8px, inputs 12px, and small tags 4px. The largest panels and modals employ 24-28px radius, creating a family of related shapes that feel manufactured and precise. Full pills appear for status indicators and toggle segments.

Borders are nearly always 1px solid, with color determining hierarchy: white for maximum definition, #333333 for standard separation, and #1E1E1E for the most subtle boundaries. Dashed borders appear only for drop zones and placeholder states.

Imagery and media are treated as integrated content rather than decorative elements. Product screenshots appear within rounded device frames or as full-bleed panel backgrounds. Avatar images use circular masking with small status indicators overlaid at the bottom-right edge.

The system avoids gradients in most UI surfaces, with one exception: a linear gradient using oklch color space transitions from cool to warm tones for a single decorative element. This restraint reinforces the system's focus on solid, manipulable components.

## Components

### Button

Buttons appear in three distinct treatments across the interface.

**Primary button**: Solid white background with near-black text. 8px border radius, padding of 0.625rem vertical and 1rem horizontal. Typography uses label token at 500 weight. Used for the main call-to-action and definitive actions.

**Secondary button**: Transparent background with white 1px border, white text. Same radius and padding as primary. Used for alternative actions and destructive confirmations.

**Ghost button**: Transparent background, no border, muted gray text. Reduced padding of 0.5rem vertical and 0.75rem horizontal. Used for tertiary actions, icon triggers, and compact toolbars.

### Card

Cards serve as the primary content container across the system.

**Surface**: Background uses surface-raised (#111111) with 1px solid border in border-subtle (#333333). 16px border radius. Internal padding of 1.5rem on all sides.

**Composition**: Cards stack vertically with 1rem gaps. Internal elements follow a consistent top-to-bottom flow: optional header with title and action, body content, optional footer with metadata.

**Variants**: Feature cards extend to larger 24px radius with 2rem padding. Compact list items reduce to 12px radius with 1rem padding and include avatar media positioned left of text blocks.

### Modal / Dialog

Modals float above the canvas with substantial presence.

**Surface**: Background uses surface-elevated (#1A1A1A) with 1px border in border-subtle. 24px border radius. Padding of 2rem on all sides.

**Header**: Contains title in headline typography, optional subtitle in body-small, and close control positioned top-right.

**Body**: Scrollable region with 1.5rem vertical padding, accommodating lists, forms, or selection interfaces.

**Footer**: Fixed action bar with primary and secondary buttons right-aligned, separated by 0.75rem gap.

### Input / Search

Text inputs and search fields share a common treatment.

**Surface**: Background uses surface-highlight (#161616) with 1px border in border-muted. 12px border radius. Padding of 0.625rem vertical and 1rem horizontal.

**Typography**: body-small token at 400 weight, ink-secondary color for placeholder text, transitioning to ink on focus.

**Search variant**: Includes magnifying glass icon positioned 1rem from left edge, with text inset 2.5rem from left. Clear action appears on right when content present.

### List Item

List items appear in selection dialogs and directory interfaces.

**Surface**: Transparent background, full-width within parent container. No independent border; separation via parent card border or 1px bottom border in border-subtle.

**Composition**: Avatar image (circular, 2.5rem diameter) positioned left, with text block following 0.75rem gap. Title in body-small at 500 weight, subtitle in label at ink-tertiary color. Selection indicator (checkmark) appears right-aligned when active.

**Spacing**: Vertical padding of 0.875rem, horizontal padding matching parent card internal padding.

### Toggle / Switch

Toggle controls appear in settings panels.

**Track**: Rounded pill shape (9999px radius), 1.75rem width, 1rem height. Background uses border-subtle in inactive state, accent-warm in active state.

**Thumb**: Circular, 0.875rem diameter, white fill. Translates horizontally within track with 2px margin from track edge.

**Label**: Positioned to right of track in label typography, ink-secondary color. 0.75rem gap between track and label.

### Slider

Sliders appear for continuous value adjustment.

**Track**: 4px height, full width of container. Background uses border-subtle with filled portion in accent-warm or accent-cool.

**Thumb**: Circular, 1rem diameter, white fill with subtle inset shadow creating recessed appearance when inactive, elevated appearance when dragged.

**Value label**: Positioned above or adjacent in label-small typography, showing current numeric value.

### Navigation Bar

The top navigation anchors the page experience.

**Surface**: Full width, background matches canvas. 1px bottom border in border-subtle. Padding of 1rem vertical, 1.5rem horizontal.

**Composition**: Logo and wordmark left-aligned, utility actions right-aligned. Center area reserved for contextual navigation or empty for landing pages.

**Logo treatment**: Small square icon with geometric mark, followed by wordmark in navigation typography at 500 weight.

## Responsive behavior

The system is documented from a desktop viewport perspective. The centered single-column layout suggests natural adaptation: the content container likely maintains maximum width with responsive margins, while the product demonstration panels may scale proportionally or transition to stacked arrangements.

Typography should maintain fixed rem sizes rather than viewport-relative scaling, ensuring readability across densities. The hero display size may require reduction on smaller viewports to prevent overflow, with section-display serving as the mobile headline anchor.

Card grids in the component gallery should transition from multi-column to single-column below a medium breakpoint, maintaining internal padding while allowing edge-to-edge presentation within reduced margins.

Modal dialogs should transition to full-screen or near-full-screen presentations on small viewports, preserving internal padding and rounding while maximizing usable space. Side panels like the properties inspector may collapse into bottom sheets or drawer overlays.

Touch targets should maintain minimum 44px tap areas, requiring button and list item padding adjustments on mobile implementations. The compact 8px button radius may increase slightly for touch contexts to improve perceived affordance.

## Practical implementation guidance

### Preserve
- The near-black canvas as the unconditional foundation; even "light" elements are merely less dark
- Consistent 1px hairline borders with color hierarchy rather than multiple border widths
- The restrained warm accent family; avoid expanding to a full spectrum
- Negative letter spacing on display sizes only; maintain neutral spacing for body
- System font stack for all UI text; reserve monospace for code and technical values

### Avoid
- Drop shadows for elevation; the system uses surface color and inset shadows exclusively
- Pure white backgrounds for any surface; even the lightest elements use off-white (#EBE7E0) or warm gray
- Bold (700) weights; the system tops at Semibold (600)
- Decorative gradients on functional surfaces; the single oklch gradient is an exception
- Rounding below 4px or above 28px; maintain the established shape family

### Recommended build order
1. Establish the dark canvas and surface hierarchy with exact hex values
2. Implement the typography scale with system fonts and weight distribution
3. Build the card component as the foundational container
4. Create button variants with consistent padding and radius
5. Develop input and search patterns with proper icon positioning
6. Construct modal and dialog with overlay and focus trapping
7. Add list items with avatar composition and selection states
8. Implement toggle and slider with accessible interaction patterns
9. Polish with the warm accent family for indicators and selected states

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text; the ink (#E5E5E5) on canvas (#000000) exceeds 15:1
- Use ink-secondary only for non-essential text or large-scale headings above 18px
- Ensure focus indicators use the white border token with 2px offset for visibility
- Provide visible labels for all icon-only buttons; the system favors text labels or text-icon combinations
- Respect reduced-motion preferences for any slider or toggle animations
- Use semantic heading hierarchy despite visual similarity between section-display and headline sizes

## Scope note

This guide covers the Tenor landing page and its component gallery surfaces. Motion behavior, additional breakpoints, form validation states, and full component documentation beyond the visible examples are not included. The spacing and radius values derive from the retained exact measurements; implementers should verify fit against their target viewport range.
