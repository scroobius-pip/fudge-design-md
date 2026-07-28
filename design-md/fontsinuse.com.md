# How fontsinuse.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fontsinuse.com-design)

Last updated: 2026-07-28

## Design character

Fonts In Use is an **editorial archive of typography in the wild**. The site feels like a quiet museum label system wrapped around loud artwork: stark black-and-white chrome, a stacked wordmark, and a content stage that hands nearly all color and drama to the submitted pieces.

What should survive adaptation:

- Archive credibility through monochrome UI restraint
- Artwork-first layout where media dominates the frame
- Clear metadata hierarchy without competing with the specimen
- Dense but scannable right-rail taxonomies (typefaces, formats, topics, tags)
- Soft gray secondary actions that never shout over primary content

## Foundations

### Color

Measured text roles:

| Role | Hex | Use |
|------|-----|-----|
| Primary text | `#000000` | Wordmark, titles, body, nav |
| Secondary text | `#999999` | Meta lines, muted nav labels, captions |

Visual reading of the chrome (not a measured site palette): pure white canvas, light gray pills for **Like** / **Add to Set**, pale search field border, hairline black rules under the primary nav, and soft gray footers/captions under artwork. Accent color is almost absent in the UI—color arrives almost entirely from the artwork (e.g. coral red specimen fields).

Keep the system nearly achromatic. If you need emphasis, prefer weight and size over hue.

### Typography

Declared family names were not retained; treat the stack as a clean neo-grotesk UI face.

Observed sizes and weights:

- Wordmark lockup: heavy condensed black, multi-line **FONTS / IN USE**
- Page title: ~36–48px bold/black for the use name
- Section heads in sidebar: ~18–24px bold
- Body / meta: ~12–14px regular
- Micro labels and captions: ~10–12px regular
- Nav items: ~14–16px; inactive Collection/Blog read softer gray

Hierarchy is strict: wordmark → use title → section heads → body → meta. Tracking is neutral; the voice is catalog, not display poster (the poster lives inside the media).

### Spacing and layout

Recurring gaps cluster around **5 / 8 / 10 / 15 / 20 / 30** px, with larger media gutters (~50px and wide column gaps).

Desktop article composition:

1. Full-width header: wordmark left, sponsor line center, account + search right  
2. Secondary nav strip (Collection / Blog) then Topics / Formats / Typefaces bar with a firm bottom rule  
3. Two-column body: large media column left, taxonomy rail right  
4. Title + contributor meta above the media  
5. Action chips (Like, Add to Set) tucked under the meta line  

Density is moderate: the media block is generous; the rail is link-dense but airy between groups.

## Visual language

- **Shapes:** near-zero radius on chrome; chips and search sit at ~2px if rounded at all. The system is rectangular and editorial.
- **Borders:** thin 1px rules for structure; thicker ~3–5px top rules appear on list/rail separators. Occasional thick side strokes relate to media framing, not generic cards.
- **Shadows:** essentially unused in chrome (one soft drop `0 8 8 -5` observed near media). Flat surfaces dominate.
- **Imagery:** full-bleed specimen photography/graphics are the brand moment. UI stays out of the way with white margins and small gray credit lines under the frame.
- **Motion:** not established from still frames.

## Components and states

**Global header**  
Stacked black wordmark, short mission line with sponsor credit, Sign in link, and a boxed search field with Advanced Search helper.

**Primary filters**  
Topics / Formats / Typefaces dropdowns sit on a ruled bar—library navigation, not marketing tabs.

**Use article**  
Title, contributor + dates, Like / Add to Set chips, hero media with left/right browse chevrons, and a right rail of linked taxonomies:

- Typefaces (with external-link glyph)  
- Formats with counts  
- Topics, Designers/Agencies  
- Long “Tagged with” list  

**Related / more block**  
Lower section uses a bold “More…” head, small filter chips (Typefaces, Formats, …), and a multi-column thumbnail grid of other uses—still monochrome chrome around colorful thumbs.

**States (visible only)**  
Inactive nav gray vs black active titles; chips appear disabled/neutral at zero likes. Do not invent hover/focus behavior from stills.

## Practical guidance

**Preserve**

- Black type on white paper as the entire product shell  
- Artwork as the only saturated surface  
- Sidebar as a pure link taxonomy, not cards with shadows  
- Wordmark stacking and quiet sponsor credit  
- Thin horizontal rules as the main structural device  

**Avoid**

- Brand gradients, colored headers, or saturated buttons in chrome  
- Heavy card elevation or glassmorphism around specimens  
- Crowding the media with floating UI badges  
- Turning the archive into a marketing landing page  
- Inventing a colorful “brand palette” beyond black, white, and gray  

## Scope note

Studied four viewport captures of a single use article (`/uses/75265/bruket-fjellhamar`) spanning header, media+rail, related grid, and lower chrome. Home, collection indexes, and blog layouts were not in this set—treat multi-page patterns as unconfirmed.

## Captured pages

[![Bruket Fjellhamar - Fonts In Use](https://pin.fontofweb.com/6841?format=jpg)](https://design.withfudge.com/share/pin-6841)

[Bruket Fjellhamar - Fonts In Use](https://design.withfudge.com/share/pin-6841)

[![Bruket Fjellhamar - Fonts In Use](https://pin.fontofweb.com/6842?format=jpg)](https://design.withfudge.com/share/pin-6842)

[Bruket Fjellhamar - Fonts In Use](https://design.withfudge.com/share/pin-6842)

[![Bruket Fjellhamar - Fonts In Use](https://pin.fontofweb.com/6843?format=jpg)](https://design.withfudge.com/share/pin-6843)

[Bruket Fjellhamar - Fonts In Use](https://design.withfudge.com/share/pin-6843)

[![Bruket Fjellhamar - Fonts In Use](https://pin.fontofweb.com/6844?format=jpg)](https://design.withfudge.com/share/pin-6844)

[Bruket Fjellhamar - Fonts In Use](https://design.withfudge.com/share/pin-6844)

## Colors

- `#000000`
- `#999999`
- `#ffffff`
- `#f0f0f0`
- `#e5e5e5`
