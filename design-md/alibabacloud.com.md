# How alibabacloud.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/alibabacloud.com-design)

Last updated: 2026-08-04

## Captured pages

[![Lingma hero with stacked headline, split action buttons, and a translucent product illustration on the right](https://pin.fontofweb.com/4365?format=jpg)](https://design.withfudge.com/share/pin-4365)

[Lingma hero with stacked headline, split action buttons, and a translucent product illustration on the right](https://design.withfudge.com/share/pin-4365)

[![Cloud homepage hero with oversized headline, blue sweep, trust logos, and a dark cookie consent bar](https://pin.fontofweb.com/4364?format=jpg)](https://design.withfudge.com/share/pin-4364)

[Cloud homepage hero with oversized headline, blue sweep, trust logos, and a dark cookie consent bar](https://design.withfudge.com/share/pin-4364)

## Overview

Alibaba Cloud's public marketing pages use a strict enterprise tone: large Roboto headlines, black text on a white field, and one saturated blue action color that carries nearly all primary emphasis. The system feels technical without becoming dense. It gives the page room to breathe, then uses a few precise accents to keep the interface from turning bland. The hero copy is short and declarative, while the imagery carries the sense of scale.

The two supplied pages show the same design language in different registers. The general cloud homepage is broad and promotional, with a white stage, a blue-lilac light sweep, partner logos, and a dark consent bar that anchors the bottom edge. The Lingma product page is more product-specific: a left-aligned headline and action pair sit beside translucent 3D product art and a white quote panel. Together they show a system built on hierarchy, clean separation, and a strong preference for direct utility over ornament.

## Colors

The color system is narrow and disciplined. White and near-white surfaces dominate the page, black handles the primary reading layer, and blue marks every important action, selected tab, and brand-forward call to action. Gray is used for support text, borders, and low-priority metadata. Lilac and warm orange appear only as accents inside imagery, logo marks, or atmospheric gradients, so they should stay secondary in implementation. Dark charcoal is reserved for utility chrome such as the cookie bar, where it supports white text and keeps the message legible without competing with the main content.

| token | value | role |
|---|---|---|
| `action` | `#2056ED` | Primary button fill, active underline, and the dominant interactive blue |
| `action-alt` | `#3253E1` | Secondary blue used in the hero sweep and product emphasis |
| `ink` | `#000000` | Main headline and body text on light surfaces |
| `muted-ink` | `#5C5D5E` | Navigation, helper copy, and low-emphasis labels |
| `canvas` | `#FCFDFE` | Page background and large white stages |
| `panel` | `#F2F2F2` | Pale section fill and soft product-surface tint |
| `border` | `#C9C7D3` | Fine dividers, card outlines, and tab separators |
| `accent-lilac` | `#9DA0E8` | Decorative gradient light, product glow, and atmospheric highlights |
| `accent-warm` | `#FE6E0B` | Brand-orange mark and small attention accents |
| `surface-dark` | `#2C3033` | Cookie bar and other dark utility surfaces |

Light mode should stay overwhelmingly white, with blue as the only persistent signal color. Dark mode should appear only in utility or legal layers, not as a competing narrative section. Photographic and illustrative areas can borrow lilac and blue from the hero treatment, but those values should remain decorative rather than functional UI tokens. Orange should remain rare so the logo and brand marks keep their sharp contrast against the otherwise cool palette.

## Typography

Roboto carries the entire page. The hierarchy depends on size, weight, and spacing rather than on family changes, which keeps the system calm and efficient. The biggest headline uses a heavy weight and very tight leading. Supporting text opens slightly, but not so much that the page starts to feel editorial. Navigation and tab labels remain small and plain, which helps the main messages stay dominant. Roboto is credited to Christian Robertson and Google; confirm licensing before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Roboto | 4.5rem | 700 | 1.04 | -0.03em | Large page lead on the cloud and Lingma heroes |
| `section-display` | Roboto | 3rem | 700 | 1.06 | -0.025em | Secondary lead text and large product statements |
| `panel-title` | Roboto | 2rem | 700 | 1.1 | -0.02em | Card titles and smaller hero-led phrases |
| `body` | Roboto | 1rem | 400 | 1.5 | 0em | Main explanatory copy |
| `body-small` | Roboto | 0.875rem | 400 | 1.45 | 0em | Tabs, labels, helper text, and legal copy |
| `nav` | Roboto | 0.875rem | 400 | 1.3 | 0em | Global navigation and utility links |
| `button` | Roboto | 0.9375rem | 700 | 1 | 0em | Primary action text |
| `label` | Roboto | 0.75rem | 700 | 1.2 | 0.06em | Uppercase-ish micro labels and compact metadata |

The page should keep body copy restrained and readable, with headline blocks doing most of the expressive work. Use bold weight for the main call to action and headline lines only; keep supporting interface text regular so the hierarchy reads instantly. Spacing around text matters as much as letterforms here, because the brand relies on open white fields and controlled line breaks to project confidence.

## Layout

The layout is built around a wide desktop canvas with a left-heavy reading column and a right-side visual anchor. In the cloud homepage hero, the brand bar runs across the top, the main copy sits left of center, and the right side is reserved for a large atmospheric sweep plus a floating support or quote area. In the Lingma page, the same principle is compressed into a tighter product hero: headline, supporting sentence, and action buttons sit in a calm stack on the left, while the right side carries translucent product art that feels technical but light.

The system uses horizontal separation more than boxy containment. The top navigation is not a heavy shell; it behaves like a thin frame above a large content stage. Below the hero, a tab rail organizes the page into chapters. That rail is visually light, but it matters because it turns the long marketing page into a sequence of named sections. The selected tab is marked with blue text and a blue underline, which is clear without becoming loud.

Trust content is also laid out horizontally. The homepage shows a row of recognizable logos and short claims under the hero, which makes the page feel broad in scope without adding clutter. The bottom edge is claimed by a dark cookie bar, so the utility layer stays distinct from the main narrative. A small support bubble and callout sit to the right, detached from the central reading path, which keeps help available without breaking the composition.

White space is a structural tool, not empty decoration. It separates the headline from the image, the hero from the tab rail, and the trust row from the footer-like consent bar. The result is a page that reads as a sequence of precise, lightly framed modules rather than a dense product dashboard.

## Visual language

Alibaba Cloud uses a crisp, restrained visual language with just enough atmosphere to soften the enterprise tone. The background stays nearly white, but the page is not sterile: soft blue and lilac gradients, translucent product renders, and a subtle sky-like arc give the hero a sense of motion and depth. Those effects are kept wide and diffuse, so they read as environment rather than decoration.

The imagery is technical and polished. The Lingma page uses floating translucent blocks and a glowing internal core to suggest software infrastructure without literal screenshots. The homepage hero uses a broad color sweep that feels cloud-like, matching the brand’s scale messaging. Neither page leans on illustration overload. Instead, each image is treated as a single anchor that supports the headline and button pair.

Chrome stays minimal. Card edges are thin, shadows are weak or absent, and surfaces are mostly flat. The few strong surfaces — the dark consent bar and the white quote panel — derive their power from contrast, not from depth effects. This keeps the page feeling engineered and deliberate. It also makes the blue action color feel more authoritative, because the surrounding system is otherwise so quiet.

## Components

### Top navigation

**Anatomy:** A left-aligned brand mark, a horizontal set of section links, then utility items such as search, language, docs, contact, console, an avatar, and a strong trial button.  
**Surface:** White, with a thin divider line rather than a raised header.  
**Typography:** Small Roboto regular, with the main call to action set heavier so it reads like a terminal choice.  
**Shape:** Mostly rectangular, with a small pill treatment on the search chip and a compact square feel on the far-right trial action.  
**Composition:** The row is evenly distributed and calm, leaving the hero to do the selling.  
**Visible states:** The selected subsection in the lower tab rail is blue and underlined; that cue should be reused wherever the page needs chapter-level emphasis.

### Hero masthead

**Anatomy:** Large stacked headline, a short supporting sentence, and one or two adjacent actions. The Lingma page adds a quote card and translucent product art.  
**Surface:** Pure white or near-white, with one atmospheric blue-lilac sweep on the broader cloud page.  
**Typography:** Heavy Roboto display type, compact and assertive.  
**Shape:** Open stage with very little framing.  
**Spacing:** Generous gap between headline, body copy, and buttons; the message needs to sit in breathing room.  
**Composition:** Text should stay on the left edge of the visual field, with the product render or support card balancing the right side.  
**Variants:** Broad marketing hero and product-specific hero; both rely on the same left-copy/right-visual logic.

### Primary action

**Anatomy:** Solid blue fill, white text, compact padding, and a simple rectangle or lightly rounded rectangle.  
**Surface:** Unambiguous and flat; the button should not compete with shadow-heavy UI.  
**Typography:** Bold Roboto at small-to-medium button scale.  
**Shape:** Slight corner radius only; the button should feel precise, not pill-shaped.  
**Spacing:** Enough horizontal padding to keep the label from feeling cramped, with moderate vertical padding for a firm click target.  
**Hierarchy:** This is the one color the page can use confidently for primary decisions, selected states, and obvious next steps.

### Trust strip and promo row

**Anatomy:** A line of partner marks, short claims, and a set of compact promotional tiles beneath the hero.  
**Surface:** White, with low-contrast text and minimal separation.  
**Typography:** Small regular text for claims; brand marks retain their own identity.  
**Composition:** Horizontal and orderly, almost editorial in rhythm, so the row extends breadth without raising noise.  
**Visible states:** Any featured offer should use a small, controlled highlight rather than a full-surface takeover.

### Quote and support surfaces

**Anatomy:** The Lingma quote panel and the homepage support bubble are both small utility-side structures that sit away from the main headline path.  
**Surface:** The quote panel is white with quiet type; the consent bar is dark charcoal with white text and compact controls.  
**Typography:** Short, readable Roboto lines; attribution and metadata stay smaller than the main claim.  
**Shape:** Light rounding on support panels, hard edges on the cookie bar.  
**Composition:** Keep these elements secondary. They should be easy to find, but they must not steal the page’s main rhythm.

## Responsive behavior

On narrower screens, the layout should collapse in reading order rather than in decorative order. The headline must stay first, followed by the supporting sentence, then the action cluster, then the visual element. The right-side product art can crop aggressively, but the headline should remain the first thing the user understands. The tab rail should remain legible; if labels no longer fit comfortably, it should wrap or scroll cleanly rather than shrinking into unreadable compression. The trust row can stack into a simpler list, and the support bubble should move out of the main CTA cluster so it does not block the path to the hero action.

The cookie bar should remain readable and usable on small widths. If its controls no longer fit in one row, stack them below the message instead of squeezing the text. The overall rule is simple: keep the page open, keep the primary action visible, and let visual effects shrink before the headline does.

## Practical implementation guidance

### Preserve

- Keep the blue action color as the only persistent interaction signal.
- Use a white, spacious stage for the lead message.
- Keep Roboto the only type family and let scale do the work.
- Preserve the thin, low-noise header and tab rail.
- Keep utility chrome visually separate from the marketing message.

### Avoid

- Avoid heavy shadows, thick borders, or card stacks that make the page feel transactional.
- Avoid spreading lilac and orange across general UI controls; they should stay accent-only.
- Avoid dense multi-column content near the hero.
- Avoid oversized rounded corners on buttons and chrome.
- Avoid shrinking the main headline into the same visual weight as nav or support text.

### Recommended build order

1. Build the top navigation and trial button.
2. Establish the hero stage, headline scale, and primary action.
3. Add the tab rail and trust strip beneath the hero.
4. Layer in the product art, quote panel, and support bubble.
5. Finish the cookie bar and other dark utility surfaces.
6. Tune spacing and type scale before adding any extra promotional surfaces.

### Accessibility

- Keep the black-on-white contrast high for all headline and body copy.
- Ensure the blue action has enough contrast against white and near-white backgrounds.
- Give the tab rail a clear active indicator beyond color alone, such as the underline already shown here.
- Provide descriptive text for the product render when it conveys content, and hide it from assistive tech when it is purely decorative.
- Keep focus styles visible on buttons, tabs, consent controls, and support triggers.

## Scope note

This guide covers the desktop marketing surfaces shown here: the cloud homepage hero, the Lingma product hero, the chapter tabs, the trust and promo row, the cookie bar, and the support prompt. Measurements are practical adaptation targets. It does not include mobile layouts, internal console screens, animation rules, or unseen interaction states.
