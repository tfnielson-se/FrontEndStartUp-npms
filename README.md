# FrontEndStartUp-npms 💻
updated: 07/21/2023

Front End
React+Vite: ⚛️ Create React App
https://vitejs.dev/guide/ 

1. npm create vite@latest
2. cd project
3. npm install 
4. npm run dev 
@ package.json
"server": "json-server --watch db.json"

React Router DOM 🚏
https://reactrouter.com/en/main/start/tutorial#setup

1. npm install react-router-dom

Tailwind CSS: 🌬️
https://tailwindcss.com/docs/guides/vite 

1. npm install -D tailwindcss postcss autoprefixer 
2.  npx tailwindcss init -p 


3. /** @type {import('tailwindcss').Config} */
export default {
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


###(OPTIONAL...)
LOADASH 👌🏽
-- Ruby / Python like methods for JS

1. npm i loadash

@ top of js/jsx/... file

2. import _ from "lodash"

Pre-Built TailwindCSS based Components [no npm req.]:
https://merakiui.com/
https://sailboatui.com/

Animation:
Framer Motion 🏃‍♂️
https://www.framer.com/motion/
npm install framer motion

Components:
Daisy UI 🌻
https://daisyui.com/docs/install/

1. npm i daisyui 
2. Add to tailwind.config.cjs:
2. module.exports = {
  plugins: [require("daisyui")],
}

Styled Components 💅
https://styled-components.com/docs/basics#installation
1. npm install --save styled-components
