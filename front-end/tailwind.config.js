/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens : {
      "mini" : '1100px',
    },
    extend: {
      backgroundImage: {
        site: "url('./assets/homepage.jpg')",
      },  
    },
   

  },
  plugins: [],
}

