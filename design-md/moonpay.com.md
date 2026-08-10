# How moonpay.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/moonpay.com-design)

Last updated: 2026-08-10

## Captured pages

[![Business page product grid showing Ramps, Commerce, Swaps, and Stablecoins cards with gradient imagery and pill-shaped CTA buttons on a white background.](https://pin.fontofweb.com/7768?format=jpg)](https://design.withfudge.com/share/pin-7768)

[Business page product grid showing Ramps, Commerce, Swaps, and Stablecoins cards with gradient imagery and pill-shaped CTA buttons on a white background.](https://design.withfudge.com/share/pin-7768)

[![Homepage feature section with 'Experience crypto, effortlessly' heading, payment method logos, and three product cards with dark gradient backgrounds and white UI mockups.](https://pin.fontofweb.com/7767?format=jpg)](https://design.withfudge.com/share/pin-7767)

[Homepage feature section with 'Experience crypto, effortlessly' heading, payment method logos, and three product cards with dark gradient backgrounds and white UI mockups.](https://design.withfudge.com/share/pin-7767)

[![Dramatic dark section with oversized '35,000,000+' statistic in white, transitioning from purple gradient to pure black with centered social proof text.](https://pin.fontofweb.com/7766?format=jpg)](https://design.withfudge.com/share/pin-7766)

[Dramatic dark section with oversized '35,000,000+' statistic in white, transitioning from purple gradient to pure black with centered social proof text.](https://design.withfudge.com/share/pin-7766)

[![Full dark mode social proof section with massive '35,000,000+' figure, 'Verified accounts' label, and scattered user photography mosaic on black background.](https://pin.fontofweb.com/7765?format=jpg)](https://design.withfudge.com/share/pin-7765)

[Full dark mode social proof section with massive '35,000,000+' figure, 'Verified accounts' label, and scattered user photography mosaic on black background.](https://design.withfudge.com/share/pin-7765)

## Overview

MoonPay's visual system is built for trust at scale in the cryptocurrency space. The design pairs extreme contrast—pure black against white—with immersive gradient imagery that suggests digital fluidity and technological sophistication. The interface relies on a single type family, Sohne, deployed across a wide weight and size range to create dramatic hierarchy without visual clutter. Product presentation favors card-based layouts with generous rounding, where UI mockups appear to float within colored gradient environments. The overall impression is clean, confident, and deliberately premium: every element is spaced with precision, and the rhythm alternates between bright, airy product explanations and dark, immersive social proof moments. The system supports both consumer and business contexts through consistent component language while allowing imagery to carry brand expression.

## Colors

The palette operates on a near-monochrome foundation with strategic warmth and a single accent. Black dominates as both ink and immersive surface, while whites and near-whites provide breathing room. The lavender accent appears primarily in gradient imagery and promotional banners rather than as a flat UI color.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark section backgrounds, primary button fills |
| ink-secondary | #111111 | Subtle elevation on black, footer backgrounds |
| ink-tertiary | #1A1A1A | Card backgrounds in dark mode, elevated surfaces |
| surface-elevated | #2A2A2A | Borders on dark cards, subtle dividers |
| muted | #464646 | Secondary text on light backgrounds, footer links |
| muted-secondary | #535353 | Tertiary text, disabled states |
| border-subtle | #626262 | Hairline borders on dark surfaces |
| accent-lavender | #D8C8FF | Gradient imagery, promotional banner backgrounds |
| surface-warm | #F9F8FB | Product card backgrounds, subtle section alternation |
| surface-cool | #FAF9F9 | Alternate warm surface, form backgrounds |
| surface-bright | #FEFEFE | Near-white for contrast against pure white |
| canvas | #FFFFFF | Page background, text on dark surfaces, card interiors |

The color logic follows a strict binary: light sections use black ink on white with gray secondary text, while dark sections invert to white text on pure black. Gradients in product imagery introduce purple, orange, blue, and green tones that serve as emotional anchors without requiring additional UI tokens. The lavender accent (#D8C8FF) appears in top promotional banners and as a wash in hero imagery, functioning as brand atmosphere rather than interactive color.

## Typography

MoonPay uses Sohne and Sohne-Buch, variable sans-serifs from Klim Type Foundry, as its type families. The design facts list both Sohne and Sohne-Buch as extracted font families, with Sohne-Buch serving as the specific font file source. In practice, the interface renders with weights from 400 Regular through 700 Bold drawn from this single design space. Display sizes are tightly tracked and set with minimal line height to create monumental impact, while body sizes read comfortably with generous leading.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Sohne | 4.5rem | 500 | 1 | -0.02em | Homepage hero headlines |
| section-display | Sohne | 4rem | 500 | 1.1 | -0.015em | Section headings, "Experience crypto, effortlessly" |
| stat-display | Sohne | 11.5rem | 500 | 1 | -0.02em | Oversized statistics ("35,000,000+") |
| heading-large | Sohne | 1.5rem | 500 | 1.4 | normal | Product card titles, feature names |
| body | Sohne | 1rem | 400 | 1.5 | normal | Default paragraph text, navigation |
| body-large | Sohne | 1.25rem | 400 | 1.5 | normal | Lead paragraphs, descriptions |
| body-strong | Sohne | 1rem | 600 | 1.4 | normal | Emphasized inline text |
| label | Sohne | 0.875rem | 500 | 1 | -0.005em | Button text, compact labels |
| navigation | Sohne | 1rem | 400 | 1.5 | normal | Header links, footer lists |
| navigation-bold | Sohne | 1rem | 700 | 1.5 | normal | Active navigation state |
| legal | Sohne | 0.75rem | 400 | 1.5 | normal | Copyright, fine print |

The type system achieves hierarchy through size contrast rather than family change. The 11.5rem stat display creates visceral impact in social proof sections, while the 4rem section display anchors content areas. Body text at 1rem with 1.5 line height ensures readability across long explanations. Negative tracking on display sizes prevents looseness at scale. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous horizontal margins and pronounced vertical rhythm. Content lives within a max-width container that creates consistent measure across sections.

**Container and margins.** The primary content container uses horizontal padding of 4rem (64px), creating substantial side margins on desktop. Some sections employ narrower effective widths—308px, 388px, or 492px margins—to create focal points for statistics or testimonials. The header shares the same 4rem horizontal padding.

**Section spacing.** Vertical rhythm is dramatic: major sections receive 6rem (96px) top and bottom padding, establishing clear territorial boundaries. Internal content blocks within sections use 2rem (32px) padding. The stat section compresses vertical space around the massive number, using the scale of the typography itself as the primary spatial event.

**Grid structure.** Product cards arrange in grids—two-column for business products, three-column for consumer features—with consistent 1.5rem gaps. Cards themselves carry 2rem internal padding and 2rem corner radius, making them read as discrete objects. Dark feature cards within the consumer section use the same structural logic but invert the surface.

**Responsive considerations.** The container system suggests a single breakpoint where 4rem margins collapse to narrower padding. The three-column consumer grid should stack to single column on narrow viewports, while the two-column business grid likely becomes sequential. The oversized stat display will require viewport-relative scaling to prevent overflow.

## Visual language

**Gradient imagery as brand signature.** The most distinctive visual element is the use of smooth, multi-colored gradients as card backgrounds and hero environments. These gradients shift between purple and lavender, orange and peach, blue and cyan, or green and teal—always soft, never banded, and frequently paired with floating UI mockups that appear to hover within the color field. The gradients serve as emotional proxies for the fluid, borderless nature of cryptocurrency.

**Photography treatment.** User photography in the social proof section appears as a scattered mosaic of small, candid portraits against black. Images receive no border treatment and overlap slightly, creating organic density that contrasts with the precise geometry elsewhere. The photographs are desaturated and lit naturally, avoiding stock-photo polish.

**Icon and logo treatment.** Payment method logos in the consumer section appear at small scale in a horizontal scroll or wrap arrangement, rendered in their native brand colors. This is the one place where external color intrudes, and it functions as trust signaling rather than decoration.

**QR code pattern.** A persistent QR code element appears in the bottom-right corner across multiple sections, suggesting a mobile-app acquisition strategy. It receives a rounded container treatment that matches the system's pill logic.

## Components

**Primary button.** Anatomy: text label centered within a solid black pill. Surface: background-color `{colors.ink}`, text `{colors.canvas}`. Typography: `{typography.label}`. Shape: full pill radius (`9999px`), padding 1rem 1.5rem. No border. Used for main calls-to-action: "Get Started", "Buy Crypto", "Explore Ramps".

**Secondary button.** Anatomy: text label centered within a bordered pill. Surface: transparent background, 1px solid border `{colors.ink}`, text `{colors.ink}`. Typography: `{typography.label}`. Shape: full pill radius, identical padding to primary. Used for alternative actions: "Sell Crypto", "Send and Receive".

**Product card (light).** Anatomy: gradient image area (top, full-bleed within card), white content area (bottom), heading, description paragraph, pill CTA. Surface: card background `{colors.surface-warm}`, image with rounded top corners. Typography: heading `{typography.heading-large}`, body `{typography.body}`, CTA `{typography.label}`. Shape: 2rem border radius, 2rem internal padding. Composition: image occupies roughly 60% of card height, content stacks below with 1.5rem gap.

**Feature card (dark).** Anatomy: dark gradient background, centered white UI mockup, heading and description below. Surface: background `{colors.ink}` with gradient overlay, mockup on white rounded rectangle. Typography: heading `{typography.heading-large}` in black, body `{typography.body}` in `{colors.muted}`. Shape: 2rem border radius. Used for consumer features: Buy, Sell, Send & Receive.

**Stat block.** Anatomy: centered label above, massive number, centered subtitle below. Surface: background `{colors.ink}`, text `{colors.canvas}`. Typography: label `{typography.body-large}` in muted weight, number `{typography.stat-display}`, subtitle `{typography.body}`. Composition: extreme vertical centering, number dominates viewport width.

**Header.** Anatomy: logo left, navigation center-left, utility links right, CTA button far right. Surface: transparent or white background, black text. Typography: navigation `{typography.navigation}`, active state `{typography.navigation-bold}`. Spacing: 4rem horizontal padding, 0.75rem vertical. The "Get Started" button uses the primary button treatment.

**Footer.** Anatomy: multi-column link lists, legal text below, logo absent or minimal. Surface: background `{colors.ink-secondary}`, text `{colors.canvas}` for headings, `{colors.muted}` for links. Typography: lists `{typography.navigation}`, legal `{typography.legal}`. Links receive subtle hover states.

**Promotional banner.** Anatomy: full-width strip, centered text with arrow link. Surface: background `{colors.accent-lavender}`, text `{colors.ink}`. Typography: `{typography.body}` at reduced size. Used for product announcements: "MoonPay Agents is live → Get Started".

## Responsive behavior

The system appears designed desktop-first with clear adaptation needs. The 4rem horizontal margins should collapse to 1rem on mobile to preserve content width. The three-column consumer feature grid must stack vertically, with each card becoming full-width. The two-column business grid should similarly sequence. The stat display at 11.5rem requires viewport-based scaling—likely clamping between 4rem and 11.5rem—to prevent horizontal overflow. Navigation should collapse to a hamburger menu, with the "Get Started" button potentially persisting as a sticky element. Gradient imagery in cards may require aspect ratio adjustment to prevent excessive height on narrow viewports.

## Practical implementation guidance

**Preserve.** The extreme contrast between light and dark sections—this binary rhythm is central to the brand experience. The generous border radius on cards and buttons; the pill shape is non-negotiable for interactive elements. The single-type-family discipline; introducing a second family would dilute the system's coherence. The spacious section padding; compressing vertical space would undermine the premium positioning.

**Avoid.** Adding more accent colors beyond the lavender; the system derives energy from imagery, not UI chroma. Using sharp corners on cards or buttons; the rounded language is consistent across all surfaces. Setting display type with loose tracking or increased line height; the tight, dense treatment is intentional. Introducing borders or shadows on light cards; the flat, clean surfaces rely on spacing and scale for definition.

**Recommended build order.** 1) Establish the type scale with Sohne and Sohne-Buch at all weights, ensuring the variable font loads correctly. 2) Implement the color tokens with strict light/dark section logic. 3) Build the pill button as the foundational interactive element. 4) Create the product card component with gradient image handling. 5) Assemble the header with navigation states. 6) Implement the stat section with viewport-responsive scaling. 7) Add the footer and promotional banner. 8) Finally, integrate gradient imagery and photography assets.

**Accessibility.** Ensure the 1px black border on secondary buttons meets minimum contrast against white backgrounds. The dark sections with white text on black exceed WCAG AAA for large text but verify body text sizes. The gradient imagery behind UI mockups should not contain essential information, as color perception varies. Provide reduced-motion alternatives for any scroll-triggered number animations in the stat section. The persistent QR code should include an accessible label describing its purpose.

## Scope note

This guide covers the consumer homepage and business product page surfaces visible in the supplied images. Mobile breakpoints, interactive states beyond static presentation, form validation, transaction flows, and the complete icon system are not represented. The dark-mode social proof section with user photography and the gradient hero treatment are fully described; however, motion behavior for the scattered photo mosaic and any scroll-triggered animations are not documented. Measurements reflect the extracted desktop values.
