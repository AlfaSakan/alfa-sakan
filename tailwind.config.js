/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aquamarine: "#64ffda",
        "aquamarine-tint": "rgba(100, 255, 218, 0.1)",
        navy: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lightest: "#233554",
        },
        white: "#e6f1ff",
        slate: {
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },
      },
      spacing: {
        4.8: "1.2rem",
        18: "4.5rem",
        54: "13.5rem",
        90.5: "22.625rem",
        108: "27rem",
        145: "36.25rem",
        176: "44rem",
      },
      transitionDuration: {
        400: "400ms",
      },
      fontFamily: {
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
        sans: [
          "Calibre",
          "Inter",
          "San Francisco",
          "SF Pro Text",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
