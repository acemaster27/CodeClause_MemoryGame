# 🧠 Memory Match Game

A classic memory card matching game built with **React**, **Vite**, **Tailwind CSS**, and a **Node.js** backend. Test your memory skills and compete for the top spot on the leaderboard!

## ✨ Features

- **Interactive Gameplay**: Smooth 3D card flip animations and matching logic.
- **Score Tracking**: Tracks your moves in real-time.
- **Leaderboard**: Persists the top 3 scores (lowest moves) using a backend file system.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Persistent Data**: High scores are saved to a JSON file, surviving server restarts.

## 🛠️ Tech Stack

### Frontend
- **React (Vite)**: For a fast and modular component architecture.
- **Tailwind CSS (v4)**: For utility-first styling and 3D animations.
- **Lucide React**: For modern, clean SVG icons.

### Backend
- **Node.js & Express**: Simple REST API to handle score submissions.
- **File System (fs)**: Persists high scores to a local JSON file (`scores.json`).

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites
- Node.js (v18 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/memory-match-game.git
   cd backend

2. **Setup Backend**
   ```bash
   npm install

Server will start on ```http://localhost:5000```

3. **Run Backend**
   ```bash
   node index.js

4. **Setup Frontend**
   ```bash
   cd ..
   cd frontend/memoryMania

5. **Run Frontend**
   ```bash
   npm run dev

The app will run on ```http://localhost:5173```

## 📂 Project Structure
## 📂 Project Structure
  
```
Memory-mania
├─ backend
│  ├─ .env
│  ├─ config.js
│  ├─ controllers
│  │  └─ scoreController.js
│  ├─ data
│  │  └─ scores.json
│  ├─ index.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ routes
│     └─ scoreRoutes.js
├─ frontend
│  └─ memoryMania
│     ├─ eslint.config.js
│     ├─ index.html
│     ├─ package-lock.json
│     ├─ package.json
│     ├─ README.md
│     ├─ src
│     │  ├─ App.jsx
│     │  ├─ components
│     │  │  ├─ Card.jsx
│     │  │  ├─ LeaderBoard.jsx
│     │  │  └─ StatsBar.jsx
│     │  ├─ hooks
│     │  │  └─ useMemoryGame.js
│     │  ├─ index.css
│     │  ├─ main.jsx
│     │  └─ utils
│     │     └─ constants.js
│     └─ vite.config.js
└─ README.md

```