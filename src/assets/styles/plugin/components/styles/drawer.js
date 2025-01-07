const drawerStyles = () => {
  return {
    ".drawer": {
      position: "fixed",
      transform: "scale(0)",
      visibility: "hidden",
      opacity: "0",
      transitionDelay: "300ms",
      inset: "0",
      overflow: "hidden",
      "&.open, &[open]": {
        transform: "scale(1)",
        visibility: "visible",
        opacity: "1",
        transitionDelay: "0s",
        "& > .drawer-backdrop": {
          transform: "scale(1)",
          visibility: "visible",
          opacity: "1",
          transitionDelay: "0s",
        },
        "& > .drawer-content": {
          transform: "scaleX(1)",
          visibility: "visible",
          opacity: "1",
          transitionDelay: "300ms",
        },
      },
    },
    ".drawer-backdrop": {
      position: "absolute",
      transform: "scale(0)",
      visibility: "hidden",
      opacity: "0",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      transitionDelay: "300ms",
      transition:
        "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
      inset: "0",
      overflow: "hidden",
    },
    ".drawer-content": {
      position: "absolute",
      transform: "scaleX(0)",
      visibility: "hidden",
      opacity: "0",
      transition:
        "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
      inset: "0",
    },
  };
};

export default drawerStyles;
