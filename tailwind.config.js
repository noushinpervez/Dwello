/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'border': 'var(--border)',
        'edge': 'var(--edge)',
        'card': 'var(--card)',
        'dark': 'var(--dark)',
        'primary-50': 'var(--primary-50)',
        'primary-100': 'var(--primary-100)',
        'inv-background': 'var(--inv-background)',
        'inv-text': 'var(--inv-text)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};