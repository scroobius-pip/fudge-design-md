# How jwt.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jwt.io-design)

Last updated: 2026-08-10

## Captured pages

[![JWT Handbook promotional banner with gradient background, download CTA, and three-column resource grid with badge and logotype cards](https://pin.fontofweb.com/3955?format=jpg)](https://design.withfudge.com/share/pin-3955)

[JWT Handbook promotional banner with gradient background, download CTA, and three-column resource grid with badge and logotype cards](https://design.withfudge.com/share/pin-3955)

[![JWT Debugger interface with encoded token editor, decoded header and payload panels, signature verification section, and warning banners](https://pin.fontofweb.com/3954?format=jpg)](https://design.withfudge.com/share/pin-3954)

[JWT Debugger interface with encoded token editor, decoded header and payload panels, signature verification section, and warning banners](https://design.withfudge.com/share/pin-3954)

## Overview

The jwt.io interface is a dark-mode developer tool built around a functional JWT debugger. The visual system prioritizes code readability and task clarity over decorative elements. A near-black canvas establishes immersion, while elevated surface panels create clear containment for encoded tokens, decoded JSON, and signature verification inputs. Purple serves as the primary action color, appearing in buttons, tab indicators, and promotional banners. The interface balances dense information display with breathable spacing, using a three-column grid for resource discovery and a two-column split for the debugging workflow. Typography distinguishes hierarchy through family selection rather than weight alone: Aeonik for section headings, Inter for interface text, and Roboto Mono for all code and token display. The overall impression is of a specialized technical tool—precise, trustworthy, and visually restrained.

## Colors

The color system is built on a dark foundation with functional accents for status and action. Every token derives from visible interface elements.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Page background, deepest layer |
| surface | #141414 | Card backgrounds, panel containers |
| surface-elevated | #1a1a1a | Input fields, elevated hover states |
| ink | #ffffff | Primary text, headings, active labels |
| ink-muted | #a0a0a0 | Secondary text, descriptions, inactive tabs |
| action | #6366f1 | Primary buttons, active tab indicators, promotional gradients |
| action-hover | #818cf8 | Button hover states, link hover |
| success | #22c55e | Valid JWT indicators, verified signatures, success messages |
| warning | #eab308 | Security banner text, caution highlights |
| border | #262626 | Panel borders, dividers, input outlines |
| code-header | #1e3a5f | Information banner background (JWT description) |
| code-payload | #1a1a1a | Decoded JSON panel background |
| code-signature | #0f2818 | Signature verification valid-state background |

The dark palette serves two purposes: reducing eye strain during extended debugging sessions and creating high contrast for syntax-highlighted code. The purple action color (#6366f1) appears in gradient form in promotional banners, transitioning from deep blue through purple to violet. Status colors are applied with restraint—green appears only for validation states, yellow only for security warnings. Borders remain subtle at #262626, providing definition without visual weight. The code-specific surface colors (code-header, code-payload, code-signature) create subtle differentiation between functional zones without breaking the overall dark continuity.

## Typography

The type system uses three families with distinct roles. Aeonik, designed by Mark Bloom and Joe Leadbeater at Co Type Foundry, handles display and heading text. Inter, designed by Rasmus Andersson, covers all interface and body text. Roboto Mono, from Google, is reserved for code and token display. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Aeonik | 2rem | 500 | 1.2 | -0.02em | Page title, major section headings |
| section-display | Aeonik | 1.5rem | 500 | 1.3 | -0.01em | Card titles, sub-section headings |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, button labels |
| label | Inter | 0.75rem | 500 | 1.4 | 0.05em | Section labels, tab text, metadata |
| navigation | Inter | 0.875rem | 400 | 1 | 0 | Top navigation links |
| code | Roboto Mono | 0.875rem | 400 | 1.6 | 0 | Encoded tokens, JSON display |
| code-small | Roboto Mono | 0.75rem | 400 | 1.5 | 0 | Compact code, inline values |

Font sizing follows a 4px base grid (0.25rem steps). Display sizes use negative tracking for tighter, more impactful headlines. The code family at 0.875rem maintains readability for dense token strings while preserving character distinction critical for debugging. Labels use uppercase transformation with positive tracking for scanability in dense interfaces.

## Layout

The layout follows a centered container model with responsive internal grids. The debugger interface uses a two-column split: the left column contains the encoded JWT input panel, while the right column stacks decoded header, decoded payload, and signature verification panels. This asymmetry reflects the workflow—encoding is a single action, while decoding produces multiple outputs.

The resource sections below the debugger employ a three-column grid for equal-weight content blocks. Each column contains a heading, description, and action or card stack. Column gaps use 1.5rem, with section vertical spacing at 4rem.

Panel padding is consistently 1.5rem internally. Code panels use additional internal structure: a header bar with panel title and action buttons, followed by content area with syntax highlighting. The encoded value panel spans full column width with generous vertical space for multi-line tokens.

Navigation sits at the top in a full-width bar, left-aligned with logo and right-aligned with link cluster. A thin border separates navigation from content. Promotional banners break the grid with full-bleed gradient backgrounds, containing left-aligned text and right-aligned imagery.

## Visual language

The visual character is technical and trustworthy, with restrained decoration. Rounded corners are modest—0.5rem for panels, 0.375rem for buttons—softening the interface without appearing casual. Shadows are minimal or absent; depth is created through surface color layering rather than elevation effects.

The JWT brand mark appears as a colorful geometric pinwheel, providing the only multicolor element in an otherwise disciplined palette. This mark scales from navigation favicon to card thumbnail to promotional banner illustration.

Code presentation is central to the visual identity. Syntax highlighting uses color-coded tokens: strings in light blue, keys in white, values in varying hues, with the encoded token string itself displaying segment colors (header in brown, payload in blue, signature in green) to visually reinforce JWT structure. Monospace alignment and consistent indentation create scannable patterns.

Promotional content breaks the utilitarian tone with gradient backgrounds transitioning from deep teal through blue to purple, introducing warmth and visual interest without disrupting the functional aesthetic.

## Components

### Primary button
- **Anatomy**: Text label with optional right arrow icon
- **Surface**: Solid action purple (#6366f1) background
- **Typography**: body-small token, white ink
- **Shape**: 0.375rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Inline-flex with icon trailing text by 0.5rem
- **Variants**: Arrow variant for external links; plain text for simple actions

### Secondary button
- **Anatomy**: Text label only
- **Surface**: Transparent background with border (#262626)
- **Typography**: body-small token, white ink
- **Shape**: 0.375rem border radius
- **Spacing**: Matches primary button
- **Composition**: Standalone or grouped with primary

### Code panel
- **Anatomy**: Header bar with title and action buttons; content area below
- **Surface**: surface token background, border token outline
- **Typography**: Header uses label token (uppercase, tracked); content uses code token
- **Shape**: 0.5rem border radius
- **Spacing**: 1.5rem internal padding; header actions right-aligned
- **Composition**: Full-width within column; stacked vertically with sibling panels
- **Variants**: Encoded value panel (taller, with validation status bar); decoded panels (with JSON/Claims Table tabs); signature panel (with secret input field)

### Warning banner
- **Anatomy**: Dismissible banner with text content and close control
- **Surface**: Dark amber background (#2a1f00), warning text color
- **Typography**: body-small token
- **Shape**: 0.5rem border radius
- **Spacing**: 1rem vertical padding, 1.5rem horizontal padding
- **Composition**: Full-width, positioned above primary content
- **Variants**: Info variant uses code-header background for neutral announcements

### Tab group
- **Anatomy**: Horizontal text labels with active indicator
- **Surface**: Transparent background
- **Typography**: label token
- **Composition**: Left-aligned cluster with 1.5rem gap; active state shows bottom border in action color
- **States**: Active (white text, action underline); inactive (muted text, no underline)

### Resource card
- **Anatomy**: Thumbnail image, title, download action
- **Surface**: surface token background, border token outline
- **Typography**: Section title in section-display; badge text in label
- **Shape**: 0.5rem border radius
- **Spacing**: 1.5rem internal padding
- **Composition**: Thumbnail left-aligned, title and badge inline, download icon right-aligned

### Navigation bar
- **Anatomy**: Logo mark with text, link cluster, utility controls
- **Surface**: Transparent over canvas
- **Typography**: navigation token for links
- **Composition**: Flex row, space-between; logo left, links center-right, utilities far right

## Responsive behavior

The two-column debugger layout should stack vertically on narrow viewports, with encoded input preceding decoded outputs. The three-column resource grid should collapse to single column on mobile, maintaining card internal structure. Navigation links may collapse to a menu affordance when horizontal space is constrained. Code panels should remain full-width with horizontal scrolling for long token strings rather than text wrapping. The promotional banner gradient should maintain left-text/right-image composition but scale imagery proportionally.

## Practical implementation guidance

### Preserve
- The dark canvas with subtle surface elevation for panels
- Three-family typography hierarchy (Aeonik/Inter/Roboto Mono)
- Purple action color against dark backgrounds
- Syntax highlighting colors for JWT segment visualization
- Generous internal padding in code panels for readability
- Uppercase tracked labels for section headers and tabs

### Avoid
- Light mode implementations without complete palette inversion
- Border-radius larger than 0.5rem for panels (breaks technical tone)
- Non-monospace fonts for token or JSON display
- Multiple simultaneous warning banners (creates alert fatigue)
- Decorative shadows or glassmorphism effects

### Recommended build order
1. Establish dark canvas and surface color tokens
2. Implement typography scale with three families
3. Build code panel component with header/content structure
4. Create two-column debugger layout
5. Add syntax highlighting to encoded token display
6. Implement tab groups for JSON/Claims Table switching
7. Add warning and info banner variants
8. Build resource grid and promotional banner
9. Polish button states and navigation

### Accessibility
- Ensure code panels maintain minimum 4.5:1 contrast for syntax-highlighted text
- Provide visible focus indicators on all interactive elements (buttons, tabs, inputs)
- Add `aria-label` to icon-only download and copy buttons
- Consider a high-contrast mode for extended debugging sessions
- Validate that color alone does not convey status—pair success green with text labels

## Scope note

This guide covers the jwt.io homepage and JWT debugger interface as visible in the supplied images. Mobile breakpoints, animation, form validation states beyond the valid/invalid shown, and additional interior pages are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid.
