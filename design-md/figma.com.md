# How figma.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/figma.com-design)

Last updated: 2026-08-10

## Captured pages

[![Figma Make & Sites Gallery page showing a grid of community project cards with thumbnail images, creator names, and category tags beneath a large display headline and Filter](https://pin.fontofweb.com/8790?format=jpg)](https://design.withfudge.com/share/pin-8790)

[Figma Make & Sites Gallery page showing a grid of community project cards with thumbnail images, creator names, and category tags beneath a large display headline and Filter](https://design.withfudge.com/share/pin-8790)

[![Resource library article page for human-computer interaction with a large display heading, breadcrumb navigation, sidebar explore menu, table of contents, and colorful abstract](https://pin.fontofweb.com/7973?format=jpg)](https://design.withfudge.com/share/pin-7973)

[Resource library article page for human-computer interaction with a large display heading, breadcrumb navigation, sidebar explore menu, table of contents, and colorful abstract](https://design.withfudge.com/share/pin-7973)

[![Resource library article page for skeuomorphism with a large display heading, breadcrumb navigation, sidebar explore menu, table of contents accordion, and body text with bullet](https://pin.fontofweb.com/7964?format=jpg)](https://design.withfudge.com/share/pin-7964)

[Resource library article page for skeuomorphism with a large display heading, breadcrumb navigation, sidebar explore menu, table of contents accordion, and body text with bullet](https://design.withfudge.com/share/pin-7964)

[![Figma Make & Sites Gallery page scrolled slightly downward showing the same card grid layout with project thumbnails, creator attribution, and category tags in a clean white space.](https://pin.fontofweb.com/8027?format=jpg)](https://design.withfudge.com/share/pin-8027)

[Figma Make & Sites Gallery page scrolled slightly downward showing the same card grid layout with project thumbnails, creator attribution, and category tags in a clean white space.](https://design.withfudge.com/share/pin-8027)

## Overview

The Figma.com design system presents a refined, editorial aesthetic that prioritizes clarity and content hierarchy. The visual language is built on a stark black-and-white foundation, with pure black typography set against an unmodulated white canvas. This high-contrast approach creates immediate visual authority and ensures that community-generated content, educational articles, and product information remain the focal point. The system employs generous whitespace as an active design element, using wide margins and substantial vertical spacing to separate content regions and prevent cognitive overload.

Two primary page archetypes are visible across the supplied images: a community gallery index featuring dense card grids of user projects, and long-form editorial articles with asymmetric two-column layouts. Both share common structural elements including a persistent top navigation bar, breadcrumb wayfinding on article pages, and a consistent typographic voice that shifts from large, tightly-tracked display headings to comfortable body copy. The design avoids decorative flourishes in favor of functional clarity, with subtle hairline borders and soft shadows providing just enough structure to define interactive elements without competing with the content they contain.

## Colors

The color system is intentionally minimal at its core, relying on a stark monochrome foundation for all interface elements. Black and white serve every functional need from text to surfaces to borders. Color enters the system exclusively through photography, illustration, and user-generated content, where vibrant accents appear in editorial artwork and gallery thumbnails.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, interactive labels, and all body copy |
| canvas | #ffffff | Page background, card surfaces, and button fills |
| border | #000000 | Button outlines, input borders, strong dividers, and 1px rules |
| hairline | #000000 | Subtle separators, navigation bottom borders, and table-of-contents rules at 8% opacity |
| accent-pink | #ff69b4 | Editorial illustration accents visible in article artwork |
| accent-green | #00c853 | Editorial illustration accents visible in article artwork |

The palette operates in a single light mode with no dark variant visible. The ink token serves every text role from the largest display headings to the smallest mono-spaced labels, with hierarchy established through size and weight rather than color variation. The hairline token creates barely-there horizontal rules when rendered at reduced opacity, separating navigation from content and defining table-of-contents boundaries without the visual weight of full black borders. When stronger containment is needed, such as for the Filter dropdown button or contact sales button, the full border token provides crisp 1px outlines. The accent tokens derive from colors visibly present in the editorial illustrations on article pages, where saturated pink and green shapes provide visual interest against the monochrome interface.

## Typography

The type system is built on two families: a variable sans-serif for all proportional text and a monospaced family for labels and metadata. The visual estimate mode applies; all sizes are whole-number multiples of the 2px relative unit.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Figma Vf | 3.5rem | 400 | 1.1 | -0.03em | Page titles and gallery headlines |
| section-display | Figma Vf | 2.5rem | 400 | 1.15 | -0.02em | Article headings and section titles |
| heading | Figma Vf | 1.5rem | 400 | 1.2 | -0.01em | Card titles, sidebar headings, subsections |
| body | Figma Vf | 1rem | 400 | 1.45 | 0 | Article paragraphs and descriptions |
| body-small | Figma Vf | 0.875rem | 400 | 1.45 | 0 | Card metadata, captions, secondary text |
| label | Figma Mono | 0.75rem | 400 | 1.2 | 0.05em | Category tags, breadcrumbs, UI labels |
| navigation | Figma Vf | 0.875rem | 400 | 1 | 0 | Top nav items, dropdown triggers |

The display sizes employ negative letter spacing for a tightly-set, confident appearance that suits Figma's design-tool positioning. The mono label style uses positive tracking and all-caps treatment for category tags such as "FIGMA MAKE", "APP", and "GAME" that appear beneath gallery cards. Body text maintains a comfortable 1.45 line height for extended reading in articles. No bold weights are visibly employed; hierarchy is achieved through scale contrast alone. Verify licensing for these families before production use.

## Layout

The layout system uses a centered content column with fluid margins that expand on wider viewports. Article pages employ an asymmetric two-column structure with a narrow sidebar and wider main content area.

The gallery pages show a maximum content width of approximately 1712px with horizontal margins of 192.5px on each side at desktop scale, creating substantial breathing room around the card grid. The card grid itself uses a four-column layout with consistent gutters between items. Article pages shift to a different proportion with 258px side margins, suggesting a narrower reading measure optimized for long-form content.

Vertical rhythm is established through section spacing of 6.5rem between major content regions. Within sections, content gaps of 1rem separate related elements, while card grids use 1.5rem gutters to maintain visual separation between dense thumbnail images. The top navigation bar receives 1rem vertical padding, with a hairline border beneath separating it from page content.

The article layout places a sticky or persistent sidebar on the left containing breadcrumb navigation, an "Explore more from" section with category links, and a table of contents accordion. The main content area on the right carries the article headline, author attribution, social sharing buttons, and body copy. This asymmetric ratio approximately follows a 1:2.5 proportion, giving the content ample room while keeping navigation accessible.

## Visual language

The visual language is characterized by restraint and editorial confidence. Surfaces are flat and unadorned, with no gradients, glassmorphism, or dimensional effects beyond a single subtle shadow treatment. Cards and containers rely on white backgrounds against the white page, separated only by thin hairline borders or the negative space of their margins.

Imagery plays a central role in breaking the monochrome system. Gallery cards feature full-bleed thumbnail previews of community projects, introducing vibrant color through user-generated content. Article pages include large editorial illustrations with bold geometric shapes and saturated accent colors that contrast sharply with the surrounding black-and-white typography.

Interactive elements are signaled through minimal affordances: buttons receive 1px black outlines and slight border-radius, dropdowns use a downward chevron icon, and links are indicated by underlines on hover or persistent underlines for inline text links. The Figma logo in the navigation provides the only consistent brand color presence, with its distinctive red, purple, and green gradient mark.

The overall impression is of a premium content platform that trusts its material to provide visual interest, using the design system as a neutral, sophisticated frame rather than a competing aesthetic force.

## Components

### Navigation bar

- Anatomy: Figma logo mark, primary navigation links with dropdown chevrons, utility links ("Log out"), and a bordered "Contact sales" button with user avatar
- Surface: White background with hairline bottom border
- Typography: Navigation token for all items
- Shape: Full-width bar with no border-radius
- Spacing: 1rem vertical padding, horizontal margins matching content grid

### Gallery card

- Anatomy: Full-bleed thumbnail image, project title in body-small token, creator name with avatar and underline link, row of category tags
- Surface: White card with no visible background separation from canvas
- Typography: Title in body-small, creator in body-small at reduced opacity, tags in label token with mono family
- Shape: 0.5rem border-radius on thumbnail image only
- Spacing: 1.5rem gap between cards in grid, internal spacing of 0.5rem between title and metadata

### Category tag

- Anatomy: Mono-spaced text label in all caps
- Surface: Transparent with no background
- Typography: Label token
- Shape: No border-radius
- Spacing: Inline with 0.5rem gap between multiple tags

### Filter button

- Anatomy: Text label "Filter" with downward chevron icon
- Surface: White background with 1px black border
- Typography: Body-small token
- Shape: 0.5rem border-radius
- Spacing: Internal padding of 0.75rem 1rem

### Article heading block

- Anatomy: Breadcrumb path with slash separators, large display heading, author attribution with Figma logo and name, social sharing icon row
- Surface: White with no containing border
- Typography: Label token for breadcrumbs, hero-display or section-display for title, body-small for author
- Spacing: 1rem gap between breadcrumbs and title, 1.5rem below title to author row

### Table of contents

- Anatomy: "TABLE OF CONTENTS" header with downward chevron, expandable content area with article subheadings
- Surface: White with hairline top and bottom borders
- Typography: Label token for header, body for list items
- Shape: No border-radius
- Spacing: 1.5rem vertical padding, full width of content column

### Sidebar explore menu

- Anatomy: "EXPLORE MORE FROM" label, section heading with underline, list of category links with right-pointing chevrons
- Surface: White with no containing border
- Typography: Label token for header, heading token for section title, body for links
- Spacing: 1rem gap between items in list

## Responsive behavior

The gallery grid should collapse from four columns to two columns at intermediate widths, then to a single column on narrow viewports, maintaining consistent card aspect ratios and internal spacing. Article pages should stack the sidebar above the main content on narrow screens, converting the table of contents to a full-width expandable section. The navigation bar should collapse dropdown menus into a hamburger pattern when horizontal space is insufficient, though this specific breakpoint is not visible in the supplied images. Typography should scale down proportionally, with display sizes reducing by approximately 30% on smaller screens to maintain line-length viability.

## Practical implementation guidance

### Preserve
- The stark black-on-white color foundation and refusal to use colored text for hierarchy
- Generous whitespace margins that frame content with confidence
- The mono-spaced label style for metadata and categorization
- Tight negative letter spacing on display headings
- The asymmetric article layout with persistent sidebar navigation

### Avoid
- Adding background colors or fills to cards that would compete with thumbnail imagery
- Using bold weights where scale contrast already establishes hierarchy
- Introducing decorative shadows or elevation effects beyond the single hairline treatment
- Reducing margins below 192px equivalent on desktop gallery pages

### Recommended build order
1. Establish the color tokens and typography scale with Figma Vf as the primary family
2. Build the navigation bar with hairline border and contact button pattern
3. Implement the gallery card component with thumbnail, title, creator, and tag structure
4. Create the four-column grid layout with 1.5rem gutters
5. Build the article page template with breadcrumb, display heading, and two-column structure
6. Add the table of contents accordion with hairline borders
7. Implement the sidebar explore menu with chevron-linked items

### Accessibility
- Ensure all text meets WCAG AA contrast against the white canvas; the pure black ink token exceeds requirements
- Provide visible focus indicators for all interactive elements, using the border token for button outlines
- Maintain logical heading hierarchy from h1 display titles through h2 section headings
- Ensure the table of contents accordion is keyboard operable with clear expanded/collapsed state
- Add descriptive alt text to all gallery card thumbnails and article illustrations

## Scope note

This guide covers the Figma.com gallery index and resource library article pages as visible in desktop viewport captures. Mobile breakpoints, dark mode, hover states, loading skeletons, form validation, and the complete icon set are not represented. Measurements are practical adaptation targets derived from the visible interface.
