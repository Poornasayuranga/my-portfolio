module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        ink: "#05070f",
        surface: "#0b1120",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        blob: "blob 9s infinite ease-in-out",
        float: "float 5s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [],
}
