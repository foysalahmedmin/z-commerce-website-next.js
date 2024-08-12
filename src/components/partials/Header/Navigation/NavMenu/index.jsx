import { ActiveLink } from "@/components/ui/ActiveLink";
import { pathProcessor } from "@/lib/utils";
import { HomeIcon, Info, ReceiptText, Store } from "lucide-react";

const routes = [
  {
    path: "/",
    label: "Home",
    icon: <HomeIcon size={16} />,
  },
  {
    path: "/shop",
    label: "Shop",
    icon: <Store size={16} />,
  },
  {
    path: "/about",
    label: "About",
    icon: <Info size={16} />,
  },
  {
    path: "/contact",
    label: "Contact",
    icon: <ReceiptText size={16} />,
  },
];

const NavMenu = () => {
  return (
    <>
      {routes.map((route, i) => (
        <li key={i}>
          <ActiveLink
            href={"/" + pathProcessor(route?.path)}
            className={
              "underline-animated font-comfortaa cursor-pointer gap-1 py-1 text-title after:mx-auto after:border-title"
            }
            activeClassName="after:border-primary after:w-full"
          >
            <span className="text-sm uppercase">{route?.label}</span>
          </ActiveLink>
        </li>
      ))}
    </>
  );
};

export default NavMenu;
