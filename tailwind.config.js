/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "calc-bg": "#fff",
        "calc-bg-dark": "#1E1E1E",
        "key-bg": "#F3F3F3",
        "key-bg-dark": "#2D2D2D",
        "key-hover-bg": "#E1E1E1",
        "key-hover-bg-dark": "#3C3C3C",
        "key-active-bg": "#D0D0D0",
        "key-active-bg-dark": "#4B4B4B",
        "primary-color": "#000000",
        "primary-color-dark": "#FFFFFF",
        "secondary-color": "#6B6B6B",
        "secondary-color-dark": "#A6A6A6",
        "accent-color": "#0078D7",
        "accent-color-dark": "#0078D7",
      },
      boxShadow: {
        "calc-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "calc-dark": "0 4px 6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
