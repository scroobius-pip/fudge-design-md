# How account.nothing.tech is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/account.nothing.tech-design)

Last updated: 2026-07-28

## Design character

Nothing’s account login is **radical minimalism**. A pale gray field with a faint dot grid holds a single centered white card. Typography is quiet, buttons are soft gray pills, and brand presence is a tiny vertical wordmark. It feels like hardware packaging: empty air, precise alignment, almost no ink.

What should survive adaptation:
- Vast empty canvas with subtle texture (dot grid)
- One floating white authentication card
- Soft gray disabled/primary pills until valid input
- Near-invisible brand mark

## Foundations

### Color

Structured hex roles were empty; visual system:
- Canvas: light gray with dot pattern
- Card: white
- Text: near-black
- Controls: light gray fills, darker label text
- Circular icon buttons for Apple/Google in pale gray

### Typography

- Title “Sign in” ~**32px**, very light weight (**100**) — distinctive thin display
- Body/UI **14–16px** weights 400–500
- Fine print ~**11–14px**
- Line-heights tight to moderate (16–20px on UI)

### Spacing and layout

- Card padding ~**22–24px**
- Vertical gaps ~**32–52px** around groups
- Input radius ~**16px**; large pill radii on buttons (including near-full pills)
- Perfectly centered single column

## Visual language

- Soft shadows under the card (subtle)
- Hairline input borders
- Circular OAuth buttons
- Top-right utility icons (theme/close) as pale circles
- No photography, no illustration noise

## Components and states

1. Back / close utilities  
2. Centered auth card  
3. Email + password fields  
4. Primary Sign in (gray until active) + OAuth icon buttons  
5. Create account secondary pill  
6. Legal microcopy  

Disabled/soft primary is visible; do not invent error styles beyond standard form semantics.

## Responsive behavior

Desktop (~1712) and narrower (~599) login captures. Keep the card centered and reduce canvas chrome; avoid expanding into multi-column marketing.

## Practical guidance

**Preserve:** empty dotted field, thin title, gray pills, single card.  
**Avoid:** dark-mode default swap without redesign, loud brand gradients, dense help sidebars.

## Scope note

Two captures, both `/login/` at different widths. Guidance is visual + measured type/spacing/radii; named colors/families limited.

## Captured pages

[![Nothing Account - Login](https://pin.fontofweb.com/8561?format=jpg)](https://design.withfudge.com/share/pin-8561)

[Nothing Account - Login](https://design.withfudge.com/share/pin-8561)

[![Nothing Account - Login](https://pin.fontofweb.com/3303?format=jpg)](https://design.withfudge.com/share/pin-3303)

[Nothing Account - Login](https://design.withfudge.com/share/pin-3303)
