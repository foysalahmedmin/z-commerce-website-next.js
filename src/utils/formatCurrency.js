const formatCurrency = ({
  value = 0,
  fixed = 2,
  language = "en-US",
  currency,
}) => {
  if (currency) {
    return Number(Number(value).toFixed(fixed)).toLocaleString(language, {
      style: "currency",
      currency: currency,
    });
  } else {
    return Number(Number(value).toFixed(fixed)).toLocaleString(language);
  }
};

export default formatCurrency;
