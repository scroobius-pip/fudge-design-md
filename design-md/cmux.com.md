# How cmux.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cmux.com-design)

Last updated: 2026-08-03

## Captured pages

[![Dark hero with compact header, centered copy, and wide screenshot](https://pin.fontofweb.com/9447?format=jpg)](https://design.withfudge.com/share/pin-9447)

[Dark hero with compact header, centered copy, and wide screenshot](https://design.withfudge.com/share/pin-9447)

[![Light hero with the same centered column and terminal preview](https://pin.fontofweb.com/9448?format=jpg)](https://design.withfudge.com/share/pin-9448)

[Light hero with the same centered column and terminal preview](https://design.withfudge.com/share/pin-9448)

[![Light testimonial column with closing buttons and footer links](https://pin.fontofweb.com/9449?format=jpg)](https://design.withfudge.com/share/pin-9449)

[Light testimonial column with closing buttons and footer links](https://design.withfudge.com/share/pin-9449)

[![Dark testimonial column with stacked quotes and closing actions](https://pin.fontofweb.com/9450?format=jpg)](https://design.withfudge.com/share/pin-9450)

[Dark testimonial column with stacked quotes and closing actions](https://design.withfudge.com/share/pin-9450)

## Overview

cmux uses a restrained, developer-first visual language built from monochrome surfaces, compact type, and a very narrow centered content column. The page does not try to feel expansive or decorative. It feels precise, controlled, and intentionally quiet. The strongest impression comes from contrast: bright white pages against near-black pages, filled pills against outlined pills, and dense testimonial text against generous empty margins.

The layout reads like one editorial stack rather than a marketing grid. Navigation sits high and light, the hero block stays small and centered, the feature list and product screenshot occupy the middle, and a long run of quotes carries the lower page. The design depends on spacing, weight, and inversion more than on color variety. That makes the system stable across light and dark modes without changing its character.

The core visual habit to preserve is restraint. Use one dominant text family, one action color, and a few gray steps. Let the product screenshot, the buttons, and the centered column do the structural work.

## Colors

The palette is intentionally narrow. Light mode sits on `#FAFAFA` or `#FFFFFF` with `#171717` text, while dark mode flips to `#0A0A0A` with `#EDEDED` body text and `#FAFAFA` used for the inverted primary-action fill and other light UI surfaces. `#737373` and `#A3A3A3` carry secondary copy, link labels, and low-priority metadata. `#E5E5E5` forms the light divider and outline color, and `#262626` supplies the darker stroke used in dark mode boundaries and button edges.

The brand does not rely on a chromatic accent. Instead, the primary action is a tonal inversion: a filled near-black pill on light surfaces and a filled near-white pill on dark surfaces. The outlined secondary button is the opposite surface treatment, so the pair stays legible without introducing another hue. This inversion is one of the main identity markers in the screenshots.

| token | value | role |
|---|---|---|
| `action` | `#171717` | Filled primary control on light canvases |
| `action-inverse` | `#FAFAFA` | Filled primary control on dark canvases |
| `canvas-light` | `#FAFAFA` | Main light page background |
| `canvas-dark` | `#0A0A0A` | Main dark page background |
| `surface` | `#FFFFFF` | Raised light surface and screenshot frame |
| `ink` | `#171717` | Main text on light backgrounds |
| `muted-ink` | `#737373` | Secondary labels and quiet navigation |
| `subtle-ink` | `#A3A3A3` | Softer supporting text on dense quote stacks |
| `border` | `#E5E5E5` | Light dividers and low-contrast outlines |
| `border-strong` | `#262626` | Dark outlines and control strokes |

Use the grays as a hierarchy, not as decoration. The screenshots depend on the difference between clear text, muted text, and quiet supporting text. Keep that gradient intact when translating the page.

## Typography

Geist drives the interface. Apple-system appears only in tiny chrome-like labels and fallback spots, and the system stack is the invisible backup layer. The page does not need a second expressive family; the hierarchy comes from scale, weight, and compact leading.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Geist | 1.5rem | 600 | 1.33 | -0.025em | Page title and the small centered hero heading |
| `lead` | Geist | 1.125rem | 400 | 1.63 | 0em | Intro line under the heading |
| `body` | Geist | 1rem | 400 | 1.5 | 0em | Longer supporting copy and quote paragraphs |
| `body-compact` | Geist | 0.9375rem | 400 | 1.5 | 0em | Link rows, small notes, and short UI text |
| `label` | Geist | 0.9375rem | 500 | 1.5 | 0em | Button labels and strong inline cues |
| `micro` | Geist | 0.75rem | 400 | 1.33 | 0em | Very small helper text and metadata |
| `chrome` | Applesystem | 0.875rem | 400 | 1 | 0em | Tiny OS-like chrome text and fallback labels |

The page uses an unusually modest headline size for a homepage. The weight and tight negative tracking give the hero its presence without making it shout. The quote stack stays readable because line length is controlled and the leading is open enough for repeated paragraphs. Font licensing details were not included in the packet and should be checked before reuse.

## Layout

The page is organized as one centered column with a very large amount of side breathing room. On desktop, the content sits far inside the viewport rather than stretching edge to edge. That narrow measure is part of the brand. It makes the copy feel deliberate and keeps the long testimonial section from collapsing into a wall of text.

The top bar is spare: navigation links, a small GitHub count, a pill download button, and a tiny square theme toggle. The hero block stays compact and centered, with the logo mark, one heading, one paragraph, two actions, then a feature list. The product screenshot sits below that list as a broad, dark rectangle with rounded corners, giving the page a visual anchor before the quote section begins.

Spacing is steady and repetitive rather than rhythmic in a decorative sense. The page uses large section gaps, smaller gaps between bullets, and tight gaps within button groups. The most common internal spacing values are 12px, 16px, 24px, 40px, 48px, and 96px. Those values create a clear hierarchy:

- `96px` vertical room for major section breathing space
- `48px` for major transitions inside the center column
- `40px` for separation between quote groups and supporting blocks
- `16px` for list spacing and small item clusters
- `12px` for compact secondary structure and internal text spacing
- `24px` for the main horizontal gutter

The layout is also deliberately symmetrical. Even when the content gets long, it remains centered and calm. That is why the testimonials feel like a continuous narrative rather than many separate cards.

## Visual language

cmux speaks in plain, technical shapes. Pills, rectangles, thin strokes, and flat fills do most of the work. There is no decorative shadow system, no gradient language, and no elaborate illustration layer. Depth comes from contrast between foreground text and background canvas, plus the clear edge of the screenshot frame.

The interface feels like a product page built by someone who trusts writing and screenshots more than ornament. The top navigation is light and compact. The action buttons are rounded and filled. The link row beneath the CTAs is understated. The screenshot frame is the one large visual object that breaks the otherwise text-led flow.

The dark and light modes keep the same structure. Only the tonal relationships change. That consistency matters: the same column width, the same pill shapes, the same spacing cadence, and the same hierarchy of labels and body text all survive the inversion. Because of that, the theme swap feels like a surface change, not a redesign.

Use these visual habits:

- Keep surfaces flat and borders thin.
- Favor filled pills for the main call to action.
- Keep the secondary action outlined and quiet.
- Let the product screenshot be the heaviest shape in the middle of the page.
- Keep the quotes aligned and legible instead of turning them into cards with strong ornament.

## Components

### Top navigation

**Anatomy.** A centered row of links, a small GitHub count, a pill download button, and a square theme toggle.  
**Typography.** The links are small, quiet Geist labels.  
**Surface.** The bar stays visually transparent against the page canvas.  
**Shape.** The download control is fully pill-shaped; the toggle is a small square with a thin stroke.  
**Composition.** The navigation reads as a thin cap above the content, never as a heavy header band.

### Primary action

**Anatomy.** Apple icon or GitHub icon at the left, short action text, rounded pill body.  
**Surface.** Filled `#171717` on light pages and filled `#FAFAFA` on dark pages.  
**Typography.** Medium-weight small labels with compact padding.  
**Shape.** Very large radius, soft edges, and no sharp corners.  
**Visible states.** Resting state is already high contrast; the button should stay crisp rather than decorative.

### Secondary action

**Anatomy.** Same width and rhythm as the primary action, but framed by a lighter or darker outline.  
**Surface.** Transparent or page-colored interior with a thin border.  
**Typography.** Same label scale as the primary action.  
**Composition.** The pair works because the filled control wins first attention and the outline control remains available without competing.

### Hero block

**Anatomy.** Logo mark, compact title, one paragraph, the CTA pair, then a feature list.  
**Typography.** The title uses the page’s strongest 24px treatment; supporting copy drops to 18px or 16px.  
**Spacing.** The title, paragraph, buttons, and bullets are separated by deliberate but small gaps.  
**Composition.** Everything stays centered and narrow, so the block feels precise rather than airy.

### Feature list

**Anatomy.** Short bullet points with a bold opening phrase followed by an explanatory clause.  
**Typography.** The lead words are stronger; the trailing text is quieter.  
**Spacing.** Each bullet has enough separation to stay scannable, but the list remains a single block.  
**Hierarchy.** The list reads like a compact product summary, not a marketing manifesto.

### Quote stack

**Anatomy.** A long vertical run of short endorsements and longer remarks.  
**Typography.** Body-sized Geist text with slightly softer secondary lines and names.  
**Composition.** The stack is centered and narrow, which keeps the quotes intimate and controlled.  
**Visible states.** In dark mode, the text brightens and the surrounding field deepens, but the rhythm stays unchanged.

### Screenshot frame

**Anatomy.** One wide terminal screenshot with rounded corners and a dark interior.  
**Surface.** The frame feels like a product proof surface, not a decorative card.  
**Shape.** Rounded corners are present but not exaggerated beyond the rest of the page.  
**Role.** This is the heaviest visual object on the page and should stay visually grounded.

## Responsive behavior

On smaller screens, the centered column should expand proportionally while keeping the same order: navigation, hero, actions, feature list, screenshot, then quotes. The button pair should stay adjacent as long as possible; if space tightens, the filled action should remain first. The quote stack should reflow into shorter line lengths before it becomes visually dense.

The screenshot frame should scale down with the column rather than forcing the text to compete with it. The overall page should continue to feel like one restrained editorial stack, not a grid that suddenly starts to tile. Theme inversion should remain identical across sizes so the light and dark versions feel like the same system.

## Practical implementation guidance

### Preserve

- Keep the page monochrome.
- Keep the centered measure narrow.
- Keep the filled + outlined pill pairing.
- Keep Geist as the dominant family.
- Keep the quote stack calm and readable.
- Keep the screenshot as the main proof object.

### Avoid

- Avoid bright accent colors.
- Avoid decorative shadows or glow effects.
- Avoid wide multi-column marketing layouts.
- Avoid oversized hero type that breaks the page’s quiet tone.
- Avoid turning the quote section into a card wall.
- Avoid mixing in a second expressive font.

### Recommended build order

1. Set the canvas colors for light and dark modes.
2. Establish the centered column width and section spacing.
3. Build the navigation row and pill actions.
4. Add the hero heading, lead copy, and feature list.
5. Place the screenshot frame as the main visual anchor.
6. Build the quote stack with matching spacing and muted secondary lines.
7. Verify the theme swap keeps the same hierarchy in both modes.

### Accessibility

- Keep the contrast of text and buttons high in both themes.
- Preserve visible focus styling on links, pills, and the theme toggle.
- Keep the icon-only toggle understandable through an accessible name.
- Give the screenshot useful alternate text that names the product view.
- Avoid using gray alone to communicate action or priority.

## Scope note

This guide covers the homepage shell, hero, feature list, screenshot frame, quote stack, and top navigation for cmux.com. It does not define the separate docs, blog, changelog, community, or GitHub pages, and it does not include mobile breakpoints, motion, or interaction-state specifics. Spacing values are expressed on the packet’s 2px relative-unit scale.
