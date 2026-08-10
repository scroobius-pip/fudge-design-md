# How ogilvy.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ogilvy.com-design)

Last updated: 2026-08-10

## Captured pages

[![Careers job posting page with clean white layout, black navigation, and structured two-column job details with red accent links](https://pin.fontofweb.com/9237?format=jpg)](https://design.withfudge.com/share/pin-9237)

[Careers job posting page with clean white layout, black navigation, and structured two-column job details with red accent links](https://design.withfudge.com/share/pin-9237)

[![Work With Us careers listing with massive outlined typography, filter dropdowns with italic red labels, and tabular job rows](https://pin.fontofweb.com/9236?format=jpg)](https://design.withfudge.com/share/pin-9236)

[Work With Us careers listing with massive outlined typography, filter dropdowns with italic red labels, and tabular job rows](https://design.withfudge.com/share/pin-9236)

[![Red background careers page with italic serif David Ogilvy quote, white Ogilvy wordmark, and employee photography](https://pin.fontofweb.com/9235?format=jpg)](https://design.withfudge.com/share/pin-9235)

[Red background careers page with italic serif David Ogilvy quote, white Ogilvy wordmark, and employee photography](https://design.withfudge.com/share/pin-9235)

[![Careers landing with oversized outlined CAREERS title on red, black and white portrait photo, and Who We Are text section](https://pin.fontofweb.com/9234?format=jpg)](https://design.withfudge.com/share/pin-9234)

[Careers landing with oversized outlined CAREERS title on red, black and white portrait photo, and Who We Are text section](https://design.withfudge.com/share/pin-9234)

## Overview

The Ogilvy design system is built on editorial confidence: massive display typography that commands attention, a disciplined two-typeface structure, and a signature warm red that punctuates an otherwise restrained monochrome palette. The system moves between two distinct modes—a clean, white professional surface for utility content and a bold, red editorial surface for brand storytelling. Navigation remains consistently minimal across both modes, with a simple horizontal link row in the upper left and a single Contact anchor on the right. The visual hierarchy relies on scale contrast rather than decorative elements, letting typography and photography carry the narrative weight. This is a system designed for a creative network that wants to project authority without ornament.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary headings, navigation text, and outlined display type strokes |
| body | #231F20 | Body text, secondary headings, and interface labels |
| muted | #3E4044 | Tertiary text and subtle interface elements |
| border | #A6A6A8 | Hairline dividers, table rules, and section separators |
| action | #EB3F43 | Links, filter labels, interactive accents, and brand moments |
| action-light | #F58E8F | Hover states and secondary accent surfaces |
| action-pale | #FBCECE | Subtle tint backgrounds and disabled action states |
| canvas | #FFFFFF | Primary page background, content surfaces, and inverted text on red |

The color architecture operates in two modes. The **light mode** dominates functional pages: white canvas, near-black ink for headings, and warm body gray for readable text. The **red mode** appears on brand storytelling surfaces—careers landing pages, manifesto sections—where the background floods to action red and all text inverts to white. The action red is used sparingly in light mode, reserved for links, filter dropdown labels, and small interactive moments. No gradients or shadows appear in the interface; depth is achieved through photography and typographic scale alone. The palette is intentionally small, with the warm red providing the only chromatic energy against an otherwise neutral system.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Ogilvy Sans | 14.375rem | 700 | 0.87 | -0.025em | Monumental outlined titles like "CAREERS" and "WORK WITH US" |
| section-display | Ogilvy Serif | 3.75rem | 400 | 1.07 | -0.01em | Large editorial headings and manifesto statements |
| quote-display | Ogilvy Serif | 3.75rem | 400 | 1.08 | -0.01em | Pull quotes and attributed editorial text |
| heading | Ogilvy Sans | 1.5rem | 400 | 1.33 | -0.025em | Section headings like "Who We Are" and "Get Involved" |
| body | Ogilvy Sans | 1rem | 400 | 1.5 | normal | Paragraph text, descriptions, and job details |
| body-large | Ogilvy Sans | 1.5rem | 400 | 1.2 | -0.005em | Introductory paragraphs and emphasized body content |
| label | Ogilvy Sans | 1rem | 400 | 1.25 | normal | UI labels, buttons, and table headers |
| navigation | Ogilvy Sans | 1rem | 400 | 1.25 | normal | Primary navigation links |
| legal-copy | Ogilvy Sans | 1rem | 400 | 1.25 | normal | Footer links and secondary navigation |

The type system is built on two complementary families: **Ogilvy Sans**, a clean geometric sans-serif designed by Jeremy Mickel of MCKL, handles all utility, navigation, and body text; **Ogilvy Serif**, also by Jeremy Mickel of MCKL, serves editorial display and italic accent moments. The hero-display token at 230px creates the system's most distinctive element—outlined letterforms that read as architectural presence rather than mere text. These outlined titles use stroke-only rendering with no fill, creating a stencil-like quality that sits lightly on the page despite their enormous scale. The serif appears in two voices: upright for section headings, italic for quotes and filter labels. Verify licensing for these families before production use.

## Layout

The layout follows a centered content column with generous side margins. The standard content width is approximately 82.5rem with 2rem horizontal padding, creating breathing room that keeps text lines readable and photography impactful. Navigation sits outside this column, flush to the viewport edges with 0.5rem link padding.

Section spacing is dramatic: 5rem to 7.5rem between major content blocks, with internal element spacing at 1.5rem to 2rem. The careers listing page demonstrates the system's structural clarity—a full-bleed hero title, followed by a filter bar with four equal columns, then tabular job rows with arrow indicators. The filter dropdowns use hairline bottom borders and italic red labels that signal interactivity without button chrome.

On brand storytelling pages, the layout shifts to asymmetric two-column compositions: large photography on one side, text content on the other, with the Ogilvy wordmark centered in the navigation bar. The red background pages use consistent internal padding of 7.5rem top and 5rem sides, creating a framed editorial experience.

## Visual language

The visual language is defined by three signature elements: monumental outlined type, the warm red editorial surface, and high-contrast photography. The outlined display letters appear only in uppercase, rendered as hairline strokes that create negative space within each character. This treatment transforms headlines into graphic objects that anchor the page without visual weight.

Photography is presented full-bleed or in large rectangular frames with no border radius. The black-and-white portrait on the careers page demonstrates the system's comfort with archival, documentary imagery alongside contemporary color photography. On red backgrounds, photographs gain saturation through contrast, while white text maintains crisp legibility.

The Ogilvy wordmark appears in white serif lettering on red surfaces, centered in the navigation bar—a rare centered element in an otherwise left-aligned system. This centered mark acts as a visual anchor and brand signature, distinguishing editorial pages from utility pages where the wordmark may not appear.

Iconography is minimal: simple arrow indicators for job listings, dropdown chevrons in the filter bar, and no other decorative symbols. The system trusts typography and photography to communicate without iconographic support.

## Components

### Navigation

- **Anatomy**: Horizontal link row left-aligned with Work, About, Team, Ideas, Careers; Contact link right-aligned; Ogilvy wordmark centered on brand pages
- **Surface**: Transparent background, ink text on light surfaces, white text on red surfaces
- **Typography**: `{typography.navigation}`
- **Spacing**: 0.5rem link padding, 0.5rem right padding on first link for visual separation
- **Composition**: Flex row with space-between logic, wordmark absolutely centered when present

### Display Title (Outlined)

- **Anatomy**: Single-line uppercase text rendered as stroke-only letterforms
- **Surface**: Transparent fill, ink stroke on light backgrounds, white stroke on red backgrounds
- **Typography**: `{typography.hero-display}`
- **Shape**: 0rem border radius, no background
- **Spacing**: Full viewport width with standard side margins, 3.75rem to 5rem bottom margin
- **Variants**: "CAREERS" on red, "WORK WITH US" on white—stroke color adapts to surface

### Filter Bar

- **Anatomy**: Four column headers (Region, Location, Department, Company) with italic red dropdown labels
- **Surface**: White background, hairline bottom border in border color
- **Typography**: Column headers use `{typography.label}` in body color; active filters use Ogilvy Serif Italic at 1.375rem in action color
- **Shape**: Full-width bar with bottom border only, 0rem border radius
- **Spacing**: 1.25rem vertical padding, equal column distribution
- **Composition**: Tabular grid with arrow indicators on the right edge of each row

### Job Listing Row

- **Anatomy**: Job title, department, location, and arrow indicator
- **Surface**: White background, hairline top and bottom borders in border color
- **Typography**: Job title in `{typography.body}` at body color; supporting text in `{typography.label}` at muted color
- **Shape**: 0rem border radius
- **Spacing**: 0.75rem vertical padding, 1.25rem horizontal padding in cells
- **Composition**: Full-width rows with hover state implied by arrow presence

### Content Section (Red Background)

- **Anatomy**: Heading with hairline underline, body paragraphs, optional photography
- **Surface**: Action red background, all text inverted to white
- **Typography**: Headings in `{typography.heading}` at canvas color; body in `{typography.body}` at canvas color
- **Shape**: 0rem border radius, rectangular photography
- **Spacing**: 7.5rem top padding, 5rem side padding, 3.75rem between heading and body, 5rem between text and photography
- **Composition**: Asymmetric two-column when photography present; single column for quote-only sections

### Pull Quote

- **Anatomy**: Italic serif text with attribution line
- **Surface**: Action red background, white text
- **Typography**: `{typography.quote-display}` in Ogilvy Serif Italic, attribution in same family at reduced size
- **Spacing**: 5rem vertical padding, generous line breaks between phrases
- **Composition**: Left-aligned with hanging dash on attribution

### Link

- **Anatomy**: Inline text with no underline, action color
- **Surface**: Transparent, action color text
- **Typography**: `{typography.body}` or `{typography.label}` depending on context
- **Variants**: Body links in running text; navigation links in ink; footer links in body color

## Responsive behavior

The system is documented from desktop viewport widths. At narrower widths, the monumental display type should scale down proportionally, maintaining stroke weight and uppercase treatment. The outlined "CAREERS" title at 230px will require reduction to preserve legibility—consider a minimum rendered size of 4rem to maintain character recognition.

The filter bar's four-column layout should collapse to a stacked accordion on smaller screens, with each filter becoming a full-width dropdown. Job listing rows should maintain their tabular structure until approximately tablet width, then stack title above metadata with the arrow indicator moving to the right edge.

The asymmetric two-column compositions on red background pages should stack vertically, with photography preceding text. Navigation should collapse to a hamburger menu or simplified link list, with the centered wordmark remaining visible.

Typography scales should maintain their rem relationships: body at 1rem, headings at 1.5rem, display at 3.75rem, hero at a viewport-relative scale. Line heights are already generous and should not require adjustment.

## Practical implementation guidance

### Preserve
- The two-typeface hierarchy: Ogilvy Sans for all utility and body, Ogilvy Serif for editorial display and italic accents only
- The outlined stroke treatment on monumental display type—never fill these letters
- The warm red (#EB3F43) as the sole accent against neutral grounds
- Hairline borders as the only decorative structural element
- Left-aligned text with the rare centered wordmark exception
- Generous whitespace between sections and around content

### Avoid
- Adding background colors to navigation or buttons—keep surfaces flat
- Using the serif for body text or UI labels—reserve it for display and italic moments
- Introducing drop shadows, gradients, or border-radius on cards and panels
- Centering text blocks outside of the wordmark and pull quote attribution
- Multiple accent colors—the red carries all chromatic responsibility

### Recommended build order
1. Establish the type scale with both font families loaded and the 16px base
2. Implement the navigation component with transparent background and link padding
3. Build the outlined display title with stroke-only rendering and viewport-width containment
4. Create the two surface modes: white canvas and action red
5. Add the filter bar with hairline borders and italic red dropdown labels
6. Implement job listing rows with tabular structure and arrow indicators
7. Build red-background content sections with inverted typography and asymmetric photography

### Accessibility
- Ensure outlined display type maintains sufficient stroke thickness at all sizes; consider a filled fallback for users who prefer reduced motion or high contrast
- Red background sections should use white text exclusively; verify contrast ratios exceed 4.5:1 for body and 3:1 for large text
- Navigation links need visible focus states; add an underline or background shift since default outlines may be suppressed
- Filter dropdowns require keyboard operability and ARIA expanded states
- The italic serif in filter labels should not be the sole indicator of interactivity; maintain cursor and hover state cues

## Scope note

This guide covers the careers and about page surfaces visible in the supplied images, including job listings, brand storytelling sections, and navigation. It does not cover the work portfolio grid, team directory, ideas archive, contact form interactions, or mobile breakpoint layouts. Motion, hover states, and loading behavior are not documented from still images. Verify licensing for Ogilvy Sans and Ogilvy Serif before production use.
