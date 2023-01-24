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

Daisy UI 🌻

1. npm i daisyui
2. Add to tailwind.config.cjs:
2. module.exports = {
  //...
  plugins: [require("daisyui")],
}

Styled Components 💅
https://styled-components.com/docs/basics#installation
1. npm install --save styled-components
