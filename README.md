# Ayushi Poddar Portfolio

This project is the VS Code / React + Vite version of the supplied portfolio.

## Run locally
```bash
npm install
npm run dev
```

## Check before deployment
```bash
npm run build
```

## Deploy free on Vercel
1. Create a GitHub repository and push this whole folder.
2. Sign in to Vercel with GitHub.
3. Add New → Project → select the repository.
4. Framework preset: Vite.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

`vercel.json` is already included so direct URLs do not fail.

## Editing
- Main page markup/content: `src/App.jsx`
- Exact visual styling: `src/styles.css`

Service rows use the original interaction requested: cream by default, lavender while pressed/touched, and lavender on desktop hover.
