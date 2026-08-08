# How ethicalads.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ethicalads.io-design)

Last updated: 2026-08-08

## Captured pages

[![Centered hero with large headline beside the product mockup and blue CTA](https://pin.fontofweb.com/6084?format=jpg)](https://design.withfudge.com/share/pin-6084)

[Centered hero with large headline beside the product mockup and blue CTA](https://design.withfudge.com/share/pin-6084)

[![Dark footer with twin CTAs, brand block, and compact link columns](https://pin.fontofweb.com/6085?format=jpg)](https://design.withfudge.com/share/pin-6085)

[Dark footer with twin CTAs, brand block, and compact link columns](https://design.withfudge.com/share/pin-6085)

## Overview

EthicalAds presents itself as a practical developer advertising service rather than a theatrical brand site. The page begins with a very light canvas, a compact top navigation, and a centered hero that pairs a device mockup with a large headline and one primary action. The copy is short, direct, and oriented around a concrete outcome: reaching developers with a specific message at the right moment. The visual tone stays calm and functional, with little ornament and no heavy visual metaphor.

The page gains structure through contrast rather than decoration. The main selling area stays bright and open, while the footer turns deep navy and compresses the brand into a more information-dense directory. That switch creates a clear closing chapter without needing loud borders or complex imagery. Blue remains the one persistent action color from top to bottom, which gives the layout a stable rhythm even when the surface changes.

The design should be reproduced as a clean, legible SaaS marketing system with these traits:

- white or near-white working surfaces
- one medium-blue action color
- dark navy lower-page sections
- thin rules and light borders
- small rounded corners
- short, readable paragraphs
- a developer audience that expects clarity over flourish

## Colors

EthicalAds relies on a restrained palette: bright canvas, navy text, muted support text, a medium blue for calls to action, and a deep indigo footer. The palette feels more editorial than playful, but it never leaves the functional SaaS lane. White dominates the upper page so the hero can breathe, while the dark footer compresses links and brand marks into a denser register. The blue action color is the bridge between those modes; it must stay consistent on both light and dark surfaces so the experience feels unified.

| token | value | role |
|---|---|---|
| `action` | `#3A88BE` | Filled primary buttons, active links, and small emphasis accents |
| `ink` | `#1F2738` | Main headings and strong body copy on light surfaces |
| `muted-ink` | `#56657A` | Support copy, nav text, and secondary explanatory lines |
| `canvas` | `#FFFFFF` | Page background, hero field, and white framing space |
| `surface` | `#F7FAFD` | Soft section background and pale content banding |
| `border` | `#D6DFEA` | Hairline rules, card edges, and quiet separators |
| `surface-dark` | `#1E2D57` | Footer background and other dense closing sections |
| `on-dark` | `#FFFFFF` | Text and icons placed on dark surfaces |
| `on-dark-soft` | `#C5D0E1` | Links and secondary text in the footer |

Use the palette in layers. The hero and content sections should stay on `canvas` or `surface`, with `border` used sparingly for 1px dividers and button outlines. Reserve `surface-dark` for the footer or any closing panel that needs a compressed, site-map-like feel. Keep `action` as the one obvious interaction color; do not introduce extra saturated accents unless they are part of a product image or icon system already present on the page.

## Typography

The page reads like a contemporary sans-serif marketing site. The type system is simple: a bold display heading, medium-weight supporting text, a compact button style, and small footer text. The hierarchy depends on size, weight, and line length more than on multiple families. Use a neutral sans treatment and keep the rhythm tight so the copy feels concise and factual.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | not named | 3.5rem | 700 | 1.05 | -0.03em | Main hero headline |
| `section-display` | not named | 2.25rem | 700 | 1.1 | -0.02em | Section headings and lower-page lead-ins |
| `card-title` | not named | 1.25rem | 700 | 1.2 | -0.01em | Feature headings, nav emphasis, and panel labels |
| `body` | not named | 1rem | 400 | 1.6 | 0em | Explanatory copy and general page text |
| `body-medium` | not named | 1rem | 600 | 1.5 | 0em | Buttons, key phrases, and inline emphasis |
| `small` | not named | 0.875rem | 500 | 1.4 | 0em | Navigation, footer links, and short supporting lines |
| `legal` | not named | 0.75rem | 400 | 1.5 | 0em | Legal copy and dense footer metadata |

The hierarchy should feel compact and confident, not oversized. The hero headline can be large, but it should still sit comfortably beside the device mockup. Supporting copy should stay restrained and readable, with only a few words emphasized in a heavier weight. Footer text can step down to 12px without losing legibility because the dark surface and low-density layout keep the context controlled. Verify licensing for these families before production use.

## Layout

The layout is centered and narrow enough to feel deliberate, but it still uses generous white space. The top navigation sits on a single line, with the brand at left, primary links in the middle, and a bordered action at the right. That structure tells the user exactly where the conversion path lives before the hero begins. The hero itself is balanced: a product illustration or monitor mockup occupies the left side, while the headline, supporting paragraph, and primary button sit to the right. The two-column relationship keeps the message from feeling like a wall of copy.

Under the hero, the page opens into a row of three compact value statements. These cards or columns should read as a single group: icon, heading, then a short explanatory paragraph. Their spacing is calm and even, with enough room between the columns that each can be scanned on its own. The design avoids heavy framing here; the visual separation comes from air and alignment rather than from boxes.

Lower on the page, the content shifts into a more detailed selling section. The headline grows smaller than the hero but remains prominent, and a product or ad example sits alongside the text. This section should preserve the same left-to-right logic used above: text first for the argument, image second for proof. The footer then compresses everything into columns, with the brand lockup, social icons, and grouped link lists arranged on the dark field. That closing structure is the densest part of the page, yet it still feels orderly because the columns are shallow and the separators are light.

Spacing should stay predictable. Small gaps between adjacent text lines, moderate spacing between icon and label groupings, and a larger vertical break before the footer all support the site’s calm tone. Avoid asymmetry that feels accidental. The page is strongest when each row aligns cleanly with the next and every block shares the same left edge language.

## Visual language

EthicalAds uses familiar SaaS cues, but it keeps them restrained. The iconography is small and lightly colored. The hero image is a simple device mockup rather than a cinematic scene. The lower page uses a dark panel to anchor the brand story, but it does not become glossy or dramatic. The result is a site that feels trustworthy and practical, with just enough visual weight to make the marketing copy feel grounded.

Shape language is subtle. Corners are modest, closer to a small card radius than a pill. The buttons are rounded but not soft enough to look consumer-facing. Rules are thin and almost architectural. The overall effect is a layout built from quiet geometric parts: rectangles, centered columns, and a few rounded controls. Keep shadows minimal or absent. The site does not depend on depth; it depends on contrast, spacing, and clear type.

The imagery follows the same discipline. Screenshots and product art should be crisp and compact. If a panel includes a device or ad example, it should sit inside the composition as proof, not as decoration. On dark sections, use light text and modest icon marks rather than heavy illustration. This creates a steady visual voice: direct, low-friction, and easy to scan.

## Components

### Top navigation

The navigation is a single horizontal band with four visible ideas: brand, content links, platform links, and a right-aligned action. The brand mark is the strongest element on the row, but it should still remain small enough that the hero owns the page. Link text is compact and neutral. The right-side action is visually distinct through its border and blue text, not through excess size. Keep the row airy, with enough horizontal space that each item reads as a separate destination.

### Primary action

The filled blue button is the page’s main conversion object.

- **Surface:** `action`
- **Text:** `on-dark`
- **Typography:** `body-medium`
- **Shape:** `rounded.small`
- **Spacing:** compact horizontal padding with a slightly taller vertical rhythm than surrounding text
- **Visible state:** static, confident, and unambiguous

It should look like the one thing that can be clicked without hesitation. Use it for the hero CTA and for smaller conversion moments in the footer or supporting sections. The fill should remain solid rather than gradient-based.

### Secondary action

- **Surface:** `canvas`
- **Text:** `action`
- **Border:** `border`
- **Typography:** `body-medium`
- **Shape:** `rounded.panel`

This control should feel lighter than the primary button while still reading as actionable. The outline is part of the design language, not a fallback. Keep the line crisp and the corner radius small so the button matches the page’s overall restraint.

### Hero block

The hero block combines the product mockup, the headline, the short supporting paragraph, and one primary action.

- **Anatomy:** image, heading, paragraph, button
- **Typography:** `hero-display` for the headline, `body` for the supporting line
- **Composition:** image left, copy right, with the type block vertically centered to the mockup
- **Spacing:** generous internal spacing, but no wide editorial margin that makes the copy feel remote
- **Hierarchy:** the headline should dominate without pushing the button out of view

The hero works because it feels specific. The mockup gives the page a product anchor, and the copy names the audience and benefit plainly. Keep the text block tight enough that the message can be taken in at a glance.

### Feature trio

The three-column explanation beneath the hero is the page’s clearest structural rhythm.

- **Anatomy:** small icon, short heading, one compact paragraph
- **Typography:** `card-title` for the heading, `body` for the paragraph
- **Surface:** usually `canvas` with light text contrast
- **Spacing:** evenly spaced columns with a calm vertical stack inside each one
- **States:** no decorative hover story should be assumed from the still views

These cards are not promotional banners. They explain how the service works in plain language. Keep the icon size modest and the paragraphs short, because the goal is scanning, not immersion.

### Footer system

The footer is the most densely organized component and the strongest dark surface.

- **Anatomy:** top conversion row, divider, brand lockup, social icons, link columns
- **Surface:** `surface-dark`
- **Text:** `on-dark` for strong labels and `on-dark-soft` for links
- **Typography:** `small` for column labels and links, `legal` for the final legal line
- **Composition:** columns should stay aligned and breathable even in the darker context

The footer should feel like the place where the page closes the loop: advertiser entry points, publisher entry points, and supporting links all live in one organized field. The social icons remain secondary and should never compete with the call-to-action row at the top of the footer.

## Responsive behavior

On narrower screens, keep the reading order intact: brand and nav first, hero image and hero copy next, then the supporting three-column content, then the footer. The visual system should continue to favor clarity over novelty. Convert the header into a compact stack only when needed, and preserve the button hierarchy so the primary action is still obvious at the top of the page.

The hero should collapse cleanly without losing the relationship between mockup and message. The three-column feature group should become a vertical stack with enough spacing that each point stays distinct. The footer can shift to two columns or a single stacked list, but the dark surface, divider, and grouped links should remain visible as the closing structure. Keep the action color, small radii, and thin rules intact across sizes so the page still feels like the same system.

## Practical implementation guidance

### Preserve

- Preserve the calm, developer-friendly tone: plain language, short lines, and no decorative claims.
- Preserve the contrast between a bright opening and a dark closing section.
- Preserve the one-blue-action rule so the page never feels visually noisy.
- Preserve the small radius language on buttons and cards.
- Preserve the tight alignment of the hero and the footer columns.

### Avoid

- Avoid bright secondary accent colors that compete with the main blue.
- Avoid oversized pill shapes or soft consumer-style motion language.
- Avoid heavy shadows, glossy gradients, or glass-like treatments.
- Avoid overlong paragraphs in the hero or footer.
- Avoid dense border grids that make the layout feel like a dashboard instead of a marketing page.

### Recommended build order

1. Establish the palette and type scale.
2. Build the top navigation with one secondary action.
3. Compose the hero with image left and copy right.
4. Add the three-column explanation row.
5. Add the lower content section with its supporting image.
6. Finish with the dark footer, divider, and grouped link columns.
7. Check spacing and line lengths at the narrowest supported width.

### Accessibility

- Keep strong contrast on the hero headline, button text, and footer links.
- Give the outlined action a visible focus ring that survives the light canvas.
- Make the small footer links large enough to tap comfortably on touch screens.
- Add descriptive alternative text for the product mockup and any ad examples.
- Keep line lengths short enough that the hero and footer remain easy to scan.

## Scope note

This guide covers the advertisers landing page: top navigation, hero, feature trio, lower selling section, and dark footer. Mobile-specific layout rules, motion, and alternate publisher-page treatments are not included. Measurements are practical adaptation targets.
