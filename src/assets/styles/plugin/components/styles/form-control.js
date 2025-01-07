const formControlStyles = ({ theme }) => {
  return {
    ".form-control": {
      display: "inline-flex",
      position: "relative",
      alignItems: "center",
      gap: "0.5rem",
      animation: theme("animation.pop"),
      transition: "all 0.3s ease-in-out",
      outline: "none",
      border: "1px solid transparent",
      paddingRight: theme("padding.form-control"),
      paddingLeft: theme("padding.form-control"),
      width: "100%",
      overflow: "hidden",
      fontSize: theme("fontSize.base"),

      "& > input, & > textarea": {
        outline: "none",
        backgroundColor: "transparent",
      },

      "&.disabled, &:disabled": {
        opacity: "0.5",
        animation: "none",
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },

    /* form-control variants */
    ".form-control-variant-default": {
      borderWidth: "1px",
      borderColor: theme("colors.border"),
      borderRadius: theme("borderRadius.form-control"),
      backgroundColor: "transparent",
      color: theme("colors.foreground"),

      "&:hover": {
        borderColor: theme("colors.foreground"),
      },

      "&:active, &:focus, &:focus-within": {
        borderColor: theme("colors.accent.DEFAULT"),
        backgroundColor: theme("colors.accent.DEFAULT/0.05"),
      },
    },

    ".form-control-variant-outline": {
      borderWidth: "1px",
      borderColor: theme("colors.border"),
      borderRadius: theme("borderRadius.form-control"),
      backgroundColor: "transparent",
      color: theme("colors.foreground"),

      "&:hover": {
        borderColor: theme("colors.foreground"),
      },

      "&:active, &:focus, &:focus-within": {
        borderColor: theme("colors.accent.DEFAULT"),
        backgroundColor: theme("colors.accent.DEFAULT/0.05"),
      },
    },

    ".form-control-variant-standard": {
      borderBottomWidth: "1px",
      borderBottomColor: theme("colors.border"),
      borderRadius: theme("borderRadius.none"),
      backgroundColor: "transparent",
      color: theme("colors.foreground"),

      "&:hover": {
        borderBottomColor: theme("colors.foreground"),
      },

      "&:active, &:focus, &:focus-within": {
        borderBottomColor: theme("colors.accent.DEFAULT"),
        backgroundColor: theme("colors.accent.DEFAULT/0.05"),
      },
    },

    ".form-control-variant-filled": {
      borderBottomWidth: "1px",
      borderBottomColor: theme("colors.border"),
      borderRadius: theme("borderRadius.none"),
      backgroundColor: theme("colors.muted.DEFAULT/0.25"),
      color: theme("colors.foreground"),

      "&:hover": {
        borderBottomColor: theme("colors.foreground"),
      },

      "&:active, &:focus, &:focus-within": {
        borderBottomColor: theme("colors.accent.DEFAULT"),
        backgroundColor: theme("colors.accent.DEFAULT/0.25"),
      },
    },

    /* form-control sizes */
    ".form-control-size-default": {
      height: theme("height.form-control"),
      fontSize: theme("fontSize.base"),
    },

    ".form-control-size-sm": {
      height: theme("height.form-control-sm"),
      fontSize: theme("fontSize.sm"),
    },

    ".form-control-size-md": {
      height: theme("height.form-control-md"),
      fontSize: theme("fontSize.base"),
    },

    ".form-control-size-lg": {
      height: theme("height.form-control-lg"),
      fontSize: theme("fontSize.lg"),
    },
  };
};

export default formControlStyles;
