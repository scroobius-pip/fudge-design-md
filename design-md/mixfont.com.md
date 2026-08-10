# How mixfont.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mixfont.com-design)

Last updated: 2026-08-10

## Captured pages

[![Font detail page metadata section showing category tags, mood labels, use case pills, and license information for Granite Echo in a clean two-column layout.](https://pin.fontofweb.com/9435?format=jpg)](https://design.withfudge.com/share/pin-9435)

[Font detail page metadata section showing category tags, mood labels, use case pills, and license information for Granite Echo in a clean two-column layout.](https://design.withfudge.com/share/pin-9435)

[![Interactive glyph inspector grid displaying uppercase, lowercase, and accented characters with a large selected glyph preview for the Granite Echo typeface.](https://pin.fontofweb.com/9434?format=jpg)](https://design.withfudge.com/share/pin-9434)

[Interactive glyph inspector grid displaying uppercase, lowercase, and accented characters with a large selected glyph preview for the Granite Echo typeface.](https://design.withfudge.com/share/pin-9434)

[![Font specimen page showing Granite Echo at multiple sizes with live preview text, size labels, and action buttons for playground editing and TTF download.](https://pin.fontofweb.com/9433?format=jpg)](https://design.withfudge.com/share/pin-9433)

[Font specimen page showing Granite Echo at multiple sizes with live preview text, size labels, and action buttons for playground editing and TTF download.](https://design.withfudge.com/share/pin-9433)

[![Free Fonts directory listing with search bar, filter controls, and large specimen previews of diverse display typefaces including Granite Echo, Doodle Bounce, Titanium Block](https://pin.fontofweb.com/9432?format=jpg)](https://design.withfudge.com/share/pin-9432)

[Free Fonts directory listing with search bar, filter controls, and large specimen previews of diverse display typefaces including Granite Echo, Doodle Bounce, Titanium Block](https://design.withfudge.com/share/pin-9432)

## Overview

Mixfont is a platform for discovering, previewing, and downloading AI-generated display fonts. The interface prioritizes the typefaces themselves: specimens are shown at dramatic sizes with minimal chrome, letting the fonts' personalities drive the visual experience. The design system rests on a foundation of crisp black-and-white contrast, generous vertical spacing, and a single workhorse sans-serif family for all interface text. Display fonts appear only in their specimen contexts, creating a clear separation between the platform's voice and the products it showcases. The result is a gallery-like environment that feels curated and professional while remaining accessible to designers browsing for project-ready type.

## Colors

The palette is intentionally restrained, built on near-black ink tones against pure white canvas. This neutrality ensures that colorful or high-contrast display fonts read clearly in all preview contexts.

| token | value | use |
|---|---|---|
| ink | #111111 | Primary text, headings, logo, primary buttons |
| ink-secondary | #262626 | Strong secondary text, active navigation |
| ink-tertiary | #4A4A4A | Body text in dense content areas |
| muted | #666666 | Descriptions, metadata, placeholder text |
| muted-light | #737373 | Subtle labels, disabled states |
| canvas | #FFFFFF | Page background, card surfaces, input backgrounds |
| surface | #F7F7F7 | Tag pill backgrounds, subtle hover states |
| surface-warm | #FAFAFA | Specimen preview blocks, alternate section backgrounds |
| border | #EDEDED | Section dividers, grid lines, subtle separators |
| border-light | #E6E6E6 | Input borders, card outlines |
| border-warm | #D7D7D7 | Stronger borders for focus states |
| action | #000000 | Primary button fill, icon buttons |
| action-inverse | #FFFFFF | Text on dark buttons, inverted navigation |
| accent-link | #0000EE | Text links in content areas |

The system operates in a single light mode. Dark text on white canvas dominates every surface. The specimen preview blocks use warm off-white to subtly separate font samples from surrounding interface chrome without introducing competing color. No gradients or shadows appear in the core interface; depth is created through spacing and border hierarchy alone.

## Typography

Inter serves as the sole interface typeface, handling everything from navigation to body copy to page titles at weights from 400 to 800. Display fonts from the Mixfont catalog appear only in specimen contexts, rendered at large sizes in their native Regular weight.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 10.6rem | 400 | 0.8 | 0em | Homepage hero headline |
| section-display | Inter | 2.8rem | 700 | 1.1 | 0em | Section headings in marketing pages |
| page-title | Inter | 2.6rem | 760 | 1.1 | -0.04em | Font detail page titles |
| body-large | Inter | 1.5rem | 500 | 1.45 | -0.01em | Lead paragraphs, sign-in page descriptions |
| body | Inter | 1rem | 400 | 1.65 | 0em | Primary body copy, navigation, labels |
| body-small | Inter | 0.9rem | 400 | 1.5 | 0em | Secondary descriptions, metadata |
| label | Inter | 0.85rem | 700 | 1.2 | 0em | Category headers, form labels |
| caption | Inter | 0.78rem | 400 | 1.4 | 0em | Tags, pills, small metadata |
| navigation | Inter | 0.85rem | 500 | 1.2 | 0em | Header navigation links |
| font-specimen-large | Granite Echo | 4.32rem | 400 | 1.12 | 0em | 69 px specimen preview |
| font-specimen-medium | Granite Echo | 3.42rem | 400 | 1.12 | 0em | 55 px specimen preview |
| font-specimen-small | Granite Echo | 2.52rem | 400 | 1.12 | 0em | 40 px specimen preview |
| font-specimen-xs | Granite Echo | 1.69rem | 400 | 1.12 | 0em | 27 px specimen preview |
| font-directory-display | Granite Echo | 6rem | 400 | 1.18 | 0em | Font listing preview at 96 px |

The platform showcases multiple display families: Granite Echo (condensed editorial serif), Doodle Bounce (playful ballpoint sans), Titanium Block Works (industrial geometric), and Phantom Velocity (athletic condensed). These appear only in specimen and directory contexts, never in interface chrome. Inter's weight range provides sufficient hierarchy without introducing additional families. Verify licensing for these families before production use; Granite Echo, Doodle Bounce, Titanium Block Works, and Phantom Velocity are provided by Mixfont.

The interface also includes Applesystem, Times, Arial, and Font Glyph Inspector Granite Echo 9 Bz 4 Cd in specific contexts. Applesystem appears at 14 px in unknown regions, likely as a system fallback. Times serves as the body fallback at 16 px. Arial renders icon glyphs at 13.3333 px in button regions. Font Glyph Inspector Granite Echo 9 Bz 4 Cd renders glyph previews at 32 px and 304 px in button regions.

## Layout

The layout follows a centered single-column model with generous margins. The main content area is constrained to a readable maximum width and offset with substantial horizontal margins on larger viewports.

**Page structure.** A fixed header spans the full viewport width with internal padding. Below it, the main content area sits centered with auto margins. Sections within the main area stack vertically with consistent gap spacing. The font detail page uses a two-column metadata layout at the bottom for categories, tags, moods, use cases, keywords, and license information.

**Content width.** The main content area uses horizontal margins of 262.5 px on each side at desktop widths, creating a narrow, focused reading column. The header uses slightly different padding at 68.8 px per side, allowing the navigation to breathe more widely than the content.

**Vertical rhythm.** Section spacing follows a clear hierarchy: 48 px top padding for main content entry, 72 px bottom padding for content conclusion, 34 px top padding for standard sections, and 28 px for compact sections. The gap between major content blocks is 42 px. Font specimen blocks use 22 px internal gap with 24 px row gap in multi-line previews.

**Grid behavior.** The glyph inspector uses a strict grid of character cells with 1 px borders. Directory listings stack vertically with full-width specimen previews. Metadata sections on font detail pages use a two-column grid at 40 px column gap.

## Visual language

The visual language is deliberately austere, letting typography itself become the decoration. Every surface choice supports this goal.

**Specimen-first hierarchy.** The largest visual element on any font page is the type specimen itself, rendered at sizes up to 6 rem in directory listings and 4.32 rem on detail pages. Interface elements recede through smaller sizes and lighter weights.

**Border-defined structure.** Thin 1 px horizontal rules in #EDEDED separate sections without visual weight. The glyph grid uses the same border value for cell divisions. No shadows appear in the core interface; the single exception is a subtle shadow pair on homepage content cards.

**Pill-shaped controls.** Tags, filter buttons, and navigation items use fully rounded caps. This creates a soft counterpoint to the rectangular specimen blocks and sharp glyph grid.

**Negative space as frame.** Generous padding around every element creates breathing room that functions as a frame for the fonts. The 262.5 px side margins on desktop are unusually wide, forcing focus on the central content column.

**Monochrome discipline.** With the exception of blue accent links, the entire interface restricts itself to grayscale. This ensures that any font previewed against the background maintains its intended color relationships.

## Components

**Header navigation**

- Anatomy: Logo mark and wordmark left-aligned, primary navigation links center-left, utility links (Sign In) right-aligned
- Surface: Transparent background over page canvas
- Typography: Navigation token for links, bold weight for logo wordmark
- Spacing: 26 px top padding, 68.8 px horizontal padding, 18 px row gap, 28 px column gap between logo and navigation
- Composition: Flex row with space-between behavior; navigation cluster uses 8 px gap between items

**Font specimen preview**

- Anatomy: Large text block showing sample sentence at defined size, optional size label right-aligned
- Surface: #FAFAFA background on detail pages, transparent on directory listings
- Typography: Font-specimen tokens at four defined sizes (69 px, 55 px, 40 px, 27 px equivalent)
- Spacing: 22 px internal gap, 24 px row gap between size variants
- Composition: Full-width block with right-floating size annotation

**Glyph inspector**

- Anatomy: Grid of character cells (9 columns visible), large single-glyph preview panel right of grid
- Surface: White cells with 1 px #EDEDED borders, selected cell with subtle highlight
- Typography: Specimen font at cell size, preview at 19 rem
- Spacing: Cell padding derived from grid density
- Composition: Grid left, preview right in fixed proportion

**Tag pill**

- Anatomy: Rounded rectangle containing text label
- Surface: #F7F7F7 background, #666666 text
- Typography: Caption token
- Shape: Full pill radius
- Spacing: 3 px vertical padding, 7 px horizontal padding

**Action button**

- Anatomy: Text label with optional icon
- Surface: #FFFFFF background with #000000 text and 1 px bottom-left border on secondary actions; #000000 fill with #FFFFFF text on primary
- Typography: Body-small to body weight 650
- Shape: 8 px radius on standard buttons, full pill on icon buttons
- Spacing: 6.625 px to 6.64 px padding on compact buttons, 18 px vertical and 24 px horizontal on prominent actions

**Search input**

- Anatomy: Text field with search icon, optional filter button adjacent
- Surface: #FFFFFF background, 1 px #E6E6E6 border
- Typography: Body-small
- Shape: 14 px radius, full pill on filter button
- Spacing: 42 px left padding for icon, 72 px right padding for clear/action

**Font directory card**

- Anatomy: Font name and description header, tag cluster right-aligned, full-width specimen preview below
- Surface: Transparent, separated by 1 px top border
- Typography: Label token for name, body-small for description, caption for tags, font-directory-display for preview
- Spacing: 26 px vertical padding on list items, 14 px gap between header elements

**Section divider**

- Anatomy: Full-width horizontal rule
- Surface: 1 px solid #EDEDED top border
- Spacing: 34 px top padding above, 22 px gap to content below

## Responsive behavior

The system is documented from desktop widths. The 262.5 px side margins on main content suggest a breakpoint where these collapse to the 24 px padding seen in some sections. The header maintains its 68.8 px horizontal padding across contexts, suggesting it may use a different breakpoint or fluid scaling.

At narrower widths, the two-column metadata layout on font detail pages should stack to single column. The glyph inspector may shift to a vertical arrangement with the preview above the grid. Directory listings maintain their full-width specimen previews but may reduce display size.

The navigation shows a dropdown pattern for Products and Platform, indicating nested menus that likely expand on hover or click. On mobile, these would convert to a collapsible menu or sheet.

## Practical implementation guidance

### Preserve
- The extreme specimen sizes that make fonts the hero of every page
- The generous side margins that create gallery-like focus
- The monochrome interface palette that never competes with displayed fonts
- The clear separation between Inter (interface) and catalog fonts (content)
- The 1 px hairline borders that structure without weight
- The pill-shaped tags and buttons that soften the rectilinear grid

### Avoid
- Adding color to the interface beyond the defined grayscale and single blue link accent
- Using display fonts for UI text, navigation, or buttons
- Reducing specimen sizes below the defined scale; the visual impact depends on scale
- Introducing shadows or gradients beyond the single card shadow on the homepage
- Crowding the glyph grid; the cell borders need surrounding whitespace to read

### Recommended build order
1. Establish the color tokens and apply canvas/ink/border to base elements
2. Set up Inter at 400 weight as the global font, then add weight variations
3. Build the header with logo, navigation, and utility links at defined spacing
4. Create the main content container with max-width and auto margins
5. Implement section dividers and vertical spacing rhythm
6. Add the font specimen component with size variants and background surface
7. Build the tag pill and button components
8. Create the glyph inspector grid with bordered cells
9. Add the directory listing layout with full-width previews
10. Implement search input with icon padding and filter button

### Accessibility
- Maintain 4.5:1 contrast minimum for all body text; the #111111 on #FFFFFF pairing exceeds 15:1
- Ensure specimen text at large sizes remains readable by allowing horizontal scroll or wrapping
- Provide visible focus indicators on all interactive elements; the existing border and background changes should be enhanced with outline offsets
- Use semantic heading hierarchy despite the visual dominance of specimens; page titles should be h1, section labels h2 or h3
- Ensure the glyph grid is navigable by keyboard; each cell should be a focusable button with the character as accessible name

## Scope note

This guide covers the font discovery, preview, and directory surfaces of Mixfont. The font generation playground, user account pages, and checkout flows are not represented in the supplied material. Motion, loading states, and mobile-specific layouts are not documented. Measurements are exact values from the retained interface records.
