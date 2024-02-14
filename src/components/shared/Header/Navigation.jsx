"use client";

import Link from "next/link";
import CartBar from "./CartBar";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import NavMenus from "./NavMenus";
import SearchBar from "./SearchBar";

const Navigation = () => {
  return (
    <header className="sticky top-0 h-20 w-full bg-background shadow">
      <div className="container h-full">
        <div className="flex h-full items-center justify-between gap-7">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav className="flex-grow">
            <ul className="flex items-center gap-4">
              <NavMenus />
            </ul>
          </nav>
          <div className="flex items-center justify-center gap-4">
            <SearchBar />
            <CartBar />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
