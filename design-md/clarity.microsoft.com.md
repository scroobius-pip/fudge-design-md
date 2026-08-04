# How clarity.microsoft.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/clarity.microsoft.com-design)

Last updated: 2026-08-04

## Captured pages

[![Wide hero with gradient headline, floating cards, and the tab rail below](https://pin.fontofweb.com/6780?format=jpg)](https://design.withfudge.com/share/pin-6780)

[Wide hero with gradient headline, floating cards, and the tab rail below](https://design.withfudge.com/share/pin-6780)

[![Compressed desktop hero with the same pale blue background and stacked controls](https://pin.fontofweb.com/6781?format=jpg)](https://design.withfudge.com/share/pin-6781)

[Compressed desktop hero with the same pale blue background and stacked controls](https://design.withfudge.com/share/pin-6781)

[![Session recordings section beside a rounded product mockup and quiet white space](https://pin.fontofweb.com/6782?format=jpg)](https://design.withfudge.com/share/pin-6782)

[Session recordings section beside a rounded product mockup and quiet white space](https://design.withfudge.com/share/pin-6782)

[![Three testimonial cards with large percentage claims and centered read-more links](https://pin.fontofweb.com/6783?format=jpg)](https://design.withfudge.com/share/pin-6783)

[Three testimonial cards with large percentage claims and centered read-more links](https://design.withfudge.com/share/pin-6783)

[![Integration cards for MCP and browser extension on pale lavender panels](https://pin.fontofweb.com/6784?format=jpg)](https://design.withfudge.com/share/pin-6784)

[Integration cards for MCP and browser extension on pale lavender panels](https://design.withfudge.com/share/pin-6784)

## Overview

Clarity uses a restrained Microsoft marketing language: white canvas, pale blue-violet washes, Segoe UI hierarchy, and product screenshots that do most of the explanatory work. The page stays calm and corporate rather than theatrical. Large headings and small utility labels create the rhythm; the screenshots provide the proof.

The strongest trait is restraint with one exception: blue-violet color is allowed to become expressive. It shows up in the hero headline, the primary button, the active tab underline, and a few small badges. Everything else stays close to white, soft lavender, black, and Microsoft blue. That keeps the page trustworthy and easy to scan.

Each section is spacious, lightly bordered, and visually separate without being boxed in. The layout should keep that clarity first, then let the screenshots, charts, and cards add detail.

## Colors

Clarity stays mostly white and pale blue-lavender. Stronger blues and violets appear in the hero gradient, the primary CTA, selected links, and the active tab underline. Darker navy, slate, and near-black tones live inside the embedded dashboard imagery and small utility labels, not as the page canvas itself. The result is a light marketing shell with color used as a signal, not as decoration.

| token | value | use |
|---|---|---|
| `action` | `#0078D4` | Primary links, filled CTAs, and the Microsoft brand thread |
| `actionDeep` | `#005493` | Darker blue text accents and stronger link states |
| `actionIndigo` | `#3D60E0` | Gradient transitions and deeper blue-violet accents |
| `actionSky` | `#58A0DF` | Lighter blue gradient support and cool panel highlights |
| `actionViolet` | `#8F58AB` | Violet gradient support in hero and footer treatment |
| `accentPurple` | `#AA65FF` | Hero headline gradient and brand-forward emphasis |
| `accentIndigo` | `#656AFF` | Hero gradient tail and button shimmer tone |
| `accentLilac` | `#9692FF` | Soft CTA fill and subtle highlight color |
| `canvas` | `#FFFFFF` | Main page background, cards, and negative space |
| `canvasWash` | `#F3F3FF` | Pale bands, footer wash, and soft section backgrounds |
| `surface` | `#EAEAFF` | Card fills, proof blocks, and quiet structural surfaces |
| `ink` | `#000000` | Main headline and highest-contrast text |
| `inkStrong` | `#161514` | Section headings and body text on white surfaces |
| `inkMuted` | `#323130` | Supporting paragraphs, nav text, and footer copy |
| `inkSoft` | `#605E5C` | Secondary metadata, small labels, and subdued helper text |
| `footerMuted` | `#6A6A6A` | Footer utility text and low-priority link copy |
| `borderQuiet` | `#827DFF` | Outlined button borders and active control outlines |
| `darkNavy` | `#020057` | Embedded chart depth and dark interior UI accents |
| `darkSlate` | `#17233E` | Darker dashboard chrome, chart labels, and image interiors |

The page depends on contrast between these groups. White and `canvasWash` carry the layout; `surface` separates cards from the page; the blue family marks action and selection; the dark tones stay mostly inside screenshots and tiny text fragments. That keeps the interface readable without flattening it into a gray corporate default.

## Typography

Segoe UI is the only family in the packet, and the homepage uses it consistently in regular and semibold weights. Reuse rights for Segoe UI should be confirmed for the target deployment.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `heroDisplay` | Segoe UI | 3.25rem | 600 | 1.4 | 0em | Hero headline and the largest marketing statements |
| `statDisplay` | Segoe UI | 3.25rem | 600 | 1.4 | 0em | Big percentage figures in testimonial and proof cards |
| `sectionDisplay` | Segoe UI | 1.75rem | 600 | 1.29 | 0em | Section headings such as “Watch real users on your site” |
| `cardHeading` | Segoe UI | 1.125rem | 600 | 1.33 | 0em | Card titles, module names, and compact headings |
| `lead` | Segoe UI | 1.125rem | 400 | 1.39 | 0em | Intro copy under the hero and between feature blocks |
| `body` | Segoe UI | 1rem | 400 | 1.375 | 0em | Paragraphs, bullets, and descriptive copy |
| `bodyMedium` | Segoe UI | 1rem | 600 | 1.375 | 0em | Emphasis inside short labels and button-adjacent text |
| `navigation` | Segoe UI | 0.875rem | 400 | 1.43 | 0em | Top navigation, footer navigation, and small utility text |
| `button` | Segoe UI | 0.875rem | 600 | 1.43 | 0em | Filled and outlined buttons, tab labels, and quick actions |
| `eyebrow` | Segoe UI | 0.875rem | 600 | 1.57 | 0em | Small purple section kicker and compact callouts |
| `legal` | Segoe UI | 0.6875rem | 400 | 1.45 | 0em | Footer legal strip and very small metadata |

Hierarchy comes from scale, weight, and spacing rather than many font families. The hero headline is bold and large, but the supporting text is not oversized; it stays compact enough to let the screenshots feel important. Section headings are still semibold and clear, just a full step down. The same family across the page makes the layout feel deliberate and familiar.

## Layout

The page is built as a wide desktop marketing stack with generous gutters and distinct bands. The dominant measurements are 54px, 80px, and 96px: 54px for dense horizontal breathing room, 80px for transitional section padding, and 96px for the broadest bands. Cards and module groups sit in 16px to 40px gaps, so the page can feel airy without becoming loose.

The hero section spans the full width and uses a pale blue gradient field behind the main message. The text column is left aligned and compact: one headline, one short supporting line, one value line, and two buttons. The right side is a layered cluster of screenshots and floating cards that overlaps gently without hard edges. This arrangement gives the page a visual anchor immediately.

Below the hero, a centered tab rail separates the opening statement from the feature story. The active tab gets a blue-violet underline; the other items stay plain and low-contrast. That strip works like a chapter index and keeps the long page easy to scan.

The body alternates between text-led sections and screenshot-led sections. Some blocks pair a left text column with a right image mockup; others switch to three-card proof rows with large percentage figures and testimonials. The layout is careful about vertical rhythm: the modules are spaced enough to feel independent, but not so much that the page fragments.

Near the bottom, integration content sits on pale lavender bands and the footer opens with a soft illustrated banner before dropping into a multi-column link grid and a thin legal strip. That ending keeps the page friendly and branded rather than technical or dark.

## Visual language

Clarity’s visual language is clean, literal, and lightly polished. It prefers screenshots over abstract illustration, simple borders over ornate frames, and small badges over large decorative flourishes. The design communicates through product proof: dashboards, timelines, heatmaps, and cards are shown directly instead of described indirectly.

The recurring shape language is straightforward. Buttons are pill-shaped. Cards are nearly square with 4px corners. Section backgrounds are broad flat fields or gentle gradients. The effect is calm and structured, with just enough softness to keep the Microsoft tone approachable.

Blue-violet gradients are the one expressive device. They appear in the hero headline, the primary CTA, and a few highlight treatments, which makes the brand feel current without drifting away from the Microsoft palette. Those gradients are never busy; they are shallow and controlled. The page still reads as white-first.

The screenshots add most of the dimensionality. They introduce shadows, small charts, and busy internal interfaces inside the calm shell. That contrast is the system’s main trick: the surrounding page stays restrained so the product proof can be detailed.

## Components

### Header and announcement bar

The top chrome is thin, white, and understated. The Microsoft mark and Clarity wordmark sit left; navigation items spread across the top; utility icons stay small and quiet on the right. The announcement strip underneath is a full-width blue band with centered copy. It behaves like a narrow banner, not a second hero.

- **Anatomy:** logo, product name, top links, language selector, utility icons, announcement copy
- **Typography:** `navigation` for the header; the banner uses the same compact size with higher contrast
- **Shape:** mostly flat; tiny controls use the 4px control radius
- **Composition:** header content should feel secondary to the hero, not compete with it

### Hero

The hero is the page’s main visual event. A large black headline uses a blue-violet gradient on the AI phrase, and the support copy stays short and left aligned. Two buttons sit below: one filled gradient action and one outlined secondary action. The right side stacks dashboard screenshots and floating cards with soft shadows and pale borders.

- **Anatomy:** headline, support line, value line, primary button, secondary button, screenshot cluster
- **Surface:** pale blue gradient field over white
- **Typography:** `heroDisplay` for the main line, `lead` for supporting copy, `button` for CTAs
- **Shape:** buttons use the pill radius; the image cards use near-square 4px corners
- **Visible states:** the secondary action is outlined; the active visual emphasis is the gradient hero phrase and primary button

### Tab rail

The tab strip is a centered horizontal selector that breaks the hero from the body sections. It uses plain text labels with a thin colored underline under the active item. The inactive labels stay quiet and dark.

- **Anatomy:** five text tabs, one active underline
- **Typography:** `navigation` or `button` scale, depending on density
- **Surface:** white strip with no heavy container chrome
- **Hierarchy:** the active state must remain visible without relying on color alone

### Proof cards and feature blocks

The proof cards in the testimonial area are the clearest card system on the page. Each card starts with a large percentage figure, then a brand mark, a quote, an avatar, and a small text link. The top half of the card is washed in pale lavender, while the lower half stays white. Borders are thin and quiet.

The feature blocks use the same quiet language at larger scale. One section pairs a headline and bullet-like copy with a screenshot mockup; another shows two integration cards side by side, each with a pale panel, a screenshot, a heading, body copy, and a small outlined button.

- **Anatomy:** number, label, brand, quote, avatar, action link; or headline, body, screenshot, button
- **Typography:** `statDisplay`, `sectionDisplay`, `cardHeading`, and `body`
- **Surface:** white card body with `canvasWash` or `surface` on the top zone
- **Spacing:** generous internal padding, especially around the large figures
- **Composition:** keep the number or image dominant and the text compact beneath it

### Footer banner and footer

The footer begins with a pale illustrated banner and a centered CTA. Below that, a multi-column directory lists product and resource links, followed by a small legal strip. The overall tone is softer than the body sections and more institutional than the hero, but it keeps the same white-plus-lavender family.

- **Anatomy:** banner headline, CTA, link columns, contact details, legal strip
- **Surface:** `canvasWash` with restrained text and small link groups
- **Typography:** `sectionDisplay` for the footer headline, `navigation` and `legal` for links and metadata
- **Hierarchy:** the CTA and column headings lead; legal copy is last and quiet

## Responsive behavior

At narrower widths, the layout should keep the same order of information: hero copy first, buttons next, screenshots after that, then the content sections in sequence. The two-column modules can collapse to one column without changing the visual language. The tab rail may need horizontal scrolling or wrapping, but it should still read like a single control strip. The page does not need a different style for small screens; it needs the same hierarchy in a tighter stack.

## Practical implementation guidance

### Preserve

- Keep the page white-first with pale blue-lavender surfaces as the main supporting color.
- Preserve Segoe UI as the single type family and keep the semibold display steps clear.
- Keep the hero’s gradient phrase and the filled CTA as the strongest color accents.
- Retain the screenshot-led storytelling; the design depends on product proof, not ornament.
- Use 4px corners for cards and pill corners only for actions and small controls.

### Avoid

- Avoid dark page shells or full-page charcoal themes.
- Avoid extra accent colors beyond the blue-violet family.
- Avoid thick borders, heavy shadows, or glassy effects.
- Avoid decorative illustration in places where the page already has a screenshot.
- Avoid making every section equally loud; the strongest hierarchy belongs in the hero and the proof figures.

### Recommended build order

1. Set the page canvas, section padding, and header chrome.
2. Build the hero with the gradient headline, support copy, and the two CTAs.
3. Add the centered tab rail and the first text-plus-screenshot section.
4. Build the proof-card grid with the lavender top band and large figures.
5. Add the integration section and the footer banner.
6. Finish with the link columns and legal strip.

### Accessibility

- Keep the gradient headline readable if it collapses to a single solid blue.
- Preserve visible focus styling on the pill buttons, tab rail, and footer links.
- Give screenshots and logos descriptive alternative text so the proof remains meaningful.
- Do not rely on color alone for the active tab or the current section.
- Keep small footer and legal text legible against the pale background.

## Scope note

This guide covers the public Clarity marketing homepage: the announcement bar, hero, tab rail, feature sections, proof cards, integration blocks, and footer. It does not cover the authenticated analytics app, alternate mobile-specific layouts, or hover and motion behavior. Measurements are rounded to a 0.125rem step. Segoe UI reuse rights should be confirmed for the target deployment.
