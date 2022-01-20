module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-debug-screens"),
  ],
};
