"use client";

import { ActiveLink } from "@/components/ui/ActiveLink";
import { ShoppingBag } from "lucide-react";
import { useLocale } from "next-intl";

const Cart = ({ access, user }) => {
  const localeActive = useLocale();
  return (
    <>
      <ActiveLink
        href={"/" + localeActive + "/carts"}
        className="hover:text-primary"
      >
        <ShoppingBag />
      </ActiveLink>
    </>
  );
};

export default Cart;
