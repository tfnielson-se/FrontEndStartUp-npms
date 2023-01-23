# FrontEndStartUp-npms 💻

React+Vite: ⚛️
https://vitejs.dev/guide/

1. npm create vite@latest
2. npm install
3. npm run dev

json-server --watch db.json

Tailwind CSS: 🎨
https://tailwindcss.com/docs/guides/vite

1. npm install -D tailwindcss postcss autoprefixer 
2.  npx tailwindcss init -p

3. /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

4. Add to index.css ->
@tailwind base;
@tailwind components;
@tailwind utilities;

5. npm run dev
