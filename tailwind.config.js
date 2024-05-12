/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "rgba(255, 255, 255, 0.1)",
        darkslategray: "rgba(59, 59, 59, 0.5)",
        lightgray: "#ccc",
        "background-secondary": "#3b3b3b",
        background: "#2b2b2b",
        "caption-label-text": "#858584",
        text: "#fff",
        green: "#00ac4f",
        "call-to-action": "#a259ff",
      },
      fontFamily: {
        "h1-work-sans": "'Work Sans'",
        "h5-space-mono": "'Space Mono'",
      },
      borderRadius: {
        xl: "20px",
        "81xl": "100px",
        "101xl": "120px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      "3xl": "22px",
      "19xl": "38px",
      "5xl": "24px",
      "9xl": "28px",
      "48xl": "67px",
      "13xl": "32px",
      "32xl": "51px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
