# How squeak.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/squeak.org-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with Squeak balloon mascot, platform download buttons, and system browser screenshot](https://pin.fontofweb.com/10806?format=jpg)](https://design.withfudge.com/share/pin-10806)

[Homepage hero with Squeak balloon mascot, platform download buttons, and system browser screenshot](https://design.withfudge.com/share/pin-10806)

[![Downloads page with Quick Download table, Current Trunk section, and Virtual Machines table](https://pin.fontofweb.com/10809?format=jpg)](https://design.withfudge.com/share/pin-10809)

[Downloads page with Quick Download table, Current Trunk section, and Virtual Machines table](https://design.withfudge.com/share/pin-10809)

[![Documentation page with book covers grid, video links, and Getting Started resources](https://pin.fontofweb.com/10808?format=jpg)](https://design.withfudge.com/share/pin-10808)

[Documentation page with book covers grid, video links, and Getting Started resources](https://design.withfudge.com/share/pin-10808)

[![Homepage lower section with Features grid including Smalltalk, Morphic UI, and Fast VM descriptions](https://pin.fontofweb.com/10807?format=jpg)](https://design.withfudge.com/share/pin-10807)

[Homepage lower section with Features grid including Smalltalk, Morphic UI, and Fast VM descriptions](https://design.withfudge.com/share/pin-10807)

## Overview

The Squeak/Smalltalk website presents an open-source programming environment with a straightforward, utilitarian visual system. The design prioritizes content clarity and functional organization over decorative flourish, reflecting the project's academic and developer-oriented audience. A light neutral palette dominates, with strategic use of deep navy blue for interactive elements and section anchors. The layout relies on a centered content container with generous vertical breathing room between sections. Data-heavy pages like Downloads use bordered tables and monospace code styling, while the homepage balances hero imagery with feature descriptions. The overall impression is approachable and trustworthy—appropriate for a long-running open-source project with educational roots.

## Colors

The color system is restrained and functional, built around neutrals with a single strong accent and semantic status colors.

| token | value | use |
|---|---|---|
| action | #1B3C81 | Primary links, navigation active states, download buttons, section headings |
| ink | #333333 | Primary body text, table content, feature descriptions |
| ink-secondary | #555555 | Secondary text, footer links |
| muted-ink | #777777 | Tertiary text, captions, metadata |
| canvas | #F8F8F8 | Page background, subtle section alternation |
| surface | #FFFFFF | Content cards, table backgrounds, input fields |
| surface-warm | #FCF8E3 | Warning banner backgrounds |
| surface-info | #D9EDF7 | Informational banner backgrounds |
| border | #E7E7E7 | Default dividers, table borders, card outlines |
| code-bg | #F9F2F4 | Inline code and preformatted text backgrounds |
| code-ink | #C7254E | Inline code text color |
| success | #31708F | Informational text, status indicators |
| warning | #8A6D3B | Warning text, alert content |

The interface operates in a light mode exclusively. The deep navy action color provides sufficient contrast against white and light gray surfaces. Status banners use pale tints—blue for information, cream for warnings—with corresponding darker text to maintain readability. Image palettes from screenshots introduce brighter accent colors (balloon rainbow, interface chrome) but these remain photographic rather than interface tokens.

## Typography

The type system uses three font families with clear role separation. Lato carries all content and headings. The system font stack handles navigation and UI labels at small sizes. DejaVuSansMono serves code and technical content exclusively.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lato | 1.6875rem | 500 | 1.1 | 0em | Page titles, major section headings |
| section-display | Lato | 1.3125rem | 500 | 1.1 | 0em | Subsection headings, feature titles |
| body | Lato | 1rem | 400 | 1.2 | 0em | Paragraph text, descriptions, list items |
| body-loose | Lato | 1rem | 400 | 1.2 | 0em | Table cell content, longer reading passages |
| label | -apple-system | 0.875rem | 400 | 1.3 | 0em | Form labels, table headers, button text |
| navigation | -apple-system | 0.6875rem | 600 | 1 | 0em | Top navigation items, small UI labels |
| code | DejaVuSansMono | 0.9rem | 400 | 1.2 | 0em | Inline code, file paths, technical tokens |
| legal-copy | Lato | 0.875rem | 400 | 1.5 | 0em | Footer text, licensing information |

Lato appears at 400 Regular for body content, 500 Medium for headings, and 700 Bold for emphasis within paragraphs. The system font at 11px with 600 weight creates compact, scannable navigation. DejaVuSansMono at approximately 10.9px and 14.4px handles code at two scales—inline snippets and block displays. Verify licensing for these families before production use.

## Layout

The page structure follows a centered single-column pattern with occasional two-column splits for related content. The navigation bar spans full width with a light background, containing a logo mark on the left and horizontal link list on the right, with a Donate button at the far end. Below the navigation, content sits within a constrained central container.

The main content area uses a maximum width that creates comfortable line lengths for reading. On the homepage, this container holds a hero section with left-aligned imagery and right-aligned introductory text, followed by platform download buttons arranged horizontally. The Downloads page splits into a primary two-column layout: a larger left column for the Quick Download table and installation instructions, and a narrower right column for Current Trunk information and Virtual Machines tables.

Vertical rhythm relies on consistent section spacing. Major sections receive substantial top padding to create clear separation. Tables and data grids sit within bordered panels with internal cell padding. The Features section on the homepage uses a two-by-two grid with thumbnail images left and descriptive text right.

Responsive behavior should collapse the two-column layouts to single column on narrower viewports, with tables becoming horizontally scrollable. The navigation should convert to a collapsible menu on mobile rather than wrapping to multiple lines.

## Visual language

The visual character is intentionally understated—professional without being corporate. The Squeak balloon mascot and colorful screenshot imagery provide personality that the UI framework deliberately does not compete with. Interface elements are flat with minimal depth; shadows appear only on promotional banners and screenshot containers.

Borders serve as the primary structural device. Tables use 1px solid #E7E7E7 borders between rows and columns. Most structural elements remain square-cornered. Rounded corners are minimal and functional: 4px for buttons and inputs, 6px for larger panels, 999px for pill-shaped badges.

Iconography is sparse and practical—platform logos in download buttons, small file-type indicators in tables, external link arrows. The heart icon accompanies the Donate button. No custom icon font is used; system emoji and simple Unicode symbols handle decorative needs.

Photography and screenshots appear with subtle outer shadows (0px 4px 20px rgba(0,0,0,0.12)) to lift them slightly from the page background. The homepage hero screenshot is large and detailed, serving as both illustration and functional preview of the environment.

## Components

### Navigation bar

- Anatomy: Logo mark (Squeak mouse icon), horizontal link list, Donate button with heart icon
- Surface: Light background (#F8F8F8 or #FFFFFF), full-width with bottom border
- Typography: Navigation token for links, active state uses heavier weight or action color
- Spacing: Compact vertical padding, links evenly distributed with comfortable horizontal gaps
- Composition: Flex row with space-between alignment; logo left, links center-right, Donate far right

### Primary action button

- Anatomy: Text label with optional icon, rectangular with rounded corners
- Surface: Solid navy background (#1B3C81), white text
- Typography: Label token, system font at 14px
- Shape: 4px border radius
- Spacing: Compact vertical padding, default horizontal padding
- Variants: Platform download buttons include OS icon (Apple, Windows, Linux) above label text

### Data table

- Anatomy: Header row with column labels, body rows with data cells, optional footer
- Surface: White background, 1px #E7E7E7 borders between rows and columns
- Typography: Label token for headers (bold weight), body-loose token for cell content
- Spacing: Comfortable cell padding, compact row height
- Composition: Full-width within container, columns sized by content type
- Variants: Some tables include icon columns for platform support indicators

### Code block / inline code

- Anatomy: Inline span or preformatted block
- Surface: Pale pink background (#F9F2F4), crimson text (#C7254E)
- Typography: Code token, DejaVuSansMono family
- Shape: 4px border radius for blocks
- Spacing: Compact padding for inline, default padding for blocks

### Info banner

- Anatomy: Full-width strip with centered text, optional icon
- Surface: Pale blue background (#D9EDF7), informational text (#31708F)
- Border: 1px #BCE8F1 border
- Typography: Body token
- Spacing: Default vertical padding

### Warning banner

- Anatomy: Full-width strip with centered text
- Surface: Pale cream background (#FCF8E3), warning text (#8A6D3B)
- Border: 1px #FAEBCC border
- Typography: Body token
- Spacing: Default vertical padding

### Feature card

- Anatomy: Thumbnail image left, heading and paragraph right
- Surface: Transparent, no border or background
- Typography: Section-display token for heading, body token for description
- Composition: Two-column grid with fixed image width, text flows beside
- Spacing: Comfortable gap between image and text, substantial margin between cards

## Responsive behavior

The design appears optimized for desktop viewing with a fixed-width or max-width content container. At narrower viewports, the following adaptations should occur:

- The two-column homepage hero should stack vertically, with the balloon mascot and screenshot above the introductory text
- Download page side-by-side tables should collapse to single column, with the Quick Download table preceding supplementary information
- Feature cards should stack to single column with images above text
- Navigation links should collapse to a hamburger menu or dropdown
- Data tables should become horizontally scrollable rather than compressing column widths

The substantial horizontal margins (443px on some elements) suggest a very wide container on desktop; these should reduce to standard responsive gutters on smaller screens.

## Practical implementation guidance

### Preserve
- The restrained color palette with single navy accent against neutrals
- Lato for all content typography with clear weight hierarchy
- DejaVuSansMono for all code and technical content
- Generous vertical spacing between major sections
- Bordered tables with clean cell alignment for data presentation
- The distinctive Squeak balloon mascot and screenshot imagery

### Avoid
- Adding gradient backgrounds or decorative patterns
- Introducing additional accent colors beyond the navy action
- Using rounded corners larger than 6px on structural elements
- Crowding navigation with too many items—keep the horizontal link list scannable
- Replacing table-based data presentation with card layouts for download information

### Recommended build order
1. Establish the neutral canvas and surface color tokens
2. Implement Lato typography scale with weight distinctions
3. Build the navigation bar with logo, links, and Donate button
4. Create the content container with max-width and auto margins
5. Implement data table component with border and cell padding
6. Add code block styling with monospace family and distinctive colors
7. Build homepage hero with two-column responsive behavior
8. Add banner components for announcements and warnings

### Accessibility
- Ensure navy action color (#1B3C81) meets contrast requirements against white; it provides approximately 7:1 contrast
- Add visible focus indicators to all interactive elements, using the action color with outline offset
- Preserve semantic table markup with proper th/scope attributes for screen readers
- Provide alt text for all screenshot and mascot imagery
- Ensure code blocks remain readable at small sizes; consider allowing user zoom without horizontal scroll

## Scope note

This guide covers the homepage, Downloads, and Documentation pages as visible in the supplied captures. The design system describes light-mode presentation only; dark mode is not represented. Mobile breakpoints, animation, form validation states, and interactive hover effects are not documented from the still images. Measurements are derived from the supplied design facts with exact values where available.
