import checkActivePath from "./checkActivePath";

// Utility function to trim path
const trimPath = (path = "") => {
  return path?.replace(/^\/|\/$/g, "");
};

// Generate tree list
const generateTreeListFromNavItems = ({
  items,
  currentPath,
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
      ...(path && { path }),
      ...(label && { label }),
      ...(type && { type }),
      index: index,
      indexPath: indexPath,
    };

    // Tree list
    const tree = [...initialTree, elements];

    // Handle tree list
    if (
      path &&
      children?.length &&
      type === "layout" &&
      trimPath(currentPath) === trimPath(path)
    ) {
      return tree;
    } else if (
      path &&
      !children?.length &&
      checkActivePath({ currentPath, path })
    ) {
      return tree;
    } else if (children?.length) {
      const result = generateTreeListFromNavItems({
        items: children,
        currentPath,
        initialTree: tree,
        initialIndexPath: indexPath,
      });

      if (result?.length) {
        return result;
      }
    }
  }

  return [];
};

export default generateTreeListFromNavItems;
