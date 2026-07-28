# How contentformcontext.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/contentformcontext.com-design)

Last updated: 2026-07-28

## Design character

Content for Context’s case-study page (SBS 8 News) reads as a **editorial portfolio** more than a product UI: full-bleed photography, large serif-or-display case headlines, generous white margins, and long-form storytelling sections. The captures show a clean agency layout—hero imagery tied to the broadcaster brand, then structured narrative blocks—without a dense component library.

What should survive adaptation:

- Photography-led case heroes
- Wide margins (~50px+) and calm vertical pacing
- Large case titles (~30–35px) over quieter 16–20px body
- Minimal chrome; story and image do the work
- Soft, restrained UI chrome if any (large ~60px radius appears once)

## Foundations

### Color

No instrumented color roles or palette rows were returned. Visually the page reads as:

- Light/neutral page field
- Dark type on light reading sections
- Full-color photography carrying brand hues from the client (SBS 8 News)

Treat color as **content-driven** (photos, logos in-frame) rather than a fixed product token set until measured.

### Typography

No declared families. Observed sizes:

- **Body default:** 16px (dominant)
- **Supporting:** 20px / ~26px line-height
- **Display/case titles:** ~30–35px with matching line-height near 1.0–1.2
- **Small labels:** 14px

Weight stays regular (400) across the measured styles—hierarchy is mostly size and placement.

### Spacing and layout

- Horizontal margins cluster near **~50.6px** (and a wider ~182px inset on some blocks)
- Vertical padding on staged blocks: **20px**, **60px**
- Section-crop compositions suggest a single-column editorial flow with occasional large media breaks
- Capture widths ~1245–1255px—more article than ultrawide marketing billboard

## Visual language

- **Radii:** mostly square media; one measured **60px** radius (soft container or control)
- **Borders / shadows / gradients:** not meaningfully present in measurements
- **Imagery:** broadcast/news photography and project stills dominate
- Mood is documentary and premium-agency, not SaaS dashboard

## Components and states

Still evidence points to simple building blocks:

- Case hero (image + title)
- Narrative text sections
- Possibly logo/lockup moments for the client brand
- Sparse navigation chrome (not the focus of these crops)

Do not invent complex interactive component states from these stills.

## Responsive behavior

Only two section crops of the same case URL. No multi-breakpoint proof—reflow should keep margins generous and type readable; avoid assuming a fixed desktop grid.

## Practical guidance

**Preserve**

- Editorial pacing and photography priority
- Large case titles with regular-weight body
- Wide side margins and unhurried vertical rhythm

**Avoid**

- Packing SaaS card grids over the story
- Loud multi-accent product palettes unrelated to the case
- Tiny dense type that fights the portfolio tone

**Adaptation**

- Let each case’s photography set accent color
- Keep chrome quieter than the media
- Use 16/20/30–35px as a simple type ladder

## Scope note

Two section crops of contentformcontext.com `/sbs-8-news` only. No measured color roles or declared fonts. Other case studies and the marketing home are outside this set—use as a case-study pattern reference, not a full site system.

## Captured pages

[![SBS 8 News — case hero/story](https://pin.fontofweb.com/10404?format=jpg)](https://design.withfudge.com/share/pin-10404)

[SBS 8 News — case hero/story](https://design.withfudge.com/share/pin-10404)

[![SBS 8 News — section crop](https://pin.fontofweb.com/10405?format=jpg)](https://design.withfudge.com/share/pin-10405)

[SBS 8 News — section crop](https://design.withfudge.com/share/pin-10405)
