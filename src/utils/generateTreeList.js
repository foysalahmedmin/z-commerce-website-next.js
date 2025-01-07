import checkActivePath from "./checkActivePath";
import joinPaths from "./joinPaths";

// Utility function to trim path
const trimPath = (path = "") => {
  return path?.replace(/^\/|\/$/g, "");
};

// Generate tree list
const generateTreeList = ({
  items,
  currentPath,
  initialPath = "/",
  initialTree = [],
  initialIndexPath = [],
}) => {
  if (!items || !currentPath) {
    return [];
  }

  for (let index = 0; index < items.length; index++) {
    const { path, label, type, children } = items[index];

    // Construct the elements object
    const indexPath = [...initialIndexPath, index];
    const elements = {
      ...((path || path === "") && !path.includes(":")
        ? { path: "/" + joinPaths([initialPath, path]) }
        : {}),
      ...(label ? { label } : {}),
      ...(type ? { type } : {}),
      index: index,
      indexPath: [...initialIndexPath, index],
    };

    // Tree list
    const tree = [...initialTree, elements];

    // Handle tree list
    if (
      (path || path === "") &&
      children?.length &&
      type === "layout" &&
      trimPath(currentPath) === joinPaths([initialPath, path])
    ) {
      return tree;
    } else if (
      (path || path === "") &&
      !children?.length &&
      checkActivePath({ currentPath, path: joinPaths([initialPath, path]) })
    ) {
      return tree;
    } else if (children?.length) {
      const result = generateTreeList({
        items: children,
        currentPath,
        initialTree: tree,
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

export default generateTreeList;
