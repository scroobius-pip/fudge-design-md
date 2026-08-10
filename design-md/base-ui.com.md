# How base-ui.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/base-ui.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large display type, social links, and maker logo grid on dark canvas](https://pin.fontofweb.com/8040?format=jpg)](https://design.withfudge.com/share/pin-8040)

[Hero section with large display type, social links, and maker logo grid on dark canvas](https://design.withfudge.com/share/pin-8040)

[![FAQ accordion with expand/collapse states and team roster with role labels](https://pin.fontofweb.com/8041?format=jpg)](https://design.withfudge.com/share/pin-8041)

[FAQ accordion with expand/collapse states and team roster with role labels](https://design.withfudge.com/share/pin-8041)

[![Documentation page with sidebar navigation, code blocks, and table of contents](https://pin.fontofweb.com/3865?format=jpg)](https://design.withfudge.com/share/pin-3865)

[Documentation page with sidebar navigation, code blocks, and table of contents](https://design.withfudge.com/share/pin-3865)

## Overview

Base UI presents a dark-first, minimal visual system built around radical simplicity and high readability. The design prioritizes content over decoration, using a near-black canvas with light gray typography to create a calm, focused reading environment. The system serves two primary contexts: a marketing landing page that introduces the component library, and a documentation interface that supports dense technical content including code examples, navigation hierarchies, and reference material.

The visual language draws from Swiss typographic tradition through its use of grotesque sans-serif typefaces, generous whitespace, and strict grid alignment. Every element feels intentional and unhurried. The dark canvas creates a distinctive identity that separates Base UI from conventional light-themed documentation sites, while the restrained use of accent color keeps attention on the content rather than the interface chrome.

## Colors

The color system is intentionally austere, built on a dark-mode foundation with minimal variation. The palette derives its character from extreme contrast rather than chromatic range.

| token | value | use |
|---|---|---|
| ink | #EDEDED | Primary text, headings, icons, and interactive elements |
| muted-ink | #A0A0A0 | Secondary text, labels, collapsed accordion icons, and disabled states |
| canvas | #0A0A0A | Page background, establishing the dark-first environment |
| surface | #141414 | Card backgrounds, code blocks, and contained content areas |
| surface-elevated | #1A1A1A | Hover states and slightly elevated containers |
| border | #2A2A2A | Dividers, accordion borders, and subtle structural lines |
| accent | #3B82F6 | Inline code references, links, and interactive highlights |

The dark canvas dominates every view, creating a consistent immersive environment. Text appears in light gray rather than pure white, reducing eye strain during extended reading. The surface tokens create subtle depth for contained elements like code blocks and logo cards without breaking the dark continuity. Accent blue appears sparingly, reserved for inline code tokens and interactive references where it provides orientation without visual noise. No light-mode variant is visible in the supplied material.

## Typography

The typographic system relies on grotesque sans-serif families with a clear hierarchy from large display headings to compact code text. Historical attribution identifies Die Grotesk A, Die Grotesk B, and Times as families present in the source material, with a monospace family for code contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Die Grotesk B | 3rem | 400 | 1.1 | -0.02em | Landing page hero headings |
| section-display | Die Grotesk A | 1.5rem | 400 | 1.2 | -0.01em | Section headings and page titles |
| body | Die Grotesk A | 1rem | 400 | 1.6 | 0 | Paragraph text and descriptions |
| body-small | Die Grotesk A | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions and metadata |
| label | Die Grotesk A | 0.75rem | 400 | 1.4 | 0.01em | Card labels, captions, and compact text |
| navigation | Die Grotesk A | 0.875rem | 400 | 1.5 | 0 | Navigation links and menu items |
| code | By Christian Mengelt Team 77 | 0.875rem | 400 | 1.6 | 0 | Code blocks and inline monospace |

The display heading uses Die Grotesk B at a substantial scale with tight negative tracking, creating an authoritative but approachable voice. Body text maintains generous line height for comfortable reading of longer passages. The code family appears only in technical contexts, with a size that matches body-small for visual harmony when code and prose appear together.

Verify licensing for these families before production use. No designer or vendor attribution is supplied in the available records.

## Layout

The layout system follows a two-column asymmetric structure for documentation pages and a centered single-column approach for marketing content. The relative unit of 0.25rem provides fine-grained control with all measurements snapping to this grid.

**Page structure:** Documentation pages use a persistent left sidebar for navigation, a central content column for primary material, and a right-rail table of contents for heading anchors. The marketing page centers content with generous horizontal margins, approximately 4rem on each side based on the visible spacing.

**Grid behavior:** The maker logo grid displays six items in a horizontal row with equal gaps, suggesting a flex or grid layout with consistent item dimensions. Team roster entries and FAQ items stack vertically with full-width horizontal borders between them.

**Spacing scale:**
- unit: 0.25rem
- tight: 0.75rem
- content-gap: 1.5rem
- section: 6rem

Section spacing creates clear rhythmic breaks between content areas, while tight spacing handles internal component padding. The 12px padding value visible in spacing records corresponds to 0.75rem, used for compact internal regions like navigation items or accordion headers.

## Visual language

The visual character is austere and confident, communicating technical credibility through restraint rather than embellishment. The near-black canvas with light gray text creates a distinctive dark environment that feels modern and developer-oriented.

**Surface treatment:** Cards and containers use flat fills without shadows or gradients. The surface token at #141414 provides just enough separation from the canvas to define boundaries. Code blocks receive slightly more visual weight through their contained appearance with rounded corners and subtle borders.

**Iconography:** Simple geometric icons appear in the maker logo grid and as accordion expand/collapse indicators. These use the same ink color as text, maintaining monochrome consistency. The accordion plus and minus icons are particularly minimal, functioning as pure glyphs without decorative containers.

**Interactive cues:** Links use underline decoration in the marketing context, while documentation links rely on color change. The accordion reveals content through a simple expand animation implied by the plus-to-minus state change. No complex hover effects, transitions, or animated feedback is visible in the still images.

**Code presentation:** Technical content receives special treatment with dark surface backgrounds, syntax highlighting in accent blue for keywords and strings, and copy buttons positioned at the block corner. This creates a clear visual hierarchy where code stands apart from explanatory prose.

## Components

### Hero section

The hero establishes the site's tone immediately with large display typography and minimal surrounding elements.

- **Anatomy:** Display heading, optional description paragraph, and a primary action link with arrow indicator
- **Surface:** Transparent against the canvas background
- **Typography:** hero-display token for the heading, body token for description
- **Spacing:** Generous top padding, approximately 6rem from the navigation bar
- **Composition:** Left-aligned text with no containing width restriction

### Navigation bar

A minimal top bar providing global wayfinding and external links.

- **Anatomy:** Logo mark, social/platform links (X, GitHub, Discord), and primary navigation link
- **Surface:** Transparent, blending with the canvas
- **Typography:** navigation token for all links
- **Composition:** Horizontal flex with space-between distribution; logo left, links center and right

### Maker logo grid

A showcase of projects or companies using the library, presented as a grid of icon cards.

- **Anatomy:** Section label and six square cards with centered icons and text labels
- **Surface:** Each card uses surface background with rounded corners
- **Typography:** label token for card captions
- **Shape:** Square aspect ratio cards with 0.5rem border radius
- **Spacing:** Consistent gap between cards, approximately 1.5rem
- **Composition:** Horizontal row on desktop, wrapping as needed

### Team roster

A simple list of team members with names and roles.

- **Anatomy:** Section label and repeating rows of name/role pairs
- **Surface:** Transparent with border-bottom dividers using border token
- **Typography:** body token for names, body-small for roles
- **Spacing:** Comfortable vertical padding per row, approximately 0.75rem

### FAQ accordion

A vertically stacked set of expandable questions.

- **Anatomy:** Question text, expand/collapse icon, and revealed answer content
- **Surface:** Transparent with full-width border-top separators
- **Typography:** body token for questions, body-small for answers
- **Shape:** No border radius; full-bleed horizontal lines
- **States:** Collapsed state shows plus icon; expanded state shows minus icon and reveals answer text below the question
- **Spacing:** Standard vertical padding, approximately 0.75rem per item

### Code block

Technical content containers with syntax highlighting and copy functionality.

- **Anatomy:** File name label, code content with syntax highlighting, and copy button
- **Surface:** surface background with border token outline
- **Typography:** code token for all content
- **Shape:** 0.5rem border radius
- **Composition:** Full-width within content column, with internal padding of approximately 1rem

### Sidebar navigation

Persistent left navigation for documentation pages.

- **Anatomy:** Nested list of section headers and page links, with NEW badges on recent additions
- **Surface:** Transparent against canvas
- **Typography:** navigation token for links, label token for section headers
- **Composition:** Fixed width, vertically scrollable, with indentation for nested items

## Responsive behavior

The supplied images show desktop layouts at approximately 1712px and 1412px widths. Based on these views, the following responsive considerations apply:

The documentation sidebar likely collapses to a hamburger menu or overlay drawer at narrower viewports, as the three-column layout cannot sustain itself below approximately 1200px. The maker logo grid should reflow from six columns to three or two columns as space decreases, maintaining square card proportions. Hero text should scale down from the 3rem display size, potentially to 2rem or 1.75rem on mobile while preserving the tight line height.

Accordion items and team roster rows require no structural change for smaller screens, though horizontal padding should reduce from the 4rem desktop margins to approximately 1.5rem on mobile. Code blocks should remain full-width with horizontal scroll for overflow rather than text wrapping.

## Practical implementation guidance

### Preserve
- The dark-first canvas as the default and only visible mode
- Generous section spacing that lets content breathe
- The grotesque sans-serif typographic voice with its neutral, confident tone
- Flat surfaces without shadows, gradients, or glassmorphism effects
- Minimal accent color usage restricted to code and interactive references
- Clear border-based separation for list items and accordion rows

### Avoid
- Adding a light mode without careful consideration of the brand's dark identity
- Decorative backgrounds, patterns, or photographic imagery behind text
- Multiple font weights beyond the visible Regular style
- Card shadows or elevation effects that contradict the flat aesthetic
- Pure white text that would increase contrast beyond the calibrated #EDEDED

### Recommended build order
1. Establish the dark canvas and ink text colors as global defaults
2. Implement the typography scale with Die Grotesk A and B
3. Build the navigation bar and hero section for the landing page
4. Create the accordion component with its expand/collapse states
5. Develop the documentation layout with sidebar, content column, and table of contents
6. Add code block styling with syntax highlighting and copy functionality
7. Implement the maker logo grid and team roster as content components

### Accessibility
- Maintain the high contrast between #EDEDED text and #0A0A0A background, which exceeds WCAG AAA requirements
- Ensure accordion controls have proper button semantics and aria-expanded states
- Provide focus indicators that are visible against the dark canvas, potentially using the accent color with sufficient contrast
- Code blocks should include copy buttons with accessible labels and keyboard operability
- Navigation links need clear focus states distinct from hover states

## Scope note

This guide covers the landing page and documentation quick-start page as visible in the supplied images. Component pages, mobile layouts, breakpoint behavior, animation specifications, and form components are not represented. Measurements are practical adaptation targets derived from the visible interface. The dark mode is the only visible theme; no light mode guidance is included. Times appears in the historical font records but is not assigned to a visible typographic role in the current interface.
