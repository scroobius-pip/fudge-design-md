# How nango.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nango.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Dark hero section with code-first integrations headline and syntax-highlighted code editor panel showing Nango SDK usage](https://pin.fontofweb.com/5443?format=jpg)](https://design.withfudge.com/share/pin-5443)

[Dark hero section with code-first integrations headline and syntax-highlighted code editor panel showing Nango SDK usage](https://design.withfudge.com/share/pin-5443)

[![Light-themed feature grid titled Built for scale with three cards and soft gradient geometric illustrations](https://pin.fontofweb.com/5442?format=jpg)](https://design.withfudge.com/share/pin-5442)

[Light-themed feature grid titled Built for scale with three cards and soft gradient geometric illustrations](https://design.withfudge.com/share/pin-5442)

[![Dark capabilities section with four feature cards showcasing API auth, syncs, webhooks, and LLM tool calling with line-art icons](https://pin.fontofweb.com/5441?format=jpg)](https://design.withfudge.com/share/pin-5441)

[Dark capabilities section with four feature cards showcasing API auth, syncs, webhooks, and LLM tool calling with line-art icons](https://design.withfudge.com/share/pin-5441)

[![Light social proof section with company logo tabs and customer testimonial cards with avatar photos and quotes](https://pin.fontofweb.com/5440?format=jpg)](https://design.withfudge.com/share/pin-5440)

[Light social proof section with company logo tabs and customer testimonial cards with avatar photos and quotes](https://design.withfudge.com/share/pin-5440)

## Overview

Nango's design system serves a developer infrastructure platform with a visual language that alternates between immersive dark environments and crisp light surfaces. The site communicates technical credibility through code-centric presentation while maintaining approachable readability for decision-makers. Dark sections dominate the hero and capabilities areas, creating a focused, terminal-like atmosphere that speaks directly to engineers. Light sections handle social proof, scaling claims, and supporting content, providing visual relief and scanning efficiency. The overall rhythm moves users through technical depth toward trust and conversion without abandoning the code-native aesthetic that defines the brand.

The system relies on strong typographic contrast between Geist's geometric precision for headlines and Inter's neutral readability for body content. Fira Code appears exclusively in code samples and technical annotations, reinforcing the developer-tool positioning. Color discipline is strict: near-black and pure white anchor both modes, with a narrow gray range handling hierarchy and a subtle border system defining card boundaries. Gradient accents appear only in decorative illustrations and hover states, never as primary UI surfaces. The result is a site that feels engineered rather than decorated—every element supports the core message of reliable, scalable integration infrastructure.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text on light surfaces, dark section backgrounds, primary button fills |
| canvas | #ffffff | Light section backgrounds, card surfaces, text on dark backgrounds |
| surface-dark | #0a0a0a | Hero backgrounds, code editor chrome, dark feature sections |
| surface-light | #f7f7f7 | Subtle alternating rows, testimonial section background |
| muted-ink | #737373 | Secondary text, descriptions, captions, inactive tab labels |
| border-subtle | #e5e5e5 | Card borders, dividers, tab underlines on light surfaces |
| action | #000000 | Primary CTA backgrounds, active tab fills |
| action-text | #ffffff | Text on primary CTAs, icons on dark buttons |

The color system operates in two distinct modes that alternate by section. Dark mode uses `surface-dark` as the dominant background with `canvas` text, creating the immersive code-editor atmosphere visible in the hero and capabilities sections. Light mode inverts to `canvas` backgrounds with `ink` text for readability in longer content areas like testimonials and scaling features. The near-absence of chromatic color keeps attention on code samples and gradient illustrations; the only hue appears in decorative graphics with soft pink-to-cyan gradients that suggest speed and modernity without competing with content. `muted-ink` serves as the universal secondary text color across both modes, ensuring consistent hierarchy rhythm. Borders remain hairline-thin and desaturated, providing structural definition without visual weight.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3rem | 700 | 1.1 | -0.02em | Page headlines, hero statements |
| section-display | Geist | 2.25rem | 700 | 1.2 | -0.01em | Section titles, feature grid headers |
| body | Inter | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, general reading |
| body-medium | Inter | 1rem | 500 | 1.6 | 0em | Emphasized body, subheadings, tab labels |
| label | Geist | 1.125rem | 600 | 1.4 | 0em | Card titles, feature names, button text |
| code | Fira Code | 0.875rem | 400 | 1.7 | 0em | Code samples, SDK examples, technical snippets |
| navigation | Inter | 0.875rem | 500 | 1.5 | 0em | Top nav, footer links, breadcrumbs |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0em | Copyright, fine print, metadata |

Geist carries all display and heading responsibilities with its tight tracking and confident weight, giving the site a contemporary developer-tool character. Inter handles all body and interface text with neutral clarity, avoiding the personality conflicts that would arise from using Geist at small sizes. Fira Code appears exclusively in monospaced contexts, its presence immediately signaling "developer content" to readers. Open Sans is available in the font inventory but does not appear in the visible interface of the supplied images. The type scale uses a 4px relative unit, with sizes landing at 12px, 14px, 16px, 18px, 36px, and 48px equivalents. Line heights stay compact for headings to maintain vertical density, while body text receives generous leading for comfortable scanning. Verify licensing for these families before production use.

## Layout

The page follows a centered single-column structure with generous horizontal margins that keep content readable on wide viewports. Maximum content width appears to sit around 1200px, with text-heavy sections narrowing further to roughly 900px for optimal line length. Section spacing is dramatic: dark-to-light transitions use full-bleed backgrounds with substantial vertical padding, typically 6rem or more, creating clear thematic boundaries between content types.

The hero section stacks a large headline and subhead over a two-column feature panel. The left column contains a vertical list of capability labels with descriptions, while the right column presents a syntax-highlighted code block in a dark terminal-like container. This split establishes the site's core pattern: conceptual explanation paired with concrete implementation.

Feature grids use a three-column or four-column layout depending on content density. The "Built for scale" section shows three equal cards with top-aligned text and bottom-placed illustrations, while the capabilities section uses a two-by-two grid for more detailed feature descriptions. Cards maintain consistent internal padding and align their text baselines across rows even when illustration heights vary.

The testimonial section introduces horizontal scrolling or carousel behavior, with company logo tabs above a row of quote cards. Each card contains a large quotation, supporting paragraph, and avatar-attribution block. Tab interfaces use pill-shaped active states with dark fills, while inactive tabs appear as text-only labels.

## Visual language

The visual identity balances technical precision with approachable warmth. Dark sections dominate the upper page, creating an immersive "inside the tool" feeling that transitions to open, breathable light sections as users scroll toward social proof and conversion. This progression mirrors the user journey from technical evaluation to organizational trust.

Illustrations follow a consistent language of thin-line geometry with soft gradient fills. The scaling section shows abstract gauges, curves, and hexagons in pink-to-cyan gradients against white backgrounds. The capabilities section uses similar line art in monochrome with subtle gradient accents, depicting API grids, infinity loops, webhook flows, and neural-network motifs. These graphics feel diagrammatic rather than decorative—appropriate for infrastructure software.

Code presentation is a first-class visual element, not an afterthought. The code block uses a dark chrome with rounded corners, syntax highlighting in muted pastels, and a three-dot window control motif that reinforces the IDE metaphor. This treatment elevates the SDK from supporting content to primary visual interest.

The overall density is moderate: ample whitespace in light sections, tighter packing in dark technical areas. Border radii are restrained at 0.75rem for panels and 0.5rem for buttons, avoiding the overly friendly super-rounded aesthetic while maintaining contemporary polish.

## Components

### Primary Action Button
- **Anatomy**: Text label centered within a rectangular button
- **Surface**: Solid `ink` fill with `canvas` text
- **Typography**: `{typography.label}` at Geist Semibold
- **Shape**: `borderRadius: {rounded.button}` with no visible border
- **Spacing**: Padding of 0.75rem vertical, 1.5rem horizontal
- **Composition**: Typically appears inline with secondary actions or standalone in hero areas

### Secondary Action Button
- **Anatomy**: Text label within a bordered rectangular button
- **Surface**: `canvas` fill with `ink` text and `border-subtle` hairline border
- **Typography**: `{typography.label}` at Geist Semibold
- **Shape**: `borderRadius: {rounded.button}`
- **Spacing**: Same padding as primary action
- **Variants**: May include gradient text treatment for special CTAs like "Read all case studies"

### Feature Card (Light)
- **Anatomy**: Top text block with title and description, bottom illustration area
- **Surface**: `canvas` background with `border-subtle` 1px border
- **Typography**: Title uses `{typography.label}`, description uses `{typography.body}`
- **Shape**: `borderRadius: {rounded.panel}`
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Equal-width columns in grid, illustrations centered below text

### Feature Card (Dark)
- **Anatomy**: Title and description at top, line-art illustration below
- **Surface**: `surface-dark` background with near-black border
- **Typography**: Title in `canvas` at `{typography.label}`, description in muted light gray at `{typography.body}`
- **Shape**: `borderRadius: {rounded.panel}`
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Two-column or four-column grid layouts

### Code Block
- **Anatomy**: Window chrome with three dots, scrollable code area with syntax highlighting
- **Surface**: Near-black background (#0d0d0d) with subtle border
- **Typography**: `{typography.code}` with color-coded tokens (pink imports, green strings, blue functions, gray comments)
- **Shape**: `borderRadius: {rounded.panel}`
- **Spacing**: Internal padding approximately 1.5rem
- **Composition**: Often paired with descriptive text in adjacent column

### Company Tab
- **Anatomy**: Logo or company name in pill-shaped container
- **Surface**: Active state uses solid `ink` fill with `canvas` text/logo; inactive uses transparent background with `muted-ink` text
- **Typography**: `{typography.body-medium}` for text labels
- **Shape**: `borderRadius: {rounded.pill}` for active state, no radius for inactive
- **Spacing**: Horizontal padding approximately 1rem, vertical 0.5rem
- **Composition**: Horizontal row above testimonial cards, one active at a time

### Testimonial Card
- **Anatomy**: Large quotation, supporting paragraph, avatar circle with name and title
- **Surface**: `canvas` background with `border-subtle` border
- **Typography**: Quote uses `{typography.section-display}` at reduced size or `{typography.label}` depending on emphasis; body uses `{typography.body}`; attribution uses `{typography.body-medium}`
- **Shape**: `borderRadius: {rounded.panel}`
- **Spacing**: Generous internal padding, 2.5rem
- **Composition**: Horizontal scroll or carousel, partial visibility of adjacent cards suggests swipeability

## Responsive behavior

The design appears optimized for desktop presentation based on visible layouts, with several patterns that will require adaptation for smaller viewports. The hero's two-column code panel should stack vertically on narrow screens, with the capability list above the code sample to maintain narrative flow. Feature grids at three and four columns will need to collapse to single-column scrolling or two-column layouts at tablet widths, preserving card proportions and internal spacing.

Typography scales down by one step for mobile: hero-display to 2.25rem, section-display to 1.75rem. Body text remains at 1rem for readability. The code block requires horizontal scrolling rather than text wrapping to preserve formatting integrity. Tab interfaces for company selection should become horizontally scrollable pill lists, avoiding the cramped multi-row wrapping that destroys the single-selection metaphor.

Dark sections maintain their immersive quality across breakpoints but may reduce vertical padding by 25-30% to respect mobile viewport constraints. Light sections with testimonial carousels should support touch swiping with visible pagination indicators.

## Practical implementation guidance

### Preserve
- The strict dark/light section alternation that creates visual rhythm and thematic progression
- Geist's tight tracking on headlines; loosening it destroys the contemporary developer-tool character
- Fira Code's exclusive use in code contexts; mixing it into UI text undermines its signaling power
- The syntax highlighting palette: pink for keywords, green for strings, blue for functions, gray for comments
- Subtle 1px borders on light cards; removing them causes cards to float without definition

### Avoid
- Adding chromatic colors to UI elements; the near-monochrome system is intentional and effective
- Rounding corners beyond 0.75rem; the current restraint communicates precision
- Using gradients as backgrounds for text containers; they are reserved for decorative illustrations
- Shrinking body text below 1rem; Inter at 16px is the minimum for comfortable reading
- Stacking multiple dark sections without light interludes; the contrast rhythm is essential

### Recommended Build Order
1. Establish the dark/light section framework with full-bleed backgrounds and 6rem vertical spacing
2. Implement the type hierarchy with Geist headlines and Inter body, verifying weights load correctly
3. Build the code block component with proper syntax highlighting and window chrome
4. Create both light and dark feature card variants with consistent internal spacing
5. Implement the tab system for company logos with active/inactive state logic
6. Add gradient illustrations last, ensuring they degrade gracefully if assets load slowly

### Accessibility
- Ensure code blocks have `tabindex` and keyboard scrollability; developers often navigate by keyboard
- Provide visible focus indicators on the dark backgrounds that exceed 3:1 contrast against #0a0a0a
- Test the gradient text treatment on the "Read all case studies" button for color-blind visibility; consider a non-gradient fallback
- Maintain 4.5:1 contrast for all body text; the `muted-ink` on `canvas` pairing should be verified
- Add `prefers-reduced-motion` support for any carousel or tab transitions

## Scope note

This guide covers the homepage and pricing page surfaces visible in the supplied images, including hero, feature grids, capabilities, and testimonial sections. Navigation, footer, form states, mobile layouts, and animation behavior are not represented in the available material. Open Sans is present in the font inventory but not visibly used in the captured interface. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid.
