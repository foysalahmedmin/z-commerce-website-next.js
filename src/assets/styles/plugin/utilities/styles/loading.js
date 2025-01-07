const loadingStyles = ({ theme }) => {
  return {
    ".loading": {
      position: "relative",
      opacity: "0.5",
      animation: "none",
      cursor: "wait",

      "&.loading-center::before": {
        position: "absolute",
        zIndex: "30",
        animation: "spin 1s linear infinite",
        margin: "auto",
        inset: "0",
        border: "4px dashed currentColor",
        borderRadius: "50%",
        backgroundColor: theme("colors.muted.foreground", "transparent"),
        width: "1rem",
        height: "1rem",
        content: '""',
      },
      "&.loading-left::before, &.loading-right::after": {
        animation: "spin 1s linear infinite",
        border: "4px dashed currentColor",
        borderRadius: "50%",
        width: "1rem",
        height: "1rem",
        content: '""',
      },
    },
  };
};

export default loadingStyles;
