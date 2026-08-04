# How behance.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/behance.net-design)

Last updated: 2026-08-04

## Captured pages

[![Desktop Explore header with filter row, chip rail, and dense project grid](https://pin.fontofweb.com/7320?format=jpg)](https://design.withfudge.com/share/pin-7320)

[Desktop Explore header with filter row, chip rail, and dense project grid](https://design.withfudge.com/share/pin-7320)

[![Dark Behance Pro hero with centered headline over rainbow color wash](https://pin.fontofweb.com/7317?format=jpg)](https://design.withfudge.com/share/pin-7317)

[Dark Behance Pro hero with centered headline over rainbow color wash](https://design.withfudge.com/share/pin-7317)

[![White testimonial cards with spacious quote blocks and avatar sign-offs](https://pin.fontofweb.com/7319?format=jpg)](https://design.withfudge.com/share/pin-7319)

[White testimonial cards with spacious quote blocks and avatar sign-offs](https://design.withfudge.com/share/pin-7319)

[![Two-column plan cards with a blue outlined Pro tier and long feature list](https://pin.fontofweb.com/7315?format=jpg)](https://design.withfudge.com/share/pin-7315)

[Two-column plan cards with a blue outlined Pro tier and long feature list](https://design.withfudge.com/share/pin-7315)

[![Centered comment-guidelines modal with illustration and a single blue button](https://pin.fontofweb.com/5277?format=jpg)](https://design.withfudge.com/share/pin-5277)

[Centered comment-guidelines modal with illustration and a single blue button](https://design.withfudge.com/share/pin-5277)

## Overview

Behance uses two strong modes that share one grammar. The Explore shell is restrained: white canvas, thin gray dividers, compact text, and one saturated blue for the primary action. That lets project covers carry most of the color and motion. The Pro marketing pages flip the balance. They center oversized black or white headlines, use broad fields of color or black, and place the product message above cards, testimonials, and pricing blocks that feel more like exhibition panels than ordinary UI.

The system reads as a gallery with utility chrome. Navigation, search, filters, and chips stay visually quiet so the feed can remain dense. When the page shifts into sales and onboarding, the same brand moves into larger type, more breathing room, rounded cards, and clearer section framing. The identity is not decorative for its own sake; it is a disciplined framework that alternates between content-rich discovery and highly staged promotion.

What gives the site its character is the tension between neutrality and emphasis: the shell is almost invisible, while the action blue, dark hero stage, and selected states become unmistakable. That contrast is the core rule to preserve.

## Colors

### Core palette

| token | value | use |
|---|---|---|
| action | #0057FF | Primary CTA fill, active chip fill, and the most visible interactive accent |
| action-strong | #003BFF | Deeper blue used where the button or hero wants more weight |
| action-deep | #001FAA | Dark blue edge tone for stronger gradients and active emphasis |
| ink | #191919 | Main text on white surfaces and most large headlines in Pro sections |
| ink-muted | #696969 | Secondary labels and low-priority footer or meta text |
| ink-soft | #707070 | Similar muted text role where a slightly lighter gray is needed |
| canvas | #FFFFFF | Page background, cards, modal surface, and light section base |
| canvas-soft | #F9F9F9 | Gentle off-white used for large light sections and subtle separation |
| surface-deep | #000000 | Dark hero base, dark chrome, and the strongest contrast surface |
| border | #E8E8E8 | Hairline card edges, modal edges, and quiet separators |
| selected-border | #DEE8FF | Cool selection border for highlighted plan cards and selected panels |
| selected-border-soft | #E0EAFF | Softer blue-gray border tone for pale panels and plan framing |
| panel-tint | #B125C0 | Purple accent used in small feature treatments and icon color |
| panel-blue | #0088FD | Bright blue accent used in illustration and promotional color fields |
| panel-green | #028901 | Green accent used for positive markers, checks, and limited feature cues |

The light shell stays mostly white or near-white so the work grid can remain visually loud. The dark Pro stage inverts that relationship: black or near-black becomes the field, white becomes the text, and the blue action stays consistent as the one persistent signal across both modes. Purple and green do not compete with the primary blue; they stay in secondary accents, badges, small icons, and illustrated details. That keeps the system coherent even when the page moves from product discovery to pricing, testimonials, or modal content.

## Typography

Behance relies on a narrow family set with clear role separation. Acuminprowide carries the large, editorial headline work. Acumin Vf handles the compact shell, labels, and body text. Acuminpro appears in the button treatment and other strong utility emphasis. The family list also includes Acuminpro-200800 and Acuminprowide-200800; name them in the system, but keep the same role mapping as their base families. No designer or vendor credit is stated here, so reuse should verify licensing separately.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Acuminprowide | 4.375rem | 600 | 1 | -0.03em | Dark Pro hero headlines and the largest marketing statements |
| section-display | Acuminprowide | 3.75rem | 600 | 1 | -0.03em | White-section headlines such as testimonial or benefits intros |
| card-title | Acuminprowide | 2.1875rem | 600 | 1 | 0em | Strong card or section titles in pricing and story panels |
| section-lead | Acuminprowide | 1.375rem | 400 | 1.45 | -0.03em | Supporting copy directly under large headings |
| body | Acumin Vf | 1rem | 400 | 1.3 | 0em | Feed meta, body copy, and general explanatory text |
| body-compact | Acumin Vf | 0.875rem | 400 | 1.3 | 0em | Small labels, footer text, and quiet helper copy |
| navigation | Acumin Vf | 0.75rem | 400 | 1.3 | 0em | Header links, chip labels, and utility text |
| button | Acuminpro | 1rem | 600 | 1 | 0em | Primary and secondary pill buttons |

The hierarchy depends on scale more than on variety. Large headlines are tight and assertive. Supporting copy opens up just enough to stay readable without weakening the display rhythm. The shell text remains small and even, which helps the feed and chip row stay dense. Buttons use a more forceful family so the primary action can read as a control, not just another label.

## Layout

The Explore page starts with a full-width top bar, then a search-and-filter row, then a horizontal chip rail, then the feed. That order matters. The header is compact and linear; the search row adds a pill-shaped control cluster; the chip rail adds content categories without breaking the width of the page; the feed then takes over with a tight grid of covers and metadata. The grid itself is the main event, so the page keeps the surrounding furniture thin and quiet.

The Pro pages invert the tone but keep the same restraint around the message. A dark hero uses a centered stack: eyebrow, oversized headline, short body copy, then one or two pill actions. Below that, light sections appear as large white cards or wide card rows against a pale background. The cards carry feature summaries, pricing plans, or testimonials. On the story sections, text sits in a left-aligned column while the supporting media or card stack occupies the rest of the width.

The pricing view adds a clear comparison structure. Two tall cards sit side by side, with the Pro card visually promoted by a blue outline and a filled blue action near the bottom. The testimonial view swaps comparison for quotation blocks, but keeps the same card rhythm: generous padding, soft borders, and a consistent name-and-avatar footer. The modal view is the smallest layout in the set. It centers a white dialog with a close control, illustration, body copy, and one blue button.

Across all layouts, the page uses width and spacing to separate chapters more than it uses heavy rules. Sections are broad, cards are rounded, and content usually locks to a left or centered column rather than filling every inch of the viewport.

## Visual language

Corners are consistently soft. Small controls use restrained rounding, while cards and dialogs lean into a more generous 1.25rem shape. The primary button is a full pill, which gives the blue action a stable silhouette across headers, heroes, and footers. That pill shape is one of the few forms that stays identical in both light and dark modes.

Borders do most of the framing work. The shell prefers 1px hairlines or very light card edges instead of heavy shadows. Selected or promoted panels receive a cooler blue border, which makes them feel active without becoming noisy. Most of the page remains flat, which is important because the cover images and hero gradients already bring enough depth.

The image language is split between two families. Explore uses project thumbnails and cover art as the main source of color. Pro uses abstract gradients, UI mockups, and promotional illustrations to explain features. In both cases, the page does not over-frame the media. The image is allowed to sit inside a simple card or a wide panel and do the expressive work itself.

Color also behaves as a structural cue. Blue means action or selection. Green marks positive status or a check. Purple is an occasional accent, not a parallel brand voice. Black and white define the stage for the strongest promotional sections. That limited palette keeps the page from drifting into decorative noise.

## Components

### Header and utility chrome

- **Anatomy:** Wordmark, text links, dropdown labels, a blue acquisition button, a white secondary button, small utility icons, and an account/avatar area.
- **Surface:** White or black depending on page mode, with no heavy framing.
- **Typography:** Small Acumin Vf labels and compact utility copy.
- **Shape:** Rounded pills for key actions; simple text links for navigation.
- **Composition:** Left-aligned wordmark and nav cluster; right-aligned actions and utilities.
- **Visible states:** Active section links gain an underline; the primary CTA stays filled blue.

### Search and filter bar

- **Anatomy:** Filter pill, long search field, segmented content filters, and a recommended sort control.
- **Surface:** White field with very light borders and soft interior spacing.
- **Typography:** Small Acumin Vf text for controls and placeholders.
- **Shape:** Long rounded input, small rounded pills, and subtle separators.
- **Spacing:** Generous horizontal padding with modest vertical height.
- **Hierarchy:** The search field is the longest object in the row; the filter pill is the shortest and most tactile.

### Chip rail

- **Anatomy:** Horizontally scrolling category chips with thumbnails, labels, and a right-arrow affordance at the end.
- **Surface:** Active chip in blue; inactive chips lean dark and image-backed.
- **Typography:** Small white or light text on dark chips; white text on the active blue chip.
- **Shape:** Compact rounded rectangles rather than full pills.
- **Composition:** A long row that compresses content categories into one visual band.
- **Visible states:** The active chip is filled blue; the others read as thumbnails with labels over them.

### Project cards in the feed

- **Anatomy:** Large cover image, creator line, PRO badge where applicable, and small like/view counts.
- **Surface:** Mostly flat against the white page so the artwork stays in front.
- **Typography:** Small Acumin Vf metadata beneath the image.
- **Shape:** Minimal framing; the card reads more like a tile than a container.
- **Spacing:** Tight vertical rhythm between cover, creator row, and engagement counts.
- **Hierarchy:** The image dominates; the metadata stays secondary and compact.

### Pro hero

- **Anatomy:** Eyebrow label, very large centered headline, short body copy, primary and secondary pills, and a color-rich or black background stage.
- **Surface:** Black field with a blue-to-cyan-to-warm color wash in one variant; dark surfaces with white type.
- **Typography:** Acuminprowide display scale with compact leading.
- **Shape:** Pills for CTAs; no extra framing around the text stack.
- **Composition:** Centered and symmetrical; the stage carries the mood, not decorative chrome.
- **Visible states:** The primary action stays bright; the secondary action inverts to maintain contrast.

### Feature cards and benefit rows

- **Anatomy:** Card title, short body copy, icon or illustration, and a small text link such as Learn More.
- **Surface:** White cards on pale sections with very light borders.
- **Typography:** Display-weight card titles with smaller body copy below.
- **Shape:** Rounded rectangles with generous interior padding.
- **Composition:** Repeated in rows or columns so the page can explain several benefits without changing the template.
- **Visible states:** One card may get a blue border to show preference or selection.

### Pricing comparison

- **Anatomy:** Two tall plan cards, plan name, plan description, price block, stacked feature list, and a final action.
- **Surface:** White cards on a pale page; the Pro card gets the stronger blue border.
- **Typography:** Large plan heading, bold price, and compact list copy.
- **Shape:** Tall rounded cards with clear internal spacing.
- **Hierarchy:** The price block sits high enough to stay visible before the long checklist.
- **Visible states:** The selected plan is more prominent through border color and button fill.

### Testimonials

- **Anatomy:** Quote text, avatar or portrait, name, and a compact footer.
- **Surface:** White cards with soft borders.
- **Typography:** Quotation text uses larger body scale and strong contrast; attribution is smaller.
- **Spacing:** Comfortable padding with a generous gap between quote and sign-off.
- **Composition:** Repeated cards line up horizontally to create a story wall.
- **Visible states:** The cards stay calm; the emphasis comes from the quote language, not the container.

### Modal

- **Anatomy:** Close control, heading, illustration, explanatory copy, and one blue confirmation button.
- **Surface:** White dialog on a quiet page.
- **Typography:** Bold heading with compact body copy.
- **Shape:** Rounded dialog with clear margins from the viewport edge.
- **Hierarchy:** Illustration first, then text, then the single action.
- **Visible states:** The dialog uses the same blue action language as the rest of the site so it feels native to the system.

## Responsive behavior

The same hierarchy should survive a narrower viewport, but the order needs to stay strict: controls first, content second, deep details last. The header can compress, yet the blue action should remain visible and easy to reach. The search row should not lose its long input behavior too early, because that field is part of the Explore identity. Chip overflow should become scrollable before labels are crushed.

The Pro pages should stack their story cards into a single column when width tightens. The hero headline should reduce cleanly rather than wrap into awkward fragments. Pricing cards should remain legible as cards, not collapse into a dense table. Testimonials should stay readable with a clear attribution area under each quote. The modal should keep its centered composition and retain enough side padding to feel intentional, not cramped.

Keep image crops honest. If a project cover or illustration loses too much meaning when narrowed, the layout should change spacing before it changes the image into an unreadable fragment.

## Practical implementation guidance

### Preserve

- Keep one electric blue as the only persistent action color.
- Keep the shell light and quiet so the project grid can stay visually rich.
- Keep large Pro headlines in Acuminprowide with very tight leading.
- Keep card borders light and shadows rare.
- Keep rounded pills for the strongest actions, not for every small control.
- Keep green and purple as accents, not as competing system colors.

### Avoid

- Avoid overbuilding chrome around the feed; the work should remain the loudest surface.
- Avoid introducing a second blue for casual use; the primary action needs a single identity.
- Avoid heavy shadows under every card. The design depends more on border and spacing than on elevation.
- Avoid turning small labels into prominent display text.
- Avoid mixing many card radii in one section. The system works because its rounding is disciplined.

### Recommended build order

1. Set the type scale and the primary blue.
2. Build the header, search row, and chip rail.
3. Build the feed tile pattern with compact metadata.
4. Build the dark Pro hero and its button pair.
5. Add the feature cards, pricing comparison, and testimonial cards.
6. Finish with the modal pattern and verify the spacing across light and dark sections.

### Accessibility

- Keep visible focus treatment on every pill, chip, and dialog action.
- Maintain strong contrast for white text on the dark hero and blue text on pale cards.
- Give project covers, avatars, and illustrations meaningful alt text.
- Keep the search field and sort control labeled clearly so the shell stays usable without visual cues alone.
- Preserve readable line lengths in the large headlines and testimonial copy when the layout narrows.

## Scope note

This guide covers the Explore header, search and chip rail, feed tiles, Pro hero, feature and pricing cards, testimonials, and the comment-guidelines modal shown here. Mobile breakpoints, hover behavior, motion, and any surfaces not present in the supplied views are outside scope.
