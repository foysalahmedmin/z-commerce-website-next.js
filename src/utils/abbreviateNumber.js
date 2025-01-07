export const abbreviateNumber = (num) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};

export const expandAbbreviatedNumber = (shortForm) => {
  const suffix = shortForm.slice(-1).toUpperCase();
  const number = parseFloat(shortForm.slice(0, -1));

  switch (suffix) {
    case "K":
      return number * 1e3;
    case "M":
      return number * 1e6;
    case "B":
      return number * 1e9;
    default:
      return parseFloat(shortForm);
  }
};
