# How fontstand.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fontstand.com-design)

Last updated: 2026-08-10

## Captured pages

[![Conference hero with gradient background, large title, and navigation tabs](https://pin.fontofweb.com/6811?format=jpg)](https://design.withfudge.com/share/pin-6811)

[Conference hero with gradient background, large title, and navigation tabs](https://design.withfudge.com/share/pin-6811)

[![Schedule section with gradient background, time slots, and workshop details](https://pin.fontofweb.com/6810?format=jpg)](https://design.withfudge.com/share/pin-6810)

[Schedule section with gradient background, time slots, and workshop details](https://design.withfudge.com/share/pin-6810)

[![Speakers grid with red-tinted portraits and biographical text](https://pin.fontofweb.com/6812?format=jpg)](https://design.withfudge.com/share/pin-6812)

[Speakers grid with red-tinted portraits and biographical text](https://design.withfudge.com/share/pin-6812)

[![Features grid with line icons and dark footer with contact actions](https://pin.fontofweb.com/5506?format=jpg)](https://design.withfudge.com/share/pin-5506)

[Features grid with line icons and dark footer with contact actions](https://design.withfudge.com/share/pin-5506)

## Overview

Fontstand's visual system is built around typographic authority and restrained graphic drama. The interface relies on a single sans-serif family, Zed L, deployed across a tight range of weights from Regular to Black. Color is almost exclusively black and white, with a single vivid red reserved for primary actions and energetic accents. Surfaces are clean and uncluttered, letting the type and photography carry the emotional weight. The conference pages introduce full-bleed gradient backgrounds that shift from deep red through orange to warm yellow and neutral grey, creating an immersive stage for bold headlines and structured content. This is a system that trusts its typeface: large display sizes, tight leading, and minimal decoration.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, footer background, navigation |
| muted-ink | #F4F4F4 | Subtle backgrounds, inactive surfaces, divider lines |
| surface | #F8F8F8 | Light panel backgrounds, feature sections |
| action | #FF2200 | Primary buttons, links, active states, accent panels |
| canvas | #FFFFFF | Page background, card surfaces, button text on dark |

The palette is aggressively minimal. Black carries almost all text and structural weight. White provides breathing room and contrast. The red accent appears sparingly but decisively: as a solid fill for "Buy Tickets" buttons, as link color in speaker bios, and as a full-bleed background tint in certain panel treatments. The gradient hero surfaces on conference pages blend red, orange, yellow, and grey tones photographically rather than through UI overlays—these are content backgrounds, not interface colors. No dark mode is visible in the supplied material; the system appears to operate in a single light mode with dark footer inversions.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Zed L | 3.6rem | 900 | 0.9 | -0.02em | Page titles, conference hero headlines |
| section-display | Zed L | 1.8rem | 700 | 1.2 | normal | Section headings, schedule headers |
| subhead | Zed L | 1.35rem | 700 | 1.3 | normal | Workshop titles, speaker names, lead paragraphs |
| body | Zed L | 0.9rem | 400 | 1.4 | normal | Paragraphs, descriptions, navigation |
| body-small | Zed L | 0.72rem | 400 | 1.4 | normal | Captions, metadata, fine print |
| label | Zed L | 0.9rem | 400 | 1 | normal | Buttons, tags, navigation items |

Zed L is the sole type family, designed by Peter Biľak and distributed by Typotheque. The system uses two related cuts: Zed L for text and Zed Display L for larger sizes, though both share the same underlying structure. Weights range from Regular (400) through Bold (700) to Black (900). Display sizes are set tight and large: the conference hero runs at 57.6px with leading pulled to 51.84px, creating a dense, impactful block. Body text stays modest at 14.4px with comfortable 20.16px leading. The type scale is built on a 2px grid, with sizes at 11.52px, 14.4px, 21.6px, 28.8px, and 57.6px—each an exact multiple of the base unit.

## Layout

The layout is fundamentally centered and contained. Content sits within a max-width container that leaves generous margins on desktop. The conference pages use a two-tier structure: a full-bleed gradient hero at the top, followed by a white content area with centered text blocks and structured grids.

The hero section layers a logo mark, date/location metadata, a massive headline, and inline navigation tabs. Below, body copy is constrained to a readable measure—roughly 65-75 characters—centered or left-aligned depending on context. The schedule section uses a two-column layout: time ranges left, workshop titles and descriptions right, separated by thin horizontal rules. Speaker grids run three columns with equal-width portrait cards, each containing a duotone image, name, affiliation, and bio paragraph.

Spacing follows a clear rhythm. Component padding is typically 20px. Section breaks use 40px margins. The hero panel carries substantial top padding at 302.664px, pushing content well below the fold. Cards and panels use 20px internal padding. The footer inverts to a dark rounded bar with flex-spaced content: help text left, contact actions right.

## Visual language

The visual language balances Swiss restraint with moments of graphic heat. The gradient hero surfaces are the most distinctive element: smooth color fields that read as environmental rather than decorative, shifting from deep crimson through amber to cool grey. These gradients sit behind black type without overlays or scrims, relying on color placement for legibility.

Photography receives aggressive color treatment. Speaker portraits are rendered in a red duotone, washing skin tones into the brand's accent color against a matching red field. This creates visual unity across disparate source images and ties the photography directly to the brand palette.

Line icons appear in feature sections: thin, geometric, monochrome. These are explanatory rather than decorative, paired with bold subheads and compact body copy. Borders are used sparingly—1px hairlines in black for tags and schedule dividers. Rounded corners appear on buttons (full pills), tags (soft pills), and footer panels (generous rounding at 40px). Cards use a moderate 15px radius.

The overall impression is editorial and confident: plenty of white space, type that scales dramatically between contexts, and color that arrives with purpose rather than ornament.

## Components

### Primary action button
- **Anatomy**: Text label centered within a solid fill container
- **Surface**: Background `{colors.action}`, text `{colors.canvas}`
- **Typography**: `{typography.label}`
- **Shape**: Full pill with `{rounded.pill}`, height 50px
- **Spacing**: Horizontal padding 20px, no internal icon in visible state
- **Composition**: Appears inline within content flow, often following introductory text

### Secondary action button
- **Anatomy**: Text label with optional icon (information circle visible)
- **Surface**: Background `{colors.ink}`, text `{colors.canvas}`
- **Typography**: `{typography.label}`
- **Shape**: Full pill with `{rounded.pill}`, height 50px
- **Spacing**: Horizontal padding 20px
- **Composition**: Positioned at right edge of panel in ticket container

### Tag / pill label
- **Anatomy**: Text within a bordered container
- **Surface**: Transparent background, `{colors.ink}` border and text
- **Typography**: `{typography.label}`
- **Shape**: Full pill with `{rounded.pill}`, border 1px solid
- **Spacing**: Padding 5px vertical, 10px horizontal
- **Composition**: Inline with schedule times, indicating category ("Workshops")

### Speaker card
- **Anatomy**: Portrait image, name heading, affiliation line, bio paragraph, external link
- **Surface**: White background, black text, red link
- **Typography**: Name `{typography.subhead}`, affiliation `{typography.body-small}`, bio `{typography.body}`, link `{colors.action}`
- **Shape**: Image fills top with 3px radius; card itself is flush
- **Spacing**: 20px padding between text elements
- **Composition**: Three-column grid with equal widths, 4px gap between cards

### Schedule row
- **Anatomy**: Time range, optional tag, title, description, cost note
- **Surface**: Transparent over gradient background
- **Typography**: Time `{typography.body}`, title `{typography.subhead}`, description `{typography.body}`, cost `{typography.body-small}`
- **Shape**: Separated by 1px horizontal rules
- **Spacing**: 20px vertical padding, generous internal margins
- **Composition**: Two-column with time left, content right; full-width rules between entries

### Footer bar
- **Anatomy**: Help text, email link, social handle
- **Surface**: Background `{colors.ink}`, text `{colors.canvas}`
- **Typography**: `{typography.body}`
- **Shape**: 40px border radius, full-width with internal flex spacing
- **Spacing**: 20px vertical, 40px horizontal padding
- **Composition**: Text left, actions right; actions use pill buttons with outline and solid variants

## Responsive behavior

The supplied images show desktop layouts exclusively. The centered content container and generous margins suggest a standard breakpoint approach: maintain max-width on large screens, reduce side margins on tablets, and stack columns on mobile. The three-column speaker grid should collapse to single column on narrow viewports. The schedule's two-column layout should similarly stack, with time ranges becoming headers above their content blocks. The hero headline at 3.6rem will need scaling down—likely to 2.4rem or 1.8rem—to maintain impact without overflow. Gradient backgrounds should remain full-bleed at all sizes, with text padding increased on mobile to maintain legibility against color transitions.

## Practical implementation guidance

### Preserve
- The stark black-and-white foundation with single red accent
- Tight display leading and negative letter spacing on hero sizes
- Full-bleed gradient surfaces behind content
- Red duotone treatment on portrait photography
- Generous border radius on footer panels and buttons
- The 2px-grid type scale with exact pixel multiples

### Avoid
- Introducing additional accent colors; the system lives on restraint
- Heavy shadows or dimensional effects; surfaces are flat
- Underlined text links outside of body copy; use color change only
- Tight leading on body sizes; keep 1.4 for readability
- Square buttons; the pill shape is consistent across all actions

### Recommended build order
1. Establish the 2px spacing grid and type scale
2. Load Zed L with weights 400, 700, and 900
3. Build the hero gradient surface and test black type legibility across color transitions
4. Implement the button system with pill shapes and two color variants
5. Create the schedule row component with hairline dividers
6. Build the speaker card with image aspect ratio and text spacing
7. Assemble the footer bar with flex composition and rounded container

### Accessibility
- Ensure gradient backgrounds meet contrast ratios; the red-orange zone may need text positioning adjustment
- Provide focus indicators that respect the pill shape
- Maintain touch targets at 44px minimum for mobile; the 50px button height satisfies this
- Use semantic heading hierarchy: h1 for hero, h2 for sections, h3 for cards and schedule items

## Scope note

This guide covers the conference and application pages visible in the supplied images. The pricing, contact, and other legacy pages are not represented with extractable interface detail. Mobile layouts, hover states, form interactions, and animation behavior are not documented. Verify licensing for Zed L and Zed Display L through Typotheque before production use.
