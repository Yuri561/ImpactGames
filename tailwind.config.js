// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        wowDark: '#1a1a1a',
        wowGray: '#2a2a2a',
        wowGold: '#ffcc00'
      },
      fontFamily: {
        retro: ['"Press Start 2P"', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
