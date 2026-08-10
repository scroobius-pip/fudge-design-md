# How ucp.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ucp.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Feature cards with line-art icons showing native checkout and embed business checkout capabilities with pill-shaped action buttons on light gray rounded panels](https://pin.fontofweb.com/9361?format=jpg)](https://design.withfudge.com/share/pin-9361)

[Feature cards with line-art icons showing native checkout and embed business checkout capabilities with pill-shaped action buttons on light gray rounded panels](https://design.withfudge.com/share/pin-9361)

[![See it in action section with tabbed interface showing Checkout, Identity Linking, and Order tabs alongside mobile checkout mockup and syntax-highlighted code block](https://pin.fontofweb.com/9360?format=jpg)](https://design.withfudge.com/share/pin-9360)

[See it in action section with tabbed interface showing Checkout, Identity Linking, and Order tabs alongside mobile checkout mockup and syntax-highlighted code block](https://design.withfudge.com/share/pin-9360)

[![Hero section with large Universal Commerce Protocol title, isometric UCP logo, navigation sidebar, search bar, and partner logos including Google, Shopify, Etsy, Wayfair, Target,](https://pin.fontofweb.com/9359?format=jpg)](https://design.withfudge.com/share/pin-9359)

[Hero section with large Universal Commerce Protocol title, isometric UCP logo, navigation sidebar, search bar, and partner logos including Google, Shopify, Etsy, Wayfair, Target,](https://design.withfudge.com/share/pin-9359)

## Overview

The Universal Commerce Protocol (UCP) documentation site presents a technical standard for commerce interoperability through a restrained, Google-inspired visual system. The design prioritizes clarity and readability for developer audiences while maintaining approachable warmth through rounded geometry and generous whitespace. The interface balances dense technical content—code blocks, specification details, and API references—with breathable layouts that prevent cognitive overload.

The visual hierarchy relies on scale contrast between the large, tightly-tracked hero display and the comfortable body text, with structural navigation anchoring the left side of the viewport. Color usage is disciplined: near-black ink on white canvas with subtle gray surfaces for containment, punctuated by semantic color coding in technical content. The overall impression is of authoritative documentation that invites implementation rather than intimidating with complexity.

## Colors

The color system is built on a near-monochrome foundation with semantic accents for technical content. The interface avoids pure black in favor of Google's characteristic dark gray ink, which reduces eye strain during extended reading sessions.

| token | hex | use |
|---|---|---|
| ink | #202124 | Primary headings, body text, and navigation |
| ink-secondary | #3C4043 | Secondary headings and emphasized labels |
| ink-muted | #5F6368 | Tertiary text, captions, and disabled states |
| canvas | #FFFFFF | Page background and elevated surfaces |
| surface | #F8F9FA | Feature cards, code blocks, and contained panels |
| surface-elevated | #FFFFFF | Header and floating elements with shadow |
| border | #DADCE0 | Dividers, card outlines, and input borders |
| border-subtle | #DADCE0 | Hairline separators in navigation |
| action-primary | #202124 | Filled buttons and active tab backgrounds |
| action-primary-text | #FFFFFF | Text on filled buttons |
| action-secondary-text | #202124 | Text on outlined buttons and links |
| accent-blue | #3F6EC6 | Code properties and interactive highlights |
| accent-green | #1C7D4D | Code strings and success indicators |
| accent-indigo | #4051B5 | Code keywords and type annotations |
| code-ink | #36464E | Code text and terminal-style output |

The light mode dominates the interface with white canvas and off-white surfaces creating subtle depth. Technical content receives syntax highlighting through the accent colors: strings in green, keywords in indigo, and properties in blue. The code-ink color appears in syntax-highlighted blocks for base text and identifiers. The header uses a bottom border in dark ink to separate it from scrolling content, while navigation links employ muted ink that darkens on interaction. No dark mode is visible in the supplied material.

## Typography

The type system pairs Google Sans for all interface and content text with Roboto Mono for code presentation. Google Sans appears in multiple weights and sizes to establish clear hierarchy without introducing additional families. The design facts also list Applesystem and Times as detected families; these appear to be fallback or system-level assignments rather than actively rendered choices in the visible interface, and no attribution is supplied for them.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Google Sans | 4.125rem | 450 | 1.12 | -0.02em | Page title in hero section |
| section-display | Google Sans | 2.75rem | 450 | 1.4 | -0.01em | Section headings like "See it in action" |
| subsection-heading | Google Sans | 1.375rem | 450 | 1.5 | -0.01em | Card titles and feature headings |
| body-large | Google Sans | 1.1rem | 400 | 1.6 | normal | Hero description and lead paragraphs |
| body | Google Sans | 1.1rem | 400 | 1.6 | normal | Standard paragraphs and descriptions |
| body-small | Google Sans | 0.9625rem | 400 | 1.6 | normal | Navigation items and compact text |
| label | Google Sans | 0.9625rem | 500 | 1.4 | normal | Button text and active navigation |
| navigation | Google Sans | 0.9625rem | 400 | 1.3 | normal | Sidebar and header navigation |
| code | Roboto Mono | 0.818125rem | 400 | 1.4 | normal | Inline and block code |

Google Sans is provided by Google Inc. Roboto Mono appears as a self-hosted file. Verify licensing for these families before production use.

The hero display at 66px establishes immediate presence with tight tracking that feels contemporary and technical. Section headings at 44px maintain this character while scaling appropriately for interior pages. Body text at 17.6px sits comfortably above typical browser defaults, supporting the documentation's extended reading use case. Code at 13.09px preserves density for technical content without sacrificing legibility.

## Layout

The page structure follows a classic documentation pattern with persistent left navigation and scrollable main content. The header spans the full viewport width with internal margins that align to the content grid below.

The main content area employs a centered maximum width with generous side margins—approximately 181.5px on desktop—that create focused reading columns. Within this container, sections stack vertically with 60px vertical spacing, establishing clear separation between thematic blocks. The hero section breaks this pattern slightly, allowing the large title and isometric logo to occupy asymmetric space.

Feature cards appear in two-column grids with 30px gaps, each card containing an icon, heading, description, and action button. The "See it in action" section introduces a more complex composition: tabbed controls centered above a three-column layout showing a feature description, mobile mockup, and code block. This demonstrates the system's flexibility in presenting mixed media content.

The left sidebar navigation remains fixed during scroll, providing persistent access to the documentation hierarchy. Navigation items stack with compact 8.8px vertical spacing, while section groupings receive additional padding for scannability.

## Visual language

The visual character is defined by rounded containment and technical precision. Cards and panels use 16px to 24px corner radii that soften the interface without feeling playful. Buttons are fully pill-shaped at 50px radius, creating distinctive interactive elements that stand apart from content containers.

Line-art icons in thin strokes illustrate feature capabilities, maintaining consistency with the technical documentation aesthetic. These icons sit above headings in feature cards, scaled to approximately 48px visual height. The isometric UCP logo in the hero provides the only three-dimensional visual element, its geometric construction reinforcing the protocol's structured nature.

Shadow usage is minimal and functional: a subtle 0px 1px 2px shadow on active buttons, and a softer 0px 10px 30px shadow on elevated images and mockups. The header receives a bottom border rather than shadow, preferring explicit separation over atmospheric depth.

Code presentation uses light gray backgrounds with subtle borders, with syntax highlighting in the accent colors. Code blocks appear in rounded containers with generous internal padding, often presented alongside visual mockups to show implementation results.

## Components

### Header

- Anatomy: Logo mark, site title, search input, and GitHub link arranged horizontally
- Surface: White background with 1px bottom border in ink
- Typography: Site title in label weight, navigation in body-small
- Shape: Full-width bar with no border radius
- Spacing: Internal padding of approximately 8.8px vertical, with horizontal margins matching content grid
- Composition: Flex row with space-between alignment; search input centered with icon prefix

### Navigation sidebar

- Anatomy: Section headings and nested link lists
- Surface: Transparent, blending with canvas
- Typography: Section headings in ink-muted at body-small size; links in ink at same size with accent-blue for active state
- Spacing: Section headings with 17.6px top margin; list items with 13.2px horizontal padding
- Composition: Vertical stack with nested indentation for hierarchy

### Feature card

- Anatomy: Icon, heading, description paragraph, and pill button
- Surface: Surface color (#F8F9FA) with 16px to 24px border radius
- Typography: Heading in subsection-heading; body in body size
- Spacing: 40px internal padding; 16px gap between elements
- Composition: Vertical flex with icon at top, text centered left
- Variants: Two-column grid in main content; full-width in narrow contexts

### Tab group

- Anatomy: Horizontal row of pill-shaped tab buttons
- Surface: Active tab uses action-primary with white text; inactive tabs use canvas with ink text
- Typography: Label weight at body size
- Shape: Individual pills at 50px radius; contained group may have shared background
- Spacing: Tabs separated by small gaps; 14px vertical and 24px horizontal internal padding

### Button

- Anatomy: Text with optional icon; two variants visible
- Surface: Filled variant uses action-primary background; outlined variant uses canvas with 1px ink border
- Typography: Label token in either white or ink
- Shape: Full pill at 50px radius
- Spacing: 11px vertical and 26.4px horizontal padding
- States: Filled variant for primary actions; outlined for secondary navigation

### Code block

- Anatomy: Syntax-highlighted code with optional line numbers
- Surface: Surface color background with subtle border
- Typography: Code token family with color-coded syntax
- Shape: Small radius at 2.2px for inline; larger radius for blocks
- Spacing: 10.1px vertical and 15.4px horizontal internal padding
- Composition: Often paired with visual mockup in two-column layout

### Hero section

- Anatomy: Large display heading, subtitle, description, and isometric logo
- Surface: Canvas background
- Typography: Hero display for title; body-large for description
- Spacing: 33px top margin; 11px below title; comfortable reading width
- Composition: Asymmetric two-column with text left and logo right

## Responsive behavior

The layout assumes a desktop viewport with persistent sidebar navigation. At narrower widths, the sidebar should collapse to a hamburger menu or top-level navigation drawer, allowing the main content to expand to full width. The two-column feature card grid should stack to single column on tablet and below.

The hero section's asymmetric composition should reverse to vertical stack on mobile, with the isometric logo scaling down and centering above or below the title. Code blocks paired with mockups should stack vertically rather than side-by-side, maintaining the code's horizontal scroll capability.

Tab groups should remain horizontally scrollable on narrow viewports rather than wrapping, preserving the pill metaphor. Button groups should stack or wrap with consistent spacing.

## Practical implementation guidance

### Preserve
- The generous whitespace around content sections; the 60px vertical rhythm creates necessary breathing room for technical documentation
- The pill button shape for all interactive actions; this is a distinctive element that should not be diluted with alternative radius values
- The syntax highlighting color scheme; the green-blue-indigo progression is semantically meaningful for developers
- The Google Sans weight 450 for headings; this intermediate weight between Regular and Medium provides the intended technical authority

### Avoid
- Pure black (#000000) for text; the specified ink values (#202124, #3C4043) are intentionally softer
- Sharp corners on cards or buttons; the rounded language is consistent across all containment
- Dense paragraph spacing; the 26.4px line height in body text supports readability
- Removing the sidebar navigation on desktop; it provides essential wayfinding for documentation structure

### Recommended build order
1. Establish the type scale with Google Sans loaded at weights 400, 450, and 500
2. Implement the header with search input and GitHub link
3. Build the sidebar navigation with active state styling
4. Create the hero section with display typography and isometric logo
5. Develop feature card component with consistent padding and pill button
6. Add tab group for "See it in action" section
7. Implement code block with syntax highlighting and Roboto Mono
8. Refine spacing and responsive behavior across breakpoints

### Accessibility
- Ensure the search input in the header has an accessible label and visible focus state
- Provide skip navigation link to bypass the sidebar on repeated page visits
- Maintain color contrast ratios: ink on canvas exceeds WCAG AA; verify accent colors in code blocks meet minimums for small text
- Add aria-selected to active tab in tab groups
- Ensure pill buttons have visible focus indicators that respect the rounded shape

## Scope note

This guide covers the UCP.dev homepage and documentation landing surface visible in the supplied images. Interior specification pages, mobile navigation behavior, dark mode, form validation states, and interactive code playground features are not represented. The tab group interaction pattern and search functionality behavior require additional implementation decisions beyond the static design. Applesystem and Times appear in the extracted font list but are not visibly used as primary design choices in the rendered interface.
