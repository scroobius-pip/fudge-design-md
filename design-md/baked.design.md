# How baked.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/baked.design-design)

Last updated: 2026-08-08

## Captured pages

[![Blue mobile hero card with stacked CTA and pricing pills](https://pin.fontofweb.com/6495?format=jpg)](https://design.withfudge.com/share/pin-6495)

[Blue mobile hero card with stacked CTA and pricing pills](https://design.withfudge.com/share/pin-6495)

[![Wide split desktop hero with floating phones and form](https://pin.fontofweb.com/6319?format=jpg)](https://design.withfudge.com/share/pin-6319)

[Wide split desktop hero with floating phones and form](https://design.withfudge.com/share/pin-6319)

[![Centered contact form and quiet footer on white page](https://pin.fontofweb.com/5265?format=jpg)](https://design.withfudge.com/share/pin-5265)

[Centered contact form and quiet footer on white page](https://design.withfudge.com/share/pin-5265)

## Overview

Baked Design presents itself like a polished studio landing page rather than a traditional agency brochure. The visual system is simple on purpose: a white canvas, black and muted-black type, and a single vivid blue that carries the main action. The strongest feeling comes from contrast between a compact, phone-sized blue card and a much larger desktop scene where the work spreads out into floating devices, a left-aligned pitch column, and a centered contact form. The page does not rely on ornamental chrome. It uses spacing, scale, and a few rounded forms to make the offer feel direct and current.

The brand voice is founder-facing and conversion-first. The copy is short, the calls to action are clear, and the product work stays visible. Even when the layout opens up, the design keeps the pitch close to the action rather than burying it in a long scroll of explanation. That balance is what should survive in any rebuild: concise copy, a strong blue accent, a calm sans-serif stack, and a layout that lets the portfolio work do part of the selling.

## Colors

Baked Design uses a restrained interface palette. White does most of the structural work. Black and muted black carry hierarchy and reading comfort. Pure blue is the only persistent accent and should stay scarce so it remains special.

| token | value | role | use |
|---|---|---|---|
| `canvas` | `#FFFFFF` | Page field and light control surfaces | Main page background, white pills, and the form area |
| `ink` | `#000000` | Strong text and primary contrast | Headings, body copy on white, and high-contrast labels |
| `muted-ink` | `#404040` | Secondary reading tone | Supporting lines, pricing text, and quieter metadata |
| `action` | `#0000EE` | Brand accent and directional emphasis | Submit buttons, links, and the strongest interactive cue |

Blue is the only hue that should feel energetic. On the mobile card it holds the entire surface; on the desktop it is more selective and should be reserved for the main CTA or a similarly important prompt. White surfaces carry the layout, while black text keeps the page readable and grounded. Muted ink should be used for supporting text so the hierarchy does not flatten into one heavy tone. The result is spare but not sterile: the system feels like a studio pitch with a clear next step.

Verify licensing for these families before production use.

## Typography

The page reads as a single clean sans voice. Inter is the natural fit for most text, with System acceptable for small utility and legal copy. The type hierarchy depends more on size and weight than on switching families. Headings stay light and compact, body copy stays calm and open, and button text is slightly heavier without becoming loud. False and Instagram Sans are also named by the site and belong in the family set that should be checked before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---:|
| `hero-display` | Inter | 2.75rem | 400 | 1.05 | -0.03em | Large pitch lines and the main contact headline |
| `section-display` | Inter | 2.25rem | 400 | 1.1 | -0.02em | Secondary display copy and section leads |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Standard paragraph copy and short explanatory text |
| `body-medium` | Inter | 1rem | 500 | 1.5 | 0em | Buttons, important labels, and emphasized short copy |
| `label` | Inter | 0.875rem | 400 | 1.3 | 0em | Date lines, form labels, and quiet helper text |
| `legal-copy` | System | 0.875rem | 400 | 1.4 | 0em | Footer copyright and small compliance text |
| `site-reference-false` | False | 0.875rem | 400 | 1.4 | 0em | Listed family name for the quieter text set |
| `site-reference-instagram-sans` | Instagram Sans | 0.875rem | 400 | 1.4 | 0em | Listed family name for the quieter text set |

The system should keep line lengths short enough that the pitch never feels like a wall of prose. The mobile card shows why: the text stacks in compact blocks, and the CTA sits close to the pricing line and booking note. On desktop, the same voice expands without changing character. The headings remain plain and confident, not decorative, and the form label treatment stays modest so the content does not compete with the product imagery.

## Layout

The layout alternates between compression and expansion. The compact mobile view turns the whole experience into a single rounded blue card. Everything important sits inside that one card: logo, date, founder-facing pitch, prior-client list, CTA, pricing, and the availability note. That is the sharpest expression of the brand because it condenses the sale into one easy-to-scan unit.

Desktop layout behaves differently. A narrow left column holds the pitch, a strong CTA, a pricing chip, and a dark proof card. To the right, the product stage opens into a much larger visual field with oversized device mockups and soft, almost gallery-like spacing. The work is the visual anchor, while the left column supplies the text needed to understand it. This split keeps the page from feeling either too editorial or too salesy.

The form section is centered and symmetrical. It uses a white card inside a large white field, with stacked inputs and a full-width blue submit button. That placement gives the contact moment more gravity than a small footer form would. The footer itself is quiet and low contrast, acting as a closing line rather than a dense navigation zone.

Spacing is generous but not vague. The page relies on a few repeated intervals: a 1.5rem gutter, a 1.875rem card inset, and a 3.125rem section rhythm. Those values are enough to keep the page airy without turning it into a loose prototype. The strongest spatial decision is the contrast between the tight card-based mobile composition and the wide, open desktop stage.

## Visual language

The visual language is built from rounded rectangles, soft pills, and large product imagery. The geometry is friendly, but the page avoids generic softness by pairing that rounded shape language with strong type and a single vivid blue. There is no need for extra ornament because the product mockups already supply motion-like energy through scale, angle, and layering.

The mobile card has the clearest personality: a blue field, white text, a white pill CTA, a lighter pricing pill, and a small line of availability beneath. That stack feels intentionally compressed and readable. On desktop, the product stage becomes more theatrical. Phones lean and overlap, and the white field around them creates the sense of a studio presentation. The left column and the large right stage feel related but not identical, which gives the page a natural rhythm.

Depth is handled carefully. The interface itself stays mostly flat, while the product imagery supplies the strongest sense of shadow and dimension. That keeps the branding from becoming heavy. Dark proof cards, where present, should remain compact and text-forward so they do not compete with the device art. Rounded corners should stay consistent across cards and pills so the page feels designed as one family instead of a set of disconnected blocks.

## Components

### Mobile hero card

- **Anatomy:** Wordmark, date line, short pitch, prior-client line, CTA pill, pricing pill, and booking note.
- **Surface:** Solid blue field with white text and bright white controls.
- **Typography:** Compact body text with a slightly stronger CTA label.
- **Shape:** Large rounded panel with a full-pill primary action.
- **Spacing:** The card depends on stacked vertical rhythm and a tight center column.
- **Visible state:** The whole card functions as the brand statement; no extra chrome is needed.

### Primary action

- **Anatomy:** One-line label in a full pill.
- **Surface:** Blue fill with white text.
- **Typography:** `body-medium` works well because it keeps the button readable without making it shout.
- **Shape:** Fully rounded.
- **Composition:** Use as the main direction cue on white pages and as the submit button in the form.

### Pricing chip

- **Anatomy:** Short pricing statement in a second pill beneath the main action.
- **Surface:** Light neutral surface with lower emphasis than the CTA.
- **Typography:** Smaller than the button label and quieter in color.
- **Shape:** Fully rounded, but visually lighter than the primary action.
- **Hierarchy:** It should feel like supporting information, not a competing button.

### Desktop pitch column

- **Anatomy:** Logo row, date, pitch copy, client list, CTA, pricing chip, and a dark proof card.
- **Surface:** White field with very little chrome.
- **Typography:** Short paragraphs, compact labels, and one clear interactive line.
- **Composition:** Keep the column narrow enough that the line breaks remain controlled.
- **Variants:** The proof card can stay dark to create contrast against the white canvas.

### Product stage

- **Anatomy:** Oversized phones or app imagery placed as the main visual anchor.
- **Surface:** White or near-white field that lets the product art breathe.
- **Typography:** Minimal; the stage should not add dense explanatory text.
- **Shape:** Large image crops with soft corners or clean edges, depending on the asset.
- **Spacing:** Leave enough negative space so the devices feel like a deliberate studio arrangement.
- **Hierarchy:** The product art should remain the most eye-catching element in the right-hand area.

### Contact form

- **Anatomy:** Small preface, large headline, stacked fields, and a full-width blue submit button.
- **Surface:** White card inside a white page.
- **Typography:** Section-display for the headline, labels above each field, and body text inside the controls.
- **Shape:** Rounded card with soft, shallow input wells.
- **Spacing:** Consistent gaps between label, field, and field group keep the form readable.
- **Visible states:** The form should feel calm and stable, with no need for loud border treatments.

### Footer and legal line

- **Anatomy:** Small copyright text and minimal closing information.
- **Typography:** `legal-copy` with a low-key tone.
- **Surface:** Same white canvas, but visually receded.
- **Composition:** Keep it unobtrusive so the page ends cleanly.

## Responsive behavior

The page should move from compression to expansion, not from one design family to another. On small screens, the blue card becomes the main product and everything else can disappear behind it. On wider screens, the left column and product stage should separate cleanly so the pitch and the work both remain readable. The contact form should stay centered rather than drifting into a narrow sidebar, because its symmetry is part of the brand.

Type should scale by role, not by random breakpoints. The pitch should stay compact, the section headline should gain presence on larger screens, and the legal text should remain small. The blue action color should continue to be the clearest interactive signal at every size. The page does not need elaborate motion or dense nested navigation to work across widths; it needs clear hierarchy, stable spacing, and a consistent card language.

## Practical implementation guidance

### Preserve

- Keep the page anchored by one blue action color and a white canvas.
- Preserve the compact founder-facing tone; short sentences work better than long explanations.
- Keep the rounded card and pill language consistent from the mobile card through the form.
- Let the product art carry the right side of the desktop layout.
- Keep the contact form visually central so the page closes on a direct action.

### Avoid

- Avoid introducing a second saturated accent color.
- Avoid heavy borders, deep shadows, or dashboard-style chrome.
- Avoid overcomplicating the hero with too many separate buttons or badges.
- Avoid long body copy that pushes the product and CTA too far apart.
- Avoid changing the mobile card into a different theme; it should feel like the same system in a tighter frame.

### Recommended build order

1. Set the type roles and the blue/white/black color balance.
2. Build the mobile blue card first so the compact hierarchy is clear.
3. Add the main CTA and pricing chip.
4. Build the desktop split hero with the left pitch column and the right product stage.
5. Add the dark proof card as a secondary contrast element.
6. Finish with the centered contact form and the quiet footer.
7. Check spacing consistency across the card, stage, and form before shipping.

### Accessibility

- Keep text contrast strong on white and blue surfaces.
- Make sure the CTA is large enough to tap comfortably on mobile.
- Keep form labels visible; do not rely on placeholder text alone.
- Give the pricing chip and the booking note enough contrast that they remain readable without blending into the background.
- Use a visible focus treatment on pills, links, and form controls even though it is not shown in the still views.
- Provide descriptive alt text for the product imagery so the page still communicates the work when the stage images are unavailable.

## Scope note

This guide covers the baked.design homepage card, desktop split hero, product stage, contact form, and the small footer line. It does not define mobile breakpoints, motion, hover treatment, loading states, or deeper product UI beyond the marketing page.
