/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "main-cyan": "#14E5F2",
      "nav-cyan": "#03233A",
      white: "#FFFFFF",
      black: "#000000",
      "footer-cyan": "#022239",
    },
    extend: {
      spacing: {
        "nav-20": "70px",
      },
    },
  },
  plugins: [],
};
