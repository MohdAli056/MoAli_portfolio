// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#111827",
          secondary: "#1F2937",
          accent: "#6366F1",
          textPrimary: "#FFFFFF",
          textSecondary: "#9CA3AF",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        animation: {
          'bounce-slow': 'bounce 3s infinite',
        }
      },
    },
    plugins: [],
  };