# How multi.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/multi.app-design)

Last updated: 2026-08-10

## Captured pages

[![Blog index with dark canvas, category tags in magenta and blue, and large light headlines in Untitled Sans Light](https://pin.fontofweb.com/6081?format=jpg)](https://design.withfudge.com/share/pin-6081)

[Blog index with dark canvas, category tags in magenta and blue, and large light headlines in Untitled Sans Light](https://design.withfudge.com/share/pin-6081)

[![Blog article hero with serif display headline PP Editorial New, author metadata, and centered OpenAI logo on white](https://pin.fontofweb.com/6080?format=jpg)](https://design.withfudge.com/share/pin-6080)

[Blog article hero with serif display headline PP Editorial New, author metadata, and centered OpenAI logo on white](https://design.withfudge.com/share/pin-6080)

[![Article body with FAQ section, blue hyperlinks, strong emphasis, and social icons in footer](https://pin.fontofweb.com/6079?format=jpg)](https://design.withfudge.com/share/pin-6079)

[Article body with FAQ section, blue hyperlinks, strong emphasis, and social icons in footer](https://design.withfudge.com/share/pin-6079)

[![Homepage changelog section with serif heading, date-stamped entries, and large display footer text](https://pin.fontofweb.com/6078?format=jpg)](https://design.withfudge.com/share/pin-6078)

[Homepage changelog section with serif heading, date-stamped entries, and large display footer text](https://design.withfudge.com/share/pin-6078)

## Overview

Multi's visual identity is built on stark contrast: an almost-black canvas against bright, warm-tinted off-white text, with editorial serif display type providing personality and sans-serif workhorses handling readability. The system feels like a premium technology publication—confident, restrained, and intentionally sparse. Color is used surgically: magenta and blue accents appear only as category tags and hyperlinks, creating moments of chromatic energy without disturbing the monochrome calm. The homepage and blog share a unified dark mode, while article pages introduce a white content card for embedded media, creating a deliberate material break. Typography drives hierarchy more than size alone; the shift from PP Editorial New's classical forms to Inter's neutral grotesque creates clear role separation between display and functional text.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, navigation bar, article canvas |
| surface | #010101 | Slightly elevated dark surfaces, subtle differentiation from pure black |
| ink | #FFFFFF | Primary headings, navigation links, logo, button text on dark |
| muted-ink | #F8F5EA | Article body text, secondary headings, long-form reading content |
| dim-ink | #6E6E6E | Metadata, dates, captions, footer links, de-emphasized information |
| accent-magenta | #EE50C2 | "Building Multi" category tags, brand warmth moments |
| accent-blue | #4A80FF | "Engineering" category tags, hyperlinks, interactive text |
| action | #0000EE | Standard link blue for external references |
| border-subtle | #616161 | Hairline dividers, changelog entry separators |

The palette operates in a near-monochrome dark mode with two functional accent colors. Magenta carries brand and product narrative content; blue signals engineering, technical depth, and interactive affordances. The warm off-white of muted-ink prevents the clinical harshness of pure white against black during extended reading. White ink is reserved for high-impact moments: hero headlines, navigation, and calls to action. No light-mode variant is visible in the supplied surfaces.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PP Editorial New | 4rem | 400 | 1.1 | normal | Article headlines, footer display text, major page titles |
| section-display | PP Editorial New | 2.75rem | 400 | 1.2 | normal | FAQ headings, section breaks, secondary display |
| body-large | Test Untitled Sans | 1.125rem | 400 | 1.444 | normal | Article body paragraphs, long-form content |
| body | Inter | 0.9375rem | 400 | 1.4 | normal | Changelog entries, general UI text |
| body-medium | Inter Medium | 0.875rem | 500 | 1.2 | normal | Metadata, dates, captions, blog list descriptions |
| label | Inter Medium | 0.75rem | 500 | 1 | 0.05em | Category tags, badges, uppercase labels |
| navigation | Inter Medium | 1rem | 500 | 1.5 | normal | Top navigation links, footer links |
| mono-caption | GT Pressura Mono | 0.8125rem | 400 | 2 | normal | Technical captions, code references, fine print |

PP Editorial New, designed by Mathieu Desjardins and available from Pangram Pangram Foundry, provides the system's editorial voice. Test Untitled Sans, by Kris Sowersby at Klim Type Foundry, handles readable body text with slightly more character than generic sans-serifs. Inter and Inter Medium serve as the functional UI layer. GT Pressura Mono, by Dominik Huber Moiré, appears for technical and caption contexts. Manrope, designed by Mikhail Sharanda, appears in select UI labels. Verify licensing for these families before production use.

## Layout

The layout philosophy is centered and spacious, with generous vertical breathing room that lets typography dominate. Horizontal padding is consistently applied through section containers rather than page-level margins.

**Page structure:** Navigation sits fixed at top with logo left and links right. Content sections stack vertically with substantial inter-section spacing. The blog index uses a single centered column of entries. Article pages center the hero headline and media, then constrain body text to a readable measure. The homepage changelog presents as a centered list with date-aligned right edges.

**Spacing scale:** The system uses a 2px base unit (0.125rem). Key spacing values include 0.5rem for tight internal padding, 1rem for compact component padding, 2.5rem for comfortable gaps, 6rem for generous section breaks, and 7.5rem for major section divisions. Article body sections receive 0 6rem horizontal padding for comfortable reading measure.

**Grid behavior:** Content max-width appears to center around a readable measure rather than full-bleed expansion. Blog entries and changelog items align to a consistent center axis. Article media breaks out to a wider container than body text. No multi-column grid is visible in the supplied surfaces.

## Visual language

**Shape language:** The system employs extreme rounding for interactive elements—pills at 9999px for primary actions—and minimal rounding for content containers. Category tags use tight 3px radius corners. Content cards and media embeds use 8px to 10px radius. The contrast between fully rounded buttons and sharp-edged dark canvas creates a tactile, app-like feel within an editorial context.

**Imagery and media:** Photography and logos appear as contained rectangles with subtle rounding, often on white backgrounds that starkly contrast the dark page. The OpenAI logo embed demonstrates this material break: white card, centered content, no border, floating on black. Screenshots and product imagery follow similar treatment.

**Motion and interactivity cues:** Links are distinguished by color change to accent-blue rather than underline. Category tags gain border and text color in their respective accent hues. The changelog entries show subtle hover potential through their full-width row structure with right-aligned dates. No shadows are used; depth is created through color contrast and spacing alone.

**Iconography:** Social icons appear as simple monochrome glyphs in the footer—Twitter, LinkedIn, and RSS—rendered in the muted ink color at small scale. No icon font is named in the typography system.

## Components

**Category Tag**
- Anatomy: Text label within a bordered pill
- Surface: Transparent background, 1px solid border
- Typography: label token, uppercase, 0.05em letter spacing
- Shape: 3px border radius
- Spacing: 4px vertical, 6px horizontal padding
- Variants: Magenta border/text for "Building Multi" narrative; blue border/text for "Engineering" technical content

**Article Hero**
- Anatomy: Category tag, author and date metadata, large serif headline, optional media embed
- Surface: Full-width dark canvas
- Typography: hero-display for headline, body-medium for metadata
- Composition: Left-aligned metadata block, large headline below, centered media card beneath
- Spacing: Generous vertical padding above and below

**Article Body**
- Anatomy: Paragraph blocks, h2 section headings, strong emphasis, hyperlinks, FAQ sections
- Surface: Continuation of dark canvas
- Typography: body-large for paragraphs, section-display for h2 headings, inherited bold for strong
- Color: muted-ink for body text, accent-blue for links, ink for emphasis
- Spacing: 24px top margin on paragraphs, 70px top margin on h2 elements, 96px horizontal padding for comfortable measure

**Changelog Entry**
- Anatomy: Feature title left, date right, full-width row with bottom border
- Surface: Transparent, 1px bottom border in border-subtle
- Typography: body for title, body-medium for date
- Composition: Flex row with space-between alignment
- Spacing: 20px vertical padding

**Navigation Bar**
- Anatomy: Logo mark left, text links right
- Surface: Transparent or canvas-matching background
- Typography: navigation token for links
- Color: ink for all elements
- Spacing: 40px horizontal padding

**Footer Display**
- Anatomy: Large serif text as closing statement
- Typography: hero-display at increased scale
- Color: ink
- Spacing: Section-level vertical padding

## Responsive behavior

The system appears optimized for desktop viewing with centered, width-constrained content. No mobile-specific breakpoints are visible in the supplied surfaces. Recommended adaptations: reduce hero-display to 2.5rem on narrow viewports, collapse navigation to a menu affordance, stack changelog dates below titles, and reduce article body horizontal padding to 1.5rem. The dark canvas and high-contrast text should maintain accessibility across all sizes. Touch targets for navigation and category tags should maintain minimum 44px height.

## Practical implementation guidance

**Preserve:**
- The stark black-to-warm-white contrast ratio; it defines the brand atmosphere
- Serif/sans-serif pairing with PP Editorial New for display and Inter for UI
- Surgical use of magenta and blue—only for tags and links, never as backgrounds
- Generous vertical spacing between sections; the breathing room is intentional
- White media cards as material breaks against the dark canvas

**Avoid:**
- Adding background colors to category tags; the bordered transparent treatment is essential
- Underlining links; color alone signals interactivity in this system
- Shadows for depth; rely on spacing and contrast instead
- Pure white for body text; the warm F8F5EA prevents eye strain during reading

**Recommended build order:**
1. Establish the dark canvas and typography scale with PP Editorial New and Inter
2. Build the navigation bar with logo and link structure
3. Implement category tags with both color variants
4. Create article hero with metadata layout and media embed container
5. Build article body with proper heading hierarchy and link styling
6. Add changelog list with date-aligned rows
7. Polish with footer display and social icons

**Accessibility:**
- Ensure accent-blue links against black meet WCAG contrast minimums; the #4A80FF may need verification for small text
- Provide focus indicators for keyboard navigation that complement the minimal aesthetic
- Maintain semantic heading hierarchy: h1 for article titles, h2 for section breaks
- Consider reduced-motion preferences for any scroll-triggered typography reveals

## Scope note

This guide covers the homepage, blog index, and article page surfaces visible in the supplied images. Mobile layouts, form components, loading states, and motion behavior are not represented. The light-mode media embed treatment is documented where visible but may not represent a complete inverse theme. Measurements reflect the exact retained values from the desktop interface.
