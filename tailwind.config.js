module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.{js,jsx,tsx}",
    "./public/**/*.html",
    "./extension/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        96: "24rem",
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
  },
  variants: {},
  plugins: [],
};
