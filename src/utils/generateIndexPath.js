import checkActivePath from "./checkActivePath";
import joinPaths from "./joinPaths";

// Utility function to trim path
const trimPath = (path = "") => {
  return path?.replace(/^\/|\/$/g, "");
};

// Generate tree list
const generateIndexPath = ({
  items,
  currentPath,
  initialPath = "/",
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
      trimPath(currentPath) === joinPaths([initialPath, path])
    ) {
      return indexPath;
    } else if (
      path &&
      !children?.length &&
      checkActivePath({ currentPath, path: joinPaths([initialPath, path]) })
    ) {
      return indexPath;
    } else if (children?.length) {
      const result = generateIndexPath({
        items: children,
        currentPath,
        initialIndexPath: indexPath,
        initialPath:
          type === "layout" && path
            ? "/" + joinPaths([initialPath, path])
            : initialPath,
      });
      if (result?.length) {
        return result;
      }
    }
  }

  return [];
};

export default generateIndexPath;
