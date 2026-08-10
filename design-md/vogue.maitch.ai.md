# How vogue.maitch.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/vogue.maitch.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero landing page with large search input, vogue@maitch logo, and editorial navigation in a clean light layout](https://pin.fontofweb.com/7945?format=jpg)](https://design.withfudge.com/share/pin-7945)

[Hero landing page with large search input, vogue@maitch logo, and editorial navigation in a clean light layout](https://design.withfudge.com/share/pin-7945)

[![Step 3 of 3 quiz modal showing two fashion items with pill-shaped prefer buttons on a soft gray background](https://pin.fontofweb.com/7946?format=jpg)](https://design.withfudge.com/share/pin-7946)

[Step 3 of 3 quiz modal showing two fashion items with pill-shaped prefer buttons on a soft gray background](https://design.withfudge.com/share/pin-7946)

[![Step 1 of 3 quiz with feature selection tags, product comparison cards, and a selected state with purple glow](https://pin.fontofweb.com/8011?format=jpg)](https://design.withfudge.com/share/pin-8011)

[Step 1 of 3 quiz with feature selection tags, product comparison cards, and a selected state with purple glow](https://design.withfudge.com/share/pin-8011)

[![Step 1 of 3 quiz comparing a beige hoodie and blue floral kaftan with outlined prefer buttons](https://pin.fontofweb.com/7941?format=jpg)](https://design.withfudge.com/share/pin-7941)

[Step 1 of 3 quiz comparing a beige hoodie and blue floral kaftan with outlined prefer buttons](https://design.withfudge.com/share/pin-7941)

## Overview

The vogue@maitch interface presents an AI-powered fashion discovery experience that balances editorial sophistication with approachable utility. The visual system centers on a warm, light canvas that lets fashion photography dominate, punctuated by deep navy action elements and an elegant serif italic voice for brand moments. The design moves users through a stepped quiz flow—comparing garments, selecting features, and refining preferences—while maintaining a consistent sense of calm authority. Every surface feels intentionally restrained: generous whitespace, soft rounded corners on interactive elements, and a typographic pairing that contrasts a light geometric sans-serif for utility with Playfair Italic for editorial flair. The overall impression is of a high-end shopping companion rather than a transactional retail site, with the interface receding to elevate the clothing and the user's own style journey.

## Colors

The palette operates in three registers: a warm neutral foundation, a deep navy action system, and selective accent moments. The warm neutrals create an inviting, paper-like environment that flatters fashion photography without competing. Navy serves as the primary action color, appearing in buttons, selected states, and the brand mark. A soft lavender glow appears only for focused or selected card states, providing gentle wayfinding without visual noise.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text, headings, body copy |
| ink-deep | #001533 | Deepest navy for emphasis |
| action | #004AAD | Primary buttons, active selections, brand accent |
| action-hover | #2C3E8C | Hover state for action elements |
| muted-ink | #171717 | Near-black for secondary text |
| muted | #737373 | Descriptions, captions, placeholder text |
| accent-warm | #8EBEFF | Soft blue highlight, decorative moments |
| accent-lavender | #CF9FFF | Focus ring, selected card glow |
| border-light | #A1A1A1 | Subtle dividers, inactive borders |
| border-subtle | #D4D4D4 | Card outlines, tag borders, input borders |
| surface-warm | #E8E6E1 | Warm gray for body background |
| surface-cool | #E5E5E5 | Cool gray for modal backdrop |
| surface-light | #F5F5F5 | Subtle surface variation |
| canvas | #FAFAF8 | Warm white for card backgrounds |
| canvas-pure | #FFFFFF | Pure white for elevated surfaces |

The light mode dominates all visible surfaces. Dark text on warm light backgrounds provides excellent readability while maintaining a softer feel than stark white. The action navy is reserved for interactive commitment—primary buttons, selected states, and the brand mark's "maitch" portion. The lavender accent appears as an outer glow on selected product cards, creating a halo effect that draws attention without altering the card's internal color. Photography backgrounds in product shots tend toward warm off-whites (#E8E6E1 range), creating seamless integration with the interface canvas.

## Typography

Three font families appear in the system: DM Sans 9 Pt for functional and body text, Playfair Italic for brand voice and editorial headings, and System-Uisansserif for fallback interface elements. DM Sans 9 Pt appears in weights from 300 (hero display) through 400 (body) to 700 (labels and navigation). Playfair Italic, designed by Claus Eggers Sørensen, provides the "vogue AI assistant" voice and other editorial moments. System-Uisansserif serves as a system-level fallback for general interface text in regions where custom fonts may not load. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | DM Sans 9 Pt | 4.5rem | 300 | 1.0 | normal | Landing page hero headline |
| section-display | Playfair | 1.125rem | 400 | 1.556 | normal | "vogue AI assistant" brand voice |
| body | DM Sans 9 Pt | 1rem | 400 | 1.5 | normal | General body text, descriptions |
| body-small | DM Sans 9 Pt | 0.625rem | 400 | 1.5 | 0.1em | Product metadata, brand labels |
| body-medium | DM Sans 9 Pt | 1.125rem | 500 | 1.625 | normal | Emphasized body, quiz questions |
| label | DM Sans 9 Pt | 0.625rem | 700 | 1.5 | 0.1em | Buttons, tags, navigation |
| label-wide | DM Sans 9 Pt | 0.625rem | 700 | 1.5 | 0.2em | Step indicators, category labels |
| caption | DM Sans 9 Pt | 0.6875rem | 400 | 1.625 | normal | Product descriptions, fine print |
| navigation | DM Sans 9 Pt | 0.625rem | 700 | 1.5 | 0.2em | Header and footer links |

The type scale is tightly controlled, with most functional text at 10px (0.625rem) in bold uppercase for labels and navigation. This creates a refined, fashion-editorial feel where small type carries authority through weight and spacing rather than size. The hero display at 72px (4.5rem) provides dramatic landing page impact with exceptionally light weight. Body text at 16px (1rem) ensures readability for longer descriptions. The 1px letter-spacing on labels and 2px on wide labels create breathable, elegant uppercase treatments.

## Layout

The layout follows a centered, contained model that keeps content approachable and focused. The landing page presents a full-width hero section with centered headline, subhead, and a prominent search input, followed by a grid of example prompts. The quiz flow uses a modal-centered approach, with stepped content appearing in a rounded panel against a soft gray backdrop.

The header spans full width with the vogue@maitch logo left-aligned and editorial navigation right-aligned. The logo combines black "vogue@" with navy "maitch" in a bold sans-serif, with the "ai" portion receiving the navy accent. Navigation links use the label-wide treatment with generous letter-spacing.

The main content area on the landing page centers within a maximum width, with the search input taking prominence. Below, a two-column grid presents example prompts as italicized text blocks, each functioning as a clickable suggestion. The footer repeats the logo with attribution text and secondary navigation links.

In the quiz flow, the modal panel centers on screen with generous padding. Step indicators appear at top center, followed by the Playfair Italic brand voice, then the question in body-medium. Product cards arrange in a two-column comparison layout with equal width columns. Each card contains a product image, name, brand, description, and action button. Below the cards, secondary options ("BOTH", "NONE") provide escape hatches.

Spacing follows a clear hierarchy: 6px (0.375rem) for tight internal tag padding, 12px (0.75rem) for button vertical padding, 16px (1rem) for card internal spacing, 24px (1.5rem) for modal padding, and 48px (3rem) for section breaks. The generous 580px horizontal margins on some centered elements create dramatic focus on narrow content.

## Visual language

The visual language draws from fashion editorial rather than typical e-commerce: restrained, confident, and photography-forward. Rounded corners appear everywhere interactive or containing—cards at 16px, buttons as full pills, tags as pills—but never on pure content images. This creates a clear hierarchy: soft containers for interface, sharp edges for fashion photography.

Shadows are minimal and purposeful. A soft ambient shadow (rgba(0,0,0,0.1) at 4px 6px -1px) lifts modals and elevated cards slightly from their backgrounds. The selected state uses a distinctive lavender glow (#CF9FFF at 0px 0px 0px 2px) rather than a conventional border, creating an ethereal focus indicator that feels appropriate for a fashion context.

Borders function as hairlines: 1px solid rules in subtle grays define card edges, tag outlines, and button perimeters. The divider between header and content uses a 1px top border in warm gray. These borders are nearly invisible until needed, providing structure without visual weight.

The photography treatment is consistent: product shots on warm off-white backgrounds, centered within their containers, with no additional framing or effects. This lets the garments speak directly. The interface color palette deliberately harmonizes with these photography backgrounds so that product cards feel like natural extensions of the images they contain.

Interactive states communicate through color inversion and glow rather than dramatic transformation. Primary buttons fill with navy; secondary buttons outline in navy with navy text. Selected cards gain the lavender halo. Hover states darken slightly (action-hover at #2C3E8C). The overall motion philosophy, inferred from static states, suggests gentle transitions rather than abrupt changes.

## Components

### Primary button

- Anatomy: Full-width or contained pill button with centered uppercase label
- Surface: Navy fill (#004AAD) with white text, or white fill with navy text and border for secondary variant
- Typography: label token, 10px bold uppercase with 1px letter-spacing
- Shape: Full pill (9999px border-radius), 12px vertical padding, full width in card context
- Spacing: 12px top and bottom padding, text centered
- States: Default shows outlined navy; active/primary shows filled navy with white text; hover darkens to #2C3E8C

### Secondary button (tertiary action)

- Anatomy: Compact pill button with uppercase label
- Surface: White fill with subtle gray border (#D4D4D4), muted text (#737373)
- Typography: label token
- Shape: Full pill, 6px vertical and 12px horizontal padding
- Use: Category filters, "WOMEN" toggle, "VISUAL SEARCH" option

### Feature tag

- Anatomy: Inline pill containing uppercase feature description
- Surface: White fill with subtle gray border
- Typography: label token
- Shape: Full pill, compact padding
- Composition: Arranges in flowing rows within right panel of quiz step
- States: Default outlined; selected state not fully visible but implied by interaction

### Product card

- Anatomy: Vertical card containing product image, name, brand label, description, and action button
- Surface: White or warm white background (#FAFAF8 or #FFFFFF), 16px border-radius
- Typography: Product name in body-small bold, brand in body-small muted, description in caption
- Shape: 16px rounded corners
- Spacing: 16px internal padding, image flush to top edge of card
- States: Default shows subtle border; selected state gains lavender outer glow (#CF9FFF, 0px 0px 0px 2px)

### Quiz modal

- Anatomy: Centered panel containing step indicator, brand voice, question, product comparison, and secondary options
- Surface: White fill (#FFFFFF), 16px border-radius, soft shadow lift
- Typography: Step indicator in label-wide, brand voice in section-display, question in body-medium
- Shape: 16px rounded corners
- Spacing: 24px horizontal padding, generous vertical breathing room
- Composition: Centered on screen with gray backdrop (#E5E5E5)

### Search input

- Anatomy: Large text area with placeholder text, category toggle, visual search option, and submit button
- Surface: White fill, subtle border, 16px border-radius
- Typography: Placeholder in body muted, submit button in label
- Shape: 16px rounded corners
- Spacing: 24px padding, internal elements with 16px separation
- Composition: Full-width within container, submit button positioned bottom-right

### Navigation link

- Anatomy: Uppercase text link with generous letter-spacing
- Surface: Transparent, text only
- Typography: navigation token, 10px bold uppercase with 2px letter-spacing
- Color: Muted gray (#737373) default
- Composition: Horizontal arrangement in header and footer

## Responsive behavior

The visible interface suggests a desktop-first design with centered content and fixed proportions. The quiz modal maintains consistent width and centered positioning. Product comparison cards appear side-by-side at equal width.

For narrower viewports, the two-column product comparison should stack vertically, with each card taking full width and action buttons remaining full-width within cards. The example prompt grid on the landing page should collapse from two columns to a single column. Header navigation may compress into a condensed menu or horizontal scroll.

The search input should remain prominent but may reduce internal padding. Step indicators and brand voice should maintain centered alignment. Touch targets for pill buttons and tags should remain at least 44px tall to accommodate finger interaction.

The generous horizontal margins (up to 580px on some centered elements) suggest a maximum content width around 800-900px for readable line lengths. On very wide screens, this centered island approach should persist rather than stretching to fill.

## Practical implementation guidance

### Preserve
- The warm off-white canvas (#FAFAF8) as the default surface; avoid pure white for large areas
- The 10px bold uppercase label treatment with letter-spacing for all buttons and navigation
- The Playfair Italic "vogue AI assistant" voice as a consistent brand signature
- The lavender glow (#CF9FFF) exclusively for selected/focused card states
- Full pill shapes for all interactive elements; no partially rounded buttons
- Product photography on warm neutral backgrounds without additional framing

### Avoid
- Adding background colors or gradients behind product images
- Using the navy action color for non-interactive text or decorative elements
- Introducing additional accent colors beyond the established navy and lavender
- Sharp corners on cards, buttons, or tags
- Underlining navigation links; rely on spacing and uppercase treatment instead
- Making the hero headline heavier than 300 weight; the light weight is essential to the elegant tone

### Recommended build order
1. Establish the color tokens and apply canvas and surface colors to page structure
2. Implement DM Sans 9 Pt at all weights, then add Playfair Italic for brand voice
3. Build the pill button component with primary, secondary, and tertiary variants
4. Create the product card with image, text hierarchy, and action button
5. Assemble the quiz modal with step indicator, question, and two-card comparison
6. Implement the landing page hero with search input and example prompt grid
7. Add header and footer with logo and navigation
8. Polish with shadow, border, and selected-state glow treatments

### Accessibility
- Ensure the light weight hero display (300) meets contrast requirements at large sizes; consider 400 weight if implementation shows readability issues
- The lavender glow (#CF9FFF) on white may not meet 3:1 contrast for focus indication; supplement with a visible border change or darker glow offset
- All uppercase labels with tight letter-spacing should use aria-label or visually hidden text for screen reader clarity
- Product comparison cards need clear programmatic labels indicating selection state
- The search input placeholder should not replace a visible label; add persistent labeling

## Scope note

This guide covers the landing page and stepped quiz flow visible in the supplied images. Mobile layouts, loading states, error handling, search results pages, and account functionality are not represented. The footer navigation links (EDITORIAL, ABOUT, PARTNERS, PRIVACY, TERMS, AFFILIATE DISCLOSURE, CONTACT) suggest additional pages exist but are not documented here. Motion and animation behavior is inferred from static states only. System-Uisansserif appears in the source as a system fallback family but is not visually prominent in the captured interface states.
