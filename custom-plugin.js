const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  const flexCenter = {
    ".flex-center": {
      justifyContent: "center",
      alignItems: "center",
    },
  };
  addComponents(flexCenter);
});
