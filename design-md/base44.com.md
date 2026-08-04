# How base44.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/base44.com-design)

Last updated: 2026-08-04

## Captured pages

[![Five white pricing cards with black pill buttons and a pale enterprise band](https://pin.fontofweb.com/9559?format=jpg)](https://design.withfudge.com/share/pin-9559)

[Five white pricing cards with black pill buttons and a pale enterprise band](https://design.withfudge.com/share/pin-9559)

[![Lilac-to-peach 404 page with oversized black headline and one pill button](https://pin.fontofweb.com/9558?format=jpg)](https://design.withfudge.com/share/pin-9558)

[Lilac-to-peach 404 page with oversized black headline and one pill button](https://design.withfudge.com/share/pin-9558)

[![Warm orange stage with a centered cream card and black call to action](https://pin.fontofweb.com/7409?format=jpg)](https://design.withfudge.com/share/pin-7409)

[Warm orange stage with a centered cream card and black call to action](https://design.withfudge.com/share/pin-7409)

[![Split hero with a white text panel beside a dark task-board preview](https://pin.fontofweb.com/7408?format=jpg)](https://design.withfudge.com/share/pin-7408)

[Split hero with a white text panel beside a dark task-board preview](https://design.withfudge.com/share/pin-7408)

[![Sky-blue hero with centered prompt field and rounded suggestion chips](https://pin.fontofweb.com/7406?format=jpg)](https://design.withfudge.com/share/pin-7406)

[Sky-blue hero with centered prompt field and rounded suggestion chips](https://design.withfudge.com/share/pin-7406)

## Overview

Base44 reads as a calm idea-making brand rather than a hard utility dashboard. The page system prefers pale atmospheric fields, black display type, rounded white containers, and a single strong black action button. When it needs to prove depth, it drops in a dark task-board preview or a pricing matrix, but the surrounding frame stays light and open. The result is a site that can move from a sky-blue prompt hero to a peach-and-lilac error page without losing its voice. What ties the system together is the repeated use of Stk Miso for the large statements, Wix Madefor for reading copy, and pill-based controls for action.

The page is not built around photography. Instead, it uses gradient atmosphere, white cards, and embedded product screens to carry mood. That choice matters: the gradients are not decorative noise, they are the brand’s ambient space. The product screenshot becomes the dark counterweight inside that space, so the marketing shell feels airy while the product proof feels dense and purposeful.

## Colors

Base44’s palette is mostly monochrome text on white or near-white surfaces, with a few focused accents. Black is the main action color, used for the filled pills that anchor the homepage, pricing cards, and error page. Lime is the secondary accent, reserved for the top-bar invitation and other small emphasis points. Cool blue-gray tones build the hero atmosphere and the enterprise strip. Warm lilac, peach, sun, and orange are used for the 404 page and the orange promotional stages. Dark treatment is kept inside the product preview and the black pills, not as a full-page theme.

| token | value | use |
|---|---|---|
| `action` | `#000000` | Filled pills, primary calls to action, and dark utility chrome |
| `action-soft` | `#E5FF94` | Top-bar invitation and active lime emphasis |
| `ink` | `#000000` | Main headlines, prices, and body text on light surfaces |
| `muted-ink` | `#696F7B` | Supporting copy, short descriptions, and gray deck text |
| `quiet-ink` | `#878787` | Fine print, helper notes, and the smallest nonessential text |
| `canvas` | `#FFFFFF` | Header shell interior, pricing cards, and open page areas |
| `paper` | `#FAF9F7` | Soft off-white grounds and the 404 page base |
| `surface` | `#F2F1ED` | Neutral card ground and soft product-frame backing |
| `surface-sky` | `#DCE8E8` | Cool hero wash and calm transition fields |
| `surface-mist` | `#D5DFE0` | Soft neutral transition color in gradient blends |
| `surface-blue` | `#BFD7E0` | Enterprise band and cool lower-stage tint |
| `surface-lilac` | `#F0C4E3` | Upper glow in the 404 stage and pink-lilac wash areas |
| `surface-peach` | `#FFF0DE` | Warm lower glow in the 404 stage and peach transition areas |
| `surface-sun` | `#FBB439` | Warm glow at the base of the 404 page |
| `surface-flame` | `#FF7F47` | Orange gradient stop and warm accent flare |
| `surface-orange` | `#FFAE53` | Orange promotional glow and warm gradient body |
| `surface-lime` | `#E5FF94` | Bright lime highlight in controls and small accent bands |
| `border` | `#E6E6E6` | Hairline separators, shell edges, and card borders |
| `on-dark` | `#FFFFFF` | White text on the black pills and dark preview surfaces |

The light surfaces carry most of the page, so white and near-white need to stay distinct: `canvas` for the crisp card interior, `paper` for the soft stage base, and `surface` for the slightly warmer neutral field. The cool family keeps the hero calm instead of sterile. The warm family never becomes a broad brand fill; it is used as a glow, a stage wash, or a lower-band transition. That restraint is important because the page already has a strong black action shape. Too many saturated fills would break the balance between airy marketing and controlled product proof.

## Typography

Stk Miso drives the large statements. Wix Madefor handles most reading copy. Madefor supports navigation and button chrome. Arial appears only in the smallest utility text. The system also uses Applesystem for tiny shell labels, Times for the 404 fallback body, Bcnovaticacyr for the oversized 404 headline, and Wix Madefor Vf as the variable-source utility family. Wix Madefor and Wix Madefor Vf are the only families here with a listed Dalton Maag Ltd. credit. Font licensing for reuse should be checked separately.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Stk Miso | 4.9526rem | 400 | 1 | 0em | Largest homepage headline and the biggest orange-stage statement |
| `page-display` | Stk Miso | 4.2833rem | 400 | 0.9 | 0em | 404 headline and other oversized page-level statements |
| `section-display` | Stk Miso | 2.6771rem | 400 | 1.1 | 0em | Strong section leads and secondary hero statements |
| `card-display` | Stk Miso | 2.3311rem | 400 | 1.1 | 0em | Short feature titles and plan headings on compact panels |
| `body-large` | Wix Madefor | 1.3385rem | 400 | 1.4 | 0em | Hero deck text and longer supporting lines |
| `body` | Wix Madefor | 0.777rem | 400 | 1.6 | 0em | Pricing copy, body paragraphs, and explanatory text |
| `body-strong` | Wix Madefor | 0.777rem | 600 | 1.6 | 0em | Benefit lists and emphasized body copy |
| `button` | Madefor | 1rem | 400 | 1 | 0em | Black pill labels and toggle text |
| `nav` | Madefor | 1rem | 400 | 1 | 0em | Header links and utility navigation text |
| `label` | Wix Madefor | 0.9375rem | 500 | 1.4 | 0em | Small prompts, chips, and billing labels |
| `meta` | Arial | 0.625rem | 400 | 1 | 0em | Fine print and tiny utility notes |

| `legacy-display` | Bcnovaticacyr | 2.15rem | 500 | 1 | 0.1em | Oversized 404 headline treatment |
| `fallback-body` | Times | 1rem | 400 | 1 | 0em | Fallback body text on the 404 surface |
| `utility-vf` | Wix Madefor Vf | 1rem | 400 | 1 | 0em | Variable-source utility text and shell chrome |

The hierarchy is scale-led, not weight-led. The display family does most of the work by going very large, very black, and very open. Supporting text opens up enough to stay readable on the pale fields, but it never competes with the headline. Buttons stay close to body size, which keeps them readable without looking noisy. Chips and labels sit just below body size and lean on shape and color more than weight.

## Layout

### Top bar and hero

The header sits inside a white capsule with a thin border and fully rounded ends. The Base44 mark stays left, navigation stays centered, and the lime action sits at the far right. That layout keeps the bar light and floating rather than heavy. The hero below it is centered and spacious, with a large headline, a short deck line, and either a prompt field or a single call to action. Empty space is part of the composition. It lets the text feel more monumental and gives the gradient stage room to breathe.

### Pricing and enterprise strip

The pricing page uses a five-column grid of tall white cards. Each card is internally stacked: plan name, short description, large price, credit counts, a black pill, and a plan-highlights list. The cards are separated by soft borders and generous gutters rather than by shadow. That keeps the grid calm and readable. The enterprise strip below the cards is a full-width soft blue-gray band. It works like a closing rail: copy on the left, black button on the right, and very little else.

### Error stage

The 404 page is a full-bleed gradient field that moves from lilac into peach and then into warm orange. The copy is left aligned, with a small error label, a huge black headline, a short supporting line, and a single black pill. The large headline stays wide and simple so the gradient can do the framing work. There is no extra illustration or widgetry. The whole page is one composed moment.

### Product proof panel

The split feature panel uses a white copy block on the left and a dark task-board preview on the right. That contrast is the page’s strongest proof of product depth. The left side uses a modest step label and a large Stk Miso statement, followed by a readable paragraph and a black pill. The right side is dense, dark, and packed with colored task labels, which makes the product feel operational rather than decorative. The panel sits on a soft pastel field with restrained corner radii so the composition stays elegant, not bulky.

## Visual language

Base44 works by alternating cool and warm atmosphere. The hero leans cool and open, with pale blue-gray washes that feel like space around an idea. The 404 page flips warmer and more saturated, using lilac, peach, sun, and flame as a soft glow rather than a hard block of color. Orange is a brand spark, not a wall of color. It appears in the logo mark, in the warm stages, and in small controls, where it can act as a cue without taking over.

Corners are broad enough to soften the system but not so round that the page turns playful. The top bar and pills are fully rounded. Cards are only gently rounded. Borders are light and sparse, so the page feels cushioned without becoming shadow-heavy. The most visually dense surface is the dark product preview, and that density is important because it gives the marketing frames something to contrast against. The brand feels strongest when the light shell and the dark proof sit side by side.

## Components

### Floating top bar

- **Anatomy:** Brand mark, centered navigation, utility icon, lime action pill.
- **Surface:** White capsule with a thin gray border.
- **Typography:** Madefor for links and the pill label.
- **Shape:** Fully rounded ends; the whole bar reads like a floating rail.
- **Spacing:** Tight internal spacing, with enough side room that the bar feels suspended from the page edge.
- **Composition:** The action should remain the most visible item, but not so dominant that it breaks the calm header.

### Hero prompt field

- **Anatomy:** Big statement, short supporting line, wide prompt field or single action, rounded suggestion chips.
- **Surface:** Sky-blue, white, or peach-lilac gradient ground with a pale input field.
- **Typography:** Stk Miso for the statement; Wix Madefor for the deck line and prompt text.
- **Shape:** The field is softly rounded, and the chips are pill-shaped.
- **Spacing:** Generous vertical spacing around the field and chips keeps the center of the page airy.
- **Visible states:** The active chip or action can switch to lime, but the surrounding layout stays quiet.

### Pricing card

- **Anatomy:** Plan name, short pitch, large price, message credits, integration credits, primary button, highlights list.
- **Surface:** White card on a pale canvas with a hairline border.
- **Typography:** Stk Miso for the heading and price line; Wix Madefor for the support copy and list items.
- **Shape:** Soft, near-square card corners rather than a fully pill-shaped card.
- **Spacing:** Internal stacking is broad enough that each tier reads as a separate column from a distance.
- **Hierarchy:** The black pill sits below the price and before the feature list, so the action feels like a natural next step.

### Enterprise strip

- **Anatomy:** Short heading, one-sentence explanation, black button.
- **Surface:** Cool blue-gray band that spans the full width.
- **Typography:** Smaller Wix Madefor copy, not a second display headline.
- **Composition:** The copy stays on one side and the button stays on the other so the strip reads like a closing offer, not another card.
- **Visible states:** The strip should stay quiet; it is support, not a competing promotion.

### Split product panel

- **Anatomy:** Step label, large lead, explanatory paragraph, black button, dark task-board screenshot.
- **Surface:** White copy block against a pale pastel field; dark preview on the right.
- **Typography:** Stk Miso for the lead; Wix Madefor for the paragraph and button labels.
- **Shape:** Soft panel corners with a small amount of radius, not a chip-like pill.
- **Composition:** Keep the text left and the preview right so the eye reads explanation first, proof second.
- **Visible states:** The preview should keep its rich dark contrast and colored task tags, because that darkness is what makes the panel feel real.

### 404 stage

- **Anatomy:** Small error label, oversized headline, short supporting line, black back button.
- **Surface:** Lilac-to-peach-to-orange gradient field.
- **Typography:** Stk Miso for the headline; Wix Madefor for the supporting line; Madefor for the button.
- **Shape:** The button is a full pill, while the page itself stays open and uncluttered.
- **Hierarchy:** The headline should dominate the field; everything else should support it and leave the gradient visible.

## Responsive behavior

When the layout narrows, keep the order of meaning: headline, support line, action, then proof. The pricing grid should collapse from five columns to fewer columns without losing the internal stack of each card. The enterprise strip should become a stacked rail if needed, with the action below the text instead of beside it. The split product panel should move the dark preview beneath the explanation so the story still reads in the same order. The top bar should reduce link density before it gives up its floating-capsule character.

## Practical implementation guidance

### Preserve

- Keep one black action color and one lime accent; that pairing is the clearest part of the brand.
- Keep the large type in Stk Miso and let scale do the heavy lifting.
- Keep the page mostly white, pale, and open, with gradients used as atmosphere.
- Keep the product preview dark so the marketing shell has something meaningful to contrast against.
- Keep the cards tall, white, and lightly bordered rather than shadow-stacked.

### Avoid

- Avoid adding a second bright action color.
- Avoid heavy drop shadows, glassy overlays, or chrome that makes the page feel busy.
- Avoid shrinking the display type into a timid headline size.
- Avoid turning the orange and lilac ramps into flat single-color backdrops.
- Avoid tiny border radii on the cards; the system wants gentle softness, not sharp rectangles.

### Recommended build order

1. Build the floating top bar and the black and lime pill styles.
2. Establish the Stk Miso headline ladder and the Wix Madefor body copy.
3. Recreate the hero stage with its prompt field and chips.
4. Build the pricing grid and the enterprise strip.
5. Build the split product panel with the dark task-board preview.
6. Finish with the 404 stage and verify the gradient transitions.

### Accessibility

- Keep dark text on the pale surfaces and white text only on the black or strongly saturated controls.
- Keep the pill labels large enough to read comfortably at a glance.
- Preserve visible focus rings on the pills, links, and any prompt controls.
- Make the dark preview readable by retaining enough contrast in its own chrome.
- Keep the line lengths in the hero and 404 page short enough that the display type does not collapse into a wall of text.

## Scope note

This guide covers the desktop hero states, pricing page, split product panel, and 404 page shown in the supplied images. It does not define mobile breakpoints, hover states, motion, loading states, or the underlying app shell. Font licensing should be checked before reuse.
