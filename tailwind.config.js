export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        cinzel: ['"Cinzel"', "serif"],
      },
      colors: {
        "custom-red": "#EB3007",
        "custom-naveBlue": "#111827",
        "custom-naveBlueLow": "#1F2937",
      },
    },
  },
  plugins: [require("daisyui"), require("preline/plugin")],
};
