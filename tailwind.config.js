/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "main-cyan": "#44ff ",
      "nav-cyan": "#44FF",
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
  },
  plugins: [],
};
