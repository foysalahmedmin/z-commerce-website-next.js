"use client";

import { handleLogout } from "@/app/actions";
import { ActiveLink } from "@/components/ui/ActiveLink";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { locales } from "@/constants/locales";
import { CreditCard, LogIn, LogOut, User } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const UserAndAuthNav = ({ access, user }) => {
  const localeActive = useLocale();
  return (
    <div>
      {access?.value ? (
        <div>
          <DropdownMenu dir="rtl">
            <DropdownMenuTrigger asChild>
              <div className="size-8 animate-pop cursor-pointer overflow-hidden rounded-full border border-primary bg-primary/5">
                <Image
                  // onClick={() => setIsDropdownOpen((value) => !value)}
                  title={user?.name}
                  src={user?.image || "/images/svg/user.svg"}
                  width={32}
                  height={32}
                  alt={user?.name}
                  className="h-full w-full rounded-full object-cover object-center"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="left"
              className="-mr-10 mt-[4.5rem] w-60 bg-card"
            >
              <div className="px-4 py-2">
                <h3 className="text-lg">{user[0]?.name}</h3>
                <small>{user[0]?.email}</small>
              </div>
              <DropdownMenuSeparator />
              <div className="py-2">
                <ActiveLink
                  href={"/" + localeActive + "/profile"}
                  className="flex w-full cursor-pointer items-center gap-2 px-4 py-2 uppercase hover:text-primary"
                >
                  <User className="size-4" />
                  {localeActive === locales[1] ? (
                    <span>Profile</span>
                  ) : (
                    <span>профил</span>
                  )}
                </ActiveLink>
                <ActiveLink
                  href={"/" + localeActive + "/purchases"}
                  className="flex w-full cursor-pointer items-center gap-2 px-4 py-2 uppercase hover:text-primary"
                >
                  <CreditCard className="size-4" />
                  {localeActive === locales[1] ? (
                    <span>Purchases</span>
                  ) : (
                    <span>покупки</span>
                  )}
                </ActiveLink>
              </div>
              <DropdownMenuSeparator />
              <Button
                onClick={() => handleLogout({ locate: localeActive })}
                size="sm"
                className="w-full rounded-none"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out {localeActive}</span>
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Link title="Sign-In" href={"/" + localeActive + "/sign-in"}>
          <Button className="hidden sm:inline-block" size="sm">
            Sign-In
          </Button>
          <Button className="sm:hidden" size="icon_sm">
            <LogIn size={16} />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default UserAndAuthNav;
