# Arunprakash S — Portfolio

A React + Vite personal portfolio designed for GitHub Pages. Site content is intentionally centralized so it is straightforward to maintain.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. Build a production version with:

```bash
npm run build
```

## GitHub Pages deployment

The project uses hash routes (for example `#/projects/trustpay`) so direct refreshes work on static GitHub Pages hosting. `vite.config.js` has the base path for `arunprakash-3001/portfolio`, and `.github/workflows/deploy.yml` builds and publishes the site whenever `main` is pushed.

On GitHub, open **Settings → Pages**, choose **GitHub Actions** as the source, then push this project to the `main` branch. The Actions workflow will deploy it.

## Updating site content

| What to update | File |
| --- | --- |
| Name, links, email, phone, resume | `src/data/profile.js` |
| Projects and live-demo URLs | `src/data/projects.js` |
| Certifications | `src/data/certifications.js` |
| Profile photo | Replace `profile.jpeg` in the repository root (keep the same name) |

### Add a project

Add one object to the array in `src/data/projects.js`. Include `slug`, `title`, `shortDescription`, `description`, `technologies`, `github`, `demo`, and `features`. The cards and detail page are generated automatically. Set `demo` to a URL to activate the **Live Demo** link, or use `null` to show **Live Demo — Coming Soon**.

### Add a certification

Add an object with `name`, `issuer`, `year`, and `credentialUrl` to `src/data/certifications.js`.

### Update the resume

Replace `resumeUrl` in `src/data/profile.js`. It is used everywhere that displays the resume link.

## Contact form setup

The contact form is configured for [Formspree](https://formspree.io/) and will deliver through the provided form endpoint in `src/config/contact.js`. Formspree endpoints are public browser URLs, so no secret or API key is committed. It works locally and in the GitHub Pages build without further configuration.

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xnjawqnd
```

To change providers or endpoints later, update `src/config/contact.js`. You may optionally override it locally with `VITE_FORMSPREE_ENDPOINT` in `.env`, or in GitHub Actions with a repository variable of the same name. Do not commit private keys.
