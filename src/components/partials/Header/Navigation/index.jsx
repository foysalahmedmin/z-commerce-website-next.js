"use client";

import { Toggler } from "@/components/ui/Toggler";
import { cn } from "@/lib/utils";
import { AlignRight, X } from "lucide-react";
import { useState } from "react";
import Logo from "../../Logo";
import Cart from "./Cart";
import NavMenus from "./NavMenus";
import SearchBar from "./SearchBar";
import ThemeToggler from "./ThemeToggler";
import UserAndAuthNav from "./UserAndAuthNav";

const Navigation = ({ access, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="h-header sticky top-0 z-30 w-full bg-card shadow">
      <div className="container h-full">
        <div className="flex h-full items-center justify-between gap-2 lg:gap-4">
          <div>
            <Logo />
          </div>
          <div
            className={cn(
              "px-container-space fixed inset-0 z-50 h-screen w-screen origin-top bg-card py-4 transition-all duration-300 md:hidden",
              {
                "visible scale-y-100 opacity-100": isOpen,
                "invisible scale-y-0 opacity-0": !isOpen,
              },
            )}
          >
            <div className="flex items-center justify-end">
              <Toggler
                onClick={() => setIsOpen((value) => !value)}
                isOn={isOpen}
                on={{
                  children: <X className="size-4" />,
                }}
                off={{
                  children: <AlignRight className="size-4" />,
                }}
              />
            </div>
            <ul className="flex h-full w-full flex-col items-center justify-center gap-4">
              <NavMenus />
            </ul>
          </div>
          <div className="flex items-center justify-end gap-4">
            <ul className="hidden items-center justify-center gap-4 lg:flex">
              <NavMenus />
            </ul>
            <div className="flex items-center justify-end gap-2 lg:gap-4">
              <SearchBar />
              <ThemeToggler />
              <Cart access={access} user={user} />
              <UserAndAuthNav access={access} user={user} />
            </div>
            <div className="md:hidden">
              <Toggler
                onClick={() => setIsOpen((value) => !value)}
                isOn={isOpen}
                on={{
                  children: <X className="size-4" />,
                }}
                off={{
                  children: <AlignRight className="size-4" />,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
