const drawerStyles = () => {
  return {
    ".drawer-open": {
      position: "static",
      transform: "scale(1)",
      visibility: "visible",
      opacity: "1",
      transitionDelay: "0s",

      "& > .drawer-backdrop": {
        all: "unset",
        display: "none",
        transform: "scale(0)",
        visibility: "hidden",
        opacity: "0",
        transitionDelay: "0s",
        transition: "transform 0.3s ease, opacity 0.3s ease",
      },

      "& > .drawer-content": {
        position: "static",
        transform: "scaleX(1)",
        visibility: "visible",
        opacity: "1",
        transitionDelay: "300ms",
        transition: "transform 0.3s ease, opacity 0.3s ease",
      },
    },
  };
};

export default drawerStyles;
