# How clubhouse.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/clubhouse.com-design)

Last updated: 2026-08-04

## Captured pages

[![Bright yellow homepage with floating portrait clusters and the central join live voice chats hero](https://pin.fontofweb.com/7585?format=jpg)](https://design.withfudge.com/share/pin-7585)

[Bright yellow homepage with floating portrait clusters and the central join live voice chats hero](https://design.withfudge.com/share/pin-7585)

[![Pale centered clubhouse wordmark with arrow and bottom scroll cue](https://pin.fontofweb.com/7584?format=jpg)](https://design.withfudge.com/share/pin-7584)

[Pale centered clubhouse wordmark with arrow and bottom scroll cue](https://design.withfudge.com/share/pin-7584)

## Overview

Clubhouse is a poster first and a product page second. The bright version works as a saturated yellow stage with one dominant sentence, two compact actions, and scattered circular portraits that make the page feel social before it feels informational. The calmer version changes the structure instead of merely muting the color: it becomes a centered wordmark, a small downward arrow, and a bottom cue that asks the visitor to continue. Those two views share the same brand voice, but they do not share the same hierarchy.

The visual system is built around restraint. Black type carries nearly all of the meaning. Yellow carries the mood. White is reserved for the main pill action so the button can rest inside the field instead of blending into it. The portraits add humanity and motion without turning the page into a grid of cards or a gallery. In the pale version, the page removes the portrait noise and replaces it with a centered emblem-like statement, which makes the alternate screen feel quieter, more formal, and more directional.

The important idea is that the homepage is not a conventional marketing funnel. It is a simple stage with a few carefully placed objects. Reproducing it well means keeping that stage quality intact: large empty space, a single focal line, small top-right utilities, and a minimal footer that stays low and light.

## Colors

| token | value | role | use |
|---|---|---|---|
| `action` | `#FFE450` | Brand stage color | Full-page hero field on the bright homepage and the dominant accent plane that makes the page feel immediate |
| `ink` | `#000000` | Primary text | Main headline, centered wordmark, footer labels, and the strongest contrast against both light and yellow fields |
| `ink-soft` | `#1F2022` | Secondary dark text | Small utility text and darker supporting copy when the page needs a slightly softer black |
| `ink-warm` | `#242420` | Outline dark | Pill borders and darker button strokes where the page needs a hand-drawn edge rather than a hard graphic line |
| `canvas` | `#FFFFFF` | Light fill | The white pill button and other light control surfaces that need to lift off the yellow stage |

The palette is intentionally small. There is one loud surface color, two near-black weights, and one pure light fill. That gives the page a strong contrast system without making it feel layered or theme heavy. The bright yellow screen uses the action color as a complete field, while the pale screen shifts to a quiet warm canvas but keeps the same ink and white control treatment. The page does not need a separate dark theme: the dark presence is already carried by ink and ink-warm.

Photographic color belongs to the portraits, not to the UI tokens. Those images provide the only varied hues in the composition, which is why the controls stay disciplined. The yellow field supplies energy, the pale field supplies calm, and the portraits supply warmth and motion. Black and white keep both versions legible.

## Typography

Clubhouse uses two material families, and each has a distinct job. **Gt Maru** is the brand voice: heavy, rounded, and wide enough to read like a title card or wordmark. **Nunito** is the interface voice: compact, friendly, and sturdy enough to hold header links, button labels, and footer text without stealing attention from the main statement. The type system stays small on purpose, which helps the page feel like a poster rather than a dense product site. Font licensing should be checked with the family owners before shipping.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Gt Maru | 4.5rem | 700 | 1.1 | -0.09em | Bright homepage headline and any large central brand line |
| `wordmark` | Gt Maru | 4.5rem | 700 | 1.1 | -0.09em | Centered logo word on the pale screen |
| `nav-link` | Nunito | 1rem | 800 | 1 | 0em | Top utility text such as jobs and other short nav items |
| `button-label` | Nunito | 1.06rem | 800 | 1 | 0em | Main pill button label, set a touch larger than ordinary body text |
| `body` | Nunito | 1rem | 400 | 1 | 0em | Short support copy and any plain explanatory line that stays visually quiet |
| `footer-meta` | Nunito | 0.75rem | 600 | 1 | 0em | Footer links, copyright text, and the small bottom cue on the pale screen |

The hierarchy depends more on scale and placement than on many style differences. Gt Maru is used only for the central hero line and the alternate wordmark, so it reads as identity rather than generic display decoration. Nunito holds the rest of the interface and gives the page its approachable tone. The button label weight is intentionally strong because the button has to read as an action even when it sits inside a very bright field. The smallest footer text remains crisp rather than faint; the page relies on distance and spacing, not low contrast, to separate the quiet details from the main message.

## Layout

The bright layout is a single stage with a top utility row, a centered headline, a floating action, and loose portrait chips. The top left hand mark is tiny. The top right jobs link and pill button are equally small and sit with generous breathing room, so the page reads as open rather than crowded. The central headline is the visual anchor. It has to stay large and centered, with the button directly below it and enough vertical separation to feel deliberate rather than stacked. The portraits are scattered around this center, some near corners and some closer to the word line, but they never lock into a grid.

The pale layout is a different composition, not a faded copy of the yellow one. Its center is the clubhouse wordmark itself, set alone in the middle of a mostly empty field. Beneath it sits a downward arrow, which acts like a directional cue rather than a decorative icon. Along the bottom edge, a centered scroll prompt appears as a quiet instruction to move onward. The top row still holds the logo and the small utility items, but the rest of the page is noticeably emptier. That emptiness is the point: it shifts the page from social poster to spare signboard.

The footer stays low in both screens. On the bright page it spans privacy, terms, FAQs, social icon links, and the copyright line. On the pale page the footer remains visually light, and the bottom cue sits between the open field and the edge of the viewport. The important spatial rule is that the footer never becomes a dense sitemap. It remains a thin baseline that closes the composition without competing with the center.

## Visual language

The design language is built from three shapes and one directional mark. The first shape is the full field, which turns the whole viewport into one controlled surface. The second shape is the pill, used for the main action and the outline action. The third shape is the circle, which frames each portrait crop and keeps the social imagery cohesive even when the photos themselves vary. The directional mark is the arrow in the pale screen, and it matters because it replaces the visual chatter of the portraits with a single quiet cue.

The bright screen feels lively because the portraits float rather than align. They have no frames, no captions, and no card chrome. Their spacing is intentionally casual, which makes the page feel social and human. The yellow background then does the rest of the work by turning every object into a clear silhouette. The pale screen uses the same identity but strips the composition back until the wordmark, arrow, and scroll cue carry the whole message.

The brand tone is optimistic and lightly improvised. Nothing on the page feels overbuilt. The logo is tiny. The actions are rounded. The typography is bold but not aggressive. The portraits are friendly rather than polished. That balance is what makes the homepage memorable: it looks like a welcoming room, not a brochure.

## Components

### Header utility row

The header is a framing device, not a navigation bar. It contains the tiny hand mark on the left and a short right-aligned utility pair on the bright screen: a text link and an outline pill. The spacing around these items stays generous so they do not overpower the center of the page. The text uses the smaller Nunito treatment, while the button uses the same pill geometry as the main CTA but reads as secondary because it is outlined instead of filled. On the pale screen, the same row frames the centered wordmark and arrow without becoming visually heavier.

### Hero statement and wordmark block

The bright homepage hero is the largest type on the page and the clearest signal of identity. It uses Gt Maru in a bold weight, tight tracking, and a compact line height so the line reads like one object. The pale screen reuses that same family for a centered wordmark block instead of a sentence. That shift changes the meaning of the page without changing the voice. Both treatments need to stay isolated and spacious.

### Primary action

The primary action is a white pill with dark text. Its fill is the main reason it stands out against the yellow field. The button is compact, rounded to a full pill, and padded enough to feel tactile without growing into a large slab. The label weight is strong and the text size is slightly above body copy, so the control reads as a clear command. This is the page’s most direct call to action and should remain visually calm against the saturated background.

### Secondary action

The secondary action is the same pill shape, but it uses a transparent fill and a dark border. That makes it feel quieter and more informational than the primary action. The border is thin but legible, and the typography stays in the same Nunito family so the two controls feel like siblings. The pair works because one control fills space and the other outlines it, giving the top-right area a simple two-state rhythm without introducing more UI forms.

### Portrait chips

The portrait chips are strict circles with no visible container treatment. They are scattered, loosely grouped, and intentionally detached from a grid. Some sit near the outer edges, some cluster around the hero area, and some float alone. Their job is to make the page feel like a living social space. Because the page is so sparse, every chip matters, so the round crop has to stay perfect and consistent. Turning these into cards would destroy the looseness that gives the page its character.

### Footer utility row and social links

The bright footer includes three text links, two small social glyphs, and a copyright line. The links sit low and left, while the copyright sits low and right, which gives the bottom edge a balanced but informal rhythm. The social icons are tiny and black, so they read as quiet marks rather than decorative badges. The pale screen keeps a similar bottom discipline, but the footer becomes even quieter because the scroll cue takes some of the visual attention. In both views, the footer must stay small enough to frame the page instead of ending it with a heavy block.

### Scroll cue

The pale screen includes a centered bottom cue with a downward arrow above or near the words “Scroll for more.” This is not a CTA pill and not a footer link. It is a directional prompt that tells the visitor the page continues below the fold. Its placement and spacing matter more than decoration. The cue should remain simple, narrow, and centered so it feels like a gentle continuation rather than a button.

## Responsive behavior

The core hierarchy should survive narrower widths. On smaller screens, the page should still read as a single stage, with the central message or wordmark remaining the dominant object and the actions staying compact. The safest adaptation is to reduce the amount of floating portrait imagery before shrinking the central type into an ordinary headline. The utility row should remain slim and should not turn into a stacked menu. The footer should stay low and quiet rather than becoming a multi-row site map.

The pale screen needs the same restraint. The wordmark should remain centered, the arrow should stay close to it, and the bottom cue should stay visible without competing with the mark. If the viewport gets tighter, preserve the emptiness around the center before introducing additional elements. Boxes, dividers, and extra panels would weaken the poster quality that makes the page recognizable.

## Practical implementation guidance

### Preserve

- Keep the homepage as a single open field with very little chrome.
- Keep the bright yellow stage as the strongest brand mode.
- Keep the pale screen as a separate composition built around the centered wordmark, arrow, and bottom cue.
- Keep the headline or wordmark large, bold, and isolated.
- Keep the main action as a white pill and the secondary action as an outlined pill.
- Keep portrait crops perfectly circular and visually unboxed.
- Keep footer links and social glyphs small enough to frame the page rather than dominate it.

### Avoid

- Avoid turning the homepage into a standard product landing page with feature columns or card stacks.
- Avoid gradients, shadows, or decorative borders that are not part of the screen.
- Avoid replacing the circle crops with square media containers.
- Avoid adding a second display family or a more ornate serif.
- Avoid heavy footer systems, multi-line navigation, or dense explanatory copy.
- Avoid introducing extra containers around the arrow or scroll cue; they need open space, not framing.

### Recommended build order

1. Lay in the full-field background and set the page to edge-to-edge framing.
2. Place the tiny top utility row and keep it visually secondary.
3. Build the center statement: headline on the bright screen, wordmark on the pale screen.
4. Add the main pill action and then the outlined companion action.
5. Place the circular portrait chips as loose accents on the bright screen.
6. Add the footer links, social glyphs, and copyright line.
7. Add the pale-screen arrow and bottom scroll cue.
8. Check the composition with fewer portrait chips before changing the central hierarchy.

### Accessibility

- Keep contrast strong for the headline, wordmark, and controls on both light and yellow fields.
- Make the pill actions large enough to target cleanly.
- Give portrait chips meaningful alternate text when they identify people or speakers.
- Preserve visible focus treatment on the utility links, buttons, and social links.
- Keep the scroll cue readable and separate from decorative content.
- Do not let the sparse composition reduce clarity; the center message and the primary action must stay obvious.

## Scope note

This guide covers the homepage poster treatments shown in the bright yellow screen and the pale wordmark screen, including the top utility row, the central headline or wordmark, the floating portrait chips, the footer links, the social glyphs, and the bottom scroll cue. It does not cover room interiors, logged-in states, mobile rearrangements, or later product pages.
