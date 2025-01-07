const trimPath = (path = "") => {
  return path?.replace(/^\/|\/$/g, "");
};

const checkActivePath = ({ currentPath, path }) => {
  if (!currentPath || !path) {
    return false;
  } else {
    return (
      trimPath(currentPath) === trimPath(path) ||
      currentPath?.startsWith(trimPath(path) + "/")
    );
  }
};

export default checkActivePath;
