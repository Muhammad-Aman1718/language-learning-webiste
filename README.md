# Language Learning Platform - Speak Up

An online language learning platform built with React and FastAPI.

## Tech Stack

### Front-end
- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Redux Toolkit** for state management
- **Lucide React** & **React Icons** for icons

### Back-end
- **FastAPI** (Python web framework)
- **PostgreSQL** database
- **SQLAlchemy** ORM
- **Alembic** for migrations
- **Poetry** for dependency management
- **Uvicorn** ASGI server

## Features

- 🏠 Home page with hero section and course listings
- 📚 Course browsing and management
- 👤 User authentication (Login, Signup, Password Reset)
- 📝 User profile and account management
- 💰 Pricing plans (Basic, Premium, Teams)
- 📞 Contact us page
- ℹ️ About us page
- ⭐ Testimonials section

## Project Structure

```
language-learning/
├── Front-end/          # React application
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── constant/   # Static data
│   │   └── ...
│   └── package.json
│
└── Back-end/           # FastAPI application
    ├── src/back_end/
    │   ├── api/        # API routes
    │   ├── core/       # Configuration
    │   ├── db/         # Database models
    │   └── main.py     # Application entry
    └── pyproject.toml
```

## Getting Started

### Front-end Setup

```bash
cd Front-end
npm install
npm run dev
```

### Back-end Setup

```bash
cd Back-end
poetry install
poetry run dev
```

## Available Scripts

### Front-end
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Back-end
- `poetry run dev` - Start development server with auto-reload
- `poetry run start` - Start production server

## Requirements

- Node.js (for Front-end)
- Python 3.12+ (for Back-end)
- PostgreSQL database
- Poetry (for Back-end dependency management)

