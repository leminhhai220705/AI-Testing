# Agency Marketing Website

A modern, responsive marketing agency website built with Next.js, TailwindCSS, and Framer Motion.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Dark mode support
- Optimized performance
- SEO friendly

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/agency-marketing.git
cd agency-marketing
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to GitHub Pages

### Step 1: Update package.json

Make sure to update the `homepage` field in `package.json` with your GitHub username:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/agency-marketing",
```

### Step 2: Deploy

Run the deploy command:
```bash
npm run deploy
```

This will build the application and push it to the `gh-pages` branch of your repository.

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Set the source to the `gh-pages` branch
4. Save your changes

Your site should now be available at `https://YOUR_GITHUB_USERNAME.github.io/agency-marketing`

## Manual Deployment

If you prefer to deploy manually:

1. Build the project
```bash
npm run build
```

2. Deploy the `out` directory to your hosting provider of choice.

## License

MIT
