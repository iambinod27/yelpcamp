module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
      },
      gridTemplateColumns: {
        autofill: " repeat(auto-fill, minmax(20rem, 1fr))",
      },
    },
  },
  plugins: [],
};
