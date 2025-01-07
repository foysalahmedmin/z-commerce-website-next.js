const partialsStyles = () => {
  return {
    ".scrollbar-thin": {
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#6b7280",
        borderRadius: "4px",
      },
    },
    ".flex-center": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ".flex-between": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
};

export default partialsStyles;
