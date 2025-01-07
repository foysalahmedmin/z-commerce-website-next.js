"use client";

import Logo from "@/components/partials/Logo";
import { Button } from "@/components/ui/Button";
import { AlignRight } from "lucide-react";
import { useState } from "react";
import Cart from "./Cart";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import ThemeToggler from "./ThemeToggler";
import UserAndAuthNav from "./UserAndAuthNav";

const Navigation = ({ access, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-[100000] h-header w-full border-y bg-card">
      <div className="container h-full">
        <div className="flex h-full items-center justify-between gap-2 lg:gap-4">
          <div>
            <Logo />
          </div>
          <div className="mr-auto">
            <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center justify-end gap-2 lg:gap-4">
              <SearchBar className="hidden lg:flex" />
              <ThemeToggler />
              <Cart access={access} user={user} />
              <UserAndAuthNav access={access} user={user} />
            </div>
            <div className="lg:hidden">
              <Button
                onClick={() => setIsOpen(true)}
                variant="none"
                shape="icon"
                className=""
              >
                <AlignRight className="size-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
