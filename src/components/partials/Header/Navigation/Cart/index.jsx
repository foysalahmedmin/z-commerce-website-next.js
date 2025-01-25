"use client";

import CartBar from "@/components/partials/CartBar";
// import { ActiveLink } from "@/components/ui/ActiveLink";
import { Button } from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

const Cart = ({ access, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <Button
        onClick={() => setIsOpen(true)}
        href={"/cart"}
        className="hover:text-primary"
        variant="none"
        shape="none"
        size="none"
      >
        <ShoppingBag />
      </Button>
      <CartBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Cart;
