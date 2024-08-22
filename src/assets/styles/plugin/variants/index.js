const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant }) {
  addVariant("hocus", ["&:hover", "&:focus"]);
});
