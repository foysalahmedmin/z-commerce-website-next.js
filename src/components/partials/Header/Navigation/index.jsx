"use client";

import { Toggler } from "@/components/ui/Toggler";
import { cn } from "@/lib/utils";
import { AlignRight, X } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import Language from "./Language";
import NavMenus from "./NavMenus";
import UserAndAuthNav from "./UserAndAuthNav";

const Navigation = ({ access, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const localeActive = useLocale();
  return (
    <>
      <nav className="z-30 h-16">
        <div className="container h-full">
          <div className="grid h-full grid-cols-2 items-center gap-1 font-bold lg:grid-cols-6 lg:gap-4">
            <div>
              <Link
                href={"/" + localeActive}
                className="flex items-center gap-1 font-comfortaa text-lg uppercase tracking-[.15rem] lg:gap-2 lg:text-xl lg:tracking-[.2rem]"
              >
                <span className="bg-gradient inline-block rounded-sm px-1 py-[2px] text-black">
                  <span className="border-r-2 px-2 pt-[1.5px]">Gate</span>
                </span>
                <span className="pt-[1.5px]">Invest</span>
              </Link>
            </div>
            <ul className="hidden items-center justify-center gap-4 lg:col-span-4 lg:flex">
              <NavMenus />
            </ul>
            <ul
              className={cn(
                "absolute inset-0 flex h-screen w-screen origin-top flex-col items-center justify-center gap-4 bg-background py-12 transition-all duration-300 lg:hidden",
                {
                  "visible scale-y-100 opacity-100": isOpen,
                  "invisible scale-y-0 opacity-0": !isOpen,
                },
              )}
            >
              <div className="pl-container absolute left-0 top-4 lg:hidden">
                <Language />
              </div>
              <NavMenus />
            </ul>
            <div className="flex items-center justify-end gap-2 lg:gap-4">
              <div className="hidden lg:inline-block">
                <Language />
              </div>
              <UserAndAuthNav access={access} user={user} />
              <div className="lg:hidden">
                <Toggler
                  onClick={() => setIsOpen((value) => !value)}
                  isTrue={isOpen}
                  trueContent={<X />}
                  falseContent={<AlignRight />}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
