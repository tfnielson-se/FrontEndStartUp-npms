# FrontEndStartUp-npms

React+Vite:
https://vitejs.dev/guide/

1. npm create vite@latest
2. npm install
3. npm run dev

json-server --watch db.json

Tailwind CSS:
https://tailwindcss.com/docs/installation

1. npm install -D tailwindcss
npx tailwindcss init

2. /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

3. Add to CSS ->
@tailwind base;
@tailwind components;
@tailwind utilities;

4. npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

5. <link href="/dist/output.css" rel="stylesheet">
