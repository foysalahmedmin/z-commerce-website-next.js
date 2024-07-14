module.exports = {
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
  "pop-circle": {
    "0%": {
      transform: "scale(.0)",
      borderRadius: "100%",
    },
    "20%": {
      transform: "scale(1.3)",
      borderRadius: "100%",
    },
    "40%": {
      transform: "scale(1.1)",
      borderRadius: "35%",
    },
    "60%": {
      transform: "scale(1.5)",
      borderRadius: "45%",
    },
    "100%": {
      transform: "scale(1)",
      borderRadius: "100%",
    },
  },
  bounce: {
    "0%": {
      transform: "translate(0, -2em)",
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
  "parallax-appear": {
    from: "translate3d(0, 0%, 0)",
    to: "transform: translate3d(0, -50%, 0)",
  },
};
