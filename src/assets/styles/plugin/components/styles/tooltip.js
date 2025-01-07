const tooltipStyles = ({ theme }) => {
  return {
    ".tooltip": {
      position: "relative",
      "&:has(> .tooltip-trigger:hover) > .tooltip-content": {
        visibility: "visible",
        opacity: "1",
        transition: "opacity 0.3s ease",
      },
      "&.tooltip-open > .tooltip-content": {
        visibility: "visible",
        opacity: "1",
        transition: "opacity 0.3s ease",
      },
    },

    ".tooltip-content": {
      position: "absolute",
      visibility: "hidden",
      opacity: "0",
      zIndex: "10",
      transition: "all 0.3s ease",
      borderWidth: "1px",
      borderColor: theme("colors.border"),
      borderRadius: "0.125em",
      backgroundColor: theme("colors.card.DEFAULT"),
      paddingTop: "0.25em",
      paddingRight: "0.5em",
      paddingBottom: "0.25em",
      paddingLeft: "0.5em",
      width: "fit-content",
      height: "fit-content",
      color: theme("colors.foreground"),
      fontSize: theme("fontSize.sm"),

      "&::after": {
        position: "absolute",
        transformOrigin: "center",
        zIndex: "20",
        transition: "all 0.3s ease",
        marginRight: "auto",
        marginLeft: "auto",
        borderStyle: "solid",
        borderWidth: "var(--tooltip-tail, 0.25rem)",
        borderColor: `transparent ${theme("colors.border")} ${theme("colors.border")} transparent`,
        width: "fit-content",
        height: "fit-content",
        content: `" "`,
        color: theme("colors.foreground"),
        fontSize: "0.875rem",
      },
    },

    ".tooltip-content-top": {
      top: "calc(var(--tooltip-offset, 0.5rem) * -1)",
      right: "0",
      left: "0",
      transform: "translateY(-100%)",
      transformOrigin: "bottom",
      marginRight: "auto",
      marginLeft: "auto",

      "&::after": {
        right: "calc(50% - var(--tooltip-tail, 0.25rem))",
        bottom: "calc(var(--tooltip-tail, 0.25rem) * -1)",
        left: "calc(50% - var(--tooltip-tail, 0.25rem))",
        rotate: "45deg",
      },
    },

    ".tooltip-content-bottom": {
      right: "0",
      bottom: "calc(var(--tooltip-offset, 0.5rem) * -1)",
      left: "0",
      transform: "translateY(100%)",
      transformOrigin: "bottom",
      marginRight: "auto",
      marginLeft: "auto",

      "&::after": {
        top: "calc(var(--tooltip-tail, 0.25rem) * -1)",
        right: "calc(50% - var(--tooltip-tail, 0.25rem))",
        left: "calc(50% - var(--tooltip-tail, 0.25rem))",
        rotate: "225deg",
      },
    },

    ".tooltip-content-left": {
      top: "0",
      bottom: "0",
      left: "calc(var(--tooltip-offset, 0.5rem) * -1)",
      transform: "translateX(-100%)",
      transformOrigin: "right",
      marginTop: "auto",
      marginBottom: "auto",

      "&::after": {
        top: "calc(50% - var(--tooltip-tail, 0.25rem))",
        right: "calc(var(--tooltip-tail, 0.25rem) * -1)",
        bottom: "calc(50% - var(--tooltip-tail, 0.25rem))",
        rotate: "315deg",
      },
    },

    ".tooltip-content-right": {
      top: "0",
      right: "calc(var(--tooltip-offset, 0.5rem) * -1)",
      bottom: "0",
      transform: "translateX(100%)",
      transformOrigin: "left",
      marginTop: "auto",
      marginBottom: "auto",

      "&::after": {
        top: "calc(50% - var(--tooltip-tail, 0.25rem))",
        bottom: "calc(50% - var(--tooltip-tail, 0.25rem))",
        left: "calc(var(--tooltip-tail, 0.25rem) * -1)",
        rotate: "135deg",
      },
    },
  };
};

export default tooltipStyles;
