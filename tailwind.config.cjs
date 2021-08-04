module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      tablet: "720px",
      // => @media (min-width: 680px) { ... }

      laptop: "900px",
      // => @media (min-width: 900px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      largeDesktop: "1500px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
