const badgeStyles = ({ theme }) => {
  return {
    ".badge": {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "0.25em",
      animation: theme("animation.pop"),
      transition: "all 0.3s ease-in-out",
      borderRadius: theme("borderRadius.form-control"),
      backgroundColor: theme("colors.accent.DEFAULT"),
      padding: "0.25em",
      minWidth: "2em",
      minHeight: "2em",
      color: theme("colors.accent.foreground"),
      fontWeight: "bold",
      fontSize: "0.5rem",
      lineHeight: "1",

      "& > *": {
        lineHeight: "1",
      },
    },
  };
};

export default badgeStyles;
