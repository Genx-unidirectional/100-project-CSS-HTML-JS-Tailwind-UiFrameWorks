/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/*.js"],
  theme: {
    extend: {
      animation: {
        pop: "pop 0.9s linear",
      },
      keyframes: {
        pop: {
          "100%": {
            transform: "scale(1.7) rotate(45deg)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
