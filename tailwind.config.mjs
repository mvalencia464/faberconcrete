/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        deep: '#1c2328',
        surface: '#f4f5f4',
        panel: '#e7ebe8',
        panel2: '#d8dfda',
        accent: '#c45c26',
        accentHover: '#9a4518',
        gold: '#d4a24c',
        muted: '#5c6560'
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
};
