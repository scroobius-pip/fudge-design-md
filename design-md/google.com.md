# How google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/google.com-design)

Last updated: 2026-08-10

## Captured pages

[![AI Mode search results page with conversational answer panel, knowledge cards, and dark theme with gradient sidebar accents](https://pin.fontofweb.com/8713?format=jpg)](https://design.withfudge.com/share/pin-8713)

[AI Mode search results page with conversational answer panel, knowledge cards, and dark theme with gradient sidebar accents](https://design.withfudge.com/share/pin-8713)

[![Google AI Mode homepage with centered greeting, rounded search input, and suggestion chips on dark background](https://pin.fontofweb.com/6925?format=jpg)](https://design.withfudge.com/share/pin-6925)

[Google AI Mode homepage with centered greeting, rounded search input, and suggestion chips on dark background](https://design.withfudge.com/share/pin-6925)

[![Google AI Mode homepage variant showing microphone icon and plus button in the search input field](https://pin.fontofweb.com/6604?format=jpg)](https://design.withfudge.com/share/pin-6604)

[Google AI Mode homepage variant showing microphone icon and plus button in the search input field](https://design.withfudge.com/share/pin-6604)

[![Close-up of the AI Mode search input with rounded corners, placeholder text, and action icons](https://pin.fontofweb.com/5849?format=jpg)](https://design.withfudge.com/share/pin-5849)

[Close-up of the AI Mode search input with rounded corners, placeholder text, and action icons](https://design.withfudge.com/share/pin-5849)

## Overview

Google's AI Mode search interface presents a dark-first, conversational experience built around a central query input and expansive answer surfaces. The design prioritizes readability in low-light environments through a near-black canvas with carefully calibrated gray surfaces that create depth without visual noise. The interface shifts between two primary modes: a welcoming homepage state centered on a greeting and input field, and a results state that unfolds rich, multi-source answers alongside traditional search results. A persistent top navigation bar and slim left sidebar provide orientation, while the right side hosts knowledge panels and related content cards. The overall impression is one of spaciousness and focus—generous negative space on the homepage gives way to dense but well-structured information architecture on results pages, all unified by rounded corners, consistent typography, and a cool-toned accent system.

## Colors

The palette is built on a dark-mode foundation with a strictly limited set of grays and a single blue accent family. Every surface exists on a continuum from pure black to light gray, with text colors inversely mapped to maintain contrast.

| token | hex | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #101218 | Primary content areas, sidebar background |
| surface-elevated | #17181F | Cards, panels, elevated containers |
| surface-input | #25262E | Search input field, interactive surfaces |
| ink | #E6E8F0 | Primary text, headings, active navigation |
| ink-muted | #ADAFB8 | Secondary text, placeholders, inactive states |
| ink-dim | #17181F | Text on light surfaces, inverted contexts |
| action-primary | #3186FF | Links, active indicators, gradient start |
| action-primary-hover | #99C3FF | Lighter blue for hover or emphasis states |
| accent-purple | #A9A8FF | Gradient midpoint, decorative accents |
| border-subtle | #25262E | Dividers, hairline borders between surfaces |

The dark hierarchy works through luminance steps rather than hue variation. Pure black canvas recedes, while #101218 and #17181F advance as content containers. The input field at #25262E sits at the lightest functional surface, creating a natural focal point. Blue accents appear sparingly—primarily in text links and a decorative gradient that transitions from #3186FF through #A9A8FF to #E6E8F0. This gradient appears in brand moments and sidebar accents, not as UI chrome. White (#FFFFFF) is reserved for button labels and high-emphasis moments, while the near-white #E6E8F0 handles body text to reduce eye strain.

## Typography

The system relies on three font families: Google Sans for all interface text, Arial for button labels and fallback contexts, and Roboto as an additional loaded family. Google Sans appears in Regular (400), Medium (500), and Bold (700) weights. Roboto is attributed to designer Christian Robertson and vendor Google. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Google Sans | 2rem | 500 | 1.25 | 0em | Homepage greeting, large prompts |
| section-display | Google Sans | 1rem | 700 | 1.5 | 0em | Card headings, section titles |
| body | Google Sans | 0.875rem | 400 | 1.5 | 0em | Paragraph text, descriptions |
| body-large | Google Sans | 1rem | 400 | 1.5 | 0em | Primary answers, longer reads |
| label | Google Sans | 0.875rem | 500 | 1.25 | 0em | Navigation tabs, chip text |
| navigation | Google Sans | 0.875rem | 400 | 1.25 | 0em | Top bar links, breadcrumbs |
| button | Arial | 0.875rem | 400 | 1 | 0em | Button labels, icon buttons |

The type scale is compact, with only three distinct sizes: 0.875rem for most interface text, 1rem for emphasized body and headings, and 2rem for the homepage hero. Line heights are generous at 1.5 for reading contexts and tighter at 1.25 for labels and navigation. The button role uses a tight 1 line height to match its compact vertical footprint. No letter spacing adjustments are applied, maintaining the neutral character of the geometric sans. Bold weight is reserved for section headings and strong emphasis within answers, while Medium handles the hero greeting and selected navigation states.

## Layout

The layout system uses a fixed left sidebar, a fluid main content area, and an optional right panel for knowledge cards. The left sidebar is narrow, serving as a persistent navigation rail with icon-only items and occasional text labels. The main content area carries a maximum readable width for text, with answer content typically constrained to a central column while results and cards expand to fill available space.

On the homepage, the layout collapses to a single centered column. The greeting, input field, and suggestion chips stack vertically with generous vertical spacing. The input field spans a comfortable width—neither edge-to-edge nor cramped—creating a sense of invitation.

In results mode, the layout shifts to an asymmetric two-column system. The left column carries the conversational answer, source citations, and follow-up prompts. The right column hosts knowledge panels with thumbnail images, related topic links, and "Show all" expansion controls. A subtle gradient fade at the bottom of scrollable panels suggests additional content without requiring a visible scrollbar.

Spacing follows a 2px base unit. Key measurements include 118px top margin for main content clearance below the navigation bar, 20px horizontal padding for content containers, 12px to 16px vertical gaps between related items, and 76px left indentation for nested or cited content. Cards and panels use 20px internal padding. The navigation bar maintains 8px to 12px horizontal padding for its items.

## Visual language

The visual language is defined by extreme rounding on interactive elements and sharp corners on structural containers. Search inputs use 24px radius, creating a pill-like appearance that softens the technical feel of the dark interface. Buttons and chips carry similarly generous rounding, with icon buttons becoming perfect circles. Cards and panels use 20px to 24px radius, while small utility elements may use 8px.

Shadows are absent from the system; depth is achieved entirely through surface color variation. The progression from #000000 to #101218 to #17181F creates sufficient spatial hierarchy without elevation shadows. This flat-but-layered approach keeps the interface clean and reduces rendering complexity.

The left sidebar introduces the only decorative color moment: a vertical gradient that shifts from cyan through purple to blue, visible as a slim accent strip. This gradient echoes the broader brand gradient used in marketing contexts and provides orientation in an otherwise monochromatic interface.

Icons are simple line drawings or filled silhouettes, always in the muted ink color. The microphone icon in the search input, plus button for attachments, and sidebar navigation icons share a consistent stroke weight and geometric simplicity. User avatars appear as circular images with thin borders.

## Components

### Search input

The search input is the central interaction point of the interface. It appears as a rounded rectangle with 24px corner radius, filled with #25262E. The field contains placeholder text in muted ink, a plus icon for attachments on the left, and a microphone icon on the right. On the homepage, it sits below the hero greeting with comfortable vertical spacing. In results mode, it may appear as a persistent element or transform into a more compact form.

- **Anatomy**: Container, placeholder text, attachment trigger, voice input trigger
- **Surface**: #25262E background, no border
- **Typography**: body-large token for placeholder, label token for icons
- **Shape**: 24px border radius, full width within content constraints
- **Spacing**: Internal padding of approximately 16px vertical, 20px horizontal
- **Composition**: Icons positioned at left and right edges, text centered or left-aligned

### Knowledge card

Knowledge cards appear in the right panel, presenting structured information about entities, topics, or related searches. Each card has a 20px to 24px rounded container in #17181F, with internal padding of 20px. Cards contain a title, descriptive text, thumbnail images, and source attribution. Some cards include expandable "Show all" controls.

- **Anatomy**: Title, description, thumbnail image, source link, expansion control
- **Surface**: #17181F background, no visible border
- **Typography**: section-display for titles, body for descriptions, navigation for sources
- **Shape**: 20px to 24px border radius
- **Spacing**: 20px internal padding, 16px gap between stacked cards
- **Variants**: Compact summary card, expandable list card, image-rich card

### Suggestion chip

Suggestion chips appear below the search input on the homepage, offering pre-written queries. Each chip is a text string preceded by a small sparkle or search icon, rendered in muted ink on the canvas background. Chips are not enclosed in visible containers but read as discrete interactive elements through their icon prefix and hover state.

- **Anatomy**: Icon prefix, text label
- **Surface**: Transparent, canvas background shows through
- **Typography**: body token, muted ink color
- **Shape**: No visible container, text-only with icon
- **Spacing**: 12px to 16px vertical gap between chips
- **States**: Default muted, hover may shift to full ink

### Navigation bar

The top navigation bar spans the full width, containing mode selection (AI Mode, All, Images, Videos, News, More), utility icons, and user account controls. The bar uses the surface color with a subtle bottom border or shadow separation. Navigation items use the label token, with the active state in full ink and inactive in muted ink.

- **Anatomy**: Mode selector, search category tabs, utility icons, avatar
- **Surface**: #101218 background
- **Typography**: label token for active, navigation token for inactive
- **Shape**: Full-width bar, no rounding
- **Spacing**: 8px to 12px horizontal padding on items

### Answer panel

The answer panel is the primary content surface in results mode, presenting AI-generated responses with inline citations. The panel uses the surface color, with paragraphs in body-large and inline links in action-primary. Source citations appear as superscript numbers or inline badges, with a sources section below the main answer.

- **Anatomy**: Greeting or context line, answer paragraphs, inline citations, sources list, follow-up prompt
- **Surface**: #101218 background
- **Typography**: body-large for answers, body for citations, section-display for follow-up headings
- **Shape**: No rounding on the panel itself, internal elements use standard rounding
- **Spacing**: 16px to 24px paragraph spacing, 76px left indentation for cited content

## Responsive behavior

The interface is designed for desktop widths, with the two-column results layout requiring substantial horizontal space. At narrower widths, the right knowledge panel should stack below the main answer or collapse into an expandable section. The left sidebar may compress to icon-only or hide entirely, with navigation moving to the top bar.

The homepage centering should maintain comfortable margins down to tablet widths, with the input field scaling to near-full-width on mobile. Suggestion chips should wrap to multiple lines rather than truncate.

Touch targets for the microphone button, attachment trigger, and sidebar icons should maintain minimum 44px dimensions regardless of viewport. The search input should remain easily tappable with adequate vertical padding.

## Practical implementation guidance

### Preserve
- The dark-first palette with precise luminance steps between surfaces
- Generous rounding on all interactive elements, especially the 24px search input
- The two-font system with Google Sans for interface text and Arial for buttons
- The spacious homepage composition with centered greeting and input
- The asymmetric results layout with answer left and knowledge right
- The gradient accent in the sidebar as the sole decorative color moment

### Avoid
- Adding drop shadows to cards or panels; rely on surface color for depth
- Using pure white (#FFFFFF) for body text; the calibrated #E6E8F0 reduces eye strain
- Introducing additional accent colors beyond the blue-purple gradient family
- Sharp corners on buttons, inputs, or chips
- Truncating suggestion chips; allow wrapping instead

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement the typography scale with Google Sans at 400, 500, and 700 weights
3. Build the rounded search input with placeholder, attachment, and microphone icons
4. Create the homepage layout with centered greeting and suggestion chips
5. Add the top navigation bar with mode selector and utility icons
6. Implement the two-column results layout with answer panel and knowledge cards
7. Add the left sidebar with gradient accent strip
8. Polish interaction states and responsive behavior

### Accessibility
- Ensure all text meets WCAG AA contrast against dark surfaces; the #E6E8F0 on #101218 combination exceeds requirements
- Provide visible focus indicators on the search input and all interactive elements
- Support keyboard navigation through suggestion chips and knowledge card links
- Include aria-labels on icon-only buttons such as microphone and attachment triggers
- Respect prefers-reduced-motion for any gradient animations or transitions

## Scope note

This guide covers the AI Mode search homepage and results surfaces visible in the supplied images. Standard Google Search results pages, image search grids, and mobile layouts are not represented. Measurements derive from the documented interface values. Motion, hover states, and voice interaction feedback are not covered. Roboto does not appear in the visible interface typography but is loaded as a family asset.
