const { guessProductionMode } = require("@ngneat/tailwind");
process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
