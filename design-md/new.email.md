# How new.email is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/new.email-design)

Last updated: 2026-08-10

## Captured pages

[![Chat interface with code preview showing a split-pane layout with dark theme, syntax-highlighted code, and message bubbles with brand kit tags](https://pin.fontofweb.com/7201?format=jpg)](https://design.withfudge.com/share/pin-7201)

[Chat interface with code preview showing a split-pane layout with dark theme, syntax-highlighted code, and message bubbles with brand kit tags](https://design.withfudge.com/share/pin-7201)

[![Hero landing page with centered headline, dark background with moon imagery, prompt input field, and template category pills](https://pin.fontofweb.com/7200?format=jpg)](https://design.withfudge.com/share/pin-7200)

[Hero landing page with centered headline, dark background with moon imagery, prompt input field, and template category pills](https://design.withfudge.com/share/pin-7200)

[![Full landing page with left sidebar navigation, hero section with prompt input, and footer attribution to Resend](https://pin.fontofweb.com/7199?format=jpg)](https://design.withfudge.com/share/pin-7199)

[Full landing page with left sidebar navigation, hero section with prompt input, and footer attribution to Resend](https://design.withfudge.com/share/pin-7199)

[![Pricing modal overlay with three-tier plan cards featuring gradient borders, feature lists, and testimonial quote below](https://pin.fontofweb.com/7198?format=jpg)](https://design.withfudge.com/share/pin-7198)

[Pricing modal overlay with three-tier plan cards featuring gradient borders, feature lists, and testimonial quote below](https://design.withfudge.com/share/pin-7198)

## Overview

new.email is an AI-powered email template builder that combines a cinematic dark aesthetic with functional design tools. The interface centers on a natural language prompt input that generates email templates, presented through either a conversational chat flow or direct code preview. The visual system relies on near-black backgrounds with carefully graded surface layers, creating depth without visual noise. Typography uses Inter at a single size for most interface elements, with dramatic scale jumps for hero headlines. The product's identity connects to Resend's developer-focused brand through monospace code displays, syntax highlighting, and a space-themed hero with lunar imagery. Component design favors pill-shaped buttons, rounded cards with subtle borders, and a persistent left sidebar for navigation between projects and tools.

## Colors

The color system operates on a dark-mode foundation with minimal chromatic variation. Interface colors serve functional roles rather than decorative ones, with accent colors reserved for code syntax and interactive states.

| token | hex | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #0A0C1B | Chat message bubbles, input fields |
| surface-elevated | #151516 | Card backgrounds, elevated panels |
| surface-highlight | #1A1C1D | Hover states, active selections |
| ink | #FFFFFF | Primary text, headlines, icons |
| ink-secondary | #F6F8FA | Secondary headings, emphasized body |
| ink-muted | #A1A1AA | Placeholder text, disabled states |
| ink-dim | #7A7B82 | Code comments, tertiary information |
| ink-subtle | #898989 | Captions, metadata |
| border | #242526 | Dividers, card outlines |
| border-accent | #1A1C1D | Focus rings, active borders |
| action | #FFFFFF | Primary button fill |
| action-text | #000000 | Text on primary buttons |
| accent-warm | #FFCC66 | Code strings, brand kit indicators |
| accent-blue | #AADDFF | Code tags, links |
| accent-purple | #BB88FF | Code attributes, decorative accents |
| success | #949698 | Checkmark icons, positive indicators |
| error | #999999 | Error states, invalid inputs |

The dark palette creates a focused workspace that reduces eye strain during extended use. Surface layers progress from pure black through deep navy-tinted grays, with #0A0C1B providing a subtle cool undertone that distinguishes interactive fields from the background. Code syntax uses a restrained triad of warm yellow, cool blue, and purple against the dark surface, maintaining readability without the visual chaos of full rainbow highlighting. White serves as the sole action color, creating high-contrast buttons that demand attention. The system avoids gradients in UI surfaces except for the pricing card borders, where a subtle linear gradient from #151516 to #020304 creates dimensional depth. The #949698 and #999999 grays serve specific functional roles for success and error indicators, appearing in checkmark icons and form validation states.

## Typography

The type system uses Inter as the sole interface typeface, with System-Monospace for code displays. Weight and size variations create hierarchy rather than introducing additional families.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.5rem | 500 | 1 | -0.05em | Landing page headlines |
| section-display | Inter | 2.5rem | 500 | 1 | -0.05em | Section titles, pricing headers |
| card-display | Inter | 2rem | 400 | 1 | -0.05em | Large numbers, plan prices |
| body | Inter | 0.875rem | 400 | 1.43 | normal | Interface text, descriptions |
| body-large | Inter | 1rem | 400 | 1.5 | normal | Chat messages, longer content |
| label | Inter | 0.75rem | 500 | 1.33 | normal | Tags, metadata, captions |
| navigation | Inter | 0.875rem | 400 | 1.43 | normal | Sidebar items, header links |
| button | Inter | 0.875rem | 600 | 1.375 | normal | Button labels, actions |
| code | System-Monospace | 0.75rem | 400 | 1.5 | normal | Code blocks, syntax display |

Hero headlines at 56px use tight tracking and medium weight, creating an elegant, editorial presence that contrasts with the utilitarian body text. The 14px body size dominates the interface, appearing in navigation, buttons, descriptions, and most interactive elements. This single-size approach unifies the experience and reduces cognitive load. Code displays at 12px monospace provide dense information display in the preview pane. Semibold weight (600) appears exclusively on buttons and active navigation items, creating clear interactive affordances. Verify licensing for these families before production use.

## Layout

The interface employs two primary layout modes: a centered landing experience and a split-pane application workspace.

The landing page uses a full-viewport centered composition with the hero headline and prompt input occupying the vertical middle. A persistent left sidebar provides navigation between email projects, brand kits, and account settings. The sidebar is narrow, icon-driven, with tooltips or labels appearing on interaction. Below the main prompt area, horizontal rows of pill-shaped template categories allow quick selection without typing.

The chat interface divides the screen into two primary zones: a conversation thread on the left and a live code preview on the right. The conversation pane shows message bubbles with user prompts and AI responses, including preview cards for generated templates. The code pane displays syntax-highlighted React code with line numbers and collapsible sections. A bottom input bar spans the conversation side, with attachment and brand kit selectors.

Spacing follows a 2px base unit, with common increments at 4px, 8px, 12px, 16px, 24px, 32px, and 48px. Section spacing uses 80px to 120px for major divisions. The pricing page shows a three-column card layout with 28px internal padding and 24px gaps between cards.

## Visual language

The aesthetic combines developer-tool minimalism with cinematic atmosphere. The space theme appears through a dark, star-speckled background with a prominent moon or planetary body in the hero section, creating an aspirational, expansive mood without literal space imagery elsewhere in the interface.

Visual depth comes from layered surfaces rather than shadows. Cards and panels use subtle border definitions at #242526 rather than drop shadows, maintaining the flat, modern aesthetic. The exception is a single shadow instance on modal overlays: a layered shadow stack creating soft ambient depth.

Code presentation is a core visual element. Syntax highlighting uses the accent triad consistently: yellow for strings and values, blue for HTML tags and links, purple for attributes and properties. Comments fade to #7A7B82. This color logic extends to the brand kit indicators, where colored dots use the same accent palette to signal active design systems.

Iconography is simple and functional, using line-style icons at 16px and 20px sizes. The Resend logo mark appears as a white geometric shape in the header and sidebar. Template category pills combine icons with text labels, using consistent 8px padding and 12px border radius.

## Components

### Prompt input

The central interaction element on the landing page and in the chat interface.

- **Anatomy**: Textarea field with placeholder text, attachment button (chain link icon), brand kit selector pill, submit button (circular with up-arrow icon)
- **Surface**: Background `{colors.surface}`, border 1px solid `{colors.border}`
- **Typography**: `{typography.body}` for placeholder, `{typography.label}` for brand kit name
- **Shape**: `{rounded.input}` border radius, full-width with max-width constraint
- **Spacing**: 16px padding, 12px internal gaps between elements
- **Composition**: Horizontal flex layout with textarea expanding, actions pinned to bottom edge

### Template category pill

Quick-action buttons below the prompt input.

- **Anatomy**: Icon (16px) + text label, optional close button on active state
- **Surface**: Background transparent, border 1px solid `{colors.border}`; active state fills `{colors.surface-highlight}`
- **Typography**: `{typography.button}`
- **Shape**: `{rounded.pill}` full pill radius
- **Spacing**: 8px vertical padding, 10px horizontal padding, 8px gap between pills
- **Composition**: Horizontal scrollable row with 8px gaps

### Chat message bubble

Conversation display in the application interface.

- **Anatomy**: Avatar icon, message text, optional preview card attachment
- **Surface**: User messages use `{colors.surface}` background; AI responses use transparent background
- **Typography**: `{typography.body-large}` for content, `{typography.label}` for metadata
- **Shape**: Asymmetric corners—16px 16px 8px for user bubbles, 16px 8px 16px 16px for AI bubbles
- **Spacing**: 16px padding, 24px vertical margins between messages
- **Composition**: Stacked vertical layout with left-aligned avatar

### Code preview panel

Live syntax-highlighted display of generated email code.

- **Anatomy**: Line numbers, code content, collapsible section headers, copy/download actions
- **Surface**: Background `{colors.canvas}`, text colors from syntax palette
- **Typography**: `{typography.code}`
- **Shape**: 20px panel radius, 8px internal code block radius
- **Spacing**: 16px panel padding, 18px left indent for line numbers
- **Composition**: Full-height scrollable panel with sticky header actions

### Pricing card

Plan selection cards in the upgrade modal.

- **Anatomy**: Plan name, subtitle, price display, CTA button, feature checklist
- **Surface**: Background `{colors.surface-elevated}`, border 1px solid with linear gradient from `{colors.surface-elevated}` to #020304
- **Typography**: `{typography.section-display}` for price, `{typography.body}` for features, `{typography.button}` for CTA
- **Shape**: `{rounded.modal}` border radius
- **Spacing**: 28px internal padding, 24px bottom padding for feature lists
- **Composition**: Vertical stack with centered alignment, equal-width columns in grid
- **Variants**: Free (muted CTA), Pro (filled white CTA), Enterprise (outline CTA)

### Sidebar navigation

Persistent left-edge navigation.

- **Anatomy**: Logo mark at top, icon buttons for primary sections, user avatar at bottom
- **Surface**: Background `{colors.canvas}`, icons in `{colors.ink}` or `{colors.ink-dim}` inactive state
- **Typography**: Tooltips use `{typography.label}`
- **Shape**: `{rounded.button}` radius on interactive items
- **Spacing**: 4px padding on icon buttons, 16px vertical section gaps
- **Composition**: Vertical flex with space-between distribution

### Button

Primary and secondary action triggers.

- **Anatomy**: Text label, optional icon prefix
- **Surface**: Primary fills `{colors.action}` with `{colors.action-text}` text; secondary fills transparent with `{colors.ink-secondary}` text and `{colors.border-accent}` border; tertiary uses `{colors.ink-secondary}` text on transparent
- **Typography**: `{typography.button}`
- **Shape**: `{rounded.button}` for standard, 14px radius for small icon buttons, 10px for outline variants
- **Spacing**: 8px vertical, 16px horizontal standard; 8px 10px for compact; 4px for icon-only
- **Composition**: Centered flex with 8px icon-text gap
- **States**: Hover inverts or lightens background; disabled reduces opacity

## Responsive behavior

The split-pane chat interface should collapse to a single column on viewports below 1024px, with the code preview accessible through a toggle tab. The landing page prompt input maintains its centered position but expands to full width with 16px side margins on mobile. Template category pills should horizontally scroll rather than wrap. The pricing grid collapses from three columns to a single stacked column on narrow viewports, with the Pro plan featured at top. Sidebar navigation transforms to a bottom tab bar on mobile devices, preserving the same icon set. Font sizes remain fixed; the hero headline may wrap to two lines with adjusted line height. Touch targets should maintain minimum 44px height for all interactive elements.

## Practical implementation guidance

### Preserve
- The near-black background with subtle surface elevation through border color rather than shadow
- Single-font hierarchy using weight and size exclusively within Inter
- Asymmetric message bubble corners that indicate message directionality
- Syntax highlighting palette consistency across all code displays
- Full-pill radius on category selectors and compact buttons

### Avoid
- Light mode implementations without complete palette inversion
- Additional font families beyond Inter and System-Monospace
- Drop shadows on static cards and panels
- Rounded corners larger than 32px on any surface
- Colorful backgrounds outside the code syntax and brand kit indicators

### Recommended build order
1. Establish the dark canvas and surface color stack
2. Implement Inter at 14px/400 as the foundational text style
3. Build the prompt input component with its internal layout
4. Create the split-pane layout structure for the chat interface
5. Add syntax highlighting with the defined accent triad
6. Implement the pricing card with gradient border treatment
7. Polish interaction states and responsive breakpoints

### Accessibility
- Ensure all text meets WCAG AA contrast against #000000 backgrounds (white and #F6F8FA pass; #7A7B82 does not for small text)
- Provide visible focus indicators using #AADDFF or #FFFFFF outlines
- Maintain keyboard navigation order in the split-pane layout
- Add aria-labels to icon-only sidebar buttons
- Respect reduced-motion preferences for any transitions

## Scope note

This guide covers the landing page, chat interface, and pricing modal visible in the supplied images. The sign-up flow, brand kit management pages, and mobile-specific adaptations are not fully represented. Email template rendering and export functionality fall outside the current scope. Measurements are exact values from the retained interface records.
