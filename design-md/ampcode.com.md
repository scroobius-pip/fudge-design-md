# How ampcode.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ampcode.com-design)

Last updated: 2026-08-04

## Captured pages

[![Homepage hero with oversized italic headline and right-side action](https://pin.fontofweb.com/9178?format=jpg)](https://design.withfudge.com/share/pin-9178)

[Homepage hero with oversized italic headline and right-side action](https://design.withfudge.com/share/pin-9178)

[![Homepage install band with centered terminal panel and sparse accents](https://pin.fontofweb.com/9179?format=jpg)](https://design.withfudge.com/share/pin-9179)

[Homepage install band with centered terminal panel and sparse accents](https://design.withfudge.com/share/pin-9179)

[![Owner’s Manual page with left contents rail and ruled article layout](https://pin.fontofweb.com/9180?format=jpg)](https://design.withfudge.com/share/pin-9180)

[Owner’s Manual page with left contents rail and ruled article layout](https://design.withfudge.com/share/pin-9180)

## Overview

Ampcode’s visual system is a dark, editor-like stage built for people who already think in terminals, docs, and code blocks. The default surface is nearly black, but it is not flat in feeling: the homepage hero leans into a deep green-black field, the manual route settles into a charcoal reading room, and both surfaces are punctuated by thin rules, compact chips, and tiny bursts of color rather than large decorative shapes. The tone is serious and technical, but the page still feels edited. Large serif headlines set the mood; smaller sans copy handles explanation; monospace details make commands, file paths, and UI labels feel native.

The design changes register by section rather than by theme overhaul. Marketing pages open wide and cinematic. The manual tightens into a left navigation column and a long article column. In both cases, the system keeps the same contrast, the same sparse accent discipline, and the same preference for one strong message at a time.

## Colors

Ampcode uses a deliberately small palette on top of a black base. Orange is the acquisition color. Mint is the system and terminal color. Off-white is the main reading color. Muted green-gray and charcoal values keep the page from feeling harsh, and the warm red and yellow tones appear only as alerts, status cues, or code-highlight details. The relationship between modes is simple: the homepage can open on the darker green-black hero field, while the manual and embedded terminal views sit inside black or charcoal shells with pale text and narrow borders.

| token | hex | use |
|---|---|---|
| `canvas` | `#000000` | Main page base and footer ground |
| `surface-deep` | `#0B0D0B` | Near-black shell behind nav and footer areas |
| `surface-hero` | `#091C1E` | Hero background with a cool terminal tint |
| `surface-panel` | `#171717` | Dark panels and reading containers |
| `surface-shell` | `#1D2021` | Terminal frame and dense content blocks |
| `border` | `#282828` | Hairline borders around cards and panes |
| `muted-border` | `#4D4B44` | Subtle divider or chrome line in code shells |
| `muted-ink` | `#9CA49C` | Secondary prose and quiet labels |
| `action` | `#F6833B` | Primary get-started buttons and key links |
| `status` | `#00FF88` | Mint status lights, mode tags, and code highlights |
| `warning` | `#F34E3F` | Manual section numbers and warning-like emphasis |
| `code-ink` | `#FBF1C7` | Command text and highlighted terminal copy |
| `code-surface` | `#F6FFF5` | Light code input or inset command strip |
| `ink` | `#F6F6F6` | Main headlines and body copy on dark surfaces |
| `ink-soft` | `#878B86` | Supporting copy, captions, and understated labels |
| `accent-olive` | `#98971A` | Small status text and niche code accents |
| `accent-fog` | `#091C1E` | Cool shadowed tone that supports the hero field |

Use orange when the interface needs a clear next step. Use mint when the interface is speaking like a tool: mode names, terminal prompts, status dots, and code emphasis. Keep both colors scarce enough that they stay legible as signals rather than decoration.

## Typography

Ampcode combines three distinct voices: a dramatic serif for the brand’s emotional headline, a second serif for section structure and manual reading, and a clean sans for body copy and navigation. The page also uses two utility voices for code and inline technical detail. Perfectly Nineties-500 handles the heavier section headings, while System-Systemui carries the smallest utility lines in the footer and manual chrome. The result is a hierarchy that feels editorial without losing the precision of software documentation.

The family credits are specific: Sagittaire is by Valerio Monopoli for Blaze Type; Perfectly Nineties and Perfectly Nineties-500 are by Jen Wagner Co; Poly Sans is by Milos Mitrovic for Gradient; Tx 02 is by Neil Panchal for Us Graphics Company. Consolas, Iowan Old Style, System, and System-Systemui are present as uncredited system or fallback faces. Licensing for reuse should be checked separately.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Sagittaire | 5.5275rem | 400 | 0.9 | -0.06em | Hero headline on the homepage |
| `section-display` | Perfectly Nineties-500 | 2rem | 500 | 1.125 | -0.01em | Major manual and feature headings |
| `article-display` | Perfectly Nineties | 1.5rem | 400 | 1.2 | -0.02em | Secondary headlines and nav-adjacent titles |
| `body` | Poly Sans | 1rem | 400 | 1.37 | 0em | Main prose and explanatory copy |
| `lead` | Poly Sans | 1.146rem | 400 | 1.41 | 0em | Hero support text and intro paragraphs |
| `nav` | Perfectly Nineties | 1rem | 700 | 1.5 | 0em | Top navigation and strong links |
| `legal-copy` | System-Systemui | 0.75rem | 400 | 1.33 | 0em | Footer metadata and legal lines |
| `code-inline` | Tx 02 | 0.768rem | 400 | 1.41 | 0em | Command snippets, file names, and tags |
| `monospace-note` | Consolas | 0.688rem | 400 | 1.33 | 0em | Tiny terminal notes and path-like text |

The hierarchy depends on contrast in form as much as size. Sagittaire is elegant and stretched, with the widest letterforms reserved for the hero. Perfectly Nineties becomes the structural serif for section labels and navigation. Poly Sans keeps the body text plain and readable in the long manual column. Monospace text appears as a utility layer, never as the page’s main voice.

## Layout

The homepage is built as a wide editorial grid with large air between vertical bands. The hero sits high and left-aligned, with the logo tucked into the corner and the main headline occupying a large middle column. The call-to-action is not buried under explanation; it sits near the headline or just to the right of it, so the eye can move from promise to action in one pass. The background grid lines are faint enough to feel like scaffolding rather than decoration.

The install section below the hero uses a split composition. One side carries a large title and a short explanation, while the other side houses a terminal-like panel and command chip. This section is the clearest example of Ampcode’s habit of combining a marketing promise with a literal software artifact. The page does not rely on illustrations to explain the product; it shows a shell, a prompt, and a path.

The manual route reverses the emphasis. A narrow left column contains the table of contents, nested links, and back navigation. The main reading area is wide enough for comfortable prose, but still narrow enough to keep section headings and lists compact. Thin red rules divide chapters, and the article content flows in long vertical stacks with very little chrome. Footer content and social proof sections stay low-contrast and orderly so they never compete with the install or documentation content.

## Visual language

Ampcode’s visual language is built from a few repeated devices: a nearly black stage, bright white type, red-orange section rules, mint technical glints, and restrained borders around panels. The page prefers flat surfaces over shadows. When depth appears, it comes from contrast and framing rather than from heavy elevation.

The serif headlines do most of the expressive work. They are large, confident, and slightly theatrical, which keeps the brand from becoming a generic developer UI. That drama is balanced by the quieter sans body copy and by monospace snippets that make the product feel usable. The system is at its strongest when these three voices sit together: a serif claim, a plain explanation, and a code-like clue.

Terminal imagery and code blocks are treated as real interface objects, not as decorative screenshots. Their shells are dark and crisp, their contents use pale yellow or mint text, and their borders are thin enough to read as hardware edges. Buttons are compact, rectangular, and practical. The design avoids playful curves and glossy effects; it trusts spacing, typography, and a few sharp colors to carry the brand.

## Components

### Global navigation

The top navigation is small relative to the page. It uses strong serif text or a clean utility voice depending on the route, but the overall feeling is the same: concise, evenly spaced, and light in weight against the dark background. Links sit in a single line and leave wide gutters between the brand mark and the acquisition action. On the homepage, the nav stays visually quiet so the hero can dominate. On the manual page, the nav turns into the left-side table of contents and becomes part of the reading structure.

### Primary action

The primary action is a compact filled button with orange fill, off-white text, and a half-rem radius. It is not oversized; it reads as a decisive next step rather than a billboard. In the hero, it stands apart from the background by color alone. In the manual and install section, similar actions remain short and functional, often paired with code or install copy. Keep the button shape restrained so the serif typography stays in control of the page.

### Hero headline block

The hero headline block uses Sagittaire at a very large size with tight leading and strong negative tracking. The letters feel editorial and slightly luxurious, which softens the product’s technical subject matter. Supporting copy is much smaller and uses a plain sans voice. The block works because it is simple: one headline, one supporting paragraph, one obvious action. Avoid crowding it with badges or multiple buttons.

### Terminal and install panel

The terminal panel is Ampcode’s most distinctive product component. It uses a dark frame, a thin border, and pale monospace text inside. The command field or prompt strip can switch to a lighter off-white shell with black text, but the container remains sharply bounded. Status text in mint sits near the prompt or mode label, and small supporting details are tucked into the lower-right or lower-left edges. The panel should feel like a live tool surface rather than a mock illustration.

### Manual sidebar and article structure

The manual sidebar is a narrow, vertically stacked index with numbered sections, nested subitems, and a back link near the bottom. It uses small typography and enough line spacing to keep long lists readable. The article column uses repeated section headings with a red top rule, then body paragraphs and lists beneath. This structure should stay stable: sidebar on the left, content on the right, no decorative dividers beyond the section rules and small spacing breaks.

### Footer and social proof areas

The footer is quieter than the rest of the page but keeps the same dark ground and pale type. Link groups are organized into clear columns with minimal visual noise. Social proof sections rely on quotation blocks and small attribution lines rather than cards or avatars. The page’s final layers should lower contrast only slightly; they should not switch into a new visual language.

## Responsive behavior

On smaller widths, the homepage should preserve the order of meaning: brand, headline, explanation, action, then the install or terminal panel. The manual should collapse its left table of contents into a reachable navigation pattern without losing hierarchy. The terminal panel should remain readable before it stacks or shrinks, because it is part of the product story, not an optional illustration. Keep the serif headlines responsive by scale, not by changing families. Preserve the sparse accent logic so the page does not turn colorful when compressed.

## Practical implementation guidance

### Preserve

Keep the page dark first. Treat mint as a technical signal and orange as the main acquisition color. Preserve the contrast between the large expressive serif and the quieter sans prose. Keep terminal panels, section rules, and code-like chips visually crisp. Preserve the left-nav manual structure, because it gives the site its documentation credibility.

### Avoid

Avoid soft pastel branding, glossy depth, and large rounded cards. Avoid filling the page with multiple accent colors at once. Avoid replacing the serif headline voice with a generic sans headline. Avoid making code blocks look like marketing badges. Avoid adding decorative illustration where a terminal panel already explains the product.

### Recommended build order

1. Set the black and charcoal surfaces, the pale text, and the orange/mint accent pair.
2. Establish the three type voices: Sagittaire for the hero, Perfectly Nineties for structure, Poly Sans for reading.
3. Build the hero grid and the primary action.
4. Add the terminal/install panel with its border, code text, and status chip.
5. Add the manual sidebar and the ruled article layout.
6. Finish the footer, link columns, and social proof rows.
7. Verify that the page still feels like one system across marketing and manual routes.

### Accessibility

Keep white or off-white text against the black and charcoal grounds; do not weaken the contrast to chase softness. Make sure the orange button and mint status text are never the only way to understand a control or state. Keep link text descriptive in the manual sidebar. Use visible focus states that are at least as clear as the section rules. Maintain readable line lengths in the wide manual column so the serif headings do not outrun the supporting copy.

## Scope note

This guide covers ampcode.com’s public homepage and Owner’s Manual surfaces shown in the supplied images: hero, install band, social-proof strip, footer, and the long-form manual layout. It does not include mobile breakpoints, hover/focus/disabled states, authenticated product screens, or motion rules. Measurements are practical adaptation targets.
