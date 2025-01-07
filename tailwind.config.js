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
        DEFAULT: "var(--container-inset)",
      },
    },
    extend: {
      screens: {
        "3xl": "1600px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "sans-serif"],
        questrial: ["Questrial", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
      },
      spacing: {
        "container-inset": "var(--container-inset, 1rem)",
      },
      height: {
        button: "var(--button-height, 2.5rem)",
        "button-sm": "var(--button-height-sm, 2rem)",
        "button-md": "var(--button-height-md, 3rem)",
        "button-lg": "var(--button-height-lg, 3.5rem)",
        "form-control": "var(--form-control-height, 2.5rem)",
        "form-control-sm": "var(--form-control-height-sm, 2rem)",
        "form-control-md": "var(--form-control-height-md, 3rem)",
        "form-control-lg": "var(--form-control-height-lg, 3.5rem)",
        header: "var(--header-height, 4rem)",
        "header-top": "var(--header-height-top, 3rem)",
        "header-combined": "var(--header-height-combined, 7rem)",
        "screen-minus-header": "calc(100vh - var(--header-height, 4rem))",
        "screen-minus-header-top":
          "calc(100vh - var(--header-height-top, 3rem))",
        "screen-minus-header-combined":
          "calc(100vh - var(--header-height-combined, 7rem))",
      },
      minHeight: {
        button: "var(--button-height, 2.5rem)",
        "button-sm": "var(--button-height-sm, 2rem)",
        "button-md": "var(--button-height-md, 3rem)",
        "button-lg": "var(--button-height-lg, 3.5rem)",
        "form-control": "var(--form-control-height, 2.5rem)",
        "form-control-sm": "var(--form-control-height-sm, 2rem)",
        "form-control-md": "var(--form-control-height-md, 3rem)",
        "form-control-lg": "var(--form-control-height-lg, 3.5rem)",
        header: "var(--header-height, 4rem)",
        "header-top": "var(--header-height-top, 3rem)",
        "header-combined": "var(--header-height-combined, 7rem)",
        "screen-minus-header": "calc(100vh - var(--header-height, 4rem))",
        "screen-minus-header-top":
          "calc(100vh - var(--header-height-top, 3rem))",
        "screen-minus-header-combined":
          "calc(100vh - var(--header-height-combined, 7rem))",
      },
      size: {
        button: "var(--button-height, 2.5rem)",
        "button-sm": "var(--button-height-sm, 2rem)",
        "button-md": "var(--button-height-md, 3rem)",
        "button-lg": "var(--button-height-lg, 3.5rem)",
        "form-control": "var(--form-control-height, 2.5rem)",
        "form-control-sm": "var(--form-control-height-sm, 2rem)",
        "form-control-md": "var(--form-control-height-md, 3rem)",
        "form-control-lg": "var(--form-control-height-lg, 3.5rem)",
      },
      padding: {
        button: "var(--button-padding, 1em)",
        "form-control": "var(--form-control-padding, 1em)",
      },
      margin: {
        button: "var(--button-padding, 1em)",
        "form-control": "var(--form-control-padding, 1em)",
      },
      borderRadius: {
        DEFAULT: "var(--radius, 0.25rem)",
        sm: "var(--radius, 0.25rem)",
        md: "var(--radius, 0.5rem)",
        lg: "var(--radius, 0.75rem)",
        xl: "var(--radius, 1rem)",
        "2xl": "var(--radius, 1.5rem)",
        "3xl": "var(--radius, 2.5rem)",
        button: "var(--button-radius, 0.5rem)",
        "form-control": "var(--form-control-radius, 0.5rem)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        title: "hsl(var(--title))",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        contrast: {
          DEFAULT: "hsl(var(--contrast))",
          foreground: "hsl(var(--contrast-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark))",
          foreground: "hsl(var(--dark-foreground))",
        },
        light: {
          DEFAULT: "hsl(var(--light))",
          foreground: "hsl(var(--light-foreground))",
        },
        "slate-dark": {
          DEFAULT: "#22262B",
          foreground: "hsl(var(--dark-foreground))",
        },
        teal: "#008080",
        purple: "#735FED",
        sky: "#00BFFF",
        "pale-green": "#98fb98",
      },
      boxShadow: {
        "custom-1": "2px 2px 10px rgba(0, 0, 0, 0.08)",
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
          "50%": {
            transform: "scale(1.03)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "loading-spin":
          "loading-spin 3s cubic-bezier(0.56, -0.24, 0.41, 1.23) infinite",
        pop: "pop 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
