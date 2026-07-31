# dmarcosg.github.io

Your personal site. Static HTML/CSS/JS, no build step, GitHub Pages serves these files as-is.

## One-time setup

1. On GitHub, create a new repository named exactly **`dmarcosg.github.io`** (this exact name is what makes GitHub Pages serve it at that URL). Leave it empty, no README, no .gitignore.
2. On your computer, in the folder containing these files:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/dmarcosg/dmarcosg.github.io.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings → Pages** → under "Build and deployment", set **Source: Deploy from a branch**, **Branch: main / (root)** → Save.
4. Wait ~1 minute, then visit **https://dmarcosg.github.io**.

## Updating the site (this is the whole workflow, forever)

Open `data.js`, edit the text you want to change (bio, a project, a news item, a publication), then:

```bash
git add data.js
git commit -m "update site"
git push
```

The live site updates automatically within about a minute. You never need to touch `index.html`, `style.css`, or `site.js` unless you want to change the design or add a new *section*.

## Adding a new item to a list (projects, publications, news, students)

Each list in `data.js` is a JavaScript array of `{ ... }` blocks. To add one, copy an existing block (including the commas), paste it in the array, and edit the text. To remove one, delete its block.

## Page structure

Top to bottom: About → Projects → Job openings → Publications → News → People (current group,
alumni, external collaborators) → Contact → Bio (career chronology). This mirrors the order of
sections in `index.html`, and every piece of text comes from `data.js`.

## Adding your photo

Save your headshot as `images/diego-marcos.jpg` (square-ish, 300x300px or larger works well).
The hero already references this path, the site just won't show an image until the file exists.

## Adding publication thumbnails

Screenshot a paper's teaser figure (or Figure 1), crop it to roughly 300x200px, and save it as
`images/pubs/<something>.jpg`. Then set that path in the `thumbnail` field of the matching
publication entry in `data.js`. No other changes needed.

## Things marked [ADD]

Search `data.js` for `[ADD]`, these are placeholders where I didn't have confirmed information (your exact email address, project descriptions I couldn't verify, and your featured publications). Replace them with real content before or after you publish; the site works fine with them left blank strings ("") too, they just won't render.

## Custom domain (optional)

If you ever want e.g. `diegomarcos.com` instead of the github.io URL: buy the domain, add a `CNAME` file to this repo containing just the domain name, and point your domain's DNS to GitHub Pages (GitHub's docs: Settings → Pages → Custom domain will walk you through it and auto-create the CNAME file for you).
