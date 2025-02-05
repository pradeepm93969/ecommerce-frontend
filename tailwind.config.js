/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#DFE1FB",
          100: "#C4C7F8",
          200: "#848BF0",
          300: "#4954E9",
          400: "#1926D1",
          500: "#121B94",
          600: "#0E1576",
          700: "#0B105B",
          800: "#070B3B",
          900: "#040620",
        },
        secondary: {
          50: "#EDEDED",
          100: "#DEDEDE",
          200: "#BABABA",
          300: "#999999",
          400: "#787878",
          500: "#555555",
          600: "#454545",
          700: "#333333",
          800: "#212121",
          900: "#121212",
        },
      },
    },
  },
  plugins: [],
};
