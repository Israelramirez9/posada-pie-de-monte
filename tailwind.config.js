/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {},
    colors: {
      'green-gradient': 'rgba(49,191,103,1)',
      'green-main': ' #209d50 ',
      'yellow-strong': "#f6b106",
      'yellow-soft': '#f8b048',
    }
  } 
}

