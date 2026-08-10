# How thelocal.no is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/thelocal.no-design)

Last updated: 2026-08-10

## Captured pages

[![Article page with masthead navigation, hero image of wheelbarrow in garden, orange logo, and sign-up gate with topic tags](https://pin.fontofweb.com/9147?format=jpg)](https://design.withfudge.com/share/pin-9147)

[Article page with masthead navigation, hero image of wheelbarrow in garden, orange logo, and sign-up gate with topic tags](https://design.withfudge.com/share/pin-9147)

[![Close-up of article body showing Eb Garamond serif lead paragraph with orange attribution link and clean white background](https://pin.fontofweb.com/9145?format=jpg)](https://design.withfudge.com/share/pin-9145)

[Close-up of article body showing Eb Garamond serif lead paragraph with orange attribution link and clean white background](https://design.withfudge.com/share/pin-9145)

[![Article excerpt with serif lead paragraph, orange photographer credit, and bold sans-serif sign-up prompt below](https://pin.fontofweb.com/9144?format=jpg)](https://design.withfudge.com/share/pin-9144)

[Article excerpt with serif lead paragraph, orange photographer credit, and bold sans-serif sign-up prompt below](https://design.withfudge.com/share/pin-9144)

## Overview

The Local Norway presents a news editorial experience that balances classical authority with contemporary clarity. The design centers on a high-contrast typographic system: warm, readable serif text for article content paired with crisp sans-serif for navigation, labels, and interactive elements. A single vibrant orange accent punctuates an otherwise restrained monochrome palette, drawing attention to links, topic tags, and the publication mark without overwhelming the reading experience. The overall impression is of a serious European news outlet—clean, uncluttered, and confident in its material choices. White space is generous, letting photography and typography breathe. The masthead is compact and functional, prioritizing section discovery over visual spectacle. Article pages lead with large serif paragraphs that establish immediate editorial tone, while supporting metadata and actions recede into efficient, smaller sans-serif labels.

## Colors

The palette is deliberately minimal: a near-white ground, deep charcoal body text, pure black for navigation and strong emphasis, muted gray for secondary actions, and a warm orange for all interactive and categorical highlights.

| token | value | use |
|---|---|---|
| ink | `#000000` | Navigation text, masthead links, primary UI |
| body | `#212529` | Article paragraphs, headings, main reading text |
| muted | `#666666` | Secondary buttons, inactive states, metadata |
| surface | `#FFFFFF` | Page background, card backgrounds, masthead |
| action | `#EF6C00` | Links, topic tags, logo accent, photographer credits |
| action-hover | `#393939` | Hover state for action elements |

The orange (`#EF6C00`) functions as the sole brand accent, appearing in the circular "no" badge of the logo, inline article links, photographer attribution, and hashtag-style topic tags at article footers. This warmth contrasts effectively against the cool neutrality of the black and charcoal system. Body text avoids pure black in favor of the softer `#212529`, reducing eye strain during extended reading. The muted gray serves utilitarian roles—button labels, secondary navigation—without competing for attention. No gradients, shadows, or background tints appear in the interface; color is applied flat and directly.

## Typography

Two families drive the system: **Eb Garamond**, a classical serif with high contrast and elegant proportions, and **Noto Sans**, a humanist sans-serif with broad language coverage and clean legibility. Eb Garamond appears exclusively in bold weight for editorial display and body text, lending the publication a distinctly European, print-informed character. Noto Sans handles everything else at various weights and sizes, from large section headings to small captions.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Noto Sans | 1.875rem | 700 | 1.5 | normal | Sign-up gates, major prompts |
| section-display | Eb Garamond | 1.625rem | 700 | 1.62 | normal | Article lead paragraphs |
| body | Eb Garamond | 1.625rem | 700 | 1.62 | normal | Article body text |
| label | Noto Sans | 0.9375rem | 600 | 1.5 | normal | Topic tags, buttons, metadata |
| navigation | Noto Sans | 1.25rem | 400 | 1.5 | normal | Masthead menu items |
| caption | Noto Sans | 0.875rem | 400 | 1.5 | normal | Photographer credits, inline links |
| utility | Noto Sans | 1rem | 400 | 1.5 | normal | General UI, lists, secondary text |

Eb Garamond is designed by Georg Duffner and Octavio Pardo, distributed by Georg Duffner. Noto Sans is designed by the Monotype Design Team, distributed by Monotype Imaging Inc. Verify licensing for these families before production use.

The type scale is built on a 2px relative unit. Display sizes (30px, 26px) anchor the hierarchy, with 19px for subheadings and 20px, 16px, 15px, and 14px filling navigation, utility, and caption roles. Line heights are generous—1.5 for sans-serif, 1.62 for serif—ensuring comfortable reading across device widths. Letter spacing remains normal throughout; no tight or expanded tracking is employed.

## Layout

The page structure follows a straightforward editorial pattern: fixed masthead, full-bleed hero image, centered article column, and inline conversion prompts. The masthead spans the full viewport width with horizontal section navigation, a search icon, and hamburger menu on the left, logo centered or right-aligned. Below, article pages present a large photograph with caption overlay, followed by the article lead in large serif type, then a sign-up gate interrupting the flow, and finally topic tags.

Content width appears constrained to a readable measure—approximately 680–720px for article text—preventing line lengths from exceeding comfortable reading spans. The hero image breaks this container, extending to the viewport edges to create visual impact before the reading experience begins. Spacing between paragraphs is substantial: 20px below standard paragraphs, with larger 50px top margins introducing section breaks or emphasized paragraphs. Navigation links carry minimal padding (5px vertical) while maintaining generous tap targets through their inline-block behavior.

The vertical rhythm is established through consistent paragraph margins and the occasional large-margin paragraph that functions as a subheading or section divider without explicit heading markup. No sidebar is visible; the design commits fully to single-column reading with occasional full-width interruptions.

## Visual language

Photography plays a documentary role—natural lighting, real situations, contextual rather than decorative. Images receive minimal treatment: no rounded corners, no shadows, no overlays beyond the occasional caption text. Captions sit directly below or overlay the image edge in small sans-serif, with photographer names and source links in orange.

The logo treatment is distinctive: "THE LOCAL" in bold sans-serif caps, with a circular orange badge containing "no" in white lowercase letters. This mark appears in the masthead and likely serves as a home link. The orange circle echoes the action color system-wide, creating immediate brand recognition.

Iconography is sparse and functional. The hamburger menu uses three horizontal lines; search uses a magnifying glass. No decorative icons accompany article metadata or social actions in the visible surfaces. Topic tags use hash prefixes and all-caps styling, rendered in orange to signal their categorical and interactive nature.

The overall aesthetic avoids decorative borders, background tints, or card containers. Separation is achieved through whitespace and typography alone. This restraint keeps focus on content while the orange accent provides just enough warmth to prevent sterility.

## Components

### Masthead

- **Anatomy**: Horizontal bar containing hamburger menu, search icon, section navigation links ("NORWEGIAN NEWS", "LIVING IN NORWAY", "PRACTICAL HELP", "LANGUAGE", "HOMES", "JOBS"), and logo mark
- **Surface**: White background, no border or shadow
- **Typography**: Navigation token at 20px/400 weight, black text
- **Spacing**: Links padded 5px vertically, 8px on some items; 20px left margin on navigation list
- **Composition**: Left-aligned utilities and navigation, right-aligned logo; horizontal scroll or wrap for many items

### Article hero image

- **Anatomy**: Full-width photograph with caption overlay below
- **Surface**: No border radius, no shadow; image renders edge-to-edge
- **Typography**: Caption in 14px Noto Sans, photographer name and source link in orange
- **Spacing**: Caption sits directly below image with minimal padding

### Article lead paragraph

- **Anatomy**: Large serif text block, typically the first or second paragraph
- **Surface**: White background, no container
- **Typography**: Body token (26px Eb Garamond Bold, 42.12px line height) in charcoal `#212529`
- **Spacing**: 20px bottom margin; some instances carry 50px top margin for emphasis
- **Composition**: Full content width, left-aligned, no indent

### Sign-up gate

- **Anatomy**: Centered prompt interrupting article flow ("Please sign up or log in to continue reading")
- **Surface**: White background, no visible border or card treatment
- **Typography**: Hero-display token (30px Noto Sans Bold)
- **Spacing**: Generous vertical margins separating from surrounding content
- **Composition**: Center-aligned text, full content width

### Topic tag

- **Anatomy**: Hash-prefixed category label ("#PROPERTY", "#NORWEGIAN HABITS", "#LIVING IN NORWAY")
- **Surface**: No background, no border
- **Typography**: Label token (15px Noto Sans Semibold) in orange
- **Spacing**: 8px vertical padding on containing link; horizontal arrangement with spacing between tags
- **Composition**: Inline row, left-aligned, following article content

### Inline link

- **Anatomy**: Text link within article body or caption
- **Surface**: No underline visible in default state
- **Typography**: Caption token (14px Noto Sans Regular) in orange for photographer credits; inherits surrounding size for body links
- **Color**: Action orange `#EF6C00`

## Responsive behavior

The design appears optimized for desktop reading with a constrained content column. At narrower viewports, the masthead navigation would likely collapse behind the hamburger menu, preserving the logo and search while hiding section links. The hero image should maintain full-bleed behavior, scaling proportionally. Article text should retain its large serif size rather than scaling down dramatically, as the 26px body size is central to the editorial character. The sign-up gate would remain centered, potentially adjusting to a smaller display size (20px or 24px) on mobile to prevent overflow. Topic tags would wrap naturally to multiple lines. No multi-column layouts are suggested by the single-column article structure; the primary responsive concern is maintaining readable measure and appropriate touch targets.

## Practical implementation guidance

### Preserve
- The strict two-family typographic split: Eb Garamond Bold for all editorial text, Noto Sans for all interface and metadata
- The single orange accent (`#EF6C00`) as the only color beyond black, charcoal, gray, and white
- Generous paragraph spacing (20px standard, 50px for emphasis) that creates rhythm without explicit subheadings
- Full-bleed hero images with minimal caption treatment
- The hash-prefix convention and all-caps styling for topic tags

### Avoid
- Adding background tints, card shadows, or border treatments that would break the flat, print-like aesthetic
- Using Eb Garamond for UI elements or Noto Sans for body text—the role separation is fundamental
- Introducing additional accent colors; the orange carries all interactive and categorical meaning
- Reducing body text below 20px on any viewport; the large serif is a brand signature

### Recommended build order
1. Establish the typographic system with both font families at their specified weights and sizes
2. Implement the color palette with the five core tokens
3. Build the masthead with navigation and logo mark
4. Create the article page template with hero image, caption, and lead paragraph
5. Add the sign-up gate component with centered display typography
6. Implement topic tags and inline link styling
7. Refine spacing and vertical rhythm across all components

### Accessibility
- Ensure orange links on white meet WCAG AA contrast ratios; `#EF6C00` against `#FFFFFF` may require verification for small text sizes
- Provide visible focus indicators for keyboard navigation that complement the flat design without relying solely on color change
- Maintain the large body text size (26px) as a readability feature, but ensure line height allows comfortable tracking
- Consider skip links for the masthead navigation given the number of section categories
- Ensure the hamburger menu and search icons have accessible labels

## Scope note

This guide covers the article page experience visible in the supplied images, including masthead navigation, hero imagery, article body typography, sign-up gates, and topic tags. Footer components, article listing pages, comment systems, social sharing widgets, and mobile-specific layouts are not represented. The radius scale is empty in source records; no rounded corners are used in visible components.
