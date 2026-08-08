# How brave.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/brave.com-design)

Last updated: 2026-08-08

## Captured pages

[![Hero section with oversized serif headline and warm two-column action card](https://pin.fontofweb.com/9441?format=jpg)](https://design.withfudge.com/share/pin-9441)

[Hero section with oversized serif headline and warm two-column action card](https://design.withfudge.com/share/pin-9441)

[![Feature grid above the split editor and dark JSON code panel](https://pin.fontofweb.com/10705?format=jpg)](https://design.withfudge.com/share/pin-10705)

[Feature grid above the split editor and dark JSON code panel](https://design.withfudge.com/share/pin-10705)

[![Expanded FAQ card with thin dividers and stacked question rows](https://pin.fontofweb.com/10706?format=jpg)](https://design.withfudge.com/share/pin-10706)

[Expanded FAQ card with thin dividers and stacked question rows](https://design.withfudge.com/share/pin-10706)

## Overview

Brave’s visual system is clean, high contrast, and strongly editorial. The page sits on a bright canvas, keeps the body copy near-black, and uses a single blue for links, tabs, and API chrome. The homepage hero uses a serif headline with a warmer call-to-action card, while the Search API pages shift toward bold Poppins section heads and calmer Inter Variable body text so the same brand can serve both consumer browsing and developer tasks without losing its voice.

The system stays visually restrained. White surfaces, pale borders, and 16px panel corners do most of the structural work. The layout leans on spacing and type scale rather than decoration. The result is a page family that feels deliberate, readable, and technical without turning clinical. The warm homepage action is the one object that breaks the cool palette on purpose, so it pulls attention without forcing the rest of the page to compete with it.

## Colors

The palette is intentionally narrow. White and near-white surfaces carry most of the page, charcoal handles the darkest contrast sections, and blue marks the interactive system only where the page needs a clear signal. That means links, active tabs, and API chrome can share one color family while the homepage call-to-action relies on a warmer card treatment instead of another blue button. Small code accents stay confined to the developer panel so they support syntax without turning the page into a rainbow.

| token | value | use |
|---|---|---|
| `action` | `#434FCF` | Links, active tabs, and API chrome |
| `ink` | `#1C1C1D` | Headlines, body copy, and strong UI text |
| `muted-ink` | `#555555` | Supporting copy and secondary notes |
| `canvas` | `#FAFAFB` | Overall page background and large breathing room |
| `surface` | `#FFFFFF` | Cards, accordions, and light content blocks |
| `surface-dark` | `#1C1C1D` | Dark feature panels and the JSON viewer |
| `surface-soft` | `#E4E4E5` | Soft fills and the warm CTA card base |
| `border` | `#E6EDF3` | Card outlines, accordion rules, and the code container |
| `code-key` | `#79C0FF` | Highlighted names and keys in the code sample |
| `code-string` | `#7EE787` | String values in the code sample |
| `code-comment` | `#6E7681` | Comments and quiet code lines |

The cool palette is strongest in the developer and navigation pieces, where blue gives structure and the border color keeps the layout crisp. The warm homepage CTA stands apart from that system so the primary conversion moment feels more tactile and less like a navigation control. Dark and light sections stay separated by surface, not by color clutter, and the code panel keeps its own syntax palette so the page can remain calm everywhere else.

## Typography

Brave uses a small but expressive type stack. FlechaM gives the homepage hero its tall editorial presence. Poppins handles section headings, compact labels, and the stronger interface text. Inter Variable carries paragraphs and explanation blocks. Ui-monospace is reserved for code, JSON, and technical snippets. Applesystem, Flecha M, and System-ui appear in the compact UI stack. No designer or vendor credit is listed for these families. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | FlechaM | 4.375rem | 500 | 1 | -0.02em | Home hero and other brand headlines |
| `hero-display-alt` | Flecha M | 4.375rem | 500 | 1 | -0.02em | Alternate serif family name for the same hero treatment |
| `system-fallback` | Applesystem | 0.75rem | 400 | 1.5 | 0em | System-family name in the broader stack |
| `ui-chrome` | System-ui | 0.75rem | 600 | 1.5 | 0em | Compact browser chrome, tabs, and utility labels |
| `section-display` | Poppins | 2.5rem | 600 | 1.1 | -0.04em | Section titles and strong callouts |
| `subsection-heading` | Poppins | 1.875rem | 600 | 1.33 | -0.04em | Feature subtitles and FAQ questions |
| `body` | Inter Variable | 1.25rem | 400 | 1.5 | 0em | Paragraph copy and explanatory text |
| `label` | Poppins | 0.8125rem | 600 | 1.5 | 0em | Tabs, compact UI labels, and button text |
| `code` | Ui-monospace | 0.75rem | 400 | 1.33 | 0em | Code blocks, JSON, and developer snippets |

The hierarchy depends on scale and weight more than on family count. Display text is large and tight, which gives the page a confident opening line. Supporting copy opens up to a comfortable 1.5 line-height so dense information still feels easy to scan. Small UI text stays semibold and compact, which keeps tabs, accordion rows, and button chrome legible without crowding the page. The serif family is reserved for the strongest brand moment, while Poppins and Inter keep the rest of the system practical and readable.

## Layout

The page is built around a wide reading band with generous top and bottom breathing room. Large sections sit inside that band rather than pressing against the viewport edges. The overall rhythm stays calm and repeated, so the page can move from a consumer pitch to an API reference without changing its basic cadence.

The homepage hero is the most theatrical piece in the system. A giant serif line sits high on the page, then a short support line and the warm call-to-action card follow beneath it. In the browser-first section, a dark accordion card sits on the left while the warm CTA card sits on the right, so the page can present a plain verbal claim and a more graphic action moment side by side. The action object is the only brightly warmed surface on the page, which keeps it visually dominant without turning the whole layout into a colored marketing banner.

The Search API page uses a simpler information architecture. A large section title leads into a three-column feature grid with bold short headings and paragraph copy under each one. Below that sits the split code stage: a long, low rectangle divided into a light editor pane and a dark JSON pane. The tab row above it keeps the developer controls compact and aligned, and the spacing between the panes makes the stage feel like a comparison rather than a sidebar stack.

The FAQ uses a different rhythm: one bordered container, one question at a time, thin dividers, and a clear open state. The expanded row reveals the answer without breaking the overall box. That same bordered-box logic shows up across the page, so the FAQ feels like part of the same family as the code sample and the feature cards. Even though the content shifts from product explanation to technical detail, the spacing and shape language remain steady.

## Visual language

Brave relies on contrast, not ornament. White surfaces, near-black text, and a single blue interaction color do most of the work. Thin borders separate sections cleanly, while 16px rounded corners soften the cards and accordions just enough to keep the page friendly.

The brand voice changes by section, but the geometry stays the same. The homepage hero feels editorial and almost poster-like. The feature grid feels practical and ordered. The split code sample feels technical and controlled. The FAQ feels patient and readable. Because each section keeps the same left alignment and the same border logic, the page can move from consumer language to developer language without feeling like a different product.

The strongest recurring pattern is the mix of one expressive headline with one disciplined content block. That pattern appears in the browser pitch, the features area, the code sample, and the FAQ. It keeps the page open, direct, and easy to skim. The warm CTA card is the only place where the page leans into a more vivid surface, and that makes the action feel special without asking the rest of the interface to follow it.

## Components

### Homepage hero and callout

- **Anatomy:** Large serif headline, short supporting copy, a dark accordion card, and a warm call-to-action card.
- **Surface:** Bright canvas for the hero zone; dark charcoal for the information card; a pale warm card for the action card.
- **Typography:** `hero-display` for the main claim, `subsection-heading` for the accordion rows, `body` for the supporting sentence, and `label` for the button text.
- **Shape:** The action uses a full pill shape; the cards keep the 1rem panel radius.
- **Spacing:** Large vertical separation above the hero and tight spacing between headline, support text, and action.
- **Composition:** Left-aligned copy with a wide open right side, or a two-column pitch with the dark information card on one side and the warm CTA card on the other.
- **Visible states:** The CTA should read as the strongest interactive element on the page without borrowing the blue used by links and tabs.

### Feature columns

- **Anatomy:** One oversized section title, then a row of short feature blocks with a bold subtitle and one paragraph each.
- **Surface:** Plain white background with no card shell around each column.
- **Typography:** `section-display` for the section title, `subsection-heading` for the feature subtitles, and `body` for the paragraph copy.
- **Shape:** No decorative container shape is needed inside the grid; the section relies on whitespace.
- **Spacing:** Wide gutters between columns and substantial space above and below the grid.
- **Composition:** Three equal columns read best on desktop; the text should align to the same left edge for a tidy rhythm.
- **Variants:** The same structure works for consumer claims and API claims as long as the copy stays short and direct.

### Split code stage

- **Anatomy:** Top tab row, left editor pane, vertical split, and a dark JSON result pane.
- **Surface:** Light editor on one side, dark charcoal on the other, all inside one bordered rounded container.
- **Typography:** `label` for the tab row, `code` for the code lines, and small bold text for pane titles.
- **Shape:** The outer shell uses the 1rem radius; the tabs act like compact pills.
- **Spacing:** Moderate internal padding with a clear horizontal gap between the two panes.
- **Composition:** Keep the editor and result pane balanced so the split feels like a comparison, not a nested sidebar.
- **Visible states:** One tab reads active in blue while the others stay neutral; the code sample itself should keep syntax contrast inside the dark pane.

### FAQ accordion

- **Anatomy:** Section heading, bordered container, stacked question rows, and a revealed answer area.
- **Surface:** White card with thin horizontal dividers between rows.
- **Typography:** `section-display` for the FAQ heading, `subsection-heading` for the question text, and `body` for the open answer.
- **Shape:** The outer shell keeps the 1rem radius; rows themselves stay rectilinear inside it.
- **Spacing:** Comfortable padding around each row and enough vertical room for the open answer to breathe.
- **Composition:** Questions sit left, the toggle sits right, and the open answer drops directly below the question.
- **Visible states:** Closed rows stay compact; the open row expands without changing the container’s overall width.

## Responsive behavior

On smaller screens, the hero should collapse to a single column so the headline stays readable before the image or card content. The three-column feature grid should stack into one column with smaller vertical gaps, and the split code stage should turn into a vertical stack so the code and result remain easy to scan. The FAQ should keep the same bordered shell but let each row stretch to the full viewport width. Spacing can tighten, but the page should keep the same white canvas, the same blue interaction color for links and tabs, and the same 16px card radius.

## Practical implementation guidance

### Preserve

- Keep the page mostly white and let blue stay limited to links, tabs, and API chrome.
- Use FlechaM for the hero so the brand keeps its editorial voice.
- Keep Poppins for section titles, labels, tabs, and FAQ questions.
- Preserve the 1rem card radius and the pill shape for the CTA button.
- Use borders and spacing as the main structure before adding any extra decoration.
- Let the warm homepage CTA remain distinct from the cooler rest of the page.

### Avoid

- Avoid adding a second bright brand color that competes with blue.
- Avoid heavy shadows, glossy effects, or extra gradients across the page.
- Avoid mixing too many font families in one block of content.
- Avoid small rounded cards inside larger rounded cards unless the section truly needs that nesting.
- Avoid making the code sample look like a toy editor; keep it calm and legible.
- Avoid turning the homepage CTA into a blue button, because that weakens the section hierarchy.

### Recommended build order

1. Set the page background, ink color, border color, and blue interaction color.
2. Build the hero and the warm CTA card.
3. Add the feature grid and confirm the column rhythm.
4. Build the split code stage with the tab strip and syntax colors.
5. Add the FAQ accordion and verify the open state.
6. Reuse the same panel radius and spacing tokens across every section.

### Accessibility

- Keep contrast strong in both light and dark panels.
- Do not rely on color alone for active tabs, links, or accordion state.
- Keep focus styles visible on the CTA button, tabs, and accordion toggles.
- Make code samples readable without depending on syntax color alone.
- Keep paragraph widths comfortable so the 20px body text does not feel cramped.
- Ensure the warm CTA still reads as a button when color is unavailable.

## Scope note

This guide covers Brave.com desktop marketing surfaces: the browser home hero, the user-first callout panel, the Search API feature grid, the split code example, and the FAQ accordion. Mobile stacking, exact breakpoints, motion, hover behavior, and alternate states outside the provided images are not included.
