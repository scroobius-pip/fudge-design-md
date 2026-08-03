# How crowprose.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/crowprose.com-design)

Last updated: 2026-08-03

## Captured pages

[![Centered index with bold heading, thin rule, and stacked essay links](https://pin.fontofweb.com/6283?format=jpg)](https://design.withfudge.com/share/pin-6283)

[Centered index with bold heading, thin rule, and stacked essay links](https://design.withfudge.com/share/pin-6283)

[![Single article page with a large title, rule, and dense prose column](https://pin.fontofweb.com/6282?format=jpg)](https://design.withfudge.com/share/pin-6282)

[Single article page with a large title, rule, and dense prose column](https://design.withfudge.com/share/pin-6282)

## Overview

Crowprose uses an editorial reading system, not a marketing layout. The visual language is almost entirely built from one centered column, black text on white, and a strict sequence of title, rule, and prose. The home index and the article page share the same calm structure: a plain page heading at the top, a heavy horizontal rule beneath it, and then stacked writing blocks that keep the eye moving downward.

The system depends on restraint. There is no color hierarchy beyond black, gray, and white. There are no panels, shadows, gradients, or ornamental containers. Typography carries the identity, and spacing does the framing. The result feels more like a printed essay list than a web magazine.

## Colors

| token | value | role |
|---|---|---|
| `ink` | `#1A1A1A` | Main text, page heading, and the darkest rules |
| `muted-ink` | `#4D4D4D` | Supporting copy, summaries, and secondary reading text |
| `canvas` | `#FFFFFF` | Page background and the space around the reading column |
| `rule` | `#1A1A1A` | Heavy dividers and the primary structural line |

The palette is deliberately tiny. White canvas does most of the work by leaving the content exposed and unframed. Black gives the titles their weight and keeps the article body crisp at small sizes. The gray tone softens the description text on the index page without turning it into a separate visual mode. That relationship matters: the site does not alternate between light and dark surfaces, and it does not use chroma to label content types. Instead, it relies on value contrast and the presence of the rule line to separate page heading, entries, and long-form text.

Any implementation should keep the palette in this same narrow range. If a divider needs to read less strongly than the title line, it should still live in the black-to-charcoal family rather than introducing a new accent.

## Typography

Crowprose uses one family in two visible cuts: **Din 1451 Std-Engschrift** for headings and **Din 1451 Std-Mittelschrift** for reading text. The packet supplies no designer or vendor credit for this family, so no attribution claim is made.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `page-title` | Din 1451 Std-Engschrift | 2.25rem | 400 | 1.1 | -0.03em | Site heading and article title |
| `entry-title` | Din 1451 Std-Engschrift | 1.25rem | 400 | 1.1 | -0.01em | Blog index entry titles |
| `page-intro` | Din 1451 Std-Mittelschrift | 1.125rem | 400 | 1.5 | 0em | Short explanatory line under the page heading |
| `entry-summary` | Din 1451 Std-Mittelschrift | 0.875rem | 400 | 1.5 | 0em | Index entry summaries and short supporting lines |
| `body` | Din 1451 Std-Mittelschrift | 1rem | 400 | 1.5 | 0em | Article prose and general reading text |
| `meta` | Din 1451 Std-Mittelschrift | 0.875rem | 400 | 1.5 | 0em | Supporting summaries and smaller contextual text |

The hierarchy is compact and tightly controlled. The biggest text is still modest in absolute size, which keeps the site from feeling promotional. The heading cut gives titles a narrow, upright force, while the reading cut keeps the prose steady and familiar. Body text sits at a comfortable 16px / 24px rhythm, which makes the long article page readable without looking airy or fashionable. The smaller summary text on the index page softens the page without becoming faint. Tracking stays nearly neutral; the design gets its clarity from the line breaks and the column width rather than from letterspacing tricks.

## Layout

The layout is a single-column reading stack centered inside a large field of white space. On the widest views, the side gutters are extremely generous, leaving a reading measure that feels intentionally narrow and disciplined. The index page presents the content as a vertical list of essay entries, each entry separated by a hard horizontal rule and a small block of title plus summary text. The article page uses the same column but simplifies the rhythm: a large title at the top, one strong divider, and then paragraph after paragraph of prose.

The structure has a clear order. The site heading sits first, then the supporting line, then the rule, then the content. That ordering matters more than any single measurement because it creates the page’s calm. The eye never has to search for the reading path. There is no sidebar, no secondary column, no promotional module pulling attention away from the writing. Even on the index page, the entries behave like a list of chapters rather than as cards.

Spacing is generous above the first rule and between the article blocks. The page relies on empty space as a real layout element. The 24px horizontal padding and 32px vertical padding give the content a little breathing room, while the much larger outer gutter values keep the text from stretching too wide. That combination produces the site’s quiet authority: dense enough to feel serious, open enough to feel unforced.

## Visual language

The visual language is severe in a useful way. Everything is flat, rectangular, and direct. The strongest motif is the horizontal rule: a clean line that appears under the page heading and again between writing entries. It does not decorate; it organizes. The rest of the system follows that same ethic. Titles are set plainly, summaries are short, and paragraphs begin immediately without framing devices.

The page feels textual before it feels designed. That is the central effect to preserve. The writing sits on white space instead of inside containers, which makes the words feel responsible for their own hierarchy. The gray supporting text does not become a second brand color; it simply lowers the temperature of the descriptive copy. Likewise, the page does not need rounded corners, badges, iconography, or any of the usual blog chrome. The black line and the narrow measure already do the work of structure.

A good implementation should treat the title line as the only strong flourish. Everything else should stay subordinate to the reading flow. If a new element does not help the page move from heading to rule to prose, it probably does not belong here.

## Components

### Site heading

The site heading is a plain, left-aligned text mark in the same column as the content. It uses the largest text in the system, but the tone is still restrained rather than theatrical. The narrow stance of the family makes the heading feel compact and purposeful. It should sit close to the top edge of the reading column and leave enough white space below it for the first rule to feel deliberate.

### Title rule

The rule under the heading is the page’s most important structural line. It is dark, straight, and wider than the text blocks that follow. On the article page, it sits directly beneath the title and separates the heading from the prose. On the index page, similar rules divide the entries. The rule should always read as a functional divider, not a decorative underline.

### Entry block

Each index entry is a small two-part unit: a title and a short supporting sentence. The title uses the 20px role and the support text drops to the 14px role. The title carries the weight; the summary only clarifies the topic. The block should remain text-only and should not be wrapped in a card surface. Vertical separation between entries is more important than internal ornament.

### Article body

The article body is a continuous prose stack. Paragraphs are short enough to stay readable at the narrow measure and long enough to feel like essays, not snippets. The body copy uses the 16px role with a 24px rhythm, which keeps the page calm across long reading sessions. A single strong title at the top is enough; the body should not be interrupted by panels, callouts, or visual modules unless the content itself requires them.

## Responsive behavior

When the page narrows, the column should stay singular. The first thing to protect is the reading order: heading, rule, then text. The measure can shrink, but the hierarchy should not fragment into columns or stacked cards. The large outer gutters that work on desktop will obviously compress on smaller screens; the design should allow that compression without introducing new chrome.

The title may wrap onto multiple lines when space is limited, but it should still feel like one heading rather than a broken stack of unrelated text. The rule should stay aligned with the text column. The body copy should remain readable before any attempt is made to make the page fit visually. In practice, that means preserving line length, paragraph rhythm, and the quiet separation between entries instead of forcing denser layouts or alternative navigation. If the site needs to make a tradeoff on small screens, it should favor legibility over visible structure.

## Practical implementation guidance

### Preserve

Keep the page white, the text black or charcoal, and the architecture centered around one narrow reading column. Preserve the title-and-rule motif exactly; that is the clearest visual signature in the system. Keep the family consistent across headings and prose so the difference between heading and body comes from size, weight, and measure rather than from switching typefaces. Preserve the restrained spacing and the simple vertical sequence from page heading to content.

### Avoid

Avoid cards, shadows, gradients, and color accents. Avoid multi-column article chrome, sidebar modules, and sticky promotional elements. Avoid turning summaries into badges or metadata into decorative labels. Avoid overly rounded surfaces; the page reads best when edges stay direct and architectural. Avoid inventing interactive states or motion patterns that are not already part of the page’s visual language.

### Recommended build order

1. Set the white canvas and centered reading column.
2. Build the page heading and the heavy rule beneath it.
3. Establish the 36px, 20px, 18px, 16px, and 14px text roles.
4. Build the index entry pattern with title, summary, and divider.
5. Build the article page as a pure prose stack under one strong title.
6. Tune the column width and outer gutters so the reading measure stays narrow on desktop.
7. Check the small-screen version last, keeping the same hierarchy and removing nothing essential.

### Accessibility

Use the black and gray tones to maintain strong contrast against white. Give links a non-color cue if any appear in the reading path, because this system should not rely on blue web defaults to communicate interactivity. Keep heading levels semantically correct so the page title, entry titles, and paragraph text remain machine-readable as well as visually clear. Ensure focus styles are visible and unobtrusive. Most importantly, preserve readable line length and paragraph spacing so the article remains comfortable for long-form reading.

## Scope note

This guide covers the desktop blog index and article page on crowprose.com, including the centered column, the page heading, the separator rules, the entry list, and the prose layout. It does not settle mobile breakpoints, hover or focus treatments, motion, alternate page families, or font licensing. Type and spacing values are rounded to the packet’s 0.25rem step.
