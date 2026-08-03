# How cohere.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cohere.com-design)

Last updated: 2026-08-03

## Captured pages

[![Cream hero with oversized enterprise headline and floating gradient forms](https://pin.fontofweb.com/9952?format=jpg)](https://design.withfudge.com/share/pin-9952)

[Cream hero with oversized enterprise headline and floating gradient forms](https://design.withfudge.com/share/pin-9952)

[![Dark story panel with stacked photos and left-aligned narrative copy](https://pin.fontofweb.com/9953?format=jpg)](https://design.withfudge.com/share/pin-9953)

[Dark story panel with stacked photos and left-aligned narrative copy](https://design.withfudge.com/share/pin-9953)

[![Lavender contact section with a white form card and checklist copy](https://pin.fontofweb.com/9951?format=jpg)](https://design.withfudge.com/share/pin-9951)

[Lavender contact section with a white form card and checklist copy](https://design.withfudge.com/share/pin-9951)

[![Black footer with newsletter band and multi-column link grid](https://pin.fontofweb.com/9950?format=jpg)](https://design.withfudge.com/share/pin-9950)

[Black footer with newsletter band and multi-column link grid](https://design.withfudge.com/share/pin-9950)

[![Soft news grid with rounded article cards and image-led summaries](https://pin.fontofweb.com/9949?format=jpg)](https://design.withfudge.com/share/pin-9949)

[Soft news grid with rounded article cards and image-led summaries](https://design.withfudge.com/share/pin-9949)

[![Purple developer stage with a docs shell and feature callout](https://pin.fontofweb.com/9947?format=jpg)](https://design.withfudge.com/share/pin-9947)

[Purple developer stage with a docs shell and feature callout](https://design.withfudge.com/share/pin-9947)

## Overview

Cohere’s page design is enterprise AI with a quiet face and a strong core. The default field is white or soft ivory, the text is near-black, and the main action color is a single coral orange that stays consistent across the marketing site. That restraint gives the page room to shift mood when needed: a cream hero with floating gradient forms, a dark story panel with stacked photos, a lavender contact form, a purple developer stage, and a black footer. The result feels controlled rather than decorative.

The hierarchy is built from scale, spacing, and surface changes more than from heavy borders or dense chrome. The largest headlines are very large and regular-weight. Supporting copy stays compact and readable. Cards, form fields, and feature blocks use rounded corners in the low-to-mid 20px range, so the page feels soft without turning playful. The system is best read as a sober product brand that allows a few saturated visual moments to carry emotion.

## Colors

| token | value | role |
|---|---|---|
| `action` | `#FF7759` | Primary CTAs, logo accents, and the most important interactive emphasis |
| `ink` | `#212121` | Main text on white and light surfaces |
| `ink-strong` | `#000000` | Deep text and the darkest stage backgrounds |
| `ink-muted` | `#525260` | Supporting copy, secondary labels, and quiet metadata |
| `ink-soft` | `#93939F` | Legal text, helper copy, and low-priority labels |
| `canvas` | `#FFFFFF` | Page canvas, white cards, and form backgrounds |
| `canvas-soft` | `#FAFAFA` | Soft card field for lighter panels and article blocks |
| `surface-cream` | `#F0EEE9` | Warm product cards and soft content containers |
| `surface-lavender` | `#E5EBFF` | Contact and planning surfaces with a cool editorial tone |
| `surface-night` | `#17171C` | Dark storytelling panels with white text |
| `surface-deep` | `#000000` | Footer base and deepest page band |
| `border` | `#E5E7EB` | Hairline borders around cards and form fields |
| `border-strong` | `#BDBDBD` | Stronger rules for inputs and light dividers |
| `accent-blue` | `#4C6EE6` | The cooler end of the gradient system and a secondary visual accent |
| `accent-indigo` | `#7670C5` | Transition color inside the purple-blue stage work |
| `accent-plum` | `#9B60AA` | Rich mid-tone in the gradient forms and docs imagery |
| `accent-lilac` | `#D18EE2` | Soft highlight color in gradient forms and staging art |

The palette works in three modes. The marketing field stays almost monochrome: white canvas, near-black type, thin borders, and the coral action color. Product and story sections introduce warmer cream or cooler lavender fields so the page can separate content without adding more structural lines. The richest color happens in the visual art: the floating forms use coral, plum, lilac, and blue together, while the docs stage uses indigo-to-blue gradients. Dark bands switch the contrast rather than the accent system; white text and muted gray supporting copy carry the load there. Coral remains the only color that behaves like a persistent call to action.

## Typography

Cohere uses three visible text families: **Cohere** for the large display hierarchy, **By Christian Mengelt Team 77** for almost everything else, and **Applesystem** for tiny fallback-style text. **Cohere Mono** appears in compact code-like and metadata moments. No licensing credit is supplied for these families in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Cohere | 6rem | 400 | 1 | -0.02em | Oversized hero and very large landing statements |
| `section-display` | Cohere | 4.5rem | 400 | 1 | -0.02em | Major page claims and about-page headings |
| `feature-display` | Cohere | 3.75rem | 400 | 1 | -0.02em | Strong feature titles and story chapter headings |
| `card-title` | By Christian Mengelt Team 77 | 2rem | 400 | 1.2 | -0.01em | Section cards, article cards, and mid-page callouts |
| `lead` | By Christian Mengelt Team 77 | 1.125rem | 400 | 1.4 | 0em | Supporting paragraphs beside large displays |
| `body` | By Christian Mengelt Team 77 | 1rem | 400 | 1.5 | 0em | Paragraphs, lists, and general explanation |
| `navigation` | By Christian Mengelt Team 77 | 1rem | 400 | 1.5 | 0em | Top navigation and compact interactive labels |
| `label` | By Christian Mengelt Team 77 | 0.75rem | 400 | 1.4 | 0.08em | Eyebrows, dates, and section markers |
| `mono` | Cohere Mono | 0.875rem | 400 | 1.4 | 0.02em | Tiny technical text, code snippets, and status-like strings |
| `system-note` | Applesystem | 0.875rem | 400 | 1.0 | 0em | Tiny fallback text and utility notes |

The hierarchy is size-led, not weight-led. The biggest headings stay regular, which makes the page feel composed instead of loud. Body text sits at 1rem with a 1.5 line height, giving the long explanatory sections enough air without drifting into softness. Section labels use small caps-like spacing and a tighter rhythm so they read as markers rather than headlines. Mono is reserved for compact technical information; it should not spill into normal copy. Applesystem sits at the edge of the system and should remain a minor utility voice, not a display face.

## Layout

The site is built as a sequence of wide desktop chapters. Each chapter gets strong top and bottom breathing room, and the page uses surface changes to signal transitions. The home hero leaves a large empty field around the claim and uses floating gradient shapes to occupy the open space on the right. The about section then shifts to a centered statement above a large story card, which gives the page a more editorial rhythm. That movement from empty field to dense card is one of the core layout behaviors.

The story card itself is a useful structural pattern: a dark full-width panel with copy aligned to the left and a stack of overlapping photos pushed to the right edge. The card does not depend on heavy framing; the surface color, corner radius, and photograph stack do the separation work. The contact page uses a different balance: a left column of explanation and checklist items, plus a large white form panel on a lavender field. That arrangement makes the form feel substantial without overfilling the page.

The news area introduces a three-column card grid. Each card starts with a large image, then metadata, then a headline, then a low-friction “read more” action. The cards are rounded and softly tinted, so the image remains the dominant element. The developer/resources stage changes again: a saturated purple-blue field sits beside a documentation shell, which creates a strong contrast between atmosphere and utility. The footer finishes the page with a dark band, a newsletter area, multiple link columns, and a quiet utility row. Across these sections, side padding stays generous and vertical spacing stays larger than what a compact SaaS page would normally use.

## Visual language

The visual language is calm, precise, and slightly cinematic. Photography is used in three ways: portrait and team imagery for the company story, product-in-context imagery inside cards, and wide atmospheric scenes that make the page feel larger than a simple feature list. The most distinctive decorative element is the floating abstract form system: rounded, soft-edged blobs with coral, lilac, indigo, and blue gradients, often rendered with a grainy finish. Those forms are not random ornament; they give the page its own visual signature and keep the white canvas from feeling clinical.

Shape is intentionally soft. Cards and forms use rounded corners in the low-20px range, while pills and major action buttons are fully rounded. Borders are thin and quiet. Shadows are rare, which means depth comes from color transitions, overlaps, and the contrast between surfaces rather than from drop shadows. On the darkest sections, the page stays legible by keeping text white and avoiding extra decoration. On the lightest sections, the page stays structured by using spacing and border lines, not by filling every gap with a box.

Cohere’s most recognizable move is the switch between modes: white page, cream card, lavender form, dark narrative panel, purple docs stage, black footer. The system does not try to unify every section with one shared background color. Instead, it lets each chapter have a different surface while keeping the same typographic voice and the same coral action color.

## Components

### Header

- **Anatomy:** Small logo at the left, centered navigation links, sign-in text, and a dark rounded primary action at the right.
- **Surface:** Usually white and transparent against the hero; it stays visually light even when it sits over content.
- **Typography:** `navigation` for the links and utility text.
- **Shape:** The primary action is a full pill. Links stay flat and understated.
- **Composition:** The header is wide but quiet. It should frame the page rather than compete with the hero claim.
- **Visible states:** The contact action reads as the most important control through fill color, contrast, and rounded shape.

### Hero

- **Anatomy:** Large statement, short supporting sentence, and a floating abstract form cluster.
- **Surface:** White or near-white canvas with no heavy framing.
- **Typography:** `hero-display` for the main claim, `lead` or `body` for the supporting line.
- **Spacing:** Large top breathing room and a wide negative area around the form artwork.
- **Composition:** The claim sits high and centered; the visual forms occupy the open side of the frame.
- **Visible states:** The hero relies on stillness. There is no need for extra chrome, shadows, or stacked UI.

### Story panel

- **Anatomy:** Small year marker, chapter title, short paragraph, and a stacked photo cluster on a dark field.
- **Surface:** `surface-night` with white text and muted supporting copy.
- **Typography:** `label` for the year, `card-title` for the chapter heading, `body` for the paragraph.
- **Shape:** Rounded outer corners with a calm internal crop around the photo stack.
- **Composition:** Text anchors the left side; imagery pushes toward the right edge and slightly overlaps.
- **Visible states:** The card feels dense and cinematic, not boxed or dashboard-like.

### Contact form card

- **Anatomy:** Left-side explanation and checklist, right-side white form panel with stacked inputs and a submit button.
- **Surface:** Lavender field outside the panel, white inside the form.
- **Typography:** `card-title` for the headline, `body` for the list, `navigation` for field text, `label` for helper lines.
- **Shape:** The form panel uses the largest soft radius in the system after the full pill button.
- **Spacing:** Inputs are separated by consistent vertical gaps and generous internal padding.
- **Visible states:** The field set remains calm and even; the structure comes from spacing, not from aggressive outlines.

### News cards

- **Anatomy:** Large thumbnail, small metadata line, short headline, and a simple “read more” action.
- **Surface:** Soft cream or off-white cards with very light borders or seams.
- **Typography:** `label` for metadata, `card-title` for the headline, `body` for the action and support text.
- **Shape:** Rounded card edges; the image crop follows the same soft language.
- **Composition:** The image leads. Text follows in a narrow column beneath it.
- **Visible states:** The cards read as editorial tiles, not as product dashboard cards.

### Docs stage

- **Anatomy:** Saturated gradient background and a white documentation shell with tabs, side navigation, and code content.
- **Surface:** Indigo-to-blue gradient under a white interface frame.
- **Typography:** `card-title` for the document title, `body` for the body copy, `mono` for code and technical fragments.
- **Shape:** The content shell is crisp and lightly rounded; the backdrop remains soft and atmospheric.
- **Composition:** The shell sits to one side, leaving the gradient field visible as a major part of the layout.
- **Visible states:** The panel behaves like a product showcase and a documentation surface at the same time.

### Footer

- **Anatomy:** Newsletter band, multi-column link grid, legal links, and small utility controls.
- **Surface:** `surface-deep` or very dark near-black.
- **Typography:** `navigation` for links, `body` for newsletter text, `label` for fine print.
- **Shape:** Mostly flat; the hierarchy comes from spacing and column structure.
- **Composition:** The grid is dense but still breathable because the column spacing stays generous.
- **Visible states:** The footer lowers contrast in the supporting text while keeping the main links readable.

## Responsive behavior

On narrower widths, the design should keep the same order of emphasis: claim first, visual second, supporting content third. The hero can collapse so the abstract forms move below the heading rather than crowding it. The story panel should stack the text and the photo cluster instead of squeezing them side by side. The contact section should turn into a single-column layout with the form below the explanatory copy. The news cards should drop to one or two columns depending on available width, while keeping the image at the top of each card. The docs stage can allow the white shell to become the main width anchor while the gradient field stays visible around it.

The key rule is to preserve breathing room. When width gets tighter, the design should reduce column count before it reduces top and bottom padding too aggressively. Small text should remain at comfortable line lengths, and the pill button should keep its shape even when the surrounding layout stacks.

## Practical implementation guidance

### Preserve

- Keep the coral action color as the only persistent CTA color.
- Keep the display hierarchy regular-weight and large.
- Keep the page quiet at the top and let each section switch mood with surface color.
- Keep cards and panels softly rounded rather than square.
- Keep shadows minimal; the brand gains depth from color and spacing, not from elevation tricks.

### Avoid

- Avoid introducing extra accent colors for each section.
- Avoid turning every card into a bordered container with equal visual weight.
- Avoid mixing the display family into body text or navigation.
- Avoid compressing the page into dense marketing blocks; the wide rhythm is part of the identity.
- Avoid decorative gradients on ordinary cards; save the richer color work for hero art, docs, and deep story bands.

### Recommended build order

1. Set the type scale and the white / near-black base colors.
2. Build the header and primary button.
3. Build the hero with the floating abstract forms.
4. Build the dark story panel and the soft card system.
5. Add the contact form section and the news card grid.
6. Add the docs stage and the footer.
7. Tune responsive stacking so the page keeps its chapter rhythm.

### Accessibility

- Maintain clear contrast for white text on dark stages and dark text on light cards.
- Give every image and form section descriptive alternative text or labels.
- Keep focus states visible on links, fields, and buttons across both light and dark surfaces.
- Keep form labels explicit; do not rely on placeholder text as the only cue.
- Preserve readable line length in the largest headlines when the layout narrows.

## Scope note

This guide covers the desktop home, about, contact-sales, news, docs, and footer sections represented in the supplied packet. It does not define exact mobile stacks, motion, hover or disabled states, or unseen subpages; those behaviors should be set separately if needed.
