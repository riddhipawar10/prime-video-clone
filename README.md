# Amazon Prime Video Clone (React + Vite)

A front-end clone of the Amazon Prime Video homepage, built with the same
React concepts as the original Netflix clone project:

- `useState` for search text and the selected show (modal)
- Array `.filter()` for live search across name, genre, director, cast, description
- Array `.map()` to render a list of components
- Props passed from parent (`App`) to child components (`ShowCard`, `ShowModal`)
- Conditional rendering (`{selectedShow && <ShowModal .../>}`)
- Component composition and separate CSS

## Project structure

```
prime-video-clone/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx
    ├── App.jsx          # main app: navbar, hero banner, search, grid
    ├── App.css           # Prime Video theme (navy + Prime blue)
    ├── index.css
    ├── data/
    │   └── shows.js       # movie/show data array
    └── components/
        ├── ShowCard.jsx   # individual poster card
        └── ShowModal.jsx  # popup with details + trailer
```

## How to run this project (Windows/macOS, VS Code + cmd)

### 1. Install prerequisites (one-time)

- Install **Node.js** (LTS version) from https://nodejs.org — this also installs `npm`.
- Verify installation by opening **Command Prompt (cmd)** and running:

  ```
  node -v
  npm -v
  ```

  Both commands should print version numbers.

### 2. Unzip the project

- Extract the provided `prime-video-clone.zip` file anywhere on your machine,
  e.g. `C:\Users\YourName\Desktop\prime-video-clone`.

### 3. Open it in VS Code

- Open **VS Code**.
- Go to `File → Open Folder...` and select the extracted `prime-video-clone` folder.
- Open a new terminal inside VS Code: `Terminal → New Terminal`
  (this opens a `cmd`/PowerShell prompt already inside the project folder).

### 4. Install dependencies

In the VS Code terminal (or a regular `cmd` window opened inside the project folder), run:

```
npm install
```

This downloads React, Vite, and all other packages listed in `package.json`
into a `node_modules` folder.

### 5. Start the development server

```
npm run dev
```

You'll see output like:

```
  VITE v8.x.x  ready in 400 ms

  ➜  Local:   http://localhost:5173/
```

Hold **Ctrl** and click the `http://localhost:5173/` link (or paste it into
your browser) to see the app running.

### 6. Make changes and see them live

- Edit any file (e.g. `src/App.jsx`, `src/App.css`, `src/data/shows.js`).
- Save the file — the browser auto-refreshes (hot reload), no restart needed.

### 7. Build for production (optional, for submission/deployment)

```
npm run build
```

This creates an optimized `dist/` folder you can deploy to any static host
(GitHub Pages, Netlify, Vercel, etc.).

### 8. Preview the production build (optional)

```
npm run preview
```

## Customizing further

- **Add/remove shows:** edit the array in `src/data/shows.js`. Each object needs
  `id, name, genre, releaseYear, rating, duration, director, cast, description,
  bannerUrl, trailer`.
- **Change the hero banner:** the hero currently uses the first item in
  `shows_data`. Change `shows_data[0]` in `App.jsx` to feature a different title.
- **Change colors:** the Prime blue accent (`#00a8e1`) is used throughout
  `App.css` — search and replace it to re-theme.
