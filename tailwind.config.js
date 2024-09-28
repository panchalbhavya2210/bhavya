/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "main-cyan": "#058ED9",
      "nav-cyan": "#058ED9",
      white: "#FFFFFF",
      black: "#000000",
      "footer-cyan": "#022239",
      "bgbg-white": "#eef5db",
    },
    extend: {
      spacing: {
        "nav-20": "70px",
        20: "70px",
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
