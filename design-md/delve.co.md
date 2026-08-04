# How delve.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/delve.co-design)

Last updated: 2026-08-04

## Captured pages

[![Full-width gradient hero with oversized white headline and right-side proof tiles](https://pin.fontofweb.com/8218?format=jpg)](https://design.withfudge.com/share/pin-8218)

[Full-width gradient hero with oversized white headline and right-side proof tiles](https://design.withfudge.com/share/pin-8218)

[![Dense black footer grid with address rail, certification seals, and promo tile](https://pin.fontofweb.com/8219?format=jpg)](https://design.withfudge.com/share/pin-8219)

[Dense black footer grid with address rail, certification seals, and promo tile](https://design.withfudge.com/share/pin-8219)

## Overview

Delve’s home page treats compliance as a launch surface, not a soft brochure. The top section is a broad gradient stage with a cool teal side, a dark core, and a bright orange edge. Large white headline text sits on top of that stage, with a short supporting line and one strong action below it. The page uses this contrast to create urgency and confidence immediately.

The structure stays disciplined after the hero. The footer becomes a rigid information matrix with a gray brand rail, black content cells, thin white dividers, small certification seals, and a compact legal strip. The system works because it limits the palette and keeps the geometry blunt. White, black, near-black, muted gray, and orange are enough to carry the whole page.

What to preserve:

- A dark-first system with one orange action color.
- Oversized Overused Grotesk headlines.
- Inter Tight for navigation, support copy, and footer text.
- A hero that reads left-weighted and expansive.
- A footer that behaves like a directory grid.
- Flat surfaces and hairline dividers instead of decorative depth.

## Colors

Delve keeps the usable palette intentionally small. Pure black and near-black establish the page base, white carries the headline and inverse text, muted gray softens secondary copy, and orange marks the primary action. The gradient stage supplies the chromatic drama that other sites might get from photography, but the interface itself stays restrained and monochrome.

| token | hex | use |
|---|---|---|
| action | `#FB4A02` | Primary demo button, warm accent on the hero stage, and the only strong callout color |
| ink | `#000000` | Deepest page base, footer canvas, and the strongest text contrast on light cells |
| surface | `#0C0C0C` | Near-black header and footer modules, dark grid cells, and the shell around content blocks |
| muted-ink | `#DFE0E5` | Smaller supporting copy, legal text, and quiet footer notes |
| canvas | `#FFFFFF` | Headline text, logo text, inverse buttons, and the brightest contrast layer |

The tone relationship is straightforward. Dark surfaces do the structural work. Light surfaces appear sparingly and functionally. Orange is reserved for the one action that should pull attention first. The gradient field is expressive, but it does not become a reusable solid token; it behaves as a stage treatment.

## Typography

The page is built from two families: **Overused Grotesk** for display scale and **Inter Tight** for everything compact and readable. That split is the main voice of the site. The display family gives the page its force and size. Inter Tight keeps the utility copy, links, labels, and button text controlled and legible.

Inter Tight is credited to Rasmus Andersson and Rsms. Font licensing should be verified before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Overused Grotesk | 8.8rem | 700 | 1 | 0em | Main homepage headline on the hero stage |
| section-display | Overused Grotesk | 4rem | 700 | 1 | -0.01em | Strong module headings and footer lead-ins |
| label | Inter Tight | 1rem | 600 | 1.5 | 0em | Footer section titles and small proof labels |
| body | Inter Tight | 1rem | 400 | 1.5 | 0em | Supporting sentences and standard explanatory copy |
| lead | Inter Tight | 1.125rem | 400 | 1.5 | 0em | Hero subcopy and other slightly larger intro text |
| button | Inter Tight | 1rem | 400 | 1.5 | 0em | Demo buttons and primary labels |
| navigation | Inter Tight | 1rem | 400 | 1.5 | 0em | Top navigation, login, and utility text |
| legal-copy | Inter Tight | 0.875rem | 400 | 1.5 | 0em | Footer legal strip and the smallest metadata |

The hierarchy depends on scale and weight more than on ornament. Display type stays large and steady. Body text remains plain enough to sit beside the headline without slipping into visual noise. Footer headings use semibold weight so the information grid can stay compact while still scanning cleanly.

## Layout

Delve uses two spatial regimes.

The hero is broad, open, and left-weighted. The headline occupies the left half of the stage and breaks into large stacked lines. A short support sentence sits underneath, then the orange action button. The right side of the stage carries compliance tiles and trust marks, which lets the page show both promise and credibility without crowding the copy. The top navigation stays thin and quiet, with the logo left, menu items centered, and login plus the demo button aligned to the right.

The footer is the opposite: a rigid matrix with heavy structure. A gray brand rail anchors the left side; to its right sit multiple black modules divided by 1px white lines. One row holds company links, company-size links, and frameworks. The next row holds the promo tile, blogs, and learning links. A legal strip runs across the bottom. The whole composition feels like a compressed index rather than a loose set of cards.

Spacing is disciplined and repetitive. The main content uses broad side insets around 85.25px to 86px. The hero and interior modules lean on large vertical bands around 112px and 128px. The footer adds 48px blocks and tighter 24px interior gaps. That mix keeps the page airy at the top and information-dense at the bottom without changing the underlying language.

## Visual language

The visual language is severe in a controlled way. The page avoids soft shadow, rounded cards, and decorative texture. Instead it relies on three devices:

1. A cinematic gradient stage that shifts from teal to black to orange.
2. A rigid black grid that turns the footer into a structured directory.
3. Large white type that stays legible against both the bright stage and the dark shell.

The gradient field is not smooth. Vertical translucent bands break it into panes, so the hero feels engineered rather than airbrushed. That banding also lets the orange side flare without flattening the rest of the page. The small trust tiles on the right sit inside faint square cells, which gives the page a technical edge while still leaving the headline dominant.

The footer reverses that energy. It uses near-black modules, hard dividers, and tight text columns. The small certification seals stay circular and quiet. Social icons stay tiny. The promo tile is the one place where the color field reappears, so the bottom of the page keeps a visual link back to the hero stage.

## Components

### Header

- **Anatomy:** Logo mark at the left, three centered navigation items, a login link, and a right-aligned demo button.
- **Surface:** White text over the hero stage; near-black when the header sits above the footer area.
- **Typography:** Inter Tight at 1rem for the nav and utility text.
- **Shape:** Rectangular controls with nearly square corners.
- **Spacing:** Tight horizontal spacing inside each cluster, with generous breathing room across the full width.
- **Visible states:** Default and contrast-inverted placement only. The header should not turn into a separate branded panel.

### Hero stage

- **Anatomy:** Oversized headline, short supporting sentence, orange CTA, trust line, and small compliance tiles.
- **Surface:** Full-bleed gradient field with teal on the left, a dark center, and orange energy on the right.
- **Typography:** Overused Grotesk for the headline; Inter Tight for the subcopy and supporting details.
- **Composition:** Left-weighted. The headline dominates the left half, while the trust tiles sit lower on the right.
- **Hierarchy:** The orange action is the only aggressive signal; everything else stays secondary.
- **Visible states:** Static billboard treatment; the headline and tiles should keep their contrast against the gradient at all times.

### Primary action

- **Anatomy:** Solid rectangle with centered text and a small chevron or arrow treatment.
- **Surface:** Orange fill in the hero; white fill with dark text in the footer promo.
- **Typography:** Inter Tight, regular weight, compact size.
- **Shape:** Nearly square corners and compact padding.
- **Hierarchy:** It should feel decisive but never larger than the headline or more important than the stage itself.

### Compliance trust tiles

- **Anatomy:** Small square or rectangular cells with labels such as SOC 2, HIPAA, GDPR, ISO 27001, and PCI-DSS.
- **Surface:** Low-contrast transparent cells on the right side of the hero.
- **Typography:** Small Inter Tight labels; the icon and label stay subordinate to the headline.
- **Composition:** Clustered low and right so they reinforce credibility without stealing the first read.
- **Visible states:** Quiet, utility-like presentation. They should not become buttons or feature cards.

### Footer grid

- **Anatomy:** Left brand/address rail, company links, company size links, frameworks, promo tile, blogs, learn, and a legal strip.
- **Surface:** Pure black base with near-black modules and 1px white dividers.
- **Typography:** Semibold section headings at 1rem; smaller regular text for the lists and the legal line.
- **Spacing:** 48px outer padding, with dense internal spacing inside each module.
- **Composition:** The left rail spans two rows, the promo tile breaks the grid with color, and the lists occupy the remaining black cells.
- **Visible states:** Static directory content. The structure should read clearly even when scanned quickly.

### Certification seals and social icons

- **Anatomy:** Two circular seals in the footer rail and small social glyphs at the bottom right.
- **Surface:** Seals sit on the gray left rail; icons sit on the dark base.
- **Shape:** Circular seals with thin rings; icons stay compact and unobtrusive.
- **Hierarchy:** These elements confirm trust and contact options, but they remain visually smaller than the link columns.

## Responsive behavior

When the page narrows, the order should stay simple: headline, support copy, action, trust tiles, then the footer modules. The hero should keep its left-to-right color logic even if the copy stack changes. The footer should collapse by module group rather than flattening the whole grid into one list. If the trust tiles become too tight, they should move below the CTA instead of competing with the headline. The orange action should keep the same visual priority at every width.

## Practical implementation guidance

### Preserve

- Keep the orange action as the only persistent accent.
- Keep Overused Grotesk for the hero and Inter Tight for utility text.
- Keep the hero as a left-weighted gradient stage with trust tiles to the right.
- Keep the footer as a hard black matrix with hairline dividers.
- Keep the controls compact and almost square.

### Avoid

- Avoid soft shadows, pill buttons, or rounded cards.
- Avoid adding extra accent colors beyond the orange.
- Avoid replacing the footer grid with a generic stacked link list.
- Avoid shrinking the headline until it looks like body copy.
- Avoid turning the trust tiles into interactive chips unless the page truly needs them.

### Recommended build order

1. Set the palette and the two font families.
2. Build the hero gradient stage and the oversized headline.
3. Add the top navigation and the orange demo button.
4. Place the trust tiles and support line.
5. Build the footer grid, promo tile, and legal strip.
6. Refine spacing and divider rules so the page keeps its rigid rhythm.

### Accessibility

- Keep the headline and subcopy readable against the exact gradient crop used in production.
- Give the trust tiles, social icons, and logo mark clear text alternatives.
- Make the orange button focus state unmistakable on both dark and light portions of the stage.
- Preserve a clear heading order in the footer so the directory remains scannable.
- Keep the muted gray footer text above contrast thresholds on the dark background.

## Scope note

This guide covers the public homepage hero, the shared top navigation treatment, and the dense footer grid for delve.co. It does not define mobile stacking, motion, hover behavior, form controls, product dashboards, or any page family beyond the homepage shell.
