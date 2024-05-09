/** @type {import('tailwindcss').Config} */
const config = {
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
      backgroundImage: {
        checkbox: `linear-gradient(
          -45deg,
          transparent 65%,
          hsl(var(--accent)) 65.99%
        ),
        linear-gradient(45deg, transparent 75%, hsl(var(--accent)) 75.99%),
        linear-gradient(-45deg, hsl(var(--accent)) 40%, transparent 40.99%),
        linear-gradient(
          45deg,
          hsl(var(--accent)) 30%,
          hsl(var(--accent-foreground)) 30.99%,
          hsl(var(--accent-foreground)) 40%,
          transparent 40.99%
        ),
        linear-gradient(
          -45deg,
          hsl(var(--accent-foreground)) 50%,
          hsl(var(--accent)) 50.99%
        )`,
      },
      boxShadow: {
        radio: `0 0 0 .25em hsl(var(--accent-foreground)) inset`,
        "switch-off": `calc(var(--switch-value) * -1) 0 0 0.1rem hsl(var(--accent-foreground)) inset, 0 0 0 0.1rem hsl(var(--accent-foreground)) inset`,
        "switch-on": `var(--switch-value) 0 0 0.1rem hsl(var(--accent-foreground)) inset, 0 0 0 0.1rem hsl(var(--accent-foreground)) inset`,
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        title: "hsl(var(--title))",
        dark: "hsl(var(--dark))",
        light: "hsl(var(--light))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - .1em)",
        sm: "calc(var(--radius) - .25em)",
      },
      keyframes: {
        "loading-spin": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        checkbox: {
          "0%": {
            backgroundPositionY: ".25em",
          },
          "50%": {
            backgroundPositionY: "-0.1em",
          },
          "100%": {
            backgroundPositionY: "-0",
          },
        },
        radio: {
          "0%": {
            boxShadow: "0 0 0 .5em hsl(var(--accent-foreground)) inset",
          },
          "50%": {
            boxShadow: "0 0 0 .1em hsl(var(--accent-foreground)) inset",
          },
          "100%": {
            boxShadow: "0 0 0 .25em hsl(var(--accent-foreground)) inset",
          },
        },
        pop: {
          "0%": {
            transform: "scale(.95)",
          },
          "50%": {
            transform: "scale(1.03)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "pop-lg": {
          "0%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1.5)",
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
        checkbox: "checkbox .5s ease-in-out",
        radio: "radio .5s ease-in-out",
        pop: "pop .5s ease-in-out",
        "pop-lg": "pop-lg .5s ease-in-out",
        bounce: "bounce .5s ease-in-out",
        "info-graph": "info-graph 30s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
