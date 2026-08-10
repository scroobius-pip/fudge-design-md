# How pressgazette.co.uk is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pressgazette.co.uk-design)

Last updated: 2026-08-10

## Captured pages

[![Article header with large serif headline, dark gray subhead, and AI-generated image on monitor](https://pin.fontofweb.com/9083?format=jpg)](https://design.withfudge.com/share/pin-9083)

[Article header with large serif headline, dark gray subhead, and AI-generated image on monitor](https://design.withfudge.com/share/pin-9083)

[![Article header with bold headline, light-weight dek, and speaker photograph against blue stage backdrop](https://pin.fontofweb.com/9082?format=jpg)](https://design.withfudge.com/share/pin-9082)

[Article header with bold headline, light-weight dek, and speaker photograph against blue stage backdrop](https://design.withfudge.com/share/pin-9082)

[![Article header with headline, gray summary text, red author link, and Google Discover phone mockups](https://pin.fontofweb.com/9081?format=jpg)](https://design.withfudge.com/share/pin-9081)

[Article header with headline, gray summary text, red author link, and Google Discover phone mockups](https://design.withfudge.com/share/pin-9081)

[![Article header with multi-line headline, gray dek, and Harper's Bazaar magazine cover photograph](https://pin.fontofweb.com/9080?format=jpg)](https://design.withfudge.com/share/pin-9080)

[Article header with multi-line headline, gray dek, and Harper's Bazaar magazine cover photograph](https://design.withfudge.com/share/pin-9080)

## Overview

Press Gazette presents a stark, editorial news aesthetic built on high-contrast black typography against pure white grounds. The visual system prioritizes readability and journalistic authority through a single serif type family deployed across multiple weights and scales. Article pages open with commanding headlines set in a bold, tightly-tracked display size, followed by lighter-weight summary text that establishes the story's premise without competing for attention. The overall impression is one of confident restraint: no decorative borders, no gradient backgrounds, no ornamental flourishes. Photography and illustration carry the visual energy, while typography provides the structural backbone. The design trusts the content to speak, using space and weight hierarchy to guide readers from headline through byline into the body of the story.

## Colors

The palette is deliberately minimal, built on a near-binary contrast system with dark tones for all text roles.

| token | value | use |
|---|---|---|
| ink | `#000000` | Headlines, body text, byline names, primary content, page background |
| muted-ink | `#252524` | Summary paragraphs, secondary descriptions, dek text, linked author names |

Black ink against the white ground creates maximum legibility for extended reading. The muted-ink tone, only slightly lifted from pure black, softens summary text enough to distinguish it from headlines without introducing a true gray that would feel decorative. Linked author names appear in this same muted-ink tone, creating subtle differentiation from unlinked byline text without introducing a separate accent color. The neutral UI ensures editorial imagery—news photography, product screens, magazine covers—remains the color focal point. No dark mode, gradient backgrounds, or surface overlays appear in the visible pages.

## Typography

Roboto Slab serves as the sole type family, providing editorial gravitas through its geometric slab-serif construction. The family is deployed across six distinct roles using weight and size to create hierarchy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Roboto Slab | 3rem | 500 | 1.167 | -0.005em | Article headlines, page titles |
| section-display | Roboto Slab | 2rem | 600 | 1.286 | 0em | Sub-headlines, section headers |
| body-large | Roboto Slab | 2rem | 300 | 1.25 | 0em | Article dek, summary paragraphs |
| body | Roboto Slab | 1rem | 400 | 1.5 | 0em | Byline text, metadata, running copy |
| label | Roboto Slab | 1rem | 600 | 1.5 | 0em | Linked author names, emphasized labels |
| caption | Roboto Slab | 0.875rem | 400 | 1.429 | 0em | Image captions, timestamps, fine print |

The hero-display token carries slight negative tracking that tightens the headline into a cohesive block, appropriate for the multi-line story titles common to the publication. Body-large at 2rem and weight 300 creates an elegant, airy summary paragraph that sits between the commanding headline and the practical byline. The section-display at 2rem with weight 600 offers a midpoint for structural headings within article content. Body at 1rem handles functional text: author names, dates, categories, and running copy. Label at 1rem weight 600 provides emphasis for interactive or highlighted text without size change. Caption at 0.875rem serves supporting information at a reduced scale. Verify licensing for these families before production use. Roboto Slab is designed by Google.

## Layout

Article pages follow a centered, single-column editorial structure with generous horizontal margins. The content well is narrow enough to maintain optimal line lengths for reading while allowing headlines to break across multiple lines with dramatic effect.

The header composition stacks vertically: headline, then dek, then byline, each separated by consistent vertical rhythm. Headlines receive a tight bottom margin of 0.5rem, creating proximity to the summary text that follows. The dek paragraph carries substantial top and bottom margins—2.0625rem above and 3rem below—establishing clear separation between the title block and the byline. Content containers use 1.5rem horizontal padding, keeping text from the viewport edges on smaller screens while maintaining the centered column feel.

A significant left margin of approximately 7.458rem appears on certain container divisions, creating an offset layout pattern where some elements align to a secondary grid line rather than the primary content edge. This introduces subtle asymmetry within the otherwise centered system. Below the byline, a thin horizontal rule separates the header composition from the lead image, reinforcing the editorial convention of title-then-image sequencing.

## Visual language

The aesthetic is that of a contemporary digital newspaper: confident, unadorned, and image-forward. Typography does the structural work; photography provides the visual interest. Headlines are set flush left with no indentation, embracing the ragged edge of natural line breaks as a compositional feature. The generous white space around header elements prevents crowding and emphasizes the importance of each story.

Lead images span the full content width, sitting directly below the byline rule with no border radius or frame treatment. Images appear as documentary photography, product screenshots, or magazine covers—whatever serves the story—without consistent color grading or overlay effects. The design does not impose a visual filter on photography; it presents images plainly, letting their native content carry the page.

Linked author names in muted-ink provide the only tonal variation in the text environment, functioning as a subtle navigation cue without the heaviness of underlined or button-styled links.

## Components

### Article Header

The article header is the dominant surface on every visible page, comprising three stacked text elements and a terminating rule.

**Anatomy:** Headline (h1), dek paragraph (p), byline paragraph (p), horizontal rule, lead image container.

**Surface and text color:** Background is pure white. Headline uses pure black (`{colors.ink}`). Dek uses muted near-black (`{colors.muted-ink}`). Byline name uses black; linked author name uses muted-ink (`{colors.muted-ink}`).

**Typography:** Headline uses `{typography.hero-display}`. Dek uses `{typography.body-large}`. Byline uses `{typography.body}`.

**Spacing:** Headline bottom margin is `{spacing.tight}`. Dek carries 2.0625rem top margin and 3rem bottom margin. Byline sits below with natural flow. Horizontal rule is a 1px hairline in a neutral tone, full width of the content well.

**Composition:** All text aligns flush left within the centered content column. No centered headlines or right-aligned elements appear.

### Byline

The byline component presents author attribution with conditional linking.

**Anatomy:** Label text "By" followed by author name, either plain or linked.

**Surface and text color:** "By" label and unlinked names use `{colors.ink}`. Linked author names use `{colors.muted-ink}`.

**Typography:** `{typography.body}` at 1rem weight 400 for plain text; `{typography.label}` at 1rem weight 600 for linked names.

**Variants:** Plain byline (unlinked author name) and linked byline (author name in muted-ink with heavier weight, indicating profile or archive navigation).

### Lead Image

The lead image sits below the header rule, spanning the full content width.

**Anatomy:** Single image element, no caption visible in the visible pages.

**Surface:** No border, no border radius, no shadow. Image sits flush against the white background.

**Composition:** Full-bleed within the content well. Aspect ratio varies by story content—landscape photography, vertical phone mockups, magazine covers are all presented at their natural proportions without forced cropping frames.

## Responsive behavior

The visible pages show a desktop presentation with a centered content column. The narrow well suggests the design likely maintains a single-column reading experience across viewports, with horizontal padding reducing on smaller screens to preserve readable line lengths. Headline sizes may scale down on mobile to prevent excessive line breaks, though the multi-line nature of current headlines suggests the display size is already calibrated for readability.

The 7.458rem left offset on certain containers may collapse to standard center alignment on narrow viewports, or it may represent a persistent editorial grid choice. Implementation should test this offset at intermediate breakpoints to ensure it does not create unwanted asymmetry on tablet widths.

Touch targets for the linked byline should maintain adequate size; the text-based link is small and may benefit from increased padding or a larger tap area on mobile devices without altering the visual presentation.

## Practical implementation guidance

### Preserve
- The stark black-on-white contrast for all primary text; this is the core of the editorial identity.
- The single-type-family discipline; Roboto Slab at multiple weights provides sufficient hierarchy without introducing secondary fonts.
- The generous vertical spacing in the header, particularly the 3rem below the dek paragraph that creates breathing room before the byline.
- The flush-left alignment throughout; centered headlines would undermine the journalistic tone.
- The plain presentation of lead images without borders, radii, or overlays.

### Avoid
- Adding background colors, gradients, or surface treatments to the article header; the white ground is integral to the aesthetic.
- Underlining links beyond the color change; the muted-ink weight shift is sufficient signaling in this minimal environment.
- Introducing additional type families; the system succeeds through restraint.
- Forcing lead images into consistent aspect ratios; the design accommodates varied content proportions.

### Recommended build order
1. Establish the content well width and centered grid with horizontal padding.
2. Implement the type scale with Roboto Slab at the six defined sizes and weights.
3. Build the article header stack with precise vertical spacing between headline, dek, and byline.
4. Add the horizontal rule and lead image container.
5. Implement the muted-ink weight variation for linked bylines as the final interactive layer.

### Accessibility
- Ensure the muted-ink (`#252524`) against white meets WCAG AA contrast requirements for normal text; at 1rem size it must achieve 4.5:1.
- The pure black (`#000000`) against white exceeds contrast requirements comfortably.
- Consider focus indicators for linked bylines that are visible beyond color and weight change alone, such as an underline or outline on keyboard focus.
- Maintain the logical heading hierarchy with a single h1 per article page.

## Scope note

This guide covers the article page header composition and lead image presentation visible on Press Gazette story pages. Navigation, footer, article body text, comments, related stories, advertising units, and mobile-specific layouts are not represented in the supplied material. Measurements are drawn from exact interface values where available.
