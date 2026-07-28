# How gemini.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gemini.google-design)

Last updated: 2026-07-28

## Design character

gemini.google marketing pages feel like Google product storytelling: vast white or soft-gradient canvases, centered product proof (Gemini UI frames, plan cards), and calm Material-adjacent chrome. The subscriptions surface is a pricing theater—three tall plan cards, soft rounded containers, and a single filled primary CTA per card—while image-generation overview pages lean into large illustrative product shots and generous whitespace.

## Foundations

### Color

Structured role colors were not returned for these marketing captures. Visually: white/very light canvas, near-black headlines, medium gray body, Google blue primary buttons, and soft multi-stop gradients or product imagery for atmosphere. Keep the system airy; color is mostly product UI inside frames, not loud brand blocks.

### Typography

- 16px / weight 400 (undeclared UI sans, line-height 24px) — seen ~811 times
- 16px / weight 400 (undeclared UI sans, line-height 22px) — seen ~80 times
- 48px / weight 500 (undeclared UI sans, line-height 53px) — seen ~40 times
- 20px / weight 500 (undeclared UI sans, line-height 28px) — seen ~36 times
- 18px / weight 500 (undeclared UI sans, line-height 25px) — seen ~8 times
- 16px / weight 500 (undeclared UI sans, line-height 24px) — seen ~7 times

Marketing body locks to 16px regular. Emphasis and plan names step to 18–20px medium; hero/display clusters around 48px medium. Weight stays mostly 400–500—friendly, not black-heavy.

### Spacing and layout

- padding-left: 368px (×266)
- padding-right: 368px (×266)
- margin-bottom: 56px (×88)
- padding-bottom: 10px (×88)
- padding-left: 16px (×88)
- padding-right: 16px (×88)
- margin-top: 60px (×48)
- margin-left: 160px (×40)

Large horizontal padding (including very wide side padding on some frames) centers content. Plan cards sit in an even three-up row with generous internal padding. Sections breathe; this is anti-dense compared with news or dashboards.

## Visual language

- 100px (×8)
- 4px (×2)
- 2px (×1)

Pill radii (~100px) appear on chips/CTAs; small 2–4px radii on tighter controls. Cards use soft large rounding. Borders are light 1px separators more than hard frames. Product screenshots float in rounded device/app chrome.

## Components and states

- **Plan cards** with price, feature list, and primary button
- **Filled blue CTA** vs quiet text links
- **Product frame** showcasing Gemini UI
- **Feature rows** with icon + short copy
- **Marketing nav** with restrained links

Do not invent hover/focus specifics beyond the static filled vs outline button contrast visible in screenshots.

## Responsive behavior

Multiple widths appear across subscriptions and overview captures (roughly 1400–2048px wide crops). Layout stays centered marketing columns; expect cards to stack on narrower viewports while type scale remains marketing-large.

## Practical guidance

**Preserve**
- Airy white marketing canvas and centered proof
- Soft pills + large rounded cards
- 16px body with ~48px medium display
- One clear primary CTA per card

**Avoid**
- Dark “AI terminal” skins on these marketing URLs
- Dense admin tables or harsh black borders
- Over-saturated non-Google accent rainbows in chrome

## Scope note

Eight captures across `/subscriptions/` and `/overview/image-generation/`. App shell styling lives more on gemini.google.com; this guide is the public marketing system.

## Captured pages

[![Google AI Pro and Ultra — get access to Gemini 3 Pro and more](https://pin.fontofweb.com/6640?format=jpg)](https://design.withfudge.com/share/pin-6640)

[Google AI Pro and Ultra — get access to Gemini 3 Pro and more](https://design.withfudge.com/share/pin-6640)

[![Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://pin.fontofweb.com/4978?format=jpg)](https://design.withfudge.com/share/pin-4978)

[Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://design.withfudge.com/share/pin-4978)

[![Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://pin.fontofweb.com/4977?format=jpg)](https://design.withfudge.com/share/pin-4977)

[Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://design.withfudge.com/share/pin-4977)

[![Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://pin.fontofweb.com/4976?format=jpg)](https://design.withfudge.com/share/pin-4976)

[Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://design.withfudge.com/share/pin-4976)

[![Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://pin.fontofweb.com/4975?format=jpg)](https://design.withfudge.com/share/pin-4975)

[Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://design.withfudge.com/share/pin-4975)

[![Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://pin.fontofweb.com/4442?format=jpg)](https://design.withfudge.com/share/pin-4442)

[Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://design.withfudge.com/share/pin-4442)

[![Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://pin.fontofweb.com/4441?format=jpg)](https://design.withfudge.com/share/pin-4441)

[Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://design.withfudge.com/share/pin-4441)

[![Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://pin.fontofweb.com/4440?format=jpg)](https://design.withfudge.com/share/pin-4440)

[Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://design.withfudge.com/share/pin-4440)
