import joinPaths from "./joinPaths";

// Utility function to check if a user has the required role
const checkRole = (role, userRole) => {
  if (!role || !role?.length) {
    return true;
  }
  return userRole && role.includes(userRole);
};

// Process a single navigation item
const processItem = ({ item, userRole, initialPath = "/" }) => {
  const {
    path,
    label,
    icon,
    children,
    base,
    role,
    type,
    status,
    visible,
    invisible,
    asItem,
    asItemAlone,
    hidden,
  } = item;

  // Construct the elements object
  const elements = {
    ...((path || path === "") && !path.includes(":")
      ? { path: "/" + joinPaths([initialPath, path]) }
      : {}),
    ...(label ? { label } : {}),
    ...(icon ? { icon } : {}),
    ...(base ? { base } : {}),
    ...(type ? { type } : {}),
    ...(status ? { status } : {}),
    ...(role ? { role } : {}),
  };

  // Exclude invalid or inaccessible items
  if (
    hidden ||
    invisible ||
    (!(path || path === "") && !children?.length && !label) ||
    (path && path.includes(":") && !children?.length && !visible) ||
    !checkRole(role, userRole)
  ) {
    return [];
  }

  // Handle items
  if (children?.length && type !== "layout" && !asItemAlone) {
    return [
      {
        ...elements,
        children: processItems({
          items: children,
          userRole,
          initialPath:
            type === "layout" && path
              ? "/" + joinPaths([initialPath, path])
              : initialPath,
        }),
      },
    ];
  } else if (children?.length && type === "layout" && asItem) {
    return [
      {
        ...elements,
        children: processItems({
          items: children,
          userRole,
          initialPath:
            type === "layout" && path
              ? "/" + joinPaths([initialPath, path])
              : initialPath,
        }),
      },
    ];
  } else if (children?.length && type === "layout" && !asItem && !asItemAlone) {
    return processItems({
      items: children,
      userRole,
      initialPath:
        type === "layout" && path
          ? "/" + joinPaths([initialPath, path])
          : initialPath,
    });
  } else if (children?.length && asItemAlone) {
    return [{ ...elements }];
  } else {
    return [{ ...elements }];
  }
};

// Process navigation items
const processItems = ({ items, userRole, initialPath = "/" }) => {
  if (!items) return [];

  let routes = [];
  items.forEach((item) => {
    routes = routes.concat(processItem({ item, userRole, initialPath }));
  });

  return routes;
};

// Generate navigation items
const generateNavItems = ({ items, userRole }) => {
  if (!items) return [];

  return processItems({ items, userRole });
};

export default generateNavItems;
