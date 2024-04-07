/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "lightFont":["Poppins", "sans-serif"],
        "boldFont":["Roboto", "sans-serif"]
      },
      fontSize:{
        "normal":["16px"],
        "h1":["38px"]
      },
      screens:{
        "tablet":"900px",
        "mobile":"500px",
        "slider":"720px",
        "laptop" : "1030px",
        "grid":"1200px"
      }
    },
  },
  plugins: [],
};
