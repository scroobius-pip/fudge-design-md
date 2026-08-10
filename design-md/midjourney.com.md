# How midjourney.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/midjourney.com-design)

Last updated: 2026-08-10

## Captured pages

[![Explore page with a dark modal overlay showing a colorful abstract artwork and subscription call-to-action over a grid of AI-generated images.](https://pin.fontofweb.com/7958?format=jpg)](https://design.withfudge.com/share/pin-7958)

[Explore page with a dark modal overlay showing a colorful abstract artwork and subscription call-to-action over a grid of AI-generated images.](https://design.withfudge.com/share/pin-7958)

[![Image detail lightbox view displaying a glowing blue and red skull artwork with metadata tags and thumbnail navigation rail on a near-black background.](https://pin.fontofweb.com/7957?format=jpg)](https://design.withfudge.com/share/pin-7957)

[Image detail lightbox view displaying a glowing blue and red skull artwork with metadata tags and thumbnail navigation rail on a near-black background.](https://design.withfudge.com/share/pin-7957)

[![Homepage hero with a large typographic sphere made of monospace text fragments, centered action buttons, and an About section below on a deep navy background.](https://pin.fontofweb.com/7956?format=jpg)](https://design.withfudge.com/share/pin-7956)

[Homepage hero with a large typographic sphere made of monospace text fragments, centered action buttons, and an About section below on a deep navy background.](https://design.withfudge.com/share/pin-7956)

[![Updates page with a timeline layout showing dated changelog entries, category filter tabs, and a vertical connector line on a dark background.](https://pin.fontofweb.com/4939?format=jpg)](https://design.withfudge.com/share/pin-4939)

[Updates page with a timeline layout showing dated changelog entries, category filter tabs, and a vertical connector line on a dark background.](https://design.withfudge.com/share/pin-4939)

## Overview

Midjourney's interface is built around a single principle: the artwork comes first. The design system employs a near-black canvas that recedes completely, allowing AI-generated images to command full attention. Navigation and controls exist as thin, cool-gray layers that materialize only when needed. The homepage makes a bold typographic statement with a massive sphere constructed from monospace text fragments, establishing the brand's technical-artistic identity before any image appears. Inside the application, the experience shifts to a utilitarian dark mode with precise information hierarchy—image metadata, prompt tags, and community features are arranged in clean panels that never compete with the creative output. The system balances two personalities: the dramatic, almost cinematic presentation of individual artworks, and the dense, functional interface of a professional creative tool.

## Colors

The palette is aggressively dark, using true black and near-black surfaces as the default state. Cool grays provide structure without warmth, and a restrained set of functional accents handle states and feedback.

| token | value | use |
|---|---|---|
| canvas | #000000 | Default page background, image lightbox surround |
| surface | #090A0C | Elevated panels, sidebar, search bar backgrounds |
| surface-elevated | #1B1D22 | Modal panels, active navigation items, dropdown menus |
| surface-highlight | #1E1F25 | Tag pills, secondary button hover states |
| ink | #EBECEF | Primary headings, body text on dark, primary button text |
| ink-secondary | #C6C9D2 | Secondary headings, emphasized labels |
| ink-muted | #8F94A3 | Metadata, captions, placeholder text, inactive icons |
| ink-dim | #73798C | Tertiary information, disabled states |
| border-subtle | #434651 | Dividers, card borders, timeline connectors |
| border-hairline | #454954 | Button outlines, input borders |
| action-primary | #63B3ED | Links, interactive highlights, information states |
| action-danger | #F2330D | Active navigation indicators, destructive actions, "New" badges |
| action-success | #ECFDF5 | Success confirmations, positive feedback |
| action-warning | #FEFCE8 | Warning states, temporary notices |
| action-error-surface | #FFF1F2 | Error message backgrounds |
| accent-purple | #281730 | Deep accent for gradient endpoints |
| accent-blue | #0F1C36 | Midnight blue for gradient stops |
| accent-navy | #314062 | Muted blue for secondary accents |

The color philosophy separates content from chrome. Photographic and generated images supply all warmth and saturation; the interface remains clinically cool. Light text on dark surfaces is the invariant rule, with the single exception of primary buttons which invert to dark text on light surfaces for maximum actionability. The action-danger red serves double duty as both an error indicator and a brand accent for "new" feature badges, creating visual excitement in an otherwise restrained palette.

## Typography

Two families divide the typographic labor: DM Sans handles all interface text with clean geometric legibility, while JetBrains Mono owns the brand expression and technical content. The monospace family is not decorative—it carries the homepage hero, parameter tags, and any content that needs to feel precise or code-adjacent.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | JetBrains Mono | 1.875rem | 400 | 1.625 | normal | Homepage hero sphere, large brand statements |
| section-display | DM Sans 9 Pt | 2.25rem | 700 | 1.222 | -0.033em | Modal headings, page titles |
| body | DM Sans 9 Pt | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, general content |
| body-mono | JetBrains Mono | 1rem | 400 | 1.5 | normal | Technical labels, parameter displays |
| body-mono-loose | JetBrains Mono | 1rem | 400 | 1.625 | normal | Homepage body text, extended reading in monospace |
| label | DM Sans 9 Pt | 0.875rem | 400 | 1.5 | normal | Navigation items, captions, metadata keys |
| label-semibold | DM Sans 9 Pt | 0.875rem | 600 | 1.5 | normal | Emphasized labels, username displays |
| subhead | DM Sans 9 Pt | 1.125rem | 600 | 1.5 | normal | Section subheads, feature titles in modals |
| navigation | DM Sans 9 Pt | 1.125rem | 500 | 1.5 | 0.028em | Top-level navigation, sidebar section headers |
| button | DM Sans 9 Pt | 1rem | 500 | 1.5 | normal | Primary and secondary button labels |
| button-small | DM Sans 9 Pt | 0.75rem | 500 | 1.5 | normal | Compact actions, tag expansions |
| caption | DM Sans 9 Pt | 0.8125rem | 500 | 1.25 | normal | Image metadata tags, time stamps |

JetBrains Mono is credited to designers Philipp Nurullin and Konstantin Bulenkov, with vendor attribution to JetBrains. DM Sans 9 Pt carries no supported designer or vendor attribution in the supplied materials. Verify licensing for these families before production use.

## Layout

The interface follows a persistent sidebar-and-main pattern on desktop. The left sidebar occupies a fixed narrow column containing the Midjourney wordmark, primary navigation grouped by function (Create, Edit, Organize), aesthetic tools (Personalize, Moodboards, Style Creator), community features, and user account controls. The main content area flows to the right with generous padding.

The homepage breaks this pattern with a full-bleed immersive hero. The typographic sphere dominates the viewport center, with three action buttons (Sign Up, Log In, Explore) positioned directly below it. Content sections like About follow with centered narrow-column text, creating a landing-page rhythm distinct from the application's dashboard density.

Inside the application, layout density increases dramatically. The Explore page presents a masonry or grid of image cards with minimal gutters. Clicking an image launches a lightbox that centers the artwork against a black surround, with metadata and related images arranged in side panels. The Updates page uses a two-column timeline: dates and category labels anchor the left, while content flows on the right with a vertical connector line.

Spacing follows a 2px base unit. Key layout values include 32px for modal padding, 64px for section horizontal margins, 16px for card internal padding, and 8px for button margins. The system avoids large empty regions; even the homepage hero fills its space with the dense text sphere.

## Visual language

The visual identity emerges from contrast between organic, colorful generated imagery and rigid, technical interface chrome. The homepage's text sphere is the signature element—a three-dimensional form built from thousands of monospace characters in varying sizes and opacities, creating depth through typographic density alone. This establishes Midjourney as a company that treats language and code as sculptural material.

Elsewhere, restraint dominates. Borders are hairline-thin (0.5px to 1px) and cool-gray. Shadows are subtle and functional: a 0.5px 1px black shadow for button elevation, a 7px 21px shadow at 25% opacity for modal depth. Rounded corners are modest—6px for small elements, 8px for buttons, 12px for cards, 16px for panels, with full pills reserved for tags and avatar containers.

Image presentation is theatrical. The lightbox removes all surrounding interface, plunging the artwork into pure black. Thumbnail rails on the right edge provide navigation without breaking the immersion. On the Explore page, images sit edge-to-edge in grids, separated by the narrowest possible gutters, so the user's eye travels continuously across visual content.

The gradient vocabulary is minimal: a single directional fade from semi-transparent dark to transparent, used to soften panel edges or create depth in navigation backgrounds.

## Components

### Modal dialog

The modal appears as a centered panel over an 80% opacity black backdrop with blur. Anatomy includes a hero image on the left, text content on the right, and stacked action buttons at the bottom. Surface uses surface-elevated at 1B1D22. The heading uses section-display at 2.25rem bold with tight negative tracking. Body paragraphs use body at 1rem. Two buttons stack vertically: the primary button uses ink background with canvas text, the secondary button uses transparent background with ink text and a border-subtle outline. Both use 6px radius and 10px vertical padding. A footer link below the buttons uses ink-muted at 0.875rem. The modal panel has 12px to 16px radius depending on viewport.

### Image lightbox

The lightbox fills the viewport with canvas black. The artwork centers with maximum height constraint. A close control sits top-left. Right of the image, a metadata panel shows the creator username in label-semibold, a verification badge, time since creation, and the prompt text in body. Below, parameter tags render as tag-pill components with surface-highlight background and ink-muted text. A thumbnail rail of related images stacks vertically on the far right, each with 6px radius. At bottom-right, a Copy Prompt button uses surface-highlight background with ink text. The composition keeps all chrome at the edges, never overlaying the artwork.

### Sidebar navigation

The sidebar uses canvas background with surface width. Navigation items stack vertically with 6px left padding increments for hierarchy. Active items receive surface-elevated background and action-danger text. Inactive items use ink-secondary. Section headers like "AESTHETICS" and "COMMUNITY" use label at 0.875rem in ink-muted, uppercase styling. Items with new features append a small action-danger badge. The bottom of the sidebar holds Help, Updates, Dark Mode toggle, and the user avatar with username.

### Search bar

Positioned at the top of main content areas, the search bar uses surface background with 12px radius. It contains a search icon, placeholder text in ink-muted, and optional filter controls on the right. Height is approximately 48px with comfortable horizontal padding.

### Content cards

Image cards on Explore use canvas background with hidden overflow and 8px radius. No border by default; hover may reveal a subtle border-hairline. Images fill the card completely. Aspect ratios vary, suggesting a masonry layout rather than fixed grid.

### Timeline entry

On the Updates page, each entry has a date block left-aligned in label, with time below in caption. A vertical connector line in border-subtle runs between entries. The right column holds the title in subhead, followed by body text with bullet lists. Links within body text use action-danger for emphasis.

### Tag pill

Small rounded capsules with 9999px radius, surface-highlight background, and ink-muted text at caption size. Used for image parameters (aspect ratios, stylization values, model versions) and filter chips. Padding is tight at 6px horizontal, 4px vertical.

## Responsive behavior

The sidebar navigation collapses to icons or hides entirely on narrow viewports, becoming a bottom bar or hamburger menu. The homepage hero sphere scales down proportionally, maintaining its central position. Modal dialogs transition to full-screen sheets on mobile, with the image stacking above text content. The image lightbox maintains its centered artwork but may move metadata below the image rather than beside it. Timeline entries on Updates stack vertically with the date above content, eliminating the two-column layout. Thumbnail rails in the lightbox may become horizontal scrollers or collapse to a page indicator.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the default ground; any lightening reduces the cinematic impact of displayed artwork.
- The two-typeface system: DM Sans for interface, JetBrains Mono for brand and technical content.
- The hairline border aesthetic; thicker borders feel heavy against the delicate image presentation.
- The full-pill radius for tags and avatars; this is a recognizable Midjourney pattern.
- The negative letter-spacing on large headings; it creates the tight, confident display style.

### Avoid
- Warm grays or beige tints; the palette must stay cool to avoid clashing with colorful generated imagery.
- Drop shadows on image cards; let the images speak without decorative elevation.
- Rounded corners larger than 16px on panels; the system stays sharp and technical.
- Pure white backgrounds anywhere; even modals and buttons use off-white ink (#EBECEF) rather than #FFFFFF.

### Recommended build order
1. Establish the canvas black background and DM Sans body typography.
2. Implement the sidebar navigation with correct grouping and active states.
3. Build the image grid/masonry layout with proper card radius and gutter spacing.
4. Create the lightbox with black surround and edge-positioned metadata.
5. Add the modal dialog for subscription prompts with split image-text layout.
6. Implement the homepage hero with the text sphere and centered action buttons.
7. Polish with tag pills, timeline connectors, and micro-interactions.

### Accessibility
- Ensure all ink-muted text (#8F94A3) meets contrast requirements when used for interactive elements; it may need lightening for small text compliance.
- The lightbox surround is pure black; provide visible focus indicators for keyboard navigation between close control, metadata, and thumbnail rail.
- The text sphere homepage hero is decorative; provide equivalent heading structure below for screen readers.
- Parameter tags in tag-pill components should include descriptive labels beyond raw values like "5.2s" or "ar 51:91".

## Scope note

This guide covers the public-facing homepage, Explore grid and lightbox, and Updates timeline as visible in the supplied materials. The Create and Edit workflows, Organize dashboard, Moodboards, Style Creator, and account management pages are not represented. Mobile breakpoint behavior, animation specifications, and dark/light mode switching logic are inferred from desktop layouts and should be verified against live implementation. Measurements are drawn from retained interface records where available.
