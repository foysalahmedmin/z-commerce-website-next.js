const modalStyles = () => {
  return {
    ".modal": {
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
        overscrollBehaviorX: "contain",
        overscrollBehaviorY: "contain",
        "& > .modal-backdrop": {
          transform: "scale(1)",
          visibility: "visible",
          opacity: "1",
          transitionDelay: "0s",
          overscrollBehaviorX: "contain",
          overscrollBehaviorY: "contain",
        },
        "& > .modal-content": {
          transform: "scale(1)",
          visibility: "visible",
          opacity: "1",
          transitionDelay: "300ms",
          overscrollBehaviorX: "contain",
          overscrollBehaviorY: "contain",
        },
      },
    },
    ".modal-backdrop": {
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
    ".modal-content": {
      position: "absolute",
      transform: "scale(0)",
      visibility: "hidden",
      opacity: "0",
      transition:
        "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
      inset: "0",
    },
  };
};

export default modalStyles;
