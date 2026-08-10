# How hellotiana.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hellotiana.framer.website-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with profile avatar, name, role at Cowrywise, and bio text alongside three large section links with arrow indicators, showing the green accent hover state on 'ABOUT](https://pin.fontofweb.com/9054?format=jpg)](https://design.withfudge.com/share/pin-9054)

[Hero section with profile avatar, name, role at Cowrywise, and bio text alongside three large section links with arrow indicators, showing the green accent hover state on 'ABOUT](https://design.withfudge.com/share/pin-9054)

[![Hero section in default state with dark section titles 'CASE STUDIES', 'PLAYGROUND', 'ABOUT ME' in muted ink, plus header with 'Say hi' pill button and footer with social links](https://pin.fontofweb.com/9053?format=jpg)](https://design.withfudge.com/share/pin-9053)

[Hero section in default state with dark section titles 'CASE STUDIES', 'PLAYGROUND', 'ABOUT ME' in muted ink, plus header with 'Say hi' pill button and footer with social links](https://design.withfudge.com/share/pin-9053)

## Overview

This is a minimal personal portfolio for a senior product designer. The design rests on an expansive white canvas with generous breathing room between elements. A single green accent color punctuates the otherwise restrained palette, appearing on hover states and small decorative moments. The visual hierarchy is established through dramatic scale contrast: large expressive display type for section navigation, medium-weight sans-serif for structural headings, and smaller readable body text for supporting information. The overall impression is confident and uncluttered, letting the typography and whitespace carry the personality rather than decorative elements or dense imagery.

## Colors

The palette is intentionally narrow, built around a white canvas with dark text and one distinctive green accent.

| token | hex | use |
|---|---|---|
| canvas | `#FFFFFF` | Page background, button fills, link backgrounds |
| ink | `#000000` | Primary text, dark backgrounds on some structural divs |
| muted-ink | `#36403C` | Default state of large section titles, secondary text |
| olive | `#618337` | Hover state on section links, decorative heart icon, brand accent |
| surface-warm | `#D9D9D9` | Subtle borders and dividers |
| surface-neutral | `#6E736D` | Muted supporting text, footer elements |
| action | `#0000EE` | Standard link blue for email and external anchors |

The interface operates in a light mode only. The green accent is reserved for interactive feedback and small emotional touches, never used as a large background field. Dark backgrounds appear only on structural containers, not as a thematic mode. The color system prioritizes readability and restraint, with the olive providing a natural, organic counterpoint to the cool grays and pure black.

## Typography

Four font families appear in the source: Bbh Hegarty for expressive display, Figtree for structural and body text, System for small functional labels, and System-Sansserif as an additional system font reference.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bbh Hegarty | 2.25rem | 400 | 1.2 | 0em | Large section titles: "CASE STUDIES", "PLAYGROUND", "ABOUT ME" |
| section-heading | Figtree | 1.25rem | 600 | 1.4 | -0.04em | Subsection headings, emphasized labels |
| body | Figtree | 0.875rem | 400 | 1.2 | -0.03em | Supporting descriptions, metadata |
| body-large | Figtree | 1rem | 400 | 1.5 | -0.04em | Bio text, longer readable passages |
| label | System | 0.75rem | 400 | 1.2 | 0em | Navigation buttons, small tags, footer credits |
| system-label | System-Sansserif | 0.75rem | 400 | 1.2 | 0em | Alternative system font for small utilitarian text |

Bbh Hegarty supplies the personality: a bold, slightly irregular display face with confident letterforms that make the section navigation feel crafted rather than generic. Figtree, designed by Erik Kennedy, provides the rational backbone with its geometric clarity and slightly tight tracking. System and System-Sansserif handle utilitarian text at small sizes where custom font loading would be unnecessary.

Verify licensing for these families before production use. The Bbh Hegarty attribution is not supplied in the source records.

## Layout

The page uses a single-column layout with generous horizontal margins. Content is constrained to a centered container with `80px` side padding, creating ample whitespace that frames the sparse content. The vertical rhythm is loose and breathable, with section spacing around `5rem` between major content blocks.

The header spans the full width with a subtle bottom border, containing the wordmark on the left and a pill-shaped contact button on the right. Below this, the hero area presents identity information in a split arrangement: the avatar, name, and role cluster on the left, while the bio statement sits on the right, creating an asymmetric balance that feels editorial rather than rigidly grid-based.

The three major section links stack vertically with substantial vertical padding, each occupying significant vertical real estate. This treatment elevates navigation to content status, making the journey through the portfolio feel deliberate. A thin horizontal rule separates these sections, providing subtle structure without visual weight.

The footer mirrors the header's full-width treatment, with a light top border. Credits anchor the left, social and utility links center-right, and a platform badge sits at the far right. The overall layout prioritizes vertical scrolling through a single page of content, with no sidebar or complex grid to distract from the typographic hierarchy.

## Visual language

The aesthetic is deliberately understated: white space is treated as an active design element rather than absence. Rounded forms appear sparingly, limited to the avatar ring, the contact button pill, and small decorative elements. Sharp corners dominate the structural language, reinforcing the clean, modern sensibility.

Shadow appears only once in the system: a subtle layered shadow on certain containers, creating gentle depth without material metaphor. The shadow uses multiple stops of black at decreasing opacity to simulate ambient occlusion rather than harsh directional light.

The avatar receives special treatment: a circular crop with a thin colored ring border, distinguishing it from the otherwise flat interface. This is the only instance of outlined portraiture, making the personal identity mark feel slightly elevated.

Arrow indicators accompany each section title, suggesting forward movement and clickability without requiring explicit button styling. These arrows share the same color as their associated text, shifting from muted ink to olive on hover.

The green heart in the footer credit line is a small emotional gesture that humanizes the otherwise clinical precision, reinforcing that this is a personal site built with care.

## Components

### Header

- **Anatomy**: Wordmark logotype left, contact pill button right
- **Surface**: White background with subtle bottom border in warm gray
- **Typography**: Wordmark uses custom lettering "Tiana" with asterisk; button uses system label
- **Shape**: Full-width bar, button is fully rounded pill
- **Spacing**: `11px` vertical padding, `80px` horizontal padding
- **Composition**: Flex row, space-between alignment

### Contact button

- **Anatomy**: Envelope icon prefix, "Say hi" label
- **Surface**: White fill, warm gray border
- **Typography**: `{typography.label}` in standard link blue
- **Shape**: Pill border radius
- **Spacing**: `9px` top and bottom, `16px` left, `11px` right padding
- **States**: Default shows full label; an alternative compact state shows icon only

### Hero identity block

- **Anatomy**: Circular avatar, display name, role line with company link
- **Surface**: Transparent, sitting on white canvas
- **Typography**: Name uses `{typography.section-heading}` weight and size; role uses `{typography.body}` in muted neutral
- **Shape**: Avatar is circular with colored ring border
- **Spacing**: Tight internal grouping with small gap between avatar and text
- **Composition**: Left-aligned cluster

### Bio text

- **Anatomy**: Single paragraph statement
- **Typography**: `{typography.body-large}` in muted ink
- **Composition**: Right-positioned in hero area, narrower measure for comfortable reading

### Section link

- **Anatomy**: Large display text with trailing arrow
- **Surface**: Transparent, full-width clickable area with generous vertical padding
- **Typography**: `{typography.hero-display}` in muted ink default, olive on hover
- **Spacing**: `45px` vertical padding, `80px` horizontal padding
- **Composition**: Flex row, space-between, arrow right-aligned
- **Variants**: Default state in muted ink; hover state shifts text and arrow to olive
- **Hierarchy**: Each section separated by thin horizontal rule

### Footer

- **Anatomy**: Credit line left, social links center-right, platform badge right
- **Surface**: White with subtle top border
- **Typography**: Credits use `{typography.body}`; links use `{typography.body}` in muted ink; platform badge uses system label
- **Spacing**: `21px` vertical padding, `80px` horizontal padding
- **Composition**: Flex row with distributed alignment

## Responsive behavior

The wide `80px` horizontal padding suggests a desktop-first approach. On narrower viewports, this padding should compress to maintain proportional margins without forcing excessive line breaks in the large display type. The hero's split arrangement should stack vertically on small screens, placing identity above bio for natural reading order.

The section links, already full-width, will adapt primarily through type scaling. The display font may need reduction to prevent overflow on narrow viewports. The three-line footer should collapse to a stacked arrangement on mobile, with credits, links, and badge each occupying full width in sequence.

The contact button's compact icon-only state suggests an existing responsive consideration for constrained header space. This pattern should be maintained and potentially extended to other horizontal elements.

## Practical implementation guidance

### Preserve
- The generous whitespace and vertical breathing room; this is central to the site's character
- The single green accent discipline; do not introduce additional accent colors
- The scale contrast between display type and body text
- The expressive personality of Bbh Hegarty for major navigation
- The subtle border treatments that provide structure without visual weight

### Avoid
- Adding background colors or textures behind content sections
- Introducing card-based layouts or elevated surfaces with shadows
- Using the olive green for large fills or backgrounds
- Tightening the vertical spacing between section links
- Replacing the display type with a more conventional geometric sans

### Recommended build order
1. Establish the white canvas and `80px` horizontal padding container
2. Implement the header with wordmark and pill button
3. Set up the typography hierarchy with all font families at correct scales
4. Build the hero area with avatar, identity block, and bio text
5. Create the section link component with hover color transition
6. Add horizontal rules between sections
7. Implement footer with proper link grouping and platform badge

### Accessibility
- Ensure the olive hover state meets contrast requirements against white; the default muted ink should already comply
- The large display type for section links should include appropriate `aria-label` or visible context indicating destination
- The circular avatar should have meaningful alt text
- The envelope icon in the contact button should not be the sole indicator of purpose; maintain visible text or robust labeling

## Scope note

This guide covers the single-page portfolio landing surface visible in the supplied images. Case study detail pages, playground entries, and the about page are not represented. Motion behavior, focus states, and mobile-specific layouts are not documented. Measurements reflect the exact values retained from the source interface.
