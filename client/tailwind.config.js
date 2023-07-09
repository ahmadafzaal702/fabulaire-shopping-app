/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#FF5A5F",
      white: "#FFFFFF",
      black: "#000000",
      success: "#65a30d",
      error: "#dc2626",
      gray: "#24292E",
      "dark-gray": "#333333",
      "light-gray": "#CCCCCC",
      "golden-yellow": "#FFB400",
      "sky-blue": "#6CC3D5",
    },
    fontFamily: {
      heading: ["Montserrat Alternates", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
      accent: ["Dancing Script", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
