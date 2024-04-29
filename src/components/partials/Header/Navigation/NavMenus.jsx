"use client";

import { ActiveLink } from "@/components/ui/ActiveLink";
import { Earth, HandCoins, HomeIcon, Info, Podcast } from "lucide-react";
import { useLocale } from "next-intl";

const routes_en = [
  {
    path: "/",
    label: "Home",
    icon: <HomeIcon size={16} />,
  },
  {
    path: "/crypto-services",
    label: "Crypto Services",
    icon: <HandCoins size={16} />,
  },
  {
    path: "/news",
    label: "News",
    icon: <Earth size={16} />,
  },
  {
    path: "/announcements",
    label: "Announcements",
    icon: <Podcast size={16} />,
  },
  {
    path: "/about",
    label: "About Us",
    icon: <Info size={16} />,
  },
];
const routes_bn = [
  {
    path: "/",
    label: "НАЧАЛО",
    icon: <HomeIcon size={16} />,
  },
  {
    path: "/crypto-services",
    label: "КРИПТО УСЛУГИ",
    icon: <HandCoins size={16} />,
  },
  {
    path: "/news",
    label: "НОВИНИ",
    icon: <Earth size={16} />,
  },
  {
    path: "/announcements",
    label: "ИЗВЕСТИЯ",
    icon: <Podcast size={16} />,
  },
  {
    path: "/about",
    label: "ЗA НАС",
    icon: <Info size={16} />,
  },
];

const NavMenus = () => {
  const localeActive = useLocale();
  const routes = localeActive === "en-US" ? routes_en : routes_bn;
  return (
    <>
      {routes.map((route, i) => (
        <li key={i}>
          <ActiveLink
            href={"/" + localeActive + route?.path}
            className={
              "inline-flex cursor-pointer flex-col items-center gap-1 font-comfortaa text-sm font-light uppercase hover:text-primary lg:flex-row"
            }
          >
            {route?.icon}
            <span className="relative -mb-1 inline-block">{route?.label}</span>
          </ActiveLink>
        </li>
      ))}
    </>
  );
};

export default NavMenus;
