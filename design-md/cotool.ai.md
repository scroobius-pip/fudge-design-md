# How cotool.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cotool.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Blue hero with centered story card and dotted wave field](https://pin.fontofweb.com/8608?format=jpg)](https://design.withfudge.com/share/pin-8608)

[Blue hero with centered story card and dotted wave field](https://design.withfudge.com/share/pin-8608)

[![Light detection section with pale board and stacked product cards](https://pin.fontofweb.com/8606?format=jpg)](https://design.withfudge.com/share/pin-8606)

[Light detection section with pale board and stacked product cards](https://design.withfudge.com/share/pin-8606)

[![Dark integrations panel with centered heading and icon strip](https://pin.fontofweb.com/8605?format=jpg)](https://design.withfudge.com/share/pin-8605)

[Dark integrations panel with centered heading and icon strip](https://design.withfudge.com/share/pin-8605)

[![Near-black footer with oversized dotted wordmark and utility links](https://pin.fontofweb.com/8604?format=jpg)](https://design.withfudge.com/share/pin-8604)

[Near-black footer with oversized dotted wordmark and utility links](https://design.withfudge.com/share/pin-8604)

## Overview

Cotool uses a hard-edged security tone rather than a soft SaaS tone. The page alternates between saturated electric-blue statements, pale editorial product sections, and near-black operational stages. Large serif headlines carry the message, while the sans family handles navigation, paragraphs, labels, and small UI controls. The result is serious and restrained, but not sterile: the dotted network forms and dot-matrix logo add texture without adding chrome.

The visual system is built around contrast in three directions. First, the blue hero field makes the brand immediate and loud. Second, the light pages use a cool off-white canvas with white cards, so the serif headlines and compact copy feel like a printed briefing. Third, the dark sections compress the layout into a dense control-room mood, with card grids, colored dots, and subdued borders. The system keeps one saturated action blue across those modes, so the brand never splits into separate identities.

The page reads as one continuous product narrative. Hero statements introduce the promise, card grids explain the product, dark panels show integrations and operating detail, and the footer closes with a large typographic logo and utility links. Nothing is ornamental for its own sake; every shape either frames a claim, carries a control, or explains the product.

## Colors

Cotool’s palette is intentionally narrow. The core interface colors are black, near-black, off-white, and a single electric blue. `action` is the clearest brand color and should remain the only persistent accent for primary buttons, highlighted words, and blue emphasis marks. `action-deep` can support the same family when a stronger edge is needed on dark surfaces. `canvas` is the page field for the lighter sections, while `surface` is the clean white used for cards and inset story blocks. `ink` and `muted-ink` separate headline density from secondary body text. `border` appears as a quiet divider on the light cards. `stage-blue` is the pale field used behind the light detection hero and product grid. `dark-stage` and `dark-core` support the darker marketing and footer sections. `chip` holds the compact dark cards and control labels. `on-dark` and `on-dark-soft` keep text legible when the background collapses to near-black.

The palette does not behave like a rainbow system. There is no general-purpose second accent. Red and blue specks in the dot fields are signal marks inside the illustrations, not UI token families. On the light pages, the relationship is mostly canvas, white card, ink, and blue action. On the dark pages, the relationship shifts to black stage, charcoal cards, white text, and restrained borders. That narrow contrast makes the product feel precise rather than playful.

The two big surface modes should remain visually distinct. Light sections lean editorial: pale ground, dark text, and a clean card edge. Dark sections lean operational: deep ground, bright text, and compact controls. Blue is the connective thread between both modes, so the eye always knows which actions are primary even when the page changes temperature.

## Typography

Cotool uses two material families: `Font` for UI text and `Moderat Serif` for display copy. The pairing is central to the brand. The sans face keeps the navigation, button labels, body copy, and small product text disciplined. The serif face gives the hero, section headers, testimonial copy, and footer mark their weight. Licensing details are not supplied.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Moderat Serif | 4rem | 400 | 1.05 | -0.02em | Main hero statements and large about-page claims |
| `section-display` | Moderat Serif | 3rem | 400 | 1.1 | -0.016em | Section leads in dark or light product blocks |
| `feature-display` | Moderat Serif | 2.5rem | 400 | 1.1 | -0.016em | Secondary headlines and dense explanatory leads |
| `card-heading` | Moderat Serif | 2.25rem | 400 | 1.1 | -0.016em | Card-openers and testimonial-style statements |
| `quote` | Moderat Serif | 1.75rem | 400 | 1.2 | -0.015em | Short pull quotes and endorsement copy |
| `body` | Font | 1rem | 450 | 1.3 | 0em | Navigation, paragraphs, CTA labels, and product prose |
| `body-small` | Font | 0.875rem | 400 | 1.5 | -0.02em | Supporting labels, notes, and compact panel text |
| `label` | Font | 1rem | 450 | 1.3 | 0em | Small product labels and inline metadata |
| `legal-copy` | Font | 0.71875rem | 450 | 1 | -0.02em | Footer legal text and the smallest utility lines |

The hierarchy depends on size and line break control more than on heavy weight changes. The serif headings are calm rather than dramatic; they stay medium-light in feel even when very large. Body text is compact and upright, with enough room to keep the dense product explanations readable on a narrow column. The system works best when the serif headlines stay short and the sans paragraphs stay tight.

The family pairing should stay stable across the page. Serif for claims, sans for control text, helper labels, navigation, and footers. That split is one of the strongest signals in the design language, so it should not be blurred by introducing a third display family or by using the serif face for routine interface text.

## Layout

The layout uses a centered desktop frame with wide side gutters and strong vertical chapter breaks. The opening hero can be full-bleed blue with a centered headline and a story card floating in the middle, or it can be a light marketing hero with the claim left-aligned and product imagery to the right. In both cases, the page refuses clutter. The message gets room, and the supporting elements stay subordinate.

Light sections use a two-column structure: a text stack on one side, and a product board or card grid on the other. The cards sit on pale fields or white stages and keep their own internal rhythm with small gaps, thin borders, and compact titles. Dark sections switch into a more compressed rhythm. One version centers a large claim above a row of integration icons and scattered dot clouds. Another version centers a product claim above three dark cards and a large field of white, blue, and red points. The spacing stays generous, but the surfaces feel denser because the background is darker and the cards are packed with information.

Large vertical margins define the page rhythm. The hero and major feature sections carry broad top and bottom breathing room; the smaller cards use much tighter internal padding. That creates a page that feels architectural. The eye moves from chapter to chapter instead of from box to box.

The footer closes the layout with a dark band, oversized dot-matrix wordmark, and small utility columns. It behaves like a final panel, not an afterthought. That gives the whole page a strong end point. The top navigation stays compact and aligned to the same wide frame, which keeps the page feeling measured rather than sprawling.

## Visual language

The system’s most distinctive language comes from dots. Cotool uses point-cloud waves, scattered network particles, and dot-matrix lettering as the repeating visual texture. The blue about hero uses a dotted wave across the lower half. The light detection section uses pale point fields behind the card grid. The dark sections use corner confetti, sparse clusters, and signal dots to keep the backgrounds alive without turning them into busy patterns. The footer turns the same idea into a giant dotted wordmark, which makes the brand mark feel built from the same atoms as the product visuals.

The other major language is the contrast between plain cards and charged stages. Cards are simple rectangles with small radii and little decoration. Their job is to hold content clearly. The stage around them does the expressive work: bright blue for the manifesto moments, pale blue for the product explainer moments, charcoal for the operations moments, and black for the closing band. The cards never compete with the stage; they sit on top of it like instruments inside a console.

Buttons and chips stay compact. The primary action is a pill with white text on blue. Dark cards use darker fills, thin outlines, and small status chips such as active, hourly, weekly, high, and critical. These labels are functional, not ornamental. They let the interface feel operational even when it is used as marketing imagery.

The system also relies on a calm, almost editorial spacing discipline. Big headings are isolated from body copy with generous gaps, while the dense product boards retain tight interior spacing. That contrast gives the whole page a split personality in a controlled way: declarative at the top, operational in the middle, and emphatic again at the end.

## Components

### Top bar

The top bar is spare: small logo at left, a short text nav, and one right-aligned blue action. It rides over both light and dark fields without becoming a separate visual system. The bar should stay thin and quiet. It is a control strip, not a second hero.

### Primary action

The primary action is a rounded pill with a saturated blue fill, white text, and compact internal padding. On light pages it reads as the strongest object on screen. On dark pages it provides the only immediate bright cue besides the dot field. Keep it singular; the page does not use a second primary hue. Its shape is soft enough to feel modern, but still tight enough to avoid drifting into a casual consumer look.

### Blue hero stage

The blue hero is the most theatrical component in the system. It uses a full-bleed electric-blue background, a centered serif headline, small supporting text, and a large cream or white story card that floats above a dotted wave. The stage is deliberate and rigid, not playful. The dotted wave gives the section motion without animation. The card is the textual anchor and should remain the clearest surface on the page.

### Light detection section

The light detection section pairs a left-aligned serif headline with a short sans paragraph and a right-side product board. The board is made of white cards on a pale field. Inside those cards, the interface uses dark fills, small status pills, and compact labels. This section should preserve the contrast between the broad airy field and the dense product UI. The layout works because the words stay calm while the cards show complexity.

### Dark operations section

The dark operations section centers a large serif claim above a grid of dark cards or integration icons. The background is near-black, with corner confetti or scattered dots providing texture. The cards are charcoal, the text is white or softened white, and the accent color appears only in key chips or small device marks. This section is the most technical-looking part of the page. It should feel monitored, arranged, and slightly compressed.

### Testimonial panel

The testimonial panel is a white or very light card with a large serif quote on one side and a blue dot target or related graphic on the other. The author line is smaller and quieter, sometimes with a small avatar. The panel should read as an editorial interruption between darker product sections. Its strength comes from restraint: a single quotation, a single supporting name, and one graphic counterpart.

### Footer

The footer is a dark closing band with the oversized dotted Cotool wordmark, small navigation columns, and legal links. It uses the deepest surface color and lets the wordmark carry the finish. The footer should not introduce new colors or new visual tricks. Its job is to end the page with the same severe confidence that starts it.

## Responsive behavior

On narrower screens, the page should keep the chapter order intact: hero, supporting copy, product proof, dark operational section, testimonial, and footer. The stacked layout matters more than preserving every two-column relationship. The blue hero card should remain readable before any decorative field. Product cards should collapse into a single vertical stack with enough space between them to keep the labels scannable. Large serif headings should shrink carefully rather than abruptly, because the brand depends on the line breaks feeling deliberate. The dot clouds can crop more aggressively on smaller screens, but they should never disappear entirely; they are part of the identity, not background filler.

The strongest responsive rule is priority, not symmetry. Keep the main claim first, then the supporting card or grid, then the decorative field. If a layout has to simplify, simplify the secondary visuals before touching the headline rhythm or the contrast between dark and light sections.

## Practical implementation guidance

### Preserve

- Keep the palette narrow: blue, black, off-white, charcoal, and pale blue are enough.
- Keep serif headlines short and large, with compact leading.
- Keep cards plain and use the stage around them for personality.
- Keep the dot fields as the recurring visual signature.
- Keep the primary action blue and the footer very dark.

### Avoid

- Avoid soft consumer rounding or roomy bubbly controls.
- Avoid introducing a second saturated accent for primary UI.
- Avoid busy shadows, glossy gradients, or decorative borders on every component.
- Avoid letting the product cards become more expressive than the stage.
- Avoid changing the tone from severe and operational to playful or casual.

### Recommended build order

1. Set the Font and Moderat Serif roles and lock the body/heading hierarchy.
2. Build the top bar and the blue primary action.
3. Recreate the blue hero stage and the centered story card.
4. Build the light two-column detection section with its card grid.
5. Build the dark operations and integrations sections.
6. Add the testimonial panel and the footer.
7. Tune spacing so the page still feels sparse at desktop width and ordered on smaller screens.

### Accessibility

- Keep white text on blue and dark surfaces at strong contrast.
- Make the serif headlines readable at the smallest supported viewport by preserving line breaks.
- Give the dotted graphics useful alt text or mark them decorative when they do not add meaning.
- Keep the focus state visible on the blue CTA and any footer links.
- Do not rely on color alone for active, severity, or status chips; pair color with text.

## Scope note

This guide covers the supplied desktop marketing and about surfaces: the blue manifesto hero, the light detection section, the dark operational sections, the testimonial panel, and the footer. Mobile rearrangement, motion, hover and focus styling, and any surfaces outside the supplied images are not specified. Radius and spacing values stay on the 2px step.
