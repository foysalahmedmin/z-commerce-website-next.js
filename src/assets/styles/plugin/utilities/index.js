import drawerStyles from "./styles/drawer";
import overlaysStyles from "./styles/overlays";
import partialsStyles from "./styles/partials";

const addUtilitiesStyles = ({ addUtilities, theme }) => {
  const styles = {
    ...(partialsStyles({ theme }) || {}),
    ...(overlaysStyles({ theme }) || {}),
    ...(drawerStyles({ theme }) || {}),
    // ...(loadingStyles({ theme }) || {}),
  };
  addUtilities(styles, ["responsive", "hover"]);
};

export default addUtilitiesStyles;
