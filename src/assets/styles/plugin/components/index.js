import avatarStyles from "./styles/avatar";
import badgeStyles from "./styles/badge";
import buttonStyles from "./styles/button";
import checkboxStyles from "./styles/checkbox";
import countdownStyles from "./styles/countdown";
import drawerStyles from "./styles/drawer";
import formControlStyles from "./styles/form-control";
import modalStyles from "./styles/modal";
import radioStyles from "./styles/radio";
import switchStyles from "./styles/switch";
import tooltipStyles from "./styles/tooltip";

const addComponentStyles = ({ addComponents, theme }) => {
  const styles = {
    ...(avatarStyles({ theme }) || {}),
    ...(badgeStyles({ theme }) || {}),
    ...(radioStyles({ theme }) || {}),
    ...(checkboxStyles({ theme }) || {}),
    ...(switchStyles({ theme }) || {}),
    ...(buttonStyles({ theme }) || {}),
    ...(formControlStyles({ theme }) || {}),
    ...(drawerStyles({ theme }) || {}),
    ...(modalStyles({ theme }) || {}),
    ...(tooltipStyles({ theme }) || {}),
    ...(countdownStyles({ theme }) || {}),
  };
  addComponents(styles, ["responsive", "hover"]);
};

export default addComponentStyles;
