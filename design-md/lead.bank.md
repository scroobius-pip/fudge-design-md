# How lead.bank is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lead.bank-design)

Last updated: 2026-08-08

## Captured pages

[![Wide home hero with the logo, centered nav, and a single sign-in pill](https://pin.fontofweb.com/7252?format=jpg)](https://design.withfudge.com/share/pin-7252)

[Wide home hero with the logo, centered nav, and a single sign-in pill](https://design.withfudge.com/share/pin-7252)

[![Personal banking page with a large family photo and split explanatory copy](https://pin.fontofweb.com/7257?format=jpg)](https://design.withfudge.com/share/pin-7257)

[Personal banking page with a large family photo and split explanatory copy](https://design.withfudge.com/share/pin-7257)

[![Personal lending page with a purple section bar and card-like link list](https://pin.fontofweb.com/7259?format=jpg)](https://design.withfudge.com/share/pin-7259)

[Personal lending page with a purple section bar and card-like link list](https://design.withfudge.com/share/pin-7259)

[![Platform page with a left section rail, a huge headline, and a dark code sample](https://pin.fontofweb.com/7255?format=jpg)](https://design.withfudge.com/share/pin-7255)

[Platform page with a left section rail, a huge headline, and a dark code sample](https://design.withfudge.com/share/pin-7255)

[![Accounts page with centered headline blocks and a second dark API sample](https://pin.fontofweb.com/7254?format=jpg)](https://design.withfudge.com/share/pin-7254)

[Accounts page with centered headline blocks and a second dark API sample](https://design.withfudge.com/share/pin-7254)

## Overview

Lead Bank uses a calm but forceful banking language. The pages are built on a white field with a deep blue-violet brand color, oversized rounded buttons, and a clear editorial order: logo, navigation, headline, image, explanation, then a practical next step. The result feels modern and direct rather than ornate. It looks like a financial site that wants to explain itself quickly and then get out of the way.

The same visual system repeats across consumer banking and BaaS content. The personal pages lean on bright lifestyle photography and compact supporting copy. The platform pages shift into centered statements, a left section rail, structured feature lists, and dark code samples. Even with those different content types, the page keeps the same signature ingredients: strong whitespace, crisp text, thin dividers, and one saturated action color.

A few traits define the whole system:

- White canvas with deep navy text.
- Electric blue-violet links and buttons.
- Rounded pill actions and softly rounded panels.
- Large photography framed inside broad margins.
- Short headings followed by practical explanation.
- Dark code panels used as a technical counterpoint, not a full dark theme.

## Colors

Lead Bank keeps the palette narrow and legible. The brand color is the loudest note on the page, and everything else supports it. White and a warm off-white fill most surfaces. Deep navy and soft indigo handle text. A muted gray appears in rules, metadata, and secondary copy. Lime is a small accent used sparingly in icon and syntax details. Dark code panels switch the mood without changing the identity.

| token | hex value | use |
|---|---|---|
| `action` | `#2B0AFF` | Primary buttons, active section rails, link labels, and section headings |
| `action-deep` | `#2000A8` | Stronger blue depth for shadowed button treatment and active emphasis |
| `ink` | `#07021D` | Main headlines, body copy, and high-contrast text on light surfaces |
| `ink-soft` | `#2C2642` | Secondary headings, feature titles, and technical labels |
| `muted-ink` | `#4D4D6B` | Supporting copy, helper text, and quiet navigation details |
| `border` | `#A6A6A6` | Hairline dividers, rules, and subtle frame edges |
| `canvas` | `#FFFFFF` | Page background, header field, and open reading space |
| `surface` | `#F8F8F2` | Pale content sections and light technical cards |
| `accent-lime` | `#ABE338` | Small syntax and icon accent in technical sections |
| `code-bg` | `#2C2642` | Dark API sample panels and code blocks |
| `code-ink` | `#F8F8F2` | Text and tokens inside dark technical panels |

The light system is the default: white background, dark text, and blue links. The off-white surface softens longer sections without feeling tinted or decorative. The dark system appears only in technical panels and sample cards, where the charcoal background creates contrast for structured content. The blue-violet action color stays constant in both modes, so the brand never feels split between consumer and developer contexts. Lime is not a second brand color; it works as a narrow support accent inside technical details.

## Typography

Lead Sans carries the whole site, from the main hero to the smallest legal line. The family is used in regular, medium, semibold, and bold strengths to separate hierarchy without changing tone. System appears only in code and API sample areas, where the page needs a compact technical voice. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Lead Sans | 4.5rem | 700 | 0.95 | -0.03em | Home hero statements and major landing headlines |
| `page-title` | Lead Sans | 4rem | 700 | 0.98 | -0.028em | Large page-intro headings on content-led pages |
| `section-title` | Lead Sans | 3rem | 700 | 1 | -0.02em | Major section heads and bold transition bars |
| `subsection-title` | Lead Sans | 2.25rem | 700 | 1.05 | -0.018em | Large modules and secondary information blocks |
| `card-title` | Lead Sans | 1.25rem | 600 | 1.15 | -0.01em | Feature cards, icon rows, and compact callouts |
| `body-large` | Lead Sans | 1.25rem | 400 | 1.45 | 0em | Hero summaries and longer intro paragraphs |
| `body` | Lead Sans | 1rem | 400 | 1.5 | 0em | Standard explanatory copy |
| `body-strong` | Lead Sans | 1rem | 600 | 1.45 | 0em | Emphasized statements, pill buttons, and card lead-ins |
| `nav` | Lead Sans | 0.875rem | 500 | 1.2 | 0em | Top navigation, dropdown labels, and small page controls |
| `label` | Lead Sans | 0.875rem | 600 | 1.15 | 0.02em | Section labels, active rail markers, and compact cues |
| `legal` | Lead Sans | 0.75rem | 400 | 1.4 | 0.02em | Footer text, legal copy, and small metadata |
| `code` | System | 0.875rem | 400 | 1.45 | 0em | API samples, technical blocks, and copied values |

The hierarchy depends on scale and spacing more than on mixed type families. Headlines are large, dark, and tightly set. Supporting text opens up just enough to read comfortably in wide columns. Section labels are small but confident, usually in the action color. Buttons use the same family as body text, which keeps the interface grounded and avoids a promotional feel.

## Layout

The site is built on a wide centered grid with generous side gutters. On desktop, content sits well inside the canvas rather than touching the viewport edges. The home page and the consumer pages use long vertical sections with broad breathing room, while the BaaS pages shift into more modular story blocks. The overall pacing is measured: a strong top intro, a large image, then a clear split between explanation and supporting detail.

The header is compact and clean. The logo sits at the left, the main navigation sits across the center, and the sign-in pill sits at the far right. That top bar stays visually light, relying on white space and a soft shadow rather than a heavy border. The active state is subtle but clear, usually through the action color rather than a filled tab bar.

Hero sections are image-forward. In the personal pages, a large lifestyle photo anchors the page and the text sits close by in a calm editorial arrangement. The hero does not use layered cards or decorative overlays. The image is the stage, and the text is the explanation. On the home page, the headline and image share a broad horizontal field; on personal pages, the image stretches wide and the supporting text falls beneath it in a simple two-column rhythm.

The platform pages introduce a different structure. A left vertical rail lists the main product areas, with the current item marked in the action color. The main content column to the right carries a huge statement and a structured feature list. Beneath that, a dark code sample block gives the page a technical anchor. This pattern keeps the page readable even when the content becomes dense, because the section rail and the headline act as a map.

Full-width blue-violet section bars are another recurring device. They work like chapter markers: a strong title on the left, a practical action on the right, then a body section below. These bars create a firm break between narrative parts without adding visual clutter. They should remain broad, flat, and direct.

Spacing is roomy but not loose. Large content blocks use about `6.25rem` to `3.75rem` of vertical separation, while card and list clusters tighten to `2.5rem`, `1.875rem`, or `1.25rem` depending on density. Rounded corners appear on buttons, panels, and some card edges, but the layout never becomes bubbly. The rhythm comes from clear alignment, not from stacking small framed boxes.

## Visual language

Lead Bank feels like a financial brand that wants to look practical, modern, and steady. Its strongest visual habits are easy to name:

- Clean white surfaces and sharp dark text.
- Blue-violet used as the only persistent action color.
- Large, friendly photography with soft daylight and domestic settings.
- Rounded pills for primary actions.
- Thin rules and card separators instead of heavy borders.
- Dark technical blocks used as a contrast device.
- Simple line icons that explain products quickly.

The photography is bright and human. Families, couples, and individuals are shown in everyday rooms and work settings, which keeps the brand from feeling abstract. The images are framed with generous margins and almost no stylistic treatment. They are allowed to feel natural, which makes the banking copy less sterile.

The technical pages keep the same calm voice even when they introduce API material. The code sample cards are dark and structured, but they are still surrounded by white space and paired with soft type. That keeps the site from flipping into a separate developer skin. Instead, technical content appears as one more chapter in the same system.

The brand also uses contrast in a disciplined way. Blue-violet attracts the eye, but it does not flood the page. Most copy remains black or near-black. Green appears only as a narrow highlight in technical areas. This restraint gives the interface a serious tone and makes the action color feel intentional whenever it appears.

## Components

### Header

The header is a simple white strip with a left-aligned logo, centered navigation, and a right-aligned sign-in pill. Its job is to stay quiet while still feeling complete. The logo mark and wordmark are small enough to leave room for the nav labels. Dropdown carets are tiny and unobtrusive. The sign-in control stands out through fill color, rounded shape, and compact padding rather than size alone. Keep the header light and stable; do not turn it into a heavy bar.

### Primary action

The primary action is a blue-violet pill with white text. It is the clearest interactive object on the page and should always feel easy to find. Use the filled style for the main next step only, then let links carry lighter actions. The pill shape is important: it makes the action feel friendly without losing precision. A slight depth treatment can work, but the button should remain flat in the overall composition.

### Hero block

The hero block pairs a large statement with an image and a short paragraph. On consumer pages, the image leads and the copy follows. On the home page, the headline can sit beside or above the image depending on the chapter. The important part is scale: the headline is large, the paragraph is short, and the image fills a wide rectangle without decorative framing. Keep the spacing wide and the copy compact so the page opens with confidence.

### Section label and active rail

Section labels are small blue markers that tell the reader where they are in the product story. In the BaaS pages, the left rail uses the same color to mark the active area. This is a simple but powerful pattern: the action color becomes both a navigation cue and a section heading cue. The active state should be unmistakable even without reading the surrounding text. A slim rail or left border works better than a heavy filled block.

### Content panel

Content panels are pale off-white blocks with dark text and broad internal padding. They hold lists, explanations, and product summaries. Their corners are soft but not exaggerated, and the layout inside each panel is often two-column: short lead copy on one side, supporting items on the other. Keep these panels flat and calm. Their job is to organize information, not to compete with the hero or the primary action.

### Blue section bar

The blue section bar is one of the page’s strongest recurring shapes. It spans the content width, uses bold white text, and often carries a right-aligned contact or next-step link. It works as a visual reset between sections. Treat it like a chapter divider with a practical edge. The bar should feel solid, not glossy, and should preserve plenty of space above and below so it reads as a deliberate break.

### Technical code panel

The code panel is a dark charcoal block with light code text, compact spacing, and a calm monospaced voice. It usually sits beside a plain-text explanation or beneath a technical feature list. The contrast is high, but the card still belongs to the same page because the surrounding grid and type remain consistent. A small lime accent can appear in syntax or icon details. Keep the code panel square and disciplined so it feels like a tool, not a decorative screenshot.

### Feature rows

Feature rows pair small icons with short titles and one or two lines of explanation. They are clean, functional, and evenly spaced. The icon sits close to the title, and the title is set in a semibold Lead Sans style. These rows work best in two columns or a tight grid. The dividers between them should be thin and pale, with enough room that each row reads as a distinct benefit rather than a dense list.

## Responsive behavior

On narrower screens, the hierarchy should stay in the same order: logo and key action first, then the main statement, then the image or technical card, then the supporting rows. The left section rail should collapse into a top or inline set of anchors. Wide feature grids should stack into one column before the text becomes too narrow. The blue section bar should keep its role as a chapter break, but it may wrap its action to a second line if needed.

Type should step down in clean increments, not in tiny adjustments. The hero can shrink first, then the page title, then section titles, while the body copy stays comfortably readable. Images should keep their natural proportions and avoid awkward crops that cut off faces or key gestures. Pill buttons can remain pill-shaped on small screens, but they should stretch to fit the available width when tap targets need more room.

## Practical implementation guidance

### Preserve

- Keep the white canvas as the default page field.
- Use Lead Sans for nearly all visible text.
- Keep the blue-violet action color consistent across buttons, links, and active markers.
- Preserve the wide gutters and spacious chapter-like vertical rhythm.
- Keep photography bright, direct, and unfiltered.
- Let dark technical panels feel rare and purposeful.
- Use rounded pills for the main action and softly rounded corners for support panels.

### Avoid

- Avoid adding a second strong brand color that competes with the blue-violet.
- Avoid heavy shadows, glossy gradients, and decorative card chrome.
- Avoid narrow text columns that make the large headlines feel cramped.
- Avoid overly complex icon styles or mixed illustration systems.
- Avoid tiny button shapes that break the pill language.
- Avoid placing technical content in a visually separate style that feels like another product.
- Avoid using border-heavy boxes when spacing and alignment can do the work.

### Recommended build order

1. Build the white header with logo, centered nav, and sign-in pill.
2. Establish the base type scale and the action color.
3. Recreate the hero pattern with a large statement and wide photography.
4. Build the section label, blue chapter bar, and feature row patterns.
5. Add the pale content panels and the left section rail treatment.
6. Add the dark code panel style and syntax accents.
7. Tighten spacing and stack order for smaller screens.

### Accessibility

- Keep headline and body contrast strong on every light surface.
- Make the blue action color readable at its smallest sizes.
- Give every icon row a text label; do not rely on the icon alone.
- Keep focus states visible on the nav, section links, and pill buttons.
- Ensure the active rail is not indicated by color alone.
- Write descriptive alt text for the large photography so the page still makes sense without the image.
- Keep code blocks selectable and easy to copy, with enough contrast for long lines.

## Scope note

This guide covers Lead Bank’s desktop marketing pages for personal banking, lending, and BaaS content, including the header, hero, section bars, feature rows, and code panels. Type sizes use the 0.125rem step. Mobile breakpoints, motion, hover and focus styling, and the complete content model for every page section are not included.
