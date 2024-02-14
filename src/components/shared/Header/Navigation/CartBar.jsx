import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const CartBar = () => {
  return (
    <Button size="none" variant="none">
      <ShoppingCart className="h-6 w-6" />
    </Button>
  );
};

export default CartBar;
