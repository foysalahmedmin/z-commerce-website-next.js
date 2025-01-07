const checkboxStyles = ({ theme }) => {
  return {
    ".checkbox": {
      display: "inline-block",
      flexShrink: "0",
      appearance: "none",
      animation: theme("animation.pop"),
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      border: "1px solid currentColor",
      borderRadius: theme("borderRadius.form-control"),
      width: "1em",
      height: "1em",
      fontSize: "var(--checkbox-height, 1.25rem)",

      "&.checked, &:checked": {
        animation: "checkbox 0.3s",
        borderColor: theme("colors.accent.DEFAULT"),
        backgroundImage: `
          linear-gradient(-45deg, transparent 65%, ${theme("colors.accent.DEFAULT")} 65.99%),
          linear-gradient(45deg, transparent 75%, ${theme("colors.accent.DEFAULT")} 75.99%),
          linear-gradient(-45deg, ${theme("colors.accent.DEFAULT")} 40%, transparent 40.99%),
          linear-gradient(45deg, ${theme("colors.accent.DEFAULT")} 30%, ${theme("colors.accent.foreground")} 30.99%, ${theme("colors.accent.foreground")} 40%, transparent 40.99%),
          linear-gradient(-45deg, ${theme("colors.accent.foreground")} 50%, ${theme("colors.accent.DEFAULT")} 50.99%)
        `,
      },

      "&.disabled, &:disabled": {
        opacity: "0.5",
        animation: "none",
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },

    // Sizes
    ".checkbox-size-sm": {
      fontSize: theme("fontSize.sm"),
      lineHeight: "1",
    },

    ".checkbox-size-md": {
      fontSize: theme("fontSize.base"),
      lineHeight: "1",
    },

    ".checkbox-size-lg": {
      fontSize: theme("fontSize.lg"),
      lineHeight: "1",
    },

    // Animation
    "@keyframes checkbox": {
      "0%": {
        backgroundPositionY: "0.25em",
      },
      "50%": {
        backgroundPositionY: "-0.1em",
      },
      "100%": {
        backgroundPositionY: "0",
      },
    },
  };
};

export default checkboxStyles;
