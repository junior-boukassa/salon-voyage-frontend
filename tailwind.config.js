/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#ef8e01',
        turquoise: '#009e96',
        ink: '#173749',
        premium: '#1f1f1f',
        cloud: '#f6f8fa',
        mist: '#f2f2f2',
      },
      fontFamily: {
        sans: ['Manrope', 'Avenir Next', 'Roboto', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(23, 55, 73, 0.12)',
        glow: '0 20px 80px rgba(239, 142, 1, 0.22)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
