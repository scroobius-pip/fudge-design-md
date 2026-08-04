# How git.law is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/git.law-design)

Last updated: 2026-08-04

## Captured pages

[![Split sign-in layout with lilac hero panel and email form stack](https://pin.fontofweb.com/7688?format=jpg)](https://design.withfudge.com/share/pin-7688)

[Split sign-in layout with lilac hero panel and email form stack](https://design.withfudge.com/share/pin-7688)

[![Centered terms page with lavender field and white legal sheet](https://pin.fontofweb.com/7687?format=jpg)](https://design.withfudge.com/share/pin-7687)

[Centered terms page with lavender field and white legal sheet](https://design.withfudge.com/share/pin-7687)

[![Mint call-to-action card floating above the purple footer columns](https://pin.fontofweb.com/7686?format=jpg)](https://design.withfudge.com/share/pin-7686)

[Mint call-to-action card floating above the purple footer columns](https://design.withfudge.com/share/pin-7686)

[![Tall eSign hero with yellow-highlighted headline and workflow art](https://pin.fontofweb.com/7685?format=jpg)](https://design.withfudge.com/share/pin-7685)

[Tall eSign hero with yellow-highlighted headline and workflow art](https://design.withfudge.com/share/pin-7685)

[![Purple feature panel with split cards and highlighted signup copy](https://pin.fontofweb.com/7684?format=jpg)](https://design.withfudge.com/share/pin-7684)

[Purple feature panel with split cards and highlighted signup copy](https://design.withfudge.com/share/pin-7684)

## Overview

GitLaw presents legal work as a bright, compact software system rather than a sober document portal. The pages lean on one dominant lavender field, crisp white paper surfaces, and a serif headline family that gives the product a more editorial tone than a typical SaaS sign-in or policy page. The result feels direct and polished: large type, short supporting lines, and clear blocks of action.

The visual system is built around contrast between broad color planes. A saturated purple stage carries the hero messaging and the footer. White and pale paper surfaces hold forms and legal text. Yellow marker-like highlights pull attention to a few key phrases, while mint appears only in the most promotional call-to-action moments. Black is reserved for dense legal copy and the strongest body text. That balance keeps the pages legible even when the layout becomes text-heavy.

The system is not decorative in a soft, organic way. It is geometric, flat, and intentionally spare. Separation comes from panel color, radius, and spacing, not from shadow stacks or complex framing. The only image-like treatment is the stylized workflow art and the spherical glow in the hero, which behave like a product illustration inside a stage rather than a photograph.

## Colors

GitLaw uses a narrow palette with a strong hierarchy: lavender as the default field, white for paper, black for text, purple for action, yellow for emphasis, and mint for the most optimistic promotion card. The same colors repeat across sign-in, legal content, hero sections, and the footer, so the system feels unified even as the page changes from a form to a policy document to a marketing layout.

| token | hex | use |
|---|---|---|
| `canvas` | `#F7F6FF` | Main page background on the lighter screens |
| `paper` | `#FFFFFF` | Forms, legal sheets, inset cards, and button surfaces |
| `paper-tint` | `#F9F1F1` | Soft inner panel color for subtle depth behind white content |
| `ink` | `#000000` | The strongest legal text and the darkest UI copy |
| `muted-ink` | `#5B675D` | Secondary helper text, long-form notes, and quiet labels |
| `border` | `#978AE6` | Thin form borders, dividers, and subtle outlines |
| `action` | `#5E49D6` | Primary buttons, active controls, and dark footer accents |
| `action-strong` | `#6F5EEC` | Stronger purple fill for prominent panels and button emphasis |
| `hero-panel` | `#867EFF` | Large lavender stage behind the hero, sign-in split, and terms header |
| `accent-highlight` | `#FEF37D` | Marker-like emphasis behind selected headline words |
| `accent-highlight-strong` | `#FFF268` | Brighter yellow used where the highlight needs more punch |
| `accent-mint` | `#A6F48F` | Promotional CTA card and small optimism accents |
| `surface-dark` | `#1B1B1F` | Deep footer and other dark text containers |

The relationship between modes is simple. Light mode is the pale canvas plus white paper. Dark mode is the near-black footer and dense text areas. The image-led equivalent is the big lavender stage with the illustrated hero and spherical glow; it functions like a visual anchor without switching to photography. Accent mode is deliberately rare: yellow highlights mark a short phrase, and mint appears as a temporary burst of energy in the CTA block. Those accents should sit on top of the purple system, not replace it.

## Typography

The typography system pairs a display serif with a compact sans family. `Gt Super Ds` handles the large statements and page-level declarations. `Dm Sans 9 Pt` carries the body copy, form labels, and interface text. `Dm Sans 18 Pt` appears as a lighter helper cut for small links and utility text. `Dm Sans` and `Dm Sans 18 Pt` are credited to Colophon Foundry / Jonny Pinhorn. `Gt Super` and `Gt Super Ds` are credited to Grilli Type / Noel Leu. `Dm Sans 9 Pt` has no credit entry in the packet. Licensing for the named font families should be checked before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Gt Super Ds | 3.125rem | 400 | 1.1 | 0em | Large hero line on the sign-in page |
| `page-title` | Gt Super Ds | 2.75rem | 400 | 1.1 | 0em | Centered page titles such as the terms page heading |
| `section-display` | Gt Super Ds | 4.25rem | 400 | 1 | 0em | Major marketing statements in the eSign page |
| `card-title` | Gt Super Ds | 2rem | 400 | 1.1 | 0em | Strong section and card headings |
| `body` | Dm Sans 9 Pt | 1rem | 400 | 1.5 | 0em | Paragraph copy, form text, and legal body text |
| `body-strong` | Dm Sans 9 Pt | 1.125rem | 700 | 1.4 | 0em | Bold legal emphasis and stronger inline statements |
| `label` | Dm Sans 9 Pt | 0.875rem | 500 | 1.4 | 0em | Form labels, helper lines, and compact navigation |
| `tiny-copy` | Dm Sans 9 Pt | 0.8rem | 400 | 1.5 | 0em | Footnotes, disclaimers, and the smallest explanatory text |
| `helper-link` | Dm Sans 18 Pt | 1rem | 300 | 1.4 | 0em | Light utility links such as account help and secondary actions |
| `button` | Dm Sans 9 Pt | 0.875rem | 600 | 1.4 | 0em | Button labels and high-contrast call-to-action text |

The hierarchy depends on family, scale, and line height rather than on many weight changes. The serif heads stay calm and editorial, with generous sizing but no exaggerated tracking. Dm Sans is compact, clear, and stable at 14 to 16 pixels for interface use, with small helper text dropping to 12.8 pixels where the page needs a quieter note. Buttons stay small and firm so the colored fills carry the emphasis instead of the letterforms.

## Layout

The sign-in screen uses a split composition. A large lavender panel occupies the left side with the logo, headline, short prompt, and a minimal decorative glow. The form sits to the right on a pale field. That arrangement makes the brand statement feel like the main stage, while the input flow remains simple and utilitarian. The form column is narrow enough to keep each field readable and vertically ordered without crowding.

The terms page keeps the same purple field but changes the center of gravity. A compact top bar anchors the page, a centered title sits above, and the white legal sheet takes over the middle of the screen. That sheet is wide, rounded, and full of dense copy. It uses a large page margin so the document feels like a framed object on a field rather than a long block of text dumped into the viewport.

The eSign marketing pages use a longer story arc. A broad hero panel uses the same lavender family, but the page quickly moves into alternating split sections: dark purple on one side, pale paper or lilac on the other, with a smaller inset card layered inside. The layout relies on repetition and alternation. Each section gets one dominant message, one supporting cluster, and one obvious action. The page then ends in a footer that stretches across the full width and arranges navigation into neat columns.

Spacing is generous and regular. The most visible values are the large vertical bands around the hero and the wide outer gutters on the legal and marketing pages. Controls stay tightly padded, while major panels keep a larger internal cushion. This keeps the system from feeling cramped even when it carries a lot of legal text.

## Visual language

GitLaw’s visual language is based on flat color blocks, clean edges, and a few deliberate moments of emphasis. The system avoids ornamental shadows and avoids heavy texture. Instead, it uses a few visible devices again and again: highlight bars, bordered inputs, rounded white cards, and purple fields that stretch edge to edge.

The yellow highlight treatment is the sharpest visual gesture. It sits directly behind a short phrase in the serif headline and works like a physical marker stroke. It should remain narrow and sentence-specific; when it widens too far, it stops feeling like emphasis and starts feeling like decoration. The mint card uses a similar strategy, but for a different mood. It signals a promotional moment, not a default UI surface.

The legal sheet creates contrast by changing not only color but also density. Black serif headings, black body copy, and bold inline phrases make the document feel serious and dense without needing a separate rule system. The section breaks are created by white space, paragraph rhythm, and typographic contrast. In other words, the page hierarchy comes from content structure as much as from color.

The hero illustration adds a more playful line to an otherwise severe category. It is still restrained: simple shapes, a single glow, and a clean panel. That keeps the system from becoming harsh. The page can speak about contracts and signatures without looking clinical.

## Components

### Split authentication shell

**Anatomy:** A large colored stage on one side and a narrow form column on the other.  
**Surface:** Use `hero-panel` for the stage and `canvas` or `paper` for the form side.  
**Typography:** The left message uses `hero-display`; form labels and helper text use `label` and `body`.  
**Shape:** Outer panel corners are soft and broad, closer to `panel` than `control`.  
**Composition:** Keep the stage visually dominant. The form should feel like a practical counterpoint, not another hero.

### Sign-in form stack

**Anatomy:** A heading, a bordered sign-in button, text inputs, a remember row, a primary submit button, and small account links.  
**Surface:** Inputs are white with pale borders; the primary button is solid purple; the Google button is white with a thin border.  
**Typography:** Labels and buttons stay in Dm Sans; helper links can use the lighter helper cut.  
**Hierarchy:** The primary button carries the strongest fill. Secondary links stay quiet and compact.  
**Visible states:** Keep borders crisp and do not replace the clear rectangular structure with pill shapes.

### Legal document sheet

**Anatomy:** Centered page title, white rounded paper sheet, bold legal headings, dense paragraphs, and strong inline emphasis.  
**Surface:** White paper on a purple field.  
**Typography:** Serif headings carry the document weight; Dm Sans body text keeps the text readable at document length.  
**Shape:** The sheet has broad rounding and generous inner padding.  
**Composition:** Let the document breathe. The page should feel framed, not boxed in.

### Promotional hero panel

**Anatomy:** Large serif headline, short supporting line, one call-to-action button, and a simple illustration or product figure.  
**Surface:** Purple or lilac stage with a high-contrast button.  
**Typography:** Use `section-display` or `card-title` for the main message, then a short body line.  
**Emphasis:** The yellow highlight appears only on a few words inside the headline.  
**Composition:** Keep the text on one side and the illustration on the other. The panel should read quickly from a distance.

### Split feature cards

**Anatomy:** Alternating dark and light blocks, a central headline, a short checklist or supporting paragraph, and an inset white mini-card.  
**Surface:** Purple, pale paper, and occasional mint.  
**Typography:** The headline stays serif; the list and mini-card text stay in Dm Sans.  
**Shape:** Large rounded outer panels with smaller, squared internal surfaces.  
**Hierarchy:** One section, one idea, one action. Do not fill the panel with extra widgets.

### Footer navigation

**Anatomy:** Full-width purple footer, logo block, and multiple link columns.  
**Surface:** `surface-dark` or a deep purple field with white text.  
**Typography:** Use Dm Sans for column headings and links.  
**Composition:** Keep the columns evenly spaced and the legal text small enough to recede.  
**Visible states:** Links should stay simple and direct; the footer is about navigation, not persuasion.

## Responsive behavior

On narrower screens, the split layouts should stack in the same narrative order: brand message first, action next, and supporting form or document content after that. The purple stage can shrink before the white sheet does, but the serif headline must remain legible and not collapse into too many lines. The legal sheet should keep readable measure and comfortable line spacing, even when it becomes full width. The footer should move from multi-column to single-column order without changing its visual calm.

The highlight bars and buttons need to stay visible when the layout compresses. If the yellow emphasis becomes too wide or the mint card loses room, both lose their role. The system should preserve the high-contrast button, the clear input rows, and the dense paper content before it preserves ornamental spacing.

## Practical implementation guidance

### Preserve

- Keep the serif family for the biggest claims and use Dm Sans for everything functional.
- Keep purple as the primary structural color, not just the button color.
- Keep the yellow highlight tight and phrase-specific.
- Keep the pages flat and clean; the structure comes from color fields and spacing.
- Keep the form and legal content inside white or pale paper surfaces so the body text stays readable.

### Avoid

- Avoid introducing extra type families.
- Avoid replacing the rectangular buttons and fields with pill-heavy controls.
- Avoid gradients, strong shadows, or glossy effects in the core UI.
- Avoid scattering mint throughout the page; it should remain rare and promotional.
- Avoid over-rounding the document sheet or the control surfaces.

### Recommended build order

1. Set the color tokens and semantic type scale.
2. Build the shared button, input, and border treatment.
3. Build the split sign-in shell.
4. Build the legal sheet and top bar.
5. Build the hero panels and highlighted headline treatment.
6. Add the split feature cards and footer columns.
7. Tune spacing so the page reads cleanly at each major section break.

### Accessibility

- Keep contrast strong on body text, especially inside the legal sheet and footer.
- Make the yellow highlight additive, not exclusive; the emphasized words must still read clearly without the marker color.
- Keep visible focus states on buttons, links, and inputs.
- Preserve enough vertical space in the form so touch targets remain easy to use.
- Keep line lengths manageable in the legal sheet and the long marketing statements.

## Scope note

This guide covers the sign-in screen, terms page, eSign marketing sections, and footer shown in the supplied pages. It does not include mobile rearrangement, motion, hover behavior, validation states, or alternate page families outside the layouts shown here.
