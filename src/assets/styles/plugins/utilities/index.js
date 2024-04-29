import plugin from "tailwindcss/plugin";

export default plugin(function ({ addComponents }) {
  const flexCenter = {
    ".flex-center": {
      justifyContent: "center",
      alignItems: "center",
    },
  };
  addComponents(flexCenter);
});
