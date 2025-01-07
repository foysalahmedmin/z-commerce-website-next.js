const checkRole = (role, userRole) => {
  if (!role || !role?.length) {
    return true;
  }
  return userRole && role.includes(userRole);
};

export default checkRole;
