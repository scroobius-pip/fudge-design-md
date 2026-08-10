# How app.kit.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.kit.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dashboard overview with welcome header, Kit App Store banner, and new subscribers metric cards showing zero to 166 counts](https://pin.fontofweb.com/5178?format=jpg)](https://design.withfudge.com/share/pin-5178)

[Dashboard overview with welcome header, Kit App Store banner, and new subscribers metric cards showing zero to 166 counts](https://design.withfudge.com/share/pin-5178)

[![Empty subscribers state with centered illustration, three import option cards, and minimal page layout](https://pin.fontofweb.com/5172?format=jpg)](https://design.withfudge.com/share/pin-5172)

[Empty subscribers state with centered illustration, three import option cards, and minimal page layout](https://design.withfudge.com/share/pin-5172)

[![Full dashboard with recommendations section, creator match cards with avatars, and notification toast in corner](https://pin.fontofweb.com/5171?format=jpg)](https://design.withfudge.com/share/pin-5171)

[Full dashboard with recommendations section, creator match cards with avatars, and notification toast in corner](https://design.withfudge.com/share/pin-5171)

[![Onboarding audience size step with segmented option buttons, back and continue actions, and step indicator sidebar](https://pin.fontofweb.com/5170?format=jpg)](https://design.withfudge.com/share/pin-5170)

[Onboarding audience size step with segmented option buttons, back and continue actions, and step indicator sidebar](https://design.withfudge.com/share/pin-5170)

## Overview

Kit's dashboard interface presents a warm, approachable visual system built around creator-centric tools. The design prioritizes clarity and progressive disclosure: dense information lives in rounded cards with soft backgrounds, while primary actions stand out through high-contrast black buttons. The overall impression is of a professional but friendly workspace—clean without being clinical, structured without feeling rigid.

The interface balances two distinct modes: a light, airy dashboard for ongoing management and a focused, minimal onboarding flow for new users. Both share the same foundational elements—rounded corners, generous whitespace, and a restrained typographic hierarchy—but deploy them to different ends. The dashboard layers multiple card types and recommendation surfaces, while onboarding strips away chrome to guide sequential decision-making.

Navigation sits in a persistent top bar with the Kit wordmark, section dropdowns, and user actions. Content flows beneath in a single column of full-width cards, with metric summaries and promotional banners alternating. The system avoids heavy shadows or dramatic elevation, relying instead on subtle background color shifts and hairline borders to define boundaries.

## Colors

The palette is intentionally restrained, built on a near-black ink against warm off-white grounds. Color serves functional roles rather than decorative ones, with a single blue accent reserved for brand moments and interactive emphasis.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active buttons, navigation wordmark, and emphasis |
| canvas | #F5F5F5 | Page background, metric card fills, empty state grounds |
| surface | #FFFFFF | Card backgrounds, banner interiors, modal bases, onboarding panels |
| muted | #6B6B6B | Secondary text, descriptions, placeholder labels, disabled step indicators |
| accent | #3B82F6 | Brand logo mark, selected option borders, illustration highlights |
| border | #E5E5E5 | Card outlines, dividers, hairline separators, unselected option borders |

The light mode dominates all visible surfaces. The canvas color provides a warm alternative to pure white for page backgrounds and metric cards, reducing eye strain during extended use. Surface white is reserved for elevated or interactive elements that need to advance visually. The muted gray handles all supporting text without competing for attention.

Black ink carries significant weight in this system. It fills primary buttons, renders the Kit wordmark, and anchors headlines. This creates strong focal points that guide users toward action. The blue accent appears sparingly—as the Kit "K" logo mark, a selected option outline in onboarding, and in the subscriber illustration—preventing it from overwhelming the neutral foundation.

No dark mode is visible in the supplied material. The system appears optimized for bright, clean presentation against the warm canvas.

## Typography

Three font families serve distinct roles: Kit Sans for display and brand moments, Inter for interface text and body copy, and Open Sans for specific legacy or secondary contexts. The hierarchy is shallow but clear, with weight and size doing most of the differentiation work.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kit Sans | 2rem | 700 | 1.1 | -0.02em | Page titles, welcome headers, empty state headlines |
| section-display | Kit Sans | 1.5rem | 700 | 1.2 | -0.01em | Metric values, card section headers |
| body | Inter | 1rem | 400 | 1.5 | 0 | Primary descriptions, card titles, banner text |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, metadata, button labels |
| label | Inter | 0.75rem | 400 | 1.4 | 0.01em | Metric labels, timestamps, tertiary information |
| navigation | Inter | 0.875rem | 400 | 1 | 0 | Top bar menu items, dropdown triggers |

Kit Sans appears exclusively in bold weight for headlines and metric values, giving these elements a distinctive, slightly condensed character that differentiates them from functional interface text. The negative letter spacing on display sizes tightens the wordforms for impact at larger sizes.

Inter handles all interface text at regular weight, maintaining neutrality and readability across sizes. The body and body-small sizes are separated by one step on the relative unit scale, creating clear but not dramatic differentiation. Navigation text uses the same size as body-small but with tighter line height appropriate to single-line menu items.

Open Sans is listed in the source families but does not appear prominently in the visible interface; it may serve specific legacy contexts or secondary surfaces not captured in the supplied images.

Kit Sans was designed by Marko Hrastovec and Mihael Šandro of Hot Type. Inter was designed by Rasmus Andersson of Rsms. Open Sans was designed by the Monotype Design Team. Verify licensing for these families before production use.

## Layout

The layout follows a centered single-column model with a maximum content width, flanked by generous margins on larger viewports. The top navigation bar spans full width with internal constraints matching the content area.

The page structure begins with the persistent navigation bar containing the Kit wordmark left-aligned, primary section dropdowns centered-left, and user actions right-aligned. Below this, a page header zone holds the welcome title left and primary action button right. The main content area stacks full-width cards vertically with consistent section gaps.

Cards themselves use internal padding to create breathing room, with content aligned to a consistent left edge. Metric cards arrange in horizontal groups of four, each occupying equal width with internal gaps. Option cards in empty states follow a similar grid but with three items centered in the available space.

The onboarding flow simplifies this structure dramatically: a narrow sidebar shows step progress, while the main area centers a single question with horizontally arranged option buttons below. Action buttons sit left-aligned beneath the options, maintaining the same padding logic as the dashboard.

Spacing follows a 0.25rem base unit. Section gaps between major card groups measure 1.5rem. Card internal padding is 1.5rem. Content gaps within cards measure 1rem. These values create consistent rhythm without excessive granularity.

## Visual language

The visual language leans toward softness and approachability through rounded geometry and warm neutrals. Every container uses rounded corners—cards at 0.75rem, buttons at 0.5rem, pills at full radius. This consistent curvature prevents any element from feeling sharp or aggressive, supporting the creator-friendly positioning.

Elevation is minimal and achieved through background contrast rather than shadow. Cards on the canvas background use subtle border hairlines; cards on white surfaces shift to the canvas fill. The absence of drop shadows keeps the interface feeling flat and modern, with depth implied through color layering rather than dimensional effects.

Illustrations and photography appear in contained moments: a bar chart graphic in the reports banner, avatar clusters in the creator discovery row, and a simple people icon in the empty subscriber state. These use the accent blue as a unifying thread. Photography is circular-cropped for avatars, presented at small scale within card headers.

Iconography is simple and functional: a pencil for writing actions, a bell for notifications, a location pin for sharing, people silhouettes for subscriber concepts. Icons sit inline with text at matching size, maintaining baseline alignment.

The overall density is moderate. The dashboard presents multiple information zones without crowding, while onboarding strips to essential elements. The system trusts whitespace to organize rather than relying on heavy structural lines.

## Components

### Primary action button

Anatomy: Inline text label with optional leading icon, contained in a rounded rectangle.

Surface and text color: Filled with ink black, text in surface white.

Typography: body-small token, regular weight.

Shape: 0.5rem border radius, generous horizontal padding of 1.25rem with 0.75rem vertical padding.

Spacing: Sits aligned to right edge in page headers, or left-aligned in form flows.

Variants: The "Start writing" variant includes a leading pencil icon. The "Continue" variant in onboarding uses identical styling.

### Secondary action button

Anatomy: Inline text label in a bordered container.

Surface and text color: Surface white fill, ink text, with border color outline.

Typography: body-small token.

Shape: 0.5rem border radius, matching padding to primary buttons.

Variants: The "Back" button in onboarding uses this style. Option buttons in onboarding use similar logic but with wider horizontal proportions and accent border when selected.

### Metric card

Anatomy: Label-value pair stacked vertically, contained in a rounded rectangle.

Surface: Canvas fill, no border.

Typography: Label uses label token in muted color; value uses section-display token in ink.

Shape: 0.75rem border radius, 1.5rem internal padding.

Composition: Cards arrange in horizontal groups with equal width distribution and 1rem gaps.

### Option card

Anatomy: Leading icon, title, and description stacked vertically.

Surface: Canvas fill, no border.

Typography: Title uses body token in ink; description uses body-small in muted.

Shape: 0.75rem border radius, 1.5rem padding.

Composition: Three cards in a centered row for empty states, each with equal width.

### App banner

Anatomy: Leading icon, title, description, and trailing action button in a horizontal layout.

Surface: Surface white fill with border color hairline border.

Typography: Title in body bold; description in body-small muted.

Shape: 0.75rem border radius.

Spacing: 1.5rem padding, content spaced between left text cluster and right button.

### Creator recommendation card

Anatomy: Circular avatar, title, author name, description excerpt, and two action buttons.

Surface: Surface white fill with border color hairline.

Typography: Title in body bold; author and description in body-small muted; buttons in body-small.

Shape: 0.75rem border radius.

Composition: Horizontal scroll or paginated row, with navigation arrows at section header. Cards maintain consistent internal structure with avatar left, text right, buttons below.

### Onboarding option button

Anatomy: Text label centered in a rounded rectangle.

Surface: Surface white fill with border color outline; selected state uses accent border.

Typography: body-small token.

Shape: 0.5rem border radius, wider than standard buttons to accommodate range text.

Composition: Horizontal row of five to six options, evenly spaced with consistent gaps.

### Step indicator

Anatomy: Numbered list with current step highlighted.

Typography: body-small token; active step in ink, inactive steps in muted.

Composition: Vertical list in left sidebar, current step indicated by bold weight and darker color.

## Responsive behavior

The supplied images show desktop-width layouts exclusively. Based on the visible structure, several responsive adaptations are recommended.

The top navigation bar should collapse section dropdowns into a consolidated menu at narrower widths. The user action cluster may compress to icon-only buttons.

Metric card groups should reflow from four columns to two columns on medium widths, then stack vertically on small screens. This preserves scannability without horizontal scrolling.

Creator recommendation cards currently show in a horizontal sequence with truncation; this should become a single-column stack or maintain horizontal scroll with snap points on touch devices.

The onboarding option buttons, currently in a horizontal row of five to six items, should wrap to multiple lines or convert to a vertical stack on narrow viewports to maintain touch targets.

Page margins should compress from generous desktop whitespace to minimal safe-area padding on mobile, while maintaining the centered content maximum width where possible.

## Practical implementation guidance

### Preserve
- The warm off-white canvas against pure white card surfaces—this subtle layering defines the interface depth without shadows.
- Kit Sans bold for all display and metric values; the distinctive weight is central to the brand voice.
- Consistent 0.75rem card radius and 0.5rem button radius across all components.
- High-contrast black primary buttons against the light ground; this creates unambiguous action hierarchy.
- Circular avatar treatment for all user and creator imagery.

### Avoid
- Adding drop shadows to cards; the system achieves depth through color, not elevation.
- Using the accent blue for primary actions; reserve it for brand marks, selection states, and illustrations.
- Introducing additional font weights beyond the visible regular and bold; the hierarchy relies on size and family contrast.
- Pure white page backgrounds; the warm canvas tone is intentional and reduces eye strain.

### Recommended build order
1. Establish the color tokens and apply canvas to page, surface to cards.
2. Implement the typographic hierarchy with Kit Sans bold for headlines and Inter regular for body.
3. Build the top navigation bar with wordmark, dropdowns, and user actions.
4. Create the card component with configurable surface, border, and padding variants.
5. Implement primary and secondary button styles.
6. Add metric card groups and option card layouts.
7. Build the onboarding flow with step indicator and option button row.

### Accessibility
- Ensure the ink black on surface white meets WCAG AAA contrast; the combination naturally exceeds requirements.
- The muted gray on canvas backgrounds should be verified for body text contrast; consider darkening to #595959 if used for longer passages.
- All interactive cards and buttons need visible focus indicators; consider an accent-colored outline offset from the border radius.
- Icon-only buttons in the navigation require aria-labels for screen reader context.
- The horizontal card carousel should support keyboard navigation and announce position to assistive technologies.

## Scope note

This guide covers the dashboard, subscribers, and onboarding surfaces visible in the supplied images. Mobile breakpoints, dark mode, loading states, error handling, and animation are not represented. Measurements are practical adaptation targets based on visual estimation from the provided screenshots.
