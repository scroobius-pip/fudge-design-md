# How artstation.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/artstation.com-design)

Last updated: 2026-08-04

## Captured pages

[![Wide dark header with search bar and colorful channel rail](https://pin.fontofweb.com/2253?format=jpg)](https://design.withfudge.com/share/pin-2253)

[Wide dark header with search bar and colorful channel rail](https://design.withfudge.com/share/pin-2253)

[![Centered empty profile with upload icon and single status line](https://pin.fontofweb.com/8864?format=jpg)](https://design.withfudge.com/share/pin-8864)

[Centered empty profile with upload icon and single status line](https://design.withfudge.com/share/pin-8864)

## Overview

ArtStation presents itself as a dark working surface for illustration, concept art, 3D work, and marketplace discovery. The page does not build a bright brand shell around the content. It lowers the interface into a near-black canvas and lets thumbnails, artwork, and profile imagery supply almost all of the color. That choice gives the site a gallery-like feel even when the content is a utility view such as an empty profile. The interface still needs structure, but that structure stays quiet: a narrow top bar, a long search field, compact utility controls, and horizontal content rails.

The most important thing to preserve is the hierarchy between system chrome and artwork. The header and channel strip are functional and dense, while the content cards are the visual event. On the profile surface, a centered icon and a single sentence are enough to express the empty state because the surrounding field is so restrained. The design language is therefore not decorative minimalism for its own sake; it is a frame that keeps attention on creators, categories, and portfolio imagery.

## Colors

The interface is built from a very small dark palette. The page canvas is pure black, the slightly lifted structural surfaces sit at a near-black charcoal, and text settles into a muted light gray rather than stark white. That combination creates a low-glare environment that supports prolonged browsing and makes image content feel brighter than the shell around it.

| token | value | use |
|---|---|---|
| `canvas` | `#000000` | Global page background, empty-state field, and the outer edge of the dark chrome |
| `panel` | `#101014` | Header field, chips, card bases, and any surface that needs a slight separation from the canvas |
| `muted-ink` | `#BEBEC2` | Labels, secondary copy, placeholder text, and the short empty-state sentence |

The relationship between these colors matters more than any one tone. `canvas` and `panel` are close enough that surfaces can stack without looking glossy. `muted-ink` is light enough to stay readable on black, but it avoids the hard contrast of pure white, which would pull focus away from the artwork. In practice, this means the site can place text directly over very dark areas without turning the interface into a bright dashboard.

The art itself introduces the richer color range. The homepage strip shows saturated promos and thumbnails with blues, greens, pinks, and purples, but those hues belong to the work being shown, not to the system chrome. The UI should stay monochrome in its own layer and allow portfolio color to do the expressive work.

## Typography

The interface uses Inter in a single measured size in the packet: 14px with generous line height. That is the right scale for a market-and-gallery surface where most labels are utility text and most visual weight comes from imagery. Inter’s neutral, modern shape keeps the shell unobtrusive and easy to scan. It does not try to become an editorial voice; it behaves like infrastructure.

Inter is credited to Rasmus Andersson and Rsms.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `body` | Inter | 0.875rem | 400 | 1.8 | 0.015em | Empty-state copy, supporting metadata, and short descriptive text |
| `label` | Inter | 0.875rem | 400 | 1.8 | 0.015em | Top-bar links, chip labels, and compact utility text |

The 14px size is small enough to support a dense browsing layout without crowding the art. The generous line height matters because the interface often places short labels beside icons or inside pill-shaped controls. The slight positive letter spacing helps the text remain crisp against the dark surfaces. The system should not rely on multiple font families for hierarchy. Instead, hierarchy comes from placement, density, and the contrast between image content and structural text.

## Layout

The page is organized as a slim chrome band above a content field. The top bar holds the site mark on the left, navigation links, a long search input, a compact upgrade button, and several small utilities on the right. This arrangement uses width efficiently: the search field spans the center so discovery is always available, while the actions remain compact enough that they do not squeeze the main content.

The homepage content sits immediately below that bar in a horizontal strip of large promotional cards. These cards are wide, image-heavy, and close together. They read like a news or launch feed, but the darkness of the shell keeps them from becoming noisy. The rail is not given much vertical breathing room; it is meant to feel like a continuous browsing surface rather than a series of separate panels.

The empty profile view uses a different layout strategy. Instead of filling the space with many controls, it centers a single icon illustration and a one-line message in a large, empty field. The message is small, but the surrounding negative space gives it importance. That same strategy can support other empty or low-content states: keep the frame dark, keep the message short, and let the icon carry the emotional tone.

Spacing is compact and disciplined. The page does not rely on large gutters or soft editorial margins. Content sits close enough to feel immediate, but not so close that the rail becomes cluttered. The visual rhythm comes from the alternation of dark surfaces and image tiles, not from visible dividers.

## Visual language

ArtStation’s visual language is built around restraint in the shell and richness in the content. The chrome is quiet: black, charcoal, small text, and thin outlines or gentle shape changes where needed. The artwork is loud: saturated, varied, and expansive. This contrast is the brand’s main device. It lets the page serve both as a marketplace and as a portfolio showcase without making the interface feel promotional.

The image treatment is important. Cards tend to be broad and cinematic rather than square and utilitarian. That gives each project or promo enough surface to communicate mood before a user reads the title. The homepage strip shows this clearly: each card has enough width for a title, supporting line, and a strong image crop. The result is a feed that feels curated even when it is high volume.

The iconography is similarly restrained. Small monochrome utility icons and simple symbolic artwork sit inside the dark shell without drawing attention away from the thumbnails. On the empty profile page, the illustrated upload-style icon becomes the only decorative object in the center of the screen. It is playful, but still subdued by the dark field around it.

The system also uses contrast in information density. Promotional cards are visually busy because they need to persuade and announce. The empty state is nearly blank because it needs to explain absence. The top bar is information-dense because it needs to support navigation and search. That difference in density is part of the design language and should remain consistent.

## Components

### Top bar

- **Anatomy:** Site mark, primary navigation links, long search field, upgrade action, utility icon cluster.
- **Surface:** The bar sits on the black canvas and uses dark fields for inputs and controls.
- **Typography:** Small Inter labels at 14px.
- **Composition:** The search field is the widest element and anchors the middle of the bar. The action and utility controls are compact and right-aligned.
- **Visible states:** The current page state is expressed through alignment and contrast, not through loud highlighting.

### Search field

- **Anatomy:** Rounded text field with a magnifier icon and placeholder text.
- **Surface:** Slightly lighter than the canvas so it reads as an active input area.
- **Typography:** Small, muted Inter text.
- **Shape:** Soft rounded corners that match the rest of the compact chrome.
- **Spacing:** Internal padding should be enough to keep the icon and text from touching the edges.

### Channel chips

- **Anatomy:** Small pill-shaped category controls with optional thumbnail or icon at the left.
- **Surface:** Dark chip fill that stays close to the surrounding header tone.
- **Typography:** Inter at the same small scale as the rest of the chrome.
- **Shape:** Rounded pills rather than sharp tags.
- **Composition:** The chip row runs horizontally and reads as a browse rail, not as a form field.
- **Visible states:** One chip can appear more visually grounded than its neighbors to indicate the active channel, but it should still belong to the same dark family.

### Artwork cards

- **Anatomy:** Image-forward tiles with a title area and supporting text.
- **Surface:** Dark card base under the image crop.
- **Typography:** Small labels, title text, and brief metadata all remain restrained so the artwork carries the frame.
- **Shape:** Rounded corners, but not so soft that the tile loses its poster-like quality.
- **Spacing:** Tight gaps between cards create a continuous strip.
- **Composition:** The card should privilege the artwork crop first, then the text, then secondary badges.

### Empty-state stage

- **Anatomy:** Centered icon illustration and a one-line status message.
- **Surface:** Pure black field with no competing decoration.
- **Typography:** Small muted Inter copy.
- **Shape:** No visible container is needed; the emptiness is the container.
- **Composition:** The icon should sit above the sentence with enough breathing room to feel intentional.
- **Visible states:** This is a calm absence state, not an error state. It should feel neutral, not warning-like.

## Responsive behavior

The dark shell should compress gracefully on smaller screens by preserving order rather than by introducing new visual tricks. The top bar should keep search and navigation accessible, but the search field can narrow before any content card loses its image area. Channel chips should remain horizontally scrollable rather than wrapping into a dense block. Artwork cards should keep their image crops prominent even when the titles shorten or stack.

The empty profile stage should remain centered and minimal on narrow layouts. That view relies on negative space, so the main change on smaller screens is not decoration; it is simply protecting the reading distance around the icon and sentence. If the layout has to give up space, it should do so around the perimeter before it compresses the centered message.

Any responsive adaptation should continue the same contrast rule: dark shell, muted interface text, and saturated artwork. Do not introduce a bright mobile skin or a second palette just because the viewport changes.

## Practical implementation guidance

### Preserve

- Keep the interface chrome darker and quieter than the content it frames.
- Use Inter at the small scale consistently for navigation, metadata, chips, and empty-state copy.
- Let artwork thumbnails supply the strongest color on the page.
- Maintain horizontal rails for channel browsing and promo cards.

### Avoid

- Avoid turning the header into a bright toolbar.
- Avoid large display type in the shell; the system works because it stays small and efficient.
- Avoid heavy borders, bright dividers, or high-gloss effects that fight the images.
- Avoid loading the page with multiple visual accents inside the chrome.
- Avoid making empty states feel like errors; they should stay calm and neutral.

### Recommended build order

1. Build the dark canvas and the near-black structural surface.
2. Add the top bar with the search field and right-side utility cluster.
3. Add the horizontal channel rail and the promo-card strip.
4. Add the centered empty-state stage for low-content profiles.
5. Refine spacing and corner treatment so the shell stays consistent across all surfaces.

### Accessibility

- Keep text contrast strong enough for small 14px labels on dark fields.
- Do not rely on color alone to indicate the active channel or current location.
- Make search and utility controls easy to hit, especially in the dense top bar.
- Ensure thumbnail titles remain readable against dark overlays or card bases.
- Preserve clear keyboard focus on controls even when the visual language stays subtle.

## Scope note

This guide covers the dark homepage chrome, the horizontal channel rail, the promo-card strip, and the centered empty profile state on ArtStation. It does not define mobile breakpoints, hover or motion behavior, loading states, error states, or any light-theme variant.
