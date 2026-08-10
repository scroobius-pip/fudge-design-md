# How everyday-practice.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/everyday-practice.com-design)

Last updated: 2026-08-10

## Captured pages

[![Project detail page showing POSEUTEO POSTER book stack with split-pane layout and category filter bar](https://pin.fontofweb.com/10374?format=jpg)](https://design.withfudge.com/share/pin-10374)

[Project detail page showing POSEUTEO POSTER book stack with split-pane layout and category filter bar](https://design.withfudge.com/share/pin-10374)

[![Project grid with editorial works including LG Chem report and Olive Young packaging alongside detail panel](https://pin.fontofweb.com/10373?format=jpg)](https://design.withfudge.com/share/pin-10373)

[Project grid with editorial works including LG Chem report and Olive Young packaging alongside detail panel](https://design.withfudge.com/share/pin-10373)

[![Homepage with member directory sidebar and project grid featuring book covers and exhibition works](https://pin.fontofweb.com/10372?format=jpg)](https://design.withfudge.com/share/pin-10372)

[Homepage with member directory sidebar and project grid featuring book covers and exhibition works](https://design.withfudge.com/share/pin-10372)

[![Contact form panel with project inquiry fields alongside vibrant poster grid with colorful tag pills](https://pin.fontofweb.com/10371?format=jpg)](https://design.withfudge.com/share/pin-10371)

[Contact form panel with project inquiry fields alongside vibrant poster grid with colorful tag pills](https://design.withfudge.com/share/pin-10371)

## Overview

Everyday Practice presents itself as a Seoul-based graphic design studio through a website that functions as both portfolio archive and working interface. The system uses a stark, utilitarian shell that deliberately recedes behind the studio's own graphic work. A persistent dark field—near-black with soft charcoal accents—serves as the constant ground against which project imagery, category tags, and text elements assert themselves. The layout divides into functional zones: a primary content area displaying project grids or detail views, and a secondary panel that shifts between member directories, contact forms, and project information depending on context. This split-pane architecture allows the studio to maintain navigational continuity while presenting dense information without overwhelming the visual work. The design language speaks with restraint: no decorative borders on containers, no drop shadows, no gradients. Typography stays small and neutral, letting project thumbnails with their inherent color and composition carry the visual energy.

## Colors

The palette is severely limited, built to maximize contrast with the studio's colorful project imagery while maintaining legibility across dense information surfaces.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary background for all surfaces; project grid ground; navigation bar |
| ink-soft | #131313 | Elevated panels, contact form fields, secondary information areas |
| muted | #787878 | Hairline borders, inactive navigation elements, secondary text |
| canvas | #E2E2E2 | Category tag backgrounds, primary text on dark grounds, active UI elements |

The color logic follows a simple inversion principle. Dark grounds dominate; light elements appear as discrete accents. The muted gray functions optically rather than chromatically—appearing as 1px rules that separate zones without asserting themselves as design elements. Category tags invert the relationship, carrying light backgrounds with dark text so they remain legible when overlaid on varied project thumbnails. No gradients or shadows appear in the interface layer; all depth and hierarchy come from spatial arrangement and tonal contrast. Project photography introduces the full spectrum of color, which the neutral system frames without competing.

## Typography

The type system relies on system-available sans-serif families, sized modestly to serve information rather than expression. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Applesystem | 1rem | 400 | 1.6 | 0 | Contact form labels, member biographies, project descriptions |
| label | Applesystem | 0.875rem | 400 | 1.4 | 0 | Category tags, pagination, metadata |
| navigation | Applesystem | 1rem | 400 | 1.2 | 0 | Primary nav, language toggle, utility links |
| section-heading | Applesystem | 1.125rem | 500 | 1.2 | 0 | Member section headers, exhibition categories |
| project-title | Applesystem | 1rem | 400 | 1.4 | 0 | Project captions beneath thumbnails |

The hierarchy operates through weight and spatial position rather than dramatic scale shifts. Section headings at 1.125rem with medium weight establish information architecture; body text at 1rem handles reading content; labels at 0.875rem manage dense UI surfaces. Line heights stay generous for body content but tighten for navigation and labels where vertical economy matters. No display sizes appear in the interface—the studio's graphic work provides visual impact, and oversized typography would compete. Korean text uses Apple SD Gothic Neo as a system fallback, maintaining the same scale relationships.

## Layout

The page architecture follows a split-pane model with a fixed or persistent left content zone and a right panel that adapts to context. On the homepage and project index, the left side carries a responsive grid of project thumbnails while the right presents member information, exhibition history, or contact forms. On project detail pages, the right panel displays expanded project imagery and description.

The grid system uses tight internal spacing—0.625rem gaps between thumbnails—creating a dense mosaic that emphasizes the quantity and variety of work. Thumbnails follow an irregular or masonry-like rhythm rather than strict uniform rows, allowing varied aspect ratios to coexist naturally. The right panel maintains consistent internal padding, approximately 0.625rem horizontally and 3.125rem vertically, creating breathing room around dense text blocks.

Navigation sits at the top edge as a full-width bar, with studio identity at left, category filters center-left, and utility links (Contact, Profile, Client) at right. A language toggle (Kor / Eng) and email placeholder occupy the top-right zone. Category filters present as inline text links with a list-view toggle, maintaining horizontal flow without dropdown containers.

The contact form panel stacks fields vertically with generous vertical spacing between inputs. Each field carries a label above a full-width input, with hairline borders defining field boundaries. Form sections group logically: project information, contact details, project type selection via inline toggle buttons.

## Visual language

The visual character emerges from systematic restraint applied to a content-heavy portfolio. The near-black ground creates a gallery-like environment where each project thumbnail reads as an independent object. Category tags appear as small, rounded pills with light backgrounds—distinct enough to scan quickly, small enough to avoid overwhelming the imagery they annotate.

Borders function as structural hairlines: 1px solid rules in muted gray separate the split panes, define form field boundaries, and create the faintest spatial demarcation between navigation and content. No border-radius appears on major containers; the single rounded element is the category tag at approximately 0.325rem, softening an otherwise angular system.

The project grid's visual rhythm depends on thumbnail diversity. The interface provides consistent framing—uniform gaps, aligned edges, caption placement below—while the content supplies variation. This creates a productive tension between systematic order and graphic eclecticism. Pagination at the bottom uses compact numbered circles, maintaining the small-scale typographic approach.

Imagery treatment is direct: photographs of books, posters, and environmental graphics appear without overlays, frames, or effects. The dark ground extends behind thumbnails where images don't fill the full rectangle, creating implied depth without explicit shadow.

## Components

### Project card

- **Anatomy**: Thumbnail image, project title caption below, optional category tag pills beneath title
- **Surface**: Transparent background on dark ground; image fills available space
- **Typography**: Project title at 1rem regular weight; category labels at 0.875rem
- **Shape**: No border-radius on card container; sharp rectangular edges
- **Spacing**: 0.625rem gap to adjacent cards; title sits flush below thumbnail with minimal vertical offset
- **Composition**: Thumbnails vary in aspect ratio, creating irregular grid rhythm
- **Variants**: Some cards display single category tag, others multiple tags in horizontal row with small internal gap

### Category tag

- **Anatomy**: Text label within rounded pill container
- **Surface**: Light background (#E2E2E2) with dark text; no border
- **Typography**: Label token at 0.875rem
- **Shape**: 0.325rem border-radius creating soft pill
- **Spacing**: Internal padding approximately 0.3125rem horizontal, 0.25rem vertical; multiple tags gap at 0.625rem
- **Composition**: Appears inline below project titles or as filter indicators

### Navigation bar

- **Anatomy**: Studio wordmark left, category filter links center-left, utility links right, language toggle and email far right
- **Surface**: Full-width bar on ink background
- **Typography**: Navigation token at 1rem; category links in regular weight with active state in light color
- **Shape**: No border or shadow; separated from content by implied boundary
- **Spacing**: Horizontal padding approximately 0.625rem; vertical padding tight to maintain compact profile
- **Composition**: Single horizontal row with flex distribution; list-view toggle as text icon at filter section end

### Contact form

- **Anatomy**: Stacked field groups with labels, text inputs, textareas, and toggle button sets
- **Surface**: Panel on ink-soft background; fields with transparent or matching backgrounds
- **Typography**: Body token for labels and inputs; section headings for form group titles
- **Shape**: No field border-radius; full-width inputs with bottom hairline borders in muted gray
- **Spacing**: Generous vertical spacing between field groups; internal field padding approximately 0.625rem
- **Composition**: Single column with left-aligned labels above inputs; project type selection as horizontal toggle button row

### Member directory

- **Anatomy**: Section headings for role categories (Co-Founder, Current Member), individual entries with name and role description
- **Surface**: Right panel on ink or ink-soft background
- **Typography**: Section-heading token for category titles; body token for member details
- **Shape**: No containing borders; entries separated by vertical whitespace
- **Spacing**: Section headings preceded by substantial vertical space; member entries compactly stacked

## Responsive behavior

The split-pane architecture suggests a breakpoint where the right panel collapses below the main content or transforms into an overlay. At narrower widths, the project grid reduces from multiple columns to two or single column, maintaining the tight gap rhythm. Category filters in the navigation bar may compress into a dropdown or horizontal scroll container when space constricts.

The contact form, spacious in the right panel, would require full-width treatment on mobile with maintained field stacking. Member directory information might relocate to a dedicated page rather than sharing viewport with project grids on small screens.

Typography scales down modestly if at all—the already-small sizes provide reasonable mobile legibility without dramatic reduction. Touch targets for category tags and pagination would need expansion to meet minimum accessibility requirements.

## Practical implementation guidance

### Preserve
- The severe dark-light contrast that frames project imagery
- Small, neutral typography that serves rather than competes with graphic content
- Tight grid gaps that create dense, energetic project indexes
- Sharp rectangular containers without decorative radius
- Category tag pills as the single softened element in an angular system
- Split-pane information architecture with context-adapting right panel

### Avoid
- Adding shadows, gradients, or dimensional effects to UI surfaces
- Increasing type scale for "visual impact"—the restraint is intentional
- Rounding card containers or adding frames around thumbnails
- Lightening the background ground—this would destroy the gallery effect
- Multiple font families or expressive type treatments in the interface layer

### Recommended build order
1. Establish the dark ground system with ink and ink-soft tokens
2. Implement navigation bar with flex distribution and category filter links
3. Build project grid with CSS Grid or masonry layout, tight gaps, and responsive column behavior
4. Create project card component with thumbnail, caption, and optional tag array
5. Develop right panel system with member directory, contact form, and project detail variants
6. Add category tag component with consistent pill styling
7. Implement contact form with hairline-bordered fields and toggle button sets
8. Polish spacing rhythm across all panel types

### Accessibility
- Ensure category tags and pagination controls meet minimum 44×44dp touch targets on mobile
- Provide visible focus indicators on navigation links and form fields; the muted border color may need lightening for focus states
- Maintain sufficient contrast for body text on dark grounds; the canvas token on ink background exceeds WCAG AA requirements
- Consider adding skip navigation for keyboard users moving past dense project grids
- Form fields should carry explicit labels with proper association, not placeholder-only text

## Scope note

This guide covers the desktop portfolio and contact surfaces visible in the supplied captures. Mobile breakpoints, hover and focus states, loading behavior, and project detail page transitions are not represented. The member directory and exhibition history appear on the homepage right panel; their full content hierarchy is partially visible. Measurements are practical adaptation targets.
