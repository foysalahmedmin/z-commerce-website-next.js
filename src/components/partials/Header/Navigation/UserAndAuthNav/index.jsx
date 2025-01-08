"use client";

import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const UserAndAuthNav = ({ access, user }) => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div>
      {access?.value ? (
        <div className="relative">
          <div className="size-8 animate-pop cursor-pointer overflow-hidden rounded-full border border-primary bg-primary/5">
            <Image
              onClick={() => setIsOpen((value) => !value)}
              title={user?.name}
              src={user?.image || "/images/svg/user.svg"}
              width={32}
              height={32}
              alt={user?.name}
              className="size-full rounded-full object-cover object-center"
            />
          </div>
          <Dropdown
            className="left-auto right-0 min-w-80 origin-top-right -translate-x-0"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <div className="px-4 py-2">
              <div className="mb-4 text-center text-sm">{user?.email}</div>
              <div className="mb-4 text-center">
                <div
                  className="relative mx-auto inline-block size-20 rounded-full"
                  shape="icon"
                >
                  <Image
                    src={user?.image || "/images/svg/user.svg"}
                    className="size-20 rounded-full object-cover object-center text-accent"
                    alt="profile-image"
                    width={80}
                    height={80}
                  />
                  <Button
                    // onClick={() => setIsEditModalOpen(true)}
                    className="absolute bottom-0 right-0 cursor-pointer rounded-full border hover:bg-accent"
                    shape="icon"
                    size="sm"
                  >
                    <Edit size={16} />
                  </Button>
                </div>
                <h3 className="text-center font-bold text-title">
                  {user?.name}
                </h3>
                <small className="block text-center">{user?.email}</small>
              </div>
              <div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Sign out
                </Button>
              </div>
            </div>
          </Dropdown>
        </div>
      ) : (
        <Link title="Sign-In" href={"/user/sign-in"}>
          <Button asChild className="primary uppercase" size="sm">
            Sign-In
          </Button>
        </Link>
      )}
    </div>
  );
};

export default UserAndAuthNav;
