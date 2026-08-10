# How notion.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/notion.com-design)

Last updated: 2026-08-10

## Captured pages

[![Developer platform product page showing CLI, API, MCP, SDK feature cards with code snippets and blue accent buttons on white background](https://pin.fontofweb.com/9284?format=jpg)](https://design.withfudge.com/share/pin-9284)

[Developer platform product page showing CLI, API, MCP, SDK feature cards with code snippets and blue accent buttons on white background](https://design.withfudge.com/share/pin-9284)

[![Agent tools section with TypeScript code example, terminal output, and chat interface demonstrating Notion agent capabilities](https://pin.fontofweb.com/9283?format=jpg)](https://design.withfudge.com/share/pin-9283)

[Agent tools section with TypeScript code example, terminal output, and chat interface demonstrating Notion agent capabilities](https://design.withfudge.com/share/pin-9283)

[![Footer area with deep blue background, pixel-art ntn.run game, CLI install command, and white navigation links](https://pin.fontofweb.com/9282?format=jpg)](https://design.withfudge.com/share/pin-9282)

[Footer area with deep blue background, pixel-art ntn.run game, CLI install command, and white navigation links](https://design.withfudge.com/share/pin-9282)

[![External agents hero section with Alpha badge, agent collaboration cards, and API endpoint examples on white background](https://pin.fontofweb.com/9281?format=jpg)](https://design.withfudge.com/share/pin-9281)

[External agents hero section with Alpha badge, agent collaboration cards, and API endpoint examples on white background](https://design.withfudge.com/share/pin-9281)

## Overview

Notion's marketing surface for developer products pairs editorial confidence with technical credibility. The system builds on expansive white space, a restrained two-color typographic hierarchy, and electric blue accents that signal interactivity without overwhelming the content. Large section headings in tight-tracking bold Inter establish rhythm, while body copy stays neutral and readable at 16 pixels. Code snippets appear in I A Writer Mono S with subtle color coding, reinforcing the developer audience without turning the page into an IDE. The visual personality emerges through deliberate contrasts: crisp product cards against soft gray surfaces, terminal-style blocks with dark backgrounds, and occasional playful moments like pixel-art illustrations in the footer. Navigation remains minimal and utilitarian, letting the product narrative drive the experience.

## Colors

The palette operates in three modes: a light marketing mode for product storytelling, a dark terminal mode for code and developer tools, and a deep navy footer mode for brand closure.

| token | hex | use |
|---|---|---|
| ink | #02093A | Primary headings, body text, and high-emphasis UI |
| ink-secondary | #1313BA | Links, active navigation, and feature highlights |
| action | #0075DE | Primary buttons, interactive accents, and CTAs |
| action-hover | #097FE8 | Button hover states and link underlines |
| canvas | #FFFFFF | Page background and elevated card surfaces |
| surface | #F6F5F4 | Subtle section backgrounds and code block surrounds |
| surface-elevated | #F7F7F5 | Card backgrounds and contained feature areas |
| surface-blue | #F2F9FF | Highlighted feature sections and blue-tinted cards |
| border | #CBCBEF | Card outlines, dividers, and subtle boundaries |
| code-bg | #191918 | Terminal and code block backgrounds |
| code-text | #6666FD | Syntax highlighting and code-specific accents |
| terminal-bg | #213183 | Dark blue terminal surfaces for CLI examples |
| terminal-text | #FFFFFF | Terminal command text and output |
| footer-bg | #02093A | Footer background and deep brand moments |
| footer-text | #FFFFFF | Footer links, copyright, and navigation |
| badge-bg | #F6F6FC | Status badge backgrounds like Alpha and Beta |
| badge-text | #1313BA | Badge text and category labels |

The light mode dominates product pages, with white canvas and soft gray surfaces creating breathing room around dense technical content. Blue accents appear sparingly as links, buttons, and status indicators. The dark terminal mode appears in code examples and CLI demonstrations, providing visual relief and signaling "developer territory." The deep navy footer unifies the page with brand color and playful illustrations.

## Typography

The system uses Inter as the primary typeface across all marketing and UI text, with I A Writer Mono S for code and technical content, Lyon for editorial quotes, and Noto Sans Arabic for Arabic script support. The exactValues list also includes Lyon Text Web and Notion Inter as supplied family labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4rem | 700 | 1 | -0.04em | Homepage hero headlines |
| section-display | Inter | 3.375rem | 700 | 1.037 | -0.035em | Section headlines and page titles |
| heading-large | Inter | 2rem | 700 | 1.2 | -0.008em | Subsection headings and feature titles |
| heading-medium | Inter | 1.125rem | 700 | 1.556 | -0.007em | Card titles and small headings |
| body | Inter | 1rem | 400 | 1.5 | 0em | Paragraphs and general content |
| body-medium | Inter | 1rem | 500 | 1.5 | 0em | Emphasized body and navigation |
| body-small | Inter | 0.875rem | 400 | 1.429 | 0em | Secondary descriptions and metadata |
| label | Inter | 0.75rem | 600 | 1.333 | 0.01em | Badges, tags, and category labels |
| code | I A Writer Mono S | 0.875rem | 400 | 1.429 | -0.009em | Code snippets and terminal text |
| quote | Lyon | 2rem | 400 | 1.25 | 0em | Editorial testimonials and pull quotes |

Inter appears in weights 400, 500, 600, and 700. The 700 weight drives all headlines with tight negative tracking that increases with size. Body text stays at 400 Regular for neutrality. The 500 Medium weight appears in navigation, buttons, and emphasized inline text. Code typography uses I A Writer Mono S at 14 pixels with slightly negative tracking for density. Lyon serves editorial moments at 32 pixels with generous line height. Notion Inter and Lyon Text Web appear in the supplied font inventory; verify licensing for these families before production use.

Verify licensing for these families before production use. Lyon is designed by Kai Bernau and available from Commercial Type. I A Writer Mono S is designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen, available from Bold Monday.

## Layout

The page structure follows a centered single-column narrative with occasional two-column feature layouts. Maximum content width sits around 940 pixels with generous horizontal padding of 150 pixels on either side in full-width sections, creating an editorial feel with substantial margins.

Navigation sits fixed at the top with 14 pixels vertical and 24 pixels horizontal padding, containing the Notion mark, keyboard-shortcut-style section links, and two utility buttons aligned to the right. The nav uses a white background with 1-pixel solid borders on active or outlined button states.

Hero sections occupy significant vertical space with centered or left-aligned headlines, supporting copy at 20 pixels, and primary action buttons. The hero on the developer platform page uses left alignment with an Alpha badge positioned above the headline.

Feature sections alternate between full-width white backgrounds and subtle gray surfaces. Cards appear in grids with 32-pixel gaps, using 1-pixel solid borders in light blue-gray or 12-pixel rounded corners with subtle shadows. Code examples often break the grid, extending to the right edge or sitting within dark terminal containers.

The footer spans full width with deep navy background, white text, and a playful pixel-art illustration. Footer content uses a three-column layout with the Notion mark and language selector on the left, CLI installation command centered, and copyright with legal links on the right. Footer padding runs 32 pixels vertical with 125 pixels horizontal in the contained area.

Spacing follows a 2-pixel base unit. Common increments include 8 pixels for tight internal padding, 16 pixels for component breathing room, 24 pixels for card padding, 32 pixels for section gaps, 48 pixels for major section separations, and 64 pixels for hero section padding.

## Visual language

The visual identity balances technical precision with approachable personality. Geometric clarity defines the interface: sharp corners on buttons and inputs, consistent 12-pixel rounding on cards, and full pills for badges and status indicators. The system avoids decorative gradients and shadows except for subtle elevation on interactive cards.

Photography and illustration follow a restrained approach. Product screenshots appear within rounded containers with subtle borders. Pixel-art illustrations in the footer introduce unexpected playfulness, rendered in white against the deep navy background with a retro gaming aesthetic. Agent and tool icons use simple geometric shapes in blue tones.

Code presentation receives special attention. Inline code uses monospace with blue-gray coloring against white. Block code sits in dark containers with light text, often featuring a header bar with file names and action links. Terminal examples use the deep blue background with white text and copy buttons, mimicking actual command-line interfaces.

The color application maintains discipline: blue is reserved for action and links, dark navy for text hierarchy, and gray for structural elements. Status badges like Alpha and Beta use light blue-gray backgrounds with dark blue text, sitting inline with headings without competing for attention.

## Components

### Navigation bar

- **Anatomy**: Notion mark on the left, keyboard-shortcut-style section links in monospace center-left, "Log in" outline button and "Get Notion free" filled button on the right
- **Surface**: White background, 1-pixel bottom border in subtle gray
- **Typography**: Section links use I A Writer Mono S at 14 pixels with bracketed shortcuts like `[S] Syncs`; buttons use Inter 16 pixels Medium
- **Shape**: Full-width bar, 56 pixels height with 14 pixels vertical padding
- **Spacing**: 24 pixels horizontal padding, buttons with 14 pixels horizontal internal padding
- **Composition**: Flex row with space-between, mark and links left-aligned, utility buttons right-aligned

### Feature card

- **Anatomy**: Optional badge or label at top, bold heading, descriptive paragraph, optional code snippet or screenshot, action link with arrow
- **Surface**: White or subtle gray background, 1-pixel solid border in #CBCBEF, or transparent with no border
- **Typography**: Heading uses Inter 18 pixels Bold, body uses Inter 16 pixels Regular, links use Inter 16 pixels Medium with arrow icon
- **Shape**: 12-pixel border radius
- **Spacing**: 28 to 32 pixels padding, 32 pixels margin-bottom between cards
- **Composition**: Single column within card; cards arranged in 2-column or 3-column grids with 32-pixel gaps

### Code block / Terminal

- **Anatomy**: Optional file name header with "See example" link, code content in monospace, optional output or status bar at bottom
- **Surface**: Dark background #191918 or deep blue #213183, white or light blue text
- **Typography**: I A Writer Mono S at 14 pixels, with syntax highlighting in #6666FD for keywords and #615D59 for comments
- **Shape**: 4-pixel border radius, or 12 pixels when contained in larger card
- **Spacing**: 12 to 16 pixels internal padding, 4 to 8 pixels for inline code spans
- **Composition**: Full-width within parent or contained within feature card; copy button positioned at right of command lines

### Status badge

- **Anatomy**: Text label only, no icon
- **Surface**: Light blue-gray background #F6F6FC, dark blue text #1313BA
- **Typography**: Inter 12 pixels Semibold with 0.125 pixels letter spacing
- **Shape**: 4-pixel border radius, 4 to 8 pixels horizontal padding
- **Spacing**: Positioned above headings with 8 to 12 pixels margin-bottom
- **Variants**: Alpha, Beta, and similar product status labels

### Primary button

- **Anatomy**: Text label with optional icon
- **Surface**: Filled blue #0075DE with white text, or white fill with blue text and border
- **Typography**: Inter 14 to 16 pixels Medium
- **Shape**: 8-pixel border radius for filled buttons, 0-pixel radius for outline buttons in navigation
- **Spacing**: 8 to 16 pixels vertical padding, 14 to 16 pixels horizontal padding
- **Composition**: Inline with text or standalone in navigation bars

### Footer

- **Anatomy**: Notion mark with wordmark, language selector, CLI install command with copy button, legal links, pixel-art illustration
- **Surface**: Deep navy #02093A background, all white text
- **Typography**: Inter 16 pixels Regular for links, 14 pixels for secondary text, I A Writer Mono S for command text
- **Shape**: Full-width, no border radius
- **Spacing**: 32 pixels vertical padding, 125 pixels horizontal padding in contained area
- **Composition**: Three-column layout on desktop, stacking on smaller viewports

## Responsive behavior

The layout assumes a desktop-first approach with generous fixed-width padding. Content max-width centers around 940 pixels with 150-pixel side margins in full-width sections. Navigation links with keyboard shortcuts may collapse into a hamburger menu or simplify to icon-only on narrow viewports. Feature card grids should transition from 3-column to 2-column to single-column as viewport narrows. Code blocks maintain full width with horizontal scrolling rather than text wrapping. The footer pixel-art illustration scales down or hides on mobile to preserve performance. Font sizes for hero headlines should reduce from 64 pixels to 42 pixels on smaller screens to maintain readability without excessive line breaks.

## Practical implementation guidance

### Preserve
- The tight tracking on bold headlines, especially the -0.04em on 64-pixel heroes
- Monospace section navigation with bracketed keyboard shortcuts
- Dark terminal containers for code with light text and copy affordances
- Deep navy footer with white text and playful pixel-art moments
- Status badges in light blue-gray with minimal border radius

### Avoid
- Generic sans-serif fallbacks for code; I A Writer Mono S is essential to the technical voice
- Heavy shadows or gradients; the system relies on flat color and subtle borders
- Centering all headlines; left alignment drives the editorial rhythm
- Small body text below 16 pixels for primary content
- Decorative borders that compete with the 1-pixel structural lines

### Recommended build order
1. Establish the 2-pixel base grid and spacing scale
2. Set up Inter with the full weight range and tracking values
3. Build the navigation with monospace section links and dual button styles
4. Create the hero section with badge, headline, and CTA pattern
5. Implement feature cards with border variants and code block containers
6. Add the footer with dark mode, command input, and illustration area
7. Fine-tune responsive breakpoints for card grids and navigation collapse

### Accessibility
- Ensure the 4.5:1 contrast ratio for all body text; the dark navy on white exceeds this
- Code blocks need explicit `pre` and `code` semantics with copy button labels
- Keyboard shortcut navigation should have visible focus indicators
- The deep navy footer requires careful link underlining or focus states for white text
- Terminal-style code should respect `prefers-reduced-motion` for any cursor blinking

## Scope note

This guide covers Notion's developer platform marketing pages and homepage surfaces. It does not include the in-product Notion workspace UI, mobile application layouts, email templates, or the full template marketplace grid. Motion, hover transitions, and dark mode switching are not documented. Measurements reflect the desktop viewport as captured.
