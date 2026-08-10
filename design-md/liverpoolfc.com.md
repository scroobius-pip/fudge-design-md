# How liverpoolfc.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/liverpoolfc.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with sponsor bar, legal links, social icons, and app store badges on white background](https://pin.fontofweb.com/1444?format=jpg)](https://design.withfudge.com/share/pin-1444)

[Footer section with sponsor bar, legal links, social icons, and app store badges on white background](https://design.withfudge.com/share/pin-1444)

[![Full-width sponsor grid with white partner logos on solid red background](https://pin.fontofweb.com/1443?format=jpg)](https://design.withfudge.com/share/pin-1443)

[Full-width sponsor grid with white partner logos on solid red background](https://design.withfudge.com/share/pin-1443)

[![Memorial panels with gold typography and trophy silhouettes on light gray background](https://pin.fontofweb.com/1442?format=jpg)](https://design.withfudge.com/share/pin-1442)

[Memorial panels with gold typography and trophy silhouettes on light gray background](https://design.withfudge.com/share/pin-1442)

[![Hero quote block with serif text on deep red background with abstract wave pattern](https://pin.fontofweb.com/1441?format=jpg)](https://design.withfudge.com/share/pin-1441)

[Hero quote block with serif text on deep red background with abstract wave pattern](https://design.withfudge.com/share/pin-1441)

## Overview

The Liverpool FC website presents a commanding, emotionally resonant visual system rooted in football club identity. The design prioritizes immediate brand recognition through an unapologetic use of deep red as the dominant canvas color, creating an immersive environment that feels distinctly Liverpool. White serves as the primary contrasting element for readability, while gold appears selectively for moments of commemoration and prestige. The typography pairs a condensed serif family for display and editorial moments with a clean sans-serif for navigation, body copy, and functional interfaces. The overall impression is one of institutional confidence—modern enough for digital consumption yet respectful of the club's lengthy heritage. Layouts favor full-bleed sections with minimal container constraints, allowing imagery and color fields to dominate the viewport. The system balances high-energy sports presentation with solemn memorial content, requiring careful tonal modulation through color and type choices.

## Colors

The color system is intentionally constrained, deriving its power from strong value contrasts and cultural association rather than complexity. The core palette consists of four distinct colors: a vivid club red, pure white, a warm gold, and black. These are extended with functional grays for secondary surfaces and text hierarchy.

| token | value | use |
|---|---|---|
| club-red | #C8102E | Primary brand canvas, sponsor bar backgrounds, hero sections, active states |
| deep-red | #A6192E | Quote block backgrounds, gradient endpoints, tonal variation on red surfaces |
| white | #FFFFFF | Primary text on red, page canvas, footer background, logo reversals |
| gold | #BFA15A | Memorial typography, commemorative accents, trophy numerals, prestige moments |
| black | #000000 | Primary ink on light surfaces, crest elements, maximum contrast text |
| dark-gray | #333333 | Body text on white, secondary headings, trophy silhouettes |
| light-gray | #F5F5F5 | Memorial panel backgrounds, subtle section alternation, trophy row canvas |
| medium-gray | #666666 | Legal copy, tertiary text, disabled states, footer link hover |

The relationship between modes is straightforward: red surfaces carry white text for maximum impact and brand presence, while white and light-gray surfaces carry black or dark-gray text for extended reading. Gold operates as an accent reserved for commemorative and celebratory content, never competing with the primary red for attention. The sponsor bar demonstrates the system's confidence in pure color—white logos sit directly on unmodulated red without borders, shadows, or containers. Memorial sections invert the energy, using quiet gray backgrounds with gold and black to create contemplative space. No dark mode is visible in the supplied material; the deep red functions as the system's natural dark value.

## Typography

The type system employs three related families: Lfc Sans for all functional and body text, Lfc Serif for editorial display, and Lfc Serif Condensed for impactful headlines and quotes. This creates clear role separation while maintaining brand coherence.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lfc Serif Condensed | 3rem | 700 | 1 | -0.01em | Pull quotes, hero statements, commemorative numerals |
| section-display | Lfc Serif | 2rem | 400 | 1.1 | 0 | Section headings, memorial dates, editorial titles |
| body | Lfc Sans | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, general content |
| body-bold | Lfc Sans | 1rem | 700 | 1.5 | 0 | Emphasized body text, news headlines, active navigation |
| label | Lfc Sans | 0.75rem | 700 | 1.2 | 0.05em | Category tags, uppercase labels, metadata |
| navigation | Lfc Sans | 0.875rem | 400 | 1.2 | 0 | Primary navigation, footer links, utility text |
| legal-copy | Lfc Sans | 0.75rem | 400 | 1.4 | 0 | Copyright, terms, fine print, attribution |

The serif families carry the emotional and historical weight of the club, with Lfc Serif Condensed delivering particular impact through its narrow proportions and bold weight. Lfc Sans provides the utilitarian backbone—clean, open, and highly legible at small sizes. The label token's positive tracking accommodates uppercase setting for category indicators like "NEWS". Verify licensing for these families before production use.

## Layout

The layout system favors full-width sections with generous vertical padding, creating a rhythmic scroll experience where each content block commands the full viewport width. There is no visible max-width container constraining content; instead, internal padding creates breathable margins.

Section spacing follows a clear hierarchy. Major thematic breaks use 4rem of vertical padding, establishing distinct zones such as the sponsor bar, memorial panels, and footer. Component-level spacing uses 1.5rem for related elements within a section, while tight 0.5rem spacing handles inline relationships like label-to-heading or icon-to-text.

The sponsor bar in image 1443 demonstrates the grid approach: logos distribute evenly across the full width in three rows, with no visible gutters between individual items—only the natural spacing created by logo proportions and a consistent vertical rhythm. The memorial section in image 1442 shows a two-column split for commemorative panels, each internally centered, followed by a full-width trophy row below. This creates a clear information hierarchy: paired memorials above, collective achievements below.

The quote block in image 1441 reveals an asymmetric composition typical of editorial sports design. The text occupies the left portion of the frame while the background extends full-bleed with an abstract wave pattern. A small photograph anchors the lower left, creating visual weight that balances the large serif text above. The footer in image 1444 returns to a conventional multi-column grid for links, with social icons and app store badges occupying distinct zones on the right.

## Visual language

The visual language communicates authority through scale, restraint, and cultural specificity. Red is not merely a brand color but an environmental condition—large areas of unbroken red create immersion that transcends typical website decoration. The abstract wave pattern visible in image 1441 adds subtle motion and depth to red surfaces without introducing photographic complexity or competing with content.

Typography operates as image as much as information. The large condensed serif in the quote block approaches display scale, functioning as a graphic element that happens to be readable. Gold typography on light gray in the memorial panels achieves similar dual purpose—commemorative text becomes visual ornament through color and scale.

Iconography and symbols maintain a reduced, silhouette treatment. The trophy row in image 1442 presents achievements as dark gray shapes with numerals beneath, avoiding photographic realism in favor of iconic recognition. The eternal flame symbols flanking the "97" numeral demonstrate how the system handles sacred iconography with typographic integration rather than illustrative elaboration.

Photography, where it appears, is candid and contextual rather than staged. The small player image in the quote block shows action-captured emotion, reinforcing the editorial authenticity of the accompanying statement. Partner logos in the sponsor bar receive standardized white treatment, creating visual equality across commercial relationships regardless of original brand colors.

## Components

### Sponsor Bar

The sponsor bar is a full-width section with club-red background and vertically distributed rows of white partner logos. No borders, separators, or containers divide individual sponsors. Logos appear in their native aspect ratios with consistent visual weight through uniform white fill. The component creates a commercial rhythm through repetition and color discipline rather than structural complexity. Padding above and below the logo rows equals the section spacing token.

### Memorial Panel

Memorial panels appear as paired blocks on light-gray background, each containing centered content. The anatomy includes: symbolic imagery or club crests at top, a thin horizontal rule, a date in gold serif text, and a commemorative phrase in uppercase sans-serif below. The panels maintain equal height through internal vertical centering. Spacing between symbol, rule, date, and phrase follows the tight token for compressed vertical rhythm appropriate to solemn content.

### Trophy Row

The trophy row extends full-width on light-gray background, presenting silhouetted trophies with numerals beneath. Each trophy occupies equal horizontal space in an implicit grid. Trophy shapes appear in dark gray, creating low-contrast elegance against the light background. Numerals use the hero-display token at reduced scale, maintaining serif presence without competing with memorial content above.

### Quote Block

The quote block combines large serif display text with category labeling and supporting photography on deep-red background. The anatomy includes: a category label in uppercase sans-serif, the quotation in condensed serif at hero-display scale, a thin horizontal rule, and a small photograph with caption below. The background features subtle abstract wave patterns in slightly darker red, adding depth without distraction. The quotation mark receives special treatment as a graphic element. A small circular arrow icon indicates link behavior.

### Footer

The footer uses white background with dark-gray text, creating maximum contrast shift from the red-dominated page body. The anatomy includes: left-aligned legal and utility links in two columns, right-aligned social media icons in circular red containers, app store download badges, and full-width copyright text below a thin horizontal rule. Social icons use the club-red circle as their only color accent in an otherwise monochrome zone. Link text uses the navigation token; copyright uses legal-copy.

## Responsive behavior

The design's full-bleed sections and generous spacing suggest a fluid approach to viewport adaptation. Content likely maintains single-column stacking on narrow viewports, with the memorial panels converting from side-by-side to sequential arrangement. The sponsor bar's multi-row logo grid would compress to fewer columns or horizontal scroll on smaller screens.

The quote block's asymmetric composition requires careful handling—large serif text should maintain readable line lengths, potentially scaling down or reflowing below the photograph on narrow viewports. The trophy row's equal distribution would benefit from horizontal scroll or wrapping to multiple rows rather than shrinking silhouettes below recognizable size.

Touch targets for social icons and footer links should maintain minimum 44×44 pixel dimensions. The category label's small uppercase text may require slight size increase at small viewports to maintain legibility.

## Practical implementation guidance

### Preserve
- The immersive red canvas as the dominant environmental color
- The stark white-on-red and black-on-white contrast relationships
- The serif/sans-serif role separation for display versus functional text
- The restrained gold accent for commemorative content only
- The full-bleed section treatment without artificial max-width constraints
- The silhouette treatment for iconic imagery like trophies

### Avoid
- Adding borders or backgrounds to individual sponsor logos
- Using gold for promotional or commercial content
- Introducing additional accent colors that compete with the red-white-gold hierarchy
- Constraining the quote block or sponsor bar with card-like containers
- Replacing the condensed serif with standard width for hero headlines

### Recommended Build Order
1. Establish the color tokens and apply club-red as the default section background
2. Implement the typography scale with Lfc Serif Condensed for hero-display and Lfc Sans for body
3. Build the full-width section container with consistent vertical padding
4. Create the sponsor bar with logo grid and white reversal treatment
5. Develop the quote block with layered background pattern and asymmetric composition
6. Construct the memorial panel with centered alignment and gold accent
7. Add the footer with multi-column link grid and social icon circles

### Accessibility
- Ensure white text on red backgrounds meets WCAG AA contrast ratios; the deep-red variant may require testing against large text thresholds
- Provide text alternatives for trophy silhouettes that communicate the numerical achievement
- Maintain keyboard focus visibility on social icon circles, using white or gold outlines against red
- Consider reduced motion preferences for the abstract wave background pattern
- Ensure the small label and legal-copy sizes remain legible when user zoom is applied

## Scope note

This guide covers the homepage surface visible in the supplied images, including the sponsor bar, memorial section, quote block, and footer. Navigation, match fixtures, player profiles, e-commerce flows, and mobile-specific layouts are not represented. Measurements are practical adaptation targets derived from visual estimation against the 4px relative unit. Hover states, focus indicators, loading sequences, and form interactions were not captured and should be designed to complement the established color and typography system.
