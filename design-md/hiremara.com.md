# How hiremara.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hiremara.com-design)

Last updated: 2026-08-10

## Captured pages

[![Email example carousel showing a ShipLog welcome email with extracted voice traits and orange highlighted text in a split-panel layout](https://pin.fontofweb.com/10547?format=jpg)](https://design.withfudge.com/share/pin-10547)

[Email example carousel showing a ShipLog welcome email with extracted voice traits and orange highlighted text in a split-panel layout](https://design.withfudge.com/share/pin-10547)

[![Centered URL input page with italic serif headline, orange primary button, and promotional countdown timer badge](https://pin.fontofweb.com/10546?format=jpg)](https://design.withfudge.com/share/pin-10546)

[Centered URL input page with italic serif headline, orange primary button, and promotional countdown timer badge](https://design.withfudge.com/share/pin-10546)

[![Hero section with dark serif display type, email preview card with monospace body text, and orange accent CTA button](https://pin.fontofweb.com/10545?format=jpg)](https://design.withfudge.com/share/pin-10545)

[Hero section with dark serif display type, email preview card with monospace body text, and orange accent CTA button](https://design.withfudge.com/share/pin-10545)

## Overview

Hire Mara presents an AI email marketer through a deliberately editorial visual system. The design balances the warmth of human-written correspondence with the precision of automated technology. A stark white canvas hosts dramatic serif headlines in Instrument Serif, creating immediate typographic authority. JetBrains Mono handles technical details, code-like labels, and email body previews, reinforcing the product's computational backbone. Inter provides neutral, highly legible body text for descriptions and navigation. The signature orange accent—vivid and unmissable—highlights extracted voice traits in email previews, calls attention to primary actions, and anchors promotional messaging. The overall impression is of a sophisticated tool that respects craft: the AI does not replace the founder's voice but amplifies it with mechanical exactness.

## Colors

The palette operates in a high-contrast editorial mode with a single warm accent. Light surfaces dominate, with strategic dark inversions for emphasis.

| token | value | use |
|---|---|---|
| action | #FF4A00 | Primary buttons, highlighted text in email previews, promotional badges, active navigation states |
| ink | #111111 | Primary headings, body text on light surfaces, dark borders |
| ink-secondary | #232323 | Secondary headings, card titles |
| muted-ink | #565656 | Descriptions, captions, footer text, inactive navigation |
| subtle-ink | #6A6A6A | Tertiary metadata, timestamps, placeholder text |
| canvas | #FFFFFF | Page background, card surfaces, input backgrounds |
| surface-dark | #161616 | Dark gradient sections, footer areas |
| border-dark | #111111 | Emphasized borders on secondary buttons, active states, card outlines |

The orange accent functions as both functional marker and brand signature. In email preview cards, it highlights extracted voice traits—phrases the AI has identified as characteristic of the founder's style. This same orange fills primary action buttons and countdown promotional badges, creating a consistent thread between product demonstration and conversion action. Dark text on white dominates for readability, with the near-black ink providing sharper contrast than pure black for extended reading. The system supports dark gradient backgrounds in hero sections, transitioning from deep navy-black (#0E1330) through midnight (#090D1D) to pure black, with a warm radial glow (#C97961) suggesting the orange accent's luminous quality.

## Typography

Four families appear in the system: Instrument Serif for editorial display, Inter for functional body text, JetBrains Mono for technical and labeled content, and -apple-system as a platform-specific sans-serif fallback in certain interface contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 4.5rem | 400 | 1.05 | 0em | Main page headlines, hero statements |
| section-display | Instrument Serif | 2.6rem | 400 | 1.1 | 0em | Section headings, carousel titles |
| body | Inter | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, navigation |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0em | Captions, metadata, footer text |
| label | JetBrains Mono | 0.6875rem | 500 | 1.1 | 0.12em | Uppercase labels, tags, category markers |
| code | JetBrains Mono | 0.8125rem | 400 | 1.5 | 0em | Email body previews, technical content |
| navigation | Inter | 0.875rem | 500 | 1.5 | 0em | Header links, button text |

Instrument Serif appears exclusively in Regular weight, relying on size and context for hierarchy rather than weight variation. Its italic style appears in secondary hero treatments for emphasis. JetBrains Mono spans weights from 400 to 700, with 500 used for uppercase labels and 700 for bold emphasis within code content. Inter provides the workhorse sans-serif layer at 400 and 500 weights. The -apple-system family serves as a platform-optimized fallback in select UI contexts. Verify licensing for these families before production use.

## Layout

The layout follows a centered, content-focused model with generous whitespace and clear reading measure. The base spacing unit is 0.125rem, with semantic steps at 0.5rem, 1rem, 1.5rem, 2rem, 3rem, and 6rem for section breaks.

Page containers center content with maximum widths that constrain line length for readability. The hero section on the homepage splits asymmetrically: a left text block occupies roughly 40% of the width with the headline, description, and input form, while a right panel displays a floating email preview card. This card overlaps the section boundary slightly, creating depth through layering.

Navigation sits fixed at the top with a hairline bottom border. Links align right with consistent gaps, while the logo anchors the left. The promotional countdown badge appears inline with primary actions, creating urgency without disrupting the clean form layout.

Email example sections use a split-panel carousel: a left sidebar shows company context, extracted voice traits, and category tags; a right panel renders the full email preview with monospace body text and orange-highlighted phrases. Navigation arrows and pagination dots sit below the carousel. The email preview panel uses internal padding of 1.75rem, with subject lines and metadata in smaller monospace above the body content.

Cards and panels use subtle shadows for elevation—particularly the email preview card which carries a pronounced shadow suggesting it floats above the page surface. Border radius remains minimal at 0.25rem for most elements, preserving the editorial sharpness. Pill-shaped badges for categories and promotions use full rounding.

## Visual language

The visual language merges editorial refinement with technical precision. The orange accent operates as a highlighter—literally marking text the AI has extracted as voice-characteristic—rather than merely decorating buttons. This creates a direct visual connection between the product's core value and its interface.

Monospace typography dominates email previews and technical labels, creating a subtle association with code and automation. Uppercase labels with wide letter-spacing mark sections and categories, functioning like editorial running heads. The contrast between flowing serif headlines and rigid monospace body copy mirrors the product's promise: human voice, machine execution.

Imagery is minimal and functional. Small company logos appear in email preview headers. The Mara mascot—a small orange figure—appears as a decorative accent near interactive elements, adding personality without clutter. Gradient backgrounds in dark sections use a warm radial glow that echoes the orange accent, suggesting illumination or insight.

Shadows are restrained and purposeful. The email preview card uses a deep, soft shadow (0px 18px 40px -16px at 20% opacity) to lift it from the page. Smaller shadows (0px 4px 20px at 12% opacity) elevate buttons and inputs on interaction. Inset highlights on dark buttons suggest subtle depth.

## Components

### Primary button

- **Anatomy**: Text label with optional arrow icon, contained within a solid orange rectangle
- **Surface**: Background fills with `{colors.action}`, text in `{colors.canvas}`
- **Typography**: `{typography.label}`—uppercase, monospace, letter-spaced
- **Shape**: 0.25rem border radius, no border
- **Spacing**: 1rem vertical padding, 1.5rem horizontal padding
- **Composition**: Centered text, inline with adjacent input fields in hero forms
- **Variants**: Standard size for hero CTAs; smaller compact variant for navigation and secondary actions

### Input field with integrated button

- **Anatomy**: Text input with placeholder text, adjacent primary button forming a single composite control
- **Surface**: White background, light gray border, orange button attached to right edge
- **Typography**: Input uses `{typography.body}`, placeholder in `{colors.subtle-ink}`
- **Shape**: 0.25rem radius on left corners of input, 0.25rem on right corners of button where they meet
- **Spacing**: Generous internal padding for touch targets
- **Composition**: Horizontal flex layout with no gap between input and button
- **States**: Focus state should add visible outline or border color shift to `{colors.action}`

### Email preview card

- **Anatomy**: Card container with header metadata (avatar, sender name, recipient), subject line, body text in monospace, and highlighted phrases
- **Surface**: White background, subtle border, pronounced shadow for elevation
- **Typography**: Sender metadata in `{typography.body-small}`, subject in `{typography.code}` at larger size, body in `{typography.code}`
- **Shape**: 0.25rem border radius
- **Spacing**: 1.75rem internal padding
- **Composition**: Vertical stack with clear hierarchy; highlighted phrases wrapped in orange text color
- **Variants**: Compact variant for carousel sidebar context; expanded variant for full preview

### Promotional countdown badge

- **Anatomy**: Two-part pill badge—orange left segment with offer text, white right segment with live countdown timer
- **Surface**: Left segment `{colors.action}`, right segment `{colors.canvas}` with orange border
- **Typography**: `{typography.label}` throughout, monospace for timer digits
- **Shape**: Full pill rounding (999px)
- **Spacing**: Tight internal padding, compact horizontal margins
- **Composition**: Inline below primary CTA, centered or left-aligned with form

### Category tag

- **Anatomy**: Small rectangular label with uppercase text
- **Surface**: Transparent background with dark border, or solid light background
- **Typography**: `{typography.label}` in `{colors.muted-ink}`
- **Shape**: 0.25rem border radius, 1px border
- **Spacing**: Compact padding, used in clusters with small gaps

### Carousel navigation

- **Anatomy**: Left/right arrow buttons, pagination dots, counter showing current position
- **Surface**: Arrow buttons with light borders, dots as small circles
- **Typography**: Counter in `{typography.code}`
- **Shape**: Square buttons with 0.25rem radius, circular dots
- **Composition**: Centered below carousel content, counter between arrows

## Responsive behavior

The design prioritizes desktop presentation with centered content and generous margins. At narrower viewports, the asymmetric hero split should stack vertically: headline and form above, email preview card below. The carousel sidebar and preview panel should similarly stack, with voice traits collapsing into an expandable section.

Navigation links should collapse into a menu button on smaller screens, preserving the clean header aesthetic. Input-button composites should remain horizontal where possible, stacking only at very narrow widths. Font sizes should scale down modestly: hero-display to approximately 3rem, section-display to 2rem, maintaining readability without excessive reflow.

The email preview card's shadow and elevation should remain consistent across breakpoints to preserve the floating, dimensional quality. Promotional badges should remain inline and legible, potentially wrapping to a second line if horizontal space is constrained.

## Practical implementation guidance

### Preserve
- The three-family typographic hierarchy: Instrument Serif for display, Inter for body, JetBrains Mono for technical content
- Orange accent used sparingly and purposefully: primary actions, voice highlights, promotional badges
- High contrast between text and backgrounds; avoid gray-on-gray combinations
- Minimal border radius maintaining editorial sharpness
- Generous whitespace around content blocks

### Avoid
- Adding weight variations to Instrument Serif; the design relies on its single Regular weight
- Using orange for large background areas; it functions best as accent and highlight
- Replacing monospace email previews with proportional type; the technical character is essential
- Heavy borders or outlines that compete with the clean, light aesthetic
- Animations that distract from the reading experience

### Recommended build order
1. Establish typography scale with the three families and base spacing unit
2. Implement color tokens with orange accent and neutral grays
3. Build hero section with split layout and integrated input-button component
4. Create email preview card with shadow, padding, and monospace content
5. Add carousel with split-panel structure and navigation controls
6. Implement promotional badge with live countdown functionality
7. Polish with micro-interactions: button hover states, input focus, card elevation

### Accessibility
- Ensure orange text on white meets minimum contrast ratios; the vivid #FF4A00 may need darkening for small text
- Provide visible focus indicators on all interactive elements, particularly the input-button composite
- Use semantic heading hierarchy with Instrument Serif headlines
- Ensure carousel controls are keyboard accessible with clear active states
- Add `aria-live` region for countdown timer updates
- Maintain sufficient touch targets on mobile for buttons and navigation arrows

## Scope note

This guide covers the homepage and try-page surfaces visible in the supplied captures, including hero sections, email preview carousels, URL input forms, and promotional countdown elements. Pricing pages, account dashboards, mobile-specific layouts, and motion or animation specifications are not included. Measurements reflect the desktop viewport widths captured.
