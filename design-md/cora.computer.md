# How cora.computer is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cora.computer-design)

Last updated: 2026-07-28

## Design character

Cora is a **calm, high-craft consumer product brand**: soft off-white canvas, near-black type, and a single black pill CTA. The marketing site feels editorial—generous whitespace, light display headlines, and product photography (laptop inbox mock, iPhone lock-screen widgets) floating in open space. Auth screens keep the same quiet system: white field, simple form stack, black primary button.

What should survive adaptation:

- **Off-white / paper canvas** with pure black text and CTAs
- **Pill-shaped primary actions** (full black fill, white label)
- **Large light display type** (~55px weight 300) for emotional claims
- **Soft product photography** as the only rich media—no loud illustration system
- Rounded surfaces (10–35px) and occasional deep soft shadows on device mockups

## Foundations

### Color

Measured roles on home:

| Role | Hex | Use |
|------|-----|-----|
| Accent / primary action | `#000000` | Pill CTAs, key marks |
| Text primary | `#000000` | Headlines and body |
| Text secondary | `#7d7d7d` | Supporting lines, meta |

Visual reading of screenshots: canvas is warm off-white / light gray paper, not pure billboard white; device chrome and inbox UI introduce soft neutrals and subtle blues inside mock photography. Keep brand UI monochrome; let product shots carry secondary color.

### Typography

No declared families recorded. Observed hierarchy:

- **Hero display**: ~55px weight 300, ~65px line-height — airy, almost magazine
- **Section titles**: ~36px regular, ~43px leading
- **Subheads / emphasis**: 20–24px weight 500–600
- **Body**: 16px (sometimes without fixed line-height), 18px supporting
- **UI / labels**: 12–14px weight 500–600; auth titles ~24px weight 600
- Sign-up long-form stays on a 16/24 body rhythm with 14/20 secondary

Prefer a humanist or neutral grotesque with a true light cut for heroes.

### Spacing and layout

- Hero and major sections: **100px** vertical padding; large bottom margins (~72px)
- Marketing cards / media frames: **75–98px** padding on spacious tiles; **14–16px** on denser chips
- Auth: **16px** horizontal padding dominance; form cards **32–48px** padding; **64px** vertical padding on tall sign-up stacks
- Side margins on centered heroes can be large (~247px) to keep a narrow reading column
- Negative margin tricks appear on layered product shots (~−91px) for overlap

## Visual language

- **Radii**: full pills (`9999`) for CTAs and tags; media/cards ~10–35px; auth cards ~16px; smaller controls ~8–12px
- **Borders**: 1px solid frames on cards; some 2px outlines on chips; thicker ~5px frames on select media tiles
- **Shadows**: soft device lift — e.g. y:8 blur:10 spread:−6 and y:20 blur:25 spread:−5; asymmetric photo shadows (±4x, blur ~8)
- **Imagery**: realistic laptop + phone product shots, inbox UI, lock-screen widgets; no heavy illustration language
- **Motion**: not established

## Components and states

- **Nav**: minimal wordmark + text links + black pill “Get started”
- **Hero**: light multi-line claim, short gray subcopy, single black CTA, oversized device photo
- **Feature bands**: short bold titles over soft product crops; spacious vertical rhythm
- **Auth (sign-in / sign-up)**: centered card or open form on white; 16px inputs; black submit pill; fine 1px card borders; elevated card shadow
- Interaction states beyond default were not separately captured

## Responsive behavior

Home appears in wide (~1712) and mid (~1018–1101) widths with the same monochrome system; auth is wide desktop. Exact mobile breakpoints were not measured—expect the pill CTA and light display type to hold while device photography stacks.

## Practical guidance

**Preserve**

- Black-on-cream calm; one solid black pill as the only hard UI accent
- Light, oversized display type with generous leading
- Product photography as proof, not decorative pattern fills
- Soft elevation on devices; quiet 1px card borders on forms
- Airy section padding (often 75–100px)

**Avoid**

- Bright multi-color marketing accents
- Dense SaaS dashboards on the marketing surface
- Hard pure-white sterile lab aesthetic if the warm paper feel is the brand
- Inventing font names—families were not declared in capture

## Scope note

Studied Cora home (`/`) in multiple viewports plus `/users/sign_in` and `/users/sign_up` (six captures). Color roles are sparse but consistent black/gray; canvas warmth and photo color come from visual inspection. Declared typefaces unavailable.

## Captured pages

[![Home — hero claim and device](https://pin.fontofweb.com/8453?format=jpg)](https://design.withfudge.com/share/pin-8453)

[Home — hero claim and device](https://design.withfudge.com/share/pin-8453)

[![Home — spacious feature band](https://pin.fontofweb.com/8454?format=jpg)](https://design.withfudge.com/share/pin-8454)

[Home — spacious feature band](https://design.withfudge.com/share/pin-8454)

[![Home — mid viewport](https://pin.fontofweb.com/8456?format=jpg)](https://design.withfudge.com/share/pin-8456)

[Home — mid viewport](https://design.withfudge.com/share/pin-8456)

[![Home — compact crop](https://pin.fontofweb.com/8455?format=jpg)](https://design.withfudge.com/share/pin-8455)

[Home — compact crop](https://design.withfudge.com/share/pin-8455)

[![Sign in](https://pin.fontofweb.com/8457?format=jpg)](https://design.withfudge.com/share/pin-8457)

[Sign in](https://design.withfudge.com/share/pin-8457)

[![Sign up](https://pin.fontofweb.com/8459?format=jpg)](https://design.withfudge.com/share/pin-8459)

[Sign up](https://design.withfudge.com/share/pin-8459)

## Colors

- `#000000`
- `#7d7d7d`
