# How lineto.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lineto.com-design)

Last updated: 2026-08-10

## Captured pages

[![Technical documentation page showing OpenType features, character sets, and supported languages for Moonbase Var typeface with orange-accented navigation](https://pin.fontofweb.com/9731?format=jpg)](https://design.withfudge.com/share/pin-9731)

[Technical documentation page showing OpenType features, character sets, and supported languages for Moonbase Var typeface with orange-accented navigation](https://design.withfudge.com/share/pin-9731)

[![Glyph detail view with dimensional metrics diagram and Basic Latin character grid showing pixelated letterforms](https://pin.fontofweb.com/9730?format=jpg)](https://design.withfudge.com/share/pin-9730)

[Glyph detail view with dimensional metrics diagram and Basic Latin character grid showing pixelated letterforms](https://design.withfudge.com/share/pin-9730)

[![Variable font specimen displaying graduated size ramp from small to oversized lowercase glyphs with tab navigation](https://pin.fontofweb.com/9729?format=jpg)](https://design.withfudge.com/share/pin-9729)

[Variable font specimen displaying graduated size ramp from small to oversized lowercase glyphs with tab navigation](https://design.withfudge.com/share/pin-9729)

[![Dark-themed login and registration form with minimal white typography and orange accent on active navigation](https://pin.fontofweb.com/9728?format=jpg)](https://design.withfudge.com/share/pin-9728)

[Dark-themed login and registration form with minimal white typography and orange accent on active navigation](https://design.withfudge.com/share/pin-9728)

## Overview

Lineto.com is the digital presence of a Swiss type foundry, built around a radical commitment to letting typefaces speak for themselves. The design system strips away decorative excess in favor of stark contrast, rigorous grids, and generous whitespace. Every surface exists in service of typography: the interface recedes so the letterforms can advance.

The site operates in two distinct modes. A light mode—predominantly white with black text—dominates the specimen and technical documentation pages, creating the neutral ground of a test sheet. A dark mode—near-black with white text—governs account and transactional pages, shifting focus from display to utility. Both modes share the same structural DNA: a persistent left sidebar for global navigation, a main content area with substantial left padding to clear the sidebar, and an unwavering 20px baseline rhythm.

The visual personality emerges from restraint. Borders are hairline-precise. Rounded corners appear only where they signal interactivity—pills for navigation items, small radii for buttons and inputs. Color is deployed sparingly: a warm orange marks active states and calls to action, while a more aggressive red-orange appears for urgent operations. The result is a system that feels closer to a technical document or a specimen sheet than a conventional marketing site.

## Colors

The palette is deliberately minimal, built on a foundation of absolute black and white with a narrow band of functional grays and two closely related oranges.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, sidebar background, glyph rendering |
| canvas | #FFFFFF | Primary background, active tab surface, button text on dark |
| surface-dark | #101010 | Dark mode page background, form surfaces |
| muted-ink | #777777 | Secondary text, placeholder content, disabled states |
| border | #808080 | Hairline dividers, grid lines, subtle separators |
| border-light | #9A9A9B | Lighter structural borders, inactive tab backgrounds |
| surface-light | #E7E7E7 | Inactive tab bars, subtle panel backgrounds |
| action | #F67833 | Active navigation items, primary buttons, accent highlights |
| action-emergency | #FF3200 | Urgent actions, destructive operations, high-attention states |

The light mode establishes a white field with black typography, evoking the neutrality of a printed specimen page. The dark mode inverts this relationship: near-black (#101010) replaces white as the ground, with white text maintaining legibility. Both modes use the same orange family for interactive emphasis, but the darker red-orange (#FF3200) is reserved for moments requiring immediate attention, such as the active "Account" state in the sidebar.

Grays serve structural rather than decorative purposes. #808080 appears as the standard border color for hairline rules that organize content without competing with it. The slightly lighter #9A9A9B softens these divisions where needed. #777777 handles secondary information—placeholders, captions, metadata—at a consistent tonal remove from primary content.

## Typography

The system employs multiple type families drawn from the Lineto catalog and system fallbacks. The primary interface typeface is By Christian Mengelt Team 77, with By Christian Mengelt Team 77 Lineto 20152018 serving as its monospace companion for technical data. Moonbase Ll handles display specimens at monumental scale. Applesystem and Times appear as system-level fallbacks in the document stack but do not carry visible design roles in the composed interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | By Christian Mengelt Team 77 | 1.25rem | 400 | 1.2 | 0.02em | Primary content, descriptions, UI labels |
| body-small | By Christian Mengelt Team 77 | 0.8125rem | 400 | 1.2308 | 0.02em | Captions, metadata, dense lists |
| label | By Christian Mengelt Team 77 | 0.9375rem | 400 | 1.2 | 0.02em | Tab labels, form labels, secondary headings |
| display-hero | Moonbase Ll | 29.6875rem | 400 | 1.2 | 0.02em | Oversized specimen display, variable font demos |
| display-section | Moonbase Ll | 1.875rem | 400 | 0.8 | 0.02em | Section headings within specimens |
| code | By Christian Mengelt Team 77 Lineto 20152018 | 0.625rem | 400 | 1.2 | 0.02em | Unicode values, glyph names, technical data |
| navigation | By Christian Mengelt Team 77 | 1.25rem | 400 | 2 | 0.02em | Sidebar navigation, button labels |

By Christian Mengelt Team 77, designed by Christian Mengelt and distributed by Lineto, serves as the exclusive interface typeface. It appears at 20px for body text and navigation, with a characteristic 40px line-height in navigation contexts that creates generous vertical spacing within the sidebar. A smaller 13px size handles dense technical content, while 15px serves labels and secondary headings. The monospace variant, By Christian Mengelt Team 77 Lineto 20152018, appears at 10px for glyph metadata and code listings—deliberately small to keep technical data subordinate to the visual specimens. A related webfont source, By Christian Mengelt Team 77 Lineto 20152018-14941324149678225401, provides the same monospace design through an alternative delivery path.

Moonbase Ll operates at a different scale entirely. The variable font specimen demonstrates a graduated size ramp from approximately 13.6px up to 475px, with the largest sizes dominating the viewport as pure typographic image. At these display sizes, line-height compresses to 0.8 or tighter, allowing the massive letterforms to stack with minimal interference.

The document also references By Christian Mengelt Team 77-14663597874265385405 as a webfont delivery identifier for the primary sans, functionally equivalent to By Christian Mengelt Team 77 in the rendered output.

Verify licensing for these families before production use. By Christian Mengelt Team 77 and By Christian Mengelt Team 77 Lineto 20152018 are available from Lineto; Moonbase Ll licensing terms should be confirmed directly with the foundry.

## Layout

The page architecture follows a fixed sidebar and fluid main content pattern. The sidebar occupies the left edge at a consistent width, while the main content area receives substantial left padding to clear this navigation column.

The sidebar serves as the persistent navigation anchor. It contains stacked vertical links for global sections—Typefaces, Tomorrow, Articles, Bespoke, Editions, Typewriter, Timeline, Information, Account, Shop—each rendered as a pill-shaped button that inverts to orange when active. The sidebar background is black in light mode, creating a strong vertical anchor that frames the white content area. In dark mode, the sidebar maintains its black ground while the main area shifts to near-black, reducing the contrast between regions.

Main content carries padding of 16px top, 32px right, 26px bottom, and 240px left. This 240px left inset—15rem at the root reference—creates the essential spatial relationship: content never crowds the sidebar, preserving the clarity of the navigation/content boundary. The right padding of 32px provides breathing room at the viewport edge, while the asymmetric bottom padding (26px versus 16px top) subtly weights the page downward.

Within the main area, content sections stack vertically with 58px top margins creating major divisions, and 30px bottom margins on individual content blocks establishing minor rhythms. A 20px horizontal padding appears on nested containers, creating an additional layer of internal structure. The overall effect is a nested system of insets: page-level padding establishes the frame, section margins create chapters, and container padding handles local grouping.

Grid structures appear in the technical documentation as precise multi-column layouts. Character set tables, language support lists, and OpenType feature listings all deploy strict columnar organization with hairline vertical rules between them. The glyph detail view splits between a large metrics diagram on the left and a dense character grid on the right, with the grid itself subdivided into uniform cells.

## Visual language

The aesthetic is that of a working specimen: functional, precise, and deliberately unadorned. Every element justifies its presence through utility rather than decoration.

Borders function as the primary organizational device. Hairline rules—1px solid black in light mode, 1px solid white in dark mode—separate content regions, define table cells, and underline form fields. These rules are consistently thin, never accumulating into heavy frames. In the character grid, borders create the individual glyph cells; in the technical documentation, vertical rules separate columns of data; in forms, bottom borders alone define input fields without surrounding boxes.

Rounded corners are restricted to interactive elements. Navigation pills use full rounding (9999px) to create lozenge shapes that invite selection. Buttons and inputs carry small 4px radii, enough to soften edges without suggesting playfulness. The 20px radius appears on larger container elements in the sidebar, creating a middle ground between the full pills and the sharp corners of content areas.

Shadow appears minimally: a subtle gray shadow (rgb(128, 128, 128) at approximately 3.75px offset with 11.25px blur) lifts specimen images slightly from the page surface, creating the faintest sense of physical depth for what are otherwise flat, printed representations.

The variable font specimen introduces a distinctive visual behavior: a graduated size ramp where each line of text grows incrementally larger, demonstrating the typeface's optical performance across scales. This creates a triangular or stepped composition that draws the eye downward and outward, with the largest letterforms asserting their presence through sheer scale rather than weight or color.

## Components

### Sidebar navigation

Anatomy: Vertical stack of text links, each wrapped in a pill-shaped container. Active state receives an orange background fill; inactive states remain transparent with white text on black ground.

Surface and text color: Black background in all modes. Inactive links use white text; active links use black text on orange (#F67833) background. Hover states should follow the active pattern.

Typography: Navigation token at 20px with 40px line-height, creating generous vertical space within each pill.

Shape and border: Full pill rounding (9999px) on link containers. No border; color change alone defines state.

Spacing: Links stack with minimal gap (2px row-gap in list context). Individual link padding is 0px 10px horizontal, creating compact lozenges. The sidebar itself carries 16px internal padding.

Composition: Fixed position at left viewport edge. Width determined by content plus padding, approximately 240px total including the main content's left inset.

Variants: In dark mode, the sidebar maintains identical styling—black ground with white text—while the main area shifts. The "Account" section shows an emergency variant using #FF3200 for active state.

### Tab bar

Anatomy: Horizontal row of text labels, with the active label receiving a white background capsule and inactive labels resting on a light gray ground.

Surface and text color: Inactive tab bar background is #E7E7E7. Active tab is #FFFFFF with black text. Inactive tabs use black text directly on the gray ground.

Typography: Label token at 15px.

Shape and border: Small rounding (4px) on individual tab containers. The active tab appears as a raised capsule within the bar.

Spacing: Tabs distribute horizontally with generous spacing between labels. The bar itself sits at the top of the main content area.

### Specimen display

Anatomy: Large-scale typographic demonstration, typically showing a graduated size ramp or single oversized glyph.

Surface and text color: Black text on white ground in standard mode. The letterforms themselves are the only visual element.

Typography: Display-hero token for maximum sizes (up to 475px), display-section for intermediate headings. Moonbase Ll family exclusively.

Shape and border: No border, no background, no shadow. Pure typography.

Spacing: Massive vertical padding (71.25px) separates specimen sections. Individual size steps stack with tight leading, creating overlapping or nearly-touching forms at the largest sizes.

Composition: Left-aligned or centered depending on specimen type. The variable font ramp creates a stepped diagonal composition as sizes increase.

### Character grid

Anatomy: Dense table of individual glyphs organized by Unicode block, with each cell containing a single character and its hexadecimal value.

Surface and text color: Black glyphs on white cells. Hex values in code token (10px monospace).

Typography: Moonbase Ll at small sizes for glyphs; By Christian Mengelt Team 77 Lineto 20152018 for metadata.

Shape and border: 0.5px or 1px solid black borders define each cell, creating a precise grid. No rounding.

Spacing: Cells are uniformly sized with minimal internal padding (5px). The grid fills available width.

### Form fields

Anatomy: Single-line text inputs with bottom-border-only definition. Labels sit above or beside fields.

Surface and text color: In dark mode, transparent background with white text and white bottom border. In light mode, equivalent structure with black text and border.

Typography: Body token for input values; label token for field labels.

Shape and border: No visible container—only a 1px bottom border defines the field. No rounding on inputs.

Spacing: Generous vertical spacing between fields (42px section margins). Inputs carry 11px vertical padding.

Composition: Fields stack vertically in single-column layout, or split into two columns for related groups (existing customer versus new customer).

### Buttons

Anatomy: Text label with optional icon, rendered as a pill or rounded rectangle.

Surface and text color: Primary buttons use orange (#F67833) background with black text. Emergency buttons use #FF3200 with white text. Icon-only buttons may use transparent background with white or black icon.

Typography: Navigation token for button labels.

Shape and border: Full pill rounding for prominent actions; 4px radius for standard buttons. No border.

Spacing: Horizontal padding of 16px for standard buttons, 10px for compact variants. Icons receive 8px padding in all directions when standalone.

## Responsive behavior

The sidebar navigation, with its fixed 240px left inset for main content, suggests a desktop-first architecture. At narrower viewports, the sidebar should collapse to a top bar or hamburger menu, with the main content's left padding reducing to standard gutter width.

The specimen displays, particularly the graduated size ramp, will require horizontal scrolling or viewport-fitting at smaller sizes. The 475px display-hero size exceeds most mobile viewports; consider capping maximum size to viewport width with `vw` units or enabling horizontal overflow for the specimen container.

Character grids with their dense cell structure should scroll horizontally on narrow screens rather than reflowing, preserving the Unicode organization. Form fields in two-column layouts should stack to single column below approximately 768px.

Tab bars may require horizontal scrolling or conversion to a dropdown when label count exceeds viewport width.

## Practical implementation guidance

### Preserve
- The stark monochrome foundation with single orange accent. The system's power comes from this restraint.
- The 240px left inset for main content. This spatial relationship between sidebar and content is the signature layout gesture.
- Hairline borders as the sole decorative/organizational device. Thicker rules or additional ornamentation would violate the system's character.
- The graduated size ramp for variable font specimens. This is a distinctive demonstration pattern that should be replicated faithfully.
- Pill-shaped navigation with full rounding. The lozenge shape is a recognizable brand element.

### Avoid
- Multiple accent colors. The narrow orange range is sufficient; additional hues would fragment the system's focus.
- Box shadows on containers. The minimal shadow on specimen images is the only justified use; avoid elevating UI elements artificially.
- Rounded corners on content areas. Keep corners sharp except where interactivity is signaled.
- Decorative backgrounds or gradients. The white/black/gray progression is complete; texture or pattern would compete with the typefaces.

### Recommended build order
1. Establish the sidebar navigation with pill styling and active state behavior.
2. Implement the main content area with correct left padding (240px) and vertical section rhythm (58px top margins, 30px bottom margins).
3. Add the tab bar component with capsule active state.
4. Build the specimen display container with graduated size ramp logic.
5. Implement character grid with precise border definitions.
6. Create form field styling with bottom-border-only inputs.
7. Add dark mode variant, inverting backgrounds and text while preserving orange accent behavior.

### Accessibility
- Ensure the orange active states meet contrast requirements against both black and white backgrounds. #F67833 on black passes WCAG AA for large text; verify for smaller sizes.
- The 10px code token is small; consider offering a user preference for larger technical text, or ensure zoom behavior preserves legibility.
- Form fields with bottom-border-only definition should include visible focus states that go beyond color change—consider adding a top border or background shift on focus.
- The massive display sizes in specimens may trigger motion sensitivity; respect `prefers-reduced-motion` if implementing variable font animation.
- Sidebar navigation should be reachable via keyboard and properly announce active state to screen readers.

## Scope note

This guide covers the type specimen, technical documentation, and account pages of lineto.com. It does not include the shop checkout flow, font purchasing interface, or any animated variable font interactions beyond the static size ramp. Mobile breakpoint behavior is inferred from desktop layouts and should be verified during implementation. Measurements are derived from the documented pixel values with conversion to rem units at a 16px root reference. The families Applesystem and Times appear in the document stack as system fallbacks but carry no visible design role in the composed interface.
