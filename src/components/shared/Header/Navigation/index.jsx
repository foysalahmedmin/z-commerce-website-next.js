import Link from "next/link";
import CartBar from "./CartBar";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import NavMenuBar from "./NavMenuBar";
import NavMenus from "./NavMenus";
import SearchBar from "./SearchBar";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-30 h-16 w-full border-b border-input bg-background shadow">
      <div className="container h-full">
        <div className="group flex h-full items-center justify-between gap-7">
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <NavMenuBar />
              {/* <input
                className="menu-toggle peer hidden"
                type="checkbox"
                name=""
                id="menu-toggle"
              />
              <label
                htmlFor="menu-toggle"
                className="animate-pop cursor-pointer active:scale-95"
              >
                <ListMinus className="h-6 w-6" />
              </label> */}
            </div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav className="flex-grow">
            <ul className="hidden items-center gap-4 md:flex">
              <NavMenus />
            </ul>
            {/* <div className="invisible absolute left-0 top-[4rem] w-full transition-all group-has-[.menu-toggle:checked]:visible md:hidden">
              <label
                htmlFor="menu-toggle"
                className="block h-full min-h-[calc(100vh-4rem)] w-full cursor-pointer bg-black/50 transition-all"
              ></label>
              <ul className="absolute bottom-[.5rem] left-[.5rem] top-[.5rem] z-30 flex w-0 origin-left scale-x-0 flex-col gap-4 rounded-md border border-input bg-background px-0 py-4 shadow transition-all duration-500 group-has-[.menu-toggle:checked]:min-w-[50%] group-has-[.menu-toggle:checked]:scale-x-100 group-has-[.menu-toggle:checked]:px-4 md:hidden">
                <NavMenus className="odd:translate-x-20 odd:blur-lg odd:transition-all odd:delay-200 odd:duration-500 even:translate-x-20 even:blur-lg even:transition-all even:delay-300 even:duration-500 group-has-[.menu-toggle:checked]:odd:translate-x-0 group-has-[.menu-toggle:checked]:odd:blur-0 group-has-[.menu-toggle:checked]:even:translate-x-0 group-has-[.menu-toggle:checked]:even:blur-0" />
              </ul>
            </div> */}
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
