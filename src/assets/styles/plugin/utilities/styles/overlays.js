const overlaysStyles = () => {
  return {
    ".overlay": {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: "999",
    },
    ".overline-overlay": {
      position: "relative",
      "&::before": {
        position: "absolute",
        transition: "all 300ms ease-in-out",
        inset: "0",
        borderTopWidth: "1px",
        borderColor: "currentColor",
        width: "100%",
        content: "''",
      },
    },
    ".underline-overlay": {
      position: "relative",
      "&::after": {
        position: "absolute",
        transition: "all 300ms ease-in-out",
        inset: "0",
        borderBottomWidth: "1px",
        borderColor: "currentColor",
        width: "100%",
        content: "''",
      },
    },
    ".hover-overline-overlay": {
      position: "relative",
      "&::after": {
        position: "absolute",
        transition: "all 300ms ease-in-out",
        inset: "0",
        borderTopWidth: "1px",
        borderColor: "currentColor",
        width: "0",
        content: "''",
      },
      "&:hover::before": {
        width: "100%",
      },
    },
    ".hover-underline-overlay": {
      position: "relative",
      "&::after": {
        position: "absolute",
        transition: "all 300ms ease-in-out",
        inset: "0",
        borderBottomWidth: "1px",
        borderColor: "currentColor",
        width: "0",
        content: "''",
      },
      "&:hover::after": {
        width: "100%",
      },
    },
  };
};

export default overlaysStyles;
