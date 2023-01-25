# FrontEndStartUp-npms 💻

React+Vite: ⚛️ Create React App
https://vitejs.dev/guide/ | https://create-react-app.dev/docs/getting-started

1. npm create vite@latest | npx create-react-app 
2. npm install | cd 
3. npm run dev | npm start

@ package.json
"server": "json-server --watch db.json"

Tailwind CSS: 🌬️
https://tailwindcss.com/docs/guides/vite | https://tailwindcss.com/docs/guides/create-react-app

1. npm install -D tailwindcss postcss autoprefixer | npm install -D tailwindcss
2.  npx tailwindcss init -p | npx tailwindcss init


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
https://daisyui.com/docs/install/

1. npm i daisyui 
2. Add to tailwind.config.cjs:
2. module.exports = {
  //...
  plugins: [require("daisyui")],
}

Styled Components 💅
https://styled-components.com/docs/basics#installation
1. npm install --save styled-components
