# How app.speak.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.speak.com-design)

Last updated: 2026-08-10

## Captured pages

[![Login page with split layout: left panel shows a floating Speaking Practice card on a soft pink background, right panel contains email and social sign-in options with a bold blue](https://pin.fontofweb.com/5345?format=jpg)](https://design.withfudge.com/share/pin-5345)

[Login page with split layout: left panel shows a floating Speaking Practice card on a soft pink background, right panel contains email and social sign-in options with a bold blue](https://design.withfudge.com/share/pin-5345)

[![Onboarding goal selection screen with a blue progress bar, centered question text, and selectable goal cards with emoji icons, some showing a selected state with blue border and](https://pin.fontofweb.com/5344?format=jpg)](https://design.withfudge.com/share/pin-5344)

[Onboarding goal selection screen with a blue progress bar, centered question text, and selectable goal cards with emoji icons, some showing a selected state with blue border and](https://design.withfudge.com/share/pin-5344)

[![Japanese proficiency level selector showing five stacked white cards with gradient plant icons from yellow to purple, each with a level title and descriptive body text on a light](https://pin.fontofweb.com/5343?format=jpg)](https://design.withfudge.com/share/pin-5343)

[Japanese proficiency level selector showing five stacked white cards with gradient plant icons from yellow to purple, each with a level title and descriptive body text on a light](https://design.withfudge.com/share/pin-5343)

[![Topic confirmation screen with a thumbs-up emoji, centered headline, three topic summary rows with colored circular icons, and a full-width blue Continue button at the bottom.](https://pin.fontofweb.com/5342?format=jpg)](https://design.withfudge.com/share/pin-5342)

[Topic confirmation screen with a thumbs-up emoji, centered headline, three topic summary rows with colored circular icons, and a full-width blue Continue button at the bottom.](https://design.withfudge.com/share/pin-5342)

## Overview

Speak's app interface presents a warm, encouraging entry point into language learning through a carefully balanced visual system. The design pairs confident, high-contrast action elements with soft, approachable backgrounds that reduce cognitive load during onboarding. The split login screen establishes immediate product context through a floating card preview of the speaking practice experience, while subsequent onboarding flows center the user in a narrow, focused content column that guides sequential decision-making. Every interactive element reinforces the brand's friendly personality through rounded pill shapes, generous whitespace, and emoji iconography that adds human warmth without clutter. The system prioritizes clarity of choice: selection states are unambiguous with bold blue borders and light blue fills, disabled states are clearly muted, and progress is always visible through a simple segmented bar. This is a design built for conversion and comfort in equal measure, using restraint in color and form to keep attention on the learning journey ahead.

## Colors

The Speak app employs a disciplined, high-contrast palette anchored by a vibrant blue action color against warm neutral grounds. The system avoids decorative complexity, relying instead on a single strong accent to guide user attention through every screen.

| token | value | use |
|---|---|---|
| action | #2563EB | Primary buttons, active selection borders, progress bar fill, text links |
| action-hover | #1D4ED8 | Hover state for primary interactive elements |
| action-muted | #DBEAFE | Selected card backgrounds, subtle emphasis fills |
| ink | #111827 | Primary headings, body text, selected card text |
| ink-secondary | #4B5563 | Subheadings, helper text, placeholder states |
| canvas | #F3F4F6 | Page backgrounds for onboarding flows |
| surface | #FFFFFF | Cards, buttons, modal panels, login form background |
| border | #E5E7EB | Default card borders, dividers, inactive track backgrounds |
| border-active | #2563EB | Selected card borders, focus indicators |
| success | #10B981 | Completion checkmarks, positive feedback states |

The color logic follows a clear hierarchy: blue commands action and selection, black provides reading weight, and the warm gray canvas creates breathing room. The login screen introduces a soft pink photographic background (#FCE7F3) on its left panel as product imagery, but this is treated as photographic content rather than a UI token. Selected states combine the action blue border with a light blue fill, creating unmistakable affordance without harshness. Disabled buttons use a muted gray fill with lighter gray text, clearly communicating unavailability. Text links inherit the action blue with no underline, maintaining clean typography while remaining tappable.

## Typography

Speak uses Axiforma exclusively, a geometric sans-serif designed by Galin Kastelov and distributed by Kastelov. The type system is compact and functional, with weight variations providing hierarchy rather than size alone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Axiforma | 2.5rem | 700 | 1.1 | -0.02em | Login headline, major confirmations |
| section-display | Axiforma | 2rem | 600 | 1.2 | -0.01em | Onboarding questions, level selectors |
| body | Axiforma | 1rem | 400 | 1.5 | 0em | Descriptions, card body text, options |
| body-medium | Axiforma | 1rem | 500 | 1.5 | 0em | Button labels, emphasized selections |
| label | Axiforma | 0.875rem | 500 | 1.4 | 0em | Card titles, level names, topic headers |
| caption | Axiforma | 0.75rem | 400 | 1.4 | 0em | Progress indicators, helper text, legal |

The type scale is built on a 4px relative unit, with sizes snapping to whole multiples: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 32px (2rem), and 40px (2.5rem). Display sizes use tight negative tracking for a modern, confident presence, while body sizes remain neutral for extended reading. The Bold weight (700) appears only in the largest display context; most interface text relies on Medium (500) or Regular (400) weights. Verify licensing for these families before production use.

## Layout

The Speak app alternates between two primary layout patterns: a split-screen composition for authentication and a centered single-column flow for onboarding.

The login screen divides the viewport into two equal halves. The left panel presents product imagery—a floating Speaking Practice card against a soft pink ground—establishing immediate context and emotional appeal. The right panel centers the authentication form vertically and horizontally, with a maximum content width of approximately 28rem. This panel uses a pure white background to maximize contrast and readability for form elements.

Onboarding flows abandon the split layout for a focused, mobile-responsive column centered in the viewport. A consistent header area contains a back arrow, segmented progress bar, and step counter (e.g., "5/6"). Below this, the question headline and optional subheadline occupy the upper portion, followed by the interactive selection area. The content column maintains the same 28rem maximum width, creating continuity across screens. At the bottom, a full-width action button sits above a secondary sign-in link, establishing a predictable rhythm of decision and escape.

Spacing follows a 4px base unit. Card padding is consistently 1.5rem internally, with 0.75rem gaps between stacked cards. Section spacing between the header, content, and footer areas is typically 2rem. The progress bar sits 1rem below the header row, and the primary action button maintains 1.5rem clearance from the last interactive element above it.

## Visual language

The visual personality of Speak balances friendliness with functional clarity. Rounded corners appear everywhere: cards use 1rem radius, buttons are fully pill-shaped, and the progress bar is a soft capsule. This consistent curvature removes sharp edges from the experience, supporting the app's encouraging tone.

Emoji icons serve as the primary illustration system, appearing at the left edge of selection cards to provide quick semantic recognition. Goal cards show speaking, muscle, ear, and target emojis; level cards display gradient plant icons from yellow through purple; topic summaries use colored circular badges with travel, social, and food symbols. These icons are not decorative afterthoughts but integral to scanability, allowing users to parse options before reading text.

Shadows are minimal or absent in the onboarding flows, with depth created instead through background contrast and border states. The login screen's floating card breaks this pattern with a soft drop shadow that elevates it from the pink ground, suggesting the product literally emerging from the brand environment.

The progress indicator is a simple, elegant capsule: a gray track with a blue fill that grows proportionally through six steps. No numbers appear inside the bar itself; the step counter sits to the right in caption size, providing precise position without cluttering the visual element.

## Components

### Primary button

- **Anatomy**: Full-width or fixed-width pill button containing centered text label
- **Surface and text color**: Action blue background (#2563EB) with white text
- **Typography**: body-medium token, 1rem at 500 weight
- **Shape**: Fully rounded pill (9999px border radius)
- **Spacing**: 1rem vertical padding, 1.5rem horizontal minimum
- **Composition**: Centered text, no icon in default state
- **Variants**: Disabled state uses muted gray background with lighter gray text; active/pressed state may darken to action-hover

### Selection card

- **Anatomy**: Horizontal card with optional leading emoji/icon, title text, optional description, and trailing checkmark when selected
- **Surface and text color**: White background with ink text; active state shifts to light blue fill (#DBEAFE) with blue border (#2563EB)
- **Typography**: label token for titles (0.875rem, 500 weight), body token for descriptions (1rem, 400 weight)
- **Shape**: 1rem border radius, 1px default border, 2px active border
- **Spacing**: 1.5rem internal padding, 0.75rem gap between stacked cards
- **Composition**: Icon and text left-aligned, checkmark right-aligned in active state
- **Variants**: Default (white, gray border), active (blue fill, blue border, checkmark), disabled (implied by context)

### Progress bar

- **Anatomy**: Horizontal capsule track with proportional fill segment
- **Surface and text color**: Gray track (#E5E7EB) with blue fill (#2563EB)
- **Shape**: 9999px border radius, approximately 0.5rem height
- **Composition**: Full-width within content column, positioned below back arrow and above headline
- **Variants**: Fill width adjusts per step count (e.g., 5/6 shows ~83% fill)

### Social sign-in button

- **Anatomy**: Full-width pill button with leading provider icon and centered label
- **Surface and text color**: White background with ink text and 1px gray border; email variant uses action blue background with white text
- **Typography**: body-medium token
- **Shape**: 9999px border radius
- **Spacing**: Consistent with primary button dimensions
- **Composition**: Icon left-aligned with text centered, or icon and text as a unit centered
- **Variants**: Email (filled blue), Google, Facebook, Apple, KakaoTalk, LINE (all outlined white)

### Topic summary card

- **Anatomy**: White rounded card containing stacked rows with circular colored icon badges, topic titles, and brief descriptions
- **Surface and text color**: White surface with ink titles and ink-secondary descriptions
- **Typography**: label token for titles, body token for descriptions
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem padding, generous internal row spacing
- **Composition**: Centered within content column, separated from headline by horizontal rule

## Responsive behavior

The split login layout should stack vertically on narrow viewports, with the product imagery panel collapsing to a top banner or hidden entirely to prioritize the authentication form. The onboarding single-column layout is inherently responsive, requiring only margin adjustments to maintain comfortable reading width.

The content maximum width of 28rem serves as a comfortable reading measure across devices. On very wide screens, the centered column prevents excessive eye movement; on mobile, it allows for standard safe-area margins. Touch targets must maintain a minimum 44px height for all interactive elements, with the pill buttons naturally exceeding this.

Selection cards should expand to full width on mobile with maintained internal padding. The emoji icons remain at a fixed size that scales slightly with system text size preferences. The progress bar and step counter should remain visible and legible at all viewport sizes.

## Practical implementation guidance

### Preserve
- The consistent pill shape language across all buttons and the progress bar
- The warm gray canvas (#F3F4F6) for all onboarding backgrounds
- The high-contrast blue action color for all primary interactions
- The emoji-plus-text pattern for selection card scanability
- The centered, narrow content column for focused decision-making
- The clear selected state with both border and fill color change

### Avoid
- Introducing additional accent colors beyond the established blue
- Using sharp-cornered buttons or cards that break the friendly curvature
- Placing selection cards at full width on desktop where the narrow column creates better focus
- Removing the progress indicator from any onboarding step
- Using underlined text links instead of the inherited blue color treatment

### Recommended build order
1. Establish the 4px spacing unit and type scale with Axiforma loaded at all weights
2. Implement the canvas background and centered content column with 28rem max-width
3. Build the pill button component with default, hover, and disabled states
4. Create the selection card with default and active variants, including the checkmark affordance
5. Add the progress bar with dynamic fill width based on step position
6. Compose the login split layout and onboarding single-column layouts
7. Integrate emoji icons and colored badge variants for topic summaries

### Accessibility
- Ensure all blue action elements meet 3:1 contrast against white for UI components and 4.5:1 for text
- Provide visible focus indicators that extend beyond color alone, such as a 2px outline offset
- Maintain logical tab order through selection cards and buttons
- Associate progress bar with aria-valuenow, aria-valuemin, and aria-valuemax for screen reader announcement
- Confirm that emoji icons are accompanied by visible text labels or hidden text alternatives

## Scope note

This guide covers the login and onboarding flow surfaces of the Speak app. It does not include in-lesson interfaces, achievement systems, payment flows, account settings, or dark mode variants. Measurements are practical adaptation targets derived from visible interface proportions.
