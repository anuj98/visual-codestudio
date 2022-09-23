module.exports = {
  darkMode: "class",
  purge: ["./src/**/*.js"],
  variants: {},
  theme: {
    extend: {
      keyframes: {
        hide: {
          "50%": { display: "block" },
          "100%": { display: "none" },
        },
      },
    },
    animation: {
      'hide-two': 'hide 2s forwards',
    }
  },
  plugins: [],
};
