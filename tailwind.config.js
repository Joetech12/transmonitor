/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ["Segoe-Regular"],
        secondaryRegular: ["Roboto-Regular"],
        secondaryBold: ["Roboto-Bold"],
        secondaryBlack: ["Roboto-Black"],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1875F0",
          secondary: "#27AE60",
          accent: "#FDC203",
          neutral: "#647787",
          "base-100": "#F7F8FA",
        },
      },
      "light",
      "dark",
    ],
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
