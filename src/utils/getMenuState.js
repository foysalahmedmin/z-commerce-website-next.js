const getMenuState = ({ activeIndexPath = [], indexPath = [] }) => {
  const currentPath = indexPath.join("");
  const parentPath = indexPath.slice(0, -1).join("");
  const activePathPrefix = activeIndexPath.slice(0, indexPath.length).join("");

  const isExpanded =
    activeIndexPath?.length > 0 && activePathPrefix === currentPath;
  const isHidden =
    activeIndexPath?.length > 0 &&
    activePathPrefix !== currentPath &&
    activePathPrefix !== parentPath;

  return { isExpanded, isHidden };
};

export default getMenuState;
