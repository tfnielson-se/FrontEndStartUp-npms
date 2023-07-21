# FrontEndStartUp-npms 💻

FULLSTACK ? -> ( npx create vite@latest client --use-npm ) :

Front End
React+Vite: ⚛️ Create React App
https://vitejs.dev/guide/ 

1. npm create vite@latest
2. cd project
3. npm install 
4. npm run dev 
@ package.json
"server": "json-server --watch db.json"

## /client 🗂️

LOADASH 👌🏽

1. npm i loadash

@ top of js/jsx/... file

2. import _ from "lodash"

React Router DOM 🚏
https://reactrouter.com/en/main/start/tutorial#setup

1. npm install react-router-dom

Tailwind CSS: 🌬️
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

4. https://merakiui.com/


###(OPTIONAL...)

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
