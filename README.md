# Drafts by Song

Personal blog hosted at [https://draftsbysong.github.io](https://draftsbysong.github.io), built with Astro and deployed via GitHub Actions to GitHub Pages.

## Directory Structure

- `src/content/posts/<slug>/index.md` — blog entries (one subfolder per post, supports Markdown/MDX and KaTeX math)
- `src/layouts/BaseLayout.astro` — shared page shell and light/dark theme toggle
- `src/styles/global.css` — typography, layout, and responsive TOC styles
- `.github/workflows/deploy.yml` — automatic build and deploy on push to `main`

## Writing a New Post

1. Create a folder under `src/content/posts/<slug>/index.md`.
2. Add frontmatter:

```yaml
---
title: "Post Title"
description: "Short summary."
date: 2026-11-25
stage: draft # note | draft | essay
published: true # set false to keep unpublished
---
```

## Local Commands (Windows PowerShell)

```powershell
npm.cmd run dev      # local preview at http://localhost:4321
npm.cmd run build    # production build to ./dist
npm.cmd run preview  # preview production build
```

Pushing to `main` triggers GitHub Actions and publishes automatically.
