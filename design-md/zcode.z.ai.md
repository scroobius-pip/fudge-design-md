# How zcode.z.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/zcode.z.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed IDE workspace interface showing a Gomoku game development task with file changes panel, git tools sidebar, and AI agent progress tracking with checkmarks and token](https://pin.fontofweb.com/9893?format=jpg)](https://design.withfudge.com/share/pin-9893)

[Dark-themed IDE workspace interface showing a Gomoku game development task with file changes panel, git tools sidebar, and AI agent progress tracking with checkmarks and token](https://design.withfudge.com/share/pin-9893)

[![ZCode marketing landing page with bold hero headline, product screenshot of AI coding workspace, download button, and navigation with language selector and login.](https://pin.fontofweb.com/9892?format=jpg)](https://design.withfudge.com/share/pin-9892)

[ZCode marketing landing page with bold hero headline, product screenshot of AI coding workspace, download button, and navigation with language selector and login.](https://design.withfudge.com/share/pin-9892)

## Overview

ZCode presents a dark-first developer experience that merges editorial marketing presence with a dense, functional workspace interface. The system is built around near-black canvases with carefully calibrated gray surfaces that create depth without visual noise. The design serves two distinct contexts: a public landing page that communicates product value through bold, confident typography, and an authenticated workspace where AI agents, git operations, file changes, and task progress coexist in a tightly packed, panel-based layout. The visual language prioritizes information density, using subtle borders and background shifts rather than heavy shadows to separate functional regions. Every element feels engineered for prolonged use in low-light environments, with high-contrast text on dark grounds and restrained accent colors that signal status without distraction.

## Colors

The palette is strictly monochromatic with functional color accents for status. Dark values dominate, creating an immersive environment that reduces eye strain during extended coding sessions.

| token | value | use |
|---|---|---|
| canvas | #161616 | Primary page background, deepest layer |
| surface | #171717 | Workspace panels, cards, elevated containers |
| surface-elevated | #262626 | Hover states, active selections, code block backgrounds |
| ink | #FAFAFA | Primary headings, body text on dark, navigation labels |
| muted-ink | #A1A1A1 | Secondary text, timestamps, file metadata, inactive items |
| border | #404040 | Visible dividers, input outlines, focused borders |
| border-subtle | #262626 | Panel boundaries, hairline separators between regions |
| action | #FFFFFF | Primary button fills, high-emphasis interactive elements |
| action-text | #000000 | Text on action backgrounds |

The color system operates on a principle of layered darkness. The canvas at #161616 sits beneath surfaces at #171717, with elevated states reaching #262626. This creates a three-level depth system without introducing color temperature shifts. Text follows a binary hierarchy: near-white for primary content and mid-gray for secondary metadata. The complete absence of saturated brand colors in the interface itself keeps attention on code, diffs, and AI-generated content. Status indicators in the git diff panels use color coding for additions and deletions, but these appear as system-rendered elements rather than core interface tokens.

## Typography

The type system uses three families: Geist for all interface text, Geist Mono for code snippets and technical identifiers, and Applesystem as a system-level fallback. Geist and Geist Mono were designed by Basementstudio with Vercel. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3.75rem | 700 | 1.25 | -0.02em | Landing page headlines, value propositions |
| section-display | Geist | 1.5rem | 600 | 1.3 | -0.01em | Panel titles, section headers in workspace |
| body | Geist | 1rem | 400 | 1.5 | normal | Primary readable content, descriptions |
| body-small | Geist | 0.875rem | 400 | 1.43 | normal | Task lists, file names, metadata |
| label | Geist | 0.75rem | 500 | 1.625 | normal | Buttons, badges, compact UI labels |
| code | Geist Mono | 0.8125rem | 400 | 1.5 | normal | Inline code, file paths, technical values |
| navigation | Geist | 0.875rem | 400 | 1.43 | normal | Top nav, sidebar categories, breadcrumbs |

The hero display at 60px establishes immediate presence on the landing page with tight tracking that feels contemporary and confident. Body text at 16px with 24px line height provides comfortable reading for AI-generated explanations and documentation. The label style at 12px with medium weight appears throughout buttons and status indicators, maintaining legibility at small sizes through increased line height. Code typography uses Geist Mono at 13px, matching the body-small line height for visual alignment when inline code appears in prose. Weight distinctions are purposeful: 400 for body content, 500 for interactive labels, 600 for section headers, and 700 reserved for the hero display. Applesystem appears in the font stack as a fallback for system-rendered elements at 14px, though Geist carries the primary visual load throughout the interface.

## Layout

The workspace follows a three-column pattern with a collapsible left sidebar, a central content area, and a right information panel. The landing page uses a centered single-column hero that transitions into a full-width product demonstration.

Section padding on the marketing page uses 88px top and 96px bottom with 40px horizontal gutters, creating generous breathing room around the headline and call-to-action. The workspace interface compresses to functional density: sidebar items at 4px vertical padding with 8px horizontal, main content areas at 16px padding, and right panels at 8px with internal 8px gaps.

The central workspace area reserves substantial right padding—320px in some configurations—to accommodate the fixed right panel containing git tools, goal tracking, and progress indicators. This creates an asymmetric layout where the primary content occupies roughly 60% of available width while contextual information persists in the remaining space.

Grid relationships rely on 8px and 16px multiples. The 24px gap appears frequently between major content blocks, while 12px and 20px gaps organize related elements within panels. The header maintains 12px vertical padding with a 1px bottom border in subtle gray, establishing the primary navigation plane without visual weight.

## Visual language

The interface communicates through restraint and precision. Rounded corners vary by function: panels use 16px for approachable containment, cards use 14px, buttons use 10px for tactile immediacy, and pills use full radius for tags and status indicators. A distinctive asymmetric radius of 14px 2px 14px 14px appears on certain interactive elements, suggesting directional intent or conversation origin.

Borders are hairline-thin at 1px, typically in #262626 for subtle separation or #404040 when more definition is required. The header border uses #FAFAFA at reduced opacity for a faint atmospheric line. Shadows are minimal and functional: a deep ambient shadow at 30px 80px with 42% opacity for floating panels, and smaller directional shadows at 4px 6px for elevated cards.

The workspace screenshot within the landing page demonstrates the live product through a framed device presentation, complete with simulated window controls (red, yellow, green dots) that anchor the interface in desktop expectations. This meta-layer—showing the tool within itself—creates visual recursion that reinforces the product's self-referential utility.

Iconography appears as simple geometric shapes: checkmarks for progress, file type indicators with color coding, and git branch symbols. These remain in the muted ink color unless actively selected.

## Components

**Primary Button**
- Anatomy: Rounded pill containing text label, occasionally prefixed with an icon
- Surface: Solid white fill with black text
- Typography: label token, medium weight
- Shape: 9999px radius, 12px vertical and 24px horizontal padding
- Spacing: 8px gap between icon and text when present
- Variants: The download button includes a secondary line of metadata in smaller text beneath the primary label, creating a compound button with stacked information

**Secondary Button**
- Anatomy: Bordered container with text and optional icon
- Surface: Transparent with 1px border in border color
- Typography: label token or body-small depending on context
- Shape: 10px radius, 8px–10px horizontal padding
- Variants: Some instances use asymmetric radius (16px 10px 10px 16px) for directional controls; icon-only buttons use 8px padding

**Workspace Panel**
- Anatomy: Contained region with header, content area, and optional footer
- Surface: surface background with 1px border-subtle border
- Shape: 16px radius, 16px–24px internal padding
- Composition: Stacked vertical layout with 20px gaps between major sections, 12px gaps within sections
- Hierarchy: Panels nest within panels; the git changes panel shows file lists with indented change statistics

**Sidebar Navigation**
- Anatomy: Vertical list with category headers and actionable items
- Surface: Transparent items, canvas background for the container
- Typography: body-small for items, label for category headers in muted-ink
- Shape: 10px radius on items, 4px 10px 4px 10px asymmetric padding
- Spacing: 8px gaps between items, 2px bottom margins for subtle separation
- States: Active items show no distinct background change; selection is implied by context rather than explicit highlighting

**Task List Item**
- Anatomy: Icon prefix, title text, timestamp suffix, optional status dot
- Surface: Transparent
- Typography: body-small for title, label for timestamp
- Spacing: 8px gap between icon and text, 4px internal padding
- Hierarchy: Indented sub-items appear beneath parent tasks with additional left padding

**Code/Change Block**
- Anatomy: File path header, line-by-line change display with +/- prefixes
- Surface: surface-elevated background
- Typography: code token for content, body-small for file paths
- Shape: 8px–14px radius depending on nesting level
- Composition: Monospace alignment for change statistics, color-coded green for additions and red for deletions

**Status Badge**
- Anatomy: Rounded container with icon and text
- Surface: surface-elevated background
- Typography: label token
- Shape: pill radius
- Use: Goal completion states, progress indicators, token count displays

**Input/Chat Field**
- Anatomy: Text area with action buttons aligned to bottom
- Surface: Transparent or surface background
- Shape: 10px–16px radius
- Composition: Full-width input with right-aligned submit controls, model selector dropdown, and max tokens toggle

## Responsive behavior

The workspace layout assumes a minimum viewport width where the three-column arrangement remains viable. Below this threshold, the right panel should collapse into a toggleable overlay or tabbed interface, preserving the central content area for active work. The left sidebar may compress to icon-only navigation with tooltips.

The landing page hero maintains centered alignment across widths, with the headline scaling down from 60px to preserve line breaks and readability. The product screenshot scales proportionally, potentially shifting from a framed presentation to a full-bleed edge-to-edge display on narrower viewports.

Typography does not fluidly scale; instead, discrete steps should reduce hero-display to section-display size and section-display to body size at appropriate breakpoints. The 16px body size remains constant to ensure code readability and interface legibility.

## Practical implementation guidance

**Preserve**
- The strict dark palette hierarchy; never introduce light mode without complete recoloring
- The 8px grid foundation; all spacing should resolve to this unit
- Geist's weight distinctions, particularly the 500 weight for interactive elements
- The asymmetric radius patterns on directional and conversational elements
- The high-contrast white-on-black for primary actions

**Avoid**
- Adding saturated colors beyond the functional green/red status indicators
- Increasing border widths above 1px; use background color shifts for emphasis instead
- Generic shadow systems; the existing shadows are specific and purposeful
- Lightening the canvas or surface colors, which would reduce the immersive quality
- Replacing Geist Mono with a non-monospaced face for code elements

**Recommended Build Order**
1. Establish the color tokens and apply canvas/surface backgrounds to page structure
2. Implement typography scale with Geist at all weights
3. Build the header with navigation and border treatment
4. Create the workspace panel component with proper radius and padding
5. Implement sidebar with item spacing and asymmetric radius patterns
6. Construct the three-column layout with right-panel reservation
7. Add git changes panel with code typography and color-coded statistics
8. Polish with shadow system and interactive states

**Accessibility**
- Maintain the 4.5:1 minimum contrast ratio between ink (#FAFAFA) and canvas (#161616), which exceeds requirements
- Ensure muted-ink (#A1A1A1) on surface (#171717) meets 4.5:1 for body text; test specifically at 14px sizes
- Provide visible focus indicators beyond default browser styles, using border color shifts to #FFFFFF
- The dense information architecture benefits from clear heading hierarchy; preserve the h1 through h3 structure visible in the workspace
- Icon-only buttons require aria-labels; the git tools and window controls rely on recognition

## Scope note

This guide covers the landing page and authenticated workspace interface visible in the supplied captures. Mobile layouts, animation transitions, hover and focus states, loading skeletons, error pages, and dark/light mode switching are not represented. The terminal or command-line interface elements, notification systems, and settings panels beyond the visible workspace remain outside this documentation.
