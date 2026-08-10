# How ollama.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ollama.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with centered llama mascot, install command block, and feature section with terminal mockup](https://pin.fontofweb.com/7505?format=jpg)](https://design.withfudge.com/share/pin-7505)

[Homepage hero with centered llama mascot, install command block, and feature section with terminal mockup](https://design.withfudge.com/share/pin-7505)

[![Pricing page with three-tier card layout, rounded SF Pro Rounded headings, and feature checklists](https://pin.fontofweb.com/7507?format=jpg)](https://design.withfudge.com/share/pin-7507)

[Pricing page with three-tier card layout, rounded SF Pro Rounded headings, and feature checklists](https://design.withfudge.com/share/pin-7507)

[![Model detail page with tag pills, code snippet tabs, applications list, and parameter size table](https://pin.fontofweb.com/7508?format=jpg)](https://design.withfudge.com/share/pin-7508)

[Model detail page with tag pills, code snippet tabs, applications list, and parameter size table](https://design.withfudge.com/share/pin-7508)

[![Feature section split layout with terminal window mockup and open models headline](https://pin.fontofweb.com/7506?format=jpg)](https://design.withfudge.com/share/pin-7506)

[Feature section split layout with terminal window mockup and open models headline](https://design.withfudge.com/share/pin-7506)

## Overview

The Ollama website presents a developer-tool aesthetic that balances technical credibility with approachable personality. The visual system centers on high-contrast black typography against white and near-white surfaces, punctuated by friendly rounded display headings in SF Pro Rounded that soften the otherwise utilitarian interface. Code and command-line content receive prominent treatment through monospace blocks with subtle background tints, reinforcing the product's CLI-first identity. The layout favors generous whitespace and clear hierarchical separation between marketing narrative and functional documentation. Navigation remains minimal and persistent, with a search bar anchoring the top center and primary actions appearing as pill-shaped buttons. Terminal window mockups with colored traffic-light dots serve as distinctive visual motifs that bridge the gap between product screenshot and decorative illustration.

## Colors

The palette is fundamentally monochrome with selective accent injections for functional tags and interactive states.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary headings, body text, navigation links |
| ink-secondary | #171717 | Primary button backgrounds, emphasized text |
| ink-tertiary | #262626 | Code block text, secondary content |
| muted-ink | #404040 | Tertiary text, metadata |
| muted-ink-secondary | #525252 | Subdued labels, helper text |
| muted-ink-tertiary | #737373 | Placeholder text, disabled states |
| canvas | #FFFFFF | Page background, card surfaces |
| surface | #FAFAFA | Alternate section backgrounds |
| surface-secondary | #F5F5F5 | Code block backgrounds, input fields |
| surface-tertiary | #E5E5E5 | Subtle dividers, inactive states |
| border | #D4D4D4 | Card borders, dividers, secondary button borders |
| border-secondary | #E5E7EB | Table row separators, subtle boundaries |
| action-primary-bg | #171717 | Download button, primary CTAs |
| action-primary-text | #FFFFFF | Text on primary buttons |
| action-secondary-bg | #FFFFFF | Outlined buttons, ghost actions |
| action-secondary-text | #171717 | Text on outlined buttons |
| action-secondary-border | #D4D4D4 | Border on outlined buttons |
| code-bg | #F5F5F5 | Inline and block code backgrounds |
| code-text | #262626 | Code content |
| tag-bg | #ECFEFF | Cyan-tinted capability tags |
| tag-text | #06B6D4 | Cyan tag text |
| tag-bg-secondary | #EEF2FF | Blue-tinted tags |
| tag-text-secondary | #2563EB | Blue tag text |
| tag-bg-tertiary | #DDF4FF | Indigo-tinted tags |
| tag-text-tertiary | #4F46E5 | Indigo tag text |

The color system operates in a single light mode. Dark text on light surfaces provides maximum readability for code documentation and technical content. Accent colors appear exclusively in small tag pills that denote model capabilities like "vision," "tools," or parameter sizes, preventing chromatic overload while maintaining scannability. The near-black ink tokens create subtle depth variation without introducing true grays that would dilute the crisp technical aesthetic.

## Typography

The type system pairs a distinctive rounded display face with neutral system sans-serif and monospace utilities.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | SF Pro Rounded | 3rem | 500 | 1 | normal | Homepage hero, page titles |
| section-display | SF Pro Rounded | 2.25rem | 500 | 1.11 | normal | Section headings, feature titles |
| card-display | SF Pro Rounded | 1.5rem | 600 | 1.33 | normal | Pricing tier names, card headers |
| body-large | System UI Sans Serif | 1.125rem | 400 | 1.56 | normal | Hero descriptions, navigation |
| body | System UI Sans Serif | 1rem | 400 | 1.5 | normal | Primary body text, table content |
| body-small | System UI Sans Serif | 0.875rem | 400 | 1.43 | normal | Feature lists, metadata |
| label | System UI Sans Serif | 0.8125rem | 500 | 1.23 | normal | Tags, badges, small labels |
| code | System UI Monospace | 0.8125rem | 400 | 1.5 | normal | Code blocks, commands |
| code-small | System UI Monospace | 0.75rem | 400 | 1.63 | normal | Inline code, terminal text |
| navigation | System UI Sans Serif | 1.125rem | 400 | 1.56 | normal | Top navigation links |

SF Pro Rounded delivers the brand's approachable personality at display sizes with its geometrically rounded letterforms. System UI Sans Serif handles all functional text with neutral clarity. System UI Monospace provides authentic terminal aesthetics for code samples and command documentation. The weight range stays restrained: 400 for body, 500 for labels and navigation, 600 for card headings, with SF Pro Rounded at 500 for section displays. Verify licensing for these families before production use.

## Layout

The layout follows a centered content model with maximum width constraints and generous vertical breathing room. The global navigation sits fixed at the top with the Ollama llama logo mark on the left, a centered search input, and account actions on the right. Content sections stack vertically with substantial section padding creating clear narrative breaks.

The homepage hero centers all elements—mascot illustration, headline, install command block, and supporting text—establishing immediate product identity. Below the hero, feature sections adopt asymmetric two-column layouts: text and calls-to-action on the left, terminal window mockups on the right. This split composition repeats with reversed emphasis for visual rhythm.

The pricing page organizes three equal-width cards in a horizontal row, each containing tier illustration, name, price, action button, and feature checklist. Cards maintain internal vertical rhythm with consistent spacing between price, button, and list items.

The model detail page uses full-width horizontal tables for parameter variants, with tabbed code snippet selectors above and application integration lists below. Tables employ minimal row separators without heavy borders.

Content containers appear to max out around 1200px with responsive margins. Section spacing of 6rem separates major page regions. Internal content gaps of 2rem maintain relationship between related elements without crowding.

## Visual language

The visual personality emerges from the tension between technical precision and friendly accessibility. The llama mascot—rendered as simple line art—appears in multiple contexts: the site favicon, homepage hero, and pricing tier illustrations. This consistent character reinforces brand recognition without overwhelming the functional interface.

Terminal window mockups serve as the primary decorative-meets-functional element. These simulated windows feature the classic red-yellow-green traffic light dots in the upper left corner, rounded corners, and monospace content. They bridge marketing and documentation by making abstract CLI interactions tangible and visually engaging.

Tag pills for model capabilities use fully rounded capsule shapes with pastel-tinted backgrounds and saturated text. The color coding creates immediate visual taxonomy: cyan for general capabilities, blue for scale variants, indigo for specialized features. These tags cluster horizontally with tight spacing, reading as a unified metadata block.

The overall density remains low. White space dominates, with content islands floating against the canvas. Borders are hairline-thin and light, providing subtle containment without visual weight. Shadows are absent; depth derives from spacing and background color shifts alone.

## Components

### Navigation bar

- **Anatomy**: Logo mark left, search input center, "Sign in" text link and "Download" pill button right
- **Surface**: Transparent background over page content, black text links
- **Typography**: `{typography.navigation}` for links, `{typography.body-large}` for search placeholder
- **Shape**: Full-width bar, search input with `{rounded.input}` pill shape
- **Spacing**: Links separated by 1.5rem margins, search centered with flex distribution
- **Composition**: Horizontal flex with space-between alignment

### Primary button

- **Anatomy**: Text label centered within pill container
- **Surface**: `{colors.action-primary-bg}` background, `{colors.action-primary-text}` text
- **Typography**: `{typography.body}` at 500 weight
- **Shape**: `{rounded.button}` full pill, padding 0.375rem 1rem
- **Spacing**: Compact horizontal padding, generous vertical touch target

### Secondary button

- **Anatomy**: Text label within bordered pill
- **Surface**: `{colors.action-secondary-bg}` background, `{colors.action-secondary-text}` text, `{colors.action-secondary-border}` border
- **Typography**: `{typography.body}` at 500 weight
- **Shape**: `{rounded.button}` full pill, 1px solid border
- **Variants**: "Download" in navigation uses this treatment; pricing CTA "Download" uses outlined style

### Code block

- **Anatomy**: Monospace text with optional copy button, language tabs above for multi-variant display
- **Surface**: `{colors.code-bg}` background, `{colors.code-text}` text
- **Typography**: `{typography.code}` for content, `{typography.label}` for tabs
- **Shape**: `{rounded.code-block}` corners, full-width within container
- **Spacing**: Padding 0.75rem 1rem internal, tabs as horizontal row with bottom border active indicator
- **Composition**: Tabs left-aligned, copy icon right-aligned within block

### Tag pill

- **Anatomy**: Text label within fully rounded capsule
- **Surface**: Variant backgrounds from tag color family, matching saturated text
- **Typography**: `{typography.label}` at 500 weight
- **Shape**: `{rounded.tag}` full pill
- **Spacing**: Padding 0.125rem 0.5rem, horizontal margin 0.5rem between tags
- **Variants**: Cyan for capabilities, blue for scale, indigo for features; all share identical geometry

### Pricing card

- **Anatomy**: Tier illustration, name, subtitle, price with period, action button, feature checklist
- **Surface**: `{colors.canvas}` background, `{colors.border}` 1px border, `{rounded.card}` corners
- **Typography**: `{typography.card-display}` for tier name, `{typography.body}` for description and features, `{typography.section-display}` for price figure
- **Shape**: `{rounded.card}` rounded rectangle, padding 2rem
- **Spacing**: 2rem internal padding, 1.5rem between major elements, checklist items with 0.75rem vertical spacing
- **Composition**: Vertical stack, button centered, checklist left-aligned with checkmark icons

### Feature section

- **Anatomy**: Heading, description, code/command block, link; paired with terminal mockup image
- **Surface**: Transparent or `{colors.surface}` background
- **Typography**: `{typography.section-display}` for heading, `{typography.body-large}` for description
- **Shape**: Terminal mockup with `{rounded.panel}` corners and traffic light dots
- **Spacing**: 2rem gap between text column and visual column
- **Composition**: Two-column grid, text left and visual right on homepage; reverses in some sections

### Data table

- **Anatomy**: Column headers, sortable rows, variant name with optional tag badge
- **Surface**: `{colors.canvas}` background, `{colors.border-secondary}` row separators
- **Typography**: `{typography.body}` for content, `{typography.label}` for header labels
- **Shape**: Full-width, no outer border, internal horizontal rules only
- **Spacing**: Row padding 0.75rem 1rem, header row with slightly increased padding

## Responsive behavior

The layout appears optimized for desktop viewing with centered content max-widths. The navigation search input collapses or scales on narrower viewports, while the two-column feature sections should stack vertically on tablet and mobile, placing terminal mockups below descriptive text. Pricing cards transition from three-column grid to single-column stack on narrow screens, maintaining internal spacing proportions. Code blocks remain horizontally scrollable rather than wrapping, preserving command-line readability. The homepage hero maintains centered alignment across breakpoints, with headline size scaling down proportionally. Table columns may hide or reflow on mobile, with parameter size and context columns potentially collapsing into expandable rows.

## Practical implementation guidance

### Preserve
- The distinctive SF Pro Rounded display type for all major headings; this is the primary brand differentiator
- High-contrast black-on-white typography for maximum code readability
- Terminal window mockups with traffic light dots as signature visual elements
- Generous whitespace between sections; the airy density is intentional
- Pill-shaped buttons and tags; avoid sharp corners on interactive elements
- Monospace treatment for all code and command references

### Avoid
- Heavy drop shadows or elevation effects; the design is flat and spatial
- Multiple accent colors outside the cyan-blue-indigo tag system
- Dense information packing; the low-density aesthetic supports developer scanning
- True black backgrounds; even the darkest surfaces remain warm near-blacks
- Serif typefaces or decorative fonts outside the specified families

### Recommended build order
1. Establish the typographic hierarchy with SF Pro Rounded and system fonts
2. Implement the navigation bar with search input and pill buttons
3. Build the code block component with tabs and copy functionality
4. Create tag pill variants with color-coded backgrounds
5. Develop the two-column feature section with terminal mockup
6. Implement pricing cards with checklist pattern
7. Add data tables for model variant display
8. Polish spacing scale and responsive breakpoints

### Accessibility
- Ensure code blocks have visible focus indicators for keyboard navigation
- Provide text alternatives for llama mascot illustrations and terminal mockups
- Maintain 4.5:1 contrast ratios for all body text; the black-on-white default exceeds this
- Tag pills should not rely solely on color; consider icons or text patterns for colorblind users
- Search input requires clear focus state and accessible labeling
- Pricing feature lists use checkmark icons; ensure these have appropriate aria labeling

## Scope note

This guide covers the homepage, pricing, and model detail page surfaces visible in the supplied images. Mobile breakpoints, dark mode, loading states, form validation, and interactive hover transitions are not represented. The spacing and radius values derive from the documented pixel measurements converted to the relative unit scale. Verify licensing for SF Pro Rounded and system font families before production use.
