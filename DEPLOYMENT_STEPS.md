# Step-by-Step Deployment to GitHub Pages

Follow these exact steps to deploy your agency marketing website to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository `agency-marketing`
4. Make it public or private (GitHub Pages works with both)
5. Click "Create repository"

## Step 2: Link Your Local Repository to GitHub

Run these commands in your terminal:

```bash
# Add the remote repository URL (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/agency-marketing.git

# Push your code to GitHub
git push -u origin main
```

## Step 3: Update package.json

Edit the homepage in package.json to match your GitHub username:

```json
"homepage": "https://YOUR_USERNAME.github.io/agency-marketing"
```

## Step 4: Deploy to GitHub Pages

Run:

```bash
npm run deploy
```

This will build your project and push it to the gh-pages branch.

## Step 5: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section (or click "Pages" in the sidebar)
4. Under "Source", select the "gh-pages" branch
5. Click "Save"

## Step 6: Access Your Website

Wait a few minutes for GitHub to deploy your site. Then visit:

```
https://YOUR_USERNAME.github.io/agency-marketing
```

## Updating Your Website

Whenever you make changes to your website, follow these steps to update it:

1. Make your changes to the code
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```
4. Deploy again:
   ```bash
   npm run deploy
   ```

Alternatively, once configured, the GitHub Actions workflow will automatically deploy your site whenever you push to the main branch.

## Testing Your Build Locally

Before deploying, you can test your production build locally:

```bash
# Build the project
npm run build

# Install serve if you don't have it
npm install -g serve

# Serve the build folder
serve out
```

Visit the URL provided by the serve command (usually http://localhost:3000) to view your site. 