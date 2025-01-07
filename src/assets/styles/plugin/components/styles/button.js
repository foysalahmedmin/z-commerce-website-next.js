const buttonStyles = ({ theme }) => {
  return {
    ".button": {
      display: "inline-flex",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      gap: "0.5rem",
      animation: theme("animation.pop"),
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      border: "1px solid transparent",
      borderRadius: theme("borderRadius.button"),
      overflow: "hidden",
      fontSize: theme("fontSize.base"),
      lineHeight: "1",
      whiteSpace: "nowrap",

      "& > *": {
        lineHeight: "1",
      },

      "&:active": {
        transform: "scale(0.95)",
      },

      "&.disabled, &:disabled": {
        opacity: "0.5",
        animation: "none",
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },

    /* Button Variants */
    ".button-variant-default": {
      backgroundColor: theme("colors.accent.DEFAULT"),
      color: theme("colors.accent.foreground"),

      "&:hover": {
        backgroundColor: theme("colors.accent.DEFAULT/0.75"),
      },
    },

    ".button-variant-gradient": {
      backgroundImage: `linear-gradient(to bottom, ${theme("colors.primary.DEFAULT")}, ${theme("colors.secondary.DEFAULT")})`,
      color: theme("colors.foreground"),

      "&:hover": {
        backgroundImage: `linear-gradient(to bottom, ${theme("colors.primary.DEFAULT")}/0.75, ${theme("colors.secondary.DEFAULT")}/0.75)`,
      },

      "&:active": {
        backgroundImage: `linear-gradient(to top, ${theme("colors.primary.DEFAULT")}, ${theme("colors.secondary.DEFAULT")})`,
      },
    },

    ".button-variant-outline": {
      borderWidth: "1px",
      borderColor: theme("colors.accent.DEFAULT"),
      backgroundColor: "transparent",
      color: theme("colors.accent.DEFAULT"),

      "&:hover": {
        borderColor: theme("colors.accent.DEFAULT/0.05"),
        backgroundColor: theme("colors.accent.DEFAULT/0.05"),
        color: theme("colors.accent.DEFAULT"),
      },
    },

    ".button-variant-ghost": {
      backgroundColor: "transparent",
      color: theme("colors.foreground"),

      "&:hover": {
        backgroundColor: theme("colors.accent.DEFAULT/0.05"),
      },
    },

    ".button-variant-link": {
      backgroundColor: "transparent",
      color: theme("colors.accent.DEFAULT"),
      textUnderlineOffset: "2px",

      "&:hover": {
        textDecoration: "underline",
      },
    },

    /* Button Sizes */
    ".button-size-default": {
      height: theme("height.button"),
      fontSize: theme("fontSize.base"),
      lineHeight: "1",
    },

    ".button-size-sm": {
      height: theme("height.button-sm"),
      fontSize: theme("fontSize.sm"),
      lineHeight: "1",
    },

    ".button-size-md": {
      height: theme("height.button-md"),
      fontSize: theme("fontSize.base"),
      lineHeight: "1",
    },

    ".button-size-lg": {
      height: theme("height.button-lg"),
      fontSize: theme("fontSize.lg"),
      lineHeight: "1",
    },

    /* Button Shapes */
    ".button-shape-default": {
      paddingRight: theme("padding.button"),
      paddingLeft: theme("padding.button"),
    },

    ".button-shape-icon": {
      aspectRatio: "1 / 1",
    },
  };
};

export default buttonStyles;
