# How affinity.studio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/affinity.studio-design)

Last updated: 2026-08-04

## Captured pages

[![Black homepage hero with oversized serif headline and floating collage cards](https://pin.fontofweb.com/4243?format=jpg)](https://design.withfudge.com/share/pin-4243)

[Black homepage hero with oversized serif headline and floating collage cards](https://design.withfudge.com/share/pin-4243)

[![Lavender iPad banner with tilted tablet and stylus hand on the right](https://pin.fontofweb.com/4712?format=jpg)](https://design.withfudge.com/share/pin-4712)

[Lavender iPad banner with tilted tablet and stylus hand on the right](https://design.withfudge.com/share/pin-4712)

[![Dark download page with twin platform cards and lime action buttons](https://pin.fontofweb.com/4711?format=jpg)](https://design.withfudge.com/share/pin-4711)

[Dark download page with twin platform cards and lime action buttons](https://design.withfudge.com/share/pin-4711)

[![Warm FAQ block with large serif heading and stacked accordion rows](https://pin.fontofweb.com/4242?format=jpg)](https://design.withfudge.com/share/pin-4242)

[Warm FAQ block with large serif heading and stacked accordion rows](https://design.withfudge.com/share/pin-4242)

[![Near-black footer with lime glow and compact link columns](https://pin.fontofweb.com/4707?format=jpg)](https://design.withfudge.com/share/pin-4707)

[Near-black footer with lime glow and compact link columns](https://design.withfudge.com/share/pin-4707)

## Overview

Affinity’s page language is severe in the good way: big serif statements, quiet sans support text, and a strict split between black poster-like stages and pale information sections. The site feels like a software brand that wants the work itself to stay vivid while the interface stays disciplined. The black hero surfaces let the white headline dominate. The lavender iPad announcement gives the page one soft interruption. The download and FAQ sections switch to warm light grounds so dense product information can breathe without losing authority.

The system depends on contrast more than ornament. A single lime action color carries the interactive moments. Thin borders, hairline rules, and ample empty space keep the dense sections readable. Product imagery is bright and chromatic, but it is framed by very restrained UI so the artwork and device mockups do the expressive work. The serif family also has an italic companion that appears as a visual stress accent when the page needs a more editorial note.

## Colors

Affinity’s palette is narrow at the interface level and broad inside the imagery. The site keeps the global UI mostly in black, white, warm off-white, and one lime action color. The colorful illustrations and device screenshots are part of the brand expression, but they do not become a loose rainbow of interface tokens. The same lime green appears on buttons and small call-to-action chips across black and pale surfaces, so the action color stays consistent even when the page changes mood. The lavender announcement panel is the one soft color stage; it reads like a pause between harder black sections.

| token | value | role |
|---|---|---|
| `action` | `#A7EE77` | Primary buttons, download chips, and the bright emphasis on dark stages |
| `ink` | `#000000` | Headlines, body copy, and rule text on light surfaces |
| `muted-ink` | `#5C5B57` | Secondary paragraph text, FAQs, and quiet explanatory copy |
| `canvas` | `#F5F5F3` | Warm page background and light section ground |
| `surface-soft` | `#F8F8F8` | Card fields, comparison blocks, and light content panels |
| `surface-dark` | `#000000` | Hero stages, the download page, and the footer base |
| `surface-lavender` | `#D4BFFD` | The iPad announcement banner and other soft promotional panels |
| `border` | `#B7B7B9` | Accordion dividers, card outlines, and the quiet separators in dense sections |

Use the light and dark modes as hard chapters, not as small variations. Light sections should feel airy and editorial, with black type on ivory or near-white. Dark sections should feel poster-like and spare, with white type, a single lime interaction color, and minimal decoration. Photographic and illustrated areas can bring in vivid greens, pinks, blues, and oranges, but those colors should remain inside the art or device mockups rather than becoming page chrome. The lavender panel is the exception that proves the rule: it softens the page without introducing a new UI language.

## Typography

The typography system is almost entirely one family for display and one family for support. **Affinity Serif Variable** carries the loud moments: the giant hero line, the download heading, and the large FAQ title. Its contrast and sharp terminals give the page a premium, editorial feel. **Affinity Serif Variable-Italic** provides the slanted companion voice for stressed words, brand lockups, and occasional emphasis inside large statements. **Canva Sans Sans** handles the practical layers: body copy, labels, helper text, and the compact legal material. The balance is deliberate. Headlines are expressive; the reading system is plain and calm.

The serif family is credited to Oh No Type Company. Font licensing is not stated here.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Affinity Serif Variable | 4.5rem | 700 | 0.95 | -0.03em | Main hero statements such as “Get Affinity” |
| `hero-display-italic` | Affinity Serif Variable-Italic | 4.5rem | 700 | 0.95 | -0.03em | Slanted emphasis in large headlines, wordmarks, and display accents |
| `section-display` | Affinity Serif Variable | 3.5rem | 700 | 0.95 | -0.025em | Large page section heads like the download page title |
| `product-display` | Affinity Serif Variable | 2.5rem | 700 | 1 | -0.02em | Product names, announcement text, and compact display lines |
| `body` | Canva Sans Sans | 1rem | 400 | 1.5 | 0em | Explanatory paragraphs and supporting copy |
| `body-strong` | Canva Sans Sans | 1rem | 600 | 1.5 | 0em | Buttons, emphasized labels, and stronger inline copy |
| `label` | Canva Sans Sans | 0.875rem | 500 | 1.2 | 0.02em | Platform labels, section tags, and small UI text |
| `legal` | Canva Sans Sans | 0.75rem | 400 | 1.4 | 0.01em | Footer links, legal copy, and the smallest informational text |

The hierarchy works by scale and spacing more than by many weights. Serif headlines are tight and theatrical. Sans text opens up just enough to keep long explanatory lines readable. The brand never needs a second display family to create emphasis; it uses size jumps, contrast, and occasional italic stress instead.

## Layout

The layout is built as a sequence of strong chapters. The opening black hero reads like a poster: the headline sits left of center, the action sits close by, and the right side is occupied by floating collage cards, a pricing card, or device imagery. That composition leaves a wide, quiet field around the type so the page can start with authority instead of clutter. The announcement banner changes tempo immediately after that. It is a large lavender rounded rectangle on a dark field, with a tilted tablet on the right and a short line of supporting text on the left. The shape is large enough to feel like a feature callout, but it still reads as a single controlled object.

The download section is more structured. A centered headline and subtitle sit above two large platform cards. Each card is a deep panel with a platform name, a short explanation, a green call-to-action, and a screenshot or product preview anchored lower in the box. The two cards form a symmetrical pair, which makes the page feel confident and product-led rather than promotional.

The FAQ section flips the mood again. The left side carries an oversized serif “FAQs” marker, while the right side holds a clean accordion stack with thin separators and generous vertical rhythm. That layout makes the dense questions feel orderly instead of crowded. The footer returns to black and uses columns of links with small legal text and a thin glowing accent at the top edge. Across the page, the site uses rounded panels for major blocks, but it does not over-round every small element. Buttons are pill-like; the big containers are softer but still architectural.

The layout also relies on long horizontal spans and clear centerlines. Headings often sit on their own axis instead of sharing a busy grid with body copy. That gives the page a gallery-like rhythm: one strong statement, one supportive block, one large visual, then a calmer information panel. The result is easy to scan even when the page contains multiple calls to action and comparison details.

## Visual language

The visual language is editorial, polished, and slightly theatrical. Serif headlines feel like magazine mastheads. They are large enough to hold the page together on their own, and they usually sit against a plain ground so the letterforms stay crisp. The sans text is quieter and more utilitarian, which keeps the interface from turning ornate. That contrast is one of the site’s main signatures.

The second signature is the restraint around accent color. Lime green is loud by comparison to everything else, so it gets treated like a signal. It shows up on primary buttons and small interaction chips, not as a general fill color. That makes the action feel intentional rather than decorative. A third signature is the way imagery is framed. The art and screenshot content are bright, varied, and lively, but the page always wraps them in a strict black or pale structure. The frame stays calm so the image can be exuberant.

Shape language is simple and repeatable. The large panels use rounded rectangles with soft corners. The buttons are pills or near-pills. The FAQ and content rows stay mostly square with thin rules. That mix keeps the page from becoming mushy. High contrast, restrained chrome, and bright image inserts give the site its confidence. Italic serif usage is rare and therefore noticeable; it acts as a slight tilt in the voice rather than a separate style system.

## Components

### Hero stage

- **Anatomy:** oversized serif headline, short sans support line, one primary action, and a dominant visual object on the right.
- **Surface:** usually black, with white text and a lime button.
- **Typography:** the headline uses the largest serif role; the supporting line uses the body role. The italic serif companion can appear in emphasized words without changing the overall voice.
- **Composition:** the type block is left-weighted, while the image or collage pushes into the right half and sometimes beyond the panel edge.
- **Visible states:** the action reads as a bright lime rounded button with black text and minimal depth.

### Announcement banner

- **Anatomy:** a wide lavender panel, a compact headline, a short supporting sentence, and a tilted tablet or product mockup.
- **Surface:** the lavender panel is the calmest color block on the page.
- **Typography:** the headline remains serif-led, with the support line in the sans family.
- **Shape:** the panel has soft large-radius corners and sits as a single floating block.
- **Composition:** text stays on the left; the device and hand imagery take the right edge.

### Download cards

- **Anatomy:** centered title, short intro, then two large platform cards for macOS and Windows.
- **Surface:** deep black cards with faint borders and a strong photo or screenshot component.
- **Typography:** the platform name is large and serif-heavy; the explanatory text is small and sans.
- **Spacing:** cards have generous interior padding and a lot of air around the buttons.
- **Visible states:** the green call-to-action remains the only bright interaction color inside each card.

### FAQ accordion

- **Anatomy:** giant serif section label on the left and a vertical accordion stack on the right.
- **Surface:** warm light ground with thin gray rules between rows.
- **Typography:** the questions use a straightforward sans style; the section label is dramatically larger.
- **Hierarchy:** one row can open into a longer paragraph block without breaking the page rhythm.
- **Composition:** the left label acts like a sidebar marker, while the right column carries the reading load.

### Footer

- **Anatomy:** dark base, top glow, compact columns of links, and small legal copy.
- **Surface:** black with a subtle lime accent near the top edge.
- **Typography:** footer copy stays small and quiet, with stronger column labels above it.
- **Spacing:** column spacing is wide enough that the links read as separate groups.
- **Visible states:** links stay restrained; nothing in the footer competes with the main actions above it.

### Primary action

- **Fill:** `#A7EE77`.
- **Text:** black, not white, so the button feels crisp and readable on both dark and pale surfaces.
- **Shape:** a rounded pill with no hard corners.
- **Use:** reserve it for download, sign-up, and the main conversion moment in each section.
- **Hierarchy:** it should be the brightest interface object outside the artwork itself.

### Italic serif emphasis

- **Anatomy:** the same serif voice, but slanted for emphasis rather than for body text.
- **Surface:** it appears inside large statements, wordmarks, or short accent phrases.
- **Typography:** keep the same scale as the roman display role so the style change reads as tone, not as a different tier.
- **Use:** highlight a single word, a brand phrase, or a short stress point; do not set long paragraphs in this style.
- **Visible states:** the italic form should feel like a deliberate turn in emphasis, not a decorative flourish.

## Responsive behavior

On smaller screens, the page should keep the same chapter order but collapse the side-by-side compositions into a single column. The hero should place the headline first, then the action, then the visual object. The announcement banner should let the tablet stack below the copy or shrink into a tighter right-aligned crop. The download cards should become vertically stacked panels with equal width so the card rhythm survives without horizontal squeezing. The FAQ should collapse into a single-column accordion with generous tap targets and visible row separators. The footer should keep its column labels but reduce the number of columns per row before it reduces the overall reading size.

The main rule is that the serif hierarchy must stay legible at every width. If the layout gets tighter, reduce image scale before reducing the clarity of the headline. The green action should remain prominent, but it does not need to dominate the whole viewport on mobile the way it does on desktop. Dense informational areas should keep their thin rules and spacing, because those are what stop the page from feeling cramped. The italic serif companion should remain rare on small screens so it does not compete with the main reading flow.

## Practical implementation guidance

### Preserve

- Keep the serif headline family as the main identity marker.
- Keep the action color lime green and use it sparingly.
- Keep the page organized as strong black, pale, and lavender chapters.
- Keep artwork vivid, but let the surrounding interface stay restrained.
- Keep major cards soft and rounded without turning every control into a blob.

### Avoid

- Avoid introducing extra accent colors into buttons, links, or labels.
- Avoid heavy shadows and glossy effects; the system reads better when it stays flat.
- Avoid mixing many font families or using sans display type for the main headlines.
- Avoid tight line lengths in the FAQ and footer, where the page already carries a lot of text.
- Avoid making all sections use the same background tone; the page depends on contrast between chapters.

### Recommended build order

1. Set the serif and sans hierarchy first.
2. Build the black hero and its lime primary action.
3. Add the lavender announcement banner with the tablet composition.
4. Build the download cards and then the FAQ accordion.
5. Finish with the footer and its subtle glow.
6. Refine spacing, card radii, and the mobile stack after the structure feels right.

### Accessibility

- Keep strong contrast on black and lavender surfaces.
- Make sure the lime button text remains black and bold enough to read quickly.
- Give FAQ rows and footer links visible focus treatment.
- Keep hit areas generous for the accordion rows and download buttons.
- Do not rely on color alone to separate states; use spacing, rules, and shape as well.

## Scope note

This guide covers the marketing homepage, the iPad coming-soon banner, the download page, the FAQ area, and the footer. Mobile stacks, hover and focus states, motion, exact breakpoints, and the full system outside those surfaces are not included. Measurements are practical adaptation targets.
