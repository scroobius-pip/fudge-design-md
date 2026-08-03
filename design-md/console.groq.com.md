# How console.groq.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/console.groq.com-design)

Last updated: 2026-08-03

## Captured pages

[![Centered sign-in panel with stacked rounded controls and tiny legal copy](https://pin.fontofweb.com/9484?format=jpg)](https://design.withfudge.com/share/pin-9484)

[Centered sign-in panel with stacked rounded controls and tiny legal copy](https://design.withfudge.com/share/pin-9484)

[![Dark models library with blue announcement strip and three-column card grid](https://pin.fontofweb.com/9483?format=jpg)](https://design.withfudge.com/share/pin-9483)

[Dark models library with blue announcement strip and three-column card grid](https://design.withfudge.com/share/pin-9483)

## Overview

GroqCloud's home screen is a dark developer console with a tight, centered reading column and a strong hierarchy of rounded panels. The page does not try to feel expansive or decorative. It feels controlled, technical, and compact: a top bar, a sign-in block, and a model directory stacked one after another inside a charcoal shell. The visual mood comes from restraint. Most surfaces sit inside the same black-to-stone family, while the brightest notes are the coral brand accent and the pale blue secondary highlight.

The identity is built from contrast rather than ornament. White text carries the main message, muted stone text carries the supporting lines, and 10px corners keep the interface crisp without feeling sharp. Buttons and pills are outlined instead of glossy. The model area uses a denser card lattice, so the page shifts from account entry into product inventory without changing its overall temperature.

## Colors

### Core interface colors

| token | value | role |
|---|---|---|
| `canvas` | `#1C1E22` | Overall page shell and outer frame |
| `surface` | `#121418` | Main cards, login blocks, and dark content panels |
| `surface-alt` | `#1F1E1C` | Slightly warmer card fill inside the model grid |
| `border` | `#262626` | Card edges, subtle separators, and input outlines |
| `ink` | `#FFFFFF` | Primary headings, button text, and high-emphasis labels |
| `muted-ink` | `#A5A09C` | Secondary labels, helper copy, and subdued nav text |
| `soft-ink` | `#E0E0E0` | Lighter supporting copy on dark panels |
| `tertiary` | `#6B7280` | Quiet utility text and low-priority marks |
| `action` | `#F55036` | Brand accent and high-attention callouts |
| `highlight` | `#CDEAFB` | Secondary accent for links, chrome, and the blue banner family |
| `chrome` | `#999999` | Neutral outline tone for pills and small UI chrome |

The palette stays inside a narrow neutral corridor and only breaks out when the interface needs attention. `#FFFFFF` is reserved for the clearest text and the strongest contrast. `#A5A09C` and `#E0E0E0` divide secondary copy from primary copy without introducing a brighter gray that would flatten the hierarchy. `#262626` is the practical divider color: visible, but quiet enough that the cards still feel like one continuous system.

`#F55036` and `#CDEAFB` do different jobs. Coral is the brand flare and the color that should mark a decisive action. Pale blue is cooler and softer; it reads as a supporting highlight, not a competing action. That split matters because the page already has enough structural contrast from the dark shell and light text. The accent colors should stay sparse so the console keeps its disciplined tone.

## Typography

GroqCloud uses only two families in the packet: **Space Grotesk** for headings, labels, and navigation; **Inter** for body copy, controls, and explanatory text. The mix is practical rather than expressive. Space Grotesk supplies the compact technical voice. Inter supplies legibility at small sizes. Licensing should be confirmed separately for both families before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Space Grotesk | 1.875rem | 400 | 1.2 | 0em | Main hero statement in the login panel |
| `section-title` | Space Grotesk | 1rem | 400 | 1.5 | 0em | Section headers such as the models heading |
| `panel-emphasis` | Space Grotesk | 1.25rem | 500 | 1.4 | 0em | Prominent panel copy like the login prompt |
| `card-label` | Space Grotesk | 0.8125rem | 500 | 1.5 | 0em | Uppercase model-group labels |
| `navigation` | Space Grotesk | 0.875rem | 400 | 1.43 | 0em | Top navigation links and quiet top-bar text |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Supporting text, helper text, and notes |
| `body-medium` | Inter | 0.875rem | 500 | 1.43 | 0em | Button text, compact actions, and inline emphasis |
| `meta` | Inter | 0.75rem | 400 | 1.33 | 0em | Legal copy, tiny helper text, and subdued labels |

The hierarchy is small but deliberate. The hero line is larger than everything else, yet it still reads as interface copy rather than marketing copy because the typeface stays restrained and the leading stays tight. The section title drops back to a flatter 16px scale so the model grid can take over. Inside the grid, labels and item names are compact, with uppercase section heads and small body lines creating a catalog feel. The buttons use medium-weight Inter at 14px, which keeps them legible without overpowering the panel they sit in.

## Layout

The page is built as a centered column inside a full-width dark shell. The top navigation spans the page edge-to-edge, but its contents stay visually light: logo at left, links at the right, and a bordered login pill anchored at the far edge. Below that, the content stays in the middle of the viewport rather than stretching into a marketing layout. This gives the home page the feeling of a workspace, not a landing page.

The first major block is a sign-in card. It sits alone, with generous margins around it and a deep surface tone that separates it from the shell by only a small shift in value. The block is vertically stacked: heading, helper line, social buttons, divider, email field, second action, then legal copy. The controls are centered and narrow, which keeps the panel tall and calm instead of wide and noisy.

The second major block begins with a section heading and then a blue announcement strip that spans the card width. Under that strip, the model groups form a dense three-column lattice. Some cards are taller than others, so the grid feels like an organized inventory rather than a uniform set of equal tiles. That uneven rhythm matters: it keeps the page from feeling mechanical while still preserving the sense of a structured catalog.

Spacing is conservative and repetitive. Large gaps separate the two big cards, while smaller internal gaps organize labels, buttons, and list items. The system depends on a small set of repeated distances, especially 8px, 16px, 24px, 32px, and 40px equivalents. That regularity gives the interface its steady cadence.

## Visual language

The visual language is sober, minimal, and highly functional. Darkness is the default state, not a special mode. Surfaces sit close together in value, so the design depends on borders, spacing, and type scale more than on fills or shadows. When depth appears, it is subtle: a thin outline, a slight value shift, or a soft edge around the panel. Nothing feels glossy or inflated.

Shape is a key part of the language. The 10px radius on panels gives every block a composed, modern edge. The pill radius on buttons and inputs softens the otherwise rectilinear layout and makes the controls feel intentional. The 18px corner size can appear on secondary shapes and link treatments, but the overall geometry still reads as rectilinear first and rounded second. That balance keeps the interface professional and avoids the over-curved look of consumer apps.

Color accents are deliberately scarce. Coral gives the brand a brief flash of energy, but it should not take over the layout. The pale blue accent is quieter and works well for support chrome, connector messaging, and secondary links. The rest of the palette stays neutral. This creates a system where a single colorful note is enough to steer attention.

The model cards add a catalog-like texture through repetition. Small icons, compact headings, and closely spaced item lists make the page feel like a product index. That density is a visual feature, not clutter: the page is telling the user that the important thing is the set of available models and tools, not a long editorial explanation.

## Components

### Top navigation

The top bar is lightweight and horizontal. The logo sits at the left edge, while the links align to the right and remain visually quiet. The link text is small and regular-weight, so the bar never competes with the content below it. The far-right login control is a bordered pill with a dark fill and light text. It feels like a utility control rather than a primary campaign button. That distinction matters because the page already contains the main sign-in panel below.

### Sign-in panel

The authentication block is the most prominent single component on the page. It uses a dark card surface, rounded corners, centered content, and a strong vertical stack. The header is large but not oversized; it reads as a direct instruction. Under it, the control stack is simple: social sign-in, divider, email field, submit button, and legal copy. The form controls share a common pill geometry and a thin border. Their style is almost monochrome, which keeps the focus on the action labels and the surrounding hierarchy.

The buttons rely on outline treatment rather than solid fills. That choice gives the panel a calm, native-console feel. The text is medium-weight Inter and centered. The helper copy beneath the controls is much smaller and lower-contrast, which prevents the legal note from cluttering the main call to action. The entire block is self-contained; it reads like one transaction surface.

### Announcement banner

The wide banner under the models heading is the one bright band inside the page body. It acts as a transitional strip between the sign-in area and the model inventory. The banner should stay compact in height, with a clearly bounded edge and a small icon or logo at the left. Its content is short enough that the user can scan it quickly, and the right-aligned link closes the line without adding a second action button. The banner is a support component, not a second hero.

### Model grid cards

The model directory is the densest part of the page. Each group card has a small uppercase label, then a short list of model names. The headings are tiny and technical, set in Space Grotesk so they feel related to the navigation but still distinct from the body copy. Item lines are tighter and simpler, usually with small logos or glyphs beside the names. The cards vary in height, but they share the same dark fill and thin border, which keeps the grid coherent even when the content length changes.

The model cards should stay flat and border-led. Heavy shadows would fight the console mood. The contrast comes from the card fill against the shell and from the clear white text against the dark surface. That is enough to carry the hierarchy.

### Pills and helper text

Buttons, fields, and chip-like controls all use the same rounded language. Their outlines are visible without becoming flashy. This makes the interface feel consistent across sign-in, navigation, and the product grid. Helper text stays small and muted. It should not try to compete with the cards or the action labels. Its job is to fill the gaps between the stronger visual anchors.

## Responsive behavior

The visual system should keep its centered-column logic when it narrows. The sign-in panel, section header, banner, and model cards should remain in the same reading order, with the model grid collapsing before the top navigation loses legibility. On smaller widths, the cards can stack into fewer columns, but the card vocabulary should remain the same: dark surfaces, thin borders, compact labels, and small list items.

Buttons and fields should keep their pill shape at every width. The most important thing to protect is the hierarchy: headline first, action second, supporting copy third. If the layout compresses, type can scale down slightly, but the cards should never become dense rectangles with no breathing room. The console needs enough room around each block to keep the control-center feeling.

## Practical implementation guidance

### Preserve

- Keep the page dark by default and let surface shifts, not bright fills, separate major areas.
- Keep the login and model sections centered and stacked. That vertical rhythm is part of the identity.
- Use Space Grotesk for the page's technical voice and Inter for controls and prose.
- Keep 10px panel corners, pill-shaped controls, and thin borders as the main shape language.
- Let coral remain rare and purposeful; use pale blue as the quieter supporting accent.

### Avoid

- Avoid bright white panels that flatten the console mood.
- Avoid large shadows, glossy gradients, and decorative depth.
- Avoid mixing a second display family into the system.
- Avoid oversized buttons or wide marketing-style hero copy.
- Avoid adding extra accent colors that dilute the coral-and-blue split.

### Recommended build order

1. Establish the shell, border, and surface colors.
2. Build the top navigation and bordered login pill.
3. Recreate the sign-in panel with its centered stack.
4. Add the announcement banner.
5. Build the model grid cards and their small labels.
6. Tune the spacing and corner radii so the page reads as one system.
7. Check narrow-width collapse after the desktop structure is stable.

### Accessibility

- Keep white text only where the background is dark enough to hold it cleanly.
- Make sure the outlined controls still read as interactive without color alone.
- Preserve clear focus styling on links, pills, and form fields.
- Keep legal and helper copy readable at smaller sizes without reducing contrast too far.
- Use descriptive labels for the model groups and their item lists so the grid stays understandable when rendered by assistive technology.

## Scope note

This guide covers the GroqCloud home screen shown here: the top navigation, sign-in panel, announcement banner, and model grid. It does not define mobile breakpoints, motion, loading states, error states, hover details, or the full font licensing path. The rem values are rounded to the 2px grid used in this guide.
