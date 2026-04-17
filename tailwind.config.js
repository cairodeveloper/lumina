/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#09090F',
        plum: '#7A4DFF',
        iris: '#A78BFA',
        mist: '#F8F6FF',
        lavender: '#EEE8FF',
      },
      fontFamily: {
        sans: ['Aptos', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 20px 80px rgba(122, 77, 255, 0.18)',
        soft: '0 18px 45px rgba(9, 9, 15, 0.08)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top, rgba(167, 139, 250, 0.28), transparent 38%), radial-gradient(circle at 80% 20%, rgba(122, 77, 255, 0.18), transparent 28%), linear-gradient(180deg, #09090F 0%, #13111C 45%, #0C0B12 100%)',
      },
    },
  },
  plugins: [],
}
