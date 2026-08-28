# portfolio

Personal portfolio for sk-mastan. Built with React 19, Three.js, Framer Motion and Tailwind. It presents projects, skills and contact in a single page with 3D visuals and responsive layout.

The site is data driven from `src/constants` and `src/assets`, so adding a project does not require layout changes.

## Why this exists

Recruiters check portfolio before GitHub. This repo keeps the site versioned, deployable and easy to update when projects ship.

## Features

- Hero with 3D canvas via Three Fiber and Drei
- About, experience timeline, projects with filter
- Contact form via EmailJS
- Responsive layout with Tailwind and motion transitions

## Project structure

```text
.
├── src
│   ├── assets
│   ├── components
│   ├── constants
│   ├── hoc
│   └── utils
├── public
├── index.html
└── vite.config.js
```

## Prerequisites

Node 20 or later.

## Installation

```bash
git clone https://github.com/mastaan66/portfolio.git
cd portfolio
npm install
```

## Usage

```bash
npm run dev
```

Open `http://localhost:5173`. Build for production with `npm run build` and preview with `npm run preview`. Deploy the `dist` folder to Vercel or any static host.

## Configuration

Update `src/constants` for projects, skills and links. Replace EmailJS keys in the contact component before deploying.

## Contributing

Issues and pull requests are welcome. Keep the bundle small and test on mobile before merging.

## License

MIT. See LICENSE.
