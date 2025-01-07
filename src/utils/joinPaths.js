const trimPath = (path = "") => {
  return path?.replace(/^\/|\/$/g, "");
};

const joinPaths = (paths = []) => {
  if (!paths.length) {
    return "";
  }
  const processedPaths = [];
  paths?.forEach((path) => path && processedPaths.push(trimPath(path)));
  return trimPath(processedPaths.join("/"));
};

export default joinPaths;
