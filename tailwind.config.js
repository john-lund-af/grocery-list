/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          'dark-base': 'var(--color-dark-text-base)',
          inverted: 'var(--color-text-inverted)',
          'dark-inverted': 'var(--color-dark-text-inverted)',
          accent: 'var(--color-base)',
          action: 'var(--color-action)',
          'dark-action': 'var(--color-dark-action)'
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-base)',
          'dark-fill': 'var(--color-dark-base)',
          secondary: 'var(--color-secondary)',
          'dark-secondary': 'var(--color-dark-secondary)',
          'button-accent': 'var(--color-accent)',
          'dark-button-accent': 'var(--color-dark-accent)',
          'button-action': 'var(--color-action)',
          'dakr-button-action': 'var(--color-dark-action)'
        }
      }
    },
  },
  plugins: [],
}

