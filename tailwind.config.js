import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Optional: refine blue, slate to match Brittany's theme
        slate: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
          400: "#94a3b8",
          300: "#cbd5e1",
        },
        blue: {
          500: "#3b82f6",
        },
      },
    },
  },
  plugins: [],
};
