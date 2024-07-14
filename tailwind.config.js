/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.js", "./src/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
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
        cyan: "#00B0F2",
        "header-color": "#2D3648",
        telegram: "#00b0f2",
        whatsapp: "#00e510",
        facebook: "#1877f2",
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
    },
  },
  plugins: [],
};
