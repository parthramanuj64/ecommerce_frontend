/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#7367F0",
        lightPrimaryColor: "#b5b0ee93",
      },
    },
  },
  plugins: [],
};
