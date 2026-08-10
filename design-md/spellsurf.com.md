# How spellsurf.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/spellsurf.com-design)

Last updated: 2026-08-10

## Captured pages

[![Main application interface showing the full Spellsurf word-combination tool with left and right control sidebars, central display area with merged word 'discoursebellerophon', and](https://pin.fontofweb.com/10166?format=jpg)](https://design.withfudge.com/share/pin-10166)

[Main application interface showing the full Spellsurf word-combination tool with left and right control sidebars, central display area with merged word 'discoursebellerophon', and](https://design.withfudge.com/share/pin-10166)

[![Clean focused view of the central word display showing merged word 'crumtion' with source words 'crumpet' and 'questionnaire' in a two-column etymology-style layout with](https://pin.fontofweb.com/10165?format=jpg)](https://design.withfudge.com/share/pin-10165)

[Clean focused view of the central word display showing merged word 'crumtion' with source words 'crumpet' and 'questionnaire' in a two-column etymology-style layout with](https://design.withfudge.com/share/pin-10165)

## Overview

Spellsurf is a word-combination and linguistic exploration tool built around a dramatic central display. The interface presents a workspace where two source words merge into a single neologism, displayed in large classical serif type at the visual center of the screen. The design philosophy balances scholarly elegance with utilitarian clarity: the core wordplay moment receives typographic theater through Cardo's refined old-style serifs, while the surrounding control surfaces use Inter's neutral grotesque for efficient scanning and manipulation.

The layout follows a three-zone composition. A wide central canvas holds the merged word and its etymological breakdown. Flanking sidebars contain granular linguistic controls—part-of-speech filters, syllable constraints, length matching, and slice positioning. A bottom action bar provides generation triggers and navigation history. This spatial arrangement keeps the creative output permanently visible while allowing deep parameter adjustment without modal interruption. The warm off-white canvas avoids sterile pure white, lending the workspace the tactile quality of fine paper.

## Colors

The palette is restrained and warm, built for extended reading and precise control work. Four distinct values handle text hierarchy, three define surfaces, and one accent color marks interactive affordances.

| token | value | use |
|---|---|---|
| ink | #151513 | Primary text, merged word display, structural borders |
| muted-ink | #74736D | Secondary labels, inactive controls, sidebar body text |
| faint-ink | #AAA9A2 | Tertiary metadata, placeholder text, disabled hints |
| canvas | #FDFDFC | Page background, main workspace ground |
| surface | #FFFFFF | Sidebar panels, elevated cards, input fields |
| surface-warm | #F6F5F4 | Filter pill backgrounds, subtle grouping containers |
| border | #F6F5F4 | Horizontal dividers, section separators |
| border-structural | #151513 | Vertical etymology column divider |
| action | #3D82F7 | Primary buttons, active filters, generation triggers |
| action-text | #FFFFFF | Text on action-colored surfaces |

The system operates in a single light mode. The near-black ink against warm canvas creates sufficient contrast for the large display type without the harshness of pure black on pure white. The muted-ink tier handles functional text in sidebars where density requires softer hierarchy. The blue action color appears sparingly, reserved for the generation button and active filter states, ensuring it carries clear semantic weight. Surface-warm and border share a value, allowing seamless transitions between grouped controls and their containing dividers.

## Typography

The type system draws on multiple families. Cardo provides classical display presence for merged words and primary actions. Inter handles all interface text with neutral clarity. The design facts also record Applesystem, Iowan Old Style, and System-Uisansserif as present in the source, though these appear to serve fallback or system-level roles rather than distinct visible tokens in the main interface. Cardo's classical proportions and sharp serifs give the merged words literary authority. Inter's clean neutrality keeps controls scannable and numerals tabular where needed.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cardo | 3.75rem | 400 | 0.88 | -0.062em | Merged word, central display |
| section-display | Cardo | 1.65rem | 400 | 1 | -0.035em | Source word headings in etymology columns |
| body | Inter | 1rem | 400 | 1.5 | 0em | Definitions, main content |
| body-small | Inter | 0.75rem | 400 | 1.5 | 0em | Sidebar controls, filter labels |
| label | Inter | 0.75rem | 400 | 1.25 | 0em | Form labels, section headers |
| caption | Inter | 0.62rem | 400 | 1.5 | 0.08em | Part-of-speech tags, phonetic notation |
| button-primary | Cardo | 1.125rem | 450 | 1.5 | 0em | Generate button, primary actions |

The hero-display setting at 60px with tight 52.8px line height and aggressive negative tracking creates the distinctive compressed wordmarks that dominate the canvas. Section-display at 26.4px with matching line height handles the source word headers in the etymology breakdown. The caption style's positive tracking distinguishes small uppercase labels like "NOUN" from running text. Verify licensing for these families before production use.

## Layout

The workspace uses a fixed three-column architecture. The central column is fluid and dominant, containing the word display and etymology breakdown. Sidebars are narrow control panels with consistent internal padding. The bottom action bar spans the full viewport width below the main content zone.

The main content area receives `0px 36px 32px` padding, creating breathing room without centering constraints that would fight the sidebar-docked layout. Sidebar panels use `20.8px` padding on top and sides, with variable bottom padding depending on content grouping. Internal sidebar sections separate with `24px` top margins and `40.8px` bottom padding for major divisions.

The etymology breakdown sits below the hero word in a two-column grid. Each column receives `24px` horizontal padding, with the left column padded right and the right column padded left, creating a centered gutter. A single vertical hairline at `1px` in ink color divides the columns. Section headings within this area carry `8.8px` bottom margin.

Control groups in sidebars stack with `16px` gaps between major controls and `5.6px` gaps between label-input pairs. Filter pill arrays use `1.28px` gaps for tight clustering. The bottom action bar groups its controls with `10.4px` gaps and includes a history timeline with `0.8px` spacing between tick marks.

## Visual language

The aesthetic merges dictionary authority with generative tool immediacy. The central word display commands attention through scale and classical type, while the surrounding interface recedes into functional neutrality. Rounded corners on sidebar panels soften the technical surface without undermining the scholarly tone.

Shadow usage is minimal and purposeful: sidebar panels float with a compound shadow of `rgba(0, 0, 0, 0.06) 0px 0px 0px 1px` for edge definition plus `rgba(0, 0, 0, 0.08) 0px 4px 16px 0px` for elevation. No other elements carry shadow, maintaining flatness in the central workspace.

Borders function as structural signals. The etymology divider is a visible `1px` ink line. Sidebar internal borders use `1px` warm border color for horizontal separators. Article-level entries in the main area carry left borders in ink for vertical emphasis. Input fields and buttons avoid visible borders, relying on background contrast and rounded shape for affordance.

The blue action color appears in filled buttons, active filter pills, and toggle states. Inactive filters use warm surface backgrounds with muted text. The generate button uses Cardo at 18px with weight 450, bridging display and interface typography.

## Components

### Sidebar Panel

An elevated control container with rounded corners and compound shadow. Surface background at full white. Padding of `1.3rem` top and sides, with content sections flowing vertically. Contains grouped controls with internal section dividers at warm border color. Header labels in body-small with muted-ink color, sometimes uppercase. Input fields with `0.5625rem` radius and warm background, `12px` horizontal padding, `12px` body-small text.

### Word Display

The central hero element. Single line of text in hero-display typography, centered horizontally. No container background or border. Sits in generous vertical space above the etymology breakdown. The merged word reads as a continuous string without internal spacing cues.

### Etymology Breakdown

Two-column layout below the hero word. Each column contains: source word in section-display, phonetic notation in caption style with faint-ink color, part-of-speech tag in caption with positive tracking, horizontal rule in border color, and definition in body typography. Columns separated by `1px` ink vertical line. Left column right-padded, right column left-padded, both at `24px`.

### Filter Pill

Compact toggle control with pill-shaped radius. Default state: surface-warm background, muted-ink text. Active state: action background, action-text color. Height derived from `16px` gap arrays with `1.28px` inter-pill spacing. Typography in body-small.

### Generate Button

Primary action trigger with action background and full white text. Cardo family at `1.125rem` with weight 450. `0.5rem` border radius. Sits in bottom action bar with surrounding utility controls. Includes optional icon in white.

### Text Input

Minimal field with `0.5625rem` radius, warm surface background, no visible border. `12px` horizontal padding. Inter body-small text in ink color. Placeholder text in faint-ink.

### Bottom Action Bar

Full-width strip below main content. Contains generation controls, focus/reset utilities, directional navigation, save and history access. Controls grouped with `10.4px` gaps. History timeline with micro-ticks at `0.8px` spacing. Saved count indicator in muted-ink.

## Responsive behavior

The three-column layout assumes adequate viewport width for side-by-side sidebar display. At narrower widths, the sidebars should transition to collapsible drawers or stacked panels above the main content. The central word display remains priority; its large type may scale down using the section-display token as a minimum.

The etymology breakdown should remain two-column where possible, collapsing to stacked single column when the central zone narrows below comfortable reading measure. The vertical divider becomes a horizontal rule in stacked mode.

Bottom action bar controls should wrap or compress, with history timeline potentially hiding on narrow viewports. Touch targets should maintain minimum `44px` height for sidebar controls when used on tablets.

## Practical implementation guidance

### Preserve
- The stark contrast between Cardo display and Inter interface typography; this pairing defines the product's character
- The warm canvas ground rather than pure white; the `#FDFDFC` value prevents clinical coldness
- The generous central negative space around the merged word; crowding destroys the theatrical moment
- The precise etymology column structure with vertical divider and aligned metadata
- The compound shadow on sidebar panels; single-layer shadows look flat

### Avoid
- Adding decorative elements to the central word display; the typography is the ornament
- Using Cardo for interface controls or body text; it belongs to display moments only
- Pure black or pure white in place of the warm-tinted ink and canvas values
- Border-heavy sidebar designs; rely on shadow and background contrast instead
- Animating the merged word on every generation; subtlety preserves dignity

### Recommended build order
1. Establish the canvas background and central word display with Cardo hero-display settings
2. Implement the two-column etymology breakdown with correct padding and divider
3. Build sidebar panel shell with shadow, radius, and internal spacing
4. Add filter pills and input controls with active/inactive states
5. Construct bottom action bar with generate button and utility controls
6. Refine spacing rhythm across all zones

### Accessibility
- Ensure the large Cardo display meets contrast requirements at its reduced weight; the near-black ink on warm canvas generally satisfies WCAG AA for large text
- Provide visible focus indicators on all sidebar controls; the minimal borderless inputs need clear focus rings
- Associate all form labels explicitly with their inputs; the dense sidebar requires programmatic relationships
- Consider reduced motion preferences for any generation animations
- Maintain logical tab order through sidebar controls, main content, and bottom action bar sequentially

## Scope note

This guide covers the desktop workspace visible on the Spellsurf homepage with word generation and etymology display. Mobile layouts, breakpoint-specific adaptations, loading states, error handling, and account or history management screens are not represented in the supplied material. The phonetic notation and part-of-speech tagging systems are described visually but their underlying data structures are not specified. Applesystem, Iowan Old Style, and System-Uisansserif appear in the source font inventory without visible dedicated roles in the main interface; verify licensing for these families before production use.
