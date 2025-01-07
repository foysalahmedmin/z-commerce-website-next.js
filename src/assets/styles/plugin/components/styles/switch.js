const switchStyles = ({ theme }) => {
  return {
    ".switch": {
      display: "inline-block",
      flexShrink: "0",
      appearance: "none",
      animation: theme("animation.pop"),
      transition: "box-shadow 0.3s ease-in-out",
      cursor: "pointer",
      boxShadow: `-1em 0 0 0.125em ${theme("colors.accent.foreground")} inset, 0 0 0 0.125em ${theme("colors.accent.foreground")} inset`,
      border: `1px solid ${theme("colors.border")}`,
      borderRadius: theme("borderRadius.form-control"),
      backgroundColor: `${theme("colors.accent.DEFAULT")}/0.75`,
      width: "2em",
      height: "1em",
      fontSize: "var(--switch-height, 1.25rem)",
      lineHeight: "1",

      "&.on, &.checked, &:checked": {
        boxShadow: `1em 0 0 0.125em ${theme("colors.accent.foreground")} inset, 0 0 0 0.125em ${theme("colors.accent.foreground")} inset`,
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
    ".switch-size-sm": {
      fontSize: theme("fontSize.sm"),
      lineHeight: "1",
    },
    ".switch-size-md": {
      fontSize: theme("fontSize.base"),
      lineHeight: "1",
    },
    ".switch-size-lg": {
      fontSize: theme("fontSize.lg"),
      lineHeight: "1",
    },
  };
};

export default switchStyles;
