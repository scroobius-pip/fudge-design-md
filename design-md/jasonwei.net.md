# How jasonwei.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jasonwei.net-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage with portrait photo, biography text, and structured lists of papers and talks with date-aligned metadata](https://pin.fontofweb.com/9220?format=jpg)](https://design.withfudge.com/share/pin-9220)

[Homepage with portrait photo, biography text, and structured lists of papers and talks with date-aligned metadata](https://design.withfudge.com/share/pin-9220)

[![Blog post header with serif title, author byline, and body text with bold section headings and bulleted examples](https://pin.fontofweb.com/9218?format=jpg)](https://design.withfudge.com/share/pin-9218)

[Blog post header with serif title, author byline, and body text with bold section headings and bulleted examples](https://design.withfudge.com/share/pin-9218)

[![Thoughts index page with numbered list of essay titles in muted indigo links under a section heading](https://pin.fontofweb.com/9221?format=jpg)](https://design.withfudge.com/share/pin-9221)

[Thoughts index page with numbered list of essay titles in muted indigo links under a section heading](https://design.withfudge.com/share/pin-9221)

[![Blog post footer with previous and next article navigation arrows and related reading link](https://pin.fontofweb.com/9219?format=jpg)](https://design.withfudge.com/share/pin-9219)

[Blog post footer with previous and next article navigation arrows and related reading link](https://design.withfudge.com/share/pin-9219)

## Overview

This design system describes a personal academic website with a distinctly editorial character. The visual language draws from classical print typography, pairing an elegant display serif for headings with a readable text serif for body copy. The overall impression is one of scholarly restraint: generous margins, a warm off-white ground, and a carefully limited palette of black, muted indigo, and occasional bright blue for external references. The site structure is straightforward—homepage biography, thoughts index, and individual blog posts—yet the typographic treatment elevates each page into something approaching a printed essay. The design prioritizes readability and intellectual credibility over visual spectacle, using whitespace as a deliberate compositional element that lets the text breathe.

## Colors

The color system is intentionally minimal, built around a warm neutral ground with disciplined accent use.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, navigation labels, body copy, list markers |
| muted-ink | #3F3F6D | Section headings, article titles, internal link underlines |
| accent | #191970 | Deep indigo for inline links and emphasized references |
| action | #3498DB | Bright blue for external links and social media references |
| canvas | #F4F4F3 | Page background, header and footer surfaces |

The palette operates in a single light mode throughout. The warm off-white canvas (#F4F4F3) provides a softer reading environment than pure white, reducing eye strain during extended reading sessions. Black ink serves as the dominant text color, ensuring maximum contrast and legibility. The muted indigo (#3F3F6D) appears exclusively in headings and certain internal links, creating a subtle hierarchy that distinguishes structural labels from body text without resorting to size alone. The deep indigo accent (#191970) and bright blue action (#3498DB) form a paired link system: the former for internal navigation and references, the latter for external destinations like YouTube, Twitter, or blog posts. This color coding helps readers intuitively distinguish between site-internal and site-external destinations. No dark mode, gradient, or shadow system is present in the visible interface.

## Typography

The typographic system relies on two complementary serif families from Adobe Typekit, creating a classical hierarchy between display and text roles.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| site-title | Orpheus Pro | 1.75rem | 400 | 1.4 | 0.01em | Header logo/name |
| section-display | Orpheus Pro | 1.575rem | 400 | 1.35 | 0.01em | Page section headings ("Thoughts", "Papers") |
| article-title | Orpheus Pro | 1.4875rem | 400 | 1.4 | 0.01em | Blog post titles |
| body | Adobe Garamond Pro | 1.1375rem | 400 | 1.2 | normal | Paragraphs, lists, navigation |
| body-bold | Adobegaramondpro | 1.1375rem | 700 | 1.2 | normal | Strong emphasis, section subheadings |
| label | Adobe Garamond Pro | 1.1375rem | 400 | 1.2 | normal | Metadata, dates, captions |

Orpheus Pro serves as the display face, its high contrast and refined details lending authority to headings and the site identity. It appears at three closely related sizes that maintain visual coherence across page types. Adobe Garamond Pro handles all body text with its excellent readability at small sizes, while the bold variant (Adobegaramondpro) provides emphasis for inline strong elements and section subheadings. The body line height of 1.2 is tight, creating a dense, literary block of text that suits the essay format. Letter spacing is slightly opened for Orpheus Pro at 0.01em, while Garamond runs at normal tracking. Verify licensing for these families before production use.

## Layout

The layout follows a centered, narrow-column approach that evokes printed academic journals.

The maximum content width is approximately 680-720 pixels, creating a comfortable measure for serif text. The site header spans full width with substantial horizontal padding (5.14rem on each side), containing the site name left-aligned and navigation links right-aligned. The main content area carries generous vertical padding: 8.5rem top padding on index pages, creating significant breathing room before the first heading.

On the homepage, a two-column arrangement appears at the top: a portrait photograph occupies the left portion while biography text flows on the right. Below this, structured lists present papers and talks with date metadata aligned to the left and titles to the right, creating a clean tabular rhythm without explicit borders.

Blog posts use a single centered column. The title receives extra top margin (approximately 3.125rem), followed by a byline with date and author. Body paragraphs maintain consistent spacing of 0.875rem between them. Lists receive 2.5rem left padding with 1.1375rem vertical spacing between items.

The footer area on blog posts contains previous/next navigation with arrow indicators, positioned at the bottom of the article with substantial whitespace above.

## Visual language

The visual character is that of a contemporary digital essay collection—restrained, literate, and confident in its material choices.

Photography appears sparingly: a single professional portrait on the homepage, presented without border or shadow, integrated directly into the text flow. No decorative imagery, icons, or illustrations accompany the blog content. The absence of visual noise reinforces the scholarly tone.

The link treatment varies by destination type. Internal links carry a subtle underline in muted indigo, while external links appear in bright blue without underline, creating immediate visual distinction. This convention is applied consistently across papers, talks, blog references, and social media links.

Section headings on list pages appear in muted indigo with no additional decoration—no rules, boxes, or background tints separate content regions. The hierarchy is established purely through typography and spacing. The "Thoughts" index presents a numbered list where each item is a complete essay title rendered as an underlined link, the numbers providing structural rhythm without visual weight.

The overall density is low. Pages feel unhurried, with ample margins and paragraph spacing that encourages careful reading rather than scanning.

## Components

### Site header

- **Anatomy**: Full-width bar containing left-aligned site name and right-aligned navigation links
- **Surface**: Canvas background (#F4F4F3), no border or shadow
- **Typography**: Site title in Orpheus Pro at 1.75rem; navigation links in Adobe Garamond Pro at 1.1375rem
- **Spacing**: 3.2125rem vertical padding, 5.14rem horizontal padding
- **Shape**: Square corners throughout (0rem radius)
- **Composition**: Flexbox row with space-between alignment
- **States**: Active page indicated by underline on the corresponding navigation link

### Navigation link

- **Anatomy**: Text label with optional underline
- **Color**: Black ink, underline in muted indigo when active
- **Typography**: Label token
- **Spacing**: Inline with 1rem gap between items
- **Variants**: Default state has no underline; active/current page shows underline

### Section heading

- **Anatomy**: Text only, no decorative elements
- **Color**: Muted ink (#3F3F6D)
- **Typography**: Section-display token
- **Spacing**: 1.75rem margin below
- **Use**: "Thoughts", "Papers", "Talks & Media" on list pages

### Article title

- **Anatomy**: Text with optional byline below
- **Color**: Muted ink for title, black for byline metadata
- **Typography**: Article-title token for heading; label token for byline
- **Spacing**: 3.125rem top margin, 1.75rem below title before body

### Body paragraph

- **Anatomy**: Standard text block
- **Color**: Black ink
- **Typography**: Body token
- **Spacing**: 0.875rem margin bottom
- **Composition**: Justified or left-aligned, narrow measure

### Inline link

- **Anatomy**: Text span with underline
- **Color**: Deep indigo (#191970) for internal, bright blue (#3498DB) for external
- **Typography**: Body token
- **States**: Underline present in default state for internal links; no underline for external

### List (ordered and unordered)

- **Anatomy**: Numbered or bulleted items with left padding
- **Color**: Black ink for text, standard browser markers
- **Typography**: Body token
- **Spacing**: 2.5rem left padding, 1.1375rem vertical spacing between items
- **Composition**: Flush left with content margin

### Previous/next navigation

- **Anatomy**: Horizontal bar with left arrow + previous title, right arrow + next title
- **Color**: Black ink
- **Typography**: Body token
- **Spacing**: Generous top margin, positioned at article end
- **Composition**: Flexbox row with space-between, arrow characters as indicators

### Metadata label

- **Anatomy**: Date or category prefix before content
- **Color**: Black ink
- **Typography**: Label token
- **Composition**: Left-aligned in tabular lists, creating consistent start position for titles

## Responsive behavior

The design appears optimized for desktop viewing with its narrow centered column and generous fixed padding. At smaller viewports, the following adaptations should be considered:

- The header padding should reduce proportionally, maintaining readability without excessive horizontal margins
- The homepage two-column layout (portrait + biography) should stack vertically, with the portrait centered above the text
- The narrow content column should expand to use more viewport width on small screens, perhaps 90% with minimum side margins
- Navigation links may need to collapse into a compact menu or wrap to a second line
- Date-aligned lists should maintain their structure but allow titles to wrap naturally

The tight body line height of 1.2 may benefit from slight increase on very small screens to maintain readability. No breakpoint-specific behavior is visible in the supplied material.

## Practical implementation guidance

### Preserve
- The classical serif pairing: Orpheus Pro for display, Adobe Garamond Pro for text
- The warm off-white canvas background against black text
- The disciplined two-tone link system (indigo internal, blue external)
- Generous vertical whitespace before page titles and between sections
- The narrow, centered reading column for blog content
- Underline as the primary active-state indicator for navigation
- Square corners on all elements; no border radius anywhere in the interface

### Avoid
- Adding background colors, borders, or shadows to content cards
- Introducing sans-serif fonts for any text element
- Using pure white (#FFFFFF) as the page background
- Adding decorative icons or graphical elements
- Creating dense, information-heavy layouts that contradict the spacious editorial tone
- Applying the bright blue action color to internal navigation
- Applying border radius to any component; the interface is entirely square

### Recommended build order
1. Establish the canvas background and load the two Typekit font families
2. Implement the site header with logo and navigation, verifying the active underline state
3. Create the narrow content column container with maximum width constraint
4. Set up the body text styles with Garamond Pro and tight line height
5. Add Orpheus Pro headings at the three defined sizes
6. Implement the link color system with internal/external distinction
7. Build the list components with proper left padding and spacing
8. Add the previous/next navigation pattern for blog posts

### Accessibility
- Ensure the tight 1.2 line height does not compromise readability for users with low vision; consider a user preference for increased leading
- The muted indigo headings (#3F3F6D) should maintain sufficient contrast against the off-white background; verify at 4.5:1 minimum
- Underline links rather than relying solely on color for link identification
- Provide focus indicators for keyboard navigation that are visible against the canvas background
- Consider increasing touch targets for navigation links on mobile devices beyond the text bounds

## Scope note

This guide covers the personal homepage, thoughts index, and individual blog post templates visible in the supplied material. Navigation, header, and content list components are fully described. Forms, search, comments, archives, and any mobile-specific layouts are not represented. The portrait photograph treatment is documented for the homepage instance only. No animation, loading states, or interactive feedback beyond link underlining are included in the visible system.
