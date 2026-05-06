# Ramya's Mastery Tracker

A 4-track learning planner for becoming job-ready as a Data Analyst, Data Scientist, ML Engineer, and AI Engineer. Dark violet aesthetic, daily streak tracking, per-role progress, and 600+ topics across all four tracks.

## What's inside

```
mastery-tracker/
├── index.html        ← main page (open this to test locally)
├── style.css         ← all styling (dark violet aesthetic)
├── app.js            ← state, rendering, interactions
├── data/
│   └── curriculum.js ← all 4 role curricula + quotes
└── README.md         ← this file
```

## Run it locally

Just open `index.html` in any modern browser. It works as a static file — no build step, no server needed.

For a slightly better experience, serve it locally:

```bash
# Option 1: Python
cd mastery-tracker
python3 -m http.server 8000
# then visit http://localhost:8000

# Option 2: VS Code "Live Server" extension
# Right-click index.html → Open with Live Server
```

## Deploy to Vercel (easiest)

1. Push the `mastery-tracker` folder to a new GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **Add New → Project**, pick the repo.
4. Framework Preset: **Other** (it's plain HTML/CSS/JS).
5. Click **Deploy**. Done — you'll get a URL like `mastery-tracker-ramya.vercel.app`.

To use a custom subdomain (e.g. `mastery.yourdomain.com`), add it under Project Settings → Domains.

## Deploy to GitHub Pages

1. Push the folder to a GitHub repo.
2. In the repo: **Settings → Pages**.
3. Source: **Deploy from a branch**, branch: `main`, folder: `/` (root) or `/mastery-tracker` if it's nested.
4. Save. Your site is at `https://yourusername.github.io/repo-name/`.

## Editing the curriculum

All topics live in `data/curriculum.js`. Each role has `sections`, each section has `topics`. To add a topic:

```js
{ id: "ai-7-99", text: "Some new topic", resource: "Optional source link" }
```

The `id` must be unique — that's what's saved to localStorage when you check it.

To add a new role entirely, copy one of the existing role objects (`da`, `ds`, `ml`, `ai`) inside `CURRICULUM`, give it a unique key, then update `ROLE_ORDER` in `app.js` and add a matching stat card in `index.html`.

## Progress backup

Your progress is saved in your browser's localStorage. To back it up:

- Click **↓ Export progress** — downloads a JSON file.
- On a new device or after clearing the browser, click **↑ Import progress** to restore.

## Daily routine

The site is designed for a daily 4-track rhythm:

- 30 min Data Analyst topic
- 30 min Data Scientist topic
- 30 min ML Engineer topic
- 30 min AI Engineer topic

Click **I studied today** at the top to mark a study day. The streak updates automatically. The 28-day grid below shows your last month at a glance.

## Tweaking the look

All colours and fonts live as CSS variables at the top of `style.css`. Easy to swap:

- `--violet`, `--violet-bright` — main accent
- `--da`, `--ds`, `--ml`, `--ai` — per-role accent colours
- `--serif` — display font (currently Fraunces)
- `--sans` — body font (currently General Sans)

---

Built for Ramya · 2026 · Stay consistent. Compound daily.
