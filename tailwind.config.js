/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "3.5vw",
        lg: "2.5vw",
        xl: "1.5vw",
        "2xl": "1vw",
      },
    },
    extend: {
      fontFamily: {
        mulish: ["var(--font-mulish)"],
        philosopher: ["var(--font-philosopher)"],
        comfortaa: ["var(--font-comfortaa)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        title: {
          DEFAULT: "hsl(var(--title))",
          foreground: "hsl(var(--title-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "loading-spin": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        pop: {
          "0%": {
            transform: "scale(.95)",
          },
          "40%": {
            transform: "scale(1.03)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        bounce: {
          "0%": {
            transform: "translate(0, -2rem)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        "info-graph": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-1360px)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "loading-spin":
          "loading-spin 3s cubic-bezier(0.56, -0.24, 0.41, 1.23) infinite",
        pop: "pop .5s ease-in-out",
        bounce: "bounce 1s ease-in-out",
        "info-graph": "info-graph 30s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@/assets/styles/plugins/index"),
  ],
};
