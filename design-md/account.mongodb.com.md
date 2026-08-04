# How account.mongodb.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/account.mongodb.com-design)

Last updated: 2026-08-04

## Captured pages

[![Create-account form with stacked social buttons, fields, and a left green geometry strip](https://pin.fontofweb.com/2786?format=jpg)](https://design.withfudge.com/share/pin-2786)

[Create-account form with stacked social buttons, fields, and a left green geometry strip](https://design.withfudge.com/share/pin-2786)

[![Split login screen with a narrow form rail and a wide dark-green promotional panel](https://pin.fontofweb.com/2785?format=jpg)](https://design.withfudge.com/share/pin-2785)

[Split login screen with a narrow form rail and a wide dark-green promotional panel](https://design.withfudge.com/share/pin-2785)

## Overview

MongoDB’s account pages are not trying to tell a brand story first. They present a login or registration task with a strict split between the working form and the decorative brand field around it. The white form area is sparse, left-aligned, and top-heavy. The dark green field uses oversized rounded geometry to add identity without competing with the form.

The system depends on a sharp type split. The page headline and wordmark use a serif voice with more presence, while the rest of the interface stays in a compact Swiss Typefaces sans. That contrast gives the sign-in flow a formal but practical tone: the account task feels authoritative, while the form controls remain plain and direct.

A few qualities define the system:

- A white operational surface paired with a deep green brand surface.
- Blue links that stay separate from the green palette.
- Thin borders and light fills instead of heavy depth.
- A narrow, top-anchored form column with generous empty space below.
- Large rounded green blocks that turn the side panel into a branded field rather than an illustration.

## Colors

The page uses three visible color families: white for the work area, dark forest green for the brand field, and a brighter green range for the rounded shapes inside that field. Blue appears only in links and provider marks, so it reads as an action color rather than part of the brand green family. Neutral gray is reserved for borders, disabled controls, and low-emphasis chrome. The result is a restrained interface where the greens carry identity, the blue carries interaction, and the white surface carries the actual task.

### Core palette

| token | value | use |
|---|---|---|
| `action-link` | `#3D7CDA` | Login links, sign-up links, and other text-level affordances |
| `ink` | `#000000` | Dark form text, button copy, and labels when a neutral black is needed |
| `canvas` | `#FFFFFF` | The main form surface and the page background around it |
| `surface-deep` | `#023530` | The dark brand panel and the deepest decorative green field |
| `surface-emerald` | `#01714C` | The medium green bands and rounded blocks inside the brand field |
| `surface-lime` | `#01A656` | The brightest green accents in the geometric side panel |
| `border` | `#BFC7C8` | Input outlines, divider lines, and secondary button borders |
| `control-muted` | `#B0BDBD` | The disabled submit button and other low-emphasis control fills |

White and near-white surfaces keep the form calm and readable. The deep green panel gives the page its strongest character, while the two brighter greens add motion through shape rather than through animation or texture. The gray border should stay thin and quiet; it supports the fields without making them look boxed in. Blue should remain reserved for links so it stays legible as a clear path forward.

## Typography

The page uses two families with different jobs. `Mongo Db Value Serif` gives the brand wordmark and the main page headline a formal, slightly editorial tone. `Font-Copyright C 2018 Swiss Typefaces Sarl All Rights Reserved` handles the form system: labels, helper copy, buttons, links, and legal text. Licensing for both families should be confirmed before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Mongo Db Value Serif | 2.625rem | 400 | 1.08 | -0.02em | Main page headline in the auth column |
| `section-display` | Mongo Db Value Serif | 1.875rem | 400 | 1.1 | -0.015em | Smaller page heading or promo headline |
| `body` | Font-Copyright C 2018 Swiss Typefaces Sarl All Rights Reserved | 1rem | 400 | 1.5 | 0em | Form text, provider names, and general copy |
| `label` | Font-Copyright C 2018 Swiss Typefaces Sarl All Rights Reserved | 0.875rem | 600 | 1.25 | 0em | Input labels and small headings above fields |
| `helper` | Font-Copyright C 2018 Swiss Typefaces Sarl All Rights Reserved | 0.8125rem | 400 | 1.35 | 0em | Password rules, optional hints, and supporting notes |
| `action` | Font-Copyright C 2018 Swiss Typefaces Sarl All Rights Reserved | 0.9375rem | 600 | 1.2 | 0em | Button copy, social button text, and compact calls to action |
| `legal-copy` | Font-Copyright C 2018 Swiss Typefaces Sarl All Rights Reserved | 0.75rem | 400 | 1.4 | 0em | Terms text, footnotes, and utility labels |

The hierarchy is simple and effective. The serif headline should carry the page identity; the sans text should carry the task. Avoid adding another display family or a second decorative weight. The forms work because the type stays small, disciplined, and evenly spaced. The brand wordmark and headline can be a little quieter than a typical marketing hero because the side panel already provides strong visual energy.

## Layout

The register screen is a narrow form column beside a tall decorative green strip. The log-in screen expands that idea into a true split composition: a white form rail on the left and a broad dark-green promotional panel on the right. In both cases, the form remains near the top of the page and leaves a large amount of open space below. That empty lower area is part of the design; it keeps the auth task from feeling crowded.

The left column is consistent in its discipline. The brand mark sits first, then a serif headline, then a short account prompt with a blue link, then the social buttons, then the email/password stack. The fields are arranged as a single vertical track with even spacing and no side-by-side complexity. That makes the page feel narrow and focused even when the overall viewport is wide.

The right panel on the log-in page is a visual counterweight, not a second form. Its headline sits near the upper-left corner, the explanatory copy sits beneath it, and the geometric green shapes occupy most of the remaining area. Those shapes are large, cropped by the panel edges, and layered so that the panel feels branded rather than empty. The register screen uses the same idea in a thinner strip, where the geometry becomes a left-edge accent instead of a full panel.

The structure depends on contrast: white versus green, text column versus abstract field, narrow task area versus wide decorative area. Do not collapse that contrast into a centered card. The asymmetry is what makes the page feel like MongoDB instead of a generic auth template.

## Visual language

The visual language is geometric, restrained, and technical. The brand field is built from oversized rounded rectangles and partial circles that stack against a dark base. The shapes have soft corners but hard separations, so they feel modular rather than organic. Their color moves from deep forest to brighter emerald and lime, which gives the panel depth without needing shadows or texture.

The form side stays almost monochrome. Inputs are light, thinly outlined, and square enough to feel functional. Social sign-in buttons follow the same rule: white fills, gray borders, centered provider marks, and compact text. The inactive submit button is visibly muted, which signals that the form is incomplete without demanding a separate error state.

Blue is the only disruptive accent, and that is useful. It marks the text links for account switching and policy references, so the user can identify the interactive path quickly. Because the main brand colors stay green, the blue links read clearly as utility rather than decoration.

The page avoids visual noise. There are no photos, no gradients outside the brand field, and no large shadows. The interface relies on spacing, contrast, and a few well-chosen surfaces. That keeps the account task readable while still giving the brand panel enough character to feel intentional.

## Components

### Brand mark and page heading

- **Anatomy:** A small MongoDB wordmark at the top, followed by a serif page headline.
- **Typography:** The mark and headline should use the serif family; the supporting prompt under the headline should switch to the sans family.
- **Surface:** White on the form side; white text on the green promo side when used there.
- **Composition:** Flush left, compact, and top anchored.
- **Role:** This is the first identity anchor, but it should not dominate the form stack below it.

### Social sign-in buttons

- **Anatomy:** Left icon, centered provider label, thin border, white fill.
- **Typography:** Sans family, medium weight, small button size.
- **Shape:** Very small corner radius, almost rectangular.
- **Spacing:** Buttons are stacked with even vertical separation and equal width.
- **Visible state:** The buttons look neutral and inactive until chosen; nothing in the design suggests a filled or embossed style.
- **Composition:** They sit above the email/password path and reduce the amount of typing required.

### Input stack

- **Anatomy:** Label above field, optional helper line below or under the password field, and occasional inline hint such as “Optional.”
- **Surface:** White field fill with a thin gray outline.
- **Typography:** Labels are denser and darker; helper text is smaller and softer.
- **Shape:** Shallow rounded rectangles with crisp borders.
- **Visible state:** The password field includes a visibility icon at the right edge. The design also shows a disabled primary state when the form is incomplete.
- **Composition:** Single-column, left-aligned, and tightly controlled so that each field reads as part of the same stack.

### Consent row and policy links

- **Anatomy:** Small square checkbox followed by a sentence with blue links.
- **Typography:** Sans family, compact and readable, with the link words carrying the interaction color.
- **Composition:** The text wraps in a narrow column, so the policy terms remain close to the checkbox.
- **Role:** This is a trust and consent element, not a visual highlight, so it should stay understated.

### Primary action

- **Anatomy:** One small button at the bottom of the form.
- **Surface:** Muted gray fill with a thin border when inactive.
- **Typography:** Sans family, medium weight.
- **Shape:** Slight rounding, no heavy shadow.
- **Visible state:** The inactive look is part of the form state; do not make it feel like a stronger call to action than the rest of the page.
- **Composition:** Left aligned with the field column, not centered across the page.

### Promotional panel

- **Anatomy:** Large serif headline, short body copy, one text link, and a field of rounded green geometry.
- **Surface:** Deep green base with brighter green shapes layered over it.
- **Typography:** White or near-white copy on the dark field, with the headline carrying most of the weight.
- **Shape:** Large rounded forms cropped by the panel edges.
- **Composition:** Text stays in the upper-left; the geometry owns the rest of the panel.
- **Role:** This panel adds brand memory and balances the otherwise quiet form side.

### Utility badge

- **Anatomy:** A tiny corner badge at the bottom-right edge.
- **Surface:** Very light, low-contrast, and easy to ignore.
- **Role:** Keep it outside the form rhythm so it does not compete with the submit path.
- **Composition:** Treat it as peripheral utility, not as part of the main visual stack.

## Responsive behavior

On narrower screens, preserve the reading order: brand mark, headline, account prompt, social buttons, form fields, consent, and primary action. The decorative green field should collapse before the form stack loses its readability. The field geometry can simplify, but the contrast between task area and brand area should remain.

The layout should avoid forcing the user to hunt for the form inside a large decorative composition. If the promo panel must stack below the form, it should remain clearly secondary. Keep the line length short for the headline and helper copy, and keep the field widths generous enough that labels and hints do not wrap awkwardly.

Touch targets matter more on small screens, but the visual language should not become chunkier just to accommodate them. Keep the same quiet borders, restrained fills, and blue text links. If the button and inputs grow taller, do it by spacing, not by inventing new surface treatments.

## Practical implementation guidance

### Preserve

- Keep the serif headline and sans form system separate.
- Keep blue links distinct from the green brand field.
- Keep the form column narrow and top aligned.
- Keep the promo panel geometric, flat, and cropped by the frame.
- Keep the disabled button visually quiet until the form is ready.

### Avoid

- Avoid adding photography, extra accent hues, or decorative shadows.
- Avoid centering the form in a floating card.
- Avoid thick borders that fight the thin, calm field treatment.
- Avoid turning the green side panel into a generic hero banner.
- Avoid making the inactive button read as stronger than the links.

### Recommended build order

1. Establish the page shell: white task area and green brand area.
2. Add the serif headline and the sans body/label scale.
3. Build the provider buttons and stacked input fields.
4. Add the consent row, helper lines, and disabled primary state.
5. Recreate the green geometric panel with its layered rounded forms.
6. Tune spacing and edge behavior so the form and panel stay visually separate.

### Accessibility

- Keep labels attached to every input and make helper text easy to associate with the relevant field.
- Ensure blue links stay readable against both white and dark green surfaces.
- Maintain a clear focus ring on buttons, links, and fields.
- Do not rely on color alone to distinguish disabled controls from active ones.
- Keep the small checkbox and utility badge accessible without forcing the user into a precise pointer hit.
- Maintain contrast in the headline and body copy when the green panel is compressed on smaller screens.

## Scope note

This guide covers the desktop account creation and log-in surfaces, including the white form column, provider buttons, stacked fields, consent controls, the disabled submit/next button, and the green branded side panel. It does not include mobile layouts, motion, error states, account recovery, or post-login product screens. Measurements are practical adaptation targets.
