module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#6564db",
        background: "#2B2B3B",
        "nav-background": "#343444",
        accent: "#89d2dc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
