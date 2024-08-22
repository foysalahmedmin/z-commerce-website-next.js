const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    buttons: {
      padding: "50px",
      "background-color": "red",
    },
  });
});
