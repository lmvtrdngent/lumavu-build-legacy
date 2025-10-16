# Lumavu Trading Enterprises

A professional website for Lumavu Trading Enterprises - Excellence In Construction Services.

## About

Lumavu Trading Enterprises is a 100% youth black-owned construction company specializing in:
- Civil Engineering
- General Building
- Plant Hire
- Facilities Maintenance

We are CIDB accredited with BBBEE Level 1 certification.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - Modern UI library
- **shadcn-ui** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework

## Development Setup

### Prerequisites

- Node.js (v18 or higher) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn package manager

### Installation

```sh
# Clone the repository
git clone https://github.com/lmvtrdngent/lumavu-build-legacy.git

# Navigate to the project directory
cd lumavu-build-legacy

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

This project is configured for deployment on **Cloudflare Pages**.

### Cloudflare Pages Deployment

1. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages
   - Click "Connect to Git"
   - Select your GitHub repository

2. **Build Configuration:**
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 18

3. **Environment Variables:**
   - No additional environment variables required for basic deployment

4. **Custom Domain:**
   - In Cloudflare Pages dashboard, go to Custom domains
   - Add your domain and follow DNS configuration instructions

### Manual Deployment

```sh
# Build the project
npm run build

# The built files will be in the 'dist' directory
# Upload the contents of 'dist' to your web server
```

## Project Structure

```
lumavu-build-legacy/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── pages/       # Page components
│   └── main.tsx     # Application entry point
├── index.html       # HTML template
└── package.json     # Dependencies and scripts
```