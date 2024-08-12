"use client";

import { ActiveLink } from "@/components/ui/ActiveLink";
import { ShoppingBag } from "lucide-react";

const Cart = ({ access, user }) => {
  return (
    <>
      <ActiveLink href={"/carts"} className="hover:text-primary">
        <ShoppingBag />
      </ActiveLink>
    </>
  );
};

export default Cart;
