# How app.superlist.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.superlist.com-design)

Last updated: 2026-08-04

## Captured pages

[![Violet hero stage with overlapping task cards and foreground photo](https://pin.fontofweb.com/8892?format=jpg)](https://design.withfudge.com/share/pin-8892)

[Violet hero stage with overlapping task cards and foreground photo](https://design.withfudge.com/share/pin-8892)

[![Centered dark sign-in rail with stacked pill login actions](https://pin.fontofweb.com/8891?format=jpg)](https://design.withfudge.com/share/pin-8891)

[Centered dark sign-in rail with stacked pill login actions](https://design.withfudge.com/share/pin-8891)

## Overview

Superlist’s landing surface is a split composition with two different jobs. The left side behaves like a theatrical product stage: a large violet field, a centered slogan, and a loose stack of overlapping task cards built around a portrait. The right side acts like the decision point: a dark, narrow rail that holds the app mark, a short sign-in message, helper copy, and three pill-shaped login actions. The whole page feels playful, but it stays controlled because the layout is simple and the surfaces are large.

The visual balance matters. The left panel carries energy through color, rotation, and layered cards. The right panel removes noise so the call to action reads clearly. That contrast gives the page a friendly tone without making it look decorative or casual. The page does not rely on dense interface chrome, many borders, or busy navigation. Instead, it uses big blocks, soft corners, and a clear split between inspiration and action.

## Colors

### Core palette

| token | value | role |
|---|---|---|
| `ink` | `#000000` | Main text on white cards, small marks, and dark icons |
| `shell` | `#232233` | The outer page field and the dark sign-in rail |

The exact token list is narrow on purpose. The retained interface colors are near-black ink and a deep blue-black shell. Around those fixed values, the page shows a bright violet stage, white card faces, and a small warm orange app mark. Those visible zones do the expressive work. The white cards keep task copy crisp, the violet panel carries the upbeat mood, and the dark rail quiets everything so the sign-in message can read instantly.

The relationship between light and dark surfaces is deliberate. Light surfaces are used for the card stack and button pills, so the content stays readable and friendly. Dark surfaces are used for framing, the right rail, and the outer canvas, so the page feels grounded and a little cinematic. The photo adds the strongest natural color and sits between those two systems as the most vivid object on the screen. The small orange mark works as a local accent rather than a broad secondary palette, which keeps the page from turning into a rainbow dashboard.

## Typography

The visible type reads as one rounded, geometric-looking sans used across the page. It is set with a strong weight jump: large display lines at the top, slightly smaller heading text in the rail, then calm body copy and compact button labels. The effect is soft and confident rather than corporate. The headline style is heavy and compact enough to sit neatly in two lines. The button text is shorter and more utility-like, but it still keeps the same friendly curvature.

No family is named in the supplied material, so the text system should be reproduced by scale, weight, and spacing rather than by attributing a specific font face.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | not specified | 2.75rem | 700 | 0.95 | -0.03em | Centered slogan on the violet stage |
| `section-display` | not specified | 1.75rem | 700 | 1 | -0.025em | Sign-in heading and strong task emphasis |
| `body` | not specified | 1rem | 400 | 1.45 | 0em | Helper text and task-card copy |
| `button-label` | not specified | 0.875rem | 600 | 1 | 0em | Google, Apple, and email pills |
| `microcopy` | not specified | 0.75rem | 500 | 1.3 | 0.01em | Small helper text and top strip cues |

The hierarchy depends on scale and weight more than on multiple families. The biggest lines are short and compressed, which makes the page feel designed around one thought at a time. Supporting copy stays modest and centered. The button labels are legible without feeling loud. That balance matters because the right rail contains very little content; if the type were any smaller or looser, the whole rail would weaken.

Font licensing is not established in the supplied material.

## Layout

The page is built as a wide split screen. The left panel takes most of the width and behaves like a framed canvas inset from the page edge. The right rail is narrower and vertically centered, so it reads like a deliberate destination rather than a sidebar afterthought. The canvas around both panels is dark, which makes the violet field and white cards feel brighter. A thin segmented line at the top adds a small progress cue and helps the page feel like a sequence of screens instead of a static poster.

Within the left stage, the composition is centered and layered. The headline sits high and centered. The card stack gathers beneath it with strong overlap and gentle rotation. The front photo card sits on top of the task cards and becomes the focal point. That overlap is doing the structural work that borders usually do in a conventional interface. It creates depth without adding chrome.

Within the right rail, the layout is linear and compressed. The orange app mark sits above the heading. The heading and helper copy are centered in a narrow column. The three login controls sit below with even vertical spacing and no competing decoration. The middle of the rail is the visual anchor, so the eye can move from mark to heading to action in one line.

The most important layout rule is contrast in density. The left side is layered and expressive; the right side is spare and resolved. The page stays readable because those two modes never compete for the same visual job. The stage is for mood and first impression. The rail is for the next step. Both are large enough to feel intentional, and both are simple enough to be understood quickly.

## Visual language

The page’s language is playful but disciplined. Rounded corners soften every major object: the outer stage, the white cards, the photo tile, and the login pills. Nothing is sharply boxed. Even the card stack feels lightweight because the rotation and overlap imply motion without actual animation.

Depth comes from stacking, not from heavy shadows. The cards sit over one another with slight offsets. The photo is a large rectangle with soft corners, and it breaks the stack in a way that feels energetic rather than chaotic. The sign-in rail uses opacity and contrast instead of outlines. That is why the page still feels calm even though it contains a strong saturated color and a busy card arrangement.

There is also a clear difference between display objects and utility objects. The display objects are the violet stage, the slogan, and the layered cards. The utility objects are the heading, helper copy, and sign-in pills. The first group is designed to attract attention; the second group is designed to close the loop. The page works because those two groups never fight each other.

The visual system depends on softness plus order. Softness comes from round corners, creamy white card surfaces, and a warm, approachable tone in the type. Order comes from center alignment, repeated pill shapes, and the narrow vertical rail. The combination keeps the screen from feeling either too playful or too utilitarian. It sits in the middle: polished, friendly, and clearly product-led.

## Components

### Hero stage

The hero stage is a large rounded rectangle filled with violet. It carries the main slogan near the top and a centered card cluster below it. The stage feels like a product billboard rather than an interface panel. Its job is not to explain every feature; it is to establish the product’s tone. The stage should keep generous internal padding, a clear center axis, and enough empty area around the card stack so the composition breathes.

### Stacked task cards

The stacked cards are the most specific product form on the page. They are white, softly rounded, and slightly rotated. Each card reads as a task sheet with a bold title, smaller metadata, and a few visible controls or chips. The stack is intentionally imperfect: edges peek out from behind one another, and the front card sits squarely on top. That overlap gives the page a sense of motion and depth even though the screen is static.

### Photo tile

The foreground photo tile is a frontmost square-ish image with soft corners. It sits on top of the task cards and cuts through the more abstract interface layers with a human face. This is the emotional anchor of the whole composition. It should stay larger than surrounding text cues and should preserve enough contrast so the face remains the clearest object in the stack.

### Sign-in rail

The sign-in rail is a dark vertical block with centered content. It uses a compact app mark, a strong heading, short helper copy, and a tidy list of pill buttons. The rail should feel calm and reserved. It should not compete with the hero stage; it should simply resolve the user’s next step. The copy stack is vertically tight enough to feel intentional, but it still leaves comfortable gaps around the buttons.

### Action pills

The login controls are horizontal pills with icon plus label. The first two are bright white and read as the strongest actions. The third is darker and visually quieter, so it feels secondary even though it is still present. That difference in surface tone is enough to create hierarchy without adding extra labels, borders, or side notes. The pills should stay wide, round, and centered.

### Top progress strip

The thin line at the top is a small but useful cue. It suggests a sequence and gives the page a sense of movement from one screen to another. It should remain understated: light, segmented, and visually secondary to the main split composition.

## Responsive behavior

On narrower screens, the split should collapse into a single vertical flow while keeping the same order of importance: slogan, card stack, sign-in message, then actions. The hero stage should remain the dominant visual block. The sign-in rail should keep its centered stack and simple button order. The card overlap may need to reduce so the task titles do not become cramped, but the layered feel should remain. The page should preserve generous internal padding and avoid letting the centered copy stretch too wide.

The key responsive rule is hierarchy, not literal geometry. The left stage and right rail do not need to keep their exact desktop widths, but the page should still feel like a product showcase followed by a decision point. Rounded corners, tall spacing, and a strong contrast between display and utility content should survive even when the layout stacks. If the photo and cards start to crowd each other, the stack can loosen before the rail does; the right-side action block should remain the clearest path to completion.

## Practical implementation guidance

### Preserve

- Keep the page as a two-part story: a vivid product stage and a quiet sign-in rail.
- Keep the stage centered around layered cards with one human image in front.
- Keep the right rail compact, centered, and free of extra decoration.
- Keep the palette narrow so the violet field and dark frame do the work.
- Keep the top cue light and secondary.

### Avoid

- Avoid adding extra accent hues or borders that flatten the layering.
- Avoid turning the rail into a busy form.
- Avoid reducing the card stack to a single flat panel.
- Avoid making the headline or pill labels more verbose.
- Avoid introducing decorative elements that compete with the photo.

### Recommended build order

1. Establish the dark outer frame and the split composition.
2. Build the violet stage and center the headline.
3. Add the overlapping task cards and preserve the tilt.
4. Place the photo as the foreground anchor.
5. Build the sign-in rail and align the mark, heading, helper copy, and buttons.
6. Finish by tuning the space between the two halves and the top cue.

### Accessibility

- Keep contrast strong on both the violet field and the dark rail.
- Keep button text readable without relying on icons alone.
- Preserve a visible focus state on every action.
- If the photo is decorative, keep it silent; if it carries meaning, add concise alternative text.
- Make sure the centered copy remains readable when the layout compresses.

## Scope note

This guide covers the desktop landing and sign-in surface for app.superlist.com: the violet hero stage, stacked task cards, photo tile, dark sign-in rail, and top progress strip. Mobile stacking, authenticated workspace screens, hover and focus styling, loading behavior, and error states are not included.
