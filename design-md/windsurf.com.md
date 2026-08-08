# How windsurf.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/windsurf.com-design)

Last updated: 2026-08-08

## Captured pages

[![Deep-navy homepage hero with centered headline and tight action cluster](https://pin.fontofweb.com/8872?format=jpg)](https://design.withfudge.com/share/pin-8872)

[Deep-navy homepage hero with centered headline and tight action cluster](https://design.withfudge.com/share/pin-8872)

[![Dark product page with a pale editor card and a blue-accented plugin panel](https://pin.fontofweb.com/8876?format=jpg)](https://design.withfudge.com/share/pin-8876)

[Dark product page with a pale editor card and a blue-accented plugin panel](https://design.withfudge.com/share/pin-8876)

[![Centered macOS download chooser with pink primary and outlined secondary buttons](https://pin.fontofweb.com/8877?format=jpg)](https://design.withfudge.com/share/pin-8877)

[Centered macOS download chooser with pink primary and outlined secondary buttons](https://design.withfudge.com/share/pin-8877)

[![Pale pricing cards with bright action bars and simple checklist rows](https://pin.fontofweb.com/8875?format=jpg)](https://design.withfudge.com/share/pin-8875)

[Pale pricing cards with bright action bars and simple checklist rows](https://design.withfudge.com/share/pin-8875)

## Overview

Windsurf presents a dark software brand rather than a light marketing page. The strongest sections begin on a deep navy field with a centered headline, a concise action cluster, and just enough support text to make the choice obvious. From there the page moves into large product cards, a compact provider strip, and pricing blocks that keep the same calm tone while changing the surface color.

The system depends on contrast and restraint. Pink marks the primary action. Blue supports links, structural accents, and the alternate technical tone. White cards give the page a pause from the navy shell, and plum sections add a second dark accent mood without breaking the brand. The result is a page that feels fast, technical, and polished, but not crowded.

The visible character to keep is:

- centered, low-clutter hero staging
- large soft-edged display type
- a pink primary action paired with a pink outlined alternative on navy
- broad navy fields with only a few strong section breaks
- white and pale cards used as relief inside the darker shell
- utility labels that stay small, spaced, and direct

Graphic linework, product screenshots, icons, and white cards do the visual work that a photography-heavy brand might leave to images. If product art appears, it should stay inside the same navy frame so the action colors keep their meaning.

## Colors

Windsurf’s palette is built for a dark shell with bright signposts. White and near-white text carry the main message on navy and black surfaces, while pink is the primary download signal and blue handles supporting technical accents, links, and linework. Plum appears as a secondary mood for page treatment, and the deepest dark tone is used where the page needs to fall back and quiet down.

| token | value | use |
|---|---|---|
| `action` | `#FB9CE5` | Primary download fills, highlighted bars, and the clearest brand accent |
| `action-alt` | `#096FFF` | Secondary accents, technical links, and bright structural lines |
| `border` | `#FB9CE5` | Outlined chooser buttons, fine rules, and pink strokes on dark surfaces |
| `canvas` | `#FFFFFF` | White cards, open relief areas, and the light surface used against the navy background |
| `ink` | `#000000` | Strong text on the lightest cards and price blocks |
| `ink-soft` | `#003326` | Short supporting lines on light surfaces and quiet list text |
| `page-navy` | `#011C42` | Main page stage, centered hero background, and the dark software shell |
| `page-deep` | `#0B100F` | The darkest utility tone for footers, dense bands, and the quietest edges |
| `accent-plum` | `#5C0047` | Small utility text, secondary dark accents, and the text color inside the pink button |
| `on-dark` | `#FFFFFF` | Headings, labels, and controls placed on navy or deep dark surfaces |

Light cards stay clean and almost neutral, while dark sections stay committed to the navy family. The accent colors do not form a separate decorative set; they stay tied to actions, labels, and rules so the page keeps one visual language. The chooser buttons are a good example of that discipline: the filled choice uses pink with plum text, while the outlined choice keeps pink text and a pink stroke on navy. Blue remains available for technical support marks and linework elsewhere, but the chooser itself should stay in the pink-and-navy pairing that gives the page its strongest contrast.

## Typography

The type system mixes one rounded display face with a plain sans and a monospaced utility face. Tomato Grotesk carries the large headlines and pricing titles. Dm Sans 9 Pt handles body copy, buttons, and navigation. Dm Mono marks tiny labels and short utility notes. System appears in the quietest fine print. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Tomato Grotesk | 4.5rem | 400 | 1 | -0.03em | Centered homepage and chooser headlines |
| `section-display` | Tomato Grotesk | 3.75rem | 400 | 1 | -0.03em | Secondary stage headlines and large section prompts |
| `card-title` | Tomato Grotesk | 2rem | 400 | 1.05 | -0.02em | Editor card titles, pricing names, and feature anchors |
| `body` | Dm Sans 9 Pt | 1rem | 400 | 1.5 | 0em | Descriptive copy, card paragraphs, and list text |
| `body-medium` | Dm Sans 9 Pt | 1rem | 500 | 1.5 | 0em | Buttons, stronger copy, and inline emphasis |
| `nav` | Dm Sans 9 Pt | 0.75rem | 500 | 1.25 | 0.08em | Top navigation and other compact UI labels |
| `eyebrow` | Dm Mono | 0.75rem | 400 | 1 | 0.16em | Small centered tags and short uppercase markers |
| `fine-print` | System | 0.75rem | 400 | 1.4 | 0em | Quiet legal lines and the least prominent helper text |

The hierarchy relies on scale and spacing more than on many font families. Headings are large but not heavy. Utility text is small, spaced out, and sometimes all caps. Buttons stay close to the body size so the interface feels cohesive instead of overdesigned. On the light cards, black or near-black copy should remain the default. On the dark stages, the display face should keep its light weight so the page feels open rather than dense.

## Layout

The page shell is wide, centered, and deliberately spacious. The top hero sits far from the top edge, then keeps the message and actions tightly grouped in the middle of the navy field. That centered start matters because it makes the page feel like a product choice rather than a content dump. The same balance continues into the download and pricing pages: one major statement, a small set of options, and enough negative space to keep each choice legible.

The structure changes from stage to stage:

- The hero uses a single centered column with a small eyebrow, a large headline, and one clear button cluster.
- The product choice page uses a split layout with a dominant light card on one side and a darker companion card on the other.
- The provider strip compresses into a single horizontal line of equal logos, which keeps the page calm between larger modules.
- The pricing view moves to equal-width cards so the choice reads as parallel options rather than a long list.

Spacing is one of the strongest parts of the system. The visible rhythm favors 16px and 20px for controls, 24px and 28px for small clusters, 40px and 56px for card padding, and 80px to 160px for larger section breathing room. The biggest vertical spaces belong to hero and section breaks, not to the cards themselves. That keeps the layout feeling open even when it presents several product paths.

Card geometry stays modest. Corners are small, not pill-like. Large rounded containers are avoided so the pages do not drift into a playful style. Instead, the design uses width, alignment, and surface color to separate sections. The result is a page that can move from a centered hero to a split product comparison to a pricing grid without losing its sense of order.

## Visual language

Windsurf’s visual language is technical, direct, and slightly electric. The deep navy stage gives the brand its weight. Pink adds energy and marks the primary action. Blue reinforces the technical feel through outlines, links, and geometric accents. Plum gives the system another dark accent so the page can switch tone without leaving the same family. Together those colors create a controlled contrast that suits software, coding, and installation flows.

The backgrounds are not plain. The hero and product pages use wide diagonal bands, arcs, or angled linework that move the eye across the page without becoming decoration for its own sake. Those marks should remain subtle and structural. They help the page feel dynamic while the actual content stays calm and centered.

The brand also uses a strong split between open and dense surfaces. White cards bring the eye back down after the dark hero. Dark cards let the interface show a second layer of information without changing the overall mood. Monochrome provider logos and small utility marks sit between those large shapes and keep the rhythm steady.

The page’s visual energy comes from contrast, not from ornament. Large type, narrow labels, outlined choices, and clear blocks of content do the work. Any new section should fit that same pattern: one prominent message, one obvious action, and a surface that either recedes or pops rather than competing with the copy.

## Components

### Top navigation

- **Anatomy:** wordmark on the left, spaced text links across the top, a small circular account icon, and a high-contrast download action at the far right.
- **Surface:** transparent over the navy hero so the navigation feels embedded in the page rather than floating above it.
- **Typography:** small uppercase or near-uppercase utility text in `nav`.
- **Shape:** the account control is circular; the download action is a short rectangle with a modest corner radius.
- **Spacing:** the brand, links, and action sit far apart, with generous side breathing room.
- **Visible states:** the active area should remain readable over the dark background, and the main action should keep its bright fill.

### Hero download chooser

- **Anatomy:** eyebrow label, large centered headline, two side-by-side choice buttons, and a small helper line below.
- **Surface:** deep navy with white text and a bright pink primary button.
- **Typography:** `eyebrow` for the tag, `hero-display` for the headline, `body-medium` for the buttons.
- **Shape:** small-radius buttons rather than fully rounded pills.
- **Composition:** everything stays center aligned so the page reads as one clear decision.
- **Visible states:** the chosen action should look filled and dominant, while the alternate route should stay outlined with pink text and a pink stroke.
- **Color treatment:** the filled button should use pink with plum text, matching the chooser shown in the page view. The outlined button should stay on navy and keep the same pink family for its text and border.

### Split product card pair

- **Anatomy:** a wide editor card with title, short description, action buttons, and a feature list; a darker supporting card with the plugin title, short explanation, and a logo grid.
- **Surface:** the main card uses a light surface with dark copy; the companion card stays on the navy field and uses lighter text.
- **Typography:** `card-title` for the main titles, `body` for the explanatory copy, `body-medium` for the buttons.
- **Shape:** small corner radius, flat surfaces, and minimal shadow treatment.
- **Spacing:** ample internal padding and a clear gutter between the two cards.
- **Composition:** the main editor card should dominate the left side, while the supporting card should stay visually secondary but still substantial.
- **Visible states:** the main action should read as the preferred route; the secondary action should stay quieter but still obvious.

### Provider logo band

- **Anatomy:** a short centered heading and one row of evenly spaced provider marks.
- **Surface:** dark navy so the white marks can sit cleanly without extra framing.
- **Typography:** `nav` or `eyebrow` scale, kept small and restrained.
- **Composition:** keep the logos aligned on one axis and avoid stacking them into multiple rows unless the screen gets very narrow.
- **Visible states:** no extra effects are needed; the row should rely on even spacing and contrast.

### Pricing cards

- **Anatomy:** plan label, price or contact prompt, a full-width action bar, and a checklist of included features.
- **Surface:** pale cards on a light field, with a strong action bar that reads as the main decision point.
- **Typography:** `card-title` for the plan names, `body` for the checklists, `body-medium` for the action bar.
- **Shape:** the same modest corner radius used elsewhere; the cards should feel part of one system.
- **Spacing:** the checklist needs comfortable vertical rhythm, and the action bar should sit close enough to the price to feel connected.
- **Composition:** two parallel columns work best for Teams and Enterprise because they make the contrast between self-serve and contact-based purchase clear.
- **Visible states:** the selected or primary card should not depend only on color; use size, emphasis, or action placement as the main cue.

## Responsive behavior

On smaller screens, the page should keep the same story order: eyebrow, headline, action, card, then support content. The centered hero can collapse to a single column without losing its character, but the spacing should still feel generous. The split product layout should stack into a single vertical sequence, with the main card first and the supporting card second. Pricing cards should also stack cleanly while keeping the action bar prominent.

The type system should scale in steps rather than jump to a different mood. The display face can move down one or two size tiers, but it should still feel like the same brand. Utility labels should remain small and spaced, and the line lengths should shorten enough to keep the centered hero readable. Diagonal background marks and bands can simplify on small screens, but they should not disappear entirely because they help define the page’s motion.

The main responsive rule is to preserve clarity before decoration. If space gets tight, reduce the number of columns and keep the strongest action first. Do not crowd the hero with extra support lines or place too many small badges beside the main decision.

## Practical implementation guidance

### Preserve

- Keep the deep navy shell, the white cards, and the pink-and-blue action pairing.
- Hold onto the centered hero composition and its large top breathing room.
- Use Tomato Grotesk for the big statements and Dm Sans 9 Pt for the functional copy.
- Keep Dm Mono for the tiny eyebrow labels and short utility marks.
- Let diagonal linework and arcs support the layout without taking over the page.

### Avoid

- Avoid heavy shadows, glossy gradients, and extra ornamental borders.
- Avoid replacing the pink primary action with another accent color.
- Avoid making every container equally rounded; the small-radius card language is part of the brand.
- Avoid dense paragraphs and long feature lists in the hero.
- Avoid splitting the page into many unrelated color moods.

### Recommended build order

1. Set the color tokens and the display/body/utility type scale.
2. Build the deep navy hero stage with the centered headline and action pair.
3. Add the split product card pattern and the provider-logo band.
4. Build the pricing cards and the light-card treatment.
5. Finish with responsive stacking rules and the smallest utility labels.

### Accessibility

- Keep white text only on the dark navy and deep dark fields.
- Keep black or near-black text on the light cards.
- Give outlined buttons a clear focus ring so the secondary path is visible without relying on color alone.
- Make icon-only controls, including the profile circle, readable to assistive tech.
- Keep the pink primary action distinct by shape and placement, not only by color.
- Use concise alternative text for editor screenshots, logos, and product artwork.
- Preserve readable line lengths when the hero collapses to a smaller width.

## Scope note

This guide covers the desktop homepage hero, the macOS download chooser, the editor and plugin card pair, the provider logo strip, and the pricing cards shown in the supplied views. It does not cover mobile rearrangement, motion, hover or disabled states, or pages outside those surfaces.
