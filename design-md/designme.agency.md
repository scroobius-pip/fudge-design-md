# How designme.agency is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/designme.agency-design)

Last updated: 2026-07-28

## Design character

DesignMe is a **high-confidence agency site** for funded startups: monochrome structure, one hot orange brand flash, and layouts that feel closer to a product pitch deck than a traditional studio brochure. The homepage stages a **split composition**—tight black typography and proof on the left, a saturated orange campaign panel with floating UI mockups on the right—then drops into white FAQ and a near-black multi-column footer capped by a massive cropped wordmark.

What should survive adaptation:

- **Black / white / orange only** as the structural triangle; client logos and product shots carry secondary color.
- **Split-hero storytelling**: message + proof rail beside a full-bleed accent stage.
- **Ultra-bold condensed display** for claims; small quiet UI type for everything else.
- **Pill and capsule controls** (chat, message, subscribe-like actions) rather than rectangular enterprise buttons.
- **Oversized brand typography** as footer/end-cap identity, not just a tiny logo.

## Foundations

### Color

No stable measured palette was returned for this domain. **Visual reading from screenshots:**

- **Canvas:** pure white content sections; deep near-black (`~#0a0a0f` range) footer and some chrome.
- **Ink:** hard black headlines; dark charcoal body; muted gray labels (“OUR TECH STACK”, column headings).
- **Brand accent:** vivid orange / red-orange used as a full stage background, keyword emphasis inside headlines (“WEB3”, “TECH”), and small status chips (e.g. “HIRING”).
- **Utility accents:** Telegram blue on secondary chat control; green live-dot in the footer status line; soft gray pill fills for secondary actions.
- **Product imagery** inside the orange stage brings its own UI blues and neutrals—keep those inside frames so they do not redefine the brand triangle.

When rebuilding, lock brand orange once and refuse additional marketing hues in the chrome.

### Typography

Font families were not captured. Visually:

- **Display / hero:** heavy grotesque, often all-caps or near-caps, very large tracking-tight lines (“DESIGN & DEV FOR WEB3…”, “START YOUR NEW PROJECT…”).
- **Section titles:** bold sans around the **40px / ~46px line-height** band (weight ~600).
- **Body / UI:** predominantly **12–15px** at weight 400–500 with ~20px line-height—unusually small next to the display, which is intentional contrast.
- **Labels:** 12px uppercase or small caps feel for stack and trust rows.
- **FAQ titles:** large bold with emoji prefix; questions in medium dark gray.

The system is **single-family sans** in practice: hierarchy comes from size, weight, and color, not from pairing a serif.

### Spacing and layout

Measured patterns:

- Horizontal padding clusters around **18–20px** on compact controls and cards; vertical padding often **40px top** on repeated blocks, with **12px** inner gaps.
- Radii jump between **8px**, **12px**, **20px**, and **500px** (full pills)—the language is “soft modern SaaS,” not sharp print.
- Home layout is a **left narrative column + right experiential stage**, then full-width white FAQ, then dark footer.
- Footer uses a **multi-column link matrix** with generous empty dark field above a **crop-bleed wordmark**.

Density: marketing copy stays airy; the left rail packs proof bullets and logo rows more tightly under the hero.

## Visual language

- **Shapes:** capsules everywhere—primary black pill CTA, light gray secondary pill, circular “Let’s Talk / Book a Call” sticky control, fully rounded media avatars.
- **Shadows:** soft, short, slightly inset-spread stacks on elevated cards (`~0 0.5–8px` blurs with negative spread)—enough lift for mockups without skeuomorphism.
- **Imagery:** perspective UI boards floating over the orange field; circular team avatars; monochrome client wordmarks; tech-stack icon row.
- **Borders:** mostly implied by surface contrast; footer uses hairline dividers on black.
- **Motion:** not established from stills; the composition suggests scroll-driven reveal but do not specify timings.

## Components and states

- **Primary CTA:** black pill with small brand mark + “Intro chat”.
- **Secondary CTA:** light gray / white pill with Telegram (or similar) icon + “Message”.
- **Proof row:** icon + short benefit line under the hero paragraph.
- **Trust strip:** grayscale client marks and “reviewed on” badges.
- **Tech stack row:** monochrome tool icons under a quiet label.
- **Orange campaign panel:** oversized white headline, supporting line, centered white pill CTA, email text link, floating product shots.
- **FAQ accordion:** plus markers, large section title, generous vertical list.
- **Sticky circular book-a-call control** lower right.
- **Mega footer:** logo + socials, link columns, founder “schedule a call” chip with avatar, legal row, giant reversed wordmark.

States visible in stills: default pills, a red “HIRING” micro-badge, and a green “now accepting projects” status. Hover/active specs are not recorded.

## Responsive behavior

Captures are wide desktop frames (~1680–2048px). The defining split (copy | orange stage) and the multi-column footer assume ample width. A narrower capture was not in the set—assume the orange stage stacks under the copy on small screens, but treat that as guidance rather than measured behavior.

## Practical guidance

**Preserve**

- The black/white/orange triangle and the orange stage as a full emotional panel, not a tiny button color only.
- Extreme display-vs-UI scale contrast (billboard headlines, 12–14px chrome).
- Pill geometry for actions; circular sticky contact.
- Split-hero plus proof, then calm white FAQ, then black identity footer with oversized type.
- Product mockups as the colorful exception inside frames.

**Avoid**

- Soft pastel agency palettes or purple “creative” gradients.
- Turning every section into another orange slab—accent works because most surface is monochrome.
- Large 18px body everywhere; the site’s tension comes from tiny UI type under huge claims.
- Busy multi-font branding; keep one strong grotesque family.
- Dropping the footer wordmark moment; it’s a signature end beat.

## Evidence scope

Based on three homepage captures of `designme.agency` (wide split hero, orange CTA stage with FAQ, and dark mega-footer). Radii, spacing, shadows, and type sizes are measured; named font families and a quantified color palette were not available—color guidance above is screenshot interpretation. No reliable mobile breakpoint series was captured.

## Captured pages

[![Split hero — copy rail + orange stage](https://pin.fontofweb.com/6409?format=jpg)](https://design.withfudge.com/share/pin-6409)

[Split hero — copy rail + orange stage](https://design.withfudge.com/share/pin-6409)

[![Orange CTA panel into FAQ](https://pin.fontofweb.com/6408?format=jpg)](https://design.withfudge.com/share/pin-6408)

[Orange CTA panel into FAQ](https://design.withfudge.com/share/pin-6408)

[![Dark mega-footer + giant wordmark](https://pin.fontofweb.com/4899?format=jpg)](https://design.withfudge.com/share/pin-4899)

[Dark mega-footer + giant wordmark](https://design.withfudge.com/share/pin-4899)
