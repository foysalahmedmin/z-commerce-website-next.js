import checkActivePath from "./checkActivePath";

// Utility function to trim path
const trimPath = (path = "") => {
  return path?.replace(/^\/|\/$/g, "");
};

// Generate tree list
const generateIndexPathFromNavItems = ({
  items,
  currentPath,
  initialIndexPath = [],
}) => {
  if (!items || !currentPath) {
    return [];
  }

  for (let index = 0; index < items.length; index++) {
    const { path, type, children } = items[index];

    // Index path
    const indexPath = [...initialIndexPath, index];

    // Handle tree list
    if (
      path &&
      children?.length &&
      type === "layout" &&
      trimPath(currentPath) === trimPath(path)
    ) {
      return indexPath;
    } else if (
      path &&
      !children?.length &&
      checkActivePath({ currentPath, path })
    ) {
      return indexPath;
    } else if (children?.length) {
      const result = generateIndexPathFromNavItems({
        items: children,
        currentPath,
        initialIndexPath: indexPath,
      });
      if (result?.length) {
        return result;
      }
    }
  }

  return [];
};

export default generateIndexPathFromNavItems;
