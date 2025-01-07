const avatarStyles = ({ theme }) => {
  return {
    ".avatar": {
      flexShrink: 0,
      borderRadius: theme("borderRadius.full"),
      width: theme("size.form-control"),
      height: theme("size.form-control"),
      objectFit: "cover",
      objectPosition: "center",
    },
  };
};

export default avatarStyles;
