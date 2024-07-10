import { Button } from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";

const CartButton = () => {
  return (
    <>
      <Button className="w-full rounded-t-none uppercase" variant="outline">
        Add to Cart <ShoppingCart />
      </Button>
    </>
  );
};

export default CartButton;
