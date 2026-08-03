# How ahrefs.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ahrefs.com-design)

Last updated: 2026-08-03

## Captured pages

[![Blue hero with orange primary CTA and blue secondary button](https://pin.fontofweb.com/7048?format=jpg)](https://design.withfudge.com/share/pin-7048)

[Blue hero with orange primary CTA and blue secondary button](https://design.withfudge.com/share/pin-7048)

[![White multi-column product menu with a highlighted first item](https://pin.fontofweb.com/7049?format=jpg)](https://design.withfudge.com/share/pin-7049)

[White multi-column product menu with a highlighted first item](https://design.withfudge.com/share/pin-7049)

[![Blue pricing board with three white plan columns and orange buttons](https://pin.fontofweb.com/7050?format=jpg)](https://design.withfudge.com/share/pin-7050)

[Blue pricing board with three white plan columns and orange buttons](https://design.withfudge.com/share/pin-7050)

[![Dark server corridor with white headline and gold metrics row](https://pin.fontofweb.com/7045?format=jpg)](https://design.withfudge.com/share/pin-7045)

[Dark server corridor with white headline and gold metrics row](https://design.withfudge.com/share/pin-7045)

[![White role list with expandable rows and right-side detail pane](https://pin.fontofweb.com/7044?format=jpg)](https://design.withfudge.com/share/pin-7044)

[White role list with expandable rows and right-side detail pane](https://design.withfudge.com/share/pin-7044)

[![Deep-black footer packed with dense link columns and selectors](https://pin.fontofweb.com/7043?format=jpg)](https://design.withfudge.com/share/pin-7043)

[Deep-black footer packed with dense link columns and selectors](https://design.withfudge.com/share/pin-7043)

## Overview

Ahrefs uses a two-mode brand rhythm. The commercial pages swing between a saturated blue field and stark white product surfaces, while the storytelling pages move into black and charcoal with orange actions as the constant signal. The result is direct and assertive, not decorative: a visitor gets a large claim, a clear action, and a dense block of product truth without extra framing.

The type system carries most of the brand weight. Ahrefs handles the large statements, prices, and section titles with a blunt, single-purpose confidence. Inter handles navigation, descriptions, list copy, and the denser explanatory text. That split keeps the page from feeling overdesigned. The interface stays legible because the hierarchy comes from scale, spacing, and color contrast rather than from many visual tricks.

Three things define the page most strongly:

- Electric blue as a campaign field for the home and pricing story.
- Orange as the only persistent action color.
- Heavy contrast between white information surfaces and black narrative surfaces.

The supplied views show a system that can shift from a bright sales page to a dark infrastructure story without changing its structure. The brand remains the same because the action color, the display face, and the compact card language stay stable across those modes.

## Colors

### Core roles

| token | value | role |
|---|---|---|
| `action` | `#FF8D00` | Primary buttons, signup chips, and the loudest purchase cue |
| `action-strong` | `#F75A03` | Stronger orange emphasis, small badges, and hot highlights |
| `accent-gold` | `#FFB528` | Checkmarks, stat numbers, and warm micro-accents |
| `brand-blue` | `#3A57FC` | Full-bleed hero fields, pricing atmosphere, and blue links in the white pages |
| `canvas` | `#FFFFFF` | Pricing cards, menu panels, and the white content field |
| `ink` | `#000000` | Main text on white and the strongest dark-side contrast |
| `ink-soft` | `#272727` | Secondary copy and body text that should stay firm but not compete |
| `border` | `#E5E5E5` | Card dividers, column rules, and quiet separators |
| `surface-muted` | `#F4F5F6` | Soft utility strips, table divisions, and low-noise background bands |
| `surface-dark` | `#1E1E1E` | Dark feature tiles and narrative blocks |
| `surface-deep` | `#111111` | Footer field and the deepest black surfaces |

The blue field and the dark surfaces are not interchangeable. Blue is promotional and expansive: it frames the plans page and the blue home hero as a confident announcement. Black is denser and more technical: it holds the server-hall imagery, the dark feature grid, and the footer directory. White surfaces do the opposite job. They slow the page down and make price tables, list sections, and menus feel precise. Orange ties the modes together; it stays warm and readable on blue, white, and black without needing a second action color.

### Color behavior

- Use `action` for the highest-priority CTAs.
- Use `brand-blue` as a field color, not a generic link tint.
- Use `accent-gold` only where the page already uses warm micro-signals such as checkmarks and numeric callouts.
- Keep dark surfaces close to `surface-dark` and `surface-deep`; the page works because the black family is disciplined, not because it has many grays.
- Keep border color quiet. The interface depends more on white space and hard column edges than on heavy framing.

## Typography

Ahrefs uses its own display face for the brand voice and Inter for utility and body work. Licensing should be confirmed separately.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Ahrefs | 5.75rem | 400 | 0.87 | -0.02em | The largest home and infrastructure headlines |
| `page-display` | Ahrefs | 4rem | 400 | 0.94 | -0.02em | Pricing title and other large section leads |
| `feature-display` | Ahrefs | 3.375rem | 400 | 0.96 | -0.02em | Large feature statements and dark card leads |
| `price-display` | Ahrefs | 2.75rem | 400 | 1 | 0em | Plan prices and large numeric emphasis |
| `section-title` | Ahrefs | 2rem | 400 | 1 | 0em | Column headers, role labels, and smaller section heads |
| `navigation` | Inter | 1.125rem | 400 | 1.3 | 0em | Top navigation, menu labels, and action-adjacent copy |
| `body` | Inter | 1.125rem | 400 | 1.61 | 0em | Plan descriptions, feature blurbs, and explanatory paragraphs |
| `fine-print` | Inter | 1rem | 400 | 1.5 | 0em | Footer links, supporting notes, and legal text |

The hierarchy is blunt and readable. Display copy often sits near solid-set with compact leading, which makes the page feel bold and slightly compressed. Inter opens up the body text so the lists and supporting copy can carry detail without looking dense. On the pricing page, the price numerals are large enough to dominate each column, but the plan names and descriptions stay restrained so the comparisons remain easy to scan.

The important distinction is not between many weights; it is between two families and a narrow scale range. Ahrefs gives the page its editorial presence. Inter supplies the practical texture that makes the navigation, descriptions, and long lists feel usable rather than theatrical.

## Layout

### Hero field

The home hero is a wide, centered composition with a large blue field and a top navigation bar pulled tight against the page edge. The headline sits high and left within the field, leaving enough empty area for the sentence to breathe. A short supporting paragraph sits below it, followed by two actions: one orange and one blue-filled. A large preview card sits below the copy and keeps the blue field grounded. The structure is simple, but the scale makes it feel important.

### Pricing matrix

The pricing page takes the same blue field and places a large white plan matrix beneath the title. Three equal columns divide the card. Vertical rules separate the tiers, and each column uses the same rhythm: plan name, short description, large monthly price, orange get-started button, then a long list of included limits and features. The matrix works because every tier follows the same shape. Differences come from text, not from a new card geometry.

### Product menu and white information panels

The white tool menu uses a column grid with narrow gutters and quiet dividing lines. Each column groups a category label above a tight stack of product names and one-line explanations. The selected item gets a stronger frame, but the structure stays light and orderly. This same white-panel logic also appears in the role-and-use-case section: the left side reads as a list, the right side opens into the selected details and a link. The design trusts alignment and spacing more than boxed cards.

### Dark storytelling blocks

The dark feature-grid mode and the server-hall hero use black and charcoal to create a more technical mood. The imagery is dense, but the text stays large and white, so the story remains legible. Rounded chips, circular metric treatments, and small icon badges sit inside the dark tiles without upsetting the strong block geometry. These sections are composed like a dashboard, yet they still feel like marketing pages because the headings stay oversized and the action color stays orange.

### Footer

The footer is a deep black directory. It uses dense vertical lists, small text, and many columns rather than one large visual. The hierarchy is low and practical. The content feels like a destination rather than a call to action. That shift is important: the page ends by lowering contrast and raising information density, which makes the footer feel complete rather than ornamental.

## Visual language

Ahrefs uses contrast as a structural tool. Blue announces the brand and the offer. White organizes comparison and navigation. Black carries the most technical story. Orange points at the action. Because those roles are consistent, the page can move between modes without losing clarity.

The language of shape is equally disciplined. Most elements are square or nearly square. The interface relies on hard edges, thin rules, and broad rectangular fields. The few rounded forms that do appear — small controls, help bubbles, and chip-like badges — are exceptions rather than the default. That keeps the brand from drifting into softness.

Image treatment is direct. The server-hall hero uses a dark photographic corridor to imply scale and infrastructure. The dark feature tiles use simplified graphics, icons, and circular metrics to move from story to proof. The white sections reduce imagery and lean on type and structure. Nothing feels overprocessed. The page wants to look like a serious product with many tools, not like a lifestyle brand.

## Components

### Global header

- **Anatomy:** Ahrefs wordmark at left, product and resources navigation in the middle, utility links at right, and a bordered sign-up action.
- **Typography:** Inter for the links; the mark itself is graphic, not typographic decoration.
- **Surface:** Often transparent over the blue hero or the dark photographic field.
- **Shape:** Small-radius or near-square controls, with the sign-up treatment held in a crisp outline.
- **Composition:** Keep the header visually light. It should guide, not compete with the page headline.

### Hero stage

- **Anatomy:** One oversized headline, one supporting paragraph, and two adjacent actions.
- **Surface:** Blue field for the home and pricing introduction; dark photo field for the infrastructure story.
- **Typography:** Ahrefs for the headline; Inter for the paragraph and button labels.
- **Hierarchy:** The headline is the whole point. The action pair is secondary but still prominent.
- **Visible states:** The orange button is the primary commit. The adjacent action stays quieter so the eye lands on the first choice.
- **Composition:** A large preview card can sit below the copy and give the stage a second anchor without diluting the headline.

### Pricing card

- **Anatomy:** Three equal columns, each with plan name, summary, large price, orange CTA, and long feature list.
- **Surface:** White card on a blue field.
- **Shape:** Straight edges and column dividers. The card reads as a measured grid, not a soft container.
- **Typography:** Ahrefs for plan names and prices; Inter for descriptive and list copy.
- **Spacing:** Keep the internal rhythm generous enough that the lists remain scannable.
- **Variants:** The tiers differ by content depth, not by visual style.

### Mega menu

- **Anatomy:** Multi-column catalog with category labels, bold product names, and short explanations.
- **Surface:** White panel with faint separators.
- **Typography:** Smaller headings above quieter support text.
- **Composition:** Keep the columns narrow enough to scan quickly, but not so narrow that the descriptions collapse.
- **Hierarchy:** One selected item can receive stronger framing, but the overall system should stay calm and grid-like.

### Dark feature grid

- **Anatomy:** Large white statements, smaller supporting lines, rounded chips, icon badges, and compact metric graphics.
- **Surface:** Charcoal to near-black tiles.
- **Typography:** Ahrefs for the main statements; Inter for supporting notes and labels.
- **Shape:** Mostly rectangular with a few chip-like pills.
- **Visible states:** The cards can feel slightly different from one another, but they should still belong to one dark family.
- **Composition:** Let graphics sit beside the text, not on top of it.

### Role-and-use-case list

- **Anatomy:** Left-side list of roles, right-side detail area, orange plus/minus markers, and blue “Learn more” links.
- **Surface:** White page.
- **Typography:** Ahrefs for the role labels; Inter for the explanatory bullets.
- **Spacing:** Thin horizontal rules and measured vertical gaps keep the list calm.
- **Hierarchy:** The active role should stand out through color and the expansion of its detail area, not through a completely different container.

### Footer

- **Anatomy:** Many link columns, language selector, company links, social links, and legal text.
- **Surface:** Near-black field.
- **Typography:** Inter for nearly all of it, with small bold labels for section heads.
- **Composition:** Preserve the dense directory feel. It should read like a map of the site, not a marketing block.
- **Visible states:** Links remain quiet until needed; nothing in the footer should compete with the primary pages above.

## Responsive behavior

On narrower screens, the most important rule is order: headline first, action second, supporting copy third, and dense lists last. The pricing matrix should stack in source order and keep the CTA near the price so the purchase path does not fragment. The mega menu should collapse by column group rather than by random item order. Dark feature tiles should remain readable as separate blocks, even if the layout compresses to fewer columns. The footer can reduce column count, but the directory logic should remain intact.

Typography should step down in size without losing the Ahrefs vs. Inter split. The orange action color should stay unchanged so the call to action does not weaken on smaller screens. Borders and spacing should do more work as the canvas narrows; the page should not rely on decorative effects to carry separation.

## Practical implementation guidance

### Preserve

- Keep orange as the main interaction color across every page mode.
- Keep Ahrefs for the big promises, prices, and section leads.
- Keep Inter for navigation, supporting text, and long lists.
- Preserve the hard switch between blue, white, and black surfaces.
- Keep the pricing matrix and the white tool menu structured around strict columns and thin rules.

### Avoid

- Avoid adding extra accent colors beyond the blue and orange system.
- Avoid soft pastel backgrounds, glass effects, or heavy shadows.
- Avoid rounding the main cards into pills.
- Avoid making the footer look like another promotional section.
- Avoid mixing display weights too freely; the system depends on a narrow type range.

### Recommended build order

1. Build the navigation and the orange primary action.
2. Recreate the blue hero field and its large Ahrefs headline.
3. Build the white pricing matrix with equal columns and a single CTA pattern.
4. Add the white menu and role-list panels.
5. Add the dark feature grid and the server-hall hero.
6. Finish with the deep-black footer and the help bubble.

### Accessibility

- Give every small icon control a clear text label.
- Keep visible focus on orange buttons, blue links, and outlined controls.
- Do not rely on color alone to show the active role, selected menu item, or highlighted tier.
- Preserve readable line lengths in the hero, pricing matrix, and footer.
- Make sure white text on blue and black meets contrast needs at the final sizes used in layout.

## Scope note

This guide covers the home hero, pricing page, tool menu, role-and-use-case section, dark feature stories, and footer on ahrefs.com. It does not cover authenticated app screens, motion, or mobile breakpoints beyond the supplied views. Spacing uses the supplied 0.125rem step.
