module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#840029',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
