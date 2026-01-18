# Blog Application – React Assignment

A modern, responsive blog application built using React + TypeScript, following best practices for data fetching, UI composition, and user experience.

## 🚀 Tech Stack

- React.js (Vite)
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Query
- Axios
- React Router DOM
- date-fns

## 📦 Features

- Blog list & blog detail layout (two-panel on desktop, full page on mobile)
- Fetch all blogs & single blog using TanStack Query
- Create new blog with POST request & query invalidation
- Skeleton loaders for smooth UX until image + content load completely
- Responsive design for mobile and large screens
- Subtle hover effects for better UI polish
- Clean separation of concerns using custom hooks
- Date formatting with relative + absolute fallback
- Accessible and reusable UI components with shadcn/ui

## 🧠 Approach

- Used shadcn/ui components and adhered closely to the provided UI design
- Implemented custom hooks for data fetching and mutations for clean separation of concerns
- Used TanStack Query for caching, loading, error handling, and query invalidation
- Implemented skeleton loading until image fully loads to avoid layout jitter
- Used responsive routing & layouts to adapt UX for mobile and desktop
- Added subtle hover effects on blog cards for better visual feedback
- Used date-fns:
- shows “X days ago” for recent posts (up to 7 days)
- shows formatted date (e.g. 1 January 2026) after 7 days
- Mutation invalidates blog list automatically after successful blog creation

## Run Locally

Clone the project

```bash
  git clone <repo-url>
  cd project-folder
```

Install dependencies

```bash
  npm install
```

Start JSON Server (Backend)

```bash
  npm run server
```

Runs on: http://localhost:3001

Start development server

```bash
  npm run dev
```

Runs on: http://localhost:5173

## 📌 API Endpoints

| Method | Endpoint   | Description      |
| ------ | ---------- | ---------------- |
| GET    | /blogs     | Fetch all blogs  |
| GET    | /blogs/:id | Fetch blog by id |
| POST   | /blogs     | Create new blog  |

#### Eagerly looking forward to hearing from you.
