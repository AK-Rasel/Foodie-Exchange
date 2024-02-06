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
        "custom-yellow": "#D99904",
      },
    },
  },
  plugins: [require("daisyui"), require("preline/plugin")],
};
