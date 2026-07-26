# Portfolio — edit guide

## 1. Everything personal lives in one file: `js/config.js`
Open it and fill in:
- `name`, `role`, `tagline`, `location`, `email`
- `socials` — paste your real LinkedIn/GitHub/etc URLs (leave `""` to hide an icon)
- `heroImage` — see step 2
- `skills` — your tool list
- `powerbiProjects`, `sqlSnippets`, `pythonProjects` — one object per card, add or delete freely
- `cv` — your experience, education, certifications

Everything lives in a single `index.html` now (Home / About / Skills / Power BI / SQL / Python / CV
are all sections on one page, linked by the nav bar), and that page reads from `config.js`
automatically — so you only ever edit content in one place.

## 2. Add your photo
Drop a photo into `assets/` (e.g. `assets/profile.jpg`), then in `js/config.js` change:
```js
heroImage: "assets/profile.jpg"
```
It sits faint and grayscale behind the hero text on the home page — busy or bright photos work fine
because of the fade.

## 3. Add a Power BI report
In Power BI Service: **File → Publish to web** → copy the embed link → paste it into a project's
`embedUrl` field in `js/config.js`. Prefer a plain screenshot instead? Drop an image in `assets/`
and set `image` on that project — it'll show as a clean square thumbnail instead of a live embed.

## 4. Add a Python notebook
Convert it to HTML so it can sit in an iframe:
```
jupyter nbconvert --to html your_notebook.ipynb
```
Put the resulting `.html` file in `assets/notebooks/`, then set `notebookUrl` for that project in
`js/config.js` to the file's path, e.g. `assets/notebooks/churn_model.html`. Same as Power BI, you
can use `image` instead for a simple screenshot thumbnail.

## 5. Contact / "Hire me"
The nav has a "Hire me" button that jumps to the contact section. The form has no backend — when
someone hits Send, it opens their email app with a message pre-filled to your address (from
`email` in config.js). Edit the heading/blurb under `contact` in `js/config.js`. If you'd rather
have messages submitted silently without opening an email app, that needs a form service like
Formspree — say the word and I'll wire it up.

## 6. Light / dark mode
There's a toggle button in the nav (sun/moon icon). It defaults to whichever mode the visitor's
device prefers, and switching is instant — no reload. It resets to the device default on page
reload rather than remembering a manual choice; ask if you'd like it to persist instead.

## 7. CV / print
Scroll to the CV section and hit "Print / Save as PDF". `css/print.css` hides everything else on
the page (nav, hero, about, skills, Power BI, SQL, Python, contact) and prints only the resume,
cleanly, on its own — no separate file needed.

## 8. Preview locally
No build step — just open `index.html` in a browser. If icons/fonts don't load from a `file://`
path in your browser, run a tiny local server from this folder instead:
```
python -m http.server 8000
```
then visit `http://localhost:8000`.

## File map
```
index.html      the whole site: hero, about, skills, Power BI, SQL, Python, CV — all as sections
css/style.css   all shared styling
css/print.css   print-only rules (used when you print the CV section)
js/config.js    <- your content goes here
js/main.js      renders every section from config.js (rarely needs edits)
assets/         photo, favicon, converted notebooks
```

## Adding/removing a section
Each section in `index.html` is a `<section id="...">` block. To reorder them, cut and paste the
whole `<section>...</section>` block to a new spot — the nav links (`#about`, `#skills`, `#powerbi`,
`#sql`, `#python`, `#cv`) just need to match whichever `id` you keep on each section.
