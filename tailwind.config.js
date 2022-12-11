const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        default: "#151515",
        primary: "#151515",
        secondary: "#C2A486",
        "secondary-dark": "#AB7947",

        "black-soft": "#202020",
        "black-soft-2": "#1A1A1A",

        "text-primary": "#181818",
      },
      margin: {
        "59px": "59px",
      },
      fontFamily: {
        cbold: ["Ubuntu-Bold", ...defaultTheme.fontFamily.sans],
        regular: ["Ubuntu-Regular", ...defaultTheme.fontFamily.sans],
        cmedium: ["Ubuntu-Medium", ...defaultTheme.fontFamily.sans],
        clight: ["Ubuntu-Light", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        "1xl": "0px 4px 13px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        "1sm": "40px 0px 0px 56px;",
      },
    },
  },
  plugins: [],
};
