/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "main-cyan": "#4484FF",
      "nav-cyan": "#4484FF",
      white: "#FFFFFF",
      black: "#000000",
      "footer-cyan": "#022239",
      "bgbg-white": "#eef5db",
    },
    extend: {
      spacing: {
        "nav-20": "70px",
      },
    },
  },
  plugins: [],
};
