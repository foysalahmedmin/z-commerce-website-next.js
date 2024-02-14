"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const NavMenus = ({ className }) => {
  const pathname = usePathname();
  return (
    <>
      {menus.map((menu) => {
        return (
          <li key={menu.name} className={className}>
            <Link
              href={menu.path}
              className={cn(
                "relative py-1 transition-all duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:h-[.1rem] after:w-0 after:bg-color after:transition-all after:duration-500 after:content-[''] hover:after:w-full",
                {
                  "text-primary after:w-full after:bg-primary ":
                    pathname === menu.path,
                },
              )}
            >
              <span>{menu.name}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavMenus;
