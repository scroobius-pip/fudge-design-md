# How actualidea.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/actualidea.com-design)

Last updated: 2026-08-03

## Captured pages

[![Warm portrait spread with cyan vertical headline and dense caption blocks](https://pin.fontofweb.com/8697?format=jpg)](https://design.withfudge.com/share/pin-8697)

[Warm portrait spread with cyan vertical headline and dense caption blocks](https://design.withfudge.com/share/pin-8697)

[![Bright seated figure beside oversized pink editorial lettering](https://pin.fontofweb.com/8696?format=jpg)](https://design.withfudge.com/share/pin-8696)

[Bright seated figure beside oversized pink editorial lettering](https://design.withfudge.com/share/pin-8696)

[![Black-and-white spread with sunglasses, fashion portrait, and quiet captions](https://pin.fontofweb.com/8695?format=jpg)](https://design.withfudge.com/share/pin-8695)

[Black-and-white spread with sunglasses, fashion portrait, and quiet captions](https://design.withfudge.com/share/pin-8695)

[![Two-page fashion spread mixing a close portrait with oversized white type](https://pin.fontofweb.com/8694?format=jpg)](https://design.withfudge.com/share/pin-8694)

[Two-page fashion spread mixing a close portrait with oversized white type](https://design.withfudge.com/share/pin-8694)

[![Rainbow-striped slogan spread with huge white typography crossing the page](https://pin.fontofweb.com/8693?format=jpg)](https://design.withfudge.com/share/pin-8693)

[Rainbow-striped slogan spread with huge white typography crossing the page](https://design.withfudge.com/share/pin-8693)

## Overview

actualidea.com presents an editorial portfolio system built around magazine spreads rather than conventional web cards. The page field is white, the chrome is sparse, and the spreads carry nearly all of the personality. That balance is what makes the layout feel printed: the interface stays quiet enough that the artwork can be loud, whether the page is warm and photographic, stark and monochrome, or saturated with pink, cyan, and rainbow stripes.

The design language depends on contrast. Large image blocks and oversized words get room to breathe. Small labels and metadata sit close to the content they describe. The result is not minimal for its own sake; it is edited. Each spread feels placed into a clean frame, with the surrounding page acting as a margin system rather than a container full of widgets.

The system should therefore reproduce restraint first. Use white as the default field, charcoal for normal reading, black for the deepest marks, and red only for compact signals that need to stand out. The page should feel like a portfolio of printed spreads translated with care into the browser.

## Colors

The color system is narrow on purpose. White is the dominant canvas and gives the spreads their air. Charcoal is the main reading color because it feels closer to print ink than to a hard UI black. Pure black appears as the strongest possible tone for deep rules, reversed text, or the sharpest graphic marks. Red is the single action color and should stay small, decisive, and rare.

The spread imagery supplies the rest of the color story. Some pages lean warm and skin-toned. Others push hot pink, cyan, and neon-like contrast. One layout is nearly black and white. Another runs through a rainbow striping pattern with giant white type. Those color bursts belong to the content layer, not to reusable interface tokens. The chrome should stay stable so the spreads can change mood without forcing a new UI palette every time.

This means the interface never needs a broad semantic color scale. The page does not require a separate family of success, warning, or neutral brand tones to feel complete. White, charcoal, black, and red are enough for the structural layer. Anything more would blur the boundary between the page frame and the editorial material inside it.

## Typography

The page uses two material families and two visible modes of typographic behavior. Applesystem handles the ordinary reading voice: captions, body text, and the neutral interface copy that supports the spreads. Helvetica Neue handles the smallest labels and badge-like fragments. That split gives the layout a magazine rhythm: the body stays calm and readable, while the label layer becomes clipped and compact.

No designer or vendor attribution is claimed here because the supplied credit entries for both families are empty. That matters because the typography should be described only as far as the packet supports it. The system can acknowledge the two families, their sizes, and their roles, but it should not invent licensing or authorship details.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Applesystem | 1rem | 400 | 1 | 0em | Main page copy and neutral descriptive text |
| section-display | Applesystem | 1rem | 400 | 0.95 | -0.01em | Short editorial lines that need a slightly tighter reading color |
| deck | Applesystem | 1rem | 400 | 1.1 | 0em | Supporting text that should feel airier than body copy |
| legal-copy | Applesystem | 1rem | 400 | 1.25 | 0em | Small notes, longer captions, and dense explanatory matter |
| label | Helvetica Neue | 0.6875rem | 700 | 1.818 | 0.04em | Tiny chips, page numbers, and compact metadata |

The hierarchy relies less on many sizes than on the relationship between the page chrome and the artwork. The body family stays at a steady 16px, while the label family stays at 11px. That contrast is enough to separate the editorial matter from the page furniture. The system should keep that range tight so the interface never starts to feel like an app dashboard or a generic marketing site.

## Layout

The layout behaves like a sequence of mounted spreads on a white wall. Each composition needs generous perimeter space so it can read as a single printed object rather than a tile. The page should keep the margins broad and the internal spacing disciplined. That is what lets a fashion portrait, a giant headline, and a few small lines of copy coexist without collapsing into clutter.

Asymmetry is a recurring pattern. Some spreads split attention between image and type. Others place the subject almost edge to edge and then push the text to the side or into a corner. The best layouts do not force everything into a grid with equal weight. Instead, they let one element dominate while the rest support it quietly. That approach should carry into the web version. The page should allow large image blocks, large words, and small labels to sit in different visual registers while still feeling part of one system.

Vertical rhythm matters more than decorative separators. Large gaps between spreads create the feeling of distinct pages turning in sequence. Smaller gaps belong inside the spread itself, where captions and micro labels sit close to their related material. This creates a layered reading order: first the big image or big word, then the local caption, then the quieter metadata. The spacing values in the front matter support that structure by separating the stable page frame from the stronger spread offsets.

The layout should also preserve the sense of page edges. Rounded corners appear only where they help a compact label or framed item feel finished. The main page field should remain calm and mostly square. That keeps the system editorial rather than soft or app-like. A little curvature on small elements is enough; the overall layout should still feel like a print stack laid into a browser.

## Visual language

The visual language is built from the tension between restraint and spectacle. The chrome is spare, almost absent, while the spreads are bold and theatrical. Portraits often occupy most of the surface. Large type may cross the fold, wrap around a figure, or sit over a field of color with minimal margin. Some spreads use tiny caption blocks that feel like magazine copy pasted into the page with precision. Others turn the headline into the image itself by making the words physically dominate the composition.

Color behaves in two distinct modes. In the interface, color is controlled and repetitive. In the spreads, color is expressive and changeable. Warm skin tones, magenta title blocks, cyan vertical headings, grayscale photography, and rainbow bands all appear as part of the content vocabulary. The page frame should not try to unify those moods. Its job is to make them feel deliberate by keeping the surrounding structure neutral.

Shape language is equally restrained. Large rectangular fields, full-bleed imagery, and thin label chips make up most of the system. The page does not depend on shadows or glossy effects. Depth comes from contrast, paper-like whitespace, and the physicality of the spreads themselves. The result feels close to an editorial art direction board: one decisive image, one strong line of type, and a few smaller marks to complete the page.

## Components

### Spread frame

- **Anatomy:** A single large editorial page or spread that carries the main visual narrative.
- **Surface:** Flat white field with no heavy background treatment.
- **Composition:** The frame should leave enough room around the spread that the content feels mounted rather than boxed in.
- **Hierarchy:** The image or headline is the primary read; any supporting copy remains secondary and compact.
- **Shape:** Keep the frame mostly square and calm. Small rounding is acceptable only when it helps a nested item feel finished.

### Editorial spread

- **Anatomy:** Large image area, oversized internal type, and supporting caption blocks or page markers.
- **Typography:** Internal display words can be huge and expressive, while the reusable chrome stays in Applesystem and Helvetica Neue.
- **Composition:** Let type cross the fold or overlap imagery when that is part of the spread’s personality. The web frame should remain quiet enough that the spread can carry the drama.
- **Variants:** Warm portrait-led spreads, monochrome fashion spreads, and high-saturation poster-like spreads all belong to the same family.
- **Visible states:** The spread should still feel complete when the typography is sparse and the image does most of the work.

### Label chip

- **Anatomy:** A compact rounded pill with short bold text.
- **Surface:** Red fill with white label text.
- **Typography:** Helvetica Neue at 11px, bold, with enough leading to keep the text crisp.
- **Shape:** 10px radius gives the chip a printed, clipped edge rather than a soft badge look.
- **Spacing:** Padding should stay small and deliberate so the chip reads as a mark, not as a button row.
- **Use:** Best for tiny category notes, short tags, or page markers that must remain subordinate.

### Metadata line

- **Anatomy:** Small captions, page numbers, short credits, and compact explanatory text.
- **Typography:** Use Applesystem for plain copy and Helvetica Neue for the most compact fragments.
- **Color:** Charcoal is the safe default; black is reserved for stronger contrast or denser graphic moments.
- **Spacing:** Keep the line close to the material it describes, with enough separation to feel printed.
- **Hierarchy:** This layer should support the spread, not compete with it.

### Sparse chrome

- **Anatomy:** Identity, a few links, and minimal structural marks.
- **Treatment:** No heavy border systems, no dense nav blocks, and no decorative stacks of controls.
- **Color:** Black, charcoal, white, and the red accent are enough.
- **Role:** Frame the work without pulling focus away from it.
- **Visible states:** Quiet and stable, with the same restraint as the rest of the page.

## Responsive behavior

When the layout tightens, the same reading order should hold: major image or headline first, then supporting copy, then the small label layer. The white field still needs to act as breathing room, even if the spreads stack into a single column. If the content must compress, it should compress vertically before it compresses horizontally. That keeps the page feeling like a spread sequence rather than a poster wall.

The typography should scale conservatively. The 16px body copy can remain close to its base size so the page stays readable. The 11px label style should remain legible and not turn into a decorative afterthought. On narrower widths, the layout should favor stacking and regrouping over squeezing multiple spreads into a dense grid. That preserves the printed reading order and keeps the editorial tone intact.

Color also needs discipline at small sizes. If a spread already uses bright pink, cyan, or rainbow bands, the surrounding chrome should stay white, black, or charcoal so the page does not become noisy. If a label or control sits on top of busy imagery, it should use strong contrast first and decorative color second. The interface must remain legible even when the content itself is loud.

## Practical implementation guidance

### Preserve

- Keep the white page field as the default stage.
- Use red as the only persistent action color.
- Let photography, large words, and printed captions supply most of the energy.
- Keep labels tiny, bold, and tightly framed.
- Preserve wide margins and long pauses between major blocks.

### Avoid

- Avoid app-like card grids.
- Avoid extra accent colors in the chrome.
- Avoid shadows, glossy gradients, and soft decorative blobs.
- Avoid oversized buttons that overpower the spreads.
- Avoid packing the page so tightly that the editorial rhythm disappears.

### Recommended build order

1. Establish the white field and the spacing rhythm.
2. Set the Applesystem body styles and the Helvetica Neue label role.
3. Build the red label chip and the quiet chrome.
4. Place the editorial spreads as the main content blocks.
5. Tune margins, corner treatment, and vertical gaps around the image proportions.
6. Check that the page still feels like a magazine spread sequence when the content stacks.

### Accessibility

- Keep charcoal text dark enough against white for small labels and page numbers.
- Make sure the red chip supports white text with strong contrast.
- Do not rely on color alone when a spread uses vivid pink or rainbow imagery.
- Provide clear focus styles on links and chips.
- If an important message sits inside the artwork, repeat it in adjacent copy or alternate text.

## Scope note

This guide covers the main editorial portfolio surface for actualidea.com: the white page field, the spread layouts, the label chips, and the sparse chrome. It does not define alternate article templates, motion, or any layout rules beyond the supplied page compositions. Spacing and radius values are written in rem from the 16px root.
