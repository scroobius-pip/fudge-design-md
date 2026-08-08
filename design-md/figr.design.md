# How figr.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/figr.design-design)

Last updated: 2026-08-08

## Captured pages

[![Centered serif hero with lavender pills and a framed product mockup](https://pin.fontofweb.com/7413?format=jpg)](https://design.withfudge.com/share/pin-7413)

[Centered serif hero with lavender pills and a framed product mockup](https://design.withfudge.com/share/pin-7413)

[![Split contact page with large question text, stacked inputs, and submit pill](https://pin.fontofweb.com/7414?format=jpg)](https://design.withfudge.com/share/pin-7414)

[Split contact page with large question text, stacked inputs, and submit pill](https://design.withfudge.com/share/pin-7414)

## Overview

Figr’s visual system is quiet, premium, and highly typographic. The page architecture gives the serif headline the most authority, then supports it with a restrained sans-serif UI for navigation, form labels, and helper copy. The overall mood is warm rather than clinical: the canvas reads as a soft cream, the main text is near-black, and the only vivid accent is a lavender-purple button fill. That single accent repeats in the top navigation and the form submit control, so the site feels consistent even as the page shifts from a marketing homepage to a practical contact form.

The home page centers a large promise above a framed product showcase. The contact page keeps the same header language and button system but changes the composition to a two-column problem report layout. Both pages rely on empty space, a small number of visible controls, and very large serif statements. The result is editorial and composed, with enough contrast to stay usable but not enough color or ornament to feel busy.

## Colors

The palette is small and intentionally calm. Cream canvas replaces stark white as the page base, while black type and lavender actions do the heavy lifting. Light grays handle fields, soft secondary surfaces, and borders. The lower dark band on the home page adds a deep terminal chapter without introducing a new accent color.

| token | value | use |
|---|---|---|
| `action` | `#6D5AE7` | Primary buttons such as “Sign up for free” and “Submit” |
| `action-soft` | `#FFFFFF` | Framing color behind the product showcase |
| `ink` | `#000000` | Headings, nav text, and body copy on light surfaces |
| `muted-ink` | `#6F6A64` | Supporting copy and helper text |
| `canvas` | `#FFFFFF` | Main page background |
| `surface` | `#FFFFFF` | Input fields, cards, and inner panels |
| `surface-soft` | `#FFFFFF` | Secondary button fill and quiet UI surfaces |
| `border` | `#DCD6CF` | Field borders and the dashed file area |
| `footer` | `#000000` | Deep lower band at the bottom of the home page |
| `footer-ink` | `#FFFFFF` | Light text on the dark lower band |

The system does not rely on separate photographic or multi-theme palettes. Instead, it uses one warm light mode, one deep black closing band, and one lavender accent family that carries through the site. The accent remains the same color in the navigation pill and the submit control, which keeps the interface unified even when the page moves from editorial hero to form utility.

## Typography

The page uses two families with a strict role split. **Gt Alpina** carries the voice: it appears in the giant hero statements and the lower black section. **Inter** carries the interface: it is used for navigation, labels, body copy, helper text, and button text. The hierarchy comes from scale, weight, and spacing rather than from many font families. Display text is light and spacious. UI text is compact, legible, and plain.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Gt Alpina | 4.75rem | 300 | 1.02 | -0.03em | Main homepage and contact headline |
| `section-display` | Gt Alpina | 4rem | 300 | 1.04 | -0.025em | Large dark-band heading and secondary display moments |
| `body` | Inter | 1rem | 400 | 1.55 | 0em | Supporting sentences, helper text, and general copy |
| `body-strong` | Inter | 1rem | 500 | 1.45 | 0em | Button text and emphasized labels |
| `field-label` | Inter | 1rem | 600 | 1.2 | 0em | Form labels and required-field headings |
| `nav` | Inter | 1rem | 400 | 1.2 | 0em | Header links and account actions |
| `button` | Inter | 1rem | 500 | 1.2 | 0em | Lavender and soft buttons |
| `legal` | Inter | 0.75rem | 400 | 1.4 | 0em | Small note text and compact helper copy |

The display scale is intentionally large and restrained. The homepage headline occupies several lines with generous leading, while the contact headline stays equally serious but slightly more functional. The sans-serif text never competes with the serif voice; it simply explains, labels, and confirms. Verify licensing for these families before production use.

## Layout

The page shell is wide and centered, with a great deal of empty cream space around the content. Top padding is generous, and the header sits lightly above the rest of the page rather than acting like a heavy bar. On the homepage, the hero is centered and stacked: wordmark and nav at the top, headline in the middle, short supporting text below, then two pills and a large framed product panel. The contact page keeps the same upper structure but shifts the main content into a split layout, with the question headline and one-line support on the left and a form column on the right.

Spacing is spacious but not random. Small relationships use 4, 8, 16, and 20 pixel steps. The larger breathing room appears in the 32 pixel outer gutters, the 48 pixel vertical separations between major pieces, and the 128 pixel band of top offset that gives the page its calm start. The product showcase also uses a deep inset feel: a lavender outer frame, a white inner field, and wide margins that keep the mockup from feeling cramped.

The page is composed as a sequence of chapters rather than a grid of equally weighted modules. First comes the brand line and navigation. Then comes the hero statement. Then the product showcase or the contact form. Finally, the composition drops into the black lower section. That progression creates a clear visual rhythm without relying on dividers, icons, or dense card systems.

## Visual language

Figr feels editorial and product-led at the same time. The serif headline gives the site a magazine-like tone, but the interface parts are practical and familiar. Buttons are soft pills, not sharp rectangles. Inputs are white and lightly outlined. The file upload zone uses a dashed border so it reads as a drop area without shouting for attention. The product showcase is the most decorative piece on the homepage, yet it still feels controlled because the lavender frame is broad, the inner panel is white, and the small cards inside remain simple.

The whole system avoids visual noise. There are no heavy gradients across the page, no loud drop shadows, and no crowded icon sets. Color is used sparingly: cream for calm, black for authority, lavender for action, and warm gray for support. Shape is also disciplined. Small controls use the 8 pixel radius, while the larger panels use the 24 pixel radius. That difference keeps the buttons crisp and the showcase and form regions soft.

The strongest visual contrast comes from the black lower band. It closes the page like a stage curtain and lets the serif type turn bright white. This works well with the rest of the design because the system has already stayed quiet above it. The dark band is not a second theme; it is the final beat in the same editorial language.

## Components

### Header and navigation

The header is a slim, low-emphasis row with the black wordmark at the left, centered navigation links, and three actions at the right. The hierarchy is clear: text links first, a quiet “Book a demo” pill second, and the lavender “Sign up for free” pill as the dominant action. The surrounding cream space keeps the header from competing with the hero.

### Hero statement

The homepage hero is centered and very large. It uses the serif display family, light weight, and tight tracking to make the promise feel editorial rather than salesy. Supporting copy sits below in muted ink and stays short. The two button row beneath it is compact, with the softer secondary action offset by the lavender primary. On the contact page, the same serif voice becomes a practical question-and-answer headline, but the tone remains calm and direct.

### Product showcase

The homepage showcase is a major visual block. It uses a broad lavender frame, a white inner panel, and rounded corners that make the large object feel friendly. Inside the frame, the top row of small cards is evenly spaced and lightly shadowless, the central round play control gives one clear focal point, and the lower prompt bar behaves like a command field. The composition is centered and symmetrical, which makes the panel feel stable even though the interior contains many small pieces.

### Form stack

The contact form is tall and neatly ordered. Labels are bold enough to read at a glance, required markers are explicit, and each field is separated by a clear vertical gap. Inputs have a white fill, a thin warm border, and a subtle inset impression that gives them a little depth without becoming glossy. The textarea is larger but follows the same rules. The file area uses a dashed border and a centered prompt so it feels like a special input rather than a generic box. The submit button stays small, rounded, and lavender, which keeps the action focused while leaving the rest of the form quiet.

### Footer band

The dark lower band uses the same serif display style as the hero, but it shifts the mood into a terminal chapter. White text on black produces the strongest contrast in the system, and the large type size makes the band feel like a conclusion rather than a footer afterthought. Because the band is so plain, it benefits from generous top spacing and very little surrounding detail.

## Responsive behavior

The visual hierarchy should collapse in the same order it appears on desktop: brand bar, headline, support copy, actions, then the main panel or form. On narrower screens, the hero should still feel spacious, but the two-column contact layout should stack cleanly so the headline remains readable before the form fields. The showcase panel should remain centered and should not become cramped with tiny interior elements. Buttons should keep their pill shape and stay large enough to tap comfortably. The dark lower band should remain a simple full-width block rather than a narrow strip.

## Practical implementation guidance

### Preserve
- Keep the serif headline large, light, and centered or near-centered depending on the page section.
- Keep lavender as the only strong action color across nav and forms.
- Preserve the warm cream canvas instead of switching to bright pure white.
- Keep borders thin and quiet so the form feels refined.
- Let negative space do the work; the page should feel airy, not packed.

### Avoid
- Avoid bold, saturated brand colors beyond the lavender action.
- Avoid dark interface chrome above the hero.
- Avoid heavy shadows, glossy field treatments, and dense card grids.
- Avoid shrinking the serif headline into a standard marketing size.
- Avoid introducing a second accent hue for alternate actions.

### Recommended build order
1. Define the core tokens for cream, black, lavender, and warm gray.
2. Build the header and the two button styles.
3. Establish the serif headline and sans-serif supporting text roles.
4. Assemble the homepage hero and framed product showcase.
5. Build the contact form stack with fields, textarea, and file area.
6. Finish with the black lower band and its white display text.

### Accessibility
- Keep text contrast strong on the cream canvas and especially on lavender buttons.
- Use explicit labels for every field; do not rely on placeholders as the only instruction.
- Make required fields obvious with text, not color alone.
- Keep focus styles visible on links, pills, and inputs.
- Ensure the file upload zone has a clear text label and keyboard access.
- Maintain readable line lengths so the large serif text does not become difficult to scan.

## Scope note

This guide covers the desktop home hero, shared header, contact form, product showcase panel, and dark lower band. It does not include mobile layouts, motion, or interaction states that are not shown here. Measurements are practical adaptation targets.
