# How mio.gg is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mio.gg-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large italic serif headline "Never make a phone call again" on near-black background with App Store badge and navigation](https://pin.fontofweb.com/7626?format=jpg)](https://design.withfudge.com/share/pin-7626)

[Hero section with large italic serif headline "Never make a phone call again" on near-black background with App Store badge and navigation](https://design.withfudge.com/share/pin-7626)

[![Chat interface showing AI phone assistant conversation with message bubbles, status indicators, and rounded dark panels](https://pin.fontofweb.com/7627?format=jpg)](https://design.withfudge.com/share/pin-7627)

[Chat interface showing AI phone assistant conversation with message bubbles, status indicators, and rounded dark panels](https://design.withfudge.com/share/pin-7627)

## Overview

Mio presents an AI phone assistant through a stark, dark interface that emphasizes elegance and clarity. The design language relies on extreme contrast: near-black backgrounds against warm off-white text, with occasional mid-tone grays for secondary information. The visual hierarchy is established through dramatic scale differences between a large italic serif display face and compact sans-serif body copy. The interface feels conversational and intimate, treating the AI interaction as a personal messaging experience rather than a technical dashboard. Two primary surfaces appear in the supplied material: a commanding hero landing area and a functional chat interface demonstrating the product in action. Both share the same restrained palette and typographic system, creating cohesion across marketing and product contexts.

## Colors

The color system is intentionally narrow, built around a dark-mode foundation with minimal accent variation. Every token serves a specific structural or communicative role.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Primary page background, deepest layer |
| surface | `#08080A` | Chat panel backgrounds, elevated containers |
| surface-elevated | `#0F0F12` | Subtle hierarchy shifts within dark UI |
| ink | `#E4E4E0` | Primary text, headlines, active states |
| muted-ink | `#6B6B73` | Secondary text, timestamps, status labels |
| border | `#3B3B42` | Hairline dividers, subtle panel edges |

The warm cast of the off-white ink (`#E4E4E0`) prevents the interface from feeling clinical against pure black. Muted ink appears for descriptive paragraphs and inactive metadata, creating readable hierarchy without introducing additional hues. The surface tokens progress in subtle steps: canvas for the immersive hero, surface for functional chat panels, and surface-elevated for any nested containers. No gradients, shadows, or accent colors appear in the visible interface—color restraint is a defining characteristic.

## Typography

Two font families create the typographic tension: Instrument Serif in italic for display moments, and Inter for all functional and body text. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 6.25rem | 400 | 1 | -0.035em | Primary headline, brand statement |
| body | Inter | 1rem | 400 | 1.6 | 0em | Descriptive paragraphs, explanations |
| body-small | Inter | 0.875rem | 400 | 1.55 | 0em | Chat messages, compact reading |
| label | Inter | 0.8125rem | 400 | 1.4 | 0.01em | Captions, metadata, timestamps |
| label-medium | Inter | 0.8125rem | 500 | 1.4 | 0em | Navigation actions, button text |
| legal-copy | Inter | 0.6875rem | 400 | 1.4 | 0em | Fine print, pre-header text, badge labels |

The hero display at 100px (6.25rem) with tight negative tracking is the system's most distinctive element, rendered in Instrument Serif's italic style for expressive emphasis. The word "again" in the headline carries this italic treatment within the larger statement. Inter handles everything else at modest sizes: 16px for primary body, 14px for chat content, and 13px for labels and navigation. The 11px legal-copy size appears in compact contexts like the App Store badge pre-header. Weight distinctions are minimal—Regular for most text, Medium reserved for the navigation pill's call-to-action. Line heights stay compact to maintain density in the dark interface.

## Layout

The layout philosophy centers on immersive single-column composition with generous negative space. The hero section fills the viewport with content centered both horizontally and vertically, creating a focused, almost cinematic presentation. No sidebar, no card grid, no complex navigation bar—just the essential message and a single conversion action.

Spacing follows a 2px base unit (0.125rem), with practical values emerging at 14px, 20px, 24px, 28px, and 32px intervals. The chat interface uses 28px internal padding for its rounded panels, creating breathing room around conversational content. Section spacing of 32px appears between paragraph blocks.

The chat interface demonstrates a different layout mode: stacked message bubbles with asymmetric alignment. User messages right-align, assistant responses left-align, with status indicators and metadata nested between. This creates natural reading rhythm without explicit dividers. The navigation sits as a sparse top bar with logo left, actions right, maintaining the open, uncluttered feel.

Border radius serves as a key shaping tool: 20px (1.25rem) for chat panels and functional containers, 100px for pill buttons and navigation actions, and 10px for compact elements like the App Store badge. This pairing of moderate rounding with full pills creates clear component identity without visual noise.

## Visual language

The visual character is restrained luxury applied to functional software. The darkness is absolute—not charcoal or navy, but true black and near-black—allowing the warm off-white text to glow with subtle intensity. The serif italic in the headline introduces humanistic flair against the geometric precision of Inter, suggesting personality within technological capability.

Imagery and iconography are minimal to the point of absence. The logo appears as a simple geometric mark. No photography, no illustrations, no decorative patterns compete with the typographic message. The chat interface uses only text, a small status dot, and minimal labels to convey state.

The conversational UI panels are the system's most complex visual element. They float as discrete rounded rectangles against the darker background, their edges softly defined by the 20px radius. Message alignment and spacing create visual flow without borders or background alternation. Status text like "call in progress" appears in muted ink with a small green indicator dot, using color sparingly for functional signaling.

## Components

### Hero headline

- **Anatomy**: Large italic serif text, optionally mixed with roman forms, centered horizontally
- **Surface and text color**: Transparent background, `{colors.ink}` text
- **Typography**: `{typography.hero-display}`
- **Shape**: No bounding container, text sits directly on canvas
- **Spacing**: Generous vertical margins, approximately 32px below to body text
- **Composition**: Centered, maximum width constrained by viewport padding
- **Variants**: Italic words may be emphasized within larger roman context, or full italic treatment

### Navigation bar

- **Anatomy**: Logo mark left, text link center-right, pill button far right
- **Surface and text color**: Transparent background, `{colors.muted-ink}` for text link, `{colors.canvas}` for pill text on `{colors.ink}` background
- **Typography**: `{typography.label}` for "How it works", `{typography.label-medium}` for "Download"
- **Shape**: Pill button uses `{rounded.pill}` with 11px vertical and 24px horizontal padding
- **Spacing**: Horizontal padding from viewport edges, vertical padding approximately 14px
- **Composition**: Flex row, space-between alignment

### Chat panel

- **Anatomy**: Rounded container holding message thread with status indicators
- **Surface and text color**: `{colors.surface}` background, `{colors.ink}` for user messages, `{colors.muted-ink}` for assistant responses
- **Typography**: `{typography.body-small}` for messages, `{typography.label}` for status text
- **Shape**: `{rounded.panel}` border radius
- **Spacing**: `{spacing.panel-padding}` internal padding, message gaps approximately 20px
- **Composition**: Stacked vertical flow, user messages right-aligned, assistant left-aligned

### App Store badge

- **Anatomy**: Rounded rectangle with Apple logo, pre-header text, and "App Store" label
- **Surface and text color**: Light gray background, dark text
- **Typography**: `{typography.legal-copy}` for "Coming soon on" pre-header, `{typography.label}` for "App Store"
- **Shape**: `{rounded.badge}` border radius
- **Spacing**: Internal padding tight, external margin centered below body text
- **Composition**: Centered, inline with "or use on web" text link below

### Status indicator

- **Anatomy**: Small dot plus label text
- **Surface and text color**: Green dot for active states, `{colors.muted-ink}` for label
- **Typography**: `{typography.label}`
- **Shape**: Circular dot, approximately 6-8px diameter
- **Spacing**: Dot inline with text, small gap between
- **Composition**: Centered within chat flow between messages

## Responsive behavior

The hero headline at 100px will require scaling for smaller viewports. Implement a reduction to approximately 48px-64px on tablet and 36px-48px on mobile to maintain readability without excessive line breaks. The centered composition should remain, but horizontal viewport padding should increase proportionally as viewport narrows.

The chat interface should maintain its panel width with increased horizontal margins on smaller screens, potentially transitioning to full-bleed panels with reduced internal padding below 480px viewport width.

Navigation should collapse to a simplified form on mobile, potentially hiding the text link and retaining only the logo and pill button, or converting to a bottom-fixed action bar if scroll depth is minimal.

## Practical implementation guidance

### Preserve
- The absolute darkness of the canvas; do not lighten to charcoal or slate
- The italic serif in display contexts; this is the brand's primary recognizable element
- The warm cast of the off-white ink against black
- Generous internal padding in chat panels; density without crowding is essential
- The asymmetric message alignment in conversational UI

### Avoid
- Introducing accent colors beyond the functional green status dot
- Using the serif face for body text or UI labels
- Adding borders or shadows to chat panels; rely on background contrast alone
- Centering all text indiscriminately; maintain left alignment for reading content
- Rounding smaller than 20px for primary panels; it appears tentative rather than intentional

### Recommended build order
1. Establish the dark canvas and ink text with Inter body sizing
2. Implement the hero headline with Instrument Serif italic and precise tracking
3. Build the navigation with pill button styling
4. Create the chat panel container with 20px radius and 28px padding
5. Add message alignment logic and status indicators
6. Refine spacing scale across all components

### Accessibility
- Ensure the 3.5:1 contrast ratio between muted ink and surface meets WCAG AA for large text; consider lightening muted ink to 4.5:1 if used for body-sized content
- The green status dot should not be the sole indicator of state; pair with text label always
- Instrument Serif at display sizes remains readable due to scale, but avoid using it below 24px
- Maintain focus indicators for the pill button and "or use on web" link that exceed default browser styles against dark backgrounds

## Scope note

This guide covers the landing page hero and chat interface demonstration visible in the supplied material. Footer content, additional marketing sections, pricing, documentation pages, and mobile-specific layouts are not represented. Form states, error handling, loading sequences, and the full conversational thread history are not documented. Measurements reflect the extracted interface values where available.
