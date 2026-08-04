# How ami.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ami.dev-design)

Last updated: 2026-08-04

## Captured pages

[![Top hero with the orchid download button and command pill](https://pin.fontofweb.com/6958?format=jpg)](https://design.withfudge.com/share/pin-6958)

[Top hero with the orchid download button and command pill](https://design.withfudge.com/share/pin-6958)

[![Centered app screenshot with the split desktop workspace](https://pin.fontofweb.com/6957?format=jpg)](https://design.withfudge.com/share/pin-6957)

[Centered app screenshot with the split desktop workspace](https://design.withfudge.com/share/pin-6957)

[![Pricing table with aligned columns and quiet dividers](https://pin.fontofweb.com/6956?format=jpg)](https://design.withfudge.com/share/pin-6956)

[Pricing table with aligned columns and quiet dividers](https://design.withfudge.com/share/pin-6956)

[![FAQ stack and closing download call to action](https://pin.fontofweb.com/6955?format=jpg)](https://design.withfudge.com/share/pin-6955)

[FAQ stack and closing download call to action](https://design.withfudge.com/share/pin-6955)

## Overview

ami.dev is a spare landing page for a desktop code-help product. The page is built around one narrow reading column, a small top navigation, a compact hero, a large product screenshot, and a closing set of pricing, FAQ, and footer links. The design does not chase novelty through decoration. It depends on white space, a tight typographic ladder, and a single orchid call to action that carries the page from the hero through the final footer line.

The page feels calm rather than luxurious. Most surfaces stay white or near-white, the rules are thin, and the text stays close to the left edge of the content rail. The big product image provides the only heavy visual block, so the surrounding blocks stay quiet and allow the product view to do the work. The result is a page that reads quickly and feels specific to developers without becoming noisy or playful.

## Colors

Ami stays nearly monochrome. White canvas fills most of the page, light gray surfaces hold the command pill and data blocks, and thin gray borders separate cards and rows. The orchid action color is the only strong brand signal. A small blue utility color appears inside the embedded app screenshot and should stay a supporting accent, not a second brand color. Dark tones are used sparingly for headings, body text, and code-like UI. The overall effect is light and crisp, with color reserved for control, emphasis, and the product image itself.

| token | hex | use |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page background and card interiors |
| `canvas-soft` | `#FEFEFE` | Very light white for inset panels and top-level framing |
| `surface` | `#F3F3F3` | Command pill fill, muted rails, and pale UI fields |
| `surface-soft` | `#F0F0F0` | Secondary surface fill for code-like blocks and subtle chip backgrounds |
| `border` | `#D6D6D6` | Table rules, card outlines, and light separators |
| `border-strong` | `#D3D3D3` | Slightly firmer dividers for stacked FAQ rows and footer edges |
| `ink` | `#1A1A1A` | Main headings, buttons, and the strongest text on light surfaces |
| `ink-soft` | `#555555` | Supporting paragraphs, table values, and quieter labels |
| `ink-muted` | `#767676` | Helper copy, footer links, and low-emphasis metadata |
| `action` | `#EB67FF` | Primary download button fill and the page’s main accent color |
| `action-soft` | `#F5A3FF` | Lighter orchid highlight for depth and contrast around the action button |
| `utility-link` | `#0071E9` | Small blue UI accent inside the embedded app screenshot |

The palette works in three layers. The page shell stays white. The product blocks use pale gray. The action color stays orchid. The embedded app screenshot introduces darker chrome and a tiny blue accent so the page can imply a working desktop tool without turning the landing page itself into a dark interface.

## Typography

Inter is the only proportional family across the page. The system depends on scale, weight, and spacing rather than font changes. Regular and Medium do most of the work, with Semibold reserved for the main headline and section titles. System-Uimonospace appears only in the install command and code-like fragments. Licensing for Inter is not stated here.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Inter | 1.25rem | 600 | 1.2 | -0.01em | Hero line and the most prominent section headings |
| `section-heading` | Inter | 1.25rem | 600 | 1.2 | -0.02em | Pricing title, FAQ title, and other section labels |
| `body` | Inter | 1rem | 400 | 1.625 | 0em | Hero support copy, process list text, and table body text |
| `body-medium` | Inter | 1rem | 500 | 1.625 | 0em | Buttons, navigation links, and emphasized body text |
| `meta` | Inter | 0.8125rem | 400 | 1.25 | 0em | Helper copy, footer links, and small secondary notes |
| `code` | System-Uimonospace | 0.75rem | 400 | 1.6667 | -0.02em | Shell command text and inline code fragments |

The scale is modest. The page never jumps to a theatrical display size. Instead, it uses a restrained ladder where the headline is only a little larger than the section labels, and most of the text sits at 16px with generous leading. That keeps the page readable at a glance and gives the product screenshot room to act as the visual anchor.

## Layout

### Frame

The site is built on a centered single column with large white margins on both sides. The header stretches across the top, but the content itself stays narrow and aligned to one rail. That choice matters more than any decorative shape: the page reads like a carefully edited document, not a dashboard or a marketing grid. The page should keep the main text block narrow even when the viewport is wide. The screenshot and pricing card should share the same center line so the page feels assembled from one system rather than multiple unrelated modules.

### Hero stack

The opening section places a short headline above a restrained paragraph, then a filled action button and a pale command pill. The button and pill sit close together so the user can choose either the direct download path or the command path without scanning far. The spacing around this stack is generous, but the content itself is compact. The hero does not need a large illustration beside the text because the large product screenshot below it becomes the visual proof.

### Content flow

After the hero, the page moves into the product image, then a short explanatory list, then pricing, then FAQ, then footer. The sequence is linear and deliberate. Each block is separated by open vertical space rather than heavy section bars. The product screenshot should remain large and centered, because it carries the strongest visual weight on the page. The pricing card should feel like a clean data block rather than a sales table full of decoration. The FAQ should remain flat and text-first. The footer should stay low-key and avoid turning into a dense sitemap.

### Spacing rhythm

The page relies on a handful of repeated gaps: a small gap between linked words, a medium gap between label and body text, and a larger gap between major blocks. Thin dividers do most of the structural work inside cards and FAQ rows. Corners stay modest, so the page feels precise rather than soft. This rhythm keeps the page calm even though it contains a hero, a screenshot, a data table, and an accordion.

## Visual language

Ami uses the language of a polished desktop tool, but the landing page itself remains almost entirely white. That contrast is the brand’s key move: the marketing shell is spare, while the large embedded app image supplies the sense of depth, chrome, and workflow. The page avoids illustration, gradients, and ornamental fills. Instead, it leans on text hierarchy, thin rules, and one strong color.

The orchid action color gives the page its memorable note. It is bright enough to stand out against white, but not so saturated that it competes with the screenshot. Gray fills and gray borders keep the page from feeling empty. The embedded app image adds a second mood: compact chrome, rounded app panes, and code-review surfaces that make the product feel active without changing the outer landing page into a dark theme.

The visual tone is direct and practical. Labels are short. Rows are tidy. Buttons are small. The page feels built for a developer audience that wants clarity, not spectacle.

## Components

### Header

The header is a thin top bar with the Ami mark and name on the left, text links in the middle, and one filled Download button on the right. The links are understated and sit as plain text rather than tabs. The button is the only filled item in the navigation, so it should stay visually distinct from the rest of the bar. Keep the header low in visual weight; it should frame the page, not compete with the hero.

### Hero block

The hero block combines a short bold line, one supporting sentence, a filled action button, and a pale command pill. The action button uses the orchid fill and dark text. The command pill uses a soft gray surface and monospace text so it reads as a copyable install path rather than a second headline. Keep the two actions close enough to feel related. The hero works because it is concise; it should not be stretched into a tall feature pitch.

### Embedded app window

The large screenshot sits inside a rounded white frame and shows the desktop app chrome, side navigation, and split working panes. It should read as a framed object rather than a floating collage. The frame edge is subtle, the corners are soft, and the content inside is dense compared with the landing page around it. That density is intentional. The screenshot gives the page its technical credibility and should remain the largest element after the hero.

### Process list

The explanatory middle section uses short bullets with strong opening verbs. Each line starts with a direct action word and then explains the next step in plain language. The list is narrow, airy, and text-led. It should feel like a quick read rather than a marketing manifesto. The bullets separate the steps cleanly, and the bold lead verbs help the eye move through the sequence.

### Pricing card

The pricing block is a simple white card with a header row and evenly spaced rows. Border lines stay light and precise. The model names sit on the left, while the numeric columns line up on the right. This is a data object, so it should not take on the tone of a feature comparison grid. Keep the card readable and restrained. The numbers should remain the most legible part after the labels.

### FAQ accordion

The FAQ appears as a stack of flat rows separated by thin horizontal rules. Each row has a short question on the left and a chevron on the right. The component should feel calm and compact, not like a heavy card stack. The rows look closed in the page view, so the closed state must remain simple and text-first. The accordion works best when it keeps the same line rhythm as the rest of the page.

### Footer

The footer is a quiet line of muted links and a small closing note. It should stay centered and low contrast. The footer does not need columns, boxes, or blocks. Its job is to end the page with the same discipline that the rest of the page uses. Keep the links readable but visually secondary to the download path above.

## Responsive behavior

On smaller screens, the page should keep the same order: header, hero, product image, process list, pricing, FAQ, footer. If space tightens, the hero should stack before the screenshot rather than beside it. If the pricing table can no longer fit comfortably, it should become horizontally scrollable or otherwise preserve column clarity instead of squeezing the numbers. The command pill should stay readable and not wrap into a noisy pile of fragments. The footer should remain a simple list of links, not a grid.

The responsive goal is not to add new visual ideas. It is to preserve the same calm hierarchy at a smaller width. The screenshot can shrink, but it should not lose its framing or become a tiny thumbnail. The content rail should stay readable, and the action button should remain easy to reach.

## Practical implementation guidance

### Preserve

- Keep the page almost entirely white, with pale gray blocks and one orchid action color.
- Keep Inter as the sole proportional family.
- Keep the main content in one centered column.
- Keep the product screenshot large enough to carry the page.
- Keep thin borders and modest radii; avoid heavy chrome.

### Avoid

- Avoid adding a second strong accent color beyond the small blue utility note.
- Avoid dark full-width section bands.
- Avoid oversized headlines that break the page’s quiet tone.
- Avoid noisy shadows, dense icon systems, and decorative gradients.
- Avoid turning the footer or FAQ into multi-card layouts.

### Recommended build order

1. Set the header, hero copy, and primary action.
2. Add the command pill and the rest of the hero stack.
3. Place the large embedded app window and frame it cleanly.
4. Build the process list and keep its bullets short.
5. Add the pricing card with aligned numeric columns.
6. Add the FAQ rows and the quiet footer.

### Accessibility

- Keep clear focus states on the header links, button, command pill, and FAQ rows.
- Maintain strong contrast for the main text on white and the muted text on pale gray.
- Make the screenshot alt text specific to the app layout it shows.
- Keep link underlines or another non-color cue so text links remain obvious.
- Ensure the table stays readable by screen readers and by keyboard users if it becomes scrollable.

## Scope note

This guide covers the desktop landing page: header, hero, product screenshot, process list, pricing card, FAQ, and footer. Mobile collapse behavior, hover and focus styling details, and the deeper app interface beyond the screenshot are not included here.
