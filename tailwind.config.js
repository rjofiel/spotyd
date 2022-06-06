const { guessProductionMode } = require("@ngneat/tailwind");
process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";
const mode = process.env.TAILWIND_MODE ? 'jit':'aot';
module.exports = {
  prefix: '',
  mode: mode,
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: '360px',
      md: '1024px',
      lg: '1440px',
    },
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
