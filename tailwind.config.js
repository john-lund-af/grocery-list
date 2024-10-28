/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          inverted: 'var(--color-text-inverted)',
          accent: 'var(--color-text-accent)',
          action: 'var(--color-text-action)'
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-base)',
          secondary: 'var(--color-secondary)',
          'button-accent': 'var(--color-accent)',
          'button-action': 'var(--color-action)'
        }
      }
    },
  },
  plugins: [],
}

