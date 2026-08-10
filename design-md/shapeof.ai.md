# How shapeof.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/shapeof.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Grid of nine UX pattern cards with lavender-tinted thumbnails showing AI interface examples like example galleries, follow-up prompts, nudges, and templates in a two-column layout](https://pin.fontofweb.com/5115?format=jpg)](https://design.withfudge.com/share/pin-5115)

[Grid of nine UX pattern cards with lavender-tinted thumbnails showing AI interface examples like example galleries, follow-up prompts, nudges, and templates in a two-column layout](https://design.withfudge.com/share/pin-5115)

[![Hero section with large serif headline about UX evolution with AI, centered body text, and top navigation with Patterns, UI Library, and About links above a Wayfinders category](https://pin.fontofweb.com/5114?format=jpg)](https://design.withfudge.com/share/pin-5114)

[Hero section with large serif headline about UX evolution with AI, centered body text, and top navigation with Patterns, UI Library, and About links above a Wayfinders category](https://design.withfudge.com/share/pin-5114)

## Overview

The Shape of AI presents a pattern library for user experience design in artificial intelligence interfaces. The visual system balances editorial elegance with functional clarity, using a distinctive serif display typeface for headlines against a clean sans-serif body. The design organizes content into browsable categories—Wayfinders, Inputs, Tuners, Governors, Trust builders, and Identifiers—each containing specific UX patterns illustrated with interface mockups.

The overall impression is scholarly yet accessible: generous whitespace, soft lavender-tinted accents, and a restrained palette let the pattern examples remain the focus. The layout combines a persistent sidebar for category navigation with a main content area displaying pattern cards in a responsive grid. Every element serves the core purpose of helping designers understand and apply AI interaction patterns, from initial prompts to follow-up conversations and template-based workflows.

## Colors

The color system is intentionally minimal, relying on high-contrast black typography against white surfaces with a single soft accent hue for structural elements and hover states.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, active navigation, logo mark |
| canvas | #FFFFFF | Page background, card surfaces, input fields |
| muted | #6B6B6B | Secondary text, descriptions, inactive navigation items, metadata |
| accent | #E8E0F0 | Card borders, thumbnail backgrounds, category icon containers, subtle dividers |
| surface | #F5F2F8 | Hover states on cards, expanded section backgrounds, tinted UI mockup backdrops |

The palette operates in a single light mode. Black ink provides maximum readability for the editorial serif headlines and dense pattern descriptions. The lavender-tinted accent appears most prominently as the background tint within pattern thumbnails—simulating AI interface mockups with soft purple-gray backdrops—and as the thin borders surrounding pattern cards. Muted gray handles all secondary information, creating clear hierarchy without introducing additional hues. No dark mode is visible in the supplied material. The accent's low saturation keeps it from competing with the colorful interface examples within each pattern thumbnail.

## Typography

Two font families create the system's typographic hierarchy: Kalice Trial for display and editorial moments, Metro Sans for all functional and body text. Kalice Trial's high-contrast serifs and slightly condensed proportions give the hero headline a distinctive, bookish authority. Metro Sans provides neutral, highly legible support across all sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kalice Trial | 3rem | 400 | 1.1 | -0.01em | Homepage hero headline, major page titles |
| section-display | Kalice Trial | 1.5rem | 400 | 1.2 | 0 | Category headers, pattern names within cards |
| body | Metro Sans | 1rem | 400 | 1.6 | 0 | Hero subheadlines, pattern descriptions |
| body-small | Metro Sans | 0.875rem | 400 | 1.5 | 0 | Card descriptions, thumbnail captions |
| label | Metro Sans | 0.75rem | 400 | 1.4 | 0.02em | Tags, metadata, small UI labels |
| navigation | Metro Sans | 0.875rem | 400 | 1 | 0 | Top nav, sidebar category links |

Kalice Trial appears exclusively at display sizes with negative tracking for tighter word spacing at large scales. Metro Sans maintains consistent weight across all sizes—no bold or medium weights are employed in the visible interface, keeping the tone calm and uniform. The hero headline uses a notably tight line height of 1.1, creating a stacked, poster-like composition that contrasts with the more open 1.6 leading of body paragraphs.

Verify licensing for these families before production use. Kalice Trial is designed by Margot Lévêque. Metro Sans is designed by Samuel Oakes.

## Layout

The page structure follows a classic reference-library pattern: fixed header, persistent sidebar navigation, and a scrollable main content area with a card grid.

The top navigation bar spans the full viewport width, containing the logo mark and wordmark on the left and three text links—Patterns, UI Library, About—on the right. A thin horizontal rule separates the header from the hero section below.

The hero occupies substantial vertical space, centering a large serif headline and supporting paragraph against the white canvas. Below the hero, the layout transitions to a two-column structure: a narrow left sidebar for category navigation and a wider right area for pattern cards.

The sidebar lists six categories vertically with small icons preceding each label. The active category receives emphasis through darker text, while inactive items remain in muted gray. A vertical divider separates sidebar from main content.

The main content area presents pattern cards in a grid. At desktop widths, cards appear in a three-column arrangement with consistent gaps. Each card contains a lavender-tinted thumbnail showing an interface example, followed by a bold pattern name and a brief description. The grid maintains uniform card heights within rows through aligned thumbnail containers.

Spacing follows a 4px base unit. Section vertical padding uses 4rem. Card internal padding is 1.5rem. Grid gaps between cards measure 1.5rem horizontally and vertically. The sidebar navigation items stack with 0.75rem vertical spacing between entries.

## Visual language

The visual identity draws from academic reference materials and contemporary design documentation. The serif display typeface evokes printed design books and critical essays, while the systematic card grid suggests an expandable taxonomy of reusable patterns.

Pattern thumbnails are the most visually rich elements. Each simulates an AI interface—chat inputs, image galleries, prompt suggestions, template forms—rendered with soft lavender-gray backgrounds that unify disparate interface examples into a coherent library. These mockups use rounded corners, subtle shadows, and realistic UI elements including buttons, avatars, and text inputs, but always within the tinted container that signals "example" status.

Iconography appears in two contexts: small category icons in the sidebar (wayfinding compass, input symbols, tuning indicators) and functional icons within thumbnails (send buttons, attachment clips, dropdown chevrons). The category icons use simple line weights in muted gray, while thumbnail icons follow conventional interface patterns.

The overall density is moderate. Cards contain substantial whitespace between thumbnail and text, and between cards themselves. This breathing room prevents the information-dense pattern examples from overwhelming the reader. The design avoids heavy shadows or gradients, relying instead on thin borders and background tints for separation.

## Components

### Pattern card

The pattern card is the primary content unit, presenting a single UX pattern with visual example and description.

- **Anatomy**: Lavender-tinted thumbnail container at top, pattern name as bold section-display text below, description paragraph in body-small beneath the name.
- **Surface**: White canvas background with 1px accent-tinted border. No visible shadow in default state.
- **Typography**: Pattern name uses section-display token at 1.5rem. Description uses body-small at 0.875rem in muted color.
- **Shape**: 0.75rem border radius on card container. Thumbnail container uses 0.5rem internal radius.
- **Spacing**: 1.5rem internal padding. Thumbnail occupies full card width minus padding, with aspect ratio approximately 16:10.
- **Composition**: Thumbnail centered above text block. Text left-aligned with consistent top margin from thumbnail bottom edge.
- **Variants**: Cards appear uniform; no visible hover, selected, or expanded states in the supplied material.

### Category navigation

The sidebar navigation provides persistent access to pattern categories.

- **Anatomy**: Vertical stack of category items, each with leading icon and text label.
- **Surface**: Transparent background; no visible container.
- **Typography**: Navigation token at 0.875rem. Active category in ink color; inactive in muted.
- **Spacing**: Items stack with 0.75rem gap. Icon and text sit inline with 0.5rem horizontal spacing.
- **Composition**: Left-aligned within sidebar column. Vertical divider at 1px separates sidebar from main grid.

### Hero section

The homepage hero establishes the site's editorial tone and purpose.

- **Anatomy**: Centered headline in hero-display, centered subheadline in body token below, separated by substantial vertical space.
- **Surface**: White canvas background. Thin horizontal rule below separates hero from content.
- **Typography**: Headline uses Kalice Trial at 3rem with tight 1.1 line height. Subheadline uses Metro Sans at 1rem with open 1.6 line height.
- **Spacing**: Generous vertical padding, approximately 4rem above and below text block.
- **Composition**: Both text blocks center-aligned with maximum width constraint preventing excessive line lengths.

### Top navigation

The site-wide header provides brand identity and primary wayfinding.

- **Anatomy**: Logo mark (geometric "ai" monogram) plus wordmark "Shape of AI" on left. Three text links on right.
- **Surface**: White background with optional bottom border rule.
- **Typography**: Wordmark uses Metro Sans at navigation size. Links use same token in muted, with ink on hover or active.
- **Spacing**: Horizontal padding matches page margins. Vertical height approximately 3.5rem.
- **Composition**: Flex row with space-between alignment.

## Responsive behavior

The layout appears optimized for desktop viewing with a fixed sidebar and multi-column grid. At narrower viewports, the following adaptations are recommended: collapse the sidebar into a horizontal category filter or hamburger menu; reduce the hero headline to section-display size; transition the card grid from three columns to two, then single column; maintain card internal spacing while reducing external page margins. The thumbnail aspect ratios should persist across breakpoints to preserve pattern recognizability. Touch targets for sidebar items and thumbnail interactive elements should expand to minimum 44px height on touch devices.

## Practical implementation guidance

### Preserve
- The distinctive pairing of Kalice Trial serif for headlines with Metro Sans for everything functional. This contrast defines the site's scholarly personality.
- The lavender-tinted thumbnail backgrounds. These unify disparate interface examples and signal "pattern documentation" rather than live interface.
- The generous whitespace around hero text and between cards. The calm density supports extended browsing sessions.
- The thin 1px accent borders on cards. Subtle separation without visual weight.

### Avoid
- Adding bold weights to Metro Sans. The uniform weight maintains the calm, reference-library tone.
- Saturated colors competing with pattern thumbnails. The muted palette keeps focus on the examples.
- Heavy shadows or elevation effects. The flat, bordered card style is intentional.
- Tight line heights on body text. The open 1.6 leading supports readability of pattern descriptions.

### Recommended build order
1. Establish the 4px base unit and set up both font families with complete weight files.
2. Build the hero section with centered headline and subheadline, verifying the tight display line height.
3. Implement the two-column layout with sidebar navigation and vertical divider.
4. Create the pattern card component with thumbnail container, border, and text spacing.
5. Populate the card grid with sample content, adjusting column breakpoints.
6. Add top navigation with logo and link structure.
7. Fine-tune the accent color application across borders, thumbnail tints, and hover states.

### Accessibility
- Ensure the Kalice Trial headline maintains sufficient contrast at large sizes; the thin serifs may need careful rendering at smaller sizes.
- Provide visible focus indicators for sidebar navigation and card links, using ink or accent color outlines.
- Add aria-labels to category icons that supplement their text labels.
- Consider reduced-motion preferences for any thumbnail interactions.
- Maintain the high contrast between ink text and canvas backgrounds for readability.

## Scope note

This guide covers the homepage and pattern browsing interface of shapeof.ai as visible in the supplied material. The UI Library, About page, and individual pattern detail pages are not represented. Motion, hover states, mobile breakpoints, and dark mode are not covered. Measurements are practical adaptation targets.
