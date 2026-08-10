# How jsfiddle.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jsfiddle.net-design)

Last updated: 2026-08-10

## Captured pages

[![Main editor interface showing four-pane layout with dark theme, left sidebar navigation, and boilerplate chips in the result panel](https://pin.fontofweb.com/8168?format=jpg)](https://design.withfudge.com/share/pin-8168)

[Main editor interface showing four-pane layout with dark theme, left sidebar navigation, and boilerplate chips in the result panel](https://design.withfudge.com/share/pin-8168)

[![PRO membership modal with feature list, company logos, and orange Join as PRO button on dark background](https://pin.fontofweb.com/8167?format=jpg)](https://design.withfudge.com/share/pin-8167)

[PRO membership modal with feature list, company logos, and orange Join as PRO button on dark background](https://design.withfudge.com/share/pin-8167)

[![Expanded AI Code Completion sidebar panel with API key input and explanatory text blocks](https://pin.fontofweb.com/8166?format=jpg)](https://design.withfudge.com/share/pin-8166)

[Expanded AI Code Completion sidebar panel with API key input and explanatory text blocks](https://design.withfudge.com/share/pin-8166)

[![Coder Fonts modal overlay displaying monospace font specimens with syntax-highlighted code samples](https://pin.fontofweb.com/8165?format=jpg)](https://design.withfudge.com/share/pin-8165)

[Coder Fonts modal overlay displaying monospace font specimens with syntax-highlighted code samples](https://design.withfudge.com/share/pin-8165)

## Overview

JSFiddle is a browser-based code playground built around a dark, high-contrast editing environment. The interface prioritizes code readability through generous panel sizing, minimal chrome, and careful typographic hierarchy that separates interface labels from editable content. The design language leans into developer-tool aesthetics: near-black backgrounds, warm amber accents for primary actions, and a monospace font family for all code surfaces. The layout is anchored by a persistent left sidebar that provides navigation, tools, and account access, while the main workspace uses a configurable multi-pane grid for HTML, CSS, JavaScript, and live results. Visual density is intentionally low in the editing areas, with subtle borders and no heavy shadows, letting syntax highlighting and the code itself carry the visual interest.

## Colors

The color system is built on a dark-mode foundation with a narrow, purposeful accent palette. Warm amber draws attention to actions and PRO features, while a muted teal appears in status indicators and secondary highlights. Coral red serves as an error or warning accent. The overall approach maximizes contrast for code readability while keeping interface elements visually quiet.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Deepest background layer, sidebar base |
| surface | `#121212` | Editor panels, main workspace background |
| surface-elevated | `#212121` | Modal panels, elevated cards, chip backgrounds |
| ink | `#EDEDED` | Primary text, headings, active navigation |
| ink-muted | `#C6C6C6` | Secondary text, descriptions, placeholder content |
| ink-inverse | `#FFFFFF` | Text on action buttons, high-emphasis labels |
| action | `#E9A530` | Primary buttons, PRO badges, run actions |
| action-hover | `#F9F9F9` | Hover state for action elements |
| accent-teal | `#57A3AB` | Status indicators, secondary highlights |
| accent-coral | `#F6797E` | Error states, warnings, destructive actions |
| border-subtle | `#212121` | Panel dividers, hairline separators |

The dark hierarchy runs from pure black through `#121212` to `#212121`, creating depth without introducing color temperature shifts. The amber action color appears sparingly and always signals interactivity or premium status. White text is reserved for the highest-priority interactive elements, while `#EDEDED` handles the bulk of readable content.

## Typography

The type system pairs Inter for all interface text with Monaspace Argon for code surfaces. This creates clear functional separation: the humanist sans-serif handles navigation, labels, and marketing content, while the monospace font ensures code alignment and character distinction in editors. Weights range from 400 to 800, with 500 serving as the medium emphasis tier for sidebar headings and selected states. The design also includes System-Systemui as a system-ui fallback family that appears in some sidebar interface elements.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2.0625rem | 800 | 1.4 | -0.03em | Modal headlines, marketing headings |
| section-heading | Inter | 1.0625rem | 700 | 1.2 | normal | Panel titles, feature names |
| body | Inter | 0.875rem | 400 | 1.5 | normal | Descriptions, navigation items, general content |
| body-small | Inter | 0.75rem | 400 | 1.5 | normal | Chips, metadata, secondary labels |
| label | Inter | 0.625rem | 700 | 1.2 | 0.1em | Badges, category tags, uppercase labels |
| navigation | Inter | 0.875rem | 400 | 1 | normal | Sidebar menu items, header links |
| code | Monaspace Argon | 0.75rem | 400 | 1.67 | normal | Editor content, code samples, terminal text |

Monaspace Argon is designed by Riley Cran and The Lettermatic Team. Verify licensing for these families before production use.

## Layout

The interface follows a fixed sidebar plus fluid main area pattern. The left sidebar maintains a consistent width and contains the primary navigation hierarchy, user tools, and promotional content. The main workspace occupies the remaining viewport and implements a configurable grid of editor panels.

The sidebar structure stacks vertically: a header with logo and document status, followed by collapsible navigation sections, tool-specific panels that expand inline, and a footer with authentication and advertising. Sections are separated by generous vertical spacing rather than visible rules, creating a clean scan path.

The main workspace defaults to a four-pane grid: HTML and CSS across the top, JavaScript and Result across the bottom. Each panel is a distinct editing surface with its own header containing a language label and optional controls. Panel headers sit flush against the content area with a thin accent underline indicating the active or focused panel. The Result panel includes a boilerplate suggestion area with horizontally wrapping chips when empty.

Modal overlays center above the workspace, dimming the underlying interface with a dark scrim. The modal panel uses rounded corners and internal padding to separate from the editor aesthetic, signaling a context shift.

Spacing follows a base unit of `0.125rem` (2px), with practical increments at `0.5rem`, `0.625rem`, `0.875rem`, `1rem`, `1.75rem`, and `2.1875rem`. Panel gutters and borders are minimal, typically `0.125rem`, preserving screen real estate for code.

## Visual language

The visual character is restrained and functional, appropriate for a tool where users spend extended periods reading and writing code. Surfaces are flat with no gradients; depth is achieved through background color steps rather than shadows. The only shadow in the system is a subtle inset highlight used for status indicators.

Interactive elements communicate state through color and weight changes rather than background shifts. Navigation items use `#EDEDED` at 400 weight normally, and shift to white or gain a selection indicator when active. Buttons are filled for primary actions and text-only for secondary navigation.

Code surfaces use syntax highlighting with a consistent theme across all panels: keywords in warm tones, strings in greens, functions in blues, and comments in muted grays. The Monaspace Argon font includes coding ligatures that activate for arrow functions, equality operators, and other common patterns.

Iconography is simple and monochrome, matching the navigation text color. Status badges like "PRO" and "NEW" use small rounded rectangles with high-contrast text, sitting inline with their associated labels. The orange "Run" button in the header breaks the monochrome pattern intentionally, marking the most frequent user action.

## Components

### Editor Panel

An editor panel is the core workspace unit, containing a header and content area.

- **Anatomy**: Panel header with language name (HTML, CSS, JavaScript, Result), optional dropdown for language switching, and panel controls. Content area is a monospace editing surface or rendered output.
- **Surface**: Background `{colors.surface}`, header text `{colors.ink}` at `{typography.section-heading}` weight.
- **Typography**: Panel title uses Inter 700 at `1.0625rem`. Editor content uses Monaspace Argon at `0.75rem` with `1.67` line height.
- **Shape**: No border radius; panels meet at hard edges with `0.125rem` gutters.
- **Spacing**: Header padding `0.625rem` horizontal, `0.5rem` vertical. Content area fills remaining space with `0.875rem` internal padding.
- **Composition**: Panels tile in a 2x2 grid by default. The active panel shows an accent underline in the header.
- **Variants**: Result panel shows boilerplate chips when empty. JavaScript panel may show console output below the editor.

### Sidebar Navigation

The persistent left navigation provides access to tools, history, and account features.

- **Anatomy**: Logo and document status at top, followed by collapsible sections (AI Code Completion, Your recent fiddles, Collections, Resources, Async requests, Changelog), then JSFiddle Apps section, then authentication footer.
- **Surface**: Background `{colors.canvas}`, text `{colors.ink}`.
- **Typography**: Section headings use Inter 500 at `0.875rem`. Items use Inter 400 at `0.875rem`. Badges use `{typography.label}`.
- **Shape**: No border radius on the container. Individual interactive items use `0.5rem` radius.
- **Spacing**: Section padding `1.75rem` top, `0.625rem` horizontal. Item padding `0.625rem` vertical, `0.875rem` horizontal.
- **Composition**: Vertical stack with `1rem` gap between sections. Inline badges sit to the right of labels.
- **Variants**: Expanded sections reveal additional content with `0.875rem` internal padding. The AI Code Completion panel shows input fields and explanatory paragraphs when open.

### Action Button

Primary buttons use the amber accent for high visibility against dark backgrounds.

- **Anatomy**: Text label with optional icon prefix.
- **Surface**: Background `{colors.action}`, text `{colors.ink-inverse}`.
- **Typography**: Inter 700 at `0.75rem`.
- **Shape**: `0.5rem` border radius.
- **Spacing**: Padding `0.625rem 1rem`.
- **Composition**: Inline in headers or block-width in modals.
- **Variants**: The "Run" button includes a circular arrow icon. The "Join as PRO" button spans full modal width.

### Chip

Small, pill-like tags for boilerplate suggestions and categorization.

- **Anatomy**: Text label only.
- **Surface**: Background `{colors.surface-elevated}`, text `{colors.ink}`.
- **Typography**: Inter 400 at `0.75rem`.
- **Shape**: `0.625rem` border radius.
- **Spacing**: Padding `0.375rem 0.75rem`, margin `0.375rem` between chips.
- **Composition**: Horizontal wrap layout in the Result panel empty state.

### Modal Overlay

Centered dialogs for feature marketing and tool selection.

- **Anatomy**: Close button in top-right, headline, body content, and optional action button.
- **Surface**: Scrim at `rgba(0,0,0,0.85)`, panel at `{colors.surface-elevated}`.
- **Typography**: Headline uses `{typography.hero-display}`. Body uses `{typography.body}`.
- **Shape**: Panel at `0.5rem` border radius.
- **Spacing**: Panel padding `1.75rem`. Internal gaps `1.25rem`.
- **Composition**: Centered with maximum width constraint. The PRO modal splits into feature list (left) and social proof with action (right).

### Code Specimen Card

Used in the Coder Fonts modal to preview monospace fonts.

- **Anatomy**: Font name header with designer credit, license badge, and syntax-highlighted code block.
- **Surface**: Background `{colors.surface}`, border `1px solid {colors.border-subtle}`.
- **Typography**: Font name in Inter 700 at `0.875rem`. Code sample in the displayed font at `0.75rem`.
- **Shape**: `0.5rem` border radius.
- **Spacing**: Padding `1rem`. Gap between cards `1rem`.
- **Composition`: Two-column grid within the modal, responsive to single column on narrow viewports.

## Responsive behavior

The interface is optimized for desktop use with a minimum effective width. The sidebar may collapse to icons or hide entirely on narrower viewports, though the current design assumes sufficient horizontal space for the four-pane editor grid. When space is constrained, the editor panels should stack vertically rather than tiling, preserving the code editing experience.

The modal system should remain centered with consistent padding, scrolling internally if content exceeds viewport height. Chip containers in the Result panel should wrap naturally without horizontal scrolling.

Touch targets for sidebar items and header controls should maintain a minimum `2.75rem` height for accessibility, even though the primary input mode is mouse and keyboard.

## Practical implementation guidance

### Preserve
- The strict dark mode palette; light surfaces should not be introduced.
- The functional separation between Inter (interface) and Monaspace Argon (code).
- The minimal border and shadow approach; rely on background color steps for hierarchy.
- The amber action color for primary buttons and PRO indicators only.
- The four-pane editor grid as the default workspace configuration.

### Avoid
- Adding gradients or decorative backgrounds behind code panels.
- Using the action amber for non-interactive elements or large background areas.
- Introducing additional font families beyond the established pair.
- Heavy borders or separators in the sidebar; use spacing to create grouping.
- Light mode variants unless specifically required; the dark theme is integral to the brand.

### Recommended Build Order
1. Establish the dark color tokens and apply to canvas and surface layers.
2. Implement the sidebar structure with navigation typography and spacing.
3. Build the four-pane editor grid with panel headers and monospace content areas.
4. Add the header bar with Run button and document status.
5. Implement modal system with overlay scrim and centered panels.
6. Add chip components for boilerplate suggestions.
7. Polish with syntax highlighting theme and interactive states.

### Accessibility
- Ensure code editor content meets WCAG AA contrast ratios against `#121212` backgrounds; the current `#EDEDED` text exceeds requirements.
- Provide keyboard navigation for all sidebar sections and modal controls.
- Add `aria-label` attributes to icon-only buttons in the header.
- Maintain focus indicators that are visible against dark surfaces; avoid relying solely on color for state communication.
- Respect `prefers-reduced-motion` for any panel transitions or modal animations.

## Scope note

This guide covers the JSFiddle editor interface, sidebar navigation, and modal overlays as visible in the supplied images. Mobile layouts, code execution behavior, user settings panels, and collaborative features are not represented. The syntax highlighting color theme is described functionally but not mapped to exact token values. System-Systemui appears in the retained font data as a system-ui fallback but is not visually distinguished from Inter in the interface.
