# How scenery.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/scenery.io-design)

Last updated: 2026-08-10

## Captured pages

[![Scene detail page showing a colorful spiral text artwork with metadata sidebar, green Download button, and tag pills on dark background.](https://pin.fontofweb.com/9012?format=jpg)](https://design.withfudge.com/share/pin-9012)

[Scene detail page showing a colorful spiral text artwork with metadata sidebar, green Download button, and tag pills on dark background.](https://design.withfudge.com/share/pin-9012)

[![Homepage mid-section with alternating feature blocks for Scene Graphs and scripts, green primary buttons, and dark UI screenshots.](https://pin.fontofweb.com/9011?format=jpg)](https://design.withfudge.com/share/pin-9011)

[Homepage mid-section with alternating feature blocks for Scene Graphs and scripts, green primary buttons, and dark UI screenshots.](https://design.withfudge.com/share/pin-9011)

[![Homepage hero with large centered headline using green accent for 'Cavalry', scene thumbnail grid, and rounded card previews.](https://pin.fontofweb.com/9010?format=jpg)](https://design.withfudge.com/share/pin-9010)

[Homepage hero with large centered headline using green accent for 'Cavalry', scene thumbnail grid, and rounded card previews.](https://design.withfudge.com/share/pin-9010)

[![FAQ section with accordion items, chevron icons, expanded answer text, and subtle hairline borders on near-black background.](https://pin.fontofweb.com/7139?format=jpg)](https://design.withfudge.com/share/pin-7139)

[FAQ section with accordion items, chevron icons, expanded answer text, and subtle hairline borders on near-black background.](https://design.withfudge.com/share/pin-7139)

## Overview

Scenery is a dark-themed community platform built for sharing, discovering, and learning from motion-design scenes created in Cavalry. The visual system prioritizes content over chrome: the interface recedes into a near-black canvas so that colorful artwork thumbnails and scene previews command full attention. Electric green serves as the singular accent color, reserved for primary calls-to-action like joining the community, downloading scenes, and highlighting key terms. The typography is clean and utilitarian, using Inter at a range of weights to establish clear hierarchy without decorative flourishes. Rounded corners are restrained, appearing most noticeably on buttons and tag pills, while cards and panels use moderate radii that feel contemporary without becoming playful. The overall impression is that of a professional tool adjacent to a creative portfolio—functional, trustworthy, and deliberately understated so that user-generated content remains the hero.

## Colors

The color system is built on a dark-mode foundation with a narrow functional palette and a single vibrant accent. Every surface sits on a spectrum from deep black through charcoal to slightly elevated grays, creating subtle depth without introducing visual noise. The green accent is used sparingly and consistently for interactive emphasis.

| token | hex | use |
|---|---|---|
| canvas | #09090B | Page background, deepest layer |
| surface | #18181B | Card backgrounds, elevated panels |
| surface-elevated | #27272A | Hover states, active accordion items, tag pills |
| border | #27272A | Card outlines, dividers, button borders |
| border-subtle | #2F3437 | Hairline separators, tag borders |
| ink | #FAFAFA | Primary headings, body text, navigation links |
| ink-muted | #A1A1AA | Secondary descriptions, metadata labels |
| ink-dim | #71717A | Tertiary information, disabled hints |
| action | #4ADE80 | Primary buttons, accent text, download actions |
| action-text | #09090B | Text on green buttons |
| accent-blue | #A8D3FA | Tag border variant, scene category indicators |
| accent-yellow | #DDD273 | Tag border variant, scene category indicators |
| accent-pink | #F5B4B8 | Tag border variant, scene category indicators |
| accent-teal | #9DD998 | Tag border variant, scene category indicators |

The dark canvas allows full-bleed artwork thumbnails to appear luminous and saturated. Green is the only accent applied to interactive elements; the pastel tag borders (blue, yellow, pink, teal) serve as non-interactive category markers derived from scene metadata. No light-mode variant is visible in the supplied material.

## Typography

The type system uses Inter exclusively, leveraging weight and size to create hierarchy rather than introducing additional families. Display sizes are tight and bold, while body sizes are generous with comfortable leading for extended reading.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4.5rem | 700 | 1 | -0.02em | Homepage hero headline |
| section-display | Inter | 3rem | 700 | 1 | -0.01em | Section headings, page titles |
| subhead | Inter | 1.5rem | 500 | 1.25 | normal | Subsection headings, card titles |
| body | Inter | 1rem | 400 | 1.5 | normal | Navigation, general body text |
| body-large | Inter | 1.25rem | 400 | 1.4 | normal | Feature descriptions, lead paragraphs |
| label | Inter | 0.875rem | 400 | 1.25 | normal | Metadata, captions, tag text |
| label-medium | Inter | 0.875rem | 500 | 1.25 | normal | Emphasized labels, button text |
| caption | Inter | 0.75rem | 400 | 1.33 | normal | Small tags, timestamps |
| navigation | Inter | 1rem | 400 | 1.5 | normal | Top-bar links |

Display headings at 72px and 60px appear in hero contexts, snapped to the 2px relative-unit grid. The 48px section display is the workhorse for page titles and major section breaks. Body text at 16px with 24px line-height provides comfortable reading density. The 14px label size appears frequently in metadata sidebars and tag lists. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous vertical breathing room. The top navigation is minimal: a left-aligned "Browse" link, centered wordmark, and right-aligned "Login" and "Join" actions. Content sections stack vertically with substantial gaps between them, creating a scroll-driven narrative pace.

Horizontal containment uses a max-width approach with side padding. The homepage hero centers its headline and call-to-action with ample top and bottom margin. Below, scene grids use a multi-column layout with uniform gaps, each thumbnail card maintaining square or near-square aspect ratios. Feature sections alternate between text-left/image-right and image-left/text-right compositions, breaking the vertical rhythm with asymmetric layouts.

The scene detail page splits into a large preview area (roughly two-thirds width) and a metadata sidebar (one-third). The preview holds the artwork at full resolution, while the sidebar stacks title, author, license, action buttons, and descriptive tags vertically. Spacing within the sidebar is tighter than the page-level rhythm, creating a denser information panel against the airy page canvas.

Vertical section spacing ranges from 2.5rem between related elements to 6rem between major page regions. Internal card padding sits at 2rem, with tag pills and metadata rows using 0.5rem to 1rem gaps. The accordion FAQ component uses full-width items with internal padding of 1.5rem, separated by single-pixel top borders.

## Visual language

The visual character is restrained and technical, appropriate for a community of motion designers. Rounded corners are present but disciplined: 4px for small interactive elements, 6px for buttons and tags, 12px for cards and panels, 16px for larger containers, and 9999px for true pills. No sharp 0px radii appear on visible components.

Shadows are subtle and functional, using layered black translucency for elevation rather than decorative depth. The pattern `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` appears on elevated cards, while a lighter `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` provides minimal lift for inline elements.

Imagery is entirely user-generated scene previews, displayed without frames or overlays except for hover states. Thumbnails in grids show the raw artwork edge-to-edge within their rounded containers. The platform provides no decorative illustration or branded photography of its own—the visual identity is expressed through typography, spacing, and the green accent alone.

Tag pills use colored borders to indicate scene categories or techniques, with each tag showing a small icon prefix and label text. These create rhythmic horizontal clusters that break up the monochrome palette with controlled pastel accents.

## Components

### Primary button
- **Anatomy**: Text label centered within a solid green background.
- **Surface**: Background `{colors.action}`, text `{colors.action-text}`.
- **Typography**: `{typography.label}` at 0.875rem, weight 400.
- **Shape**: Border radius `{rounded.medium}` (6px), no border.
- **Spacing**: Padding `0.5rem 1rem` (8px 16px).
- **Composition**: Inline-flex, often paired with a secondary outline button.
- **Variants**: Default green for primary actions.

### Secondary button
- **Anatomy**: Text label within a transparent background with hairline border.
- **Surface**: Transparent background, border `{colors.border}` at 1px, text `{colors.ink}`.
- **Typography**: `{typography.label}`.
- **Shape**: Border radius `{rounded.medium}`.
- **Spacing**: Padding `0.5rem 1rem`.
- **Composition**: Used for lower-priority actions like "Browse" or "Read License".

### Tag pill
- **Anatomy**: Icon prefix plus text label, sometimes with trailing count or status.
- **Surface**: Background `{colors.surface}`, border `{colors.border-subtle}` at 1px.
- **Typography**: `{typography.caption}` at 0.75rem.
- **Shape**: Border radius `{rounded.medium}`.
- **Spacing**: Padding `0.125rem 0.5rem`, internal gap approximately 0.25rem.
- **Variants**: Category tags use colored borders (`{colors.accent-blue}`, `{colors.accent-yellow}`, `{colors.accent-pink}`, `{colors.accent-teal}`) with matching dark backgrounds.

### Scene card
- **Anatomy**: Thumbnail image, title, author avatar and name, optional metadata row.
- **Surface**: Background `{colors.surface}`, border `{colors.border}` at 1px.
- **Shape**: Border radius `{rounded.large}` (12px).
- **Spacing**: Padding `2rem` internal, thumbnail fills top portion edge-to-edge.
- **Composition**: Vertical stack, thumbnail aspect ratio maintained, text below with 0.5rem gaps.

### Accordion item
- **Anatomy**: Question text with right-aligned chevron icon, expandable answer panel.
- **Surface**: Transparent background, top border `{colors.border}` at 1px.
- **Typography**: Question uses `{typography.label}` at 0.875rem weight 600; answer uses `{typography.body}` at 1rem weight 400.
- **Shape**: No border radius on individual items; container uses `{rounded.large}`.
- **Spacing**: Padding `1.5rem 0` per item, answer text with additional top margin.
- **States**: Collapsed shows downward chevron; expanded shows upward chevron with answer text revealed below.

### Navigation bar
- **Anatomy**: Left link, center wordmark, right action cluster.
- **Surface**: Transparent over page background.
- **Typography**: Links use `{typography.navigation}`.
- **Spacing**: Padding `0.5rem 1rem` on links, consistent vertical centering.
- **Composition**: Flex row with space-between alignment, fixed or sticky positioning.

### Metadata sidebar (scene detail)
- **Anatomy**: Author header, title, license block, action buttons, tag grid, technique list.
- **Surface**: Transparent, separated from preview by layout gap rather than visible divider.
- **Typography**: Title uses `{typography.section-display}`; metadata uses `{typography.label}` and `{typography.caption}`.
- **Spacing**: Section gaps of `1.5rem` to `2rem`, internal element gaps of `0.5rem` to `1rem`.
- **Composition**: Vertical stack, left-aligned, maximum width constrained to prevent excessive line lengths.

## Responsive behavior

The supplied images show desktop layouts exclusively. Based on the visual structure, the following responsive adaptations are recommended:

- The scene detail two-column layout should collapse to a single vertical stack on narrower viewports, with the preview above the metadata sidebar.
- The homepage scene grid should reduce from five columns to three, then two, then one as viewport width decreases, maintaining consistent gap spacing.
- Feature sections with alternating image-text layouts should stack vertically with text above imagery on mobile.
- The navigation bar should condense to a hamburger menu or simplified icon set when horizontal space is constrained, preserving the centered wordmark if possible.
- Display headings should scale down proportionally: hero-display from 4.5rem to 3rem to 2.25rem, section-display from 3rem to 2rem to 1.5rem, maintaining weight and tight leading.
- Horizontal page padding should reduce from 2rem to 1rem to 0.75rem on the smallest screens.

## Practical implementation guidance

### Preserve
- The near-black canvas as the default page background; never introduce a light theme without careful consideration of artwork contrast.
- The singular green accent for all primary interactive elements; do not dilute it with additional accent colors for buttons.
- Generous vertical spacing between sections; the airy rhythm is essential to the premium feel.
- The 6px border radius on buttons and tags as a consistent signature.
- Colored tag borders as a subtle wayfinding system for scene categories.

### Avoid
- Introducing decorative gradients, patterns, or textures behind content.
- Using borders heavier than 1px on any component.
- Cluttering the navigation with more than three to four items.
- Applying the green accent to non-interactive text or backgrounds.
- Sharp 0px corners on visible UI elements.

### Recommended build order
1. Establish the dark canvas and surface color tokens with Inter at 16px base.
2. Build the navigation component with transparent background and centered wordmark.
3. Implement the button system with primary green and secondary outline variants.
4. Create the scene card component with image, title, and author metadata.
5. Construct the scene detail layout with two-column preview and sidebar.
6. Add the tag pill system with colored border variants.
7. Implement the accordion component for FAQ and similar content.
8. Refine spacing tokens and responsive breakpoints based on content density.

### Accessibility
- Ensure the green action color (`#4ADE80`) against the dark canvas (`#09090B`) meets WCAG AA contrast requirements for normal text; if it falls short, restrict it to large text and UI components only.
- Provide visible focus indicators on all interactive elements, using a 2px outline offset or a contrasting ring.
- Maintain semantic heading hierarchy: h1 for page titles, h2 for sections, h3 for card titles and accordion questions.
- Ensure accordion controls are keyboard operable with Enter/Space to toggle and Arrow keys to navigate between items.
- Add aria-expanded and aria-controls attributes to accordion triggers for screen reader context.

## Scope note

This guide covers the homepage, scene detail page, login page, patrons page, and FAQ section as visible in the supplied desktop screenshots. Mobile layouts, breakpoint-specific behavior, loading states, error pages, form validation styling, and animation or motion design are not included.
