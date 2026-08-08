# How endl.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/endl.io-design)

Last updated: 2026-08-08

## Captured pages

[![Bright blue CTA shell above a pale legal footer](https://pin.fontofweb.com/9905?format=jpg)](https://design.withfudge.com/share/pin-9905)

[Bright blue CTA shell above a pale legal footer](https://design.withfudge.com/share/pin-9905)

[![Two-column FAQ with a soft blue open question row](https://pin.fontofweb.com/9904?format=jpg)](https://design.withfudge.com/share/pin-9904)

[Two-column FAQ with a soft blue open question row](https://design.withfudge.com/share/pin-9904)

[![Dark product band with phone and card kiosk on deep green](https://pin.fontofweb.com/9903?format=jpg)](https://design.withfudge.com/share/pin-9903)

[Dark product band with phone and card kiosk on deep green](https://design.withfudge.com/share/pin-9903)

## Overview

Endl's page uses a simple hierarchy: a bright blue CTA shell, a dark product story band, a wide FAQ block, and a pale legal footer. The system feels confident and corporate without becoming rigid. Large rounded shapes do most of the branding work, while type stays clean and compact. White canvas gives the page breathing room between chapters, and the action blue stays constant so the site never loses its center.

The page moves between three clear moods. The blue banner is the strongest accent and acts like a closing headline. The dark band shifts the tone toward product proof and control. The FAQ and footer return the page to a light, airy surface so the long legal material stays readable. That alternation keeps the page from feeling flat even though the component set is small.

## Colors

Endl's color system is built from one dominant action blue and a narrow set of neutrals. The blue is not a small link accent; it is the brand's main signal and appears in the CTA shell, utility buttons, active controls, and the support launcher. Black and dark charcoal carry the strongest text. White and light gray preserve the open, high-contrast marketing feel. A soft mint tint eases the open FAQ state, and the darkest navy note supports the deeper control surfaces and tiny icon details.

The product render sits inside the dark chapter and stays subordinate to the stable blue accent, while the light sections remain the neutral backdrop.

| token | value | role |
|---|---|---|
| `action` | `#245FFF` | Primary banner fills, active controls, and the floating help button |
| `ink` | `#000000` | Main text on light surfaces and the strongest footer marks |
| `muted-ink` | `#34343A` | Supporting copy, legal text, and secondary labels |
| `subtle-ink` | `#969696` | Quiet metadata and low-emphasis footer details |
| `canvas` | `#FFFFFF` | Page background, button text on dark fills, and open space around sections |
| `surface` | `#F4F4F5` | Footer shell, open card backgrounds, and quiet framing areas |
| `surface-soft` | `#E2F5EE` | Open FAQ row and soft highlight surfaces |
| `surface-dark` | `#181719` | Dark storytelling band and deep product staging areas |
| `surface-deep` | `#0F172A` | Deep control accents and the darkest supporting notes |
| `border` | `#F4F4F5` | Hairline card edges and low-contrast separators |

Light and dark areas are not separate themes here; they are page chapters. White and light gray keep the marketing message open. The dark band creates contrast for the product render and the icon rail. The blue remains stable across both, so the system feels unified even when the page shifts from airy to dense. The mint-tinted open row adds one soft pause before the footer, which helps the long legal content feel less abrupt.

## Typography

The visible family is **Dm Sans 9 Pt**. The source set also names Applesystem, System, and Times. The page depends more on size and weight than on switching families. Headlines are bold and compact. Body copy stays calm and readable. Small legal text is present but never competing with the main claims. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---:|
| `hero-display` | Dm Sans 9 Pt | 3.75rem | 700 | 1 | -0.03em | Blue banner headline and the strongest claim line |
| `section-display` | Dm Sans 9 Pt | 3.5rem | 700 | 1.03 | -0.03em | Large section lead-in such as the FAQ prompt |
| `card-heading` | Dm Sans 9 Pt | 1.5rem | 700 | 1.15 | -0.015em | FAQ questions and compact product headings |
| `body` | Dm Sans 9 Pt | 1rem | 400 | 1.5 | 0em | Paragraph text, footer body copy, and supporting explanations |
| `body-medium` | Dm Sans 9 Pt | 1rem | 500 | 1.5 | 0em | Button labels and emphasized body text |
| `lead` | Dm Sans 9 Pt | 1.125rem | 400 | 1.55 | 0em | Short supporting statements in product sections |
| `label` | Dm Sans 9 Pt | 0.875rem | 600 | 1.35 | 0.08em | Eyebrow labels, rail items, and small UI tags |
| `legal-copy` | Dm Sans 9 Pt | 0.75rem | 400 | 1.45 | 0em | Footer disclaimers and copyright lines |

The hierarchy works because the page uses only a few sizes, but uses them decisively. The biggest claim lines sit close together so the page feels immediate. The FAQ prompt is slightly smaller but still heavy enough to anchor the two-column layout. Body copy opens the line height just enough for comfort, and legal text drops one step lower so it reads as supporting material. The label style uses uppercase spacing and semibold weight to create quiet structure in the dark rail and the footer directories.

## Layout

The page is built from wide horizontal shells and strong vertical separation. The banner and footer both sit inside large rounded containers with generous internal padding. The dark hero band uses a broad split layout: text on the left, product render on the right, and a low navigation rail under the image area. The FAQ section uses a classic two-column split with a large prompt column and a stacked accordion column. The footer expands into a multi-column directory with a long legal paragraph and a small social/support cluster near the lower edge.

Spacing is intentionally generous. Large sections use 5rem to 7.5rem padding bands, which keeps each chapter from feeling crowded. The broadest shell uses even more vertical room, which makes the blue CTA band feel like a destination instead of just another block. Smaller gaps between rows and columns stay around 1rem to 1.5rem so the dense legal content and accordion rows remain legible. The layout prefers wide gutters over narrow nested containers, and it treats a single large shape as the main framing device rather than many small cards.

The outer page canvas stays white through most of the experience. That allows the blue shell, the dark band, and the pale footer to read as deliberate surfaces instead of arbitrary cards. The result is a page that feels organized at a distance and readable up close.

## Visual language

Endl relies on rounded geometry, flat fills, and clear contrast rather than decorative effects. The most memorable shapes are the large stadium-like shells in blue and the soft rounded rows in the FAQ. Corners are intentionally generous, but they are not playful in a childish way; they feel stable and institutional. Cards are simple and mostly border-led, not shadow-led. Depth comes from surface color changes and from the way the sections are spaced apart.

The dark hero band adds a second visual register. It introduces a deep green-black field, a bright device render, and a low strip of icon-labeled actions. That strip behaves like a product rail: compact labels, small icons, and strong contrast against the dark base. The FAQ then returns to a clean white field, but uses one softened open row to show where the user is in the set. The footer stays light and quiet so dense text remains readable. Across the page, blue is the consistent action color, while mint and light gray provide relief.

The page does not feel busy because it uses very few ornamental accents. There is no heavy texture except the subtle field inside the blue shell. There are no strong gradients in the core interface. The system depends on scale, radius, and contrast more than on illustration or imagery treatment.

## Components

### Blue closing CTA shell

- **Anatomy:** Large headline on the left, two small action pills on the right.
- **Surface:** Solid `action` blue with a faint map-like field that stays very subtle.
- **Typography:** White `hero-display` with compact line breaks.
- **Shape:** `hero-shell` corners create the large rounded rectangle.
- **Spacing:** Wide left and right breathing room, with enough top and bottom padding for the shell to feel separate from the footer.
- **Composition:** Left side carries the message; right side carries the choices.
- **Variants:** One white pill for the lighter choice and one dark pill for the stronger secondary choice.
- **Visible states:** The pills read as distinct through fill, not through extra decoration.

### FAQ accordion

- **Anatomy:** Left prompt column and right stacked rows.
- **Surface:** Closed rows stay white; the open row shifts to `surface-soft`.
- **Typography:** Prompts and questions use strong `card-heading`; answers use `body`.
- **Shape:** Soft rounded cards with a `card` radius and thin `border` edge.
- **Spacing:** Rows sit with consistent vertical gaps so the set feels orderly.
- **Composition:** The left column establishes the topic; the right column handles the questions.
- **Visible states:** The open row uses a minus control in a blue circle; closed rows use plus controls in quiet circles.
- **Tone:** The component is friendly but direct, with no dense visual clutter.

### Dark product story band

- **Anatomy:** Large claim, supporting paragraph, outlined action, feature bullets, product render, and a low action rail.
- **Surface:** `surface-dark` on a near-black base with a subtle green cast.
- **Typography:** White `hero-display` for the claim and `body` for the supporting text.
- **Shape:** Large rectangular field with a calm, stable edge.
- **Spacing:** Wide left-side copy column and strong open space around the product render.
- **Composition:** Copy stays left; the render and pedestals own the right half.
- **Variants:** The lower rail uses compact icon chips that read like destinations or categories.
- **Visible states:** The outlined action button stays restrained so the product render remains the visual anchor.

### Footer shell

- **Anatomy:** Logo, dense legal paragraph, multi-column directories, copyright, social icons, and a help cluster.
- **Surface:** `surface` light gray with a quiet, almost paper-like feel.
- **Typography:** `body` for the main legal block and `legal-copy` for the smallest lines.
- **Shape:** Very large outer rounding makes the footer feel like a container, not a hard stop.
- **Spacing:** Broad column gaps and a roomy left column keep the legal copy readable.
- **Composition:** Brand and legal material stay on the left; navigational columns are grouped to the right.
- **Visible states:** Social marks are minimal and monochrome so they do not compete with the footer text.

### Floating support control

- **Anatomy:** A small speech bubble and a circular blue launcher.
- **Surface:** White bubble paired with the `action` blue control.
- **Typography:** `body` or `label` size for the short help message.
- **Shape:** Small rounded card for the bubble and a fully rounded launcher.
- **Spacing:** Anchored away from the main footer text so it reads as a separate utility.
- **Composition:** Bottom-right placement keeps it present but unobtrusive.

## Responsive behavior

The mobile version should keep the same order of importance: message first, action second, detail third. The blue banner can stack its buttons under the heading when width collapses. The dark story band should move from a left-right split to a vertical stack, with the product render below the copy. The FAQ should become a single-column accordion so the questions stay easy to scan. The footer should reduce its directory columns gradually, not all at once, so the legal text remains readable before the navigation collapses.

The blue brand shell, the pale footer, and the dark product band should all keep their rounded edges on smaller screens, but the padding should tighten in controlled steps. The support control needs to stay reachable without covering the footer text. The design should not rely on hover cues to communicate meaning because the main interactions are buttons, accordion toggles, and support links that need to remain obvious on touch devices.

## Practical implementation guidance

### Preserve

- Keep `action` blue as the strongest and most persistent color across the site.
- Use large rounded shells for the blue banner and the footer so the page feels branded, not boxed in.
- Keep the dark product band visually quiet around the render and let the copy stay left-aligned.
- Preserve the two-column FAQ structure on wide screens.
- Keep legal text small, restrained, and readable on the pale footer surface.

### Avoid

- Avoid adding extra accent colors that compete with the blue.
- Avoid sharp rectangular containers for the major shells.
- Avoid heavy shadows; the system depends on surface color and radius more than depth effects.
- Avoid turning the footer into a crowded link wall with equal emphasis on every item.
- Avoid mixing many font families; the page is strongest when it stays with one clean sans family and the other named families only.

### Recommended build order

1. Set the core tokens for blue, dark surfaces, light surfaces, and the rounded shell sizes.
2. Build the blue closing banner and its two pill actions.
3. Build the dark product story band with the low action rail.
4. Build the FAQ accordion with open and closed row styles.
5. Build the footer shell with legal text, directories, social marks, and support control.
6. Tune responsive stacking and spacing after the desktop structure is stable.

### Accessibility

- Keep text on blue and dark surfaces at strong contrast ratios.
- Make the open and closed FAQ states clear with both color and icon change.
- Give every small icon button a readable label.
- Keep focus states visible on pills, accordion toggles, and the support launcher.
- Preserve readable line length in the legal block when the footer columns collapse.
- Do not depend on color alone to distinguish the primary and secondary actions.

## Scope note

This guide covers endl.io's desktop marketing page: the blue CTA shell, the dark product story band, the FAQ block, the footer, and the floating support control. It does not include mobile layouts, motion, loading states, or detailed interaction feedback.
