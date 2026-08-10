# How gaio.club is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gaio.club-design)

Last updated: 2026-08-10

## Captured pages

[![Restaurant section with food photography background, cream menu cards for Starters, Main Course, and Cocktails, and a Reserve a table floating button](https://pin.fontofweb.com/8016?format=jpg)](https://design.withfudge.com/share/pin-8016)

[Restaurant section with food photography background, cream menu cards for Starters, Main Course, and Cocktails, and a Reserve a table floating button](https://design.withfudge.com/share/pin-8016)

[![Hero section with large Bethany Elingston display type reading ENJOY AN UNFORGETTABLE FOOD & SERVICE against black background with radiating sunburst motif and Greek key border](https://pin.fontofweb.com/8015?format=jpg)](https://design.withfudge.com/share/pin-8015)

[Hero section with large Bethany Elingston display type reading ENJOY AN UNFORGETTABLE FOOD & SERVICE against black background with radiating sunburst motif and Greek key border](https://design.withfudge.com/share/pin-8015)

[![Hero section showing the GAÏO logo centered above SAINT-TROPEZ — FRANCE label with decorative sunburst and bottom Greek key ornamental border](https://pin.fontofweb.com/8014?format=jpg)](https://design.withfudge.com/share/pin-8014)

[Hero section showing the GAÏO logo centered above SAINT-TROPEZ — FRANCE label with decorative sunburst and bottom Greek key ornamental border](https://design.withfudge.com/share/pin-8014)

[![Reservation modal panel in warm bronze with guest count, date, and time selection fields, and Reserve button with Zenchef attribution](https://pin.fontofweb.com/4554?format=jpg)](https://design.withfudge.com/share/pin-4554)

[Reservation modal panel in warm bronze with guest count, date, and time selection fields, and Reserve button with Zenchef attribution](https://design.withfudge.com/share/pin-4554)

## Overview

GAÏO is a restaurant, cabaret, and club in Saint-Tropez, France, and its digital presence channels the venue's theatrical, after-dark atmosphere into a confident, minimal interface. The design system is built on extreme contrast: near-black backgrounds absorb light while warm cream typography glows against the darkness. Ornate display lettering evokes cabaret marquee signage, while clean geometric sans-serif labels maintain navigational clarity. The overall impression is one of restrained luxury—every element feels intentional, spacious, and slightly ceremonial. Classical decorative motifs, including a repeating Greek key border pattern and radiating sunburst graphics, reinforce the venue's identity as a place where fine dining meets performance. The system must support immersive full-bleed photography, expandable menu presentations, and a reservation flow that feels as polished as the venue itself.

## Colors

The palette is intentionally narrow, deriving its power from contrast and temperature rather than variety. The dominant mode is a deep, light-absorbing darkness that lets photography and typography become the visual focus.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, hero sections, navigation bar |
| surface | #0B0B0B | Slightly elevated dark surfaces, card shadows, modal overlays |
| ink | #FFF2DA | Primary text on dark backgrounds, headings, body copy, labels |
| ink-bright | #FFFFFF | Navigation accents, high-priority labels, active states |

The warm cream ink (#FFF2DA) carries a subtle yellow undertone that prevents the interface from feeling clinical against pure black. This warmth connects the digital experience to the venue's physical atmosphere—candlelight, brass fixtures, aged wood. White appears sparingly, reserved for the highest-attention moments such as the centered GAÏO logotype and active navigation states. No gradients or shadows are used in the visible interface; depth is achieved through color temperature shifts and photographic layering rather than dimensional effects.

The reservation panel visible in the imagery presents a warm bronze-toned surface that appears to be a photographic or rendered treatment rather than a flat interface color. This warm tone harmonizes with the cream typography and suggests the physical materials of the venue—aged brass, leather, wood—without introducing a distinct hex value into the core palette.

## Typography

Two type families create a deliberate tension between theatrical display and modern utility. Bethany Elingston, designed by Muammar Kadafi and published by Attract Studio, supplies the ornate, high-contrast serif voice. Saans, designed by Martin Vácha and published by Displaay, provides the clean, light geometric sans-serif that handles all functional text. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bethany Elingston | 6rem | 400 | 1.2 | 0.03em | Hero headlines, section titles, marquee statements |
| section-display | Bethany Elingston | 6rem | 400 | 1.2 | 0.03em | Expanded section headers, menu category titles |
| body | Saans | 0.875rem | 400 | 1.2 | 0.04em | Menu descriptions, form labels, general content |
| body-large | Saans | 1.125rem | 400 | 1.2 | 0.04em | Lead paragraphs, introductory copy, location labels |
| label | Saans | 0.875rem | 400 | 1.2 | 0.04em | Buttons, captions, utility text |
| navigation | Saans | 0.875rem | 400 | 1.2 | 0.04em | Header links, menu items, footer actions |

Bethany Elingston appears at a single monumental size of 96px (6rem), with generous positive letter spacing that lets each character breathe. The ampersand is particularly distinctive, with flowing curves that become a visual signature in headlines like "FOOD & SERVICE." Saans Light at 14px (0.875rem) handles the majority of interface text, with a slightly expanded 18px (1.125rem) variant for more prominent labels such as "SAINT-TROPEZ — FRANCE" and "RESTAURANT, CABARET & CLUB." The consistent 1.2 line height across all Saans sizes creates tight, elegant blocks of text that feel intentional rather than cramped. Tracking remains positive throughout, giving even small labels a sense of air and refinement.

## Layout

The layout philosophy centers on immersive full-viewport experiences with layered depth. The hero section occupies the entire initial viewport, using absolute centering for its typographic content. A fixed navigation bar spans the top edge, with the GAÏO logotype centered and functional links distributed to the left and right extremes. This tripartite header structure—social action, brand mark, reservation and menu actions—creates visual balance without symmetry.

Below the hero, content sections alternate between photographic immersion and structured information. The restaurant section demonstrates a key compositional pattern: a full-bleed food photograph serves as the background, while cream-colored menu cards float in the lower portion, partially overlapping the image and each other in a staggered arrangement. This creates three distinct depth planes: the photographic background, the shadowed mid-ground, and the crisp card foreground.

The reservation interface appears as a modal panel, centered or right-aligned depending on viewport, with internal padding that keeps form elements comfortably separated. A persistent floating action button in the lower right corner provides constant access to table reservations without interrupting content consumption.

Spacing follows a tight modular system based on 2px increments. The smallest unit (0.125rem) handles internal padding and hairline adjustments. Medium increments (0.375rem to 0.875rem) manage component internal spacing. Larger values (1.625rem) separate related elements within cards, while section-level spacing (6rem) creates dramatic pauses between major content blocks.

## Visual language

The visual language draws from classical Mediterranean and theatrical traditions, translated into a contemporary digital context. The most distinctive decorative element is the Greek key pattern—a continuous geometric meander border that runs along the bottom edge of the hero section. This pattern appears in cream against black, creating a baseboard-like ornamental frame that grounds the expansive darkness above.

A radiating sunburst motif serves as the hero's central decorative element, positioned behind the main headline as a subtle, darker-on-dark graphic. The sunburst's elongated rays suggest both a rising sun and a theatrical spotlight, reinforcing the venue's dual identity as day-to-night destination and performance space.

Photography plays an essential role in the visual system. Food imagery is warmly lit, with shallow depth of field and rich amber tones that harmonize with the cream typography. The photographs never compete with text; instead, they provide a textural, atmospheric layer that rewards attention without demanding it.

The GAÏO logotype itself is a custom wordmark, centered in the navigation with distinctive letterforms that echo the Bethany Elingston display face. The mark appears in cream, maintaining consistent presence across all visible states.

Interactive elements favor subtlety over spectacle. The "Reserve a table" floating button uses a warm-toned background with cream text and a small Zenchef icon, positioned with comfortable clearance from viewport edges. A downward arrow in the hero's lower left suggests scroll progression without insisting on it.

## Components

**Hero Section**
- Anatomy: Full-viewport container with centered typographic stack, decorative sunburst background graphic, bottom Greek key border pattern, and scroll indicator
- Surface: Solid black background (#000000), no image overlay
- Typography: Location label in Saans Light 1.125rem, main headline in Bethany Elingston 6rem, subtitle in Saans Light 1.125rem
- Shape: No border radius; full bleed to viewport edges
- Spacing: Generous vertical padding between label, headline, and subtitle; Greek key pattern flush to bottom edge
- Composition: Absolute center alignment for text; sunburst centered behind headline; scroll indicator positioned bottom-left

**Navigation Bar**
- Anatomy: Fixed top bar with three zones—left social link, center logotype, right action cluster
- Surface: Transparent or black background, cream text
- Typography: All links in Saans Light 0.875rem with positive tracking
- Shape: Full width, height approximately 3.5rem
- Spacing: Comfortable horizontal padding; vertical centering of all elements
- Composition: "JOIN US ON INSTAGRAM" left, "GAÏO" center, "BOOK A TABLE | MENU" right with pipe separator

**Menu Card**
- Anatomy: Rectangular card with category title, item list, and expand/collapse arrow
- Surface: Cream background (#FFF2DA), dark text (#0B0B0B)
- Typography: Category title in uppercase sans-serif at larger size; items in Saans Light 0.875rem with description text
- Shape: Slight border radius; subtle shadow for depth
- Spacing: Internal padding approximately 1.625rem; item spacing compact
- Composition: Cards appear in staggered horizontal arrangement, overlapping slightly; expand arrow positioned top-right

**Reservation Panel**
- Anatomy: Modal panel with header, guest selector, date selector, time selector with radio-style options, submit button, and attribution footer
- Surface: Warm bronze-toned surface, cream text
- Typography: Header in uppercase sans-serif; selectors in Saans Light 0.875rem; time options in matching size with selected state indicator
- Shape: Rounded corners; input fields and buttons with subtle radius
- Spacing: Generous internal padding; clear separation between form sections
- Composition: Header with close control and language toggle; stacked selectors; time grid with vertical list; full-width submit button; Zenchef attribution at bottom

**Floating Action Button**
- Anatomy: Pill-shaped button with icon and label
- Surface: Warm-toned background, cream text
- Typography: "Reserve a table" in Saans Light 0.875rem
- Shape: Pill radius (9999px)
- Spacing: Comfortable internal padding; fixed position with viewport margin
- Composition: Icon left, text right; positioned lower right of viewport

## Responsive behavior

The design system prioritizes desktop immersion, but several patterns suggest natural responsive adaptations. The hero headline at 6rem will require scaling for smaller viewports—reducing to 3rem or 4rem maintains impact without overflow. The staggered menu card arrangement should collapse to a single vertical stack on narrow screens, with full-width cards and increased touch targets.

The navigation bar's tripartite layout may need consolidation on mobile: the social link can move to a footer or drawer, while "BOOK A TABLE" and "MENU" collapse into a hamburger-triggered panel or remain as icon-only actions. The Greek key border pattern should scale proportionally or hide on very small screens where horizontal space is constrained.

The reservation panel, shown in a narrow format in the reference, appears well-suited to mobile already—its stacked form structure and generous touch targets translate directly. The floating action button should remain fixed but with adjusted positioning to avoid overlapping essential content or system gestures.

Typography should maintain its proportional relationships across breakpoints: Bethany Elingston headlines scale down but keep their positive tracking, while Saans body text can remain at 0.875rem for readability. Line heights stay consistent to preserve the tight, elegant texture.

## Practical implementation guidance

**Preserve**
- The extreme contrast between black backgrounds and warm cream typography; this is the system's emotional core
- The single monumental size for Bethany Elingston display type; do not dilute it with multiple competing display sizes
- The Greek key border pattern as a distinctive brand element; implement as SVG for crisp scaling
- The positive letter spacing throughout; it creates the system's characteristic air and refinement
- The warm tonal family for functional, interactive contexts

**Avoid**
- Introducing additional accent colors; the narrow palette is intentional and powerful
- Using Bethany Elingston for body text or UI labels; reserve it for display moments only
- Adding drop shadows to text or cards; the flat, theatrical lighting is part of the aesthetic
- Centering functional text blocks; the system's centering is reserved for ceremonial display moments
- Generic button styling; the pill-shaped button with icon is a specific signature

**Recommended Build Order**
1. Establish the black background and cream text foundation with Saans Light body typography
2. Implement the fixed navigation bar with tripartite layout and centered logotype
3. Build the hero section with centered typographic stack and decorative sunburst graphic
4. Add the Greek key border pattern as a reusable decorative component
5. Integrate Bethany Elingston for hero headlines with exact 6rem sizing and tracking
6. Develop menu card components with cream surfaces and staggered composition
7. Implement the reservation panel with warm-toned surface and form selectors
8. Add the floating action button with fixed positioning

**Accessibility**
- Ensure cream text on black backgrounds meets WCAG AA contrast ratios; the warm tone slightly reduces contrast compared to pure white
- Provide visible focus indicators for keyboard navigation; consider cream outlines on dark surfaces
- Make the Greek key pattern decorative with appropriate ARIA roles so it does not interfere with screen readers
- Ensure the reservation form has clear labels, error states, and keyboard-operable time selection
- Maintain sufficient touch targets for mobile users, particularly on the floating action button and menu expand controls

## Scope note

This guide covers the landing page experience for GAÏO including the hero section, navigation, menu presentation, and reservation interface. Interior pages, event listings, gallery layouts, and mobile-specific navigation patterns are not represented in the available material. Motion design, hover states, loading sequences, and sound design are not documented. The spacing values reflect the site's tight 2px modular grid.
