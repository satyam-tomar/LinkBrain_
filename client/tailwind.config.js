export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      blur: {
        '80': '80px',
        '100': '100px',
        '120': '120px',
      },
    },
  },
  plugins: [],
};