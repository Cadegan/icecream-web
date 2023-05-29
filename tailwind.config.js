/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg) translateY(-25%)" },
          "50%": { transform: "rotate(1deg) translateY(10%);" },
        },
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
        wiggleSlow: "wiggle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
