# How juno.build is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/juno.build-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with rocket-launch illustration, code-snippet block, and section heading in monospace type on white canvas](https://pin.fontofweb.com/7237?format=jpg)](https://design.withfudge.com/share/pin-7237)

[Hero section with rocket-launch illustration, code-snippet block, and section heading in monospace type on white canvas](https://design.withfudge.com/share/pin-7237)

[![Feature stack with astronaut illustration, service cards with icons, and syntax-highlighted code panel on dark surface](https://pin.fontofweb.com/7236?format=jpg)](https://design.withfudge.com/share/pin-7236)

[Feature stack with astronaut illustration, service cards with icons, and syntax-highlighted code panel on dark surface](https://design.withfudge.com/share/pin-7236)

[![Homepage hero with centered display type, product dashboard screenshot, and navigation with sign-in action](https://pin.fontofweb.com/7235?format=jpg)](https://design.withfudge.com/share/pin-7235)

[Homepage hero with centered display type, product dashboard screenshot, and navigation with sign-in action](https://design.withfudge.com/share/pin-7235)

[![Newsletter section with large bold heading, email input field, and lavender subscribe button with black offset shadow](https://pin.fontofweb.com/3436?format=jpg)](https://design.withfudge.com/share/pin-3436)

[Newsletter section with large bold heading, email input field, and lavender subscribe button with black offset shadow](https://design.withfudge.com/share/pin-3436)

## Overview

Juno's visual identity is built for developers who value clarity, control, and a touch of retro-computing personality. The system centers on JetBrains Mono as its sole typeface, creating an unapologetically monospace experience that reads as authentic infrastructure tooling rather than polished marketing. The aesthetic pairs this typographic rigor with a restrained two-color palette of pure black and soft lavender, punctuated by deliberate block shadows that evoke early GUI interfaces and terminal aesthetics. Every element communicates precision: tight letter-spacing on display type, consistent 3px corner radii, and bold 4px borders that frame content like window chrome. The result is a design that feels simultaneously contemporary and nostalgic—like a modern IDE skin applied to a web platform. Photography and illustration follow a consistent flat-vector approach with limited palettes, keeping the focus on code, configuration, and technical capability.

## Colors

The color system is intentionally minimal, relying on high contrast and a single accent family to create hierarchy and atmosphere.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, borders, shadows, and structural lines |
| ink-secondary | `#1C1E21` | Elevated dark surfaces, code panel backgrounds |
| ink-tertiary | `#444950` | Secondary text on dark surfaces, muted code elements |
| muted | `#707070` | Tertiary text, disabled states, subtle metadata |
| canvas | `#FFFFFF` | Page background, card surfaces, input fields |
| surface | `#000000` | Code block backgrounds, dark feature panels |
| surface-elevated | `#1C1E21` | Slightly lifted dark containers |
| accent | `#B0BAFF` | Primary action buttons, active states, highlights |
| accent-bright | `#00FFF5` | Cyan emphasis in code syntax, terminal-style accents |
| accent-muted | `#C9CFFF` | Hover states, subtle lavender tints |
| code-string | `#ABB2BF` | Syntax highlighting for strings and comments |
| border | `#000000` | All structural borders at 2px or 4px weight |

The light mode dominates the marketing surface: white canvas with black ink creates maximum readability for long-form technical content. Dark surfaces appear selectively for code demonstrations and feature deep-dives, where the black background lets syntax highlighting in lavender and cyan pop with terminal authenticity. The accent lavender is reserved for interactive moments—buttons, active cards, and the occasional dashboard chrome—preventing it from overwhelming the monochrome foundation. No gradients appear in the interface; all depth comes from solid shadows and border weight.

## Typography

JetBrains Mono drives every text layer, with Arial appearing only as a fallback for button labels in specific contexts. The type scale is tuned for code-centric reading: generous line heights for body copy, tight negative tracking on large displays, and consistent 13px–15px sizes for UI chrome. The supplied font families are Jet Brains Mono, Jet Brains Mono-Italic, and Arial.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Jet Brains Mono | 3.75rem | 400 | 1.1 | -0.0375em | Homepage hero headlines |
| section-display | Jet Brains Mono | 3.75rem | 700 | 1.2 | -0.05em | Section headings, feature titles |
| body | Jet Brains Mono | 0.9375rem | 400 | 1.65 | normal | Paragraphs, descriptions |
| body-large | Jet Brains Mono | 1.125rem | 400 | 1.78 | -0.05em | Hero subheadings, lead copy |
| label | Jet Brains Mono | 0.8125rem | 400 | 1.45 | normal | Captions, metadata, small UI |
| navigation | Jet Brains Mono | 0.875rem | 400 | 1.65 | normal | Nav links, menu items |
| navigation-active | Jet Brains Mono | 0.875rem | 500 | 1.65 | normal | Current page, selected nav |
| button | Jet Brains Mono | 0.8203125rem | 700 | 1.5 | normal | Button labels, CTAs |
| code | Jet Brains Mono | 0.8125rem | 400 | 1.45 | normal | Inline and block code |
| fallback-ui | Arial | 0.8203125rem | 700 | 1.5 | normal | Fallback button rendering |

JetBrains Mono is designed by Philipp Nurullin and Konstantin Bulenkov, distributed by JetBrains. Jet Brains Mono-Italic is available for code comments and emphasis but does not appear in UI labels. Verify licensing for these families before production use. Display sizes push to 60px (3.75rem) for maximum impact, while the 48.75px (3.046875rem) alternate serves tighter compositions. All sizes snap to the 2px relative unit grid.

## Layout

The page structure follows a centered, single-column rhythm for marketing content with occasional two-column splits for feature demonstrations. Maximum content width appears constrained to a readable measure, with generous vertical breathing room between sections.

The navigation bar spans full width with a compact horizontal arrangement: logo mark left, text links center, and utility actions (Sign In, theme toggle, search) right-aligned. Links use the navigation token with ample horizontal spacing between items. Below the nav, hero sections center all content—headline, subhead, and action pair—above a large product screenshot or illustration.

Feature sections alternate between white and dark surfaces. The "Complete stack" pattern places a vertical stack of bordered cards on the left, each with an icon, bold title, and description, while the right side hosts a full-height code panel with syntax highlighting. This 40/60 or 50/50 split creates a natural reading flow from capability list to implementation proof.

Section spacing uses 75px (4.6875rem) as the major block separator, with 15px–18.75px gaps between related elements. Cards and buttons share a consistent 3px corner radius, while the retro shadow treatment—4px right and 4px down in pure black—applies to buttons, cards, and input fields alike. This shadow never blurs; it is a hard offset that reinforces the blocky, pixel-conscious aesthetic.

## Visual language

Illustrations and iconography follow a flat, outline-heavy style with limited color palettes. The rocket-launch and astronaut motifs use soft lavender fills with black strokes, occasionally punctuated by cyan stars or UI elements. These feel like vector assets from a technical documentation set rather than marketing illustrations—purposeful, slightly whimsical, but never decorative for its own sake.

The dashboard screenshot in the hero demonstrates the product's actual interface: lavender sidebar chrome, monospace data tables, and status indicators in green and amber. This "show the real tool" approach extends to code blocks, which display actual configuration files with authentic syntax highlighting rather than abstract placeholders.

Border treatment is a defining visual signature. Cards use 4px solid black borders; buttons and inputs use 2px. The consistent border weight across elements creates a family resemblance that reads as intentional restraint. Combined with the hard 4px shadow offset, the system evokes early Macintosh window chrome and terminal emulator aesthetics without becoming pastiche.

Negative space is generous. The white canvas dominates, letting black type and lavender accents command attention. When dark surfaces appear, they are complete inversions—full black rectangles with light text, not gradients or overlays.

## Components

### Primary button

- **Anatomy**: Text label centered within a bordered rectangle with hard offset shadow
- **Surface**: Lavender fill (`{colors.accent}`) with black text
- **Typography**: `{typography.button}`
- **Shape**: 2px solid black border, 3px radius, 4px 4px 0 0 black box-shadow
- **Spacing**: 0.703125rem vertical, 0.9375rem horizontal padding
- **Composition**: Often paired with a secondary button variant; sits below headlines or within card footers
- **Variants**: Secondary uses white fill; both share identical border and shadow treatment

### Secondary button

- **Anatomy**: Identical structure to primary with inverted surface
- **Surface**: White fill (`{colors.canvas}`) with black text
- **Typography**: `{typography.button}`
- **Shape**: 2px solid black border, 3px radius, 4px 4px 0 0 black box-shadow
- **Spacing**: 0.703125rem vertical, 0.9375rem horizontal padding
- **Composition**: Appears alongside primary for choice architecture; also used for "Documentation" style actions

### Feature card

- **Anatomy**: Icon, bold title, and description stacked vertically within a bordered container
- **Surface**: White fill with black text; active state switches to lavender fill
- **Typography**: Title uses `{typography.section-display}` at 20px (1.25rem) scaled down; description uses `{typography.body}`
- **Shape**: 4px solid black border, 3px radius, no shadow in default state
- **Spacing**: 0.9375rem internal padding; 0.75rem gap between stacked cards
- **Composition**: Vertical stack on left side of split layouts; right side paired with code panel
- **Variants**: Active state adds lavender background; hover likely shifts similarly

### Code block

- **Anatomy**: Monospace text with syntax highlighting, optionally with left gutter padding
- **Surface**: Black background (`{colors.surface}`) with light gray and lavender text
- **Typography**: `{typography.code}`; comments in muted gray, strings in lavender, keywords in white
- **Shape**: 3px radius, no border, generous internal padding (0.9375rem default, 1.875rem left for indented blocks)
- **Spacing**: 15px padding standard; 30px left padding for nested or continuation blocks
- **Composition**: Full-width within dark panels; scrolls horizontally if needed

### Input field

- **Anatomy**: Single-line text entry with placeholder text
- **Surface**: White fill with black text, lavender focus border
- **Typography**: `{typography.body}` for entered text; placeholder in muted tone
- **Shape**: 2px solid black border, 3px radius, 4px 4px 0 0 black box-shadow
- **Spacing**: 0.9375rem padding
- **Composition**: Stacked above submit buttons in newsletter and contact forms

### Navigation link

- **Anatomy**: Text label with optional dropdown indicator
- **Surface**: Transparent; active state uses medium weight
- **Typography**: `{typography.navigation}` or `{typography.navigation-active}`
- **Shape**: No border; 2px border and shadow on button-style nav items (Sign In)
- **Spacing**: 0.234375rem vertical, 0.703125rem horizontal padding; 3.046875rem gap between items
- **Composition**: Horizontal list in header; collapses to menu on smaller viewports

## Responsive behavior

The design's monospace foundation and generous spacing translate naturally to narrower viewports, though specific breakpoints are not visible in the supplied material. The two-column feature split should stack vertically on tablet and below, with the code panel following the card list rather than sitting beside it. Hero headlines at 60px will require reduction to 48.75px or 40px on mobile to prevent overflow.

The navigation's horizontal link list should collapse to a hamburger menu or compact dropdown, preserving the Sign In button as a persistent action. Dashboard screenshots in the hero may require horizontal scrolling or responsive cropping to maintain legibility of the monospace data tables.

Button pairs in the hero should stack vertically on narrow screens, with the primary action above the secondary. The 4px shadow offset remains constant across all sizes; do not scale the shadow with the button.

## Practical implementation guidance

### Preserve
- The hard 4px shadow offset on all interactive elements—this is the system's most distinctive signature
- JetBrains Mono for every text layer; do not substitute system fonts for UI chrome
- The 2px/4px border weight hierarchy: 4px for cards, 2px for buttons and inputs
- Lavender (`#B0BAFF`) as the sole interactive accent against the black-and-white foundation
- Flat illustrations with limited palettes; avoid photographic realism or gradient meshes

### Avoid
- Blurred or diffuse shadows; the shadow must be a solid 4px offset
- Rounded corners larger than 3px; the slight radius is intentional restraint
- Multiple accent colors; cyan (`#00FFF5`) is reserved for code syntax only
- Gradient backgrounds or overlays; use solid color blocks exclusively
- Serif or humanist sans-serif typefaces; they break the developer-tool aesthetic

### Recommended build order
1. Establish the 2px relative unit grid and apply JetBrains Mono at body size
2. Implement the button component with correct border, radius, and shadow
3. Build the navigation with active-state weight change
4. Create the feature card stack with icon + title + description pattern
5. Add the code block with dark surface and syntax highlighting
6. Compose the hero section with centered headline, subhead, and button pair
7. Integrate the dashboard screenshot or illustration with proper spacing

### Accessibility
- Ensure the lavender-on-white button combination meets WCAG contrast requirements; the 2px black border helps distinguish boundaries
- Code blocks should include copy-to-clipboard functionality and avoid color-only meaning
- The hard shadow creates a perceived button depth that benefits motor-impaired users; maintain this affordance
- Dark mode should invert the palette systematically: black canvas, white ink, with lavender retained for accents

## Scope note

This guide covers the marketing homepage and its visible components. Pricing pages, documentation layouts, authenticated dashboard interfaces, and mobile-specific adaptations are not represented in the supplied material. The console screenshot in the hero is illustrative of product capability but not documented as a component here. Measurements are exact where retained and practical adaptation targets where rounded to the 2px grid.
