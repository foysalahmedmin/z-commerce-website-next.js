const radioStyles = ({ theme }) => {
  return {
    ".radio": {
      display: "inline-block",
      flexShrink: "0",
      appearance: "none",
      animation: theme("animation.pop"),
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      border: `1px solid currentColor`,
      borderRadius: theme("borderRadius.full"),
      width: "1em",
      height: "1em",
      fontSize: "var(--radio-height, 1.25rem)",

      "&.checked, &:checked": {
        animation: "radio 1s",
        boxShadow: `0 0 0 0.125em ${theme("colors.accent.foreground")} inset`,
        borderColor: theme("colors.accent.DEFAULT"),
        backgroundColor: theme("colors.accent.DEFAULT"),
      },

      "&.disabled, &:disabled": {
        opacity: "0.5",
        animation: "none",
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },

    // Sizes
    ".radio-size-sm": {
      fontSize: theme("fontSize.sm"),
      lineHeight: "1",
    },

    ".radio-size-md": {
      fontSize: theme("fontSize.base"),
      lineHeight: "1",
    },

    ".radio-size-lg": {
      fontSize: theme("fontSize.lg"),
      lineHeight: "1",
    },

    // Animation
    "@keyframes radio": {
      "0%": {
        boxShadow: `0 0 0 0.5em ${theme("colors.accent.foreground")} inset`,
      },
      "45%": {
        boxShadow: `0 0 0 0.1em ${theme("colors.accent.foreground")} inset`,
      },
      "75%": {
        boxShadow: `0 0 0 0.25em ${theme("colors.accent.foreground")} inset`,
      },
      "100%": {
        boxShadow: `0 0 0 0.125em ${theme("colors.accent.foreground")} inset`,
      },
    },
  };
};

export default radioStyles;
