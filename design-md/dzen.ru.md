# How dzen.ru is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dzen.ru-design)

Last updated: 2026-08-10

## Captured pages

[![News article page with headline, body text, inline blue hyperlinks, source attribution, and horizontal image gallery with rounded thumbnails](https://pin.fontofweb.com/8996?format=jpg)](https://design.withfudge.com/share/pin-8996)

[News article page with headline, body text, inline blue hyperlinks, source attribution, and horizontal image gallery with rounded thumbnails](https://design.withfudge.com/share/pin-8996)

[![News feed index with search bar, multi-source article cards with thumbnails, publisher icons, and right-column headline list with colored source indicators](https://pin.fontofweb.com/8995?format=jpg)](https://design.withfudge.com/share/pin-8995)

[News feed index with search bar, multi-source article cards with thumbnails, publisher icons, and right-column headline list with colored source indicators](https://design.withfudge.com/share/pin-8995)

## Overview

Dzen.ru is a Russian news aggregation platform that presents editorial content through a clean, utilitarian interface optimized for rapid information scanning. The visual system prioritizes readability and content hierarchy over decorative elements, using a near-black primary text color against white backgrounds with strategic blue accents for interactive elements. The design language draws from mainstream digital news conventions: dense text layouts, prominent headline typography, inline hyperlinks, thumbnail-driven article cards, and publisher attribution markers. The interface maintains a consistent rhythm through uniform spacing and rounded corners on media containers, creating a contemporary feel without distracting from the informational content. Two distinct page types are visible: a focused article page with extended reading content and image galleries, and a feed index that juxtaposes featured article cards with a scrolling headline list from multiple sources.

## Colors

The color system is intentionally restrained, built on a high-contrast foundation with a single vibrant accent for interactive states and a dark overlay for media treatments.

| token | value | use |
|---|---|---|
| action | #006BE7 | Inline hyperlinks, source attribution links, interactive text elements |
| ink | #06060F | Primary body text, headlines, labels, and all non-link textual content |
| canvas | #FFFFFF | Page backgrounds, card surfaces, search field backgrounds |
| overlay | #000000 | Semi-transparent dark scrim behind image gallery count badges |
| muted-ink | #06060F | Publisher names, timestamps, secondary metadata at reduced opacity |

The near-black ink (#06060F) serves as the dominant visual weight across both page types, appearing in headlines, body paragraphs, and source labels. This extremely dark value—just barely removed from pure black—provides maximum legibility without the harshness of #000000. The action blue (#006BE7) appears exclusively for clickable text: inline article links within body copy, cross-reference links to related sections, and source attribution. The blue is a medium-saturated, slightly green-leaning azure that stands out clearly against white without overwhelming the reading experience.

The canvas white creates open, breathable space around dense text content. The overlay black (#000000) appears in reduced opacity on the image gallery count badge—a dark scrim behind the "+6" text that ensures white numerals remain legible across varied photographic content. No dark mode or alternative background treatments are visible. Photographic content appears in full color without systematic overlay treatments or gradient masks. Publisher icons and source indicators introduce small accent colors—greens, reds, oranges, blues—drawn from individual brand identities rather than the core system palette. These should be treated as external content, not as tokens.

## Typography

The type system relies on a single variable font family with weight and width variation to establish hierarchy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Stella Sans Vf | 1.5rem | 700 | 1.17 | 0.01em | Article headlines, major story titles |
| section-display | Stella Sans Vf | 1.125rem | 700 | 1.22 | 0.02em | Feed card headlines, section headers |
| body | Stella Sans Vf | 1rem | 400 | 1.5 | 0 | Article body paragraphs, descriptions |
| body-small | Stella Sans Vf | 0.875rem | 400 | 1.43 | 0 | Card summaries, secondary descriptions |
| label | Stella Sans Vf | 0.75rem | 400 | 1.33 | 0.01em | Timestamps, publisher names, metadata |
| navigation | Stella Sans Vf | 0.875rem | 400 | 1.14 | 0 | Search placeholder, utility text |

Stella Sans Vf is the sole typeface, deployed as a variable font with Regular (400), Medium (590), and Bold (700) weights visible in the interface. The weight range creates clear hierarchy: headlines at Bold 700 command attention, body text at Regular 400 maintains extended reading comfort, and an intermediate Medium weight appears for emphasis within labels or compact UI elements. The family exhibits a neutral, grotesque character with moderate width—neither condensed nor expanded—suited to dense information layouts.

Headlines are set tight with reduced line-height (1.17) and minimal positive tracking, creating solid blocks of text that anchor the page. Body copy relaxes to 1.5 line-height for paragraph readability. The type scale progresses in whole-number multiples of the 2px relative unit: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 18px (1.125rem), and 24px (1.5rem). Verify licensing for these families before production use.

## Layout

The layout system follows a content-first approach with consistent containment and modular spacing.

The article page uses a single-column reading flow with generous horizontal margins, approximately 16px (1rem) of padding on each side. Content stacks vertically: search bar, publisher attribution and timestamp, headline, body paragraphs with inline links, related content cross-reference, horizontal image gallery, and source footer. The image gallery breaks the text column, presenting five equal-width thumbnails in a horizontal flex row with 12px (0.75rem) gaps.

The feed index employs a two-column asymmetric layout. The left column, roughly 55-60% width, contains featured article cards with large thumbnails stacked vertically. The right column presents a dense headline list with small colored publisher icons. This column appears narrower, approximately 40-45% of the available width, creating a clear primary-secondary relationship. Cards in the left column maintain internal padding of 16px (1rem), with thumbnail images extending to the card edges.

Spacing follows a modular system based on 2px increments. Common values include 11px, 12px, and 16px for internal element separation. Section breaks between major content blocks use 16px (1rem) to 24px (1.5rem). The search bar receives 16px padding, establishing a consistent touch target and visual breathing room. Margins between related elements cluster at 12px, creating tight but legible groupings of publisher information, headlines, and summaries.

## Visual language

The visual character of Dzen.ru is utilitarian and information-dense, prioritizing scanability and rapid comprehension over aesthetic flourish. Rounded corners appear exclusively on media containers and interactive elements—thumbnails, image gallery items, and potentially buttons—using a consistent 12px (0.75rem) radius that softens the rectilinear grid without becoming decorative. The search bar employs a full pill shape (9999px radius), distinguishing it as an interactive field.

Publisher identity is communicated through small, colored square or circular icons preceding source names: green for РБК, red for ТАСНИМ, blue for other outlets. These function as wayfinding markers in the dense headline list, allowing readers to quickly identify trusted or preferred sources. Timestamps follow publisher names in muted text, establishing recency without visual prominence.

Image treatment is direct and unmanipulated: photographs appear in their native color, cropped to consistent aspect ratios for thumbnails (approximately 16:9 or 4:3) and presented without overlays, gradients, or text embedding. The gallery on article pages uses equal-height rows with slight rounding, and includes a count overlay ("+6") on the final thumbnail when additional images are available.

The overall density is high—minimal whitespace between content units, compact line heights on headlines, and tightly packed metadata. This reflects the platform's purpose as a rapid news scanner rather than a leisurely reading experience.

## Components

### Search bar

- **Anatomy**: Full-width container with magnifying glass icon, placeholder text "Найти в Новостях", and rounded pill shape.
- **Surface**: White background with subtle border or shadow definition against the page.
- **Typography**: Navigation token, 0.875rem Regular weight.
- **Shape**: Full pill border-radius (9999px).
- **Spacing**: 16px (1rem) internal padding, comfortable touch target height approximately 44-48px.
- **Composition**: Icon left-aligned, placeholder text following with adequate gap.

### Article card (feed)

- **Anatomy**: Thumbnail image (full-width, top), publisher icon and name, headline, summary paragraph, timestamp.
- **Surface**: White background, no visible border or shadow; separation achieved through spacing alone.
- **Typography**: Headline in section-display (1.125rem Bold), summary in body-small (0.875rem Regular), metadata in label (0.75rem Regular).
- **Shape**: Thumbnail corners rounded at 12px (0.75rem); card itself appears unrounded.
- **Spacing**: 16px padding internal to card, 12px between text elements, 16px between cards in vertical stack.
- **Composition**: Image dominates visual weight; text block beneath with clear hierarchy.

### Inline hyperlink

- **Anatomy**: Text span within body paragraphs, underlined or colored to indicate interactivity.
- **Surface**: No background; text color only.
- **Typography**: Body token, 1rem Regular, with action color (#006BE7).
- **Shape**: No border-radius; follows text flow.
- **Spacing**: Inline with surrounding text; no additional padding.
- **Composition**: Underline treatment visible on hover or default state; color alone may indicate state in some contexts.

### Image gallery

- **Anatomy**: Horizontal row of thumbnail images, equal height, with optional count overlay on final item.
- **Surface**: Images in native color; overlay for count uses semi-transparent dark background with white text.
- **Typography**: Count overlay uses label token, white color.
- **Shape**: 12px (0.75rem) border-radius on each thumbnail.
- **Spacing**: 12px (0.75rem) gap between thumbnails; breaks out of text column to full available width.
- **Composition**: Flex row, likely scrollable horizontally on narrow viewports; five visible items with "+6" indicating expansion.

### Source attribution footer

- **Anatomy**: Label "Источники:" followed by linked publisher names with plus icons.
- **Surface**: Inline with page background.
- **Typography**: Label token for prefix; body-small or label for source names with action color.
- **Shape**: No distinct shape; inline text flow.
- **Spacing**: 16px top margin from preceding content; standard inline spacing between items.
- **Composition**: Horizontal wrap of source links, separated by spacing rather than punctuation.

### Headline list item (feed sidebar)

- **Anatomy**: Small colored publisher icon (square or circle), headline text, optional timestamp.
- **Surface**: Transparent; sits on page background.
- **Typography**: Section-display or body-small for headline, depending on density; label for metadata.
- **Shape**: Icon may have slight rounding; text elements unshaped.
- **Spacing**: Compact vertical spacing, approximately 12-16px between items; icon aligned to text baseline or cap height.
- **Composition**: Icon and text in horizontal flex arrangement; multiple items stack with minimal separation.

## Responsive behavior

The visible images show a single viewport width (approximately 656-740px), suggesting a tablet or narrow desktop presentation. The following responsive considerations apply:

The two-column feed layout likely collapses to single-column on narrower viewports, with featured cards stacking above the headline list. The headline list may transform into a horizontal scroll or accordion on mobile to preserve density without excessive vertical length.

Article pages appear to maintain single-column flow across widths, with body text constrained to readable measure (approximately 65-75 characters). The image gallery may transition from horizontal row to vertical stack or swipeable carousel on narrow screens.

The search bar maintains full-width behavior, with internal padding scaling proportionally. Touch targets should maintain minimum 44px height regardless of viewport.

Typography scales down modestly on narrow screens: headline sizes may reduce from 1.5rem to 1.25rem, body text remains at 1rem for readability. Line heights increase slightly on mobile to accommodate touch scrolling and reduced horizontal space.

## Practical implementation guidance

### Preserve
- The stark ink-on-canvas contrast for maximum legibility in varied lighting conditions.
- The consistent 12px media rounding that unifies photographs, thumbnails, and gallery items.
- The single-typeface hierarchy using weight variation rather than family mixing.
- The blue hyperlink color as the sole interactive accent, maintaining its specificity to clickable elements.
- Publisher icon colors as imported brand assets, not system tokens.

### Avoid
- Introducing additional accent colors that compete with the blue action color.
- Adding shadows or borders to article cards; the current flat separation is intentional.
- Reducing body line-height below 1.5 for extended reading passages.
- Using headline weights (700) for body text or labels, which disrupts hierarchy.
- Rounding corners on text-only containers; reserve rounding for media and interactive elements.

### Recommended build order
1. Establish the type scale with Stella Sans Vf at all six defined tokens.
2. Implement the color tokens: ink, canvas, action, overlay, and muted-ink.
3. Build the search bar component with pill shape and proper padding.
4. Create article card structure with thumbnail, metadata, and text hierarchy.
5. Implement body text and inline link styles for article pages.
6. Add image gallery with rounded thumbnails and count overlay.
7. Construct feed layout with two-column asymmetry and headline list.
8. Refine spacing tokens across all components for consistent rhythm.

### Accessibility
- Ensure the #006BE7 blue on #FFFFFF white meets WCAG AA contrast for normal text (4.5:1); it appears to satisfy this threshold.
- Maintain visible focus indicators on links, as color alone may not suffice for low-vision users.
- Provide adequate touch targets for publisher icons and headline list items, minimum 44×44px.
- Consider `prefers-reduced-motion` for any gallery or feed scroll animations.
- Use semantic heading hierarchy: single h1 per article page, logical progression through h2-h4 in feed cards.

## Scope note

This guide covers the news article and feed index surfaces visible in the supplied images. Measurements are practical adaptation targets. Unseen elements—mobile navigation, dark mode, video players, comment systems, search results pages, and interactive states such as hover, focus, active, and loading—are not represented. Verify licensing for Stella Sans Vf before production use.
