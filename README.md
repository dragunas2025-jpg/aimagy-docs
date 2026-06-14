# Aimagy Docs

Official Docusaurus documentation for Aimagy AI image plugins.

## Local development

Requirements:

- Node.js 20 or newer
- Git for Windows

```powershell
npm install
npm start
```

The local site opens at `http://localhost:3000`.

## Publish

The publish command installs exact dependencies, verifies the production build,
creates a commit, synchronizes with GitHub, and pushes to `main`:

```powershell
npm run publish -- "Describe the documentation update"
```

Cloudflare Pages watches the GitHub `main` branch and deploys successful updates
to `https://docs.aimagy.com`.

## Cloudflare Pages settings

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `build`
- Root directory: `/`
- Node.js version: `20`

The custom domain must be `docs.aimagy.com`.
