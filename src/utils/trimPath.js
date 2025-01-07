const trimPath = (path = "") => {
  return path?.replace(/^\/|\/$/g, "");
};

export default trimPath;
