"use client";

import { ActiveLink } from "@/components/ui/ActiveLink";
import {
  Binary,
  Boxes,
  HomeIcon,
  Info,
  PackageSearch,
  Store,
} from "lucide-react";
import { useLocale } from "next-intl";

const routes = [
  {
    path: "",
    label: "Home",
    icon: <HomeIcon size={16} />,
  },
  {
    path: "/shop",
    label: "Shop",
    icon: <Store size={16} />,
  },
  {
    path: "/all-categories",
    label: "All Categories",
    icon: <Boxes size={16} />,
  },
  {
    path: "/all-brands",
    label: "all-brands",
    icon: <Binary size={16} />,
  },
  {
    path: "/all-sellers",
    label: "all-sellers",
    icon: <PackageSearch size={16} />,
  },
  {
    path: "/about",
    label: "About Us",
    icon: <Info size={16} />,
  },
];

const NavMenus = () => {
  const localeActive = useLocale();
  return (
    <>
      {routes.map((route, i) => (
        <li key={i}>
          <ActiveLink
            href={"/" + localeActive + route?.path}
            className={
              "underline-animated cursor-pointer gap-1 py-1 font-comfortaa text-sm uppercase text-title after:mx-auto after:border-title"
            }
            activeClassName="after:border-primary after:w-full"
          >
            <span>{route?.label}</span>
          </ActiveLink>
        </li>
      ))}
    </>
  );
};

export default NavMenus;
