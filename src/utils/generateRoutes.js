// Utility function to check if a user has the required role
const checkRole = (role, userRole) => {
  if (!role || !role?.length) {
    return true;
  }
  return userRole && role.includes(userRole);
};

// Process a single route item
const processItem = ({ item, userRole }) => {
  const {
    path,
    element,
    errorElement,
    children,
    loader,
    action,
    index,
    role,
    type,
    hidden,
  } = item;

  // Construct the elements object
  const elements = {
    ...(path || path === "" ? { path } : {}),
    ...(element ? { element } : {}),
    ...(errorElement ? { errorElement } : {}),
    ...(loader ? { loader } : {}),
    ...(action ? { action } : {}),
    ...(index ? { index } : {}),
  };

  // Exclude invalid or inaccessible items
  if (
    hidden ||
    (!(path || path === "") && !element && !children?.length) ||
    !checkRole(role, userRole)
  ) {
    return [];
  }

  // Handle items
  if (children?.length && type === "layout") {
    return [
      {
        ...elements,
        children: processItems({ items: children, userRole }),
      },
    ];
  } else if (children?.length && type !== "layout") {
    return processItems({ items: children, userRole });
  } else {
    return [{ ...elements }];
  }
};

// Process routes
const processItems = ({ items, userRole }) => {
  if (!items) return [];

  let routes = [];
  items.forEach((item) => {
    routes = routes.concat(processItem({ item, userRole }));
  });

  return routes;
};

// Generate routes
const generateRoutes = ({ items, userRole }) => {
  if (!items) {
    return [];
  }

  return processItems({ items, userRole });
};

export default generateRoutes;
