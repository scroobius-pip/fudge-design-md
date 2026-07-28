# How awwwards.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/awwwards.com-design)

Last updated: 2026-07-28

## Design character

Awwwards is a **gallery-first awards platform**: pale gray canvas, monumental black display type, and a thin utility header that stays out of the way of the Site of the Day. The product’s personality is editorial confidence—oversized titles, soft white cards, and just enough cyan accent to mark “live” actions without turning the chrome colorful.

What should survive adaptation:

- **Monumental centered headlines** on a cool light stage.
- **Quiet top navigation** with search, text links, and a solid dark “Be Pro” CTA.
- **Soft elevated white cards** for jobs, nominees, and listings.
- **Cyan as a sparse accent** (Post a Job, Hiring badge)—not a full secondary palette wash.
- Submitted work and SOTD imagery carry the spectacle; the shell stays disciplined.

## Foundations

### Color

| Token | Value | Use |
|-------|-------|-----|
| Primary ink | `#222222` | Body and UI text role |
| Canvas | cool light gray (~`#f3f3f3` visually) | Page background behind cards |
| Surface | white | Job cards, panels, search field |
| Inverse CTA | near-black | “Be Pro”, primary dark pills |
| Accent | bright cyan/sky | “Post a Job”, hiring chip, select links |

Keep the system **almost monochrome**. Accent appears on intentional conversion controls and status chips only.

### Typography

No declared family was captured. Hierarchy is unmistakable:

- **Display**: extremely large condensed/grotesk titles (jobs board and SOTD nameplates can exceed 100px optically), weight ~400, tight leading.
- **Section titles / card titles**: ~18–20px, weights 300–600.
- **Meta / UI**: ~14px light (300) with generous line-height (~28px) for nav and secondary lines.
- Tone is **international modernist grotesque**—neutral, tight, high-contrast against the pale stage.

### Spacing and layout

- Dominant padding rhythm around **16px and 30px** on listing surfaces.
- Jobs board uses a **four-up card row** with equal white cards and internal meta footers.
- Home SOTD stacks: small meta row → huge title → studio credit → full-bleed preview with an overlaid mini-nav dock.
- Header is full-width with logo, primary nav, centered search, and trailing auth/CTAs.
- Content feels moderately dense on jobs; home is more theatrical and open above the fold.

## Visual language

- **Radii**: ~**8px** on cards and controls; occasional ~14px on larger chips; rare 4px details.
- **Borders**: light structural dividers inside cards (location/website rows) rather than heavy outer frames.
- **Shadows**: soft card lift on white panels over gray canvas—low drama.
- **Imagery**: SOTD and site case pages are image-led; the chrome never competes with the nominated work.
- **Promo strip**: thin dark marquee above the header on some views (Creative Pass) adds a second horizontal band without changing the core palette.

## Components and states

1. **Global header** — `W.` mark, Explore/Directory/Academy/Jobs/Market, search field, Log in / Sign Up, black **Be Pro**, outlined or cyan **Submit/Post** actions.
2. **SOTD hero** — score/date meta, oversized title, studio link, large artwork, floating dock with Visit SOTD.
3. **Jobs board** — display title with playful “HIRING” sticker, filter chips (Category/Type/Country), card grid with logo, role, blurb, location/website rows, relative time + arrow.
4. **Filters** — soft pill dropdowns and a compact filter count control.
5. **Site case chrome** — award context around third-party site presentations (multiple site paths in the set).

Visible states in stills: default cards, remote badges, active cyan CTAs. No dark-theme shell in these captures.

## Responsive behavior

Captures span wide desktop (~1913px home, ~1711px jobs) down to narrower site embeds (~478–560px). The **jobs multi-column grid and oversized display type are desktop-forward**; narrow captures are mostly site-detail crops rather than a full mobile system. Do not invent breakpoint rules beyond “cards will need to stack as width collapses.”

## Practical guidance

**Preserve**

- Pale gray stage + white cards + black type.
- One dark solid CTA and one cyan accent CTA, not a rainbow of buttons.
- Oversized editorial titles as the brand move.
- Card footers with quiet meta rows instead of loud badges everywhere.

**Avoid**

- Saturating the UI with award-gold or multi-brand gradients in the chrome.
- Shrinking display type into generic SaaS marketing scale.
- Heavy drop shadows or glassmorphism on listing cards.
- Claiming a specific licensed font family without a fresh source of truth.

## Scope note

Eight captures: home SOTD, jobs board, FAQs, and several site/award detail views (OceanX, Actbe, Locomotive-related pages). Strongest system signal is home + jobs. Structured color roles are thin (primary ink `#222222`); cyan/gray values above are visual reads from screenshots. Font families undeclared.

## Captured pages

[![Home — Site of the Day hero](https://pin.fontofweb.com/3078?format=jpg)](https://design.withfudge.com/share/pin-3078)

[Home — Site of the Day hero](https://design.withfudge.com/share/pin-3078)

[![Jobs board](https://pin.fontofweb.com/6995?format=jpg)](https://design.withfudge.com/share/pin-6995)

[Jobs board](https://design.withfudge.com/share/pin-6995)

[![Site of the Day — OceanX case](https://pin.fontofweb.com/6996?format=jpg)](https://design.withfudge.com/share/pin-6996)

[Site of the Day — OceanX case](https://design.withfudge.com/share/pin-6996)

[![Honorable Mention — Actbe](https://pin.fontofweb.com/5789?format=jpg)](https://design.withfudge.com/share/pin-5789)

[Honorable Mention — Actbe](https://design.withfudge.com/share/pin-5789)

[![FAQs](https://pin.fontofweb.com/243?format=jpg)](https://design.withfudge.com/share/pin-243)

[FAQs](https://design.withfudge.com/share/pin-243)

## Colors

- `#222222`
- `#ffffff`
- `#f3f3f3`
- `#0a0a0a`
