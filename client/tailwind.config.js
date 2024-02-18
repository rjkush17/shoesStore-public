/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "lightFont":["Poppins", "sans-serif"]
      },
      fontSize:{
        "normal":["14px"]
      },
      screens:{
        "tablet":"900px",
        "mobile":"500px"
      }
    },
  },
  plugins: [],
};
