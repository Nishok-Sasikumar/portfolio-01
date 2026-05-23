# Personal Portfolio

A full‑stack personal portfolio website for **Nishok S** built with:

- **Frontend** – React (Vite), Tailwind CSS, Framer Motion.
- **Backend** – Node.js, Express, MongoDB (Mongoose), Nodemailer.
- **Design** – Dark cyber‑punk / minimal editorial theme, glassmorphism, animated cursor, responsive mobile‑first.

## Features

- Hero with typewriter & glitch name animation.
- About, Skills, Projects, Certifications, Achievements, Education, Contact sections.
- Contact form stores messages in MongoDB and sends a confirmation email.
- Resume download endpoint.
- Dynamic project data with filterable cards.
- Sticky navbar, back‑to‑top button, smooth page transitions.
- SEO meta tags, loading skeletons, reduced‑motion support.

## Prerequisites

- Node.js v20+ & npm
- MongoDB (Atlas or local)
- Git

## Setup

```bash
# Clone repository (if applicable)
# cd d:/portfolio

# Backend
cd server
npm install
cp .env.example .env   # fill in MONGO_URI, EMAIL_USER, EMAIL_PASS, PORT
npm run dev   # starts Express on PORT (default 5000)

# Frontend
cd ../client
npm install
npm run dev   # Vite dev server (http://localhost:5173)
```

## Build for Production

```bash
# Frontend
npm run build   # creates ./dist
# Backend – serve static files if required
npm start        # runs server.js
```

## Deployment

Deploy the **client** to Vercel/Netlify (static site) and **server** to Render/Heroku. Update CORS origins accordingly.

---
*MIT licensed.*
