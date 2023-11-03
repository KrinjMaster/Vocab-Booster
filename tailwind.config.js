/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#865DFF",
          "secondary": "#E384FF",
          "accent": "#9575DE",
          "neutral": "#2a323c",
          "base-100": "#08010d",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
    base: true,
  },
  plugins: [require("daisyui")]
};
