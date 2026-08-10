# How lettermatic.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lettermatic.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with oversized black display type, yellow scribble underline, and stacked font specimen cards with torn-paper edges](https://pin.fontofweb.com/5967?format=jpg)](https://design.withfudge.com/share/pin-5967)

[Homepage hero with oversized black display type, yellow scribble underline, and stacked font specimen cards with torn-paper edges](https://design.withfudge.com/share/pin-5967)

[![Footer section with black background, white text, pink and cyan scribble illustrations, and multi-column link layout](https://pin.fontofweb.com/5970?format=jpg)](https://design.withfudge.com/share/pin-5970)

[Footer section with black background, white text, pink and cyan scribble illustrations, and multi-column link layout](https://design.withfudge.com/share/pin-5970)

[![Parclo Serif font showcase card with orange gradient background, brown torn-paper specimen, and white Learn More button](https://pin.fontofweb.com/5969?format=jpg)](https://design.withfudge.com/share/pin-5969)

[Parclo Serif font showcase card with orange gradient background, brown torn-paper specimen, and white Learn More button](https://design.withfudge.com/share/pin-5969)

[![Custom Fonts service card with gray background, magenta torn-paper accent, black ampersand illustration, and Learn More button](https://pin.fontofweb.com/5968?format=jpg)](https://design.withfudge.com/share/pin-5968)

[Custom Fonts service card with gray background, magenta torn-paper accent, black ampersand illustration, and Learn More button](https://design.withfudge.com/share/pin-5968)

## Overview

Lettermatic's website presents a type foundry with confident, graphic sensibilities. The design centers on extreme scale contrast: massive black display typography dominates light backgrounds, while body text remains restrained and highly legible. The visual personality emerges from deliberate tension between systematic geometry and playful chaos—hand-drawn scribbles in warm yellow, vivid pink, and bright blue interrupt clean layouts, and font specimen cards feature torn-paper edges that suggest physical craft. The site functions as both portfolio and storefront, showcasing retail fonts and custom type services through immersive, card-based presentations. Navigation is minimal and unobtrusive, allowing the type specimens and expressive illustrations to command attention. The overall impression is of a studio that takes typography seriously without taking itself too seriously.

## Colors

The palette is fundamentally binary: black ink on white canvas, with strategic injections of saturated accent colors through illustrations and specimen cards.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, header elements, hero display type |
| canvas | #FFFFFF | Page backgrounds, button surfaces, card bases |
| surface-inverse | #000000 | Footer background, dark sections |
| text-inverse | #FFFFFF | Footer text, text on dark surfaces |

The core black-white relationship creates maximum contrast for typographic impact. The only verified interface colors are pure black and pure white; all other chromatic elements derive from photography, illustration, and specimen card artwork rather than defined UI tokens. The hero contains a yellow scribble underline beneath "fonts."; the footer contains pink and cyan scribble illustrations against black; the Parclo Serif card shows orange and brown tones in its specimen photography; the Custom Fonts card shows magenta torn-paper shapes and gray backgrounds. These colors are properties of the image content, not the interface system. When reproducing the design, treat illustration and photography colors as content decisions rather than standardized tokens. The inverse footer flips the spatial relationship cleanly: white text and links on solid black, maintaining the foundry's graphic directness.

## Typography

The system relies on two related families from the same foundry: Really Sans Large for explosive display moments and Really Sans Small for everything else. Both were designed by Riley Cran and The Lettermatic Team, and are published by Lettermatic. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Really Sans Large | 11.875rem | 900 | 0.9 | normal | Homepage hero headlines, massive statements |
| section-display | Really Sans Small | 4rem | 500 | 0.875 | normal | Section headings, card titles |
| body-large | Really Sans Small | 1.5625rem | 400 | 1.5 | normal | Introductory paragraphs, descriptions |
| body | Really Sans Small | 1rem | 400 | 1.5 | normal | Navigation, footer links, general text |
| label | Really Sans Small | 0.875rem | 400 | 1.4286 | normal | Small metadata, version numbers |
| label-semibold | Really Sans Small | 1.125rem | 600 | 1.5556 | normal | Navigation emphasis, category labels |
| button | Really Sans Small | 1.1875rem | 700 | 1.15 | normal | Button text, calls to action |

Really Sans Large appears exclusively at heroic scale—nearly 12rem—creating an almost physical presence on screen. Its tight line-height of 0.9 stacks words into dense, impactful blocks. Really Sans Small handles the full functional range from tiny labels to substantial section heads, with weights from Regular through Semibold to Bold enabling clear hierarchy without family switching. The 16px body size with 24px line-height provides comfortable reading, while the 25px/37.5px intro text offers a measured step up for editorial openings. No italic styles are employed; emphasis comes through weight and scale alone.

## Layout

The page structure follows a centered content column with generous breathing room. The main content area is constrained by horizontal margins of 84.5px on each side (approximately 5.28rem), with an additional 40px (2.5rem) padding inside that creates the effective gutter. This produces a content width that feels expansive without touching viewport edges.

Vertical rhythm is spacious and deliberate. The hero headline carries substantial top margin—256px (16rem)—pushing it well below the navigation and creating a dramatic entry point. Section gaps of 100px (6.25rem) separate major content blocks, while internal component spacing uses 32px (2rem) and 16px (1rem) increments. The footer reverses the spatial logic: flush black background with internal padding of 32px top, maintaining the same horizontal constraints as the main content.

The header is minimal and functional: logo mark and wordmark left-aligned, primary navigation right-aligned in a single row. No background separation or shadow—navigation floats directly on the canvas, relying on whitespace and typographic weight for presence.

Content composition favors asymmetric balance. The hero places massive left-aligned type against a right-side stack of angled font specimen cards. Scribble illustrations occupy negative space deliberately, breaking the grid without disrupting readability. Cards overlap, tilt, and stack to create depth and suggest abundance of work.

## Visual language

The site's distinctive character comes from the collision of precision and spontaneity. Typography is ruthlessly geometric and aligned; illustrations are loose, gestural, and seemingly unplanned. A yellow scribble loops under the "fonts." headline like a highlighter mark. Pink and blue scribbles in the footer echo this gesture at larger scale. Torn-paper edges on specimen cards introduce physical texture into digital space, with ragged white borders suggesting ripped magazine pages.

Font specimens are presented as physical objects—cards with depth, shadow, and material presence. They overlap at slight angles, creating informal stacks that invite browsing. Each card functions as a miniature poster, demonstrating the typeface in context with real words rather than abstract pangrams. The Parclo Serif card shows italic specimens on brown paper against warm orange; the Really Sans card displays bold weights on teal; service cards use flat color fields with graphic accents.

The illustration style is consistently hand-drawn: continuous-line scribbles, rough circles, gestural marks that look like digital ink or crayon. These elements appear to float above or behind content layers, creating shallow depth without complex shadows. The yellow underline beneath "fonts." is particularly characteristic—a casual, almost accidental mark that humanizes the massive type.

## Components

### Primary Button

- **Anatomy**: Text label centered within a rounded rectangle
- **Surface**: White background (#FFFFFF) with 1px solid black border
- **Typography**: `{typography.button}`—Really Sans Small Bold at 1.1875rem
- **Shape**: 8px corner radius
- **Spacing**: 12px vertical padding, 24px horizontal padding
- **Composition**: Inline placement, typically following descriptive text
- **Variants**: Inverse variant removes border on dark backgrounds

### Inverse Button

- **Anatomy**: Text label centered within a rounded rectangle
- **Surface**: White background (#FFFFFF), no border
- **Typography**: `{typography.button}`—Really Sans Small Bold at 1.1875rem
- **Shape**: 8px corner radius
- **Spacing**: 12px vertical padding, 24px horizontal padding
- **Composition**: Used on colored or dark card backgrounds where border would be redundant

### Font Specimen Card

- **Anatomy**: Rectangular container with torn-paper edge effect, type specimen visible inside, optional text overlay with title and version label
- **Surface**: Variable—depends on showcased typeface; includes gradient fills, solid colors, photographic textures
- **Typography**: Card title uses `{typography.section-display}` or larger; version metadata uses `{typography.label}`
- **Shape**: Sharp corners (0 radius) with irregular torn-paper perimeter
- **Spacing**: Internal padding varies by content; cards overlap with negative margins or transforms
- **Composition**: Stacked and angled in groups of 2–3, creating depth through overlap and rotation

### Site Footer

- **Anatomy**: Full-width black band with logo and copyright left, multi-column link grid right, newsletter prompt below
- **Surface**: Solid black (#000000)
- **Typography**: `{typography.body}` in white; link categories use uppercase labels
- **Shape**: Flush edges, no radius
- **Spacing**: 32px top padding, same horizontal margins as main content
- **Composition**: Asymmetric—brand elements anchor left, navigation spreads right in three columns

### Navigation Header

- **Anatomy**: Logo mark (circular icon with "!!") plus "LETTERMATIC" wordmark left; text links right
- **Surface**: Transparent, floating on page background
- **Typography**: `{typography.body}` for links; `{typography.label-semibold}` for emphasis
- **Shape**: No container, no background
- **Spacing**: 40px horizontal padding, comfortable vertical centering
- **Composition**: Flex row, space-between alignment

## Responsive behavior

The design's extreme scale contrast presents clear responsive challenges. The 190px hero display and 142px variant shown in the data suggest the system already employs breakpoint-dependent scaling. At narrower viewports, the hero headline should reduce dramatically—likely to the 60px–64px range used for section displays—to maintain line breaks and avoid overflow. The specimen card stacks, currently angled and overlapping, should flatten to single-column vertical scroll with reduced rotation.

Navigation should collapse to a compact menu or hamburger pattern below desktop widths, preserving the minimal aesthetic. The multi-column footer grid should stack to single column, maintaining left alignment for brand elements and converting the link grid to a simple list.

The torn-paper card effects and scribble illustrations should scale proportionally or hide selectively on small screens, as their decorative density may overwhelm reduced layouts. Touch targets for buttons must maintain the 48px minimum despite the design's compact button sizing.

## Practical implementation guidance

### Preserve
- The stark black-white foundation with illustration and photography providing all color
- The massive scale gap between Really Sans Large display and Really Sans Small functional text
- Hand-drawn scribble elements as SVG or PNG with transparent backgrounds
- Torn-paper edge effects on specimen cards, achievable with CSS masks or clip-path
- The asymmetric card stacking with slight rotations (approximately 5–15 degrees)
- Full-bleed color fields within specimen cards that let typefaces demonstrate character

### Avoid
- Adding background colors or borders to the header—keep it floating on canvas
- Extracting illustration colors as reusable UI tokens; treat them as content
- Introducing additional font families; the two-weight system is intentionally constrained
- Smoothing or vector-tracing the hand-drawn elements; their roughness is essential
- Center-aligning the massive display type; left alignment creates the correct tension

### Recommended Build Order
1. Establish the type system with Really Sans Large and Really Sans Small at all specified weights
2. Build the grid: 40px gutters, 84.5px margins, maximum content width
3. Implement the hero with scalable display type and placeholder for scribble underline
4. Create the button component with exact padding and border treatment
5. Develop specimen card component with torn-paper edge and rotation transforms
6. Build footer with inverse color scheme and multi-column link layout
7. Add scribble illustrations as positioned decorative layers

### Accessibility
- Ensure the 1px black button border meets minimum non-text contrast requirements; consider 2px for enhanced visibility
- Provide text alternatives for all scribble illustrations if they convey meaning; mark purely decorative elements as `aria-hidden`
- The extreme display sizes may trigger motion sensitivity; respect `prefers-reduced-motion` for any card hover or scroll animations
- Maintain sufficient color contrast for text overlaid on specimen card backgrounds—each card's color field must be tested individually
- The footer white-on-black combination exceeds contrast requirements but verify link states include underlines or other non-color indicators

## Scope note

This guide covers the Lettermatic homepage and its primary components as visible in the supplied captures. Interior pages, font detail views, licensing flows, and the checkout experience are not represented. Mobile breakpoints, hover states, loading sequences, and form validation styling are not documented. The newsletter subscription functionality appears in the footer but its form states are not covered. Measurements reflect the desktop viewport widths captured.
