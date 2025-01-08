"use client";

import Logo from "@/components/partials/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { HomeIcon, Info, ReceiptText, Store, X } from "lucide-react";
import SearchBar from "../SearchBar";
import NavItems from "./NavItems";

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

const NavMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Desktop Screen */}
      <div className="relative hidden px-8 lg:block">
        <ul className="flex size-full items-center justify-start gap-[1em]">
          <NavItems routes={routes} />
        </ul>
      </div>
      {/* Mobile Screen */}
      <div
        className={cn(
          "fixed inset-0 z-50 h-screen w-screen origin-left bg-card transition-all duration-300 lg:hidden",
          {
            "visible translate-x-0": isOpen,
            "invisible -translate-x-full": !isOpen,
          },
        )}
      >
        <div className="container space-y-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Logo />
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              shape="icon"
              className="rounded-full bg-accent/5"
            >
              <X className="size-[1.25em]" />
            </Button>
          </div>
          <div>
            <SearchBar />
          </div>
          <ul className="flex size-full flex-col gap-[1em]">
            <NavItems isOpen={isOpen} setIsOpen={setIsOpen} routes={routes} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
