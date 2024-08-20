/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.js", "./src/**/*.js", "./src/pages/**/*.js"],
  safelist: [
    "border-main-blue",
    "border-main-orange",
    "border-main-green",
    "border-main-red",
    "hover:bg-main-blue",
    "hover:bg-main-orange",
    "hover:bg-main-green",
    "hover:bg-main-red",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      borderRadius: {
        16: "16rem",
      },
      gap: {
        30: "30px",
        10: "10px",
      },
      borderWidth: {
        2: "2px",
        5: "5px",
      },
      transitionProperty: {
        height: "height",
        border: "border",
      },
      colors: {
        "main-green": "#3e7422",
        "main-red": "#8b002a",
        "main-blue": "#1877f2",
        "main-orange": "#ed7609",
        "main-dark-blue": "#2D3648",
        cyan: "#00B0F2",
        telegram: "#00b0f2",
        whatsapp: "#00e510",
        gray: {
          700: "#616161",
        },
      },
      gradientColorStops: (theme) => ({
        white: "#FFFFFF",
        cyan: "#00B0F2",
      }),
      spacing: {
        360: "360px",
        190: "190px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        20: "5rem",
      },
    },
  },
  plugins: [],
};
