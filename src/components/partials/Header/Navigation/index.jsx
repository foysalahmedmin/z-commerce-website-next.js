"use client";

import { Toggler } from "@/components/ui/Toggler";
import { cn } from "@/lib/utils";
import { AlignRight, X } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";
import NavMenus from "./NavMenus";
import SearchBar from "./SearchBar";
import ThemeToggler from "./ThemeToggler";
import UserAndAuthNav from "./UserAndAuthNav";

const Navigation = ({ access, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const localeActive = useLocale();
  return (
    <nav className="sticky top-0 z-30 h-16 w-full bg-card shadow">
      <div className="container h-full">
        <div className="flex h-full items-center justify-between gap-2 lg:gap-4">
          <div>
            <Link
              href={"/" + localeActive}
              className="flex items-center gap-1 font-comfortaa text-lg uppercase tracking-[.15rem] lg:gap-2 lg:text-xl lg:tracking-[.2rem]"
            >
              <span className="bg-gradient inline-block rounded-sm px-1 py-[2px] text-black">
                <span className="border-r-2 border-current px-2 pb-0">Z</span>
              </span>
              <span className="pt-[1.5px]">Commerce</span>
            </Link>
          </div>
          <ul
            className={cn(
              "absolute inset-0 z-50 flex h-screen w-screen origin-top flex-col items-center justify-center gap-4 bg-card py-12 transition-all duration-300 lg:hidden",
              {
                "visible scale-y-100 opacity-100": isOpen,
                "invisible scale-y-0 opacity-0": !isOpen,
              },
            )}
          >
            <NavMenus />
          </ul>
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
            <div className="lg:hidden">
              <Toggler
                onClick={() => setIsOpen((value) => !value)}
                isTrue={isOpen}
                trueComp={{
                  children: <X className="size-4" />,
                }}
                falseComp={{
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
