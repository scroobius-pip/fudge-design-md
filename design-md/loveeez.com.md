# How loveeez.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/loveeez.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with rounded cyan panel, speech bubble, large display type reading なかまたち, and central bear character illustration with floating avatar orbs](https://pin.fontofweb.com/3719?format=jpg)](https://design.withfudge.com/share/pin-3719)

[Hero section with rounded cyan panel, speech bubble, large display type reading なかまたち, and central bear character illustration with floating avatar orbs](https://design.withfudge.com/share/pin-3719)

[![Character relationship diagram with dotted connector lines, colored relationship labels, and rounded avatar cards on white and mint gradient background](https://pin.fontofweb.com/3718?format=jpg)](https://design.withfudge.com/share/pin-3718)

[Character relationship diagram with dotted connector lines, colored relationship labels, and rounded avatar cards on white and mint gradient background](https://design.withfudge.com/share/pin-3718)

[![Three-column island cards in cyan, pink, and yellow with illustrated maps, resident character icons, and rounded VIEW MORE buttons](https://pin.fontofweb.com/3717?format=jpg)](https://design.withfudge.com/share/pin-3717)

[Three-column island cards in cyan, pink, and yellow with illustrated maps, resident character icons, and rounded VIEW MORE buttons](https://design.withfudge.com/share/pin-3717)

[![Footer area with large LOVEEZ logotype, five character illustrations in a row, FOLLOW US heading, and circular social media icon buttons on pink background](https://pin.fontofweb.com/3716?format=jpg)](https://design.withfudge.com/share/pin-3716)

[Footer area with large LOVEEZ logotype, five character illustrations in a row, FOLLOW US heading, and circular social media icon buttons on pink background](https://design.withfudge.com/share/pin-3716)

## Overview

Loveeez is a Japanese character property built around soft, rounded visual language and pastel candy colors. The design system prioritizes emotional warmth and playful accessibility through blob-like shapes, generous corner radii, and a cast of simple animal characters rendered in flat illustration style. Every surface feels cushiony and approachable—panels curve into view, buttons are fully pill-shaped, and typography alternates between bouncy display faces and friendly rounded gothic body text. The system is organized around character storytelling: each section introduces a cast member or location through illustrated cards, relationship diagrams, and immersive island environments. Color serves narrative purpose, with each character and location receiving a signature pastel that repeats across backgrounds, buttons, and accent details. The overall impression is of a digital toy or picture book brought to screen, where every element invites touch and exploration.

## Colors

The palette is built on soft pastels with a dark ink for readability. Background colors are fully saturated in their hue but kept light in value, creating an airy, confectionery atmosphere. Accent colors are more intense versions of the same hues, used for interactive elements and emphasis.

| token | value | use |
|---|---|---|
| ink | #3D3D3D | Primary text, character outlines, diagram connectors |
| canvas | #FFFFFF | Speech bubbles, icon backgrounds, text on dark surfaces |
| surface-pink | #FFE4F0 | Primary page background, footer area, Pinky Island card |
| surface-cyan | #A8F0F8 | Hero panel, Kappe Island card, character avatar backgrounds |
| surface-mint | #C8F8E8 | Secondary panel backgrounds, gradient transitions |
| surface-yellow | #FFF8C8 | Central Island card, warm accent sections |
| surface-lavender | #E8E0F8 | Tertiary card backgrounds, subtle variation |
| accent-pink | #FF88B8 | Primary buttons, active states, emphasis labels |
| accent-cyan | #38D8F0 | Secondary buttons, refresh icons, cool emphasis |
| accent-coral | #FF6B6B | Menu button, alert or notification surfaces |
| muted-ink | #888888 | Secondary text, captions, diagram subtitles |

The system operates in a single light mode. Dark values appear only as text and thin illustration outlines. Photographic content is limited to flat character illustrations that share the same pastel palette, so no separate image-color treatment is needed. Each location or character theme carries a signature surface color that repeats across its card, background, and associated interactive elements.

## Typography

Three font families create a clear hierarchy: Cherry Bomb One for exuberant display settings, Coiny for compact labels and buttons, and Zen Maru Gothic for readable body text and navigation. All three share rounded, friendly terminals that reinforce the system's soft geometry.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cherry Bomb One | 5rem | 400 | 1.1 | 0.02em | Page titles, large section headers |
| section-display | Cherry Bomb One | 3rem | 400 | 1.2 | 0.01em | Card titles, medium headers |
| body | Zen Maru Gothic | 1rem | 400 | 1.8 | 0 | Paragraphs, descriptions, dialogue |
| body-bold | Zen Maru Gothic | 1rem | 700 | 1.8 | 0 | Emphasized body, speech bubble text |
| label | Coiny | 0.875rem | 400 | 1.4 | 0.04em | Buttons, tags, small headings |
| navigation | Zen Maru Gothic | 0.875rem | 700 | 1.4 | 0.02em | Menu, links, wayfinding |

Verify licensing for these families before production use. Cherry Bomb One and Coiny are display faces best reserved for short text; Zen Maru Gothic carries longer reading content. The display sizes are large relative to body text, creating dramatic scale jumps that feel appropriate for a character property aimed at casual browsing rather than dense reading.

## Layout

The page is built from full-width horizontal bands that stack vertically, each with a distinct background color or gradient. Within these bands, content is centered with generous side margins. The character relationship diagram in the middle of the page demonstrates a more complex layout: a centered title with subtitle, then a network of positioned character cards connected by dotted lines and directional arrows.

Key layout patterns include:

- **Rounded panels**: Large background shapes with 2rem corner radius that contain section content, often bleeding to one or both edges
- **Three-column grids**: Equal-width cards with internal vertical stacking—title, illustration, description, action
- **Character rows**: Horizontal sequences of circular avatar icons or full character illustrations, evenly distributed
- **Floating elements**: Small circular buttons and avatar orbs that overlap panel boundaries

Spacing between major sections is substantial, typically 6rem, allowing each colored band to breathe independently. Internal card padding is 2rem, with 1.5rem gaps between related elements. The relationship diagram uses a looser, more organic spacing where connector lines and labels create their own rhythm between the fixed card positions.

## Visual language

The illustration style is flat, minimal, and highly rounded. Characters are simple blobs with tiny facial features—dot eyes, small curved mouths, occasional blush marks. Outlines are consistently dark and medium-weight, creating clear silhouettes against any pastel background. Characters appear in both full-body and head-only avatar forms, with avatars rendered as perfect circles containing the character face.

Decorative elements include:

- **Speech bubbles**: Rounded rectangles with small triangular tails, containing short phrases in bold body text
- **Connector systems**: Dotted lines with arrow terminations, colored to match relationship types (pink for romantic, cyan for familial, lavender for ambiguous)
- **Location maps**: Illustrated island environments in heart or blob shapes, filled with tiny buildings and landscape features
- **Background logotypes**: Very large, low-opacity display text that sits behind foreground content as atmospheric texture

The overall density is low. White space is treated as a material presence rather than an absence, with colored panels floating in it like cards on a table. Every interactive element is clearly separated from illustration content—buttons are solid, saturated, and pill-shaped, never integrated into the artwork itself.

## Components

### Primary action button
- **Anatomy**: Solid fill with centered text, no border, no icon
- **Surface**: Background uses accent-pink for default, accent-cyan for alternate contexts
- **Typography**: label token, white text, uppercase or title case
- **Shape**: Full pill with 9999px border radius
- **Spacing**: 1rem vertical padding, 2.5rem horizontal padding
- **Composition**: Typically centered within card or section, full width on mobile

### Character card
- **Anatomy**: Rounded rectangle containing title, illustration, description, resident icons, and action button
- **Surface**: Background matches location theme—surface-cyan, surface-pink, or surface-yellow
- **Typography**: section-display for location name, body for description, label for button
- **Shape**: 1.5rem corner radius
- **Spacing**: 2rem internal padding, vertical stack with 1.5rem gaps
- **Variants**: Three visible colorways corresponding to three island locations

### Speech bubble
- **Anatomy**: Rounded rectangle with downward-pointing triangular tail
- **Surface**: canvas background, no border
- **Typography**: body-bold, ink color
- **Shape**: 1rem corner radius, tail centered or offset toward speaker
- **Composition**: Positioned above or near associated character, overlapping panel edges

### Menu button
- **Anatomy**: Fixed-position circular button with MENU label and icon
- **Surface**: accent-coral background, canvas text
- **Typography**: navigation token, uppercase
- **Shape**: Pill or circle, positioned top-right of viewport
- **Composition**: Floats above all content, persistent across scroll

### Social icon row
- **Anatomy**: Horizontal sequence of circular buttons containing platform icons
- **Surface**: canvas background, ink icon color
- **Shape**: Perfect circles, 3rem diameter
- **Spacing**: Even distribution with 1rem gaps, centered below FOLLOW US heading
- **Composition**: Centered in footer area on surface-pink background

### Character avatar
- **Anatomy**: Circular container with character illustration centered
- **Surface**: Transparent or matching card background
- **Shape**: 50% border radius, consistent sizing within a row
- **Composition**: Used in resident lists below location maps, or as floating orbs in hero sections

## Responsive behavior

The three-column island card layout should stack vertically on narrower viewports, maintaining full-width cards with preserved internal proportions. The character relationship diagram requires careful adaptation: on small screens, the network may need to collapse to a vertical sequence with simplified connector labels, or transform into an accordion where each relationship expands on interaction.

The large background logotype text scales down proportionally but remains oversized relative to content, maintaining its atmospheric role. Speech bubbles should remain readable without truncation; their tails may reposition to point from the nearest edge.

The fixed menu button should remain accessible without obscuring critical content; consider reducing to icon-only on very small screens. Social icon rows can wrap to two rows if platform count grows.

## Practical implementation guidance

### Preserve
- The extreme corner rounding on all containers—this is the system's most distinctive feature
- The three-family typography stack; substituting a non-rounded sans for Zen Maru Gothic would break the friendly tone
- The pastel saturation levels; pushing surface colors brighter or darker loses the soft, edible quality
- The consistent dark outline weight on all character illustrations

### Avoid
- Sharp corners on any interactive element or container
- Drop shadows that compete with the flat illustration style; if depth is needed, use subtle color shifts or scale changes
- Mixing character art styles; all illustrations should share the same blob-like proportions and facial feature scale
- Dense text blocks; the system is built for scanning and emotional engagement, not extended reading

### Recommended build order
1. Establish the pastel palette and rounded token system
2. Implement the three font families with their size hierarchy
3. Build the section panel component with its 2rem radius and full-bleed behavior
4. Create the character card with internal vertical stacking
5. Add the pill button system with its two accent colorways
6. Implement the relationship diagram layout with SVG or CSS connector lines
7. Polish with speech bubbles, floating avatar orbs, and background logotype treatment

### Accessibility
- Ensure the light pastel backgrounds meet contrast requirements when paired with ink text; surface-yellow and surface-cyan may need adjustment for small text
- The decorative display type should never carry critical information alone; always provide a plain-text equivalent nearby
- Character illustrations should have descriptive alt text that conveys emotional state and relationship context
- Interactive elements must have visible focus states that do not rely on color alone; consider a dashed outline or scale change

## Scope note

This guide covers the landing page and its visible sections: hero introduction, character relationship diagram, location island cards, and social footer. Interior pages, animation behavior, and any e-commerce or account functionality are not represented. Measurements are practical adaptation targets derived from the visible interface.
