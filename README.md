# Daggerheart Digital Character Sheet

A lightweight, mobile-friendly digital character sheet for **Daggerheart TTRPG**, built as a single HTML page with no backend required.

## Features

- **Character Info** — Name, pronouns, level, heritage, class & subclass
- **Attributes** — Evasion, Agility, Strength, Finesse, Instinct, Presence, Knowledge (supports +/- values)
- **Status Tracking** — Clickable dots for HP, Stress, Hope, and Armor with configurable max values
- **Damage Thresholds** — Minor, Major, and Severe tracking
- **Weapons & Armor** — Two weapon slots and an armor slot
- **Gold & Gear** — Handfuls/Bags counters with a dynamic inventory list
- **Abilities & Cards** — Pull directly from the [Daggerheart SRD data](https://github.com/daggersearch/daggerheart-data) with support for:
  - **Domain Cards** — Color-coded by domain with icons, sorted by level, showing recall cost
  - **Communities** — Name, description, and feature
  - **Ancestries** — Name, description, and feature
  - **Subclasses** — Flattened by tier (Foundation, Specialization, Mastery) as individual cards
- **Experience Tracking** — Add name + value pairs (e.g. Eagle Eye +2)
- **Level Up Notes** — Free-text area for tracking level-up decisions
- **Backstory** — Free-text area for character history and motivations
- **Collapsible Sections** — Every section can be minimized to save space
- **Duplicate Prevention** — Already-added cards are grayed out in the picker
- **Reorderable Domain Cards** — Move cards up/down with arrow buttons
- **Auto-Save** — All changes are cached to localStorage automatically, survives page refresh
- **Export/Import** — Save your sheet as a JSON file (`CharacterName_YYYY-MM-DD.json`) or load one back in
- **Clear** — Reset the entire sheet with confirmation

## Domain Colors & Icons

Each domain has its official color and icon:

| Domain | Color |
|--------|-------|
| Arcana | `#391F48` |
| Blade | `#933728` |
| Blood | `#760306` |
| Bone | `#666769` |
| Codex | `#19284A` |
| Dread | `#453C7F` |
| Grace | `#883C6E` |
| Midnight | `#26252A` |
| Sage | `#044320` |
| Splendor | `#BF9947` |
| Valor | `#A66828` |

## Saving & Data Persistence

- **Auto-cache** — Every change you make is automatically saved to your browser's `localStorage`. If you refresh the page, all your data is still there.
- **⬇ Export** — Downloads your full sheet as a JSON file (`CharacterName_YYYY-MM-DD.json`). **Keep backups!** Store exported files in multiple places (cloud drive, USB, etc.) in case you clear your browser data.
- **⬆ Import** — Load a previously exported JSON file back into the sheet.
- **Clear** — Wipes all data from the sheet and localStorage (with confirmation).

> ⚠️ **Important:** `localStorage` is tied to your browser and domain. Clearing browser data, switching browsers, or switching devices will lose your auto-cached data. Always export a backup file regularly.

## Setup

No build step required. Just serve the files.

### Local

Open `index.html` in a browser.

### GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to your branch and `/ (root)`
4. Your sheet will be live at `https://<username>.github.io/<repo>/`

## Project Structure

```
├── index.html          # The entire application
├── images/             # Domain icons
│   ├── arcana.png
│   ├── blade.png
│   ├── blood.png
│   ├── bone.png
│   ├── codex.png
│   ├── dread.png
│   ├── grace.png
│   ├── midnight.png
│   ├── sage.png
│   ├── splendor.png
│   └── valor.png
└── README.md
```

## Data Source

Card data is fetched live from the [daggersearch/daggerheart-data](https://github.com/daggersearch/daggerheart-data) GitHub repository. No local data files needed.

## Tech Stack

- HTML + vanilla JavaScript
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- localStorage for auto-caching
- GitHub raw content API for SRD data
