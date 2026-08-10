# How icp.ninja is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/icp.ninja-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with resource links, email signup form, and social media icon row on near-black background](https://pin.fontofweb.com/1255?format=jpg)](https://design.withfudge.com/share/pin-1255)

[Footer section with resource links, email signup form, and social media icon row on near-black background](https://design.withfudge.com/share/pin-1255)

[![Developer tools section with magenta terminal and VS Code icons on dark cards against black background](https://pin.fontofweb.com/1254?format=jpg)](https://design.withfudge.com/share/pin-1254)

[Developer tools section with magenta terminal and VS Code icons on dark cards against black background](https://design.withfudge.com/share/pin-1254)

[![Project cards for LLM Chatbot and NFT Creator with magenta-accented illustrations and Clone buttons](https://pin.fontofweb.com/1253?format=jpg)](https://design.withfudge.com/share/pin-1253)

[Project cards for LLM Chatbot and NFT Creator with magenta-accented illustrations and Clone buttons](https://design.withfudge.com/share/pin-1253)

[![Project grid with search, filters, and ten cloneable project cards featuring magenta and white illustrations](https://pin.fontofweb.com/1252?format=jpg)](https://design.withfudge.com/share/pin-1252)

[Project grid with search, filters, and ten cloneable project cards featuring magenta and white illustrations](https://design.withfudge.com/share/pin-1252)

## Overview

ICP Ninja presents a developer-centric platform for discovering, cloning, and deploying projects on the Internet Computer Protocol. The visual system establishes immediate technical credibility through a near-black canvas, high-contrast magenta accents, and consistent monospace typography throughout. The interface avoids decorative gradients and ornamental elements in favor of functional clarity: project cards with distinctive illustrations, clear categorization badges, and prominent clone actions. The design communicates speed and precision—qualities essential for a platform targeting developers who want to bootstrap blockchain applications quickly. Every surface reinforces the dark-mode aesthetic, with subtle elevation changes distinguishing interactive cards from the background canvas. The magenta accent color appears selectively in project illustrations and interactive states, creating visual anchors without overwhelming the dark environment.

## Colors

The color system operates on a restrained dark-mode palette with a single vibrant accent. The near-black canvas minimizes eye strain during extended coding sessions while the magenta provides energetic contrast for calls to action and illustrative elements.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Primary page background, deepest surface |
| surface | #1a1a1a | Card backgrounds, elevated containers |
| surface-elevated | #242424 | Input fields, hover states, subtle elevation |
| ink | #f5f5f5 | Primary text, headings, active elements |
| ink-muted | #a0a0a0 | Secondary text, descriptions, placeholders |
| action | #ff1493 | Accent illustrations, interactive highlights, brand moments |
| action-hover | #ff69b4 | Hover states for accent elements |
| border | #333333 | Visible dividers, input borders, card outlines |
| border-subtle | #2a2a2a | Separator lines, inactive states |

The canvas and surface relationship creates a shallow depth hierarchy: cards float slightly above the page background through a 10% lightness increase. The ink color avoids pure white, reducing harsh contrast against the dark ground. Magenta serves as the singular accent, appearing in project illustrations and potentially in hover states, while never competing with content readability. Border colors remain subdued, present enough to define boundaries without drawing attention. The overall temperature reads cool and technical, appropriate for a development tools platform.

## Typography

The type system relies on a single monospace family, reinforcing the technical, code-oriented identity of the platform. All text uses JetBrains Mono or a comparable monospace alternative.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | JetBrains Mono | 2.5rem | 700 | 1.1 | -0.02em | Page titles, major section headers |
| section-display | JetBrains Mono | 1.75rem | 700 | 1.2 | -0.01em | Section headings, "Clone a project" |
| body | JetBrains Mono | 1rem | 400 | 1.6 | 0 | Primary descriptions, card text |
| body-small | JetBrains Mono | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, metadata |
| label | JetBrains Mono | 0.75rem | 500 | 1.4 | 0.02em | Badges, buttons, category tags |
| navigation | JetBrains Mono | 0.875rem | 500 | 1.4 | 0.01em | Links, nav items, form actions |

The monospace family creates rhythm and density appropriate for a developer audience. Weights remain limited to Regular (400), Medium (500), and Bold (700), with no need for lighter or heavier extremes. Line heights stay compact for headings and generous for body text, preserving the rectangular block aesthetic of monospace characters. Letter spacing tightens slightly at display sizes to prevent looseness in large glyphs. Verify licensing for these families before production use.

## Layout

The layout follows a contained, centered model with generous horizontal padding and consistent vertical rhythm. The project grid uses a two-column arrangement at desktop widths, with cards maintaining equal height within rows. A top control bar spans the full content width, containing a search input on the left and filter dropdowns on the right. This creates a clear information hierarchy: discover tools first, then refine results.

Content containers appear to max out around 1200px, centered with automatic margins. Internal padding uses 2rem on the horizontal axis, expanding to 4rem for section vertical spacing. Cards within grids maintain 1rem gaps, tight enough to suggest relatedness while preventing visual merging. The footer distributes content across three conceptual zones: resource links in two columns, email capture in a third, and social icons below—though the exact column count adapts to content density.

Grid alignment follows strict left edges, with monospace text benefiting from the predictable character widths. Cards internally use left-aligned content with illustrations positioned on the left side, creating a consistent scanning pattern: image, title with badge, description, action button. This L-shaped reading path reduces cognitive load when browsing multiple projects.

## Visual language

The visual identity draws from terminal aesthetics and code editor interfaces, translated into a polished product experience. Illustrations within project cards use a distinctive flat style with magenta (#ff1493) as the primary illustration color against near-black shapes, occasionally incorporating white for contrast. The LLM Chatbot shows a black rounded rectangle with white eyes and a magenta speech bubble; the NFT Creator displays geometric blocks in magenta, white, and dark gray. These illustrations avoid gradients and complex shading, maintaining the flat, technical character.

Decorative star-like elements appear at section boundaries—simple four-pointed shapes in muted gray that break up the dark canvas without demanding attention. These function as subtle visual punctuation rather than ornament.

The overall density balances information richness with breathing room. Cards contain substantial internal padding, allowing illustrations and text to coexist without crowding. The clone button, consistently positioned at the right edge of each card, provides a predictable action target. Category badges use pill shapes with subtle borders, distinguishing them from primary actions through reduced visual weight.

## Components

### Project Card

Anatomy: Horizontal card containing an illustration thumbnail on the left, a text block in the center with title, category badge, and description, and a clone button on the right.

Surface and text color: Background uses surface (#1a1a1a) with ink (#f5f5f5) for titles and ink-muted (#a0a0a0) for descriptions. The category badge uses transparent background with ink-muted text and a border (#333333).

Typography: Title uses section-display at a reduced size or body with increased weight; description uses body-small; category badge uses label.

Shape and border: border-radius of 0.5rem, optional 1px border in border-subtle.

Spacing: Internal padding of 1.5rem, gap between illustration and text of 1rem, gap between text block and button of auto (pushed to edges via flex or grid).

Composition: Flexbox or grid with illustration as fixed width, text block as flexible, button as fixed width. Vertical centering of all elements.

Variants: Some cards show longer descriptions that may wrap to two lines; the card height adapts or truncates based on implementation needs.

### Clone Button

Anatomy: Compact button with "Clone" text, positioned at the right edge of project cards.

Surface and text color: Background uses ink (#f5f5f5), text uses canvas (#0a0a0a). Inverted from the dark card surface for maximum contrast.

Typography: label token at 0.75rem, weight 500.

Shape and border: border-radius of 0.5rem, no visible border.

Spacing: Padding of 0.5rem vertical, 1rem horizontal.

### Category Badge

Anatomy: Inline pill containing category text such as "AI", "NFT", "DeFi", "Chain Fusion".

Surface and text color: Transparent background, ink-muted text (#a0a0a0), border in border (#333333).

Typography: label token.

Shape and border: Full pill with border-radius of 9999px, 1px solid border.

Spacing: Padding of 0.25rem vertical, 0.75rem horizontal.

### Search Input and Filters

Anatomy: Text input for search paired with three dropdown selectors for language, level, and project type.

Surface and text color: Input background uses surface-elevated (#242424), text in ink (#f5f5f5), placeholder in ink-muted. Dropdowns match with chevron indicators.

Typography: body-small for input text and dropdown labels.

Shape and border: border-radius of 0.375rem for search, 0.5rem for dropdowns, 1px border in border color.

Spacing: Search input spans a wider area; dropdowns cluster with consistent gaps.

### Email Capture Form

Anatomy: Text input with envelope icon placeholder, paired with "Get Updates" button.

Surface and text color: Input uses surface-elevated with border; button uses ink background with canvas text.

Typography: body-small for input, navigation for button.

Shape and border: Input border-radius of 0.375rem, button at 0.5rem.

Spacing: Horizontal gap between input and button of approximately 1rem.

### Social Icon Row

Anatomy: Circular buttons containing platform icons (X, Telegram, OpenChat, YouTube, Reddit, ICP logo, Discord).

Surface and text color: Transparent or surface background, ink icon color. Circular border in border (#333333).

Shape and border: Perfect circles with 1px border, icon centered within.

Spacing: Consistent gap of approximately 1rem between icons.

## Responsive behavior

The two-column project grid should collapse to a single column on narrower viewports, maintaining card internal structure. The search and filter bar should stack vertically on small screens, with search input taking full width and filters arranging horizontally below or stacking further. Footer link columns should collapse from multi-column to single-column arrangement. The clone button may shift below the description text on very narrow cards rather than maintaining right-edge positioning. Typography scales down proportionally: hero-display reduces to 2rem, section-display to 1.5rem. Card padding reduces from 1.5rem to 1rem on mobile to preserve content density.

## Practical implementation guidance

### Preserve
- The near-black canvas as the dominant surface; any lighter background undermines the technical identity.
- Monospace typography throughout; mixing in sans-serif breaks the code-editor aesthetic.
- Magenta as the sole vibrant accent; introducing additional bright colors fragments the brand.
- Consistent card structure with illustration-left, text-center, action-right layout.
- The inverted clone button (light on dark) for immediate scanability.

### Avoid
- Gradients, shadows, or glassmorphism effects; the design succeeds through flat, precise surfaces.
- Pure white (#ffffff) text; the slightly softened ink (#f5f5f5) reduces eye strain.
- Rounded corners larger than 0.5rem on cards; excessive radius conflicts with the technical precision.
- Multiple accent colors; the magenta carries all brand energy.

### Recommended Build Order
1. Establish the dark canvas and surface color tokens.
2. Implement the monospace type scale with all six tokens.
3. Build the project card component with correct internal spacing and flex layout.
4. Create the clone button and category badge as reusable elements.
5. Assemble the grid with search/filter bar and pagination.
6. Add the footer with link columns, email capture, and social icons.
7. Apply magenta accents in illustrations and interactive states last.

### Accessibility
- Ensure clone buttons maintain minimum 4.5:1 contrast ratio; the ink-on-canvas inversion achieves this.
- Add visible focus states to all interactive elements, potentially using the action color (#ff1493) as a focus ring.
- Provide aria-labels for icon-only social links.
- Consider reducing motion for users who prefer it, though no motion is described in the static view.
- Ensure dropdown filters are keyboard operable with clear expanded/collapsed states.

## Scope note

This guide covers the project discovery and footer surfaces of ICP Ninja as visible in the supplied captures. The hero section, navigation bar, individual project detail pages, and any authenticated user flows are not represented. Motion, loading states, and mobile-specific layouts are not described. Measurements are practical adaptation targets based on visual estimation from the provided images.
