/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark_main: {
          primary: '#f3f4f6',
          secondary: '#242323',
          accent: '#f97316',
          neutral: '#201f32',
          'base-100': '#090909',
          info: '#4764e6',
          success: '#72e4cf',
          warning: '#fde047',
          error: '#e11d48',
        },
      },
    ],
    base: true,
  },
  plugins: [require('daisyui')],
}
