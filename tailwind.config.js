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
      },
      colors: {
        "main-green": "#3e7422",
        "main-red": "#8b002a",
        "main-blue": "#1877f2",
        "main-orange": "#ed7609",
        telegram: "#00b0f2",
        whatsapp: "#00e510",
        facebook: "#1877f2",
      },
      spacing: {},
    },
  },
  plugins: [],
};
