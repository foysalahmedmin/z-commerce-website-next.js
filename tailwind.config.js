/** @type {import('tailwindcss').Config} */
module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '3.5%',
        'sm': '3.5%',
        'lg': '2.5%',
        'xl': '1.5%',
        '2xl': '1%',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        "roboto-serif" : ["var(--font-roboto-serif)"]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        color:{
          DEFAULT: "hsl(var(--color))",
          foreground: "hsl(var(--color-foreground))",
        },
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
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "pop": {
          '0%': {
            transform: 'scale(.95)',
          },
          '40%': {
            transform: 'scale(1.03)',
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        "banner-circle": {
          '0%': {
            position: 'absolute',
            top: '50%',
            right: '50%',
            borderRadius: "100%",
            transform: 'translate(50%, -50%) scale(.5)',
          },
          '40%': {
            position: 'absolute',
            top: '2.5%',
            right: '2.5%',
            transform: 'translate(0%, 0%) scale(1.3)',
            borderRadius: "60% 50% 50% 60%", 
          },
          '100%': {
            position: 'absolute',
            top: '2.5%',
            right: '2.5%',
            borderRadius: "60% 10% 30% 60%",
            transform: 'translate(0%, 0%) scale(1)',
          }
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
        "pop": "pop .5s ease-in-out",
        "banner-circle": "banner-circle 1.5s ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("./custom-plugin")],
}