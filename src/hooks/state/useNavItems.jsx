import { routes } from "@/routes";
import generateNavItems from "@/utils/generateNavItems";
import { useEffect, useState } from "react";

const useNavItems = () => {
  const [navItems, setNavItems] = useState([]);
  useEffect(() => {
    const items = generateNavItems({
      items: routes,
      userRole: "user",
    });
    if (items) {
      setNavItems(items);
    }
  }, []);
  return navItems;
};

export default useNavItems;
