# Deploying to GitHub Pages

This guide explains how to deploy your Agency Marketing website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. A repository for your project on GitHub

## Setup for GitHub Pages

1. **Update the homepage in package.json**

   Edit your `package.json` file and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:

   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/agency-marketing"
   ```

2. **Push your code to GitHub**

   If you haven't already, create a repository on GitHub and push your code:

   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/agency-marketing.git
   git push -u origin main
   ```

## Deployment Methods

### Option 1: Using gh-pages package (Recommended)

Simply run:

```bash
npm run deploy
```

This will:
- Build your project
- Create a gh-pages branch (if it doesn't exist)
- Push the built files to the gh-pages branch

### Option 2: Using GitHub Actions

This project includes a GitHub Actions workflow file at `.github/workflows/deploy.yml`. 

When you push to the main branch, GitHub Actions will automatically:
1. Build your Next.js application
2. Deploy it to the gh-pages branch

For this to work, you need to:

1. Push your code to the main branch of your GitHub repository
2. Wait for the GitHub Actions workflow to complete
3. Configure GitHub Pages to deploy from the gh-pages branch

### Option 3: Manual Deployment

If you prefer to deploy manually:

1. Build the project
   ```bash
   npm run build
   ```

2. Copy the contents of the `out` directory to your preferred hosting service

## Configure GitHub Pages

After deploying, configure GitHub Pages:

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Set the source to the `gh-pages` branch
4. Save your changes

Your site should now be available at `https://YOUR_GITHUB_USERNAME.github.io/agency-marketing`

## Troubleshooting

- **404 errors for assets**: Make sure the `assetPrefix` in `next.config.js` matches your repository name.
- **Blank page**: Check browser console for errors. It might be related to incorrect paths.
- **Build failures**: Make sure all dependencies are installed and your code doesn't have linting errors.

## Local Testing

To test the production build locally before deploying:

```bash
npm run build
npx serve out
```

Visit `http://localhost:3000` to see your site. 