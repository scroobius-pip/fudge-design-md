# How neubrutalism.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/neubrutalism.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with bold yellow background, oversized black Syne typography spelling NEUBRUTALISM, and three stacked code-example cards with hard shadows on the right](https://pin.fontofweb.com/9977?format=jpg)](https://design.withfudge.com/share/pin-9977)

[Hero section with bold yellow background, oversized black Syne typography spelling NEUBRUTALISM, and three stacked code-example cards with hard shadows on the right](https://design.withfudge.com/share/pin-9977)

[![Dark mode content section with navy background, white Space Grotesk heading, body text with yellow highlighted terms, and a pull-quote card with olive background](https://pin.fontofweb.com/9976?format=jpg)](https://design.withfudge.com/share/pin-9976)

[Dark mode content section with navy background, white Space Grotesk heading, body text with yellow highlighted terms, and a pull-quote card with olive background](https://design.withfudge.com/share/pin-9976)

[![Dark mode definition section showing section label, large heading, multi-paragraph body with bold emphasis, and a right-aligned quote block with decorative quotation marks](https://pin.fontofweb.com/9975?format=jpg)](https://design.withfudge.com/share/pin-9975)

[Dark mode definition section showing section label, large heading, multi-paragraph body with bold emphasis, and a right-aligned quote block with decorative quotation marks](https://design.withfudge.com/share/pin-9975)

## Overview

Neubrutalism.com is a self-referential design guide that embodies the movement it documents. The site operates in two dramatic modes: a light mode with a warm yellow hero canvas and dark content sections, and a dark mode with near-black backgrounds and pale text. The visual system is built on deliberate graphic bluntness—zero border radii, thick black outlines, hard offset shadows, and oversized display typography that refuses conventional refinement. Every element declares its presence through high contrast, exposed structure, and emphatic geometry rather than subtle polish.

The design vocabulary is intentionally limited and repeated: three accent colors (yellow, coral, teal) against black and white, a single weight of hard-edged shadow, and a strict typographic hierarchy that scales from monumental hero text down to monospace labels. Navigation sits at the top with a thin underline border, content sections stack vertically with generous breathing room, and illustrative cards float with visible box-shadow declarations that explain their own construction. The overall effect is educational and declarative—the interface teaches neubrutalism by being neubrutalist.

## Colors

The palette is split into two distinct modes with a shared accent system. Light mode uses warm off-white and pure white surfaces against black ink. Dark mode inverts this relationship, using deep navy-charcoal backgrounds with pale gray text. Both modes share the same three accent colors for highlights, interactive states, and illustrative elements.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text, borders, shadows in light mode |
| canvas | #FFFDF5 | Light mode body background |
| surface | #FFFFFF | Cards, nav background, elevated panels in light mode |
| accent-yellow | #FFD23F | Hero background, highlighted terms, active nav state |
| accent-coral | #FF6B6B | Illustrative card backgrounds, decorative accents |
| accent-teal | #7FDBDA | Illustrative card backgrounds, decorative accents |
| dark-canvas | #14131A | Dark mode body background |
| dark-surface | #1F1E28 | Dark mode nav, section backgrounds |
| dark-ink | #ECECED | Dark mode primary text |
| dark-border | #F3F3F6 | Dark mode borders, subtle shadows |
| dark-accent-bg | #2A2512 | Quote block backgrounds, special callout surfaces |

Light mode presents the highest contrast: pure black on warm yellow in the hero, then black on white for content. Dark mode softens the contrast slightly with pale gray text on deep charcoal, but maintains the same structural emphasis through white borders and light gray shadows. The three accent colors—yellow, coral, teal—appear in both modes as functional highlights and decorative elements. Yellow specifically marks active navigation states and inline highlighted terms. The dark-accent-bg olive-brown provides a muted surface for pull quotes that avoids competing with the brighter accents.

## Typography

The type system combines four primary families across distinct roles: Syne for monumental display and branding, Space Grotesk for section headings and quotes, Inter for body text and navigation, and Space Mono for labels and technical annotations. The design facts also list Applesystem, Bricolage Grotesque 36 Pt 36 Pt, and Arial as detected families, though these appear to serve as system fallbacks or root-level defaults rather than applied interface typography. Each primary family serves a specific structural purpose, and weights are used sparingly—mostly Regular and Bold/800 distinctions.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Syne | 9rem | 800 | 0.9 | -0.04em | Homepage hero title |
| section-display | Space Grotesk | 3.5rem | 700 | 1.15 | -0.02em | Section headings |
| body | Inter | 1.125rem | 400 | 1.7 | 0 | Default paragraphs, navigation |
| body-large | Inter | 1.375rem | 400 | 1.65 | 0 | Introductory paragraphs |
| label | Space Mono | 0.875rem | 400 | 1.7 | 0.14em | Section numbers, tags, metadata |
| navigation | Inter | 1.125rem | 400 | 1.7 | 0 | Nav links, menu items |
| logo | Syne | 1.5rem | 800 | 1.7 | -0.03em | Site wordmark |
| quote | Space Grotesk | 1.75rem | 500 | 1.4 | 0 | Pull quotes, callout text |

Syne appears at its most extreme in the hero display, set at 144px with tight negative tracking and a compressed line height that forces the word NEUBRUTALISM into three stacked lines. Space Grotesk at 56px handles section headings with slightly looser leading and moderate negative tracking. Inter at 18px provides the workhorse body text with comfortable 1.7 line height for extended reading. Space Mono at 14px with expanded letter spacing creates a technical, archival voice for labels like "01 — DEFINITION". The logo uses Syne at 24px with an 800 weight to match the hero's voice at a smaller scale.

Space Grotesk is designed by Florian Karsten. Space Mono is designed by Colophon Foundry and Benjamin Critton. Verify licensing for these families before production use.

## Layout

The page uses a centered content column with generous fixed margins and full-bleed section backgrounds. The nav container uses horizontal margins of 100px, while main content sections use 200px margins—creating a nested hierarchy where navigation feels slightly wider than the reading column. All containers use 24px horizontal padding for internal gutter space.

Sections stack vertically with no border radius and sharp horizontal dividers. The hero section uses 96px top padding and 128px bottom padding, establishing the largest vertical rhythm on the page. Content sections mirror this spacing. Internal content blocks use 48px row gaps for separation between paragraphs, headings, and media elements.

The grid is fundamentally single-column for text content, with occasional two-column moments where a text block sits beside a quote card or illustrative element. Cards and interactive elements use hard shadows offset 8px down and right, creating a lifted physical presence without any blur. Borders are consistently 2-3px solid with zero radius, reinforcing the flat, cut-paper aesthetic.

Navigation items use auto margins to push the link list to the right, with the logo anchored left. The active nav item receives a filled yellow background with black border, while inactive items remain transparent. A theme toggle sits at the far right of the nav bar.

## Visual language

The visual language is defined by graphic bluntness: every shape has a hard edge, every shadow is a solid offset block, and every transition is abrupt. There are no gradients, no blurs, no rounded corners, and no subtle opacity shifts. The design communicates through contrast and scale rather than refinement.

Illustrative cards on the homepage demonstrate the system's own CSS properties—each card displays a property declaration like `border: 3px solid #000;` or `box-shadow: 5px 5px 0 0 #000;` as its content, making the interface self-documenting. These cards stack with visible overlap, each offset by its own shadow, creating a sense of physical depth through pure geometry.

Typography reinforces this bluntness through extreme scale contrasts. The hero display dominates the viewport at 144px, while body text remains modest at 18px. Section labels use monospace with letter-spaced uppercase, creating a cataloging, archival voice. Inline highlights use the yellow accent as a flat background behind key terms, functioning like a physical highlighter marker.

The dark mode transformation is complete and systematic: every background, text, and border color inverts while structural relationships remain identical. Shadows in dark mode use pale gray (#F3F3F6) instead of black, maintaining visibility against dark surfaces. The result is a site that feels equally emphatic in either mode, never drifting toward conventional polish.

## Components

### Navigation bar

- **Anatomy**: Fixed horizontal bar containing logo wordmark (left), link list (center-right), and theme toggle (far right)
- **Surface**: White background in light mode, dark-surface in dark mode; 3px solid bottom border in ink or dark-ink
- **Typography**: Logo uses `{typography.logo}`; links use `{typography.navigation}`
- **Shape**: Zero border radius; full viewport width
- **Spacing**: 12px vertical padding; 100px horizontal margins; 24px internal padding
- **Composition**: Flex row with space-between; link list pushed right with auto margin
- **Variants**: Active link receives accent-yellow fill with ink border and 2px solid border; inactive links transparent

### Hero section

- **Anatomy**: Full-width section containing section label, massive display heading, subtitle paragraph, description paragraph, and stacked illustrative cards
- **Surface**: accent-yellow background; ink text
- **Typography**: Label uses `{typography.label}`; heading uses `{typography.hero-display}`; subtitle uses `{typography.body-large}`; description uses `{typography.body}`
- **Shape**: Zero radius; full bleed
- **Spacing**: 96px top padding, 128px bottom padding; 32px margin below heading; 48px margin below subtitle
- **Composition**: Text block left-aligned; cards positioned right with absolute or fixed placement, overlapping vertically

### Section label

- **Anatomy**: Bordered pill-like tag containing section number and uppercase category
- **Surface**: White background; 2px solid ink border; zero radius (appears as sharp rectangle despite pill terminology)
- **Typography**: `{typography.label}` in uppercase with wide letter spacing
- **Spacing**: 4px vertical padding, 12px horizontal padding; 24px bottom margin to heading

### Content section

- **Anatomy**: Full-width section containing heading, body paragraphs, and optional sidebar quote block
- **Surface**: Dark-surface background in dark mode; ink or dark-ink text
- **Typography**: Heading uses `{typography.section-display}`; body uses `{typography.body}` or `{typography.body-large}` for intros
- **Shape**: Zero radius; 3px solid bottom border in dark-ink
- **Spacing**: 96px top, 128px bottom; 200px horizontal margins; 48px gap between content blocks
- **Composition**: Primary text column left; quote block right with offset positioning

### Quote block

- **Anatomy**: Contained block with decorative quotation marks, large quote text, and attribution
- **Surface**: Dark-accent-bg background; dark-ink text; no border
- **Typography**: `{typography.quote}` in Space Grotesk
- **Shape**: Zero radius
- **Spacing**: 32px padding top/bottom, 48px padding sides; 48px vertical margins

### Code example card

- **Anatomy**: Small rectangular card displaying a CSS property declaration as content
- **Surface**: White background; 2px solid ink border; hard shadow 8px 8px 0 0 ink
- **Typography**: Inline code uses a system monospace; descriptive labels use `{typography.label}`
- **Shape**: Zero radius
- **Spacing**: 16px padding
- **Variants**: Three colorways shown—white, coral, and teal backgrounds

### Theme toggle

- **Anatomy**: Small square button with icon
- **Surface**: Transparent or white background; 2px solid border; hard shadow
- **Shape**: Zero radius
- **Composition**: Fixed position in nav bar far right

## Responsive behavior

The design's fixed margins (100px nav, 200px content) suggest a desktop-first approach that will require adaptation at narrower viewports. The hero display at 9rem will need significant scaling down—likely to 4-5rem on tablet and 2.5-3rem on mobile—to maintain legibility without overflow. The two-column content section with sidebar quote should stack vertically on smaller screens, with the quote block following the primary text.

Navigation links may collapse to a hamburger menu below approximately 900px viewport width, given the horizontal space required by the logo, seven links, and theme toggle. The illustrative cards in the hero, currently positioned to the right, should either stack below the text or hide on mobile to preserve the primary message.

Body text at 18px with 1.7 line height remains comfortable across sizes, but the 200px content margins should reduce to 24px or 48px on tablet and 16px-24px on mobile. Section padding of 96px/128px can compress to 48px/64px on smaller screens while maintaining the generous vertical rhythm.

Dark mode should persist across breakpoints without structural changes—the color inversion is complete enough to handle any layout adaptation.

## Practical implementation guidance

### Preserve
- The zero border radius on every element—this is non-negotiable for neubrutalist identity
- Hard shadows with zero blur and positive offset (never inset, never diffuse)
- The specific three-accent palette (yellow, coral, teal) against black and white
- Extreme typographic scale contrast between hero and body
- Self-documenting code cards that explain their own CSS properties
- Complete mode inversion for dark theme, including shadow color shifts

### Avoid
- Any border radius above 0, even for buttons or tags
- Box shadows with blur values or negative spread
- Gradients, opacity layers, or glassmorphism effects
- Subtle color transitions or hover states that soften the graphic bluntness
- Generic sans-serif fallbacks for Syne or Space Grotesk—these faces carry the design voice

### Recommended build order
1. Establish CSS custom properties for both color modes with a data-attribute or class toggle
2. Implement the zero-radius global reset and 2-3px border standard
3. Set up the four font families with correct weights and scale tokens
4. Build the navigation with active state and theme toggle
5. Create the hero section with display typography and absolute-positioned cards
6. Develop the content section pattern with heading, body, and optional quote block
7. Add the hard shadow utility class and apply consistently
8. Implement dark mode switch with complete color remapping

### Accessibility
- The light mode hero (black on yellow) exceeds WCAG AA contrast requirements
- Dark mode text (#ECECED on #14131A) also passes AA standards
- Ensure the theme toggle is keyboard accessible and announces state changes
- The extreme hero scale (144px) may trigger zoom reflow issues—test at 200% and 400% zoom
- Hard shadows create visual depth but do not replace focus indicators; add visible focus rings that match the 2px border standard

## Scope note

This guide covers the homepage and definition section visible in the supplied images. Interior pages for Visual DNA, Fonts, History, Code, Usage, Ecosystem, and Future are not documented. Mobile breakpoints, hover states, focus styles, loading sequences, and form interactions are not represented in the available material. Applesystem, Bricolage Grotesque 36 Pt 36 Pt, and Arial appear in the detected font list but are not used as primary interface typography in the visible sections.
