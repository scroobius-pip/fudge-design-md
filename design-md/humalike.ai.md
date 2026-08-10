# How humalike.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/humalike.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with serif headline, code block, classical illustration, and video preview on deep blue canvas](https://pin.fontofweb.com/10446?format=jpg)](https://design.withfudge.com/share/pin-10446)

[Hero section with serif headline, code block, classical illustration, and video preview on deep blue canvas](https://design.withfudge.com/share/pin-10446)

[![Feature grid with four classical engravings, integration logos, and numbered capability cards](https://pin.fontofweb.com/10447?format=jpg)](https://design.withfudge.com/share/pin-10447)

[Feature grid with four classical engravings, integration logos, and numbered capability cards](https://design.withfudge.com/share/pin-10447)

[![Footer with contact CTAs, community Discord button, and multi-column link groups on blue background](https://pin.fontofweb.com/10448?format=jpg)](https://design.withfudge.com/share/pin-10448)

[Footer with contact CTAs, community Discord button, and multi-column link groups on blue background](https://design.withfudge.com/share/pin-10448)

## Overview

Humalike presents a bold, single-page marketing experience for an AI agent plugin built on deep electric blue. The visual system pairs a saturated indigo canvas with crisp white typography, creating immediate contrast and a technical yet approachable mood. Classical engraved illustrations—reminiscent of Renaissance anatomical or mythological prints—appear throughout, lending an unexpected humanistic texture to an otherwise minimal software interface. The design relies on a strict two-typeface hierarchy: Instrument Serif for emotional, large-scale headlines and Onest for all functional, navigational, and body text. A third monospace family, Geist Mono, appears exclusively for code snippets and terminal-style content. The overall composition is spacious and vertically rhythmic, with generous section padding that lets each claim breathe. The page moves from a commanding hero through feature exposition to community engagement and footer navigation without visual clutter.

## Colors

The palette is intentionally limited and high-contrast, built around a single dominant hue.

| token | value | use |
|---|---|---|
| canvas | #0900F3 | Primary page background, hero sections, feature sections, footer |
| canvas-deep | #0D0D0D | Deep black used sparingly for contrast surfaces |
| surface | #FFFFFF | Code blocks, primary buttons, light panels |
| ink | #FFFFFF | Primary text on blue canvas, headings, body copy, labels |
| ink-secondary | #0900F3 | Text on white surfaces, secondary information |
| accent | #0900F3 | Interactive emphasis, brand identity anchor |
| border | #FFFFFF | Hairline rules on blue backgrounds, button outlines |
| border-inverse | #000000 | Rare dark borders for light-context elements |

The dominant canvas color is a vivid electric indigo that reads as near-purple in certain light. White serves as the sole text color against this field, ensuring maximum legibility. The surface color inverts the relationship: white backgrounds carry the indigo as text color, creating a clean swap for interactive elements like the primary button and code blocks. No gradients appear in the interface. The classical illustrations use a monochrome engraving style that harmonizes with the blue-and-white scheme without introducing competing color. Image-palette values from the illustrations describe their tones and should not be used as UI tokens.

## Typography

The type system pairs three families across distinct functional roles. Instrument Serif supplies display personality with its high-contrast, elegant letterforms. Onest handles all interface and reading text with geometric clarity. Geist Mono serves code and technical content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 4.75rem | 400 | 1.02 | -0.02em | Hero headlines, page titles |
| section-display | Instrument Serif | 1.625rem | 400 | 1.3 | -0.01em | Feature headings, card titles |
| body | Onest | 1rem | 300 | 1.6 | 0em | Paragraphs, descriptions |
| body-small | Onest | 0.8125rem | 300 | 1.6 | 0em | Feature card descriptions, footer links |
| label | Onest | 0.6875rem | 300 | 1.6 | 0.1em | Category labels, eyebrow text, uppercase tags |
| ui | Onest | 0.875rem | 500 | 1.43 | 0em | Navigation, buttons, links |
| code | Geist Mono | 0.8125rem | 400 | 1.625 | 0em | Terminal snippets, install commands |

Instrument Serif appears at dramatic sizes—up to 81px in the hero—tightened slightly for impact. Onest maintains a light weight (300) for body reading, shifting to medium (500) for interactive UI elements. The label style uses wide tracking and small size for categorical metadata like integration names and feature numbering. Geist Mono appears only in the code block context, preserving the terminal aesthetic with its even spacing and neutral tone. Verify licensing for these families before production use.

## Layout

The page follows a stacked-section architecture with a fixed top navigation and full-width content bands. The relative unit is 0.25rem, and spacing values resolve to a practical scale: 16px, 24px, 32px, 40px, 48px, 56px, 72px, 80px, 96px, 112px, 144px, and 220px.

Horizontal containment uses generous margins. The narrowest margin is 72px, expanding to 220px for certain content bands, creating a centered, editorial feel. Internal section padding reaches 144px vertically for major transitions, with 112px and 96px serving secondary section breaks. Content gaps of 48px separate related elements within sections.

The hero section employs a split composition: text and code occupy the left portion while a large classical illustration anchors the right. Below, a video preview spans nearly the full content width with rounded corners, creating a focal media moment. Feature sections use a four-column grid with 24px column gaps and 48px row gaps, allowing equal visual weight across capability cards. The footer compresses into a multi-column link grid with a two-column CTA area above.

No sidebar, drawer, or modal structures appear. Navigation remains horizontal and minimal.

## Visual language

The aesthetic tension between classical illustration and modern software interface defines the visual language. Engraved figures—muscular, multi-armed, radiating light—reference mythology and humanism while promoting an AI plugin. These images are rendered in monochrome line work, avoiding color competition with the indigo field.

The corner language is mixed: buttons use full pill shapes (9999px), while panels and media containers use 16px rounded corners. This creates a hierarchy of softness—interactive elements feel organic and approachable, while content frames maintain structure. Shadows are minimal and functional: a subtle layered shadow set (0px 1px 3px, 0px 4px 6px -4px, 0px 10px 15px -3px) appears on elevated surfaces like the video preview container, adding depth without breaking the flat aesthetic.

Borders function as optical hairlines: 1px solid white rules separate footer regions and outline secondary buttons. The absence of heavy borders or background variations between sections creates a continuous, immersive blue experience. Typography scale provides the primary hierarchy, with size contrast between 76px display and 11px labels spanning nearly sevenfold.

## Components

### Top navigation

- **Anatomy**: Logo mark left, text links center-right, primary CTA button far right
- **Surface**: Transparent over canvas blue, no background fill
- **Typography**: `{typography.ui}` for all items
- **Spacing**: Horizontal padding matching content margins, vertical padding approximately 16px
- **Composition**: Flex row with space-between alignment

### Hero section

- **Anatomy**: Serif headline block, code block, two-button group, large illustration, video preview
- **Surface**: Full canvas blue background
- **Typography**: `{typography.hero-display}` for headline; `{typography.code}` for install script; `{typography.ui}` for buttons
- **Shape**: Code block uses 16px radius; buttons use pill shape
- **Spacing**: Generous vertical padding, illustration offset to right
- **Composition**: Asymmetric two-column layout with text left, media right; video preview centered below

### Code block

- **Anatomy**: Monospace text container with multi-line command
- **Surface**: `{colors.surface}` background, `{colors.ink-secondary}` text
- **Typography**: `{typography.code}`
- **Shape**: `{rounded.panel}`
- **Spacing**: Internal padding approximately 16px
- **Composition**: Full width of text column, positioned between headline and buttons

### Primary button

- **Anatomy**: Text label with optional icon
- **Surface**: `{colors.surface}` background, `{colors.ink-secondary}` text
- **Typography**: `{typography.ui}`
- **Shape**: Full pill
- **Spacing**: Padding approximately 12px vertical, 24px horizontal
- **Variants**: "Copy install script" with arrow icon; "Contact us" with arrow icon

### Secondary button

- **Anatomy**: Text label
- **Surface**: Transparent background, 1px white border
- **Typography**: `{typography.ui}`
- **Shape**: Full pill
- **Spacing**: Matching primary button
- **Variants**: "View on GitHub"; "View on GitHub" in hero

### Feature card

- **Anatomy**: Numbered label, serif title, engraved illustration, body description
- **Surface**: Transparent over canvas
- **Typography**: `{typography.label}` for number and category; `{typography.section-display}` for title; `{typography.body-small}` for description
- **Spacing**: 48px row gap between cards in grid
- **Composition**: Vertical stack within four-column grid; illustration fills card width

### Integration bar

- **Anatomy**: Uppercase category label, horizontal logo row
- **Typography**: `{typography.label}` for "ONE SHOT INTEGRATIONS:"; `{typography.ui}` for platform names
- **Composition**: Centered horizontal flex with platform icons and names

### Video preview

- **Anatomy**: Large media container with play button overlay and co-branding text
- **Surface**: Dark thumbnail with white border frame, subtle shadow stack
- **Shape**: 16px rounded corners
- **Typography**: Sans-serif branding text centered
- **Composition**: Nearly full content width, centered below hero

### Footer

- **Anatomy**: Two-column CTA row ("Contact us", "Join the community"), then multi-column link grid, then logo and tagline
- **Surface**: Canvas blue continuous with page
- **Typography**: `{typography.ui}` for headings; `{typography.body-small}` for links; `{typography.label}` for category headers
- **Spacing**: 144px top padding, generous internal gaps
- **Composition**: Asymmetric columns with company links left, comparison links right

## Responsive behavior

The layout is desktop-first with a viewport width near 1720px. At this scale, the four-column feature grid, split hero, and wide content margins all function as designed. For narrower viewports, the following adaptations are recommended: the hero should stack vertically with illustration below text; the feature grid should collapse to two columns then single column; footer link columns should stack; and the code block should remain horizontally scrollable to prevent overflow. The generous 220px content margins should reduce to 72px then 16px as viewport narrows. Typography should scale down proportionally, with hero display reducing to approximately 3rem on tablet and 2.5rem on mobile to maintain line length control.

## Practical implementation guidance

### Preserve
- The electric indigo canvas as the dominant background; it is the brand's most distinctive asset
- The Instrument Serif / Onest type pairing; the contrast between editorial display and clean UI is central to the personality
- Classical engraved illustration style; the mythological-humanistic imagery differentiates from generic tech marketing
- Generous vertical spacing; the sparse, breathable rhythm conveys confidence
- Pill-shaped buttons with full rounding; they soften the technical edge

### Avoid
- Adding background color variation between sections; the continuous blue field is intentional
- Introducing additional accent colors; the single-hue system depends on restraint
- Heavy borders or dividers; the 1px hairline is sufficient
- Generic stock photography; the engraved style is a cohesive choice
- Tightening body text leading; the 1.6 line height supports light-weight readability

### Recommended build order
1. Establish the canvas blue background and white text defaults
2. Implement the three-typeface loading strategy with correct weights
3. Build the top navigation with transparent background and pill CTA
4. Create the hero section with asymmetric layout, code block, and illustration
5. Add the video preview container with shadow and rounded frame
6. Construct the feature grid with four-column responsive behavior
7. Implement the integration bar with centered alignment
8. Build the footer with CTA row and multi-column link structure

### Accessibility
- Ensure white text on #0900F3 meets WCAG contrast ratios; the combination should be verified for small text compliance
- Provide visible focus states for pill buttons, likely using outline or background shift
- Make the code block selectable and copyable; consider adding an explicit copy button with accessible labeling
- Add alt text to classical illustrations describing their content and decorative role
- Ensure the video preview play button is keyboard accessible with clear focus indication

## Scope note

This guide covers the Hermes plugin landing page on desktop viewport. Mobile breakpoints, animation, hover states, form validation, and additional marketing pages are not included. The radius and spacing values reflect the exact measurements from this page surface.
